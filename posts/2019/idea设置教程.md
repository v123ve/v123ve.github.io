---

Created at: 2019-04-01
Last updated at: 2023-03-29
Source URL: https://plugins.jetbrains.com/plugin/185-generateserialversionuid
tags: 
  - idea
  - 使用设置

---

# idea设置教程


#### idea设置教程

[idea使用教程](https://blog.csdn.net/fanrenxiang/article/details/80503490)

[idea基本设置](https://blog.csdn.net/RobertoHuang/article/details/75042116)

[idea快捷键使用eclipse](https://blog.csdn.net/zxfly6/article/details/82112322)

[idea去除提示的线](https://blog.csdn.net/best_luxi/article/details/81253316)

##### mysql

安装前一定要确定完全卸载，运行项目无报错但一直转圈可能是数据库连接有问题，确认连接的是本地还是服务器

#### maven注册本地包

    mvn install:install-file -DgroupId=com.minyuan -DartifactId=log-handle -Dversion=1.0.0 -Dpackaging=jar -Dfile=log-handle-1.0.0.jar


##### 设置自动编译

1.Setting-->Builder-->Compiler-->Build project automatically
2.mvn clean||mvn install

##### 设置console自动换行

Setting->Editor->General->Console-->Use soft wrops in console

##### 设置代码提示不区分大小写

Setting->Editor->General->Code Completion->取消勾选Match case

##### JDK设置

[JDK设置](https://blog.csdn.net/fanrenxiang/article/details/80676262)

##### 隐藏.iml和.idea等自动生成文件

设置->File Types->出现上图所示，在底部ingore files加入你要忽略的文件*.idea;*.iml;并应用即可

##### 如何快速查看当前类中的所有方法？

快捷键 Alt+7

##### 快速生成main方法、for循环、foreach循环、out输出

psvm、fori、iter、soutp

##### 部署tomcat、web项目

[部署tomcat、web项目](https://blog.csdn.net/fanrenxiang/article/details/79588020)

##### 优秀插件推荐

Setting->Plugins->Brower repositories->搜索插件名-点击install按钮后，安装完毕，重启intellij idea即可

* 知了库
	https://plugins.zhile.io
	IDE Eval Reset

* **Translation**
	翻译插件，不用来回切换翻译软件，直接就能在IDE中使用。中英互译、句子并感情朗读
* Background Image Plus
	把单调背景换成自己喜欢的图
* **Rainbow Brackets**
	彩虹颜色括号，安装这个插件后代码里的括号就变成了彩虹色，看着非常舒服
* **String Manipulation**
	强大的字符串转换工具。使用快捷键，Alt+m。
* **Quick File Preview**
	类似VScode文件夹展开方式
* **Material Theme UI**
	主题
* JSON Parser
	json转换
* Alibaba Java Coding Guidelines
	alibaba开源的插件，可以check代码中存在的问题，快速生成注释等
* RestfulToolkit
	http 简单请求工具
* GenerateAllSetter
	一键生成某对象的所有set方法并赋予默认值，new一个对象，快速生成这个对象的所有set方法
	（鼠标定位到对象名，按住Alt+Enter快捷键，选择generate all setter即可）
* GenerateSerialVersionUID
	快速生成SerialVersionUID
* GsonFormatPlus
	这个插件可以快速的帮你由json结构生成java类，把标准的json数据copy到快捷键Alt+s弹出来的文本框中
* Maven Helper
	Maven是个很好用的依赖管理工具，但是再好的东西也不是完美的。Maven的依赖机制会导致Jar包的冲突。举个例子，现在你的项目中，使用了两个Jar包，分别是A和B。现在A需要依赖另一个Jar包C，B也需要依赖C。但是A依赖的C的版本是1.0，B依赖的C的版本是2.0。这时候，Maven会将这1.0的C和2.0的C都下载到你的项目中，这样你的项目中就存在了不同版本的C，这时Maven会依据依赖路径最短优先原则，来决定使用哪个版本的Jar包，而另一个无用的Jar包则未被使用，这就是所谓的依赖冲突。

#### react相关插件

* React CSS Modules
* React Native Console
* React snippets
* React-Templates

##### 设置注释模板

类模板:Setting->Editor->File and Code Template->Include->File Header

    /**
     * @Title: ${NAME}
     * @Description: TODO(  )
     * @Date: ${DATE} ${TIME}
     * @Author: hsy
     */


方法模板:Setting->Editor->Live Templates->+Template Group ->+Live Template

    **
     * @Title: $description$
     * @Description: TODO(  )
     * @Date: $date$ $time$
     * @Author: hsy
    $params$
     * @Return $return$
     */ 


![[../_resources/unknown_filename-61daa1be.png]]

    groovyScript("def result=''; def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList(); for(i = 0; i < params.size(); i++) {result+=' * @Param ' + params[i] + ((i < params.size() - 1) ? '\\n' : '')}; return result", methodParameters())


        // 功能测试======================start======================	
        // 功能测试=======================end=======================
        // 异常测试======================start======================
        // 异常测试=======================end=======================
        // 忽略测试======================start======================
        // 忽略测试=======================end=======================

