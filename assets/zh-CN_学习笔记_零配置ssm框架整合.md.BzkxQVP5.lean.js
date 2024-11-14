import{_ as e,c as n,a3 as a,o as l}from"./chunks/framework.BaR4VHXY.js";const u=JSON.parse('{"title":"零配置ssm框架整合","description":"","frontmatter":{"Created at":"2019-04-04T00:00:00.000Z","Last updated at":"2019-05-19T00:00:00.000Z","tags":["ssm整合"]},"headers":[],"relativePath":"zh-CN/学习笔记/零配置ssm框架整合.md","filePath":"zh-CN/学习笔记/零配置ssm框架整合.md","lastUpdated":null}'),o={name:"zh-CN/学习笔记/零配置ssm框架整合.md"};function r(g,t,i,s,c,p){return l(),n("div",null,t[0]||(t[0]=[a(`<h1 id="零配置ssm框架整合" tabindex="-1">零配置ssm框架整合 <a class="header-anchor" href="#零配置ssm框架整合" aria-label="Permalink to &quot;零配置ssm框架整合&quot;">​</a></h1><h3 id="零配置ssm框架整合-1" tabindex="-1">零配置ssm框架整合 <a class="header-anchor" href="#零配置ssm框架整合-1" aria-label="Permalink to &quot;零配置ssm框架整合&quot;">​</a></h3><h5 id="pom-xml" tabindex="-1">pom.xml <a class="header-anchor" href="#pom-xml" aria-label="Permalink to &quot;pom.xml&quot;">​</a></h5><pre><code>        &lt;properties&gt;
            &lt;spring.version&gt;5.1.5.RELEASE&lt;/spring.version&gt;
        &lt;/properties&gt;
        &lt;dependencies&gt;
            &lt;!-- 测试相关开始 --&gt;
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
            &lt;!-- 测试相关结束 --&gt;
            &lt;!-- springmvc开始 --&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.springframework&lt;/groupId&gt;
                &lt;artifactId&gt;spring-context&lt;/artifactId&gt;
                &lt;version&gt;\${spring.version}&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.springframework&lt;/groupId&gt;
                &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;
                &lt;version&gt;\${spring.version}&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;!-- jackson数据相关 --&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;
                &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;
                &lt;version&gt;2.9.8&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.springframework&lt;/groupId&gt;
                &lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt;
                &lt;version&gt;\${spring.version}&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;!-- springmvc结束 --&gt;
            &lt;!-- springAOP开始 --&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.springframework&lt;/groupId&gt;
                &lt;artifactId&gt;spring-aop&lt;/artifactId&gt;
                &lt;version&gt;\${spring.version}&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.aspectj&lt;/groupId&gt;
                &lt;artifactId&gt;aspectjrt&lt;/artifactId&gt;
                &lt;version&gt;1.9.2&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.aspectj&lt;/groupId&gt;
                &lt;artifactId&gt;aspectjweaver&lt;/artifactId&gt;
                &lt;version&gt;1.9.2&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;!-- springAOP结束 --&gt;
            &lt;!-- 数据库相关开始 --&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;mysql&lt;/groupId&gt;
                &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
                &lt;version&gt;5.1.40&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;!-- 数据源的选取 --&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;com.alibaba&lt;/groupId&gt;
                &lt;artifactId&gt;druid&lt;/artifactId&gt;
                &lt;version&gt;1.1.10&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;!-- 数据库相关结束 --&gt;
            &lt;!-- mybatis相关开始 --&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.mybatis&lt;/groupId&gt;
                &lt;artifactId&gt;mybatis-spring&lt;/artifactId&gt;
                &lt;version&gt;1.3.2&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.mybatis&lt;/groupId&gt;
                &lt;artifactId&gt;mybatis&lt;/artifactId&gt;
                &lt;version&gt;3.4.6&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;!-- mybatis相关结束 --&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;javax.servlet&lt;/groupId&gt;
                &lt;artifactId&gt;jstl&lt;/artifactId&gt;
                &lt;version&gt;1.2&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;!-- 打印日志相关开始 --&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;ch.qos.logback&lt;/groupId&gt;
                &lt;artifactId&gt;logback-classic&lt;/artifactId&gt;
                &lt;version&gt;1.2.3&lt;/version&gt;
            &lt;/dependency&gt;
            &lt;!-- 打印日志相关结束 --&gt;
        &lt;/dependencies&gt;

        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-war-plugin&lt;/artifactId&gt;
                &lt;version&gt;2.6&lt;/version&gt;
                &lt;configuration&gt;
                    &lt;!-- 禁用pom文件自动检查web.xml是否存在 --&gt;
                    &lt;failOnMissingWebXml&gt;false&lt;/failOnMissingWebXml&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
            &lt;!-- 指定maven编译环境 --&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
                &lt;version&gt;3.7.0&lt;/version&gt;
                &lt;configuration&gt;
                    &lt;source&gt;1.8&lt;/source&gt;
                    &lt;target&gt;1.8&lt;/target&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
</code></pre><h5 id="编写applicationcontext-xml-springconfig-java" tabindex="-1">编写applicationContext.xml  =&gt;springConfig.java <a class="header-anchor" href="#编写applicationcontext-xml-springconfig-java" aria-label="Permalink to &quot;编写applicationContext.xml  =&gt;springConfig.java&quot;">​</a></h5><pre><code>@Configuration
@ComponentScan(basePackages= {&quot;com.aaa&quot;},excludeFilters={@Filter(type=FilterType.ANNOTATION,value={Controller.class})})
@EnableAspectJAutoProxy
@EnableTransactionManagement
public class SpringConfig {}
</code></pre><h5 id="编写xxx-servlet-xml-springmvcconfig-java" tabindex="-1">编写xxx-servlet.xml  =&gt;springMVCConfig.java <a class="header-anchor" href="#编写xxx-servlet-xml-springmvcconfig-java" aria-label="Permalink to &quot;编写xxx-servlet.xml  =&gt;springMVCConfig.java&quot;">​</a></h5><pre><code>@Configuration
@ComponentScan(basePackages= {&quot;com.aaa.controller&quot;})
@EnableWebMvc
public class SpringMVCConfig implements WebMvcConfigurer {
	/**
	 * 添加视图解析器
	 */
	@Bean
	public  InternalResourceViewResolver getInternalResourceViewResolver() {
		InternalResourceViewResolver internalResourceViewResolver = new InternalResourceViewResolver();
		internalResourceViewResolver.setPrefix(&quot;/WEB-INF/classes/views/&quot;);
		internalResourceViewResolver.setSuffix(&quot;.jsp&quot;);
		return internalResourceViewResolver;
	}
}
</code></pre><h5 id="编写web-xml-webconfig-java" tabindex="-1">编写web.xml  =&gt;WebConfig.java <a class="header-anchor" href="#编写web-xml-webconfig-java" aria-label="Permalink to &quot;编写web.xml  =&gt;WebConfig.java&quot;">​</a></h5><pre><code>public class WebConfig  implements WebApplicationInitializer{
	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		//加载配置类
		AnnotationConfigWebApplicationContext ac = new AnnotationConfigWebApplicationContext();
		ac.register(SpringConfig.class);
		ac.register(SpringMVCConfig.class);
		ac.setServletContext(servletContext);
		//设置前端控制器
		Dynamic addServlet = servletContext.addServlet(&quot;xxx&quot;, new DispatcherServlet(ac));
		addServlet.addMapping(&quot;*.do&quot;);
		//设置servlet的启动优先级
		addServlet.setLoadOnStartup(1);
		//添加servlet上下文监听
		servletContext.addListener(new RequestContextListener());
		javax.servlet.FilterRegistration.Dynamic addFilter = servletContext.addFilter(&quot;filterEncoding&quot;, new CharacterEncodingFilter());
		Map&lt;String,String&gt; map = new HashMap&lt;String,String&gt;();
		map.put(&quot;encoding&quot;, &quot;UTF-8&quot;);
		map.put(&quot;forceEncoding&quot;, &quot;true&quot;);
		addFilter.setInitParameters(map);//添加初始化参数
		EnumSet&lt;DispatcherType&gt; dispatcherTypes = EnumSet.allOf(DispatcherType.class);
		dispatcherTypes.add(DispatcherType.REQUEST);
		dispatcherTypes.add(DispatcherType.FORWARD);
		//设置过滤请求的范围
		addFilter.addMappingForUrlPatterns(dispatcherTypes, true, &quot;/*&quot;);
	}
}
</code></pre><h5 id="编写mybatisconfig-xml-mybatisconfig-java" tabindex="-1">编写mybatisConfig.xml  =&gt; MybatisConfig.java <a class="header-anchor" href="#编写mybatisconfig-xml-mybatisconfig-java" aria-label="Permalink to &quot;编写mybatisConfig.xml  =&gt; MybatisConfig.java&quot;">​</a></h5><pre><code>@Configuration
public class MybatisConfig {
	/**
	 * 获取数据源对象
	 */
	@Bean
	public DataSource getDataSource() {
		DruidDataSource dataSource = new DruidDataSource();
		dataSource.setUsername(&quot;root&quot;);
		dataSource.setPassword(&quot;root&quot;);
		dataSource.setUrl(&quot;jdbc:mysql://localhost:3306/db93？useUnicode=true&amp;characterEncoding=gbk&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=false&quot;);
		dataSource.setDriverClassName(&quot;com.mysql.jdbc.Driver&quot;);
		return dataSource;
	}
	/**
	 * 配置事务管理器
	 */
	@Bean
	public DataSourceTransactionManager getDataSourceTransactionManager() {
		DataSourceTransactionManager dataSourceTransactionManager = new DataSourceTransactionManager();
		dataSourceTransactionManager.setDataSource(getDataSource());
		return dataSourceTransactionManager;
	}
	/**
	 * 配置mybatis SqlSessionFactoryBean
	 */
	@Bean(&quot;MySqlSessionFactoryBean&quot;)
	public SqlSessionFactoryBean getSqlSessionFactoryBean() {
		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
		// 设置数据源
		sqlSessionFactoryBean.setDataSource(getDataSource());
		// 设置环境为开发模式
		sqlSessionFactoryBean.setEnvironment(&quot;development&quot;);
		// 设置事务管理方式transactionManager
		JdbcTransactionFactory jdbcTransactionFactory = new JdbcTransactionFactory();
		sqlSessionFactoryBean.setTransactionFactory(jdbcTransactionFactory);
		// 设置别名
		sqlSessionFactoryBean.setTypeAliasesPackage(&quot;com.aaa.entity&quot;);
		// 扫描mybatis的mapper映射文件
		PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
		// mapper文件所在的路径
		String locationPattern = &quot;mapper/*.xml&quot;;
		try {
		sqlSessionFactoryBean.setMapperLocations(resolver.getResources(locationPattern));
		} catch (IOException e) {
			e.printStackTrace();
		}
		return sqlSessionFactoryBean;
	}
	/**
	 * 自动扫描使用jdk动态代理 将Mapper接口生成代理注入到Spring 容器中
	 */
	@Bean
	public MapperScannerConfigurer getMapperScannerConfigurer() {
		MapperScannerConfigurer mapperScannerConfigurer = new MapperScannerConfigurer();
		mapperScannerConfigurer.setBasePackage(&quot;com.aaa.dao&quot;);	mapperScannerConfigurer.setSqlSessionFactoryBeanName(&quot;MySqlSessionFactoryBean&quot;);
		return mapperScannerConfigurer;
	}
}
</code></pre><h5 id="log-back-xml" tabindex="-1">log-back.xml <a class="header-anchor" href="#log-back-xml" aria-label="Permalink to &quot;log-back.xml&quot;">​</a></h5><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;configuration scan=&quot;true&quot; scanPeriod=&quot;60 seconds&quot;
	debug=&quot;true&quot;&gt; &lt;!-- 模块名称， 影响日志配置名，日志文件名 --&gt;
	&lt;property name=&quot;appName&quot; value=&quot;zerossm&quot; /&gt;
	&lt;property name=&quot;logMaxSize&quot; valule=&quot;100MB&quot; /&gt;
	&lt;!--rootPath 日志路径，这里是相对路径，web项目eclipse下会输出到eclipse的安装目录下，如果部署到linux上的tomcat下，会输出到tomcat/bin目录 
		下 --&gt;
	&lt;property name=&quot;rootPath&quot; value=&quot;E:\\AAA\\Qy93\\log\\zerossm整合&quot; /&gt;
	&lt;contextName&gt;\${appName}&lt;/contextName&gt;
	&lt;!--控制台输出 --&gt;
	&lt;appender name=&quot;STDOUT&quot;
		&gt;
		&lt;encoder&gt;
			&lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss}|%t|%p| %m |%logger:%L%n&lt;/pattern&gt;
		&lt;/encoder&gt;
	&lt;/appender&gt;
	&lt;appender name=&quot;DEBUG&quot;
		&gt;
		&lt;!-- 设置日志不超过\${logMaxSize}时的保存路径，注意如果 是web项目会保存到Tomcat的bin目录 下 --&gt;
		&lt;file&gt;\${rootPath}/\${appName}/debug/\${appName}-dlog.log&lt;/file&gt;
		&lt;!-- 滚动记录文件，先将日志记录到指定文件，当符合某个条件时，将日志记录到其他文件。 --&gt;
		&lt;rollingPolicy
			&gt;
			&lt;fileNamePattern&gt;\${rootPath}/\${appName}/debug/\${appName}-dlog-%d{yyyy-MM-dd}-%d.log
			&lt;/fileNamePattern&gt;
			&lt;maxHistory&gt;30&lt;/maxHistory&gt;
			&lt;!-- 当天的日志大小 超过\${logMaxSize}时,压缩日志并保存 --&gt;
			&lt;timeBasedFileNamingAndTriggeringPolicy
				&gt;
				&lt;maxFileSize&gt;10MB&lt;/maxFileSize&gt;
			&lt;/timeBasedFileNamingAndTriggeringPolicy&gt;
		&lt;/rollingPolicy&gt;
		&lt;!-- 日志输出的文件的格式 --&gt;
		&lt;encoder&gt;
			&lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss}|%t|%p| %m |%logger:%L%n&lt;/pattern&gt;
			&lt;charset&gt;UTF-8&lt;/charset&gt;
		&lt;/encoder&gt;
		&lt;filter &gt;
			&lt;level&gt;DEBUG&lt;/level&gt;
			&lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;
			&lt;onMismatch&gt;DENY&lt;/onMismatch&gt;
		&lt;/filter&gt;
		&lt;filter &gt;
			&lt;level&gt;DEBUG&lt;/level&gt;
		&lt;/filter&gt;
	&lt;/appender&gt;
	&lt;appender name=&quot;INFO&quot;
		&gt;
		&lt;file&gt;\${rootPath}/\${appName}/info/\${appName}-ilog.log&lt;/file&gt;
		&lt;rollingPolicy
			&gt;
			&lt;fileNamePattern&gt;\${rootPath}/\${appName}/all/\${appName}-ilog-%d{yyyy-MM-dd}-%i.log
			&lt;/fileNamePattern&gt;
			&lt;maxHistory&gt;30&lt;/maxHistory&gt;
			&lt;timeBasedFileNamingAndTriggeringPolicy
				&gt;
				&lt;maxFileSize&gt;10MB&lt;/maxFileSize&gt;
			&lt;/timeBasedFileNamingAndTriggeringPolicy&gt;
		&lt;/rollingPolicy&gt;
		&lt;encoder&gt;
			&lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss}|%t|%p| %m |%logger:%L%n&lt;/pattern&gt;
			&lt;charset&gt;UTF-8&lt;/charset&gt;
		&lt;/encoder&gt;
		&lt;filter &gt;
			&lt;level&gt;INFO&lt;/level&gt;
			&lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;
			&lt;onMismatch&gt;DENY&lt;/onMismatch&gt;
		&lt;/filter&gt;
	&lt;/appender&gt;
	&lt;appender name=&quot;ERROR&quot;
		&gt;
		&lt;file&gt;\${rootPath}/\${appName}/error/\${appName}-elog.log&lt;/file&gt;
		&lt;rollingPolicy
			&gt;
			&lt;fileNamePattern&gt;\${rootPath}/\${appName}/all/\${appName}-elog-%d{yyyy-MM-dd}-%e.log
			&lt;/fileNamePattern&gt;
			&lt;maxHistory&gt;30&lt;/maxHistory&gt;
			&lt;timeBasedFileNamingAndTriggeringPolicy
				&gt;
				&lt;maxFileSize&gt;10MB&lt;/maxFileSize&gt;
			&lt;/timeBasedFileNamingAndTriggeringPolicy&gt;
		&lt;/rollingPolicy&gt;
		&lt;encoder&gt;
			&lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss}|%t|%p| %m |%logger:%L%n&lt;/pattern&gt;
			&lt;charset&gt;UTF-8&lt;/charset&gt;
		&lt;/encoder&gt;
		&lt;filter &gt;
			&lt;level&gt;ERROR&lt;/level&gt;
			&lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;
			&lt;onMismatch&gt;DENY&lt;/onMismatch&gt;
		&lt;/filter&gt;
	&lt;/appender&gt;
	&lt;!-- 为某个包下的所有类的指定Appender 这里也可以指定类名称例如：com.aa.bb.ClassName,下面还有另一种写法，就是涉及到name=&quot;关键包的日志输出级别&quot; --&gt; &lt;!-- &lt;logger name=&quot;com.lin&quot; additivity=&quot;false&quot;&gt; --&gt; &lt;!-- &lt;level value=&quot;debug&quot; /&gt; --&gt; &lt;!-- &lt;appender-ref ref=&quot;stdout&quot; /&gt; --&gt; &lt;!-- &lt;appender-ref ref=&quot;file&quot; /&gt; --&gt; &lt;!-- &lt;/logger&gt; --&gt;
	&lt;logger name=&quot;jdbc&quot; level=&quot;INFO&quot; /&gt;
	&lt;logger name=&quot;org&quot; level=&quot;INFO&quot; /&gt;
	&lt;logger name=&quot;net&quot; level=&quot;INFO&quot; /&gt;
	&lt;logger name=&quot;sql&quot; level=&quot;INFO&quot; /&gt;
	&lt;logger name=&quot;java.sql&quot; level=&quot;INFO&quot; /&gt;
	&lt;logger name=&quot;javax&quot; level=&quot;INFO&quot; /&gt;
	&lt;!--日志的输出级别由低到高（越来问题越严重）trace-&gt;debug-&gt;info-&gt;warn-&gt;error --&gt; 
	&lt;!-- root将级别为DEBUG及大于DEBUG的日志信息交给已经配置好的name=&#39;STDOUT&#39;的appender处理，将信息打印到控制台-Console --&gt;
	&lt;root level=&quot;DEBUG&quot;&gt;
		&lt;!-- appender-ref标识这个appender将会添加到本应用的日志系统中 --&gt;
		&lt;appender-ref ref=&quot;STDOUT&quot; /&gt;
		&lt;appender-ref ref=&quot;INFO&quot; /&gt;
		&lt;appender-ref ref=&quot;DEBUG&quot; /&gt;
		&lt;appender-ref ref=&quot;ERROR&quot; /&gt;
	&lt;/root&gt;
&lt;/configuration&gt;
</code></pre><h6 id="创建表" tabindex="-1">创建表 <a class="header-anchor" href="#创建表" aria-label="Permalink to &quot;创建表&quot;">​</a></h6><p>![[../_resources/unknown_filename-e1e89d9e.png]]</p><h6 id="编写dao接口" tabindex="-1">编写dao接口 <a class="header-anchor" href="#编写dao接口" aria-label="Permalink to &quot;编写dao接口&quot;">​</a></h6><pre><code>@Mapper
public interface DeptDao {	
	List&lt;Dept&gt; findAllDept();
}
</code></pre><h6 id="编写mapper映射文件" tabindex="-1">编写mapper映射文件 <a class="header-anchor" href="#编写mapper映射文件" aria-label="Permalink to &quot;编写mapper映射文件&quot;">​</a></h6><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
&lt;!DOCTYPE mapper
  PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;
  &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;
  &lt;mapper namespace=&quot;com.aaa.dao.DeptDao&quot;&gt;
    &lt;sql &gt;deptno,dname,loc&lt;/sql&gt;
  	&lt;select resultType=&quot;dept&quot;&gt;
  		select &lt;include ref&gt;&lt;/include&gt; from dept 
  	&lt;/select&gt;
  &lt;/mapper&gt;
</code></pre><h6 id="编写service" tabindex="-1">编写service <a class="header-anchor" href="#编写service" aria-label="Permalink to &quot;编写service&quot;">​</a></h6><pre><code>public interface DeptBiz {
	List&lt;Dept&gt; findAllDept();
}

@Service
public class DeptBizImpl implements DeptBiz {
	@Autowired
	private DeptDao deptDao;
	@Override
	public List&lt;Dept&gt; findAllDept() {
		return deptDao.findAllDept();
	}
}
</code></pre><h6 id="编写controller" tabindex="-1">编写controller <a class="header-anchor" href="#编写controller" aria-label="Permalink to &quot;编写controller&quot;">​</a></h6><pre><code>@Controller
public class DeptController {
	@Autowired
	private DeptBiz deptBizImpl;
	@RequestMapping(&quot;/findAllDept.do&quot;)
	public  String  findAllDept(HttpServletRequest req) {
		List&lt;Dept&gt; deptList = deptBizImpl.findAllDept();
		req.setAttribute(&quot;deptList&quot;, deptList);
		return &quot;showDept&quot;;
	}
}
</code></pre><h6 id="编写jsp页面" tabindex="-1">编写jsp页面 <a class="header-anchor" href="#编写jsp页面" aria-label="Permalink to &quot;编写jsp页面&quot;">​</a></h6><pre><code>&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;
	pageEncoding=&quot;UTF-8&quot;%&gt;
&lt;%@ taglib uri=&quot;http://java.sun.com/jsp/jstl/core&quot; prefix=&quot;c&quot;%&gt;
&lt;%@page isELIgnored=&quot;false&quot; %&gt;
&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;
&lt;title&gt;显示所有的部门&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;table border=&quot;1px&quot;&gt;
		&lt;tr&gt;
			&lt;td&gt;部门编号&lt;/td&gt;
			&lt;td&gt;部门名称&lt;/td&gt;
			&lt;td&gt;部门位置&lt;/td&gt;
		&lt;/tr&gt;
		&lt;c:forEach items=&quot;\${deptList}&quot; var=&quot;dept&quot;&gt;
			&lt;tr&gt;
				&lt;td&gt;\${dept.deptno}&lt;/td&gt;
				&lt;td&gt;\${dept.dname}&lt;/td&gt;
				&lt;td&gt;\${dept.loc}&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/c:forEach&gt;
	&lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><h6 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h6><p>![[../_resources/unknown_filename-ee03cdec.png]]</p>`,28)]))}const m=e(o,[["render",r]]);export{u as __pageData,m as default};
