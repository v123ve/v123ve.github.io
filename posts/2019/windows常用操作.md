---

Created at: 2019-12-03
Last updated at: 2021-05-08
tags: 
  - windows
  - 虚拟机
  - ssh
  - wsl

---

# windows常用操作


#### windows常用操作

#### 查看端口占用

1. netstat -ano，列出所有端口的情况

* netstat -aon|findstr "49157" 查看被占用端口对应的PID
* tasklist|findstr "80" 查看是哪个进程或者程序占用了80端口
* taskkill /f /t /im Tencent.exe 关闭该进程

#### 虚拟机Linux上用户密码忘记了

1. 启动虚拟机，出现下面的倒计时界面时，按键盘上的e键![[../_resources/unknown_filename-80155a3d.png]]
2. 进入如下后界面，再按e键![[../_resources/unknown_filename-eb591b59.png]]
3. 进入如下界面后，使用键盘上的上下键，选中第二项以kernel开头的项。选中后，再次按e键。![[../_resources/unknown_filename-597d03a2.png]]
4. 进入以下界面后，在最后面输入空格和s，然后回车。![[../_resources/unknown_filename-99565de4.png]]
5. 接着会回到如下界面，然后按下b键（b代表boot启动）![[../_resources/unknown_filename-3a6d2090.png]]
6. 进入如下界面： ![[../_resources/unknown_filename-c7f33833.png]]
7. 此时输入passwd root回车![[../_resources/unknown_filename-2e09071a.png]]
8. 输入密码，回车，确认密码，回车，输入reboot，回车。![[../_resources/unknown_filename-87163ce3.png]]
9. 最后就可以使用新密码登录了

#### Ubuntu

##### ssh

1. 安装openssh-server
	`apt-get installl -y openssh-server`
2. 修改配置文件
	`vi /etc/ssh/sshd_config`
3. 注释
	`PermitRootLogin prohibit-password`
4. 在下方加入
	`PermitRootLogin yes`
5. 重启ssh
	`service ssh restart`

##### wsl

[windows10安装使用linux的子系统wsl](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)

[ssh连接wsl(1)](https://blog.csdn.net/liumiaocn/article/details/103441927)

[ssh连接wsl(2)](https://www.cnblogs.com/bpf-1024/p/14036720.html)

www.cnblogs.com%2Fbpf-1024%2Fp%2F14036720.html)

