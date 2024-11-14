import{_ as n,c as r,a3 as a,o as i}from"./chunks/framework.BaR4VHXY.js";const u=JSON.parse('{"title":"nginx简介","description":"","frontmatter":{"Created at":"2019-06-12T00:00:00.000Z","Last updated at":"2019-06-12T00:00:00.000Z","tags":["大数据","nginx"]},"headers":[],"relativePath":"zh-CN/学习笔记/nginx简介.md","filePath":"zh-CN/学习笔记/nginx简介.md","lastUpdated":null}'),t={name:"zh-CN/学习笔记/nginx简介.md"};function o(l,e,p,s,c,g){return i(),r("div",null,e[0]||(e[0]=[a(`<h1 id="nginx简介" tabindex="-1">nginx简介 <a class="header-anchor" href="#nginx简介" aria-label="Permalink to &quot;nginx简介&quot;">​</a></h1><h4 id="nginx简介-1" tabindex="-1">nginx简介 <a class="header-anchor" href="#nginx简介-1" aria-label="Permalink to &quot;nginx简介&quot;">​</a></h4><p>Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点（俄文：Рамблер）开发的，第一个公开版本0.1.0发布于2004年10月4日。 Nginx是一款轻量级的Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，在BSD-like 协议下发行。其特点是占有内存少，并发能力强，事实上nginx的并发能力确实在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。</p><h5 id="什么是代理" tabindex="-1">什么是代理？ <a class="header-anchor" href="#什么是代理" aria-label="Permalink to &quot;什么是代理？&quot;">​</a></h5><p>客户机发送请求时，不会直接到达目标主机，先发给代理服务器，由代理服务器发送给目标服务器。 ![[../_resources/unknown_filename-0f9089d9.png]] 代理服务器的好处：</p><ul><li><p>起到防火墙的作用。</p></li><li><p>起到缓存的作用，加速访问速度。</p></li><li><p>起到我们想访问但是无法直接访问的目标主机。</p></li></ul><p>代理服务器的分类：</p><ul><li>正向代理 必须知道代理服务器的ip和端口，用户能够明显感知到代理服务器的存在。 ![[../_resources/unknown_filename-7aa93559.png]]</li><li>反向代理 不需要知道代理服务器的ip和端口，用户无法感知到代理服务器的存在。一般情况下反向代理服务器跟目标服务器在一起。 ![[../_resources/unknown_filename-be9694cd.png]]</li></ul><h4 id="nginx安装配置" tabindex="-1">nginx安装配置 <a class="header-anchor" href="#nginx安装配置" aria-label="Permalink to &quot;nginx安装配置&quot;">​</a></h4><h5 id="网络规划" tabindex="-1">网络规划 <a class="header-anchor" href="#网络规划" aria-label="Permalink to &quot;网络规划&quot;">​</a></h5><p>![[../_resources/unknown_filename-9144b95e.png]]</p><h5 id="安装gcc编译器等工具" tabindex="-1">安装GCC编译器等工具 <a class="header-anchor" href="#安装gcc编译器等工具" aria-label="Permalink to &quot;安装GCC编译器等工具&quot;">​</a></h5><ol><li><p>安装编译工具及库文件 yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel</p></li><li><p>首先要安装 PCRE，PCRE 作用是让 Nginx 支持 Rewrite 功能。 下载 PCRE 安装包 <a href="http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz" target="_blank" rel="noreferrer">http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz</a> wget <a href="http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz" target="_blank" rel="noreferrer">http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz</a> 解压安装包: tar zxvf pcre-8.35.tar.gz 进入安装包目录 cd pcre-8.35 编译安装 ./configure make &amp;&amp; make install 查看pcre版本 pcre-config --version</p></li><li><p>下载安装Nginx 在/etc/yum.repos.d/目录下创建一个源配置文件nginx.repo： cd /etc/yum.repos.d/ vim nginx.repo 填写如下内容：</p><p>[nginx] name=nginx repo baseurl=<a href="http://nginx.org/packages/centos/6/$basearch/" target="_blank" rel="noreferrer">http://nginx.org/packages/centos/6/$basearch/</a> gpgcheck=0 enabled=1</p></li></ol><p>保存，则会产生一个/etc/yum.repos.d/nginx.repo文件。 下面直接执行如下指令即可自动安装好Nginx： yum install nginx -y 安装完成，下面直接就可以启动Nginx了： service nginx start 现在Nginx已经启动了，直接访问服务器就能看到Nginx欢迎页面了的。</p><h4 id="nginx实现反向代理" tabindex="-1">nginx实现反向代理 <a class="header-anchor" href="#nginx实现反向代理" aria-label="Permalink to &quot;nginx实现反向代理&quot;">​</a></h4><p>实现访问slave2代理到百度首页</p><pre><code># 定义Nginx运行的用户 和 用户组 如果对应服务器暴露在外面的话建议使用权限较小的用户 防止被入侵
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

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

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
</code></pre><p>![[../_resources/unknown_filename-097c6977.png]]</p><h4 id="nginx实现负载均衡" tabindex="-1">nginx实现负载均衡 <a class="header-anchor" href="#nginx实现负载均衡" aria-label="Permalink to &quot;nginx实现负载均衡&quot;">​</a></h4><pre><code># 定义Nginx运行的用户 和 用户组 如果对应服务器暴露在外面的话建议使用权限较小的用户 防止被入侵
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

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

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
</code></pre><h5 id="nginx常见的负载均衡策略" tabindex="-1">nginx常见的负载均衡策略 <a class="header-anchor" href="#nginx常见的负载均衡策略" aria-label="Permalink to &quot;nginx常见的负载均衡策略&quot;">​</a></h5><ol><li>轮询 轮询是upstream的默认分配方式，即每个请求按照时间顺序轮流分配到不同的后端服务器，如果某个后端服务器down掉后，能自动剔除。 upstream backend { server 192.168.153.203:7000; server 192.168.153.203:8000; server 192.168.153.203:9000; }</li><li>weight 轮询的加强版，即可以指定轮询比率，weight和访问几率成正比，主要应用于后端服务器异质的场景下。 upstream backend { server 192.168.153.203:7000 weight=1; server 192.168.153.203:8000 weight=2; server 192.168.153.203:9000 weight=3; }</li><li>ip_hash 每个请求按照访问ip（即Nginx的前置服务器或者客户端IP）的hash结果分配，这样每个访客会固定访问一个后端服务器，可以解决session一致问题。 upstream backend { ip_hash; server 192.168.153.203:7000; server 192.168.153.203:8000; server 192.168.153.203:9000; }</li></ol><h4 id="keepalived实现nginx高可靠" tabindex="-1">keepalived实现nginx高可靠 <a class="header-anchor" href="#keepalived实现nginx高可靠" aria-label="Permalink to &quot;keepalived实现nginx高可靠&quot;">​</a></h4><p>![[../_resources/unknown_filename-771f04fe.png]]</p><p>Keepalived的作用是检测服务器的状态，如果有一台web服务器宕机，或工作出现故障，Keepalived将检测到，并将有故障的服务器从系统中剔除，同时使用其他服务器代替该服务器的工作，当服务器工作正常后Keepalived自动将服务器加入到服务器群中，这些工作全部自动完成，不需要人工干涉，需要人工做的只是修复故障的服务器。类似软件还有（heartbeat，vcs）.</p><h5 id="配置keepalived" tabindex="-1">配置keepalived <a class="header-anchor" href="#配置keepalived" aria-label="Permalink to &quot;配置keepalived&quot;">​</a></h5><p>在192.168.153.202和192.168.153.203两个机器分别执行下面的命令： yum -y install keepalived</p><ol><li><p>修改192.168.153.202的配置文件/etc/keepalived/keepalived.conf</p><p>global_defs { notification_email { <a href="mailto:test@163.com" target="_blank" rel="noreferrer">test@163.com</a> } notification_email_from keepalived@localhost smtp_server 127.0.0.1 smtp_connect_timeout 30 router_id LVS_MASTER } vrrp_script chk_http_port { script &quot;/usr/local/src/check_nginx_pid.sh&quot; interval 2 weight 2 } vrrp_instance VI_1 { #state MASTER state BACKUP nopreempt interface eth0 virtual_router_id 51 priority 100 advert_int 1 authentication { auth_type PASS auth_pass 1111 } track_script { chk_http_port } virtual_ipaddress { 192.168.153.222 #虚拟ip } }</p></li><li><p>修改192.168.153.203的配置文件/etc/keepalived/keepalived.conf</p><p>global_defs { notification_email { <a href="mailto:test@163.com" target="_blank" rel="noreferrer">test@163.com</a> } notification_email_from keepalived@localhost smtp_server 127.0.0.1 smtp_connect_timeout 30 router_id LVS_BACKUP } vrrp_script chk_http_port { script &quot;/usr/local/src/check_nginx_pid.sh&quot; interval 2 #（检测脚本执行的间隔） weight 2 } vrrp_instance VI_1 { state BACKUP interface eth0 virtual_router_id 51 priority 66 advert_int 1 authentication { auth_type PASS auth_pass 1111 } track_script { chk_http_port #（调用检测脚本） } virtual_ipaddress { 192.168.153.222 #虚拟ip } }</p></li><li><p>以下是针对nginx状态进行检测的脚本，第一次nginx服务死掉时，会重新启动，如果Nginx服务无法正常启动，则杀掉keepalived进程 vim /usr/local/src/check_nginx_pid.sh</p><p>#!/bin/bash A=<code>ps -C nginx --no-header |wc -l</code> if [ $A -eq 0 ];then /usr/sbin/nginx if [ <code>ps -C nginx --no-header |wc -l</code> -eq 0 ];then killall keepalived fi fi</p></li><li><p>设置keepalived开机自启动 chkconfig --level 23456 keepalived on</p></li><li><p>测试 步骤一：可以通过虚ip访问目标应用 ![[../_resources/unknown_filename-c47f708f.png]] 步骤二：查看虚ip所在的主机的mac地址 ![[../_resources/unknown_filename-3bce698d.png]] 根据mac可以知道是192.168.153.202， 步骤三：重启192.168.153.202机器，虚ip立即切换到192.168.153.203上，保证web应用能够正常访问。 ![[../_resources/unknown_filename-f95905d6.png]] ![[../_resources/unknown_filename-491e280b.png]] 步骤四：测试nginx服务永久运行。 在keepalived启动的情况下，nginx服务自动启动，杀不死。 步骤五：测试抢占模式 修改配置文件 主机： ![[../_resources/unknown_filename-68b05e8e.png]] 备机： ![[../_resources/unknown_filename-33e2bc17.png]] 主机重启之后，虚ip切换到备机，主机启动之后，虚ip自动切换回主机。</p></li></ol>`,28)]))}const _=n(t,[["render",o]]);export{u as __pageData,_ as default};
