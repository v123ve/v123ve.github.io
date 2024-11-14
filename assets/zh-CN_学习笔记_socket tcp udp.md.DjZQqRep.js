import{_ as t,c as n,a3 as a,o as r}from"./chunks/framework.BaR4VHXY.js";const g=JSON.parse('{"title":"socket tcp udp","description":"","frontmatter":{"Created at":"2019-03-09T00:00:00.000Z","Last updated at":"2019-03-25T00:00:00.000Z","tags":["java网络编程"]},"headers":[],"relativePath":"zh-CN/学习笔记/socket tcp udp.md","filePath":"zh-CN/学习笔记/socket tcp udp.md","lastUpdated":null}'),o={name:"zh-CN/学习笔记/socket tcp udp.md"};function s(p,e,c,i,u,d){return r(),n("div",null,e[0]||(e[0]=[a(`<h1 id="socket-tcp-udp" tabindex="-1">socket tcp udp <a class="header-anchor" href="#socket-tcp-udp" aria-label="Permalink to &quot;socket tcp udp&quot;">​</a></h1><h2 id="socket-tcp-udp-1" tabindex="-1">socket tcp  udp <a class="header-anchor" href="#socket-tcp-udp-1" aria-label="Permalink to &quot;socket tcp  udp&quot;">​</a></h2><h3 id="socket-网络上的两个程序通过一个双向的通信连接实现数据的交换-这个连接的一端称为一个socket。" tabindex="-1">socket:网络上的两个程序通过一个双向的通信连接实现数据的交换，这个连接的一端称为一个socket。 <a class="header-anchor" href="#socket-网络上的两个程序通过一个双向的通信连接实现数据的交换-这个连接的一端称为一个socket。" aria-label="Permalink to &quot;socket:网络上的两个程序通过一个双向的通信连接实现数据的交换，这个连接的一端称为一个socket。&quot;">​</a></h3><p>建立网络通信连接至少要一对端口号(socket)。socket本质是编程接口(API)。</p><p>Socket利用网间网通信设施实现进程通信，对通信设施细节毫不关心，要能提供足够通信能力。</p><p>Socket实质上提供了进程通信的端点。进程通信之前，双方首先必须各自创建一个端点。 serverSocket在java的net包下面。此类实现服务器套接字</p><p>![[../_resources/unknown_filename-790167ec.png]] ![[../_resources/unknown_filename-3d4ecd9a.png]] ![[../_resources/unknown_filename-b7507e2c.png]]</p><h3 id="java实现tcp通信" tabindex="-1">java实现tcp通信 <a class="header-anchor" href="#java实现tcp通信" aria-label="Permalink to &quot;java实现tcp通信&quot;">​</a></h3><p>![[../_resources/unknown_filename-9c4ab5b0.png]]</p><pre><code>/**
 * @description java实现&lt;u&gt;tcp&lt;/u&gt;的server端
 */
public class TcpBySocketServer {
    public static void main(String[] args) throws Exception {
        //使用&lt;u&gt;serversocket&lt;/u&gt;类创建服务器端
        ServerSocket server= new ServerSocket(7000);
        // 创建socket对象
        Socket socket = server.accept();
        //返回套接字的输入流
        InputStream inputStream = socket.getInputStream();
        //构建输入流bufferedReader对象
        BufferedReader in = new BufferedReader(new 
InputStreamReader(inputStream));
        //构建输出流&lt;u&gt;printwriter&lt;/u&gt;
        PrintWriter os = new PrintWriter(socket.getOutputStream(),true);
        //在控制台打印从客户端发送来的消息
        System.out.println(&quot;客户端：&quot;+in.readLine());
        //发送消息,将控制台输入的消息发送到客户端
        BufferedReader sin = new &lt;u&gt;BufferedReader&lt;/u&gt;(new 
InputStreamReader(System.in));
        String line = sin.readLine();
        //如果输入的消息不是bye，那么连接永不中断
        while(!&quot;bye&quot;.equals(line)) {
            os.println(line);//发送
            System.out.println(&quot;服务器端：&quot;+line);
            System.out.println(&quot;客户端：&quot;+in.readLine());//循环输出客户端的消息
            line=sin.readLine();// 循环读取输入的消息
        }
        //关闭连接
        os.close();
        in.close();
        sin.close();
        socket.close();
        server.close();
    }
}   
/**
 * @description java实现tcp的客户端
 */
public class TcpBySocketClient {
         public static void main(String[] args) throws Exception {
                   // 创建socket对象
                   Socket socket = new Socket(&quot;127.0.0.1&quot;, 7000);
                   //返回套接字的输入流
                   InputStream inputStream = socket.getInputStream();
                   //构建输入流bufferedReader对象
                   BufferedReader in = new BufferedReader(new InputStreamReader(inputStream));
                   //构建输出流printwriter
                   PrintWriter os = new PrintWriter(socket.getOutputStream(),true);
                   //在控制台打印从客户端发送来的消息
                   //System.out.println(&quot;客户端：&quot;+in.readLine());
                   //发送消息,将控制台输入的消息发送到客户端
                   BufferedReader sin = new BufferedReader(new InputStreamReader(System.in));
                   String line = sin.readLine();
                   //如果输入的消息不是bye，那么连接永不中断
                   while(!&quot;bye&quot;.equals(line)) {
                            os.println(line);//发送
                            System.out.println(&quot;服务器端：&quot;+line);
                            System.out.println(&quot;客户端：&quot;+in.readLine());//循环输出客户端的消息
                            line=sin.readLine();// 循环读取输入的消息
                   }
                   os.close();
                   in.close();
                   sin.close();
                   socket.close();                                                 }
}
</code></pre><p>加入想多个客户端连接同一个服务器 解决方案，使用多线程实现多个客户端访问。</p><h3 id="java实现upd通信" tabindex="-1">java实现upd通信 <a class="header-anchor" href="#java实现upd通信" aria-label="Permalink to &quot;java实现upd通信&quot;">​</a></h3><p>![[../_resources/unknown_filename-f24235b2.png]]</p><p>DatagramSocket类主要用于实现信息的发送和接收。</p><p>![[../_resources/unknown_filename-f0b3e0d0.png]]</p><p>DatagramPacket类用于包装需要发送或接收的信息</p><p>![[../_resources/unknown_filename-6ae9985f.png]]</p><pre><code>/**
 * @description upd 协议的服务器端
 */
public class UdpBySocketServer {
   public static void main(String[] args) throws 
Exception {
      byte[] buf= new byte[1024];
      DatagramSocket ds = new DatagramSocket(6000);
      DatagramPacket dp = new DatagramPacket(buf, 
1024);
      ds.receive(dp);//接受数据报文
      //获取消息
      String message= new String(dp.getData(),0,dp.getLength());
      System.out.println(message);
   }
}
/**
 * @description upd 协议的服务器端
 */
public class UdpBySocketClient {
         public static void main(String[] args) throws Exception {
                   //构建报文
                   String message=&quot;hello qy93&quot;;
                   //获取当前机器的InetAddress对象
                   InetAddress localHost = InetAddress.getLocalHost();
                   //public DatagramPacket(byte[] buf,int  length,InetAddress address,int port)
                   DatagramPacket dp = new DatagramPacket(message.getBytes(), 
message.length(),localHost,6000);
                   @SuppressWarnings(&quot;resource&quot;)
                   DatagramSocket ds = new DatagramSocket();
                   ds.send(dp);
         }
}
</code></pre><h3 id="tcp-传输控制协议-需要经过三次握手建立连接-四次挥手断开连接" tabindex="-1">tcp:传输控制协议, 需要经过三次握手建立连接, 四次挥手断开连接. <a class="header-anchor" href="#tcp-传输控制协议-需要经过三次握手建立连接-四次挥手断开连接" aria-label="Permalink to &quot;tcp:传输控制协议, 需要经过三次握手建立连接, 四次挥手断开连接.&quot;">​</a></h3><p>握手：</p><p>第一次: 客户端 - - &gt; 服务器 此时服务器知道了客户端要建立连接了</p><p>第二次: 客户端 &lt; - - 服务器 此时客户端知道服务器收到连接请求了</p><p>第三次: 客户端 - - &gt; 服务器 此时服务器知道客户端收到了自己的回应</p><p>挥手：</p><p>1, 客户端进程发出连接释放报文，并且停止发送数据。</p><p>2, 服务器收到连接释放报文，发出确认报文。</p><p>3, 客户端收到服务器的确认请求后，此时客户端就进入（终止等待2）状态，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最终数据）</p><p>4, 服务器将最后的数据发送完毕后，就向客户端发送连接释放报文，服务器就进入了LAST-ACK（最后确认）状态，等待客户端的确认。</p><p>5, 客户端收到服务器的连接释放报文后，必须发出确认，客户端就进入了TIME-WAIT（时间等待）状态。</p><p>6, 服务器只要收到了客户端发出的确认，立即进入CLOSED状态。同样，撤销TCB后，就结束了这次的TCP连接。服务器结束TCP连接的时间要比客户端早一些。</p><h2 id="udp-用户数据报协议" tabindex="-1">udp:用户数据报协议 <a class="header-anchor" href="#udp-用户数据报协议" aria-label="Permalink to &quot;udp:用户数据报协议&quot;">​</a></h2><p>TCP与UDP区别总结：</p><p>1、TCP面向连接（如打电话要先拨号建立连接）;UDP是无连接的，即发送数据之前不需要建立连接</p><p>2、TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达;UDP尽最大努力交付，即不保证可靠交付</p><p>Tcp通过校验和，重传控制，序号标识，滑动窗口、确认应答实现可靠传输。如丢包时的重发控制，还可以对次序乱掉的分包进行顺序控制。</p><p>3、UDP具有较好的实时性，工作效率比TCP高，适用于对高速传输和实时性有较高的通信或广播通信。</p><p>4.每一条TCP连接只能是点到点的;UDP支持一对一，一对多，多对一和多对多的交互通信</p><p>5、TCP对系统资源要求较多，UDP对系统资源要求较少。</p><p>tcp：（transfer control protocol）传输控制协议。面向连接的。三次握手，可靠。效率低,如ftp，smtp 等</p><p>udp：（user datapacket protocol）用户报文协议。面向无连接。不可靠，效率高。如qq，snmp，dns，在线视频。</p><h3 id="使用java模拟飞秋客户端发送消息" tabindex="-1">使用java模拟飞秋客户端发送消息 <a class="header-anchor" href="#使用java模拟飞秋客户端发送消息" aria-label="Permalink to &quot;使用java模拟飞秋客户端发送消息&quot;">​</a></h3><pre><code>/**
 * @description 使用java模拟飞秋客户端发送消息
 *      /** 1：version
         2：消息的编号，系统毫秒数代替
         3：发送的主机
         4;消息的类型
         5：消息的内容。
         * /
 */
public class FeiqTest {
    public static void main(String[] args) throws Exception {
        DatagramSocket &lt;u&gt;ds&lt;/u&gt; =  new DatagramSocket();
        String version=&quot;1_lbt4_0#128#000C29D68D8F#0#0#0#2.5a&quot;;
        Long id = new Date().getTime();
        String  user=&quot;女朋友&quot;;
        String host=&quot;PC-20170616LZU33&quot;;
        //long IPMSG_SENDMSG = 0x00000020;//常规消息
        long IPMSG_SENDMSG = 209;//飞秋震动
        String myMessage=&quot;I love you &quot;;
        String 
feiQmessage=version+&quot;:&quot;+id+&quot;:&quot;+user+&quot;:&quot;+host+&quot;:&quot;+IPMSG_SENDMSG+&quot;:&quot;+myMessage;
        InetAddress localHost = InetAddress.getLocalHost();
        //InetAddress localHost = InetAddress.getByName(&quot;192.168.1.17&quot;);
        byte[] bytes = feiQmessage.&lt;u&gt;getBytes&lt;/u&gt;(&quot;gbk&quot;);
        DatagramPacket dp = new DatagramPacket(bytes, 
bytes.length,localHost,2425);
        ds.send(dp);
    }
}
</code></pre>`,42)]))}const k=t(o,[["render",s]]);export{g as __pageData,k as default};
