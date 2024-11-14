import{_ as n,c as o,a3 as a,o as e}from"./chunks/framework.BaR4VHXY.js";const h=JSON.parse('{"title":"CSS酷炫实现","description":"","frontmatter":{"Created at":"2020-09-11T00:00:00.000Z","Last updated at":"2020-09-11T00:00:00.000Z","tags":["css"]},"headers":[],"relativePath":"zh-CN/工作笔记/CSS酷炫实现.md","filePath":"zh-CN/工作笔记/CSS酷炫实现.md","lastUpdated":null}'),i={name:"zh-CN/工作笔记/CSS酷炫实现.md"};function r(l,t,s,d,c,g){return e(),o("div",null,t[0]||(t[0]=[a(`<h1 id="css酷炫实现" tabindex="-1">CSS酷炫实现 <a class="header-anchor" href="#css酷炫实现" aria-label="Permalink to &quot;CSS酷炫实现&quot;">​</a></h1><h2 id="css酷炫实现-1" tabindex="-1">CSS酷炫实现 <a class="header-anchor" href="#css酷炫实现-1" aria-label="Permalink to &quot;CSS酷炫实现&quot;">​</a></h2><h5 id="加载状态" tabindex="-1">加载状态 <a class="header-anchor" href="#加载状态" aria-label="Permalink to &quot;加载状态&quot;">​</a></h5><pre><code>&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;gbk2312&quot;&gt;
  &lt;title&gt;粒子背景&lt;/title&gt;
&lt;/head&gt;
&lt;style&gt;
  body {
    background: #eee;
  }

  /* 1 ************************************************ */
  /* loader-line-bounce */
  .loader-line-bounce {
    width: 70px;
    height: 70px;
    font-size: 0;
    text-align: center;
    position: fixed;
    top: 0;
    /* right: 0; */
    bottom: 0;
    left: 10px;
    margin: auto;
  }

  .loader-line-bounce span {
    width: 4px;
    height: 28px;
    background: #1abc9c;
    border-radius: 50px;
    display: inline-block;
    margin-right: 7px;
    -webkit-animation: line-bounce 1s ease infinite;
    animation: line-bounce 1s ease infinite;
  }

  .loader-line-bounce span:nth-child(1) {
    -webkit-animation-delay: -.65s;
    animation-delay: -.65s;
  }

  .loader-line-bounce span:nth-child(2) {
    -webkit-animation-delay: -.78s;
    animation-delay: -.78s;
  }

  .loader-line-bounce span:nth-child(3) {
    -webkit-animation-delay: -.91s;
    animation-delay: -.91s;
  }

  .loader-line-bounce span:nth-child(4) {
    -webkit-animation-delay: -.78s;
    animation-delay: -78s;
  }

  .loader-line-bounce span:nth-child(5) {
    -webkit-animation-delay: -.65s;
    animation-delay: -.65s;
    margin-right: 0;
  }

  @keyframes line-bounce {
    0% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
    50% {
      -webkit-transform: scaleY(.2);
      transform: scaleY(.2);
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }

  @-webkit-keyframes line-bounce {
    0% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
    50% {
      -webkit-transform: scaleY(.2);
      transform: scaleY(.2);
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }

  /** 2 ******************************************************/

  /* loading-pulse */
  .loading-pulse-w {
    position: fixed;
    width: 60px;
    height: 60px;
    top: 0;
    /* right: 0; */
    bottom: 0;
    left: 70px;
    z-index: 10;
    margin: auto;
  }

  .loading-pulse {
    width: 6px;
    height: 24px;
    background: rgba(255, 255, 255, 0.2);
    position: relative;
    left: 26px;
    -webkit-animation: pulse .75s .25s infinite;
    animation: pulse .75s .25s infinite;
  }

  .loading-pulse:before,
  .loading-pulse:after {
    content: &#39;&#39;;
    display: block;
    position: absolute;
    height: 16px;
    width: 6px;
    background: rgba(255, 255, 255, 0.2);
    top: 5px;
    -webkit-animation: pulse .75s infinite;
    animation: pulse .75s infinite;
  }

  .loading-pulse:before {
    left: -12px;
  }

  .loading-pulse:after {
    left: 12px;
    -webkit-animation-delay: 500ms;
    animation-delay: 500ms;
  }

  @-webkit-keyframes pulse {
    50% {
      background: #fff;
    }
  }

  @keyframes pulse {
    50% {
      background: #fff;
    }
  }

  /**** 3 *******************************************************/

  /* loading-circle */
  .loading-circle-w {
    position: fixed;
    width: 60px;
    height: 60px;
    text-align: center;
    top: 0;
    /* right: 0; */
    bottom: 0;
    left: 110px;
    z-index: 10;
    margin: auto;
  }

  .loading-circle {
    display: inline-block;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border-radius: 55%;
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-top-color: #fff;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  /**** 4 ********************************************************/

  /* loader-circle-line */
  .loader-circle-line-w {
    position: fixed;
    width: 60px;
    height: 60px;
    top: 0;
    /* right: 0; */
    bottom: 0;
    left: 150px;
    z-index: 10;
    margin: auto;
  }

  .loader-circle-line {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    position: relative;
    -webkit-animation: circle-line 1.5s linear infinite;
    animation: circle-line 1.5s linear infinite;
  }

  .loader-circle-line span {
    display: block;
    width: 12px;
    height: 4px;
    border-radius: 4px 0 0 4px;
    background: #1abc9c;
    transform-origin: 165% 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 2;
  }

  .loader-circle-line span:nth-child(1) {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  .loader-circle-line span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .loader-circle-line span:nth-child(3) {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .loader-circle-line span:nth-child(4) {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  .loader-circle-line span:nth-child(5) {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .loader-circle-line span:nth-child(6) {
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg);
  }

  .loader-circle-line span:nth-child(7) {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  .loader-circle-line span:nth-child(8) {
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
  }

  @keyframes circle-line {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes circle-line {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  /***** 5 ****************************************************/

  /* loader-circle-opac */
  .loader-circle-opac-w {
    position: fixed;
    width: 60px;
    height: 60px;
    top: 0;
    /* right: 0; */
    bottom: 0;
    left: 200px;
    z-index: 10;
    margin: auto;
  }

  .loader-circle-opac {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    position: relative;
  }

  .loader-circle-opac span {
    display: block;
    width: 12px;
    height: 4px;
    border-radius: 4px 0 0 4px;
    background: #1abc9c;
    transform-origin: 165% 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 2;
    -webkit-animation: circle-opac 1s linear infinite;
    animation: circle-opac 1s linear infinite;
  }

  .loader-circle-opac span:nth-child(1) {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    animation-delay: .04s;
  }

  .loader-circle-opac span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    animation-delay: .19s;
  }

  .loader-circle-opac span:nth-child(3) {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    animation-delay: .34s;
  }

  .loader-circle-opac span:nth-child(4) {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    animation-delay: .49s;
  }

  .loader-circle-opac span:nth-child(5) {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    animation-delay: .54s;
  }

  .loader-circle-opac span:nth-child(6) {
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg);
    animation-delay: .69s;
  }

  .loader-circle-opac span:nth-child(7) {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
    animation-delay: .84s;
  }

  .loader-circle-opac span:nth-child(8) {
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
    animation-delay: .99s;
  }

  @keyframes circle-opac {
    0% {
      opacity: .1;
    }
    100% {
      opacity: .9;
    }
  }

  /* 6 **************************************************** */

  /* loading-circle2 */
  .loading-circle2-w {
    position: fixed;
    width: 60px;
    height: 60px;
    text-align: center;
    top: 0;
    /* right: 0; */
    bottom: 0;
    left: 250px;
    z-index: 10;
    margin: auto;
  }

  .loading-circle2 {
    width: 34px;
    height: 34px;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 55%;
    border: 1px solid #dadbdc;
    border-top-color: #0c9;
    -webkit-animation: spin2 1s infinite;
    animation: spin2 1s infinite;
  }

  @-webkit-keyframes spin2 {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin2 {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  /* 7 ************************************************** */

  .loader-ripple-w {
    width: 100px;
    height: 100px;
    background: #777;
    pointer-events: none;
    position: fixed;
    top: 0;
    /* right: 0; */
    bottom: 0;
    left: 310px;
    z-index: 214748;
    margin: auto;
  }

  .loader-ripple {
    width: 100px;
    height: 100px;
    border-radius: 55%;
    background-color: #fff;
    opacity: .4;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale(0);
    -webkit-animation: ripple 1.5s ease-out infinite;
    animation: ripple 1.5s ease-out infinite;
  }

  .loader-ripple2 {
    -webkit-animation-delay: -.35s;
    animation-delay: -.35s;
  }

  @-webkit-keyframes ripple {
    to {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes ripple {
    to {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }
&lt;/style&gt;
&lt;body&gt;
&lt;!-- 1 --&gt;
&lt;div class=&quot;loader-line-bounce&quot;&gt;
  &lt;span&gt;&lt;/span&gt;
  &lt;span&gt;&lt;/span&gt;
  &lt;span&gt;&lt;/span&gt;
  &lt;span&gt;&lt;/span&gt;
  &lt;span&gt;&lt;/span&gt;
&lt;/div&gt;

&lt;!-- 2 --&gt;
&lt;div class=&quot;loading-pulse-w&quot;&gt;
  &lt;div class=&quot;loading-pulse&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- 3 --&gt;
&lt;div class=&quot;loading-circle-w&quot;&gt;
  &lt;div class=&quot;loading-circle&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- 4 --&gt;
&lt;div class=&quot;loader-circle-line-w&quot;&gt;
  &lt;div class=&quot;loader-circle-line&quot;&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- 5 --&gt;
&lt;div class=&quot;loader-circle-opac-w&quot;&gt;
  &lt;div class=&quot;loader-circle-opac&quot;&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- 6 --&gt;
&lt;div class=&quot;loading-circle2-w&quot;&gt;
  &lt;div class=&quot;loading-circle2&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- 7 --&gt;
&lt;div class=&quot;loader-ripple-w&quot;&gt;
  &lt;div class=&quot;loader-ripple&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;loader-ripple loader-ripple2&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><h5 id="粒子投影" tabindex="-1">粒子投影 <a class="header-anchor" href="#粒子投影" aria-label="Permalink to &quot;粒子投影&quot;">​</a></h5><pre><code>&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
	&lt;head&gt;
		&lt;meta charset=&quot;gbk2312&quot;&gt;
		&lt;title&gt;粒子背景&lt;/title&gt;
		&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot; media=&quot;all&quot;&gt;
		&lt;style&gt;
			html,
			body {
				font-size: 14px;
				font-family: &quot;微软雅黑&quot;, Helvetica, Tahoma, Arial, sans-serif;
				color: #000;
				background-color: #30333F;
				margin: 0;
				padding: 0;
			}
			img {
				border: 0;
			}
			.cf:before,
			.cf:after {
				display: table;
				content: &quot;&quot;;
			}
			.cf:after {
				clear: both;
			}
			.cf {
				*zoom: 1;
			}
			canvas {
				position: fixed;
				top: 0px;
			}
		&lt;/style&gt;
	&lt;/head&gt;
	&lt;body id=&quot;login-page&quot;&gt;
		&lt;canvas width=&quot;1293&quot; height=&quot;717&quot;&gt;&lt;/canvas&gt;
		&lt;script&gt;
			var canvas = document.querySelector(&#39;canvas&#39;),
				ctx = canvas.getContext(&#39;2d&#39;)
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			ctx.lineWidth = .3;
			ctx.strokeStyle = (new Color(150)).style;
			var mousePosition = {
				x: 30 * canvas.width / 100,
				y: 30 * canvas.height / 100
			};
			var dots = {
				nb: 750,
				distance: 50,
				d_radius: 100,
				array: []
			};
			function colorValue(min) {
				return Math.floor(Math.random() * 255 + min);
			}
			function createColorStyle(r, g, b) {
				return &#39;rgba(&#39; + r + &#39;,&#39; + g + &#39;,&#39; + b + &#39;, 0.8)&#39;;
			}
			function mixComponents(comp1, weight1, comp2, weight2) {
				return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
			}
			function averageColorStyles(dot1, dot2) {
				var color1 = dot1.color,
					color2 = dot2.color;
				var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
					g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
					b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
				return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
			}
			function Color(min) {
				min = min || 0;
				this.r = colorValue(min);
				this.g = colorValue(min);
				this.b = colorValue(min);
				this.style = createColorStyle(this.r, this.g, this.b);
			}
			function Dot() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				this.vx = -.5 + Math.random();
				this.vy = -.5 + Math.random();
				this.radius = Math.random() * 2;
				this.color = new Color();
			}
			Dot.prototype = {
				draw: function() {
					ctx.beginPath();
					ctx.fillStyle = this.color.style;
					ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
					ctx.fill();
				}
			};
			function createDots() {
				for (i = 0; i &lt; dots.nb; i++) {
					dots.array.push(new Dot());
				}
			}
			function moveDots() {
				for (i = 0; i &lt; dots.nb; i++) {
					var dot = dots.array[i];
					if (dot.y &lt; 0 || dot.y &gt; canvas.height) {
						dot.vx = dot.vx;
						dot.vy = -dot.vy;
					} else if (dot.x &lt; 0 || dot.x &gt; canvas.width) {
						dot.vx = -dot.vx;
						dot.vy = dot.vy;
					}
					dot.x += dot.vx;
					dot.y += dot.vy;
				}
			}
			function connectDots() {
				for (i = 0; i &lt; dots.nb; i++) {
					for (j = i; j &lt; dots.nb; j++) {
						i_dot = dots.array[i];
						j_dot = dots.array[j];
						if ((i_dot.x - j_dot.x) &lt; dots.distance &amp;&amp; (i_dot.y - j_dot.y) &lt; dots.distance &amp;&amp; (i_dot.x - j_dot.x) &gt; -dots.distance &amp;&amp;
							(i_dot.y - j_dot.y) &gt; -dots.distance) {
							if ((i_dot.x - mousePosition.x) &lt; dots.d_radius &amp;&amp; (i_dot.y - mousePosition.y) &lt; dots.d_radius &amp;&amp; (i_dot.x -
									mousePosition.x) &gt; -dots.d_radius &amp;&amp; (i_dot.y - mousePosition.y) &gt; -dots.d_radius) {
								ctx.beginPath();
								ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
								ctx.moveTo(i_dot.x, i_dot.y);
								ctx.lineTo(j_dot.x, j_dot.y);
								ctx.stroke();
								ctx.closePath();
							}
						}
					}
				}
			}
			function drawDots() {
				for (i = 0; i &lt; dots.nb; i++) {
					var dot = dots.array[i];
					dot.draw();
				}
			}
			function animateDots() {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				moveDots();
				connectDots();
				drawDots();
				requestAnimationFrame(animateDots);
			}
			document.querySelector(&#39;canvas&#39;).addEventListener(&#39;mousemove&#39;, function(e) {
				mousePosition.x = e.pageX;
				mousePosition.y = e.pageY;
			})
			document.querySelector(&#39;canvas&#39;).addEventListener(&#39;mouseleave&#39;, function(e) {
				mousePosition.x = canvas.width / 2;
				mousePosition.y = canvas.height / 2;
			})
			createDots();
			requestAnimationFrame(animateDots);
		&lt;/script&gt;
	&lt;/body&gt;
&lt;/html&gt;
</code></pre><h5 id="瀑布文字" tabindex="-1">瀑布文字 <a class="header-anchor" href="#瀑布文字" aria-label="Permalink to &quot;瀑布文字&quot;">​</a></h5><pre><code>&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;gbk2312&quot;&gt;
  &lt;title&gt;粒子背景&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;canvas id=&quot;canvas111&quot; height=&quot;947&quot; width=&quot;1920&quot;&gt;&lt;/canvas&gt;
&lt;script&gt;
  function init() {
    cvs.height = window.innerHeight, cvs.width = window.innerWidth;
    var t = cvs.width / fontSize;
    charSet = &#39;W I S H 3 D E A R T H&#39;, charSet = charSet.split(&#39;&#39;);
    for (var n = 0; t &gt; n; n++) drops[n] = Math.floor(Math.random() * cvs.height)
  }

  function rain() {
    ctx.fillStyle = &#39;rgba(0, 0, 0, 0.05)&#39;, ctx.fillRect(0, 0, cvs.width, cvs.height);
    for (var t = 0; t &lt; drops.length; t++) {
      var n = charSet[Math.floor(Math.random() * charSet.length)];
      ctx.fillStyle = altiColor(), ctx.fillText(n, t * fontSize, drops[t] * fontSize), Math.random() &gt; 0.99 &amp;&amp; (drops[t] = 0), drops[t]++
    }
  }

  function altiColor() {
    var t = [&#39;#FFF&#39;, &#39;#69A3D5&#39;];
    return t[Math.floor(3 * Math.random())]
  }

  var cvs, ctx, charSet, drops = [], font = &#39;arial&#39;,
    fontSize = 10;
  window.onload = function () {
    cvs = document.getElementById(&#39;canvas111&#39;);
    ctx = cvs.getContext(&#39;2d&#39;);
    ctx.font = fontSize + &#39;px &#39; + font, init(), setInterval(rain, 40), window.addEventListener(&#39;resize&#39;, function (t) {
      init()
    })
  }
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>`,8)]))}const m=n(i,[["render",r]]);export{h as __pageData,m as default};
