---

Created at: 2019-03-25
Last updated at: 2019-03-25
tags: 
  - ssm整合
  - xml

---

# web.xml


### web.xml

    <?xml version="1.0" encoding="UTF-8"?>
    <web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://xmlns.jcp.org/xml/ns/javaee" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd" version="3.1">
      <display-name>MVC_HomeWork</display-name>
      <servlet>
        <servlet-name>springDispatcherServlet</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
          <param-name>contextConfigLocation</param-name>
          <param-value>classpath:ApplicationContext.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
      </servlet>
      <servlet-mapping>
        <servlet-name>springDispatcherServlet</servlet-name>
        <url-pattern>/</url-pattern>
      </servlet-mapping>
      <filter>
        <filter-name>CharacterEncodingFilter</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
          <param-name>encoding</param-name>
          <param-value>utf-8</param-value>
        </init-param>
        <init-param>
          <param-name>forceEncoding</param-name>
          <param-value>true</param-value>
        </init-param>
      </filter>
      <filter-mapping>
        <filter-name>CharacterEncodingFilter</filter-name>
        <url-pattern>/*</url-pattern>
      </filter-mapping>
    </web-app>


### ApplicationContext.xml

    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
        xmlns:mvc="http://www.springframework.org/schema/mvc" xmlns:p="http://www.springframework.org/schema/p"
        xmlns:tx="http://www.springframework.org/schema/tx"
        xsi:schemaLocation="http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-4.0.xsd
            http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
            http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.0.xsd
            http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-4.3.xsd">
        <!--引入配置文件 -->
        <context:property-placeholder location="classpath:db.properties" />
        <!-- 数据库连接池 -->
        <bean         p:driverp:jdbcUrl="${jdbcUrl}" p:user="${user}"
            p:password="${password}" init-method="getConnection"></bean>
        <!--需对属性加set()方法 
            <bean p:source-ref="dataSource"></bean>
            <bean p:dao-ref="usersDao"></bean>
            <bean         p:service-ref="usersService"></bean> -->
        <!-- 包扫描器 -->
        <context:component-scan base-package="com.xxx.proj"></context:component-scan>
        <!--连接工厂配置，更像一种连接池管理类，每次的数据操作都将由连接池来分配连接后进行  -->
        <bean         p:dataSource-ref="dataSource" p:typeAliasesPackage="com.xxx.proj.entity">
        </bean>
        <!-- 将 会 查 找 类 路 径 下 的 映 射 器 并 自 动 将 它 们 创 建 成 MapperFactoryBean -->
        <bean         p:basePackage="com.xxx.proj.mapper" p:sqlSessionFactoryBeanName="SqlSessionFactory"></bean>
        <!-- 拦截器 -->
        <mvc:interceptors>
            <mvc:interceptor>
                <mvc:mapping path="/**" />
                <mvc:exclude-mapping path="/" />
                <mvc:exclude-mapping path="/UserLogin" />
                <mvc:exclude-mapping path="/jsp/userlogin.jsp" />
                <mvc:exclude-mapping path="/asserts/**" />
                <mvc:exclude-mapping path="/backstage-duplicate/**" />
                <bean ></bean>
            </mvc:interceptor>
        </mvc:interceptors>
        <!--mvc驱动,@responsebody注解返回格式为utf-8  -->
        <mvc:annotation-driven>
            <mvc:message-converters register-defaults="true">
                <bean >
                    <property name="supportedMediaTypes" value="text/plain;charset=UTF-8" />
                </bean>
            </mvc:message-converters>
        </mvc:annotation-driven>
        <!-- 路径映射 -->
        <mvc:resources location="/asserts/" mapping="/asserts/**" />
        <!--上传配置 ：判断上传信息里是否有文件类型-->
        <bean         ></bean>
        <!-- 文件路径 -->
        <mvc:resources location="file:${realFile}" mapping="/img/**" />
       <!-- 视图解析器 -->
        <bean
                    p:prefix="/jsp/" p:suffix=".jsp">
        </bean>
    </beans>




