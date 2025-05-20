---

Created at: 2019-06-12
Last updated at: 2019-06-12
tags: 
  - 大数据
  - heritrix
  - lucene

---

# 使用Heritrix 爬取网络资源


#### 使用Heritrix 爬取网络资源

##### 什么是网络爬虫

网络爬虫（又被称为网页蜘蛛，网络机器人，在FOAF社区中间，更经常的称为网页追逐者），是一种按照一定的规则，自动地抓取万维网信息的程序或者脚本。

##### 下载安装Heritrix

Heritrix 是一个由 java 开发的、开源的网络爬虫，用户可以使用它来从网上抓取想要的资源。其最出色之处在于它良好的可扩展性，方便用户实现自己的抓取逻辑。

1. 创建java工程MyHeritrix。

* 将heritrix-3.1.0-dist\heritrix-3.1.0\lib下面的所有jar包拷贝至java工程MyHeritrix的lib目录。
* 将\heritrix-3.1.0-src\heritrix-3.1.0下面commons，engine，modules的源码拷贝至java工程MyHeritrix的src目录。
* 运行入口类org.archive.crawler.Heritrix，右键run Configurations,参数如下图：
	![[../_resources/unknown_filename-9ae2f984.png]]
	![[../_resources/unknown_filename-19ffc85d.png]]
	启动成功页面：
	![[../_resources/unknown_filename-aa0c9a82.png]]

##### 配置Heritrix

使用https://xxx:8443/，进入heritrix的管理页面

##### 开始爬取数据

1. 点击“build”编译当前的配置。
2. 点击“launch”按钮运行当前任务至挂起状态，如果job已经运行，则先点击“teardown”按钮；
3. 这时任务处于挂起状态，unpause按钮不可用，需要刷新页面，然后点击“unpause”即立即启动任务。
	![[../_resources/unknown_filename-ea9ac387.png]]
	![[../_resources/unknown_filename-f30c24f8.png]]

#### 使用jsoup解析html文件

##### jsoup简介

jsoup 是一款Java 的HTML解析器，可直接解析某个URL地址、HTML文本内容。它提供了一套非常省力的API，可通过DOM，CSS以及类似于jQuery的操作方法来取出和操作数据。具体api可以参考下面的链接。
http://www.open-open.com/jsoup/selector-syntax.htm
![[../_resources/unknown_filename-a87816ca.png]]

##### 编写HtmlParser.java

按照下面html页面的内容，摘取tile，keywords，description，canonical信息保存至对应文件中。
![[../_resources/unknown_filename-161224c6.png]]
![[../_resources/unknown_filename-78f303dd.png]]
![[../_resources/unknown_filename-51f54165.png]]
![[../_resources/unknown_filename-be3d533b.png]]
递归调用parserHtml方法，解析所有的html文件
![[../_resources/unknown_filename-ca41068d.png]]
测试效果，可以发现爬取的html都被解析成我们想要的文件了：
![[../_resources/unknown_filename-7aa78937.png]]
![[../_resources/unknown_filename-e9d2dc51.png]]

#### 使用lucene实现全文搜索

##### 什么是lucene？

Lucene是apache下的一个开放源代码的全文检索引擎工具包，通过它可以实现全文检索。

##### 中文分词器IKanalyzer简介

IKAnalyzer是一个开源的，基于java语言开发的轻量级的中文分词工具包从2006年12月推出1.0版开始，IKAnalyzer已经推出 了3个大版本。最初，它是以开源项目Lucene为应用主体的，结合词典分词和文法分析算法的中文分词组件。新版本的IKAnalyzer3.0则发展为 面向Java的公用分词组件，独立于Lucene项目，同时提供了对Lucene的默认优化实现。
下面是测试分词器效果：
![[../_resources/unknown_filename-06b633a7.png]]
![[../_resources/unknown_filename-c42c9f60.png]]
添加IkAnalyzer配置文件，在扩展词典中加入“陈建”，在停止词典中加入“的吧呢”
![[../_resources/unknown_filename-116412d6.png]]
![[../_resources/unknown_filename-d613bd83.png]]
再次运行测试类发现，
![[../_resources/unknown_filename-9de8029a.png]]

##### 创建索引

    // 1：设置索引存放的目录
    FSDirectory directory = FSDirectory.open(Paths.get("D:\\baiduIndex"));
    // 2:创建一个分词器
    IKAnalyzer ikAnalyzer = new IKAnalyzer();
    // 3:创建一个索引写入器配置对象
    IndexWriterConfig indexWriterConfig = new IndexWriterConfig(ikAnalyzer);
    // 4:创建一个索引写入器
    IndexWriter indexWriter = new IndexWriter(directory, indexWriterConfig);
    // 5：提取内容从文本文件中（D:\htmlParse）
    File file = new File("D:\\htmlParse");
    File[] listFiles = file.listFiles();
    BufferedReader br = null;
    for (int i = 0; i < listFiles.length; i++) {
        String line = "";
        int count = 0;
        String tile = "";// 标题
        String keywords = "";// 关键字
        String description = "";// 描述
        String url = "";// url
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
        TextField tileTextField = new TextField("tile", tile, Store.YES);
        TextField keywordsTextField = new TextField("keywords", keywords,
                Store.YES);
        TextField descriptionTextField = new TextField("description",
                description, Store.YES);
        TextField urlTextField = new TextField("url", url, Store.YES);
        doc.add(tileTextField);
        doc.add(keywordsTextField);
        doc.add(descriptionTextField);
        doc.add(urlTextField);
        //7， 创建一个lencen文档对象，保存从txt文档中读取的信息
        indexWriter.addDocument(doc);
    
    }
    br.close();
    indexWriter.close();


##### 查询索引

    /**
     * @description 去索引库中查询索引，根据输入的关键字
     */
    @Service
    public class SelectIndex {
    	//根据输入的关键字，返回一个封装有html信息（title,keywods,description,url）的集合List<News>	
    	public  List<News> selectIndexByKey(String key) {
    		try {
    			//1:设置索引存放的目录
    			FSDirectory directory = FSDirectory.open(Paths.get("D:\\baiduIndex"));
    			//2:创建一个索引读取器
    			DirectoryReader open = DirectoryReader.open(directory);
    			//3:创建索引的查找器
    			IndexSearcher indexSearcher = new IndexSearcher(open);
    			//4:创建查找对象
    			QueryParser queryParser = new QueryParser("description",new IKAnalyzer());
    			Query parse = queryParser.parse(key);
    			TopDocs docs = indexSearcher.search(parse, 100);
    			//5显示结果集
    			ScoreDoc[] scoreDocs = docs.scoreDocs;
    			List<News> newsList= new ArrayList<News>();
    			for (ScoreDoc sd : scoreDocs) {
    				//根据编号获取内容
    				Document doc = indexSearcher.doc(sd.doc);
    				String title=doc.get("tile");
    				String keywords=doc.get("keywords");
    				String description=doc.get("description");
    				String url=doc.get("url");
    				News news= new News(title,keywords,description,url);
    				newsList.add(news);
    			}
    			return newsList;
    		} catch (Exception e) {
    			System.out.println("查询出错了！");
    		}
    		return null;
    	}
    }


##### 创建搜索引擎

1. 创建web工程
	![[../_resources/unknown_filename-97aa99b8.png]]
2. 创建搜索业务控制器SearchController
	![[../_resources/unknown_filename-9e5d4ff2.png]]
3. 测试搜索引擎
	![[../_resources/unknown_filename-80466314.png]]
	![[../_resources/unknown_filename-e75a1de1.png]]



