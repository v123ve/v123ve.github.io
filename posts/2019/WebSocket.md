---

Created at: 2019-07-18
Last updated at: 2020-09-11
tags: 
  - 工作模块
  - FileReader
  - WebSocket
  - XMLHttpRequest

---

# WebSocket


#### WebSocket

[WebSocket教程](http://www.ruanyifeng.com/blog/2017/05/websocket.html)
HTTP 协议有一个缺陷：通信只能由客户端发起。
如果服务器有连续的状态变化，客户端要获知就非常麻烦，只能使用"轮询"：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。
轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开）

##### 特点：

1. 服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。

* 建立在 TCP 协议之上，服务器端的实现比较容易。
	与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
* 数据格式比较轻量，性能开销小，通信高效。
* 可以发送文本，也可以发送二进制数据。
* 没有同源限制，客户端可以与任意服务器通信。
* 协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。

##### 实例

    var ws = new WebSocket("wss://echo.websocket.org");
    ws.onopen = function(evt) { 
      console.log("Connection open ..."); 
      ws.send("Hello WebSockets!");
    };
    ws.onmessage = function(evt) {
      console.log( "Received Message: " + evt.data);
      ws.close();
    };
    ws.onclose = function(evt) {
      console.log("Connection closed.");
    };      


###### 解释

1. WebSocket 对象作为一个构造函数，用于新建 WebSocket 实例。
	`var ws = new WebSocket('ws://localhost:8080');`
	执行上面语句之后，客户端就会与服务器进行连接。
2. webSocket.readyState
	readyState属性返回实例对象的当前状态，共有四种。CONNECTING：值为0，表示正在连接。
	OPEN：值为1，表示连接成功，可以通信了。
	CLOSING：值为2，表示连接正在关闭。
	CLOSED：值为3，表示连接已经关闭，或者打开连接失败。

    switch (ws.readyState) {
      case WebSocket.CONNECTING:
        break;
      case WebSocket.OPEN:
        break;
      case WebSocket.CLOSING:
        break;
      case WebSocket.CLOSED:
        break;
      default:
        break;
     }
   
3. webSocket.onopen
	实例对象的onopen属性，用于指定连接成功后的回调函数。
	`ws.onopen = function () {ws.send('Hello Server!');}`
	如果要指定多个回调函数，可以使用addEventListener方法。
	`ws.addEventListener('open', function (event) {ws.send('Hello Server!');});`
4. webSocket.onclose实例对象的onclose属性，用于指定连接关闭后的回调函数。

    ws.onclose = function(event) {
      var code = event.code;
      var reason = event.reason;
      var wasClean = event.wasClean;
      // handle close event
    };
    ws.addEventListener("close", function(event) {
      var code = event.code;
      var reason = event.reason;
      var wasClean = event.wasClean;
      // handle close event
    });
    
5. webSocket.onmessage实例对象的onmessage属性，用于指定收到服务器数据后的回调函数。

    ws.onmessage = function(event) {
      var data = event.data;
      // 处理数据
    };
    ws.addEventListener("message", function(event) {
      var data = event.data;
      // 处理数据
    });
    

注意，服务器数据可能是文本，也可能是二进制数据（blob对象或Arraybuffer对象）。

    ws.onmessage = function(event){
      if(typeof event.data === String) {
        console.log("Received data string");
      }
      if(event.data instanceof ArrayBuffer){
        var buffer = event.data;
        console.log("Received arraybuffer");
      }}


除了动态判断收到的数据类型，也可以使用binaryType属性，显式指定收到的二进制数据类型。

    // 收到的是 blob 数据
    ws.binaryType = "blob";
    ws.onmessage = function(e) {
      console.log(e.data.size);};
    // 收到的是 ArrayBuffer 数据
    ws.binaryType = "arraybuffer";
    ws.onmessage = function(e) {
      console.log(e.data.byteLength);
    };


6. webSocket.send()
	实例对象的send()方法用于向服务器发送数据。发送文本的例子。
	`ws.send('your message');`
	发送 Blob 对象的例子。

    var file = document
      .querySelector('input[type="file"]')
      .files[0];
    ws.send(file);
   

发送 ArrayBuffer 对象的例子。

    // Sending canvas ImageData as ArrayBuffer
    var img = canvas_context.getImageData(0, 0, 400, 320);
    var binary = new Uint8Array(img.data.length);
    for (var i = 0; i < img.data.length; i++) {
      binary[i] = img.data[i];
    }
    ws.send(binary.buffer);


7. webSocket.bufferedAmount
	实例对象的bufferedAmount属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束。

    var data = new ArrayBuffer(10000000);
    socket.send(data);
    if (socket.bufferedAmount === 0) {
      // 发送完毕
    } else {
      // 发送还没结束
    }
   
8. webSocket.onerror实例对象的onerror属性，用于指定报错时的回调函数。

    socket.onerror = function(event) {
      // handle error event
    };
    socket.addEventListener("error", function(event) {
      // handle error event
    })
    

#### FileReader对象

FileReaderFileReader主要用于将文件内容读入内存，通过一系列异步接口，可以在主线程中访问本地文件。使用FileReader对象，web应用程序可以异步的读取存储在用户计算机上的文件(或者原始数据缓冲)内容，可以使用File对象或者Blob对象来指定所要处理的文件或数据。
var reader = new FileReader();

| 方法定义 | 描述  |
| --- | --- |
| abort():void | 终止文件读取操作 |
| readAsArrayBuffer(file):void | 异步按字节读取文件内容，结果用ArrayBuffer对象表示 |
| readAsBinaryString(file):void | 异步按字节读取文件内容，结果为文件的二进制串 |
| readAsDataURL(file):void | 异步读取文件内容，结果用data:url的字符串形式表示 |
| readAsText(file,encoding):void | 异步按字符读取文件内容，结果用字符串形式表示 |

| 事件名称 | 描述  |
| --- | --- |
| onabort | 当读取操作被中止时调用 |
| onerror | 当读取操作发生错误时调用 |
| onload | 当读取操作成功完成时调用 |
| onloadend | 当读取操作完成时调用,不管是成功还是失败 |
| onloadstart | 当读取操作将要开始之前调用 |
| onprogress | 在读取数据过程中周期性调用 |

FileReader通过异步的方式读取文件内容，结果均是通过事件回调获取，下面是一个读取本地txt文件内容的例子：

    var input  = document.getElementById("file"); //input file
    input.onchange = function(){
        var file = this.files[0];
        if(!!file){
            //读取本地文件，以gbk编码方式输出
            var reader = new FileReader();
            reader.readAsText(file,"gbk");
            reader.onload = function(){
                //读取完毕后输出结果
                console.log(this.result);
            }
        }
    }


FileReader提供了四种不同的读取文件的方式，如：readAsArrayBuffer会将文件内容读取为ArrayBuffer对象，readAsBinaryString则将文件读取为二进制串，下面对这四种方式进行简单区分。
首先准备一张图片（6764 字节）和一个txt文本（51字节）作为测试文件：

1. readAsDataURL
	查看图片输出结果：![[../_resources/unknown_filename-dddadddb.png]]
	查看txt输出结果：![[../_resources/unknown_filename-d467319b.png]]
2. readAsText
	此方法可以通过不同的编码方式读取字符，我们使用utf-8读取
	查看图片输出结果：![[../_resources/unknown_filename-c42386cd.png]]
	查看txt输出结果：![[../_resources/unknown_filename-4da810e7.png]]
	readAsText读取文件的单位是字符，故对于文本文件，只要按规定的编码方式读取即可；而对于媒体文件（图片、音频、视频），其内部组成并不是按字符排列，故采用readAsText读取，会产生乱码，同时也不是最理想的读取文件的方式
3. readAsBinaryString
	查看图片输出结果：
	![[../_resources/unknown_filename-648188e9.png]]
	查看txt输出结果：![[../_resources/unknown_filename-1059560e.png]]
	与readAsText不同的是，readAsBinaryString函数会按字节读取文件内容。然而诸如0101的二进制数据只能被机器识别，若想对外可见，还是需要进行一次编码，而readAsBinaryString的结果就是读取二进制并编码后的内容。尽管readAsBinaryString方法可以按字节读取文件，但由于读取后的内容被编码为字符，大小会受到影响，故不适合直接传输，也不推荐使用。如：测试的图片文件原大小为6764 字节，而通过readAsBinaryString读取后，内容被扩充到10092个字节
4. readAsArrayBuffer
	查看图片输出结果：![[../_resources/unknown_filename-7f6aedf5.png]]
	查看txt输出结果：![[../_resources/unknown_filename-5a9cc7d4.png]]
	与readAsBinaryString类似，readAsArrayBuffer方法会按字节读取文件内容，并转换为ArrayBuffer对象。我们可以关注下文件读取后大小，与原文件大小一致。这也就是readAsArrayBuffer与readAsBinaryString方法的区别，readAsArrayBuffer读取文件后，会在内存中创建一个ArrayBuffer对象（二进制缓冲区），将二进制数据存放在其中。通过此方式，我们可以直接在网络中传输二进制内容。

##### 应用场景

**在线预览本地文件**
我们知道，img的src属性或background的url属性，可以通过被赋值为图片网络地址或base64的方式显示图片。
在文件上传中，我们一般会先将本地文件上传到服务器，上传成功后，由后台返回图片的网络地址再在前端显示。
通过FileReader的readAsDataURL方法，我们可以不经过后台，直接将本地图片显示在页面上。这样做可以减少前后端频繁的交互过程，减少服务器端无用的图片资源，代码如下：

    var input  = document.getElementById("file");   // input file
    input.onchange = function(){
        var file = this.files[0];
            if(!!file){
                var reader = new FileReader();
                // 图片文件转换为base64
                reader.readAsDataURL(file);
                reader.onload = function(){
                    // 显示图片
                    document.getElementById("file_img").src = this.result;
            }
        }
    }


对于图片上传，我们也可以先将图片转换为base64进行传输，此时由于传输的图片内容就是一段字符串，故上传接口可以当做普通post接口处理，当图片传输到后台后，可以在转换为文件实体存储。
当然，考虑到base64转换效率及其本身的大小，本方法还是适合于上传内容简单或所占内存较小的文件。
**二进制数据上传**
HTML5体系的建立引入了一大堆新的东西，基于XHR2，我们可以直接上传或下载二进制内容，无需像以往一样通过form标签由后端拉取二进制内容。
简单整理下上传逻辑：
1、通过input[type="file"]标签获取本地文件File对象
2、通过FileReader的readAsArrayBuffer方法将File对象转换为ArrayBuffer
3、创建xhr对象，配置请求信息
4、通过xhr.sendAsBinary直接将文件的ArrayBuffer内容装填至post body后发送
代码实现如下：

    var input  = document.getElementById("file");   // input file
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
        xhr.open("POST", "http://xxxx/opload");
        xhr.overrideMimeType("application/octet-stream");
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


#### XMLHttpRequest

XMLHttpRequest.upload 向后台上传文件时监听进度，主要使用的是XMLHttpRequest提供的upload方法，此方法会返回一个XMLHttpRequestUpload对象，用来表示上传进度 。 —— XMLHttpRequest.uploadFormData 是XMLHttpRequest提供的一个新的接口，主要优点是可以异步上传二进制文件。

    function uploadFile() {
        //获取上传的文件
        var uploadFile = $('#upload-file').get(0).file[0];
    
        var formdata = new FormData();
    
        formdata.append('fileInfo', uploadFile);
        $.ajax({
            url: '/uploadfileurl',
            type: 'post',
            dataType: 'json',
            processData: false,
            contentType: false,
            xhr: function() {
                var xhr = new XMLHttpRequest();
                //使用XMLHttpRequest.upload监听上传过程，注册progress事件，打印回调函数中的event事件
                xhr.upload.addEventListener('progress', function (e) {
                    console.log(e);
                    //loaded代表上传了多少
                    //total代表总数为多少
                    var progressRate = (e.loaded / e.total) * 100 + '%';
    
                    //通过设置进度条的宽度达到效果
                    $('.progress > div').css('width', progressRate);
                })
    
                return xhr;
            }
        })
    }

