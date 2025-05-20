---

Created at: 2019-05-24
Last updated at: 2019-05-24
tags: 
  - 大数据
  - kafka

---

# 分布式消息队列kafka


## 分布式消息队列kafka

#### 什么是消息队列？为什么使用消息队列？

消息传输过程中的容器统一称为消息队列。
![[../_resources/unknown_filename-cd88910d.png]]
用户注册成功之后需要做一系列的操作，以前是串行一次执行操作，加入某个操作延时，会导致用户体验度下降。引入消息队列之后，各种操作自己去消息队列中消费消息，可以并行的执行对应操作。消息队列可以保持消息的先后顺序。并且可以识别消息是否被消费。防止重复发邮件的发短信的异常情况。

| 特性  | ActiveMQ | RabbitMQ | RocketMQ | kafka |
| --- | --- | --- | --- | --- |
| 单机吞吐量 | 万级  | 万级  | 10万级 | 10万级(大数据场景) |
| topic数量对吞吐量的影响 | 无   | 无   | topic可达几百/几千的级别,吞吐量会有小幅下降,这一点是rocketMQ的一大优势 | topic可达几十/几百的级别,吞吐量会有大幅下降，加入要支持大规模的topic，需要增加机器资源 |
| 时效性 | ms级 | us级 | ms级 | ms级以内 |
| 可用性 | 高   | 高   | 非常高,分布式 | 非常高,分布式,一个数据多个副本 |
| 消息可靠性 | 有较低的概率丢失消息 | 有较低的概率丢失消息 | 可以做到零丢失 | 可以做到零丢失 |
| 功能支持 | MQ领域的功能极其完善 | MQ领域的功能极其完善 | MQ领域的功能较为完善 | 支持简单的MQ功能,一般用于大数据,实时计算及日志采集 |

#### kafka简介

kafka是阿帕奇组织顶级项目。是一个分布式的流处理平台。
kafka是一个被用来构建实时数据管道和流媒体应用的框架。是一个水平扩展的，高容错的，贼快的，已经在数千家公司中得到应用。
![[../_resources/unknown_filename-d5b870fe.png]]
![[../_resources/unknown_filename-5c2e0f63.png]]

| Kafka名词解释 | 工作方式 |
| --- | --- |
| Producer | 消息生产者，就是向kafka broker发消息的客户端。 |
| Consumer | 消息消费者，向kafka broker取消息的客户端 |
| Topic | 主题，可以理解为一个队列。 |
| Consumer Group (CG) | 这是kafka用来实现一个topic消息的广播（发给所有的consumer）和单播（发给任意一个consumer）的手段。一个topic可以有多个CG。topic的消息会复制（不是真的复制，是概念上的）到所有的CG，但每个partion只会把消息发给该CG中的一个consumer。如果需要实现广播，只要每个consumer有一个独立的CG就可以了。要实现单播只要所有的consumer在同一个CG。用CG还可以将consumer进行自由的分组而不需要多次发送消息到不同的topic。 |
| Broker | 一台kafka服务器就是一个broker。一个集群由多个broker组成。一个broker可以容纳多个topic。 |
| Partition | 为了实现扩展性，一个非常大的topic可以分布到多个broker（即服务器）上，一个topic可以分为多个partition，每个partition是一个有序的队列。partition中的每条消息都会被分配一个有序的id（offset）。kafka只保证按一个partition中的顺序将消息发给consumer，不保证一个topic的整体（多个partition间）的顺序。 |
| Offset | kafka的存储文件都是按照offset.kafka来命名，用offset做名字的好处是方便查找。例如你想找位于2049的位置，只要找到2048.kafka的文件即可。当然the first offset就是00000000000.kafka |

##### Consumer与topic关系

本质上kafka只支持Topic；

* 每个group中可以有多个consumer，每个consumer属于一个consumer group；
	通常情况下，一个group中会包含多个consumer，这样不仅可以提高topic中消息的并发消费能力，而且还能提高"故障容错"性，如果group中的某个consumer失效那么其消费的partitions将会有其他consumer自动接管。

* 对于Topic中的一条特定的消息，只会被订阅此Topic的每个group中的其中一个consumer消费，此消息不会发送给一个group的多个consumer；
	那么一个group中所有的consumer将会交错的消费整个Topic，每个group中consumer消息消费互相独立，我们可以认为一个group是一个"订阅"者。
* 在kafka中,一个partition中的消息只会被group中的一个consumer消费(同一时刻)；
	一个Topic中的每个partions，只会被一个"订阅者"中的一个consumer消费，不过一个consumer可以同时消费多个partitions中的消息。
* kafka的设计原理决定,对于一个topic，同一个group中不能有多于partitions个数的consumer同时消费，否则将意味着某些consumer将无法得到消息。

kafka只能保证一个partition中的消息被某个consumer消费时是顺序的；事实上，从Topic角度来说,当有多个partitions时,消息仍不是全局有序的。

##### Kafka消息的分发

Producer客户端负责消息的分发

* kafka集群中的任何一个broker都可以向producer提供metadata信息,这些metadata中包含"集群中存活的servers列表"/"partitions leader列表"等信息；
* 当producer获取到metadata信息之后, producer将会和Topic下所有partition leader保持socket连接；
* 消息由producer直接通过socket发送到broker，中间不会经过任何"路由层"，事实上，消息被路由到哪个partition上由producer客户端决定；
	比如可以采用"random""key-hash""轮询"等,如果一个topic中有多个partitions,那么在producer端实现"消息均衡分发"是必要的。
* 在producer端的配置文件中,开发者可以指定partition路由的方式。

Producer消息发送的应答机制
设置发送数据是否需要服务端的反馈,有三个值0,1,-1
0: producer不会等待broker发送ack
1: 当leader接收到消息之后发送ack
-1: 当所有的follower都同步消息成功后发送ack
request.required.acks=0

##### Consumer的负载均衡

当一个group中,有consumer加入或者离开时,会触发partitions均衡.均衡的最终目的,是提升topic的并发消费能力，步骤如下：

1. 假如topic1,具有如下partitions: P0,P1,P2,P3
2. 加入group中,有如下consumer: C1,C2
3. 首先根据partition索引号对partitions排序: P0,P1,P2,P3
4. 根据consumer.id排序: C0,C1
5. 计算倍数: M = [P0,P1,P2,P3].size / [C0,C1].size,本例值M=2(向上取整)
6. 然后依次分配partitions: C0 = [P0,P1],C1=[P2,P3],即Ci = [P(i * M),P((i + 1) * M -1)]
	![[../_resources/unknown_filename-947bfe7e.png]]

#### Kafka文件存储基本结构

* 在Kafka文件存储中，同一个topic下有多个不同partition，每个partition为一个目录，partiton命名规则为topic名称+有序序号，第一个partiton序号从0开始，序号最大值为partitions数量减1。
* 每个partion(目录)相当于一个巨型文件被平均分配到多个大小相等segment(段)数据文件中。但每个段segment file消息数量不一定相等，这种特性方便old segment file快速被删除。默认保留7天的数据。
	![[../_resources/unknown_filename-f189e515.png]]
* 每个partiton只需要支持顺序读写就行了，segment文件生命周期由服务端配置参数决定。（什么时候创建，什么时候删除）
	![[../_resources/unknown_filename-5a9b52d2.png]]

数据有序的讨论？
一个partition的数据是否是有序的？
间隔性有序，不连续
针对一个topic里面的数据，只能做到partition内部有序，不能做到全局有序。
特别加入消费者的场景后，如何保证消费者消费的数据全局有序的？伪命题。
只有一种情况下才能保证全局有序？就是只有一个partition。

##### Kafka Partition Segment

* Segment file组成：由2大部分组成，分别为index file和data file，此2个文件一一对应，成对出现，后缀".index"和“.log”分别表示为segment索引文件、数据文件。
	![[../_resources/unknown_filename-e57943d4.png]]
* Segment文件命名规则：partion全局的第一个segment从0开始，后续每个segment文件名为上一个segment文件最后一条消息的offset值。数值最大为64位long大小，19位数字字符长度，没有数字用0填充。
* 索引文件存储大量元数据，数据文件存储大量消息，索引文件中元数据指向对应数据文件中message的物理偏移地址。
	![[../_resources/unknown_filename-9b59aaab.png]]
	3，497：当前log文件中的第几条信息，存放在磁盘上的那个地方
	上述图中索引文件存储大量元数据，数据文件存储大量消息，索引文件中元数据指向对应数据文件中message的物理偏移地址。
	其中以索引文件中元数据3,497为例，依次在数据文件中表示第3个message(在全局partiton表示第368772个message)、以及该消息的物理偏移地址为497。
* segment data file由许多message组成， qq物理结构如下：

| 关键字 | 解释说明 |
| --- | --- |
| 8 byte offset | 在parition(分区)内的每条消息都有一个有序的id号，这个id号被称为偏移(offset),它可以唯一确定每条消息在parition(分区)内的位置。即offset表示partiion的第多少message |
| 4 byte message size | message大小 |
| 4 byte CRC32 | 用crc32校验message |
| 1 byte “magic" | 表示本次发布Kafka服务程序协议版本号 |
| 1 byte “attributes" | 表示为独立版本、或标识压缩类型、或编码类型。 |
| 4 byte key length | 表示key的长度,当key为-1时，K byte key字段不填 |
| K byte key | 可选  |
| value bytes payload | 表示实际消息数据。 |

##### Kafka 查找message

读取offset=368776的message，需要通过下面2个步骤查找。
![[../_resources/unknown_filename-e57943d4.png]]

1. 查找segment file
	00000000000000000000.index表示最开始的文件，起始偏移量(offset)为0
	00000000000000368769.index的消息量起始偏移量368770 = 368769 + 1
	00000000000000737337.index的起始偏移量为737338=737337 + 1
	其他后续文件依次类推。
	以起始偏移量命名并排序这些文件，只要根据offset **二分查找**文件列表，就可以快速定位到具体文件。当offset=368776时定位到00000000000000368769.index和对应log文件。
2. 通过segment file查找message
	当offset=368776时，依次定位到00000000000000368769.index的元数据物理位置和00000000000000368769.log的物理偏移地址
	然后再通过00000000000000368769.log顺序查找直到offset=368776为止。

#### kafka常用命令

为了避免单点故障。一般是使用集群避免单点故障。

1. 启动zookeeper
	在所有的机器上执行
	/opt/zookeeper/zookeeper3.4/bin/zkServer.sh start
	![[../_resources/unknown_filename-8ce61605.png]]
2. 启动kafka集群
	在所有的机器上执行
	nohup kafka-server-start.sh /opt/kafka/kafka1.0.0/config/server.properties &
	nohup 不中断
	& 后台运行
	查看运行状态
	![[../_resources/unknown_filename-6128d640.png]]
3. 查看kafka的主题topic
	kafka-topics.sh --list --zookeeper master:2181,slave1:2181,slave2:2181
	kafka的元数据信息被保存在zookeeper中
	下面是所有节点的信息:
	![[../_resources/unknown_filename-f6fbe397.png]]
4. 创建新主题topic
	在任意一台机器上执行：
	kafka-topics.sh --create --topic qy93 --partitions 1 --replication-factor 3 --zookeeper master:2181,slave1:2181,slave2:2181
	:partitions 1 创建一个分区,一个topic的消息放在一个分区上。多个分区要比一个分区写入的速度快。
	:replication-factor 指定分区的副本数,一个消息要有三个副本。副本的数量不能超过集群的节点数。
	![[../_resources/unknown_filename-c0167491.png]]
	使用zkui页面查看
	![[../_resources/unknown_filename-5d10defc.png]]
5. 发送消息，生产消息
	kafka-console-producer.sh --topic qy93 --broker-list master:9092,slave1:9092,slave2:9092
	:broker-list 指的是kafka集群，9092是kafka默认端口号
6. 接受消息，消费消息
	kafka-console-consumer.sh --topic qy93 --zookeeper master:2181,slave1:2181,slave2:2181 --from-beginning
	:from-beginning消费旧消息

#### java实现kafka消息生产和消息消费

1. 创建springboot工程,添加jar包

    <dependency>
        <groupId>org.springframework.kafka</groupId>
        <artifactId>spring-kafka</artifactId>
    </dependency>
    
2. 编辑全局配置文件

    #指定要连接的kafka集群地址
    spring.kafka.bootstrap-servers=master:9092,slave1:9092,slave2:9092
    #指定唯一的组标识
    spring.kafka.consumer.group-id=qy93_group
    
3. 创建消息生产者类

    @Component
    @EnableScheduling
    public class KafkaProducer {
        @Autowired
        private KafkaTemplate kafkaTemplate;
        @Scheduled(cron = "0/1 * * * * *")
        public void sendMessage(){
            String message="I love you !"+new Date();
           // System.out.println(message);
            kafkaTemplate.send("qy93",message);
        }
    }
    
4. 创建消息消费者类

    @Component
    public class KafkaConsumer {
        @KafkaListener(topics = "qy93")
        public void getMessage(ConsumerRecord record){
            System.out.println("接收到的消息："+record.value()+record.offset());
        }
    }
    

#### Storm上游数据源之Kakfa

##### Kafka是什么

在流式计算中，Kafka一般用来缓存数据，Storm通过消费Kafka的数据进行计算。
KAFKA + STORM +REDIS

* Apache Kafka是一个开源消息系统，由Scala写成。是由Apache软件基金会开发的一个开源消息系统项目。
* Kafka最初是由LinkedIn开发，并于2011年初开源。2012年10月从Apache Incubator毕业。该项目的目标是为处理实时数据提供一个统一、高通量、低等待的平台。
* Kafka是一个分布式消息队列：生产者、消费者的功能。它提供了类似于JMS的特性，但是在设计实现上完全不同，此外它并不是JMS规范的实现。
* Kafka对消息保存时根据Topic进行归类，发送消息者称为Producer,消息接受者称为Consumer,此外kafka集群有多个kafka实例组成，每个实例(server)成为broker。
* 无论是kafka集群，还是producer和consumer都依赖于zookeeper集群保存一些meta信息，来保证系统可用性

##### JMS是什么

1. JMS的基础
	JMS是什么：JMS是Java提供的一套技术规范
	JMS干什么用：用来异构系统 集成通信，缓解系统瓶颈，提高系统的伸缩性增强系统用户体验，使得系统模块化和组件化变得可行并更加灵活
	通过什么方式：生产消费者模式（生产者、服务器、消费者）
	jdk，kafka，activemq……
	![[../_resources/unknown_filename-06455f36.png]]
2. JMS消息传输模型

* 点对点模式（一对一，消费者主动拉取数据，消息收到后消息清除）
	点对点模型通常是一个基于拉取或者轮询的消息传送模型，这种模型从队列中请求信息，而不是将消息推送到客户端。这个模型的特点是发送到队列的消息被一个且只有一个接收者接收处理，即使有多个消息监听者也是如此。
* 发布/订阅模式（一对多，数据生产后，推送给所有订阅者）
	发布订阅模型则是一个基于推送的消息传送模型。发布订阅模型可以有多种不同的订阅者，临时订阅者只在主动监听主题时才接收消息，而持久订阅者则监听主题的所有消息，即时当前订阅者不可用，处于离线状态。
	queue.put（object） 数据生产
	queue.take(object) 数据消费
	![[../_resources/unknown_filename-173ae5a2.png]]

3. JMS核心组件

* Destination：消息发送的目的地，也就是前面说的Queue和Topic。
* Message ：从字面上就可以看出是被发送的消息。
* Producer： 消息的生产者，要发送一个消息，必须通过这个生产者来发送。
* MessageConsumer： 与生产者相对应，这是消息的消费者或接收者，通过它来接收一个消息。
	通过与ConnectionFactory可以获得一个connection
	通过connection可以获得一个session会话。
	![[../_resources/unknown_filename-f698b3cf.png]]

##### 常见的类JMS消息服务器

1. JMS消息服务器 ActiveMQ
	ActiveMQ 是Apache出品，最流行的，能力强劲的开源消息总线。ActiveMQ 是一个完全支持JMS1.1和J2EE 1.4规范的。主要特点：

* 多种语言和协议编写客户端。语言: Java, C, C++, C#, Ruby, Perl, Python, PHP。应用协议: OpenWire,Stomp REST,WS Notification,XMPP,AMQP
* 完全支持JMS1.1和J2EE 1.4规范 (持久化,XA消息,事务)
* 对Spring的支持,ActiveMQ可以很容易内嵌到使用Spring的系统里面去,而且也支持Spring2.0的特性
* 通过了常见J2EE服务器(如 Geronimo,JBoss 4, GlassFish,WebLogic)的测试,其中通过JCA 1.5 resource adaptors的配置,可以让ActiveMQ可以自动的部署到任何兼容J2EE 1.4 商业服务器上
* 支持多种传送协议:in-VM,TCP,SSL,NIO,UDP,JGroups,JXTA
* 支持通过JDBC和journal提供高速的消息持久化
* 从设计上保证了高性能的集群,客户端-服务器,点对点
* 支持Ajax
* 支持与Axis的整合
* 可以很容易得调用内嵌JMS provider,进行测试

2. 分布式消息中间件 Metamorphosis
	Metamorphosis (MetaQ) 是一个高性能、高可用、可扩展的分布式消息中间件，类似于LinkedIn的Kafka，具有消息存储顺序写、吞吐量大和支持本地和XA事务等特性，适用于大吞吐量、顺序消息、广播和日志数据传输等场景，在淘宝和支付宝有着广泛的应用，现已开源。主要特点：

* 生产者、服务器和消费者都可分布
* 消息存储顺序写
* 性能极高,吞吐量大
* 支持消息顺序
* 支持本地和XA事务
* 客户端pull，随机读,利用sendfile系统调用，zero-copy ,批量拉数据
* 支持消费端事务
* 支持消息广播模式
* 支持异步发送消息
* 支持http协议
* 支持消息重试和recover
* 数据迁移、扩容对用户透明
* 消费状态保存在客户端
* 支持同步和异步复制两种HA
* 支持group commit

3. 分布式消息中间件 RocketMQ
	RocketMQ 是一款分布式、队列模型的消息中间件，具有以下特点：

* 能够保证严格的消息顺序
* 提供丰富的消息拉取模式
* 高效的订阅者水平扩展能力
* 实时的消息订阅机制
* 亿级消息堆积能力
* Metaq3.0 版本改名，产品名称改为RocketMQ

4. 其他MQ

* .NET消息中间件 DotNetMQ
* 基于HBase的消息队列 HQueue
* Go 的 MQ 框架 KiteQ
* AMQP消息服务器 RabbitMQ
* MemcacheQ 是一个基于 MemcacheDB 的消息队列服务器。

##### 为什么需要消息队列（重要）

消息系统的核心作用就是三点：解耦，异步和并行
以用户注册的案列来说明消息系统的作用

1. 用户注册的一般流程
	问题：随着后端流程越来越多，每步流程都需要额外的耗费很多时间，从而会导致用户更长的等待延迟。
	![[../_resources/unknown_filename-cec4bc5e.png]]
2. 用户注册的并行执行
	问题：系统并行的发起了4个请求，4个请求中，如果某一个环节执行1分钟，其他环节再快，用户也需要等待1分钟。如果其中一个环节异常之后，整个服务挂掉了。
	![[../_resources/unknown_filename-b93296de.png]]
3. 用户注册的最终一致
	保证主流程的正常执行、执行成功之后，发送MQ消息出去。
	需要这个destination的其他系统通过消费数据再执行，最终一致。
	![[../_resources/unknown_filename-c273d2e7.png]]
	![[../_resources/unknown_filename-08e08ce8.png]]



