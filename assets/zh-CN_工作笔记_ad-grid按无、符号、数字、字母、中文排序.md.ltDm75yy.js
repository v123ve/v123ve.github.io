import{_ as a,c as t,a3 as r,o as n}from"./chunks/framework.BaR4VHXY.js";const f=JSON.parse('{"title":"ad-grid按无、符号、数字、字母、中文排序","description":"","frontmatter":{"Created at":"2021-04-10T00:00:00.000Z","Last updated at":"2022-09-28T00:00:00.000Z","Source URL":"https://www.ag-grid.com/javascript-data-grid/row-sorting/#sorting-api","tags":["AgGrid","滚动"]},"headers":[],"relativePath":"zh-CN/工作笔记/ad-grid按无、符号、数字、字母、中文排序.md","filePath":"zh-CN/工作笔记/ad-grid按无、符号、数字、字母、中文排序.md","lastUpdated":null}'),i={name:"zh-CN/工作笔记/ad-grid按无、符号、数字、字母、中文排序.md"};function d(o,e,s,l,c,p){return n(),t("div",null,e[0]||(e[0]=[r(`<h1 id="ad-grid按无、符号、数字、字母、中文排序" tabindex="-1">ad-grid按无、符号、数字、字母、中文排序 <a class="header-anchor" href="#ad-grid按无、符号、数字、字母、中文排序" aria-label="Permalink to &quot;ad-grid按无、符号、数字、字母、中文排序&quot;">​</a></h1><h4 id="ad-grid按无、符号、数字、字母、中文排序-1" tabindex="-1">ad-grid按无、符号、数字、字母、中文排序 <a class="header-anchor" href="#ad-grid按无、符号、数字、字母、中文排序-1" aria-label="Permalink to &quot;ad-grid按无、符号、数字、字母、中文排序&quot;">​</a></h4><pre><code>  // 转化中文排序
  convertChineseSort = (data1, data2) =&gt; {
    let change = false;
    if (data1 &amp;&amp; data2) {
      const data1First = data1[0];
      const data2First = data2[0];
      const data1FirstIsZM = /^[a-zA-Z]$/.test(data1First);
      const data2FirstIsZM = /^[a-zA-Z]$/.test(data2First);
      const data1FirstIsHZ = /^[\\u4e00-\\u9fa5]$/.test(data1First);
      const data2FirstIsHZ = /^[\\u4e00-\\u9fa5]$/.test(data2First);
      if ((data1FirstIsZM &amp;&amp; data2FirstIsHZ) || (data1FirstIsHZ &amp;&amp; data2FirstIsZM)) {
        change = true;
      }
    }
    let compare = data1.localeCompare(data2)
    if (change) {
      if (compare &gt; 0) {
        compare = -1
      } else if (compare &lt; 0) {
        compare = 1
      }
    }
    return compare;
  }
</code></pre><h4 id="agrid表格清除勾选和选中" tabindex="-1">AGrid表格清除勾选和选中 <a class="header-anchor" href="#agrid表格清除勾选和选中" aria-label="Permalink to &quot;AGrid表格清除勾选和选中&quot;">​</a></h4><p>deselectAll() setFocusedCell(index, 0, null); clearFocusedCell(); // 主动排序 applyColumnState()</p><pre><code>this.gridApi.forEachNode(node =&gt; {  
if (_.includes(pollDeviceCheckedList, node.rowIndex)) {           node.setSelected(true);  
}
});
</code></pre><h4 id="agrid表格跳转到某一行" tabindex="-1">AGrid表格跳转到某一行 <a class="header-anchor" href="#agrid表格跳转到某一行" aria-label="Permalink to &quot;AGrid表格跳转到某一行&quot;">​</a></h4><p>ensureIndexVisible(rowIndex)</p><pre><code>onRowDataChanged={event =&gt; {
	rowIndex &amp;&amp; event.api.ensureIndexVisible(rowIndex);
	event.api.sizeColumnsToFit();
}}
</code></pre><h4 id="scrollbar方法" tabindex="-1">Scrollbar方法 <a class="header-anchor" href="#scrollbar方法" aria-label="Permalink to &quot;Scrollbar方法&quot;">​</a></h4><pre><code>onRef={ref =&gt; {  this.scrollbarRef = ref;}}
this.scrollbarRef.current.scrollToTop();
this.scrollbarRef.current.scrollToBottom();
if (this.scrollbarRef &amp;&amp; this.contentRef) {
  const listIndex = _.get(this.props.selectedViewData, &#39;listIndex&#39;);
  if (listIndex &gt; parseInt(this.contentRef.current.clientHeight / 2 / 40)) {
	this.scrollbarRef.current.scrollTop(listIndex * 40);
  }
}
</code></pre><h4 id="antd-tree滚动实现" tabindex="-1">Antd Tree滚动实现 <a class="header-anchor" href="#antd-tree滚动实现" aria-label="Permalink to &quot;Antd Tree滚动实现&quot;">​</a></h4><pre><code>if (this.props.selectedCustomGroup &amp;&amp; this.scrollbarRef &amp;&amp; this.treeRef) {
	const thatSelectedDom = document.querySelector(&#39;.ant-tree-node-selected&#39;);
	if (thatSelectedDom) {
	  if (thatSelectedDom.offsetTop &gt; this.treeRef.current.clientHeight / 2) {
		this.scrollbarRef.current.scrollTop(thatSelectedDom.offsetTop);
	  }
	}
}
</code></pre><h4 id="单独渲染行或单元格" tabindex="-1">单独渲染行或单元格 <a class="header-anchor" href="#单独渲染行或单元格" aria-label="Permalink to &quot;单独渲染行或单元格&quot;">​</a></h4><pre><code>gridApi.getRowNode(index).setData({...})
gridApi.getRowNode(index).setDataValue(&#39;xxx&#39;,100)
</code></pre><h4 id="解决表格频繁刷新闪烁" tabindex="-1">解决表格频繁刷新闪烁 <a class="header-anchor" href="#解决表格频繁刷新闪烁" aria-label="Permalink to &quot;解决表格频繁刷新闪烁&quot;">​</a></h4><pre><code>/**
 * 解决表格频繁刷新闪烁
 * 如进度或开关等轮巡的数据变动，不要绑定数据，仅仅修改渲染
 * @param oldList 旧表格数据
 * @param newList 新表格数据
 * @param filterKey 过滤某项进行判断
 * @param gridApi 表格Api
 * @callback boolean 如果为true,表示表格行数据变动需要刷新，如果为false,表示行数据未变动
 */
export function gridNoRefreshByKey(oldList: any, newList: any, filterKey: any, gridApi: any) {
  if (!filterKey) {
    return !_.isEqual(oldList, newList);
  }
  let rowIndex = 0;
  return !_.isEqualWith(oldList, newList, (oV: any, nV: any, indexOrKey: any) =&gt; {
    if (_.isNumber(indexOrKey)) {
      rowIndex = indexOrKey;
    }
    if (indexOrKey === filterKey) {
      if (oV !== nV &amp;&amp; gridApi) {
        gridApi.getRowNode(rowIndex)?.setDataValue(filterKey, nV);
      }
      return true;
    }
    return undefined;
  });
}
</code></pre>`,17)]))}const u=a(i,[["render",d]]);export{f as __pageData,u as default};
