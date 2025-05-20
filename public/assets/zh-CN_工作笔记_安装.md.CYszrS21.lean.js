import{_ as t,c as a,a3 as r,o as n}from"./chunks/framework.BaR4VHXY.js";const m=JSON.parse('{"title":"安装","description":"","frontmatter":{"Created at":"2020-09-02T00:00:00.000Z","Last updated at":"2020-09-11T00:00:00.000Z","tags":["python","pycryptodome"]},"headers":[],"relativePath":"zh-CN/工作笔记/安装.md","filePath":"zh-CN/工作笔记/安装.md","lastUpdated":null}'),o={name:"zh-CN/工作笔记/安装.md"};function d(i,e,s,p,c,l){return n(),a("div",null,e[0]||(e[0]=[r(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h2><pre><code>C:\\Python27\\Scripts\\pip.exe install -i https://pypi.douban.com/simple pycryptodome
</code></pre><h4 id="test1" tabindex="-1">test1 <a class="header-anchor" href="#test1" aria-label="Permalink to &quot;test1&quot;">​</a></h4><p>14fa98d4d74b189993c380c7b9e4d9d3 <a href="https://gitee.com/pengzhile/ide-eval-resetter" target="_blank" rel="noreferrer">https://gitee.com/pengzhile/ide-eval-resetter</a></p><pre><code># 有半径为2m的半球形盛满水水池，
# 若将水从上方全抽出所做功为Q，
# 则Q/2时抽去水之百分比（精确到2位小数）
# utf-8 md2 亿次


# -*- coding:utf-8 -*-
from Crypto.Hash import MD2
# 原文
txt = &quot;73.25&quot;
# md2加密1亿次
for i in range(100000000):
    txt = MD2.new(txt.encode(&quot;utf8&quot;)).hexdigest()
print(txt)
</code></pre>`,6)]))}const u=t(o,[["render",d]]);export{m as __pageData,u as default};
