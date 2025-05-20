---

Created at: 2019-03-25
Last updated at: 2019-03-25
tags: 
  - spring
  - maven

---

# spring简介


## spring简介

Spring框架是由于软件开发的复杂性而创建的。Spring使用的是基本的JavaBean来完成以前只可能由EJB完成的事情。然而，Spring的用途不仅仅限于服务器端的开发。从简单性、可测试性和松耦合性角度而言，绝大部分Java应用都可以从Spring中受益。
◆目的：解决企业应用开发的复杂性
◆功能：使用基本的JavaBean代替EJB，并提供了更多的企业应用功能
◆范围：任何Java应用
Spring是一个轻量级控制反转(IoC)和面向切面(AOP)的容器框架。
创始人：Rod  Johnson 悉尼大学 音乐博士
spring的发展历程：
 第一个阶段：
xml阶段 ：spring1.x时代，在spring开发过程中，使用的全部是xml配置文件。稍微大一些的项目中，会有多个不同的配置文件。
第二个阶段：
注解阶段：jdk1.5引入注解之后，spring项目组从spring2.X开始使用注解（@service@Component@controller..）,并没有完全脱离xml配置文件，一般将于业务逻辑不相干的配置任然放在xml中，例如数据库连接， 业务相关类使用的是注解。
第三个阶段：
java配置：spring3.x之后，spring提供了java配置能力，并且spring官方推荐java配置的方式。0xml。例如springboot。

### spring框架的好处是什么？

轻量：2M左右
控制反转（IOC）（依赖注入DI）：
面向切面编程AOP：把相同的业务逻辑提取出来，一次编程，多个地方生效。
mvc框架：是一种优秀的web框架。页面跳转，数据返回，数据转换，数据校验，异常处理
事务处理：trancaction，之前使用java的时候，开启关闭提交事务是通过手动编码实现，spring提供了声明式事务，注解式事务。
提供了大量的工具类。

### spring框架包含哪些模块？

core：核心容器
AOP：面向切面编程
WEB：跟web页面相关的组件
JEE：message
DAO：数据访问
ORM：对象关系映射，将对象持久化到数据库中，反过来将数据查询出来并封装成对象。

### 使用sts+maven创建spring项目。

maven是一个用来项目构建的软件。可以干以下事情：

1. jar管理维护

* 工程编译打包
* 管理依赖工程
	安装配置: 下载maven压缩包，解压缩，配置环境变量，修改settings.xml文件中的本地仓库位置和中央仓库地址
	![[../_resources/unknown_filename-3266a4b9.png]]
	![[../_resources/unknown_filename-1e4d3755.png]]

### maven中的注意点

#### maven中的pom文件

![[../_resources/unknown_filename-ffea36e1.png]]
maven常见标签，maven的变量定义：
![[../_resources/unknown_filename-0bd7e78c.png]]
![[../_resources/unknown_filename-9169917d.png]]
dependencies 此标签包含多个依赖

#### dependency依赖的jar包坐标和范围scope

#### maven命令

clean：清理编译之后的文件和package文件
install：将本地工程安装到本地仓库
deploy：上传到私服
pakage：打包，不上传到本地仓库

#### 将本地jar包打包到本地仓库。

例：添加ojdbc
mvn install:install-file -DgroupId=com.aaa.oracle -DartifactId=ojdbc14 -Dversion=1.1 -Dpackaging=jar -Dfile=C:\ojdbc14.jar
![[../_resources/unknown_filename-f0ab3f92.png]]

