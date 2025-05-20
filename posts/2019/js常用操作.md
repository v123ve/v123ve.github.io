---

Created at: 2019-08-16
Last updated at: 2023-11-24
Source URL: https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html
tags: 
  - js
  - 工作模块
  - 标记

---

# js常用操作


#### js常用操作

[ES6/7/8](https://www.jianshu.com/p/390a65d7a353)

[部分学习文档](https://www.cnblogs.com/mq0036/category/508333.html)

[随机数](https://www.cnblogs.com/mq0036/p/9139231.html)

| 描述  | 方法  | 范围(ES5) |
| --- | --- | --- |
| 数组的选定 | slice(start,end] | 不改变原数组 |
| 数组的删除 | splice(index,num) | 改变原数组 |
| 数组的反转 | reverse() | 改变原数组 |
| 数组首部插入 | unshift() | 改变原数组 |
| 数组首部删除 | shift() | 改变原数组 |
| 数组尾部插入 | push() | 改变原数组 |
| 数组尾部删除 | pop() | 改变原数组 |
| 数组的连接 | concat() | 不改变原数组 |
| 数组的截取 | substring(start,end] | 不改变原数组 |
|     | substr(start,num) | 不改变原数组 |
| 数组转字符串 | join() | 不改变原数组，默认',' |
| 数组排序 | sort() | 改变原数组，默认按Unicode升序 |
| 数组索引 | indexOf('',num) | 改变原数组，从前往后 |
|     | lastIndexOf('',num) | 不改变原数组，从后往前 |
| 数组遍历执行 | each(Fn(item,index,arr)) | 遍历数组 |
|     | every(Fn(item,index,arr)) | 若每项都为true,则返回true |
|     | some(Fn(item,index,arr)) | 若一项为true,则返回true |
|     | fliter(Fn(item,index,arr)) | 则返回由true的项组成的数组 |
|     | map(Fn(item,index,arr)) | 则返回每项执行后的组成的新数组 |
| 字符串去除所有空格 | replace(/\s+/g,""); | 不改变原字符串 |
| 字符串去除两端空格 | trim() | 不改变原字符串 |
| 获取JSON文件内容 | $.getJSON(url,data,success(data,status,xhr){}) |     |
| 动画效果 | animate({},speed) | opacity:'show'&'hide' |
| 验证日期 | isNaN(Date.parse(new Date())) | 为true表示时间格式不正确 |
| 正向编码 | btoa(unescape(encodeURIComponent('123')) | **btoa**()：将ascii字符串或二进制数据转换成一个base64编码过的字符串,该方法不能直接作用于Unicode字符串。**unescape**():对字符串进行解码。**encodeURIComponent**():对URI 进行编码。 |
| 反向解码 | decodeURIComponent(escape(atob('123'))) | **decodeURIComponent**():对URI进行解码。**escape**() 函数可对字符串进行编码，返回已编码的 string 的副本。其中某些字符被替换成了十六进制的转义序列。**atob**():用来解码一个已经被base-64编码过的数据。 |

| 描述  | 方法  | 范围(ES6) |
| --- | --- | --- |
| 数组的包含 | includes() | 包含某个元素就返回true |
| 数组的搜索 | find(item) | 找到符合条件的第一个返回它并终止搜索 |
|     | findIndex(item) | 找到符合条件的第一个返回下标并终止搜索 |
| 数组的替换 | fill(value,start,end) | 替换指定范围内的元素 |
| 数组的复制 | copyWithin(index,start,end) | 从指定下标开始复制，复制范围 |
| 数组的转化 | from() | 将类似数组或可遍历的对象转为数组 |
|     | Array.of() | 将一组值转为数组 |
| 数组遍历返回迭代器 | entries() | 返回键值对[key,value] |
|     | values() | 返回值value |
|     | keys() | 返回键key |

| 描述  | 方法  | 范围  |
| --- | --- | --- |
| json对象转数组 | Object.keys(json).map() |     |

#### GET和POST

    GET:
    GET 请求可被缓存
    GET 请求保留在浏览器历史记录中
    GET 请求可被收藏为书签
    GET 请求不应在处理敏感数据时使用
    GET 请求有长度限制
    GET 请求只应当用于取回数据
    POST :
    POST 请求不会被缓存
    POST 请求不会保留在浏览器历史记录中
    POST 不能被收藏为书签
    POST 请求对数据长度没有要求


#### js高级调试

| 描述  | 例子  | 范围  |
| --- | --- | --- |
| %s  | ("%s年",2016) | 字符串 |
| %d  | ("%d年%d月",2016，11) | 整数  |
| %f  | ("%f",3.1415) | 小数  |
| %o  | ("%o",console) | 对象  |
| %c  | ("%c应用样式内容",“font-size:30px;color:#00f”) | 自定义样式 |
| table() | table(Obj&Arr) | 表单输出 |
| count() | count('调用次数') | 放在函数里，每当这句代码运行输出所在函数执行次数 |
| time() | time() | 计时开始 |
| timeEnd() | timeEnd() | 计时结束 |
| assert() | assert(true&false，‘结束’) | 为true时无影响，为false终止并报错 |
| dirxml() | dirxml(ul) | Dom输出 |
| dir() | dir(obj) | 对象输出 |
| trace() | trace() | 显示函数调用轨迹(访问调用栈） |
| group() | group(‘组名’) | 成组输出 |
| groupEnd() | groupEnd(‘end’) | 成组输出结束 |
| profile() | profile() | 性能分析 |
| profileEnd() | profileEnd() | 性能分析结束 |

#### url转义

| 符号  | 说明  | 转义符号 |
| --- | --- | --- |
| +   | URL中+号表示空格 | %2B |
| 空格  | URL中的空格可以用+号或者编码 | %20 |
| /   | 分隔目录和子目录 | %2F |
| ?   | 分隔实际的URL和参数 | %3F |
| %   | 指定特殊字符 | %25 |
| #   | 表示书签 | %23 |
| &   | URL中指定的参数间的分隔符 | %26 |
| =   | URL中指定参数的值 | %3D |

    1.encodeURIComponent()方法的使用
    语法：encodeURIComponent(URIstring)
    参数：URIstring，必需。一个字符串，含有 URI 组件或其他要编码的文本。
    
    2.encodeURIComponent()测试
    测试
    document.write(encodeURIComponent("https://www.sojson.com/encodeurl.html?我是个中文参数"))
    document.write("<br />")
    document.write(encodeURIComponent(",/?:@&=+$#"))
    结果
    http%3A%2F%2Fwww.sojson.com%2Fencodeurl.html%3F%E6%88%91%E6%98%AF%E4%B8%AA%E4%B8%AD%E6%96%87%E5%8F%82%E6%95%B0
    %3Cbr%20%2F%3E
    %2C%2F%3F%3A%40%26%3D%2B%24%23
    
    二、encodeURI()测试
    测试
    document.write(encodeURI("https://www.sojson.com/encodeurl.html?我是个中文参数"))
    document.write("<br />")
    document.write(encodeURI(",/?:@&=+$#"))
    结果
    https://www.sojson.com/encodeurl.html?%E6%88%91%E6%98%AF%E4%B8%AA%E4%B8%AD%E6%96%87%E5%8F%82%E6%95%B0
    %3Cbr%20/%3E
    ,/?:@&=+$#
    三、 encodeURIComponent() 函数 与 encodeURI() 函数的区别
    请注意 encodeURIComponent() 函数 与 encodeURI() 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号。


encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
encodeURI() 函数可把字符串作为 URI 进行编码。
提示：请注意 encodeURIComponent() 函数 与 encodeURI() 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号。
提示：如果 URI 组件中含有分隔符，比如 ? 和 #，则应当使用 encodeURIComponent() 方法分别对各组件进行编码。
window.btoa(unescape(encodeURIComponent('要转码的内容')));
decodeURIComponent(escape(window.atob('要解码的内容')));

#### 异或交换

    function swap(a, b) {
        if (a !== b) {
            a ^= b;
            b ^= a;
            a ^= b;
        }
    }


#### 异或正负

    function sameSign(a, b) {
        // 两数同号为正，异号为负
        return (a ^ b) >= 0;
    }


#### 数组求和

    function sum(arr) {
      return arr.reduce(function (prev, curr, idx, arr) {
        return prev + curr;
      });
    }


#### 全部替换

    var str = "1-2-3-4-5";
    str.replace(/-/g, ""); // 12345


#### 截取url路径

    // 获取URL中最后一个斜杠前面的内容
    var url = window.location.href;var index = url.lastIndexOf("\/");
    str = url.substring(0,index+1);
    // 获取URL中最后一个斜杠后面的内容
    var url = window.location.href;var index = url.lastIndexOf("\/");
    str = url.substring(index + 1,url.length);


    // 截取url路径参数
    function getUrlParam(name) {
      const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
      const r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }


#### 转换url参数

    let params = {
    	userName: 'admin',
    	password: '21232f297a57a5a743894a0e4a801fc3',
    };
    params = Object.keys(params).map(key => {
    	return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    }).join("&");


#### dom元素交换

      doChangePostion(a, b) {
        if (a == b) {
          return;
        }
        //记录父元素
        const bp = b.parentNode;
        const ap = a.parentNode;
        //记录下一个同级元素
        const an = a.nextElementSibling;
        const bn = b.nextElementSibling;
        //如果参照物是邻近元素则直接调整位置
        if (an == b) {
          return bp.insertBefore(b, a);
        }
        if (bn == a) {
          return ap.insertBefore(a, b);
        }
        if (a.contains(b))
          //如果a包含了b
          return ap.insertBefore(b, a), bp.insertBefore(a, bn);
        else {
          return bp.insertBefore(a, b), ap.insertBefore(b, an);
        }
      }


#### 取分割div的坐标

    /**
     * 取分割div的坐标
     * @param {number} avarage 共分成几个，如：4*4=16
     * @param {number} row 不均等分的行数，如：2*8=16
     * @returns [{x: number, width: number, y: number, height: number}]
     */
    function getAverageDiv(avarage, row) {
      let xSqrt;
      let ySqrt;
      if (row) {
        xSqrt = avarage / row;
        ySqrt = row;
      } else {
        xSqrt = Math.sqrt(avarage);
        ySqrt = Math.sqrt(avarage);
      }
      const partXFix = Number.parseFloat(100 / xSqrt).toFixed(3);
      const partYFix = Number.parseFloat(100 / ySqrt).toFixed(3);
      const partX = partXFix.substring(0, partXFix.lastIndexOf('.') + 3);
      const partY = partYFix.substring(0, partYFix.lastIndexOf('.') + 3);
      return [...Array(avarage)].map((v, i) => {
        const thatCol = i % xSqrt;
        const thatRow = Math.floor(i / xSqrt) % ySqrt;
        const x = thatCol * partX;
        const y = thatRow * partY;
        const width = partX * 1;
        const height = partY * 1;
        return {
          x,
          y,
          width,
          height,
          streamType: avarage > 4 ? STREAM_TYPE.辅流 : STREAM_TYPE.主流,
        };
      });
    }
    
    /**
     * 取1大几小div的坐标
     * @param {more} more 小窗口的数量，为奇数，且大于3
     */
    function getOnePlusMoreDiv(more) {
      const edgeNum = more >> 1;
      const share = edgeNum + 1;
      const shareLength = _.round(100 / share, 2);
      const divStyle = [
        {
          x: 0,
          y: 0,
          width: 100 - shareLength,
          height: 100 - shareLength,
          streamType: STREAM_TYPE.主流,
        },
      ];
      for (let i = 1; i < more + 1; i++) {
        if (i <= edgeNum) {
          divStyle.push({
            x: 100 - shareLength,
            y: (i - 1) * shareLength,
            width: shareLength,
            height: shareLength,
            streamType: STREAM_TYPE.辅流,
          });
        } else {
          divStyle.push({
            x: (i - edgeNum - 1) * shareLength,
            y: 100 - shareLength,
            width: shareLength,
            height: shareLength,
            streamType: STREAM_TYPE.辅流,
          });
        }
      }
      return divStyle;
    }
    
    /**
     * 取上下结构div的坐标
     * @param {up} up 小窗口的数量，为奇数，且大于等于3
     * @param {low} low 小窗口的数量，为奇数，且大于等于3,要求是 up 的倍数
     */
    function getupLowStructDiv(up, low) {
      const upLength = _.round(100 / up, 2);
      const shareNum = low / up;
      const lowLength = _.round(100 / shareNum, 2);
      const divStyle = [];
      for (let i = 0; i < up; i++) {
        divStyle.push({
          x: i * upLength,
          y: 0,
          width: upLength,
          height: 100 - up * lowLength,
          streamType: STREAM_TYPE.主流,
        });
      }
      for (let i = 0; i < low; i++) {
        let x = i * lowLength;
        let y = 100 - up * lowLength;
        if (i >= shareNum) {
          x = (i - shareNum) * lowLength;
          y = (up + Math.floor(i / shareNum)) * lowLength;
        }
        divStyle.push({
          x,
          y,
          width: lowLength,
          height: lowLength,
          streamType: STREAM_TYPE.辅流,
        });
      }
      return divStyle;
    }


#### 阻止向上冒泡事件

    e.preventDefault(); //阻止浏览器默认行为
    e.stopPropagation(); //阻止事件冒泡
    return false;


#### 求两个数组的交集

在数组1去重的同时过滤掉数组2含有的元素

    var numOne = [0, 2, 4, 6, 8, 8];
    var numTwo = [1, 2, 3, 4, 5, 6];
    var duplicatedValues = […new Set(numOne)].filter(item => numTwo.includes(item));
    console.log(duplicatedValues); // returns [2, 4, 6]


#### 从数组中获取随机值

在数组长度的范围内生成一个随机的索引

    var colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];
    var randomColor = colors[(Math.floor(Math.random() * (colors.length)))];


#### 从数组中删除假值

在Javascript中，假值包括false、0、''、null、NaN、undefined

    var mixedArr = [0, “blue”, “”, NaN, 9, true, undefined, “white”, false];
    var trueArr = mixedArr.filter(Boolean);
    console.log(trueArr); // returns [“blue”, 9, true, “white”]


#### 对数组中的所有值求和

    var nums = [1, 5, 2, 6];
    var sum = nums.reduce((x, y) => x + y);
    console.log(sum); // returns 14


#### for循环标记

    reStartFlag: for (let i = 0; i < parameterArealist.length; i++) {
      let thatParameterArea = parameterArealist[i].configInfo || [];
      for (let j = 0; j < thatParameterArea.length; j++) {
    	let thatConfigInfo = thatParameterArea[j];
    	if (thatConfigInfo.needRestart && isFieldTouched(thatConfigInfo.fieldName)) {
    	  reStart = true;
    	  break reStartFlag;
    	}
      }
    }


#### 获取div真实距离

    document.getElementById('world').getBoundingClientRect();
    
    // [交叉观察器]
    // https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html
    const callback = (entries,observer) =>{
        entries.forEach(entry = >{
            if(item.intersectionRatio <= 0){
                // intersectionRatio 是可见度
                return;
            }
            if(item.isIntersecting){
                // isIntersecting 是否部分可见
                return;
            }
        })
    }
    const options={
        // 交叉到什么时候触发回调函数,可以是数组 [ 0 ~ 1]
        threshold: 0,
        // 父级元素，即观察器
        root: $container.target,
        // 父级元素间距
        rootMargin: 0,
    };
    const Observer = new IntersectionObserver(callback,options);
    // 加入被观察者对象
    Observer.observe(target);
    // 移除被观察者对象
    Observer.unobserve(target);
    // 结束观察
    Observer.disconnect();


#### 复制文本

    const value = "1";
    const copyInput = document.createElement('input');
    copyInput.setAttribute('readonly', 'readonly');
    copyInput.setAttribute('value', value);
    document.body.appendChild(copyInput);
    copyInput.select();
    document.execCommand('copy');
    document.body.removeChild(copyInput);
    message.success('复制成功');


#### 保存调试数据

在console里输入

    (function(console){
    console.save = function(data, filename){
    	if(!data) {
    		console.error('Console.save: No data')
    		return;
    	}
    	if(!filename) 
    		filename = 'console.json'
    	if(typeof data === "object"){
    		data = JSON.stringify(data, undefined, 4)
    	}
    	var blob = new Blob([data], {type: 'text/json'}),
    	e = document.createEvent('MouseEvents'),
    	a = document.createElement('a')
    	a.download = filename
    	a.href = window.URL.createObjectURL(blob)
    	a.dataset.downloadurl = ['text/json', a.download, a.href].join( ':' )
    	e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    	a.dispatchEvent(e)
    }})(console);


填入数据和文件名即可下载

    console.save(array1, "array1.json")


#### JSON安全解析

    JSON.safeParse = function(data,defaultValue) {
      if(data==null || data==undefined){
        return defaultValue
      }
      try{
        return JSON.parse(data);
      }catch(e){
        return defaultValue;
      }
    }


#### 生成大小写字母

    JS 生成26个大小写字母
    //生成大写字母  A的Unicode值为65
    function generateBig_1(){
        var str = [];
        for(var i=65;i<91;i++){
            str.push(String.fromCharCode(i));
        }
        return str;
    }
    //生成大写字母  a的Unicode值为97
    function generateSmall_1(){
        var str = [];
        for(var i=97;i<123;i++){
            str.push(String.fromCharCode(i));
        }
        return str;
    }
    //将字符串转换成Unicode码
    function toUnicode(str){
        var codes = [];
        for(var i=0;i<str.length;i++){
            codes.push(str.charCodeAt(i));
        }
        return codes;
    }
    function generateSmall(){
        var ch_small = 'a';
        var str_small = '';
        for(var i=0;i<26;i++){
            str_small += String.fromCharCode(ch_small.charCodeAt(0)+i);
        }
        return str_small;
    }
    function generateBig(){
        var ch_big = 'A';
        var str_big = '';
        for(var i=0;i<26;i++){
            str_big += String.fromCharCode(ch_big.charCodeAt(0)+i);
        }
        return str_big;
    }
    console.log(generateBig());
    console.log(generateSmall());
    console.log(toUnicode(generateBig()));
    console.log(toUnicode(generateSmall()));
    console.log(generateBig_1());
    console.log(generateSmall_1());


![[../_resources/unknown_filename-f9eeec6d.png]]

#### a标签下载文件

      getVideoSrc = path => {
        const Path = encodeURI(path);
        return `http://192.168.1.51:8080/component/videoDownload/taskFile?filePath=${Path}&timestamp=${new Date().valueOf()}`;
      }
    
      onButtonClick = () => {
        const src = this.getVideoSrc('D:/tools/Wireshark-win64-3.2.5.exe');
        let a = document.createElement('a');
        a.charset = 'ISO-8859-1';
        a.download = '测试下载';
        a.href = src;
        a.click();
        setTimeout(() => {
          a = null;
        }, 10000);
      }


#### js读取本地文件

[FetchApi](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

[fetch的文件流下载及下载进度获取](https://www.cnblogs.com/chengyunshen/p/11376735.html)

#### js获取video截图

    var canvas=document.getElementById('canvas'); 
    var context=canvas.getContext('2d'); 
    var video=document.querySelector('#'+videoId+' video');
    context.drawImage(video,0,0,"602.5", "542.7");
    var saveImage = canvas.toDataURL('image/png');
    var base64Img = saveImage
    var base64Data = saveImage.substring(22);
    $("#base64Img").attr("src",base64Img)
    $("#base64Data").val(base64Data)


#### 格式化时间

      // 格式化时间
      function formatTime(time) {
        const year = time.getFullYear();
        const month = ("0" + (time.getMonth() + 1)).slice(-2);
        const day = ("0" + time.getDate()).slice(-2);
        const hour = ("0" + time.getHours()).slice(-2);
        const minute = ("0" + time.getMinutes()).slice(-2);
        const second = ("0" + time.getSeconds()).slice(-2);
        const today = year + "-" + (month) + "-" + (day);
        const now = year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second;
        const formatNow = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        return {  year,  month,  day,  hour,  minute,  second,  today,  now,  formatNow}
      }
    
      // 校验时间戳
      function checkTime(startTime, endTime) {
        if (startTime > endTime) {
          alert("开始时间不能大于结束时间");
          return false;
        }
        if (endTime - startTime > 3 * 24 * 60 * 60 * 1000) {
          alert("时间间隔不能大于三天");
          return false;
        }
        return true;
      }


#### 重叠时间段

      // 存在交叉时间
      const A = {
        start: moment(`2023-01-01 ${v.startTime}`).valueOf(),
        end: moment(`2023-01-01 ${v.endTime}`).valueOf(),
      };
      const B = {
        start: moment(`2023-01-01 ${start}`).valueOf(),
        end: moment(`2023-01-01 ${end}`).valueOf(),
      };
      const max = [A.start, B.start];
      const min = [A.end, B.end];
      if (Math.max.apply(null, max) < Math.min.apply(null, min)) {
        return true;
      }
      if (!(A.end <= B.start || A.start >= B.end)) {
        return true;
      }
      return false;


#### 对重叠时间段交叉合并

    	// 判断时间段重叠
        if (timeList.length > 1) {
          for (let i = timeList.length - 1; i > 0; i -= 1) {
            // eslint-disable-next-line max-len
            if (timeList[timeList.length - i - 1].startTime >= timeList[timeList.length - i - 1].endTime) {
              this.setState({
                tipErr: `*时间段${timeList.length - i}开始时间大于或等于结束时间，请修改`,
              });
              return false;
            }
            if (timeList[timeList.length - i].startTime >= timeList[timeList.length - i].endTime) {
              this.setState({
                tipErr: `*时间段${timeList.length - i + 1}开始时间大于或等于结束时间，请修改`,
              });
              return false;
            }
            for (let j = i - 1; j >= 0; j -= 1) {
              // eslint-disable-next-line max-len
              if (timeList[j].startTime < timeList[i].endTime && timeList[i].startTime < timeList[j].endTime) {
                this.setState({
                  tipErr: `*时间段${j + 1}时间段${i + 1}存在重叠,建议修改为${timeList[i].startTime > timeList[j].startTime ? timeList[j].startTime : timeList[i].startTime} ~ ${timeList[i].endTime > timeList[j].endTime ? timeList[i].endTime : timeList[j].endTime}`,
                });
                return false;
              }
            }
          }
        } else if (timeList[0].startTime >= timeList[0].endTime) {
          this.setState({
            tipErr: '*时间段1开始时间大于或等于结束时间，请修改',
          });
          return false;
        }


#### 判断IE版本

    <!--[if !IE]><!--> 除IE外都可识别（不是IE） <!--<![endif]-->
    <!--[if IE]> 所有的IE可识别 <![endif]-->
    <!--[if IE 6]> 仅IE6可识别 <![endif]-->
    <!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]-->
    <!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]-->
    <!--[if IE 7]> 仅IE7可识别 <![endif]-->
    <!--[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]-->
    <!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->
    <!--[if IE 8]> 仅IE8可识别 <![endif]-->
    <!--[if IE 9]> 仅IE9可识别 <![endif]-->
    var u = window.navigator.userAgent.toLocaleLowerCase(),
    ie11 = /(trident)\/([\d.]+)/,
    b = u.match(ie11);


#### img加载失败

    function (selector, url) {
        let that = $('#' + selector);
        that.bind('error', () => {
            that.attr('src', loadImgError);
            that.unbind('error');
        });
        that.attr('src', url);
    }


#### 元素全屏

      handleFocusWindowFull = videoLayout => {
        const isFullscreen =
          document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        let fullChanged = false;
        if (isFullscreen) {
          fullChanged = true;
          // eslint-disable-next-line no-unused-expressions
          (document.exitFullscreen && document.exitFullscreen()) ||
          (document.mozCancelFullScreen && document.mozCancelFullScreen()) ||
          (document.webkitExitFullscreen && document.webkitExitFullscreen())
        } else {
          let video = null;
          if (videoLayout) {
            video = videoLayout;
          } else {
            const { focusScreenIndex } = this.state;
            if (focusScreenIndex !== null) {
              video = document.getElementById(`video${focusScreenIndex}`);
            } else {
              message.error('无焦点窗口');
            }
          }
          if (video) {
            fullChanged = true;
            // eslint-disable-next-line no-unused-expressions
            (video.requestFullscreen && video.requestFullscreen()) ||
            (video.mozRequestFullScreen && video.mozRequestFullScreen()) ||
            (video.webkitRequestFullscreen && video.webkitRequestFullscreen()) ||
            (video.msRequestFullscreen && video.msRequestFullscreen());
          }
        }
        if (fullChanged) {
          this.setState({
            isFullscreen: !isFullscreen,
          })
        }
      };


只获取元素中的文本,而不获取子元素的文本
原生js方法

    var arr = [];
    var content = document.getElementById("content");
    for (var i = 0, len = content.childNodes.length; i < len; i++) {
        if(content.childNodes[i].nodeType === 3){  // 通过nodeType是不是文本节点来判断
            //console.log(content.childNodes[i].nodeValue);
            arr.push(content.childNodes[i].nodeValue);
        }
    }
    var str = arr.join("");
    console.log(str) // 文本内容测试


jquery的方法一： 获取div的所有子元素和文本；再移除子元素

    var obj = $("#content").clone();
    obj.find(':nth-child(n)').remove();
    console.log(obj.text()); //文本内容测试
    //或者是利用children()方法获取元素的所有子元素的集合；此方法结果也一样
    //end()将匹配的元素变为前一次的状态
    $("#content").clone().children().remove().end().text() //文本内容测试    


jquery的方法二：使用filter()过滤方法

    //contents() 查找匹配元素内部所有的子节点（包括文本节点）
    var contStr = $('#content').contents().filter(function (index, content) {
        return content.nodeType === 3;
    }).text();
    console.log(contStr) //文本内容测试


#### 防抖

    /**
     * @desc 函数防抖
     * @param func 函数
     * @param wait 延迟执行毫秒数
     * @param immediate true 表立即执行，false 表非立即执行
     */
    function debounce(func,wait,immediate) {
        let timeout;
        return function () {
            let context = this;
            let args = arguments;
            if (timeout) clearTimeout(timeout);
            if (immediate) {
                var callNow = !timeout;
                timeout = setTimeout(() => {
                    timeout = null;
                }, wait)
                if (callNow) func.apply(context, args)
            }
            else {
                timeout = setTimeout(function(){
                    func.apply(context, args)
                }, wait);
            }
        }
    }


#### 节流

    /**
     * @desc 函数节流
     * @param func 函数
     * @param wait 延迟执行毫秒数
     * @param type 1 表时间戳版，2 表定时器版
     */
    function throttle(func, wait ,type) {
        if(type===1){
            let previous = 0;
        }else if(type===2){
            let timeout;
        }
        return function() {
            let context = this;
            let args = arguments;
            if(type===1){
                let now = Date.now();
    
                if (now - previous > wait) {
                    func.apply(context, args);
                    previous = now;
                }
            }else if(type===2){
                if (!timeout) {
                    timeout = setTimeout(() => {
                        timeout = null;
                        func.apply(context, args)
                    }, wait)
                }
            }
        }
    }


#### 节流调用快捷键

    // 快捷键事件
    document.addEventListener('keydown', TVWallOperationView.Events.addHotKey);
    document.removeEventListener('keydown', TVWallOperationView.Events.addHotKey);
    /**
     *@name: TVWallOperationView.Events.addHotKey
     *@description: 快捷键监听
     */
    TVWallOperationView.Events.addHotKey = CommonJs.throttle((event) => {
    	let e = event || window.event || arguments.callee.caller.arguments[0];
    	let keyCode = e.keyCode || e.which || e.charCode;
    	let ctrlKey = e.ctrlKey || e.metaKey;
    	let value = '';
    	let item = {
    		'Ctrl': 'ctrl'
    	};
    	//console.warn('--------------------e.key:' + e.key + ',keycode:' + keyCode);
    	//中文输入法，无效，退出
    	if (keyCode == '229') {
    		return;
    	}
    	// 如果不在允许的键值
    	if (
    		!(keyCode >= 48 && keyCode <= 57) &&
    		!(keyCode >= 65 && keyCode <= 90) &&
    		!(keyCode >= 112 && keyCode <= 122)) {
    		return;
    	}
    	//如果是Ctrl键，则退出
    	if (item[e.key] !== undefined) {
    		return;
    	}
    	if (ctrlKey) {
    		value += 'Ctrl + ';
    	}
    	value += KEY_MAP[keyCode];
    	if (TVWallOperationView.data.hotKeyList[value]) {
    		console.warn('收到快捷键准备启动' + TVWallOperationView.data.hotKeyList[value]);
    		TVWallOperationView.Events.RunPrePlan(TVWallOperationView.data.hotKeyList[value]);
    	}
    }, 2000);


#### 计算字符串长度

    String.prototype.calcLenth = function() {
        var len = 0;
        for (var i=0; i<this.length; i++) {
            if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {
                len += 2;
            } else {
                len ++;
            }
        }
        return len;
    };


#### 时间格式化

    /**
     * 给日期添加Format方法
     * @param fmt {string} 例子"yyyy-MM-dd hh:mm:ss"
     * @returns {string} 例子"2019-08-08 10:18:36"
     * 使用 new Date().Format("yyyy-MM-dd hh:mm:ss")
     */
    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };


#### 时间操作

    /**
     * @description: 按照'xxxx-xx-xx xx:xx:xx'的格式,时间格式化
     * @param {String}  当前时间戳
     * @param {String}  配置时间段
     */
    function dateFormatter(timestamp, type) {
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let date = new Date(timestamp);
        Y = date.getFullYear() + '-';
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        if (type == 'now') {
            // 当前时间
            return Y + M + D + h + m + s;
        } else if (type == 'today') {
            return {
                // 今天
                startTime: Y + M + D + '00:00:00',
                endTime: Y + M + D + '23:59:59'
            };
        } else if (type == 'last-hour') {
            // 最近一个小时
            let newDate = new Date(timestamp - 1000 * 60 * 60);
            let newY = newDate.getFullYear() + '-';
            let newM = (newDate.getMonth() + 1 < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1) + '-';
            let newD = newDate.getDate() + ' ';
            let newh = newDate.getHours() + ':';
            return {
                startTime: newY + newM + newD + newh + m + s,
                endTime: Y + M + D + h + m + s,
            }
        }
    }


#### 计算时间差

    Common.prototype.calcInterval = function(startTime, endTime){
    	function getTime(timeStr){
    		return new Date(timeStr).getTime();
    	}
    	return parseInt((getTime(endTime)-getTime(startTime))/1000);
    };
    Common.prototype.calcNum = function(str){
    	return (str<10?"0":"")+str;
    };
    Common.prototype.calcIntervalTime = function(startTime, endTime){
    	if (isNaN(Date.parse(startTime))||isNaN(Date.parse(endTime))) {
    		return '未知';
    	}
    	var time = this.calcInterval(startTime, endTime);
    	var second = time%60;
    	var minute = parseInt(time/60)%60;
    	var hour = parseInt(parseInt(time/60)/60);
    	return this.calcNum(hour)+":"+this.calcNum(minute)+":"+this.calcNum(second);
    };


#### 截取url

    Common.prototype.getValFromURL = function (key, urlSearch) {
    	var currentPageVal = '';
    	urlSearch = urlSearch || location.search;
    	var arr = urlSearch.split('&');
    	for (var i = 0, len = arr.length; i < len; i++) {
    		var item = arr[i];
    		if (item.indexOf(key + '=') > -1) {
    			currentPageVal = item.split('=')[1];
    		}
    	}
    	return currentPageVal;
    };


#### 定时器操作数组

    // 播放轮巡设备
    VMFrame.Events.PlayTurningForWin = function (param, turnindex) {
    	// 如果分屏数量大于4，切换辅码流
    	let streamType = 'main';
    	if (VMFrame.ConfigCanvasWinList.ConfigCanvasWin.length > 4) {
    		streamType = 'auxiliary';
    	}
    	// 发送播放请求
    	VMFrame.Events.PlayRealVideoReq({
    		cameraName: param.cameraList[turnindex].cameraName,
    		playWinID: param.winIndex + '',
    		cameraID: param.cameraList[turnindex].cameraID,
    		streamType: streamType,
    		accessURL: param.cameraList[turnindex].cameraURL
    	});
    	// 定时循环调用	
    	VMFrame.ConfigCanvasWinList.ConfigCanvasWin[param.winIndex - 1].isSetTimeOutValue = setTimeout(() => {
    		// 重置循环
    		if (++turnindex >= param.cameraList.length) {
    			turnindex = 0;
    		}
    		// 清空定时器
    		clearTimeout(VMFrame.ConfigCanvasWinList.ConfigCanvasWin[param.winIndex - 1].isSetTimeOutValue);
    		// 循环调用
    		VMFrame.Events.PlayTurningForWin(param, turnindex);
    	}, param.turningInterval * 1000);
    }


#### 设置快捷键

    // 键盘码
    const KEY_MAP = {
    // 0-9 48-57
    48: '0',49: '1',50: '2',51: '3',52: '4',53: '5',54: '6',55: '7',56: '8',57: '9',
    // A-Z 65-90 
    65: 'A',66: 'B',67: 'C',68: 'D',69: 'E',70: 'F',71: 'G',72: 'H',73: 'I',74: 'J',75: 'K',76: 'L',77: 'M',78: 'N',79: 'O',80: 'P',81: 'Q',82: 'R',83: 'S',84: 'T',85: 'U',86: 'V',87: 'W',88: 'X',89: 'Y',90: 'Z',
    //小键盘 0-9 96-105
    96: '0',97: '1',98: '2',99: '3',100: '4',101: '5',102: '6',103: '7',104: '8',105: '9',
    // F1-F11 112-122
    112: 'F1',113: 'F2',114: 'F3',115: 'F4',116: 'F5',117: 'F6',118: 'F7',119: 'F8',120: 'F9',121: 'F10',122: 'F11'
    }
    // 预案修改快捷键
    VMFrame.Events.onPreplanChangeHotKey = function (event) {
    	var e = event || window.event || arguments.callee.caller.arguments[0];
    	var keyCode = e.keyCode || e.which || e.charCode;
    	var ctrlKey = e.ctrlKey || e.metaKey;
    	var item = {
    		'Control': 'CTRL'
    	};
    	var value = this.value;
    	VMFrame.data.hotKeySetOverFlag = false;
    	//检查是否是中文输入法模式
    	if (keyCode == '229') {
    		$(this).blur();
    		alert('请切换到英文输入法!');
    		return;
    	}
    	//验证是否已有其他热键，或者改热键是否允许设置
    	//设置热键
    	//如果是控制键则继续等待，否则结束并取消焦点
    	if (e.key in item) {
    		value += item[e.key] + ' + ';
    		this.value = value;
    	} else {
    		let str = '';
    		for (let key in item) {
    			if (value.indexOf(item[key]) > -1) {
    				str += item[key] + ' + ';
    			}
    		}
    		if (
    			!(keyCode >= 48 && keyCode <= 57) &&
    			!(keyCode >= 65 && keyCode <= 90) &&
    			!(keyCode >= 96 && keyCode <= 105) &&
    			!(keyCode >= 112 && keyCode <= 122)) {
    			alert('不支持此快捷键，请重新设置.');
    			this.value = VMFrame.data.oldhotKey;
    			return;
    		}
    		this.value = str + KEY_MAP[keyCode];
    		VMFrame.data.hotKeySetOverFlag = true;
    		$(this).blur();
    	}
    }
    // 取消聚焦，说明设置快捷键完毕、或者取消设置快捷键
    VMFrame.Events.onBlur = function () {
    	// ctrl等待输入状态
    	if (!VMFrame.data.hotKeySetOverFlag) {
    		this.value = VMFrame.data.oldhotKey;
    		console.log('已取消设置快捷键，需重新设置.');
    		return;
    	}
    	// 取消设置
    	if (this.value === '') {
    		this.value = VMFrame.data.oldhotKey;
    	}
    	this.placeholder = '请设置快捷键...';
    	// 检查设置情况
    	VMFrame.data.newhotKey = this.value;
    	VMFrame.Events.CheckPrePlanHotKey();
    }
    // 获得焦点，说明准备设置快捷键
    VMFrame.Events.onFocus = function () {
    	VMFrame.data.oldhotKey = this.value;
    	this.value = '';
    	this.placeholder = '正在设置快捷键...';
    	// 设置当前选中的预案
    	let index = $("#preplanTbody input").index(this);
    	VMFrame.data.selectedHotKey = VMFrame.data.preplanList[index];
    }
    // 检查快捷键冲突
    VMFrame.Events.CheckPrePlanHotKey = function () {
    	// 如果快捷键未发生改变,清空数据
    	if (VMFrame.data.oldhotKey === VMFrame.data.newhotKey) {
    		VMFrame.data.oldhotKey = '';
    		VMFrame.data.newhotKey = '';
    		return;
    	}
    	// 如果发生改变,请求编辑
    	let params = {
    		method: "PUT",
    		id: VMFrame.data.selectedHotKey.id,
    		planName: VMFrame.data.selectedHotKey.planName,
    		startShortcut: VMFrame.data.newhotKey,
    		splitType: VMFrame.data.selectedHotKey.splitType,
    	};
    	CommonJs.AJAX("/securitysystem/planCfg/plan.action", params, function (rsp) {
    		if (rsp && rsp.result && rsp.result.code && rsp.result.code === 201) {
    			// 重新获取预案列表
    			VMFrame.GetPrePlan();
    			// 清空相关数据
    			VMFrame.data.oldhotKey = '';
    			VMFrame.data.newhotKey = '';
    			VMFrame.data.selectedHotKey = null;
    		} else {
    			alert(rsp && rsp.result && rsp.result.message || '编辑预案快捷键失败');
    		}
    	}, "编辑预案快捷键");
    }




