---

Created at: 2020-09-02
Last updated at: 2021-07-02
tags: 
  - Node.js
  - npm
  - webpack

---

# NodeJs和WebPack


## 前言

Node.js使JavaScript能够脱离浏览器而运行。
npm，则是Node.js自带的包管理系统

### 建立工程

    // 初始化npm
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


### package.json

        "build": "webpack --watch",
        "lint": "eslint --ext .js --ext .vue src/",
        "lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue src/"


### webpack.config.js

设置 mode 属性，用来决定当前是development还是production环境。设置为 'none' ，来避免默认操作。
path 是 nodeJs中的核心模块用来操作路径，__dirname 表示文件的当前路径（此时为根路径）。
output中的filename属性，[name] 表示入口的名称，此处就是 main。

    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const {CleanWebpackPlugin} = require('clean-webpack-plugin');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    
    module.exports = {
        mode: "none",
        entry: {
            main: path.join(__dirname, './src/main.js')
        },
        output: {
            filename: '[name].bundle.js',
            path: path.join(__dirname, './dist')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /.ejs$/,
                    use: ['ejs-loader']
                },
                {
                    test: /.css$/,
                    use: [
                        // 'style-loader',
                        MiniCssExtractPlugin.loader,
                        {loader: 'css-loader', options: {importLoaders: 1}},
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        // 'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /.(jpg|jpeg|png|gif|svg)$/,
                    use: 'url-loader',
                },
                {
                    test: /\.(vue|js)$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/,
                    enforce: 'pre'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                // 模版文件的路径
                template: path.join(__dirname, './src/index.html'),
                // 设为 true 表示把JS文件注入到body结尾，CSS文件注入到head中
                inject: true,
                minify: {
                    // 删除模版文件中的注释
                    removeComments: true
                }
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].css"
            }),
        ]
    };


### postcss.config.js

    const autoprefixer = require('autoprefixer')
    
    module.exports = {
        plugins: [
            autoprefixer({
                browsers: ['last 5 version']
            })
        ]
    }


### .babelrc

    {
      "presets": [
        "@babel/preset-env"
      ],
      "plugins": [
        "syntax-dynamic-import"
      ]
    }


### .eslintrc

    {
      "extends": "standard",
      "plugins": [
        "html"
      ],
      "rules": {
        "no-new": "off"
      },
      "parserOptions": {
        "parser": "babel-eslint"
      }
    }


### 开发环境

模块热替换(Hot Module Replacement)是 webpack 提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新

    // 小型的web服务器，并且能够实时重载
    npm install --save-dev webpack-dev-server


##### webpack.config.js:

    const webpack = require('webpack')
    devServer: {
        port: 8080,  // 端口号
        host: '0.0.0.0', // 主机名，设为该值可通过IP访问
        overlay: {
          errors: true // 错误提示
        },
       hot: true,
       devtool: 'inline-source-map', // 加入devtool配置
    }
    plugins:[
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]


##### package.json:

    "dev": "cross-env NODE_ENV=development webpack-dev-server --config config/webpack.config.js"


### 生产环境

开发环境(development)和生产环境(production)的构建目标差异很大。在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。虽然，以上我们将生产环境和开发环境做了略微区分，但是，请注意，我们还是会遵循不重复原则(Don't repeat yourself - DRY)，保留一个“通用”配置。为了将这些配置合并在一起，我们将使用一个名为 webpack-merge 的工具。通过“通用”配置，我们不必在环境特定的配置中重复代码。

    // 合并webpack配置项
    npm install --save-dev webpack-merge


##### webpack.config.js:

    const path = require('path')
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    
    const isDev = process.env.NODE_ENV === 'development'
    
    const config = {
      entry: {
        main: path.join(__dirname, '../src/main.js')
      },
      output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '../dist')
      },
      module: {
        rules: [
          {
            test: /\.(vue|js|jsx)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
            enforce: 'pre'
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: createVueLoaderOptions(isDev)
          },
          {
            test: /\.ejs$/,
            use: ['ejs-loader']
          },
          {
            test: /\.css$/,
            use: [
              isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'postcss-loader'
            ]
          },
          {
            test: /\.less$/,
            use: [
              isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'less-loader'
            ]
          },
          {
            test: /\.(jpg|jpeg|png|gif|svg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[path][name]-[hash:5].[ext]',
                  limit: 1024
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, '../index.html'),
          inject: true,
          minify: {
            removeComments: true
          }
        })
      ]
    }
    
    module.exports = config


##### webpack.dev.js:

    const merge = require('webpack-merge')
    const common = require('./webpack.config.js')
    
    module.exports = merge(common, {
      mode: 'development',
      devtool: 'inline-source-map',
      devServer: {
        port: 8080,
        host: '0.0.0.0',
        overlay: {
          errors: true
        },
        historyApiFallback: {
          index: '/index.html'
        }
      }
    })


##### webpack.build.js

    const path = require('path')
    const CleanWebpackPlugin = require('clean-webpack-plugin')
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    const merge = require('webpack-merge')
    const common = require('./webpack.config.js')
    
    module.exports = merge(common, {
      mode: 'production',
      optimization: {
        splitChunks: {
          chunks: 'initial',
          automaticNameDelimiter: '.',
          cacheGroups: {
            commons: {
              name: 'commons',
              chunks: 'initial',
              minChunks: 2,
              priority: 3
            },
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: 1
            }
          }
        },
        runtimeChunk: {
          name: entrypoint => `manifest.${entrypoint.name}`
        }
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css'
        }),
        new CleanWebpackPlugin(
          ['dist'],
          {
            root: path.join(__dirname, '../')
          }
        )
      ]
    })


##### package.json

    "dev": "cross-env NODE_ENV=development webpack-dev-server --config config/webpack.dev.js",
    "build": "cross-env NODE_ENV=production webpack --config config/webpack.build.js --progress --inline --colors"


## NodeJS

Node是V8引擎的容器
Node是用C++写的，可以直接运行在电脑上

#### 插件

nodemon：服务端发生改变时自动渲染

#### 处理请求

    const http = require('http');
    const querystring = require('querystring');
    
    // 创建服务器
    const server = http.createServer((req, res) => {
        const method = req.method;
        const url = req.url;
        const path = url.split('?')[0];
        const query = querystring.parse(url.split('?')[1]);
        const responseData = {
            method,
            url,
            path,
            query,
        };
        if (method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(responseData));
        }
        if (method === 'POST') {
            let postData = '';
            // 流式接收数据
            req.on('data', chunk => {
                postData += chunk.toString();
            });
            req.on('end', () => {
                responseData.contentType = req.headers['content-type'];
                responseData.postData = postData;
                res.end(JSON.stringify(responseData));
            })
        }
    });
    // 创建监听端口及回调
    server.listen(5000, () => {
        console.log('server running at port 5000');
    })


#### 处理Mysql

    const fs = require('fs');
    const http = require('http');
    const path = require('path');
    const mysql = require('mysql');
    const querystring = require('querystring');
    
    const PORT = 5000;
    
    // 获取文件内容
    function getFileContent(filename) {
        return new Promise(((resolve, reject) => {
            const fullFileName = path.resolve(__dirname, 'data', filename);
            fs.readFile(fullFileName, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(data.toString()))
            })
        }));
    }
    
    // 处理POST数据
    const getPostData = req => {
        return new Promise((resolve, reject) => {
            if (req.method !== 'POST') {
                resolve({});
                return;
            }
            if (req.headers['content-type'] !== 'application/json') {
                resolve({});
                return;
            }
            let post;
            // 流式接收数据
            req.on('data', chunk => {
                postData += chunk.toString();
            });
            req.on('end', () => {
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
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, result) => {
                if (err) {
                    console.log(`执行sql【${sql}】失败`)
                    reject(err)
                    return;
                }
                console.log(`执行sql【${sql}】成功`)
                resolve(result);
            })
        })
    }
    
    // 创建连接对象
    function initMysql() {
        return new Promise((resolve, reject) => {
            const connection = mysql.createConnection({
                host: '192.168.2.100',
                user: 'root',
                password: 'MinYuan2018',
                port: 8106,
                database: 'video_monitor',
            });
            console.log('mysql连接已创建')
            connection.connect();
            const sql = `select * from user`;
            execSQL(connection, sql).then(sqlResult => {
                resolve(sqlResult)
            }).catch(err => {
                resolve(err)
            }).finally(() => {
                console.log('mysql连接已销毁')
                connection.end();
            })
        })
    }
    
    // 服务处理对象
    function serverHandler(req, res) {
        const method = req.method;
        const url = req.url;
        const path = url.split('?')[0];
        const query = querystring.parse(url.split('?')[1]);
        const responseData = {
            method,
            url,
            path,
            query,
        };
        req.path = path;
        switch (path) {
            case '/api/user':
                if (method === 'GET') {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(responseData));
                }
                break;
            case '/api/list':
                if (method === 'GET') {
                    getFileContent('a.json').then(aData => {
                        res.end(JSON.stringify(aData))
                    })
                }
                if (method === 'POST') {
                    getPostData(req).then(postData => {
                        initMysql().then(users => {
                            res.end(JSON.stringify(users));
                        })
                    })
                }
                break;
            default:
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('404 Not Found');
                res.end();
                break;
        }
    }
    
    // 创建服务器
    const server = http.createServer(serverHandler);
    // 创建监听端口及回调
    server.listen(PORT, () => {
        console.log('服务已启动' + PORT);
    })


## Webpack

#### 默认应用

### loader

处理webpack无法识别的模块

#### 图片

yarn add file-loader

    module.exports = merge(common, {
      mode: 'production',
      module:{
        rules:[
            {
                test:/.jpg$/,
                use:'file-loader'
            }
        ],
      },
      output:{
        filename:'bundle.js',
        path:path.resolve('dist')
      }
    })


#### 一般配置

    {
        "name": "mtvideo",
        "version": "1.0.0",
        "description": "webRTC in browser",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "rui",
        "license": "ISC",
        "publishConfig": {
            "registry": "http://192.168.2.50:8081/#browse/browse:npm_hosted"
        },
        "devDependencies": {
            "@babel/core": "^7.11.6",
            "@babel/plugin-proposal-class-properties": "^7.7.4",
            "@babel/plugin-proposal-export-default-from": "^7.7.4",
            "@babel/plugin-proposal-optional-chaining": "^7.11.0",
            "@babel/plugin-transform-runtime": "^7.11.5",
            "@babel/preset-env": "^7.11.5",
            "@babel/preset-react": "^7.7.4",
            "babel-core": "^6.26.3",
            "babel-loader": "^8.1.0",
            "babel-plugin-add-module-exports": "^1.0.2",
            "css-loader": "^3.4.0",
            "less": "^3.10.3",
            "less-loader": "^5.0.0",
            "react": "^16.8.6",
            "react-dom": "^16.8.6",
            "style-loader": "^1.1.1",
            "webpack": "^4.44.1",
            "webpack-cli": "^4.7.2"
        },
        "dependencies": {
            "@babel/runtime": "^7.11.2",
            "detect-browser": "^5.1.1",
            "lodash": "^4.17.20",
            "md5": "^2.2.1",
            "moment": "^2.27.0",
            "react-router": "^5.2.0",
            "rimraf": "^3.0.2",
            "ts-loader": "^8.0.4",
            "typescript": "3.9.3",
            "umi": "^3.2.19",
            "umi-request": "^1.3.5",
            "uuid": "^8.3.0"
        }
    }

