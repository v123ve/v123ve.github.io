---

Created at: 2019-04-01
Last updated at: 2019-05-19
tags: 
  - redis
  - 主从复制
  - 集群

---

# Redis


## Redis

Redis是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。从2010年3月15日起，Redis的开发工作由VMware主持。从2013年5月开始，Redis的开发由Pivotal赞助。
REmote DIctionary Server(Redis) 是一个由Salvatore Sanfilippo写的key-value存储系统。
Redis是完全开源免费的，遵守BSD协议，是一个高性能的key-value数据库,它通常被称为数据结构服务器
Redis 与其他 key - value 缓存产品有以下三个特点：

* Redis支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载进行使用。

* Redis不仅仅支持简单的key-value类型的数据，同时还提供list，set，zset，hash等数据结构的存储。
* Redis支持数据的备份，即master-slave模式的数据备份。

##### 优势

* 速度快
	写速度能达到：80000次/S,读速度100000次/秒，基于内存的。使用C语言编写。
* 支持的数据结构丰富
	string字符串，hash（key-value）,set(集合)，zset（有序集合），list（列表）
* 支持的开发语言丰富
	![[../_resources/unknown_filename-7dfbee86.png]]
* 支持主从复制
	redis集群的基础就是主从复制，10G/s.
* 支持数据的持久化
	memecached基于内存的nosql（not only sql）数据库，不能够持久化。redis支持数据的持久化（AOF，到期时间）

##### Redis与其他key-value存储有什么不同？

* Redis有着更为复杂的数据结构并且提供对他们的原子性操作，这是一个不同于其他数据库的进化路径。Redis的数据类型都是基于基本数据结构的同时对程序员透明，无需进行额外的抽象。
* Redis运行在内存中但是可以持久化到磁盘，所以在对不同数据集进行高速读写时需要权衡内存，因为数据量不能大于硬件内存。在内存数据库方面的另一个优点是，相比在磁盘上相同的复杂的数据结构，在内存中操作起来非常简单，这样Redis可以做很多内部复杂性很强的事情。同时，在磁盘格式方面他们是紧凑的以追加的方式产生的，因为他们并不需要进行随机访问

#### redis的安装

1. 修改操作系统的安全级别
	vi /etc/selinux/config
	SELINUX=disabled
2. 关闭防火墙
	chkconfig iptables off
3. 修改主机名
	vi /etc/sysconfig/network
	HOSTNAME=hsy
4. 安装yum扩展源
	因为redis不在centos的标准yum源中。epel(Extra Packages for Enterprise Linux) 为“红帽系”的操作系统提供额外的软件包，适用于RHEL、CentOS和Scientific Linux.
	yum -y install epel-release
5. 安装redis
	yum -y intsall redis
6. 启动redis
	service redis start
	service redis status
	service redis stop

##### redis常用命令

* 进入redis的命令行
	redis-cli -h 127.0.0.1 -p 6379
	-h ip地址
	-p 端口号，默认是6379
* 修改/etc/redis.conf 的第61行,允许其他机器访问。
	bind 192.168.124.200

| 常用命令 | 说明  |
| --- | --- |
| set key value | 设值  |
| get key | 获取redis的key值 |
| dbsize | 查看当前redis有多少个key |
| keys | 查看所有的key |
| flushall | 清空所有的key 慎用 |
| client list | 查看当前所有的客户端连接 |
| client kill ip:port | 端开某个客户端连接 |
| MONITOR | 进入监控模式，可以实时监控所有客户端的操作。 |

##### 数据类型

![[../_resources/unknown_filename-422e767d.png]]

* string 类型是 Redis 最基本的数据类型，string 类型的值最大能存储 512MB。
	![[../_resources/unknown_filename-7392e298.png]]
* Redis hash 是一个键值(key=>value)对集合。
	Redis hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。
	每个 hash 可以存储 232 -1 键值对（40多亿）。
	示例中的qy93hash是hash的key名称，classname为属性名，qy93为name属性值。
	![[../_resources/unknown_filename-6f6abcc2.png]]
* Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）。列表最多可存储 232 - 1 元素 (4294967295, 每个列表可存储40多亿)。
	将aaa保存到list中，list的名称叫作mylist

    192.168.153.160:6379> rpush mylist aaa
    (integer) 1
    192.168.153.160:6379> rpush mylist bbb
    (integer) 2
    192.168.153.160:6379> rpush mylist ccc
    (integer) 3
    获取list中下标为0的值
    192.168.153.160:6379> LINDEX mylist 0
    "aaa"
    192.168.153.160:6379> LINDEX mylist 1
    "bbb"
    192.168.153.160:6379> LINDEX mylist 2
    "ccc"
    192.168.153.160:6379> LINDEX mylist 3
    (nil)
    获取list中所有的值
    192.168.153.160:6379> LRANGE mylist 0 -1
    1) "aaa"
    2) "bbb"
    3) "ccc"
      192.168.153.160:6379> LRANGE mylist 0 2
    1) "aaa"
    2) "bbb"
    3) "ccc"
      192.168.153.160:6379> LINDEX mylist -1
      "ccc"
      LPUSH在list左边追加
      192.168.153.160:6379> LPUSH mylist ddd
      (integer) 4
      192.168.153.160:6379> LRANGE mylist 0 -1
    1) "ddd"
    2) "aaa"
    3) "bbb"
    4) "ccc"
  

list排序
![[../_resources/unknown_filename-bf8bed01.png]]

* Redis的Set是string类型的无序集合。
	set中添加值 sadd “set的key”“set 的值”
	查看所有的值：smembers setName
	删除某个值：srem valuename
	![[../_resources/unknown_filename-50229a99.png]]
* Redis zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。
	不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。
	zset的成员是唯一的,但分数(score)却可以重复。
	zadd 命令
	添加元素到集合，元素在集合中存在则更新对应score
	示例中的myzset为set的key名，0 到1000指的是score在0到1000之间的值
	![[../_resources/unknown_filename-43703b59.png]]

##### java操作redis

    <dependencies>
        <dependency>
            <groupId>redis.clients</groupId>
            <artifactId>jedis</artifactId>
            <version>2.9.0</version>
        </dependency>
    </dependencies>


    public class JedisTest {
        public static void main(String[] args) {
            //连接Redis
            System.out.println("----------测试连接----------");
            Jedis jedis = new Jedis("192.168.124.200",6379);
            String pong = jedis.ping();
            System.out.println(pong);
            //String
            System.out.println("----------String----------");
            jedis.set("mystring","290");
            String mystring = jedis.get("mystring");
            System.out.println(mystring);
            //Hash
            System.out.println("----------Hash----------");
            Map map = new HashMap<String,Object>();
            map.put("name","hsy");
            map.put("age","22");
            jedis.hmset("myhash",map);
            List<String> myhash = jedis.hmget("myhash", "name", "age");
            for (int i = 0; i <myhash.size() ; i++) {
                System.out.println(myhash.get(i));
            }
            //列表
            System.out.println("----------List---------");
            jedis.rpush("mylist","aaa");
            jedis.rpush("mylist","bbb");
            jedis.rpush("mylist","ccc");
            List<String> mylist = jedis.lrange("mylist", 0, -1);
            for (int i = 0; i < mylist.size(); i++) {
                System.out.println(mylist.get(i));
            }
            //Set
            System.out.println("----------Set----------");
            jedis.sadd("myset","12");
            jedis.sadd("myset","34");
            jedis.sadd("myset","56");
            jedis.sadd("myset","12");
            Set<String> myset = jedis.smembers("myset");
            for (String itset : myset) {
                System.out.println(itset);
            }
            //Zset
            System.out.println("----------Zset----------");
            jedis.zadd("myzset",10,"a");
            jedis.zadd("myzset",30,"b");
            jedis.zadd("myzset",20,"c");
            Set<String> myzset = jedis.zrangeByScore("myzset", 0, 100);
            for (String itzset : myzset) {
                System.out.println(itzset);
            }
        }
    }


#### 主从复制

一般来说，要将Redis运用于实际工程项目中，只使用一台Redis是万万不能的，原因如下：
a)从结构上，单个Redis服务器会发生单点故障，并且一台服务器需要处理所有的请求负载，压力较大；
b)从容量上，单个Redis服务器内存容量有限，就算一台Redis服务器内存容量为256G，也不能将所有内存用作Redis存储内存，一般来说，单台Redis最大使用内存不应该超过20G。
![[../_resources/unknown_filename-1c26cdc1.png]]

##### 基本配置

规划主备网络信息，主机192.168.124.200 备机192.168.124.201 保证两台机器互联，要保证主机先启动
![[../_resources/unknown_filename-f3fbd359.png]]

    #安装redis，并配置，可以参考redis安装步骤。
    #修改yum源，增加redis的yum配置
    yum install epel-release -y   
    yum install redis -y
    #修改配置文件
    /etc/redis.conf
    #修改备机配置在备机192.168.124.201的redis.conf中加下面配置
    slaveof 192.168.124.200  6379
    #在从机上查看redis系统日志
    cat /var/log/redis/redis.log


##### 特点

通过主从复制可以允许多个slave server拥有和master server相同的数据库副本。

* master可以有多个slave
* 除了多个slave连到相同的master外，slave也可以连接其他slave形成图状结构
* 主从复制不会阻塞master。也就是说当一个或多个slave与master进行初次同步数据时，master可以继续处理client发来的请求。相反slave在初次同步数据时则会阻塞不能处理client的请求。
* 主从复制可以用来提高系统的可伸缩性,我们可以用多个slave 专门用于client的读请求，比如sort操作可以使用slave来处理。也可以用来做简单的数据冗余
* 可以在master禁用数据持久化，只需要注释掉master 配置文件中的所有save配置，然后只在slave上配置数据持久化。

#### 集群配置

当主备复制场景，无法满足主机的单点故障时，需要引入集群配置。
![[../_resources/unknown_filename-e6942e12.png]]

##### 基本原理

哨兵选举机制，如果有半数节点发现某个异常节点，共同决定改异常节点的状态，如果该节点是主节点，对应的备节点自动顶替为主节点。Sentinel（哨兵）是Redis 的高可用性解决方案：由一个或多个Sentinel 实例 组成的Sentinel 系统可以监视任意多个主服务器，以及这些主服务器属下的所有从服务器，并在被监视的主服务器进入下线状态时，自动将下线主服务器属下的某个从服务器升级为新的主服务器。

##### 集群的特点

1. 所有的redis 节点彼此互联(PING-PONG 机制)，内部使用二进制协议优化传输速度和带宽；
2. 节点的fail 是通过集群中超过半数的节点检测失效时才生效；
3. 客户端与redis 节点直连,不需要中间proxy 层。客户端不需要连接集群所有节点,连接集群中任何一个可用节点即可；
4. redis-cluster把所有的物理节点映射到[0-16383]个slot(哈希槽)上,cluster 负责维护 node<->slot<->value 。

##### 集群选举容错

什么时候整个集群不可用(cluster_state:fail)?

1. 如果集群任意master 挂掉，且当前master 没有slave。集群进入fail 状态,也可以理解成集群的slot 映射[0-16383]不完整时进入fail 状态。
	ps:redis-3.0.0.rc1 加入 cluster-require-full-coverage 参数,默认关闭,打开集群兼容部分失败；
2. 如果集群超过半数以上master 挂掉，无论是否有slave集群进入fail 状态。
	ps:当集群不可用时, 所有对集群的操作做都不可用，收到((error) CLUSTERDOWN The cluster is down)错误。

##### 详细配置

1. 规划网络。
	用一台虚拟机模拟6个节点，一台机器6个节点，创建出3 master、3 salve 环境。
	虚拟机是 CentOS6.9 ，ip地址192.168.124.200
2. 下载redis的源码包
	wget http://download.redis.io/releases/redis-3.2.12.tar.gz
	将包中的 redis-trib.rb 复制到 /usr/local/bin 目录下
	cp /usr/local/bin/redis-3.2.12/src/redis-trib.rb /usr/local/bin/redis-trib.rb
3. 创建 Redis 节点
	首先在 192.168.124.200 机器上 /usr/local 目录下创建 redis_cluster 目录
	mkdir redis_cluster　　
	在 redis_cluster 目录下，创建名为7001、7002，7003、7004、7005，7006的目录
	mkdir 7001 7002 7003 7004 7005 7006
	将 redis.conf 拷贝到这六个目录中,拷贝之前，先修改redis.conf
	cp /etc/redis.conf ./
	redis.conf文件按照下面8项修改内容，然后分别拷贝到6个不同的目录7001，7002，7003，7004，7005，7006中。

| redis.conf | 说明  |
| --- | --- |
| port 7001 | 端口7001,7002,7003 |
| bind 本机ip | 默认ip为127.0.0.1 需要改为其他节点机器可访问的ip 否则创建集群时无法访问对应的端口，无法创建集群 |
| daemonize yes | redis后台运行 |
| pidfile /var/run/redis_7001.pid | pidfile文件对应7000,7001,7002 |
| cluster-enabled yes | 开启集群 把注释#去掉 |
| cluster-config-file nodes_7001.conf | 集群的配置 配置文件首次启动自动生7000,7001,7002 |
| cluster-node-timeout 15000 | 请求超时 默认15秒，可自行设置 |
| appendonly yes | aof日志开启 有需要就开启，它会每次写操作都记录一条日志 |

4. 启动各个节点
	redis-server /usr/local/redis_cluster/7001/redis.conf
	redis-server /usr/local/redis_cluster/7002/redis.conf
	redis-server /usr/local/redis_cluster/7003/redis.conf
	redis-server /usr/local/redis_cluster/7004/redis.conf
	redis-server /usr/local/redis_cluster/7005/redis.conf
	redis-server /usr/local/redis_cluster/7006/redis.conf
	ps -ef|grep redis
5. 创建集群

    #下载ruby-2.3.5.tar.gz
    wget https://cache.ruby-lang.org/pub/ruby/2.3/ruby-2.3.5.tar.gz
    #解压缩
    tar -zxvf  ruby-2.3.5.tar.gz
    #进入ruby
    cd ruby-2.3.5
    #执行脚本
    ./configure  --prefix=/opt/ruby
    make && make install
    #创建软链接
    ln -s /opt/ruby/bin/ruby /usr/bin/ruby
    ln -s /opt/ruby/bin/gem /usr/bin/gem
    #查看安装状态
    ruby  -v
    #在ruby中关联redis
    gem install redis 
    #若报错，缺少zlib
    yum install zlib-devel -y
    cd /usr/local/ruby-2.3.5/ext/zlib
    ruby extconf.rb
    make && make install
    #若报错，缺少openssl
    yum install openssl-devel -y
    cd /usr/local/ruby-2.3.5/ext/openssl
    ruby extconf.rb
    #注意：修改openssl下的Makefile文件，将$(top_srcdir)/include/ruby.h替换../../include/ruby.h
    make && make install
    #创建集群的命令
    /usr/local/bin/redis-trib.rb  create  --replicas 1 192.168.124.200:7001 192.168.124.200:7002  192.168.124.200:7003 192.168.124.200:7004  192.168.124.200:7005  192.168.124.200:7006
    
6. 验证集群
	redis-cli -c -h 192.168.124.200 -p 7001
	其中-c表示以集群方式连接redis，-h指定ip地址，-p指定端口号
	cluster info
	查看集群信息
	cluster nodes
	查看集群节点
	主节点异常时，备节点自动顶替主节点，原主节点恢复后成为备节点

#### 集群节点动态添加删除

##### 添加集群节点

![[../_resources/unknown_filename-3ec44e57.png]]
如果集群节点不够，需要往集群中添加节点时

1. 网络规划,新加入两个节点（Master：7007 slave：7008）。
2. 拷贝节点的配置信息(修改端口号)。
	![[../_resources/unknown_filename-273b63fe.png]]
3. 启动节点
	redis-server /usr/local/redis_cluster/7007/redis.conf
	redis-server /usr/local/redis_cluster/7008/redis.conf
4. 添加节点到集群
	查看原集群的节点信息
	![[../_resources/unknown_filename-ea2b4345.png]]
	/usr/local/bin/redis-trib.rb 新节点 任意老节点
	/usr/local/bin/redis-trib.rb add-node 192.168.124.200:7007 192.168.124.200:7001
	/usr/local/bin/redis-trib.rb add-node 192.168.124.200:7008 192.168.124.200:7001
	错误：
	![[../_resources/unknown_filename-75344cd9.png]]
	解决方法：
	1：删除配置文件/var/lib/redis/nodes-7007.conf，并且使用flushall删除所有的key。
	2：杀死7007对应的节点进程
	![[../_resources/unknown_filename-6229aec1.png]]
	3：重新启动7007对应的节点
	redis-server /usr/local/redis_cluster/7007/redis.conf
	4：加入节点到集群
	/usr/local/bin/redis-trib.rb add-node 192.168.153.105:7007 192.168.153.105:7001
	![[../_resources/unknown_filename-3de6c2df.png]]
	常见问题：
	新加入的节点默认是主节点，如果是从节点，就是异常，需删除此节点，并且修复集群之后再加入。
	修复集群的命令：
	/usr/local/bin/redis-trib.rb fix 192.168.124.200:7002
	查看集群的状态，没有告警之后再添加新节点
	/usr/local/bin/redis-trib.rb check 192.168.124.200:7002
5. 将主节点修改为备节点
	添加完7007和7008节点之后，两个节点默认都是主节点，所以需要将7008设置为备节点。
	1：使用备节点进入命令行
	2：cluster replicate 主节点的nodeID
	cluster replicate ad3df29edef664f6d107bf2b70c03fbb56127330
6. 给新加入的节点分配槽位
	/usr/local/bin/redis-trib.rb reshard 192.168.124.200:7007
	How many slots do you want to move (from 1 to 16384)? 4000
	What is the receiving node ID? ad3df29edef664f6d107bf2b70c03fbb56127330 //新主节点id
	Source node #1:all //all表示从所有主节点中转移1000个哈希槽
	Do you want to proceed with the proposed reshard plan (yes/no)? yes //确认分配
7. 测试效果
	![[../_resources/unknown_filename-0a0f9f01.png]]

##### 删除集群节点

![[../_resources/unknown_filename-e8abfe7e.png]]
如果需要更换节点硬件，那么需要首先从集群中删除节点

1. 删除备节点
	/usr/local/bin/redis-trib.rb del-node 192.168.124.200:7008 13ddd96aec2cb4a89ec069f14d5eb9a82cc86171
	![[../_resources/unknown_filename-7a5a1a24.png]]
2. 删除主节点
	删除槽位不为空的主节点会报错，需先将7007上的所有槽位移动到(任一主节点)上。
	/usr/local/bin/redis-trib.rb reshard 192.168.124.200:7007
	How many slots do you want to move (from 1 to 16384)? 4000
	What is the receiving node ID? 63f1805627ea4828b99efd1672edbd1b027ba39b //7001
	Source node #1:ad3df29edef664f6d107bf2b70c03fbb56127330（7007的nodeId,从哪个节点移动999个槽位）
	Source node #2:done
	Do you want to proceed with the proposed reshard plan (yes/no)? yes //确认分配
	![[../_resources/unknown_filename-e6b1ef2d.png]]
	最后删除没有槽位的7007节点
	/usr/local/bin/redis-trib.rb del-node 192.168.124.200:7007 ad3df29edef664f6d107bf2b70c03fbb56127330
3. 删除节点集群配置文件
	cd /var/lib/redis/
	rm -rf nodes-7007.conf nodes-7008.conf



