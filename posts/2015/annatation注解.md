---

Created at: 2019-03-25
Last updated at: 2019-03-25
tags: 
  - java注解和泛型

---

# annatation注解


## annatation注解

在java中主要分基本注解和元注解两个分类

### 基本注解

@override：制定方法重写
@deprecated:方法不建议使用了，已经过时的方法，一般都有新的替代方法。
@SuppressWarnings：抑制告警注解：
("unused")：变量未使用,
("rawtypes"）:不指定泛型,
("unchecked")：抑制检查告警,
("all")：抑制所有的告警

### 元注解

@target  指定注解使用的场合。
![[../_resources/Image.4.png]]
@retention 指定注解生效的阶段（源码，class，运行）
![[../_resources/Image.3.png]]
自定义注解,分两种：一种是上面带参数的，还有一种没有参数的（标识性注解）：
![[../_resources/Image.2.png]]

### Java的参数化类型被称为泛型（Generic）

使用通配符 <？>
使用泛型通配符上限 <？extends T> 
使用泛型通配符下限 <？super T>

