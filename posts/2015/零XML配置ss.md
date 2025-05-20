---

Created at: 2019-03-27
Last updated at: 2019-04-04
tags: 
  - ssm整合
  - 全局
  - 过滤器
  - 拦截器

---

# 零XML配置ss


## 零XML配置ss

### SpringMVC逻辑图及序列图

![[../_resources/SpringMVC逻辑图.png]]
![[../_resources/unknown_filename-f9875ed8.png]]

#### spring常见注解：

* @Configuration:声明配置类

* @ComponentScan:包扫描
* @Component:组件,包含@Repository@Service

#### springmvc常见注解：

* @Controller
* @RequestMapping 请求映射 写在类上可窄化请求
* @PathVariable 路径变量，获取url地址中的参数
* @ResponseBody 将返回结果写入响应体中，reponse body中。自动将结果以json方式返回。Maven工程需加入jar包及下面的注解
* @EnableWebMvc
* @RestController 组合注解相当于（controller+ responseBody）

### pom.xml

创建maven工程，添加jar依赖

            <properties>
                <spring.version>5.1.5.RELEASE</spring.version>
            </properties>
            <dependency>
                <groupId>junit</groupId>
                <artifactId>junit</artifactId>
                <version>3.8.1</version>
                <scope>test</scope>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-context</artifactId>
                <version>${spring.version}</version>
            </dependency>
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-webmvc</artifactId>
                <version>${spring.version}</version>
            </dependency>
            <dependency>            
                <groupId>com.fasterxml.jackson.core</groupId>       
                <artifactId>jackson-databind</artifactId>
                <version>2.9.8</version>
            </dependency>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>mavenwar-plugin</artifactId>
                    <version>2.6</version>
                    <configuration>
                    <!-- 禁用pom文件自动检查web.xml是否存在-->                 <failOnMissingWebXml>false</failOnMissingWebXml>
                    </configuration>
                </plugin>
                 <!--  指定maven编译环境 -->
                 <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-compiler-plugin</artifactId>
                    <version>3.7.0</version>
                    <configuration>
                        <source>1.8</source>
                        <target>1.8</target>
                    </configuration>
                </plugin>
            </plugins>


### springconfig.java

Spring容器,扫描除Controller之外的所有包

    @Configuration
    @ComponentScan(basePackages= {"com.aaa"},excludeFilters= 
    {@Filter(type=FilterType.ANNOTATION,value={Controller.class})})
    public class SpringConfig {
    }


### springmvcconfig.java

视图解析器:主要设置前后缀
拦截器:在请求到达controller之前做一些增强处理。访问完之后做一些增强处理。例如登录验证。

    @Configuration
    @ComponentScan(basePackages= {"com.aaa.controller"})
    @EnableWebMvc
    public class SpringmvcConfig {
        /**
         * 添加视图解析器
         */
        @Bean
        public  InternalResourceViewResolver getInternalResourceViewResolver() {
            InternalResourceViewResolver irv = new InternalResourceViewResolver();
            irv.setPrefix("/WEB-INF/classes/jsp/");
            irv.setSuffix(".jsp");
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


### 拦截器类

自己写拦截方法

    public class Myintercepter extends HandlerInterceptorAdapter {
        @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
            System.out.println("处理器前");
            return true;
        }
        @Override
        public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,ModelAndView modelAndView) throws Exception {
            System.out.println("处理器后");
        }
    }


### webconfig.java

添加前端控制器、过滤器、监听

    public class WebConfig implements WebApplicationInitializer {
        @Override
        public void onStartup(ServletContext servletContext) throws ServletException {
            AnnotationConfigWebApplicationContext acwc = new AnnotationConfigWebApplicationContext();
            //加载spring的配置
            acwc.register(SpringConfig.class);
            //加载springmvc的配置
            acwc.register(SpringmvcConfig.class);
            //配置springmvc的前端控制器
            acwc.setServletContext(servletContext);
            Dynamic addServlet = servletContext.addServlet("xxx", new DispatcherServlet(acwc));
            //配置servletmapping
            addServlet.addMapping("*.do");    
            //设置servlet启动顺序
            addServlet.setLoadOnStartup(1);
            //配置字符编码过滤器
            javax.servlet.FilterRegistration.Dynamic addFilter = servletContext.addFilter("CharacterEncodingFilter", new CharacterEncodingFilter());
            //设置过滤请求的参数
            Map<String, String> encodingmap=new HashMap<>();
            encodingmap.put("encoding", "UTF-8");
            encodingmap.put("forceEncoding", "true");
            addFilter.setInitParameters(encodingmap);
            //设置过滤请求的范围
            EnumSet<DispatcherType> dispatcherTypes =EnumSet.allOf(DispatcherType.class);
            dispatcherTypes.add(DispatcherType.REQUEST);
            dispatcherTypes.add(DispatcherType.FORWARD);
            addFilter.addMappingForUrlPatterns(dispatcherTypes, true, "/*");
           //添加servlet上下文监听
           //bean中如果有session属性，可加上@Autowired(required = false)
           servletContext.addListener(new RequestContextListener());
        }
    }


### 统一异常处理

* 统一异常处理，为了增加用户友好度。
* 全局变量配置，设置全局变量

    @ControllerAdvice
    public class MyAdvice {
        @ExceptionHandler(value=Exception.class)
        public ModelAndView myException(){
            ModelAndView modelAndView=new ModelAndView();
            modelAndView.setViewName("error");
            return modelAndView;
        }    
        @ModelAttribute
        public void setMyname(Model model){
            model.addAttribute("myname", "hsy");
        }
    }
    

    //作为参数接收
    @ModelAttribute("myname") String myname
    



