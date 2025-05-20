import{_ as n,c as t,a3 as r,o as i}from"./chunks/framework.BaR4VHXY.js";const p=JSON.parse('{"title":"使用Heritrix 爬取网络资源","description":"","frontmatter":{"Created at":"2019-06-12T00:00:00.000Z","Last updated at":"2019-06-12T00:00:00.000Z","tags":["大数据","heritrix","lucene"]},"headers":[],"relativePath":"zh-CN/学习笔记/使用Heritrix 爬取网络资源.md","filePath":"zh-CN/学习笔记/使用Heritrix 爬取网络资源.md","lastUpdated":null}'),a={name:"zh-CN/学习笔记/使用Heritrix 爬取网络资源.md"};function o(l,e,s,u,c,d){return i(),t("div",null,e[0]||(e[0]=[r(`<h1 id="使用heritrix-爬取网络资源" tabindex="-1">使用Heritrix 爬取网络资源 <a class="header-anchor" href="#使用heritrix-爬取网络资源" aria-label="Permalink to &quot;使用Heritrix 爬取网络资源&quot;">​</a></h1><h4 id="使用heritrix-爬取网络资源-1" tabindex="-1">使用Heritrix 爬取网络资源 <a class="header-anchor" href="#使用heritrix-爬取网络资源-1" aria-label="Permalink to &quot;使用Heritrix 爬取网络资源&quot;">​</a></h4><h5 id="什么是网络爬虫" tabindex="-1">什么是网络爬虫 <a class="header-anchor" href="#什么是网络爬虫" aria-label="Permalink to &quot;什么是网络爬虫&quot;">​</a></h5><p>网络爬虫（又被称为网页蜘蛛，网络机器人，在FOAF社区中间，更经常的称为网页追逐者），是一种按照一定的规则，自动地抓取万维网信息的程序或者脚本。</p><h5 id="下载安装heritrix" tabindex="-1">下载安装Heritrix <a class="header-anchor" href="#下载安装heritrix" aria-label="Permalink to &quot;下载安装Heritrix&quot;">​</a></h5><p>Heritrix 是一个由 java 开发的、开源的网络爬虫，用户可以使用它来从网上抓取想要的资源。其最出色之处在于它良好的可扩展性，方便用户实现自己的抓取逻辑。</p><ol><li>创建java工程MyHeritrix。</li></ol><ul><li>将heritrix-3.1.0-dist\\heritrix-3.1.0\\lib下面的所有jar包拷贝至java工程MyHeritrix的lib目录。</li><li>将\\heritrix-3.1.0-src\\heritrix-3.1.0下面commons，engine，modules的源码拷贝至java工程MyHeritrix的src目录。</li><li>运行入口类org.archive.crawler.Heritrix，右键run Configurations,参数如下图： ![[../_resources/unknown_filename-9ae2f984.png]] ![[../_resources/unknown_filename-19ffc85d.png]] 启动成功页面： ![[../_resources/unknown_filename-aa0c9a82.png]]</li></ul><h5 id="配置heritrix" tabindex="-1">配置Heritrix <a class="header-anchor" href="#配置heritrix" aria-label="Permalink to &quot;配置Heritrix&quot;">​</a></h5><p>使用<a href="https://localhost:8443/%EF%BC%8C%E8%BF%9B%E5%85%A5heritrix%E7%9A%84%E7%AE%A1%E7%90%86%E9%A1%B5%E9%9D%A2" target="_blank" rel="noreferrer">https://localhost:8443/，进入heritrix的管理页面</a> ![[../_resources/unknown_filename-49c7cb38.png]] ![[../_resources/unknown_filename-f2dd2ffc.png]] ![[../_resources/unknown_filename-b763898d.png]] ![[../_resources/unknown_filename-efd8d9be.png]] ![[../_resources/unknown_filename-3e4f44f4.png]] ![[../_resources/unknown_filename-38023136.png]] ![[../_resources/unknown_filename-3f45bf8d.png]] ![[../_resources/unknown_filename-998b4492.png]]</p><h5 id="开始爬取数据" tabindex="-1">开始爬取数据 <a class="header-anchor" href="#开始爬取数据" aria-label="Permalink to &quot;开始爬取数据&quot;">​</a></h5><ol><li>点击“build”编译当前的配置。</li><li>点击“launch”按钮运行当前任务至挂起状态，如果job已经运行，则先点击“teardown”按钮；</li><li>这时任务处于挂起状态，unpause按钮不可用，需要刷新页面，然后点击“unpause”即立即启动任务。 ![[../_resources/unknown_filename-ea9ac387.png]] ![[../_resources/unknown_filename-f30c24f8.png]]</li></ol><h4 id="使用jsoup解析html文件" tabindex="-1">使用jsoup解析html文件 <a class="header-anchor" href="#使用jsoup解析html文件" aria-label="Permalink to &quot;使用jsoup解析html文件&quot;">​</a></h4><h5 id="jsoup简介" tabindex="-1">jsoup简介 <a class="header-anchor" href="#jsoup简介" aria-label="Permalink to &quot;jsoup简介&quot;">​</a></h5><p>jsoup 是一款Java 的HTML解析器，可直接解析某个URL地址、HTML文本内容。它提供了一套非常省力的API，可通过DOM，CSS以及类似于jQuery的操作方法来取出和操作数据。具体api可以参考下面的链接。 <a href="http://www.open-open.com/jsoup/selector-syntax.htm" target="_blank" rel="noreferrer">http://www.open-open.com/jsoup/selector-syntax.htm</a> ![[../_resources/unknown_filename-a87816ca.png]]</p><h5 id="编写htmlparser-java" tabindex="-1">编写HtmlParser.java <a class="header-anchor" href="#编写htmlparser-java" aria-label="Permalink to &quot;编写HtmlParser.java&quot;">​</a></h5><p>按照下面html页面的内容，摘取tile，keywords，description，canonical信息保存至对应文件中。 ![[../_resources/unknown_filename-161224c6.png]] ![[../_resources/unknown_filename-78f303dd.png]] ![[../_resources/unknown_filename-51f54165.png]] ![[../_resources/unknown_filename-be3d533b.png]] 递归调用parserHtml方法，解析所有的html文件 ![[../_resources/unknown_filename-ca41068d.png]] 测试效果，可以发现爬取的html都被解析成我们想要的文件了： ![[../_resources/unknown_filename-7aa78937.png]] ![[../_resources/unknown_filename-e9d2dc51.png]]</p><h4 id="使用lucene实现全文搜索" tabindex="-1">使用lucene实现全文搜索 <a class="header-anchor" href="#使用lucene实现全文搜索" aria-label="Permalink to &quot;使用lucene实现全文搜索&quot;">​</a></h4><h5 id="什么是lucene" tabindex="-1">什么是lucene？ <a class="header-anchor" href="#什么是lucene" aria-label="Permalink to &quot;什么是lucene？&quot;">​</a></h5><p>Lucene是apache下的一个开放源代码的全文检索引擎工具包，通过它可以实现全文检索。</p><h5 id="中文分词器ikanalyzer简介" tabindex="-1">中文分词器IKanalyzer简介 <a class="header-anchor" href="#中文分词器ikanalyzer简介" aria-label="Permalink to &quot;中文分词器IKanalyzer简介&quot;">​</a></h5><p>IKAnalyzer是一个开源的，基于java语言开发的轻量级的中文分词工具包从2006年12月推出1.0版开始，IKAnalyzer已经推出 了3个大版本。最初，它是以开源项目Lucene为应用主体的，结合词典分词和文法分析算法的中文分词组件。新版本的IKAnalyzer3.0则发展为 面向Java的公用分词组件，独立于Lucene项目，同时提供了对Lucene的默认优化实现。 下面是测试分词器效果： ![[../_resources/unknown_filename-06b633a7.png]] ![[../_resources/unknown_filename-c42c9f60.png]] 添加IkAnalyzer配置文件，在扩展词典中加入“陈建”，在停止词典中加入“的吧呢” ![[../_resources/unknown_filename-116412d6.png]] ![[../_resources/unknown_filename-d613bd83.png]] 再次运行测试类发现， ![[../_resources/unknown_filename-9de8029a.png]]</p><h5 id="创建索引" tabindex="-1">创建索引 <a class="header-anchor" href="#创建索引" aria-label="Permalink to &quot;创建索引&quot;">​</a></h5><pre><code>// 1：设置索引存放的目录
FSDirectory directory = FSDirectory.open(Paths.get(&quot;D:\\\\baiduIndex&quot;));
// 2:创建一个分词器
IKAnalyzer ikAnalyzer = new IKAnalyzer();
// 3:创建一个索引写入器配置对象
IndexWriterConfig indexWriterConfig = new IndexWriterConfig(ikAnalyzer);
// 4:创建一个索引写入器
IndexWriter indexWriter = new IndexWriter(directory, indexWriterConfig);
// 5：提取内容从文本文件中（D:\\htmlParse）
File file = new File(&quot;D:\\\\htmlParse&quot;);
File[] listFiles = file.listFiles();
BufferedReader br = null;
for (int i = 0; i &lt; listFiles.length; i++) {
    String line = &quot;&quot;;
    int count = 0;
    String tile = &quot;&quot;;// 标题
    String keywords = &quot;&quot;;// 关键字
    String description = &quot;&quot;;// 描述
    String url = &quot;&quot;;// url
    File txtfile = listFiles[i];
    br = new BufferedReader(new FileReader(txtfile));
    // 逐行读取文本文件中的内容
    while ((line = br.readLine()) != null) {
        count++;
        if (count == 1) {
            tile = line;
        } else if (count == 2) {
            keywords = line;
        } else if (count == 3) {
            description = line;
        } else if (count == 4) {
            url = line;
        }

    }
    //6， 创建一个lencen文档对象，保存从txt文档中读取的信息
    Document doc = new Document();
    // 分别创建四个文本属性接收信息
    TextField tileTextField = new TextField(&quot;tile&quot;, tile, Store.YES);
    TextField keywordsTextField = new TextField(&quot;keywords&quot;, keywords,
            Store.YES);
    TextField descriptionTextField = new TextField(&quot;description&quot;,
            description, Store.YES);
    TextField urlTextField = new TextField(&quot;url&quot;, url, Store.YES);
    doc.add(tileTextField);
    doc.add(keywordsTextField);
    doc.add(descriptionTextField);
    doc.add(urlTextField);
    //7， 创建一个lencen文档对象，保存从txt文档中读取的信息
    indexWriter.addDocument(doc);

}
br.close();
indexWriter.close();
</code></pre><h5 id="查询索引" tabindex="-1">查询索引 <a class="header-anchor" href="#查询索引" aria-label="Permalink to &quot;查询索引&quot;">​</a></h5><pre><code>/**
 * @description 去索引库中查询索引，根据输入的关键字
 */
@Service
public class SelectIndex {
	//根据输入的关键字，返回一个封装有html信息（title,keywods,description,url）的集合List&lt;News&gt;	
	public  List&lt;News&gt; selectIndexByKey(String key) {
		try {
			//1:设置索引存放的目录
			FSDirectory directory = FSDirectory.open(Paths.get(&quot;D:\\\\baiduIndex&quot;));
			//2:创建一个索引读取器
			DirectoryReader open = DirectoryReader.open(directory);
			//3:创建索引的查找器
			IndexSearcher indexSearcher = new IndexSearcher(open);
			//4:创建查找对象
			QueryParser queryParser = new QueryParser(&quot;description&quot;,new IKAnalyzer());
			Query parse = queryParser.parse(key);
			TopDocs docs = indexSearcher.search(parse, 100);
			//5显示结果集
			ScoreDoc[] scoreDocs = docs.scoreDocs;
			List&lt;News&gt; newsList= new ArrayList&lt;News&gt;();
			for (ScoreDoc sd : scoreDocs) {
				//根据编号获取内容
				Document doc = indexSearcher.doc(sd.doc);
				String title=doc.get(&quot;tile&quot;);
				String keywords=doc.get(&quot;keywords&quot;);
				String description=doc.get(&quot;description&quot;);
				String url=doc.get(&quot;url&quot;);
				News news= new News(title,keywords,description,url);
				newsList.add(news);
			}
			return newsList;
		} catch (Exception e) {
			System.out.println(&quot;查询出错了！&quot;);
		}
		return null;
	}
}
</code></pre><h5 id="创建搜索引擎" tabindex="-1">创建搜索引擎 <a class="header-anchor" href="#创建搜索引擎" aria-label="Permalink to &quot;创建搜索引擎&quot;">​</a></h5><ol><li>创建web工程 ![[../_resources/unknown_filename-97aa99b8.png]]</li><li>创建搜索业务控制器SearchController ![[../_resources/unknown_filename-9e5d4ff2.png]]</li><li>测试搜索引擎 ![[../_resources/unknown_filename-80466314.png]] ![[../_resources/unknown_filename-e75a1de1.png]]</li></ol>`,28)]))}const f=n(a,[["render",o]]);export{p as __pageData,f as default};
