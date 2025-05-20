import{_ as e,c as s,a3 as t,o as m}from"./chunks/framework.BaR4VHXY.js";const c=JSON.parse('{"title":"samba","description":"","frontmatter":{"Created at":"2021-03-25T00:00:00.000Z","Last updated at":"2021-03-25T00:00:00.000Z","tags":["nas","samba"]},"headers":[],"relativePath":"zh-CN/工作笔记/samba.md","filePath":"zh-CN/工作笔记/samba.md","lastUpdated":null}'),l={name:"zh-CN/工作笔记/samba.md"};function n(r,a,p,i,b,o){return m(),s("div",null,a[0]||(a[0]=[t(`<h1 id="samba" tabindex="-1">samba <a class="header-anchor" href="#samba" aria-label="Permalink to &quot;samba&quot;">​</a></h1><h4 id="samba-1" tabindex="-1">samba <a class="header-anchor" href="#samba-1" aria-label="Permalink to &quot;samba&quot;">​</a></h4><ul><li><p>安装samba</p><p>apt-get install samba samba-common-bin -y</p></li><li><p>配置samba</p><p>vi /etc/samba/smb.conf</p></li></ul><p>在最后一行加上</p><pre><code># 文件末尾添加这个共享文件夹的定义：
[NAS]
   comment = NAS External drive
   path = /
   public = Yes
   browseable = Yes
   writeable = Yes
   valid users = admin123
</code></pre><ul><li><p>新建samba用户</p><p>smbpasswd -a admin123</p></li><li><p>重启samba</p><p>systemctl restart smbd</p></li></ul>`,6)]))}const u=e(l,[["render",n]]);export{c as __pageData,u as default};
