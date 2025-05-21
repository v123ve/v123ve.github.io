const basePath = process.env.GITHUB_PAGES === "true" ? "" : "";
// 主题配置
export const themeConfig = {
  // 站点信息
  siteMeta: {
    // 是否是 GitHub Pages 部署
    basePath: basePath,
    // 站点标题
    title: "v123ve",
    // 站点描述
    description: "思维垃圾",
    // 站点logo
    logo: "/images/logo/logo.webp",
    // 站点地址
    site: "http://vitepress.v123ve.xyz",
    // 语言
    lang: "zh-CN",
    // 作者
    author: {
      name: "v123ve",
      cover: "/images/logo/logo.webp",
      email: "hsyv123ve@gmail.com",
      link: "http://vitepress.v123ve.xyz",
    },
  },
  // 备案信息
  icp: "萌ICP备123456号",
  // 建站日期
  since: "2025-05-20",
  // 每页文章数据
  postSize: 8,
  // inject
  inject: {
    // 头部
    header: [
      // favicon
      ["link", { rel: "icon", href: basePath + "/favicon.ico" }],
      // RSS
      // [
      //   "link",
      //   {
      //     rel: "alternate",
      //     type: "application/rss+xml",
      //     title: "RSS",
      //     href: "https://blog.imsyy.top/rss.xml",
      //   },
      // ],
      // 预载 CDN
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://mirrors.sustech.edu.cn",
        },
      ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        },
      ],
      // iconfont
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        },
      ],
      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
      // 预载 live2d
      ["script", { src: "/third/live2d.js" }],
      // 预载 鼠标点击效果
      ["script", { src: "/third/fireworks.js" }],
      ["script", { src: "/third/anime.min.js" }],
      // 预载 jquery
      ["script", { src: "/third/jquery.min.js" }],
      // 预载 鼠标移动效果
      ["script", { src: "/third/mouser/mouser.js" }],
      // 预载 鼠标鼠标样式与指向 太卡了
      // ["link", { href: "/third/cursor.css", rel: "stylesheet" }],
      // ["script", { src: "/third/cursor.js" }],
    ],
  },
  // 导航栏菜单
  nav: [
    {
      text: "文库",
      items: [
        { text: "文章列表", link: basePath + "/pages/archives", icon: "article" },
        { text: "全部分类", link: basePath + "/pages/categories", icon: "folder" },
        { text: "全部标签", link: basePath + "/pages/tags", icon: "hashtag" },
      ],
    },
    {
      text: "专栏",
      items: [
        { text: "技术分享", link: basePath + "/pages/project", icon: "technical" },
        { text: "我的项目", link: basePath + "/pages/project", icon: "code" },
        { text: "效率工具", link: basePath + "/pages/project", icon: "tools" },
      ],
    },
    {
      text: "友链",
      items: [
        { text: "友链鱼塘", link: basePath + "/pages/project", icon: "fish" },
        { text: "友情链接", link: basePath + "/pages/project", icon: "people" },
      ],
    },
    {
      text: "我的",
      items: [
        { text: "畅所欲言", link: basePath + "/pages/project", icon: "chat" },
        { text: "致谢名单", link: basePath + "/pages/project", icon: "reward" },
        { text: "关于本站", link: basePath + "/pages/about", icon: "contacts" },
      ],
    },
  ],
  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "博客",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "主站",
          url: "/",
        },
      ],
    },
    {
      name: "服务",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "CloudPaste",
          url: "https://cloudpaste-frontend-b2g.pages.dev/",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "Koodo Reader",
          url: "https://reader.v123ve.xyz/",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "提示词生成器",
          url: "https://uiprompt.pages.dev/",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "硅基流动API Key Sharing",
          url: "https://siliconflow-manager.v123ve.xyz/",
        },
      ],
    },
    {
      name: "项目",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "本站",
          url: "/",
        },
      ],
    },
  ],
  // 封面配置
  cover: {
    // 是否开启双栏布局
    twoColumns: false,
    // 是否开启封面显示
    showCover: {
      // 是否开启封面显示 文章不设置cover封面会显示异常，可以设置下方默认封面
      enable: true,
      // 封面布局方式: left | right | both
      coverLayout: "both",
      // 默认封面(随机展示)
      defaultCover: [],
    },
  },
  // 页脚信息
  footer: {
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "email",
        link: basePath + "/pages/about",
      },
      {
        icon: "github",
        link: "http://vitepress.v123ve.xyz",
      },
      {
        icon: "telegram",
        link: basePath + "/pages/about",
      },
      {
        icon: "bilibili",
        link: basePath + "/pages/about",
      },
      {
        icon: "qq",
        link: basePath + "/pages/about",
      },
      {
        icon: "twitter-x",
        link: basePath + "/pages/about",
      },
    ],
    // sitemap
    sitemap: [
      {
        text: "博客",
        items: [
          { text: "近期文章", link: basePath + "/" },
          { text: "全部分类", link: basePath + "/pages/categories" },
          { text: "全部标签", link: basePath + "/pages/tags" },
          { text: "文章归档", link: basePath + "/pages/archives", newTab: true },
        ],
      },
      {
        text: "项目",
        items: [{ text: "本站", link: basePath + "/", newTab: true }],
      },
      {
        text: "专栏",
        items: [
          { text: "技术分享", link: basePath + "/pages/categories/技术分享" },
          { text: "我的项目", link: basePath + "/pages/project" },
          { text: "效率工具", link: basePath + "/pages/project" },
        ],
      },
      {
        text: "页面",
        items: [
          { text: "畅所欲言", link: basePath + "/pages/project" },
          { text: "关于本站", link: basePath + "/pages/about" },
          { text: "隐私政策", link: basePath + "/pages/privacy" },
          { text: "版权协议", link: basePath + "/pages/cc" },
        ],
      },
      {
        text: "服务",
        items: [
          {
            newTab: true,
            text: "CloudPaste",
            link: "https://cloudpaste-frontend-b2g.pages.dev/",
          },
          {
            newTab: true,
            text: "Koodo Reader",
            link: "https://reader.v123ve.xyz/",
          },
          {
            newTab: true,
            text: "提示词生成器",
            link: "https://uiprompt.pages.dev/",
          },
          {
            newTab: true,
            text: "硅基流动API Key Sharing",
            link: "https://siliconflow-manager.v123ve.xyz/",
          },
        ],
      },
    ],
  },
  // 评论
  comment: {
    enable: true,
    // 评论系统选择
    // artalk / twikoo
    type: "twikoo",
    // artalk
    // https://artalk.js.org/
    artalk: {
      site: "",
      server: "",
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      // 必填，若不想使用 CDN，可以使用 pnpm add twikoo 安装并引入
      js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/twikoo/1.6.39/twikoo.all.min.js",
      envId: "https://twikoo.v123ve.xyz/",
      // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      region: "ap-shanghai",
      lang: "zh-CN",
    },
  },
  // 侧边栏
  aside: {
    // 站点简介
    hello: {
      enable: true,
      text: "这里有关于<strong>开发</strong>相关的问题和看法，也会有一些<strong>奇技淫巧</strong>的分享，其中大部分内容会侧重于<strong>前端开发</strong>。希望你可以在这里找到对你有用的知识和教程。",
    },
    // 目录
    toc: {
      enable: true,
    },
    // 标签
    tags: {
      enable: true,
    },
    // 倒计时
    countDown: {
      enable: true,
      // 倒计时日期
      data: {
        name: "春节",
        date: "2026-02-17",
      },
    },
    // 站点数据
    siteData: {
      enable: true,
    },
  },
  // 友链
  friends: {
    // 友链朋友圈
    circleOfFriends: "",
    // 动态友链
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: "",
    },
  },
  // 音乐播放器
  // https://github.com/imsyy/Meting-API
  music: {
    enable: true,
    // url
    url: "https://meting-api-omega.vercel.app/api",
    // id
    id: 9379831714,
    // netease / tencent / kugou
    server: "netease",
    // playlist / album / song
    type: "playlist",
  },
  // 搜索
  // https://www.algolia.com/
  search: {
    enable: true,
    appId: "BAPXFNBG8G",
    apiKey: "20a731b71e4086e740a2b01b12cc1f2d",
    indexName: "vitepress-v123ve",
  },
  // 打赏
  rewardData: {
    enable: false,
    // 微信二维码
    wechat: "",
    // 支付宝二维码
    alipay: "",
  },
  // 图片灯箱
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css",
  },
  // 外链中转
  jumpRedirect: {
    enable: true,
    // 排除类名
    exclude: [
      "cf-friends-link",
      "upyun",
      "icp",
      "author",
      "rss",
      "cc",
      "power",
      "social-link",
      "link-text",
      "travellings",
      "post-link",
      "report",
      "more-link",
      "skills-item",
      "right-menu-link",
      "link-card",
    ],
  },
  // 站点统计
  tongji: {
    "51la": "",
  },
};
