import{_ as e,c as a,a3 as o,o as n}from"./chunks/framework.BaR4VHXY.js";const p=JSON.parse('{"title":"java-web工程","description":"","frontmatter":{"Created at":"2019-03-25T00:00:00.000Z","Last updated at":"2019-05-19T00:00:00.000Z","tags":["Mybatis逆向生成"]},"headers":[],"relativePath":"zh-CN/学习笔记/java-web工程.md","filePath":"zh-CN/学习笔记/java-web工程.md","lastUpdated":null}'),r={name:"zh-CN/学习笔记/java-web工程.md"};function l(u,t,g,i,s,c){return n(),a("div",null,t[0]||(t[0]=[o(`<h1 id="java-web工程" tabindex="-1">java-web工程 <a class="header-anchor" href="#java-web工程" aria-label="Permalink to &quot;java-web工程&quot;">​</a></h1><h3 id="java-web工程-1" tabindex="-1">java-web工程 <a class="header-anchor" href="#java-web工程-1" aria-label="Permalink to &quot;java-web工程&quot;">​</a></h3><h4 id="generatorconfig-xml" tabindex="-1">generatorConfig.xml <a class="header-anchor" href="#generatorconfig-xml" aria-label="Permalink to &quot;generatorConfig.xml&quot;">​</a></h4><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE generatorConfiguration
  PUBLIC &quot;-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN&quot;
  &quot;http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd&quot;&gt;
&lt;generatorConfiguration&gt;
    &lt;!--数据库驱动 --&gt;
    &lt;classPathEntry location=&quot;WebContent/WEB-INF/lib/mysql-connector-java-5.1.21.jar&quot; /&gt;
    &lt;context targetRuntime=&quot;MyBatis3&quot;&gt;
        &lt;commentGenerator&gt;
            &lt;property name=&quot;suppressDate&quot; value=&quot;true&quot; /&gt;
            &lt;property name=&quot;suppressAllComments&quot; value=&quot;true&quot; /&gt;
        &lt;/commentGenerator&gt;
        &lt;!--数据库链接地址账号密码 --&gt;
        &lt;jdbcConnection driver            connectionURL=&quot;jdbc:mysql://localhost/db93&quot; userpassword=&quot;&quot;&gt;
        &lt;/jdbcConnection&gt;
        &lt;javaTypeResolver&gt;
            &lt;property name=&quot;forceBigDecimals&quot; value=&quot;false&quot; /&gt;
        &lt;/javaTypeResolver&gt;
        &lt;!--生成Model类存放位置 --&gt;
        &lt;javaModelGenerator targetPackage=&quot;com.xxx.proj.entity&quot;
            targetProject=&quot;src&quot;&gt;
            &lt;property name=&quot;enableSubPackages&quot; value=&quot;true&quot; /&gt;
            &lt;property name=&quot;trimStrings&quot; value=&quot;true&quot; /&gt;
        &lt;/javaModelGenerator&gt;
        &lt;!--生成映射文件存放位置 --&gt;
        &lt;sqlMapGenerator targetPackage=&quot;com.xxx.proj.mapper&quot;
            targetProject=&quot;src&quot;&gt;
            &lt;property name=&quot;enableSubPackages&quot; value=&quot;true&quot; /&gt;
        &lt;/sqlMapGenerator&gt;
        &lt;!--生成Dao类存放位置 --&gt;
        &lt;javaClientGenerator type=&quot;XMLMAPPER&quot;
            targetPackage=&quot;com.xxx.proj.mapper&quot; targetProject=&quot;src&quot;&gt;
            &lt;property name=&quot;enableSubPackages&quot; value=&quot;true&quot; /&gt;
        &lt;/javaClientGenerator&gt;
        &lt;!--生成对应表及类名 --&gt;
        &lt;table tableName=&quot;application&quot; domainObjectName=&quot;Application&quot;
            enableCountByExample=&quot;false&quot; enableUpdateByExample=&quot;false&quot;
            enableDeleteByExample=&quot;false&quot; enableSelectByExample=&quot;false&quot;
            selectByExampleQuery&gt;&lt;/table&gt;
    &lt;/context&gt;
&lt;/generatorConfiguration&gt;
</code></pre><h4 id="testgenerator-java" tabindex="-1">TestGenerator.java <a class="header-anchor" href="#testgenerator-java" aria-label="Permalink to &quot;TestGenerator.java&quot;">​</a></h4><pre><code>package com.xxx.proj.test;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import org.junit.Test;
import org.mybatis.generator.api.MyBatisGenerator;
import org.mybatis.generator.api.ProgressCallback;
import org.mybatis.generator.api.VerboseProgressCallback;
import org.mybatis.generator.config.Configuration;
import org.mybatis.generator.config.xml.ConfigurationParser;
import org.mybatis.generator.internal.DefaultShellCallback;
public class TestGenerator {
    @Test
    public void createTable() {
        List&lt;String&gt; warnings = new ArrayList&lt;String&gt;();
        try {
            String configFilePath = System.getProperty(&quot;user.dir&quot;).concat(
                    &quot;/src/generatorConfig.xml&quot;);
            System.out.println(&quot;加载配置文件===&quot; + configFilePath);
            boolean overwrite = true;
            File configFile = new File(configFilePath);
            ConfigurationParser cp = new ConfigurationParser(warnings);
            Configuration config = cp.parseConfiguration(configFile);
            DefaultShellCallback callback = new DefaultShellCallback(overwrite);
            MyBatisGenerator myBatisGenerator = new MyBatisGenerator(config,
                    callback, warnings);
            ProgressCallback progressCallback = new VerboseProgressCallback();
            // myBatisGenerator.generate(null);
            myBatisGenerator.generate(progressCallback);
        } catch (Exception e) {
            e.printStackTrace();
        }
        for (String warning : warnings) {
            System.out.println(warning);
        }
    }
}
</code></pre><h3 id="springboot工程" tabindex="-1">springboot工程 <a class="header-anchor" href="#springboot工程" aria-label="Permalink to &quot;springboot工程&quot;">​</a></h3><h4 id="pom-xml" tabindex="-1">pom.xml <a class="header-anchor" href="#pom-xml" aria-label="Permalink to &quot;pom.xml&quot;">​</a></h4><pre><code>    &lt;plugin&gt;
        &lt;groupId&gt;org.mybatis.generator&lt;/groupId&gt;
        &lt;artifactId&gt;mybatis-generator-maven-plugin&lt;/artifactId&gt;
        &lt;version&gt;1.3.5&lt;/version&gt;
        &lt;configuration&gt;
            &lt;!--允许移动生成的文件--&gt;
            &lt;verbose&gt;true&lt;/verbose&gt;
            &lt;!--允许覆盖生成的文件--&gt;
            &lt;overwrite&gt;true&lt;/overwrite&gt;
        &lt;/configuration&gt;
    &lt;/plugin&gt;
</code></pre><h4 id="generatorconfig-xml-1" tabindex="-1">generatorConfig.xml <a class="header-anchor" href="#generatorconfig-xml-1" aria-label="Permalink to &quot;generatorConfig.xml&quot;">​</a></h4><pre><code>    &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
    &lt;!DOCTYPE generatorConfiguration PUBLIC
            &quot;-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN&quot;
            &quot;http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd&quot;&gt;
    &lt;generatorConfiguration&gt;
        &lt;!--mysql 连接数据库jar 这里选择自己本地位置--&gt;
        &lt;classPathEntry
                location=&quot;E:\\AAA\\Qy93\\mavenrepository\\mysql\\mysql-connector-java\\5.1.40\\mysql-connector-java-5.1.40.jar&quot;/&gt;
        &lt;context targetRuntime=&quot;MyBatis3&quot;&gt;
            &lt;commentGenerator&gt;
                &lt;!-- 是否去除自动生成的注释 true：是 ： false:否 --&gt;
                &lt;property name=&quot;suppressAllComments&quot; value=&quot;true&quot;/&gt;
            &lt;/commentGenerator&gt;
            &lt;!--数据库连接的信息：驱动类、连接地址、用户名、密码 --&gt;
            &lt;jdbcConnection driverconnectionURL=&quot;jdbc:mysql://localhost:3306/db93?serverTimezone=GMT%2B8&quot;
                            userpassword=&quot;&quot;&gt;
            &lt;/jdbcConnection&gt;
            &lt;!-- 默认false，把JDBC DECIMAL 和 NUMERIC 类型解析为 Integer，为 true时把JDBC DECIMAL 和 NUMERIC 类型解析为java.math.BigDecimal --&gt;
            &lt;javaTypeResolver&gt;
                &lt;property name=&quot;forceBigDecimals&quot; value=&quot;false&quot;/&gt;
            &lt;/javaTypeResolver&gt;
            &lt;!-- targetProject:生成PO类的位置 --&gt;
            &lt;javaModelGenerator targetPackage=&quot;com.aaa.qy93.entity&quot;
                                targetProject=&quot;src/main/java&quot;&gt;
                &lt;!-- enableSubPackages:是否让schema作为包的后缀 --&gt;
                &lt;property name=&quot;enableSubPackages&quot; value=&quot;false&quot;/&gt;
                &lt;!-- 从数据库返回的值被清理前后的空格 --&gt;
                &lt;property name=&quot;trimStrings&quot; value=&quot;true&quot;/&gt;
            &lt;/javaModelGenerator&gt;
            &lt;!-- targetProject:mapper映射文件生成的位置 如果maven工程只是单独的一个工程，targetProject=&quot;src/main/java&quot; 若果maven工程是分模块的工程，targetProject=&quot;所属模块的名称&quot;，例如： targetProject=&quot;ecps-manager-mapper&quot;，下同--&gt;
            &lt;sqlMapGenerator targetPackage=&quot;templates/mapper&quot;
                             targetProject=&quot;src/main/resources&quot;&gt;
                &lt;!-- enableSubPackages:是否让schema作为包的后缀 --&gt;
                &lt;property name=&quot;enableSubPackages&quot; value=&quot;false&quot;/&gt;
            &lt;/sqlMapGenerator&gt;
            &lt;!-- targetPackage：mapper接口生成的位置 --&gt;
            &lt;javaClientGenerator type=&quot;XMLMAPPER&quot; targetPackage=&quot;com.aaa.qy93.dao&quot;
                                 targetProject=&quot;src/main/java&quot;&gt;
                &lt;!-- enableSubPackages:是否让schema作为包的后缀 --&gt;
                &lt;property name=&quot;enableSubPackages&quot; value=&quot;false&quot;/&gt;
            &lt;/javaClientGenerator&gt;
            &lt;!-- 指定数据库表 多个表示,可用多个table标签--&gt;
            &lt;table tableName=&quot;emp&quot; enableCountByExample=&quot;false&quot; enableUpdateByExample=&quot;false&quot; enableDeleteByExample=&quot;false&quot;
                   enableSelectByExample=&quot;false&quot; selectByExampleQuery&gt;&lt;/table&gt;
        &lt;/context&gt;
    &lt;/generatorConfiguration&gt;
</code></pre><h4 id="springboot的启动类" tabindex="-1">springboot的启动类 <a class="header-anchor" href="#springboot的启动类" aria-label="Permalink to &quot;springboot的启动类&quot;">​</a></h4><pre><code>@MapperScan(basePackages={&quot;com.aaa.qy93.dao&quot;})
</code></pre>`,13)]))}const m=e(r,[["render",l]]);export{p as __pageData,m as default};
