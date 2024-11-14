import{_ as e,c as o,a3 as a,o as r}from"./chunks/framework.BaR4VHXY.js";const h=JSON.parse('{"title":"IOC 控制反转（inversion of control）","description":"","frontmatter":{"Created at":"2019-03-25T00:00:00.000Z","Last updated at":"2019-03-25T00:00:00.000Z","tags":["spring","控制反转IOC","Scope","Profile"]},"headers":[],"relativePath":"zh-CN/学习笔记/IOC 控制反转（inversion of control）.md","filePath":"zh-CN/学习笔记/IOC 控制反转（inversion of control）.md","lastUpdated":null}'),t={name:"zh-CN/学习笔记/IOC 控制反转（inversion of control）.md"};function i(s,n,l,c,p,u){return r(),o("div",null,n[0]||(n[0]=[a(`<h1 id="ioc-控制反转-inversion-of-control" tabindex="-1">IOC 控制反转（inversion of control） <a class="header-anchor" href="#ioc-控制反转-inversion-of-control" aria-label="Permalink to &quot;IOC 控制反转（inversion of control）&quot;">​</a></h1><h2 id="ioc-控制反转-inversion-of-control-1" tabindex="-1">IOC  控制反转（inversion of control） <a class="header-anchor" href="#ioc-控制反转-inversion-of-control-1" aria-label="Permalink to &quot;IOC  控制反转（inversion of control）&quot;">​</a></h2><h3 id="di-依赖注入-dependence-injection" tabindex="-1">DI 依赖注入（dependence injection） <a class="header-anchor" href="#di-依赖注入-dependence-injection" aria-label="Permalink to &quot;DI 依赖注入（dependence injection）&quot;">​</a></h3><h4 id="第一阶段-xml阶段" tabindex="-1">第一阶段:xml阶段 <a class="header-anchor" href="#第一阶段-xml阶段" aria-label="Permalink to &quot;第一阶段:xml阶段&quot;">​</a></h4><h4 id="第二阶段-注释阶段" tabindex="-1">第二阶段:注释阶段 <a class="header-anchor" href="#第二阶段-注释阶段" aria-label="Permalink to &quot;第二阶段:注释阶段&quot;">​</a></h4><h4 id="第三阶段-配置阶段" tabindex="-1">第三阶段:配置阶段 <a class="header-anchor" href="#第三阶段-配置阶段" aria-label="Permalink to &quot;第三阶段:配置阶段&quot;">​</a></h4><h4 id="spring中的scope" tabindex="-1">Spring中的Scope <a class="header-anchor" href="#spring中的scope" aria-label="Permalink to &quot;Spring中的Scope&quot;">​</a></h4><p>controller是单例的。所有的bean如果不指定scope，默认是单例的@scope(value=&quot;singleton&quot;).指定scope为prototype之后，controller对象就变成了多例。 ![[../_resources/Image.1.png]] 为什么controller默认是单例的？ 1：原因是性能问题，单例只创建一个对象。 2：因为controller中不需要成员变量。实在被逼无奈要用成员变量，只能使用多例。controller中的属性都是通过容器注入的。 如果换成多例，每次请求都是一个新的对象，对象中的属性值也是全新的。 scope的值还可以为 request  spring容器为每一个请求创建一个bean。 session  spring容器为每一次会话创建一个bean。</p><h4 id="spring框架中的profile" tabindex="-1">spring框架中的profile <a class="header-anchor" href="#spring框架中的profile" aria-label="Permalink to &quot;spring框架中的profile&quot;">​</a></h4><p>spring容器中有大规模的bean，需要每次都加载吗？ 不需要 在开发过程中和在项目正式上线，使用的bean一样吗？ 不一样，例如数据库的连接池配置。</p><pre><code>@Configuration
@ComponentScan(basePackages=&quot;com.aaa&quot;)
public class MyConfig {
      @Bean(name=&quot;xxx&quot;)
      @Profile(&quot;dev&quot;)//开发环境
      public  Annotation getAnnotation() {
           return new Annotation();
      }
      @Bean(name=&quot;yyy&quot;)
      @Profile(&quot;pro&quot;)//生产环境
      public  MyScope getMyscope() {
           return new MyScope();
      }
}


        //测试spring的profile
        AnnotationConfigApplicationContext &lt;u&gt;ac&lt;/u&gt; = new 
AnnotationConfigApplicationContext();
        //设置profile
        ac.getEnvironment().setActiveProfiles(&quot;pro&quot;);
        //注册config
        ac.register(MyConfig.class);
        ac.refresh();
        /*Annotation a = (Annotation) ac.getBean(&quot;&lt;u&gt;xxx&lt;/u&gt;&quot;);
        a.say();*/
        MyScope b=(MyScope) ac.getBean(&quot;yyy&quot;);
        b.say();
</code></pre><h4 id="spring中的el表达式" tabindex="-1">spring中的EL表达式 <a class="header-anchor" href="#spring中的el表达式" aria-label="Permalink to &quot;spring中的EL表达式&quot;">​</a></h4><p>spring容器可以帮助我们加载Properties文件中的属性。</p><pre><code>@Component
@PropertySource(&quot;classpath:db.properties&quot;)
public class Mysql {
    @Value(&quot;\${mysql.username}&quot;)
    private String username;
    @Value(&quot;\${mysql.password}&quot;)
    private String password;
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
</code></pre>`,14)]))}const g=e(t,[["render",i]]);export{h as __pageData,g as default};
