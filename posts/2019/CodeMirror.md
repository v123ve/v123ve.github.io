---

Created at: 2020-09-09
Last updated at: 2020-09-11
tags: 
  - CodeMirror

---

# CodeMirror


## CodeMirror

`npm install react-codemirror2 codemirror --save`
`import { CodeEditor } from 'securityui'`

## CodeMirror 事件

1.onChange(editor, data, value)：文本被修改后触发

2.onBeforeChange(editor, data, value):内容改变前被调用

3.onCursorActivity(editor)：当鼠标点击内容区、选中内容、修改内容时被触发

4.onKeyHandled:(editor,name,event):当一个都dom元素的事件触发时调用，name为操作名称。

5.onInputRead(editor,data):当一个新的input从隐藏的textara读取出时调用

6.onBeforeSelectionChange(editor,data):当选中的区域被改变时调用

7.onUpdate(editor):编辑器内容被改变时触发

8.onFocus(editor):编辑器获得焦点式触发

9.onBlur(editor):编辑器失去焦点时触发

## CodeMirror 常用方法

getValue():获取编辑器文本内容

setValue(text):设置编辑器文本内容

getRange({line,ch},{line,ch}):获取指定范围内的文本内容第一个对象是起始坐标，第二个是结束坐标

replaceRange(replaceStr,{line,ch},{line,ch}):替换指定区域的内容

getLine(line)：获取指定行的文本内容

lineCount():统计编辑器内容行数

firstLine():获取第一行行数，默认为0，从开始计数

lastLine():获取最后一行行数

getLineHandle(line):根据行号获取行句柄

getSelection():获取鼠标选中区域的代码

replaceSelection(str):替换选中区域的代码

setSelection({line:num,ch:num1},{line:num2,ch:num3}):设置一个区域被选中

somethingSelected()：判断是否被选择

getEditor()：获取CodeMirror对像

undo()：撤销

redo():回退

## 组件

```
import React, {Component} from 'react';
    import {UnControlled as CodeMirror} from 'react-codemirror2'
    // 核心js,css文件
    import 'codemirror/lib/codemirror.js'
    import 'codemirror/lib/codemirror.css';
    // 主题风格-亮色
    import 'codemirror/theme/neo.css';
    import 'codemirror/theme/neat.css';
    // 代码模式
    import 'codemirror/mode/css/css';
    import 'codemirror/mode/htmlmixed/htmlmixed';
    import 'codemirror/mode/javascript/javascript';
    // ctrl+空格代码提示补全
    import 'codemirror/addon/hint/show-hint.css';
    import 'codemirror/addon/hint/show-hint';
    import 'codemirror/addon/hint/anyword-hint.js';
    // 代码高亮
    import 'codemirror/addon/selection/active-line';
    // 折叠代码
    import 'codemirror/addon/fold/foldgutter.css';
    import 'codemirror/addon/fold/foldcode.js';
    import 'codemirror/addon/fold/foldgutter.js';
    import 'codemirror/addon/fold/brace-fold.js';
    import 'codemirror/addon/fold/comment-fold.js';
    import 'codemirror/addon/edit/closebrackets';
    import 'codemirror/addon/edit/matchBrackets';
    // 修改样式
    import './style.less';
    
    /**
     * 代码编辑组件
     */
    export class CodeEditor extends Component {
      render() {
        const {value, getCodeEditor} = this.props;
        return (
          <div className='codeEditor'>
            <CodeMirror
              {...this.props}
              value={value}
              options={{
                // 主题
                // theme: 'neat',
                // 运行模式
                mode: 'htmlmixed',
                // 自动获取焦点
                autofocus: true,
                // 显示行号
                lineNumbers: true,
                // 自动缩进
                smartIndent: true,
                // 括号匹配，光标旁边的括号都高亮显示
                matchBrackets: true,
                // 光标行代码高亮
                styleActiveLine: true,
                // 键入时将自动关闭()[]{}''""
                autoCloseBrackets: true,
                // start-代码折叠
                lineWrapping: true,
                foldGutter: true,
                gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                // end-代码折叠
                extraKeys: {
                  "Ctrl": "autocomplete",
                  "Ctrl-S": function (editor) {
                  },
                  "Ctrl-Z": function (editor) {
                    editor.undo();
                  },
                  "F8": function (editor) {
                    editor.redo();
                  },
                },
              }}
              editorDidMount={editor => {
                if (getCodeEditor) getCodeEditor(editor)
              }}
            />
          </div>
        );
      }
    };
```




