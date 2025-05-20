# 记录umi2项目使用pnpm的问题

先说下项目背景（老项目，目前不升级）：

> react^16+umi^2+antd^3+node^12+npm^6+非本地页面+自用未编译组件库

关键问题1：本项目根路径下的页面引用了不在本项目根路径下的页面(非已打包项目，纯页面)

关键问题 2：非本项目根路径下的页面引用了未使用webpack进行编译的自用组件库

之前一直使用yarn管理依赖库，上述页面和组件库在编译时会自动使用本项目路径下的node_modules下的路径，而本项目下的依赖库拥有所有依赖包，因此运行没问题，而切换pnpm时由于符号链接和幽灵依赖导致出现了很多问题。

本来想顺手使用Monorepo进行项目管理，由于pnpm自带workspace因此简单尝试可行后，由于目前还用不上，统一使用一个主存储目录就行，暂略过不谈。

#### 开始安装

安装pnpm参考官网，由于node版本不高因此使用pnpm^6。

`npm i -g pnpm@^6`

关键是配置环境变量 

PNPM_HOME ：D:\nodejs\node_global\node_modules\pnpm ；

PATH添加：%PNPM_HOME%

安装完成后cmd显示版本号即可。

下一步配置仓库、缓存目录、依赖存储目录等网上都有就不谈了。

#### 切换准备

目前称主项目为 A，外部页面为B。

删除node_modules、.lock文件

进行pnpm install

##### 踩坑1

安装完成后启动项目，报错各种依赖未找到。解决方法：项目根目录添加.npmrc文件,具体配置项网上都有。记得再删除node_modules和.lock文件，重新install

.npmrc

```
#
# shamefully-hoist 是否提升依赖
# 默认情况下，pnpm 创建一个半严格的 node_modules，这意味着依赖项可以访问未声明的依赖项，但 node_modules 之外的模块不行。 通过这种布局，生态系统中的大多数的包都可以正常工作。 但是，如果某些工具仅在提升的依赖项位于根目录的 node_modules 时才有效，您可以将其设置为 true 来为您提升它们。
shamefully-hoist=true

# side-effects-cache pnpm 开启的话可能导致异常。
side-effects-cache=false

# 当值为 true 时，将自动安装任何缺少的非可选同级依赖关系。
auto-install-peers=true

# 如果启用了此选项，那么在依赖树中存在缺失或无效的 peer 依赖关系时，命令将执行失败。
# peer-dependencies: 同等依赖，或者叫同伴依赖， 用于指定当前包（也就是你写的包）兼容的宿主版本。
# 用于解决插件与所依赖包不一致的问题。
strict-peer-dependencies=false

# .npmrc 文件中添加路径配置
link-workspace-packages=true

#public-hoist-pattern[]=@ant-design/pro-layout
#public-hoist-pattern[]=@dnd-kit/utilities
#public-hoist-pattern[]=crypto-js
#public-hoist-pattern[]=detect-browser
#public-hoist-pattern[]=echarts
#public-hoist-pattern[]=echarts-for-react
#public-hoist-pattern[]=filesize
#public-hoist-pattern[]=is-descriptor
#public-hoist-pattern[]=jquery
#public-hoist-pattern[]=md5
#public-hoist-pattern[]=mp4box
#public-hoist-pattern[]=react-color
#public-hoist-pattern[]=react-draggable
#public-hoist-pattern[]=react-hammerjs
#public-hoist-pattern[]=react-helmet
#public-hoist-pattern[]=react-konva
#public-hoist-pattern[]=react-pdf
#public-hoist-pattern[]=react-websocket
#public-hoist-pattern[]=security-mobile-ui
#public-hoist-pattern[]=securityui
#public-hoist-pattern[]=umi-request
#public-hoist-pattern[]=uuid
```

##### 踩坑2

重新启动项目，外部页面使用的库全部无法找到，即无法自动找到本项目的依赖库目录。简单解决方案：在外部页面路径下安装使用过的依赖库，本地页面和外部页面各用各的。

###### 踩坑3

重新启动项目，外部页面引用的未编译自用库报es、ts、svg、scss...等各种异常。

原因：umi2配置里仅对本项目的自用库进行loader。

解决方案1：编译自用库，由于自用库中也有历史遗留问题，互相引用，依赖项目内部文件，导致修改需要时间，因此放弃。

解决方案2：umi2配置文件和ts配置文件中添加依赖路径。踩坑2中的问题其实也可以使用此方案解决。

config.ts

```
  alias: {
    '@@@': commonpageBlocks,
    "securityui": path.resolve('./node_modules/securityui'),
    "security-mobile-ui": path.resolve('./node_modules/security-mobile-ui'),
    "securityui/request": path.resolve('./node_modules/securityui/request')
  },
```

tsconfig.json

```
"paths": {
      "@/*": ["./src/*"],
      "@@@/*": ["../src/*"],
      "securityui": ["./node_modules/securityui"],
      "security-mobile-ui": ["./node_modules/security-mobile-ui"],
      "securityui/request": ["./node_modules/securityui/request"]
    }
```





