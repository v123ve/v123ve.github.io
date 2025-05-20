import{_ as e,c as r,a3 as a,o as n}from"./chunks/framework.BaR4VHXY.js";const p=JSON.parse('{"title":"jdbc","description":"","frontmatter":{"Created at":"2019-03-30T00:00:00.000Z","Last updated at":"2019-03-30T00:00:00.000Z","tags":["java"]},"headers":[],"relativePath":"zh-CN/学习笔记/jdbc.md","filePath":"zh-CN/学习笔记/jdbc.md","lastUpdated":null}'),o={name:"zh-CN/学习笔记/jdbc.md"};function d(i,t,s,u,l,c){return n(),r("div",null,t[0]||(t[0]=[a(`<h1 id="jdbc" tabindex="-1">jdbc <a class="header-anchor" href="#jdbc" aria-label="Permalink to &quot;jdbc&quot;">​</a></h1><h3 id="jdbc-1" tabindex="-1">jdbc <a class="header-anchor" href="#jdbc-1" aria-label="Permalink to &quot;jdbc&quot;">​</a></h3><pre><code>        // 1.加载驱动
        // ClassLoader.getClassLoader通过类装载器装载实现类
        // 实现了Java.sql.Driver接口的类就是驱动类，通过装载器加载驱动
        Class.forName(&quot;com.mysql.jdbc.Driver&quot;);
        // 2.创建连接
        Connection conn = DriverManager.getConnection(&quot;jdbc:mysql:///db93&quot;, &quot;root&quot;, &quot;&quot;);
        // 3.执行语句
        PreparedStatement preState = conn.prepareStatement(&quot;select * from student&quot;);
        // 4.返回结果
        ResultSet resultSet = preState.executeQuery();
        // 5.遍历数据
        while (resultSet.next()) {
            System.out.println(&quot;姓名:&quot; + resultSet.getString(3) + &quot;,电话:&quot; + resultSet.getString(6) + &quot;，地址:&quot; + resultSet.getString(7));}
        // 6.关闭连接
        resultSet.close();
        preState.close();
        conn.close();
</code></pre><h3 id="rexdb-xml" tabindex="-1">rexdb.xml <a class="header-anchor" href="#rexdb-xml" aria-label="Permalink to &quot;rexdb.xml&quot;">​</a></h3><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt; 
&lt;!DOCTYPE configuration PUBLIC 
&quot;-//rex-soft.org//REXDB DTD 1.0//EN&quot; 
&quot;http://www.rex-soft.org/dtd/rexdb-1-config.dtd&quot;&gt;
&lt;configuration&gt;
    &lt;properties path=&quot;jdbc.properties&quot;&gt;&lt;/properties&gt;
    &lt;dataSource&gt;
        &lt;property name=&quot;driverClassName&quot; value=&quot;\${jdbc.driver}&quot; /&gt;
       &lt;property name=&quot;url&quot; value=&quot;\${jdbc.url}&quot; /&gt;
        &lt;property name=&quot;username&quot; value=&quot;\${jdbc.username}&quot; /&gt;
        &lt;property name=&quot;password&quot; value=&quot;\${jdbc.password}&quot; /&gt;
    &lt;/dataSource&gt;
&lt;/configuration&gt;
</code></pre><h3 id="dao" tabindex="-1">dao <a class="header-anchor" href="#dao" aria-label="Permalink to &quot;dao&quot;">​</a></h3><pre><code>public class GradeDao {
    public int insert(Grade grade) throws DBException {
        String string = &quot;insert into grade values(?,?)&quot;;
        return DB.update(string, new Object[] { grade.getGradeid(), grade.getGradename() });
    }
    public int insertObject(Grade grade) throws DBException {
        String string = &quot;insert into grade values(#{gradeid},#{gradename})&quot;;
        return DB.update(string, grade);
    }
    public List&lt;RMap&gt; findAll() throws DBException {
        String string = &quot;select * from grade&quot;;
        return DB.getMapList(string);
    }
    public List&lt;Grade&gt; findAllObject() throws DBException {
        String string = &quot;select * from grade&quot;;
        return DB.getList(string, Grade.class);
    }
}
</code></pre><h3 id="test" tabindex="-1">test <a class="header-anchor" href="#test" aria-label="Permalink to &quot;test&quot;">​</a></h3><pre><code>public class RexTest {
    @Test
    public void text1() throws DBException {
        GradeDao gradeDao = new GradeDao();
        Grade grade = new Grade();
        grade.setGradeid(6);
        grade.setGradename(&quot;神殿&quot;);
        gradeDao.insert(grade);
    }
    @Test
    public void text2() throws DBException {
        GradeDao gradeDao = new GradeDao();
        Grade grade = new Grade();
        grade.setGradeid(6);
        grade.setGradename(&quot;神殿&quot;);
        gradeDao.insertObject(grade);
    }
    @Test
    public void text3() throws DBException {
        GradeDao gradeDao = new GradeDao();
        List&lt;RMap&gt; findAll = gradeDao.findAll();
        for (RMap rMap : findAll) {
            System.out.println(rMap.getString(&quot;gradename&quot;));
        }
    }
    @Test
    public void text4() throws DBException {
        GradeDao gradeDao = new GradeDao();
        List&lt;Grade&gt; findAllObject = gradeDao.findAllObject();
        System.out.println(findAllObject);
    }
}
</code></pre>`,9)]))}const q=e(o,[["render",d]]);export{p as __pageData,q as default};
