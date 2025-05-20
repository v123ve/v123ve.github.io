var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// themeConfig.mjs
var themeConfig_exports = {};
__export(themeConfig_exports, {
  themeConfig: () => themeConfig2
});
var themeConfig2;
var init_themeConfig = __esm({
  "themeConfig.mjs"() {
    themeConfig2 = {
      // 站点信息
      siteMeta: {
        // 站点标题
        title: "v123ve",
        // 站点描述
        description: "\u601D\u7EF4\u5783\u573E",
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
          link: "http://vitepress.v123ve.xyz"
        }
      },
      // 备案信息
      icp: "\u840CICP\u5907123456\u53F7",
      // 建站日期
      since: "2025-05-20",
      // 每页文章数据
      postSize: 8,
      // inject
      inject: {
        // 头部
        header: [
          // favicon
          ["link", { rel: "icon", href: "/favicon.ico" }],
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
              href: "https://s1.hdslb.com"
            }
          ],
          [
            "link",
            {
              crossorigin: "",
              rel: "preconnect",
              href: "https://mirrors.sustech.edu.cn"
            }
          ],
          // HarmonyOS font
          [
            "link",
            {
              crossorigin: "anonymous",
              rel: "stylesheet",
              href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css"
            }
          ],
          [
            "link",
            {
              crossorigin: "anonymous",
              rel: "stylesheet",
              href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css"
            }
          ],
          // iconfont
          [
            "link",
            {
              crossorigin: "anonymous",
              rel: "stylesheet",
              href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css"
            }
          ],
          // Embed code
          ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
          ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
          [
            "link",
            {
              crossorigin: "anonymous",
              href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
              rel: "stylesheet"
            }
          ],
          // 预载 DocSearch
          [
            "link",
            {
              href: "https://X5EBEZB53I-dsn.algolia.net",
              rel: "preconnect",
              crossorigin: ""
            }
          ]
        ]
      },
      // 导航栏菜单
      nav: [
        {
          text: "\u6587\u5E93",
          items: [
            { text: "\u6587\u7AE0\u5217\u8868", link: "/pages/archives", icon: "article" },
            { text: "\u5168\u90E8\u5206\u7C7B", link: "/pages/categories", icon: "folder" },
            { text: "\u5168\u90E8\u6807\u7B7E", link: "/pages/tags", icon: "hashtag" }
          ]
        },
        {
          text: "\u4E13\u680F",
          items: [
            { text: "\u6280\u672F\u5206\u4EAB", link: "/pages/project", icon: "technical" },
            { text: "\u6211\u7684\u9879\u76EE", link: "/pages/project", icon: "code" },
            { text: "\u6548\u7387\u5DE5\u5177", link: "/pages/project", icon: "tools" }
          ]
        },
        {
          text: "\u53CB\u94FE",
          items: [
            { text: "\u53CB\u94FE\u9C7C\u5858", link: "/pages/project", icon: "fish" },
            { text: "\u53CB\u60C5\u94FE\u63A5", link: "/pages/project", icon: "people" }
          ]
        },
        {
          text: "\u6211\u7684",
          items: [
            { text: "\u7545\u6240\u6B32\u8A00", link: "/pages/project", icon: "chat" },
            { text: "\u81F4\u8C22\u540D\u5355", link: "/pages/project", icon: "reward" },
            { text: "\u5173\u4E8E\u672C\u7AD9", link: "/pages/about", icon: "contacts" }
          ]
        }
      ],
      // 导航栏菜单 - 左侧
      navMore: [
        {
          name: "\u535A\u5BA2",
          list: [
            {
              icon: "/images/logo/logo.webp",
              name: "\u4E3B\u7AD9",
              url: "/"
            }
          ]
        },
        {
          name: "\u670D\u52A1",
          list: [
            {
              icon: "/images/logo/logo.webp",
              name: "CloudPaste",
              url: "https://cloudpaste-frontend-b2g.pages.dev/"
            },
            {
              icon: "/images/logo/logo.webp",
              name: "Koodo Reader",
              url: "https://reader.v123ve.xyz/"
            },
            {
              icon: "/images/logo/logo.webp",
              name: "\u63D0\u793A\u8BCD\u751F\u6210\u5668",
              url: "https://uiprompt.pages.dev/"
            },
            {
              icon: "/images/logo/logo.webp",
              name: "\u7845\u57FA\u6D41\u52A8API Key Sharing",
              url: "https://siliconflow-manager.v123ve.xyz/"
            }
          ]
        },
        {
          name: "\u9879\u76EE",
          list: [
            {
              icon: "/images/logo/logo.webp",
              name: "\u672C\u7AD9",
              url: "/"
            }
          ]
        }
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
          defaultCover: []
        }
      },
      // 页脚信息
      footer: {
        // 社交链接（请确保为偶数个）
        social: [
          {
            icon: "email",
            link: "/pages/about"
          },
          {
            icon: "github",
            link: "http://vitepress.v123ve.xyz"
          },
          {
            icon: "telegram",
            link: "/pages/about"
          },
          {
            icon: "bilibili",
            link: "/pages/about"
          },
          {
            icon: "qq",
            link: "/pages/about"
          },
          {
            icon: "twitter-x",
            link: "/pages/about"
          }
        ],
        // sitemap
        sitemap: [
          {
            text: "\u535A\u5BA2",
            items: [
              { text: "\u8FD1\u671F\u6587\u7AE0", link: "/" },
              { text: "\u5168\u90E8\u5206\u7C7B", link: "/pages/categories" },
              { text: "\u5168\u90E8\u6807\u7B7E", link: "/pages/tags" },
              { text: "\u6587\u7AE0\u5F52\u6863", link: "/pages/archives", newTab: true }
            ]
          },
          {
            text: "\u9879\u76EE",
            items: [{ text: "\u672C\u7AD9", link: "/", newTab: true }]
          },
          {
            text: "\u4E13\u680F",
            items: [
              { text: "\u6280\u672F\u5206\u4EAB", link: "/pages/categories/\u6280\u672F\u5206\u4EAB" },
              { text: "\u6211\u7684\u9879\u76EE", link: "/pages/project" },
              { text: "\u6548\u7387\u5DE5\u5177", link: "/pages/project" }
            ]
          },
          {
            text: "\u9875\u9762",
            items: [
              { text: "\u7545\u6240\u6B32\u8A00", link: "/pages/project" },
              { text: "\u5173\u4E8E\u672C\u7AD9", link: "/pages/about" },
              { text: "\u9690\u79C1\u653F\u7B56", link: "/pages/privacy" },
              { text: "\u7248\u6743\u534F\u8BAE", link: "/pages/cc" }
            ]
          },
          {
            text: "\u670D\u52A1",
            items: [
              {
                newTab: true,
                text: "CloudPaste",
                link: "https://cloudpaste-frontend-b2g.pages.dev/"
              },
              {
                newTab: true,
                text: "Koodo Reader",
                link: "https://reader.v123ve.xyz/"
              },
              {
                newTab: true,
                text: "\u63D0\u793A\u8BCD\u751F\u6210\u5668",
                link: "https://uiprompt.pages.dev/"
              },
              {
                newTab: true,
                text: "\u7845\u57FA\u6D41\u52A8API Key Sharing",
                link: "https://siliconflow-manager.v123ve.xyz/"
              }
            ]
          }
        ]
      },
      // 评论
      comment: {
        enable: false,
        // 评论系统选择
        // artalk / twikoo
        type: "artalk",
        // artalk
        // https://artalk.js.org/
        artalk: {
          site: "",
          server: ""
        },
        // twikoo
        // https://twikoo.js.org/
        twikoo: {
          // 必填，若不想使用 CDN，可以使用 pnpm add twikoo 安装并引入
          js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/twikoo/1.6.39/twikoo.all.min.js",
          envId: "",
          // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
          region: "ap-shanghai",
          lang: "zh-CN"
        }
      },
      // 侧边栏
      aside: {
        // 站点简介
        hello: {
          enable: true,
          text: "\u8FD9\u91CC\u6709\u5173\u4E8E<strong>\u5F00\u53D1</strong>\u76F8\u5173\u7684\u95EE\u9898\u548C\u770B\u6CD5\uFF0C\u4E5F\u4F1A\u6709\u4E00\u4E9B<strong>\u5947\u6280\u6DEB\u5DE7</strong>\u7684\u5206\u4EAB\uFF0C\u5176\u4E2D\u5927\u90E8\u5206\u5185\u5BB9\u4F1A\u4FA7\u91CD\u4E8E<strong>\u524D\u7AEF\u5F00\u53D1</strong>\u3002\u5E0C\u671B\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u627E\u5230\u5BF9\u4F60\u6709\u7528\u7684\u77E5\u8BC6\u548C\u6559\u7A0B\u3002"
        },
        // 目录
        toc: {
          enable: true
        },
        // 标签
        tags: {
          enable: true
        },
        // 倒计时
        countDown: {
          enable: true,
          // 倒计时日期
          data: {
            name: "\u6625\u8282",
            date: "2026-02-17"
          }
        },
        // 站点数据
        siteData: {
          enable: true
        }
      },
      // 友链
      friends: {
        // 友链朋友圈
        circleOfFriends: "",
        // 动态友链
        dynamicLink: {
          server: "",
          app_token: "",
          table_id: ""
        }
      },
      // 音乐播放器
      // https://github.com/imsyy/Meting-API
      music: {
        enable: false,
        // url
        url: "https://api-meting.example.com",
        // id
        id: 9379831714,
        // netease / tencent / kugou
        server: "netease",
        // playlist / album / song
        type: "playlist"
      },
      // 搜索
      // https://www.algolia.com/
      search: {
        enable: false,
        appId: "",
        apiKey: ""
      },
      // 打赏
      rewardData: {
        enable: false,
        // 微信二维码
        wechat: "",
        // 支付宝二维码
        alipay: ""
      },
      // 图片灯箱
      fancybox: {
        enable: true,
        js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
        css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css"
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
          "link-card"
        ]
      },
      // 站点统计
      tongji: {
        "51la": ""
      }
    };
  }
});

// .vitepress/config.mjs
import { defineConfig } from "file:///F:/hsy/v123ve.github.io/node_modules/vitepress/dist/node/index.js";

// .vitepress/theme/utils/generateRSS.mjs
import { createContentLoader } from "file:///F:/hsy/v123ve.github.io/node_modules/vitepress/dist/node/index.js";
import { writeFileSync } from "fs";
import { Feed } from "file:///F:/hsy/v123ve.github.io/node_modules/feed/lib/feed.js";
import path from "path";
var createRssFile = async (config, themeConfig4) => {
  const siteMeta = themeConfig4.siteMeta;
  const hostLink = siteMeta.site;
  const feed = new Feed({
    title: siteMeta.title,
    description: siteMeta.description,
    id: hostLink,
    link: hostLink,
    language: "zh",
    generator: siteMeta.author.name,
    favicon: siteMeta.author.cover,
    copyright: `Copyright \xA9 2020-present ${siteMeta.author.name}`,
    updated: /* @__PURE__ */ new Date()
  });
  let posts = await createContentLoader("posts/**/*.md", {
    render: true
  }).load();
  posts = posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB - dateA;
  });
  for (const { url, frontmatter } of posts) {
    if (feed.items.length >= 10) break;
    let { title, description, date } = frontmatter;
    if (typeof date === "string") date = new Date(date);
    feed.addItem({
      title,
      id: `${hostLink}${url}`,
      link: `${hostLink}${url}`,
      description,
      date,
      // updated,
      author: [
        {
          name: siteMeta.author.name,
          email: siteMeta.author.email,
          link: siteMeta.author.link
        }
      ]
    });
  }
  writeFileSync(path.join(config.outDir, "rss.xml"), feed.rss2(), "utf-8");
};

// .vitepress/config.mjs
import { withPwa } from "file:///F:/hsy/v123ve.github.io/node_modules/@vite-pwa/vitepress/dist/index.mjs";

// .vitepress/theme/utils/commonTools.mjs
import { load } from "file:///F:/hsy/v123ve.github.io/node_modules/cheerio/lib/esm/index.js";
var generateId = (fileName) => {
  let hash = 0;
  for (let i = 0; i < fileName.length; i++) {
    hash = (hash << 5) - hash + fileName.charCodeAt(i);
  }
  const numericId = Math.abs(hash % 1e10);
  return numericId;
};
var jumpRedirect = (html, themeConfig4, isDom = false) => {
  try {
    const isDev = process.env.NODE_ENV === "development";
    if (isDev) return false;
    if (!themeConfig4.jumpRedirect.enable) return html;
    const redirectPage = "/redirect";
    const excludeClass = themeConfig4.jumpRedirect.exclude;
    if (isDom) {
      if (typeof window === "undefined" || typeof document === "undefined") return false;
      const allLinks = [...document.getElementsByTagName("a")];
      if (allLinks?.length === 0) return false;
      allLinks.forEach((link) => {
        if (link.getAttribute("target") === "_blank") {
          if (excludeClass.some((className) => link.classList.contains(className))) {
            return false;
          }
          const linkHref = link.getAttribute("href");
          if (linkHref && !linkHref.includes(redirectPage)) {
            const encodedHref = btoa(linkHref);
            const redirectLink = `${redirectPage}?url=${encodedHref}`;
            link.setAttribute("original-href", linkHref);
            link.setAttribute("href", redirectLink);
          }
        }
      });
    } else {
      const $ = load(html);
      $("a[target='_blank']").each((_, el) => {
        const $a = $(el);
        const href = $a.attr("href");
        const classesStr = $a.attr("class");
        const innerText = $a.text();
        const classes = classesStr ? classesStr.trim().split(" ") : [];
        if (excludeClass.some((className) => classes.includes(className))) {
          return;
        }
        if (href && !href.includes(redirectPage)) {
          const encodedHref = Buffer.from(href, "utf-8").toString("base64");
          const attributes = el.attribs;
          let attributesStr = "";
          for (let attr in attributes) {
            if (Object.prototype.hasOwnProperty.call(attributes, attr)) {
              attributesStr += ` ${attr}="${attributes[attr]}"`;
            }
          }
          const newLink = `<a href="${redirectPage}?url=${encodedHref}" original-href="${href}" ${attributesStr}>${innerText}</a>`;
          $a.replaceWith(newLink);
        }
      });
      return $.html();
    }
  } catch (error) {
    console.error("\u5904\u7406\u94FE\u63A5\u65F6\u51FA\u9519\uFF1A", error);
  }
};

// .vitepress/theme/utils/getPostData.mjs
import { globby } from "file:///F:/hsy/v123ve.github.io/node_modules/globby/index.js";
import matter from "file:///F:/hsy/v123ve.github.io/node_modules/gray-matter/index.js";
import fs from "file:///F:/hsy/v123ve.github.io/node_modules/fs-extra/lib/index.js";
var getPostMDFilePaths = async () => {
  try {
    let paths = await globby(["**.md"], {
      ignore: ["node_modules", "pages", ".vitepress", "README.md"]
    });
    return paths.filter((item) => item.includes("posts/"));
  } catch (error) {
    console.error("\u83B7\u53D6\u6587\u7AE0\u8DEF\u5F84\u65F6\u51FA\u9519:", error);
    throw error;
  }
};
var compareDate = (obj1, obj2) => {
  return obj1.date < obj2.date ? 1 : -1;
};
var comparePostPriority = (a, b) => {
  if (a.top && !b.top) {
    return -1;
  }
  if (!a.top && b.top) {
    return 1;
  }
  return compareDate(a, b);
};
var getAllPosts = async () => {
  try {
    let paths = await getPostMDFilePaths();
    let posts = await Promise.all(
      paths.map(async (item) => {
        try {
          const content = await fs.readFile(item, "utf-8");
          const stat = await fs.stat(item);
          const { birthtimeMs, mtimeMs } = stat;
          const { data } = matter(content);
          const { title, date, categories, description, tags, top, cover } = data;
          const expired = Math.floor(
            ((/* @__PURE__ */ new Date()).getTime() - new Date(date).getTime()) / (1e3 * 60 * 60 * 24)
          );
          return {
            id: generateId(item),
            title: title || "\u672A\u547D\u540D\u6587\u7AE0",
            date: date ? new Date(date).getTime() : birthtimeMs,
            lastModified: mtimeMs,
            expired,
            tags,
            categories,
            description,
            regularPath: `/${item.replace(".md", ".html")}`,
            top,
            cover
          };
        } catch (error) {
          console.error(`\u5904\u7406\u6587\u7AE0\u6587\u4EF6 '${item}' \u65F6\u51FA\u9519:`, error);
          throw error;
        }
      })
    );
    posts.sort(comparePostPriority);
    return posts;
  } catch (error) {
    console.error("\u83B7\u53D6\u6240\u6709\u6587\u7AE0\u65F6\u51FA\u9519:", error);
    throw error;
  }
};
var getAllType = (postData2) => {
  const tagData = {};
  postData2.map((item) => {
    if (!item.tags || item.tags.length === 0) return;
    if (typeof item.tags === "string") {
      item.tags = item.tags.split(",");
    }
    item.tags.forEach((tag) => {
      if (!tagData[tag]) {
        tagData[tag] = {
          count: 1,
          articles: [item]
        };
      } else {
        tagData[tag].count++;
        tagData[tag].articles.push(item);
      }
    });
  });
  return tagData;
};
var getAllCategories = (postData2) => {
  const catData = {};
  postData2.map((item) => {
    if (!item.categories || item.categories.length === 0) return;
    if (typeof item.categories === "string") {
      item.categories = item.categories.split(",");
    }
    item.categories.forEach((tag) => {
      if (!catData[tag]) {
        catData[tag] = {
          count: 1,
          articles: [item]
        };
      } else {
        catData[tag].count++;
        catData[tag].articles.push(item);
      }
    });
  });
  return catData;
};
var getAllArchives = (postData2) => {
  const archiveData = {};
  postData2.forEach((item) => {
    if (item.date) {
      item.title = item.regularPath.split("/").pop().replace(".html", "");
      const date = new Date(item.date);
      const year = date.getFullYear().toString();
      if (!archiveData[year]) {
        archiveData[year] = {
          count: 1,
          articles: [item]
        };
      } else {
        archiveData[year].count++;
        archiveData[year].articles.push(item);
      }
    }
  });
  const sortedYears = Object.keys(archiveData).sort((a, b) => parseInt(b) - parseInt(a));
  return { data: archiveData, year: sortedYears };
};

// .vitepress/theme/assets/themeConfig.mjs
var themeConfig = {
  // 站点信息
  siteMeta: {
    // 站点标题
    title: "Curve",
    // 站点描述
    description: "Hello World",
    // 站点logo
    logo: "/images/logo/logo.webp",
    // 站点地址
    site: "https://blog.imsyy.top",
    // 语言
    lang: "zh-CN",
    // 作者
    author: {
      name: "Admin",
      cover: "/images/logo/logo.webp",
      email: "114514@gmail.com",
      link: "https://www.imsyy.top"
    }
  },
  // 备案信息
  icp: "\u840CICP\u5907114514\u53F7",
  // 建站日期
  since: "2020-07-28",
  // 每页文章数据
  postSize: 8,
  // inject
  inject: {
    // 头部
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/favicon.ico" }],
      // RSS
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "https://blog.imsyy.top/rss.xml"
        }
      ],
      // 预载 CDN
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com"
        }
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://mirrors.sustech.edu.cn"
        }
      ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css"
        }
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css"
        }
      ],
      // iconfont
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css"
        }
      ],
      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet"
        }
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: ""
        }
      ]
    ]
  },
  // 导航栏菜单
  nav: [
    {
      text: "\u6587\u5E93",
      items: [
        { text: "\u6587\u7AE0\u5217\u8868", link: "/pages/archives", icon: "article" },
        { text: "\u5168\u90E8\u5206\u7C7B", link: "/pages/categories", icon: "folder" },
        { text: "\u5168\u90E8\u6807\u7B7E", link: "/pages/tags", icon: "hashtag" }
      ]
    },
    {
      text: "\u4E13\u680F",
      items: [
        { text: "\u6280\u672F\u5206\u4EAB", link: "/pages/categories/\u6280\u672F\u5206\u4EAB", icon: "technical" },
        { text: "\u6211\u7684\u9879\u76EE", link: "/pages/project", icon: "code" },
        { text: "\u6548\u7387\u5DE5\u5177", link: "/pages/tools", icon: "tools" }
      ]
    },
    {
      text: "\u53CB\u94FE",
      items: [
        { text: "\u53CB\u94FE\u9C7C\u5858", link: "/pages/friends", icon: "fish" },
        { text: "\u53CB\u60C5\u94FE\u63A5", link: "/pages/link", icon: "people" }
      ]
    },
    {
      text: "\u6211\u7684",
      items: [
        { text: "\u7545\u6240\u6B32\u8A00", link: "/pages/message", icon: "chat" },
        { text: "\u81F4\u8C22\u540D\u5355", link: "/pages/thanks", icon: "reward" },
        { text: "\u5173\u4E8E\u672C\u7AD9", link: "/pages/about", icon: "contacts" }
      ]
    }
  ],
  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "\u535A\u5BA2",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "\u4E3B\u7AD9",
          url: "/"
        },
        {
          icon: "/images/logo/logo.webp",
          name: "\u535A\u5BA2\u955C\u50CF\u7AD9",
          url: "https://blog-backup.imsyy.top/"
        }
      ]
    },
    {
      name: "\u670D\u52A1",
      list: [
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/6613465358077.png",
          name: "\u8D77\u59CB\u9875",
          url: "https://nav.imsyy.top/"
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/661346d418ad7.png",
          name: "\u4ECA\u65E5\u70ED\u699C",
          url: "https://hot.imsyy.top/"
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/66134722586fa.png",
          name: "\u7AD9\u70B9\u76D1\u6D4B",
          url: "https://status.imsyy.top/"
        }
      ]
    },
    {
      name: "\u9879\u76EE",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "Curve",
          url: "https://github.com/imsyy/vitepress-theme-curve"
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/07/66124f5fc63c8.png",
          name: "SPlayer",
          url: "https://github.com/imsyy/SPlayer"
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/6613465358077.png",
          name: "Snavigation",
          url: "https://github.com/imsyy/SPlayer"
        },
        {
          icon: "/images/logo/logo.webp",
          name: "Home",
          url: "https://github.com/imsyy/home"
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/661346d418ad7.png",
          name: "DailyHotApi",
          url: "https://github.com/imsyy/DailyHotApi"
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/66134722586fa.png",
          name: "site-status",
          url: "https://github.com/imsyy/site-status"
        }
      ]
    }
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
      defaultCover: [
        "https://example.com/1.avif",
        "https://example.com/2.avif",
        "https://example.com/3.avif"
      ]
    }
  },
  // 页脚信息
  footer: {
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "email",
        link: "mailto:one@imsyy.top"
      },
      {
        icon: "github",
        link: "https://www.github.com/imsyy/"
      },
      {
        icon: "telegram",
        link: "https://t.me/bottom_user"
      },
      {
        icon: "bilibili",
        link: "https://space.bilibili.com/98544142"
      },
      {
        icon: "qq",
        link: "https://res.abeim.cn/api/qq/?qq=1539250352"
      },
      {
        icon: "twitter-x",
        link: "https://twitter.com/iimmsyy"
      }
    ],
    // sitemap
    sitemap: [
      {
        text: "\u535A\u5BA2",
        items: [
          { text: "\u8FD1\u671F\u6587\u7AE0", link: "/" },
          { text: "\u5168\u90E8\u5206\u7C7B", link: "/pages/categories" },
          { text: "\u5168\u90E8\u6807\u7B7E", link: "/pages/tags" },
          { text: "\u6587\u7AE0\u5F52\u6863", link: "/pages/archives", newTab: true }
        ]
      },
      {
        text: "\u9879\u76EE",
        items: [
          { text: "Home", link: "https://github.com/imsyy/home/", newTab: true },
          { text: "SPlayer", link: "https://github.com/imsyy/SPlayer/", newTab: true },
          { text: "DailyHotApi", link: "https://github.com/imsyy/DailyHotApi/", newTab: true },
          { text: "Snavigation", link: "https://github.com/imsyy/Snavigation/", newTab: true }
        ]
      },
      {
        text: "\u4E13\u680F",
        items: [
          { text: "\u6280\u672F\u5206\u4EAB", link: "/pages/categories/\u6280\u672F\u5206\u4EAB" },
          { text: "\u6211\u7684\u9879\u76EE", link: "/pages/project" },
          { text: "\u6548\u7387\u5DE5\u5177", link: "/pages/tools" }
        ]
      },
      {
        text: "\u9875\u9762",
        items: [
          { text: "\u7545\u6240\u6B32\u8A00", link: "/pages/message" },
          { text: "\u5173\u4E8E\u672C\u7AD9", link: "/pages/about" },
          { text: "\u9690\u79C1\u653F\u7B56", link: "/pages/privacy" },
          { text: "\u7248\u6743\u534F\u8BAE", link: "/pages/cc" }
        ]
      },
      {
        text: "\u670D\u52A1",
        items: [
          { text: "\u7AD9\u70B9\u72B6\u6001", link: "https://status.imsyy.top/", newTab: true },
          { text: "\u4E00\u4E2A\u5BFC\u822A", link: "https://nav.imsyy.top/", newTab: true },
          { text: "\u7AD9\u70B9\u8BA2\u9605", link: "https://blog.imsyy.top/rss.xml", newTab: true },
          {
            text: "\u53CD\u9988\u6295\u8BC9",
            link: "https://eqnxweimkr5.feishu.cn/share/base/form/shrcnCXCPmxCKKJYI3RKUfefJre",
            newTab: true
          }
        ]
      }
    ]
  },
  // 评论
  comment: {
    enable: false,
    // 评论系统选择
    // artalk / twikoo
    type: "artalk",
    // artalk
    // https://artalk.js.org/
    artalk: {
      site: "",
      server: ""
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      // 必填，若不想使用 CDN，可以使用 pnpm add twikoo 安装并引入
      js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/twikoo/1.6.39/twikoo.all.min.js",
      envId: "",
      // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      region: "ap-shanghai",
      lang: "zh-CN"
    }
  },
  // 侧边栏
  aside: {
    // 站点简介
    hello: {
      enable: true,
      text: "\u8FD9\u91CC\u6709\u5173\u4E8E<strong>\u5F00\u53D1</strong>\u76F8\u5173\u7684\u95EE\u9898\u548C\u770B\u6CD5\uFF0C\u4E5F\u4F1A\u6709\u4E00\u4E9B<strong>\u5947\u6280\u6DEB\u5DE7</strong>\u7684\u5206\u4EAB\uFF0C\u5176\u4E2D\u5927\u90E8\u5206\u5185\u5BB9\u4F1A\u4FA7\u91CD\u4E8E<strong>\u524D\u7AEF\u5F00\u53D1</strong>\u3002\u5E0C\u671B\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u627E\u5230\u5BF9\u4F60\u6709\u7528\u7684\u77E5\u8BC6\u548C\u6559\u7A0B\u3002"
    },
    // 目录
    toc: {
      enable: true
    },
    // 标签
    tags: {
      enable: true
    },
    // 倒计时
    countDown: {
      enable: true,
      // 倒计时日期
      data: {
        name: "\u6625\u8282",
        date: "2025-01-29"
      }
    },
    // 站点数据
    siteData: {
      enable: true
    }
  },
  // 友链
  friends: {
    // 友链朋友圈
    circleOfFriends: "",
    // 动态友链
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: ""
    }
  },
  // 音乐播放器
  // https://github.com/imsyy/Meting-API
  music: {
    enable: false,
    // url
    url: "https://api-meting.example.com",
    // id
    id: 9379831714,
    // netease / tencent / kugou
    server: "netease",
    // playlist / album / song
    type: "playlist"
  },
  // 搜索
  // https://www.algolia.com/
  search: {
    enable: false,
    appId: "",
    apiKey: ""
  },
  // 打赏
  rewardData: {
    enable: true,
    // 微信二维码
    wechat: "https://pic.efefee.cn/uploads/2024/04/07/66121049d1e80.webp",
    // 支付宝二维码
    alipay: "https://pic.efefee.cn/uploads/2024/04/07/661206631d3b5.webp"
  },
  // 图片灯箱
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css"
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
      "link-card"
    ]
  },
  // 站点统计
  tongji: {
    "51la": ""
  }
};

// .vitepress/init.mjs
import { existsSync } from "fs";
import path2 from "path";
var __vite_injected_original_dirname = "F:\\hsy\\v123ve.github.io\\.vitepress";
var getThemeConfig = async () => {
  try {
    const configPath = path2.resolve(__vite_injected_original_dirname, "../themeConfig.mjs");
    if (existsSync(configPath)) {
      const userConfig = await Promise.resolve().then(() => (init_themeConfig(), themeConfig_exports));
      return Object.assign(themeConfig, userConfig?.themeConfig || {});
    } else {
      console.warn("User configuration file not found, using default themeConfig.");
      return themeConfig;
    }
  } catch (error) {
    console.error("An error occurred while loading the configuration:", error);
    return themeConfig;
  }
};

// .vitepress/theme/utils/markdownConfig.mjs
import { tabsMarkdownPlugin } from "file:///F:/hsy/v123ve.github.io/node_modules/vitepress-plugin-tabs/dist/index.js";
import markdownItAttrs from "file:///F:/hsy/v123ve.github.io/node_modules/markdown-it-attrs/index.js";
import container from "file:///F:/hsy/v123ve.github.io/node_modules/markdown-it-container/index.mjs";
var markdownConfig = (md, themeConfig4) => {
  md.use(markdownItAttrs);
  md.use(tabsMarkdownPlugin);
  md.use(container, "timeline", {
    validate: (params) => params.trim().match(/^timeline\s+(.*)$/),
    render: (tokens, idx) => {
      const m = tokens[idx].info.trim().match(/^timeline\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return `<div class="timeline">
                    <span class="timeline-title">${md.utils.escapeHtml(m[1])}</span>
                    <div class="timeline-content">`;
      } else {
        return "</div></div>\n";
      }
    }
  });
  md.use(container, "radio", {
    render: (tokens, idx, _options, env) => {
      const token = tokens[idx];
      const check = token.info.trim().slice("radio".length).trim();
      if (token.nesting === 1) {
        const isChecked = md.renderInline(check, {
          references: env.references
        });
        return `<div class="radio">
          <div class="radio-point ${isChecked}" />`;
      } else {
        return "</div>";
      }
    }
  });
  md.use(container, "button", {
    render: (tokens, idx, _options) => {
      const token = tokens[idx];
      const check = token.info.trim().slice("button".length).trim();
      if (token.nesting === 1) {
        return `<button class="button ${check}">`;
      } else {
        return "</button>";
      }
    }
  });
  md.use(container, "card", {
    render: (tokens, idx, _options) => {
      const token = tokens[idx];
      if (token.nesting === 1) {
        return `<div class="card">`;
      } else {
        return "</div>";
      }
    }
  });
  md.renderer.rules.table_open = () => {
    return '<div class="table-container"><table>';
  };
  md.renderer.rules.table_close = () => {
    return "</table></div>";
  };
  md.renderer.rules.image = (tokens, idx) => {
    const token = tokens[idx];
    const src = token.attrs[token.attrIndex("src")][1];
    const alt = token.content;
    if (!themeConfig4.fancybox.enable) {
      return `<img src="${src}" alt="${alt}" loading="lazy">`;
    }
    return `<a class="img-fancybox" href="${src}" data-fancybox="gallery" data-caption="${alt}">
                <img class="post-img" src="${src}" alt="${alt}" loading="lazy" />
                <span class="post-img-tip">${alt}</span>
              </a>`;
  };
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];
    const lang = token.info.trim();
    if (lang.startsWith("ad-")) {
      const type = lang.substring(3);
      const content = token.content;
      const admonitionTypes = {
        "note": "info",
        "question": "info",
        "warning": "warning",
        "tip": "tip",
        "summary": "info",
        "hint": "tip",
        "important": "warning",
        "caution": "warning",
        "error": "danger",
        "danger": "danger"
      };
      const className = admonitionTypes[type] || "info";
      const title = type.toUpperCase();
      return `<div class="${className} custom-block">
            <p class="custom-block-title">${title}</p>
            <div class="custom-block-content">
              ${md.render(content)}
            </div>
    </div>`;
    }
    return fence(...args);
  };
};
var markdownConfig_default = markdownConfig;

// .vitepress/config.mjs
import AutoImport from "file:///F:/hsy/v123ve.github.io/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///F:/hsy/v123ve.github.io/node_modules/unplugin-vue-components/dist/vite.js";
import path3 from "path";
var __vite_injected_original_dirname2 = "F:\\hsy\\v123ve.github.io\\.vitepress";
var postData = await getAllPosts();
var themeConfig3 = await getThemeConfig();
var config_default = withPwa(
  defineConfig({
    title: themeConfig3.siteMeta.title,
    description: themeConfig3.siteMeta.description,
    lang: themeConfig3.siteMeta.lang,
    // 简洁的 URL
    cleanUrls: true,
    // 最后更新时间戳
    lastUpdated: true,
    // 主题
    appearance: "dark",
    // Head
    head: themeConfig3.inject.header,
    // sitemap
    sitemap: {
      hostname: themeConfig3.siteMeta.site
    },
    // 主题配置
    themeConfig: {
      ...themeConfig3,
      // 必要数据
      postData,
      tagsData: getAllType(postData),
      categoriesData: getAllCategories(postData),
      archivesData: getAllArchives(postData)
    },
    // markdown
    markdown: {
      math: true,
      lineNumbers: true,
      toc: { level: [1, 2, 3] },
      image: {
        lazyLoading: true
      },
      config: (md) => markdownConfig_default(md, themeConfig3)
    },
    // 构建排除
    srcExclude: ["**/README.md", "**/TODO.md"],
    // transformHead
    transformPageData: async (pageData) => {
      const canonicalUrl = `${themeConfig3.siteMeta.site}/${pageData.relativePath}`.replace(/index\.md$/, "").replace(/\.md$/, "");
      pageData.frontmatter.head ??= [];
      pageData.frontmatter.head.push(["link", { rel: "canonical", href: canonicalUrl }]);
    },
    // transformHtml
    transformHtml: (html) => {
      return jumpRedirect(html, themeConfig3);
    },
    // buildEnd
    buildEnd: async (config) => {
      await createRssFile(config, themeConfig3);
    },
    // vite
    vite: {
      plugins: [
        AutoImport({
          imports: ["vue", "vitepress"],
          dts: ".vitepress/auto-imports.d.ts"
        }),
        Components({
          dirs: [".vitepress/theme/components", ".vitepress/theme/views"],
          extensions: ["vue", "md"],
          include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
          dts: ".vitepress/components.d.ts"
        })
      ],
      resolve: {
        // 配置路径别名
        alias: {
          // eslint-disable-next-line no-undef
          "@": path3.resolve(__vite_injected_original_dirname2, "./theme")
        }
      },
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ["legacy-js-api"]
          }
        }
      },
      // 服务器
      server: {
        port: 9877
      },
      // 构建
      build: {
        minify: "terser",
        terserOptions: {
          compress: {
            pure_funcs: ["console.log"]
          }
        }
      }
    },
    // PWA
    pwa: {
      registerType: "autoUpdate",
      selfDestroying: true,
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,
        // 资源缓存
        runtimeCaching: [
          {
            urlPattern: /(.*?)\.(woff2|woff|ttf|css)/,
            handler: "CacheFirst",
            options: {
              cacheName: "file-cache"
            }
          },
          {
            urlPattern: /(.*?)\.(ico|webp|png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache"
            }
          },
          {
            urlPattern: /^https:\/\/cdn2\.codesign\.qq\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "iconfont-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 2
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ],
        // 缓存文件
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,jpeg,gif,svg,woff2,ttf}"],
        // 排除路径
        navigateFallbackDenylist: [/^\/sitemap.xml$/, /^\/rss.xml$/, /^\/robots.txt$/]
      },
      manifest: {
        name: themeConfig3.siteMeta.title,
        short_name: themeConfig3.siteMeta.title,
        description: themeConfig3.siteMeta.description,
        display: "standalone",
        start_url: "/",
        theme_color: "#fff",
        background_color: "#efefef",
        icons: [
          {
            src: "/images/logo/favicon-32x32.webp",
            sizes: "32x32",
            type: "image/webp"
          },
          {
            src: "/images/logo/favicon-96x96.webp",
            sizes: "96x96",
            type: "image/webp"
          },
          {
            src: "/images/logo/favicon-256x256.webp",
            sizes: "256x256",
            type: "image/webp"
          },
          {
            src: "/images/logo/favicon-512x512.webp",
            sizes: "512x512",
            type: "image/webp"
          }
        ]
      }
    }
  })
);
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidGhlbWVDb25maWcubWpzIiwgIi52aXRlcHJlc3MvY29uZmlnLm1qcyIsICIudml0ZXByZXNzL3RoZW1lL3V0aWxzL2dlbmVyYXRlUlNTLm1qcyIsICIudml0ZXByZXNzL3RoZW1lL3V0aWxzL2NvbW1vblRvb2xzLm1qcyIsICIudml0ZXByZXNzL3RoZW1lL3V0aWxzL2dldFBvc3REYXRhLm1qcyIsICIudml0ZXByZXNzL3RoZW1lL2Fzc2V0cy90aGVtZUNvbmZpZy5tanMiLCAiLnZpdGVwcmVzcy9pbml0Lm1qcyIsICIudml0ZXByZXNzL3RoZW1lL3V0aWxzL21hcmtkb3duQ29uZmlnLm1qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXGhzeVxcXFx2MTIzdmUuZ2l0aHViLmlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxoc3lcXFxcdjEyM3ZlLmdpdGh1Yi5pb1xcXFx0aGVtZUNvbmZpZy5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L2hzeS92MTIzdmUuZ2l0aHViLmlvL3RoZW1lQ29uZmlnLm1qc1wiOy8vIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxuZXhwb3J0IGNvbnN0IHRoZW1lQ29uZmlnID0ge1xuICAvLyBcdTdBRDlcdTcwQjlcdTRGRTFcdTYwNkZcbiAgc2l0ZU1ldGE6IHtcbiAgICAvLyBcdTdBRDlcdTcwQjlcdTY4MDdcdTk4OThcbiAgICB0aXRsZTogXCJ2MTIzdmVcIixcbiAgICAvLyBcdTdBRDlcdTcwQjlcdTYzQ0ZcdThGRjBcbiAgICBkZXNjcmlwdGlvbjogXCJcdTYwMURcdTdFRjRcdTU3ODNcdTU3M0VcIixcbiAgICAvLyBcdTdBRDlcdTcwQjlsb2dvXG4gICAgbG9nbzogXCIvaW1hZ2VzL2xvZ28vbG9nby53ZWJwXCIsXG4gICAgLy8gXHU3QUQ5XHU3MEI5XHU1NzMwXHU1NzQwXG4gICAgc2l0ZTogXCJodHRwczovL3YxMjN2ZS5naXRodWIuaW9cIixcbiAgICAvLyBcdThCRURcdThBMDBcbiAgICBsYW5nOiBcInpoLUNOXCIsXG4gICAgLy8gXHU0RjVDXHU4MDA1XG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiBcInYxMjN2ZVwiLFxuICAgICAgY292ZXI6IFwiL2ltYWdlcy9sb2dvL2xvZ28ud2VicFwiLFxuICAgICAgZW1haWw6IFwiaHN5djEyM3ZlQGdtYWlsLmNvbVwiLFxuICAgICAgbGluazogXCJodHRwczovL3YxMjN2ZS5naXRodWIuaW9cIixcbiAgICB9LFxuICB9LFxuICAvLyBcdTU5MDdcdTY4NDhcdTRGRTFcdTYwNkZcbiAgaWNwOiBcIlx1ODQwQ0lDUFx1NTkwNzEyMzQ1Nlx1NTNGN1wiLFxuICAvLyBcdTVFRkFcdTdBRDlcdTY1RTVcdTY3MUZcbiAgc2luY2U6IFwiMjAyNS0wNS0yMFwiLFxuICAvLyBcdTZCQ0ZcdTk4NzVcdTY1ODdcdTdBRTBcdTY1NzBcdTYzNkVcbiAgcG9zdFNpemU6IDgsXG4gIC8vIGluamVjdFxuICBpbmplY3Q6IHtcbiAgICAvLyBcdTU5MzRcdTkwRThcbiAgICBoZWFkZXI6IFtcbiAgICAgIC8vIGZhdmljb25cbiAgICAgIFtcImxpbmtcIiwgeyByZWw6IFwiaWNvblwiLCBocmVmOiBcIi9mYXZpY29uLmljb1wiIH1dLFxuICAgICAgLy8gUlNTXG4gICAgICAvLyBbXG4gICAgICAvLyAgIFwibGlua1wiLFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgcmVsOiBcImFsdGVybmF0ZVwiLFxuICAgICAgLy8gICAgIHR5cGU6IFwiYXBwbGljYXRpb24vcnNzK3htbFwiLFxuICAgICAgLy8gICAgIHRpdGxlOiBcIlJTU1wiLFxuICAgICAgLy8gICAgIGhyZWY6IFwiaHR0cHM6Ly9ibG9nLmltc3l5LnRvcC9yc3MueG1sXCIsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyBdLFxuICAgICAgLy8gXHU5ODg0XHU4RjdEIENETlxuICAgICAgW1xuICAgICAgICBcImxpbmtcIixcbiAgICAgICAge1xuICAgICAgICAgIGNyb3Nzb3JpZ2luOiBcIlwiLFxuICAgICAgICAgIHJlbDogXCJwcmVjb25uZWN0XCIsXG4gICAgICAgICAgaHJlZjogXCJodHRwczovL3MxLmhkc2xiLmNvbVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgXCJsaW5rXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjcm9zc29yaWdpbjogXCJcIixcbiAgICAgICAgICByZWw6IFwicHJlY29ubmVjdFwiLFxuICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9taXJyb3JzLnN1c3RlY2guZWR1LmNuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgLy8gSGFybW9ueU9TIGZvbnRcbiAgICAgIFtcbiAgICAgICAgXCJsaW5rXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjcm9zc29yaWdpbjogXCJhbm9ueW1vdXNcIixcbiAgICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9zMS5oZHNsYi5jb20vYmZzL3N0YXRpYy9qaW5rZWxhL2xvbmcvZm9udC9yZWd1bGFyLmNzc1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgXCJsaW5rXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjcm9zc29yaWdpbjogXCJhbm9ueW1vdXNcIixcbiAgICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9taXJyb3JzLnN1c3RlY2guZWR1LmNuL2NkbmpzL2FqYXgvbGlicy9seGd3LXdlbmthaS1zY3JlZW4td2ViZm9udC8xLjcuMC9zdHlsZS5jc3NcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICAvLyBpY29uZm9udFxuICAgICAgW1xuICAgICAgICBcImxpbmtcIixcbiAgICAgICAge1xuICAgICAgICAgIGNyb3Nzb3JpZ2luOiBcImFub255bW91c1wiLFxuICAgICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgICAgaHJlZjogXCJodHRwczovL2NkbjIuY29kZXNpZ24ucXEuY29tL2ljb25zL2c1WnBFZ3gzejRWTzZqMi9sYXRlc3QvaWNvbmZvbnQuY3NzXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgLy8gRW1iZWQgY29kZVxuICAgICAgW1wibGlua1wiLCB7IHJlbDogXCJwcmVjb25uZWN0XCIsIGhyZWY6IFwiaHR0cHM6Ly91c2Uuc2V2ZW5jZG4uY29tXCIgfV0sXG4gICAgICBbXCJsaW5rXCIsIHsgcmVsOiBcInByZWNvbm5lY3RcIiwgaHJlZjogXCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIsIGNyb3Nzb3JpZ2luOiBcIlwiIH1dLFxuICAgICAgW1xuICAgICAgICBcImxpbmtcIixcbiAgICAgICAge1xuICAgICAgICAgIGNyb3Nzb3JpZ2luOiBcImFub255bW91c1wiLFxuICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly91c2Uuc2V2ZW5jZG4uY29tL2NzczI/ZmFtaWx5PUZpcmErQ29kZTp3Z2h0QDMwMC4uNzAwJmRpc3BsYXk9c3dhcFwiLFxuICAgICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgLy8gXHU5ODg0XHU4RjdEIERvY1NlYXJjaFxuICAgICAgW1xuICAgICAgICBcImxpbmtcIixcbiAgICAgICAge1xuICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9YNUVCRVpCNTNJLWRzbi5hbGdvbGlhLm5ldFwiLFxuICAgICAgICAgIHJlbDogXCJwcmVjb25uZWN0XCIsXG4gICAgICAgICAgY3Jvc3NvcmlnaW46IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIF0sXG4gIH0sXG4gIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRlx1ODNEQ1x1NTM1NVxuICBuYXY6IFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1NjU4N1x1NUU5M1wiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIlx1NjU4N1x1N0FFMFx1NTIxN1x1ODg2OFwiLCBsaW5rOiBcIi9wYWdlcy9hcmNoaXZlc1wiLCBpY29uOiBcImFydGljbGVcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHU1MTY4XHU5MEU4XHU1MjA2XHU3QzdCXCIsIGxpbms6IFwiL3BhZ2VzL2NhdGVnb3JpZXNcIiwgaWNvbjogXCJmb2xkZXJcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHU1MTY4XHU5MEU4XHU2ODA3XHU3QjdFXCIsIGxpbms6IFwiL3BhZ2VzL3RhZ3NcIiwgaWNvbjogXCJoYXNodGFnXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1NEUxM1x1NjgwRlwiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIlx1NjI4MFx1NjcyRlx1NTIwNlx1NEVBQlwiLCBsaW5rOiBcIi9wYWdlcy9wcm9qZWN0XCIsIGljb246IFwidGVjaG5pY2FsXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlx1NjIxMVx1NzY4NFx1OTg3OVx1NzZFRVwiLCBsaW5rOiBcIi9wYWdlcy9wcm9qZWN0XCIsIGljb246IFwiY29kZVwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTY1NDhcdTczODdcdTVERTVcdTUxNzdcIiwgbGluazogXCIvcGFnZXMvcHJvamVjdFwiLCBpY29uOiBcInRvb2xzXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1NTNDQlx1OTRGRVwiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIlx1NTNDQlx1OTRGRVx1OUM3Q1x1NTg1OFwiLCBsaW5rOiBcIi9wYWdlcy9wcm9qZWN0XCIsIGljb246IFwiZmlzaFwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTUzQ0JcdTYwQzVcdTk0RkVcdTYzQTVcIiwgbGluazogXCIvcGFnZXMvcHJvamVjdFwiLCBpY29uOiBcInBlb3BsZVwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTYyMTFcdTc2ODRcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogXCJcdTc1NDVcdTYyNDBcdTZCMzJcdThBMDBcIiwgbGluazogXCIvcGFnZXMvcHJvamVjdFwiLCBpY29uOiBcImNoYXRcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHU4MUY0XHU4QzIyXHU1NDBEXHU1MzU1XCIsIGxpbms6IFwiL3BhZ2VzL3Byb2plY3RcIiwgaWNvbjogXCJyZXdhcmRcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHU1MTczXHU0RThFXHU2NzJDXHU3QUQ5XCIsIGxpbms6IFwiL3BhZ2VzL2Fib3V0XCIsIGljb246IFwiY29udGFjdHNcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcdTgzRENcdTUzNTUgLSBcdTVERTZcdTRGQTdcbiAgbmF2TW9yZTogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiXHU1MzVBXHU1QkEyXCIsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcIi9pbWFnZXMvbG9nby9sb2dvLndlYnBcIixcbiAgICAgICAgICBuYW1lOiBcIlx1NEUzQlx1N0FEOVwiLFxuICAgICAgICAgIHVybDogXCIvXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJcdTY3MERcdTUyQTFcIixcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiL2ltYWdlcy9sb2dvL2xvZ28ud2VicFwiLFxuICAgICAgICAgIG5hbWU6IFwiQ2xvdWRQYXN0ZVwiLFxuICAgICAgICAgIHVybDogXCJodHRwczovL2Nsb3VkcGFzdGUtZnJvbnRlbmQtYjJnLnBhZ2VzLmRldi9cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiL2ltYWdlcy9sb2dvL2xvZ28ud2VicFwiLFxuICAgICAgICAgIG5hbWU6IFwiS29vZG8gUmVhZGVyXCIsXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vcmVhZGVyLnYxMjN2ZS54eXovXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcIi9pbWFnZXMvbG9nby9sb2dvLndlYnBcIixcbiAgICAgICAgICBuYW1lOiBcIlx1NjNEMFx1NzkzQVx1OEJDRFx1NzUxRlx1NjIxMFx1NTY2OFwiLFxuICAgICAgICAgIHVybDogXCJodHRwczovL3VpcHJvbXB0LnBhZ2VzLmRldi9cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiL2ltYWdlcy9sb2dvL2xvZ28ud2VicFwiLFxuICAgICAgICAgIG5hbWU6IFwiXHU3ODQ1XHU1N0ZBXHU2RDQxXHU1MkE4QVBJIEtleSBTaGFyaW5nXCIsXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vc2lsaWNvbmZsb3ctbWFuYWdlci52MTIzdmUueHl6L1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiXHU5ODc5XHU3NkVFXCIsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcIi9pbWFnZXMvbG9nby9sb2dvLndlYnBcIixcbiAgICAgICAgICBuYW1lOiBcIlx1NjcyQ1x1N0FEOVwiLFxuICAgICAgICAgIHVybDogXCIvXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIC8vIFx1NUMwMVx1OTc2Mlx1OTE0RFx1N0Y2RVxuICBjb3Zlcjoge1xuICAgIC8vIFx1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRlx1NTNDQ1x1NjgwRlx1NUUwM1x1NUM0MFxuICAgIHR3b0NvbHVtbnM6IGZhbHNlLFxuICAgIC8vIFx1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRlx1NUMwMVx1OTc2Mlx1NjYzRVx1NzkzQVxuICAgIHNob3dDb3Zlcjoge1xuICAgICAgLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGXHU1QzAxXHU5NzYyXHU2NjNFXHU3OTNBIFx1NjU4N1x1N0FFMFx1NEUwRFx1OEJCRVx1N0Y2RWNvdmVyXHU1QzAxXHU5NzYyXHU0RjFBXHU2NjNFXHU3OTNBXHU1RjAyXHU1RTM4XHVGRjBDXHU1M0VGXHU0RUU1XHU4QkJFXHU3RjZFXHU0RTBCXHU2NUI5XHU5RUQ4XHU4QkE0XHU1QzAxXHU5NzYyXG4gICAgICBlbmFibGU6IHRydWUsXG4gICAgICAvLyBcdTVDMDFcdTk3NjJcdTVFMDNcdTVDNDBcdTY1QjlcdTVGMEY6IGxlZnQgfCByaWdodCB8IGJvdGhcbiAgICAgIGNvdmVyTGF5b3V0OiBcImJvdGhcIixcbiAgICAgIC8vIFx1OUVEOFx1OEJBNFx1NUMwMVx1OTc2MihcdTk2OEZcdTY3M0FcdTVDNTVcdTc5M0EpXG4gICAgICBkZWZhdWx0Q292ZXI6IFtdLFxuICAgIH0sXG4gIH0sXG4gIC8vIFx1OTg3NVx1ODExQVx1NEZFMVx1NjA2RlxuICBmb290ZXI6IHtcbiAgICAvLyBcdTc5M0VcdTRFQTRcdTk0RkVcdTYzQTVcdUZGMDhcdThCRjdcdTc4NkVcdTRGRERcdTRFM0FcdTUwNzZcdTY1NzBcdTRFMkFcdUZGMDlcbiAgICBzb2NpYWw6IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJlbWFpbFwiLFxuICAgICAgICBsaW5rOiBcIi9wYWdlcy9hYm91dFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJnaXRodWJcIixcbiAgICAgICAgbGluazogXCJodHRwczovL3YxMjN2ZS5naXRodWIuaW9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwidGVsZWdyYW1cIixcbiAgICAgICAgbGluazogXCIvcGFnZXMvYWJvdXRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiYmlsaWJpbGlcIixcbiAgICAgICAgbGluazogXCIvcGFnZXMvYWJvdXRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwicXFcIixcbiAgICAgICAgbGluazogXCIvcGFnZXMvYWJvdXRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwidHdpdHRlci14XCIsXG4gICAgICAgIGxpbms6IFwiL3BhZ2VzL2Fib3V0XCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgLy8gc2l0ZW1hcFxuICAgIHNpdGVtYXA6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTUzNUFcdTVCQTJcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4RkQxXHU2NzFGXHU2NTg3XHU3QUUwXCIsIGxpbms6IFwiL1wiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NTE2OFx1OTBFOFx1NTIwNlx1N0M3QlwiLCBsaW5rOiBcIi9wYWdlcy9jYXRlZ29yaWVzXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1MTY4XHU5MEU4XHU2ODA3XHU3QjdFXCIsIGxpbms6IFwiL3BhZ2VzL3RhZ3NcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTY1ODdcdTdBRTBcdTVGNTJcdTY4NjNcIiwgbGluazogXCIvcGFnZXMvYXJjaGl2ZXNcIiwgbmV3VGFiOiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1OTg3OVx1NzZFRVwiLFxuICAgICAgICBpdGVtczogW3sgdGV4dDogXCJcdTY3MkNcdTdBRDlcIiwgbGluazogXCIvXCIsIG5ld1RhYjogdHJ1ZSB9XSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU0RTEzXHU2ODBGXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjI4MFx1NjcyRlx1NTIwNlx1NEVBQlwiLCBsaW5rOiBcIi9wYWdlcy9jYXRlZ29yaWVzL1x1NjI4MFx1NjcyRlx1NTIwNlx1NEVBQlwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjIxMVx1NzY4NFx1OTg3OVx1NzZFRVwiLCBsaW5rOiBcIi9wYWdlcy9wcm9qZWN0XCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2NTQ4XHU3Mzg3XHU1REU1XHU1MTc3XCIsIGxpbms6IFwiL3BhZ2VzL3Byb2plY3RcIiB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTk4NzVcdTk3NjJcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiXHU3NTQ1XHU2MjQwXHU2QjMyXHU4QTAwXCIsIGxpbms6IFwiL3BhZ2VzL3Byb2plY3RcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTUxNzNcdTRFOEVcdTY3MkNcdTdBRDlcIiwgbGluazogXCIvcGFnZXMvYWJvdXRcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTk2OTBcdTc5QzFcdTY1M0ZcdTdCNTZcIiwgbGluazogXCIvcGFnZXMvcHJpdmFjeVwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NzI0OFx1Njc0M1x1NTM0Rlx1OEJBRVwiLCBsaW5rOiBcIi9wYWdlcy9jY1wiIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NjcwRFx1NTJBMVwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5ld1RhYjogdHJ1ZSxcbiAgICAgICAgICAgIHRleHQ6IFwiQ2xvdWRQYXN0ZVwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL2Nsb3VkcGFzdGUtZnJvbnRlbmQtYjJnLnBhZ2VzLmRldi9cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5ld1RhYjogdHJ1ZSxcbiAgICAgICAgICAgIHRleHQ6IFwiS29vZG8gUmVhZGVyXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vcmVhZGVyLnYxMjN2ZS54eXovXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuZXdUYWI6IHRydWUsXG4gICAgICAgICAgICB0ZXh0OiBcIlx1NjNEMFx1NzkzQVx1OEJDRFx1NzUxRlx1NjIxMFx1NTY2OFwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3VpcHJvbXB0LnBhZ2VzLmRldi9cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5ld1RhYjogdHJ1ZSxcbiAgICAgICAgICAgIHRleHQ6IFwiXHU3ODQ1XHU1N0ZBXHU2RDQxXHU1MkE4QVBJIEtleSBTaGFyaW5nXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vc2lsaWNvbmZsb3ctbWFuYWdlci52MTIzdmUueHl6L1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIC8vIFx1OEJDNFx1OEJCQVxuICBjb21tZW50OiB7XG4gICAgZW5hYmxlOiBmYWxzZSxcbiAgICAvLyBcdThCQzRcdThCQkFcdTdDRkJcdTdFREZcdTkwMDlcdTYyRTlcbiAgICAvLyBhcnRhbGsgLyB0d2lrb29cbiAgICB0eXBlOiBcImFydGFsa1wiLFxuICAgIC8vIGFydGFsa1xuICAgIC8vIGh0dHBzOi8vYXJ0YWxrLmpzLm9yZy9cbiAgICBhcnRhbGs6IHtcbiAgICAgIHNpdGU6IFwiXCIsXG4gICAgICBzZXJ2ZXI6IFwiXCIsXG4gICAgfSxcbiAgICAvLyB0d2lrb29cbiAgICAvLyBodHRwczovL3R3aWtvby5qcy5vcmcvXG4gICAgdHdpa29vOiB7XG4gICAgICAvLyBcdTVGQzVcdTU4NkJcdUZGMENcdTgyRTVcdTRFMERcdTYwRjNcdTRGN0ZcdTc1MjggQ0ROXHVGRjBDXHU1M0VGXHU0RUU1XHU0RjdGXHU3NTI4IHBucG0gYWRkIHR3aWtvbyBcdTVCODlcdTg4QzVcdTVFNzZcdTVGMTVcdTUxNjVcbiAgICAgIGpzOiBcImh0dHBzOi8vbWlycm9ycy5zdXN0ZWNoLmVkdS5jbi9jZG5qcy9hamF4L2xpYnMvdHdpa29vLzEuNi4zOS90d2lrb28uYWxsLm1pbi5qc1wiLFxuICAgICAgZW52SWQ6IFwiXCIsXG4gICAgICAvLyBcdTczQUZcdTU4ODNcdTU3MzBcdTU3REZcdUZGMENcdTlFRDhcdThCQTRcdTRFM0EgYXAtc2hhbmdoYWlcdUZGMENcdTgxN0VcdThCQUZcdTRFOTFcdTczQUZcdTU4ODNcdTU4NkIgYXAtc2hhbmdoYWkgXHU2MjE2IGFwLWd1YW5nemhvdVx1RkYxQlZlcmNlbCBcdTczQUZcdTU4ODNcdTRFMERcdTU4NkJcbiAgICAgIHJlZ2lvbjogXCJhcC1zaGFuZ2hhaVwiLFxuICAgICAgbGFuZzogXCJ6aC1DTlwiLFxuICAgIH0sXG4gIH0sXG4gIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlxuICBhc2lkZToge1xuICAgIC8vIFx1N0FEOVx1NzBCOVx1N0I4MFx1NEVDQlxuICAgIGhlbGxvOiB7XG4gICAgICBlbmFibGU6IHRydWUsXG4gICAgICB0ZXh0OiBcIlx1OEZEOVx1OTFDQ1x1NjcwOVx1NTE3M1x1NEU4RTxzdHJvbmc+XHU1RjAwXHU1M0QxPC9zdHJvbmc+XHU3NkY4XHU1MTczXHU3Njg0XHU5NUVFXHU5ODk4XHU1NDhDXHU3NzBCXHU2Q0Q1XHVGRjBDXHU0RTVGXHU0RjFBXHU2NzA5XHU0RTAwXHU0RTlCPHN0cm9uZz5cdTU5NDdcdTYyODBcdTZERUJcdTVERTc8L3N0cm9uZz5cdTc2ODRcdTUyMDZcdTRFQUJcdUZGMENcdTUxNzZcdTRFMkRcdTU5MjdcdTkwRThcdTUyMDZcdTUxODVcdTVCQjlcdTRGMUFcdTRGQTdcdTkxQ0RcdTRFOEU8c3Ryb25nPlx1NTI0RFx1N0FFRlx1NUYwMFx1NTNEMTwvc3Ryb25nPlx1MzAwMlx1NUUwQ1x1NjcxQlx1NEY2MFx1NTNFRlx1NEVFNVx1NTcyOFx1OEZEOVx1OTFDQ1x1NjI3RVx1NTIzMFx1NUJGOVx1NEY2MFx1NjcwOVx1NzUyOFx1NzY4NFx1NzdFNVx1OEJDNlx1NTQ4Q1x1NjU1OVx1N0EwQlx1MzAwMlwiLFxuICAgIH0sXG4gICAgLy8gXHU3NkVFXHU1RjU1XG4gICAgdG9jOiB7XG4gICAgICBlbmFibGU6IHRydWUsXG4gICAgfSxcbiAgICAvLyBcdTY4MDdcdTdCN0VcbiAgICB0YWdzOiB7XG4gICAgICBlbmFibGU6IHRydWUsXG4gICAgfSxcbiAgICAvLyBcdTUwMTJcdThCQTFcdTY1RjZcbiAgICBjb3VudERvd246IHtcbiAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgIC8vIFx1NTAxMlx1OEJBMVx1NjVGNlx1NjVFNVx1NjcxRlxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBcIlx1NjYyNVx1ODI4MlwiLFxuICAgICAgICBkYXRlOiBcIjIwMjYtMDItMTdcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBcdTdBRDlcdTcwQjlcdTY1NzBcdTYzNkVcbiAgICBzaXRlRGF0YToge1xuICAgICAgZW5hYmxlOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIC8vIFx1NTNDQlx1OTRGRVxuICBmcmllbmRzOiB7XG4gICAgLy8gXHU1M0NCXHU5NEZFXHU2NzBCXHU1M0NCXHU1NzA4XG4gICAgY2lyY2xlT2ZGcmllbmRzOiBcIlwiLFxuICAgIC8vIFx1NTJBOFx1NjAwMVx1NTNDQlx1OTRGRVxuICAgIGR5bmFtaWNMaW5rOiB7XG4gICAgICBzZXJ2ZXI6IFwiXCIsXG4gICAgICBhcHBfdG9rZW46IFwiXCIsXG4gICAgICB0YWJsZV9pZDogXCJcIixcbiAgICB9LFxuICB9LFxuICAvLyBcdTk3RjNcdTRFNTBcdTY0QURcdTY1M0VcdTU2NjhcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ltc3l5L01ldGluZy1BUElcbiAgbXVzaWM6IHtcbiAgICBlbmFibGU6IGZhbHNlLFxuICAgIC8vIHVybFxuICAgIHVybDogXCJodHRwczovL2FwaS1tZXRpbmcuZXhhbXBsZS5jb21cIixcbiAgICAvLyBpZFxuICAgIGlkOiA5Mzc5ODMxNzE0LFxuICAgIC8vIG5ldGVhc2UgLyB0ZW5jZW50IC8ga3Vnb3VcbiAgICBzZXJ2ZXI6IFwibmV0ZWFzZVwiLFxuICAgIC8vIHBsYXlsaXN0IC8gYWxidW0gLyBzb25nXG4gICAgdHlwZTogXCJwbGF5bGlzdFwiLFxuICB9LFxuICAvLyBcdTY0MUNcdTdEMjJcbiAgLy8gaHR0cHM6Ly93d3cuYWxnb2xpYS5jb20vXG4gIHNlYXJjaDoge1xuICAgIGVuYWJsZTogZmFsc2UsXG4gICAgYXBwSWQ6IFwiXCIsXG4gICAgYXBpS2V5OiBcIlwiLFxuICB9LFxuICAvLyBcdTYyNTNcdThENEZcbiAgcmV3YXJkRGF0YToge1xuICAgIGVuYWJsZTogZmFsc2UsXG4gICAgLy8gXHU1RkFFXHU0RkUxXHU0RThDXHU3RUY0XHU3ODAxXG4gICAgd2VjaGF0OiBcIlwiLFxuICAgIC8vIFx1NjUyRlx1NEVEOFx1NUI5RFx1NEU4Q1x1N0VGNFx1NzgwMVxuICAgIGFsaXBheTogXCJcIixcbiAgfSxcbiAgLy8gXHU1NkZFXHU3MjQ3XHU3MDZGXHU3QkIxXG4gIGZhbmN5Ym94OiB7XG4gICAgZW5hYmxlOiB0cnVlLFxuICAgIGpzOiBcImh0dHBzOi8vbWlycm9ycy5zdXN0ZWNoLmVkdS5jbi9jZG5qcy9hamF4L2xpYnMvZmFuY3lhcHBzLXVpLzUuMC4zNi9mYW5jeWJveC9mYW5jeWJveC51bWQubWluLmpzXCIsXG4gICAgY3NzOiBcImh0dHBzOi8vbWlycm9ycy5zdXN0ZWNoLmVkdS5jbi9jZG5qcy9hamF4L2xpYnMvZmFuY3lhcHBzLXVpLzUuMC4zNi9mYW5jeWJveC9mYW5jeWJveC5taW4uY3NzXCIsXG4gIH0sXG4gIC8vIFx1NTkxNlx1OTRGRVx1NEUyRFx1OEY2Q1xuICBqdW1wUmVkaXJlY3Q6IHtcbiAgICBlbmFibGU6IHRydWUsXG4gICAgLy8gXHU2MzkyXHU5NjY0XHU3QzdCXHU1NDBEXG4gICAgZXhjbHVkZTogW1xuICAgICAgXCJjZi1mcmllbmRzLWxpbmtcIixcbiAgICAgIFwidXB5dW5cIixcbiAgICAgIFwiaWNwXCIsXG4gICAgICBcImF1dGhvclwiLFxuICAgICAgXCJyc3NcIixcbiAgICAgIFwiY2NcIixcbiAgICAgIFwicG93ZXJcIixcbiAgICAgIFwic29jaWFsLWxpbmtcIixcbiAgICAgIFwibGluay10ZXh0XCIsXG4gICAgICBcInRyYXZlbGxpbmdzXCIsXG4gICAgICBcInBvc3QtbGlua1wiLFxuICAgICAgXCJyZXBvcnRcIixcbiAgICAgIFwibW9yZS1saW5rXCIsXG4gICAgICBcInNraWxscy1pdGVtXCIsXG4gICAgICBcInJpZ2h0LW1lbnUtbGlua1wiLFxuICAgICAgXCJsaW5rLWNhcmRcIixcbiAgICBdLFxuICB9LFxuICAvLyBcdTdBRDlcdTcwQjlcdTdFREZcdThCQTFcbiAgdG9uZ2ppOiB7XG4gICAgXCI1MWxhXCI6IFwiXCIsXG4gIH0sXG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxoc3lcXFxcdjEyM3ZlLmdpdGh1Yi5pb1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxoc3lcXFxcdjEyM3ZlLmdpdGh1Yi5pb1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L2hzeS92MTIzdmUuZ2l0aHViLmlvLy52aXRlcHJlc3MvY29uZmlnLm1qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcbmltcG9ydCB7IGNyZWF0ZVJzc0ZpbGUgfSBmcm9tIFwiLi90aGVtZS91dGlscy9nZW5lcmF0ZVJTUy5tanNcIjtcbmltcG9ydCB7IHdpdGhQd2EgfSBmcm9tIFwiQHZpdGUtcHdhL3ZpdGVwcmVzc1wiO1xuaW1wb3J0IHtcbiAgZ2V0QWxsUG9zdHMsXG4gIGdldEFsbFR5cGUsXG4gIGdldEFsbENhdGVnb3JpZXMsXG4gIGdldEFsbEFyY2hpdmVzLFxufSBmcm9tIFwiLi90aGVtZS91dGlscy9nZXRQb3N0RGF0YS5tanNcIjtcbmltcG9ydCB7IGp1bXBSZWRpcmVjdCB9IGZyb20gXCIuL3RoZW1lL3V0aWxzL2NvbW1vblRvb2xzLm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGhlbWVDb25maWcgfSBmcm9tIFwiLi9pbml0Lm1qc1wiO1xuaW1wb3J0IG1hcmtkb3duQ29uZmlnIGZyb20gXCIuL3RoZW1lL3V0aWxzL21hcmtkb3duQ29uZmlnLm1qc1wiO1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG4vLyBcdTgzQjdcdTUzRDZcdTUxNjhcdTVDNDBcdTY1NzBcdTYzNkVcbmNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuLy8gXHU4M0I3XHU1M0Q2XHU0RTNCXHU5ODk4XHU5MTREXHU3RjZFXG5jb25zdCB0aGVtZUNvbmZpZyA9IGF3YWl0IGdldFRoZW1lQ29uZmlnKCk7XG5cbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbmV4cG9ydCBkZWZhdWx0IHdpdGhQd2EoXG4gIGRlZmluZUNvbmZpZyh7XG4gICAgdGl0bGU6IHRoZW1lQ29uZmlnLnNpdGVNZXRhLnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiB0aGVtZUNvbmZpZy5zaXRlTWV0YS5kZXNjcmlwdGlvbixcbiAgICBsYW5nOiB0aGVtZUNvbmZpZy5zaXRlTWV0YS5sYW5nLFxuICAgIC8vIFx1N0I4MFx1NkQwMVx1NzY4NCBVUkxcbiAgICBjbGVhblVybHM6IHRydWUsXG4gICAgLy8gXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XHU2MjMzXG4gICAgbGFzdFVwZGF0ZWQ6IHRydWUsXG4gICAgLy8gXHU0RTNCXHU5ODk4XG4gICAgYXBwZWFyYW5jZTogXCJkYXJrXCIsXG4gICAgLy8gSGVhZFxuICAgIGhlYWQ6IHRoZW1lQ29uZmlnLmluamVjdC5oZWFkZXIsXG4gICAgLy8gc2l0ZW1hcFxuICAgIHNpdGVtYXA6IHtcbiAgICAgIGhvc3RuYW1lOiB0aGVtZUNvbmZpZy5zaXRlTWV0YS5zaXRlLFxuICAgIH0sXG4gICAgLy8gXHU0RTNCXHU5ODk4XHU5MTREXHU3RjZFXG4gICAgdGhlbWVDb25maWc6IHtcbiAgICAgIC4uLnRoZW1lQ29uZmlnLFxuICAgICAgLy8gXHU1RkM1XHU4OTgxXHU2NTcwXHU2MzZFXG4gICAgICBwb3N0RGF0YTogcG9zdERhdGEsXG4gICAgICB0YWdzRGF0YTogZ2V0QWxsVHlwZShwb3N0RGF0YSksXG4gICAgICBjYXRlZ29yaWVzRGF0YTogZ2V0QWxsQ2F0ZWdvcmllcyhwb3N0RGF0YSksXG4gICAgICBhcmNoaXZlc0RhdGE6IGdldEFsbEFyY2hpdmVzKHBvc3REYXRhKSxcbiAgICB9LFxuICAgIC8vIG1hcmtkb3duXG4gICAgbWFya2Rvd246IHtcbiAgICAgIG1hdGg6IHRydWUsXG4gICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcbiAgICAgIHRvYzogeyBsZXZlbDogWzEsIDIsIDNdIH0sXG4gICAgICBpbWFnZToge1xuICAgICAgICBsYXp5TG9hZGluZzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjb25maWc6IChtZCkgPT4gbWFya2Rvd25Db25maWcobWQsIHRoZW1lQ29uZmlnKSxcbiAgICB9LFxuICAgIC8vIFx1Njc4NFx1NUVGQVx1NjM5Mlx1OTY2NFxuICAgIHNyY0V4Y2x1ZGU6IFtcIioqL1JFQURNRS5tZFwiLCBcIioqL1RPRE8ubWRcIl0sXG4gICAgLy8gdHJhbnNmb3JtSGVhZFxuICAgIHRyYW5zZm9ybVBhZ2VEYXRhOiBhc3luYyAocGFnZURhdGEpID0+IHtcbiAgICAgIC8vIGNhbm9uaWNhbCBVUkxcbiAgICAgIGNvbnN0IGNhbm9uaWNhbFVybCA9IGAke3RoZW1lQ29uZmlnLnNpdGVNZXRhLnNpdGV9LyR7cGFnZURhdGEucmVsYXRpdmVQYXRofWBcbiAgICAgICAgLnJlcGxhY2UoL2luZGV4XFwubWQkLywgXCJcIilcbiAgICAgICAgLnJlcGxhY2UoL1xcLm1kJC8sIFwiXCIpO1xuICAgICAgcGFnZURhdGEuZnJvbnRtYXR0ZXIuaGVhZCA/Pz0gW107XG4gICAgICBwYWdlRGF0YS5mcm9udG1hdHRlci5oZWFkLnB1c2goW1wibGlua1wiLCB7IHJlbDogXCJjYW5vbmljYWxcIiwgaHJlZjogY2Fub25pY2FsVXJsIH1dKTtcbiAgICB9LFxuICAgIC8vIHRyYW5zZm9ybUh0bWxcbiAgICB0cmFuc2Zvcm1IdG1sOiAoaHRtbCkgPT4ge1xuICAgICAgcmV0dXJuIGp1bXBSZWRpcmVjdChodG1sLCB0aGVtZUNvbmZpZyk7XG4gICAgfSxcbiAgICAvLyBidWlsZEVuZFxuICAgIGJ1aWxkRW5kOiBhc3luYyAoY29uZmlnKSA9PiB7XG4gICAgICBhd2FpdCBjcmVhdGVSc3NGaWxlKGNvbmZpZywgdGhlbWVDb25maWcpO1xuICAgIH0sXG4gICAgLy8gdml0ZVxuICAgIHZpdGU6IHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgICAgaW1wb3J0czogW1widnVlXCIsIFwidml0ZXByZXNzXCJdLFxuICAgICAgICAgIGR0czogXCIudml0ZXByZXNzL2F1dG8taW1wb3J0cy5kLnRzXCIsXG4gICAgICAgIH0pLFxuICAgICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgICBkaXJzOiBbXCIudml0ZXByZXNzL3RoZW1lL2NvbXBvbmVudHNcIiwgXCIudml0ZXByZXNzL3RoZW1lL3ZpZXdzXCJdLFxuICAgICAgICAgIGV4dGVuc2lvbnM6IFtcInZ1ZVwiLCBcIm1kXCJdLFxuICAgICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG4gICAgICAgICAgZHRzOiBcIi52aXRlcHJlc3MvY29tcG9uZW50cy5kLnRzXCIsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgLy8gXHU5MTREXHU3RjZFXHU4REVGXHU1Rjg0XHU1MjJCXHU1NDBEXG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi90aGVtZVwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjc3M6IHtcbiAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAgIHNjc3M6IHtcbiAgICAgICAgICAgIHNpbGVuY2VEZXByZWNhdGlvbnM6IFtcImxlZ2FjeS1qcy1hcGlcIl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBcdTY3MERcdTUyQTFcdTU2NjhcbiAgICAgIHNlcnZlcjoge1xuICAgICAgICBwb3J0OiA5ODc3LFxuICAgICAgfSxcbiAgICAgIC8vIFx1Njc4NFx1NUVGQVxuICAgICAgYnVpbGQ6IHtcbiAgICAgICAgbWluaWZ5OiBcInRlcnNlclwiLFxuICAgICAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgICAgIHB1cmVfZnVuY3M6IFtcImNvbnNvbGUubG9nXCJdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gUFdBXG4gICAgcHdhOiB7XG4gICAgICByZWdpc3RlclR5cGU6IFwiYXV0b1VwZGF0ZVwiLFxuICAgICAgc2VsZkRlc3Ryb3lpbmc6IHRydWUsXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIGNsaWVudHNDbGFpbTogdHJ1ZSxcbiAgICAgICAgc2tpcFdhaXRpbmc6IHRydWUsXG4gICAgICAgIGNsZWFudXBPdXRkYXRlZENhY2hlczogdHJ1ZSxcbiAgICAgICAgLy8gXHU4RDQ0XHU2RTkwXHU3RjEzXHU1QjU4XG4gICAgICAgIHJ1bnRpbWVDYWNoaW5nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGF0dGVybjogLyguKj8pXFwuKHdvZmYyfHdvZmZ8dHRmfGNzcykvLFxuICAgICAgICAgICAgaGFuZGxlcjogXCJDYWNoZUZpcnN0XCIsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogXCJmaWxlLWNhY2hlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGF0dGVybjogLyguKj8pXFwuKGljb3x3ZWJwfHBuZ3xqcGU/Z3xzdmd8Z2lmfGJtcHxwc2R8dGlmZnx0Z2F8ZXBzKS8sXG4gICAgICAgICAgICBoYW5kbGVyOiBcIkNhY2hlRmlyc3RcIixcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcImltYWdlLWNhY2hlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGF0dGVybjogL15odHRwczpcXC9cXC9jZG4yXFwuY29kZXNpZ25cXC5xcVxcLmNvbVxcLy4qL2ksXG4gICAgICAgICAgICBoYW5kbGVyOiBcIkNhY2hlRmlyc3RcIixcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcImljb25mb250LWNhY2hlXCIsXG4gICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiAxMCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAyLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xuICAgICAgICAgICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gXHU3RjEzXHU1QjU4XHU2NTg3XHU0RUY2XG4gICAgICAgIGdsb2JQYXR0ZXJuczogW1wiKiovKi57anMsY3NzLGh0bWwsaWNvLHBuZyxqcGcsanBlZyxnaWYsc3ZnLHdvZmYyLHR0Zn1cIl0sXG4gICAgICAgIC8vIFx1NjM5Mlx1OTY2NFx1OERFRlx1NUY4NFxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrRGVueWxpc3Q6IFsvXlxcL3NpdGVtYXAueG1sJC8sIC9eXFwvcnNzLnhtbCQvLCAvXlxcL3JvYm90cy50eHQkL10sXG4gICAgICB9LFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogdGhlbWVDb25maWcuc2l0ZU1ldGEudGl0bGUsXG4gICAgICAgIHNob3J0X25hbWU6IHRoZW1lQ29uZmlnLnNpdGVNZXRhLnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhlbWVDb25maWcuc2l0ZU1ldGEuZGVzY3JpcHRpb24sXG4gICAgICAgIGRpc3BsYXk6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICBzdGFydF91cmw6IFwiL1wiLFxuICAgICAgICB0aGVtZV9jb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6IFwiI2VmZWZlZlwiLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvaW1hZ2VzL2xvZ28vZmF2aWNvbi0zMngzMi53ZWJwXCIsXG4gICAgICAgICAgICBzaXplczogXCIzMngzMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS93ZWJwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ltYWdlcy9sb2dvL2Zhdmljb24tOTZ4OTYud2VicFwiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiOTZ4OTZcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2Uvd2VicFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9pbWFnZXMvbG9nby9mYXZpY29uLTI1NngyNTYud2VicFwiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMjU2eDI1NlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS93ZWJwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ltYWdlcy9sb2dvL2Zhdmljb24tNTEyeDUxMi53ZWJwXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3dlYnBcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbik7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXGhzeVxcXFx2MTIzdmUuZ2l0aHViLmlvXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXGhzeVxcXFx2MTIzdmUuZ2l0aHViLmlvXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcdXRpbHNcXFxcZ2VuZXJhdGVSU1MubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9oc3kvdjEyM3ZlLmdpdGh1Yi5pby8udml0ZXByZXNzL3RoZW1lL3V0aWxzL2dlbmVyYXRlUlNTLm1qc1wiO2ltcG9ydCB7IGNyZWF0ZUNvbnRlbnRMb2FkZXIgfSBmcm9tIFwidml0ZXByZXNzXCI7XG5pbXBvcnQgeyB3cml0ZUZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBGZWVkIH0gZnJvbSBcImZlZWRcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbi8qKlxuICogXHU3NTFGXHU2MjEwIFJTU1xuICogQHBhcmFtIHsqfSBjb25maWcgVml0ZVByZXNzIGJ1aWxkRW5kXG4gKiBAcGFyYW0geyp9IHRoZW1lQ29uZmlnIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlUnNzRmlsZSA9IGFzeW5jIChjb25maWcsIHRoZW1lQ29uZmlnKSA9PiB7XG4gIC8vIFx1OTE0RFx1N0Y2RVx1NEZFMVx1NjA2RlxuICBjb25zdCBzaXRlTWV0YSA9IHRoZW1lQ29uZmlnLnNpdGVNZXRhO1xuICBjb25zdCBob3N0TGluayA9IHNpdGVNZXRhLnNpdGU7XG4gIC8vIEZlZWQgXHU1QjlFXHU0RjhCXG4gIGNvbnN0IGZlZWQgPSBuZXcgRmVlZCh7XG4gICAgdGl0bGU6IHNpdGVNZXRhLnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBzaXRlTWV0YS5kZXNjcmlwdGlvbixcbiAgICBpZDogaG9zdExpbmssXG4gICAgbGluazogaG9zdExpbmssXG4gICAgbGFuZ3VhZ2U6IFwiemhcIixcbiAgICBnZW5lcmF0b3I6IHNpdGVNZXRhLmF1dGhvci5uYW1lLFxuICAgIGZhdmljb246IHNpdGVNZXRhLmF1dGhvci5jb3ZlcixcbiAgICBjb3B5cmlnaHQ6IGBDb3B5cmlnaHQgXHUwMEE5IDIwMjAtcHJlc2VudCAke3NpdGVNZXRhLmF1dGhvci5uYW1lfWAsXG4gICAgdXBkYXRlZDogbmV3IERhdGUoKSxcbiAgfSk7XG4gIC8vIFx1NTJBMFx1OEY3RFx1NjU4N1x1N0FFMFxuICBsZXQgcG9zdHMgPSBhd2FpdCBjcmVhdGVDb250ZW50TG9hZGVyKFwicG9zdHMvKiovKi5tZFwiLCB7XG4gICAgcmVuZGVyOiB0cnVlLFxuICB9KS5sb2FkKCk7XG4gIC8vIFx1NjVFNVx1NjcxRlx1OTY0RFx1NUU4Rlx1NjM5Mlx1NUU4RlxuICBwb3N0cyA9IHBvc3RzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGEuZnJvbnRtYXR0ZXIuZGF0ZSk7XG4gICAgY29uc3QgZGF0ZUIgPSBuZXcgRGF0ZShiLmZyb250bWF0dGVyLmRhdGUpO1xuICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xuICB9KTtcbiAgZm9yIChjb25zdCB7IHVybCwgZnJvbnRtYXR0ZXIgfSBvZiBwb3N0cykge1xuICAgIC8vIFx1NEVDNVx1NEZERFx1NzU1OVx1NjcwMFx1OEZEMSAxMCBcdTdCQzdcdTY1ODdcdTdBRTBcbiAgICBpZiAoZmVlZC5pdGVtcy5sZW5ndGggPj0gMTApIGJyZWFrO1xuICAgIC8vIFx1NjU4N1x1N0FFMFx1NEZFMVx1NjA2RlxuICAgIGxldCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSB9ID0gZnJvbnRtYXR0ZXI7XG4gICAgLy8gXHU1OTA0XHU3NDA2XHU2NUU1XHU2NzFGXG4gICAgaWYgKHR5cGVvZiBkYXRlID09PSBcInN0cmluZ1wiKSBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgLy8gXHU2REZCXHU1MkEwXHU2NTg3XHU3QUUwXG4gICAgZmVlZC5hZGRJdGVtKHtcbiAgICAgIHRpdGxlLFxuICAgICAgaWQ6IGAke2hvc3RMaW5rfSR7dXJsfWAsXG4gICAgICBsaW5rOiBgJHtob3N0TGlua30ke3VybH1gLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkYXRlLFxuICAgICAgLy8gdXBkYXRlZCxcbiAgICAgIGF1dGhvcjogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogc2l0ZU1ldGEuYXV0aG9yLm5hbWUsXG4gICAgICAgICAgZW1haWw6IHNpdGVNZXRhLmF1dGhvci5lbWFpbCxcbiAgICAgICAgICBsaW5rOiBzaXRlTWV0YS5hdXRob3IubGluayxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cbiAgLy8gXHU1MTk5XHU1MTY1XHU2NTg3XHU0RUY2XG4gIHdyaXRlRmlsZVN5bmMocGF0aC5qb2luKGNvbmZpZy5vdXREaXIsIFwicnNzLnhtbFwiKSwgZmVlZC5yc3MyKCksIFwidXRmLThcIik7XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxoc3lcXFxcdjEyM3ZlLmdpdGh1Yi5pb1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXHV0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxoc3lcXFxcdjEyM3ZlLmdpdGh1Yi5pb1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXHV0aWxzXFxcXGNvbW1vblRvb2xzLm1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovaHN5L3YxMjN2ZS5naXRodWIuaW8vLnZpdGVwcmVzcy90aGVtZS91dGlscy9jb21tb25Ub29scy5tanNcIjtpbXBvcnQgeyBsb2FkIH0gZnJvbSBcImNoZWVyaW9cIjtcblxuLyoqXG4gKiBcdTRFQ0VcdTY1ODdcdTRFRjZcdTU0MERcdTc1MUZcdTYyMTBcdTY1NzBcdTVCNTcgSURcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAtIFx1NjU4N1x1NEVGNlx1NTQwRFxuICogQHJldHVybnMge251bWJlcn0gLSBcdTc1MUZcdTYyMTBcdTc2ODRcdTY1NzBcdTVCNTdJRFxuICovXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVJZCA9IChmaWxlTmFtZSkgPT4ge1xuICAvLyBcdTVDMDZcdTY1ODdcdTRFRjZcdTU0MERcdThGNkNcdTYzNjJcdTRFM0FcdTU0QzhcdTVFMENcdTUwM0NcbiAgbGV0IGhhc2ggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVOYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIGZpbGVOYW1lLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgLy8gXHU1QzA2XHU1NEM4XHU1RTBDXHU1MDNDXHU4RjZDXHU2MzYyXHU0RTNBXHU2QjYzXHU2NTc0XHU2NTcwXG4gIGNvbnN0IG51bWVyaWNJZCA9IE1hdGguYWJzKGhhc2ggJSAxMDAwMDAwMDAwMCk7XG4gIHJldHVybiBudW1lcmljSWQ7XG59O1xuXG4vKipcbiAqIFx1NTJBOFx1NjAwMVx1NTJBMFx1OEY3RFx1ODExQVx1NjcyQ1xuICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIFx1ODExQVx1NjcyQyBVUkxcbiAqICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbiAtIFx1OTE0RFx1N0Y2RVxuICovXG5leHBvcnQgY29uc3QgbG9hZFNjcmlwdCA9IChzcmMsIG9wdGlvbiA9IHt9KSA9PiB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgfHwgIXNyYykgcmV0dXJuIGZhbHNlO1xuICAvLyBcdTgzQjdcdTUzRDZcdTkxNERcdTdGNkVcbiAgY29uc3QgeyBhc3luYyA9IGZhbHNlLCByZWxvYWQgPSBmYWxzZSwgY2FsbGJhY2sgfSA9IG9wdGlvbjtcbiAgLy8gXHU2OEMwXHU2N0U1XHU2NjJGXHU1NDI2XHU1REYyXHU3RUNGXHU1MkEwXHU4RjdEXHU4RkM3XHU2QjY0XHU4MTFBXHU2NzJDXG4gIGNvbnN0IGV4aXN0aW5nU2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyYz1cIiR7c3JjfVwiXWApO1xuICBpZiAoZXhpc3RpbmdTY3JpcHQpIHtcbiAgICBjb25zb2xlLmxvZyhcIlx1NURGMlx1NjcwOVx1OTFDRFx1NTkwRFx1ODExQVx1NjcyQ1wiKTtcbiAgICBpZiAoIXJlbG9hZCkge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sobnVsbCwgZXhpc3RpbmdTY3JpcHQpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBleGlzdGluZ1NjcmlwdC5yZW1vdmUoKTtcbiAgfVxuICAvLyBcdTUyMUJcdTVFRkFcdTRFMDBcdTRFMkFcdTY1QjBcdTc2ODRzY3JpcHRcdTY4MDdcdTdCN0VcdTVFNzZcdTUyQTBcdThGN0RcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgaWYgKGFzeW5jKSBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhudWxsLCBzY3JpcHQpO1xuICAgIH07XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhlcnJvcik7XG4gICAgfTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBcdTUyQThcdTYwMDFcdTUyQTBcdThGN0RcdTY4MzdcdTVGMEZcdTg4NjhcbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmIC0gXHU2ODM3XHU1RjBGXHU4ODY4IFVSTFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbiAtIFx1OTE0RFx1N0Y2RVxuICovXG5leHBvcnQgY29uc3QgbG9hZENTUyA9IChocmVmLCBvcHRpb24gPSB7fSkgPT4ge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiIHx8ICFocmVmKSByZXR1cm4gZmFsc2U7XG4gIC8vIFx1ODNCN1x1NTNENlx1OTE0RFx1N0Y2RVxuICBjb25zdCB7IHJlbG9hZCA9IGZhbHNlLCBjYWxsYmFjayB9ID0gb3B0aW9uO1xuICAvLyBcdTY4QzBcdTY3RTVcdTY2MkZcdTU0MjZcdTVERjJcdTdFQ0ZcdTUyQTBcdThGN0RcdThGQzdcdTZCNjRcdTY4MzdcdTVGMEZcdTg4NjhcbiAgY29uc3QgZXhpc3RpbmdMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tocmVmPVwiJHtocmVmfVwiXWApO1xuICBpZiAoZXhpc3RpbmdMaW5rKSB7XG4gICAgY29uc29sZS5sb2coXCJcdTVERjJcdTY3MDlcdTkxQ0RcdTU5MERcdTY4MzdcdTVGMEZcIik7XG4gICAgaWYgKCFyZWxvYWQpIHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG51bGwsIGV4aXN0aW5nTGluayk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGV4aXN0aW5nTGluay5yZW1vdmUoKTtcbiAgfVxuICAvLyBcdTUyMUJcdTVFRkFcdTY1QjBcdTc2ODRsaW5rXHU2ODA3XHU3QjdFXHU1RTc2XHU4QkJFXHU3RjZFXHU1QzVFXHU2MDI3XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgbGluay5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICBsaW5rLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgbGluay5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKGxpbmspO1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sobnVsbCwgbGluayk7XG4gICAgfTtcbiAgICBsaW5rLm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhlcnJvcik7XG4gICAgfTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICB9KTtcbn07XG5cbi8qKlxuICogXHU4REYzXHU4RjZDXHU0RTJEXHU4RjZDXHU5ODc1XG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbCAtIFx1OTg3NVx1OTc2Mlx1NTE4NVx1NUJCOVxuICogQHBhcmFtIHtib29sZWFufSBpc0RvbSAtIFx1NjYyRlx1NTQyNlx1NEUzQSBET00gXHU1QkY5XHU4QzYxXG4gKi9cbmV4cG9ydCBjb25zdCBqdW1wUmVkaXJlY3QgPSAoaHRtbCwgdGhlbWVDb25maWcsIGlzRG9tID0gZmFsc2UpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBcdTY2MkZcdTU0MjZcdTRFM0FcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcbiAgICBjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCI7XG4gICAgaWYgKGlzRGV2KSByZXR1cm4gZmFsc2U7XG4gICAgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XG4gICAgaWYgKCF0aGVtZUNvbmZpZy5qdW1wUmVkaXJlY3QuZW5hYmxlKSByZXR1cm4gaHRtbDtcbiAgICAvLyBcdTRFMkRcdThGNkNcdTk4NzVcdTU3MzBcdTU3NDBcbiAgICBjb25zdCByZWRpcmVjdFBhZ2UgPSBcIi9yZWRpcmVjdFwiO1xuICAgIC8vIFx1NjM5Mlx1OTY2NFx1NzY4NCBjbGFzc05hbWVcbiAgICBjb25zdCBleGNsdWRlQ2xhc3MgPSB0aGVtZUNvbmZpZy5qdW1wUmVkaXJlY3QuZXhjbHVkZTtcbiAgICBpZiAoaXNEb20pIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gXHU2MjQwXHU2NzA5XHU5NEZFXHU2M0E1XG4gICAgICBjb25zdCBhbGxMaW5rcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIildO1xuICAgICAgaWYgKGFsbExpbmtzPy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAgIGFsbExpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgLy8gXHU2OEMwXHU2N0U1XHU5NEZFXHU2M0E1XHU2NjJGXHU1NDI2XHU1MzA1XHU1NDJCIHRhcmdldD1cIl9ibGFua1wiIFx1NUM1RVx1NjAyN1xuICAgICAgICBpZiAobGluay5nZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIikgPT09IFwiX2JsYW5rXCIpIHtcbiAgICAgICAgICAvLyBcdTY4QzBcdTY3RTVcdTk0RkVcdTYzQTVcdTY2MkZcdTU0MjZcdTUzMDVcdTU0MkJcdTYzOTJcdTk2NjRcdTc2ODRcdTdDN0JcbiAgICAgICAgICBpZiAoZXhjbHVkZUNsYXNzLnNvbWUoKGNsYXNzTmFtZSkgPT4gbGluay5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbGlua0hyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgLy8gXHU1QjU4XHU1NzI4XHU5NEZFXHU2M0E1XHU0RTE0XHU5NzVFXHU0RTJEXHU4RjZDXHU5ODc1XG4gICAgICAgICAgaWYgKGxpbmtIcmVmICYmICFsaW5rSHJlZi5pbmNsdWRlcyhyZWRpcmVjdFBhZ2UpKSB7XG4gICAgICAgICAgICAvLyBCYXNlNjRcbiAgICAgICAgICAgIGNvbnN0IGVuY29kZWRIcmVmID0gYnRvYShsaW5rSHJlZik7XG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdExpbmsgPSBgJHtyZWRpcmVjdFBhZ2V9P3VybD0ke2VuY29kZWRIcmVmfWA7XG4gICAgICAgICAgICAvLyBcdTRGRERcdTVCNThcdTUzOUZcdTU5Q0JcdTk0RkVcdTYzQTVcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwib3JpZ2luYWwtaHJlZlwiLCBsaW5rSHJlZik7XG4gICAgICAgICAgICAvLyBcdTg5ODZcdTc2RDYgaHJlZlxuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHJlZGlyZWN0TGluayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgJCA9IGxvYWQoaHRtbCk7XG4gICAgICAvLyBcdTY2RkZcdTYzNjJcdTdCMjZcdTU0MDhcdTY3NjFcdTRFRjZcdTc2ODRcdTY4MDdcdTdCN0VcbiAgICAgICQoXCJhW3RhcmdldD0nX2JsYW5rJ11cIikuZWFjaCgoXywgZWwpID0+IHtcbiAgICAgICAgY29uc3QgJGEgPSAkKGVsKTtcbiAgICAgICAgY29uc3QgaHJlZiA9ICRhLmF0dHIoXCJocmVmXCIpO1xuICAgICAgICBjb25zdCBjbGFzc2VzU3RyID0gJGEuYXR0cihcImNsYXNzXCIpO1xuICAgICAgICBjb25zdCBpbm5lclRleHQgPSAkYS50ZXh0KCk7XG4gICAgICAgIC8vIFx1NjhDMFx1NjdFNVx1NjYyRlx1NTQyNlx1NTMwNVx1NTQyQlx1NjM5Mlx1OTY2NFx1NzY4NFx1N0M3QlxuICAgICAgICBjb25zdCBjbGFzc2VzID0gY2xhc3Nlc1N0ciA/IGNsYXNzZXNTdHIudHJpbSgpLnNwbGl0KFwiIFwiKSA6IFtdO1xuICAgICAgICBpZiAoZXhjbHVkZUNsYXNzLnNvbWUoKGNsYXNzTmFtZSkgPT4gY2xhc3Nlcy5pbmNsdWRlcyhjbGFzc05hbWUpKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBcdTVCNThcdTU3MjhcdTk0RkVcdTYzQTVcdTRFMTRcdTk3NUVcdTRFMkRcdThGNkNcdTk4NzVcbiAgICAgICAgaWYgKGhyZWYgJiYgIWhyZWYuaW5jbHVkZXMocmVkaXJlY3RQYWdlKSkge1xuICAgICAgICAgIC8vIEJhc2U2NCBcdTdGMTZcdTc4MDEgaHJlZlxuICAgICAgICAgIGNvbnN0IGVuY29kZWRIcmVmID0gQnVmZmVyLmZyb20oaHJlZiwgXCJ1dGYtOFwiKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbiAgICAgICAgICAvLyBcdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDlcdTVDNUVcdTYwMjdcbiAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gZWwuYXR0cmlicztcbiAgICAgICAgICAvLyBcdTkxQ0RcdTY3ODRcdTVDNUVcdTYwMjdcdTVCNTdcdTdCMjZcdTRFMzJcdUZGMENcdTRGRERcdTc1NTlcdTUzOUZcdTY3MDlcdTVDNUVcdTYwMjdcbiAgICAgICAgICBsZXQgYXR0cmlidXRlc1N0ciA9IFwiXCI7XG4gICAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGF0dHJpYnV0ZXMsIGF0dHIpKSB7XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXNTdHIgKz0gYCAke2F0dHJ9PVwiJHthdHRyaWJ1dGVzW2F0dHJdfVwiYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gXHU2Nzg0XHU5MDIwXHU2NUIwXHU2ODA3XHU3QjdFXG4gICAgICAgICAgY29uc3QgbmV3TGluayA9IGA8YSBocmVmPVwiJHtyZWRpcmVjdFBhZ2V9P3VybD0ke2VuY29kZWRIcmVmfVwiIG9yaWdpbmFsLWhyZWY9XCIke2hyZWZ9XCIgJHthdHRyaWJ1dGVzU3RyfT4ke2lubmVyVGV4dH08L2E+YDtcbiAgICAgICAgICAvLyBcdTY2RkZcdTYzNjJcdTUzOUZcdTY3MDlcdTY4MDdcdTdCN0VcbiAgICAgICAgICAkYS5yZXBsYWNlV2l0aChuZXdMaW5rKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gJC5odG1sKCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJcdTU5MDRcdTc0MDZcdTk0RkVcdTYzQTVcdTY1RjZcdTUxRkFcdTk1MTlcdUZGMUFcIiwgZXJyb3IpO1xuICB9XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxoc3lcXFxcdjEyM3ZlLmdpdGh1Yi5pb1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXHV0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxoc3lcXFxcdjEyM3ZlLmdpdGh1Yi5pb1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXHV0aWxzXFxcXGdldFBvc3REYXRhLm1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovaHN5L3YxMjN2ZS5naXRodWIuaW8vLnZpdGVwcmVzcy90aGVtZS91dGlscy9nZXRQb3N0RGF0YS5tanNcIjtpbXBvcnQgeyBnZW5lcmF0ZUlkIH0gZnJvbSBcIi4vY29tbW9uVG9vbHMubWpzXCI7XG5pbXBvcnQgeyBnbG9iYnkgfSBmcm9tIFwiZ2xvYmJ5XCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IGZzIGZyb20gXCJmcy1leHRyYVwiO1xuXG4vKipcbiAqIFx1ODNCN1x1NTNENiBwb3N0cyBcdTc2RUVcdTVGNTVcdTRFMEJcdTYyNDBcdTY3MDkgTWFya2Rvd24gXHU2NTg3XHU0RUY2XHU3Njg0XHU4REVGXHU1Rjg0XG4gKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59IC0gXHU2NTg3XHU0RUY2XHU4REVGXHU1Rjg0XHU2NTcwXHU3RUM0XG4gKi9cbmNvbnN0IGdldFBvc3RNREZpbGVQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBcdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDkgbWQgXHU2NTg3XHU0RUY2XHU4REVGXHU1Rjg0XG4gICAgbGV0IHBhdGhzID0gYXdhaXQgZ2xvYmJ5KFtcIioqLm1kXCJdLCB7XG4gICAgICBpZ25vcmU6IFtcIm5vZGVfbW9kdWxlc1wiLCBcInBhZ2VzXCIsIFwiLnZpdGVwcmVzc1wiLCBcIlJFQURNRS5tZFwiXSxcbiAgICB9KTtcbiAgICAvLyBcdThGQzdcdTZFRTRcdThERUZcdTVGODRcdUZGMENcdTUzRUFcdTUzMDVcdTYyRUMgJ3Bvc3RzJyBcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODRcdTY1ODdcdTRFRjZcbiAgICByZXR1cm4gcGF0aHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluY2x1ZGVzKFwicG9zdHMvXCIpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiXHU4M0I3XHU1M0Q2XHU2NTg3XHU3QUUwXHU4REVGXHU1Rjg0XHU2NUY2XHU1MUZBXHU5NTE5OlwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbi8qKlxuICogXHU1N0ZBXHU0RThFIGZyb250TWF0dGVyIFx1NjVFNVx1NjcxRlx1OTY0RFx1NUU4Rlx1NjM5Mlx1NUU4Rlx1NjU4N1x1N0FFMFxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgLSBcdTdCMkNcdTRFMDBcdTdCQzdcdTY1ODdcdTdBRTBcdTVCRjlcdThDNjFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoyIC0gXHU3QjJDXHU0RThDXHU3QkM3XHU2NTg3XHU3QUUwXHU1QkY5XHU4QzYxXG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIFx1NkJENFx1OEY4M1x1N0VEM1x1Njc5Q1xuICovXG5jb25zdCBjb21wYXJlRGF0ZSA9IChvYmoxLCBvYmoyKSA9PiB7XG4gIHJldHVybiBvYmoxLmRhdGUgPCBvYmoyLmRhdGUgPyAxIDogLTE7XG59O1xuY29uc3QgY29tcGFyZVBvc3RQcmlvcml0eSA9IChhLCBiKSA9PiB7XG4gIGlmIChhLnRvcCAmJiAhYi50b3ApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKCFhLnRvcCAmJiBiLnRvcCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiBjb21wYXJlRGF0ZShhLCBiKTtcbn07XG5cbi8qKlxuICogXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5XHU2NTg3XHU3QUUwXHVGRjBDXHU4QkZCXHU1M0Q2XHU1MTc2XHU1MTg1XHU1QkI5XHU1RTc2XHU4OUUzXHU2NzkwIGZyb250IG1hdHRlclxuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0W10+fSAtIFx1NjU4N1x1N0FFMFx1NUJGOVx1OEM2MVx1NjU3MFx1N0VDNFxuICovXG5leHBvcnQgY29uc3QgZ2V0QWxsUG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5IE1hcmtkb3duIFx1NjU4N1x1NEVGNlx1NzY4NFx1OERFRlx1NUY4NFxuICAgIGxldCBwYXRocyA9IGF3YWl0IGdldFBvc3RNREZpbGVQYXRocygpO1xuICAgIC8vIFx1OEJGQlx1NTNENlx1NTQ4Q1x1NTkwNFx1NzQwNlx1NkJDRlx1NEUyQSBNYXJrZG93biBcdTY1ODdcdTRFRjZcdTc2ODRcdTUxODVcdTVCQjlcbiAgICBsZXQgcG9zdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIHBhdGhzLm1hcChhc3luYyAoaXRlbSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFx1OEJGQlx1NTNENlx1NjU4N1x1NEVGNlx1NTE4NVx1NUJCOVxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmcy5yZWFkRmlsZShpdGVtLCBcInV0Zi04XCIpO1xuICAgICAgICAgIC8vIFx1NjU4N1x1NEVGNlx1NzY4NFx1NTE0M1x1NjU3MFx1NjM2RVxuICAgICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBmcy5zdGF0KGl0ZW0pO1xuICAgICAgICAgIC8vIFx1ODNCN1x1NTNENlx1NjU4N1x1NEVGNlx1NTIxQlx1NUVGQVx1NjVGNlx1OTVGNFx1NTQ4Q1x1NjcwMFx1NTQwRVx1NEZFRVx1NjUzOVx1NjVGNlx1OTVGNFxuICAgICAgICAgIGNvbnN0IHsgYmlydGh0aW1lTXMsIG10aW1lTXMgfSA9IHN0YXQ7XG4gICAgICAgICAgLy8gXHU4OUUzXHU2NzkwIGZyb250IG1hdHRlclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gbWF0dGVyKGNvbnRlbnQpO1xuICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGRhdGUsIGNhdGVnb3JpZXMsIGRlc2NyaXB0aW9uLCB0YWdzLCB0b3AsIGNvdmVyIH0gPSBkYXRhO1xuICAgICAgICAgIC8vIFx1OEJBMVx1N0I5N1x1NjU4N1x1N0FFMFx1NzY4NFx1OEZDN1x1NjcxRlx1NTkyOVx1NjU3MFxuICAgICAgICAgIGNvbnN0IGV4cGlyZWQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZGF0ZSkuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSxcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIFx1OEZENFx1NTZERVx1NjU4N1x1N0FFMFx1NUJGOVx1OEM2MVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZ2VuZXJhdGVJZChpdGVtKSxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSB8fCBcIlx1NjcyQVx1NTQ3RFx1NTQwRFx1NjU4N1x1N0FFMFwiLFxuICAgICAgICAgICAgZGF0ZTogZGF0ZSA/IG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKSA6IGJpcnRodGltZU1zLFxuICAgICAgICAgICAgbGFzdE1vZGlmaWVkOiBtdGltZU1zLFxuICAgICAgICAgICAgZXhwaXJlZCxcbiAgICAgICAgICAgIHRhZ3MsXG4gICAgICAgICAgICBjYXRlZ29yaWVzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZWd1bGFyUGF0aDogYC8ke2l0ZW0ucmVwbGFjZShcIi5tZFwiLCBcIi5odG1sXCIpfWAsXG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBjb3ZlcixcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFx1NTkwNFx1NzQwNlx1NjU4N1x1N0FFMFx1NjU4N1x1NEVGNiAnJHtpdGVtfScgXHU2NUY2XHU1MUZBXHU5NTE5OmAsIGVycm9yKTtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgICAvLyBcdTY4MzlcdTYzNkVcdTY1RTVcdTY3MUZcdTYzOTJcdTVFOEZcdTY1ODdcdTdBRTBcbiAgICBwb3N0cy5zb3J0KGNvbXBhcmVQb3N0UHJpb3JpdHkpO1xuICAgIHJldHVybiBwb3N0cztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5XHU2NTg3XHU3QUUwXHU2NUY2XHU1MUZBXHU5NTE5OlwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbi8qKlxuICogXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5XHU2ODA3XHU3QjdFXHU1M0NBXHU1MTc2XHU3NkY4XHU1MTczXHU2NTg3XHU3QUUwXHU3Njg0XHU3RURGXHU4QkExXHU0RkUxXHU2MDZGXG4gKiBAcGFyYW0ge09iamVjdFtdfSBwb3N0RGF0YSAtIFx1NTMwNVx1NTQyQlx1NjU4N1x1N0FFMFx1NEZFMVx1NjA2Rlx1NzY4NFx1NjU3MFx1N0VDNFxuICogQHJldHVybnMge09iamVjdH0gLSBcdTUzMDVcdTU0MkJcdTY4MDdcdTdCN0VcdTdFREZcdThCQTFcdTRGRTFcdTYwNkZcdTc2ODRcdTVCRjlcdThDNjFcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEFsbFR5cGUgPSAocG9zdERhdGEpID0+IHtcbiAgY29uc3QgdGFnRGF0YSA9IHt9O1xuICAvLyBcdTkwNERcdTUzODZcdTY1NzBcdTYzNkVcbiAgcG9zdERhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgLy8gXHU2OEMwXHU2N0U1XHU2NjJGXHU1NDI2XHU2NzA5IHRhZ3MgXHU1QzVFXHU2MDI3XG4gICAgaWYgKCFpdGVtLnRhZ3MgfHwgaXRlbS50YWdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIC8vIFx1NTkwNFx1NzQwNlx1NjgwN1x1N0I3RVxuICAgIGlmICh0eXBlb2YgaXRlbS50YWdzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBcdTRFRTVcdTkwMTdcdTUzRjdcdTUyMDZcdTk2OTRcbiAgICAgIGl0ZW0udGFncyA9IGl0ZW0udGFncy5zcGxpdChcIixcIik7XG4gICAgfVxuICAgIC8vIFx1OTA0RFx1NTM4Nlx1NjU4N1x1N0FFMFx1NzY4NFx1NkJDRlx1NEUyQVx1NjgwN1x1N0I3RVxuICAgIGl0ZW0udGFncy5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgIC8vIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjgwN1x1N0I3RVx1NzY4NFx1N0VERlx1OEJBMVx1NEZFMVx1NjA2Rlx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NEUwRFx1NUI1OFx1NTcyOFxuICAgICAgaWYgKCF0YWdEYXRhW3RhZ10pIHtcbiAgICAgICAgdGFnRGF0YVt0YWddID0ge1xuICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgIGFydGljbGVzOiBbaXRlbV0sXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTY4MDdcdTdCN0VcdTVERjJcdTVCNThcdTU3MjhcdUZGMENcdTUyMTlcdTU4OUVcdTUyQTBcdThCQTFcdTY1NzBcdTU0OENcdThCQjBcdTVGNTVcdTYyNDBcdTVDNUVcdTY1ODdcdTdBRTBcbiAgICAgICAgdGFnRGF0YVt0YWddLmNvdW50Kys7XG4gICAgICAgIHRhZ0RhdGFbdGFnXS5hcnRpY2xlcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHRhZ0RhdGE7XG59O1xuXG4vKipcbiAqIFx1ODNCN1x1NTNENlx1NjI0MFx1NjcwOVx1NTIwNlx1N0M3Qlx1NTNDQVx1NTE3Nlx1NzZGOFx1NTE3M1x1NjU4N1x1N0FFMFx1NzY4NFx1N0VERlx1OEJBMVx1NEZFMVx1NjA2RlxuICogQHBhcmFtIHtPYmplY3RbXX0gcG9zdERhdGEgLSBcdTUzMDVcdTU0MkJcdTY1ODdcdTdBRTBcdTRGRTFcdTYwNkZcdTc2ODRcdTY1NzBcdTdFQzRcbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gXHU1MzA1XHU1NDJCXHU2ODA3XHU3QjdFXHU3RURGXHU4QkExXHU0RkUxXHU2MDZGXHU3Njg0XHU1QkY5XHU4QzYxXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRBbGxDYXRlZ29yaWVzID0gKHBvc3REYXRhKSA9PiB7XG4gIGNvbnN0IGNhdERhdGEgPSB7fTtcbiAgLy8gXHU5MDREXHU1Mzg2XHU2NTcwXHU2MzZFXG4gIHBvc3REYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgIGlmICghaXRlbS5jYXRlZ29yaWVzIHx8IGl0ZW0uY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAvLyBcdTU5MDRcdTc0MDZcdTY4MDdcdTdCN0VcbiAgICBpZiAodHlwZW9mIGl0ZW0uY2F0ZWdvcmllcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gXHU0RUU1XHU5MDE3XHU1M0Y3XHU1MjA2XHU5Njk0XG4gICAgICBpdGVtLmNhdGVnb3JpZXMgPSBpdGVtLmNhdGVnb3JpZXMuc3BsaXQoXCIsXCIpO1xuICAgIH1cbiAgICAvLyBcdTkwNERcdTUzODZcdTY1ODdcdTdBRTBcdTc2ODRcdTZCQ0ZcdTRFMkFcdTY4MDdcdTdCN0VcbiAgICBpdGVtLmNhdGVnb3JpZXMuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICAvLyBcdTUyMURcdTU5Q0JcdTUzMTZcdTY4MDdcdTdCN0VcdTc2ODRcdTdFREZcdThCQTFcdTRGRTFcdTYwNkZcdUZGMENcdTU5ODJcdTY3OUNcdTRFMERcdTVCNThcdTU3MjhcbiAgICAgIGlmICghY2F0RGF0YVt0YWddKSB7XG4gICAgICAgIGNhdERhdGFbdGFnXSA9IHtcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICBhcnRpY2xlczogW2l0ZW1dLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gXHU1OTgyXHU2NzlDXHU2ODA3XHU3QjdFXHU1REYyXHU1QjU4XHU1NzI4XHVGRjBDXHU1MjE5XHU1ODlFXHU1MkEwXHU4QkExXHU2NTcwXHU1NDhDXHU4QkIwXHU1RjU1XHU2MjQwXHU1QzVFXHU2NTg3XHU3QUUwXG4gICAgICAgIGNhdERhdGFbdGFnXS5jb3VudCsrO1xuICAgICAgICBjYXREYXRhW3RhZ10uYXJ0aWNsZXMucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBjYXREYXRhO1xufTtcblxuLyoqXG4gKiBcdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDlcdTVFNzRcdTRFRkRcdTUzQ0FcdTUxNzZcdTc2RjhcdTUxNzNcdTY1ODdcdTdBRTBcdTc2ODRcdTdFREZcdThCQTFcdTRGRTFcdTYwNkZcbiAqIEBwYXJhbSB7T2JqZWN0W119IHBvc3REYXRhIC0gXHU1MzA1XHU1NDJCXHU2NTg3XHU3QUUwXHU0RkUxXHU2MDZGXHU3Njg0XHU2NTcwXHU3RUM0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSAtIFx1NTMwNVx1NTQyQlx1NUY1Mlx1Njg2M1x1N0VERlx1OEJBMVx1NEZFMVx1NjA2Rlx1NzY4NFx1NUJGOVx1OEM2MVxuICovXG5leHBvcnQgY29uc3QgZ2V0QWxsQXJjaGl2ZXMgPSAocG9zdERhdGEpID0+IHtcbiAgY29uc3QgYXJjaGl2ZURhdGEgPSB7fTtcbiAgLy8gXHU5MDREXHU1Mzg2XHU2NTcwXHU2MzZFXG4gIHBvc3REYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAvLyBcdTY4QzBcdTY3RTVcdTY2MkZcdTU0MjZcdTY3MDkgZGF0ZSBcdTVDNUVcdTYwMjdcbiAgICBpZiAoaXRlbS5kYXRlKSB7XG4gICAgICAvLyBcdTRFQ0VcdThERUZcdTVGODRcdTRFMkRcdTYzRDBcdTUzRDZcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgIGl0ZW0udGl0bGUgPSBpdGVtLnJlZ3VsYXJQYXRoLnNwbGl0KCcvJykucG9wKCkucmVwbGFjZSgnLmh0bWwnLCAnJyk7XG4gICAgICAvLyBcdTVDMDZcdTY1RjZcdTk1RjRcdTYyMzNcdThGNkNcdTYzNjJcdTRFM0FcdTY1RTVcdTY3MUZcdTVCRjlcdThDNjFcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShpdGVtLmRhdGUpO1xuICAgICAgLy8gXHU4M0I3XHU1M0Q2XHU1RTc0XHU0RUZEXG4gICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG4gICAgICAvLyBcdTUyMURcdTU5Q0JcdTUzMTZcdThCRTVcdTVFNzRcdTRFRkRcdTc2ODRcdTdFREZcdThCQTFcdTRGRTFcdTYwNkZcdUZGMENcdTU5ODJcdTY3OUNcdTRFMERcdTVCNThcdTU3MjhcbiAgICAgIGlmICghYXJjaGl2ZURhdGFbeWVhcl0pIHtcbiAgICAgICAgYXJjaGl2ZURhdGFbeWVhcl0gPSB7XG4gICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgYXJ0aWNsZXM6IFtpdGVtXSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NUU3NFx1NEVGRFx1NURGMlx1NUI1OFx1NTcyOFx1RkYwQ1x1NTIxOVx1NTg5RVx1NTJBMFx1OEJBMVx1NjU3MFx1NTQ4Q1x1OEJCMFx1NUY1NVx1NjI0MFx1NUM1RVx1NjU4N1x1N0FFMFxuICAgICAgICBhcmNoaXZlRGF0YVt5ZWFyXS5jb3VudCsrO1xuICAgICAgICBhcmNoaXZlRGF0YVt5ZWFyXS5hcnRpY2xlcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIC8vIFx1NjNEMFx1NTNENlx1NUU3NFx1NEVGRFx1NUU3Nlx1NjMwOVx1OTY0RFx1NUU4Rlx1NjM5Mlx1NUU4RlxuICBjb25zdCBzb3J0ZWRZZWFycyA9IE9iamVjdC5rZXlzKGFyY2hpdmVEYXRhKS5zb3J0KChhLCBiKSA9PiBwYXJzZUludChiKSAtIHBhcnNlSW50KGEpKTtcbiAgcmV0dXJuIHsgZGF0YTogYXJjaGl2ZURhdGEsIHllYXI6IHNvcnRlZFllYXJzIH07XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxoc3lcXFxcdjEyM3ZlLmdpdGh1Yi5pb1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXGFzc2V0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcaHN5XFxcXHYxMjN2ZS5naXRodWIuaW9cXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxhc3NldHNcXFxcdGhlbWVDb25maWcubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9oc3kvdjEyM3ZlLmdpdGh1Yi5pby8udml0ZXByZXNzL3RoZW1lL2Fzc2V0cy90aGVtZUNvbmZpZy5tanNcIjsvLyBcdTRFM0JcdTk4OThcdTkxNERcdTdGNkVcbmV4cG9ydCBjb25zdCB0aGVtZUNvbmZpZyA9IHtcbiAgLy8gXHU3QUQ5XHU3MEI5XHU0RkUxXHU2MDZGXG4gIHNpdGVNZXRhOiB7XG4gICAgLy8gXHU3QUQ5XHU3MEI5XHU2ODA3XHU5ODk4XG4gICAgdGl0bGU6IFwiQ3VydmVcIixcbiAgICAvLyBcdTdBRDlcdTcwQjlcdTYzQ0ZcdThGRjBcbiAgICBkZXNjcmlwdGlvbjogXCJIZWxsbyBXb3JsZFwiLFxuICAgIC8vIFx1N0FEOVx1NzBCOWxvZ29cbiAgICBsb2dvOiBcIi9pbWFnZXMvbG9nby9sb2dvLndlYnBcIixcbiAgICAvLyBcdTdBRDlcdTcwQjlcdTU3MzBcdTU3NDBcbiAgICBzaXRlOiBcImh0dHBzOi8vYmxvZy5pbXN5eS50b3BcIixcbiAgICAvLyBcdThCRURcdThBMDBcbiAgICBsYW5nOiBcInpoLUNOXCIsXG4gICAgLy8gXHU0RjVDXHU4MDA1XG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiBcIkFkbWluXCIsXG4gICAgICBjb3ZlcjogXCIvaW1hZ2VzL2xvZ28vbG9nby53ZWJwXCIsXG4gICAgICBlbWFpbDogXCIxMTQ1MTRAZ21haWwuY29tXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lmltc3l5LnRvcFwiLFxuICAgIH0sXG4gIH0sXG4gIC8vIFx1NTkwN1x1Njg0OFx1NEZFMVx1NjA2RlxuICBpY3A6IFwiXHU4NDBDSUNQXHU1OTA3MTE0NTE0XHU1M0Y3XCIsXG4gIC8vIFx1NUVGQVx1N0FEOVx1NjVFNVx1NjcxRlxuICBzaW5jZTogXCIyMDIwLTA3LTI4XCIsXG4gIC8vIFx1NkJDRlx1OTg3NVx1NjU4N1x1N0FFMFx1NjU3MFx1NjM2RVxuICBwb3N0U2l6ZTogOCxcbiAgLy8gaW5qZWN0XG4gIGluamVjdDoge1xuICAgIC8vIFx1NTkzNFx1OTBFOFxuICAgIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi96aC9yZWZlcmVuY2Uvc2l0ZS1jb25maWcjaGVhZFxuICAgIGhlYWRlcjogW1xuICAgICAgLy8gZmF2aWNvblxuICAgICAgW1wibGlua1wiLCB7IHJlbDogXCJpY29uXCIsIGhyZWY6IFwiL2Zhdmljb24uaWNvXCIgfV0sXG4gICAgICAvLyBSU1NcbiAgICAgIFtcbiAgICAgICAgXCJsaW5rXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWw6IFwiYWx0ZXJuYXRlXCIsXG4gICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9yc3MreG1sXCIsXG4gICAgICAgICAgdGl0bGU6IFwiUlNTXCIsXG4gICAgICAgICAgaHJlZjogXCJodHRwczovL2Jsb2cuaW1zeXkudG9wL3Jzcy54bWxcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICAvLyBcdTk4ODRcdThGN0QgQ0ROXG4gICAgICBbXG4gICAgICAgIFwibGlua1wiLFxuICAgICAgICB7XG4gICAgICAgICAgY3Jvc3NvcmlnaW46IFwiXCIsXG4gICAgICAgICAgcmVsOiBcInByZWNvbm5lY3RcIixcbiAgICAgICAgICBocmVmOiBcImh0dHBzOi8vczEuaGRzbGIuY29tXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBcImxpbmtcIixcbiAgICAgICAge1xuICAgICAgICAgIGNyb3Nzb3JpZ2luOiBcIlwiLFxuICAgICAgICAgIHJlbDogXCJwcmVjb25uZWN0XCIsXG4gICAgICAgICAgaHJlZjogXCJodHRwczovL21pcnJvcnMuc3VzdGVjaC5lZHUuY25cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICAvLyBIYXJtb255T1MgZm9udFxuICAgICAgW1xuICAgICAgICBcImxpbmtcIixcbiAgICAgICAge1xuICAgICAgICAgIGNyb3Nzb3JpZ2luOiBcImFub255bW91c1wiLFxuICAgICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgICAgaHJlZjogXCJodHRwczovL3MxLmhkc2xiLmNvbS9iZnMvc3RhdGljL2ppbmtlbGEvbG9uZy9mb250L3JlZ3VsYXIuY3NzXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBcImxpbmtcIixcbiAgICAgICAge1xuICAgICAgICAgIGNyb3Nzb3JpZ2luOiBcImFub255bW91c1wiLFxuICAgICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgICAgaHJlZjogXCJodHRwczovL21pcnJvcnMuc3VzdGVjaC5lZHUuY24vY2RuanMvYWpheC9saWJzL2x4Z3ctd2Vua2FpLXNjcmVlbi13ZWJmb250LzEuNy4wL3N0eWxlLmNzc1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIC8vIGljb25mb250XG4gICAgICBbXG4gICAgICAgIFwibGlua1wiLFxuICAgICAgICB7XG4gICAgICAgICAgY3Jvc3NvcmlnaW46IFwiYW5vbnltb3VzXCIsXG4gICAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgICBocmVmOiBcImh0dHBzOi8vY2RuMi5jb2Rlc2lnbi5xcS5jb20vaWNvbnMvZzVacEVneDN6NFZPNmoyL2xhdGVzdC9pY29uZm9udC5jc3NcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICAvLyBFbWJlZCBjb2RlXG4gICAgICBbXCJsaW5rXCIsIHsgcmVsOiBcInByZWNvbm5lY3RcIiwgaHJlZjogXCJodHRwczovL3VzZS5zZXZlbmNkbi5jb21cIiB9XSxcbiAgICAgIFtcImxpbmtcIiwgeyByZWw6IFwicHJlY29ubmVjdFwiLCBocmVmOiBcImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiwgY3Jvc3NvcmlnaW46IFwiXCIgfV0sXG4gICAgICBbXG4gICAgICAgIFwibGlua1wiLFxuICAgICAgICB7XG4gICAgICAgICAgY3Jvc3NvcmlnaW46IFwiYW5vbnltb3VzXCIsXG4gICAgICAgICAgaHJlZjogXCJodHRwczovL3VzZS5zZXZlbmNkbi5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRAMzAwLi43MDAmZGlzcGxheT1zd2FwXCIsXG4gICAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICAvLyBcdTk4ODRcdThGN0QgRG9jU2VhcmNoXG4gICAgICBbXG4gICAgICAgIFwibGlua1wiLFxuICAgICAgICB7XG4gICAgICAgICAgaHJlZjogXCJodHRwczovL1g1RUJFWkI1M0ktZHNuLmFsZ29saWEubmV0XCIsXG4gICAgICAgICAgcmVsOiBcInByZWNvbm5lY3RcIixcbiAgICAgICAgICBjcm9zc29yaWdpbjogXCJcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgXSxcbiAgfSxcbiAgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXHU4M0RDXHU1MzU1XG4gIG5hdjogW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU2NTg3XHU1RTkzXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiXHU2NTg3XHU3QUUwXHU1MjE3XHU4ODY4XCIsIGxpbms6IFwiL3BhZ2VzL2FyY2hpdmVzXCIsIGljb246IFwiYXJ0aWNsZVwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTUxNjhcdTkwRThcdTUyMDZcdTdDN0JcIiwgbGluazogXCIvcGFnZXMvY2F0ZWdvcmllc1wiLCBpY29uOiBcImZvbGRlclwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTUxNjhcdTkwRThcdTY4MDdcdTdCN0VcIiwgbGluazogXCIvcGFnZXMvdGFnc1wiLCBpY29uOiBcImhhc2h0YWdcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU0RTEzXHU2ODBGXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiXHU2MjgwXHU2NzJGXHU1MjA2XHU0RUFCXCIsIGxpbms6IFwiL3BhZ2VzL2NhdGVnb3JpZXMvXHU2MjgwXHU2NzJGXHU1MjA2XHU0RUFCXCIsIGljb246IFwidGVjaG5pY2FsXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlx1NjIxMVx1NzY4NFx1OTg3OVx1NzZFRVwiLCBsaW5rOiBcIi9wYWdlcy9wcm9qZWN0XCIsIGljb246IFwiY29kZVwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTY1NDhcdTczODdcdTVERTVcdTUxNzdcIiwgbGluazogXCIvcGFnZXMvdG9vbHNcIiwgaWNvbjogXCJ0b29sc1wiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTUzQ0JcdTk0RkVcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogXCJcdTUzQ0JcdTk0RkVcdTlDN0NcdTU4NThcIiwgbGluazogXCIvcGFnZXMvZnJpZW5kc1wiLCBpY29uOiBcImZpc2hcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHU1M0NCXHU2MEM1XHU5NEZFXHU2M0E1XCIsIGxpbms6IFwiL3BhZ2VzL2xpbmtcIiwgaWNvbjogXCJwZW9wbGVcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU2MjExXHU3Njg0XCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiXHU3NTQ1XHU2MjQwXHU2QjMyXHU4QTAwXCIsIGxpbms6IFwiL3BhZ2VzL21lc3NhZ2VcIiwgaWNvbjogXCJjaGF0XCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlx1ODFGNFx1OEMyMlx1NTQwRFx1NTM1NVwiLCBsaW5rOiBcIi9wYWdlcy90aGFua3NcIiwgaWNvbjogXCJyZXdhcmRcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHU1MTczXHU0RThFXHU2NzJDXHU3QUQ5XCIsIGxpbms6IFwiL3BhZ2VzL2Fib3V0XCIsIGljb246IFwiY29udGFjdHNcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcdTgzRENcdTUzNTUgLSBcdTVERTZcdTRGQTdcbiAgbmF2TW9yZTogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiXHU1MzVBXHU1QkEyXCIsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcIi9pbWFnZXMvbG9nby9sb2dvLndlYnBcIixcbiAgICAgICAgICBuYW1lOiBcIlx1NEUzQlx1N0FEOVwiLFxuICAgICAgICAgIHVybDogXCIvXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcIi9pbWFnZXMvbG9nby9sb2dvLndlYnBcIixcbiAgICAgICAgICBuYW1lOiBcIlx1NTM1QVx1NUJBMlx1OTU1Q1x1NTBDRlx1N0FEOVwiLFxuICAgICAgICAgIHVybDogXCJodHRwczovL2Jsb2ctYmFja3VwLmltc3l5LnRvcC9cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlx1NjcwRFx1NTJBMVwiLFxuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJodHRwczovL3BpYy5lZmVmZWUuY24vdXBsb2Fkcy8yMDI0LzA0LzA4LzY2MTM0NjUzNTgwNzcucG5nXCIsXG4gICAgICAgICAgbmFtZTogXCJcdThENzdcdTU5Q0JcdTk4NzVcIixcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9uYXYuaW1zeXkudG9wL1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJodHRwczovL3BpYy5lZmVmZWUuY24vdXBsb2Fkcy8yMDI0LzA0LzA4LzY2MTM0NmQ0MThhZDcucG5nXCIsXG4gICAgICAgICAgbmFtZTogXCJcdTRFQ0FcdTY1RTVcdTcwRURcdTY5OUNcIixcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9ob3QuaW1zeXkudG9wL1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJodHRwczovL3BpYy5lZmVmZWUuY24vdXBsb2Fkcy8yMDI0LzA0LzA4LzY2MTM0NzIyNTg2ZmEucG5nXCIsXG4gICAgICAgICAgbmFtZTogXCJcdTdBRDlcdTcwQjlcdTc2RDFcdTZENEJcIixcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdGF0dXMuaW1zeXkudG9wL1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiXHU5ODc5XHU3NkVFXCIsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcIi9pbWFnZXMvbG9nby9sb2dvLndlYnBcIixcbiAgICAgICAgICBuYW1lOiBcIkN1cnZlXCIsXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pbXN5eS92aXRlcHJlc3MtdGhlbWUtY3VydmVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IFwiaHR0cHM6Ly9waWMuZWZlZmVlLmNuL3VwbG9hZHMvMjAyNC8wNC8wNy82NjEyNGY1ZmM2M2M4LnBuZ1wiLFxuICAgICAgICAgIG5hbWU6IFwiU1BsYXllclwiLFxuICAgICAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vaW1zeXkvU1BsYXllclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJodHRwczovL3BpYy5lZmVmZWUuY24vdXBsb2Fkcy8yMDI0LzA0LzA4LzY2MTM0NjUzNTgwNzcucG5nXCIsXG4gICAgICAgICAgbmFtZTogXCJTbmF2aWdhdGlvblwiLFxuICAgICAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vaW1zeXkvU1BsYXllclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCIvaW1hZ2VzL2xvZ28vbG9nby53ZWJwXCIsXG4gICAgICAgICAgbmFtZTogXCJIb21lXCIsXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pbXN5eS9ob21lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiBcImh0dHBzOi8vcGljLmVmZWZlZS5jbi91cGxvYWRzLzIwMjQvMDQvMDgvNjYxMzQ2ZDQxOGFkNy5wbmdcIixcbiAgICAgICAgICBuYW1lOiBcIkRhaWx5SG90QXBpXCIsXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pbXN5eS9EYWlseUhvdEFwaVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJodHRwczovL3BpYy5lZmVmZWUuY24vdXBsb2Fkcy8yMDI0LzA0LzA4LzY2MTM0NzIyNTg2ZmEucG5nXCIsXG4gICAgICAgICAgbmFtZTogXCJzaXRlLXN0YXR1c1wiLFxuICAgICAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vaW1zeXkvc2l0ZS1zdGF0dXNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgLy8gXHU1QzAxXHU5NzYyXHU5MTREXHU3RjZFXG4gIGNvdmVyOiB7XG4gICAgLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGXHU1M0NDXHU2ODBGXHU1RTAzXHU1QzQwXG4gICAgdHdvQ29sdW1uczogZmFsc2UsXG4gICAgLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGXHU1QzAxXHU5NzYyXHU2NjNFXHU3OTNBXG4gICAgc2hvd0NvdmVyOiB7XG4gICAgICAvLyBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkZcdTVDMDFcdTk3NjJcdTY2M0VcdTc5M0EgXHU2NTg3XHU3QUUwXHU0RTBEXHU4QkJFXHU3RjZFY292ZXJcdTVDMDFcdTk3NjJcdTRGMUFcdTY2M0VcdTc5M0FcdTVGMDJcdTVFMzhcdUZGMENcdTUzRUZcdTRFRTVcdThCQkVcdTdGNkVcdTRFMEJcdTY1QjlcdTlFRDhcdThCQTRcdTVDMDFcdTk3NjJcbiAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgIC8vIFx1NUMwMVx1OTc2Mlx1NUUwM1x1NUM0MFx1NjVCOVx1NUYwRjogbGVmdCB8IHJpZ2h0IHwgYm90aFxuICAgICAgY292ZXJMYXlvdXQ6ICdib3RoJyxcbiAgICAgIC8vIFx1OUVEOFx1OEJBNFx1NUMwMVx1OTc2MihcdTk2OEZcdTY3M0FcdTVDNTVcdTc5M0EpXG4gICAgICBkZWZhdWx0Q292ZXI6IFtcbiAgICAgICAgJ2h0dHBzOi8vZXhhbXBsZS5jb20vMS5hdmlmJyxcbiAgICAgICAgJ2h0dHBzOi8vZXhhbXBsZS5jb20vMi5hdmlmJyxcbiAgICAgICAgJ2h0dHBzOi8vZXhhbXBsZS5jb20vMy5hdmlmJ1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgLy8gXHU5ODc1XHU4MTFBXHU0RkUxXHU2MDZGXG4gIGZvb3Rlcjoge1xuICAgIC8vIFx1NzkzRVx1NEVBNFx1OTRGRVx1NjNBNVx1RkYwOFx1OEJGN1x1Nzg2RVx1NEZERFx1NEUzQVx1NTA3Nlx1NjU3MFx1NEUyQVx1RkYwOVxuICAgIHNvY2lhbDogW1xuICAgICAge1xuICAgICAgICBpY29uOiBcImVtYWlsXCIsXG4gICAgICAgIGxpbms6IFwibWFpbHRvOm9uZUBpbXN5eS50b3BcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZ2l0aHViXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9pbXN5eS9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwidGVsZWdyYW1cIixcbiAgICAgICAgbGluazogXCJodHRwczovL3QubWUvYm90dG9tX3VzZXJcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiYmlsaWJpbGlcIixcbiAgICAgICAgbGluazogXCJodHRwczovL3NwYWNlLmJpbGliaWxpLmNvbS85ODU0NDE0MlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJxcVwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vcmVzLmFiZWltLmNuL2FwaS9xcS8/cXE9MTUzOTI1MDM1MlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJ0d2l0dGVyLXhcIixcbiAgICAgICAgbGluazogXCJodHRwczovL3R3aXR0ZXIuY29tL2lpbW1zeXlcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICAvLyBzaXRlbWFwXG4gICAgc2l0ZW1hcDogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NTM1QVx1NUJBMlwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogXCJcdThGRDFcdTY3MUZcdTY1ODdcdTdBRTBcIiwgbGluazogXCIvXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1MTY4XHU5MEU4XHU1MjA2XHU3QzdCXCIsIGxpbms6IFwiL3BhZ2VzL2NhdGVnb3JpZXNcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTUxNjhcdTkwRThcdTY4MDdcdTdCN0VcIiwgbGluazogXCIvcGFnZXMvdGFnc1wiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjU4N1x1N0FFMFx1NUY1Mlx1Njg2M1wiLCBsaW5rOiBcIi9wYWdlcy9hcmNoaXZlc1wiLCBuZXdUYWI6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU5ODc5XHU3NkVFXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIkhvbWVcIiwgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vaW1zeXkvaG9tZS9cIiwgbmV3VGFiOiB0cnVlIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlNQbGF5ZXJcIiwgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vaW1zeXkvU1BsYXllci9cIiwgbmV3VGFiOiB0cnVlIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIkRhaWx5SG90QXBpXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ltc3l5L0RhaWx5SG90QXBpL1wiLCBuZXdUYWI6IHRydWUgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiU25hdmlnYXRpb25cIiwgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vaW1zeXkvU25hdmlnYXRpb24vXCIsIG5ld1RhYjogdHJ1ZSB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTRFMTNcdTY4MEZcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2MjgwXHU2NzJGXHU1MjA2XHU0RUFCXCIsIGxpbms6IFwiL3BhZ2VzL2NhdGVnb3JpZXMvXHU2MjgwXHU2NzJGXHU1MjA2XHU0RUFCXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2MjExXHU3Njg0XHU5ODc5XHU3NkVFXCIsIGxpbms6IFwiL3BhZ2VzL3Byb2plY3RcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTY1NDhcdTczODdcdTVERTVcdTUxNzdcIiwgbGluazogXCIvcGFnZXMvdG9vbHNcIiB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTk4NzVcdTk3NjJcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiXHU3NTQ1XHU2MjQwXHU2QjMyXHU4QTAwXCIsIGxpbms6IFwiL3BhZ2VzL21lc3NhZ2VcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTUxNzNcdTRFOEVcdTY3MkNcdTdBRDlcIiwgbGluazogXCIvcGFnZXMvYWJvdXRcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTk2OTBcdTc5QzFcdTY1M0ZcdTdCNTZcIiwgbGluazogXCIvcGFnZXMvcHJpdmFjeVwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NzI0OFx1Njc0M1x1NTM0Rlx1OEJBRVwiLCBsaW5rOiBcIi9wYWdlcy9jY1wiIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NjcwRFx1NTJBMVwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogXCJcdTdBRDlcdTcwQjlcdTcyQjZcdTYwMDFcIiwgbGluazogXCJodHRwczovL3N0YXR1cy5pbXN5eS50b3AvXCIsIG5ld1RhYjogdHJ1ZSB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTRFMDBcdTRFMkFcdTVCRkNcdTgyMkFcIiwgbGluazogXCJodHRwczovL25hdi5pbXN5eS50b3AvXCIsIG5ld1RhYjogdHJ1ZSB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTdBRDlcdTcwQjlcdThCQTJcdTk2MDVcIiwgbGluazogXCJodHRwczovL2Jsb2cuaW1zeXkudG9wL3Jzcy54bWxcIiwgbmV3VGFiOiB0cnVlIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJcdTUzQ0RcdTk5ODhcdTYyOTVcdThCQzlcIixcbiAgICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly9lcW54d2VpbWtyNS5mZWlzaHUuY24vc2hhcmUvYmFzZS9mb3JtL3NocmNuQ1hDUG14Q0tLSllJM1JLVWZlZkpyZVwiLFxuICAgICAgICAgICAgbmV3VGFiOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIC8vIFx1OEJDNFx1OEJCQVxuICBjb21tZW50OiB7XG4gICAgZW5hYmxlOiBmYWxzZSxcbiAgICAvLyBcdThCQzRcdThCQkFcdTdDRkJcdTdFREZcdTkwMDlcdTYyRTlcbiAgICAvLyBhcnRhbGsgLyB0d2lrb29cbiAgICB0eXBlOiBcImFydGFsa1wiLFxuICAgIC8vIGFydGFsa1xuICAgIC8vIGh0dHBzOi8vYXJ0YWxrLmpzLm9yZy9cbiAgICBhcnRhbGs6IHtcbiAgICAgIHNpdGU6IFwiXCIsXG4gICAgICBzZXJ2ZXI6IFwiXCIsXG4gICAgfSxcbiAgICAvLyB0d2lrb29cbiAgICAvLyBodHRwczovL3R3aWtvby5qcy5vcmcvXG4gICAgdHdpa29vOiB7XG4gICAgICAvLyBcdTVGQzVcdTU4NkJcdUZGMENcdTgyRTVcdTRFMERcdTYwRjNcdTRGN0ZcdTc1MjggQ0ROXHVGRjBDXHU1M0VGXHU0RUU1XHU0RjdGXHU3NTI4IHBucG0gYWRkIHR3aWtvbyBcdTVCODlcdTg4QzVcdTVFNzZcdTVGMTVcdTUxNjVcbiAgICAgIGpzOiBcImh0dHBzOi8vbWlycm9ycy5zdXN0ZWNoLmVkdS5jbi9jZG5qcy9hamF4L2xpYnMvdHdpa29vLzEuNi4zOS90d2lrb28uYWxsLm1pbi5qc1wiLFxuICAgICAgZW52SWQ6IFwiXCIsXG4gICAgICAvLyBcdTczQUZcdTU4ODNcdTU3MzBcdTU3REZcdUZGMENcdTlFRDhcdThCQTRcdTRFM0EgYXAtc2hhbmdoYWlcdUZGMENcdTgxN0VcdThCQUZcdTRFOTFcdTczQUZcdTU4ODNcdTU4NkIgYXAtc2hhbmdoYWkgXHU2MjE2IGFwLWd1YW5nemhvdVx1RkYxQlZlcmNlbCBcdTczQUZcdTU4ODNcdTRFMERcdTU4NkJcbiAgICAgIHJlZ2lvbjogXCJhcC1zaGFuZ2hhaVwiLFxuICAgICAgbGFuZzogXCJ6aC1DTlwiLFxuICAgIH0sXG4gIH0sXG4gIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlxuICBhc2lkZToge1xuICAgIC8vIFx1N0FEOVx1NzBCOVx1N0I4MFx1NEVDQlxuICAgIGhlbGxvOiB7XG4gICAgICBlbmFibGU6IHRydWUsXG4gICAgICB0ZXh0OiBcIlx1OEZEOVx1OTFDQ1x1NjcwOVx1NTE3M1x1NEU4RTxzdHJvbmc+XHU1RjAwXHU1M0QxPC9zdHJvbmc+XHU3NkY4XHU1MTczXHU3Njg0XHU5NUVFXHU5ODk4XHU1NDhDXHU3NzBCXHU2Q0Q1XHVGRjBDXHU0RTVGXHU0RjFBXHU2NzA5XHU0RTAwXHU0RTlCPHN0cm9uZz5cdTU5NDdcdTYyODBcdTZERUJcdTVERTc8L3N0cm9uZz5cdTc2ODRcdTUyMDZcdTRFQUJcdUZGMENcdTUxNzZcdTRFMkRcdTU5MjdcdTkwRThcdTUyMDZcdTUxODVcdTVCQjlcdTRGMUFcdTRGQTdcdTkxQ0RcdTRFOEU8c3Ryb25nPlx1NTI0RFx1N0FFRlx1NUYwMFx1NTNEMTwvc3Ryb25nPlx1MzAwMlx1NUUwQ1x1NjcxQlx1NEY2MFx1NTNFRlx1NEVFNVx1NTcyOFx1OEZEOVx1OTFDQ1x1NjI3RVx1NTIzMFx1NUJGOVx1NEY2MFx1NjcwOVx1NzUyOFx1NzY4NFx1NzdFNVx1OEJDNlx1NTQ4Q1x1NjU1OVx1N0EwQlx1MzAwMlwiLFxuICAgIH0sXG4gICAgLy8gXHU3NkVFXHU1RjU1XG4gICAgdG9jOiB7XG4gICAgICBlbmFibGU6IHRydWUsXG4gICAgfSxcbiAgICAvLyBcdTY4MDdcdTdCN0VcbiAgICB0YWdzOiB7XG4gICAgICBlbmFibGU6IHRydWUsXG4gICAgfSxcbiAgICAvLyBcdTUwMTJcdThCQTFcdTY1RjZcbiAgICBjb3VudERvd246IHtcbiAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgIC8vIFx1NTAxMlx1OEJBMVx1NjVGNlx1NjVFNVx1NjcxRlxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBcIlx1NjYyNVx1ODI4MlwiLFxuICAgICAgICBkYXRlOiBcIjIwMjUtMDEtMjlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBcdTdBRDlcdTcwQjlcdTY1NzBcdTYzNkVcbiAgICBzaXRlRGF0YToge1xuICAgICAgZW5hYmxlOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIC8vIFx1NTNDQlx1OTRGRVxuICBmcmllbmRzOiB7XG4gICAgLy8gXHU1M0NCXHU5NEZFXHU2NzBCXHU1M0NCXHU1NzA4XG4gICAgY2lyY2xlT2ZGcmllbmRzOiBcIlwiLFxuICAgIC8vIFx1NTJBOFx1NjAwMVx1NTNDQlx1OTRGRVxuICAgIGR5bmFtaWNMaW5rOiB7XG4gICAgICBzZXJ2ZXI6IFwiXCIsXG4gICAgICBhcHBfdG9rZW46IFwiXCIsXG4gICAgICB0YWJsZV9pZDogXCJcIixcbiAgICB9LFxuICB9LFxuICAvLyBcdTk3RjNcdTRFNTBcdTY0QURcdTY1M0VcdTU2NjhcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ltc3l5L01ldGluZy1BUElcbiAgbXVzaWM6IHtcbiAgICBlbmFibGU6IGZhbHNlLFxuICAgIC8vIHVybFxuICAgIHVybDogXCJodHRwczovL2FwaS1tZXRpbmcuZXhhbXBsZS5jb21cIixcbiAgICAvLyBpZFxuICAgIGlkOiA5Mzc5ODMxNzE0LFxuICAgIC8vIG5ldGVhc2UgLyB0ZW5jZW50IC8ga3Vnb3VcbiAgICBzZXJ2ZXI6IFwibmV0ZWFzZVwiLFxuICAgIC8vIHBsYXlsaXN0IC8gYWxidW0gLyBzb25nXG4gICAgdHlwZTogXCJwbGF5bGlzdFwiLFxuICB9LFxuICAvLyBcdTY0MUNcdTdEMjJcbiAgLy8gaHR0cHM6Ly93d3cuYWxnb2xpYS5jb20vXG4gIHNlYXJjaDoge1xuICAgIGVuYWJsZTogZmFsc2UsXG4gICAgYXBwSWQ6IFwiXCIsXG4gICAgYXBpS2V5OiBcIlwiLFxuICB9LFxuICAvLyBcdTYyNTNcdThENEZcbiAgcmV3YXJkRGF0YToge1xuICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAvLyBcdTVGQUVcdTRGRTFcdTRFOENcdTdFRjRcdTc4MDFcbiAgICB3ZWNoYXQ6IFwiaHR0cHM6Ly9waWMuZWZlZmVlLmNuL3VwbG9hZHMvMjAyNC8wNC8wNy82NjEyMTA0OWQxZTgwLndlYnBcIixcbiAgICAvLyBcdTY1MkZcdTRFRDhcdTVCOURcdTRFOENcdTdFRjRcdTc4MDFcbiAgICBhbGlwYXk6IFwiaHR0cHM6Ly9waWMuZWZlZmVlLmNuL3VwbG9hZHMvMjAyNC8wNC8wNy82NjEyMDY2MzFkM2I1LndlYnBcIixcbiAgfSxcbiAgLy8gXHU1NkZFXHU3MjQ3XHU3MDZGXHU3QkIxXG4gIGZhbmN5Ym94OiB7XG4gICAgZW5hYmxlOiB0cnVlLFxuICAgIGpzOiBcImh0dHBzOi8vbWlycm9ycy5zdXN0ZWNoLmVkdS5jbi9jZG5qcy9hamF4L2xpYnMvZmFuY3lhcHBzLXVpLzUuMC4zNi9mYW5jeWJveC9mYW5jeWJveC51bWQubWluLmpzXCIsXG4gICAgY3NzOiBcImh0dHBzOi8vbWlycm9ycy5zdXN0ZWNoLmVkdS5jbi9jZG5qcy9hamF4L2xpYnMvZmFuY3lhcHBzLXVpLzUuMC4zNi9mYW5jeWJveC9mYW5jeWJveC5taW4uY3NzXCIsXG4gIH0sXG4gIC8vIFx1NTkxNlx1OTRGRVx1NEUyRFx1OEY2Q1xuICBqdW1wUmVkaXJlY3Q6IHtcbiAgICBlbmFibGU6IHRydWUsXG4gICAgLy8gXHU2MzkyXHU5NjY0XHU3QzdCXHU1NDBEXG4gICAgZXhjbHVkZTogW1xuICAgICAgXCJjZi1mcmllbmRzLWxpbmtcIixcbiAgICAgIFwidXB5dW5cIixcbiAgICAgIFwiaWNwXCIsXG4gICAgICBcImF1dGhvclwiLFxuICAgICAgXCJyc3NcIixcbiAgICAgIFwiY2NcIixcbiAgICAgIFwicG93ZXJcIixcbiAgICAgIFwic29jaWFsLWxpbmtcIixcbiAgICAgIFwibGluay10ZXh0XCIsXG4gICAgICBcInRyYXZlbGxpbmdzXCIsXG4gICAgICBcInBvc3QtbGlua1wiLFxuICAgICAgXCJyZXBvcnRcIixcbiAgICAgIFwibW9yZS1saW5rXCIsXG4gICAgICBcInNraWxscy1pdGVtXCIsXG4gICAgICBcInJpZ2h0LW1lbnUtbGlua1wiLFxuICAgICAgXCJsaW5rLWNhcmRcIixcbiAgICBdLFxuICB9LFxuICAvLyBcdTdBRDlcdTcwQjlcdTdFREZcdThCQTFcbiAgdG9uZ2ppOiB7XG4gICAgXCI1MWxhXCI6IFwiXCIsXG4gIH0sXG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxoc3lcXFxcdjEyM3ZlLmdpdGh1Yi5pb1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxoc3lcXFxcdjEyM3ZlLmdpdGh1Yi5pb1xcXFwudml0ZXByZXNzXFxcXGluaXQubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9oc3kvdjEyM3ZlLmdpdGh1Yi5pby8udml0ZXByZXNzL2luaXQubWpzXCI7aW1wb3J0IHsgdGhlbWVDb25maWcgfSBmcm9tIFwiLi90aGVtZS9hc3NldHMvdGhlbWVDb25maWcubWpzXCI7XG5pbXBvcnQgeyBleGlzdHNTeW5jIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG4vKipcbiAqIFx1ODNCN1x1NTNENlx1NUU3Nlx1NTQwOFx1NUU3Nlx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNlxuICovXG5leHBvcnQgY29uc3QgZ2V0VGhlbWVDb25maWcgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU3RUREXHU1QkY5XHU4REVGXHU1Rjg0XG4gICAgY29uc3QgY29uZmlnUGF0aCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vdGhlbWVDb25maWcubWpzXCIpO1xuICAgIGlmIChleGlzdHNTeW5jKGNvbmZpZ1BhdGgpKSB7XG4gICAgICAvLyBcdTY1ODdcdTRFRjZcdTVCNThcdTU3MjhcdTY1RjZcdThGREJcdTg4NENcdTUyQThcdTYwMDFcdTVCRkNcdTUxNjVcbiAgICAgIGNvbnN0IHVzZXJDb25maWcgPSBhd2FpdCBpbXBvcnQoXCIuLi90aGVtZUNvbmZpZy5tanNcIik7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGVtZUNvbmZpZywgdXNlckNvbmZpZz8udGhlbWVDb25maWcgfHwge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBcdTY1ODdcdTRFRjZcdTRFMERcdTVCNThcdTU3MjhcdTY1RjZcdThGRDRcdTU2REVcdTlFRDhcdThCQTRcdTkxNERcdTdGNkVcbiAgICAgIGNvbnNvbGUud2FybihcIlVzZXIgY29uZmlndXJhdGlvbiBmaWxlIG5vdCBmb3VuZCwgdXNpbmcgZGVmYXVsdCB0aGVtZUNvbmZpZy5cIik7XG4gICAgICByZXR1cm4gdGhlbWVDb25maWc7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHRoZSBjb25maWd1cmF0aW9uOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHRoZW1lQ29uZmlnO1xuICB9XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxoc3lcXFxcdjEyM3ZlLmdpdGh1Yi5pb1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXHV0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxoc3lcXFxcdjEyM3ZlLmdpdGh1Yi5pb1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXHV0aWxzXFxcXG1hcmtkb3duQ29uZmlnLm1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovaHN5L3YxMjN2ZS5naXRodWIuaW8vLnZpdGVwcmVzcy90aGVtZS91dGlscy9tYXJrZG93bkNvbmZpZy5tanNcIjtpbXBvcnQgeyB0YWJzTWFya2Rvd25QbHVnaW4gfSBmcm9tIFwidml0ZXByZXNzLXBsdWdpbi10YWJzXCI7XG5pbXBvcnQgbWFya2Rvd25JdEF0dHJzIGZyb20gXCJtYXJrZG93bi1pdC1hdHRyc1wiO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tIFwibWFya2Rvd24taXQtY29udGFpbmVyXCI7XG5cbi8vIG1hcmtkb3duLWl0XG5jb25zdCBtYXJrZG93bkNvbmZpZyA9IChtZCwgdGhlbWVDb25maWcpID0+IHtcbiAgLy8gXHU2M0QyXHU0RUY2XG4gIG1kLnVzZShtYXJrZG93bkl0QXR0cnMpO1xuICBtZC51c2UodGFic01hcmtkb3duUGx1Z2luKTtcbiAgLy8gdGltZWxpbmVcbiAgbWQudXNlKGNvbnRhaW5lciwgXCJ0aW1lbGluZVwiLCB7XG4gICAgdmFsaWRhdGU6IChwYXJhbXMpID0+IHBhcmFtcy50cmltKCkubWF0Y2goL150aW1lbGluZVxccysoLiopJC8pLFxuICAgIHJlbmRlcjogKHRva2VucywgaWR4KSA9PiB7XG4gICAgICBjb25zdCBtID0gdG9rZW5zW2lkeF0uaW5mby50cmltKCkubWF0Y2goL150aW1lbGluZVxccysoLiopJC8pO1xuICAgICAgaWYgKHRva2Vuc1tpZHhdLm5lc3RpbmcgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGltZWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lbGluZS10aXRsZVwiPiR7bWQudXRpbHMuZXNjYXBlSHRtbChtWzFdKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1jb250ZW50XCI+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIjwvZGl2PjwvZGl2PlxcblwiO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuICAvLyByYWRpb1xuICBtZC51c2UoY29udGFpbmVyLCBcInJhZGlvXCIsIHtcbiAgICByZW5kZXI6ICh0b2tlbnMsIGlkeCwgX29wdGlvbnMsIGVudikgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgICAgIGNvbnN0IGNoZWNrID0gdG9rZW4uaW5mby50cmltKCkuc2xpY2UoXCJyYWRpb1wiLmxlbmd0aCkudHJpbSgpO1xuICAgICAgaWYgKHRva2VuLm5lc3RpbmcgPT09IDEpIHtcbiAgICAgICAgY29uc3QgaXNDaGVja2VkID0gbWQucmVuZGVySW5saW5lKGNoZWNrLCB7XG4gICAgICAgICAgcmVmZXJlbmNlczogZW52LnJlZmVyZW5jZXMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJyYWRpb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1wb2ludCAke2lzQ2hlY2tlZH1cIiAvPmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCI8L2Rpdj5cIjtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbiAgLy8gYnV0dG9uXG4gIG1kLnVzZShjb250YWluZXIsIFwiYnV0dG9uXCIsIHtcbiAgICByZW5kZXI6ICh0b2tlbnMsIGlkeCwgX29wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2lkeF07XG4gICAgICBjb25zdCBjaGVjayA9IHRva2VuLmluZm8udHJpbSgpLnNsaWNlKFwiYnV0dG9uXCIubGVuZ3RoKS50cmltKCk7XG4gICAgICBpZiAodG9rZW4ubmVzdGluZyA9PT0gMSkge1xuICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidXR0b24gJHtjaGVja31cIj5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiPC9idXR0b24+XCI7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG4gIC8vIGNhcmRcbiAgbWQudXNlKGNvbnRhaW5lciwgXCJjYXJkXCIsIHtcbiAgICByZW5kZXI6ICh0b2tlbnMsIGlkeCwgX29wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2lkeF07XG4gICAgICBpZiAodG9rZW4ubmVzdGluZyA9PT0gMSkge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjYXJkXCI+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIjwvZGl2PlwiO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuICAvLyBcdTg4NjhcdTY4M0NcbiAgbWQucmVuZGVyZXIucnVsZXMudGFibGVfb3BlbiA9ICgpID0+IHtcbiAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0YWJsZS1jb250YWluZXJcIj48dGFibGU+JztcbiAgfTtcbiAgbWQucmVuZGVyZXIucnVsZXMudGFibGVfY2xvc2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFwiPC90YWJsZT48L2Rpdj5cIjtcbiAgfTtcbiAgLy8gXHU1NkZFXHU3MjQ3XG4gIG1kLnJlbmRlcmVyLnJ1bGVzLmltYWdlID0gKHRva2VucywgaWR4KSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgICBjb25zdCBzcmMgPSB0b2tlbi5hdHRyc1t0b2tlbi5hdHRySW5kZXgoXCJzcmNcIildWzFdO1xuICAgIGNvbnN0IGFsdCA9IHRva2VuLmNvbnRlbnQ7XG4gICAgaWYgKCF0aGVtZUNvbmZpZy5mYW5jeWJveC5lbmFibGUpIHtcbiAgICAgIHJldHVybiBgPGltZyBzcmM9XCIke3NyY31cIiBhbHQ9XCIke2FsdH1cIiBsb2FkaW5nPVwibGF6eVwiPmA7XG4gICAgfVxuICAgIHJldHVybiBgPGEgY2xhc3M9XCJpbWctZmFuY3lib3hcIiBocmVmPVwiJHtzcmN9XCIgZGF0YS1mYW5jeWJveD1cImdhbGxlcnlcIiBkYXRhLWNhcHRpb249XCIke2FsdH1cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicG9zdC1pbWdcIiBzcmM9XCIke3NyY31cIiBhbHQ9XCIke2FsdH1cIiBsb2FkaW5nPVwibGF6eVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3N0LWltZy10aXBcIj4ke2FsdH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5gO1xuICB9O1xuICBcbiAgLy8gb2JzaWRpYW4gYWRtb25pdGlvblxuICBjb25zdCBmZW5jZSA9IG1kLnJlbmRlcmVyLnJ1bGVzLmZlbmNlO1xuICBtZC5yZW5kZXJlci5ydWxlcy5mZW5jZSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgW3Rva2VucywgaWR4XSA9IGFyZ3M7XG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgICBjb25zdCBsYW5nID0gdG9rZW4uaW5mby50cmltKCk7XG5cbiAgICAvLyBcdTU5MDRcdTc0MDYgT2JzaWRpYW4gYWRtb25pdGlvblxuICAgIGlmIChsYW5nLnN0YXJ0c1dpdGgoJ2FkLScpKSB7XG4gICAgICBjb25zdCB0eXBlID0gbGFuZy5zdWJzdHJpbmcoMyk7IC8vIFx1NTNENmFkLVx1NEU0Qlx1NTQwRVx1NzY4NFx1NTE4NVx1NUJCOVx1RkYwQ1x1ODNCN1x1NTNENlx1N0M3Qlx1NTc4QlxuICAgICAgY29uc3QgY29udGVudCA9IHRva2VuLmNvbnRlbnQ7XG5cbiAgICAgIGNvbnN0IGFkbW9uaXRpb25UeXBlcyA9IHtcbiAgICAgICAgJ25vdGUnOiAnaW5mbycsXG4gICAgICAgICdxdWVzdGlvbic6ICdpbmZvJyxcbiAgICAgICAgJ3dhcm5pbmcnOiAnd2FybmluZycsXG4gICAgICAgICd0aXAnOiAndGlwJyxcbiAgICAgICAgJ3N1bW1hcnknOiAnaW5mbycsXG4gICAgICAgICdoaW50JzogJ3RpcCcsXG4gICAgICAgICdpbXBvcnRhbnQnOiAnd2FybmluZycsXG4gICAgICAgICdjYXV0aW9uJzogJ3dhcm5pbmcnLFxuICAgICAgICAnZXJyb3InOiAnZGFuZ2VyJyxcbiAgICAgICAgJ2Rhbmdlcic6ICdkYW5nZXInXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSBhZG1vbml0aW9uVHlwZXNbdHlwZV0gfHwgJ2luZm8nO1xuICAgICAgY29uc3QgdGl0bGUgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSBjdXN0b20tYmxvY2tcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY3VzdG9tLWJsb2NrLXRpdGxlXCI+JHt0aXRsZX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWJsb2NrLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgJHttZC5yZW5kZXIoY29udGVudCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICAgIH1cbiAgICByZXR1cm4gZmVuY2UoLi4uYXJncyk7XG4gIH07ICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hcmtkb3duQ29uZmlnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEscUJBQUFBO0FBQUE7QUFBQSxJQUNhQTtBQURiO0FBQUE7QUFDTyxJQUFNQSxlQUFjO0FBQUE7QUFBQSxNQUV6QixVQUFVO0FBQUE7QUFBQSxRQUVSLE9BQU87QUFBQTtBQUFBLFFBRVAsYUFBYTtBQUFBO0FBQUEsUUFFYixNQUFNO0FBQUE7QUFBQSxRQUVOLE1BQU07QUFBQTtBQUFBLFFBRU4sTUFBTTtBQUFBO0FBQUEsUUFFTixRQUFRO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BRUEsS0FBSztBQUFBO0FBQUEsTUFFTCxPQUFPO0FBQUE7QUFBQSxNQUVQLFVBQVU7QUFBQTtBQUFBLE1BRVYsUUFBUTtBQUFBO0FBQUEsUUFFTixRQUFRO0FBQUE7QUFBQSxVQUVOLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVk5QztBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsY0FDRSxhQUFhO0FBQUEsY0FDYixLQUFLO0FBQUEsY0FDTCxNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxjQUNFLGFBQWE7QUFBQSxjQUNiLEtBQUs7QUFBQSxjQUNMLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBO0FBQUEsVUFFQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsY0FDRSxhQUFhO0FBQUEsY0FDYixLQUFLO0FBQUEsY0FDTCxNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxjQUNFLGFBQWE7QUFBQSxjQUNiLEtBQUs7QUFBQSxjQUNMLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBO0FBQUEsVUFFQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsY0FDRSxhQUFhO0FBQUEsY0FDYixLQUFLO0FBQUEsY0FDTCxNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQTtBQUFBLFVBRUEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxjQUFjLE1BQU0sMkJBQTJC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UUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUFBO0FBQUEsTUFFOUM7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUVBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUVBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUVBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFFQSxDQUFDLFFBQVEsRUFBRSxLQUFLLGNBQWMsTUFBTSwyQkFBMkIsQ0FBQztBQUFBLE1BQ2hFLENBQUMsUUFBUSxFQUFFLEtBQUssY0FBYyxNQUFNLDZCQUE2QixhQUFhLEdBQUcsQ0FBQztBQUFBLE1BQ2xGO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLE1BQU07QUFBQSxVQUNOLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFFQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixLQUFLO0FBQUEsVUFDTCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxLQUFLO0FBQUEsSUFDSDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLDRCQUFRLE1BQU0sbUJBQW1CLE1BQU0sVUFBVTtBQUFBLFFBQ3pELEVBQUUsTUFBTSw0QkFBUSxNQUFNLHFCQUFxQixNQUFNLFNBQVM7QUFBQSxRQUMxRCxFQUFFLE1BQU0sNEJBQVEsTUFBTSxlQUFlLE1BQU0sVUFBVTtBQUFBLE1BQ3ZEO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSw0QkFBUSxNQUFNLDhDQUEwQixNQUFNLFlBQVk7QUFBQSxRQUNsRSxFQUFFLE1BQU0sNEJBQVEsTUFBTSxrQkFBa0IsTUFBTSxPQUFPO0FBQUEsUUFDckQsRUFBRSxNQUFNLDRCQUFRLE1BQU0sZ0JBQWdCLE1BQU0sUUFBUTtBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSw0QkFBUSxNQUFNLGtCQUFrQixNQUFNLE9BQU87QUFBQSxRQUNyRCxFQUFFLE1BQU0sNEJBQVEsTUFBTSxlQUFlLE1BQU0sU0FBUztBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSw0QkFBUSxNQUFNLGtCQUFrQixNQUFNLE9BQU87QUFBQSxRQUNyRCxFQUFFLE1BQU0sNEJBQVEsTUFBTSxpQkFBaUIsTUFBTSxTQUFTO0FBQUEsUUFDdEQsRUFBRSxNQUFNLDRCQUFRLE1BQU0sZ0JBQWdCLE1BQU0sV0FBVztBQUFBLE1BQ3pEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxRQUNKO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsUUFDSjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sS0FBSztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsUUFDSjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sS0FBSztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sS0FBSztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFB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ZSxnQkFBZ0I7QUFBQSxNQUMvRTtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsTUFBTUYsYUFBWSxTQUFTO0FBQUEsUUFDM0IsWUFBWUEsYUFBWSxTQUFTO0FBQUEsUUFDakMsYUFBYUEsYUFBWSxTQUFTO0FBQUEsUUFDbEMsU0FBUztBQUFBLFFBQ1QsV0FBVztBQUFBLFFBQ1gsYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbInRoZW1lQ29uZmlnIiwgInRoZW1lQ29uZmlnIiwgInRoZW1lQ29uZmlnIiwgInBvc3REYXRhIiwgInBhdGgiLCAicGF0aCIsICJ0aGVtZUNvbmZpZyIsICJwYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInRoZW1lQ29uZmlnIiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiXQp9Cg==
