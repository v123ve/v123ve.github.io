import{_ as a,c as n,a3 as t,o}from"./chunks/framework.BaR4VHXY.js";const h=JSON.parse('{"title":"spring定时任务","description":"","frontmatter":{"Created at":"2019-03-30T00:00:00.000Z","Last updated at":"2019-03-30T00:00:00.000Z","tags":["spring","定时器","事件机制"]},"headers":[],"relativePath":"zh-CN/学习笔记/spring定时任务.md","filePath":"zh-CN/学习笔记/spring定时任务.md","lastUpdated":null}'),i={name:"zh-CN/学习笔记/spring定时任务.md"};function r(s,e,l,c,p,d){return o(),n("div",null,e[0]||(e[0]=[t(`<h1 id="spring定时任务" tabindex="-1">spring定时任务 <a class="header-anchor" href="#spring定时任务" aria-label="Permalink to &quot;spring定时任务&quot;">​</a></h1><h2 id="spring定时任务-1" tabindex="-1">spring定时任务 <a class="header-anchor" href="#spring定时任务-1" aria-label="Permalink to &quot;spring定时任务&quot;">​</a></h2><h3 id="创建定时任务配置类" tabindex="-1">创建定时任务配置类 <a class="header-anchor" href="#创建定时任务配置类" aria-label="Permalink to &quot;创建定时任务配置类&quot;">​</a></h3><pre><code>@Configuration
@ComponentScan(basePackages= {&quot;com.aaa.scheduled&quot;})
@EnableScheduling
public class SecheduledConfig {}
</code></pre><h3 id="创建定时任务" tabindex="-1">创建定时任务 <a class="header-anchor" href="#创建定时任务" aria-label="Permalink to &quot;创建定时任务&quot;">​</a></h3><pre><code>@Component
public class MyTask {
    @Scheduled(cron=&quot;0/2 * * * * *&quot;)
    public  void loveYou() {
        System.out.println(&quot;I love you !&quot;+ new Date());
    }
}
</code></pre><h4 id="cron格式" tabindex="-1">Cron格式 <a class="header-anchor" href="#cron格式" aria-label="Permalink to &quot;Cron格式&quot;">​</a></h4><p>Cron表达式是一个字符串，字符串以5或6个空格隔开，分为6或7个域，每一个域代表一个含义 ![[../_resources/unknown_filename-319d2c88.png]]</p><h4 id="常用表达式例子" tabindex="-1">常用表达式例子 <a class="header-anchor" href="#常用表达式例子" aria-label="Permalink to &quot;常用表达式例子&quot;">​</a></h4><p>![[../_resources/unknown_filename-85201e3e.png]]</p><h3 id="测试类" tabindex="-1">测试类 <a class="header-anchor" href="#测试类" aria-label="Permalink to &quot;测试类&quot;">​</a></h3><pre><code>public class ScheduledTest {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(SecheduledConfig.class);
    }
}
</code></pre><h2 id="事件机制" tabindex="-1">事件机制 <a class="header-anchor" href="#事件机制" aria-label="Permalink to &quot;事件机制&quot;">​</a></h2><h4 id="创建事件配置类" tabindex="-1">创建事件配置类 <a class="header-anchor" href="#创建事件配置类" aria-label="Permalink to &quot;创建事件配置类&quot;">​</a></h4><pre><code>@Configuration
@ComponentScan(basePackages= {&quot;com.aaa.event&quot;})
public class EventConfig {}
</code></pre><h4 id="创建事件信息类" tabindex="-1">创建事件信息类 <a class="header-anchor" href="#创建事件信息类" aria-label="Permalink to &quot;创建事件信息类&quot;">​</a></h4><pre><code>public class MyEvent extends ApplicationEvent {
    private String message; 
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public MyEvent(Object source,String message) {
        super(source);
        this.message=message;
    }
    private static final long serialVersionUID = 1L;
}
</code></pre><h4 id="创建发布者" tabindex="-1">创建发布者 <a class="header-anchor" href="#创建发布者" aria-label="Permalink to &quot;创建发布者&quot;">​</a></h4><pre><code>@Component
public class MyPublisher {
    @Autowired
    ApplicationContext applicationContext;
    public void publish(String message) {
        applicationContext.publishEvent(new MyEvent(this, message));
    }
}
</code></pre><h4 id="创建接收者" tabindex="-1">创建接收者 <a class="header-anchor" href="#创建接收者" aria-label="Permalink to &quot;创建接收者&quot;">​</a></h4><pre><code>@Component
public class Mylistener implements ApplicationListener&lt;MyEvent&gt; {
    @Override
    public void onApplicationEvent(MyEvent event) {
        String message= event.getMessage();
        System.out.println(&quot;接受的消息：&quot;+message);  
    }
}
</code></pre><h4 id="创建事件测试类" tabindex="-1">创建事件测试类 <a class="header-anchor" href="#创建事件测试类" aria-label="Permalink to &quot;创建事件测试类&quot;">​</a></h4><pre><code>public class EventTest {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(EventConfig.class);
        MyPublisher mp = (MyPublisher)ac.getBean(&quot;myPublisher&quot;);
        mp.publish(&quot;hahahaha&quot;);
    }
}
</code></pre>`,23)]))}const g=a(i,[["render",r]]);export{h as __pageData,g as default};
