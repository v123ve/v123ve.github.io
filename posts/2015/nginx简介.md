---

Created at: 2019-06-12
Last updated at: 2019-06-12
tags: 
  - 大数据
  - nginx

---

# nginx简介


#### nginx简介

Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点（俄文：Рамблер）开发的，第一个公开版本0.1.0发布于2004年10月4日。
Nginx是一款轻量级的Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，在BSD-like 协议下发行。其特点是占有内存少，并发能力强，事实上nginx的并发能力确实在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。

##### 什么是代理？

客户机发送请求时，不会直接到达目标主机，先发给代理服务器，由代理服务器发送给目标服务器。
![[../_resources/unknown_filename-0f9089d9.png]]
代理服务器的好处：

* 起到防火墙的作用。

* 起到缓存的作用，加速访问速度。
* 起到我们想访问但是无法直接访问的目标主机。

代理服务器的分类：

* 正向代理
	必须知道代理服务器的ip和端口，用户能够明显感知到代理服务器的存在。
	![[../_resources/unknown_filename-7aa93559.png]]
* 反向代理
	不需要知道代理服务器的ip和端口，用户无法感知到代理服务器的存在。一般情况下反向代理服务器跟目标服务器在一起。
	![[../_resources/unknown_filename-be9694cd.png]]

#### nginx安装配置

##### 网络规划

![[../_resources/unknown_filename-9144b95e.png]]

##### 安装GCC编译器等工具

1. 安装编译工具及库文件
	yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel
2. 首先要安装 PCRE，PCRE 作用是让 Nginx 支持 Rewrite 功能。
	下载 PCRE 安装包
	http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz
	wget http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz
	解压安装包:
	tar zxvf pcre-8.35.tar.gz
	进入安装包目录
	cd pcre-8.35
	编译安装
	./configure
	make && make install
	查看pcre版本
	pcre-config --version
3. 下载安装Nginx
	在/etc/yum.repos.d/目录下创建一个源配置文件nginx.repo：
	cd /etc/yum.repos.d/
	vim nginx.repo
	填写如下内容：

    [nginx]
    name=nginx repo
    baseurl=http://nginx.org/packages/centos/6/$basearch/
    gpgcheck=0
    enabled=1
   

保存，则会产生一个/etc/yum.repos.d/nginx.repo文件。
下面直接执行如下指令即可自动安装好Nginx：
yum install nginx -y
安装完成，下面直接就可以启动Nginx了：
service nginx start
现在Nginx已经启动了，直接访问服务器就能看到Nginx欢迎页面了的。

#### nginx实现反向代理

实现访问slave2代理到百度首页

    # 定义Nginx运行的用户 和 用户组 如果对应服务器暴露在外面的话建议使用权限较小的用户 防止被入侵
    user  root;
    #Nginx进程数, 建议设置为等于CPU总核心数
    worker_processes  1;
     #开启全局错误日志类型
    error_log  /var/log/nginx/error.log warn;
    #进程文件
    pid        /var/run/nginx.pid;
    events {
    #单个进程最大连接数
        worker_connections  1024;
    }
    http {
    #扩展名与文件类型映射表
        include       /etc/nginx/mime.types;
       #默认类型
        default_type  application/octet-stream;
    
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
    
        access_log  /var/log/nginx/access.log  main;
    
        sendfile        on;
        #tcp_nopush     on;
    
        keepalive_timeout  65;
    
        #gzip  on; 
         server {    
            listen       80;    
            server_name 192.168.153.202;  #如果是集群环境，此处换成虚ip 192.168.153.222
            location / {     
              proxy_pass  https://www.baidu.com;      
            }
    	}
        include /etc/nginx/conf.d/*.conf;
    }


![[../_resources/unknown_filename-097c6977.png]]

#### nginx实现负载均衡

    # 定义Nginx运行的用户 和 用户组 如果对应服务器暴露在外面的话建议使用权限较小的用户 防止被入侵
    user  root;
    #Nginx进程数, 建议设置为等于CPU总核心数
    worker_processes  1;
     #开启全局错误日志类型
    error_log  /var/log/nginx/error.log warn;
    #进程文件
    pid        /var/run/nginx.pid;
    events {
    #单个进程最大连接数
        worker_connections  1024;
    }
    http {
    #扩展名与文件类型映射表
        include       /etc/nginx/mime.types;
       #默认类型
        default_type  application/octet-stream;
    
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
    
        access_log  /var/log/nginx/access.log  main;
    
        sendfile        on;
        #tcp_nopush     on;
    
        keepalive_timeout  65;
    
        #gzip  on;
         #负载均衡组
          upstream myServer{      
          server 192.168.153.201:7000 ;      
          server 192.168.153.201:8000;  
    	  server 192.168.153.201:9000; 	  
        }     
         server {    
            listen       80;    
            server_name 192.168.153.202;  #如果是集群环境，此处换成虚ip 192.168.153.222
            location / {     
              proxy_pass  http://myServer;      
            }
    	}
        include /etc/nginx/conf.d/*.conf;
    }


##### nginx常见的负载均衡策略

1. 轮询
	轮询是upstream的默认分配方式，即每个请求按照时间顺序轮流分配到不同的后端服务器，如果某个后端服务器down掉后，能自动剔除。
	upstream backend {
	server 192.168.153.203:7000;
	server 192.168.153.203:8000;
	server 192.168.153.203:9000;
	}
2. weight
	轮询的加强版，即可以指定轮询比率，weight和访问几率成正比，主要应用于后端服务器异质的场景下。
	upstream backend {
	server 192.168.153.203:7000 weight=1;
	server 192.168.153.203:8000 weight=2;
	server 192.168.153.203:9000 weight=3;
	}
3. ip_hash
	每个请求按照访问ip（即Nginx的前置服务器或者客户端IP）的hash结果分配，这样每个访客会固定访问一个后端服务器，可以解决session一致问题。
	upstream backend {
	ip_hash;
	server 192.168.153.203:7000;
	server 192.168.153.203:8000;
	server 192.168.153.203:9000;
	}

#### keepalived实现nginx高可靠

![[../_resources/unknown_filename-771f04fe.png]]

Keepalived的作用是检测服务器的状态，如果有一台web服务器宕机，或工作出现故障，Keepalived将检测到，并将有故障的服务器从系统中剔除，同时使用其他服务器代替该服务器的工作，当服务器工作正常后Keepalived自动将服务器加入到服务器群中，这些工作全部自动完成，不需要人工干涉，需要人工做的只是修复故障的服务器。类似软件还有（heartbeat，vcs）.

##### 配置keepalived

在192.168.153.202和192.168.153.203两个机器分别执行下面的命令：
yum -y install keepalived

1. 修改192.168.153.202的配置文件/etc/keepalived/keepalived.conf

    global_defs {
    notification_email {
    test@163.com
    }
    notification_email_from keepalived@localhost
    smtp_server 127.0.0.1
    smtp_connect_timeout 30
    router_id LVS_MASTER
    }
    vrrp_script chk_http_port {
    script "/usr/local/src/check_nginx_pid.sh"
    interval 2
    weight 2
    }
    vrrp_instance VI_1 {
    #state MASTER
    state BACKUP
    nopreempt
    interface eth0
    virtual_router_id 51
    priority 100
    advert_int 1
    authentication {
    auth_type PASS
    auth_pass 1111
    }
    track_script {
    chk_http_port
    }
    virtual_ipaddress {
    192.168.153.222 #虚拟ip
    }
    }
    
2. 修改192.168.153.203的配置文件/etc/keepalived/keepalived.conf

    global_defs {
    notification_email {
    test@163.com
    }
    notification_email_from keepalived@localhost
    smtp_server 127.0.0.1
    smtp_connect_timeout 30
    router_id LVS_BACKUP
    }
    vrrp_script chk_http_port {
    script "/usr/local/src/check_nginx_pid.sh"
    interval 2 #（检测脚本执行的间隔）
    weight 2
    }
    vrrp_instance VI_1 {
    state BACKUP
    interface eth0
    virtual_router_id 51
    priority 66
    advert_int 1
    authentication {
    auth_type PASS
    auth_pass 1111
    }
    track_script {
    chk_http_port #（调用检测脚本）
    }
    virtual_ipaddress {
    192.168.153.222 #虚拟ip
    }
    }
    
3. 以下是针对nginx状态进行检测的脚本，第一次nginx服务死掉时，会重新启动，如果Nginx服务无法正常启动，则杀掉keepalived进程
	vim /usr/local/src/check_nginx_pid.sh

    #!/bin/bash
    A=`ps -C nginx --no-header |wc -l`
    if [ $A -eq 0 ];then
    /usr/sbin/nginx
    if [ `ps -C nginx --no-header |wc -l` -eq 0 ];then
    killall keepalived
    fi
    fi
   
4. 设置keepalived开机自启动
	chkconfig --level 23456 keepalived on
5. 测试
	步骤一：可以通过虚ip访问目标应用
	![[../_resources/unknown_filename-c47f708f.png]]
	步骤二：查看虚ip所在的主机的mac地址
	![[../_resources/unknown_filename-3bce698d.png]]
	根据mac可以知道是192.168.153.202，
	步骤三：重启192.168.153.202机器，虚ip立即切换到192.168.153.203上，保证web应用能够正常访问。
	![[../_resources/unknown_filename-f95905d6.png]]
	![[../_resources/unknown_filename-491e280b.png]]
	步骤四：测试nginx服务永久运行。
	在keepalived启动的情况下，nginx服务自动启动，杀不死。
	步骤五：测试抢占模式
	修改配置文件
	主机：
	![[../_resources/unknown_filename-68b05e8e.png]]
	备机：
	![[../_resources/unknown_filename-33e2bc17.png]]
	主机重启之后，虚ip切换到备机，主机启动之后，虚ip自动切换回主机。



