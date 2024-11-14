import{_ as s,c as a,a3 as p,o as l}from"./chunks/framework.BaR4VHXY.js";const d=JSON.parse('{"title":"VSCode","description":"","frontmatter":{"Created at":"2020-01-07T00:00:00.000Z","Last updated at":"2020-09-11T00:00:00.000Z","tags":["Vue","VSCode"]},"headers":[],"relativePath":"zh-CN/工作笔记/VSCode.md","filePath":"zh-CN/工作笔记/VSCode.md","lastUpdated":null}'),t={name:"zh-CN/工作笔记/VSCode.md"};function e(i,n,o,c,u,r){return l(),a("div",null,n[0]||(n[0]=[p(`<h1 id="vscode" tabindex="-1">VSCode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;VSCode&quot;">​</a></h1><h2 id="vscode-1" tabindex="-1">VSCode <a class="header-anchor" href="#vscode-1" aria-label="Permalink to &quot;VSCode&quot;">​</a></h2><p><a href="https://cn.vuejs.org/v2/guide/" target="_blank" rel="noreferrer">Vue官方文档</a></p><p><a href="https://www.cnblogs.com/nzbin/p/7504591.html" target="_blank" rel="noreferrer">VisualCode快捷键大全</a></p><p><a href="https://segmentfault.com/a/1190000006697219" target="_blank" rel="noreferrer">VisualStudioCode常用插件</a> 设置中文-&gt;ctrl+shift+p-&gt;config language-&gt;zh-CN 输入snippets点击进入用户代码片段配置(注释模板)</p><h4 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h4><ol><li>Auto Rename Tag</li></ol><ul><li><p>Beautify</p></li><li><p>Bracket Pair Colorizer</p></li><li><p>Dracula Official</p></li><li><p>filesize</p></li><li><p>HTML Snippets</p></li><li><p>IntelliSense for CSS class names in HTML</p></li><li><p>jQuery Code Snippets</p></li><li><p>Path Intellisense</p></li><li><p>vscode-icons</p></li><li><p>cssrem</p></li><li><p>Chinese中文包</p></li><li><p>Debugger for Chrome</p></li><li><p>JavaScript (ES6) code snippets</p></li><li><p>Settings Sync hosts:192.30.253.118 gist.github.com Shift + Alt + U:更新设置 Shift + Alt + D:下载设置</p></li><li><p>background</p><pre><code>      &quot;background.customImages&quot;:[
              &quot;file:///C:/Users/Public/Pictures/Sample Pictures/vscodebg2.png&quot;
          ],
          &quot;background.style&quot;: {
              &quot;content&quot;: &quot;&#39;&#39;&quot;,
              &quot;pointer-events&quot;: &quot;none&quot;,
              &quot;position&quot;: &quot;absolute&quot;,
              &quot;z-index&quot;: &quot;99999&quot;,
              &quot;width&quot;: &quot;100%&quot;,
              &quot;height&quot;: &quot;100%&quot;,
              &quot;background-position&quot;: &quot;0% 0%&quot;,
              &quot;background-size&quot;: &quot;cover&quot;,
              &quot;background-repeat&quot;: &quot;no-repeat&quot;,     
              &quot;opacity&quot;: 0.1
          },
          &quot;background.useDefault&quot;: false
</code></pre></li></ul><h4 id="react相关插件" tabindex="-1">react相关插件 <a class="header-anchor" href="#react相关插件" aria-label="Permalink to &quot;react相关插件&quot;">​</a></h4><ol><li><p>Eslint</p><p>//全局安装eslint npm i eslint -g //如果用到html中的js校验 npm i eslint-plugin-html -g //如果用到es2015语法 npm i babel-eslint -g</p></li></ol><p>eslintrc.json</p><pre><code>{
        &quot;plugins&quot;: [
                // &quot;react&quot;,
                &quot;html&quot;
        ],
        &quot;env&quot;: {
                &quot;node&quot;: true,
                &quot;jquery&quot;: true,
                &quot;es6&quot;: true,
                &quot;browser&quot;: true
        },
        &quot;globals&quot;: {
                &quot;angular&quot;: false
        },
        &quot;parser&quot;: &quot;babel-eslint&quot;,
        &quot;rules&quot;: {
                //官方文档 http://eslint.org/docs/rules/
                //参数：0 关闭，1 警告，2 错误
                // &quot;quotes&quot;: [0, &quot;single&quot;],                  //建议使用单引号
                // &quot;no-inner-declarations&quot;: [0, &quot;both&quot;],     //不建议在{}代码块内部声明变量或函数
                &quot;no-extra-boolean-cast&quot;: 1, //多余的感叹号转布尔型
                &quot;no-extra-semi&quot;: 1, //多余的分号
                &quot;no-extra-parens&quot;: 0, //多余的括号
                &quot;no-empty&quot;: 1, //空代码块
 
                //使用前未定义
                &quot;no-use-before-define&quot;: [
                        0,
                        &quot;nofunc&quot;
                ],
 
                &quot;complexity&quot;: [0, 10], //圈复杂度大于*
 
                //定义数组或对象最后多余的逗号
                &quot;comma-dangle&quot;: [
                        0,
                        &quot;never&quot;
                ],
 
                // 不允许对全局变量赋值,如 window = &#39;abc&#39;
                &quot;no-global-assign&quot;: [&quot;error&quot;, {
                        // 定义例外
                        // &quot;exceptions&quot;: [&quot;Object&quot;]
                }],
                &quot;no-var&quot;: 0, //用let或const替代var
                &quot;no-const-assign&quot;: 2, //不允许const重新赋值
                &quot;no-class-assign&quot;: 2, //不允许对class重新赋值
                &quot;no-debugger&quot;: 1, //debugger 调试代码未删除
                &quot;no-console&quot;: 0, //console 未删除
                &quot;no-constant-condition&quot;: 2, //常量作为条件
                &quot;no-dupe-args&quot;: 2, //参数重复
                &quot;no-dupe-keys&quot;: 2, //对象属性重复
                &quot;no-duplicate-case&quot;: 2, //case重复
                &quot;no-empty-character-class&quot;: 2, //正则无法匹配任何值
                &quot;no-invalid-regexp&quot;: 2, //无效的正则
                &quot;no-func-assign&quot;: 2, //函数被赋值
                &quot;valid-typeof&quot;: 1, //无效的类型判断
                &quot;no-unreachable&quot;: 2, //不可能执行到的代码
                &quot;no-unexpected-multiline&quot;: 2, //行尾缺少分号可能导致一些意外情况
                &quot;no-sparse-arrays&quot;: 1, //数组中多出逗号
                &quot;no-shadow-restricted-names&quot;: 2, //关键词与命名冲突
                &quot;no-undef&quot;: 1, //变量未定义
                &quot;no-unused-vars&quot;: 1, //变量定义后未使用
                &quot;no-cond-assign&quot;: 2, //条件语句中禁止赋值操作
                &quot;no-native-reassign&quot;: 2, //禁止覆盖原生对象
                &quot;no-mixed-spaces-and-tabs&quot;: 0,
</code></pre><p>​ ​ //代码风格优化 -------------------------------------- &quot;no-irregular-whitespace&quot;: 0, &quot;no-else-return&quot;: 0, //在else代码块中return，else是多余的 &quot;no-multi-spaces&quot;: 0, //不允许多个空格</p><pre><code>                //object直接量建议写法 : 后一个空格前面不留空格
                &quot;key-spacing&quot;: [
                        0,
                        {
                                &quot;beforeColon&quot;: false,
                                &quot;afterColon&quot;: true
                        }
                ],
 
                &quot;block-scoped-var&quot;: 1, //变量应在外部上下文中声明，不应在{}代码块中
                &quot;consistent-return&quot;: 1, //函数返回值可能是不同类型
                &quot;accessor-pairs&quot;: 1, //object getter/setter方法需要成对出现
 
                //换行调用对象方法  点操作符应写在行首
                &quot;dot-location&quot;: [
                        1,
                        &quot;property&quot;
                ],
                &quot;no-lone-blocks&quot;: 1, //多余的{}嵌套
                &quot;no-labels&quot;: 1, //无用的标记
                &quot;no-extend-native&quot;: 1, //禁止扩展原生对象
                &quot;no-floating-decimal&quot;: 1, //浮点型需要写全 禁止.1 或 2.写法
                &quot;no-loop-func&quot;: 1, //禁止在循环体中定义函数
                &quot;no-new-func&quot;: 1, //禁止new Function(...) 写法
                &quot;no-self-compare&quot;: 1, //不允与自己比较作为条件
                &quot;no-sequences&quot;: 1, //禁止可能导致结果不明确的逗号操作符
                &quot;no-throw-literal&quot;: 1, //禁止抛出一个直接量 应是Error对象
 
                //不允return时有赋值操作
                &quot;no-return-assign&quot;: [
                        1,
                        &quot;always&quot;
                ],
 
                //不允许重复声明
                &quot;no-redeclare&quot;: [
                        1,
                        {
                                &quot;builtinGlobals&quot;: true
                        }
                ],
 
                //不执行的表达式
                &quot;no-unused-expressions&quot;: [
                        0,
                        {
                                &quot;allowShortCircuit&quot;: true,
                                &quot;allowTernary&quot;: true
                        }
                ],
                &quot;no-useless-call&quot;: 1, //无意义的函数call或apply
                &quot;no-useless-concat&quot;: 1, //无意义的string concat
                &quot;no-void&quot;: 1, //禁用void
                &quot;no-with&quot;: 1, //禁用with
                &quot;space-infix-ops&quot;: 0, //操作符前后空格
 
                //jsdoc
                &quot;valid-jsdoc&quot;: [
                        0,
                        {
                                &quot;requireParamDescription&quot;: true,
                                &quot;requireReturnDescription&quot;: true
                        }
                ],
 
                //标记未写注释
                &quot;no-warning-comments&quot;: [
                        1,
                        {
                                &quot;terms&quot;: [
                                        &quot;todo&quot;,
                                        &quot;fixme&quot;,
                                        &quot;any other term&quot;
                                ],
                                &quot;location&quot;: &quot;anywhere&quot;
                        }
                ],
                &quot;curly&quot;: 0 //if、else、while、for代码块用{}包围
        }
}
</code></pre><ol start="2"><li>CSS Modules</li><li>npm Intellisense</li><li>React-Redux ES6 Snippets</li><li>React-Native/React/Redux es6/es7</li><li>Reactjs code snippets</li></ol><h2 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h2><h4 id="测试增删改查" tabindex="-1">测试增删改查 <a class="header-anchor" href="#测试增删改查" aria-label="Permalink to &quot;测试增删改查&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>可以在Chrome里加入Vue.js.Devtools插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>    &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &lt;head&gt;</span></span>
<span class="line"><span>        &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>        &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>        &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>        &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css&quot;</span></span>
<span class="line"><span>            integrity=&quot;sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm&quot; crossorigin=&quot;anonymous&quot;&gt;</span></span>
<span class="line"><span>    &lt;/head&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &lt;body&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;col-sm-12&quot; style=&quot;text-align:center&quot;&gt;</span></span>
<span class="line"><span>                    &lt;h3 :title=&quot;tip&quot;&gt;</span></span>
<span class="line"><span>                        {{title}}</span></span>
<span class="line"><span>                    &lt;/h3&gt;</span></span>
<span class="line"><span>                    &lt;hr&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;col-sm-12&quot;&gt;</span></span>
<span class="line"><span>                    &lt;button class=&quot;btn btn-success&quot; data-toggle=&quot;modal&quot; data-target=&quot;#myModal&quot; @click=&quot;add()&quot;&gt;添加&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;col-sm-12&quot;&gt;</span></span>
<span class="line"><span>                    &lt;table class=&quot;table table-striped&quot;&gt;</span></span>
<span class="line"><span>                        &lt;thead class=&quot;thead-inverse&quot;&gt;</span></span>
<span class="line"><span>                            &lt;tr&gt;</span></span>
<span class="line"><span>                                &lt;th&gt;姓名&lt;/th&gt;</span></span>
<span class="line"><span>                                &lt;th&gt;性别&lt;/th&gt;</span></span>
<span class="line"><span>                                &lt;th&gt;年龄&lt;/th&gt;</span></span>
<span class="line"><span>                                &lt;th&gt;操作&lt;/th&gt;</span></span>
<span class="line"><span>                            &lt;/tr&gt;</span></span>
<span class="line"><span>                        &lt;/thead&gt;</span></span>
<span class="line"><span>                        &lt;tbody&gt;</span></span>
<span class="line"><span>                            &lt;tr v-for=&quot;(item,index) in tableDates&quot;&gt;</span></span>
<span class="line"><span>                                &lt;td scope=&quot;row&quot;&gt;{{item.name}}&lt;/td&gt;</span></span>
<span class="line"><span>                                &lt;td&gt;{{item.sex===0?&#39;男&#39;:&#39;女&#39;}}&lt;/td&gt;</span></span>
<span class="line"><span>                                &lt;td&gt;{{item.age}}&lt;/td&gt;</span></span>
<span class="line"><span>                                &lt;td&gt;</span></span>
<span class="line"><span>                                    &lt;button class=&#39;btn btn-primary&#39; data-toggle=&quot;modal&quot; data-target=&quot;#myModal&quot; @click=&quot;edit(index)&quot;&gt;编辑&lt;/button&gt;</span></span>
<span class="line"><span>                                    &lt;button class=&#39;btn btn-danger&#39; @click=&quot;del(index)&quot;&gt;删除&lt;/button&gt;</span></span>
<span class="line"><span>                                &lt;/td&gt;</span></span>
<span class="line"><span>                            &lt;/tr&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>                        &lt;/tbody&gt;</span></span>
<span class="line"><span>                    &lt;/table&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>​    </span></span>
<span class="line"><span>​    </span></span>
<span class="line"><span>            &lt;!-- 模态框（Modal） --&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;modal fade&quot; id=&quot;myModal&quot; tabindex=&quot;9999&quot; role=&quot;dialog&quot; aria-labelledby=&quot;myModalLabel&quot;</span></span>
<span class="line"><span>                aria-hidden=&quot;true&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;modal-dialog&quot;&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;modal-content&quot;&gt;</span></span>
<span class="line"><span>                        &lt;div class=&quot;modal-header&quot;&gt;</span></span>
<span class="line"><span>                            &lt;h4 class=&quot;modal-title&quot; id=&quot;myModalLabel&quot;&gt;信息&lt;/h4&gt;</span></span>
<span class="line"><span>                            &lt;button type=&quot;button&quot; class=&quot;close&quot; data-dismiss=&quot;modal&quot; aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/button&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>                        &lt;/div&gt;</span></span>
<span class="line"><span>                        &lt;div class=&quot;modal-body&quot;&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>                            &lt;div class=&quot;form-group&quot;&gt;</span></span>
<span class="line"><span>                                &lt;label for=&quot;&quot;&gt;姓名&lt;/label&gt;</span></span>
<span class="line"><span>                                &lt;input type=&quot;text&quot; class=&quot;form-control&quot; name=&quot;&quot; id=&quot;&quot; aria-describedby=&quot;helpId&quot;</span></span>
<span class="line"><span>                                    placeholder=&quot;&quot; v-model=&quot;selectedStudent.name&quot;&gt;</span></span>
<span class="line"><span>                            &lt;/div&gt;</span></span>
<span class="line"><span>                            &lt;div class=&quot;form-group&quot;&gt;</span></span>
<span class="line"><span>                                &lt;label for=&quot;&quot;&gt;性别&lt;/label&gt;</span></span>
<span class="line"><span>                                &lt;select class=&quot;form-control&quot; name=&quot;&quot; id=&quot;&quot; v-model=&quot;selectedStudent.sex&quot;&gt;</span></span>
<span class="line"><span>                                    &lt;option v-for=&quot;each in sex&quot; :value=&quot;each.value&quot;&gt;{{each.name}}&lt;/option&gt;</span></span>
<span class="line"><span>                                &lt;/select&gt;</span></span>
<span class="line"><span>                            &lt;/div&gt;</span></span>
<span class="line"><span>                            &lt;div class=&quot;form-group&quot;&gt;</span></span>
<span class="line"><span>                                &lt;label for=&quot;&quot;&gt;年龄&lt;/label&gt;</span></span>
<span class="line"><span>                                &lt;input type=&quot;text&quot; class=&quot;form-control&quot; name=&quot;&quot; id=&quot;&quot; aria-describedby=&quot;helpId&quot;</span></span>
<span class="line"><span>                                    placeholder=&quot;&quot; v-model=&quot;selectedStudent.age&quot;&gt;</span></span>
<span class="line"><span>                            &lt;/div&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>                        &lt;/div&gt;</span></span>
<span class="line"><span>                        &lt;div class=&quot;modal-footer&quot;&gt;</span></span>
<span class="line"><span>                            &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; data-dismiss=&quot;modal&quot;&gt;关闭&lt;/button&gt;</span></span>
<span class="line"><span>                            &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; @click=&quot;sub&quot;&gt;提交更改&lt;/button&gt;</span></span>
<span class="line"><span>                        &lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;&lt;!-- /.modal-content --&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;&lt;!-- /.modal --&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/body&gt;</span></span>
<span class="line"><span>    &lt;!-- 开发环境版本，包含了有帮助的命令行警告 --&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js&quot;</span></span>
<span class="line"><span>        integrity=&quot;sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN&quot; crossorigin=&quot;anonymous&quot;&gt;</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js&quot;</span></span>
<span class="line"><span>        integrity=&quot;sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q&quot; crossorigin=&quot;anonymous&quot;&gt;</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js&quot;</span></span>
<span class="line"><span>        integrity=&quot;sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl&quot; crossorigin=&quot;anonymous&quot;&gt;</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        let vm = new Vue({</span></span>
<span class="line"><span>            el: &#39;#app&#39;,</span></span>
<span class="line"><span>            data: {</span></span>
<span class="line"><span>                title: &#39;学生信息管理&#39;,</span></span>
<span class="line"><span>                sex: [{</span></span>
<span class="line"><span>                    value: 0,</span></span>
<span class="line"><span>                    name: &#39;男&#39;</span></span>
<span class="line"><span>                }, {</span></span>
<span class="line"><span>                    value: 1,</span></span>
<span class="line"><span>                    name: &#39;女&#39;</span></span>
<span class="line"><span>                }],</span></span>
<span class="line"><span>                selectedStudent:{}, //临时学生对象</span></span>
<span class="line"><span>                selectedIndex: -1,  //选择的对象索引</span></span>
<span class="line"><span>                tableDates: [{</span></span>
<span class="line"><span>                        id: &#39;1001&#39;,</span></span>
<span class="line"><span>                        name: &#39;白展堂&#39;,</span></span>
<span class="line"><span>                        sex: 0,</span></span>
<span class="line"><span>                        age: 18</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        id: &#39;1002&#39;,</span></span>
<span class="line"><span>                        name: &#39;佟湘玉&#39;,</span></span>
<span class="line"><span>                        sex: 1,</span></span>
<span class="line"><span>                        age: 16</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        id: &#39;1003&#39;,</span></span>
<span class="line"><span>                        name: &#39;郭芙蓉&#39;,</span></span>
<span class="line"><span>                        sex: 1,</span></span>
<span class="line"><span>                        age: 17</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        id: &#39;1004&#39;,</span></span>
<span class="line"><span>                        name: &#39;吕轻侯&#39;,</span></span>
<span class="line"><span>                        sex: 0,</span></span>
<span class="line"><span>                        age: 19</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        id: &#39;1005&#39;,</span></span>
<span class="line"><span>                        name: &#39;李大嘴&#39;,</span></span>
<span class="line"><span>                        sex: 0,</span></span>
<span class="line"><span>                        age: 20</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        id: &#39;1006&#39;,</span></span>
<span class="line"><span>                        name: &#39;祝无双&#39;,</span></span>
<span class="line"><span>                        sex: 1,</span></span>
<span class="line"><span>                        age: 17</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        id: &#39;1007&#39;,</span></span>
<span class="line"><span>                        name: &#39;邢捕头&#39;,</span></span>
<span class="line"><span>                        sex: 0,</span></span>
<span class="line"><span>                        age: 22</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            methods: {</span></span>
<span class="line"><span>                //添加学生</span></span>
<span class="line"><span>                add(){</span></span>
<span class="line"><span>                    this.selectedStudent = {}</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                sub(){</span></span>
<span class="line"><span>                    if(this.selectedStudent.id)</span></span>
<span class="line"><span>                        this.$set(this.tableDates,this.selectedIndex,this.deepCopy(this.selectedStudent))</span></span>
<span class="line"><span>                    else{</span></span>
<span class="line"><span>                        this.selectedStudent.id=Math.floor(Math.random(0,10)*10000+1000)</span></span>
<span class="line"><span>                        this.tableDates.push(this.selectedStudent)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                        </span></span>
<span class="line"><span>                    $(&#39;#myModal&#39;).modal(&#39;hide&#39;)</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                //编辑</span></span>
<span class="line"><span>                edit(index){</span></span>
<span class="line"><span>                    this.selectedIndex = index;</span></span>
<span class="line"><span>                    this.selectedStudent = this.deepCopy(this.tableDates[index])</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                //删除</span></span>
<span class="line"><span>                del(index) {</span></span>
<span class="line"><span>                    this.tableDates.splice(index, 1)</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                //对象拷贝</span></span>
<span class="line"><span>                deepCopy(obj) {</span></span>
<span class="line"><span>                    if (typeof obj !== &#39;object&#39;) {</span></span>
<span class="line"><span>                        return obj;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    var newobj = {};</span></span>
<span class="line"><span>                    if (Array.isArray(obj)) {</span></span>
<span class="line"><span>                        newobj = [];</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    for (var attr in obj) {</span></span>
<span class="line"><span>                        // 每个值Copy</span></span>
<span class="line"><span>                        newobj[attr] = this.deepCopy(obj[attr]);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    return newobj;</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &lt;/html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### component组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>    &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &lt;head&gt;</span></span>
<span class="line"><span>        &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>        &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>        &lt;title&gt;Vue组件前&lt;/title&gt;</span></span>
<span class="line"><span>        &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css&quot;</span></span>
<span class="line"><span>            integrity=&quot;sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm&quot; crossorigin=&quot;anonymous&quot;&gt;</span></span>
<span class="line"><span>    &lt;/head&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &lt;body&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>            &lt;my-component v-bind:title=&quot;title&quot;&gt;&lt;/my-component&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/body&gt;</span></span>
<span class="line"><span>    &lt;!-- 开发环境版本，包含了有帮助的命令行警告 --&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        Vue.component(&#39;my-component&#39;, {</span></span>
<span class="line"><span>            template: &quot;&lt;button&gt;{{msg+title}}&lt;/button&gt;&quot;,</span></span>
<span class="line"><span>            props: [&#39;title&#39;],</span></span>
<span class="line"><span>            data() {</span></span>
<span class="line"><span>                return {</span></span>
<span class="line"><span>                    msg: &#39;这是按钮&#39;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        const vm = new Vue({</span></span>
<span class="line"><span>            el: &quot;#app&quot;,</span></span>
<span class="line"><span>            data: {</span></span>
<span class="line"><span>                title: &quot;这是标题&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &lt;/html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### 使用Node.js的Npm安装库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 安装Node.js-&gt;cmd:npm-&gt;npm install -g @vue/cli-&gt;vue -V-&gt;vue ui</span></span>
<span class="line"><span>2. 进入网页端创建新项目-&gt;安装vue-cli-plugin-element插件-&gt;Sever运行-&gt;使用编译器编译</span></span>
<span class="line"><span> App.vue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;template&gt;</span></span>
<span class="line"><span>      &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-container&gt;</span></span>
<span class="line"><span>          &lt;el-header&gt;Header&lt;/el-header&gt;</span></span>
<span class="line"><span>          &lt;el-container&gt;</span></span>
<span class="line"><span>            &lt;el-aside width=&quot;200px&quot;&gt;Aside&lt;/el-aside&gt;</span></span>
<span class="line"><span>            &lt;el-main&gt;</span></span>
<span class="line"><span>              &lt;my-table v-bind:list=&quot;tableData&quot;&gt;&lt;/my-table&gt;</span></span>
<span class="line"><span>            &lt;/el-main&gt;</span></span>
<span class="line"><span>          &lt;/el-container&gt;</span></span>
<span class="line"><span>        &lt;/el-container&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>    import MyTable from &quot;./components/MyTable.vue&quot;;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    export default {</span></span>
<span class="line"><span>      name: &quot;app&quot;,</span></span>
<span class="line"><span>      components: {</span></span>
<span class="line"><span>        MyTable</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>          tableData: []</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>    #app {</span></span>
<span class="line"><span>      font-family: &quot;Avenir&quot;, Helvetica, Arial, sans-serif;</span></span>
<span class="line"><span>      -webkit-font-smoothing: antialiased;</span></span>
<span class="line"><span>      -moz-osx-font-smoothing: grayscale;</span></span>
<span class="line"><span>      text-align: center;</span></span>
<span class="line"><span>      color: #2c3e50;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .el-header,</span></span>
<span class="line"><span>    .el-footer {</span></span>
<span class="line"><span>      background-color: #b3c0d1;</span></span>
<span class="line"><span>      color: #333;</span></span>
<span class="line"><span>      text-align: center;</span></span>
<span class="line"><span>      line-height: 60px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    .el-aside {</span></span>
<span class="line"><span>      background-color: #d3dce6;</span></span>
<span class="line"><span>      color: #333;</span></span>
<span class="line"><span>      text-align: center;</span></span>
<span class="line"><span>      line-height: 200px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    .el-main {</span></span>
<span class="line"><span>      background-color: #e9eef3;</span></span>
<span class="line"><span>      color: #333;</span></span>
<span class="line"><span>      text-align: center;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    body &gt; .el-container {</span></span>
<span class="line"><span>      margin-bottom: 40px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    .el-container:nth-child(5) .el-aside,</span></span>
<span class="line"><span>    .el-container:nth-child(6) .el-aside {</span></span>
<span class="line"><span>      line-height: 260px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    .el-container:nth-child(7) .el-aside {</span></span>
<span class="line"><span>      line-height: 320px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>MyTable.vue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;template&gt;</span></span>
<span class="line"><span>    &lt;el-table :data=&quot;list&quot; border style=&quot;width: 100%&quot;&gt;</span></span>
<span class="line"><span>    &lt;el-table-column prop=&quot;id&quot; label=&quot;学号&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>    &lt;el-table-column prop=&quot;name&quot; label=&quot;姓名&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>    &lt;el-table-column prop=&quot;school&quot; label=&quot;学校&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>    &lt;/el-table&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>    export default {</span></span>
<span class="line"><span>    props: [&quot;list&quot;]</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span></code></pre></div><h4 id="加入服务器-连接mysql数据库" tabindex="-1">加入服务器，连接Mysql数据库 <a class="header-anchor" href="#加入服务器-连接mysql数据库" aria-label="Permalink to &quot;加入服务器，连接Mysql数据库&quot;">​</a></h4><p>新建SpringBoot项目,勾选Web,Mybatis,Mysql,加入逆向generatorConfig.xml pom.xml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>   &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;2.9.8&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!-- 数据库相关开始 --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;5.1.40&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!-- 数据源的选取 --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;druid&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;1.1.10&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!-- 数据库相关结束 --&gt;</span></span></code></pre></div><p>application.properties</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    #设置地址栏工程前缀</span></span>
<span class="line"><span>    spring.mvc.servlet.path=/student</span></span>
<span class="line"><span>    #设置端口</span></span>
<span class="line"><span>    server.port=8085</span></span>
<span class="line"><span>    #设置热部署</span></span>
<span class="line"><span>    spring.devtools.restart.enabled=true</span></span>
<span class="line"><span>    #设置修改后重启的路径</span></span>
<span class="line"><span>    spring.devtools.restart.additional-paths=src/main/java</span></span>
<span class="line"><span>    #设置修改后不重启的路径</span></span>
<span class="line"><span>    spring.devtools.restart.exclude=templates/views/**</span></span>
<span class="line"><span>    #设置thymeleaf不缓存</span></span>
<span class="line"><span>    spring.thymeleaf.cache=false</span></span>
<span class="line"><span>    #数据库配置(高版本mysql-connect包需要加入时区)</span></span>
<span class="line"><span>    spring.datasource.url=jdbc:mysql://localhost:3306/db93?serverTimezone=GMT%2B8&amp;useUnicode=true&amp;characterEncoding=utf-8</span></span>
<span class="line"><span>    spring.datasource.username=root</span></span>
<span class="line"><span>    spring.datasource.password=</span></span>
<span class="line"><span>    spring.datasource.driver-class-name=com.mysql.jdbc.Driver</span></span>
<span class="line"><span>    #数据源配置</span></span>
<span class="line"><span>    spring.datasource.type=com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"><span>    #mybatis配置</span></span>
<span class="line"><span>    mybatis.mapper-locations=templates/mybatis/mappers/*.xml</span></span>
<span class="line"><span>    #设置实体类别名</span></span>
<span class="line"><span>    mybatis.type-aliases-package=com.aaa.qy93.student.entity</span></span></code></pre></div><p>StudentApplication启动类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@MapperScan(basePackages = {&quot;com.aaa.qy93.student.dao&quot;})</span></span>
<span class="line"><span>    @EnableWebMvc</span></span>
<span class="line"><span>    @SpringBootApplication</span></span>
<span class="line"><span>    public class StudentApplication {</span></span>
<span class="line"><span>        public static void main(String[] args) {</span></span>
<span class="line"><span>            SpringApplication.run(StudentApplication.class, args);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>StudentController</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@CrossOrigin</span></span>
<span class="line"><span>    @RestController</span></span>
<span class="line"><span>    @RequestMapping(&quot;/student&quot;)</span></span>
<span class="line"><span>    public class StudentController {</span></span>
<span class="line"><span>        @Autowired</span></span>
<span class="line"><span>        private StudentService studentService;</span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * 获取数据条数</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        @RequestMapping(&quot;/count&quot;)</span></span>
<span class="line"><span>        public int count(){</span></span>
<span class="line"><span>            return studentService.count();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * 获取数据列表</span></span>
<span class="line"><span>         * @param start 索引开始位置</span></span>
<span class="line"><span>         * @param size 数量</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        @RequestMapping(&quot;/list&quot;)</span></span>
<span class="line"><span>        public List&lt;Student&gt; list(@RequestParam(&quot;start&quot;)int start,@RequestParam(&quot;size&quot;)int size ){</span></span>
<span class="line"><span>            return studentService.list(start,size);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * 删除指定id</span></span>
<span class="line"><span>         * @param studentno 学号</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        @RequestMapping(&quot;/del/{studentno}&quot;)</span></span>
<span class="line"><span>        public int del(@PathVariable(value = &quot;studentno&quot;)int studentno){</span></span>
<span class="line"><span>            return studentService.deleteByPrimaryKey(studentno);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>文件结构 ![[../_resources/unknown_filename-4f5fafe8.png]]</p><h5 id="vue-axios" tabindex="-1">vue-axios <a class="header-anchor" href="#vue-axios" aria-label="Permalink to &quot;vue-axios&quot;">​</a></h5><p>cmd启动:vue ui 安装插件:vue-cli-plugin-axios 开启项目，引入https.js,修改服务器地址 axios.defaults.baseURL = &#39;<a href="http://localhost:8085" target="_blank" rel="noreferrer">http://localhost:8085</a>&#39;; //配置接口地址</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> import axios from &#39;axios&#39;</span></span>
<span class="line"><span>    import qs from &#39;qs&#39;</span></span>
<span class="line"><span>    axios.defaults.timeout = 5000;                        //响应时间</span></span>
<span class="line"><span>    axios.defaults.headers.post[&#39;Content-Type&#39;] = &#39;application/x-www-form-urlencoded;charset=UTF-8&#39;;        //配置请求头</span></span>
<span class="line"><span>    axios.defaults.baseURL = &#39;/&#39;;   //配置接口地址</span></span>
<span class="line"><span>    //POST传参序列化(添加请求拦截器)</span></span>
<span class="line"><span>    axios.interceptors.request.use((config) =&gt; {</span></span>
<span class="line"><span>        //在发送请求之前做某件事</span></span>
<span class="line"><span>        if(config.method  === &#39;post&#39;){</span></span>
<span class="line"><span>            config.data = qs.stringify(config.data);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return config;</span></span>
<span class="line"><span>    },(error) =&gt;{</span></span>
<span class="line"><span>        console.log(&#39;错误的传参&#39;)</span></span>
<span class="line"><span>        return Promise.reject(error);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    //返回状态判断(添加响应拦截器)</span></span>
<span class="line"><span>    axios.interceptors.response.use((res) =&gt;{</span></span>
<span class="line"><span>        //对响应数据做些事</span></span>
<span class="line"><span>        if(!res.data.success){</span></span>
<span class="line"><span>            return Promise.resolve(res);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return res;</span></span>
<span class="line"><span>    }, (error) =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;网络异常&#39;)</span></span>
<span class="line"><span>        return Promise.reject(error);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    //返回一个Promise(发送post请求)</span></span>
<span class="line"><span>    export function fetchPost(url, params) {</span></span>
<span class="line"><span>        return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>            axios.post(url, params)</span></span>
<span class="line"><span>                .then(response =&gt; {</span></span>
<span class="line"><span>                    resolve(response);</span></span>
<span class="line"><span>                }, err =&gt; {</span></span>
<span class="line"><span>                    reject(err);</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>                .catch((error) =&gt; {</span></span>
<span class="line"><span>                    reject(error)</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ////返回一个Promise(发送get请求)</span></span>
<span class="line"><span>    export function fetchGet(url, param) {</span></span>
<span class="line"><span>        return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>            axios.get(url, {params: param})</span></span>
<span class="line"><span>                .then(response =&gt; {</span></span>
<span class="line"><span>                    resolve(response)</span></span>
<span class="line"><span>                }, err =&gt; {</span></span>
<span class="line"><span>                    reject(err)</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>                .catch((error) =&gt; {</span></span>
<span class="line"><span>                    reject(error)</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    export default {</span></span>
<span class="line"><span>        fetchPost,</span></span>
<span class="line"><span>        fetchGet,</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>MyTable.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &lt;template&gt;</span></span>
<span class="line"><span>      &lt;el-table :data=&quot;tableData&quot; border style=&quot;width: 100%&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-table-column prop=&quot;studentno&quot; label=&quot;学号&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>        &lt;el-table-column prop=&quot;studentname&quot; label=&quot;姓名&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>        &lt;el-table-column prop=&quot;sex&quot; label=&quot;性别&quot;&gt;</span></span>
<span class="line"><span>          &lt;template v-slot=&quot;data&quot;&gt;</span></span>
<span class="line"><span>            &lt;el-tag :type=&quot;data.row.sex?&#39;&#39;:&#39;danger&#39;&quot;&gt;{{data.row.sex?&#39;男&#39;:&#39;女&#39;}}&lt;/el-tag&gt;</span></span>
<span class="line"><span>          &lt;/template&gt;</span></span>
<span class="line"><span>        &lt;/el-table-column&gt;</span></span>
<span class="line"><span>        &lt;el-table-column prop=&quot;gradeid&quot; label=&quot;年级&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>        &lt;el-table-column prop=&quot;phone&quot; label=&quot;电话&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>        &lt;el-table-column prop=&quot;address&quot; label=&quot;地址&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>        &lt;el-table-column prop=&quot;borndate&quot; label=&quot;生日&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>        &lt;el-table-column prop=&quot;email&quot; label=&quot;邮箱&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>        &lt;el-table-column prop=&quot;identitycard&quot; label=&quot;身份证&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>        &lt;el-table-column label=&quot;操作&quot;&gt;</span></span>
<span class="line"><span>          &lt;template v-slot=&quot;data&quot;&gt;</span></span>
<span class="line"><span>            &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot; circle&gt;&lt;/el-button&gt;</span></span>
<span class="line"><span>            &lt;el-button</span></span>
<span class="line"><span>              type=&quot;danger&quot;</span></span>
<span class="line"><span>              icon=&quot;el-icon-delete&quot;</span></span>
<span class="line"><span>              circle</span></span>
<span class="line"><span>              @click=&quot;delRow(data.$index,data.row.studentno)&quot;</span></span>
<span class="line"><span>            &gt;&lt;/el-button&gt;</span></span>
<span class="line"><span>          &lt;/template&gt;</span></span>
<span class="line"><span>        &lt;/el-table-column&gt;</span></span>
<span class="line"><span>      &lt;/el-table&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>    import https from &quot;../https.js&quot;;</span></span>
<span class="line"><span>    export default {</span></span>
<span class="line"><span>      props: [&quot;tableData&quot;, &quot;loading&quot;],</span></span>
<span class="line"><span>      methods: {</span></span>
<span class="line"><span>        delRow(index, id) {</span></span>
<span class="line"><span>          this.$confirm(&quot;此操作将永久删除该用户, 是否继续?&quot;, &quot;提示&quot;, {</span></span>
<span class="line"><span>            confirmButtonText: &quot;确定&quot;,</span></span>
<span class="line"><span>            cancelButtonText: &quot;取消&quot;,</span></span>
<span class="line"><span>            type: &quot;warning&quot;,</span></span>
<span class="line"><span>            center: true</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>            .then(() =&gt; {</span></span>
<span class="line"><span>              https.fetchPost(&quot;/student/del/&quot; + id).then(res =&gt; {</span></span>
<span class="line"><span>                if (res.data == 1) {</span></span>
<span class="line"><span>                  //删除成功</span></span>
<span class="line"><span>                  this.tableData.splice(index, 1);</span></span>
<span class="line"><span>                  this.$message({</span></span>
<span class="line"><span>                    type: &quot;success&quot;,</span></span>
<span class="line"><span>                    message: &quot;删除成功!&quot;</span></span>
<span class="line"><span>                  });</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>              });</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            .catch(() =&gt; {</span></span>
<span class="line"><span>              this.$message({</span></span>
<span class="line"><span>                type: &quot;info&quot;,</span></span>
<span class="line"><span>                message: &quot;已取消删除&quot;</span></span>
<span class="line"><span>              });</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span></code></pre></div><p>App.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &lt;template&gt;</span></span>
<span class="line"><span>      &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-container&gt;</span></span>
<span class="line"><span>          &lt;el-header&gt;Header&lt;/el-header&gt;</span></span>
<span class="line"><span>          &lt;el-container&gt;</span></span>
<span class="line"><span>            &lt;el-aside width=&quot;200px&quot;&gt;Aside&lt;/el-aside&gt;</span></span>
<span class="line"><span>            &lt;el-main&gt;</span></span>
<span class="line"><span>              &lt;my-table :tableData=&quot;tableData&quot; v-loading=&quot;loading&quot;&gt;&lt;/my-table&gt;</span></span>
<span class="line"><span>              &lt;el-pagination</span></span>
<span class="line"><span>                background</span></span>
<span class="line"><span>                layout=&quot;prev, pager, next&quot;</span></span>
<span class="line"><span>                :total=&quot;total&quot;</span></span>
<span class="line"><span>                :page-size=&quot;size&quot;</span></span>
<span class="line"><span>                @current-change=&quot;pageChange&quot;</span></span>
<span class="line"><span>              &gt;&lt;/el-pagination&gt;</span></span>
<span class="line"><span>            &lt;/el-main&gt;</span></span>
<span class="line"><span>          &lt;/el-container&gt;</span></span>
<span class="line"><span>        &lt;/el-container&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>    import MyTable from &quot;./components/MyTable.vue&quot;;</span></span>
<span class="line"><span>    import https from &quot;./https.js&quot;;</span></span>
<span class="line"><span>    export default {</span></span>
<span class="line"><span>      name: &quot;app&quot;,</span></span>
<span class="line"><span>      components: {</span></span>
<span class="line"><span>        MyTable</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>          size: 8,</span></span>
<span class="line"><span>          tableData: [],</span></span>
<span class="line"><span>          total: 0,</span></span>
<span class="line"><span>          loading: true</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      mounted() {</span></span>
<span class="line"><span>        https.fetchGet(&quot;/student/count&quot;).then(res =&gt; {</span></span>
<span class="line"><span>          this.total = res.data;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        this.fetchData(0);</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      methods: {</span></span>
<span class="line"><span>        //获取数据</span></span>
<span class="line"><span>        fetchData(start) {</span></span>
<span class="line"><span>          this.loading = true;</span></span>
<span class="line"><span>          https</span></span>
<span class="line"><span>            .fetchGet(&quot;/student/list&quot;, { start: start, size: this.size })</span></span>
<span class="line"><span>            .then(res =&gt; {</span></span>
<span class="line"><span>              this.tableData = res.data;</span></span>
<span class="line"><span>              this.loading = false;</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        pageChange(e) {</span></span>
<span class="line"><span>          this.fetchData((e - 1) * this.size);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>    #app {</span></span>
<span class="line"><span>      font-family: &quot;Avenir&quot;, Helvetica, Arial, sans-serif;</span></span>
<span class="line"><span>      -webkit-font-smoothing: antialiased;</span></span>
<span class="line"><span>      -moz-osx-font-smoothing: grayscale;</span></span>
<span class="line"><span>      text-align: center;</span></span>
<span class="line"><span>      color: #2c3e50;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .el-header,</span></span>
<span class="line"><span>    .el-footer {</span></span>
<span class="line"><span>      background-color: #b3c0d1;</span></span>
<span class="line"><span>      color: #333;</span></span>
<span class="line"><span>      text-align: center;</span></span>
<span class="line"><span>      line-height: 60px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .el-aside {</span></span>
<span class="line"><span>      background-color: #d3dce6;</span></span>
<span class="line"><span>      color: #333;</span></span>
<span class="line"><span>      text-align: center;</span></span>
<span class="line"><span>      line-height: 200px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .el-main {</span></span>
<span class="line"><span>      background-color: #e9eef3;</span></span>
<span class="line"><span>      color: #333;</span></span>
<span class="line"><span>      text-align: center;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    body &gt; .el-container {</span></span>
<span class="line"><span>      margin-bottom: 40px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .el-container:nth-child(5) .el-aside,</span></span>
<span class="line"><span>    .el-container:nth-child(6) .el-aside {</span></span>
<span class="line"><span>      line-height: 260px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .el-container:nth-child(7) .el-aside {</span></span>
<span class="line"><span>      line-height: 320px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span></code></pre></div>`,35)]))}const g=s(t,[["render",e]]);export{d as __pageData,g as default};
