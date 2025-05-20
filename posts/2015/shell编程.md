---

Created at: 2019-05-14
Last updated at: 2019-05-16
tags: 
  - linux
  - shell

---

# shell编程

## shell编程

#### 常用命令

##### 退出/返回状态

1. $?：返回上一条语句或脚本执行的状态
	0：成功
	1－255：不成功
2. exit 命令用于退出脚本或当前Shell
	n 是一个从 0 到 255 的整数
	0 表示成功退出，非零表示遇到某种失败
	返回值 被保存在状态变量 $? 中

##### 常见的返回状态码

0:执行正确
1:通用错误
126:命令或脚本没有执行权限
127:命令没找到
![[../_resources/unknown_filename-5da2647b.png]]

##### 数据流重定向

![[../_resources/unknown_filename-3e767c73.png]]

##### 命令的连续执行 && ||

1. 脚本中经常有多条相关命令，比如：
	执行备份日志成功后删除日志
	从服务器下载文件失败后从备份服务器下载
2. && 连起来的命令，后面的命令只有在前一命令执行成功后才执行
3. || 连起来的命令，后面的命令只有在前一命令执行失败后才执行

##### 命令的连接  | (管道符号)

![[../_resources/unknown_filename-59f3682b.png]]

##### 命令连接常用命令-awk简介

1. awk是一个非常棒的数据处理程序，它比较倾向于将一行分成多个‘字段’来处理。
2. 数据可以来自标准输入、一个或者多个文件、其他进程的输出
3. awk从第1行到最后一行逐行扫描，并执行匹配的操作
4. awk的默认操作是输出匹配行即打印匹配行到标准输出

##### awk语法

![[../_resources/unknown_filename-5e7aa4b1.png]]

1. awk 'BEGIN{语句1;语句2;...} END{语句1;语句2;...} 模式1{语句1;语句2;...} 模式2{语句1;语句2;...} 模式n...' [文件名]
2. 如果没有文件名，则数据来自标准输入
	BEGIN{...} 是awk开始运作前执行的语句；END{...}是awk最终结束后执行的语句，他们可以省略
3. awk默认分隔符是空格和tab，可以在BEGIN语句中为FS内置变量赋值重新定义分隔符

脚本举例如下：

    awk 'BEGIN{print “awk start...”} END{print “awk end.”} {print “awk programmer”}'  /etc/profile
    awk ‘{print $0}’  /etc/profile   #$0代表一整行数据，数据来自文件
    echo “1 2 3 4” | awk '{print $1$4}'    #$1代表第1列，$4代表第4列
    echo “1 2 3 4” | awk '{print $1A$4}'      #中间加入的字符A并不能输出
    echo “1 2 3 4” | awk '{print “$1A$4”}'   #参数变量不能加入双引号
    echo “1 2 3 4” | awk '{print $1“A”$4}'    #正确方式
    echo “1 2 3 4” | awk '{print $1,”A”,$4}'   #注意与上式比较 


##### awk内置变量及使用

![[../_resources/unknown_filename-5f150d30.png]]

    #以冒号为分隔符进行划分字段
    echo “A:B:C:D” | awk 'BEGIN{FS=”:”} {print $1,$2,$3,$4}'   
    #分隔符还可以是字符串
    echo “A--B--C--D” | awk 'BEGIN{FS=”--”} {print $1,$2,$3,$4}' 
    #分隔符还可以是正则表达式
    echo “A:B:a-b-c-d” | awk 'BEGIN{FS=”[:-]”}{print $1,$2,$3,$4}'
    #忽略第一行数据
    awk  'NR>1{print $0}'   /etc/hosts


#### shell基本语法

##### shell中的函数

格式
函数名(){
函数体
[return 值]
}
$? 获取return 值

* if else
	![[../_resources/unknown_filename-59862b8c.png]]
* case
	![[../_resources/unknown_filename-3fb23184.png]]
* for
	![[../_resources/unknown_filename-a01e6787.png]]
* 实战案例：根据名称杀死进程
	![[../_resources/unknown_filename-b73913a2.png]]

    >/dev/null 2>&1
    如果不想显示脚本运行的日志，可以在脚本后面跟>/dev/null 2>&1
  

#### RPM简介

##### RPM软件包管理及概述

RPM是RedHat Package Manager（RedHat软件包管理工具）的缩写，这一文件格式名称虽然打上了RedHat的标志，但是其原始设计理念是开放式的，现在包括RedHat、CentOS、SUSE等Linux的分发版本都有采用，可以算是公认的行业标准了。RPM文件在Linux系统中的安装最为简便。
RPM 最早是由 Red Hat 公司提出的软件包管理标准，最初的全称是 Red Hat Package Manager。后来随着版本的升级又融入了许多其他的优秀特性， 成为了Linux中公认的软件包管理标准。被许多Linux发行使用，如：RHEL/CentOS/Fedora, SLES/openSUSE 等。如今RPM是RPM Package Manager的缩写，由RPM社区（http://www.rpm.org/）负责维护。
RPM的有点在于1.易于安装、升级便利；2.丰富的软件包查询功能；3.软件包内容校验功能；4.支持多种硬件平台

##### RPM五大功能及组件介绍

1. 五大功能为：
	安装——将软件从包中解出来，并安装到硬盘。
	卸载——将软件从硬盘清除。
	升级——替换软件的旧版本。
	查询——查询软件包的信息。
	验证——检验系统中的软件与包中软件的区别。
2. RPM组件：
	本地数据库
	rpm及其相关的可执行文件
	RPM 前端工具，如 yum
	软件包文件

##### RPM命令的使用

rpm的常用参数：
i：安装应用程序（install）
e：卸载应用程序（erase）
vh：显示安装进度；（verbose hash）
U：升级软件包；（update）
qa: 显示所有已安装软件包（query all）

##### RPM命令安装、升级和删除软件

1. 输出选项：
	-v：安装时显示软件名称
	-h：使用“#”显示进度
2. rpmfile 的URL支持
	ftp://
	http://
	![[../_resources/unknown_filename-5a2174d6.png]]
3. rpm包的安装
	![[../_resources/unknown_filename-b480e7e7.png]]
4. rpm包的卸载
	![[../_resources/unknown_filename-867fb2d1.png]]

##### RPM的基本查询

    #查询已安装的所有软件包
    rpm -qa
    #查询软件包是否安装并查看软件包的版本
    rpm -q <package_name>
    #查询软件包信息
    rpm -qi <package_name>
    rpm -qip <package_file_path_name>
    #查询软件包中所有文件的名称
    rpm -ql <package_name>
    rpm -qlp <package_file_path_name>
    #查询磁盘上的文件是从何软件包安装的
    rpm -qf <path_name>


##### RPM校验

    #校验有已安装的所有软件包
    rpm -Va
    #校验指定的软件包
    rpm -V <package_name>
    #校验指定的RPM包文件
    rpm -Vp <package_file_path_name>
    #验证包含指定文件的软件包
    rpm -Vf <path_name>


#### yum简介

##### yum概述

RPM软件包一般非为两大类：1.yy-x.x.rpm 软件包；2.yy-devel-x.x.rpm软件开发包，供别的软件包引用的库包。由此，RPM软件包安装时经常会出现缺少依赖库的现象，有时会产生连锁反应。yum就是为了解决软件依赖问题而生。它的原理是将所有的软件包和软件开发包都放到服务器上，当安装软件包时向服务器请求，由服务器分析出依赖关系，从而提供一整套安装包。
Yum（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及SUSE、CentOS中的Shell前端软件包管理器。基於RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。

##### yum的功能介绍

1. 安装——将软件从包中解出来，并安装到硬盘。
2. 卸载——将软件从硬盘清除。
3. 升级——替换软件的旧版本。
4. 查询——查询软件包的信息。

##### yum源的配置文件

     vi /etc/yum.repos.d/CentOS-Base.repo


| 配置参数 | 说明  |
| --- | --- |
| [base] | 容器名称，一定要放在[]中 |
| name | 容器说明，可以自己随便写 |
| mirrorlist | 镜像站点，这个可以注释掉 |
| baseurl | 我们的yum源服务器的地址。默认是CentOS官方的yum源服务器，是可以使用的，如果你觉得慢可以改成你喜欢的yum源地 址 |
| enabled | 此容器是否生效，如果不写或写成enable=1都是生效，写成enable=0就是不生效 |
| gpgcheck | 如果是1是指RPM的数字证书生效，如果是0则不生效 |
| gpgkey | 数字证书的公钥文件保存位置。不用修改 |

##### yum源的配置

1. 列出配置源
	yum repolist
	![[../_resources/unknown_filename-0927b9aa.png]]
	![[../_resources/unknown_filename-4e14703a.png]]
2. 配置本地源
	![[../_resources/unknown_filename-065241f9.png]]
	挂载这个iso文件到/media/CentOS

    mkdir /media/CentOS
    mount -o loop /root/CentOS-6.9-x86_64-bin-DVD1.iso /media/CentOS
    #安装时使用参数enablerepo=c6-media
    yum --enablerepo=c6-media -y install mysql-server
   

![[../_resources/unknown_filename-896bcc77.png]]

##### yum的基本查询

    #查询jdk环境应该安装哪个具体的包名
    yum search jdk
    #查询软件包的功能
    yum search curl
    #查询服务器上所有的软件包名 
    yum list
    #查询有哪些软件需要升级
    yum list updates
    #查询提供passwd这个文件的软件有哪些
    yum providers passwd


##### yum的安装、卸载与升级

    #安装
    yum install mysql-server    #中间会提示输入y/n来确认安装
    yum -y install mysql-server  #不用提示，直接安装
    #卸载
    yum remove  pam-devel
    #升级指定软件包
    yum update kernel   #升级内核，小心。
    #全系统升级
    yum update


##### 软件组功能

软件组就是一组相关的软件，比如gnome、比如gcc等，一个软件组名字会包含很多个软件。

    #查询软件组有哪些
    yum  grouplist
    #查询软件组gcc的信息
    yum  groupinfo  gcc


#### jar包运行通用shell

只需要改变API_NAME的jar包名称

    #!/bin/sh
    #jar包的名称
    API_NAME=DouDou
    JAR_NAME=$API_NAME.jar
    #PID  代表是PID文件
    PID=$API_NAME.pid
    #使用说明，用来提示输入参数
    usage() {
        echo "Usage: $0 [start|stop|restart|status]"
        exit 1
    }
    #检查程序是否在运行
    is_exist(){
      pid=`ps -ef|grep $JAR_NAME|grep -v grep|awk '{print $2}' `
      #如果不存在返回1，存在返回0  -z 非空为假   
      if [ -z "${pid}" ]; then
       return 1
      else
        return 0
      fi
    }
    #启动方法
    start(){
      is_exist
      if [ $? -eq "0" ]; then 
        echo ">>> ${JAR_NAME} is already running PID=${pid} <<<" 
      else 
        #让jar程序不间断后台运行
        nohup java -jar $JAR_NAME >/dev/null 2>&1 &
    	#将启动之后的进程号保存到pid文件中
        echo $! > $PID
        echo ">>> start $JAR_NAME successed PID=$! <<<" 
       fi
      }
    #停止方法
    stop(){
      #is_exist
      pidf=$(cat $PID)
      #echo "$pidf"  
      echo ">>> api PID = $pidf begin kill $pidf <<<"
      kill -9 $pidf
      rm -rf $PID
      sleep 2
      is_exist
      if [ $? -eq "0" ]; then 
        echo ">>> api 2 PID = $pid begin kill -9 $pid  <<<"
        kill -9  $pid
        sleep 2
        echo ">>> $JAR_NAME process stopped <<<"  
      else
        echo ">>> ${JAR_NAME} is not running <<<"
      fi  
    }
    #输出运行状态
    status(){
      is_exist
      if [ $? -eq "0" ]; then
        echo ">>> ${JAR_NAME} is running PID is ${pid} <<<"
      else
        echo ">>> ${JAR_NAME} is not running <<<"
      fi
    }
    #重启
    restart(){
      stop
      start
    }
    #根据输入参数，选择执行对应方法，不输入则执行使用说明
    case "$1" in
      "start")
        start
        ;;
      "stop")
        stop
        ;;
      "status")
        status
        ;;
      "restart")
        restart
        ;;
      *)
        usage
        ;;
    esac
    exit 0


#### 测试练习shell

helloworld.sh

    # !/bin/sh
    echo "hello world!"
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
       echo "is ok"
    else
       echo "is error"
    fi
    
    . /home/hsy/shell/showage.sh
    show_name() {
       echo "my name is hsy"
    }
    case $1 in
       100)
       show_name
       str="aaa";;
       200)
       show_age
       str="bbb";;
       300)
       sh /home/hsy/shell/run.sh
       str="ccc";;
       *)
       a=`return_int`
       echo $?
       str="you input is error";;
    esac
    echo $str
    
    list=`ls -l /home | awk '{print $9}'`
    for item in $list
    do
       echo "filename:" $item
    done


killproce.sh

    #!/bin/sh
    if [ $# -eq 1 ]
    then
       echo "is running"
    else
       echo "is error input"
       exit 1
    fi 
    pid=`ps -ef | grep -w $1 |grep -v grep | awk '{print$2}'`
    echo "$pid will be killed"
    kill -9 $pid
    echo "$pid is stop"


run.sh

    #!/bin/sh
    echo "is run run run"


showage.sh

    #!/bin/sh
    show_age(){
       echo "my age is 22"
    }
    return_int(){
       echo "this is return method"
       return 100
    }


#### jar转成服务

    #!/bin/bash
    #
    # jar is linux jar service
    #
    # chkconfig: 2345 56 72
    . /etc/profile
    
    export jar_url=/home/hsy/DouDou.jar
    PID=`ps -ef|grep DouDou|grep -v grep|awk '{print $2}'`
    JAVA_HOME=/usr/local/jdk1.8.0_144
    start() {
    	echo "starting DouDou service"
    	nohup java -jar $jar_url &
    }
    
    stop() {
    	echo "stopping DouDou service"
    	kill -9 $PID
    }
    status() {
    	pid=`ps -ef | grep DouDou| grep -v grep| awk -F ' ' '{print$2}'| wc -l`
    	if [ $pid -gt 0 ]
    	then
    			echo "jar is running!"
    	else
    			echo "jar is stopped!"
    	fi
    }
    
    # See how we were called.
    case "$1" in
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
    	echo $"Usage: $0 {start|stop|status|restart}"
    	exit 2
    esac


#### 定时jar包服务开启

    #!/bin/sh
    source /etc/profile
    if ps -ef|grep DouDou|egrep -v grep >/dev/null
    then
            echo "jar is running" `date` >> /home/qin/jar.log
    else
    	nohup service doudou start &
           echo "jar is starting" `date` >> /home/qin/jar.log
    fi

