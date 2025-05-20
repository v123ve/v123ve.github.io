import{_ as s,c as a,a3 as i,o as e}from"./chunks/framework.BaR4VHXY.js";const d=JSON.parse('{"title":"easy-ui常用操作","description":"","frontmatter":{"Created at":"2021-04-10T00:00:00.000Z","Last updated at":"2021-06-16T00:00:00.000Z","tags":["easyui"]},"headers":[],"relativePath":"zh-CN/工作笔记/easy-ui常用操作.md","filePath":"zh-CN/工作笔记/easy-ui常用操作.md","lastUpdated":null}'),n={name:"zh-CN/工作笔记/easy-ui常用操作.md"};function l(r,t,p,h,o,k){return e(),a("div",null,t[0]||(t[0]=[i(`<h1 id="easy-ui常用操作" tabindex="-1">easy-ui常用操作 <a class="header-anchor" href="#easy-ui常用操作" aria-label="Permalink to &quot;easy-ui常用操作&quot;">​</a></h1><h4 id="easy-ui常用操作-1" tabindex="-1">easy-ui常用操作 <a class="header-anchor" href="#easy-ui常用操作-1" aria-label="Permalink to &quot;easy-ui常用操作&quot;">​</a></h4><ol><li>datagrid内容显示不完用省略号代替,并设置title悬浮显示全部内容</li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    .datagrid-cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.datagrid-cell-group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.datagrid-header-rownumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.datagrid-cell-rownumber</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        text-overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ellipsis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    formatter: function (value, row, index) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        return &#39;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &#39;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><ol start="2"><li><p>输入框最大长度限制及限定只能输入及复制数字</p><p>// 加载输入数字     $(&quot;#pollingInterval&quot;).parent().find(&quot;input&quot;) .attr(&quot;MaxLength&quot;, PollingConfiguration.data.maxLenth) .attr(&#39;oninput&#39;,&#39;this.value=this.value.replace(/\\D|^0/g,&quot;&quot;)&#39;) .attr(&#39;onafterpaste&#39;,&#39;this.value=this.value.replace(/\\\\D|^0/g,&quot;&quot;)&#39;); // 时间框样式 $(&#39;#dataSourceTimeIpt&#39;).timespinner({ editable: true, showSeconds: true, value: &#39;00:00:00&#39;, formatter: function (date) { if (!date) { return &#39;00:00:00&#39;; } let hours = date.getHours(); let minutes = date.getMinutes(); let seconds = date.getSeconds(); if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) { return &#39;00:00:00&#39;; } let tt = [formatN(hours), formatN(minutes), formatN(seconds)]; return tt.join(&quot;😊;</p><pre><code>         function formatN(value) {
             return (value &lt; 10 ? &#39;0&#39; : &#39;&#39;) + value;
         }
     },
     onChange: function () {
         $(&#39;#connectionInformationSave&#39;).removeClass(&#39;txtButtonBan&#39;);
         $(&#39;#passParametersSave&#39;).removeClass(&#39;txtButtonBan&#39;);
     },
 }).parent().find(&quot;input&quot;).attr(&quot;MaxLength&quot;, 8);
</code></pre></li><li><p>去除行选中</p><p>onClickRow: function (rowIndex, rowData) {      $(this).datagrid(&#39;unselectRow&#39;, rowIndex); }</p></li><li><p>获取树节点的层级</p><p>getLevel:function(target){ var l = $(target).parentsUntil(&quot;ul.tree&quot;,&quot;ul&quot;); return l.length+1; } var lv =  $().tree(&quot;getLevel&quot;,node.target);</p></li></ol><p>将节点变为叶子节点</p><pre><code>$favoritesTree.tree(&#39;append&#39;, {
	parent: target,
	data: [
		{
			&quot;id&quot;: -2,
			&quot;text&quot;: &quot;&quot;,
			&quot;iconCls&quot;: &quot;tree-folder&quot;,
			&quot;data&quot;: {
				id: -2,
			},
			&quot;children&quot;: []
		}
	]
});
$favoritesTree.tree(&#39;remove&#39;, $favoritesTree.tree(&#39;find&#39;, -2).target);
</code></pre>`,7)]))}const E=s(n,[["render",l]]);export{d as __pageData,E as default};
