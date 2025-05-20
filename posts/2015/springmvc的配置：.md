---

Created at: 2019-03-25
Last updated at: 2019-04-02
tags: 
  - ssm整合
  - xml

---

# springmvc的配置：


## springmvc的配置：

#### springmvc：

* 修改web.xml spring容器的配置applicationContext.xml

* 修改springmvc的xxx-servlet.xml
* 测试

#### applicationContext.xml：

        <!-- annotation注解 不能写controller，因为controller需要springmvc来扫描-->
        <context:component-scan base-package="com.aaa.entity,com.aaa.config,com.aaa.service"></context:component-scan>


#### xxx-servlet.xml

        <context:component-scan base-package="com.aaa.controller">            </context:component-scan>
        <mvc:annotation-driven></mvc:annotation-driven>
        <!-- 配置springmvc的视图解析器 -->
        <bean >
         <property name="prefix" value="/WEB-INF/jsp/"></property>
         <property name="suffix" value=".jsp"></property>
        </bean>


#### web.xml

        <!-- spring容器需要加载的配置文件 -->
        <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:applicationContext.xml</param-value>
      </context-param>
      <listener>
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
      </listener>
     <!-- 配置前端控制器 -->
     <servlet>
        <servlet-name>xxx</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
        <param-value>classpath:xxx-servlet.xml</param-value>
        </init-param>
     </servlet>
      <servlet-mapping>
        <servlet-name>xxx</servlet-name>
        <!-- 处理所有以.do结尾的请求 -->
        <url-pattern>*.do</url-pattern>
     </servlet-mapping>

