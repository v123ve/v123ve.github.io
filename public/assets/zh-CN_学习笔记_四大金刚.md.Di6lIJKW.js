import{_ as t,c as e,a3 as n,o as r}from"./chunks/framework.BaR4VHXY.js";const g=JSON.parse('{"title":"四大金刚","description":"","frontmatter":{"Created at":"2019-03-29T00:00:00.000Z","Last updated at":"2019-04-28T00:00:00.000Z","tags":["ssm整合","jdbc","事务","测试"]},"headers":[],"relativePath":"zh-CN/学习笔记/四大金刚.md","filePath":"zh-CN/学习笔记/四大金刚.md","lastUpdated":null}'),o={name:"zh-CN/学习笔记/四大金刚.md"};function l(i,a,c,d,s,p){return r(),e("div",null,a[0]||(a[0]=[n(`<h1 id="四大金刚" tabindex="-1">四大金刚 <a class="header-anchor" href="#四大金刚" aria-label="Permalink to &quot;四大金刚&quot;">​</a></h1><h3 id="四大金刚-1" tabindex="-1">四大金刚 <a class="header-anchor" href="#四大金刚-1" aria-label="Permalink to &quot;四大金刚&quot;">​</a></h3><pre><code>oracle
URL=&quot;jdbc:oracle:thin:@localhost:1521:orcl&quot;;
DRIVER=&quot;oracle.jdbc.driver.OracleDriver&quot;;
mysql
Url=&quot;jdbc:mysql://localhost:3306/db93?useUnicode=true&amp;characterEncoding=utf-8&quot;;
Driver=&quot;com.mysql.jdbc.Driver&quot;;
</code></pre><h4 id="mysql外键设置" tabindex="-1">Mysql外键设置 <a class="header-anchor" href="#mysql外键设置" aria-label="Permalink to &quot;Mysql外键设置&quot;">​</a></h4><p>在设置外键的时候，删除时和更新时两列有四个值可以选择：CASCADE、NO ACTION、RESTRICT、SET NULL，它们的区别如下：</p><ul><li><p>CASCADE：父表delete、update的时候，子表会delete、update掉关联记录；</p></li><li><p>SET NULL：父表delete、update的时候，子表会将关联记录的外键字段所在列设为null，所以注意在设计子表时外键不能设为not null；</p></li><li><p>RESTRICT：如果想要删除父表的记录时，而在子表中有关联该父表的记录，则不允许删除父表中的记录；</p></li><li><p>NO ACTION：同 RESTRICT，也是首先先检查外键；</p></li></ul><h3 id="pom-xml" tabindex="-1">pom.xml <a class="header-anchor" href="#pom-xml" aria-label="Permalink to &quot;pom.xml&quot;">​</a></h3><pre><code>        &lt;!-- mysql数据库相关jar --&gt;
        &lt;dependency&gt;           
            &lt;groupId&gt;org.springframework&lt;/groupId&gt;
            &lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt;
            &lt;version&gt;\${spring.version}&lt;/version&gt;
        &lt;/dependency&gt;
         &lt;dependency&gt;
            &lt;groupId&gt;mysql&lt;/groupId&gt;            
            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
            &lt;version&gt;5.1.38&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.alibaba&lt;/groupId&gt;
            &lt;artifactId&gt;druid&lt;/artifactId&gt;
            &lt;version&gt;1.1.10&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;!-- 测试相关jar --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;junit&lt;/groupId&gt;
            &lt;artifactId&gt;junit&lt;/artifactId&gt;
            &lt;version&gt;4.12&lt;/version&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;            
            &lt;groupId&gt;org.springframework&lt;/groupId&gt;
            &lt;artifactId&gt;spring-test&lt;/artifactId&gt;
            &lt;version&gt;5.1.5.RELEASE&lt;/version&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
</code></pre><h4 id="事务的隔离级别有哪几种" tabindex="-1">事务的隔离级别有哪几种？ <a class="header-anchor" href="#事务的隔离级别有哪几种" aria-label="Permalink to &quot;事务的隔离级别有哪几种？&quot;">​</a></h4><p>spring的事务管理器（jdbc，jpa，hibrenate，jdo） 在需要使用事务管理的方法上加上注解@Transactional 在类上加@Transactional说明类中的所有方法都支持事务管理。 1、脏读：事务A读取了事务B更新的数据，然后B回滚操作，那么A读取到的数据是脏数据 2、不可重复读：事务 A 多次读取同一数据，事务 B 在事务A多次读取的过程中，对数据作了更新并提交，导致事务A多次读取同一数据时，结果 不一致。 3、幻读：系统管理员A将数据库中所有学生的成绩从具体分数改为ABCDE等级，但是系统管理员B就在这个时候插入了一条具体分数的记录，当系统管理员A改结束后发现还有一条记录没有改过来，就好像发生了幻觉一样，这就叫幻读。 　　小结：不可重复读的和幻读很容易混淆，不可重复读侧重于修改，幻读侧重于新增或删除。解决不可重复读的问题只需锁住满足条件的行，解决幻读需要锁表。 ![[../_resources/unknown_filename-44585a74.png]]  还有default：根据数据库调整 不是事务隔离级别设置得越高越好，事务隔离级别设置得越高，意味着势必要花手段去加锁用以保证事务的正确性，那么效率就要降低，因此实际开发中往往要在效率和并发正确性之间做一个取舍，一般情况下会设置为READ_COMMITED，此时避免了脏读，并发性也还不错，之后再通过一些别的手段去解决不可重复读和幻读的问题就好了。</p><h4 id="transactional-的所有可选属性如下" tabindex="-1">@Transactional 的所有可选属性如下: <a class="header-anchor" href="#transactional-的所有可选属性如下" aria-label="Permalink to &quot;@Transactional 的所有可选属性如下:&quot;">​</a></h4><p>@Transactional 只能被应用到public方法上, 对于其它非public的方法,如果标记了@Transactional也不会报错,但方法没有事务功能. 默认情况下,事务方法遇到RuntiomeException 时会回滚 . 遇到受检查的异常是不会回滚的. 要想所有异常都回滚,要加上 @Transactional(rollbackFor={Exception.class,其它异常}) ![[../_resources/unknown_filename-e2579686.png]]</p><h4 id="事务的传播属性" tabindex="-1">事务的传播属性 <a class="header-anchor" href="#事务的传播属性" aria-label="Permalink to &quot;事务的传播属性&quot;">​</a></h4><p>![[../_resources/unknown_filename-429acdc9.png]]</p><h4 id="dbconfig-java" tabindex="-1">DBConfig.java <a class="header-anchor" href="#dbconfig-java" aria-label="Permalink to &quot;DBConfig.java&quot;">​</a></h4><p>使用jdbctemplate来操作数据库</p><pre><code>@Configuration
public class DBConfig {
    /**
     * 获取数据源对象
     */
    @Bean
    public DataSource getDataSource() {
        DruidDataSource ds = new DruidDataSource();
        ds.setUsername(&quot;root&quot;);
        ds.setPassword(&quot;&quot;);
        ds.setUrl(&quot;jdbc:mysql://localhost:3306/db93?useUnicode=true&amp;characterEncoding=utf-8&quot;);
        ds.setDriverClassName(&quot;com.mysql.jdbc.Driver&quot;);
        return ds;
    }
    /**
     * 获取jdbc模版对象
     */
    @Bean
    public JdbcTemplate getJdbcTemplate() {
        JdbcTemplate jt = new JdbcTemplate();
        jt.setDataSource(getDataSource());
        return jt;
    }
   /**
    * 配置事务管理器
    */
    @Bean
    publicDataSourceTransactionManager getDataSourceTransactionManager() {
        DataSourceTransactionManager dataSourceTransactionManager=new DataSourceTransactionManager();
        dataSourceTransactionManager.setDataSource(getDataSource());
        return dataSourceTransactionManager;
    }
}
</code></pre><h4 id="springconfig-java" tabindex="-1">SpringConfig.java <a class="header-anchor" href="#springconfig-java" aria-label="Permalink to &quot;SpringConfig.java&quot;">​</a></h4><pre><code>@EnableTransactionManagement
</code></pre><h4 id="junit4test-java" tabindex="-1">Junit4Test.java <a class="header-anchor" href="#junit4test-java" aria-label="Permalink to &quot;Junit4Test.java&quot;">​</a></h4><pre><code>//指定测试类使用SpringJUnit4
@RunWith(SpringJUnit4ClassRunner.class&lt;/u&gt;)
//加载测试需要的配置类，为了初始化spring容器
@ContextConfiguration(classes= {SpringConfig.class,DBConfig.class})
</code></pre><h4 id="daoimpl-java" tabindex="-1">DaoImpl.java <a class="header-anchor" href="#daoimpl-java" aria-label="Permalink to &quot;DaoImpl.java&quot;">​</a></h4><pre><code>@Repository
public class DeptDaoImpl implements DeptDao {
    @Autowired
    private JdbcTemplate jt;
    @Override
    public void insertDao() {
        jt.update(&quot;insert into dept values(2,&#39;aaa&#39;,&#39;sky&#39;)&quot;);
    }
}
</code></pre>`,23)]))}const h=t(o,[["render",l]]);export{g as __pageData,h as default};
