import{_ as n,c as e,a3 as i,o}from"./chunks/framework.BaR4VHXY.js";const q=JSON.parse('{"title":"菱形","description":"","frontmatter":{"Created at":"2019-04-27T00:00:00.000Z","Last updated at":"2019-07-26T00:00:00.000Z","tags":["js","添加节点"]},"headers":[],"relativePath":"zh-CN/学习笔记/菱形.md","filePath":"zh-CN/学习笔记/菱形.md","lastUpdated":null}'),r={name:"zh-CN/学习笔记/菱形.md"};function a(u,t,l,s,d,c){return o(),e("div",null,t[0]||(t[0]=[i(`<h1 id="菱形" tabindex="-1">菱形 <a class="header-anchor" href="#菱形" aria-label="Permalink to &quot;菱形&quot;">​</a></h1><h4 id="菱形-1" tabindex="-1">菱形 <a class="header-anchor" href="#菱形-1" aria-label="Permalink to &quot;菱形&quot;">​</a></h4><pre><code>public void lingxing(int num) {
num = num / 2 + 2;
for (int i = 1; i &lt; num; i++) {
for (int j = num - i; j &gt; 0; j--) {
System.out.print(&quot; &quot;);
}
for (int j = i; j &gt; 0; j--) {
System.out.print(&quot;*&quot;);
}
for (int j = i - 1; j &gt; 0; j--) {
System.out.print(&quot;*&quot;);
}
for (int j = num - i; j &gt; 0; j--) {
System.out.print(&quot; &quot;);
}
System.out.println();
}
for (int i = 2; i &lt; num; i++) {
for (int j = 0; j &lt; i; j++) {
System.out.print(&quot; &quot;);
}
for (int j = i; j &lt; num; j++) {
System.out.print(&quot;*&quot;);
}
for (int j = i + 1; j &lt; num; j++) {
System.out.print(&quot;*&quot;);
}
for (int j = 0; j &lt; i; j++) {
System.out.print(&quot; &quot;);
}
System.out.println();
}
}
</code></pre><h4 id="添加节点" tabindex="-1">添加节点 <a class="header-anchor" href="#添加节点" aria-label="Permalink to &quot;添加节点&quot;">​</a></h4><pre><code>  &lt;script type=&quot;text/html&quot; &gt;
      &lt;tr&gt;
           &lt;td&gt;index&lt;/td&gt;
           &lt;td&gt;name&lt;/td&gt;
           &lt;td&gt;price&lt;/td&gt;
           &lt;td&gt;number&lt;/td&gt;
           &lt;td&gt;people&lt;/td&gt;
           &lt;td&gt;time&lt;/td&gt;
      &lt;/tr&gt;
  &lt;/script&gt;


function pay() {
var template = document.getElementById(&quot;template&quot;);
var content = template.innerHTML.replace(&quot;index&quot;, &quot;1&quot;).replace(&quot;name&quot;, 
&quot;维生素&quot;).replace(&quot;price&quot;, &quot;50&quot;).replace(&quot;number&quot;, &quot;10&quot;).replace(&quot;people&quot;, &quot;韩水言&quot;).replace(&quot;time&quot;, &quot;2019&quot;);
goodbody.lastElementChild.innerHTML += content;
 }
</code></pre><h4 id="循环数" tabindex="-1">循环数 <a class="header-anchor" href="#循环数" aria-label="Permalink to &quot;循环数&quot;">​</a></h4><pre><code>package test;

import java.util.Scanner;

/**
 * @ClassName: 测试类
 * @Description: TODO
 * @author 韩水言
 * @date 2019年7月26日 下午9:03:31
 */
public class B {
	public static int count = 0;

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println(&quot;请输入n:&quot;);
		int n = scanner.nextInt();
		int[][] res = new int[n][n];
		if (n &lt; 3) {
			System.out.println(&quot;一边玩去，懒得写&quot;);
		} else {
			f1(n, 1, res);
		}
		for (int i = 0; i &lt; res.length; i++) {
			for (int j = 0; j &lt; res.length; j++) {
				System.out.print(res[i][j] + &quot;\\t&quot;);
			}
			System.out.println(&quot;&quot;);
		}
	}

	/**
	 * @Title: f1
	 * @Description: TODO
	 * @param @param
	 *            index 每次迭代长度
	 * @param @param
	 *            start 每次迭代数字
	 * @param @param
	 *            res 数组
	 * @return void
	 * @author 韩水言
	 * @date 2019年7月26日 下午9:03:43
	 */
	public static void f1(int index, int start, int[][] res) {
		// 行不变
		for (int i = 0; i &lt; index; i++) {
			res[count][i + count] = start + i;
		}
		// 列不变
		for (int i = index; i &lt; index * 2 - 1; i++) {
			res[i - (index - 1) + count][index - 1 + count] = start + i;
		}
		// 行不变15
		for (int i = index * 2 - 1; i &lt; index * 3 - 2; i++) {
			res[index - 1 + count][index * 3 - 3 - i + count] = start + i;
		}
		// 列不变
		for (int i = index * 3 - 2; i &lt; index * 4 - 3 - 1; i++) {
			res[index * 4 - 4 - i + count][count] = start + i;
		}
		if (index &gt;= 3) {
			count++;
			f1(index - 2, res[count][count - 1] + 1, res);
		}
	}

}
</code></pre>`,7)]))}const m=n(r,[["render",a]]);export{q as __pageData,m as default};
