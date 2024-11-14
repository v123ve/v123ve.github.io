import{_ as o,c as r,j as e,a as t,o as s}from"./chunks/framework.BaR4VHXY.js";const w=JSON.parse('{"title":"iframe跨域","description":"","frontmatter":{"Created at":"2021-11-11T00:00:00.000Z","Last updated at":"2021-11-11T00:00:00.000Z","tags":["跨域","iframe"]},"headers":[],"relativePath":"zh-CN/工作笔记/iframe跨域.md","filePath":"zh-CN/工作笔记/iframe跨域.md","lastUpdated":null}'),d={name:"zh-CN/工作笔记/iframe跨域.md"};function a(i,n,c,l,f,m){return s(),r("div",null,n[0]||(n[0]=[e("h1",{id:"iframe跨域",tabindex:"-1"},[t("iframe跨域 "),e("a",{class:"header-anchor",href:"#iframe跨域","aria-label":'Permalink to "iframe跨域"'},"​")],-1),e("h4",{id:"iframe跨域-1",tabindex:"-1"},[t("iframe跨域 "),e("a",{class:"header-anchor",href:"#iframe跨域-1","aria-label":'Permalink to "iframe跨域"'},"​")],-1),e("p",null,"使用 postMessage()",-1),e("pre",null,[e("code",null,`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="gbk2312" />
    <title>启动页面</title>
    <style>
      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background: #333;
        color: #fff;
        overflow: hidden;
      }

      .loading {
        width: 100%;
        height: 100%;
        font-size: 8rem;
      }

      .pageStatus {
        position: absolute;
        top: 50%;
        left: 50%;
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <div >
      <span >解码器页面加载中...</span>
    </div>
    <script>
      window.onload = () => {
        // 获取请求参数
        window.portIndex = getUrlParam("p");
        let decodeConfigUrl = getUrlParam("c");
        decodeConfigUrl = (decodeConfigUrl || "")
          .replace(/:\\\\/g, "/")
          .replace(/:\\//g, "/")
          .replace(/\\\\/g, "/")
          .replace(/\\/\\//g, "/");
        // 路径前缀
        window.urlProtocol = "http://";
        window.localhost = window.urlProtocol + decodeConfigUrl.split("/")[0];
        if (!decodeConfigUrl) {
          setPageStatus("本地配置异常");
          return;
        }
        // 获取解码配置
        getDecodeConfig(urlProtocol + decodeConfigUrl).then(cfgTxt => {
          try {
            const decodeConfig = {};
            cfgTxt.split("\\n").forEach(v => {
              if (v.indexOf("=") !== -1) {
                const cfgStr = v.replace(/ /g, "").replace(/\\r/g, "");
                const cfgArr = cfgStr.split("=");
                decodeConfig[cfgArr[0]] = cfgArr[1];
              }
            });
            decodeConfig.portIndex = window.portIndex;
            window.decodeConfig = decodeConfig;
            console.warn(decodeConfig);
            const WsListenPort = decodeConfig.WsListenPort;
            const WsKeepAliveIntvMS = decodeConfig.WsKeepAliveIntvMS;
            if (!WsListenPort || !WsKeepAliveIntvMS) {
              throw new Error();
            }
            const wsUrl = \`\${window.localhost.replace(
              /http/g,
              "ws"
            )}:\${WsListenPort}/decoder/web/keepalive\`;
            createWebsocket(wsUrl);
            // 创建子页面
            //createDecodeFrame();
          } catch (e) {
            setPageStatus("本地配置异常");
          }
        });
      };

      // 获取请求参数
      function getUrlParam(name) {
        const reg = new RegExp(\`(^|&)\${name}=([^&]*)(&|$)\`);
        const r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
      }

      // 获取解码配置
      function getDecodeConfig(fileUrl) {
        return new Promise(resolve => {
          fetch(fileUrl)
            .then(function(response) {
              return response.text();
            })
            .then(function(decodeConfig) {
              if (decodeConfig) {
                resolve(decodeConfig);
              } else {
                setPageStatus("本地配置异常");
                resolve();
              }
            })
            .catch(() => {
              setPageStatus("本地配置异常");
              resolve();
            });
        });
      }

      // 设置错误提示
      function setPageStatus(pageStatus) {
        document.getElementById("pageStatus").innerText = pageStatus;
      }

      // 创建连接
      function createWebsocket(wsUrl) {
        const ws = new WebSocket(wsUrl);
        window.ws = ws;
        ws.onopen = () => {
          console.log("websocket 已连接");
          // 创建子页面
          createDecodeFrame();
          // 开启保活
          openWebsocketKeepAlive();
        };
        ws.onclose = () => {
          console.log("websocket 已关闭");
          destoryDecodeFrame();
        };
        ws.onerror = () => {
          console.log("websocket 错误");
          destoryDecodeFrame();
        };
        ws.onmessage = message => {
          if (message) {
            if (message.SN === window.SN) {
              console.log("websocket 保活");
            }
          }
        };
      }

      // 生成uuid
      function uuid() {
        const s = [];
        const hexDigits = "0123456789abcdef";
        for (let i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";
        return s.join("");
      }

      // 开启websocket保活
      function openWebsocketKeepAlive() {
        window.websocketKeepAlive = setTimeout(() => {
          window.SN = uuid();
          window.ws.send(
            JSON.stringify({
              portIndex: window.portIndex,
              SN: window.SN
            })
          );
          closeWebsocketKeepAlive();
          openWebsocketKeepAlive();
        }, window.decodeConfig.WsKeepAliveIntvMS);
      }

      // 关闭websocket保活
      function closeWebsocketKeepAlive() {
        clearTimeout(window.websocketKeepAlive);
        delete window.websocketKeepAlive;
      }

      // 创建子页面
      function createDecodeFrame() {
        const decodeFrame = document.createElement("iframe");
        decodeFrame.setAttribute("id", "decodeFrame");
        decodeFrame.setAttribute("width", "100%");
        decodeFrame.setAttribute("height", window.innerHeight + "");
        decodeFrame.setAttribute("marginwidth", "0");
        decodeFrame.setAttribute("marginheight", "0");
        decodeFrame.setAttribute("frameborder", "no");
        decodeFrame.setAttribute("framespacing", "0");
        decodeFrame.setAttribute("scrolling", "no");
        decodeFrame.setAttribute("allowtransparency", "yes");
        decodeFrame.src =
          window.urlProtocol +
          window.decodeConfig.HostIP +
          ":" +
          window.decodeConfig.HostPort +
          "?decodeConfig=" +
          JSON.stringify(window.decodeConfig);
        const loadError = setTimeout(() => {
          destoryDecodeFrame();
        }, 5000);
        window.addEventListener(
          "message",
          e => {
            if (e && e.data === "success") {
              clearTimeout(loadError);
            }
          },
          false
        );
        decodeFrame.addEventListener(
          "load",
          function(e) {
            decodeFrame.removeEventListener("load", arguments.callee, false);
            if (decodeFrame.getAttribute("src") === "") {
              destoryDecodeFrame();
            } else {
              setPageStatus("");
            }
          },
          false
        );
        document.getElementById("decodeFrameContent").appendChild(decodeFrame);
      }

      // 销毁子页面
      function destoryDecodeFrame() {
        closeWebsocketKeepAlive();
        const decodeFrame = document.getElementById("decodeFrame");
        if (decodeFrame) {
          document.getElementById("decodeFrame").remove();
        }
        setPageStatus("解码器页面加载失败");
      }
    <\/script>
  </body>
</html>
`)],-1)]))}const u=o(d,[["render",a]]);export{w as __pageData,u as default};
