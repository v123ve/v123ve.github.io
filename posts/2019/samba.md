---

Created at: 2021-03-25
Last updated at: 2021-03-25
tags: 
  - nas
  - samba

---

# samba


#### samba

* 安装samba

    apt-get install samba samba-common-bin -y
    
* 配置samba

    vi /etc/samba/smb.conf
    

在最后一行加上

    # 文件末尾添加这个共享文件夹的定义：
    [NAS]
       comment = NAS External drive
       path = /
       public = Yes
       browseable = Yes
       writeable = Yes
       valid users = admin123


* 新建samba用户

    smbpasswd -a admin123
    
* 重启samba

    systemctl restart smbd
    

