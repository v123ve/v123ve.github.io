import{_ as i,c as s,a3 as t,o as n}from"./chunks/framework.BaR4VHXY.js";const c=JSON.parse('{"title":"CSS常用操作","description":"","frontmatter":{"Created at":"2020-09-11T00:00:00.000Z","Last updated at":"2023-11-29T00:00:00.000Z","Source URL":"https://blog.csdn.net/weixin_39634194/article/details/119399278"},"headers":[],"relativePath":"zh-CN/工作笔记/CSS常用操作.md","filePath":"zh-CN/工作笔记/CSS常用操作.md","lastUpdated":null}'),e={name:"zh-CN/工作笔记/CSS常用操作.md"};function l(r,a,o,p,h,k){return n(),s("div",null,a[0]||(a[0]=[t(`<h1 id="css常用操作" tabindex="-1">CSS常用操作 <a class="header-anchor" href="#css常用操作" aria-label="Permalink to &quot;CSS常用操作&quot;">​</a></h1><h2 id="css常用操作-1" tabindex="-1">CSS常用操作 <a class="header-anchor" href="#css常用操作-1" aria-label="Permalink to &quot;CSS常用操作&quot;">​</a></h2><p><a href="https://alteredqualia.com/" target="_blank" rel="noreferrer">超酷炫前端页面</a></p><h5 id="在线引包" tabindex="-1">在线引包 <a class="header-anchor" href="#在线引包" aria-label="Permalink to &quot;在线引包&quot;">​</a></h5><pre><code>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;http://www.jeasyui.net/Public/js/easyui/themes/default/easyui.css&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;http://www.jeasyui.net/Public/js/easyui/themes/icon.css&quot;&gt;
&lt;script src=&quot;http://libs.baidu.com/jquery/1.11.3/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;http://www.jeasyui.net/Public/js/easyui/jquery.easyui.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdn.bootcss.com/lodash.js/4.17.11/lodash.min.js&quot;&gt;&lt;/script&gt;
</code></pre><h5 id="清除空行" tabindex="-1">清除空行 <a class="header-anchor" href="#清除空行" aria-label="Permalink to &quot;清除空行&quot;">​</a></h5><p><code>^\\s*\\n</code></p><h5 id="字数过多显示" tabindex="-1">字数过多显示 <a class="header-anchor" href="#字数过多显示" aria-label="Permalink to &quot;字数过多显示&quot;">​</a></h5><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> .title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        white-space</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nowrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        text-overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ellipsis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     .title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        word-break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">break-all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        text-overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ellipsis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-webkit-box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        // 打包时此属性为内联样式生效</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        -webkit-box-orient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">vertical</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        -webkit-line-clamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     style={{  &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-webkit-box-orient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vertical&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    .title:after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     margin-bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: linear-grandient(to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ....):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #### 居中显示</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    \`\`\`css</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    transform: translate(-50%, -50%);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     position: absolute;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     top: 50%;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     left: 50%;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     width: auto;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">     max-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 100%;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     height: auto;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">     max-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 100%;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     transform: translate(-50%,-50%);</span></span></code></pre></div><h4 id="文字描边" tabindex="-1">文字描边 <a class="header-anchor" href="#文字描边" aria-label="Permalink to &quot;文字描边&quot;">​</a></h4><pre><code>text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;
</code></pre><h4 id="伪类边框" tabindex="-1">伪类边框 <a class="header-anchor" href="#伪类边框" aria-label="Permalink to &quot;伪类边框&quot;">​</a></h4><pre><code>&amp;:after {
  content: &#39;&#39;;
  position: absolute;
  right: 25%;
  bottom: 0;
  margin-bottom: -7px;
  width: 50%;
  height: 3px;
  background: #334f89;
}
</code></pre><h5 id="自动旋转" tabindex="-1">自动旋转 <a class="header-anchor" href="#自动旋转" aria-label="Permalink to &quot;自动旋转&quot;">​</a></h5><pre><code>@keyframes loadingRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.rotateIcon {
  animation: loadingRotate 2s linear 0s infinite;
}
</code></pre><h5 id="强制输入数字" tabindex="-1">强制输入数字 <a class="header-anchor" href="#强制输入数字" aria-label="Permalink to &quot;强制输入数字&quot;">​</a></h5><pre><code>&lt;input type=&quot;text&quot; oninput=&quot;this.value=this.value.replace(/\\D|^0/g,&#39;&#39;)&quot; onafterpaste=&quot;this.value=this.value.replace(/\\D|^0/g,&#39;&#39;)&quot;&gt;


.attr(&#39;oninput&#39;, 
&#39;this.value=this.value.replace(/\\\\D|^0/g,&quot;&quot;)&#39;)
.attr(&#39;onafterpaste&#39;, 
&#39;this.value=this.value.replace(/\\\\\\\\D|^0/g,&quot;&quot;)&#39;)
</code></pre><h5 id="宽高自适应" tabindex="-1">宽高自适应 <a class="header-anchor" href="#宽高自适应" aria-label="Permalink to &quot;宽高自适应&quot;">​</a></h5><p>img</p><pre><code>object-fit: cover;
</code></pre><p>video</p><pre><code>object-fit: fill;
</code></pre><h5 id="svg修改颜色" tabindex="-1">svg修改颜色 <a class="header-anchor" href="#svg修改颜色" aria-label="Permalink to &quot;svg修改颜色&quot;">​</a></h5><pre><code>.svg { 
    filter: drop-shadow(100000px 0 0 #334f89);  
    transform: translate(-100000px);
}
</code></pre><h5 id="校验字符串长度" tabindex="-1">校验字符串长度 <a class="header-anchor" href="#校验字符串长度" aria-label="Permalink to &quot;校验字符串长度&quot;">​</a></h5><pre><code>checkLength = str =&gt; {
 let valueLength = 0;
 for (let i = 0; i &lt; str.length; i += 1) {
   if (str.charCodeAt(i) &gt; 127 || str.charCodeAt(i) === 94) {
  valueLength += 2;
   } else {
  valueLength += 1;
   }
 }
 return valueLength;
};
</code></pre><h5 id="边框重叠" tabindex="-1">边框重叠 <a class="header-anchor" href="#边框重叠" aria-label="Permalink to &quot;边框重叠&quot;">​</a></h5><p>// 横向、纵向</p><pre><code>margin: 0 0 -1px -1px;
margin: -1px 1px 0 0;
</code></pre><h5 id="css修改img" tabindex="-1">css修改img <a class="header-anchor" href="#css修改img" aria-label="Permalink to &quot;css修改img&quot;">​</a></h5><pre><code>img { 
    content:url(https://image.png);
}
</code></pre><h5 id="禁止文本选中" tabindex="-1">禁止文本选中 <a class="header-anchor" href="#禁止文本选中" aria-label="Permalink to &quot;禁止文本选中&quot;">​</a></h5><pre><code>-moz-user-select: none;
-webkit-user-select: none;
user-select: none;
</code></pre><h5 id="area去除框线" tabindex="-1">area去除框线 <a class="header-anchor" href="#area去除框线" aria-label="Permalink to &quot;area去除框线&quot;">​</a></h5><pre><code>outline: &#39;none&#39;
</code></pre><h5 id="背景渐变色及内发光" tabindex="-1">背景渐变色及内发光 <a class="header-anchor" href="#背景渐变色及内发光" aria-label="Permalink to &quot;背景渐变色及内发光&quot;">​</a></h5><p><a href="https://www.cnblogs.com/wuchuanlong/p/5980766.html" target="_blank" rel="noreferrer">css3 box-shadow阴影(外阴影与外发光)讲解</a> 内发光：水平阴影的位置 垂直阴影的位置 模糊距离 阴影的尺寸 阴影的颜色 将外部阴影 (outset) 改为内部阴影 box-shadow: h-shadow v-shadow blur spread color inset; box-shadow: 0 0 3px 2px rgba(13, 95, 250, 0.2), 0 0 3px 2px rgba(13, 95, 250, 0.2) inset; 渐变色： background: -webkit-linear-gradient( top,#0c264c,#375888,#0c264c ); border-image:linear-gradient(to right,#0a396c,#0f74cd,#8dd7f7,#0f74cd,#0a396c) 2 2; 对角渐变:</p><pre><code>.stars{
width: 500px;
height: 500px;
background: linear-gradient(right bottom,rgba(22,36,67,0.77),rgba(74,121,240,0.77));
background: -webkit-linear-gradient(right bottom,rgba(22,36,67,0.77),rgba(74,121,240,0.77));
background: -moz-linear-gradient(right bottom,rgba(22,36,67,0.77),rgba(74,121,240,0.77));
background: -o-linear-gradient(right bottom,rgba(22,36,67,0.77),rgba(74,121,240,0.77));
}
</code></pre><p>柔和红：background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%); 柔和蓝：background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);</p><h4 id="js遮罩转圈" tabindex="-1">js遮罩转圈 <a class="header-anchor" href="#js遮罩转圈" aria-label="Permalink to &quot;js遮罩转圈&quot;">​</a></h4><pre><code>    const loading = \`
        &lt;div style=&quot;position: absolute;width: 100%;height: 100%;top: 0;left: 0;background:black;-moz-opacity: 0.3;opacity:.30;filter: alpha(opacity=30);&quot;&gt;&lt;/div&gt;
        &lt;div style=&quot;position: absolute;width: 100%;height: 100%;top: 0;left: 0;&quot;&gt;
          &lt;div style=&quot;position: relative;width: 25%;height: 100%;top: 0;left: 0;margin: 0 auto;&quot;&gt;
            &lt;span
              style=&quot;display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(0); transform: rotate(0); animation-delay: .04s;&quot;&gt;&lt;/span&gt;
            &lt;span
              style=&quot;display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(45deg); transform: rotate(45deg); animation-delay: .19s;&quot;&gt;&lt;/span&gt;
            &lt;span
              style=&quot;display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(90deg); transform: rotate(90deg); animation-delay: .34s;&quot;&gt;&lt;/span&gt;
            &lt;span
              style=&quot;display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(135deg); transform: rotate(135deg); animation-delay: .49s;&quot;&gt;&lt;/span&gt;
            &lt;span
              style=&quot;display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(180deg); transform: rotate(180deg); animation-delay: .54s;&quot;&gt;&lt;/span&gt;
            &lt;span
              style=&quot;display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(225deg); transform: rotate(225deg); animation-delay: .69s;&quot;&gt;&lt;/span&gt;
            &lt;span
              style=&quot;display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(270deg); transform: rotate(270deg); animation-delay: .84s;&quot;&gt;&lt;/span&gt;
            &lt;span
              style=&quot;display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(315deg); transform: rotate(315deg); animation-delay: .99s;&quot;&gt;&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
    \`;
    const runkeyframes = \`
        @keyframes circle-opac {
          0% {
              opacity: .1;
          }
          100% {
              opacity: .9;
          }
        }
    \`;
    const style = document.createElement(&#39;style&#39;);
    style.type = &#39;text/css&#39;;
    style.innerHTML = runkeyframes;
    $(&quot;.searchbtn&quot;).css({
      &quot;position&quot;: &quot;relative&quot;,
      &quot;pointer-events&quot;: &quot;none&quot;
    }).append(style).append(loading);
    setTimeout(() =&gt; {
      $(&quot;.searchbtn&quot;).css({
        &quot;pointer-events&quot;: &quot;auto&quot;
      }).text(&quot;查看&quot;);
    }, 5000)
</code></pre>`,41)]))}const g=i(e,[["render",l]]);export{c as __pageData,g as default};
