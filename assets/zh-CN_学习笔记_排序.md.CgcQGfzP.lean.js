import{_ as n,c as e,a3 as a,o as i}from"./chunks/framework.BaR4VHXY.js";const h=JSON.parse('{"title":"排序","description":"","frontmatter":{"Created at":"2019-04-14T00:00:00.000Z","Last updated at":"2019-05-06T00:00:00.000Z","tags":["笔试","编程题"]},"headers":[],"relativePath":"zh-CN/学习笔记/排序.md","filePath":"zh-CN/学习笔记/排序.md","lastUpdated":null}'),r={name:"zh-CN/学习笔记/排序.md"};function l(o,t,s,c,p,u){return i(),e("div",null,t[0]||(t[0]=[a(`<h1 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&quot;">​</a></h1><h4 id="排序-1" tabindex="-1">排序 <a class="header-anchor" href="#排序-1" aria-label="Permalink to &quot;排序&quot;">​</a></h4><p><a href="https://www.cnblogs.com/herozhi/p/5880939.html" target="_blank" rel="noreferrer">十大经典算法总结</a></p><h4 id="复杂度" tabindex="-1">复杂度 <a class="header-anchor" href="#复杂度" aria-label="Permalink to &quot;复杂度&quot;">​</a></h4><p><a href="https://liuchuanliang.com/time-and-space-complexity/" target="_blank" rel="noreferrer">时间复杂度和空间复杂度详解</a></p><h4 id="sql索引详解及幂等" tabindex="-1">SQL索引详解及幂等 <a class="header-anchor" href="#sql索引详解及幂等" aria-label="Permalink to &quot;SQL索引详解及幂等&quot;">​</a></h4><p><a href="https://www.cnblogs.com/sheseido/p/5825441.html" target="_blank" rel="noreferrer">SQL索引详解</a></p><p><a href="http://www.cnblogs.com/twoheads/p/10173463.html" target="_blank" rel="noreferrer">幂等</a></p><h4 id="什么是高并发-详细讲解" tabindex="-1">什么是高并发 ，详细讲解 <a class="header-anchor" href="#什么是高并发-详细讲解" aria-label="Permalink to &quot;什么是高并发 ，详细讲解&quot;">​</a></h4><p><a href="https://blog.csdn.net/DreamWeaver_zhou/article/details/78587580" target="_blank" rel="noreferrer">什么是高并发 ，详细讲解</a></p><h4 id="float-doule-数组" tabindex="-1">float,doule,数组 <a class="header-anchor" href="#float-doule-数组" aria-label="Permalink to &quot;float,doule,数组&quot;">​</a></h4><p><a href="https://blog.csdn.net/liu59412/article/details/73821777" target="_blank" rel="noreferrer">把一个float四舍五入到小数点后指定位数</a></p><p><a href="https://www.cnblogs.com/woodk/p/5714329.html" target="_blank" rel="noreferrer">js 数组,字符串,json互相转换</a></p><p><a href="https://www.cnblogs.com/yizhilin/p/7344675.html" target="_blank" rel="noreferrer">js数组遍历和对象遍历</a></p><h4 id="java经典" tabindex="-1">java经典 <a class="header-anchor" href="#java经典" aria-label="Permalink to &quot;java经典&quot;">​</a></h4><p><a href="https://blog.csdn.net/weixin_41607887/article/details/88803193" target="_blank" rel="noreferrer">Java 最常见 200+ 面试题全解析</a></p><h4 id="颜色" tabindex="-1">颜色 <a class="header-anchor" href="#颜色" aria-label="Permalink to &quot;颜色&quot;">​</a></h4><p>1 白色 #FFFFFF 2 红色 #FF0000 3 绿色 #00FF00 4 蓝色 #0000FF5 牡丹红 #FF00FF 6 青色 #00FFFF 7 黄色 #FFFF00 8 黑色 #0000009 海蓝 #70DB93 10 巧克力色 #5C3317 11 蓝紫色 #9F5F9F 12 黄铜色 #B5A64213 亮金色 #D9D919 14 棕色 #A67D3D 15 青铜色 #8C7853 16 2号青铜色 #A67D3D17 士官服蓝色#5F9F9F 18 冷铜色 #D98719 19 铜色 #B87333 20 珊瑚红 #FF7F0021 紫蓝色 #42426F 22 深棕 #5C4033 23 深绿 #2F4F2F 24 深铜绿色 #4A766E25 深橄榄绿 #4F4F2F 26 深兰花色 #9932CD 27 深紫色 #871F78 28 深石板蓝 #6B238E29 深铅灰色 #2F4F4F 30 深棕褐色 #97694F 32 深绿松石色 #7093DB 33 暗木色 #855E4234 淡灰色 #545454 35 土灰玫瑰红色#856363 36 长石色 #D19275 37 火砖色 #8E232338 森林绿 #238E23 39 金色 #CD7F32 40 鲜黄色 #DBDB70 41 灰色 #C0C0C042 铜绿色 #527F76 43 青黄色 #93DB70 44 猎人绿 #215E21 45 印度红 #4E2F2F46 土黄色 #9F9F5F 47 浅蓝色 #C0D9D9 48 浅灰色 #A8A8A8 49 浅钢蓝色 #8F8FBD59 浅木色 #E9C2A6 60 石灰绿色 #32CD32 61 桔黄色 #E47833 62 褐红色 #8E236B</p><pre><code>var colorlist=[&#39;#FF0000&#39;,&#39;#00FF00&#39;,&#39;#0000FF&#39;,&#39;#FF00FF&#39;,&#39;#00FFFF&#39;,&#39;#FFFF00&#39;,&#39;#000000&#39;,&#39;#70DB93&#39;,&#39;#5C3317&#39;,&#39;#9F5F9F&#39;,&#39;#B5A642&#39;,&#39;#D9D919&#39;,&#39;#A67D3D&#39;,&#39;#EEEEEE&#39;,&#39;#8C7853&#39;,&#39;#A67D3D&#39;,&#39;#5F9F9F&#39;,&#39;#D98719&#39;,&#39;#B87333&#39;,&#39;#FF7F00&#39;,&#39;#42426F&#39;,&#39;#5C4033&#39;,&#39;#2F4F2F&#39;,&#39;#4A766E&#39;,&#39;#4F4F2F&#39;,&#39;#9932CD&#39;,&#39;#871F78&#39;,&#39;#6B238E&#39;,&#39;#2F4F4F&#39;,&#39;#97694F&#39;,&#39;#7093DB&#39;,&#39;#855E42&#39;,&#39;#545454&#39;,&#39;#856363&#39;,&#39;#D19275&#39;,&#39;#8E2323&#39;,&#39;#238E23&#39;,&#39;#CD7F32&#39;,&#39;#DBDB70&#39;,&#39;#C0C0C0&#39;,&#39;#527F76&#39;,&#39;#93DB70&#39;,&#39;#215E21&#39;,&#39;#4E2F2F&#39;,&#39;#9F9F5F&#39;,&#39;#C0D9D9&#39;,&#39;#A8A8A8&#39;,&#39;#8F8FBD&#39;,&#39;#E9C2A6&#39;,&#39;#32CD32&#39;,&#39;#E47833&#39;,&#39;#8E236B&#39;];
</code></pre><h4 id="分金子-360公司2017春招真题" tabindex="-1">分金子（360公司2017春招真题） <a class="header-anchor" href="#分金子-360公司2017春招真题" aria-label="Permalink to &quot;分金子（360公司2017春招真题）&quot;">​</a></h4><p>题目描述 A、B两伙马贼意外地在一片沙漠中发现了一处金矿，双方都想独占金矿，但各自的实力都不足以吞下对方，经过谈判后，双方同意用一个公平的方式来处理这片金矿。处理的规则如下：他们把整个金矿分成n段，由A、B开始轮流从最左端或最右端占据一段，直到分完为止。 马贼A想提前知道他们能分到多少金子，因此请你帮忙计算他们最后各自拥有多少金子?（两伙马贼均会采取对己方有利的策略） ![[../_resources/unknown_filename-85fba995.png]]</p><pre><code>import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int t = in.nextInt();
		for(int k = 1; k &lt;= t; k++) {
			int n = in.nextInt();
			int[] nums = new int[n];
			for(int i = 0; i &lt; n; i++) {
				nums[i] = in.nextInt();
			}
			int[] res = compute(nums, n);
			System.out.println(String.format(&quot;Case #%d: %d %d&quot;, k, res[0], res[1]));
		}
		in.close();
	}	
	public static int[] compute(int[] nums, int n) {
		int[][] dp = new int[n + 1][n + 1];
		int[] sum = new int[n + 1];
		for(int i = 1; i &lt;= n; i++) {
			dp[i][i] = nums[i - 1];
			sum[i] = sum[i - 1] + nums[i - 1];
		}
		for(int i = n - 1; i &gt; 0; i--) {
			for(int j = i; j &lt;= n; j++) {
				dp[i][j] = sum[j] - sum[i - 1] - Math.min(dp[i + 1][j], dp[i][j - 1]); 
			}
		}
		return new int[]{dp[1][n], sum[n] - dp[1][n]};
	}
}
</code></pre><h4 id="剪气球串-360公司2017春招真题" tabindex="-1">剪气球串（360公司2017春招真题） <a class="header-anchor" href="#剪气球串-360公司2017春招真题" aria-label="Permalink to &quot;剪气球串（360公司2017春招真题）&quot;">​</a></h4><p>题目描述 小明买了一些彩色的气球用绳子串在一条线上，想要装饰房间，每个气球都染上了一种颜色，每个气球的形状都是各不相同的。我们用1到9一共9个数字表示不同的颜色，如12345则表示一串5个颜色各不相同的气球串。但小明希望得到不出现重复颜色的气球串，那么现在小明需要将这个气球串剪成多个较短的气球串，小明一共有多少种剪法？如原气球串12345的一种是剪法是剪成12和345两个气球串。注意每种剪法需满足最后的子串中气球颜色各不相同（如果满足该条件，允许不剪，即保留原串）。两种剪法不同当且仅当存在一个位置，在一种剪法里剪开了，而在另一种中没剪开。详见样例分析。 ![[../_resources/unknown_filename-5c434136.png]]</p><pre><code>import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		sovle();
	}
	private static void sovle() {
		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();
		int[] bs = new int[n + 1];
		int[] dp = new int[n + 1];
		dp[0] = 1;
		for (int i = 1; i &lt;= n; i++) {
			int[] cnt = new int[10];
			bs[i] = scanner.nextInt();
			for (int j = i; j &gt;= 1; j--) {
				if (cnt[bs[j]]++ &gt;= 1) {
					break;
				}
				dp[i] = (dp[i] +dp[j - 1])%1000000007;
			}
		}
		System.out.println(dp[n]);
	}
}
</code></pre><h4 id="跑步-奇虎360-2017春招真题" tabindex="-1">跑步（奇虎360 2017春招真题） <a class="header-anchor" href="#跑步-奇虎360-2017春招真题" aria-label="Permalink to &quot;跑步（奇虎360 2017春招真题）&quot;">​</a></h4><p>题目描述 小明同学喜欢体育锻炼，他常常去操场上跑步。跑道是一个圆形，在本题中，我们认为跑道是一个半径为R的圆形，设圆心的坐标为原点(0,0)。小明跑步的起点坐标为(R,0)，他沿着圆形跑道跑步，而且一直沿着一个方向跑步。回到家后，他查看了自己的计步器，计步器显示他跑步的总路程为L。小明想知道自己结束跑步时的坐标，但是他忘记自己是沿着顺时针方向还是逆时针方向跑的了。他想知道在这两种情况下的答案分别是多少。 ![[../_resources/unknown_filename-1063c269.png]]</p><pre><code>import java.util.Scanner;
public class Main{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while(scanner.hasNext()){
            float l = scanner.nextInt();
            float r = scanner.nextInt();
            float x=(float)(r*Math.cos(l/r));
            float y=(float)(r*Math.sin(l/r));
            System.out.printf(&quot;%.3f %.3f\\n&quot;,x,-y);
            System.out.printf(&quot;%.3f %.3f\\n&quot;,x,y); 
        }
    }
}
</code></pre><h4 id="偶串-360公司2017春招真题" tabindex="-1">偶串（360公司2017春招真题） <a class="header-anchor" href="#偶串-360公司2017春招真题" aria-label="Permalink to &quot;偶串（360公司2017春招真题）&quot;">​</a></h4><p>题目描述 一个字符串S是偶串当且仅当S中的每一个字符都出现了偶数次。如字符串”aabccb”是一个偶串，因为字符a,b,c都出现了两次。而字符串”abbcc”不是偶串，因为字符a出现了一次。 现在给出一个长度为n的字符串T=t1,t2,t3,…,tn。字符串的子串为其中任意连续一段。T长度为1的子串有n个，长度为2的子串有n-1个，以此类推，T一共有n(n+1)/2个子串。给定T，你能算出它有多少个子串是偶串吗？ ![[../_resources/unknown_filename-a210ce5d.png]]</p><pre><code>import java.util.*;
public class Main{
  public static void main(String[] args){
	Scanner sc = new Scanner(System.in);
	while(sc.hasNext()){
		String T = sc.next();
		int count = 0;//记录总的偶串数目
		int gi = 0; //gi是用低26bit（int是32bit）表示下标为[0,i]的子串所拥分别有的字母是偶数个（0）还是奇数个（1）。
		Map&lt;Integer,Integer&gt; map = new HashMap&lt;Integer,Integer&gt;(); //保存每个gi出现次数
        map.put(0, 1);//gi为0，表示所有的字母都出现偶数次，是1个偶串，所以赋初值1
		for(int i=0; i&lt;T.length(); i++){
			int x = T.charAt(i) - &#39;a&#39;; //求得新加入的这个字符的bit位置
			gi ^= (1 &lt;&lt; x);  //求加入这个字符后，原来的gi拥有字母个数的奇偶性。如果异或后是0，表示加入该字符后有偶数个字母，反正是奇数个。
			if(map.containsKey(gi)){
				count += map.get(gi);//g0,g1,g2...g(i-1)和gi相等的，都可以得到一个偶串。有多个少个相等，就有多少个偶串。 
				map.put(gi, map.get(gi)+1); //增加1
			}else{
				map.put(gi, 1); 
			}	    
        }
        System.out.println(count);
		}
	} 
}
</code></pre><h4 id="数学期望-360公司2017春招真题" tabindex="-1">数学期望（360公司2017春招真题） <a class="header-anchor" href="#数学期望-360公司2017春招真题" aria-label="Permalink to &quot;数学期望（360公司2017春招真题）&quot;">​</a></h4><p>题目描述 小明同学最近学习了概率论，他了解到数学期望的定义：设X为一个随机变量，X可以取n种不同的取值x1,x2,x3,…,xn。取x1的概率为p1,取x2的概率为p2,以此类推。定义随机变量X的数学期望为：<code>E[X]=x1*p1+x2*p2+…+xn*pn</code> 小明回到家中，他想编程计算数学期望，你能帮助他么？ ![[../_resources/unknown_filename-5ddbca92.png]]</p><pre><code>import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();
		float[] posibility = new float[n];
		float[] x = new float[n];
		for (int i = 0; i &lt; n; i++) {
			x[i]= scanner.nextFloat();
			posibility[i]=scanner.nextFloat()/100;
		}
		float E = 0;
		for (int i = 0; i &lt; x.length; i++) {
			E+=x[i]*posibility[i];
		}
		String formatE = String.format(&quot;%.3f&quot;, E);
		System.out.println(formatE);
	}
}
</code></pre><h4 id="任务列表-360公司2017春招真题" tabindex="-1">任务列表（360公司2017春招真题） <a class="header-anchor" href="#任务列表-360公司2017春招真题" aria-label="Permalink to &quot;任务列表（360公司2017春招真题）&quot;">​</a></h4><p>题目描述 现在现在有一台机器，这台机器可以接收两种形式任务：（1）任务列表，任务列表里面有N个任务，对于第i个任务，机器在Ti时间开始执行，并在1个单位时间内做完。（2）临时任务，机器可以在任意时间接收一个临时任务，但任务列表里面的任务优先级要高于临时任务，也就是说当机器空闲的时候才会执行临时任务。现在机器已经接收一个任务列表。接下来会有M个临时任务，我们想知道每个临时任务何时被执行。为了简化问题我们可以认为这M个临时任务是独立无关即任务是可以同时执行的，互不影响的。 ![[../_resources/unknown_filename-d41fa21b.png]]</p><pre><code>import java.util.Scanner;
public class Main
{
	public static void main(String[] args)
    {
    	Scanner sc = new Scanner(System.in);
    	int n = sc.nextInt();
       	int m = sc.nextInt();
       	int i,j;
        int[] maintime = new int[n];
        int[] temptime = new int[m];
      	for(i = 0; i&lt;maintime.length; i++)
          maintime[i] = sc.nextInt();
       
        for(i = 0; i&lt;temptime.length; i++)
        {
        	temptime[i] = sc.nextInt();
            for(j = 0; j&lt;maintime.length; j++)
            {
            	if(maintime[j] == temptime[i] )
                	temptime[i]++;
            }
          	System.out.println(temptime[i]);
        }
      	sc.close();
    }
}
</code></pre><h4 id="病毒-3602017秋招真题" tabindex="-1">病毒（3602017秋招真题） <a class="header-anchor" href="#病毒-3602017秋招真题" aria-label="Permalink to &quot;病毒（3602017秋招真题）&quot;">​</a></h4><p>题目描述 小B最近对破解和程序攻击产生了兴趣，她迷上了病毒，然后可怕的事情就发生了。不知道什么原因，可能是小B的技术水平还不够高，小B编写的病毒程序在攻击一个服务器时出现了问题。尽管成功的侵入了服务器，但并没有按照期望的方式发挥作用。小B的目的很简单:控制服务器的内存区域，试图在内存中装入从1到n之间的n个自然数，以覆盖内存区域。可能是小B对编程理解上的问题，病毒似乎没有完全成功。可能是由于保护机制的原因，内存写入只接受二进制的形式，所以十进制表达中除0和1之外的其他值都没有成功写入内存。小B希望知道，究竟有多少数成功的写入了服务器的内存！ ![[../_resources/unknown_filename-70b9d7e1.png]]</p><pre><code>import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while(scanner.hasNext()){
            String str = scanner.next();
            int length = str.length();
            int result = 0;
            for(int i=0;i&lt;length;i++){
                if(str.charAt(i)&gt;&#39;1&#39;){
                    result += Math.pow(2,length-i)-1;
                    break;
                }else if(str.charAt(i)==&#39;1&#39;){
                    result += Math.pow(2,length-1-i);
                }
            }
            System.out.println(result);
        }
    }
}
</code></pre><h4 id="密码锁-3602017秋招真题" tabindex="-1">密码锁（3602017秋招真题） <a class="header-anchor" href="#密码锁-3602017秋招真题" aria-label="Permalink to &quot;密码锁（3602017秋招真题）&quot;">​</a></h4><p>题目描述 作为一名新手特工，小B接受了大量的秘密间谍训练。检验她学业成就的时刻到了，她被派到一个基地去执行一项秘密任务，窃取该基地中一个尖端工艺的设计流程。经过一系列惊险的过程，小B已经成功的抵达了目标区域。遗憾的是，目标区域高墙围挡，墙上还有电网和红外安保机制，她发现只能通过大门进入。好在她已经成功的接近了大门，成功正在向她招手。大门是无人值守的，由电子密码组合锁控制。几分钟前，她发现一名工作人员在终端上输入过密码，并打开了门进入其中。电子密码锁是一个方形的3x3数字键盘，上面有从1到9的数字按键。小B推测密码是由不同的字符构成，且是沿按键中心对称的。她的热传感器能够探测上次按键的余温。她希望验证一下密码是否是沿按键中心对称，这样就可以极大的减少她尝试的次数，你能帮她吗？ ![[../_resources/unknown_filename-5470a7b8.png]]</p><pre><code>import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		String suo = new String();
		Scanner scanner = new Scanner(System.in);
		while(scanner.hasNext()){
		suo+=scanner.next();
		if(suo.length()==9){
			haha(suo);
			suo=null;
			suo=new String();
		}
		}
	}
	public static void haha(String a){
		String c = a;
		StringBuffer sb = new StringBuffer(c);
		c=sb.reverse().toString();
		if(c.equals(a)){
			System.out.println(&quot;YES&quot;);
		}else{
			System.out.println(&quot;NO&quot;);
		}
	}
}
</code></pre><h4 id="最强大脑-3602017秋招真题" tabindex="-1">最强大脑（3602017秋招真题） <a class="header-anchor" href="#最强大脑-3602017秋招真题" aria-label="Permalink to &quot;最强大脑（3602017秋招真题）&quot;">​</a></h4><p>题目描述 小B乘火车和朋友们一起在N市到M市之间旅行。她在路途中时睡时醒。当她醒来观看窗外的风景时，注意到每个火车站都有一种特别颜色的旗帜，但是她看到的旗帜仅仅是经过的一小部分。小B在乘车过程中有两次清醒的时间，她到达旅程终点时处于睡梦中。出站时，她和朋友们谈论着一路的见闻，朋友们觉得很有意思。他们把N到和M之间经过车站的旗帜颜色依次列出来，然后告诉你小B记得的旗帜颜色序列，让你判断小B究竟是从N和M之间哪些方向才能看到所说颜色的旗帜，还是根本就不可能看到？颜色用字母代表，相同的字母代表相同的颜色，不同的字母则表示不同的颜色。 ![[../_resources/unknown_filename-b6f28d10.png]]</p><pre><code>import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Main p = new Main();
		p.execute();
	}
	private void execute() {
		Scanner s = new Scanner(System.in);
		while (s.hasNext()) {
			String input = s.next();
			String seq1 = s.next();
			String seq2 = s.next();
			solve(input, seq1, seq2);
		}
		s.close();
	}
	private void solve(String input, String s1, String s2) {
		boolean fwd = false;
		boolean back = false;
		int idx = input.indexOf(s1);
		if (idx != -1) {
			idx += s1.length();
			if (input.substring(idx, input.length()).contains(s2)) {
				fwd = true;
			}
		}
		String inputR = new StringBuilder(input).reverse().toString();
		idx = inputR.indexOf(s1);
		if (idx != -1) {
			idx += s1.length();
			if (inputR.substring(idx, input.length()).contains(s2)) {
				back = true;
			}
		}
		if (fwd) {
			if (back) {
				System.out.println(&quot;both&quot;);
			} else {
				System.out.println(&quot;forward&quot;);
			}
		} else {
			if (back) {
				System.out.println(&quot;backward&quot;);
			} else {
				System.out.println(&quot;invalid&quot;);
			}
		}
	}
}
</code></pre><h4 id="内存管理-3602017秋招真题" tabindex="-1">内存管理（3602017秋招真题） <a class="header-anchor" href="#内存管理-3602017秋招真题" aria-label="Permalink to &quot;内存管理（3602017秋招真题）&quot;">​</a></h4><p>题目描述 物联网技术的蓬勃发展，各种传感器纷纷出现。小B所在的项目组正在开发一个物联网项目，她们在研究设计一种新的传感器。这种传感器有自己的基本处理单元，具有一定的自主性，能够进行简单的数据收集、处理、存储和传输。为降低系统功耗并保证系统可靠性和可控性，他们要对内存进行基本的管理。研究小组计划开发一个实验性内存管理器，实现对内存的分配、释放和整理。对应的接口为new、del和def，使用语法为： new size：分配size字节大小的内存块，返回该内存块的句柄handle，size为正整数； del handle：释放句柄handle指向的内存块； def：整理内存碎片，将所有已分配内存块按地址从低到高的顺序迁移，使空闲内存碎片在高地址端拼接在一起； 初始内存为 initSize 字节大小的整片空闲内存，编号为 1 到 initSize 。 new size操作中，若存在不小于size的连续空闲内存，则按照小地址优先的原则从空闲内存区域中分配size大小的内存块，标记该内存块状态为已分配，并返回指向该内存块的句柄。若无法分配，则返回空（NULL）。 del handle操作释放由handle标记的内存块，标记被释放的内存状态为空闲。若handle为无效句柄，则返回ILLEGAL_OPERATION。 def 完成内存整理工作，无返回值。 根据设计，每次成功内存分配返回的句柄为一个正整数，从1开始，依次计数。失败的存储分配操作不影响计数。 项目小组将此项任务分配给小B，小B向你求助，你能帮她吗？ ![[../_resources/unknown_filename-9ce797f8.png]]</p><pre><code>import java.io.*;
import java.util.*;
public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String line = br.readLine();
		while (line != null &amp;&amp; line.length() &gt; 0) {
			StringTokenizer st = new StringTokenizer(line);
			int t = Integer.parseInt(st.nextToken());
			int m = Integer.parseInt(st.nextToken());
			ArrayList&lt;Block&gt; al = new ArrayList&lt;Block&gt;();
			int count = 1;
			for (int i = 0; i &lt; t; i++) {
				st = new StringTokenizer(br.readLine());
				String s = st.nextToken();

				if (s.equals(&quot;new&quot;)) {
					int n = Integer.parseInt(st.nextToken());
					if (al.size() &gt; 0) {
						if (al.get(0).start - 1 &gt;= n) {
							al.add(0, new Block(1, n, count));
							System.out.println(count++);
							continue;
						}
						boolean b = false;
						for (int j = 0; j &lt; al.size() - 1 &amp;&amp; !b; j++)
							if (al.get(j + 1).start - (al.get(j).start + al.get(j).length) &gt;= n) {
								al.add(j + 1, new Block(al.get(j).start + al.get(j).length, n, count));
								System.out.println(count++);
								b = true;
							}
						if (!b)
							if (m + 1 - (al.get(al.size() - 1).start + al.get(al.size() - 1).length) &gt;= n) {
								al.add(new Block(al.get(al.size() - 1).start + al.get(al.size() - 1).length, n, count));
								System.out.println(count++);
							} else
								System.out.println(&quot;NULL&quot;);
					} else if (n &lt;= m) {
						al.add(new Block(1, n, count));
						System.out.println(count++);
					} else
						System.out.println(&quot;NULL&quot;);
				} else if (s.equals(&quot;del&quot;)) {
					long x = Long.parseLong(st.nextToken());
					int index = -1;
					for (int j = 0; j &lt; al.size(); j++)
						if (al.get(j).id == x)
							index = j;
					if (index == -1)
						System.out.println(&quot;ILLEGAL_OPERATION&quot;);
					else
						al.remove(index);
				} else {
					if (al.size() &gt; 0)
						al.get(0).start = 1;
					for (int j = 1; j &lt; al.size(); j++)
						al.get(j).start = al.get(j - 1).start + al.get(j - 1).length;
				}
			}
			line = br.readLine();
		}
	}
}
class Block {
	int start;
	int length;
	int id;
	public Block(int start, int length, int id) {
		this.start = start;
		this.length = length;
		this.id = id;
	}
}
</code></pre>`,49)]))}const m=n(r,[["render",l]]);export{h as __pageData,m as default};
