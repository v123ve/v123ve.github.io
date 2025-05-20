import{_ as a,c as r,j as n,a as o,o as t}from"./chunks/framework.BaR4VHXY.js";const m=JSON.parse('{"title":"less","description":"","frontmatter":{"Created at":"2019-07-30T00:00:00.000Z","Last updated at":"2020-09-11T00:00:00.000Z","tags":["工作模块","less"]},"headers":[],"relativePath":"zh-CN/工作笔记/less.md","filePath":"zh-CN/工作笔记/less.md","lastUpdated":null}'),s={name:"zh-CN/工作笔记/less.md"};function l(i,e,d,c,h,p){return t(),r("div",null,e[0]||(e[0]=[n("h1",{id:"less",tabindex:"-1"},[o("less "),n("a",{class:"header-anchor",href:"#less","aria-label":'Permalink to "less"'},"​")],-1),n("h4",{id:"less-1",tabindex:"-1"},[o("less "),n("a",{class:"header-anchor",href:"#less-1","aria-label":'Permalink to "less"'},"​")],-1),n("pre",null,[n("code",null,`// 开始使用less
// 1.简单变量的使用
/*@
@height: @width + 10px;
#header{
  width: @width;
  height: @height;
}*/
//2.混合规则
/*.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
#menu a {
  color: #111;
  .bordered();
}
.post a {
  color: red;
  .bordered();
}*/
//3.嵌套
/*#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  
}
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    
  }
}*/
//3.1.&符号表示父级元素
/*.clearfix {
  display: block;
  zoom: 1;
  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}*/
//3.2.@midia冒泡
/*.common {
  
  @media (min-width: 768px) {
    
    @media  (min-resolution: 192dpi) {
      color: red;
    }
  }
  @media (min-width: 1280px) {
    
  }
}*/
//4. 运算
/*@color: #224488 / 2; //results in #112244
.a{
  background-color: #112244 + #111; // result is #223355
}
//5.~字符串的使用
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}*/
//6.函数
/*@base: #f04615;
@width: 0.5;
.class {
  width: percentage(@width); // returns \`50%\`
  color: saturate(@base, 5%); //颜色饱和度
  background-color: spin(lighten(@base, 25%), 8);//spin:沿任一方向旋转颜色的色调角度,lighten: 颜色亮度
}*/
//7.命名控件和访问器
/*#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  //.tab { ... }
  //.citation { ... }
}
#header a {
  color: orange;
  #bundle.button();  // can also be written as #bundle > .button
}*/
//8.映射 不能使用？因为是1.7.5
/*#colors() {
  primary: blue;
  secondary: green;
}
.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}*/
//9.作用域（Scope）
@var: red;
#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
//10.注释
/* 一个块注释
 * style comment! */
@var: red;
// 这一行被注释掉了！
@var: white;
//11.导入（Importing）
@import "CONST";
.a{
  color: @wangyangmingTest;
  font-size: 12px;
}
//12.calc
.a{
  height:calc(~"100%-2px");
}
`)],-1)]))}const u=a(s,[["render",l]]);export{m as __pageData,u as default};
