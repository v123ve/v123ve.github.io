import{_ as a,c as n,a3 as t,o as r}from"./chunks/framework.BaR4VHXY.js";const c=JSON.parse('{"title":"shell编程","description":"","frontmatter":{"Created at":"2019-05-14T00:00:00.000Z","Last updated at":"2019-05-16T00:00:00.000Z","tags":["linux","shell"]},"headers":[],"relativePath":"zh-CN/学习笔记/shell编程.md","filePath":"zh-CN/学习笔记/shell编程.md","lastUpdated":null}'),o={name:"zh-CN/学习笔记/shell编程.md"};function l(i,e,s,u,h,p){return r(),n("div",null,e[0]||(e[0]=[t(`<h1 id="shell编程" tabindex="-1">shell编程 <a class="header-anchor" href="#shell编程" aria-label="Permalink to &quot;shell编程&quot;">​</a></h1><h2 id="shell编程-1" tabindex="-1">shell编程 <a class="header-anchor" href="#shell编程-1" aria-label="Permalink to &quot;shell编程&quot;">​</a></h2><h4 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h4><h5 id="退出-返回状态" tabindex="-1">退出/返回状态 <a class="header-anchor" href="#退出-返回状态" aria-label="Permalink to &quot;退出/返回状态&quot;">​</a></h5><ol><li>$?：返回上一条语句或脚本执行的状态 0：成功 1－255：不成功</li><li>exit 命令用于退出脚本或当前Shell n 是一个从 0 到 255 的整数 0 表示成功退出，非零表示遇到某种失败 返回值 被保存在状态变量 $? 中</li></ol><h5 id="常见的返回状态码" tabindex="-1">常见的返回状态码 <a class="header-anchor" href="#常见的返回状态码" aria-label="Permalink to &quot;常见的返回状态码&quot;">​</a></h5><p>0:执行正确 1:通用错误 126:命令或脚本没有执行权限 127:命令没找到 ![[../_resources/unknown_filename-5da2647b.png]]</p><h5 id="数据流重定向" tabindex="-1">数据流重定向 <a class="header-anchor" href="#数据流重定向" aria-label="Permalink to &quot;数据流重定向&quot;">​</a></h5><p>![[../_resources/unknown_filename-3e767c73.png]]</p><h5 id="命令的连续执行" tabindex="-1">命令的连续执行 &amp;&amp; || <a class="header-anchor" href="#命令的连续执行" aria-label="Permalink to &quot;命令的连续执行 &amp;&amp; ||&quot;">​</a></h5><ol><li>脚本中经常有多条相关命令，比如： 执行备份日志成功后删除日志 从服务器下载文件失败后从备份服务器下载</li><li>&amp;&amp; 连起来的命令，后面的命令只有在前一命令执行成功后才执行</li><li>|| 连起来的命令，后面的命令只有在前一命令执行失败后才执行</li></ol><h5 id="命令的连接-管道符号" tabindex="-1">命令的连接  | (管道符号) <a class="header-anchor" href="#命令的连接-管道符号" aria-label="Permalink to &quot;命令的连接  | (管道符号)&quot;">​</a></h5><p>![[../_resources/unknown_filename-59f3682b.png]]</p><h5 id="命令连接常用命令-awk简介" tabindex="-1">命令连接常用命令-awk简介 <a class="header-anchor" href="#命令连接常用命令-awk简介" aria-label="Permalink to &quot;命令连接常用命令-awk简介&quot;">​</a></h5><ol><li>awk是一个非常棒的数据处理程序，它比较倾向于将一行分成多个‘字段’来处理。</li><li>数据可以来自标准输入、一个或者多个文件、其他进程的输出</li><li>awk从第1行到最后一行逐行扫描，并执行匹配的操作</li><li>awk的默认操作是输出匹配行即打印匹配行到标准输出</li></ol><h5 id="awk语法" tabindex="-1">awk语法 <a class="header-anchor" href="#awk语法" aria-label="Permalink to &quot;awk语法&quot;">​</a></h5><p>![[../_resources/unknown_filename-5e7aa4b1.png]]</p><ol><li>awk &#39;BEGIN{语句1;语句2;...} END{语句1;语句2;...} 模式1{语句1;语句2;...} 模式2{语句1;语句2;...} 模式n...&#39; [文件名]</li><li>如果没有文件名，则数据来自标准输入 BEGIN{...} 是awk开始运作前执行的语句；END{...}是awk最终结束后执行的语句，他们可以省略</li><li>awk默认分隔符是空格和tab，可以在BEGIN语句中为FS内置变量赋值重新定义分隔符</li></ol><p>脚本举例如下：</p><pre><code>awk &#39;BEGIN{print “awk start...”} END{print “awk end.”} {print “awk programmer”}&#39;  /etc/profile
awk ‘{print $0}’  /etc/profile   #$0代表一整行数据，数据来自文件
echo “1 2 3 4” | awk &#39;{print $1$4}&#39;    #$1代表第1列，$4代表第4列
echo “1 2 3 4” | awk &#39;{print $1A$4}&#39;      #中间加入的字符A并不能输出
echo “1 2 3 4” | awk &#39;{print “$1A$4”}&#39;   #参数变量不能加入双引号
echo “1 2 3 4” | awk &#39;{print $1“A”$4}&#39;    #正确方式
echo “1 2 3 4” | awk &#39;{print $1,”A”,$4}&#39;   #注意与上式比较 
</code></pre><h5 id="awk内置变量及使用" tabindex="-1">awk内置变量及使用 <a class="header-anchor" href="#awk内置变量及使用" aria-label="Permalink to &quot;awk内置变量及使用&quot;">​</a></h5><p>![[../_resources/unknown_filename-5f150d30.png]]</p><pre><code>#以冒号为分隔符进行划分字段
echo “A:B:C:D” | awk &#39;BEGIN{FS=”:”} {print $1,$2,$3,$4}&#39;   
#分隔符还可以是字符串
echo “A--B--C--D” | awk &#39;BEGIN{FS=”--”} {print $1,$2,$3,$4}&#39; 
#分隔符还可以是正则表达式
echo “A:B:a-b-c-d” | awk &#39;BEGIN{FS=”[:-]”}{print $1,$2,$3,$4}&#39;
#忽略第一行数据
awk  &#39;NR&gt;1{print $0}&#39;   /etc/hosts
</code></pre><h4 id="shell基本语法" tabindex="-1">shell基本语法 <a class="header-anchor" href="#shell基本语法" aria-label="Permalink to &quot;shell基本语法&quot;">​</a></h4><h5 id="shell中的函数" tabindex="-1">shell中的函数 <a class="header-anchor" href="#shell中的函数" aria-label="Permalink to &quot;shell中的函数&quot;">​</a></h5><p>格式 函数名(){ 函数体 [return 值] } $? 获取return 值</p><ul><li><p>if else ![[../_resources/unknown_filename-59862b8c.png]]</p></li><li><p>case ![[../_resources/unknown_filename-3fb23184.png]]</p></li><li><p>for ![[../_resources/unknown_filename-a01e6787.png]]</p></li><li><p>实战案例：根据名称杀死进程 ![[../_resources/unknown_filename-b73913a2.png]]</p><blockquote><p>/dev/null 2&gt;&amp;1 如果不想显示脚本运行的日志，可以在脚本后面跟&gt;/dev/null 2&gt;&amp;1</p></blockquote></li></ul><h4 id="rpm简介" tabindex="-1">RPM简介 <a class="header-anchor" href="#rpm简介" aria-label="Permalink to &quot;RPM简介&quot;">​</a></h4><h5 id="rpm软件包管理及概述" tabindex="-1">RPM软件包管理及概述 <a class="header-anchor" href="#rpm软件包管理及概述" aria-label="Permalink to &quot;RPM软件包管理及概述&quot;">​</a></h5><p>RPM是RedHat Package Manager（RedHat软件包管理工具）的缩写，这一文件格式名称虽然打上了RedHat的标志，但是其原始设计理念是开放式的，现在包括RedHat、CentOS、SUSE等Linux的分发版本都有采用，可以算是公认的行业标准了。RPM文件在Linux系统中的安装最为简便。 RPM 最早是由 Red Hat 公司提出的软件包管理标准，最初的全称是 Red Hat Package Manager。后来随着版本的升级又融入了许多其他的优秀特性， 成为了Linux中公认的软件包管理标准。被许多Linux发行使用，如：RHEL/CentOS/Fedora, SLES/openSUSE 等。如今RPM是RPM Package Manager的缩写，由RPM社区（<a href="http://www.rpm.org/%EF%BC%89%E8%B4%9F%E8%B4%A3%E7%BB%B4%E6%8A%A4%E3%80%82" target="_blank" rel="noreferrer">http://www.rpm.org/）负责维护。</a> RPM的有点在于1.易于安装、升级便利；2.丰富的软件包查询功能；3.软件包内容校验功能；4.支持多种硬件平台</p><h5 id="rpm五大功能及组件介绍" tabindex="-1">RPM五大功能及组件介绍 <a class="header-anchor" href="#rpm五大功能及组件介绍" aria-label="Permalink to &quot;RPM五大功能及组件介绍&quot;">​</a></h5><ol><li>五大功能为： 安装——将软件从包中解出来，并安装到硬盘。 卸载——将软件从硬盘清除。 升级——替换软件的旧版本。 查询——查询软件包的信息。 验证——检验系统中的软件与包中软件的区别。</li><li>RPM组件： 本地数据库 rpm及其相关的可执行文件 RPM 前端工具，如 yum 软件包文件</li></ol><h5 id="rpm命令的使用" tabindex="-1">RPM命令的使用 <a class="header-anchor" href="#rpm命令的使用" aria-label="Permalink to &quot;RPM命令的使用&quot;">​</a></h5><p>rpm的常用参数： i：安装应用程序（install） e：卸载应用程序（erase） vh：显示安装进度；（verbose hash） U：升级软件包；（update） qa: 显示所有已安装软件包（query all）</p><h5 id="rpm命令安装、升级和删除软件" tabindex="-1">RPM命令安装、升级和删除软件 <a class="header-anchor" href="#rpm命令安装、升级和删除软件" aria-label="Permalink to &quot;RPM命令安装、升级和删除软件&quot;">​</a></h5><ol><li>输出选项： -v：安装时显示软件名称 -h：使用“#”显示进度</li><li>rpmfile 的URL支持 ftp:// http:// ![[../_resources/unknown_filename-5a2174d6.png]]</li><li>rpm包的安装 ![[../_resources/unknown_filename-b480e7e7.png]]</li><li>rpm包的卸载 ![[../_resources/unknown_filename-867fb2d1.png]]</li></ol><h5 id="rpm的基本查询" tabindex="-1">RPM的基本查询 <a class="header-anchor" href="#rpm的基本查询" aria-label="Permalink to &quot;RPM的基本查询&quot;">​</a></h5><pre><code>#查询已安装的所有软件包
rpm -qa
#查询软件包是否安装并查看软件包的版本
rpm -q &lt;package_name&gt;
#查询软件包信息
rpm -qi &lt;package_name&gt;
rpm -qip &lt;package_file_path_name&gt;
#查询软件包中所有文件的名称
rpm -ql &lt;package_name&gt;
rpm -qlp &lt;package_file_path_name&gt;
#查询磁盘上的文件是从何软件包安装的
rpm -qf &lt;path_name&gt;
</code></pre><h5 id="rpm校验" tabindex="-1">RPM校验 <a class="header-anchor" href="#rpm校验" aria-label="Permalink to &quot;RPM校验&quot;">​</a></h5><pre><code>#校验有已安装的所有软件包
rpm -Va
#校验指定的软件包
rpm -V &lt;package_name&gt;
#校验指定的RPM包文件
rpm -Vp &lt;package_file_path_name&gt;
#验证包含指定文件的软件包
rpm -Vf &lt;path_name&gt;
</code></pre><h4 id="yum简介" tabindex="-1">yum简介 <a class="header-anchor" href="#yum简介" aria-label="Permalink to &quot;yum简介&quot;">​</a></h4><h5 id="yum概述" tabindex="-1">yum概述 <a class="header-anchor" href="#yum概述" aria-label="Permalink to &quot;yum概述&quot;">​</a></h5><p>RPM软件包一般非为两大类：1.yy-x.x.rpm 软件包；2.yy-devel-x.x.rpm软件开发包，供别的软件包引用的库包。由此，RPM软件包安装时经常会出现缺少依赖库的现象，有时会产生连锁反应。yum就是为了解决软件依赖问题而生。它的原理是将所有的软件包和软件开发包都放到服务器上，当安装软件包时向服务器请求，由服务器分析出依赖关系，从而提供一整套安装包。 Yum（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及SUSE、CentOS中的Shell前端软件包管理器。基於RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。</p><h5 id="yum的功能介绍" tabindex="-1">yum的功能介绍 <a class="header-anchor" href="#yum的功能介绍" aria-label="Permalink to &quot;yum的功能介绍&quot;">​</a></h5><ol><li>安装——将软件从包中解出来，并安装到硬盘。</li><li>卸载——将软件从硬盘清除。</li><li>升级——替换软件的旧版本。</li><li>查询——查询软件包的信息。</li></ol><h5 id="yum源的配置文件" tabindex="-1">yum源的配置文件 <a class="header-anchor" href="#yum源的配置文件" aria-label="Permalink to &quot;yum源的配置文件&quot;">​</a></h5><pre><code> vi /etc/yum.repos.d/CentOS-Base.repo
</code></pre><table tabindex="0"><thead><tr><th>配置参数</th><th>说明</th></tr></thead><tbody><tr><td>[base]</td><td>容器名称，一定要放在[]中</td></tr><tr><td>name</td><td>容器说明，可以自己随便写</td></tr><tr><td>mirrorlist</td><td>镜像站点，这个可以注释掉</td></tr><tr><td>baseurl</td><td>我们的yum源服务器的地址。默认是CentOS官方的yum源服务器，是可以使用的，如果你觉得慢可以改成你喜欢的yum源地 址</td></tr><tr><td>enabled</td><td>此容器是否生效，如果不写或写成enable=1都是生效，写成enable=0就是不生效</td></tr><tr><td>gpgcheck</td><td>如果是1是指RPM的数字证书生效，如果是0则不生效</td></tr><tr><td>gpgkey</td><td>数字证书的公钥文件保存位置。不用修改</td></tr></tbody></table><h5 id="yum源的配置" tabindex="-1">yum源的配置 <a class="header-anchor" href="#yum源的配置" aria-label="Permalink to &quot;yum源的配置&quot;">​</a></h5><ol><li><p>列出配置源 yum repolist ![[../_resources/unknown_filename-0927b9aa.png]] ![[../_resources/unknown_filename-4e14703a.png]]</p></li><li><p>配置本地源 ![[../_resources/unknown_filename-065241f9.png]] 挂载这个iso文件到/media/CentOS</p><p>mkdir /media/CentOS mount -o loop /root/CentOS-6.9-x86_64-bin-DVD1.iso /media/CentOS #安装时使用参数enablerepo=c6-media yum --enablerepo=c6-media -y install mysql-server</p></li></ol><p>![[../_resources/unknown_filename-896bcc77.png]]</p><h5 id="yum的基本查询" tabindex="-1">yum的基本查询 <a class="header-anchor" href="#yum的基本查询" aria-label="Permalink to &quot;yum的基本查询&quot;">​</a></h5><pre><code>#查询jdk环境应该安装哪个具体的包名
yum search jdk
#查询软件包的功能
yum search curl
#查询服务器上所有的软件包名 
yum list
#查询有哪些软件需要升级
yum list updates
#查询提供passwd这个文件的软件有哪些
yum providers passwd
</code></pre><h5 id="yum的安装、卸载与升级" tabindex="-1">yum的安装、卸载与升级 <a class="header-anchor" href="#yum的安装、卸载与升级" aria-label="Permalink to &quot;yum的安装、卸载与升级&quot;">​</a></h5><pre><code>#安装
yum install mysql-server    #中间会提示输入y/n来确认安装
yum -y install mysql-server  #不用提示，直接安装
#卸载
yum remove  pam-devel
#升级指定软件包
yum update kernel   #升级内核，小心。
#全系统升级
yum update
</code></pre><h5 id="软件组功能" tabindex="-1">软件组功能 <a class="header-anchor" href="#软件组功能" aria-label="Permalink to &quot;软件组功能&quot;">​</a></h5><p>软件组就是一组相关的软件，比如gnome、比如gcc等，一个软件组名字会包含很多个软件。</p><pre><code>#查询软件组有哪些
yum  grouplist
#查询软件组gcc的信息
yum  groupinfo  gcc
</code></pre><h4 id="jar包运行通用shell" tabindex="-1">jar包运行通用shell <a class="header-anchor" href="#jar包运行通用shell" aria-label="Permalink to &quot;jar包运行通用shell&quot;">​</a></h4><p>只需要改变API_NAME的jar包名称</p><pre><code>#!/bin/sh
#jar包的名称
API_NAME=DouDou
JAR_NAME=$API_NAME.jar
#PID  代表是PID文件
PID=$API_NAME.pid
#使用说明，用来提示输入参数
usage() {
    echo &quot;Usage: $0 [start|stop|restart|status]&quot;
    exit 1
}
#检查程序是否在运行
is_exist(){
  pid=\`ps -ef|grep $JAR_NAME|grep -v grep|awk &#39;{print $2}&#39; \`
  #如果不存在返回1，存在返回0  -z 非空为假   
  if [ -z &quot;\${pid}&quot; ]; then
   return 1
  else
    return 0
  fi
}
#启动方法
start(){
  is_exist
  if [ $? -eq &quot;0&quot; ]; then 
    echo &quot;&gt;&gt;&gt; \${JAR_NAME} is already running PID=\${pid} &lt;&lt;&lt;&quot; 
  else 
    #让jar程序不间断后台运行
    nohup java -jar $JAR_NAME &gt;/dev/null 2&gt;&amp;1 &amp;
	#将启动之后的进程号保存到pid文件中
    echo $! &gt; $PID
    echo &quot;&gt;&gt;&gt; start $JAR_NAME successed PID=$! &lt;&lt;&lt;&quot; 
   fi
  }
#停止方法
stop(){
  #is_exist
  pidf=$(cat $PID)
  #echo &quot;$pidf&quot;  
  echo &quot;&gt;&gt;&gt; api PID = $pidf begin kill $pidf &lt;&lt;&lt;&quot;
  kill -9 $pidf
  rm -rf $PID
  sleep 2
  is_exist
  if [ $? -eq &quot;0&quot; ]; then 
    echo &quot;&gt;&gt;&gt; api 2 PID = $pid begin kill -9 $pid  &lt;&lt;&lt;&quot;
    kill -9  $pid
    sleep 2
    echo &quot;&gt;&gt;&gt; $JAR_NAME process stopped &lt;&lt;&lt;&quot;  
  else
    echo &quot;&gt;&gt;&gt; \${JAR_NAME} is not running &lt;&lt;&lt;&quot;
  fi  
}
#输出运行状态
status(){
  is_exist
  if [ $? -eq &quot;0&quot; ]; then
    echo &quot;&gt;&gt;&gt; \${JAR_NAME} is running PID is \${pid} &lt;&lt;&lt;&quot;
  else
    echo &quot;&gt;&gt;&gt; \${JAR_NAME} is not running &lt;&lt;&lt;&quot;
  fi
}
#重启
restart(){
  stop
  start
}
#根据输入参数，选择执行对应方法，不输入则执行使用说明
case &quot;$1&quot; in
  &quot;start&quot;)
    start
    ;;
  &quot;stop&quot;)
    stop
    ;;
  &quot;status&quot;)
    status
    ;;
  &quot;restart&quot;)
    restart
    ;;
  *)
    usage
    ;;
esac
exit 0
</code></pre><h4 id="测试练习shell" tabindex="-1">测试练习shell <a class="header-anchor" href="#测试练习shell" aria-label="Permalink to &quot;测试练习shell&quot;">​</a></h4><p>helloworld.sh</p><pre><code># !/bin/sh
echo &quot;hello world!&quot;
echo $0
echo $1
echo $2
echo $3
echo $#
echo $*
echo $@

first=I
secend=love
third=you
echo $first $secend $third

if [ $# -gt 1 ]
then
   echo &quot;is ok&quot;
else
   echo &quot;is error&quot;
fi

. /home/hsy/shell/showage.sh
show_name() {
   echo &quot;my name is hsy&quot;
}
case $1 in
   100)
   show_name
   str=&quot;aaa&quot;;;
   200)
   show_age
   str=&quot;bbb&quot;;;
   300)
   sh /home/hsy/shell/run.sh
   str=&quot;ccc&quot;;;
   *)
   a=\`return_int\`
   echo $?
   str=&quot;you input is error&quot;;;
esac
echo $str

list=\`ls -l /home | awk &#39;{print $9}&#39;\`
for item in $list
do
   echo &quot;filename:&quot; $item
done
</code></pre><p>killproce.sh</p><pre><code>#!/bin/sh
if [ $# -eq 1 ]
then
   echo &quot;is running&quot;
else
   echo &quot;is error input&quot;
   exit 1
fi 
pid=\`ps -ef | grep -w $1 |grep -v grep | awk &#39;{print$2}&#39;\`
echo &quot;$pid will be killed&quot;
kill -9 $pid
echo &quot;$pid is stop&quot;
</code></pre><p>run.sh</p><pre><code>#!/bin/sh
echo &quot;is run run run&quot;
</code></pre><p>showage.sh</p><pre><code>#!/bin/sh
show_age(){
   echo &quot;my age is 22&quot;
}
return_int(){
   echo &quot;this is return method&quot;
   return 100
}
</code></pre><h4 id="jar转成服务" tabindex="-1">jar转成服务 <a class="header-anchor" href="#jar转成服务" aria-label="Permalink to &quot;jar转成服务&quot;">​</a></h4><pre><code>#!/bin/bash
#
# jar is linux jar service
#
# chkconfig: 2345 56 72
. /etc/profile

export jar_url=/home/hsy/DouDou.jar
PID=\`ps -ef|grep DouDou|grep -v grep|awk &#39;{print $2}&#39;\`
JAVA_HOME=/usr/local/jdk1.8.0_144
start() {
	echo &quot;starting DouDou service&quot;
	nohup java -jar $jar_url &amp;
}

stop() {
	echo &quot;stopping DouDou service&quot;
	kill -9 $PID
}
status() {
	pid=\`ps -ef | grep DouDou| grep -v grep| awk -F &#39; &#39; &#39;{print$2}&#39;| wc -l\`
	if [ $pid -gt 0 ]
	then
			echo &quot;jar is running!&quot;
	else
			echo &quot;jar is stopped!&quot;
	fi
}

# See how we were called.
case &quot;$1&quot; in
  start)
	start
	;;
  stop)
	stop
	;;
  status)
	status 
	;;
  restart|force-reload)
	stop
	start
	;;
  
  *)
	echo $&quot;Usage: $0 {start|stop|status|restart}&quot;
	exit 2
esac
</code></pre><h4 id="定时jar包服务开启" tabindex="-1">定时jar包服务开启 <a class="header-anchor" href="#定时jar包服务开启" aria-label="Permalink to &quot;定时jar包服务开启&quot;">​</a></h4><pre><code>#!/bin/sh
source /etc/profile
if ps -ef|grep DouDou|egrep -v grep &gt;/dev/null
then
        echo &quot;jar is running&quot; \`date\` &gt;&gt; /home/qin/jar.log
else
	nohup service doudou start &amp;
       echo &quot;jar is starting&quot; \`date\` &gt;&gt; /home/qin/jar.log
fi
</code></pre>`,74)]))}const m=a(o,[["render",l]]);export{c as __pageData,m as default};
