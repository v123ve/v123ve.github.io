import{_ as e,c as n,a3 as a,o as r}from"./chunks/framework.BaR4VHXY.js";const h=JSON.parse('{"title":"js常用操作","description":"","frontmatter":{"Created at":"2019-08-16T00:00:00.000Z","Last updated at":"2023-11-24T00:00:00.000Z","Source URL":"https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html","tags":["js","工作模块","标记"]},"headers":[],"relativePath":"zh-CN/工作笔记/js常用操作.md","filePath":"zh-CN/工作笔记/js常用操作.md","lastUpdated":null}'),o={name:"zh-CN/工作笔记/js常用操作.md"};function d(i,t,l,s,u,c){return r(),n("div",null,t[0]||(t[0]=[a(`<h1 id="js常用操作" tabindex="-1">js常用操作 <a class="header-anchor" href="#js常用操作" aria-label="Permalink to &quot;js常用操作&quot;">​</a></h1><h4 id="js常用操作-1" tabindex="-1">js常用操作 <a class="header-anchor" href="#js常用操作-1" aria-label="Permalink to &quot;js常用操作&quot;">​</a></h4><p><a href="https://www.jianshu.com/p/390a65d7a353" target="_blank" rel="noreferrer">ES6/7/8</a></p><p><a href="https://www.cnblogs.com/mq0036/category/508333.html" target="_blank" rel="noreferrer">部分学习文档</a></p><p><a href="https://www.cnblogs.com/mq0036/p/9139231.html" target="_blank" rel="noreferrer">随机数</a></p><table tabindex="0"><thead><tr><th>描述</th><th>方法</th><th>范围(ES5)</th></tr></thead><tbody><tr><td>数组的选定</td><td>slice(start,end]</td><td>不改变原数组</td></tr><tr><td>数组的删除</td><td>splice(index,num)</td><td>改变原数组</td></tr><tr><td>数组的反转</td><td>reverse()</td><td>改变原数组</td></tr><tr><td>数组首部插入</td><td>unshift()</td><td>改变原数组</td></tr><tr><td>数组首部删除</td><td>shift()</td><td>改变原数组</td></tr><tr><td>数组尾部插入</td><td>push()</td><td>改变原数组</td></tr><tr><td>数组尾部删除</td><td>pop()</td><td>改变原数组</td></tr><tr><td>数组的连接</td><td>concat()</td><td>不改变原数组</td></tr><tr><td>数组的截取</td><td>substring(start,end]</td><td>不改变原数组</td></tr><tr><td></td><td>substr(start,num)</td><td>不改变原数组</td></tr><tr><td>数组转字符串</td><td>join()</td><td>不改变原数组，默认&#39;,&#39;</td></tr><tr><td>数组排序</td><td>sort()</td><td>改变原数组，默认按Unicode升序</td></tr><tr><td>数组索引</td><td>indexOf(&#39;&#39;,num)</td><td>改变原数组，从前往后</td></tr><tr><td></td><td>lastIndexOf(&#39;&#39;,num)</td><td>不改变原数组，从后往前</td></tr><tr><td>数组遍历执行</td><td>each(Fn(item,index,arr))</td><td>遍历数组</td></tr><tr><td></td><td>every(Fn(item,index,arr))</td><td>若每项都为true,则返回true</td></tr><tr><td></td><td>some(Fn(item,index,arr))</td><td>若一项为true,则返回true</td></tr><tr><td></td><td>fliter(Fn(item,index,arr))</td><td>则返回由true的项组成的数组</td></tr><tr><td></td><td>map(Fn(item,index,arr))</td><td>则返回每项执行后的组成的新数组</td></tr><tr><td>字符串去除所有空格</td><td>replace(/\\s+/g,&quot;&quot;);</td><td>不改变原字符串</td></tr><tr><td>字符串去除两端空格</td><td>trim()</td><td>不改变原字符串</td></tr><tr><td>获取JSON文件内容</td><td>$.getJSON(url,data,success(data,status,xhr){})</td><td></td></tr><tr><td>动画效果</td><td>animate({},speed)</td><td>opacity:&#39;show&#39;&amp;&#39;hide&#39;</td></tr><tr><td>验证日期</td><td>isNaN(Date.parse(new Date()))</td><td>为true表示时间格式不正确</td></tr><tr><td>正向编码</td><td>btoa(unescape(encodeURIComponent(&#39;123&#39;))</td><td><strong>btoa</strong>()：将ascii字符串或二进制数据转换成一个base64编码过的字符串,该方法不能直接作用于Unicode字符串。<strong>unescape</strong>():对字符串进行解码。<strong>encodeURIComponent</strong>():对URI 进行编码。</td></tr><tr><td>反向解码</td><td>decodeURIComponent(escape(atob(&#39;123&#39;)))</td><td><strong>decodeURIComponent</strong>():对URI进行解码。<strong>escape</strong>() 函数可对字符串进行编码，返回已编码的 string 的副本。其中某些字符被替换成了十六进制的转义序列。<strong>atob</strong>():用来解码一个已经被base-64编码过的数据。</td></tr></tbody></table><table tabindex="0"><thead><tr><th>描述</th><th>方法</th><th>范围(ES6)</th></tr></thead><tbody><tr><td>数组的包含</td><td>includes()</td><td>包含某个元素就返回true</td></tr><tr><td>数组的搜索</td><td>find(item)</td><td>找到符合条件的第一个返回它并终止搜索</td></tr><tr><td></td><td>findIndex(item)</td><td>找到符合条件的第一个返回下标并终止搜索</td></tr><tr><td>数组的替换</td><td>fill(value,start,end)</td><td>替换指定范围内的元素</td></tr><tr><td>数组的复制</td><td>copyWithin(index,start,end)</td><td>从指定下标开始复制，复制范围</td></tr><tr><td>数组的转化</td><td>from()</td><td>将类似数组或可遍历的对象转为数组</td></tr><tr><td></td><td>Array.of()</td><td>将一组值转为数组</td></tr><tr><td>数组遍历返回迭代器</td><td>entries()</td><td>返回键值对[key,value]</td></tr><tr><td></td><td>values()</td><td>返回值value</td></tr><tr><td></td><td>keys()</td><td>返回键key</td></tr></tbody></table><table tabindex="0"><thead><tr><th>描述</th><th>方法</th><th>范围</th></tr></thead><tbody><tr><td>json对象转数组</td><td>Object.keys(json).map()</td><td></td></tr></tbody></table><h4 id="get和post" tabindex="-1">GET和POST <a class="header-anchor" href="#get和post" aria-label="Permalink to &quot;GET和POST&quot;">​</a></h4><pre><code>GET:
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
</code></pre><h4 id="js高级调试" tabindex="-1">js高级调试 <a class="header-anchor" href="#js高级调试" aria-label="Permalink to &quot;js高级调试&quot;">​</a></h4><table tabindex="0"><thead><tr><th>描述</th><th>例子</th><th>范围</th></tr></thead><tbody><tr><td>%s</td><td>(&quot;%s年&quot;,2016)</td><td>字符串</td></tr><tr><td>%d</td><td>(&quot;%d年%d月&quot;,2016，11)</td><td>整数</td></tr><tr><td>%f</td><td>(&quot;%f&quot;,3.1415)</td><td>小数</td></tr><tr><td>%o</td><td>(&quot;%o&quot;,console)</td><td>对象</td></tr><tr><td>%c</td><td>(&quot;%c应用样式内容&quot;,“font-size:30px;color:#00f”)</td><td>自定义样式</td></tr><tr><td>table()</td><td>table(Obj&amp;Arr)</td><td>表单输出</td></tr><tr><td>count()</td><td>count(&#39;调用次数&#39;)</td><td>放在函数里，每当这句代码运行输出所在函数执行次数</td></tr><tr><td>time()</td><td>time()</td><td>计时开始</td></tr><tr><td>timeEnd()</td><td>timeEnd()</td><td>计时结束</td></tr><tr><td>assert()</td><td>assert(true&amp;false，‘结束’)</td><td>为true时无影响，为false终止并报错</td></tr><tr><td>dirxml()</td><td>dirxml(ul)</td><td>Dom输出</td></tr><tr><td>dir()</td><td>dir(obj)</td><td>对象输出</td></tr><tr><td>trace()</td><td>trace()</td><td>显示函数调用轨迹(访问调用栈）</td></tr><tr><td>group()</td><td>group(‘组名’)</td><td>成组输出</td></tr><tr><td>groupEnd()</td><td>groupEnd(‘end’)</td><td>成组输出结束</td></tr><tr><td>profile()</td><td>profile()</td><td>性能分析</td></tr><tr><td>profileEnd()</td><td>profileEnd()</td><td>性能分析结束</td></tr></tbody></table><h4 id="url转义" tabindex="-1">url转义 <a class="header-anchor" href="#url转义" aria-label="Permalink to &quot;url转义&quot;">​</a></h4><table tabindex="0"><thead><tr><th>符号</th><th>说明</th><th>转义符号</th></tr></thead><tbody><tr><td>+</td><td>URL中+号表示空格</td><td>%2B</td></tr><tr><td>空格</td><td>URL中的空格可以用+号或者编码</td><td>%20</td></tr><tr><td>/</td><td>分隔目录和子目录</td><td>%2F</td></tr><tr><td>?</td><td>分隔实际的URL和参数</td><td>%3F</td></tr><tr><td>%</td><td>指定特殊字符</td><td>%25</td></tr><tr><td>#</td><td>表示书签</td><td>%23</td></tr><tr><td>&amp;</td><td>URL中指定的参数间的分隔符</td><td>%26</td></tr><tr><td>=</td><td>URL中指定参数的值</td><td>%3D</td></tr></tbody></table><pre><code>1.encodeURIComponent()方法的使用
语法：encodeURIComponent(URIstring)
参数：URIstring，必需。一个字符串，含有 URI 组件或其他要编码的文本。

2.encodeURIComponent()测试
测试
document.write(encodeURIComponent(&quot;https://www.sojson.com/encodeurl.html?我是个中文参数&quot;))
document.write(&quot;&lt;br /&gt;&quot;)
document.write(encodeURIComponent(&quot;,/?:@&amp;=+$#&quot;))
结果
http%3A%2F%2Fwww.sojson.com%2Fencodeurl.html%3F%E6%88%91%E6%98%AF%E4%B8%AA%E4%B8%AD%E6%96%87%E5%8F%82%E6%95%B0
%3Cbr%20%2F%3E
%2C%2F%3F%3A%40%26%3D%2B%24%23

二、encodeURI()测试
测试
document.write(encodeURI(&quot;https://www.sojson.com/encodeurl.html?我是个中文参数&quot;))
document.write(&quot;&lt;br /&gt;&quot;)
document.write(encodeURI(&quot;,/?:@&amp;=+$#&quot;))
结果
https://www.sojson.com/encodeurl.html?%E6%88%91%E6%98%AF%E4%B8%AA%E4%B8%AD%E6%96%87%E5%8F%82%E6%95%B0
%3Cbr%20/%3E
,/?:@&amp;=+$#
三、 encodeURIComponent() 函数 与 encodeURI() 函数的区别
请注意 encodeURIComponent() 函数 与 encodeURI() 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号。
</code></pre><p>encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。 encodeURI() 函数可把字符串作为 URI 进行编码。 提示：请注意 encodeURIComponent() 函数 与 encodeURI() 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号。 提示：如果 URI 组件中含有分隔符，比如 ? 和 #，则应当使用 encodeURIComponent() 方法分别对各组件进行编码。 window.btoa(unescape(encodeURIComponent(&#39;要转码的内容&#39;))); decodeURIComponent(escape(window.atob(&#39;要解码的内容&#39;)));</p><h4 id="异或交换" tabindex="-1">异或交换 <a class="header-anchor" href="#异或交换" aria-label="Permalink to &quot;异或交换&quot;">​</a></h4><pre><code>function swap(a, b) {
    if (a !== b) {
        a ^= b;
        b ^= a;
        a ^= b;
    }
}
</code></pre><h4 id="异或正负" tabindex="-1">异或正负 <a class="header-anchor" href="#异或正负" aria-label="Permalink to &quot;异或正负&quot;">​</a></h4><pre><code>function sameSign(a, b) {
    // 两数同号为正，异号为负
    return (a ^ b) &gt;= 0;
}
</code></pre><h4 id="数组求和" tabindex="-1">数组求和 <a class="header-anchor" href="#数组求和" aria-label="Permalink to &quot;数组求和&quot;">​</a></h4><pre><code>function sum(arr) {
  return arr.reduce(function (prev, curr, idx, arr) {
    return prev + curr;
  });
}
</code></pre><h4 id="全部替换" tabindex="-1">全部替换 <a class="header-anchor" href="#全部替换" aria-label="Permalink to &quot;全部替换&quot;">​</a></h4><pre><code>var str = &quot;1-2-3-4-5&quot;;
str.replace(/-/g, &quot;&quot;); // 12345
</code></pre><h4 id="截取url路径" tabindex="-1">截取url路径 <a class="header-anchor" href="#截取url路径" aria-label="Permalink to &quot;截取url路径&quot;">​</a></h4><pre><code>// 获取URL中最后一个斜杠前面的内容
var url = window.location.href;var index = url.lastIndexOf(&quot;\\/&quot;);
str = url.substring(0,index+1);
// 获取URL中最后一个斜杠后面的内容
var url = window.location.href;var index = url.lastIndexOf(&quot;\\/&quot;);
str = url.substring(index + 1,url.length);


// 截取url路径参数
function getUrlParam(name) {
  const reg = new RegExp(\`(^|&amp;)\${name}=([^&amp;]*)(&amp;|$)\`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
</code></pre><h4 id="转换url参数" tabindex="-1">转换url参数 <a class="header-anchor" href="#转换url参数" aria-label="Permalink to &quot;转换url参数&quot;">​</a></h4><pre><code>let params = {
	userName: &#39;admin&#39;,
	password: &#39;21232f297a57a5a743894a0e4a801fc3&#39;,
};
params = Object.keys(params).map(key =&gt; {
	return encodeURIComponent(key) + &quot;=&quot; + encodeURIComponent(params[key]);
}).join(&quot;&amp;&quot;);
</code></pre><h4 id="dom元素交换" tabindex="-1">dom元素交换 <a class="header-anchor" href="#dom元素交换" aria-label="Permalink to &quot;dom元素交换&quot;">​</a></h4><pre><code>  doChangePostion(a, b) {
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
</code></pre><h4 id="取分割div的坐标" tabindex="-1">取分割div的坐标 <a class="header-anchor" href="#取分割div的坐标" aria-label="Permalink to &quot;取分割div的坐标&quot;">​</a></h4><pre><code>/**
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
  const partX = partXFix.substring(0, partXFix.lastIndexOf(&#39;.&#39;) + 3);
  const partY = partYFix.substring(0, partYFix.lastIndexOf(&#39;.&#39;) + 3);
  return [...Array(avarage)].map((v, i) =&gt; {
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
      streamType: avarage &gt; 4 ? STREAM_TYPE.辅流 : STREAM_TYPE.主流,
    };
  });
}

/**
 * 取1大几小div的坐标
 * @param {more} more 小窗口的数量，为奇数，且大于3
 */
function getOnePlusMoreDiv(more) {
  const edgeNum = more &gt;&gt; 1;
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
  for (let i = 1; i &lt; more + 1; i++) {
    if (i &lt;= edgeNum) {
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
  for (let i = 0; i &lt; up; i++) {
    divStyle.push({
      x: i * upLength,
      y: 0,
      width: upLength,
      height: 100 - up * lowLength,
      streamType: STREAM_TYPE.主流,
    });
  }
  for (let i = 0; i &lt; low; i++) {
    let x = i * lowLength;
    let y = 100 - up * lowLength;
    if (i &gt;= shareNum) {
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
</code></pre><h4 id="阻止向上冒泡事件" tabindex="-1">阻止向上冒泡事件 <a class="header-anchor" href="#阻止向上冒泡事件" aria-label="Permalink to &quot;阻止向上冒泡事件&quot;">​</a></h4><pre><code>e.preventDefault(); //阻止浏览器默认行为
e.stopPropagation(); //阻止事件冒泡
return false;
</code></pre><h4 id="求两个数组的交集" tabindex="-1">求两个数组的交集 <a class="header-anchor" href="#求两个数组的交集" aria-label="Permalink to &quot;求两个数组的交集&quot;">​</a></h4><p>在数组1去重的同时过滤掉数组2含有的元素</p><pre><code>var numOne = [0, 2, 4, 6, 8, 8];
var numTwo = [1, 2, 3, 4, 5, 6];
var duplicatedValues = […new Set(numOne)].filter(item =&gt; numTwo.includes(item));
console.log(duplicatedValues); // returns [2, 4, 6]
</code></pre><h4 id="从数组中获取随机值" tabindex="-1">从数组中获取随机值 <a class="header-anchor" href="#从数组中获取随机值" aria-label="Permalink to &quot;从数组中获取随机值&quot;">​</a></h4><p>在数组长度的范围内生成一个随机的索引</p><pre><code>var colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];
var randomColor = colors[(Math.floor(Math.random() * (colors.length)))];
</code></pre><h4 id="从数组中删除假值" tabindex="-1">从数组中删除假值 <a class="header-anchor" href="#从数组中删除假值" aria-label="Permalink to &quot;从数组中删除假值&quot;">​</a></h4><p>在Javascript中，假值包括false、0、&#39;&#39;、null、NaN、undefined</p><pre><code>var mixedArr = [0, “blue”, “”, NaN, 9, true, undefined, “white”, false];
var trueArr = mixedArr.filter(Boolean);
console.log(trueArr); // returns [“blue”, 9, true, “white”]
</code></pre><h4 id="对数组中的所有值求和" tabindex="-1">对数组中的所有值求和 <a class="header-anchor" href="#对数组中的所有值求和" aria-label="Permalink to &quot;对数组中的所有值求和&quot;">​</a></h4><pre><code>var nums = [1, 5, 2, 6];
var sum = nums.reduce((x, y) =&gt; x + y);
console.log(sum); // returns 14
</code></pre><h4 id="for循环标记" tabindex="-1">for循环标记 <a class="header-anchor" href="#for循环标记" aria-label="Permalink to &quot;for循环标记&quot;">​</a></h4><pre><code>reStartFlag: for (let i = 0; i &lt; parameterArealist.length; i++) {
  let thatParameterArea = parameterArealist[i].configInfo || [];
  for (let j = 0; j &lt; thatParameterArea.length; j++) {
	let thatConfigInfo = thatParameterArea[j];
	if (thatConfigInfo.needRestart &amp;&amp; isFieldTouched(thatConfigInfo.fieldName)) {
	  reStart = true;
	  break reStartFlag;
	}
  }
}
</code></pre><h4 id="获取div真实距离" tabindex="-1">获取div真实距离 <a class="header-anchor" href="#获取div真实距离" aria-label="Permalink to &quot;获取div真实距离&quot;">​</a></h4><pre><code>document.getElementById(&#39;world&#39;).getBoundingClientRect();

// [交叉观察器]
// https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html
const callback = (entries,observer) =&gt;{
    entries.forEach(entry = &gt;{
        if(item.intersectionRatio &lt;= 0){
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
</code></pre><h4 id="复制文本" tabindex="-1">复制文本 <a class="header-anchor" href="#复制文本" aria-label="Permalink to &quot;复制文本&quot;">​</a></h4><pre><code>const value = &quot;1&quot;;
const copyInput = document.createElement(&#39;input&#39;);
copyInput.setAttribute(&#39;readonly&#39;, &#39;readonly&#39;);
copyInput.setAttribute(&#39;value&#39;, value);
document.body.appendChild(copyInput);
copyInput.select();
document.execCommand(&#39;copy&#39;);
document.body.removeChild(copyInput);
message.success(&#39;复制成功&#39;);
</code></pre><h4 id="保存调试数据" tabindex="-1">保存调试数据 <a class="header-anchor" href="#保存调试数据" aria-label="Permalink to &quot;保存调试数据&quot;">​</a></h4><p>在console里输入</p><pre><code>(function(console){
console.save = function(data, filename){
	if(!data) {
		console.error(&#39;Console.save: No data&#39;)
		return;
	}
	if(!filename) 
		filename = &#39;console.json&#39;
	if(typeof data === &quot;object&quot;){
		data = JSON.stringify(data, undefined, 4)
	}
	var blob = new Blob([data], {type: &#39;text/json&#39;}),
	e = document.createEvent(&#39;MouseEvents&#39;),
	a = document.createElement(&#39;a&#39;)
	a.download = filename
	a.href = window.URL.createObjectURL(blob)
	a.dataset.downloadurl = [&#39;text/json&#39;, a.download, a.href].join( &#39;:&#39; )
	e.initMouseEvent(&#39;click&#39;, true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
	a.dispatchEvent(e)
}})(console);
</code></pre><p>填入数据和文件名即可下载</p><pre><code>console.save(array1, &quot;array1.json&quot;)
</code></pre><h4 id="json安全解析" tabindex="-1">JSON安全解析 <a class="header-anchor" href="#json安全解析" aria-label="Permalink to &quot;JSON安全解析&quot;">​</a></h4><pre><code>JSON.safeParse = function(data,defaultValue) {
  if(data==null || data==undefined){
    return defaultValue
  }
  try{
    return JSON.parse(data);
  }catch(e){
    return defaultValue;
  }
}
</code></pre><h4 id="生成大小写字母" tabindex="-1">生成大小写字母 <a class="header-anchor" href="#生成大小写字母" aria-label="Permalink to &quot;生成大小写字母&quot;">​</a></h4><pre><code>JS 生成26个大小写字母
//生成大写字母  A的Unicode值为65
function generateBig_1(){
    var str = [];
    for(var i=65;i&lt;91;i++){
        str.push(String.fromCharCode(i));
    }
    return str;
}
//生成大写字母  a的Unicode值为97
function generateSmall_1(){
    var str = [];
    for(var i=97;i&lt;123;i++){
        str.push(String.fromCharCode(i));
    }
    return str;
}
//将字符串转换成Unicode码
function toUnicode(str){
    var codes = [];
    for(var i=0;i&lt;str.length;i++){
        codes.push(str.charCodeAt(i));
    }
    return codes;
}
function generateSmall(){
    var ch_small = &#39;a&#39;;
    var str_small = &#39;&#39;;
    for(var i=0;i&lt;26;i++){
        str_small += String.fromCharCode(ch_small.charCodeAt(0)+i);
    }
    return str_small;
}
function generateBig(){
    var ch_big = &#39;A&#39;;
    var str_big = &#39;&#39;;
    for(var i=0;i&lt;26;i++){
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
</code></pre><p>![[../_resources/unknown_filename-f9eeec6d.png]]</p><h4 id="a标签下载文件" tabindex="-1">a标签下载文件 <a class="header-anchor" href="#a标签下载文件" aria-label="Permalink to &quot;a标签下载文件&quot;">​</a></h4><pre><code>  getVideoSrc = path =&gt; {
    const Path = encodeURI(path);
    return \`http://192.168.1.51:8080/component/videoDownload/taskFile?filePath=\${Path}&amp;timestamp=\${new Date().valueOf()}\`;
  }

  onButtonClick = () =&gt; {
    const src = this.getVideoSrc(&#39;D:/tools/Wireshark-win64-3.2.5.exe&#39;);
    let a = document.createElement(&#39;a&#39;);
    a.charset = &#39;ISO-8859-1&#39;;
    a.download = &#39;测试下载&#39;;
    a.href = src;
    a.click();
    setTimeout(() =&gt; {
      a = null;
    }, 10000);
  }
</code></pre><h4 id="js读取本地文件" tabindex="-1">js读取本地文件 <a class="header-anchor" href="#js读取本地文件" aria-label="Permalink to &quot;js读取本地文件&quot;">​</a></h4><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noreferrer">FetchApi</a></p><p><a href="https://www.cnblogs.com/chengyunshen/p/11376735.html" target="_blank" rel="noreferrer">fetch的文件流下载及下载进度获取</a></p><h4 id="js获取video截图" tabindex="-1">js获取video截图 <a class="header-anchor" href="#js获取video截图" aria-label="Permalink to &quot;js获取video截图&quot;">​</a></h4><pre><code>var canvas=document.getElementById(&#39;canvas&#39;); 
var context=canvas.getContext(&#39;2d&#39;); 
var video=document.querySelector(&#39;#&#39;+videoId+&#39; video&#39;);
context.drawImage(video,0,0,&quot;602.5&quot;, &quot;542.7&quot;);
var saveImage = canvas.toDataURL(&#39;image/png&#39;);
var base64Img = saveImage
var base64Data = saveImage.substring(22);
$(&quot;#base64Img&quot;).attr(&quot;src&quot;,base64Img)
$(&quot;#base64Data&quot;).val(base64Data)
</code></pre><h4 id="格式化时间" tabindex="-1">格式化时间 <a class="header-anchor" href="#格式化时间" aria-label="Permalink to &quot;格式化时间&quot;">​</a></h4><pre><code>  // 格式化时间
  function formatTime(time) {
    const year = time.getFullYear();
    const month = (&quot;0&quot; + (time.getMonth() + 1)).slice(-2);
    const day = (&quot;0&quot; + time.getDate()).slice(-2);
    const hour = (&quot;0&quot; + time.getHours()).slice(-2);
    const minute = (&quot;0&quot; + time.getMinutes()).slice(-2);
    const second = (&quot;0&quot; + time.getSeconds()).slice(-2);
    const today = year + &quot;-&quot; + (month) + &quot;-&quot; + (day);
    const now = year + &quot;-&quot; + month + &quot;-&quot; + day + &quot;T&quot; + hour + &quot;:&quot; + minute + &quot;:&quot; + second;
    const formatNow = year + &quot;-&quot; + month + &quot;-&quot; + day + &quot; &quot; + hour + &quot;:&quot; + minute + &quot;:&quot; + second;
    return {  year,  month,  day,  hour,  minute,  second,  today,  now,  formatNow}
  }

  // 校验时间戳
  function checkTime(startTime, endTime) {
    if (startTime &gt; endTime) {
      alert(&quot;开始时间不能大于结束时间&quot;);
      return false;
    }
    if (endTime - startTime &gt; 3 * 24 * 60 * 60 * 1000) {
      alert(&quot;时间间隔不能大于三天&quot;);
      return false;
    }
    return true;
  }
</code></pre><h4 id="重叠时间段" tabindex="-1">重叠时间段 <a class="header-anchor" href="#重叠时间段" aria-label="Permalink to &quot;重叠时间段&quot;">​</a></h4><pre><code>  // 存在交叉时间
  const A = {
    start: moment(\`2023-01-01 \${v.startTime}\`).valueOf(),
    end: moment(\`2023-01-01 \${v.endTime}\`).valueOf(),
  };
  const B = {
    start: moment(\`2023-01-01 \${start}\`).valueOf(),
    end: moment(\`2023-01-01 \${end}\`).valueOf(),
  };
  const max = [A.start, B.start];
  const min = [A.end, B.end];
  if (Math.max.apply(null, max) &lt; Math.min.apply(null, min)) {
    return true;
  }
  if (!(A.end &lt;= B.start || A.start &gt;= B.end)) {
    return true;
  }
  return false;
</code></pre><h4 id="对重叠时间段交叉合并" tabindex="-1">对重叠时间段交叉合并 <a class="header-anchor" href="#对重叠时间段交叉合并" aria-label="Permalink to &quot;对重叠时间段交叉合并&quot;">​</a></h4><pre><code>	// 判断时间段重叠
    if (timeList.length &gt; 1) {
      for (let i = timeList.length - 1; i &gt; 0; i -= 1) {
        // eslint-disable-next-line max-len
        if (timeList[timeList.length - i - 1].startTime &gt;= timeList[timeList.length - i - 1].endTime) {
          this.setState({
            tipErr: \`*时间段\${timeList.length - i}开始时间大于或等于结束时间，请修改\`,
          });
          return false;
        }
        if (timeList[timeList.length - i].startTime &gt;= timeList[timeList.length - i].endTime) {
          this.setState({
            tipErr: \`*时间段\${timeList.length - i + 1}开始时间大于或等于结束时间，请修改\`,
          });
          return false;
        }
        for (let j = i - 1; j &gt;= 0; j -= 1) {
          // eslint-disable-next-line max-len
          if (timeList[j].startTime &lt; timeList[i].endTime &amp;&amp; timeList[i].startTime &lt; timeList[j].endTime) {
            this.setState({
              tipErr: \`*时间段\${j + 1}时间段\${i + 1}存在重叠,建议修改为\${timeList[i].startTime &gt; timeList[j].startTime ? timeList[j].startTime : timeList[i].startTime} ~ \${timeList[i].endTime &gt; timeList[j].endTime ? timeList[i].endTime : timeList[j].endTime}\`,
            });
            return false;
          }
        }
      }
    } else if (timeList[0].startTime &gt;= timeList[0].endTime) {
      this.setState({
        tipErr: &#39;*时间段1开始时间大于或等于结束时间，请修改&#39;,
      });
      return false;
    }
</code></pre><h4 id="判断ie版本" tabindex="-1">判断IE版本 <a class="header-anchor" href="#判断ie版本" aria-label="Permalink to &quot;判断IE版本&quot;">​</a></h4><pre><code>&lt;!--[if !IE]&gt;&lt;!--&gt; 除IE外都可识别（不是IE） &lt;!--&lt;![endif]--&gt;
&lt;!--[if IE]&gt; 所有的IE可识别 &lt;![endif]--&gt;
&lt;!--[if IE 6]&gt; 仅IE6可识别 &lt;![endif]--&gt;
&lt;!--[if lt IE 6]&gt; IE6以及IE6以下版本可识别 &lt;![endif]--&gt;
&lt;!--[if gte IE 6]&gt; IE6以及IE6以上版本可识别 &lt;![endif]--&gt;
&lt;!--[if IE 7]&gt; 仅IE7可识别 &lt;![endif]--&gt;
&lt;!--[if lt IE 7]&gt; IE7以及IE7以下版本可识别 &lt;![endif]--&gt;
&lt;!--[if gte IE 7]&gt; IE7以及IE7以上版本可识别 &lt;![endif]--&gt;
&lt;!--[if IE 8]&gt; 仅IE8可识别 &lt;![endif]--&gt;
&lt;!--[if IE 9]&gt; 仅IE9可识别 &lt;![endif]--&gt;
var u = window.navigator.userAgent.toLocaleLowerCase(),
ie11 = /(trident)\\/([\\d.]+)/,
b = u.match(ie11);
</code></pre><h4 id="img加载失败" tabindex="-1">img加载失败 <a class="header-anchor" href="#img加载失败" aria-label="Permalink to &quot;img加载失败&quot;">​</a></h4><pre><code>function (selector, url) {
    let that = $(&#39;#&#39; + selector);
    that.bind(&#39;error&#39;, () =&gt; {
        that.attr(&#39;src&#39;, loadImgError);
        that.unbind(&#39;error&#39;);
    });
    that.attr(&#39;src&#39;, url);
}
</code></pre><h4 id="元素全屏" tabindex="-1">元素全屏 <a class="header-anchor" href="#元素全屏" aria-label="Permalink to &quot;元素全屏&quot;">​</a></h4><pre><code>  handleFocusWindowFull = videoLayout =&gt; {
    const isFullscreen =
      document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    let fullChanged = false;
    if (isFullscreen) {
      fullChanged = true;
      // eslint-disable-next-line no-unused-expressions
      (document.exitFullscreen &amp;&amp; document.exitFullscreen()) ||
      (document.mozCancelFullScreen &amp;&amp; document.mozCancelFullScreen()) ||
      (document.webkitExitFullscreen &amp;&amp; document.webkitExitFullscreen())
    } else {
      let video = null;
      if (videoLayout) {
        video = videoLayout;
      } else {
        const { focusScreenIndex } = this.state;
        if (focusScreenIndex !== null) {
          video = document.getElementById(\`video\${focusScreenIndex}\`);
        } else {
          message.error(&#39;无焦点窗口&#39;);
        }
      }
      if (video) {
        fullChanged = true;
        // eslint-disable-next-line no-unused-expressions
        (video.requestFullscreen &amp;&amp; video.requestFullscreen()) ||
        (video.mozRequestFullScreen &amp;&amp; video.mozRequestFullScreen()) ||
        (video.webkitRequestFullscreen &amp;&amp; video.webkitRequestFullscreen()) ||
        (video.msRequestFullscreen &amp;&amp; video.msRequestFullscreen());
      }
    }
    if (fullChanged) {
      this.setState({
        isFullscreen: !isFullscreen,
      })
    }
  };
</code></pre><p>只获取元素中的文本,而不获取子元素的文本 原生js方法</p><pre><code>var arr = [];
var content = document.getElementById(&quot;content&quot;);
for (var i = 0, len = content.childNodes.length; i &lt; len; i++) {
    if(content.childNodes[i].nodeType === 3){  // 通过nodeType是不是文本节点来判断
        //console.log(content.childNodes[i].nodeValue);
        arr.push(content.childNodes[i].nodeValue);
    }
}
var str = arr.join(&quot;&quot;);
console.log(str) // 文本内容测试
</code></pre><p>jquery的方法一： 获取div的所有子元素和文本；再移除子元素</p><pre><code>var obj = $(&quot;#content&quot;).clone();
obj.find(&#39;:nth-child(n)&#39;).remove();
console.log(obj.text()); //文本内容测试
//或者是利用children()方法获取元素的所有子元素的集合；此方法结果也一样
//end()将匹配的元素变为前一次的状态
$(&quot;#content&quot;).clone().children().remove().end().text() //文本内容测试    
</code></pre><p>jquery的方法二：使用filter()过滤方法</p><pre><code>//contents() 查找匹配元素内部所有的子节点（包括文本节点）
var contStr = $(&#39;#content&#39;).contents().filter(function (index, content) {
    return content.nodeType === 3;
}).text();
console.log(contStr) //文本内容测试
</code></pre><h4 id="防抖" tabindex="-1">防抖 <a class="header-anchor" href="#防抖" aria-label="Permalink to &quot;防抖&quot;">​</a></h4><pre><code>/**
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
            timeout = setTimeout(() =&gt; {
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
</code></pre><h4 id="节流" tabindex="-1">节流 <a class="header-anchor" href="#节流" aria-label="Permalink to &quot;节流&quot;">​</a></h4><pre><code>/**
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

            if (now - previous &gt; wait) {
                func.apply(context, args);
                previous = now;
            }
        }else if(type===2){
            if (!timeout) {
                timeout = setTimeout(() =&gt; {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}
</code></pre><h4 id="节流调用快捷键" tabindex="-1">节流调用快捷键 <a class="header-anchor" href="#节流调用快捷键" aria-label="Permalink to &quot;节流调用快捷键&quot;">​</a></h4><pre><code>// 快捷键事件
document.addEventListener(&#39;keydown&#39;, TVWallOperationView.Events.addHotKey);
document.removeEventListener(&#39;keydown&#39;, TVWallOperationView.Events.addHotKey);
/**
 *@name: TVWallOperationView.Events.addHotKey
 *@description: 快捷键监听
 */
TVWallOperationView.Events.addHotKey = CommonJs.throttle((event) =&gt; {
	let e = event || window.event || arguments.callee.caller.arguments[0];
	let keyCode = e.keyCode || e.which || e.charCode;
	let ctrlKey = e.ctrlKey || e.metaKey;
	let value = &#39;&#39;;
	let item = {
		&#39;Ctrl&#39;: &#39;ctrl&#39;
	};
	//console.warn(&#39;--------------------e.key:&#39; + e.key + &#39;,keycode:&#39; + keyCode);
	//中文输入法，无效，退出
	if (keyCode == &#39;229&#39;) {
		return;
	}
	// 如果不在允许的键值
	if (
		!(keyCode &gt;= 48 &amp;&amp; keyCode &lt;= 57) &amp;&amp;
		!(keyCode &gt;= 65 &amp;&amp; keyCode &lt;= 90) &amp;&amp;
		!(keyCode &gt;= 112 &amp;&amp; keyCode &lt;= 122)) {
		return;
	}
	//如果是Ctrl键，则退出
	if (item[e.key] !== undefined) {
		return;
	}
	if (ctrlKey) {
		value += &#39;Ctrl + &#39;;
	}
	value += KEY_MAP[keyCode];
	if (TVWallOperationView.data.hotKeyList[value]) {
		console.warn(&#39;收到快捷键准备启动&#39; + TVWallOperationView.data.hotKeyList[value]);
		TVWallOperationView.Events.RunPrePlan(TVWallOperationView.data.hotKeyList[value]);
	}
}, 2000);
</code></pre><h4 id="计算字符串长度" tabindex="-1">计算字符串长度 <a class="header-anchor" href="#计算字符串长度" aria-label="Permalink to &quot;计算字符串长度&quot;">​</a></h4><pre><code>String.prototype.calcLenth = function() {
    var len = 0;
    for (var i=0; i&lt;this.length; i++) {
        if (this.charCodeAt(i)&gt;127 || this.charCodeAt(i)==94) {
            len += 2;
        } else {
            len ++;
        }
    }
    return len;
};
</code></pre><h4 id="时间格式化" tabindex="-1">时间格式化 <a class="header-anchor" href="#时间格式化" aria-label="Permalink to &quot;时间格式化&quot;">​</a></h4><pre><code>/**
 * 给日期添加Format方法
 * @param fmt {string} 例子&quot;yyyy-MM-dd hh:mm:ss&quot;
 * @returns {string} 例子&quot;2019-08-08 10:18:36&quot;
 * 使用 new Date().Format(&quot;yyyy-MM-dd hh:mm:ss&quot;)
 */
Date.prototype.Format = function (fmt) {
    var o = {
        &quot;M+&quot;: this.getMonth() + 1, //月份
        &quot;d+&quot;: this.getDate(), //日
        &quot;h+&quot;: this.getHours(), //小时
        &quot;m+&quot;: this.getMinutes(), //分
        &quot;s+&quot;: this.getSeconds(), //秒
        &quot;q+&quot;: Math.floor((this.getMonth() + 3) / 3), //季度
        &quot;S&quot;: this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + &quot;&quot;).substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp(&quot;(&quot; + k + &quot;)&quot;).test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ((&quot;00&quot; + o[k]).substr((&quot;&quot; + o[k]).length)));
    return fmt;
};
</code></pre><h4 id="时间操作" tabindex="-1">时间操作 <a class="header-anchor" href="#时间操作" aria-label="Permalink to &quot;时间操作&quot;">​</a></h4><pre><code>/**
 * @description: 按照&#39;xxxx-xx-xx xx:xx:xx&#39;的格式,时间格式化
 * @param {String}  当前时间戳
 * @param {String}  配置时间段
 */
function dateFormatter(timestamp, type) {
    //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let date = new Date(timestamp);
    Y = date.getFullYear() + &#39;-&#39;;
    M = (date.getMonth() + 1 &lt; 10 ? &#39;0&#39; + (date.getMonth() + 1) : date.getMonth() + 1) + &#39;-&#39;;
    D = (date.getDate() &lt; 10 ? &#39;0&#39; + date.getDate() : date.getDate()) + &#39; &#39;;
    h = (date.getHours() &lt; 10 ? &#39;0&#39; + date.getHours() : date.getHours()) + &#39;:&#39;;
    m = (date.getMinutes() &lt; 10 ? &#39;0&#39; + date.getMinutes() : date.getMinutes()) + &#39;:&#39;;
    s = (date.getSeconds() &lt; 10 ? &#39;0&#39; + date.getSeconds() : date.getSeconds());
    if (type == &#39;now&#39;) {
        // 当前时间
        return Y + M + D + h + m + s;
    } else if (type == &#39;today&#39;) {
        return {
            // 今天
            startTime: Y + M + D + &#39;00:00:00&#39;,
            endTime: Y + M + D + &#39;23:59:59&#39;
        };
    } else if (type == &#39;last-hour&#39;) {
        // 最近一个小时
        let newDate = new Date(timestamp - 1000 * 60 * 60);
        let newY = newDate.getFullYear() + &#39;-&#39;;
        let newM = (newDate.getMonth() + 1 &lt; 10 ? &#39;0&#39; + (newDate.getMonth() + 1) : newDate.getMonth() + 1) + &#39;-&#39;;
        let newD = newDate.getDate() + &#39; &#39;;
        let newh = newDate.getHours() + &#39;:&#39;;
        return {
            startTime: newY + newM + newD + newh + m + s,
            endTime: Y + M + D + h + m + s,
        }
    }
}
</code></pre><h4 id="计算时间差" tabindex="-1">计算时间差 <a class="header-anchor" href="#计算时间差" aria-label="Permalink to &quot;计算时间差&quot;">​</a></h4><pre><code>Common.prototype.calcInterval = function(startTime, endTime){
	function getTime(timeStr){
		return new Date(timeStr).getTime();
	}
	return parseInt((getTime(endTime)-getTime(startTime))/1000);
};
Common.prototype.calcNum = function(str){
	return (str&lt;10?&quot;0&quot;:&quot;&quot;)+str;
};
Common.prototype.calcIntervalTime = function(startTime, endTime){
	if (isNaN(Date.parse(startTime))||isNaN(Date.parse(endTime))) {
		return &#39;未知&#39;;
	}
	var time = this.calcInterval(startTime, endTime);
	var second = time%60;
	var minute = parseInt(time/60)%60;
	var hour = parseInt(parseInt(time/60)/60);
	return this.calcNum(hour)+&quot;:&quot;+this.calcNum(minute)+&quot;:&quot;+this.calcNum(second);
};
</code></pre><h4 id="截取url" tabindex="-1">截取url <a class="header-anchor" href="#截取url" aria-label="Permalink to &quot;截取url&quot;">​</a></h4><pre><code>Common.prototype.getValFromURL = function (key, urlSearch) {
	var currentPageVal = &#39;&#39;;
	urlSearch = urlSearch || location.search;
	var arr = urlSearch.split(&#39;&amp;&#39;);
	for (var i = 0, len = arr.length; i &lt; len; i++) {
		var item = arr[i];
		if (item.indexOf(key + &#39;=&#39;) &gt; -1) {
			currentPageVal = item.split(&#39;=&#39;)[1];
		}
	}
	return currentPageVal;
};
</code></pre><h4 id="定时器操作数组" tabindex="-1">定时器操作数组 <a class="header-anchor" href="#定时器操作数组" aria-label="Permalink to &quot;定时器操作数组&quot;">​</a></h4><pre><code>// 播放轮巡设备
VMFrame.Events.PlayTurningForWin = function (param, turnindex) {
	// 如果分屏数量大于4，切换辅码流
	let streamType = &#39;main&#39;;
	if (VMFrame.ConfigCanvasWinList.ConfigCanvasWin.length &gt; 4) {
		streamType = &#39;auxiliary&#39;;
	}
	// 发送播放请求
	VMFrame.Events.PlayRealVideoReq({
		cameraName: param.cameraList[turnindex].cameraName,
		playWinID: param.winIndex + &#39;&#39;,
		cameraID: param.cameraList[turnindex].cameraID,
		streamType: streamType,
		accessURL: param.cameraList[turnindex].cameraURL
	});
	// 定时循环调用	
	VMFrame.ConfigCanvasWinList.ConfigCanvasWin[param.winIndex - 1].isSetTimeOutValue = setTimeout(() =&gt; {
		// 重置循环
		if (++turnindex &gt;= param.cameraList.length) {
			turnindex = 0;
		}
		// 清空定时器
		clearTimeout(VMFrame.ConfigCanvasWinList.ConfigCanvasWin[param.winIndex - 1].isSetTimeOutValue);
		// 循环调用
		VMFrame.Events.PlayTurningForWin(param, turnindex);
	}, param.turningInterval * 1000);
}
</code></pre><h4 id="设置快捷键" tabindex="-1">设置快捷键 <a class="header-anchor" href="#设置快捷键" aria-label="Permalink to &quot;设置快捷键&quot;">​</a></h4><pre><code>// 键盘码
const KEY_MAP = {
// 0-9 48-57
48: &#39;0&#39;,49: &#39;1&#39;,50: &#39;2&#39;,51: &#39;3&#39;,52: &#39;4&#39;,53: &#39;5&#39;,54: &#39;6&#39;,55: &#39;7&#39;,56: &#39;8&#39;,57: &#39;9&#39;,
// A-Z 65-90 
65: &#39;A&#39;,66: &#39;B&#39;,67: &#39;C&#39;,68: &#39;D&#39;,69: &#39;E&#39;,70: &#39;F&#39;,71: &#39;G&#39;,72: &#39;H&#39;,73: &#39;I&#39;,74: &#39;J&#39;,75: &#39;K&#39;,76: &#39;L&#39;,77: &#39;M&#39;,78: &#39;N&#39;,79: &#39;O&#39;,80: &#39;P&#39;,81: &#39;Q&#39;,82: &#39;R&#39;,83: &#39;S&#39;,84: &#39;T&#39;,85: &#39;U&#39;,86: &#39;V&#39;,87: &#39;W&#39;,88: &#39;X&#39;,89: &#39;Y&#39;,90: &#39;Z&#39;,
//小键盘 0-9 96-105
96: &#39;0&#39;,97: &#39;1&#39;,98: &#39;2&#39;,99: &#39;3&#39;,100: &#39;4&#39;,101: &#39;5&#39;,102: &#39;6&#39;,103: &#39;7&#39;,104: &#39;8&#39;,105: &#39;9&#39;,
// F1-F11 112-122
112: &#39;F1&#39;,113: &#39;F2&#39;,114: &#39;F3&#39;,115: &#39;F4&#39;,116: &#39;F5&#39;,117: &#39;F6&#39;,118: &#39;F7&#39;,119: &#39;F8&#39;,120: &#39;F9&#39;,121: &#39;F10&#39;,122: &#39;F11&#39;
}
// 预案修改快捷键
VMFrame.Events.onPreplanChangeHotKey = function (event) {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	var keyCode = e.keyCode || e.which || e.charCode;
	var ctrlKey = e.ctrlKey || e.metaKey;
	var item = {
		&#39;Control&#39;: &#39;CTRL&#39;
	};
	var value = this.value;
	VMFrame.data.hotKeySetOverFlag = false;
	//检查是否是中文输入法模式
	if (keyCode == &#39;229&#39;) {
		$(this).blur();
		alert(&#39;请切换到英文输入法!&#39;);
		return;
	}
	//验证是否已有其他热键，或者改热键是否允许设置
	//设置热键
	//如果是控制键则继续等待，否则结束并取消焦点
	if (e.key in item) {
		value += item[e.key] + &#39; + &#39;;
		this.value = value;
	} else {
		let str = &#39;&#39;;
		for (let key in item) {
			if (value.indexOf(item[key]) &gt; -1) {
				str += item[key] + &#39; + &#39;;
			}
		}
		if (
			!(keyCode &gt;= 48 &amp;&amp; keyCode &lt;= 57) &amp;&amp;
			!(keyCode &gt;= 65 &amp;&amp; keyCode &lt;= 90) &amp;&amp;
			!(keyCode &gt;= 96 &amp;&amp; keyCode &lt;= 105) &amp;&amp;
			!(keyCode &gt;= 112 &amp;&amp; keyCode &lt;= 122)) {
			alert(&#39;不支持此快捷键，请重新设置.&#39;);
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
		console.log(&#39;已取消设置快捷键，需重新设置.&#39;);
		return;
	}
	// 取消设置
	if (this.value === &#39;&#39;) {
		this.value = VMFrame.data.oldhotKey;
	}
	this.placeholder = &#39;请设置快捷键...&#39;;
	// 检查设置情况
	VMFrame.data.newhotKey = this.value;
	VMFrame.Events.CheckPrePlanHotKey();
}
// 获得焦点，说明准备设置快捷键
VMFrame.Events.onFocus = function () {
	VMFrame.data.oldhotKey = this.value;
	this.value = &#39;&#39;;
	this.placeholder = &#39;正在设置快捷键...&#39;;
	// 设置当前选中的预案
	let index = $(&quot;#preplanTbody input&quot;).index(this);
	VMFrame.data.selectedHotKey = VMFrame.data.preplanList[index];
}
// 检查快捷键冲突
VMFrame.Events.CheckPrePlanHotKey = function () {
	// 如果快捷键未发生改变,清空数据
	if (VMFrame.data.oldhotKey === VMFrame.data.newhotKey) {
		VMFrame.data.oldhotKey = &#39;&#39;;
		VMFrame.data.newhotKey = &#39;&#39;;
		return;
	}
	// 如果发生改变,请求编辑
	let params = {
		method: &quot;PUT&quot;,
		id: VMFrame.data.selectedHotKey.id,
		planName: VMFrame.data.selectedHotKey.planName,
		startShortcut: VMFrame.data.newhotKey,
		splitType: VMFrame.data.selectedHotKey.splitType,
	};
	CommonJs.AJAX(&quot;/securitysystem/planCfg/plan.action&quot;, params, function (rsp) {
		if (rsp &amp;&amp; rsp.result &amp;&amp; rsp.result.code &amp;&amp; rsp.result.code === 201) {
			// 重新获取预案列表
			VMFrame.GetPrePlan();
			// 清空相关数据
			VMFrame.data.oldhotKey = &#39;&#39;;
			VMFrame.data.newhotKey = &#39;&#39;;
			VMFrame.data.selectedHotKey = null;
		} else {
			alert(rsp &amp;&amp; rsp.result &amp;&amp; rsp.result.message || &#39;编辑预案快捷键失败&#39;);
		}
	}, &quot;编辑预案快捷键&quot;);
}
</code></pre>`,106)]))}const p=e(o,[["render",d]]);export{h as __pageData,p as default};
