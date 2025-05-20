---

Created at: 2021-11-10
Last updated at: 2021-11-10
Source URL: http://blog.chinaunix.net/uid-10051104-id-3849334.html
tags: 
  - nginx

---

# nginx不缓存设置


## nginx不缓存设置

在开发调试web的时候，经常会碰到因浏览器缓存(cache)而经常要去清空缓存或者强制刷新来测试的烦恼，提供下apache不缓存配置和nginx不缓存配置的设置。

    if ($request_filename ~* .*\.(?:htm|html)$)
    {
        add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
    }
    add_header Pragma no-cache;
    add_header Expires 0;


#### Expires

对于站点中不经常修改的静态内容（如图片，JS，CSS），可以在服务器中设置expires过期时间，控制浏览器缓存，达到有效减小带宽流量，降低服务器压力的目的。
Expires是Web服务器响应消息头字段，在响应http请求时告诉浏览器在过期时间前浏览器可以直接从浏览器缓存取数据，而无需再次请求。
Expires 10d; 10天后过期

#### Cache-control

Cache-Control与Expires的作用一致，都是指明当前资源的有效期，控制浏览器是否直接从浏览器缓存取数据还是重新发请求到服务器取数据。只不过Cache-Control的选择更多，设置更细致，如果同时设置的话，其优先级高于Expires。
其值可以是public、private、no-cache、no- store、no-transform、must-revalidate、proxy-revalidate、max-age
各个消息中的指令含义如下：
Public指示响应可被任何缓存区缓存。
Private指示对于单个用户的整个或部分响应消息，不能被共享缓存处理。这允许服务器仅仅描述当用户的部分响应消息，此响应消息对于其他用户的请求无效。
no-cache指示请求或响应消息不能缓存
no-store用于防止重要的信息被无意的发布。在请求消息中发送将使得请求和响应消息都不使用缓存。
max-age指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应。
min-fresh指示客户机可以接收响应时间小于当前时间加上指定时间的响应。
max-stale指示客户机可以接收超出超时期间的响应消息。如果指定max-stale消息的值，那么客户机可以接收超出超时期指定值之内的响应消息。

#### Last-Modified/If-Modified-SinceLast-Modified/If-Modified-Since

要配合Cache-Control使用。Last-Modified：标示这个响应资源的最后修改时间。web服务器在响应请求时，告诉浏览器资源的最后修改时间。If-Modified-Since：当资源过期时（使用Cache-Control标识的max-age），发现资源具有Last-Modified声明，则再次向web服务器请求时带上头 If-Modified-Since，表示请求时间。web服务器收到请求后发现有头If-Modified-Since 则与被请求资源的最后修改时间进行比对。若最后修改时间较新，说明资源又被改动过，则响应整片资源内容（写在响应消息包体内），HTTP 200；若最后修改时间较旧，说明资源无新修改，则响应HTTP 304 (无需包体，节省浏览)，告知浏览器继续使用所保存的cache。



