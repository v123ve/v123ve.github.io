---

Created at: 2019-04-09
Last updated at: 2019-05-20
tags: 
  - redis
  - springboot
  - lombok
  - mybatis二级缓存
  - spring缓存

---

# SpringBoot


## SpringBoot

#### application.properties

#### lombok

在pom里加入后在实体类前加入@Data，可不用写Getter和Setter和toString方法

#### redis实现mybatis二级缓存

cache是高速缓冲寄存器，主要解决频繁使用的数据能够被快速访问的问题。
操作系统缓存：减少磁盘操作。
数据库缓存：减少应用程序对数据库的IO操作。
web服务器缓存：减轻web服务器的压力。
cdn缓存：增加用户的体验。
浏览器缓存：增加用户的体验，减轻服务器压力。

##### 一级缓存(自带)

一级缓存，基于一次数据库连接会话。

##### 二级缓存(单redis版)

二级缓存的配置，二级缓存依赖第三方存储。

#### redis实现spring缓存

##### service层缓存(单redis版)

1. 在SpringBoot启动类添加注解@EnableCaching
2. 删除mapper.xml上的cache，若没有则无视
3. 修改RedisConfig,注释掉集群版getjedisConnectionFactory()

#### redis实现缓存集群版

修改RedisConfig即可，注释掉原来的getjedisConnectionFactory()
