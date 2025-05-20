import{_ as n,c as a,a3 as i,o}from"./chunks/framework.BaR4VHXY.js";const h=JSON.parse('{"title":"前端开发环境部署","description":"","frontmatter":{"Created at":"2021-04-15T00:00:00.000Z","Last updated at":"2021-04-29T00:00:00.000Z","tags":["nginx","部署"]},"headers":[],"relativePath":"zh-CN/工作笔记/前端开发环境部署.md","filePath":"zh-CN/工作笔记/前端开发环境部署.md","lastUpdated":null}'),r={name:"zh-CN/工作笔记/前端开发环境部署.md"};function l(t,e,s,d,p,c){return o(),a("div",null,e[0]||(e[0]=[i(`<h1 id="前端开发环境部署" tabindex="-1">前端开发环境部署 <a class="header-anchor" href="#前端开发环境部署" aria-label="Permalink to &quot;前端开发环境部署&quot;">​</a></h1><h2 id="前端开发环境部署-1" tabindex="-1">前端开发环境部署 <a class="header-anchor" href="#前端开发环境部署-1" aria-label="Permalink to &quot;前端开发环境部署&quot;">​</a></h2><ul><li><p>.idea 、node_modules 、docs下的文件 、.umi等临时文件不用复制</p></li><li><p>commonpageBlocks：公共页面路径，一般不用改</p></li><li><p>title：项目名称</p></li><li><p>version：项目版本</p><ul><li>admin:：管理员使用手册</li><li>common：普通用户使用手册</li></ul></li><li><p>productName：项目在数据库中的名称，与授权等有关</p></li><li><p>页面代理，具体看情况修改</p></li><li><p>页面路由，具体看情况修改</p></li><li><p>menu.puml：可视化菜单</p></li><li><p>mock数据</p></li><li><p>清空引入图片</p></li><li><p>changelog.json：版本记录</p></li><li><p>清空目录</p></li><li><p>只保留SettingDrawer</p></li><li><p>清空目录</p></li><li><p>只保留connect.d.ts、global.ts、setting.ts、websocket.ts</p></li><li><p>并删除多余实现</p></li><li><p>只保留Authorized.tsx、document.ejs</p></li><li><p>只保留global.ts</p></li><li><p>删除多余组件</p><ul><li>SYSTEM_TYPE_ID：系统参数要用的系统类型ID</li><li>...</li></ul></li><li><p>baseProjectName：编译后的项目名称</p></li><li><p>helpFileProjectName：帮助文件项目名称</p><ul><li>admin:：管理员使用手册</li><li>common：普通用户使用手册</li></ul></li><li><p>name</p></li><li><p>version</p></li><li><p>description</p></li><li><p>根据需要修改</p></li></ul><h2 id="前端运行环境部署" tabindex="-1">前端运行环境部署 <a class="header-anchor" href="#前端运行环境部署" aria-label="Permalink to &quot;前端运行环境部署&quot;">​</a></h2><h4 id="ubuntu安装nginx" tabindex="-1">ubuntu安装nginx <a class="header-anchor" href="#ubuntu安装nginx" aria-label="Permalink to &quot;ubuntu安装nginx&quot;">​</a></h4><ol><li>安装nginx apt -y install nginx</li><li>查看状态 systemctl status nginx</li><li>使用编译机的nginx.conf覆盖配置文件 配置文件位置/etc/nginx/nginx.conf</li><li>创建日志文件夹 /Log/FrontEndLog</li><li>重启nginx systemctl restart nginx</li></ol><h4 id="sudo配置" tabindex="-1">sudo配置 <a class="header-anchor" href="#sudo配置" aria-label="Permalink to &quot;sudo配置&quot;">​</a></h4><ol><li>SSH sudo /usr/lib/openssh/sftp-server</li><li>Shell sudo -s</li><li>/etc/sudoers admin123 ALL=NOPASSWD: /usr/lib/openssh/sftp-server</li></ol><h2 id="nginx配置" tabindex="-1">Nginx配置 <a class="header-anchor" href="#nginx配置" aria-label="Permalink to &quot;Nginx配置&quot;">​</a></h2><p>Nginx 是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了 IMAP/POP3/SMTP 服务，具有丰富的功能集、稳定性、示例配置文件和低系统资源的消耗</p><h4 id="侦听端口" tabindex="-1">侦听端口 <a class="header-anchor" href="#侦听端口" aria-label="Permalink to &quot;侦听端口&quot;">​</a></h4><pre><code>server {  
# Standard HTTP Protocol 
listen 80; 
# Standard HTTPS Protocol 
listen 443 ssl; 
# For http2  
listen 443 ssl http2; 
# Listen on 80 using IPv6 
listen [::]:80; 
# Listen only on using IPv6 
listen [::]:80 ipv6only=on;
}
</code></pre><h4 id="访问日志" tabindex="-1">访问日志 <a class="header-anchor" href="#访问日志" aria-label="Permalink to &quot;访问日志&quot;">​</a></h4><pre><code>server { 
# Relative or full path to log file 
access_log /path/to/file.log;  
# Turn &#39;on&#39; or &#39;off&#39;  
access_log on;
}
</code></pre><h4 id="域名" tabindex="-1">域名 <a class="header-anchor" href="#域名" aria-label="Permalink to &quot;域名&quot;">​</a></h4><pre><code>server {
# Listen to yourdomain.com 
server_name yourdomain.com;  
# Listen to multiple domains  server_name yourdomain.com www.yourdomain.com; 
# Listen to all domains
server_name *.yourdomain.com; 
# Listen to all top-level domains 
server_name yourdomain.*; 
# Listen to unspecified Hostnames (Listens to IP address itself) 
server_name &quot;&quot;;
}
</code></pre><h4 id="静态资产" tabindex="-1">静态资产 <a class="header-anchor" href="#静态资产" aria-label="Permalink to &quot;静态资产&quot;">​</a></h4><pre><code>server {  
listen 80;  
server_name yourdomain.com;  
location / {      
root /path/to/website; 
}
}
</code></pre><h4 id="重定向" tabindex="-1">重定向 <a class="header-anchor" href="#重定向" aria-label="Permalink to &quot;重定向&quot;">​</a></h4><pre><code>server { 
listen 80;
server_name www.yourdomain.com;
return 301 http://yourdomain.com$request_uri;
}
server {
listen 80; 
server_name www.yourdomain.com; 
location /redirect-url { 
return 301 http://otherdomain.com; 
}
}
</code></pre><h4 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h4><pre><code>server { 
listen 80; 
server_name yourdomain.com;
location / {  
proxy_pass http://0.0.0.0:3000; 
# where 0.0.0.0:3000 is your application server (Ex: node.js) bound on 0.0.0.0 listening on port 3000  
}
}
</code></pre><h4 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h4><pre><code>upstream node_js { 
server 0.0.0.0:3000; 
server 0.0.0.0:4000; 
server 123.131.121.122;
}
server {  
listen 80; 
server_name yourdomain.com;
location / {    
proxy_pass http://node_js; 
}
}
</code></pre><h4 id="ssl-协议" tabindex="-1">SSL 协议 <a class="header-anchor" href="#ssl-协议" aria-label="Permalink to &quot;SSL 协议&quot;">​</a></h4><pre><code>server { 
listen 443 ssl; 
server_name yourdomain.com;
ssl on; 
ssl_certificate /path/to/cert.pem;
ssl_certificate_key /path/to/privatekey.pem; 
ssl_stapling on;
ssl_stapling_verify on; 
ssl_trusted_certificate /path/to/fullchain.pem; 
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_session_timeout 1h;
ssl_session_cache shared:SSL:50m;
add_header Strict-Transport-Security max-age=15768000;
}
# Permanent Redirect for HTTP to HTTPS
server 
{  
listen 80;  
server_name yourdomain.com; 
return 301 https://$host$request_uri;
}
</code></pre>`,26)]))}const m=n(r,[["render",l]]);export{h as __pageData,m as default};
