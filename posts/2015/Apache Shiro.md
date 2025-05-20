---

Created at: 2019-04-01
Last updated at: 2019-05-05
tags: 
  - ssm整合
  - Apache-Shiro
  - xml

---

# Apache Shiro


## Apache Shiro

[shiro原理及其运行流程介绍](https://blog.csdn.net/mine_song/article/details/61616259)

[shiro框架](https://www.cnblogs.com/maofa/p/6407102.html)
Apache Shiro™是一个功能强大且易于使用的Java安全框架，可执行身份验证，授权，加密和会话管理。借助Shiro易于理解的API，您可以快速轻松地保护任何应用程序 - 从最小的移动应用程序到最大的Web和企业应用程序。
![[../_resources/unknown_filename-ea7cde39.png]]
![[../_resources/unknown_filename-84be6693.png]]

### 使用用户的登录信息创建令牌

Shiro的核心部分是SecurityManager，它负责安全认证与授权。
SecurityUtils对象，本质上就是一个工厂类似Spring中的ApplicationContext。
Subject是你目前所设计的需要通过Shiro保护的项目的一个抽象概念。
token可以理解为用户令牌，登录的过程被抽象为Shiro验证令牌是否具有合法身份以及相关权限。
通过令牌（token）与项目（subject）的登陆（login）关系，Shiro保证了项目整体的安全。

    UsernamePasswordToken token = new UsernamePasswordToken(username, password);


##### 执行登陆动作

    SecurityUtils.setSecurityManager(securityManager); // 注入SecurityManager
    Subject subject = SecurityUtils.getSubject(); // 获取Subject单例对象
    subject.login(token); // 登陆


##### 判断用户及角色

Shiro本身无法知道所持有令牌的用户是否合法，因为除了项目的设计人员恐怕谁都无法得知。因此Realm是整个框架中为数不多的必须由设计者自行实现的模块，Shiro提供了多种实现的途径，最常见也最重要的一种实现方式——数据库查询。
Shiro对于安全用户的界定：和大多数操作系统一样。用户具有角色和权限两种最基本的属性。
AuthenticationInfo代表了用户的角色信息集合
AuthorizationInfo代表了角色的权限信息集合
当设计人员对项目中的某一个url路径设置了只允许某个角色或具有某种权限才可以访问的控制约束，Shiro就可以通过以上两个对象来判断。

### 实现Realm

缓存机制：
Ehcache是很多Java项目中使用的缓存框架，Hibernate就是其中之一。它的本质就是将原本只能存储在内存中的数据通过算法保存到硬盘上，再根据需求依次取出。你可以把Ehcache理解为一个Map<String,Object>对象，通过put保存对象，再通过get取回对象。
ehcache.xml文件的基础配置:
timeToLiveSeconds为缓存的最大生存时间，timeToIdleSeconds为缓存的最大空闲时间，当eternal为false时ttl和tti才可以生效。

    <?xml version="1.0" encoding="UTF-8"?>
        <ehcache name="shirocache">
            <diskStore path="java.io.tmpdir" />
            <cache name="passwordRetryCache"
                   maxEntriesLocalHeap="2000"
                   eternal="false"
                   timeToIdleSeconds="1800"
                   timeToLiveSeconds="0"
                   overflowToDisk="false"
                   statistics="true">
            </cache>
        </ehcache>


##### 散列算法和加密算法

md5是本文会使用的散列算法。散列和加密本质上都是将一个Object变成一串无意义的字符串，不同点是经过散列的对象无法复原，是一个单向的过程。例如，对密码的加密通常就是使用散列算法，因此用户如果忘记密码只能通过修改而无法获取原始密码。但是对于信息的加密则是正规的加密算法，经过加密的信息是可以通过秘钥解密和还原。

##### 用户注册

加盐，存储在数据库中的密码是根据用户注册时填写的密码所产生的一个新字符串就可以了。经过散列后的密码替换用户注册时的密码，然后将User保存进数据库。剩下的工作就丢给UserService来处理。
散列算法是无法复原的，需要对用户密码再次以相同的算法散列运算一次，再同数据库中保存的字符串比较。

    public class PasswordHelper {
        private RandomNumberGenerator randomNumberGenerator = new SecureRandomNumberGenerator();
        private String algorithmName = "md5";
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


##### 匹配

CredentialsMatcher是一个接口，功能就是用来匹配用户登录使用的令牌和数据库中保存的用户信息是否匹配。
这个接口的一个实现类：HashedCredentialsMatcher
仅仅是增加了一个不允许连续错误登录的判断。真正匹配的过程还是交给它的直接父类去完成。连续登录错误的判断依靠Ehcache缓存来实现。显然match返回true为匹配成功。

    public class RetryLimitHashedCredentialsMatcher extends HashedCredentialsMatcher {
        // 声明一个缓存接口，这个接口是Shiro缓存管理的一部分，它的具体实现可以通过外部容器注入
        private Cache<String, AtomicInteger> passwordRetryCache;
    
        public RetryLimitHashedCredentialsMatcher(CacheManager cacheManager) {
            passwordRetryCache = cacheManager.getCache("passwordRetryCache");
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
            if (retryCount.incrementAndGet() > 5) {
                throw new ExcessiveAttemptsException();
            }
            boolean match = super.doCredentialsMatch(token, info);
            if (match) {
                passwordRetryCache.remove(username);
            }
            return match;
        }
    }


##### 获取用户的角色和权限信息

根据Shiro的设计思路，用户与角色之前的关系为多对多，角色与权限之间的关系也是多对多。
在数据库中需要因此建立5张表，分别是用户表（存储用户名，密码，盐等）、角色表（角色名称，相关描述等）、权限表（权限名称，相关描述等）、用户-角色对应中间表（以用户ID和角色ID作为联合主键）、角色-权限对应中间表（以角色ID和权限ID作为联合主键）。
总之结论就是，Shiro需要根据用户名和密码首先判断登录的用户是否合法，然后再对合法用户授权。而这个过程就是Realm的实现过程。

    public class UserRealm extends AuthorizingRealm {
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
            Set<Role> roles = userService.findRoles(username);
            Set<String> roleNames = new HashSet<String>();
            for (Role role : roles) {
                roleNames.add(role.getRole());
            }
            // 将角色名称提供给info        
            authorizationInfo.setRoles(roleNames);
            // 根据用户名查询当前用户权限
            Set<Permission> permissions = userService.findPermissions(username);
            Set<String> permissionNames = new HashSet<String>();
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


##### 会话

用户的一次登录即为一次会话，Shiro也可以代替Tomcat等容器管理会话。目的是当用户停留在某个页面长时间无动作的时候，再次对任何链接的访问都会被重定向到登录页面要求重新输入用户名和密码而不需要程序员在Servlet中不停的判断Session中是否包含User对象。启用Shiro会话管理的另一个用途是可以针对不同的模块采取不同的会话处理。当然，Shiro也可以使用容器提供的Session实现。

##### SpringMVC集成

配置前端过滤器
Filter是过滤器，interceptor是拦截器。前者基于回调函数实现，必须依靠容器支持。因为需要容器装配好整条FilterChain并逐个调用。后者基于代理实现，属于AOP的范畴。
DelegatingFilterProxy的功能是通知Spring将所有的Filter交给ShiroFilter管理。

###### web.xml

    <?xml version="1.0" encoding="UTF-8"?><web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns="http://java.sun.com/xml/ns/javaee"
        xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
        version="3.0">
        <display-name>Shiro_Project</display-name>
        <welcome-file-list>
            <welcome-file>index.jsp</welcome-file>
        </welcome-file-list>
        <servlet>
            <servlet-name>SpringMVC</servlet-name>
            <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
            <init-param>
                <param-name>contextConfigLocation</param-name>
                <param-value>classpath:springmvc.xml</param-value>
            </init-param>
            <load-on-startup>1</load-on-startup>
            <async-supported>true</async-supported>
        </servlet>
        <servlet-mapping>
            <servlet-name>SpringMVC</servlet-name>
            <url-pattern>/</url-pattern>
        </servlet-mapping>
        <listener>
            <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
        </listener>
        <listener>
            <listener-class>org.springframework.web.util.Log4jConfigListener</listener-class>
        </listener>
        <context-param>
            <param-name>contextConfigLocation</param-name>
            <!-- 将Shiro的配置文件交给Spring监听器初始化 -->
            <param-value>classpath:spring.xml,classpath:spring-shiro-web.xml</param-value>
        </context-param>
        <context-param>
            <param-name>log4jConfigLoaction</param-name>
            <param-value>classpath:log4j.properties</param-value>
        </context-param>
        <!-- shiro配置 开始 -->
        <filter>
            <filter-name>shiroFilter</filter-name>
            <filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>
            <async-supported>true</async-supported>
            <init-param>
                <param-name>targetFilterLifecycle</param-name>
                <param-value>true</param-value>
            </init-param>
        </filter>
        <filter-mapping>
            <filter-name>shiroFilter</filter-name>
            <url-pattern>/*</url-pattern>
        </filter-mapping>
        <!-- shiro配置 结束 -->
        </web-app>


###### 在classpath路径下配置spring-shiro-web.xml文件

filterChainDefinitions过滤器中对于路径的配置是有顺序的，当找到匹配的条目之后容器不会再继续寻找。因此带有通配符的路径要放在后面。三条配置的含义是： /authc/admin需要用户有admin权限、/authc/**用户必须登录才能访问、/**其他所有路径任何人都可以访问。


    <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:p="http://www.springframework.org/schema/p"
        xmlns:context="http://www.springframework.org/schema/context"
        xmlns:mvc="http://www.springframework.org/schema/mvc"
        xsi:schemaLocation="http://www.springframework.org/schema/beans    
                            http://www.springframework.org/schema/beans/spring-beans-3.1.xsd    
                            http://www.springframework.org/schema/context    
                            http://www.springframework.org/schema/context/spring-context-3.1.xsd    
                            http://www.springframework.org/schema/mvc    
                            http://www.springframework.org/schema/mvc/spring-mvc-4.0.xsd">
    
        <!-- 缓存管理器 使用Ehcache实现 -->
        <bean >
            <property name="cacheManagerConfigFile" value="classpath:ehcache.xml" />
        </bean>
    
        <!-- 凭证匹配器 -->
        <bean >
            <constructor-arg ref="cacheManager" />
            <property name="hashAlgorithmName" value="md5" />
            <property name="hashIterations" value="2" />
            <property name="storedCredentialsHexEncoded" value="true" />
        </bean>
    
        <!-- Realm实现 -->
        <bean >
            <property name="credentialsMatcher" ref="credentialsMatcher" />
        </bean>
    
        <!-- 安全管理器 -->
        <bean >
            <property name="realm" ref="userRealm" />
        </bean>
    
        <!-- Shiro的Web过滤器 -->
        <bean >
            <property name="securityManager" ref="securityManager" />
            <property name="loginUrl" value="/" />
            <property name="unauthorizedUrl" value="/" />
            <property name="filterChainDefinitions">
                <value>
                    /authc/admin = roles[admin]
                    /authc/** = authc
                    /** = anon
                </value>
            </property>
        </bean>
    
        <bean /></beans>


###### 编写登录代码

    @Controller
    public class LoginController {
        @Autowired
        private UserService userService;
    
        @RequestMapping("login")
        public ModelAndView login(@RequestParam("username") String username, @RequestParam("password") String password) {
            UsernamePasswordToken token = new UsernamePasswordToken(username, password);
            Subject subject = SecurityUtils.getSubject();
            try {
                subject.login(token);
            } catch (IncorrectCredentialsException ice) {
                // 捕获密码错误异常
                ModelAndView mv = new ModelAndView("error");
                mv.addObject("message", "password error!");
                return mv;
            } catch (UnknownAccountException uae) {
                // 捕获未知用户名异常
                ModelAndView mv = new ModelAndView("error");
                mv.addObject("message", "username error!");
                return mv;
            } catch (ExcessiveAttemptsException eae) {
                // 捕获错误登录过多的异常
                ModelAndView mv = new ModelAndView("error");
                mv.addObject("message", "times error");
                return mv;
            }
            User user = userService.findByUsername(username);
            subject.getSession().setAttribute("user", user);
            return new ModelAndView("success");
        }
    }


登录完成以后，当前用户信息被保存进Session。这个Session是通过Shiro管理的会话对象，要获取依然必须通过Shiro。
传统的Session中不存在User对象。

    @Controller
    @RequestMapping("authc")
    public class AuthcController {
        // /authc/** = authc 任何通过表单登录的用户都可以访问
        @RequestMapping("anyuser")
        public ModelAndView anyuser() {
            Subject subject = SecurityUtils.getSubject();
            User user = (User) subject.getSession().getAttribute("user");
            System.out.println(user);
            return new ModelAndView("inner");
        }
    
        // /authc/admin = user[admin] 只有具备admin角色的用户才可以访问，否则请求将被重定向至登录界面
        @RequestMapping("admin")
        public ModelAndView admin() {
            Subject subject = SecurityUtils.getSubject();
            User user = (User) subject.getSession().getAttribute("user");
            System.out.println(user);
            return new ModelAndView("inner");
        }
    }




