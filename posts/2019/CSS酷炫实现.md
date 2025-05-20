---

Created at: 2020-09-11
Last updated at: 2020-09-11
tags: 
  - css

---

# CSS酷炫实现


## CSS酷炫实现

##### 加载状态

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="gbk2312">
      <title>粒子背景</title>
    </head>
    <style>
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
        content: '';
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
    </style>
    <body>
    <!-- 1 -->
    <div class="loader-line-bounce">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    <!-- 2 -->
    <div class="loading-pulse-w">
      <div class="loading-pulse"></div>
    </div>
    
    <!-- 3 -->
    <div class="loading-circle-w">
      <div class="loading-circle"></div>
    </div>
    
    <!-- 4 -->
    <div class="loader-circle-line-w">
      <div class="loader-circle-line">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    
    <!-- 5 -->
    <div class="loader-circle-opac-w">
      <div class="loader-circle-opac">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    
    <!-- 6 -->
    <div class="loading-circle2-w">
      <div class="loading-circle2"></div>
    </div>
    
    <!-- 7 -->
    <div class="loader-ripple-w">
      <div class="loader-ripple"></div>
      <div class="loader-ripple loader-ripple2"></div>
    </div>
    </body>
    </html>


##### 粒子投影

    <!doctype html>
    <html lang="en">
    	<head>
    		<meta charset="gbk2312">
    		<title>粒子背景</title>
    		<link rel="stylesheet" type="text/css" href="style.css" media="all">
    		<style>
    			html,
    			body {
    				font-size: 14px;
    				font-family: "微软雅黑", Helvetica, Tahoma, Arial, sans-serif;
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
    				content: "";
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
    		</style>
    	</head>
    	<body id="login-page">
    		<canvas width="1293" height="717"></canvas>
    		<script>
    			var canvas = document.querySelector('canvas'),
    				ctx = canvas.getContext('2d')
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
    				return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
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
    				for (i = 0; i < dots.nb; i++) {
    					dots.array.push(new Dot());
    				}
    			}
    			function moveDots() {
    				for (i = 0; i < dots.nb; i++) {
    					var dot = dots.array[i];
    					if (dot.y < 0 || dot.y > canvas.height) {
    						dot.vx = dot.vx;
    						dot.vy = -dot.vy;
    					} else if (dot.x < 0 || dot.x > canvas.width) {
    						dot.vx = -dot.vx;
    						dot.vy = dot.vy;
    					}
    					dot.x += dot.vx;
    					dot.y += dot.vy;
    				}
    			}
    			function connectDots() {
    				for (i = 0; i < dots.nb; i++) {
    					for (j = i; j < dots.nb; j++) {
    						i_dot = dots.array[i];
    						j_dot = dots.array[j];
    						if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance &&
    							(i_dot.y - j_dot.y) > -dots.distance) {
    							if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x -
    									mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
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
    				for (i = 0; i < dots.nb; i++) {
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
    			document.querySelector('canvas').addEventListener('mousemove', function(e) {
    				mousePosition.x = e.pageX;
    				mousePosition.y = e.pageY;
    			})
    			document.querySelector('canvas').addEventListener('mouseleave', function(e) {
    				mousePosition.x = canvas.width / 2;
    				mousePosition.y = canvas.height / 2;
    			})
    			createDots();
    			requestAnimationFrame(animateDots);
    		</script>
    	</body>
    </html>


##### 瀑布文字

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="gbk2312">
      <title>粒子背景</title>
    </head>
    <body>
    <canvas id="canvas111" height="947" width="1920"></canvas>
    <script>
      function init() {
        cvs.height = window.innerHeight, cvs.width = window.innerWidth;
        var t = cvs.width / fontSize;
        charSet = 'W I S H 3 D E A R T H', charSet = charSet.split('');
        for (var n = 0; t > n; n++) drops[n] = Math.floor(Math.random() * cvs.height)
      }
    
      function rain() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)', ctx.fillRect(0, 0, cvs.width, cvs.height);
        for (var t = 0; t < drops.length; t++) {
          var n = charSet[Math.floor(Math.random() * charSet.length)];
          ctx.fillStyle = altiColor(), ctx.fillText(n, t * fontSize, drops[t] * fontSize), Math.random() > 0.99 && (drops[t] = 0), drops[t]++
        }
      }
    
      function altiColor() {
        var t = ['#FFF', '#69A3D5'];
        return t[Math.floor(3 * Math.random())]
      }
    
      var cvs, ctx, charSet, drops = [], font = 'arial',
        fontSize = 10;
      window.onload = function () {
        cvs = document.getElementById('canvas111');
        ctx = cvs.getContext('2d');
        ctx.font = fontSize + 'px ' + font, init(), setInterval(rain, 40), window.addEventListener('resize', function (t) {
          init()
        })
      }
    </script>
    </body>
    </html>

