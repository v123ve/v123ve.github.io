import{_ as n,c as t,a3 as o,o as a}from"./chunks/framework.BaR4VHXY.js";const q=JSON.parse('{"title":"NodeJs和WebPack","description":"","frontmatter":{"Created at":"2020-09-02T00:00:00.000Z","Last updated at":"2021-07-02T00:00:00.000Z","tags":["Node.js","npm","webpack"]},"headers":[],"relativePath":"zh-CN/工作笔记/NodeJs和WebPack.md","filePath":"zh-CN/工作笔记/NodeJs和WebPack.md","lastUpdated":null}'),r={name:"zh-CN/工作笔记/NodeJs和WebPack.md"};function s(l,e,i,u,c,p){return a(),t("div",null,e[0]||(e[0]=[o(`<h1 id="nodejs和webpack" tabindex="-1">NodeJs和WebPack <a class="header-anchor" href="#nodejs和webpack" aria-label="Permalink to &quot;NodeJs和WebPack&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>Node.js使JavaScript能够脱离浏览器而运行。 npm，则是Node.js自带的包管理系统</p><h3 id="建立工程" tabindex="-1">建立工程 <a class="header-anchor" href="#建立工程" aria-label="Permalink to &quot;建立工程&quot;">​</a></h3><pre><code>// 初始化npm
npm init -y
// webpack的核心库
npm install --save-dev webpack
// 分离出来的webpack命令行功能
npm install --save-dev webpack-cli
// 自动生成HTML文件并引入我们打包好的JS和CSS文件
npm install --save-dev html-webpack-plugin
// 每次构建前清理 /dist 文件夹
npm install --save-dev clean-webpack-plugin
// 通过 link 引入CSS文件
npm install --save-dev mini-css-extract-plugin
// 解析EJS文件TypeScript文件
npm install --save-dev ejs-loader ts-loader
// 解析CSS文件STYLE文件LESS文件
npm install --save-dev css-loader style-loader less-loader
// 解析文件资源
npm install --save-dev url-loader file-loader
// 处理CSS，如自动添加浏览器前缀
npm install --save-dev postcss-loader autoprefixer
// 高级语法的支持Babel
npm install --save-dev babel-loader @babel/core @babel/preset-env webpack
// 支持新的全局变量如 Promise 、新的原生方法如 String.padStart (left-pad) 等
npm install --save-dev babel-polyfill
// 高级语法的支持对组件进行懒加载
npm install --save-dev babel-plugin-syntax-dynamic-import
// EsLint审查代码
npm install --save-dev eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
// 实时进行eslint代码审查
npm install --save-dev eslint-loader babel-eslint
// 识别vue项目中，.vue文件中的 script标签内的代码
npm install --save-dev eslint-plugin-html
// lodash库
npm install --save lodash
// axios库
npm install --save axios
</code></pre><h3 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h3><pre><code>    &quot;build&quot;: &quot;webpack --watch&quot;,
    &quot;lint&quot;: &quot;eslint --ext .js --ext .vue src/&quot;,
    &quot;lint-fix&quot;: &quot;eslint --fix --ext .js --ext .jsx --ext .vue src/&quot;
</code></pre><h3 id="webpack-config-js" tabindex="-1">webpack.config.js <a class="header-anchor" href="#webpack-config-js" aria-label="Permalink to &quot;webpack.config.js&quot;">​</a></h3><p>设置 mode 属性，用来决定当前是development还是production环境。设置为 &#39;none&#39; ，来避免默认操作。 path 是 nodeJs中的核心模块用来操作路径，__dirname 表示文件的当前路径（此时为根路径）。 output中的filename属性，[name] 表示入口的名称，此处就是 main。</p><pre><code>const path = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
const {CleanWebpackPlugin} = require(&#39;clean-webpack-plugin&#39;);
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;)

module.exports = {
    mode: &quot;none&quot;,
    entry: {
        main: path.join(__dirname, &#39;./src/main.js&#39;)
    },
    output: {
        filename: &#39;[name].bundle.js&#39;,
        path: path.join(__dirname, &#39;./dist&#39;)
    },
    module: {
        rules: [
            {
                test: /\\.js$/,
                loader: &#39;babel-loader&#39;,
                exclude: /node_modules/
            },
            {
                test: /.ejs$/,
                use: [&#39;ejs-loader&#39;]
            },
            {
                test: /.css$/,
                use: [
                    // &#39;style-loader&#39;,
                    MiniCssExtractPlugin.loader,
                    {loader: &#39;css-loader&#39;, options: {importLoaders: 1}},
                    &#39;postcss-loader&#39;
                ]
            },
            {
                test: /\\.less$/,
                use: [
                    // &#39;style-loader&#39;,
                    MiniCssExtractPlugin.loader,
                    &#39;css-loader&#39;,
                    &#39;postcss-loader&#39;,
                    &#39;less-loader&#39;
                ]
            },
            {
                test: /.(jpg|jpeg|png|gif|svg)$/,
                use: &#39;url-loader&#39;,
            },
            {
                test: /\\.(vue|js)$/,
                loader: &#39;eslint-loader&#39;,
                exclude: /node_modules/,
                enforce: &#39;pre&#39;
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 模版文件的路径
            template: path.join(__dirname, &#39;./src/index.html&#39;),
            // 设为 true 表示把JS文件注入到body结尾，CSS文件注入到head中
            inject: true,
            minify: {
                // 删除模版文件中的注释
                removeComments: true
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: &quot;[name].css&quot;
        }),
    ]
};
</code></pre><h3 id="postcss-config-js" tabindex="-1">postcss.config.js <a class="header-anchor" href="#postcss-config-js" aria-label="Permalink to &quot;postcss.config.js&quot;">​</a></h3><pre><code>const autoprefixer = require(&#39;autoprefixer&#39;)

module.exports = {
    plugins: [
        autoprefixer({
            browsers: [&#39;last 5 version&#39;]
        })
    ]
}
</code></pre><h3 id="babelrc" tabindex="-1">.babelrc <a class="header-anchor" href="#babelrc" aria-label="Permalink to &quot;.babelrc&quot;">​</a></h3><pre><code>{
  &quot;presets&quot;: [
    &quot;@babel/preset-env&quot;
  ],
  &quot;plugins&quot;: [
    &quot;syntax-dynamic-import&quot;
  ]
}
</code></pre><h3 id="eslintrc" tabindex="-1">.eslintrc <a class="header-anchor" href="#eslintrc" aria-label="Permalink to &quot;.eslintrc&quot;">​</a></h3><pre><code>{
  &quot;extends&quot;: &quot;standard&quot;,
  &quot;plugins&quot;: [
    &quot;html&quot;
  ],
  &quot;rules&quot;: {
    &quot;no-new&quot;: &quot;off&quot;
  },
  &quot;parserOptions&quot;: {
    &quot;parser&quot;: &quot;babel-eslint&quot;
  }
}
</code></pre><h3 id="开发环境" tabindex="-1">开发环境 <a class="header-anchor" href="#开发环境" aria-label="Permalink to &quot;开发环境&quot;">​</a></h3><p>模块热替换(Hot Module Replacement)是 webpack 提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新</p><pre><code>// 小型的web服务器，并且能够实时重载
npm install --save-dev webpack-dev-server
</code></pre><h5 id="webpack-config-js-1" tabindex="-1">webpack.config.js: <a class="header-anchor" href="#webpack-config-js-1" aria-label="Permalink to &quot;webpack.config.js:&quot;">​</a></h5><pre><code>const webpack = require(&#39;webpack&#39;)
devServer: {
    port: 8080,  // 端口号
    host: &#39;0.0.0.0&#39;, // 主机名，设为该值可通过IP访问
    overlay: {
      errors: true // 错误提示
    },
   hot: true,
   devtool: &#39;inline-source-map&#39;, // 加入devtool配置
}
plugins:[
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
]
</code></pre><h5 id="package-json-1" tabindex="-1">package.json: <a class="header-anchor" href="#package-json-1" aria-label="Permalink to &quot;package.json:&quot;">​</a></h5><pre><code>&quot;dev&quot;: &quot;cross-env NODE_ENV=development webpack-dev-server --config config/webpack.config.js&quot;
</code></pre><h3 id="生产环境" tabindex="-1">生产环境 <a class="header-anchor" href="#生产环境" aria-label="Permalink to &quot;生产环境&quot;">​</a></h3><p>开发环境(development)和生产环境(production)的构建目标差异很大。在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。虽然，以上我们将生产环境和开发环境做了略微区分，但是，请注意，我们还是会遵循不重复原则(Don&#39;t repeat yourself - DRY)，保留一个“通用”配置。为了将这些配置合并在一起，我们将使用一个名为 webpack-merge 的工具。通过“通用”配置，我们不必在环境特定的配置中重复代码。</p><pre><code>// 合并webpack配置项
npm install --save-dev webpack-merge
</code></pre><h5 id="webpack-config-js-2" tabindex="-1">webpack.config.js: <a class="header-anchor" href="#webpack-config-js-2" aria-label="Permalink to &quot;webpack.config.js:&quot;">​</a></h5><pre><code>const path = require(&#39;path&#39;)
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;)

const isDev = process.env.NODE_ENV === &#39;development&#39;

const config = {
  entry: {
    main: path.join(__dirname, &#39;../src/main.js&#39;)
  },
  output: {
    filename: &#39;[name].bundle.js&#39;,
    path: path.join(__dirname, &#39;../dist&#39;)
  },
  module: {
    rules: [
      {
        test: /\\.(vue|js|jsx)$/,
        loader: &#39;eslint-loader&#39;,
        exclude: /node_modules/,
        enforce: &#39;pre&#39;
      },
      {
        test: /\\.js$/,
        loader: &#39;babel-loader&#39;,
        exclude: /node_modules/
      },
      {
        test: /\\.vue$/,
        loader: &#39;vue-loader&#39;,
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\\.ejs$/,
        use: [&#39;ejs-loader&#39;]
      },
      {
        test: /\\.css$/,
        use: [
          isDev ? &#39;vue-style-loader&#39; : MiniCssExtractPlugin.loader,
          { loader: &#39;css-loader&#39;, options: { importLoaders: 1 } },
          &#39;postcss-loader&#39;
        ]
      },
      {
        test: /\\.less$/,
        use: [
          isDev ? &#39;vue-style-loader&#39; : MiniCssExtractPlugin.loader,
          &#39;css-loader&#39;,
          {
            loader: &#39;postcss-loader&#39;,
            options: {
              sourceMap: true
            }
          },
          &#39;less-loader&#39;
        ]
      },
      {
        test: /\\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: &#39;url-loader&#39;,
            options: {
              name: &#39;[path][name]-[hash:5].[ext]&#39;,
              limit: 1024
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, &#39;../index.html&#39;),
      inject: true,
      minify: {
        removeComments: true
      }
    })
  ]
}

module.exports = config
</code></pre><h5 id="webpack-dev-js" tabindex="-1">webpack.dev.js: <a class="header-anchor" href="#webpack-dev-js" aria-label="Permalink to &quot;webpack.dev.js:&quot;">​</a></h5><pre><code>const merge = require(&#39;webpack-merge&#39;)
const common = require(&#39;./webpack.config.js&#39;)

module.exports = merge(common, {
  mode: &#39;development&#39;,
  devtool: &#39;inline-source-map&#39;,
  devServer: {
    port: 8080,
    host: &#39;0.0.0.0&#39;,
    overlay: {
      errors: true
    },
    historyApiFallback: {
      index: &#39;/index.html&#39;
    }
  }
})
</code></pre><h5 id="webpack-build-js" tabindex="-1">webpack.build.js <a class="header-anchor" href="#webpack-build-js" aria-label="Permalink to &quot;webpack.build.js&quot;">​</a></h5><pre><code>const path = require(&#39;path&#39;)
const CleanWebpackPlugin = require(&#39;clean-webpack-plugin&#39;)
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;)
const merge = require(&#39;webpack-merge&#39;)
const common = require(&#39;./webpack.config.js&#39;)

module.exports = merge(common, {
  mode: &#39;production&#39;,
  optimization: {
    splitChunks: {
      chunks: &#39;initial&#39;,
      automaticNameDelimiter: &#39;.&#39;,
      cacheGroups: {
        commons: {
          name: &#39;commons&#39;,
          chunks: &#39;initial&#39;,
          minChunks: 2,
          priority: 3
        },
        vendors: {
          test: /[\\\\/]node_modules[\\\\/]/,
          priority: 1
        }
      }
    },
    runtimeChunk: {
      name: entrypoint =&gt; \`manifest.\${entrypoint.name}\`
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: &#39;[name].css&#39;
    }),
    new CleanWebpackPlugin(
      [&#39;dist&#39;],
      {
        root: path.join(__dirname, &#39;../&#39;)
      }
    )
  ]
})
</code></pre><h5 id="package-json-2" tabindex="-1">package.json <a class="header-anchor" href="#package-json-2" aria-label="Permalink to &quot;package.json&quot;">​</a></h5><pre><code>&quot;dev&quot;: &quot;cross-env NODE_ENV=development webpack-dev-server --config config/webpack.dev.js&quot;,
&quot;build&quot;: &quot;cross-env NODE_ENV=production webpack --config config/webpack.build.js --progress --inline --colors&quot;
</code></pre><h2 id="nodejs" tabindex="-1">NodeJS <a class="header-anchor" href="#nodejs" aria-label="Permalink to &quot;NodeJS&quot;">​</a></h2><p>Node是V8引擎的容器 Node是用C++写的，可以直接运行在电脑上</p><h4 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h4><p>nodemon：服务端发生改变时自动渲染</p><h4 id="处理请求" tabindex="-1">处理请求 <a class="header-anchor" href="#处理请求" aria-label="Permalink to &quot;处理请求&quot;">​</a></h4><pre><code>const http = require(&#39;http&#39;);
const querystring = require(&#39;querystring&#39;);

// 创建服务器
const server = http.createServer((req, res) =&gt; {
    const method = req.method;
    const url = req.url;
    const path = url.split(&#39;?&#39;)[0];
    const query = querystring.parse(url.split(&#39;?&#39;)[1]);
    const responseData = {
        method,
        url,
        path,
        query,
    };
    if (method === &#39;GET&#39;) {
        res.setHeader(&#39;Content-Type&#39;, &#39;application/json&#39;);
        res.end(JSON.stringify(responseData));
    }
    if (method === &#39;POST&#39;) {
        let postData = &#39;&#39;;
        // 流式接收数据
        req.on(&#39;data&#39;, chunk =&gt; {
            postData += chunk.toString();
        });
        req.on(&#39;end&#39;, () =&gt; {
            responseData.contentType = req.headers[&#39;content-type&#39;];
            responseData.postData = postData;
            res.end(JSON.stringify(responseData));
        })
    }
});
// 创建监听端口及回调
server.listen(5000, () =&gt; {
    console.log(&#39;server running at port 5000&#39;);
})
</code></pre><h4 id="处理mysql" tabindex="-1">处理Mysql <a class="header-anchor" href="#处理mysql" aria-label="Permalink to &quot;处理Mysql&quot;">​</a></h4><pre><code>const fs = require(&#39;fs&#39;);
const http = require(&#39;http&#39;);
const path = require(&#39;path&#39;);
const mysql = require(&#39;mysql&#39;);
const querystring = require(&#39;querystring&#39;);

const PORT = 5000;

// 获取文件内容
function getFileContent(filename) {
    return new Promise(((resolve, reject) =&gt; {
        const fullFileName = path.resolve(__dirname, &#39;data&#39;, filename);
        fs.readFile(fullFileName, (err, data) =&gt; {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(data.toString()))
        })
    }));
}

// 处理POST数据
const getPostData = req =&gt; {
    return new Promise((resolve, reject) =&gt; {
        if (req.method !== &#39;POST&#39;) {
            resolve({});
            return;
        }
        if (req.headers[&#39;content-type&#39;] !== &#39;application/json&#39;) {
            resolve({});
            return;
        }
        let post;
        // 流式接收数据
        req.on(&#39;data&#39;, chunk =&gt; {
            postData += chunk.toString();
        });
        req.on(&#39;end&#39;, () =&gt; {
            if (!postData) {
                resolve({});
                return;
            }
            resolve(JSON.parse(postData))
        })
    })
}

// 执行sql语句
function execSQL(connection, sql) {
    return new Promise((resolve, reject) =&gt; {
        connection.query(sql, (err, result) =&gt; {
            if (err) {
                console.log(\`执行sql【\${sql}】失败\`)
                reject(err)
                return;
            }
            console.log(\`执行sql【\${sql}】成功\`)
            resolve(result);
        })
    })
}

// 创建连接对象
function initMysql() {
    return new Promise((resolve, reject) =&gt; {
        const connection = mysql.createConnection({
            host: &#39;192.168.2.100&#39;,
            user: &#39;root&#39;,
            password: &#39;MinYuan2018&#39;,
            port: 8106,
            database: &#39;video_monitor&#39;,
        });
        console.log(&#39;mysql连接已创建&#39;)
        connection.connect();
        const sql = \`select * from user\`;
        execSQL(connection, sql).then(sqlResult =&gt; {
            resolve(sqlResult)
        }).catch(err =&gt; {
            resolve(err)
        }).finally(() =&gt; {
            console.log(&#39;mysql连接已销毁&#39;)
            connection.end();
        })
    })
}

// 服务处理对象
function serverHandler(req, res) {
    const method = req.method;
    const url = req.url;
    const path = url.split(&#39;?&#39;)[0];
    const query = querystring.parse(url.split(&#39;?&#39;)[1]);
    const responseData = {
        method,
        url,
        path,
        query,
    };
    req.path = path;
    switch (path) {
        case &#39;/api/user&#39;:
            if (method === &#39;GET&#39;) {
                res.setHeader(&#39;Content-Type&#39;, &#39;application/json&#39;);
                res.end(JSON.stringify(responseData));
            }
            break;
        case &#39;/api/list&#39;:
            if (method === &#39;GET&#39;) {
                getFileContent(&#39;a.json&#39;).then(aData =&gt; {
                    res.end(JSON.stringify(aData))
                })
            }
            if (method === &#39;POST&#39;) {
                getPostData(req).then(postData =&gt; {
                    initMysql().then(users =&gt; {
                        res.end(JSON.stringify(users));
                    })
                })
            }
            break;
        default:
            res.writeHead(404, {&#39;Content-Type&#39;: &#39;text/plain&#39;});
            res.write(&#39;404 Not Found&#39;);
            res.end();
            break;
    }
}

// 创建服务器
const server = http.createServer(serverHandler);
// 创建监听端口及回调
server.listen(PORT, () =&gt; {
    console.log(&#39;服务已启动&#39; + PORT);
})
</code></pre><h2 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;Webpack&quot;">​</a></h2><h4 id="默认应用" tabindex="-1">默认应用 <a class="header-anchor" href="#默认应用" aria-label="Permalink to &quot;默认应用&quot;">​</a></h4><h3 id="loader" tabindex="-1">loader <a class="header-anchor" href="#loader" aria-label="Permalink to &quot;loader&quot;">​</a></h3><p>处理webpack无法识别的模块</p><h4 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h4><p>yarn add file-loader</p><pre><code>module.exports = merge(common, {
  mode: &#39;production&#39;,
  module:{
    rules:[
        {
            test:/.jpg$/,
            use:&#39;file-loader&#39;
        }
    ],
  },
  output:{
    filename:&#39;bundle.js&#39;,
    path:path.resolve(&#39;dist&#39;)
  }
})
</code></pre><h4 id="一般配置" tabindex="-1">一般配置 <a class="header-anchor" href="#一般配置" aria-label="Permalink to &quot;一般配置&quot;">​</a></h4><pre><code>{
    &quot;name&quot;: &quot;mtvideo&quot;,
    &quot;version&quot;: &quot;1.0.0&quot;,
    &quot;description&quot;: &quot;webRTC in browser&quot;,
    &quot;main&quot;: &quot;index.js&quot;,
    &quot;scripts&quot;: {
        &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;
    },
    &quot;author&quot;: &quot;rui&quot;,
    &quot;license&quot;: &quot;ISC&quot;,
    &quot;publishConfig&quot;: {
        &quot;registry&quot;: &quot;http://192.168.2.50:8081/#browse/browse:npm_hosted&quot;
    },
    &quot;devDependencies&quot;: {
        &quot;@babel/core&quot;: &quot;^7.11.6&quot;,
        &quot;@babel/plugin-proposal-class-properties&quot;: &quot;^7.7.4&quot;,
        &quot;@babel/plugin-proposal-export-default-from&quot;: &quot;^7.7.4&quot;,
        &quot;@babel/plugin-proposal-optional-chaining&quot;: &quot;^7.11.0&quot;,
        &quot;@babel/plugin-transform-runtime&quot;: &quot;^7.11.5&quot;,
        &quot;@babel/preset-env&quot;: &quot;^7.11.5&quot;,
        &quot;@babel/preset-react&quot;: &quot;^7.7.4&quot;,
        &quot;babel-core&quot;: &quot;^6.26.3&quot;,
        &quot;babel-loader&quot;: &quot;^8.1.0&quot;,
        &quot;babel-plugin-add-module-exports&quot;: &quot;^1.0.2&quot;,
        &quot;css-loader&quot;: &quot;^3.4.0&quot;,
        &quot;less&quot;: &quot;^3.10.3&quot;,
        &quot;less-loader&quot;: &quot;^5.0.0&quot;,
        &quot;react&quot;: &quot;^16.8.6&quot;,
        &quot;react-dom&quot;: &quot;^16.8.6&quot;,
        &quot;style-loader&quot;: &quot;^1.1.1&quot;,
        &quot;webpack&quot;: &quot;^4.44.1&quot;,
        &quot;webpack-cli&quot;: &quot;^4.7.2&quot;
    },
    &quot;dependencies&quot;: {
        &quot;@babel/runtime&quot;: &quot;^7.11.2&quot;,
        &quot;detect-browser&quot;: &quot;^5.1.1&quot;,
        &quot;lodash&quot;: &quot;^4.17.20&quot;,
        &quot;md5&quot;: &quot;^2.2.1&quot;,
        &quot;moment&quot;: &quot;^2.27.0&quot;,
        &quot;react-router&quot;: &quot;^5.2.0&quot;,
        &quot;rimraf&quot;: &quot;^3.0.2&quot;,
        &quot;ts-loader&quot;: &quot;^8.0.4&quot;,
        &quot;typescript&quot;: &quot;3.9.3&quot;,
        &quot;umi&quot;: &quot;^3.2.19&quot;,
        &quot;umi-request&quot;: &quot;^1.3.5&quot;,
        &quot;uuid&quot;: &quot;^8.3.0&quot;
    }
}
</code></pre>`,51)]))}const m=n(r,[["render",s]]);export{q as __pageData,m as default};
