---

Created at: 2019-04-04
Last updated at: 2019-05-19
tags: 
  - ssm整合

---

# 零配置ssm框架整合


### 零配置ssm框架整合

##### pom.xml

            <properties>
                <spring.version>5.1.5.RELEASE</spring.version>
            </properties>
            <dependencies>
                <!-- 测试相关开始 -->
                <dependency>
                    <groupId>junit</groupId>
                    <artifactId>junit</artifactId>
                    <version>4.12</version>
                    <scope>test</scope>
                </dependency>
                <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-test</artifactId>
                    <version>5.1.5.RELEASE</version>
                    <scope>test</scope>
                </dependency>
                <!-- 测试相关结束 -->
                <!-- springmvc开始 -->
                <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-context</artifactId>
                    <version>${spring.version}</version>
                </dependency>
                <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-webmvc</artifactId>
                    <version>${spring.version}</version>
                </dependency>
                <!-- jackson数据相关 -->
                <dependency>
                    <groupId>com.fasterxml.jackson.core</groupId>
                    <artifactId>jackson-databind</artifactId>
                    <version>2.9.8</version>
                </dependency>
                <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-jdbc</artifactId>
                    <version>${spring.version}</version>
                </dependency>
                <!-- springmvc结束 -->
                <!-- springAOP开始 -->
                <dependency>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-aop</artifactId>
                    <version>${spring.version}</version>
                </dependency>
                <dependency>
                    <groupId>org.aspectj</groupId>
                    <artifactId>aspectjrt</artifactId>
                    <version>1.9.2</version>
                </dependency>
                <dependency>
                    <groupId>org.aspectj</groupId>
                    <artifactId>aspectjweaver</artifactId>
                    <version>1.9.2</version>
                </dependency>
                <!-- springAOP结束 -->
                <!-- 数据库相关开始 -->
                <dependency>
                    <groupId>mysql</groupId>
                    <artifactId>mysql-connector-java</artifactId>
                    <version>5.1.40</version>
                </dependency>
                <!-- 数据源的选取 -->
                <dependency>
                    <groupId>com.alibaba</groupId>
                    <artifactId>druid</artifactId>
                    <version>1.1.10</version>
                </dependency>
                <!-- 数据库相关结束 -->
                <!-- mybatis相关开始 -->
                <dependency>
                    <groupId>org.mybatis</groupId>
                    <artifactId>mybatis-spring</artifactId>
                    <version>1.3.2</version>
                </dependency>
                <dependency>
                    <groupId>org.mybatis</groupId>
                    <artifactId>mybatis</artifactId>
                    <version>3.4.6</version>
                </dependency>
                <!-- mybatis相关结束 -->
                <dependency>
                    <groupId>javax.servlet</groupId>
                    <artifactId>jstl</artifactId>
                    <version>1.2</version>
                </dependency>
                <!-- 打印日志相关开始 -->
                <dependency>
                    <groupId>ch.qos.logback</groupId>
                    <artifactId>logback-classic</artifactId>
                    <version>1.2.3</version>
                </dependency>
                <!-- 打印日志相关结束 -->
            </dependencies>
    
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-war-plugin</artifactId>
                    <version>2.6</version>
                    <configuration>
                        <!-- 禁用pom文件自动检查web.xml是否存在 -->
                        <failOnMissingWebXml>false</failOnMissingWebXml>
                    </configuration>
                </plugin>
                <!-- 指定maven编译环境 -->
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-compiler-plugin</artifactId>
                    <version>3.7.0</version>
                    <configuration>
                        <source>1.8</source>
                        <target>1.8</target>
                    </configuration>
                </plugin>
            </plugins>


##### 编写applicationContext.xml  =>springConfig.java

    @Configuration
    @ComponentScan(basePackages= {"com.aaa"},excludeFilters={@Filter(type=FilterType.ANNOTATION,value={Controller.class})})
    @EnableAspectJAutoProxy
    @EnableTransactionManagement
    public class SpringConfig {}


##### 编写xxx-servlet.xml  =>springMVCConfig.java

    @Configuration
    @ComponentScan(basePackages= {"com.aaa.controller"})
    @EnableWebMvc
    public class SpringMVCConfig implements WebMvcConfigurer {
    	/**
    	 * 添加视图解析器
    	 */
    	@Bean
    	public  InternalResourceViewResolver getInternalResourceViewResolver() {
    		InternalResourceViewResolver internalResourceViewResolver = new InternalResourceViewResolver();
    		internalResourceViewResolver.setPrefix("/WEB-INF/classes/views/");
    		internalResourceViewResolver.setSuffix(".jsp");
    		return internalResourceViewResolver;
    	}
    }


##### 编写web.xml  =>WebConfig.java

    public class WebConfig  implements WebApplicationInitializer{
    	@Override
    	public void onStartup(ServletContext servletContext) throws ServletException {
    		//加载配置类
    		AnnotationConfigWebApplicationContext ac = new AnnotationConfigWebApplicationContext();
    		ac.register(SpringConfig.class);
    		ac.register(SpringMVCConfig.class);
    		ac.setServletContext(servletContext);
    		//设置前端控制器
    		Dynamic addServlet = servletContext.addServlet("xxx", new DispatcherServlet(ac));
    		addServlet.addMapping("*.do");
    		//设置servlet的启动优先级
    		addServlet.setLoadOnStartup(1);
    		//添加servlet上下文监听
    		servletContext.addListener(new RequestContextListener());
    		javax.servlet.FilterRegistration.Dynamic addFilter = servletContext.addFilter("filterEncoding", new CharacterEncodingFilter());
    		Map<String,String> map = new HashMap<String,String>();
    		map.put("encoding", "UTF-8");
    		map.put("forceEncoding", "true");
    		addFilter.setInitParameters(map);//添加初始化参数
    		EnumSet<DispatcherType> dispatcherTypes = EnumSet.allOf(DispatcherType.class);
    		dispatcherTypes.add(DispatcherType.REQUEST);
    		dispatcherTypes.add(DispatcherType.FORWARD);
    		//设置过滤请求的范围
    		addFilter.addMappingForUrlPatterns(dispatcherTypes, true, "/*");
    	}
    }


##### 编写mybatisConfig.xml  => MybatisConfig.java

    @Configuration
    public class MybatisConfig {
    	/**
    	 * 获取数据源对象
    	 */
    	@Bean
    	public DataSource getDataSource() {
    		DruidDataSource dataSource = new DruidDataSource();
    		dataSource.setUsername("root");
    		dataSource.setPassword("root");
    		dataSource.setUrl("jdbc:mysql://localhost:3306/db93？useUnicode=true&characterEncoding=gbk&zeroDateTimeBehavior=convertToNull&useSSL=false");
    		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
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
    	@Bean("MySqlSessionFactoryBean")
    	public SqlSessionFactoryBean getSqlSessionFactoryBean() {
    		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
    		// 设置数据源
    		sqlSessionFactoryBean.setDataSource(getDataSource());
    		// 设置环境为开发模式
    		sqlSessionFactoryBean.setEnvironment("development");
    		// 设置事务管理方式transactionManager
    		JdbcTransactionFactory jdbcTransactionFactory = new JdbcTransactionFactory();
    		sqlSessionFactoryBean.setTransactionFactory(jdbcTransactionFactory);
    		// 设置别名
    		sqlSessionFactoryBean.setTypeAliasesPackage("com.aaa.entity");
    		// 扫描mybatis的mapper映射文件
    		PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
    		// mapper文件所在的路径
    		String locationPattern = "mapper/*.xml";
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
    		mapperScannerConfigurer.setBasePackage("com.aaa.dao");	mapperScannerConfigurer.setSqlSessionFactoryBeanName("MySqlSessionFactoryBean");
    		return mapperScannerConfigurer;
    	}
    }


##### log-back.xml

    <?xml version="1.0" encoding="UTF-8"?>
    <configuration scan="true" scanPeriod="60 seconds"
    	debug="true"> <!-- 模块名称， 影响日志配置名，日志文件名 -->
    	<property name="appName" value="zerossm" />
    	<property name="logMaxSize" valule="100MB" />
    	<!--rootPath 日志路径，这里是相对路径，web项目eclipse下会输出到eclipse的安装目录下，如果部署到linux上的tomcat下，会输出到tomcat/bin目录 
    		下 -->
    	<property name="rootPath" value="E:\AAA\Qy93\log\zerossm整合" />
    	<contextName>${appName}</contextName>
    	<!--控制台输出 -->
    	<appender name="STDOUT"
    		>
    		<encoder>
    			<pattern>%d{yyyy-MM-dd HH:mm:ss}|%t|%p| %m |%logger:%L%n</pattern>
    		</encoder>
    	</appender>
    	<appender name="DEBUG"
    		>
    		<!-- 设置日志不超过${logMaxSize}时的保存路径，注意如果 是web项目会保存到Tomcat的bin目录 下 -->
    		<file>${rootPath}/${appName}/debug/${appName}-dlog.log</file>
    		<!-- 滚动记录文件，先将日志记录到指定文件，当符合某个条件时，将日志记录到其他文件。 -->
    		<rollingPolicy
    			>
    			<fileNamePattern>${rootPath}/${appName}/debug/${appName}-dlog-%d{yyyy-MM-dd}-%d.log
    			</fileNamePattern>
    			<maxHistory>30</maxHistory>
    			<!-- 当天的日志大小 超过${logMaxSize}时,压缩日志并保存 -->
    			<timeBasedFileNamingAndTriggeringPolicy
    				>
    				<maxFileSize>10MB</maxFileSize>
    			</timeBasedFileNamingAndTriggeringPolicy>
    		</rollingPolicy>
    		<!-- 日志输出的文件的格式 -->
    		<encoder>
    			<pattern>%d{yyyy-MM-dd HH:mm:ss}|%t|%p| %m |%logger:%L%n</pattern>
    			<charset>UTF-8</charset>
    		</encoder>
    		<filter >
    			<level>DEBUG</level>
    			<onMatch>ACCEPT</onMatch>
    			<onMismatch>DENY</onMismatch>
    		</filter>
    		<filter >
    			<level>DEBUG</level>
    		</filter>
    	</appender>
    	<appender name="INFO"
    		>
    		<file>${rootPath}/${appName}/info/${appName}-ilog.log</file>
    		<rollingPolicy
    			>
    			<fileNamePattern>${rootPath}/${appName}/all/${appName}-ilog-%d{yyyy-MM-dd}-%i.log
    			</fileNamePattern>
    			<maxHistory>30</maxHistory>
    			<timeBasedFileNamingAndTriggeringPolicy
    				>
    				<maxFileSize>10MB</maxFileSize>
    			</timeBasedFileNamingAndTriggeringPolicy>
    		</rollingPolicy>
    		<encoder>
    			<pattern>%d{yyyy-MM-dd HH:mm:ss}|%t|%p| %m |%logger:%L%n</pattern>
    			<charset>UTF-8</charset>
    		</encoder>
    		<filter >
    			<level>INFO</level>
    			<onMatch>ACCEPT</onMatch>
    			<onMismatch>DENY</onMismatch>
    		</filter>
    	</appender>
    	<appender name="ERROR"
    		>
    		<file>${rootPath}/${appName}/error/${appName}-elog.log</file>
    		<rollingPolicy
    			>
    			<fileNamePattern>${rootPath}/${appName}/all/${appName}-elog-%d{yyyy-MM-dd}-%e.log
    			</fileNamePattern>
    			<maxHistory>30</maxHistory>
    			<timeBasedFileNamingAndTriggeringPolicy
    				>
    				<maxFileSize>10MB</maxFileSize>
    			</timeBasedFileNamingAndTriggeringPolicy>
    		</rollingPolicy>
    		<encoder>
    			<pattern>%d{yyyy-MM-dd HH:mm:ss}|%t|%p| %m |%logger:%L%n</pattern>
    			<charset>UTF-8</charset>
    		</encoder>
    		<filter >
    			<level>ERROR</level>
    			<onMatch>ACCEPT</onMatch>
    			<onMismatch>DENY</onMismatch>
    		</filter>
    	</appender>
    	<!-- 为某个包下的所有类的指定Appender 这里也可以指定类名称例如：com.aa.bb.ClassName,下面还有另一种写法，就是涉及到name="关键包的日志输出级别" --> <!-- <logger name="com.lin" additivity="false"> --> <!-- <level value="debug" /> --> <!-- <appender-ref ref="stdout" /> --> <!-- <appender-ref ref="file" /> --> <!-- </logger> -->
    	<logger name="jdbc" level="INFO" />
    	<logger name="org" level="INFO" />
    	<logger name="net" level="INFO" />
    	<logger name="sql" level="INFO" />
    	<logger name="java.sql" level="INFO" />
    	<logger name="javax" level="INFO" />
    	<!--日志的输出级别由低到高（越来问题越严重）trace->debug->info->warn->error --> 
    	<!-- root将级别为DEBUG及大于DEBUG的日志信息交给已经配置好的name='STDOUT'的appender处理，将信息打印到控制台-Console -->
    	<root level="DEBUG">
    		<!-- appender-ref标识这个appender将会添加到本应用的日志系统中 -->
    		<appender-ref ref="STDOUT" />
    		<appender-ref ref="INFO" />
    		<appender-ref ref="DEBUG" />
    		<appender-ref ref="ERROR" />
    	</root>
    </configuration>


###### 创建表

![[../_resources/unknown_filename-e1e89d9e.png]]

###### 编写dao接口

    @Mapper
    public interface DeptDao {	
    	List<Dept> findAllDept();
    }


###### 编写mapper映射文件

    <?xml version="1.0" encoding="UTF-8" ?>
    <!DOCTYPE mapper
      PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
      "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
      <mapper namespace="com.aaa.dao.DeptDao">
        <sql >deptno,dname,loc</sql>
      	<select resultType="dept">
      		select <include ref></include> from dept 
      	</select>
      </mapper>


###### 编写service

    public interface DeptBiz {
    	List<Dept> findAllDept();
    }
    
    @Service
    public class DeptBizImpl implements DeptBiz {
    	@Autowired
    	private DeptDao deptDao;
    	@Override
    	public List<Dept> findAllDept() {
    		return deptDao.findAllDept();
    	}
    }


###### 编写controller

    @Controller
    public class DeptController {
    	@Autowired
    	private DeptBiz deptBizImpl;
    	@RequestMapping("/findAllDept.do")
    	public  String  findAllDept(HttpServletRequest req) {
    		List<Dept> deptList = deptBizImpl.findAllDept();
    		req.setAttribute("deptList", deptList);
    		return "showDept";
    	}
    }


###### 编写jsp页面

    <%@ page language="java" contentType="text/html; charset=UTF-8"
    	pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    <%@page isELIgnored="false" %>
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>显示所有的部门</title>
    </head>
    <body>
    	<table border="1px">
    		<tr>
    			<td>部门编号</td>
    			<td>部门名称</td>
    			<td>部门位置</td>
    		</tr>
    		<c:forEach items="${deptList}" var="dept">
    			<tr>
    				<td>${dept.deptno}</td>
    				<td>${dept.dname}</td>
    				<td>${dept.loc}</td>
    			</tr>
    		</c:forEach>
    	</table>
    </body>
    </html>


###### 测试

![[../_resources/unknown_filename-ee03cdec.png]]



