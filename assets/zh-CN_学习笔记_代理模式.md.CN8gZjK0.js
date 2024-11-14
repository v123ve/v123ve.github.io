import{_ as n,c as e,a3 as o,o as a}from"./chunks/framework.BaR4VHXY.js";const s=JSON.parse('{"title":"代理模式","description":"","frontmatter":{"Created at":"2019-03-25T00:00:00.000Z","Last updated at":"2019-03-30T00:00:00.000Z","tags":["spring","AOP","代理"]},"headers":[],"relativePath":"zh-CN/学习笔记/代理模式.md","filePath":"zh-CN/学习笔记/代理模式.md","lastUpdated":null}'),r={name:"zh-CN/学习笔记/代理模式.md"};function i(u,t,p,l,g,c){return a(),e("div",null,t[0]||(t[0]=[o(`<h1 id="代理模式" tabindex="-1">代理模式 <a class="header-anchor" href="#代理模式" aria-label="Permalink to &quot;代理模式&quot;">​</a></h1><h2 id="代理模式-1" tabindex="-1">代理模式 <a class="header-anchor" href="#代理模式-1" aria-label="Permalink to &quot;代理模式&quot;">​</a></h2><p>在一些情况下，客户不想或者不能直接引用一个目标对象，代理对象可以在客户和目标对象之间起到中介的作用。一般情况下代理对象和目标对象实现相同接口。</p><h3 id="静态代理" tabindex="-1">静态代理 <a class="header-anchor" href="#静态代理" aria-label="Permalink to &quot;静态代理&quot;">​</a></h3><h4 id="继承的方式" tabindex="-1">继承的方式 <a class="header-anchor" href="#继承的方式" aria-label="Permalink to &quot;继承的方式&quot;">​</a></h4><pre><code>public class StaticProxyExtends extends PhoneBizimpl {
    LogUtil log = new LogUtil();
    @Override
    public void buyPhone(int num) {
        super.buyPhone(num);
        log.log(&quot;buyPhone&quot;);
    }
}
</code></pre><h4 id="接口的方式" tabindex="-1">接口的方式 <a class="header-anchor" href="#接口的方式" aria-label="Permalink to &quot;接口的方式&quot;">​</a></h4><pre><code>public class StaticProxyInterface implements PhoneBiz {
    PhoneBizimpl pb = new PhoneBizimpl();
    LogUtil log = new LogUtil();
    @Override
    public void buyPhone(int num) {
        pb.buyPhone(num);
        log.log(&quot;buyPhone&quot;);
    }
    @Override
    public void salePhone(int num) {
        pb.salePhone(num);
        log.log(&quot;salePhone&quot;);
    }
}
</code></pre><h3 id="动态代理" tabindex="-1">动态代理 <a class="header-anchor" href="#动态代理" aria-label="Permalink to &quot;动态代理&quot;">​</a></h3><h4 id="基于接口的jdk动态代理invocationhandler" tabindex="-1">基于接口的jdk动态代理InvocationHandler <a class="header-anchor" href="#基于接口的jdk动态代理invocationhandler" aria-label="Permalink to &quot;基于接口的jdk动态代理InvocationHandler&quot;">​</a></h4><p>jdk的动态代理必须基于接口，没有接口的类无法使用jdk动态代理。</p><pre><code>public class DynamicProxyJDK implements InvocationHandler{
    LogUtil log= new LogUtil();
    private Object obj;
    /**
     * 传入一个对象，返回一个代理对象
     * @param target
     * @return
     */
    public  Object bind(Object target) {
        obj=target;
        Object proxy = 
Proxy.newProxyInstance(obj.getClass().getClassLoader(),obj.getClass().getInterfaces(), this);
        return proxy;
    }
    /**
     * proxy - 在其上调用方法的代理实例
     * method - 对应于在代理实例上调用的接口方法的 
Method 实例。Method 对象的声明类将是在其中声明方法的接口，该接口可以是代理类赖以继承方法的代理接口的超接口。
     * args - 包含传入代理实例上方法调用的参数值的对象数组，如果接口方法不使用参数，则为 null。基本类型的参数被包装在适当基本包装器类
     （如 java.lang.Integer 或 java.lang.Boolean）的实例中。 
     */
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        //代理对象，其实调用业务方法之前或者之后加入日志，或者是其他增强操作。
        Object invoke = method.invoke(obj, args);
        //加入日志
        log.log(method.getName());
        return invoke;
    }
}
</code></pre><h4 id="基于类的cglib动态代理enhancer" tabindex="-1">基于类的cglib动态代理Enhancer <a class="header-anchor" href="#基于类的cglib动态代理enhancer" aria-label="Permalink to &quot;基于类的cglib动态代理Enhancer&quot;">​</a></h4><p>CGLIB(Code Generation Library)是一个开源项目！是一个强大的，高性能，高质量的Code生成类库，它可以在运行期扩展Java类与实现Java接口。 spring框架使用哪个动态代理？ spring会根据bean的具体情况，判断是否有接口，如果有接口用jdk动态代理，如果没有就使用cglib动态代理。 手写动态代理的缺陷： 缺陷一：每次使用代理对象时需要首先注入代理bean，通过bean获取代理对象，然后使用代理对象调用业务方法。每一个需要增强的方法都必须走上面的流程。增加了代码的复杂度。 缺陷二：代理类中的增强处理，根据需求会经常发生变化，需要经常修改代理类，给测试和运维增加难度。</p><pre><code>public class DynamicProxyCglib {
    public Object getEnhancer(Class&lt;?&gt; clazz) {
        LogUtil log = new LogUtil();
        Enhancer enhancer = new Enhancer();
        // 设置被代理类
        enhancer.setSuperclass(clazz);
        // 设置回调函数
        enhancer.setCallback(new MethodInterceptor() {
            @Override
            public Object intercept(Object arg0, Method arg1, Object[] arg2, MethodProxy arg3) throws Throwable {
                log.log(arg1.getName());
                Object o = arg3.invokeSuper(arg0, arg2);
                //增强处理
                log.log(arg1.getName());
                return o;
            }
        });
        // 创建并返回代理对象
        return enhancer.create();
    }
}
</code></pre><h2 id="aop是什么" tabindex="-1">AOP是什么？ <a class="header-anchor" href="#aop是什么" aria-label="Permalink to &quot;AOP是什么？&quot;">​</a></h2><p>aop（aspect oriented programming）面向切面编程 oop（object oriented programming） 面向对象编程 aop是oop的补充，aop是为了让一组类共享相同的增强处理。 核心目标是在一个点上把相同的问题集中解决。 切面（Aspect） 事务处理，日志，切入点和通知一起组成切面。 连接点（Joinpoint）  方法调用，异常处理，spring允许你使用通知（advice）的地方。一般指的是业务实现类的某个方法。 通知（Advice） around，before，拦截器 切入点（Pointcut）匹配连接点的表达式，多个连接点组成一个切入点。 切入点表达式： execution(修饰符？返回值类型  类的全路径名？方法名 参数 ) 2，注解式切入 @annotation(注解类的全路径名) ![[../_resources/unknown_filename-e2f61633.png]]</p><h3 id="pom-xml" tabindex="-1">pom.xml <a class="header-anchor" href="#pom-xml" aria-label="Permalink to &quot;pom.xml&quot;">​</a></h3><pre><code>        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework&lt;/groupId&gt;
            &lt;artifactId&gt;spring-aop&lt;/artifactId&gt;
            &lt;version&gt;\${spring.version}&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.aspectj&lt;/groupId&gt;
            &lt;artifactId&gt;aspectjrt&lt;/artifactId&gt;
            &lt;version&gt;1.9.2&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.aspectj&lt;/groupId&gt;
            &lt;artifactId&gt;aspectjweaver&lt;/artifactId&gt;
            &lt;version&gt;1.9.2&lt;/version&gt;
        &lt;/dependency&gt;
</code></pre><h3 id="springaop配置" tabindex="-1">springAOP配置 <a class="header-anchor" href="#springaop配置" aria-label="Permalink to &quot;springAOP配置&quot;">​</a></h3><pre><code>&lt;!--定义目标对象--&gt;
    &lt;bean &gt;&lt;/bean&gt;
    &lt;!-- 日志切面类 --&gt;
    &lt;bean &gt;&lt;/bean&gt;
    &lt;aop:config&gt;
        &lt;aop:pointcut expression=&quot;execution(public void 
com.aaa.aop.PhoneBizImpl.salePhone(..))&quot; /&gt;
        &lt;aop:aspect ref=&quot;logAspect&quot;&gt;
            &lt;!-- 前置通知 --&gt;
            &lt;aop:before method=&quot;beforeMethod&quot; pointcut-ref=&quot;p1&quot;/&gt;
            &lt;!-- 后置通知 --&gt;
            &lt;aop:after-returning method=&quot;xxxafterReturingMethod&quot; 
pointcut-ref=&quot;p1&quot;/&gt;
            &lt;!-- 最终通知 --&gt;
            &lt;aop:after method=&quot;xxxafterMethod&quot; pointcut-ref=&quot;p1&quot;/&gt;
            &lt;!-- 异常通知 --&gt;
           &lt;aop:after-throwing method=&quot;throwExceptionMethod&quot; pointcut-ref=&quot;p1&quot; 
throwing=&quot;e&quot;/&gt;
            &lt;!-- 环绕通知 --&gt;
            &lt;aop:around method=&quot;aroundMethod&quot; pointcut-ref=&quot;p1&quot;/&gt;
        &lt;/aop:aspect&gt;
    &lt;/aop:config&gt;
</code></pre><h3 id="springaop免配置" tabindex="-1">springAOP免配置 <a class="header-anchor" href="#springaop免配置" aria-label="Permalink to &quot;springAOP免配置&quot;">​</a></h3><p>![[../_resources/unknown_filename-221bdc60.png]]</p><pre><code>@Component
@Aspect//标识本类为切面类
public class LogAspect {
    @Autowired
    HttpSession session ;   
    //设置公共的切入点表达式
    @Pointcut(&quot;execution (void com.aaa.service.PhoneBizimpl.buyPhone(int ))&quot;)
    public void pointcut1() {}
    @Pointcut(&quot;execution (void com.aaa.service.PhoneBizimpl.salePhone(int ))&quot;)
    public void pointcut2() {}
    @Pointcut(&quot;@annotation(com.aaa.annotation.MyAnnotation)&quot;)
    public void pointcut3() {}
    //五种通知。
    /**
     * 前置通知
     */
    @Before(&quot;pointcut1()&quot;)
    public  void beforeMethod(JoinPoint jp) {
        //获取业务方法的所有参数
        Object[] args = jp.getArgs();
        Object param=args[0];
        //获取业务方法名称
        String name = jp.getSignature().getName();
        System.out.println(new Date()+&quot;前置通知：&quot;+name+&quot;被执行了,参数为：&quot;+param);
    }
    /**
     * 注解前置通知
     */
    @Before(&quot;pointcut3()&quot;)
    public  void annBeforeMethod(JoinPoint jp) {
        //获取业务方法的所有参数
        Object[] args = jp.getArgs();
        Object param=args[0];
        //获取业务方法名称
        String name = jp.getSignature().getName();
        System.out.println(new Date()+&quot;注解前置通知：&quot;+name+&quot;被执行了,参为：&quot;+param);
    }
    /**
     * 后置通知
     */
    @AfterReturning (&quot;pointcut1()&quot;)
    public  void AfterReturningMethod(JoinPoint jp) {
        //获取业务方法的所有参数
        Object[] args = jp.getArgs();
        Object param=args[0];
        //获取业务方法名称
        String name = jp.getSignature().getName();
        System.out.println(new Date()+&quot;后置通知：&quot;+name+&quot;被执行了,参数为：&quot;+param);        
    }
    /**
     * 最终通知
     */
    @After (&quot;pointcut1()&quot;)
    public  void AfterMethod(JoinPoint jp) {
        //获取业务方法的所有参数
        Object[] args = jp.getArgs();
        Object param=args[0];
        //获取业务方法名称
        String name = jp.getSignature().getName();
        System.out.println(new Date()+&quot;最终通知：&quot;+name+&quot;被执行了,参数为：&quot;+param);     
    }
    /**
     * 环绕通知
     * @throws Throwable 
     */
    //@Around (&quot;pointcut2()&quot;)
    public  void AroundMethod(ProceedingJoinPoint jp) throws Throwable {
        //获取业务方法的所有参数
        Object[] args = jp.getArgs();
        Object param=args[0];
        //获取业务方法名称
        String name = jp.getSignature().getName();
        System.out.println(new Date()+&quot;环绕通知：&quot;+name+&quot;被执行了,参数为：&quot;+param);
        String username=session.getAttribute(&quot;username&quot;)+&quot;&quot;;
        if(&quot;admin&quot;.equals(username)) {
            jp.proceed();   //执行业务方法
        }else
        {
            System.out.println(&quot;没有权限处理&quot;);
        }
        System.out.println(new Date()+&quot;环绕通知：&quot;+name+&quot;被执行了,参数为：&quot;+param);       
    }
    /**
     * 异常通知
     */
    @AfterThrowing(&quot;pointcut2()&quot;)
    public  void ExceptionMethod(JoinPoint jp) {
        //获取业务方法的所有参数
        Object[] args = jp.getArgs();
        Object param=args[0];
        //获取业务方法名称
        String name = jp.getSignature().getName();
        System.out.println(new Date()+&quot;异常通知：&quot;+name+&quot;被执行了,参数为：&quot;+param);
    }
}
</code></pre><p>![[../_resources/unknown_filename-155815ab.png]]</p><h3 id="使用aop实现spring框架中的事务管理。" tabindex="-1">使用AOP实现spring框架中的事务管理。 <a class="header-anchor" href="#使用aop实现spring框架中的事务管理。" aria-label="Permalink to &quot;使用AOP实现spring框架中的事务管理。&quot;">​</a></h3><p>发工资，从第一个开始发，一直到最后一个发成功，最终提交事务，否则回滚。</p><pre><code>&lt;!-- 定义事务管理器 --&gt;
    &lt;bean &gt;
        &lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot;&gt;&lt;/property&gt;
    &lt;/bean&gt;
    &lt;!-- 配置声明式事务 --&gt;
    &lt;tx:advice transaction-manager=&quot;transactionManager&quot;&gt;
        &lt;tx:attributes&gt;
         &lt;!-- 需要开启事务 --&gt;
            &lt;tx:method name=&quot;add*&quot; propagation=&quot;REQUIRED&quot;/&gt;
            &lt;tx:method name=&quot;del*&quot; propagation=&quot;REQUIRED&quot;/&gt;
            &lt;tx:method name=&quot;update*&quot; propagation=&quot;REQUIRED&quot;/&gt;
            &lt;tx:method name=&quot;*&quot; propagation=&quot;SUPPORTS&quot; read-only=&quot;true&quot;/&gt;
        &lt;/tx:attributes&gt;
    &lt;/tx:advice&gt;
    &lt;aop:config&gt;
        &lt;aop:pointcut expression=&quot;execution(* com.aaa.service.impl.*.*(..))&quot; 
/&gt;
        &lt;aop:advisor advice-ref=&quot;myadvice&quot; pointcut-ref=&quot;p3&quot; /&gt;
    &lt;/aop:config&gt;
</code></pre>`,28)]))}const h=n(r,[["render",i]]);export{s as __pageData,h as default};
