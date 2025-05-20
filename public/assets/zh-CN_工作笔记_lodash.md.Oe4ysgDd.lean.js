import{_ as n,c as a,a3 as e,o as p}from"./chunks/framework.BaR4VHXY.js";const u=JSON.parse('{"title":"lodash","description":"","frontmatter":{"Created at":"2020-03-18T00:00:00.000Z","Last updated at":"2022-09-28T00:00:00.000Z","tags":["lodash","moment","lodash-decorators"]},"headers":[],"relativePath":"zh-CN/工作笔记/lodash.md","filePath":"zh-CN/工作笔记/lodash.md","lastUpdated":null}'),t={name:"zh-CN/工作笔记/lodash.md"};function o(l,s,c,i,d,m){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="lodash" tabindex="-1">lodash <a class="header-anchor" href="#lodash" aria-label="Permalink to &quot;lodash&quot;">​</a></h1><h3 id="lodash-1" tabindex="-1">lodash <a class="header-anchor" href="#lodash-1" aria-label="Permalink to &quot;lodash&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.bootcss.com/lodash.js/4.17.11/lodash.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>* _.omit( 对象 , 忽略对象属性数组 )</span></span>
<span class="line"><span> 忽略obj中的某些属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var object = { &#39;a&#39;: 1, &#39;b&#39;: &#39;2&#39;, &#39;c&#39;: 3 };</span></span>
<span class="line"><span>    _.omit(object, [&#39;a&#39;, &#39;c&#39;]);</span></span>
<span class="line"><span>    // =&gt; { &#39;b&#39;: &#39;2&#39; }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>* _.omitBy( 对象|数组 , 忽略属性数组 , 按某种规则忽略 )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var object = { &#39;a&#39;: 1, &#39;b&#39;: &#39;2&#39;, &#39;c&#39;: 3 };</span></span>
<span class="line"><span>    _.omitBy(object,_.isNumber);</span></span>
<span class="line"><span>    // =&gt; { &#39;b&#39;: &#39;2&#39; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* _.uniq( 去重 )</span></span>
<span class="line"><span>* _.uniqBy( 依赖去重 )</span></span>
<span class="line"><span>* _.reduce( 集合 , 处理方法 , 初始集合)</span></span>
<span class="line"><span> 遍历返回处理后的集合</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _.reduce([1, 2], function(sum, n) {</span></span>
<span class="line"><span>      return sum + n;</span></span>
<span class="line"><span>    }, 0);</span></span>
<span class="line"><span>    // =&gt; 3</span></span>
<span class="line"><span>    // 聚合对象相同值的属性</span></span>
<span class="line"><span>    _.reduce({ &#39;a&#39;: 1, &#39;b&#39;: 2, &#39;c&#39;: 1 }, function(result, value, key) {</span></span>
<span class="line"><span>      (result[value] || (result[value] = [])).push(key);</span></span>
<span class="line"><span>      return result;</span></span>
<span class="line"><span>    }, {});</span></span>
<span class="line"><span>    // =&gt; { &#39;1&#39;: [&#39;a&#39;, &#39;c&#39;], &#39;2&#39;: [&#39;b&#39;] } (无法保证遍历的顺序)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>* _.merge( 对象，对象 )</span></span>
<span class="line"><span> 合并两个对象中的数组位置对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var users = {</span></span>
<span class="line"><span>      &#39;data&#39;: [{ &#39;user&#39;: &#39;barney&#39; }, { &#39;user&#39;: &#39;fred&#39; }]</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    var ages = {</span></span>
<span class="line"><span>      &#39;data&#39;: [{ &#39;age&#39;: 36 }, { &#39;age&#39;: 40 }]</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    _.merge(users, ages);</span></span>
<span class="line"><span>    // =&gt; { &#39;data&#39;: [{ &#39;user&#39;: &#39;barney&#39;, &#39;age&#39;: 36 }, { &#39;user&#39;: &#39;fred&#39;, &#39;age&#39;: 40 }] }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>* _.mergeWith( 对象，对象 )</span></span>
<span class="line"><span> 自定义合并两个对象中的数组位置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function customizer(objValue, srcValue) {</span></span>
<span class="line"><span>      if (_.isArray(objValue)) {</span></span>
<span class="line"><span>        return objValue.concat(srcValue);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var object = {</span></span>
<span class="line"><span>      &#39;fruits&#39;: [&#39;apple&#39;],</span></span>
<span class="line"><span>      &#39;vegetables&#39;: [&#39;beet&#39;]</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    var other = {</span></span>
<span class="line"><span>      &#39;fruits&#39;: [&#39;banana&#39;],</span></span>
<span class="line"><span>      &#39;vegetables&#39;: [&#39;carrot&#39;]</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    _.mergeWith(object, other, customizer);</span></span>
<span class="line"><span>    // =&gt; { &#39;fruits&#39;: [&#39;apple&#39;, &#39;banana&#39;], &#39;vegetables&#39;: [&#39;beet&#39;, &#39;carrot&#39;] }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>* 判断除某项外数据相等</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _.isEqualWith(oO,nO,(oV,nV,key) =&gt; key===&#39;xxx&#39; ? true : undefined)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* 过滤出两个对象的改变的值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 过滤两个对象中不同的值</span></span>
<span class="line"><span>    function difference(object, base) {</span></span>
<span class="line"><span>      function changes(object, base) {</span></span>
<span class="line"><span>        return _.transform(object, function (result, value, key) {</span></span>
<span class="line"><span>          if (!_.isEqual(value, base[key])) {</span></span>
<span class="line"><span>            result[key] =</span></span>
<span class="line"><span>              _.isObject(value) &amp;&amp;_.isObject(base[key]) ? changes(value, base[key]) : value;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return changes(object, base);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="moment" tabindex="-1">moment <a class="header-anchor" href="#moment" aria-label="Permalink to &quot;moment&quot;">​</a></h3><ul><li><p>获取今天0时0分0秒 <code>moment().startOf(&#39;day&#39;)</code></p></li><li><p>获取今天23时59分59秒 <code>moment().endOf(&#39;day&#39;)</code></p></li><li><p>获取本周第一天(周日)0时0分0秒 <code>moment().startOf(&#39;week&#39;)</code></p></li><li><p>获取本周最后一天(周六)23时59分59秒 <code>moment().endOf(&#39;week&#39;)</code></p></li><li><p>获取本周周一0时0分0秒 <code>moment().startOf(&#39;isoWeek&#39;)</code></p></li><li><p>获取本周周日23时59分59秒 <code>moment().endOf(&#39;isoWeek&#39;)</code></p></li><li><p>获取当前月第一天0时0分0秒 <code>moment().startOf(&#39;month&#39;)</code></p></li><li><p>获取当前月最后一天23时59分59秒 <code>moment().endOf(&#39;month&#39;)</code></p></li><li><p>获取当前月的总天数 <code>moment().daysInMonth()</code></p></li><li><p>获取时间戳(以秒为单位) <code>moment().format(&#39;X&#39;) // 返回值为字符串类型</code><code>moment().unix() // 返回值为数值型</code></p></li><li><p>获取时间戳(以毫秒为单位) <code>moment().format(&#39;x&#39;) // 返回值为字符串类型</code><code>moment().valueOf() // 返回值为数值型</code></p></li><li><p>获取年份 <code>moment().year()</code><code>moment().get(&#39;year&#39;)</code></p></li><li><p>获取月份 <code>moment().month() // (0~11, 0: January, 11: December)</code><code>moment().get(&#39;month&#39;)</code></p></li><li><p>获取一个月中的某一天 <code>moment().date()</code><code>moment().get(&#39;date&#39;)</code></p></li><li><p>获取一个星期中的某一天 <code>moment().day() // (0~6, 0: Sunday, 6: Saturday)</code><code>moment().weekday() // (0~6, 0: Sunday, 6: Saturday)</code><code>moment().isoWeekday() // (1~7, 1: Monday, 7: Sunday)</code><code>moment().get(&#39;day&#39;)</code><code>mment().get(&#39;weekday&#39;)</code><code>moment().get(&#39;isoWeekday&#39;)</code></p></li><li><p>获取小时 <code>moment().hours()</code><code>moment().get(&#39;hours&#39;)</code></p></li><li><p>获取分钟 <code>moment().minutes()</code><code>moment().get(&#39;minutes&#39;)</code></p></li><li><p>获取秒数 <code>moment().seconds()</code><code>moment().get(&#39;seconds&#39;)</code></p></li><li><p>获取当前的年月日时分秒 <code>moment().toArray() // [years, months, date, hours, minutes, seconds, milliseconds]</code><code>moment().toObject() // {years: xxxx, months: x, date: xx ...}</code></p></li><li><p>格式化年月日时分秒am/pm <code>moment().format(&#39;YYYY-MM-DD hh:mm:ss a&#39;)</code></p></li><li><p>格式化时间戳(以秒为单位) <code>moment().format(&#39;X&#39;) // 返回值为字符串类型</code></p></li><li><p>格式化时间戳(以毫秒为单位) <code>moment().format(&#39;x&#39;) // 返回值为字符串类型</code></p></li><li><p>比较时间</p><p>moment.min(startTime,endTime) moment.max(startTime,endTime) moment(endTime).isBefore(startTime) moment(startTime).isSame(endTime) moment(startTime).isAfter(endTime) moment(midTime).isBetween(startTime,endTime) moment(time).isLeapYear() // 是否闰年</p></li><li><p>获取两个日期之间的时间差</p><p>let start_date = moment().subtract(1, &#39;weeks&#39;) let end_date = moment() end_date.diff(start_date) // 返回毫秒数 end_date.diff(start_date, &#39;months&#39;) // 0 end_date.diff(start_date, &#39;weeks&#39;) // 1 end_date.diff(start_date, &#39;days&#39;) // 7 start_date.diff(end_date, &#39;days&#39;) // -7</p></li><li><p>转化为原生Date对象 <code>moment().toDate()</code><code>new Date(moment())</code></p></li><li><p>设置年份 <code>moment().year(2019)</code><code>moment().set(&#39;year&#39;, 2019)</code><code>moment().set({year: 2019})</code></p></li><li><p>设置月份 <code>moment().month(11) // (0~11, 0: January, 11: December)</code><code>moment().set(&#39;month&#39;, 11)</code></p></li><li><p>设置某个月中的某一天 <code>moment().date(15)</code><code>moment().set(&#39;date&#39;, 15)</code></p></li><li><p>设置某个星期中的某一天 <code>moment().weekday(0) // 设置日期为本周第一天（周日）</code><code>moment().isoWeekday(1) // 设置日期为本周周一</code><code>moment().set(&#39;weekday&#39;, 0)</code><code>moment().set(&#39;isoWeekday&#39;, 1)</code></p></li><li><p>设置小时 <code>moment().hours(12)</code><code>moment().set(&#39;hours&#39;, 12)</code></p></li><li><p>设置分钟 <code>moment().minutes(30)</code><code>moment().set(&#39;minutes&#39;, 30)</code></p></li><li><p>设置秒数 <code>moment().seconds(30)</code><code>moment().set(&#39;seconds&#39;, 30)</code></p></li><li><p>更新年份 <code>moment().add(1, &#39;years&#39;)</code><code>moment().add({years: 1})</code><code>moment().subtract(1, &#39;years&#39;)</code><code>moment().subtract({years: 1})</code></p></li><li><p>更新月份 <code>moment().add(1, &#39;months&#39;)</code><code>moment().subtract(1, &#39;months&#39;)</code></p></li><li><p>更新日期 <code>moment().add(1, &#39;days&#39;)</code><code>moment().subtract(1, &#39;days&#39;)</code></p></li><li><p>更新星期 <code>moment().add(1, &#39;weeks&#39;)</code><code>moment().subtract(1, &#39;weeks&#39;)</code></p></li><li><p>更新小时 <code>moment().add(1, &#39;hours&#39;)</code><code>moment().subtract(1, &#39;hours&#39;)</code></p></li><li><p>更新分钟 <code>moment().add(1, &#39;minutes&#39;)</code><code>moment().subtract(1, &#39;minutes&#39;)</code></p></li><li><p>更新秒数 <code>moment().add(1, &#39;seconds&#39;)</code><code>moment().subtract(1, &#39;seconds&#39;)</code></p></li></ul>`,6)]))}const h=n(t,[["render",o]]);export{u as __pageData,h as default};
