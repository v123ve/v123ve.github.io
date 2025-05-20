---

Created at: 2019-03-25
Last updated at: 2019-03-25
tags: 
  - spring
  - 控制反转IOC
  - Scope
  - Profile

---

# IOC 控制反转（inversion of control）

## IOC  控制反转（inversion of control）

### DI 依赖注入（dependence injection）

#### 第一阶段:xml阶段

#### 第二阶段:注释阶段

#### 第三阶段:配置阶段

#### Spring中的Scope

controller是单例的。所有的bean如果不指定scope，默认是单例的@scope(value="singleton").指定scope为prototype之后，controller对象就变成了多例。
![[../_resources/Image.1.png]]
为什么controller默认是单例的？
1：原因是性能问题，单例只创建一个对象。
2：因为controller中不需要成员变量。实在被逼无奈要用成员变量，只能使用多例。controller中的属性都是通过容器注入的。
如果换成多例，每次请求都是一个新的对象，对象中的属性值也是全新的。
scope的值还可以为
request  spring容器为每一个请求创建一个bean。
session  spring容器为每一次会话创建一个bean。

#### spring框架中的profile

spring容器中有大规模的bean，需要每次都加载吗？
不需要
在开发过程中和在项目正式上线，使用的bean一样吗？
不一样，例如数据库的连接池配置。

    @Configuration
    @ComponentScan(basePackages="com.aaa")
    public class MyConfig {
          @Bean(name="xxx")
          @Profile("dev")//开发环境
          public  Annotation getAnnotation() {
               return new Annotation();
          }
          @Bean(name="yyy")
          @Profile("pro")//生产环境
          public  MyScope getMyscope() {
               return new MyScope();
          }
    }


            //测试spring的profile
            AnnotationConfigApplicationContext <u>ac</u> = new 
    AnnotationConfigApplicationContext();
            //设置profile
            ac.getEnvironment().setActiveProfiles("pro");
            //注册config
            ac.register(MyConfig.class);
            ac.refresh();
            /*Annotation a = (Annotation) ac.getBean("<u>xxx</u>");
            a.say();*/
            MyScope b=(MyScope) ac.getBean("yyy");
            b.say();

#### spring中的EL表达式

spring容器可以帮助我们加载Properties文件中的属性。

    @Component
    @PropertySource("classpath:db.properties")
    public class Mysql {
        @Value("${mysql.username}")
        private String username;
        @Value("${mysql.password}")
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
