import{_ as a,c as t,a3 as r,o}from"./chunks/framework.BaR4VHXY.js";const p=JSON.parse('{"title":"进程和线程的区别：","description":"","frontmatter":{"Created at":"2019-03-25T00:00:00.000Z","Last updated at":"2019-03-25T00:00:00.000Z","tags":["java多线程"]},"headers":[],"relativePath":"zh-CN/学习笔记/进程和线程的区别：.md","filePath":"zh-CN/学习笔记/进程和线程的区别：.md","lastUpdated":null}'),n={name:"zh-CN/学习笔记/进程和线程的区别：.md"};function d(i,e,l,c,h,s){return o(),t("div",null,e[0]||(e[0]=[r(`<h1 id="进程和线程的区别" tabindex="-1">进程和线程的区别： <a class="header-anchor" href="#进程和线程的区别" aria-label="Permalink to &quot;进程和线程的区别：&quot;">​</a></h1><h3 id="进程和线程的区别-1" tabindex="-1">进程和线程的区别： <a class="header-anchor" href="#进程和线程的区别-1" aria-label="Permalink to &quot;进程和线程的区别：&quot;">​</a></h3><p>进程：计算机中的每一个应用程序至少有一个进程。进程还分附进程和子进程。 线程：线程是比进程粒度更加小的一种特殊“进程”。一个进程有至少一个线程。 并发：相当于一个桥上的车道，一辆车过桥之后，下一辆车再过，但是过桥的速度非常快，快到你无法分辨谁先谁后。在计算机中，应用程序使用cpu资源的时候，cpu一般资源充足，分阶段把资源分配给应用进程。 并行：相当于多个车道，多辆车同时跑。多核cpu，分别给不同的进程使用。</p><h3 id="网络基础" tabindex="-1">网络基础 <a class="header-anchor" href="#网络基础" aria-label="Permalink to &quot;网络基础&quot;">​</a></h3><p>netstat -ano 显示操作系统所有的网络进程。 taskkill /f /pid     在dos命令杀死进程。</p><h3 id="java调用dos命令" tabindex="-1">java调用dos命令 <a class="header-anchor" href="#java调用dos命令" aria-label="Permalink to &quot;java调用dos命令&quot;">​</a></h3><pre><code>Runtime runtime = Runtime.getRuntime();
      //command命令
      try {
        runtime.exec(&quot;mspaint&quot;);
      } catch (IOException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
</code></pre><h3 id="thread和runnable" tabindex="-1">thread和runnable <a class="header-anchor" href="#thread和runnable" aria-label="Permalink to &quot;thread和runnable&quot;">​</a></h3><p>thread资源不共享，使用runnable可以实现资源共享，并且可以多实现，避免单继承带来的不便。 多线程会出现溢出的情况。解决方法：加入synchronized。 如何避免死锁？尽量避免在同步块中加入同步块。 ![[../_resources/Image.5.png]]</p><h3 id="sleep和wait的区别" tabindex="-1">sleep和wait的区别： <a class="header-anchor" href="#sleep和wait的区别" aria-label="Permalink to &quot;sleep和wait的区别：&quot;">​</a></h3><p>1：sleep是Thread的方法。wait是Object的方法。 2：sleep必须有参数，wait可以没有参数 3：sleep不会破坏同步锁，wait会破坏。 4：线程一旦进入wait，不会自动醒，sleep因为有参数，所以会自动醒。如果想唤醒wait，需要使用notify()。</p><h3 id="线程池" tabindex="-1">线程池 <a class="header-anchor" href="#线程池" aria-label="Permalink to &quot;线程池&quot;">​</a></h3><p>第一种：创建单线程的线程池newSingleThreadExecutor（创建一个使用单个 worker 线程的 Executor，以无界队列方式来运行该线程）         ExecutorService pool = Executors.newSingleThreadExecutor(); 第二种：创建固定线程数的线程池newFixedThreadPool（创建一个可重用固定线程数的线程池，以共享的无界队列方式来运行这些线程）         ExecutorService pool = Executors.newFixedThreadPool(1); 第三种：创建带缓存的线程池newCachedThreadPool（创建一个可根据需要创建新线程的线程池，但在以前构造的线程可用时将重用。）         ExecutorService pool = Executors.newCachedThreadPool(); 第四种：创建定时执行的线程池newScheduledThreadPool(创建一个线程池，它可安排在给定延迟后运行命令或者定期地执行。)</p><pre><code>        ScheduledExecutorService pool = Executors.newScheduledThreadPool(1);
            pool.scheduleAtFixedRate(new Runnable() {
            @Override
            public void run() {
                System.out.println(new Date());
            }
            //10000代表延期10秒执行，5000周期代表没5秒执行一次，imeUnit.MILLISECONDS单位是毫秒
        }, 10000, 5000, TimeUnit.MILLISECONDS);
</code></pre>`,14)]))}const m=a(n,[["render",d]]);export{p as __pageData,m as default};
