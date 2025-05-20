import{_ as n,c as e,a3 as o,o as r}from"./chunks/framework.BaR4VHXY.js";const q=JSON.parse('{"title":"nginx正则取反","description":"","frontmatter":{"Created at":"2021-05-20T00:00:00.000Z","Last updated at":"2023-07-26T00:00:00.000Z","Source URL":"https://blog.csdn.net/w851685279/article/details/126715291","tags":["nginx","ssl"]},"headers":[],"relativePath":"zh-CN/工作笔记/nginx正则取反.md","filePath":"zh-CN/工作笔记/nginx正则取反.md","lastUpdated":null}'),a={name:"zh-CN/工作笔记/nginx正则取反.md"};function l(u,t,s,d,i,h){return r(),e("div",null,t[0]||(t[0]=[o(`<h1 id="nginx正则取反" tabindex="-1">nginx正则取反 <a class="header-anchor" href="#nginx正则取反" aria-label="Permalink to &quot;nginx正则取反&quot;">​</a></h1><h2 id="nginx正则取反-1" tabindex="-1">nginx正则取反 <a class="header-anchor" href="#nginx正则取反-1" aria-label="Permalink to &quot;nginx正则取反&quot;">​</a></h2><pre><code>取反正则：^((?!要取反的正则表达式).)*$
    #默认请求
    location / {
      add_header Cache-Control no-cache;
      add_header Pragma no-cache;
      add_header Expires 0;
      root /usr/my/security/front_end_security/security_client;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_set_header Host $http_host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_cookie_path /user-login /;
      try_files $uri $uri/ /index.html;
      set $is_not_matched 0;
      if ($request_uri ~ ^((?!(.*\\.(log|json|css|js|png|html|pdf|mp3|svg)?$|^\\/user\\/login.*$)).)*$) {
          set $is_not_matched 1;
      }
    }
</code></pre><h2 id="nginx请求拦截" tabindex="-1">nginx请求拦截 <a class="header-anchor" href="#nginx请求拦截" aria-label="Permalink to &quot;nginx请求拦截&quot;">​</a></h2><pre><code>    location /api {
      proxy_pass http://127.0.0.1:8080/configmanage;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_set_header Host $http_host;
      proxy_set_header X-Real-IP $remote_addr;
	  rewrite_by_lua_file       &quot;D:/FrontEnd/conf/lua/luaRewrite.lua&quot;;
	  header_filter_by_lua_file &quot;D:/FrontEnd/conf/lua/luaSetResponseHeader.lua&quot;;
	  body_filter_by_lua_file   &quot;D:/FrontEnd/conf/lua/luaSetResponseBody.lua&quot;;  
    }
</code></pre><p>luaRewrite.lua</p><pre><code>local rules={
	-- header中允许出现的字段
	allowHeaders={
		--&quot;user-agent&quot;,
		&quot;host&quot;,
		&quot;content-type&quot;,
		--&quot;accept&quot;,
		&quot;content-length&quot;,
	},
	-- 允许访问的URL，支持通配符*和?
	-- 可选填黑名单关键字，若（URI参数和报文体）中同时出现所有关键字，则拒绝访问
	allowUrls={
		{url=&quot;/*&quot;, banned={&quot;dmac&quot;, &quot;alert&quot;}},
		{url=&quot;/service/*&quot;},
		{url=&quot;/image/*&quot;},
		{url=&quot;/txt/*&quot;},
	},
	-- 如果检查失败，会跳转到该页面
	failed_page=&quot;/checkfailed.html&quot;
}

-- 过滤请求头的的无效Header
local h = ngx.req.get_headers()
for hKey, hVal in pairs(h) do
	ngx.log(ngx.ERR, &quot;[ REQUEST HEADER ] [ &quot;, hKey, &quot; - &quot;, type(hKey), &quot; ] [&quot;, hVal, &quot; - &quot;, type(hVal), &quot;]&quot;)
	local validHeader = false
	for seq, validKey in pairs(rules[&quot;allowHeaders&quot;]) do
		if hKey == validKey then
			validHeader = true
			break
		end
	end
	if validHeader ~= true then
		-- 请求中的该header字段不是合法的，清空
		ngx.req.set_header(hKey, nil)
	end
end

-- 过滤无效URL
local passCheck = false
for seq, valUrl in pairs(rules[&quot;allowUrls&quot;]) do
	ngx.log(ngx.ERR, &quot;[CHECK] URI:[&quot;, ngx.var.uri, &quot;] - &quot;, valUrl[&quot;url&quot;])
	if string.match(ngx.var.uri, valUrl[&quot;url&quot;]) ~= nil then
		-- 检查该URL对应的黑名单关键字
		if valUrl[&quot;banned&quot;] ~= nil then
			local allHitUri = true
			local allHitBody = true
			-- 读取Body内容
			ngx.req.read_body()
			local data = ngx.req.get_body_data()
			if data == nil then
				allHitBody = false
			end
			ngx.log(ngx.ERR, &quot;[CHECK] Data:[&quot;, data, &quot;]&quot;)
			ngx.log(ngx.ERR, &quot;[CHECK] URI:[&quot;, ngx.var.request_uri, &quot;]&quot;)
			for k, word in pairs(valUrl[&quot;banned&quot;]) do
				ngx.log(ngx.ERR, &quot;[CHECK] Banned:[&quot;, word, &quot;]&quot;)
				if allHitUri == true then
					ngx.log(ngx.ERR, &quot;[CHECK URI] ...&quot;)
					if string.match(ngx.var.request_uri, word) == nil then
						allHitUri = false
						ngx.log(ngx.ERR, &quot;[CHECK URI] Miss&quot;)
					end
				end
				if allHitBody == true and data ~= nil then
					ngx.log(ngx.ERR, &quot;[CHECK BODY] ...&quot;)
					if string.match(data, word) == nil then
						allHitBody = false
						ngx.log(ngx.ERR, &quot;[CHECK BODY] Miss&quot;)
					end
				end
				if allHitUri == false and allHitBody == false then
					break
				end
			end
			if allHitUri == false and allHitBody == false then
				-- URI和BODY中都没有命中黑名单关键字，该URL才是合法的
				passCheck = true
				ngx.log(ngx.ERR, &quot;[CHECK] url:[&quot;, valUrl[&quot;url&quot;], &quot;] break.&quot;, allHitUri, allHitBody)
			end
			
		end
		if valUrl[&quot;banned&quot;] == nil then
			-- 该URL是合法的
			passCheck = true
			ngx.log(ngx.ERR, &quot;[CHECK] url:[&quot;, valUrl[&quot;url&quot;], &quot;] break 2.&quot;)
		end
		ngx.log(ngx.ERR, &quot;[CHECK] url:[&quot;, valUrl[&quot;url&quot;], &quot;] RESULT[&quot;, passCheck, &quot;]&quot;)
	end
end

ngx.log(ngx.ERR, &quot;[CHECK] result:[&quot;, passCheck, &quot;]&quot;)
if passCheck == false then
	ngx.redirect(rules[&quot;failed_page&quot;], 301)
end
</code></pre><p>luaSetResponseHeader.lua</p><pre><code>local h = ngx.resp.get_headers()
for k, v in pairs(h) do
	ngx.log(ngx.ERR, &quot;[ RESPONSE HEADER ]&quot;, k, v)
    if k == &quot;content-length&quot; then
		ngx.log(ngx.ERR, &quot;Content-Length[ &quot;..ngx.header[&quot;content-length&quot;]..&quot; ]&quot;)
    end
end
--ngx.header[&quot;Gosh&quot;] = &quot;holyshit!&quot;
ngx.header[&quot;Server&quot;] = nil
ngx.header[&quot;Date&quot;] = nil
--如果修改了报文的大小，需要在这里修改content_length
--ngx.header.content_length = 29
--ngx.header.content_length = nil
--在header回调里不能修改body
--ngx.log(ngx.ERR, &quot;Content-Length[ LENGTH :&quot;, string.len(ngx.arg[1]), &quot; ]&quot;)
</code></pre><p>luaSetResponseBody.lua</p><pre><code>--注意，一个HTTP Response可能分为多个Trunk返回
--因此该函数会被调用多次
--arg[1]是本次HTTP的内容，arg[2]是eof标识表示Trunk结束

--ngx.log(ngx.ERR, &quot;FUNCTION ENTER&quot;)
--ngx.arg[1] = string.upper(ngx.arg[1])..&quot;~~~~~~&quot;
--ngx.arg[1] = &quot;Oh, what a splendid holyshit!&quot;
--ngx.log(ngx.ERR, &quot;BODY Content-Length[ LENGTH :&quot;, string.len(ngx.arg[1]), &quot;]&quot;)
--ngx.log(ngx.ERR, &quot;BODY Content-Length[ LENGTH :&quot;, string.len(ngx.arg[1]), &quot;] BODY:&quot;, ngx.arg[1])

--在body回调里不能修改header
--ngx.header[&quot;Gosh&quot;] = &quot;holyshit!My goddess&quot;
--ngx.header[&quot;Server&quot;] = &quot;idiot_bunch&quot;
</code></pre><p>​<br> ​<br> -- body_filter_by_lua_file: -- 获取当前响应数据 local chunk, eof = ngx.arg[1], ngx.arg[2]</p><pre><code>-- 定义全局变量，收集全部响应
if ngx.ctx.buffered == nil then
    ngx.ctx.buffered = {}
end

-- 如果非最后一次响应，将当前响应赋值
if chunk ~= &quot;&quot; and not ngx.is_subrequest then
    table.insert(ngx.ctx.buffered, chunk)

    -- 将当前响应赋值为空，以修改后的内容作为最终响应
    ngx.arg[1] = nil
end

-- 如果为最后一次响应，对所有响应数据进行处理
if eof then
    -- 获取所有响应数据
    local whole = table.concat(ngx.ctx.buffered)
    ngx.ctx.buffered = nil

    -- 进行你所需要进行的处理
--    whole = &quot;Oh, what a splendid holyshit!&quot;
	-- 如果进行了修改，但是header中的ngx.header.content_length还没有修改
	-- 因此需要在header_filter_by_lua_file中提前修改ngx.header.content_length

    -- 重新赋值响应数据，以修改后的内容作为最终响应
    ngx.arg[1] = whole
end
</code></pre><h4 id="配置https、wss" tabindex="-1">配置https、wss <a class="header-anchor" href="#配置https、wss" aria-label="Permalink to &quot;配置https、wss&quot;">​</a></h4><pre><code>#启动进程,通常设置成和cpu的数量相等
worker_processes  1;

#工作模式及连接数上限
events {
	#单个后台worker process进程的最大并发链接数
    worker_connections  1024;
}

#http服务设置
http {

	#设定mime类型,类型由mime.type文件定义
    include       mime.types;
	
	#设定mime默认类型
    default_type  application/octet-stream;
	
	#sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，
    #对于普通应用，必须设为 on,
    #如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，
    #以平衡磁盘与网络I/O处理速度，降低系统的uptime.
    sendfile        on;
	
	#连接超时时间
    keepalive_timeout  65;
	
	map $http_upgrade $connection_upgrade { 
	 default Upgrade; 
	 &#39;&#39; close; 
	} 
  
	#设定虚拟主机配置
    server {
	
		#侦听80端口
        listen       80;
		#侦听443端口
		listen       443 ssl;
		
        server_name  localhost;
		
		#ssl证书的pem文件路径
		ssl_certificate      ../ssl/webserver.pem;
		#ssl证书的key文件路径
		ssl_certificate_key  ../ssl/webserver.key;
		
		ssl_session_cache    shared:SSL:1m;
		ssl_session_timeout  5m;
		
		ssl_ciphers  HIGH:!aNULL:!MD5;
		ssl_prefer_server_ciphers  on;
		
		ssl_verify_client off;
		ssl_protocols SSLv3 SSLv2 TLSv1 TLSv1.1 TLSv1.2;
		
		#默认请求
        location / {
            add_header Cache-Control no-cache;
            add_header Pragma no-cache;
            add_header Expires 0;
            root html;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            try_files $uri $uri/ /index.html;
            access_log off;
        }
			
		location /webrtctest-ws/entranceSocket {
			# 反向代理发送的HTTP协议的版本是1.1，HTTP1.1支持长连接
			proxy_http_version 1.1;
          # 允许跨域GET,POST,DELETE HTTP方法发起跨域请求
          add_header &#39;Access-Control-Allow-Origin&#39; *;
          add_header &#39;Access-Control-Allow-Credentials&#39; &#39;true&#39;;
          add_header &#39;Access-Control-Allow-Headers&#39; &#39;Authorization,Content-Type,Accep,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,X-Requested-With&#39;;
        add_header &#39;Access-Control-Allow-Methods&#39; 
&#39;GET,POST,OPTIONS,PUT,DELETE&#39;;
			#proxy_set_header Origin &quot;&quot;;
			# 反向代理的uri，这里可以使用负载均衡变量
			proxy_pass http://192.168.1.28:8787/webrtctest-ws/entranceSocket;
			# 表示不要替换路径，其实这里如果是/则有没有都没关系，因为default也是将路径替换到proxy_pass的后边
			proxy_redirect off;
			# 传递时请求头不变， $host是nginx内置变量，表示的是当前的请求头，proxy_set_header表示设置请求头
		    proxy_set_header Host $http_host;
		    proxy_set_header X-Real-IP $remote_addr;
			# 超时设置
			proxy_connect_timeout 30;
			# 两次请求之间的间隔超过 3600s 后才关闭这个连接，默认的60s
		    proxy_read_timeout 3600;
		    proxy_send_timeout 3;
		    #proxy_set_header X-Forwarded-Proto $scheme;
			# 表示X-Forwarded-For头不发生改变
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
		    # 启用支持websocket连接
		    proxy_set_header Upgrade $http_upgrade;
		    proxy_set_header Connection $connection_upgrade;
        }

    }	
}
</code></pre><p>​</p>`,16)]))}const c=n(a,[["render",l]]);export{q as __pageData,c as default};
