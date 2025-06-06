---

Created at: 2019-05-10
Last updated at: 2019-05-10
tags: 
  - swagger
  - jmeter

---

# Swagger


## Swagger

Swagger 是一个规范和完整的框架，用于生成、描述、调用和可视化 RESTful 风格的 Web 服务。总体目标是使客户端和文件系统作为服务器以同样的速度来更新。文件的方法，参数和模型紧密集成到服务器端的代码，允许API来始终保持同步。

* 作用:

| 接口的文档在线自动生成 | 功能测试 |
| --- | --- |

| 主要项目如下 | 说明  |
| --- | --- |
| Swagger-tools | 提供各种与Swagger进行集成和交互的工具,例如模式检验,Swagger1.2文档转换成Swagger 2.0文档等功能 |
| Swagger-core | 用于Java/Scala的的Swagger实现。与JAX-RS(Jersey、Resteasy、CXF...)、Servlets和Play框架进行集成 |
| Swagger-js | 用于JavaScript的Swagger实现 |
| Swagger-node-express | Swagger模块,用于node.js的Express web应用框架 |
| Swagger-ui | 一个无依赖的HTML、JS和CSS集合,可以为Swagger兼容API动态生成优雅文档 |
| Swagger-codegen | 一个模板驱动引擎,通过分析用户Swagger资源声明以各种语言生成客户端代码 |

| Swagger使用的注解及其属性 | 说明  |
| --- | --- |
| @Api | 用在类上，说明该类的作用 |
| @ApiOperation | 注解来给API增加方法说明 |
| @ApiImplicitParams | 用在方法上包含一组参数说明 |
| paramType | 指定参数放在哪个地方 |
|     | header:请求参数放置于RequestHeader,使用@RequestHeader获取 |
|     | query:请求参数放置于请求地址,使用@RequestParam获取 |
|     | path:(用于restful接口)-->请求参数的获取：@PathVariable |
|     | body:(不常用) |
|     | form:(不常用) |
| name | 参数名 |
| dataType | 参数类型 |
| required | 参数是否必须传,true&false |
| value | 说明参数的意思 |
| defaultValue | 参数的默认值 |
| @ApiImplicitParam | 用来注解来给方法入参增加说明 |
| @ApiResponses | 用于表示一组响应 |
| @ApiResponse | 用在@ApiResponses中,一般用于表达一个错误的响应信息 |
| code | 数字,例如400 |
| message | 信息,例如"请求参数没填好" |
| response | 抛出异常的类 |
| @ApiModel | 描述一个Model的信息(一般用在请求参数无法使用@ApiImplicitParam注解进行描述的时候) |
| @ApiModelProperty | 描述一个model的属性 |

##### 两个注意点：

1. paramType会直接影响程序的运行期，如果paramType与方法参数获取使用的注解不一致，会直接影响到参数的接收。使用Sawgger UI进行测试，接收不到！
	![[../_resources/unknown_filename-70ce4fa7.png]]
	![[../_resources/unknown_filename-b539e199.png]]
2. Conntroller中定义的方法必须在@RequestMapper中显示的指定RequestMethod类型，否则SawggerUi会默认为全类型皆可访问， API列表中会生成多条项目。
	如下图：updatePassword()未指定requestMethod，结果生成了7条API信息。所以如果没有特殊需求，建议根据实际情况加上requestMethod。
	![[../_resources/unknown_filename-091c58be.png]]
	![[../_resources/unknown_filename-c4f16c02.png]]
    
## JMeter

是一款用java 编写的开源、轻量的测试工具。（LoadRunner是惠普公司的，收费），可以用于测试静态和动态性能，动态web应用。它可以被用来模拟负载过重的服务器、服务器组、网络或对象或其强度测试以分析不同载荷类型下的整体性能。

##### Jmeter优点

1. 开源工具，可扩展性非常好
2. 高可扩展性，用户可自定义调试相关模块代码
3. 精心简单的GUI设计，小巧灵活
4. 完全的可移植性和100％纯java
5. 完全swing和轻量组件支持(预编译的HAR使用javax.swing.*)包
6. 完全多线程框架，允许通过多个线程并发取样以及单独的线程对不同的功能同时取样
7. 支持脚本取样器

| 基本构成 |     |
| --- | --- |
| 负载发生器 | 产生负载，多进程或多线程模拟用户行为 |
| 用户运行器 | 脚本运行引擎，用户运行器附加在进程或线程上，根据脚本模拟指定的用户行为 |
| 资源生成器 | 生成测试过程中服务器、负载机的资源数据 |
| 报表生成器 | 根据测试中获得的数据生成报表，提供可视化的数据显示方式 |

| 主要概念 |     |
| --- | --- |
| 测试计划 | 包含本次测试的所有相关功能 |
| 线程  | 来模拟用户,一般一个线程组可看做一个虚拟用户组,其中每个线程为一个虚拟用户 |
| 测试片段 | 在测试树上与线程组一个层级,但是它不被执行,除非它是一个模块控制器或者被控制器所引用时才会被执行 |
| 控制器 | 分为取样器和逻辑控制器 |
|     | 取样器是性能测试中向服务器发送请求,记录响应信息,记录响应时间的最小单元 |
|     | 逻辑控制器发送请求的逻辑顺序控制器 |
| 监听器 | 对测试结果进行处理和可视化展示的一系列组件,常用的有图形结果、查看结果树、聚合报告等 |
| 配置原件 | 用于提供对静态数据配置的支持 |
| 定时器 | 用于操作之间设置等待时间 |
| 断言  | 用于检查测试中得到的相应数据等是否符合预期 |
| 前处理器 | 用于在是实际请求发出之前对即将发出的请求进行特殊处理 |
| 后处理器 | 用于对Sampler发出请求后得到的服务器响应进行处理 |

##### 作用域

jmeter中共有8类可被执行的元件(test plan和thread group不属于元件)

| 可执行元件 | 说明(执行顺序从上到下) |
| --- | --- |
| Config Elements(配置元件) | 影响其范围内的所有元件 |
| Pre-porcessors(前置处理器) | 在其作用范围内的每一个sampler元件之前执行 |
| Timer(定时器) | 对其作用范围内的每一个sampler有效 |
| sampler(取样器) | 是不与其他元件发生交互的作用的元件 |
| Post-porcessors(后置处理器) | 在其作用范围内的每一个sampler元件之后执行(除非Sampler得到的返回结果为空) |
| Assirtions(断言) | 对其作用范围内的每一个sampler元件执行后的结果执行校验(除非Sampler得到的返回结果为空) |
| Listener(监听器) | 收集其作用范围内的每一个sampler元件的信息并且呈现出来(除非Sampler得到的返回结果为空) |

在jmeter中，元件的作用域是靠test plan的树形结构中元件的父子关系来确定的，其原则如下：

* sampler不与其他元件相互作用，因此不存在作用域问题
* Logic Controller只对其子节点 中的sampler和Logic Controller作用
* 除sampler和Logic Controller外的其他元件，如果是某个sampler的子节点，则该元件仅对其父节点作用
* 除sampler和Logic Controller外的其他元件，如果其父节点不是sampler，则其作用域是该元件父节点下的其他所有后带节点（包括子节点，子节点的子节点等）
* Pre-porcessors、Post-porcessors和Assirtions等元件仅对Sampler作用，如在它们作用域内没有任何Sampler，则不会被执行；
* 如果在同一作用域范围内有多个同一类型的元件，则这些元件按照它们在test plan中的上下顺序依次执行。

##### 结果树

取样器结果：返回值报200，表示执行接口调试成功
请求：发送的数据
响应数据：返回的数据
Thread Name：线程组名称
Sample Start: 启动开始时间
Load time：加载时长
Latency：等待时长
Size in bytes：发送的数据总大小
Headers size in bytes：发送数据的其余部分大小
Sample Count：发送统计
Error Count：交互错误统计
Response code：返回码
Response message：返回信息
Response headers：返回的头部信息

##### 聚合报告

Label：httpRequest name属性值。
Samples：测试的过程中一共发出了多少个请求即总线程数，（如果模拟10个用户，每个用户迭代10次，这里就显示100），对应图形报表中的样本数目。
Average：单个Request的平均响应时间，计算方法是总运行时间除以发送到服务器的总请求数，对应图形报表中的平均值。
Median：50%用户的响应时间。
90%Line：90%用户的响应时间。
Min：服务器响应的最短时间。
Max：服务器响应的最长时间。
Error%：本次测试中出错率，请求的数量/请求的总数。
Throughput：吞吐量，默认情况下表示每秒完成的请求数。
KB/Sec：每秒从服务器接收到的数据量，即每秒钟请求的字节数，时间单位均为ms。

##### 图形结果

样本数目：总共发送到服务器的请求数。
最新样本：代表时间的数字，是服务器响应最后一个请求的时间。
吞吐量：服务器每分钟处理的请求数。
平均值：总运行时间除以发送到服务器的请求数。
中间值：有一半的服务器响应时间低于改值而另一半高于该值。
偏离：表示服务器响应时间变化、离散程度测量值的大小。

##### 安装使用

1. 下载http://jmeter.apache.org/download_jmeter.cgi
2. 启动,双击JMeter解压路径（apache-jmeter-3.3\bin）bin下面的jmeter.bat即可
3. 选择语言,选项--选择语言---中文
4. 安装BadBoy
5. 双击badboy.exe即可

#### web测试计划

添加测试计划、添加用户组、添加http请求
![[../_resources/unknown_filename-bfde2985.png]]
添加结果树
![[../_resources/unknown_filename-aa66ea0f.png]]

#### 数据库查询测试计划

在jmeter中的lib文件夹下加入mysql-connect.jar
创建一个线程组
![[../_resources/unknown_filename-f3f07773.png]]
在线程组中添加，mysql的连接配置，发送的jdbc请求，和结果监视
![[../_resources/unknown_filename-8eb0a1fe.png]]

#### FTP测试计划

添加测试计划、添加线程组、[ftp在线测试网址](https://dlptest.com/ftp-test/)
![[../_resources/unknown_filename-b1a962c7.png]]
添加ftp请求、添加结果树
![[../_resources/unknown_filename-4c2cef87.png]]

#### Http请求Get,Post测试

添加线程组
![[../_resources/unknown_filename-9ddda1e5.png]]
添加Http信息头管理器，来模拟浏览器，设置请求的内容类型
![[../_resources/unknown_filename-acaec8e1.png]]
添加http请求--get
![[../_resources/unknown_filename-233e387c.png]]
添加http请求---post
![[../_resources/unknown_filename-9e3b249f.png]]
xxxController.java
![[../_resources/unknown_filename-6ded5043.png]]

#### 使用BadBoy进行录制脚本

录制脚本
![[../_resources/unknown_filename-ba4f6465.png]]
设置多个变量，来模拟用户搜索了多个类型的物品
![[../_resources/unknown_filename-76d99fb4.png]]
将搜索框内的值和变量绑定
![[../_resources/unknown_filename-823ea5c4.png]]
导出为jmeter脚本,File-->export to jmeter
添加前置处理器---用户参数
![[../_resources/unknown_filename-1683c82a.png]]
测试脚本执行顺序
![[../_resources/unknown_filename-16a81774.png]]

