---

Created at: 2019-03-25
Last updated at: 2019-05-19
tags: 
  - Mybatis逆向生成

---

# java-web工程


### java-web工程

#### generatorConfig.xml

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE generatorConfiguration
      PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
      "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
    <generatorConfiguration>
        <!--数据库驱动 -->
        <classPathEntry location="WebContent/WEB-INF/lib/mysql-connector-java-5.1.21.jar" />
        <context targetRuntime="MyBatis3">
            <commentGenerator>
                <property name="suppressDate" value="true" />
                <property name="suppressAllComments" value="true" />
            </commentGenerator>
            <!--数据库链接地址账号密码 -->
            <jdbcConnection driver            connectionURL="jdbc:mysql://localhost/db93" userpassword="">
            </jdbcConnection>
            <javaTypeResolver>
                <property name="forceBigDecimals" value="false" />
            </javaTypeResolver>
            <!--生成Model类存放位置 -->
            <javaModelGenerator targetPackage="com.xxx.proj.entity"
                targetProject="src">
                <property name="enableSubPackages" value="true" />
                <property name="trimStrings" value="true" />
            </javaModelGenerator>
            <!--生成映射文件存放位置 -->
            <sqlMapGenerator targetPackage="com.xxx.proj.mapper"
                targetProject="src">
                <property name="enableSubPackages" value="true" />
            </sqlMapGenerator>
            <!--生成Dao类存放位置 -->
            <javaClientGenerator type="XMLMAPPER"
                targetPackage="com.xxx.proj.mapper" targetProject="src">
                <property name="enableSubPackages" value="true" />
            </javaClientGenerator>
            <!--生成对应表及类名 -->
            <table tableName="application" domainObjectName="Application"
                enableCountByExample="false" enableUpdateByExample="false"
                enableDeleteByExample="false" enableSelectByExample="false"
                selectByExampleQuery></table>
        </context>
    </generatorConfiguration>


#### TestGenerator.java

    package com.xxx.proj.test;
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
            List<String> warnings = new ArrayList<String>();
            try {
                String configFilePath = System.getProperty("user.dir").concat(
                        "/src/generatorConfig.xml");
                System.out.println("加载配置文件===" + configFilePath);
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


### springboot工程

#### pom.xml

        <plugin>
            <groupId>org.mybatis.generator</groupId>
            <artifactId>mybatis-generator-maven-plugin</artifactId>
            <version>1.3.5</version>
            <configuration>
                <!--允许移动生成的文件-->
                <verbose>true</verbose>
                <!--允许覆盖生成的文件-->
                <overwrite>true</overwrite>
            </configuration>
        </plugin>


#### generatorConfig.xml

        <?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE generatorConfiguration PUBLIC
                "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
                "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
        <generatorConfiguration>
            <!--mysql 连接数据库jar 这里选择自己本地位置-->
            <classPathEntry
                    location="E:\AAA\Qy93\mavenrepository\mysql\mysql-connector-java\5.1.40\mysql-connector-java-5.1.40.jar"/>
            <context targetRuntime="MyBatis3">
                <commentGenerator>
                    <!-- 是否去除自动生成的注释 true：是 ： false:否 -->
                    <property name="suppressAllComments" value="true"/>
                </commentGenerator>
                <!--数据库连接的信息：驱动类、连接地址、用户名、密码 -->
                <jdbcConnection driverconnectionURL="jdbc:mysql://localhost:3306/db93?serverTimezone=GMT%2B8"
                                userpassword="">
                </jdbcConnection>
                <!-- 默认false，把JDBC DECIMAL 和 NUMERIC 类型解析为 Integer，为 true时把JDBC DECIMAL 和 NUMERIC 类型解析为java.math.BigDecimal -->
                <javaTypeResolver>
                    <property name="forceBigDecimals" value="false"/>
                </javaTypeResolver>
                <!-- targetProject:生成PO类的位置 -->
                <javaModelGenerator targetPackage="com.aaa.qy93.entity"
                                    targetProject="src/main/java">
                    <!-- enableSubPackages:是否让schema作为包的后缀 -->
                    <property name="enableSubPackages" value="false"/>
                    <!-- 从数据库返回的值被清理前后的空格 -->
                    <property name="trimStrings" value="true"/>
                </javaModelGenerator>
                <!-- targetProject:mapper映射文件生成的位置 如果maven工程只是单独的一个工程，targetProject="src/main/java" 若果maven工程是分模块的工程，targetProject="所属模块的名称"，例如： targetProject="ecps-manager-mapper"，下同-->
                <sqlMapGenerator targetPackage="templates/mapper"
                                 targetProject="src/main/resources">
                    <!-- enableSubPackages:是否让schema作为包的后缀 -->
                    <property name="enableSubPackages" value="false"/>
                </sqlMapGenerator>
                <!-- targetPackage：mapper接口生成的位置 -->
                <javaClientGenerator type="XMLMAPPER" targetPackage="com.aaa.qy93.dao"
                                     targetProject="src/main/java">
                    <!-- enableSubPackages:是否让schema作为包的后缀 -->
                    <property name="enableSubPackages" value="false"/>
                </javaClientGenerator>
                <!-- 指定数据库表 多个表示,可用多个table标签-->
                <table tableName="emp" enableCountByExample="false" enableUpdateByExample="false" enableDeleteByExample="false"
                       enableSelectByExample="false" selectByExampleQuery></table>
            </context>
        </generatorConfiguration>


#### springboot的启动类

    @MapperScan(basePackages={"com.aaa.qy93.dao"})

