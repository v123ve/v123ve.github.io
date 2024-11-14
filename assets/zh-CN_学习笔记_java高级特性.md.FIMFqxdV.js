import{_ as e,c as t,a3 as n,o}from"./chunks/framework.BaR4VHXY.js";const q=JSON.parse('{"title":"java高级特性","description":"","frontmatter":{"Created at":"2019-03-25T00:00:00.000Z","Last updated at":"2019-05-20T00:00:00.000Z","tags":["java反射","埋点","性能监控"]},"headers":[],"relativePath":"zh-CN/学习笔记/java高级特性.md","filePath":"zh-CN/学习笔记/java高级特性.md","lastUpdated":null}'),l={name:"zh-CN/学习笔记/java高级特性.md"};function i(r,a,s,d,p,u){return o(),t("div",null,a[0]||(a[0]=[n(`<h1 id="java高级特性" tabindex="-1">java高级特性 <a class="header-anchor" href="#java高级特性" aria-label="Permalink to &quot;java高级特性&quot;">​</a></h1><h2 id="java高级特性-1" tabindex="-1">java高级特性 <a class="header-anchor" href="#java高级特性-1" aria-label="Permalink to &quot;java高级特性&quot;">​</a></h2><h4 id="反射机制的作用" tabindex="-1">反射机制的作用？ <a class="header-anchor" href="#反射机制的作用" aria-label="Permalink to &quot;反射机制的作用？&quot;">​</a></h4><ul><li><p>在运行时可以获取任意类的构造方法，并且执行该构造方法，实例化一个对象。</p></li><li><p>在运行时可以获取任意类的属性，并且可以获取属性值，页能修改该值。</p></li><li><p>在运行时可以获取任意类的方法，并且可以执行该方法。</p></li><li><p>在运行时可以获取任意类的注解，可以获取注解的值。</p></li></ul><h4 id="哪里用到反射" tabindex="-1">哪里用到反射？ <a class="header-anchor" href="#哪里用到反射" aria-label="Permalink to &quot;哪里用到反射？&quot;">​</a></h4><p>jdbc连接数据库的时候，classForName。  所有的orm框架都使用到了反射。例如mybatis，hibernate，springjdbc。</p><h4 id="获取class类型的对象的三种方式" tabindex="-1">获取class类型的对象的三种方式： <a class="header-anchor" href="#获取class类型的对象的三种方式" aria-label="Permalink to &quot;获取class类型的对象的三种方式：&quot;">​</a></h4><p>第一种：class.forName(&quot;类的全限定名&quot;) 第二种：通过.class 的方式 第三种：通过对象.getClass();</p><h4 id="实现通用dao接口mydaoimpl" tabindex="-1">实现通用dao接口MyDaoImpl <a class="header-anchor" href="#实现通用dao接口mydaoimpl" aria-label="Permalink to &quot;实现通用dao接口MyDaoImpl&quot;">​</a></h4><pre><code>public class MyDaoImpl&lt;T&gt; implements MyDao&lt;T&gt; {
    //将对象obj保存到数据库中
    @Override
    public void save(T obj) throws Exception {
        //使用反射获取Class对象
        Class&lt;? extends Object&gt; clazz = obj.getClass();
        //获取AnnEntity注解信息，从注解中再次获取保存的表名
        AnnEntity annotation = clazz.getAnnotation(AnnEntity.class);
        String tableName = annotation.value();//获取表名
        //获取列名，属性注解的值
        Field[] fields = clazz.getDeclaredFields();
        //定义一个StringBuilder，来拼接所有的列名
        StringBuilder  fieldNames= new StringBuilder();
        //定义一个list&lt;Object&gt;集合来 封装所有的属性值
        List&lt;Object&gt; fieldvalues= new ArrayList&lt;Object&gt;();
        for (Field field : fields) {
            //获取当前方法名
            PropertyDescriptor pd = new PropertyDescriptor(field.getName(), clazz);
            System.out.println(field.getAnnotation(AnnCol.class));
            fieldNames.append(field.getAnnotation(AnnCol.class).value()).append(&quot;,&quot;);
            fieldvalues.add(&quot;&#39;&quot;+pd.getReadMethod().invoke(obj)+&quot;&#39;&quot;);
        }
        //开始操作数据库
        //拼接sql
        StringBuilder sql=new StringBuilder();
        fieldNames.deleteCharAt(fieldNames.length()-1);//删除最后一个逗号
        sql.append(&quot;insert into &quot;).append(tableName).append(&quot; ( &quot;).append(fieldNames.toString()).append(&quot; ) values ( &quot;);
        sql.append(fieldvalues).append(&quot;)&quot;);
        Connection connection = BaseDao.getConnection();//获取数据库连接
        System.out.println(sql.toString().replace(&quot;[&quot;, &quot;&quot;).replace(&quot;]&quot;, &quot;&quot;));
        PreparedStatement ps = connection.prepareStatement(sql.toString().replace(&quot;[&quot;, &quot;&quot;).replace(&quot;]&quot;, &quot;&quot;));
        ps.execute();
    }
</code></pre>`,10)]))}const h=e(l,[["render",i]]);export{q as __pageData,h as default};
