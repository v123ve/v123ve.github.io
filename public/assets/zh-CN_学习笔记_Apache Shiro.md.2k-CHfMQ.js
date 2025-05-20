import{_ as t,c as n,a3 as r,o as a}from"./chunks/framework.BaR4VHXY.js";const m=JSON.parse('{"title":"Apache Shiro","description":"","frontmatter":{"Created at":"2019-04-01T00:00:00.000Z","Last updated at":"2019-05-05T00:00:00.000Z","tags":["ssm整合","Apache-Shiro","xml"]},"headers":[],"relativePath":"zh-CN/学习笔记/Apache Shiro.md","filePath":"zh-CN/学习笔记/Apache Shiro.md","lastUpdated":null}'),o={name:"zh-CN/学习笔记/Apache Shiro.md"};function i(s,e,l,u,c,p){return a(),n("div",null,e[0]||(e[0]=[r(`<h1 id="apache-shiro" tabindex="-1">Apache Shiro <a class="header-anchor" href="#apache-shiro" aria-label="Permalink to &quot;Apache Shiro&quot;">​</a></h1><h2 id="apache-shiro-1" tabindex="-1">Apache Shiro <a class="header-anchor" href="#apache-shiro-1" aria-label="Permalink to &quot;Apache Shiro&quot;">​</a></h2><p><a href="https://blog.csdn.net/mine_song/article/details/61616259" target="_blank" rel="noreferrer">shiro原理及其运行流程介绍</a></p><p><a href="https://www.cnblogs.com/maofa/p/6407102.html" target="_blank" rel="noreferrer">shiro框架</a> Apache Shiro™是一个功能强大且易于使用的Java安全框架，可执行身份验证，授权，加密和会话管理。借助Shiro易于理解的API，您可以快速轻松地保护任何应用程序 - 从最小的移动应用程序到最大的Web和企业应用程序。 ![[../_resources/unknown_filename-ea7cde39.png]] ![[../_resources/unknown_filename-84be6693.png]]</p><h3 id="使用用户的登录信息创建令牌" tabindex="-1">使用用户的登录信息创建令牌 <a class="header-anchor" href="#使用用户的登录信息创建令牌" aria-label="Permalink to &quot;使用用户的登录信息创建令牌&quot;">​</a></h3><p>Shiro的核心部分是SecurityManager，它负责安全认证与授权。 SecurityUtils对象，本质上就是一个工厂类似Spring中的ApplicationContext。 Subject是你目前所设计的需要通过Shiro保护的项目的一个抽象概念。 token可以理解为用户令牌，登录的过程被抽象为Shiro验证令牌是否具有合法身份以及相关权限。 通过令牌（token）与项目（subject）的登陆（login）关系，Shiro保证了项目整体的安全。</p><pre><code>UsernamePasswordToken token = new UsernamePasswordToken(username, password);
</code></pre><h5 id="执行登陆动作" tabindex="-1">执行登陆动作 <a class="header-anchor" href="#执行登陆动作" aria-label="Permalink to &quot;执行登陆动作&quot;">​</a></h5><pre><code>SecurityUtils.setSecurityManager(securityManager); // 注入SecurityManager
Subject subject = SecurityUtils.getSubject(); // 获取Subject单例对象
subject.login(token); // 登陆
</code></pre><h5 id="判断用户及角色" tabindex="-1">判断用户及角色 <a class="header-anchor" href="#判断用户及角色" aria-label="Permalink to &quot;判断用户及角色&quot;">​</a></h5><p>Shiro本身无法知道所持有令牌的用户是否合法，因为除了项目的设计人员恐怕谁都无法得知。因此Realm是整个框架中为数不多的必须由设计者自行实现的模块，Shiro提供了多种实现的途径，最常见也最重要的一种实现方式——数据库查询。 Shiro对于安全用户的界定：和大多数操作系统一样。用户具有角色和权限两种最基本的属性。 AuthenticationInfo代表了用户的角色信息集合 AuthorizationInfo代表了角色的权限信息集合 当设计人员对项目中的某一个url路径设置了只允许某个角色或具有某种权限才可以访问的控制约束，Shiro就可以通过以上两个对象来判断。</p><h3 id="实现realm" tabindex="-1">实现Realm <a class="header-anchor" href="#实现realm" aria-label="Permalink to &quot;实现Realm&quot;">​</a></h3><p>缓存机制： Ehcache是很多Java项目中使用的缓存框架，Hibernate就是其中之一。它的本质就是将原本只能存储在内存中的数据通过算法保存到硬盘上，再根据需求依次取出。你可以把Ehcache理解为一个Map&lt;String,Object&gt;对象，通过put保存对象，再通过get取回对象。 ehcache.xml文件的基础配置: timeToLiveSeconds为缓存的最大生存时间，timeToIdleSeconds为缓存的最大空闲时间，当eternal为false时ttl和tti才可以生效。</p><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
    &lt;ehcache name=&quot;shirocache&quot;&gt;
        &lt;diskStore path=&quot;java.io.tmpdir&quot; /&gt;
        &lt;cache name=&quot;passwordRetryCache&quot;
               maxEntriesLocalHeap=&quot;2000&quot;
               eternal=&quot;false&quot;
               timeToIdleSeconds=&quot;1800&quot;
               timeToLiveSeconds=&quot;0&quot;
               overflowToDisk=&quot;false&quot;
               statistics=&quot;true&quot;&gt;
        &lt;/cache&gt;
    &lt;/ehcache&gt;
</code></pre><h5 id="散列算法和加密算法" tabindex="-1">散列算法和加密算法 <a class="header-anchor" href="#散列算法和加密算法" aria-label="Permalink to &quot;散列算法和加密算法&quot;">​</a></h5><p>md5是本文会使用的散列算法。散列和加密本质上都是将一个Object变成一串无意义的字符串，不同点是经过散列的对象无法复原，是一个单向的过程。例如，对密码的加密通常就是使用散列算法，因此用户如果忘记密码只能通过修改而无法获取原始密码。但是对于信息的加密则是正规的加密算法，经过加密的信息是可以通过秘钥解密和还原。</p><h5 id="用户注册" tabindex="-1">用户注册 <a class="header-anchor" href="#用户注册" aria-label="Permalink to &quot;用户注册&quot;">​</a></h5><p>加盐，存储在数据库中的密码是根据用户注册时填写的密码所产生的一个新字符串就可以了。经过散列后的密码替换用户注册时的密码，然后将User保存进数据库。剩下的工作就丢给UserService来处理。 散列算法是无法复原的，需要对用户密码再次以相同的算法散列运算一次，再同数据库中保存的字符串比较。</p><pre><code>public class PasswordHelper {
    private RandomNumberGenerator randomNumberGenerator = new SecureRandomNumberGenerator();
    private String algorithmName = &quot;md5&quot;;
    private final int hashIterations = 2;
    
    public void encryptPassword(User user) {
        // User对象包含最基本的字段Username和Password        
        user.setSalt(randomNumberGenerator.nextBytes().toHex());
        // 将用户的注册密码经过散列算法替换成一个不可逆的新密码保存进数据，散列过程使用了盐
        String newPassword = new SimpleHash(algorithmName, user.getPassword(),
        ByteSource.Util.bytes(user.getCredentialsSalt()), hashIterations).toHex();
        user.setPassword(newPassword);
    }
}
</code></pre><h5 id="匹配" tabindex="-1">匹配 <a class="header-anchor" href="#匹配" aria-label="Permalink to &quot;匹配&quot;">​</a></h5><p>CredentialsMatcher是一个接口，功能就是用来匹配用户登录使用的令牌和数据库中保存的用户信息是否匹配。 这个接口的一个实现类：HashedCredentialsMatcher 仅仅是增加了一个不允许连续错误登录的判断。真正匹配的过程还是交给它的直接父类去完成。连续登录错误的判断依靠Ehcache缓存来实现。显然match返回true为匹配成功。</p><pre><code>public class RetryLimitHashedCredentialsMatcher extends HashedCredentialsMatcher {
    // 声明一个缓存接口，这个接口是Shiro缓存管理的一部分，它的具体实现可以通过外部容器注入
    private Cache&lt;String, AtomicInteger&gt; passwordRetryCache;

    public RetryLimitHashedCredentialsMatcher(CacheManager cacheManager) {
        passwordRetryCache = cacheManager.getCache(&quot;passwordRetryCache&quot;);
    }

    @Override
    public boolean doCredentialsMatch(AuthenticationToken token, AuthenticationInfo info) {
        String username = (String) token.getPrincipal();
        AtomicInteger retryCount = passwordRetryCache.get(username);
        if (retryCount == null) {
            retryCount = new AtomicInteger(0);
            passwordRetryCache.put(username, retryCount);
        }
        // 自定义一个验证过程：当用户连续输入密码错误5次以上禁止用户登录一段时间
        if (retryCount.incrementAndGet() &gt; 5) {
            throw new ExcessiveAttemptsException();
        }
        boolean match = super.doCredentialsMatch(token, info);
        if (match) {
            passwordRetryCache.remove(username);
        }
        return match;
    }
}
</code></pre><h5 id="获取用户的角色和权限信息" tabindex="-1">获取用户的角色和权限信息 <a class="header-anchor" href="#获取用户的角色和权限信息" aria-label="Permalink to &quot;获取用户的角色和权限信息&quot;">​</a></h5><p>根据Shiro的设计思路，用户与角色之前的关系为多对多，角色与权限之间的关系也是多对多。 在数据库中需要因此建立5张表，分别是用户表（存储用户名，密码，盐等）、角色表（角色名称，相关描述等）、权限表（权限名称，相关描述等）、用户-角色对应中间表（以用户ID和角色ID作为联合主键）、角色-权限对应中间表（以角色ID和权限ID作为联合主键）。 总之结论就是，Shiro需要根据用户名和密码首先判断登录的用户是否合法，然后再对合法用户授权。而这个过程就是Realm的实现过程。</p><pre><code>public class UserRealm extends AuthorizingRealm {
    // 用户对应的角色信息与权限信息都保存在数据库中，通过UserService获取数据
    private UserService userService = new UserServiceImpl();

    /**
     * 提供用户信息返回权限信息
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        String username = (String) principals.getPrimaryPrincipal();
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        // 根据用户名查询当前用户拥有的角色
        Set&lt;Role&gt; roles = userService.findRoles(username);
        Set&lt;String&gt; roleNames = new HashSet&lt;String&gt;();
        for (Role role : roles) {
            roleNames.add(role.getRole());
        }
        // 将角色名称提供给info        
        authorizationInfo.setRoles(roleNames);
        // 根据用户名查询当前用户权限
        Set&lt;Permission&gt; permissions = userService.findPermissions(username);
        Set&lt;String&gt; permissionNames = new HashSet&lt;String&gt;();
        for (Permission permission : permissions) {
            permissionNames.add(permission.getPermission());
        }
        // 将权限名称提供给info        
        authorizationInfo.setStringPermissions(permissionNames);
        return authorizationInfo;
    }

    /**
     * 提供账户信息返回认证信息
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        String username = (String) token.getPrincipal();
        User user = userService.findByUsername(username);
        if (user == null) {
            // 用户名不存在抛出异常
            throw new UnknownAccountException();
        }
        if (user.getLocked() == 0) {
            // 用户被管理员锁定抛出异常
            throw new LockedAccountException();
        }
        SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(user.getUsername(),
        user.getPassword(), ByteSource.Util.bytes(user.getCredentialsSalt()), getName());
        return authenticationInfo;
    }
}
</code></pre><h5 id="会话" tabindex="-1">会话 <a class="header-anchor" href="#会话" aria-label="Permalink to &quot;会话&quot;">​</a></h5><p>用户的一次登录即为一次会话，Shiro也可以代替Tomcat等容器管理会话。目的是当用户停留在某个页面长时间无动作的时候，再次对任何链接的访问都会被重定向到登录页面要求重新输入用户名和密码而不需要程序员在Servlet中不停的判断Session中是否包含User对象。启用Shiro会话管理的另一个用途是可以针对不同的模块采取不同的会话处理。当然，Shiro也可以使用容器提供的Session实现。</p><h5 id="springmvc集成" tabindex="-1">SpringMVC集成 <a class="header-anchor" href="#springmvc集成" aria-label="Permalink to &quot;SpringMVC集成&quot;">​</a></h5><p>配置前端过滤器 Filter是过滤器，interceptor是拦截器。前者基于回调函数实现，必须依靠容器支持。因为需要容器装配好整条FilterChain并逐个调用。后者基于代理实现，属于AOP的范畴。 DelegatingFilterProxy的功能是通知Spring将所有的Filter交给ShiroFilter管理。</p><h6 id="web-xml" tabindex="-1">web.xml <a class="header-anchor" href="#web-xml" aria-label="Permalink to &quot;web.xml&quot;">​</a></h6><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;&lt;web-app xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns=&quot;http://java.sun.com/xml/ns/javaee&quot;
    xsi:schemaLocation=&quot;http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd&quot;
    version=&quot;3.0&quot;&gt;
    &lt;display-name&gt;Shiro_Project&lt;/display-name&gt;
    &lt;welcome-file-list&gt;
        &lt;welcome-file&gt;index.jsp&lt;/welcome-file&gt;
    &lt;/welcome-file-list&gt;
    &lt;servlet&gt;
        &lt;servlet-name&gt;SpringMVC&lt;/servlet-name&gt;
        &lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;
        &lt;init-param&gt;
            &lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
            &lt;param-value&gt;classpath:springmvc.xml&lt;/param-value&gt;
        &lt;/init-param&gt;
        &lt;load-on-startup&gt;1&lt;/load-on-startup&gt;
        &lt;async-supported&gt;true&lt;/async-supported&gt;
    &lt;/servlet&gt;
    &lt;servlet-mapping&gt;
        &lt;servlet-name&gt;SpringMVC&lt;/servlet-name&gt;
        &lt;url-pattern&gt;/&lt;/url-pattern&gt;
    &lt;/servlet-mapping&gt;
    &lt;listener&gt;
        &lt;listener-class&gt;org.springframework.web.context.ContextLoaderListener&lt;/listener-class&gt;
    &lt;/listener&gt;
    &lt;listener&gt;
        &lt;listener-class&gt;org.springframework.web.util.Log4jConfigListener&lt;/listener-class&gt;
    &lt;/listener&gt;
    &lt;context-param&gt;
        &lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
        &lt;!-- 将Shiro的配置文件交给Spring监听器初始化 --&gt;
        &lt;param-value&gt;classpath:spring.xml,classpath:spring-shiro-web.xml&lt;/param-value&gt;
    &lt;/context-param&gt;
    &lt;context-param&gt;
        &lt;param-name&gt;log4jConfigLoaction&lt;/param-name&gt;
        &lt;param-value&gt;classpath:log4j.properties&lt;/param-value&gt;
    &lt;/context-param&gt;
    &lt;!-- shiro配置 开始 --&gt;
    &lt;filter&gt;
        &lt;filter-name&gt;shiroFilter&lt;/filter-name&gt;
        &lt;filter-class&gt;org.springframework.web.filter.DelegatingFilterProxy&lt;/filter-class&gt;
        &lt;async-supported&gt;true&lt;/async-supported&gt;
        &lt;init-param&gt;
            &lt;param-name&gt;targetFilterLifecycle&lt;/param-name&gt;
            &lt;param-value&gt;true&lt;/param-value&gt;
        &lt;/init-param&gt;
    &lt;/filter&gt;
    &lt;filter-mapping&gt;
        &lt;filter-name&gt;shiroFilter&lt;/filter-name&gt;
        &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
    &lt;/filter-mapping&gt;
    &lt;!-- shiro配置 结束 --&gt;
    &lt;/web-app&gt;
</code></pre><h6 id="在classpath路径下配置spring-shiro-web-xml文件" tabindex="-1">在classpath路径下配置spring-shiro-web.xml文件 <a class="header-anchor" href="#在classpath路径下配置spring-shiro-web-xml文件" aria-label="Permalink to &quot;在classpath路径下配置spring-shiro-web.xml文件&quot;">​</a></h6><p>filterChainDefinitions过滤器中对于路径的配置是有顺序的，当找到匹配的条目之后容器不会再继续寻找。因此带有通配符的路径要放在后面。三条配置的含义是： /authc/admin需要用户有admin权限、/authc/**用户必须登录才能访问、/**其他所有路径任何人都可以访问。</p><pre><code>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
    xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
    xmlns:mvc=&quot;http://www.springframework.org/schema/mvc&quot;
    xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans    
                        http://www.springframework.org/schema/beans/spring-beans-3.1.xsd    
                        http://www.springframework.org/schema/context    
                        http://www.springframework.org/schema/context/spring-context-3.1.xsd    
                        http://www.springframework.org/schema/mvc    
                        http://www.springframework.org/schema/mvc/spring-mvc-4.0.xsd&quot;&gt;

    &lt;!-- 缓存管理器 使用Ehcache实现 --&gt;
    &lt;bean &gt;
        &lt;property name=&quot;cacheManagerConfigFile&quot; value=&quot;classpath:ehcache.xml&quot; /&gt;
    &lt;/bean&gt;

    &lt;!-- 凭证匹配器 --&gt;
    &lt;bean &gt;
        &lt;constructor-arg ref=&quot;cacheManager&quot; /&gt;
        &lt;property name=&quot;hashAlgorithmName&quot; value=&quot;md5&quot; /&gt;
        &lt;property name=&quot;hashIterations&quot; value=&quot;2&quot; /&gt;
        &lt;property name=&quot;storedCredentialsHexEncoded&quot; value=&quot;true&quot; /&gt;
    &lt;/bean&gt;

    &lt;!-- Realm实现 --&gt;
    &lt;bean &gt;
        &lt;property name=&quot;credentialsMatcher&quot; ref=&quot;credentialsMatcher&quot; /&gt;
    &lt;/bean&gt;

    &lt;!-- 安全管理器 --&gt;
    &lt;bean &gt;
        &lt;property name=&quot;realm&quot; ref=&quot;userRealm&quot; /&gt;
    &lt;/bean&gt;

    &lt;!-- Shiro的Web过滤器 --&gt;
    &lt;bean &gt;
        &lt;property name=&quot;securityManager&quot; ref=&quot;securityManager&quot; /&gt;
        &lt;property name=&quot;loginUrl&quot; value=&quot;/&quot; /&gt;
        &lt;property name=&quot;unauthorizedUrl&quot; value=&quot;/&quot; /&gt;
        &lt;property name=&quot;filterChainDefinitions&quot;&gt;
            &lt;value&gt;
                /authc/admin = roles[admin]
                /authc/** = authc
                /** = anon
            &lt;/value&gt;
        &lt;/property&gt;
    &lt;/bean&gt;

    &lt;bean /&gt;&lt;/beans&gt;
</code></pre><h6 id="编写登录代码" tabindex="-1">编写登录代码 <a class="header-anchor" href="#编写登录代码" aria-label="Permalink to &quot;编写登录代码&quot;">​</a></h6><pre><code>@Controller
public class LoginController {
    @Autowired
    private UserService userService;

    @RequestMapping(&quot;login&quot;)
    public ModelAndView login(@RequestParam(&quot;username&quot;) String username, @RequestParam(&quot;password&quot;) String password) {
        UsernamePasswordToken token = new UsernamePasswordToken(username, password);
        Subject subject = SecurityUtils.getSubject();
        try {
            subject.login(token);
        } catch (IncorrectCredentialsException ice) {
            // 捕获密码错误异常
            ModelAndView mv = new ModelAndView(&quot;error&quot;);
            mv.addObject(&quot;message&quot;, &quot;password error!&quot;);
            return mv;
        } catch (UnknownAccountException uae) {
            // 捕获未知用户名异常
            ModelAndView mv = new ModelAndView(&quot;error&quot;);
            mv.addObject(&quot;message&quot;, &quot;username error!&quot;);
            return mv;
        } catch (ExcessiveAttemptsException eae) {
            // 捕获错误登录过多的异常
            ModelAndView mv = new ModelAndView(&quot;error&quot;);
            mv.addObject(&quot;message&quot;, &quot;times error&quot;);
            return mv;
        }
        User user = userService.findByUsername(username);
        subject.getSession().setAttribute(&quot;user&quot;, user);
        return new ModelAndView(&quot;success&quot;);
    }
}
</code></pre><p>登录完成以后，当前用户信息被保存进Session。这个Session是通过Shiro管理的会话对象，要获取依然必须通过Shiro。 传统的Session中不存在User对象。</p><pre><code>@Controller
@RequestMapping(&quot;authc&quot;)
public class AuthcController {
    // /authc/** = authc 任何通过表单登录的用户都可以访问
    @RequestMapping(&quot;anyuser&quot;)
    public ModelAndView anyuser() {
        Subject subject = SecurityUtils.getSubject();
        User user = (User) subject.getSession().getAttribute(&quot;user&quot;);
        System.out.println(user);
        return new ModelAndView(&quot;inner&quot;);
    }

    // /authc/admin = user[admin] 只有具备admin角色的用户才可以访问，否则请求将被重定向至登录界面
    @RequestMapping(&quot;admin&quot;)
    public ModelAndView admin() {
        Subject subject = SecurityUtils.getSubject();
        User user = (User) subject.getSession().getAttribute(&quot;user&quot;);
        System.out.println(user);
        return new ModelAndView(&quot;inner&quot;);
    }
}
</code></pre>`,38)]))}const g=t(o,[["render",i]]);export{m as __pageData,g as default};
