---

Created at: 2019-06-12
Last updated at: 2019-06-12
tags: 
  - 大数据
  - elasticsearch
  - kibana

---

# 分布式搜索框架ES


## 分布式搜索框架ES

##### 什么是全文搜索？

将非结构化数据(如文本)中的一部分信息提取出来，重新组织，使其变得有一定结构，然后对此有一定结构的数据进行搜索，从而达到搜索相对较快的目的。这部分从非结构化数据中提取出的然后重新组织的信息，我们称之索引。而先建立好索引，再对索引进行搜索的过程就叫全文检索(Full-text Search)。
![[../_resources/unknown_filename-17d29035.png]]
![[../_resources/unknown_filename-5579020a.png]]
正排索引（index）: 索引的作用相当于图书的目录，可以根据目录中的页码快速找到所需的内容。
倒排索引（inverted index）：倒排索引是实现“单词-文档矩阵”的一种具体存储形式。通过倒排索引可以根据单词快速的获取包含此单词的文档列表。

##### 哪几种全文搜索框架，区别是什么？

| 对比项 | ElasticSearch | solr |
| --- | --- | --- |
| 分布式 | 自带分布式协调功能 | 基于zookepper |
| 数据格式 | json | json，xml，cvs |
| 查询的性能 | 实时搜索，性能强劲 | 偏向于传统的基于已经存在的数据搜索，实时搜索性能弱 |
| 大数据 | 影响很小 | 性能明显下降 |

##### es的优点是什么？

1. es在实时搜索上性能更佳，超过了solr。

* es的开源社区非常活跃，文档齐全。目前有大量的公司在用，并且还有很多使用solr的公司在转换成es。github（1300亿行代码）的搜索使用的就是es。还有淘宝，京东。

#### ElasticSearch简介

ElasticSearch是一个基于Lucene的搜索服务器。它提供了一个分布式多用户能力的全文搜索引擎，基于RESTful web接口。ElasticSearch是用Java开发的，并作为Apache许可条款下的开放源码发布，是当前流行的企业级搜索引擎。设计用于云计算中，能够达到实时搜索，稳定，可靠，快速，安装使用方便。被很多企业用作分布式数据库。
elastic下面有三款产品：ElasticSearch 存储搜索，logstach 日志收集，kinbana 数据分析加图形展示。
![[../_resources/unknown_filename-47c5f562.png]]
Lucene是apache软件基金会4 jakarta项目组的一个子项目，是一个开放源代码的全文检索引擎工具包，但它不是一个完整的全文检索引擎，而是一个全文检索引擎的架构，提供了完整的查询引擎和索引引擎，部分文本分析引擎（英文与德文两种西方语言）。
lucene之父是Doug Cutting。
生活中，可能所有人都间接用过他的作品，他是Lucene、Nutch 、Hadoop等项目的发起人。是他，把高深莫测的搜索技术形成产品，贡献给普罗大众；还是他，打造了目前在云计算和大数据领域里如日中天的Hadoop。他是某种意义上的盗火者，他就是Doug Cutting。

#### ElasticSearch的环境搭建

1. 文件准备
	下载地址：https://artifacts.elastic.co/downloads/ElasticSearch/ElasticSearch-6.4.0.tar.gz
	将下载下来的es的安装文件进行解压
	在linux上输入:
	tar -zxvf ElasticSearch-6.4.0.tar.gz
	然后移动到/opt/kafka里面，没有就新建，输入
	mkdir /opt/ ElasticSearch
	mv ElasticSearch-6.4.0 /opt/ ElasticSearch / ElasticSearch-6.4.0
2. 环境配置
	编辑 /etc/profile 文件 （已经配置过）
	输入:
	vim /etc/profile
	添加:
	`export ES_HOME= /opt/ElasticSearch/ElasticSearch-6.4.0 export PATH=.:${JAVA_HOME}/bin:${SCALA_HOME}/bin:${SPARK_HOME}/bin:${HADOOP_HOME}/bin:${HADOOP_HOME}/sbin:${ZK_HOME}/bin:${HBASE_HOME}/bin:${HIVE_HOME}/bin:${KAFKA_HOME}/bin:${ES_HOME}/bin:$PATH`
	输入:
	source /etc/profile
	使配置生效
3. 修改配置文件
	3.1. 分别创建两个ElasticSearch节点的数据目录和日志目录
	mkdir -p /opt/ElasticSearch/data
	mkdir -p /opt/ElasticSearch/logs
	3.2. 分修改操作系统的内核配置文件vi /etc/sysctl.conf
	#在配置文件最后面添加如下内容
	vm.max_map_count=655360
	然后立即生效
	sysctl -p
	3.3. 修改limits.conf文件vim /etc/security/limits.conf
	#在文件末尾添加如下内容：
	elk soft nofile 65536
	elk hard nofile 131072
	elk soft nproc 4096
	elk hard nproc 4096
	3.4. 修改节点的配置文件jvm.options
	vi /opt/ElasticSearch/ElasticSearch-6.4.0/config/jvm.options
	修改如下两个选项：
	-Xms512m
	-Xmx512m
	3.5. 修改节点的配置文件ElasticSearch.yml
	`cluster.name: my-es node.name: node-1 path.data: /opt/ElasticSearch/data path.logs: /opt/ElasticSearch/logs bootstrap.memory_lock: false bootstrap.system_call_filter: false network.host: 192.168.153.201 http.port: 9200 discovery.zen.ping.unicast.hosts: ["master", "slave1","slave2"] discovery.zen.minimum_master_nodes: 2`
	3.6. 由于ElasticSearch启动的时候不能直接用root用户启动，所以需要创建普通用户,并给/opt/ElasticSearch授权
	添加用户
	useradd elk
	授权
	chown -R elk:elk /opt/ElasticSearch
	3.7. 将master机器修改好的配置文件拷贝至slave1和slave2上
	scp -r /opt/ElasticSearch/ slave1:/opt/
	useradd elk
	chown -R elk:elk /opt/ElasticSearch
	scp /etc/profile slave1:/etc/profile
	scp /etc/sysctl.conf slave1:/etc/sysctl.conf
	scp /etc/security/limits.conf slave1:/etc/security/limits.conf
	sysctl -p
	source /etc/profile
	3.8. 修改slave1和slave2上的配置文件 /opt/ElasticSearch/ElasticSearch-6.4.0/config/ElasticSearch.yml
	node.name: node-2
	network.host: 192.168.153.202
4. 启动集群
	注意：必须首先切换到elk用户
	su elk
	ElasticSearch -d
	![[../_resources/unknown_filename-0120bc27.png]]

#### ElasticSearch常用命令

索引（index）：es将数据存储在一个或者多个索引上，索引是文档的集合。索引就相当于传统数据库中的一个数据库，oracle中的schema。索引的名称必须是小写的。一个es集群中可以有多个索引。
文档类型（documentType）：文档类型是索引中的逻辑分区，包含相同类别的文档。一个索引中可以有多个类型，相当于sql中的表。
文档（document）：文档是es中的最小单位，json格式，相当于sql中的一行数据。

##### 创建一个索引

shards：分片数，一个索引分几个片存储，多个分片可以提升读写速度。
replicas：副本数量，分多个副本存储索引，好处是防止一个节点挂掉，数据丢失。作用一提升可靠性，一旦数据丢失可以从副本中恢复。作用二：提高查询速度，高并发时，可以通过负载均衡的方式读取多个副本上的数据。
创建一个索引名为school，文档类型为student的索引：
![[../_resources/unknown_filename-1bd64e9f.png]]

    {
    	"settings":{
    		"number_of_shards":3,
    		"number_of_replicas":1
    	},
    	"mappings":{
    		"student":{
    			"properties":{
    				"name":{
    					"type":"text"
    				},
    				"stuno":{
    					"type":"integer"
    				},
    				"age":{
    					"type":"integer"
    				},
    				"birthday":{
    					"type":"date",
    					"format":"yyyy-MM-dd"
    				}
    			}
    		}
    	}
    }


![[../_resources/unknown_filename-35a82bd4.png]]

##### 插入数据

不指定ID，系统会自动分配id
![[../_resources/unknown_filename-c9329e4d.png]]

    {
             "name":"陈建",
             "stuno":20190101,
             "age":35,
             "birthday":"1984-10-10"
    }


指定id，如果id不存在，正常插入，如果已经存在，数据根据id发生update。
![[../_resources/unknown_filename-b81ff63b.png]]

##### 查询数据

查询所有：
get方式：
`http://192.168.153.201:9200/school/student/_search`
按照id查询：
get方式：
`http://192.168.153.201:9200/school/student/ZHqhRGsBA2TGitumb40H/?_source`
![[../_resources/unknown_filename-368dd388.png]]
_source=列名，返回需要显示的列值
![[../_resources/unknown_filename-055a502c.png]]
显示含有“张”关键字的前2条数据：
{
"query":{
"match":{
"name":"张"
},
"from":1,
"size":2
}
}

##### 更新数据

![[../_resources/unknown_filename-b81ff63b.png]]

##### 删除数据

删除前：
![[../_resources/unknown_filename-e9045fe7.png]]
![[../_resources/unknown_filename-da28bfb2.png]]
删除后：
![[../_resources/unknown_filename-5ab00c84.png]]
不能直接删除type
![[../_resources/unknown_filename-a0b572d9.png]]
可以删除索引，慎用，一旦删除，整个库就没有办法恢复，rm -rf *
![[../_resources/unknown_filename-f8e5794c.png]]

#### 图形化操作工具

##### 安装配置ES前端图形化操作工具kibana

kibana是一个基于浏览器页面的ElasticSearch前端展示工具，也是一个开源和免费的工具，Kibana可以为 Logstash 和 ElasticSearch 提供的日志分析友好的 Web 界面，可以帮助您汇总、分析和搜索重要数据日志。

1. 下载kibana，并上传到master服务器上
	下载地址：https://artifacts.elastic.co/downloads/kibana/kibana-6.4.0-linux-x86_64.tar.gz
2. 解压缩kibana-6.4.0-linux-x86_64.tar.gz到/opt/ElasticSearch/ kibana文件夹中
3. 修改配置文件：/opt/ElasticSearch/kibana/config
	#修改如下内容：
	#对外服务监听端口
	第2行
	server.port: 5601
	#绑定可以访问5601端口服务的IP地址，0.0.0.0表示任何地址在没有防火墙限制的情况下都可以访问，生产环境别这样设置，不安全。
	第7行
	server.host: "0.0.0.0"
	#默认值为主机名称，表示kibana实例绑定的主机，可以是IP地址或者主机名称.
	第25行
	server.name: "master"
	#用来处理ES请求的服务URL
	第28行
	elasticsearch.url: "http://192.168.153.201:9200"
	#用来控制证书的认证，可选的值为full，none，certificate。此处由于没有证书，所以设置为null，否则启动会提示错误.
	第65行
	ElasticSearch.ssl.verificationMode: none
4. 启动kibana
	进入 /opt/ElasticSearch/kibana/bin/目录
	执行 nohup kibana & 启动kibana
	查看日志：tail -f nohup.out
5. 测试kibana
	打开浏览器访问http://192.168.153.201:5601，即可看到图形化操作工具
	![[../_resources/unknown_filename-043cb7cd.png]]

##### 安装配置head插件

1. 安装node.js、npm和git工具yum -y install nodejs npm git
2. 下载head插件到/opt/elasticsearch/head目录
	创建目录/opt/elasticsearch/head
	cd  /opt/elasticsearch/head
	git clone https://github.com/mobz/elasticsearch-head.git
	![[../_resources/unknown_filename-db837a4e.png]]
3. 修改源地址为淘宝npm镜像，加快下载速度
	npm config set registry http://registry.npm.taobao.org/
4. 进入到head插件程序目录安装head所需的库和第三方框架
	cd /data/ElasticSearch-head
	npm install
5. 修改head目录的配置文件
	`/opt/elasticsearch/head/elasticsearch-head/_site/app.js`
	找到如下内容：
	`this.base_uri = this.config.base_uri || this.prefs.get("app-base_uri") || "http://xxx";;`
	将其中的"http://xxx";; 改为"http://对外通信的ip:9200";
	解释：
	可以修改为任意一台集群中的地址，这里我设了master的地址，这里表示head插件将通过192.168.153.201这台ES机器的对外通信的ip访问es集群中的任意一个节点，上述配置的连ES服务器的对外通信的ip，则必须在该ES服务器设置如下第六步，只有该台服务器需要设置第六步
	修改/opt/elasticsearch/head/elasticsearch-head/Gruntfile.js
	打开这个js文件找到如下图所示的地方，默认文件中是没有hostname属性的，我们需要手动添加。
	`connect: { server: { options: { port: 9100, base: '.', keepalive: true, hostname: '*' } } }`
6. 修改es配置文件，允许head跨域名访问es，需要重启
	`http.cors.enabled: true http.cors.allow-origin: "*"`
	解释：
	(http.cors.enabled: true)表示开启head跨域名访问支持，默认为false
	(http.cors.allow-origin: "") 表示允许跨域名允许的域名地址，表示所有
	此部只需要在安装head插件的es服务器上添加即可。
7. 重启es
	![[../_resources/unknown_filename-ad686359.png]]
8. 启动head插件服务
	cd /opt/ElasticSearch/head/ElasticSearch-head
	npm run start
9. 访问head插件
	访问方式：http://对外通信的ip:9100

#### java操作ElasticSearch

1. 创建springboot工程
	![[../_resources/unknown_filename-da22bbf2.png]]
2. 修改配置文件
	`spring: data: elasticsearch: #集群名称 cluster-name: my-es #集群的节点ip和端口 cluster-nodes: master:9300,slave1:9300,slave2:9300`
3. 创建实体类

#### 实战案例（通过kibana实现java应用的性能监测）

服务端server配置

1. 下载和解压缩apm（Application Performance Management & Monitoring） server。
	Download and unpack APM Server
	![[../_resources/unknown_filename-7a3273da.png]]
2. 修改配置
	Edit the configuration
	/home/chenjian/apm-server-6.4.0-linux-x86_64/apm-server.yml
	![[../_resources/unknown_filename-cd182d74.png]]
3. 启动apm服务
	Start APM Server
	./apm-server -e
	![[../_resources/unknown_filename-44cc1e49.png]]
4. 查看apm服务的状态
	APM Server status
	![[../_resources/unknown_filename-70152335.png]]

代理端agent配置

1. 安装apm代理端agent
	Install the APM agent
	![[../_resources/unknown_filename-422f2c9a.png]]
	![[../_resources/unknown_filename-390e2dce.png]]
2. 启动代理
	Start your application with the javaagent flag
	![[../_resources/unknown_filename-ae1d4ced.png]]
	![[../_resources/unknown_filename-a8ee1b42.png]]
	`-javaagent:F:\elastic-apm-agent-0.7.1.jar -Delastic.apm.service_name=chenjian -Delastic.apm.server_url=http://192.168.153.201:8200 -Delastic.apm.application_packages=com.aaa`
3. 检测agent
	Agent status
	![[../_resources/unknown_filename-4bcfab84.png]]
4. 导入kinbana对象
	Load Kibana objects
	![[../_resources/unknown_filename-43b3fc62.png]]

发布监控
![[../_resources/unknown_filename-088ca097.png]]

