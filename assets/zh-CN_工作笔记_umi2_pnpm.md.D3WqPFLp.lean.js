import{_ as a,c as n,a3 as p,o as e}from"./chunks/framework.BaR4VHXY.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/工作笔记/umi2_pnpm.md","filePath":"zh-CN/工作笔记/umi2_pnpm.md","lastUpdated":null}'),t={name:"zh-CN/工作笔记/umi2_pnpm.md"};function i(l,s,o,c,u,r){return e(),n("div",null,s[0]||(s[0]=[p(`<h2 id="记录umi2项目使用pnpm的问题" tabindex="-1">记录umi2项目使用pnpm的问题 <a class="header-anchor" href="#记录umi2项目使用pnpm的问题" aria-label="Permalink to &quot;记录umi2项目使用pnpm的问题&quot;">​</a></h2><p>先说下项目背景（老项目，目前不升级）：</p><p>react^16+umi^2+antd^3+node^12+npm^6+非本地页面+自用未编译组件库</p><p>关键问题1：本项目根路径下的页面引用了不在本项目根路径下的页面(非已打包项目，纯页面)</p><p>关键问题 2：非本项目根路径下的页面引用了未使用webpack进行编译的自用组件库</p><p>之前一直使用yarn管理依赖库，上述页面和组件库在编译时会自动使用本项目路径下的node_modules下的路径，而本项目下的依赖库拥有所有依赖包，因此运行没问题，而切换pnpm时由于符号链接和幽灵依赖导致出现了很多问题。</p><p>本来想顺手使用Monorepo进行项目管理，由于pnpm自带workspace因此简单尝试可行后，由于目前还用不上，统一使用一个主存储目录就行，暂略过不谈。</p><h4 id="开始安装" tabindex="-1">开始安装 <a class="header-anchor" href="#开始安装" aria-label="Permalink to &quot;开始安装&quot;">​</a></h4><p>安装pnpm参考官网，由于node版本不高因此使用pnpm^6。</p><p><code>npm i -g pnpm@^6</code></p><p>关键是配置环境变量</p><p>PNPM_HOME ：D:\\nodejs\\node_global\\node_modules\\pnpm ；</p><p>PATH添加：%PNPM_HOME%</p><p>安装完成后cmd显示版本号即可。</p><p>下一步配置仓库、缓存目录、依赖存储目录等网上都有就不谈了。</p><h4 id="切换准备" tabindex="-1">切换准备 <a class="header-anchor" href="#切换准备" aria-label="Permalink to &quot;切换准备&quot;">​</a></h4><p>目前称主项目为 A，外部页面为B。</p><p>删除node_modules、.lock文件</p><p>进行pnpm install</p><h5 id="踩坑1" tabindex="-1">踩坑1 <a class="header-anchor" href="#踩坑1" aria-label="Permalink to &quot;踩坑1&quot;">​</a></h5><p>安装完成后启动项目，报错各种依赖未找到。解决方法：项目根目录添加.npmrc文件,具体配置项网上都有。记得再删除node_modules和.lock文件，重新install</p><p>.npmrc</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#</span></span>
<span class="line"><span># shamefully-hoist 是否提升依赖</span></span>
<span class="line"><span># 默认情况下，pnpm 创建一个半严格的 node_modules，这意味着依赖项可以访问未声明的依赖项，但 node_modules 之外的模块不行。 通过这种布局，生态系统中的大多数的包都可以正常工作。 但是，如果某些工具仅在提升的依赖项位于根目录的 node_modules 时才有效，您可以将其设置为 true 来为您提升它们。</span></span>
<span class="line"><span>shamefully-hoist=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># side-effects-cache pnpm 开启的话可能导致异常。</span></span>
<span class="line"><span>side-effects-cache=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 当值为 true 时，将自动安装任何缺少的非可选同级依赖关系。</span></span>
<span class="line"><span>auto-install-peers=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果启用了此选项，那么在依赖树中存在缺失或无效的 peer 依赖关系时，命令将执行失败。</span></span>
<span class="line"><span># peer-dependencies: 同等依赖，或者叫同伴依赖， 用于指定当前包（也就是你写的包）兼容的宿主版本。</span></span>
<span class="line"><span># 用于解决插件与所依赖包不一致的问题。</span></span>
<span class="line"><span>strict-peer-dependencies=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># .npmrc 文件中添加路径配置</span></span>
<span class="line"><span>link-workspace-packages=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#public-hoist-pattern[]=@ant-design/pro-layout</span></span>
<span class="line"><span>#public-hoist-pattern[]=@dnd-kit/utilities</span></span>
<span class="line"><span>#public-hoist-pattern[]=crypto-js</span></span>
<span class="line"><span>#public-hoist-pattern[]=detect-browser</span></span>
<span class="line"><span>#public-hoist-pattern[]=echarts</span></span>
<span class="line"><span>#public-hoist-pattern[]=echarts-for-react</span></span>
<span class="line"><span>#public-hoist-pattern[]=filesize</span></span>
<span class="line"><span>#public-hoist-pattern[]=is-descriptor</span></span>
<span class="line"><span>#public-hoist-pattern[]=jquery</span></span>
<span class="line"><span>#public-hoist-pattern[]=md5</span></span>
<span class="line"><span>#public-hoist-pattern[]=mp4box</span></span>
<span class="line"><span>#public-hoist-pattern[]=react-color</span></span>
<span class="line"><span>#public-hoist-pattern[]=react-draggable</span></span>
<span class="line"><span>#public-hoist-pattern[]=react-hammerjs</span></span>
<span class="line"><span>#public-hoist-pattern[]=react-helmet</span></span>
<span class="line"><span>#public-hoist-pattern[]=react-konva</span></span>
<span class="line"><span>#public-hoist-pattern[]=react-pdf</span></span>
<span class="line"><span>#public-hoist-pattern[]=react-websocket</span></span>
<span class="line"><span>#public-hoist-pattern[]=security-mobile-ui</span></span>
<span class="line"><span>#public-hoist-pattern[]=securityui</span></span>
<span class="line"><span>#public-hoist-pattern[]=umi-request</span></span>
<span class="line"><span>#public-hoist-pattern[]=uuid</span></span></code></pre></div><h5 id="踩坑2" tabindex="-1">踩坑2 <a class="header-anchor" href="#踩坑2" aria-label="Permalink to &quot;踩坑2&quot;">​</a></h5><p>重新启动项目，外部页面使用的库全部无法找到，即无法自动找到本项目的依赖库目录。简单解决方案：在外部页面路径下安装使用过的依赖库，本地页面和外部页面各用各的。</p><h6 id="踩坑3" tabindex="-1">踩坑3 <a class="header-anchor" href="#踩坑3" aria-label="Permalink to &quot;踩坑3&quot;">​</a></h6><p>重新启动项目，外部页面引用的未编译自用库报es、ts、svg、scss...等各种异常。</p><p>原因：umi2配置里仅对本项目的自用库进行loader。</p><p>解决方案1：编译自用库，由于自用库中也有历史遗留问题，互相引用，依赖项目内部文件，导致修改需要时间，因此放弃。</p><p>解决方案2：umi2配置文件和ts配置文件中添加依赖路径。踩坑2中的问题其实也可以使用此方案解决。</p><p>config.ts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  alias: {</span></span>
<span class="line"><span>    &#39;@@@&#39;: commonpageBlocks,</span></span>
<span class="line"><span>    &quot;securityui&quot;: path.resolve(&#39;./node_modules/securityui&#39;),</span></span>
<span class="line"><span>    &quot;security-mobile-ui&quot;: path.resolve(&#39;./node_modules/security-mobile-ui&#39;),</span></span>
<span class="line"><span>    &quot;securityui/request&quot;: path.resolve(&#39;./node_modules/securityui/request&#39;)</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p>tsconfig.json</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;paths&quot;: {</span></span>
<span class="line"><span>      &quot;@/*&quot;: [&quot;./src/*&quot;],</span></span>
<span class="line"><span>      &quot;@@@/*&quot;: [&quot;../src/*&quot;],</span></span>
<span class="line"><span>      &quot;securityui&quot;: [&quot;./node_modules/securityui&quot;],</span></span>
<span class="line"><span>      &quot;security-mobile-ui&quot;: [&quot;./node_modules/security-mobile-ui&quot;],</span></span>
<span class="line"><span>      &quot;securityui/request&quot;: [&quot;./node_modules/securityui/request&quot;]</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,34)]))}const m=a(t,[["render",i]]);export{h as __pageData,m as default};
