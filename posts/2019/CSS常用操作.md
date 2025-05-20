---

Created at: 2020-09-11
Last updated at: 2023-11-29
Source URL: https://blog.csdn.net/weixin_39634194/article/details/119399278


---

# CSS常用操作

## CSS常用操作

[超酷炫前端页面](https://alteredqualia.com/)

##### 在线引包

    <link rel="stylesheet" type="text/css" href="http://www.jeasyui.net/Public/js/easyui/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="http://www.jeasyui.net/Public/js/easyui/themes/icon.css">
    <script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="http://www.jeasyui.net/Public/js/easyui/jquery.easyui.min.js"></script>
    <script src="https://cdn.bootcss.com/lodash.js/4.17.11/lodash.min.js"></script>

##### 清除空行

`^\s*\n`

##### 字数过多显示

```css
 .title{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }


     .title{
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        // 打包时此属性为内联样式生效
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; 
     }
     style={{  '-webkit-box-orient': 'vertical' }}


    .title:after {
     content: "";
     position: absolute;
     right: 0;
     bottom: 0;
     margin-bottom: 10px;
     width: 20%;
     height: 20px;
     background: linear-grandient(to right, ....):
    }


    #### 居中显示
    ```css
    transform: translate(-50%, -50%);


     position: absolute;
     top: 50%;
     left: 50%;
     width: auto;
     max-width: 100%;
     height: auto;
     max-height: 100%;
     transform: translate(-50%,-50%);
```

#### 文字描边

    text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;

#### 伪类边框

    &:after {
      content: '';
      position: absolute;
      right: 25%;
      bottom: 0;
      margin-bottom: -7px;
      width: 50%;
      height: 3px;
      background: #334f89;
    }

##### 自动旋转

    @keyframes loadingRotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .rotateIcon {
      animation: loadingRotate 2s linear 0s infinite;
    }

##### 强制输入数字

    <input type="text" oninput="this.value=this.value.replace(/\D|^0/g,'')" onafterpaste="this.value=this.value.replace(/\D|^0/g,'')">


    .attr('oninput', 
    'this.value=this.value.replace(/\\D|^0/g,"")')
    .attr('onafterpaste', 
    'this.value=this.value.replace(/\\\\D|^0/g,"")')

##### 宽高自适应

img

    object-fit: cover;

video

    object-fit: fill;

##### svg修改颜色

    .svg { 
        filter: drop-shadow(100000px 0 0 #334f89);  
        transform: translate(-100000px);
    }

##### 校验字符串长度

    checkLength = str => {
     let valueLength = 0;
     for (let i = 0; i < str.length; i += 1) {
       if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
      valueLength += 2;
       } else {
      valueLength += 1;
       }
     }
     return valueLength;
    };

##### 边框重叠

// 横向、纵向

    margin: 0 0 -1px -1px;
    margin: -1px 1px 0 0;

##### css修改img

    img { 
        content:url(https://image.png);
    }

##### 禁止文本选中

    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;

##### area去除框线

    outline: 'none'

##### 背景渐变色及内发光

[css3 box-shadow阴影(外阴影与外发光)讲解](https://www.cnblogs.com/wuchuanlong/p/5980766.html)
内发光：水平阴影的位置 垂直阴影的位置 模糊距离 阴影的尺寸 阴影的颜色 将外部阴影 (outset) 改为内部阴影
box-shadow: h-shadow v-shadow blur spread color inset;
box-shadow: 0 0 3px 2px rgba(13, 95, 250, 0.2), 0 0 3px 2px rgba(13, 95, 250, 0.2) inset;
渐变色：
background: -webkit-linear-gradient(
top,#0c264c,#375888,#0c264c
);
border-image:linear-gradient(to right,#0a396c,#0f74cd,#8dd7f7,#0f74cd,#0a396c) 2 2;
对角渐变:

    .stars{
    width: 500px;
    height: 500px;
    background: linear-gradient(right bottom,rgba(22,36,67,0.77),rgba(74,121,240,0.77));
    background: -webkit-linear-gradient(right bottom,rgba(22,36,67,0.77),rgba(74,121,240,0.77));
    background: -moz-linear-gradient(right bottom,rgba(22,36,67,0.77),rgba(74,121,240,0.77));
    background: -o-linear-gradient(right bottom,rgba(22,36,67,0.77),rgba(74,121,240,0.77));
    }

柔和红：background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%);
柔和蓝：background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);

#### js遮罩转圈

        const loading = `
            <div style="position: absolute;width: 100%;height: 100%;top: 0;left: 0;background:black;-moz-opacity: 0.3;opacity:.30;filter: alpha(opacity=30);"></div>
            <div style="position: absolute;width: 100%;height: 100%;top: 0;left: 0;">
              <div style="position: relative;width: 25%;height: 100%;top: 0;left: 0;margin: 0 auto;">
                <span
                  style="display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(0); transform: rotate(0); animation-delay: .04s;"></span>
                <span
                  style="display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(45deg); transform: rotate(45deg); animation-delay: .19s;"></span>
                <span
                  style="display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(90deg); transform: rotate(90deg); animation-delay: .34s;"></span>
                <span
                  style="display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(135deg); transform: rotate(135deg); animation-delay: .49s;"></span>
                <span
                  style="display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(180deg); transform: rotate(180deg); animation-delay: .54s;"></span>
                <span
                  style="display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(225deg); transform: rotate(225deg); animation-delay: .69s;"></span>
                <span
                  style="display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(270deg); transform: rotate(270deg); animation-delay: .84s;"></span>
                <span
                  style="display: block;   border-radius: 2px 0 0 2px; background: #1abc9c; transform-origin: 165% 50%; position: absolute; top: 0; bottom: 0; left: 0; margin: auto; z-index: 2; -webkit-animation: circle-opac 1s linear infinite; animation: circle-opac 1s linear infinite;-webkit-transform: rotate(315deg); transform: rotate(315deg); animation-delay: .99s;"></span>
              </div>
            </div>
        `;
        const runkeyframes = `
            @keyframes circle-opac {
              0% {
                  opacity: .1;
              }
              100% {
                  opacity: .9;
              }
            }
        `;
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = runkeyframes;
        $(".searchbtn").css({
          "position": "relative",
          "pointer-events": "none"
        }).append(style).append(loading);
        setTimeout(() => {
          $(".searchbtn").css({
            "pointer-events": "auto"
          }).text("查看");
        }, 5000)
