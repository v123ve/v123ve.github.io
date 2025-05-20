import{_ as n,c as a,a3 as e,o as i}from"./chunks/framework.BaR4VHXY.js";const d=JSON.parse('{"title":"向量叉乘","description":"","frontmatter":{"Created at":"2020-12-08T00:00:00.000Z","Last updated at":"2021-03-20T00:00:00.000Z","tags":["canvas"]},"headers":[],"relativePath":"zh-CN/工作笔记/向量叉乘.md","filePath":"zh-CN/工作笔记/向量叉乘.md","lastUpdated":null}'),o={name:"zh-CN/工作笔记/向量叉乘.md"};function c(r,t,x,l,h,s){return i(),a("div",null,t[0]||(t[0]=[e(`<h1 id="向量叉乘" tabindex="-1">向量叉乘 <a class="header-anchor" href="#向量叉乘" aria-label="Permalink to &quot;向量叉乘&quot;">​</a></h1><h4 id="向量叉乘-1" tabindex="-1">向量叉乘 <a class="header-anchor" href="#向量叉乘-1" aria-label="Permalink to &quot;向量叉乘&quot;">​</a></h4><pre><code>// 沿着三角形的边按顺时针方向走，判断该点是否在每条边的右边（这可以通过叉乘判断），
// 如果该点在每条边的右边，则在三角形内，否则在三角形外。
// 如果此三组的向量叉乘的结果都是同号的（或都正，或都负），即方向相同的，则说明点M在三角形每条边的同侧，即内部。否则必在外部
// 向量是终点坐标减去起点坐标
function vector(a, b) {
    return {
        x: b.x - a.x,
        y: b.y - a.y
    };
}

// 向量的叉乘
function vectorPro(v1, v2) {
    return v1.x * v2.y - v1.y * v2.x;
}

// 用位运算高效判断符号相同
function sameSign(a, b) {
    return (a ^ b) &gt;= 0;
}

// 判断点是否在三角形内
function isPointInTranjgle(p, a, b, c) {
    var pa = vector(p, a);
    var pb = vector(p, b);
    var pc = vector(p, c);

    var t1 = vectorPro(pa, pb);
    var t2 = vectorPro(pb, pc);
    var t3 = vectorPro(pc, pa);

    return sameSign(t1, t2) &amp;&amp; sameSign(t2, t3);
}
</code></pre><h4 id="绘制三角" tabindex="-1">绘制三角 <a class="header-anchor" href="#绘制三角" aria-label="Permalink to &quot;绘制三角&quot;">​</a></h4><pre><code>  // 判断点是否在三角形内
  pointInTriangle = (x0, y0, x1, y1, x2, y2, x3, y3) =&gt; {
    const divisor = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);
    const a = ((y2 - y3) * (x0 - x3) + (x3 - x2) * (y0 - y3)) / divisor;
    const b = ((y3 - y1) * (x0 - x3) + (x1 - x3) * (y0 - y3)) / divisor;
    const c = 1 - a - b;
    return a &gt;= 0 &amp;&amp; a &lt;= 1 &amp;&amp; b &gt;= 0 &amp;&amp; b &lt;= 1 &amp;&amp; c &gt;= 0 &amp;&amp; c &lt;= 1;
  };

  // 绘制画布区域
  pointCloudMirrorCanvas = () =&gt; {
    if (this.cloudMirrorRef) {
      const maxWidth = this.cloudMirrorRef.current.clientWidth;
      const maxHeight = this.cloudMirrorRef.current.clientHeight;
      console.warn(this.cloudMirrorRef.current);
      const canvas = document.getElementById(&#39;cloudMirrorCanvas&#39;);
      canvas.setAttribute(&#39;width&#39;, maxWidth);
      canvas.setAttribute(&#39;height&#39;, maxHeight);
      if (canvas.getContext) {
        const ctx = canvas.getContext(&#39;2d&#39;);
        // 绘制 Top 区域
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(maxWidth, 0);
        ctx.lineTo(maxWidth / 2, maxHeight / 2);
        ctx.closePath();
        ctx.fillStyle = &#39;blue&#39;;
        ctx.fill();
        // 绘制 Right 区域
        ctx.beginPath();
        ctx.moveTo(maxWidth, 0);
        ctx.lineTo(maxWidth, maxHeight);
        ctx.lineTo(maxWidth / 2, maxHeight / 2);
        ctx.closePath();
        ctx.fillStyle = &#39;red&#39;;
        ctx.fill();
        // 绘制 Bottom 区域
        ctx.beginPath();
        ctx.moveTo(maxWidth, maxHeight);
        ctx.lineTo(0, maxHeight);
        ctx.lineTo(maxWidth / 2, maxHeight / 2);
        ctx.closePath();
        ctx.fillStyle = &#39;green&#39;;
        ctx.fill();
        // 绘制 Left 区域
        ctx.beginPath();
        ctx.moveTo(0, maxHeight);
        ctx.lineTo(0, 0);
        ctx.lineTo(maxWidth / 2, maxHeight / 2);
        ctx.closePath();
        ctx.fillStyle = &#39;black&#39;;
        ctx.fill();
      }
      canvas.addEventListener(&#39;click&#39;, e =&gt; {
        const x = e.offsetX;
        const y = e.offsetY;
        // 判断是否在Top区域
        if (this.pointInTriangle(x, y, 0, 0, maxWidth, 0, maxWidth / 2, maxHeight / 2)) {
          console.warn(&#39;在Top内&#39;);
        }
        // 判断是否在Right区域
        if (this.pointInTriangle(x, y, maxWidth, 0, maxWidth, maxHeight, maxWidth / 2, maxHeight / 2)) {
          console.warn(&#39;在Right内&#39;);
        }
        // 判断是否在Bottom区域
        if (this.pointInTriangle(x, y, maxWidth, maxHeight, 0, maxHeight, maxWidth / 2, maxHeight / 2)) {
          console.warn(&#39;在Bottom内&#39;);
        }
        // 判断是否在Left区域
        if (this.pointInTriangle(x, y, 0, maxHeight, 0, 0, maxWidth / 2, maxHeight / 2)) {
          console.warn(&#39;在Left内&#39;);
        }
      })
    }
  }
</code></pre>`,5)]))}const p=n(o,[["render",c]]);export{d as __pageData,p as default};
