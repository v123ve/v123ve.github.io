---

Created at: 2019-05-09
Last updated at: 2019-05-17
tags: 
  - linux
  - vi编辑器
  - 用户管理
  - 文件管理
  - 系统检测

---

# linux


## linux

#### 面试题

* linux基础

1. 你使用过哪些linux操作系统？
	centos6.9，red hat红帽子，红旗 red flag，ubuntu乌班图，suse
2. linux防火墙的常用命令？
3. 本章的重点
	linux简介,虚拟机的安装,linux操作系统的安装,网络配置,xshell的配置,jdk的安装配置,防火墙的配置

* linux进阶

1. 目录创建用什么命令？创建文件用什么命令？复制文件用什么命令?文件权限修改用什么命令？
	创建目录： mkdir
	创建文件：典型的如 touch，vi 也可以创建文件，其实只要向一个不存在的文件输出，都会创建文件
	复制文件： cp
	文件权限修改： chmod
2. 系统管理员的职责包括那些？管理的对象是什么？
	系统管理员的职责是进行系统资源管理、设备管理、系统性能管理、安全管理和系统性能监测。管理的对象是服务器、用户、服务器的进程及系统的各种资源等

* linux深入

1. Linux文件管理特性是什么？
	文件都有文件名与数据，在Linux上被分成两个部分：
	用户数据 (user data) 与元数据 (metadata)。
	用户数据，即文件数据块 (data block)，数据块是记录文件真实内容的地方，
	元数据则是文件的附加属性，如文件大小、创建时间、所有者等信息。
	在Linux中元数据中的inode 号（inode 是文件元数据一部分但其并不包含文件名，inode 号即索引节点号）才是文件的唯一标识而非文件名。文件名仅是为了方便人的记忆和使用，系统或程序通过 inode 号找 正确文件数据块。
2. 硬链接和软连接的区别？
	硬链接是有着相同 inode 号仅文件名不同的文件:ln -d /home/chenjian/aaa.txt /root/bbb.txt
	1）文件有相同的 inode 及 data block；
	2）只能对已存在的文件进行创建；
	3）不能交叉文件系统进行硬链接的创建；
	4）不能对目录进行创建，只可对文件创建；
	5）删除一个硬链接文件并不影响其他有相同 inode 号的文件。
	软连接文件的大小是指向的目标文件的文件名的大小:ln -s /home/chenjian/aaa.txt /root/bbb.txt
	1）软链接与硬链接不同，软链接创建与使用没有类似硬链接的诸限制 ；
	2）软链接有自己的文件属性及权限等；
	3）可对不存在的文件或目录创建软链接；
	4）软链接可交叉文件系统；
	5）软链接可对文件或目录创建；
	6）创建软链接时，链接计数 i_nlink 不会增加；
	7）删除软链接并不影响被指向的文件，但若被指向的原文件被删除，则相关软连接被称为死链接

### linux环境下的jar包部署

[虚拟机Linux上用户密码重置](https://blog.csdn.net/fantasy522272820/article/details/79168935)

#### VMware12pro虚拟网络编辑器

![[../_resources/unknown_filename-a0f8265d.png]]
![[../_resources/unknown_filename-448023f3.png]]

#### CentOS网络配置

* 配置好后使用命令更新/etc/init.d/network restart
	![[../_resources/unknown_filename-1dab8c5e.png]]

#### Xshell连接虚拟机

* 填写虚拟机名称和host
	![[../_resources/unknown_filename-1c089f8a.png]]

#### Xftp上传jdk、jar包

![[../_resources/unknown_filename-922a1476.png]]

#### 安装java环境

* 解压缩安装包
	`tar -zxvf jdk-8u144-linux-x64.tar.gz`
* 移动jdk的目录到/usr/local
	`mv jdk1.8.0_144/ /usr/local/`
* 配置环境变量
	i:插入模式-->esc:一般模式
	:命令模式
	shift+zz:若修改了修改退出

    vi /etc/profile
    export JAVA_HOME=/usr/local/jdk1.8.0_144
    export JRE_HOME=/usr/local/jdk1.8.0_144/jre
    export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
    export PATH=$PATH:$JAVA_HOME/bin
    source /etc/profile
    java -version
  

#### 安装配置mysql

    # 安装mysql
    yum -y install mysql mysql-server mysql-devel
    # 查看mysql服务状态
    /etc/init.d/mysqld status
    # (重)启动mysql服务
    /etc/init.d/mysqld (re)start
    # 授权其他服务器访问mysql数据库使用root用户并设置密码为root
    mysql
    grant all privileges on *.* to 'root'@'%' identified by 'root' with grant option;
    flush privileges;
    # 设置mysql的密码
    use mysql
    update user set password=passworD("root") where user='root';
    flush privileges;
    # mysql在linux系统默认区分大小写
    解决方案，设置不区分大小写
    1.Linux下mysql安装完后是默认：区分表名的大小写，不区分列名的大小写；
    2.用root帐号登录后，在/etc/my.cnf中的[mysqld]后添加添加lower_case_table_names=1，重启MYSQL服务，这时已设置成功：不区分表名的大小写；


#### 关闭虚拟机防火墙或开放数据库端口，运行jar包

    # 查看防火墙
    /etc/init.d/iptables status
    # 关闭防火墙
    /etc/init.d/iptables stop
    # 在配置中的拒绝所有连接前加入，添加新的端口
    vi /etc/sysconfig/iptables
    -A INPUT -m state --state NEW -m tcp -p tcp --dport 3306 -j ACCEPT
    # 查看防火墙状态
    service iptables status
    # 停止防火墙
    service iptables stop
    # 启动防火墙
    service iptables start
    # 重启防火墙
    service iptables restart
    # 永久关闭防火墙
    chkconfig iptables off
    # 永久关闭后重启
    chkconfig iptables on
    # 运行jar包
    java -jar DouDou.jar


#### 运行war包

[jar包转war包](https://blog.csdn.net/qq_33689414/article/details/81812761)

    # 安装tomcat
    cd /usr/local/lib 
    tar -zxvf apache-tomcat-8.5.0.tar.gz
    # 在tomcat下的webapps中放war包，也可解压
    # tomcat目录conf下的server.xml修改端口号和要放的war包名
    8080-->8081
    <Host name="localhost"  appBase="webapps" unpackWARs="true" autoDeploy="true">
    <Context path="" docBace="DouDou.war" reloadable="true" />
    # 启动tomcat的bin目录
    ./startup.sh
    # 关闭tomcat
    ./shutdown.sh


#### 用户管理

1、保存用户信息的文件：/etc/passwd
2、保存密码的文件：/etc/shadow
3、保存用户组的文件：/etc/group
4、保存用户组密码的文件：/etc/gshadow
5、用户配置文件：/etc/default/useradd

| /etc/passwd格式 |     |
| --- | --- |
| 用户名 | 用户登陆系统的用户名 |
| 密码  | 密码位 |
| UID | 用户标示号 |
| GID | 默认组标示号 |
| 描述信息 | 存放用户的描述信息 |
| 宿主目录 | 用户登陆系统的默认目录，默认是在/home/下 |
| 命令解析器 | 用户使用的Shell，默认是bash |

##### Linux用户分类

1、超级用户：（root，UID=0）
2、普通用户：（UID在500到60000）
3、伪用户：（UID在1到499）
4、系统和服务相关的：bin、daemon、shutdown等
5、进程相关的：mail、news、games等
6、为什么需要伪用户：没有用户登录时，linux系统依然要运行，有很多进程在跑着，所以必须需要一些伪用户来执行那些命令

| /etc/shadow格式 |     |
| --- | --- |
| 用户名 | 登陆系统的用户名 |
| 密码  | 加密密码 |
| 最后一次修改时间 | 用户最后一次修改密码距现在的天数，从1970-1-1起 |
| 最小时间间隔 | 两次修改密码之间的最小天数 |
| 最大时间间隔 | 密码有效天数 |
| 警告时间 | 从系统警告到密码失效的天数 |
| 账号闲置时间 | 账号闲置时间 |
| 失效时间 | 密码失效的天数 |
| 标志  | 标志  |

| /etc/group格式 |     |
| --- | --- |
| 组名  | 用的所在的组 |
| 组密码 | 密码位，一般不使用 |
| GID | 主标示号 |
| 组内用户列表 | 属于该组的用户列表 |

| /etc/gshadow格式 |     |
| --- | --- |
| 组名  | 用的所在的组 |
| 组密码 | 密码位，一般不使用 |
| 组管理者 | 管理用户列表 |
| 组内用户列表 | 属于该组的用户列表 |

| /etc/default/useradd格式 |     |
| --- | --- |
| GROUP=100 | 表示用户组ID |
| HOME=/HOME | 表示家目录的位置 |
| INACTIVE=-1 | 表示是否启用帐号过期停权,-1表示不启用 |
| EXPIRE= | 表示账号是否启用过期设置,无表示不启用 |
| SHELL=/bin/bash | 表示账号使用shell种类 |
| SKEL=/etc/skel | 表示账号使用默认文件内容,可以理解为添加用户的目录默认文件存放位置.也就是说,当用户用useradd添加用户时,用户主目录下的文件都是从这个目录中复制的 |
| CREATE_MAIL_SPOOL=yes | 表示是否创建邮箱缓存,yes表示创建 |

##### 操作用户命令

1. 添加用户命令：useradd
	-u 指定组ID（uid）
	-g 指定所属的组名（gid）
	-G 指定多个组，用逗号“，”分开（Groups）
	-c 用户描述（comment）
	-e 失效时间（expire date）
	例子:useradd -u 888 -g users -G sys,root -c "hr zhang" zhangsan
	修改密码:passwd zhangsan
2. 修改用户命令：usermod（user modify）
	-l 修改用户名 （login）usermod -l a b（b改为a）
	-g 添加组 usermod -g sys tom
	-G添加多个组 usermod -G sys,root tom
	–L 锁定用户账号密码（Lock）
	–U 解锁用户账号（Unlock）
3. 删除用户命令：userdel（user delete）
	-r 删除账号时同时删除目录（remove）

##### 用户组

* 每个用户至少属于一个用户组
* 每个用户组可以包含多个用户
* 同用户组的用户享有该组共有的权限

1. 添加组：groupadd
	-g 指定gid
2. 修改组：groupmod
	-n 更改组名（new group）
3. 删除组：groupdel
	groups 显示用户所属组

例子:

1. 添加bbb用户组:
	groupadd  -r bbb
2. 修改bbb组为gid201,名称bbs:
	groupmod -g 201 -n bbs bbb
	grep bbs /etc/group
3. 给组设置密码:
	gpasswd bbs
4. 设置并查看组管理员，管理员为ccc
	gpasswd -A ccc bbs
	grep bbs /etc/group /etc/gshadow
5. 使用ccc用户登录可以将其他用户加入到bbs组
	gpasswd -a chenjian bbs

##### sudo命令

Sudo命令一般用在非root用户下，临时提升非root用户的权限。
第一步：必须要在/etc/sudoers中配置非root用户
![[../_resources/unknown_filename-f10ffd50.png]]
第二步：执行命令sudo reboot，输入user1 的密码，成功重启。

#### 时间

##### 修改系统时区

1、查看当前时区:cat /etc/sysconfig/clock||date -R
2、修改当前时区:cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
3、桌面方式:System->Administration->Date&Time

##### 修改系统时间

查看当前时间：date
修改当前时间：date MMDDhhmmYYYY

##### 使用NTP同步系统时间

Ntp服务简介: NTP是网络时间协议(Network Time Protocol)，它是用来同步网络中各个计算机的时间的协议。
![[../_resources/unknown_filename-d2aa44ce.png]]

1. 查看当前的ntp服务是否启动：
	/etc/init.d/ntpd status
	如果没有ntp服务则使用yum install ntp 安装
	启动ntpd服务之后，系统会自动同步网络时间
2. 启动 ntp：
	service ntpd start
3. 设置开机启动:
	chkconfig ntpd on
4. 检查是否设置成功
	chkconfig --list ntpd
	其中2-5为on状态就代表成功。
5. 如果不开启ntp服务，可以手动执行ntpdate pool.ntp.org命令同步网络时间,授时服务器
	ntpdate pool.ntp.org
6. 将时间写入到硬件时钟
	/sbin/hwclock -w

##### 设置开机自启(以Tomcat为例)

* 将其作为系统服务，挂载开启
	凡是系统服务,在/etc/init.d下的均有对应的shell脚本,名称与服务名一致
	#windows转到unix里需要dos转unix
	dos2unix mytomcat
	chmod 777 mytomcat
	#在chkconfig工具服务列表中增加此服务，此时服务会被在/etc/rc.d/rcN.d中赋予K/S入口了；
	chkconfig --add mytomcat
	chkconfig --list | grep tomcat
	修改服务的默认启动等级:chkconfig --level 35 mytomcat on
	删除服务:chkconfig --del mytomcat
	若提示未定义JAVAHOME,在tomcat/bin/setclasspath.sh中加入即可

    #!/bin/bash
    #
    # mytomcat is linux tomcat service
    #
    # chkconfig: 2345 60 80
  
    # 定义全局变量
    tomcat_bin=/usr/lib/tomcat8.5.0/bin
    start_file=$tomcat_bin/startup.sh
    stop_file=$tomcat_bin/shutdown.sh
  
    start() {
    	echo "starting tomcat service"
    	$start_file
    }
  
    stop() {
    	echo "stoping tomcat service"
    	$stop_file
    }
  
    status() {
    	pid=`ps -ef | grep -w $tomcat_bin | grep -v grep | awk -F ' ' '{print$2}' | wc -l`
    	if [ $pid -gt 0 ]
    	then
    		echo "tomcat is running..."
    	else
    		echo "tomcat is stopped!"
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
      restart)
    	stop
    	start
    	;;
      *)
    	echo $"Usage: $0 {start|stop|status|restart}"
    	exit 2
    esac
  
* 未挂载的程序开机自启动实现方式是编写程序启动的.sh脚本，再将此脚本挂载到Linux系统上，让它开机执行，启动程序
	打开/etc/rc.d/rc.local文件，在最后加上如下脚本：

    source /etc/profile
    sh /usr/lib/tomcat8.5.0/bin/startup.sh
  

#### 文件管理

##### Linux命令的分类

1. 内部命令：属于Shell解析器的一部分
	cd 切换目录（change directory）
	pwd 显示当前工作目录（print working directory）
	外部命令：独立于Shell解析器之外的文件程
2. help 帮助序
	ls 显示文件和目录列表（list）
	mkdir 创建目录（make directoriy）
	cp 复制文件或目录（copy）
3. 查看帮助文档
	内部命令：help + 命令（help cd）
	外部命令：man + 命令（man ls）

##### 操作文件或目录常用命令

1. pwd 显示当前工作目录（print working directory）
2. touch 创建空文件
3. mkdir 创建目录（make directoriy）
	-p 父目录不存在情况下先生成父目录 （parents）
4. cp 复制文件或目录（copy）
	-r 递归处理，将指定目录下的文件与子目录一并拷贝（recursive）
	-p 带时间戳拷贝
5. mv 移动文件或目录、文件或目录改名（move）
6. rm 删除文件（remove）
	-r 同时删除该目录下的所有文件（recursive）
	-f 强制删除文件或目录（force）
7. rmdir 删除空目录（remove directoriy）
8. cat显示文本文件内容 （catenate）
9. more、less 分页显示文本文件内容
10. head、tail查看文本中开头或结尾部分的内容
	haed -n 5 a.log 查看a.log文件的前5行
	tail -F b.log 循环读取（follow）

##### linux常用命令

1. ls：显示文件和目录列表(list)
	常用参数：
	-l(long)
	-a(all) 注意隐藏文件、特殊目录.和..
	-t(time)
2. wc 统计文本的行数、字数、字符数（word count）
	-m 统计文本字符数
	-w 统计文本字数
	-l 统计文本行数
3. find 在文件系统中查找指定的文件
	find /etc/ -name "aaa"
4. grep 在指定的文本文件中查找指定的字符串
	-w “关键字” 完全匹配关键字
	-v “关键字” 不匹配关键字
5. df 显示文件系统磁盘空间的使用情况
6. du 显示指定的文件（目录）已使用的磁盘空间的总合
	-h文件大小以K，M为单位显示（human-readable）
	-s只显示各档案大小的总合（summarize）
	例：du -sh * 用于显示每个文件夹的实际大小
7. free 显示当前内存和交换空间的使用情况。
8. 备份压缩命令
	gzip 压缩（解压）文件或目录，压缩文件后缀为gz
	bzip2 压缩（解压）文件或目录，压缩文件后缀为bz2
	tar 文件、目录打（解）包
	-c 建立一个压缩文件的参数指令（create）
	-x 解开一个压缩文件的参数指令（extract）
	-z 是否需要用 gzip 压缩
	-j 是否需要用 bzip2 压缩
	-v 压缩的过程中显示文件（verbose）
	-f 使用档名，在 f 之后要立即接档名（file）
	当压缩文件后缀为tar/tar.gz压缩文件命令为：tar -zcvf 目标文件名 源文件/文件夹/*
	解压缩文件命令为：tar -zxvf 压缩文件,解压到当前目录
	解压缩文件命令为：tar -zxvf 压缩文件 -C 目标目录,解压到目标目录
	tar -zcvf 如果不加z,就是单纯的打包,不进行压缩
	当压缩文件为zip后缀时，使用：unzip 文件名,进行解压，
	使用：gzip -c 文件名 > 目标文件名,进行压缩

#### 系统检测

1. top 显示当前系统中耗费资源最多的进程
	![[../_resources/unknown_filename-26e6682d.png]]
	load average:查看当前系统，1分钟，5分钟，15分钟的平均负载
	Tasks：当前系统运行的进程。
	Cpu：cpu详情，按1，可以显示所有的cpu使用情况
	mem：显示内存的使用情况
	swap：虚拟内存的使用情况
	退出：q
2. ps 显示瞬间的进程状态
	-e /-A 显示所有进程，环境变量
	-f 全格式
	-a 显示所有用户的所有进程（包括其它用户）
	-u 按用户名和启动时间的顺序来显示进程
	-x 显示无控制终端的进程
3. kill 杀死一个进程
	kill -9 pid
4. df 显示文件系统磁盘空间的使用情况
5. ifdown命令用于关闭网卡，ifup命令用于开启网卡

##### 进程概念

1. 进程是正在运行的程序实体，并且包括这个运行的程序中占据的所有系统资源，比如说CPU（寄存器），IO,内存，网络资源等。
2. 很多人在回答进程的概念的时候，往往只会说它是一个运行的实体，而会忽略掉进程所占据的资源。比如说，同样一个程序，同一时刻被两次运行了，那么他们就是两个独立的进程。

##### Linux中的三种进程

1. 交互进程是由一个Shell启动的进程。交互进程既可以在前台运行，也可以在后台运行。
2. 批处理进程和终端没有联系，是一个进程序列。
3. 监控进程（也称系统守护进程）时Linux系统启动时启动的进程，并在后台运行。例如，httpd是著名的Apache服务器的监控进程。

* 进程入口及操作:
	![[../_resources/unknown_filename-04361055.png]]
* 服务入口与操作：
	![[../_resources/unknown_filename-2b298011.png]]

##### 僵死进程处理

查看有无僵死进程:
![[../_resources/unknown_filename-a476914b.png]]
找出僵死进程
`ps -A -ostat,ppid,pid,cmd | grep -e '^[zZ]’`
![[../_resources/unknown_filename-05a7e5f8.png]]
杀死僵死进程的父进程
格式：#kill -HUP ppid格式
实操： #kill -HUP 11712；
参数HUP实现让进程平滑启动，重新加载配置文件。可以理解为，进程【不用重新启动】就能【重新】读取它的配置文件【并调整自给】以适应变化的话。

##### 定时任务

![[../_resources/unknown_filename-59aaa477.png]]
查看cron服务是否开启:/etc/init.d/crond status
查看当前的定时任务:crontab -l
编辑:crontab -e
![[../_resources/unknown_filename-b0debf55.png]]
检查效果
![[../_resources/unknown_filename-07826c20.png]]
![[../_resources/unknown_filename-0a09c005.png]]

##### 系统启动

linux启动时我们会看到许多启动信息。Linux系统的启动过程并不是大家想象中的那么复杂，其过程可以分为5个阶段：

1. 内核的引导。
	当计算机打开电源后，首先是BIOS开机自检，按照BIOS中设置的启动设备（通常是硬盘）来启动。操作系统接管硬件以后，首先读入 /boot目录下的文件夹。
2. 运行 init。
	Init进程是系统所有进程的起点，你可以把它比拟成系统所有进程的老祖宗，没有这个进程，系统中任何进程都不会启动。
	pstree 显示系统的进程树状结构
3. 系统初始化。
	Linux允许为不同的场合，分配不同的开机启动程序，这就叫做"运行级别" （runlevel）。也就是说， 启动时根据"运行级别"，确定要运行哪些程序。
	运行级别0：系统停机状态，系统默认运行级别不能设为0，否则不能正常启动；
	运行级别1：单用户工作状态，root权限，用于系统维护，禁止远程登陆；
	运行级别2：多用户状态(没有NFS)；
	运行级别3：完全的多用户状态(有NFS)，登陆后进入控制台命令行模式；
	运行级别4：系统未使用，保留；
	运行级别5：X11控制台，登陆后进入图形GUI模式；
	运行级别6：系统正常关闭并重启，默认运行级别不能设为6，否则不能正常启动；
	一般要想让某个服务开机自启，需要指定该服务的运行级别为2345
	或者chkconfig serverName on
	chkconfig 命令 系统服务相关的
	--list 显示系统所有的服务
	chkconfig mysqld off 关闭开机自启
	chkconfig mysqld on 开机自启
	chkconfig --level 2345 servername on/off
	![[../_resources/unknown_filename-1d9c7176.png]]
4. 建立终端
	![[../_resources/unknown_filename-0b9d1b79.png]]
5. 用户登录系统
	![[../_resources/unknown_filename-69b485a5.png]]
	![[../_resources/unknown_filename-acc54019.png]]

#### vi编辑器

vim兼容vi,多级撤销,多平台,语法高亮,可视化操作

* 安装dos和unix转换包:yum install dos2unix
	将aaa.txt文件(dos)转换成unix格式:dos2unix aasa.txt

|     | 插入命令 |
| --- | --- |
| i   | 在光标前插入 |
| I   | 在光标当前行开始插入 |
| a   | 在光标后插入 |
| A   | 在光标当前行末尾插入 |
| o   | 在光标当前行的下一行插入新行 |
| O   | 在光标当前行的上一行插入新行 |

|     | 定位命令 |
| --- | --- |
| :set nu | 显示行号 |
| :set nonu | 取消行号 |
| gg  | 到文本的第一行 |
| G   | 到文本的最后一行 |
| :n  | 到文本的第n行 |

|     | 替换和取消命令 |
| --- | --- |
| u   | undo，取消上一步操作 |
| Ctrl + r | redo，返回到undo之前 |
| r   | 替换光标所在处的字符 |
| R   | 从光标所在处开始替换，按Esc键结束 |

|     | 删除命令 |
| --- | --- |
| x   | 删除光标所在处字符 |
| nx  | 删除光标所在处后的n个字符 |
| dd  | 删除光标所在行。ndd删除n行 |
| dG  | 删除光标所在行到末尾行的所以内容 |
| D   | 删除光标所在处到行尾的内容 |
| :5,7d | 删除指定范围的行,从第5行到第7行 |

|     | 常用快捷键 |
| --- | --- |
| Shift+ zz | 保存退出，与“:wq”作用相同 |
| v   | 进入字符可视模式 |
| V   | 或 Shift + v 进入行可视模式 |
| Ctrl + v | 进入块可视模式 |

|     | 常用命令 |
| --- | --- |
| ctrl+b | 屏幕往后移动一页 |
| ctrl+f | 屏幕往前移动一页 |
| ctrl+u | 屏幕往后移动半页 |
| ctrl+d | 屏幕往前移动半页 |
| 整数+shift+G | 到这一页的开头 |
| G   | 移动到文章的最后 |
| $   | 将光标移动到行尾 |
| ^   | 将光标移到行头 |
| w   | 将光标移到下一行头 |
| b   | 跟w相反.移到上一词词头 |
| e   | 将光标移到下一词词尾 |
| 复制  |     |
| yw  | 将光标所在之处到字尾的字符复制到缓冲区中 |
| yy  | 复制光标所在行到缓冲区。 |
| #yy | 例如,6yy表示拷贝从光标所在的该行"往下数"6行文字,将缓冲区内的字符贴到光标所在位置 |
| p   | 粘贴  |
| 查找  |     |
| /+查找内容 | 例如"/hello"或者是"?hello"也是可以的 |
| 替换  |     |
| r   | 替换光标所在处的字符。 ,按一下"r"然后输入要即可 |
| R   | 替换光标所到之处的字符，直到按下「ESC」键为止 |
| s/原字符/新字符/g | 代表当前行所有 |
| %s/原字符/新字符/g | 代表全局替换 |



