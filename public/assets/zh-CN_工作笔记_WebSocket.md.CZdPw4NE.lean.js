import{_ as t,c as n,a3 as r,o as a}from"./chunks/framework.BaR4VHXY.js";const p=JSON.parse('{"title":"WebSocket","description":"","frontmatter":{"Created at":"2019-07-18T00:00:00.000Z","Last updated at":"2020-09-11T00:00:00.000Z","tags":["工作模块","FileReader","WebSocket","XMLHttpRequest"]},"headers":[],"relativePath":"zh-CN/工作笔记/WebSocket.md","filePath":"zh-CN/工作笔记/WebSocket.md","lastUpdated":null}'),o={name:"zh-CN/工作笔记/WebSocket.md"};function d(i,e,s,l,u,c){return a(),n("div",null,e[0]||(e[0]=[r(`<h1 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;WebSocket&quot;">​</a></h1><h4 id="websocket-1" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket-1" aria-label="Permalink to &quot;WebSocket&quot;">​</a></h4><p><a href="http://www.ruanyifeng.com/blog/2017/05/websocket.html" target="_blank" rel="noreferrer">WebSocket教程</a> HTTP 协议有一个缺陷：通信只能由客户端发起。 如果服务器有连续的状态变化，客户端要获知就非常麻烦，只能使用&quot;轮询&quot;：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。 轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开）</p><h5 id="特点" tabindex="-1">特点： <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点：&quot;">​</a></h5><ol><li>服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。</li></ol><ul><li>建立在 TCP 协议之上，服务器端的实现比较容易。 与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。</li><li>数据格式比较轻量，性能开销小，通信高效。</li><li>可以发送文本，也可以发送二进制数据。</li><li>没有同源限制，客户端可以与任意服务器通信。</li><li>协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。</li></ul><h5 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h5><pre><code>var ws = new WebSocket(&quot;wss://echo.websocket.org&quot;);
ws.onopen = function(evt) { 
  console.log(&quot;Connection open ...&quot;); 
  ws.send(&quot;Hello WebSockets!&quot;);
};
ws.onmessage = function(evt) {
  console.log( &quot;Received Message: &quot; + evt.data);
  ws.close();
};
ws.onclose = function(evt) {
  console.log(&quot;Connection closed.&quot;);
};      
</code></pre><h6 id="解释" tabindex="-1">解释 <a class="header-anchor" href="#解释" aria-label="Permalink to &quot;解释&quot;">​</a></h6><ol><li><p>WebSocket 对象作为一个构造函数，用于新建 WebSocket 实例。 <code>var ws = new WebSocket(&#39;ws://localhost:8080&#39;);</code> 执行上面语句之后，客户端就会与服务器进行连接。</p></li><li><p>webSocket.readyState readyState属性返回实例对象的当前状态，共有四种。CONNECTING：值为0，表示正在连接。 OPEN：值为1，表示连接成功，可以通信了。 CLOSING：值为2，表示连接正在关闭。 CLOSED：值为3，表示连接已经关闭，或者打开连接失败。</p><p>switch (ws.readyState) { case WebSocket.CONNECTING: break; case WebSocket.OPEN: break; case WebSocket.CLOSING: break; case WebSocket.CLOSED: break; default: break; }</p></li><li><p>webSocket.onopen 实例对象的onopen属性，用于指定连接成功后的回调函数。 <code>ws.onopen = function () {ws.send(&#39;Hello Server!&#39;);}</code> 如果要指定多个回调函数，可以使用addEventListener方法。 <code>ws.addEventListener(&#39;open&#39;, function (event) {ws.send(&#39;Hello Server!&#39;);});</code></p></li><li><p>webSocket.onclose实例对象的onclose属性，用于指定连接关闭后的回调函数。</p><p>ws.onclose = function(event) { var code = event.code; var reason = event.reason; var wasClean = event.wasClean; // handle close event }; ws.addEventListener(&quot;close&quot;, function(event) { var code = event.code; var reason = event.reason; var wasClean = event.wasClean; // handle close event });</p></li><li><p>webSocket.onmessage实例对象的onmessage属性，用于指定收到服务器数据后的回调函数。</p><p>ws.onmessage = function(event) { var data = event.data; // 处理数据 }; ws.addEventListener(&quot;message&quot;, function(event) { var data = event.data; // 处理数据 });</p></li></ol><p>注意，服务器数据可能是文本，也可能是二进制数据（blob对象或Arraybuffer对象）。</p><pre><code>ws.onmessage = function(event){
  if(typeof event.data === String) {
    console.log(&quot;Received data string&quot;);
  }
  if(event.data instanceof ArrayBuffer){
    var buffer = event.data;
    console.log(&quot;Received arraybuffer&quot;);
  }}
</code></pre><p>除了动态判断收到的数据类型，也可以使用binaryType属性，显式指定收到的二进制数据类型。</p><pre><code>// 收到的是 blob 数据
ws.binaryType = &quot;blob&quot;;
ws.onmessage = function(e) {
  console.log(e.data.size);};
// 收到的是 ArrayBuffer 数据
ws.binaryType = &quot;arraybuffer&quot;;
ws.onmessage = function(e) {
  console.log(e.data.byteLength);
};
</code></pre><ol start="6"><li><p>webSocket.send() 实例对象的send()方法用于向服务器发送数据。发送文本的例子。 <code>ws.send(&#39;your message&#39;);</code> 发送 Blob 对象的例子。</p><p>var file = document .querySelector(&#39;input[type=&quot;file&quot;]&#39;) .files[0]; ws.send(file);</p></li></ol><p>发送 ArrayBuffer 对象的例子。</p><pre><code>// Sending canvas ImageData as ArrayBuffer
var img = canvas_context.getImageData(0, 0, 400, 320);
var binary = new Uint8Array(img.data.length);
for (var i = 0; i &lt; img.data.length; i++) {
  binary[i] = img.data[i];
}
ws.send(binary.buffer);
</code></pre><ol start="7"><li><p>webSocket.bufferedAmount 实例对象的bufferedAmount属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束。</p><p>var data = new ArrayBuffer(10000000); socket.send(data); if (socket.bufferedAmount === 0) { // 发送完毕 } else { // 发送还没结束 }</p></li><li><p>webSocket.onerror实例对象的onerror属性，用于指定报错时的回调函数。</p><p>socket.onerror = function(event) { // handle error event }; socket.addEventListener(&quot;error&quot;, function(event) { // handle error event })</p></li></ol><h4 id="filereader对象" tabindex="-1">FileReader对象 <a class="header-anchor" href="#filereader对象" aria-label="Permalink to &quot;FileReader对象&quot;">​</a></h4><p>FileReaderFileReader主要用于将文件内容读入内存，通过一系列异步接口，可以在主线程中访问本地文件。使用FileReader对象，web应用程序可以异步的读取存储在用户计算机上的文件(或者原始数据缓冲)内容，可以使用File对象或者Blob对象来指定所要处理的文件或数据。 var reader = new FileReader();</p><table tabindex="0"><thead><tr><th>方法定义</th><th>描述</th></tr></thead><tbody><tr><td>abort():void</td><td>终止文件读取操作</td></tr><tr><td>readAsArrayBuffer(file):void</td><td>异步按字节读取文件内容，结果用ArrayBuffer对象表示</td></tr><tr><td>readAsBinaryString(file):void</td><td>异步按字节读取文件内容，结果为文件的二进制串</td></tr><tr><td>readAsDataURL(file):void</td><td>异步读取文件内容，结果用data:url的字符串形式表示</td></tr><tr><td>readAsText(file,encoding):void</td><td>异步按字符读取文件内容，结果用字符串形式表示</td></tr></tbody></table><table tabindex="0"><thead><tr><th>事件名称</th><th>描述</th></tr></thead><tbody><tr><td>onabort</td><td>当读取操作被中止时调用</td></tr><tr><td>onerror</td><td>当读取操作发生错误时调用</td></tr><tr><td>onload</td><td>当读取操作成功完成时调用</td></tr><tr><td>onloadend</td><td>当读取操作完成时调用,不管是成功还是失败</td></tr><tr><td>onloadstart</td><td>当读取操作将要开始之前调用</td></tr><tr><td>onprogress</td><td>在读取数据过程中周期性调用</td></tr></tbody></table><p>FileReader通过异步的方式读取文件内容，结果均是通过事件回调获取，下面是一个读取本地txt文件内容的例子：</p><pre><code>var input  = document.getElementById(&quot;file&quot;); //input file
input.onchange = function(){
    var file = this.files[0];
    if(!!file){
        //读取本地文件，以gbk编码方式输出
        var reader = new FileReader();
        reader.readAsText(file,&quot;gbk&quot;);
        reader.onload = function(){
            //读取完毕后输出结果
            console.log(this.result);
        }
    }
}
</code></pre><p>FileReader提供了四种不同的读取文件的方式，如：readAsArrayBuffer会将文件内容读取为ArrayBuffer对象，readAsBinaryString则将文件读取为二进制串，下面对这四种方式进行简单区分。 首先准备一张图片（6764 字节）和一个txt文本（51字节）作为测试文件：</p><ol><li>readAsDataURL 查看图片输出结果：![[../_resources/unknown_filename-dddadddb.png]] 查看txt输出结果：![[../_resources/unknown_filename-d467319b.png]]</li><li>readAsText 此方法可以通过不同的编码方式读取字符，我们使用utf-8读取 查看图片输出结果：![[../_resources/unknown_filename-c42386cd.png]] 查看txt输出结果：![[../_resources/unknown_filename-4da810e7.png]] readAsText读取文件的单位是字符，故对于文本文件，只要按规定的编码方式读取即可；而对于媒体文件（图片、音频、视频），其内部组成并不是按字符排列，故采用readAsText读取，会产生乱码，同时也不是最理想的读取文件的方式</li><li>readAsBinaryString 查看图片输出结果： ![[../_resources/unknown_filename-648188e9.png]] 查看txt输出结果：![[../_resources/unknown_filename-1059560e.png]] 与readAsText不同的是，readAsBinaryString函数会按字节读取文件内容。然而诸如0101的二进制数据只能被机器识别，若想对外可见，还是需要进行一次编码，而readAsBinaryString的结果就是读取二进制并编码后的内容。尽管readAsBinaryString方法可以按字节读取文件，但由于读取后的内容被编码为字符，大小会受到影响，故不适合直接传输，也不推荐使用。如：测试的图片文件原大小为6764 字节，而通过readAsBinaryString读取后，内容被扩充到10092个字节</li><li>readAsArrayBuffer 查看图片输出结果：![[../_resources/unknown_filename-7f6aedf5.png]] 查看txt输出结果：![[../_resources/unknown_filename-5a9cc7d4.png]] 与readAsBinaryString类似，readAsArrayBuffer方法会按字节读取文件内容，并转换为ArrayBuffer对象。我们可以关注下文件读取后大小，与原文件大小一致。这也就是readAsArrayBuffer与readAsBinaryString方法的区别，readAsArrayBuffer读取文件后，会在内存中创建一个ArrayBuffer对象（二进制缓冲区），将二进制数据存放在其中。通过此方式，我们可以直接在网络中传输二进制内容。</li></ol><h5 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h5><p><strong>在线预览本地文件</strong> 我们知道，img的src属性或background的url属性，可以通过被赋值为图片网络地址或base64的方式显示图片。 在文件上传中，我们一般会先将本地文件上传到服务器，上传成功后，由后台返回图片的网络地址再在前端显示。 通过FileReader的readAsDataURL方法，我们可以不经过后台，直接将本地图片显示在页面上。这样做可以减少前后端频繁的交互过程，减少服务器端无用的图片资源，代码如下：</p><pre><code>var input  = document.getElementById(&quot;file&quot;);   // input file
input.onchange = function(){
    var file = this.files[0];
        if(!!file){
            var reader = new FileReader();
            // 图片文件转换为base64
            reader.readAsDataURL(file);
            reader.onload = function(){
                // 显示图片
                document.getElementById(&quot;file_img&quot;).src = this.result;
        }
    }
}
</code></pre><p>对于图片上传，我们也可以先将图片转换为base64进行传输，此时由于传输的图片内容就是一段字符串，故上传接口可以当做普通post接口处理，当图片传输到后台后，可以在转换为文件实体存储。 当然，考虑到base64转换效率及其本身的大小，本方法还是适合于上传内容简单或所占内存较小的文件。 <strong>二进制数据上传</strong> HTML5体系的建立引入了一大堆新的东西，基于XHR2，我们可以直接上传或下载二进制内容，无需像以往一样通过form标签由后端拉取二进制内容。 简单整理下上传逻辑： 1、通过input[type=&quot;file&quot;]标签获取本地文件File对象 2、通过FileReader的readAsArrayBuffer方法将File对象转换为ArrayBuffer 3、创建xhr对象，配置请求信息 4、通过xhr.sendAsBinary直接将文件的ArrayBuffer内容装填至post body后发送 代码实现如下：</p><pre><code>var input  = document.getElementById(&quot;file&quot;);   // input file
input.onchange = function(){
    var file = this.files[0];
        if(!!file){
            var reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function(){
                var binary = this.result;
                upload(binary);
        }
    }
}

//文件上传
function upload(binary){
    var xhr = new XMLHttpRequest();
    xhr.open(&quot;POST&quot;, &quot;http://xxxx/opload&quot;);
    xhr.overrideMimeType(&quot;application/octet-stream&quot;);
    //直接发送二进制数据
    if(xhr.sendAsBinary){
        xhr.sendAsBinary(binary);
    }else{
        xhr.send(binary);
    }
    
    // 监听变化
    xhr.onreadystatechange = function(e){
        if(xhr.readyState===4){
            if(xhr.status===200){
                // 响应成功       
            }
        }
    }
}
</code></pre><h4 id="xmlhttprequest" tabindex="-1">XMLHttpRequest <a class="header-anchor" href="#xmlhttprequest" aria-label="Permalink to &quot;XMLHttpRequest&quot;">​</a></h4><p>XMLHttpRequest.upload 向后台上传文件时监听进度，主要使用的是XMLHttpRequest提供的upload方法，此方法会返回一个XMLHttpRequestUpload对象，用来表示上传进度 。 —— XMLHttpRequest.uploadFormData 是XMLHttpRequest提供的一个新的接口，主要优点是可以异步上传二进制文件。</p><pre><code>function uploadFile() {
    //获取上传的文件
    var uploadFile = $(&#39;#upload-file&#39;).get(0).file[0];

    var formdata = new FormData();

    formdata.append(&#39;fileInfo&#39;, uploadFile);
    $.ajax({
        url: &#39;/uploadfileurl&#39;,
        type: &#39;post&#39;,
        dataType: &#39;json&#39;,
        processData: false,
        contentType: false,
        xhr: function() {
            var xhr = new XMLHttpRequest();
            //使用XMLHttpRequest.upload监听上传过程，注册progress事件，打印回调函数中的event事件
            xhr.upload.addEventListener(&#39;progress&#39;, function (e) {
                console.log(e);
                //loaded代表上传了多少
                //total代表总数为多少
                var progressRate = (e.loaded / e.total) * 100 + &#39;%&#39;;

                //通过设置进度条的宽度达到效果
                $(&#39;.progress &gt; div&#39;).css(&#39;width&#39;, progressRate);
            })

            return xhr;
        }
    })
}
</code></pre>`,34)]))}const b=t(o,[["render",d]]);export{p as __pageData,b as default};
