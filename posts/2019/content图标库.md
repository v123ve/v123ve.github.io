---

Created at: 2022-06-28
Last updated at: 2022-06-28


---

# content图标库

#### content图标库

```html
 <html>
      <script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>
      <style type="text/css">
        span.icon-comm {
          display: inline-block;
          background-color: white;
          border-radius: 2px;
          border: 1px solid #d3d3d3;


​          
          line-
          margin-right: 10px;
          text-align: center;
          vertical-align: bottom;
        }
      </style>
      <body></body>
      <script type="text/javascript">
        (function(arr) {
          var style = $('style'),
            body = $('body'),
            styleHtml = '',
            bodyHtml = '',
            content = '',
            cssName = '';
          for (var i1 = 0; i1 < arr.length; i1++) {
            for (var i2 = 0; i2 < arr.length; i2++) {
              for (var i3 = 0; i3 < arr.length; i3++) {
                for (var i4 = 0; i4 < arr.length; i4++) {
                  content = arr[i1] + arr[i2] + arr[i3] + arr[i4];
                  cssName = 'icon-comm_' + content;
                  styleHtml += '.' + cssName + ':before{content:"\\' + content + '";}\n';
                  bodyHtml +=
                    '<span title="' + cssName + '"></span>\n';
                }
              }
            }
          }
          style.append(styleHtml);
          body.append(bodyHtml);
        })(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']);
      </script>
    </html>
```
