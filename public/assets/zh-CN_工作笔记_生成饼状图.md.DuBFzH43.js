import{_ as t,c as e,a3 as r,o as i}from"./chunks/framework.BaR4VHXY.js";const m=JSON.parse('{"title":"生成饼状图","description":"","frontmatter":{"Created at":"2021-04-10T00:00:00.000Z","Last updated at":"2021-04-10T00:00:00.000Z","tags":["图表"]},"headers":[],"relativePath":"zh-CN/工作笔记/生成饼状图.md","filePath":"zh-CN/工作笔记/生成饼状图.md","lastUpdated":null}'),n={name:"zh-CN/工作笔记/生成饼状图.md"};function s(o,a,d,l,c,p){return i(),e("div",null,a[0]||(a[0]=[r(`<h1 id="生成饼状图" tabindex="-1">生成饼状图 <a class="header-anchor" href="#生成饼状图" aria-label="Permalink to &quot;生成饼状图&quot;">​</a></h1><h4 id="生成饼状图-1" tabindex="-1">生成饼状图 <a class="header-anchor" href="#生成饼状图-1" aria-label="Permalink to &quot;生成饼状图&quot;">​</a></h4><pre><code>  .raidDetailsPie {
	display: flex;
</code></pre><p>​ background-color: #162646; border-radius: 54px;</p><pre><code>	.raidDetailsPieLeft {
</code></pre><p>​ <br> background-color: #162646; border-radius: 54px 0 0 54px; transform: rotate(180deg); transform-origin: right; }</p><pre><code>	.raidDetailsPieRight {

	  background-color: #375fab;
	  border-radius: 0 54px 54px 0;
	}
  }


&lt;div className={classNames(styles.raidDetailsPie)}&gt;
  &lt;div className={classNames(styles.raidDetailsPieLeft)} style={pieChartStyle}&gt;&lt;/div&gt;
  &lt;div className={classNames(styles.raidDetailsPieRight)}&gt;&lt;/div&gt;
&lt;/div&gt;


// 图表样式
let pieChartStyle = {
  // 占比小于50%
  transform: \`rotate(\${180 + 1.8 * capacityRatio}deg)\`,
}
// 占比大于50%
if (capacityRatio &gt; 50) {
  pieChartStyle = {
	backgroundColor: &#39;#375fab&#39;,
	transform: \`rotate(\${-180 + 1.8 * capacityRatio}deg)\`,
  }
}
</code></pre>`,7)]))}const f=t(n,[["render",s]]);export{m as __pageData,f as default};
