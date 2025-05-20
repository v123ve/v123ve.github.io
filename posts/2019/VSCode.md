---

Created at: 2020-01-07
Last updated at: 2020-09-11
tags: 
  - Vue
  - VSCode

---

# VSCode

## VSCode

[Vue官方文档](https://cn.vuejs.org/v2/guide/)

[VisualCode快捷键大全](https://www.cnblogs.com/nzbin/p/7504591.html)

[VisualStudioCode常用插件](https://segmentfault.com/a/1190000006697219)
设置中文->ctrl+shift+p->config language->zh-CN
输入snippets点击进入用户代码片段配置(注释模板)

#### 插件

1. Auto Rename Tag

* Beautify
* Bracket Pair Colorizer
* Dracula Official
* filesize
* HTML Snippets
* IntelliSense for CSS class names in HTML
* jQuery Code Snippets
* Path Intellisense
* vscode-icons
* cssrem
* Chinese中文包
* Debugger for Chrome
* JavaScript (ES6) code snippets
* Settings Sync
 hosts:192.30.253.118 gist.github.com
 Shift + Alt + U:更新设置
 Shift + Alt + D:下载设置
* background

            "background.customImages":[
                    "file:///C:/Users/Public/Pictures/Sample Pictures/vscodebg2.png"
                ],
                "background.style": {
                    "content": "''",
                    "pointer-events": "none",
                    "position": "absolute",
                    "z-index": "99999",
                    "width": "100%",
                    "height": "100%",
                    "background-position": "0% 0%",
                    "background-size": "cover",
                    "background-repeat": "no-repeat",     
                    "opacity": 0.1
                },
                "background.useDefault": false

#### react相关插件

1. Eslint

    //全局安装eslint
    npm i eslint -g
    //如果用到html中的js校验
    npm i eslint-plugin-html -g
    //如果用到es2015语法
    npm i babel-eslint -g

eslintrc.json

    {
            "plugins": [
                    // "react",
                    "html"
            ],
            "env": {
                    "node": true,
                    "jquery": true,
                    "es6": true,
                    "browser": true
            },
            "globals": {
                    "angular": false
            },
            "parser": "babel-eslint",
            "rules": {
                    //官方文档 http://eslint.org/docs/rules/
                    //参数：0 关闭，1 警告，2 错误
                    // "quotes": [0, "single"],                  //建议使用单引号
                    // "no-inner-declarations": [0, "both"],     //不建议在{}代码块内部声明变量或函数
                    "no-extra-boolean-cast": 1, //多余的感叹号转布尔型
                    "no-extra-semi": 1, //多余的分号
                    "no-extra-parens": 0, //多余的括号
                    "no-empty": 1, //空代码块
     
                    //使用前未定义
                    "no-use-before-define": [
                            0,
                            "nofunc"
                    ],
     
                    "complexity": [0, 10], //圈复杂度大于*
     
                    //定义数组或对象最后多余的逗号
                    "comma-dangle": [
                            0,
                            "never"
                    ],
     
                    // 不允许对全局变量赋值,如 window = 'abc'
                    "no-global-assign": ["error", {
                            // 定义例外
                            // "exceptions": ["Object"]
                    }],
                    "no-var": 0, //用let或const替代var
                    "no-const-assign": 2, //不允许const重新赋值
                    "no-class-assign": 2, //不允许对class重新赋值
                    "no-debugger": 1, //debugger 调试代码未删除
                    "no-console": 0, //console 未删除
                    "no-constant-condition": 2, //常量作为条件
                    "no-dupe-args": 2, //参数重复
                    "no-dupe-keys": 2, //对象属性重复
                    "no-duplicate-case": 2, //case重复
                    "no-empty-character-class": 2, //正则无法匹配任何值
                    "no-invalid-regexp": 2, //无效的正则
                    "no-func-assign": 2, //函数被赋值
                    "valid-typeof": 1, //无效的类型判断
                    "no-unreachable": 2, //不可能执行到的代码
                    "no-unexpected-multiline": 2, //行尾缺少分号可能导致一些意外情况
                    "no-sparse-arrays": 1, //数组中多出逗号
                    "no-shadow-restricted-names": 2, //关键词与命名冲突
                    "no-undef": 1, //变量未定义
                    "no-unused-vars": 1, //变量定义后未使用
                    "no-cond-assign": 2, //条件语句中禁止赋值操作
                    "no-native-reassign": 2, //禁止覆盖原生对象
                    "no-mixed-spaces-and-tabs": 0,

​
​
                    //代码风格优化 --------------------------------------
                    "no-irregular-whitespace": 0,
                    "no-else-return": 0, //在else代码块中return，else是多余的
                    "no-multi-spaces": 0, //不允许多个空格

                    //object直接量建议写法 : 后一个空格前面不留空格
                    "key-spacing": [
                            0,
                            {
                                    "beforeColon": false,
                                    "afterColon": true
                            }
                    ],
     
                    "block-scoped-var": 1, //变量应在外部上下文中声明，不应在{}代码块中
                    "consistent-return": 1, //函数返回值可能是不同类型
                    "accessor-pairs": 1, //object getter/setter方法需要成对出现
     
                    //换行调用对象方法  点操作符应写在行首
                    "dot-location": [
                            1,
                            "property"
                    ],
                    "no-lone-blocks": 1, //多余的{}嵌套
                    "no-labels": 1, //无用的标记
                    "no-extend-native": 1, //禁止扩展原生对象
                    "no-floating-decimal": 1, //浮点型需要写全 禁止.1 或 2.写法
                    "no-loop-func": 1, //禁止在循环体中定义函数
                    "no-new-func": 1, //禁止new Function(...) 写法
                    "no-self-compare": 1, //不允与自己比较作为条件
                    "no-sequences": 1, //禁止可能导致结果不明确的逗号操作符
                    "no-throw-literal": 1, //禁止抛出一个直接量 应是Error对象
     
                    //不允return时有赋值操作
                    "no-return-assign": [
                            1,
                            "always"
                    ],
     
                    //不允许重复声明
                    "no-redeclare": [
                            1,
                            {
                                    "builtinGlobals": true
                            }
                    ],
     
                    //不执行的表达式
                    "no-unused-expressions": [
                            0,
                            {
                                    "allowShortCircuit": true,
                                    "allowTernary": true
                            }
                    ],
                    "no-useless-call": 1, //无意义的函数call或apply
                    "no-useless-concat": 1, //无意义的string concat
                    "no-void": 1, //禁用void
                    "no-with": 1, //禁用with
                    "space-infix-ops": 0, //操作符前后空格
     
                    //jsdoc
                    "valid-jsdoc": [
                            0,
                            {
                                    "requireParamDescription": true,
                                    "requireReturnDescription": true
                            }
                    ],
     
                    //标记未写注释
                    "no-warning-comments": [
                            1,
                            {
                                    "terms": [
                                            "todo",
                                            "fixme",
                                            "any other term"
                                    ],
                                    "location": "anywhere"
                            }
                    ],
                    "curly": 0 //if、else、while、for代码块用{}包围
            }
    }

2. CSS Modules
3. npm Intellisense
4. React-Redux ES6 Snippets
5. React-Native/React/Redux es6/es7
6. Reactjs code snippets

## Vue

#### 测试增删改查

```
可以在Chrome里加入Vue.js.Devtools插件

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    
    <body>
        <div id="app">
            <div class="row">
                <div class="col-sm-12" style="text-align:center">
                    <h3 :title="tip">
                        {{title}}
                    </h3>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <button class="btn btn-success" data-toggle="modal" data-target="#myModal" @click="add()">添加</button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <table class="table table-striped">
                        <thead class="thead-inverse">
                            <tr>
                                <th>姓名</th>
                                <th>性别</th>
                                <th>年龄</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in tableDates">
                                <td scope="row">{{item.name}}</td>
                                <td>{{item.sex===0?'男':'女'}}</td>
                                <td>{{item.age}}</td>
                                <td>
                                    <button class='btn btn-primary' data-toggle="modal" data-target="#myModal" @click="edit(index)">编辑</button>
                                    <button class='btn btn-danger' @click="del(index)">删除</button>
                                </td>
                            </tr>
    
                        </tbody>
                    </table>
                </div>
            </div>


​    
​    
            <!-- 模态框（Modal） -->
            <div class="modal fade" id="myModal" tabindex="9999" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">信息</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    
                        </div>
                        <div class="modal-body">
    
                            <div class="form-group">
                                <label for="">姓名</label>
                                <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                    placeholder="" v-model="selectedStudent.name">
                            </div>
                            <div class="form-group">
                                <label for="">性别</label>
                                <select class="form-control" name="" id="" v-model="selectedStudent.sex">
                                    <option v-for="each in sex" :value="each.value">{{each.name}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">年龄</label>
                                <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                    placeholder="" v-model="selectedStudent.age">
                            </div>
    
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button type="button" class="btn btn-primary" @click="sub">提交更改</button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal -->
            </div>
        </div>
    </body>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>
    <script>
        let vm = new Vue({
            el: '#app',
            data: {
                title: '学生信息管理',
                sex: [{
                    value: 0,
                    name: '男'
                }, {
                    value: 1,
                    name: '女'
                }],
                selectedStudent:{}, //临时学生对象
                selectedIndex: -1,  //选择的对象索引
                tableDates: [{
                        id: '1001',
                        name: '白展堂',
                        sex: 0,
                        age: 18
                    },
                    {
                        id: '1002',
                        name: '佟湘玉',
                        sex: 1,
                        age: 16
                    },
                    {
                        id: '1003',
                        name: '郭芙蓉',
                        sex: 1,
                        age: 17
                    },
                    {
                        id: '1004',
                        name: '吕轻侯',
                        sex: 0,
                        age: 19
                    },
                    {
                        id: '1005',
                        name: '李大嘴',
                        sex: 0,
                        age: 20
                    },
                    {
                        id: '1006',
                        name: '祝无双',
                        sex: 1,
                        age: 17
                    },
                    {
                        id: '1007',
                        name: '邢捕头',
                        sex: 0,
                        age: 22
                    },
                ]
            },
            methods: {
                //添加学生
                add(){
                    this.selectedStudent = {}
                },
                sub(){
                    if(this.selectedStudent.id)
                        this.$set(this.tableDates,this.selectedIndex,this.deepCopy(this.selectedStudent))
                    else{
                        this.selectedStudent.id=Math.floor(Math.random(0,10)*10000+1000)
                        this.tableDates.push(this.selectedStudent)
                    }
                        
                    $('#myModal').modal('hide')
                },
                //编辑
                edit(index){
                    this.selectedIndex = index;
                    this.selectedStudent = this.deepCopy(this.tableDates[index])
                },
                //删除
                del(index) {
                    this.tableDates.splice(index, 1)
                },
                //对象拷贝
                deepCopy(obj) {
                    if (typeof obj !== 'object') {
                        return obj;
                    }
                    var newobj = {};
                    if (Array.isArray(obj)) {
                        newobj = [];
                    }
                    for (var attr in obj) {
                        // 每个值Copy
                        newobj[attr] = this.deepCopy(obj[attr]);
                    }
                    return newobj;
                },
    
            },
        })
    </script>
    
    </html>


#### component组件

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Vue组件前</title>
        <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    
    <body>
        <div id="app">
            <my-component v-bind:title="title"></my-component>
        </div>
    </body>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        Vue.component('my-component', {
            template: "<button>{{msg+title}}</button>",
            props: ['title'],
            data() {
                return {
                    msg: '这是按钮'
                }
            }
        })
        const vm = new Vue({
            el: "#app",
            data: {
                title: "这是标题"
            }
        })
    </script>
    
    </html>


#### 使用Node.js的Npm安装库

1. 安装Node.js->cmd:npm->npm install -g @vue/cli->vue -V->vue ui
2. 进入网页端创建新项目->安装vue-cli-plugin-element插件->Sever运行->使用编译器编译
 App.vue

    <template>
      <div id="app">
        <el-container>
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>
              <my-table v-bind:list="tableData"></my-table>
            </el-main>
          </el-container>
        </el-container>
      </div>
    </template>
   
    <script>
    import MyTable from "./components/MyTable.vue";
   
    export default {
      name: "app",
      components: {
        MyTable
      },
      data() {
        return {
          tableData: []
        };
      }
    };
    </script>
   
    <style>
    #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    .el-header,
    .el-footer {
      background-color: #b3c0d1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
   
    .el-aside {
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }
   
    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
    }
   
    body > .el-container {
      margin-bottom: 40px;
    }
   
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }
   
    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
    </style>
   

MyTable.vue

    <template>
    <el-table :data="list" border style="width: 100%">
    <el-table-column prop="id" label="学号"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="school" label="学校"></el-table-column>
    </el-table>
    </template>
    <script>
    export default {
    props: ["list"]
    };
    </script>
```

#### 加入服务器，连接Mysql数据库

新建SpringBoot项目,勾选Web,Mybatis,Mysql,加入逆向generatorConfig.xml
pom.xml

```
   <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.9.8</version>
        </dependency>
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
```

application.properties

```
    #设置地址栏工程前缀
    spring.mvc.servlet.path=/student
    #设置端口
    server.port=8085
    #设置热部署
    spring.devtools.restart.enabled=true
    #设置修改后重启的路径
    spring.devtools.restart.additional-paths=src/main/java
    #设置修改后不重启的路径
    spring.devtools.restart.exclude=templates/views/**
    #设置thymeleaf不缓存
    spring.thymeleaf.cache=false
    #数据库配置(高版本mysql-connect包需要加入时区)
    spring.datasource.url=jdbc:mysql://xxx:3306/db93?serverTimezone=GMT%2B8&useUnicode=true&characterEncoding=utf-8
    spring.datasource.username=root
    spring.datasource.password=
    spring.datasource.driver-class-name=com.mysql.jdbc.Driver
    #数据源配置
    spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
    #mybatis配置
    mybatis.mapper-locations=templates/mybatis/mappers/*.xml
    #设置实体类别名
    mybatis.type-aliases-package=com.aaa.qy93.student.entity
```

StudentApplication启动类

```
@MapperScan(basePackages = {"com.aaa.qy93.student.dao"})
    @EnableWebMvc
    @SpringBootApplication
    public class StudentApplication {
        public static void main(String[] args) {
            SpringApplication.run(StudentApplication.class, args);
        }
    }
```

StudentController

```
@CrossOrigin
    @RestController
    @RequestMapping("/student")
    public class StudentController {
        @Autowired
        private StudentService studentService;
        /**
         * 获取数据条数
         */
        @RequestMapping("/count")
        public int count(){
            return studentService.count();
        }
        /**
         * 获取数据列表
         * @param start 索引开始位置
         * @param size 数量
         */
        @RequestMapping("/list")
        public List<Student> list(@RequestParam("start")int start,@RequestParam("size")int size ){
            return studentService.list(start,size);
        }
        /**
         * 删除指定id
         * @param studentno 学号
         */
        @RequestMapping("/del/{studentno}")
        public int del(@PathVariable(value = "studentno")int studentno){
            return studentService.deleteByPrimaryKey(studentno);
        }
    }
```

文件结构
![[../_resources/unknown_filename-4f5fafe8.png]]

##### vue-axios

cmd启动:vue ui
安装插件:vue-cli-plugin-axios
开启项目，引入https.js,修改服务器地址
axios.defaults.baseURL = '<http://xxx:8085>'; //配置接口地址

```
 import axios from 'axios'
    import qs from 'qs'
    axios.defaults.timeout = 5000;                        //响应时间
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
    axios.defaults.baseURL = '/';   //配置接口地址
    //POST传参序列化(添加请求拦截器)
    axios.interceptors.request.use((config) => {
        //在发送请求之前做某件事
        if(config.method  === 'post'){
            config.data = qs.stringify(config.data);
        }
        return config;
    },(error) =>{
        console.log('错误的传参')
        return Promise.reject(error);
    });
    //返回状态判断(添加响应拦截器)
    axios.interceptors.response.use((res) =>{
        //对响应数据做些事
        if(!res.data.success){
            return Promise.resolve(res);
        }
        return res;
    }, (error) => {
        console.log('网络异常')
        return Promise.reject(error);
    });
    //返回一个Promise(发送post请求)
    export function fetchPost(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(response => {
                    resolve(response);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    ////返回一个Promise(发送get请求)
    export function fetchGet(url, param) {
        return new Promise((resolve, reject) => {
            axios.get(url, {params: param})
                .then(response => {
                    resolve(response)
                }, err => {
                    reject(err)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    export default {
        fetchPost,
        fetchGet,
    }
```

MyTable.vue

```
 <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="studentno" label="学号"></el-table-column>
        <el-table-column prop="studentname" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别">
          <template v-slot="data">
            <el-tag :type="data.row.sex?'':'danger'">{{data.row.sex?'男':'女'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="gradeid" label="年级"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="borndate" label="生日"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="identitycard" label="身份证"></el-table-column>
        <el-table-column label="操作">
          <template v-slot="data">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="delRow(data.$index,data.row.studentno)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <script>
    import https from "../https.js";
    export default {
      props: ["tableData", "loading"],
      methods: {
        delRow(index, id) {
          this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
            center: true
          })
            .then(() => {
              https.fetchPost("/student/del/" + id).then(res => {
                if (res.data == 1) {
                  //删除成功
                  this.tableData.splice(index, 1);
                  this.$message({
                    type: "success",
                    message: "删除成功!"
                  });
                }
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消删除"
              });
            });
        }
      }
    };
    </script>
```

App.vue

```
 <template>
      <div id="app">
        <el-container>
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>
              <my-table :tableData="tableData" v-loading="loading"></my-table>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                :page-size="size"
                @current-change="pageChange"
              ></el-pagination>
            </el-main>
          </el-container>
        </el-container>
      </div>
    </template>
    <script>
    import MyTable from "./components/MyTable.vue";
    import https from "./https.js";
    export default {
      name: "app",
      components: {
        MyTable
      },
      data() {
        return {
          size: 8,
          tableData: [],
          total: 0,
          loading: true
        };
      },
      mounted() {
        https.fetchGet("/student/count").then(res => {
          this.total = res.data;
        });
        this.fetchData(0);
      },
      methods: {
        //获取数据
        fetchData(start) {
          this.loading = true;
          https
            .fetchGet("/student/list", { start: start, size: this.size })
            .then(res => {
              this.tableData = res.data;
              this.loading = false;
            });
        },
        pageChange(e) {
          this.fetchData((e - 1) * this.size);
        }
      }
    };
    </script>
    <style>
    #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    .el-header,
    .el-footer {
      background-color: #b3c0d1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
    .el-aside {
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }
    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
    }
    body > .el-container {
      margin-bottom: 40px;
    }
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }
    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
    </style>

```
