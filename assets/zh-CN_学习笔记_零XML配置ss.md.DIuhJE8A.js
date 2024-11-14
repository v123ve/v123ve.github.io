import{_ as t,c as n,a3 as r,o as a}from"./chunks/framework.BaR4VHXY.js";const u=JSON.parse('{"title":"零XML配置ss","description":"","frontmatter":{"Created at":"2019-03-27T00:00:00.000Z","Last updated at":"2019-04-04T00:00:00.000Z","tags":["ssm整合","全局","过滤器","拦截器"]},"headers":[],"relativePath":"zh-CN/学习笔记/零XML配置ss.md","filePath":"zh-CN/学习笔记/零XML配置ss.md","lastUpdated":null}'),i={name:"zh-CN/学习笔记/零XML配置ss.md"};function o(l,e,s,p,c,g){return a(),n("div",null,e[0]||(e[0]=[r(`<h1 id="零xml配置ss" tabindex="-1">零XML配置ss <a class="header-anchor" href="#零xml配置ss" aria-label="Permalink to &quot;零XML配置ss&quot;">​</a></h1><h2 id="零xml配置ss-1" tabindex="-1">零XML配置ss <a class="header-anchor" href="#零xml配置ss-1" aria-label="Permalink to &quot;零XML配置ss&quot;">​</a></h2><h3 id="springmvc逻辑图及序列图" tabindex="-1">SpringMVC逻辑图及序列图 <a class="header-anchor" href="#springmvc逻辑图及序列图" aria-label="Permalink to &quot;SpringMVC逻辑图及序列图&quot;">​</a></h3><p>![[../_resources/SpringMVC逻辑图.png]] ![[../_resources/unknown_filename-f9875ed8.png]]</p><h4 id="spring常见注解" tabindex="-1">spring常见注解： <a class="header-anchor" href="#spring常见注解" aria-label="Permalink to &quot;spring常见注解：&quot;">​</a></h4><ul><li><p>@Configuration:声明配置类</p></li><li><p>@ComponentScan:包扫描</p></li><li><p>@Component:组件,包含@Repository@Service</p></li></ul><h4 id="springmvc常见注解" tabindex="-1">springmvc常见注解： <a class="header-anchor" href="#springmvc常见注解" aria-label="Permalink to &quot;springmvc常见注解：&quot;">​</a></h4><ul><li>@Controller</li><li>@RequestMapping 请求映射 写在类上可窄化请求</li><li>@PathVariable 路径变量，获取url地址中的参数</li><li>@ResponseBody 将返回结果写入响应体中，reponse body中。自动将结果以json方式返回。Maven工程需加入jar包及下面的注解</li><li>@EnableWebMvc</li><li>@RestController 组合注解相当于（controller+ responseBody）</li></ul><h3 id="pom-xml" tabindex="-1">pom.xml <a class="header-anchor" href="#pom-xml" aria-label="Permalink to &quot;pom.xml&quot;">​</a></h3><p>创建maven工程，添加jar依赖</p><pre><code>        &lt;properties&gt;
            &lt;spring.version&gt;5.1.5.RELEASE&lt;/spring.version&gt;
        &lt;/properties&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;junit&lt;/groupId&gt;
            &lt;artifactId&gt;junit&lt;/artifactId&gt;
            &lt;version&gt;3.8.1&lt;/version&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework&lt;/groupId&gt;
            &lt;artifactId&gt;spring-context&lt;/artifactId&gt;
            &lt;version&gt;\${spring.version}&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework&lt;/groupId&gt;
            &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;
            &lt;version&gt;\${spring.version}&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;            
            &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;       
            &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;
            &lt;version&gt;2.9.8&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;mavenwar-plugin&lt;/artifactId&gt;
                &lt;version&gt;2.6&lt;/version&gt;
                &lt;configuration&gt;
                &lt;!-- 禁用pom文件自动检查web.xml是否存在--&gt;                 &lt;failOnMissingWebXml&gt;false&lt;/failOnMissingWebXml&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
             &lt;!--  指定maven编译环境 --&gt;
             &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
                &lt;version&gt;3.7.0&lt;/version&gt;
                &lt;configuration&gt;
                    &lt;source&gt;1.8&lt;/source&gt;
                    &lt;target&gt;1.8&lt;/target&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
</code></pre><h3 id="springconfig-java" tabindex="-1">springconfig.java <a class="header-anchor" href="#springconfig-java" aria-label="Permalink to &quot;springconfig.java&quot;">​</a></h3><p>Spring容器,扫描除Controller之外的所有包</p><pre><code>@Configuration
@ComponentScan(basePackages= {&quot;com.aaa&quot;},excludeFilters= 
{@Filter(type=FilterType.ANNOTATION,value={Controller.class})})
public class SpringConfig {
}
</code></pre><h3 id="springmvcconfig-java" tabindex="-1">springmvcconfig.java <a class="header-anchor" href="#springmvcconfig-java" aria-label="Permalink to &quot;springmvcconfig.java&quot;">​</a></h3><p>视图解析器:主要设置前后缀 拦截器:在请求到达controller之前做一些增强处理。访问完之后做一些增强处理。例如登录验证。</p><pre><code>@Configuration
@ComponentScan(basePackages= {&quot;com.aaa.controller&quot;})
@EnableWebMvc
public class SpringmvcConfig {
    /**
     * 添加视图解析器
     */
    @Bean
    public  InternalResourceViewResolver getInternalResourceViewResolver() {
        InternalResourceViewResolver irv = new InternalResourceViewResolver();
        irv.setPrefix(&quot;/WEB-INF/classes/jsp/&quot;);
        irv.setSuffix(&quot;.jsp&quot;);
        return irv;
    }
    /**
     * 注册拦截器
     */
    @Bean
    public Myintercepter getMyintercepter(){
        Myintercepter myintercepter=new Myintercepter();
        return myintercepter;
    }
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //注册多个需添加多个拦截器类，按注册顺序启用
        registry.addInterceptor(getMyintercepter());
    }
}
</code></pre><h3 id="拦截器类" tabindex="-1">拦截器类 <a class="header-anchor" href="#拦截器类" aria-label="Permalink to &quot;拦截器类&quot;">​</a></h3><p>自己写拦截方法</p><pre><code>public class Myintercepter extends HandlerInterceptorAdapter {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println(&quot;处理器前&quot;);
        return true;
    }
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,ModelAndView modelAndView) throws Exception {
        System.out.println(&quot;处理器后&quot;);
    }
}
</code></pre><h3 id="webconfig-java" tabindex="-1">webconfig.java <a class="header-anchor" href="#webconfig-java" aria-label="Permalink to &quot;webconfig.java&quot;">​</a></h3><p>添加前端控制器、过滤器、监听</p><pre><code>public class WebConfig implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        AnnotationConfigWebApplicationContext acwc = new AnnotationConfigWebApplicationContext();
        //加载spring的配置
        acwc.register(SpringConfig.class);
        //加载springmvc的配置
        acwc.register(SpringmvcConfig.class);
        //配置springmvc的前端控制器
        acwc.setServletContext(servletContext);
        Dynamic addServlet = servletContext.addServlet(&quot;xxx&quot;, new DispatcherServlet(acwc));
        //配置servletmapping
        addServlet.addMapping(&quot;*.do&quot;);    
        //设置servlet启动顺序
        addServlet.setLoadOnStartup(1);
        //配置字符编码过滤器
        javax.servlet.FilterRegistration.Dynamic addFilter = servletContext.addFilter(&quot;CharacterEncodingFilter&quot;, new CharacterEncodingFilter());
        //设置过滤请求的参数
        Map&lt;String, String&gt; encodingmap=new HashMap&lt;&gt;();
        encodingmap.put(&quot;encoding&quot;, &quot;UTF-8&quot;);
        encodingmap.put(&quot;forceEncoding&quot;, &quot;true&quot;);
        addFilter.setInitParameters(encodingmap);
        //设置过滤请求的范围
        EnumSet&lt;DispatcherType&gt; dispatcherTypes =EnumSet.allOf(DispatcherType.class);
        dispatcherTypes.add(DispatcherType.REQUEST);
        dispatcherTypes.add(DispatcherType.FORWARD);
        addFilter.addMappingForUrlPatterns(dispatcherTypes, true, &quot;/*&quot;);
       //添加servlet上下文监听
       //bean中如果有session属性，可加上@Autowired(required = false)
       servletContext.addListener(new RequestContextListener());
    }
}
</code></pre><h3 id="统一异常处理" tabindex="-1">统一异常处理 <a class="header-anchor" href="#统一异常处理" aria-label="Permalink to &quot;统一异常处理&quot;">​</a></h3><ul><li><p>统一异常处理，为了增加用户友好度。</p></li><li><p>全局变量配置，设置全局变量</p><p>@ControllerAdvice public class MyAdvice {     @ExceptionHandler(value=Exception.class)     public ModelAndView myException(){         ModelAndView modelAndView=new ModelAndView();         modelAndView.setViewName(&quot;error&quot;);         return modelAndView;     }     @ModelAttribute     public void setMyname(Model model){         model.addAttribute(&quot;myname&quot;, &quot;hsy&quot;);     } }</p><p>//作为参数接收 @ModelAttribute(&quot;myname&quot;) String myname</p></li></ul>`,25)]))}const m=t(i,[["render",o]]);export{u as __pageData,m as default};
