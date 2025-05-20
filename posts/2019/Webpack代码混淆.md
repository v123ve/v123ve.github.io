---

Created at: 2024-10-17
Last updated at: 2024-10-17
tags: 
  - webpack

---

# Webpack代码混淆

## WebpackObfuscator 配置选项详解

https://github.com/javascript-obfuscator/javascript-obfuscator

### 1. compact

类型: `boolean` 默认: `true`  
移除空格和换行，使代码更紧凑。压缩代码输出为一行。

```javascript
// 原始代码
function greeting(name) {
    return "Hello " + name;
}

// 混淆后 (compact: true)
function greeting(a){return"Hello "+a}
```

### 2. controlFlowFlattening

类型: `boolean` 默认: `false`  
控制流扁平化通过引入switch语句使控制流更复杂。

```javascript
// 原始代码
function calculate(x) {
    return x * 2 + 1;
}

// 混淆后 (controlFlowFlattening: true)
function calculate(x) {
    var _0x123 = 0;
    switch (_0x123) {
        case 0:
            return (function() {
                var a = x * 2;
                _0x123 = 1;
                return a;
            })() + 1;
    }
}
```

### 3. controlFlowFlatteningThreshold

类型: `number` 默认: `0.75` 最小: `0` 最大: `1`  
控制流扁平化转换应用于任何给定节点的概率。

### 4. deadCodeInjection

类型: `boolean` 默认: `false`  
启用死代码注入。随机添加无效代码块到混淆代码中。

```javascript
// 原始代码
function sum(a, b) {
    return a + b;
}

// 混淆后 (deadCodeInjection: true)
function sum(a, b) {
    if (false) {
        console.log("永远不会执行的代码");
    }
    return a + b;
}
```

### 5. deadCodeInjectionThreshold

类型: `number` 默认: `0.4` 最小: `0` 最大: `1`  
设置将受死代码注入影响的节点百分比。

### 6. debugProtection

类型: `boolean` 默认: `false`  
使调试变得困难，几乎无法使用开发者工具的 `debugger` 函数。

```javascript
// 混淆后会添加类似代码：
setInterval(function() {
    debugger;
}, 4000);
```

### 7. debugProtectionInterval

类型: `number` 默认: `0`  
如果设置，将在控制台选项卡上强制调试模式，增加使用开发者工具的难度。

### 8. disableConsoleOutput

类型: `boolean` 默认: `false`  
禁用 `console` 调用，增加调试难度。

```javascript
// 原始代码
console.log("debug info");

// 混淆后 (disableConsoleOutput: true)
console.log = function() {};
```

### 9. domainLock

类型: `string[]` 默认: `[]`  
允许仅在特定域和/或子域上运行混淆源代码。

### 10. domainLockRedirectUrl

类型: `string` 默认: `about:blank`  
如果源代码未在指定域上运行，浏览器将重定向到此 URL。

### 11. forceTransformStrings

类型: `string[]` 默认: `[]`  
强制转换与传递的正则表达式模式匹配的字符串字面量。

```javascript
 {
  forceTransformStrings: [
   'some-important-value',
   'some-string_\d'
  ]
 }
```

### 12. identifierNamesCache

类型: `Object | null` 默认: `null`  
允许在多个源/文件的混淆中使用相同的标识符名称。

```javascript
const source1ObfuscationResult = JavaScriptObfuscator.obfuscate(
    `
        function foo(arg) {
           console.log(arg)
        }
        
        function bar() {
            var bark = 2;
        }
    `,
    {
        compact: false,
        identifierNamesCache: {},
        renameGlobals: true
    }
)

console.log(source1ObfuscationResult.getIdentifierNamesCache());
/*
    { 
        globalIdentifiers: {
            foo: '_0x5de86d',
            bar: '_0x2a943b'
        }
    }
*/



const source2ObfuscationResult = JavaScriptObfuscator.obfuscate(
    `
        // Expecting that these global functions are defined in another obfuscated file
        foo(1);
        bar();
        
        // Expecting that this global function is defined in third-party package
        baz();
    `,
    {
        compact: false,
        identifierNamesCache: source1ObfuscationResult.getIdentifierNamesCache(),
        renameGlobals: true
    }
)

console.log(source2ObfuscationResult.getObfuscatedCode());
/*
    _0x5de86d(0x1);
    _0x2a943b();
    baz();
 */
```

### 13. identifierNamesGenerator

类型: `string` 默认: `hexadecimal`  
dictionary: 字典
hexadecimal: 十六进制
mangled: 混淆
mangled-shuffled: 混淆并打乱
设置标识符名称生成器。

```javascript
// 原始代码
function calculateTotal(price, quantity) {
    return price * quantity;
}

// 混淆后 (identifierNamesGenerator: "hexadecimal")
function _0xa1b2(a, b) {
    return a * b;
}
```

### 14. identifiersDictionary

类型: `string[]` 默认: `[]`  
为 `identifierNamesGenerator: 'dictionary'` 选项设置标识符字典。

### 15. identifiersPrefix

类型: `string` 默认: `''`  
为所有全局标识符设置前缀，以避免多个文件之间的标识符冲突。

### 16. ignoreImports

类型: `boolean` 默认: `false`  
防止混淆 `require` 导入。

### 17. inputFileName

类型: `string` 默认: `''`  
设置源代码输入文件的名称。

### 18. log

类型: `boolean` 默认: `false`  
启用日志记录信息到控制台。

### 19. numbersToExpressions

类型: `boolean` 默认: `false`  
启用数字转换为表达式。

```javascript
// 原始代码
var a = 1 + 2;

// 混淆后 (numbersToExpressions: true)
var a = _0x123 + _0x456;

// input
const foo = 1234;

// output
const foo=-0xd93+-0x10b4+0x41*0x67+0x84e*0x3+-0xff8;
```

### 20. optionsPreset

类型: `string` 默认: `default`  
允许设置选项预设。

### 21. renameGlobals

类型: `boolean` 默认: `false`  
启用全局变量和函数名称的混淆。

### 22. renameProperties

类型: `boolean` 默认: `false`  
启用属性名称的重命名。

```javascript
// input
(function () {
    const foo = {
        prop1: 1,
        prop2: 2,
        calc: function () {
            return this.prop1 + this.prop2;
        }
    };
    
    console.log(foo.calc());
})();

// output
(function () {
    const _0x46529b = {
        '_0x10cec7': 0x1,
        '_0xc1c0ca': 0x2,
        '_0x4b961d': function () {
            return this['_0x10cec7'] + this['_0xc1c0ca'];
        }
    };
    console['log'](_0x46529b['_0x4b961d']());
}());
```

### 23. renamePropertiesMode

类型: `string` 默认: `safe`  
指定 `renameProperties` 选项的模式。

### 24. reservedNames

类型: `string[]` 默认: `[]`  
禁用与传递的正则表达式模式匹配的标识符的混淆。

```javascript
{
  reservedNames: [
    'console',
    'debugger'
    '^someVariable',
   'functionParameter_\d'
  ]
}
```

### 25. reservedStrings

类型: `string[]` 默认: `[]`  
禁用与传递的正则表达式模式匹配的字符串字面量的转换。

```javascript
{
  reservedStrings: [
    '^someString',
    'string_\d',
    'react-native',
   '\.\/src\/test',
   'some-string_\d'
  ]
}
```

### 26. seed

类型: `string|number` 默认: `0`  
设置随机生成器的种子。

### 27. selfDefending

类型: `boolean` 默认: `false`  
使输出代码对格式化和变量重命名具有抵抗力。

### 28. simplify

类型: `boolean` 默认: `true`  
启用额外的代码混淆通过简化。

```javascript
// 原始代码
var a = 1 + 2;

// 混淆后 (simplify: true)
var a = _0x123 + _0x456;

// input
if (condition1) {
    const foo = 1;
    const bar = 2;
  
    console.log(foo);
  
    return bar;
} else if (condition2) {
    console.log(1);
    console.log(2);
    console.log(3);
  
    return 4;
} else {
    return 5;
}

// output
if (condition1) {
    const foo = 0x1, bar = 0x2;
    return console['log'](foo), bar;
} else
    return condition2 ? (console['log'](0x1), console['log'](0x2), console['log'](0x3), 0x4) : 0x5;
```

### 29. sourceMap

类型: `boolean` 默认: `false`  
启用混淆代码的源映射生成。

### 30. sourceMapBaseUrl

类型: `string` 默认: `''`  
设置源映射导入 URL 的基本 URL。

### 31. sourceMapFileName

类型: `string` 默认: `''`  
设置输出源映射的文件名。

### 32. sourceMapMode

类型: `string` 默认: `separate`  
指定源映射生成模式。

### 33. sourceMapSourcesMode

类型: `string` 默认: `sources-content`  
控制源映射的 `sources` 和 `sourcesContent` 字段。

### 34. splitStrings

类型: `boolean` 默认: `false`  
将字面字符串拆分为多个部分。

```javascript
// input
(function(){
    var test = 'abcdefg';
})();

// output
(function(){
    var _0x5a21 = 'ab' + 'cd' + 'ef' + 'g';
})();
```

### 35. splitStringsChunkLength

类型: `number` 默认: `10`  
设置拆分字符串的长度。

### 36. stringArray

类型: `boolean` 默认: `true`  
将字符串字面量移除并放入特殊数组中。

### 37. stringArrayCallsTransform

类型: `boolean` 默认: `true`  
启用对字符串数组调用的转换。

```javascript
function foo() {
    var k = {
        c: 0x2f2,
        d: '0x396',
        e: '0x397',
        f: '0x39a',
        g: '0x39d',
        h: 0x398,
        l: 0x394,
        m: '0x39b',
        n: '0x39f',
        o: 0x395,
        p: 0x395,
        q: 0x399,
        r: '0x399'
    };
    var c = i(k.d, k.e);
    var d = i(k.f, k.g);
    var e = i(k.h, k.l);
    var f = i(k.m, k.n);
    function i(c, d) {
        return b(c - k.c, d);
    }
    var g = i(k.o, k.p);
    var h = i(k.q, k.r);
}
function j(c, d) {
    var l = { c: 0x14b };
    return b(c - -l.c, d);
}
console[j(-'0xa6', -'0xa6')](foo());
function b(c, d) {
    var e = a();
    b = function (f, g) {
        f = f - 0xa3;
        var h = e[f];
        return h;
    };
    return b(c, d);
}
function a() {
    var m = [
        'string5',
        'string1',
        'log',
        'string3',
        'string6',
        'string2',
        'string4'
    ];
    a = function () {
        return m;
    };
    return a();
}
```

### 38. stringArrayCallsTransformThreshold

类型: `number` 默认: `0.5`  
调整调用字符串数组转换的概率。

### 39. stringArrayEncoding

类型: `string[]` 默认: `[]`  
对字符串数组值进行编码。

```javascript
{
  stringArrayEncoding: [
    'none',
    'base64',
    'rc4',
    'rc4-base64'
  ]
}
```

### 40. stringArrayIndexesType

类型: `string[]` 默认: `['hexadecimal-number']`  
控制字符串数组调用索引的类型。

### 41. stringArrayIndexShift

类型: `boolean` 默认: `true`  
启用所有字符串数组调用的额外索引偏移。

### 42. stringArrayRotate

类型: `boolean` 默认: `true`  
随机旋转字符串数组。

### 43. stringArrayShuffle

类型: `boolean` 默认: `true`  
随机打乱字符串数组项。

### 44. stringArrayWrappersCount

类型: `number` 默认: `1`  
设置每个根或函数作用域内字符串数组的包装器数量。

```javascript
// Input
const foo = 'foo';
const bar = 'bar';
        
function test () {
    const baz = 'baz';
    const bark = 'bark';
    const hawk = 'hawk';
}

const eagle = 'eagle';

// Output, stringArrayWrappersCount: 5
const _0x3f6c = [
    'bark',
    'bar',
    'foo',
    'eagle',
    'hawk',
    'baz'
];
const _0x48f96e = _0x2e13;
const _0x4dfed8 = _0x2e13;
const _0x55e970 = _0x2e13;
function _0x2e13(_0x33c4f5, _0x3f6c62) {
    _0x2e13 = function (_0x2e1388, _0x60b1e) {
        _0x2e1388 = _0x2e1388 - 0xe2;
        let _0x53d475 = _0x3f6c[_0x2e1388];
        return _0x53d475;
    };
    return _0x2e13(_0x33c4f5, _0x3f6c62);
}
const foo = _0x48f96e(0xe4);
const bar = _0x4dfed8(0xe3);
function test() {
    const _0x1c262f = _0x2e13;
    const _0x54d7a4 = _0x2e13;
    const _0x5142fe = _0x2e13;
    const _0x1392b0 = _0x1c262f(0xe7);
    const _0x201a58 = _0x1c262f(0xe2);
    const _0xd3a7fb = _0x1c262f(0xe6);
}
const eagle = _0x48f96e(0xe5);
```

### 45. stringArrayWrappersChainedCalls

类型: `boolean` 默认: `true`  
启用字符串数组包装器之间的链式调用。

```javascript
// Input
const foo = 'foo';
const bar = 'bar';
        
function test () {
    const baz = 'baz';
    const bark = 'bark';

    function test1() {
        const hawk = 'hawk';
        const eagle = 'eagle';
    } 
}

// Output, stringArrayWrappersCount: 5, stringArrayWrappersChainedCalls: true
const _0x40c2 = [
    'bar',
    'bark',
    'hawk',
    'eagle',
    'foo',
    'baz'
];
const _0x31c087 = _0x3280;
const _0x31759a = _0x3280;
function _0x3280(_0x1f52ee, _0x40c2a2) {
    _0x3280 = function (_0x3280a4, _0xf07b02) {
        _0x3280a4 = _0x3280a4 - 0x1c4;
        let _0x57a182 = _0x40c2[_0x3280a4];
        return _0x57a182;
    };
    return _0x3280(_0x1f52ee, _0x40c2a2);
}
const foo = _0x31c087(0x1c8);
const bar = _0x31c087(0x1c4);
function test() {
    const _0x848719 = _0x31759a;
    const _0x2693bf = _0x31c087;
    const _0x2c08e8 = _0x848719(0x1c9);
    const _0x359365 = _0x2693bf(0x1c5);
    function _0x175e90() {
        const _0x310023 = _0x848719;
        const _0x2302ef = _0x2693bf;
        const _0x237437 = _0x310023(0x1c6);
        const _0x56145c = _0x310023(0x1c7);
    }
}
```

### 46. stringArrayWrappersParametersMaxCount

类型: `number` 默认: `2`  
控制字符串数组包装器参数的最大数量。

### 47. stringArrayWrappersType

类型: `string` 默认: `variable`  
选择字符串数组包装器的类型。
'variable'：在每个作用域的顶部添加变量包装器。性能高。
'function'：在每个作用域的末尾添加函数包装器。

```javascript
// input
const foo = 'foo';

function test () {
    const bar = 'bar';
    console.log(foo, bar);
}

test();

// output function
const a = [
    'log',
    'bar',
    'foo'
];
const foo = d(0x567, 0x568);
function b(c, d) {
    b = function (e, f) {
        e = e - 0x185;
        let g = a[e];
        return g;
    };
    return b(c, d);
}
function test() {
    const c = e(0x51c, 0x51b);
    function e (c, g) {
        return b(c - 0x396, g);
    }
    console[f(0x51b, 0x51d)](foo, c);
    function f (c, g) {
        return b(c - 0x396, g);
    }
}
function d (c, g) {
    return b(g - 0x3e1, c);
}
test();
```

### 48. stringArrayThreshold 和 shuffleStringArray

类型: `number` 默认: `0.75` 最小: `0` 最大: `1`  
调整字符串字面量插入到字符串数组的概率。

```javascript
// 原始代码
const messages = {
    welcome: "Welcome",
    goodbye: "Goodbye"
};

// 混淆后
var _0x1234 = ['Goodbye', 'Welcome'];
var messages = {
    welcome: _0x1234[1],
    goodbye: _0x1234[0]
};
```

### 49. target

类型: `string` 默认: `browser`  
设置混淆代码的目标环境。
browser: 浏览器环境
browser-no-eval: 浏览器环境，禁用 eval
node: Node.js 环境

### 50. transformObjectKeys

类型: `boolean` 默认: `false`  
启用对象键的转换。

```javascript
// 原始代码
const config = {
    apiKey: "123",
    apiSecret: "456"
};

// 混淆后 (transformObjectKeys: true)
const config = {
    ["a" + "pi" + "Key"]: "123",
    ["a" + "pi" + "Secret"]: "456"
};

// input
(function(){
    var object = {
        foo: 'test1',
        bar: {
            baz: 'test2'
        }
    };
})();

// output
var _0x4735 = [
    'foo',
    'baz',
    'bar',
    'test1',
    'test2'
];
function _0x390c(_0x33d6b6, _0x4735f4) {
    _0x390c = function (_0x390c37, _0x1eed85) {
        _0x390c37 = _0x390c37 - 0x198;
        var _0x2275f8 = _0x4735[_0x390c37];
        return _0x2275f8;
    };
    return _0x390c(_0x33d6b6, _0x4735f4);
}
(function () {
    var _0x17d1b7 = _0x390c;
    var _0xc9b6bb = {};
    _0xc9b6bb[_0x17d1b7(0x199)] = _0x17d1b7(0x19c);
    var _0x3d959a = {};
    _0x3d959a[_0x17d1b7(0x198)] = _0x17d1b7(0x19b);
    _0x3d959a[_0x17d1b7(0x19a)] = _0xc9b6bb;
    var _0x41fd86 = _0x3d959a;
}());
```

### 51. unicodeEscapeSequence

类型: `boolean` 默认: `false`  
允许启用/禁用字符串转换为 Unicode 转义序列。

```javascript
// 原始代码
const message = "Hello";

// 混淆后 (unicodeEscapeSequence: true)
const message = "\u0048\u0065\u006C\u006C\u006F";
```

## webpack.config.js

```js
const WebpackObfuscator = require("webpack-obfuscator");

const babelLoader = {
  loader: "babel-loader",
  options: {
    plugins: ["@babel/plugin-proposal-optional-chaining"],
  },
};

module.exports = {
  resolve: {
    extensions: [".js", ".ts", ".json"],
  },
  mode: "development",
  entry: {
    index: "./webRTC/index.ts",
  },
  output: {
    filename: "MtVideo.js",
    path: __dirname + "/dist",
    libraryExport: "mtvideo",
    library: "mtvideo",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: "/node_modules",
        use: [
          babelLoader,
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: __dirname + "/node_modules",
        use: [babelLoader],
      },
    ],
  },
  // plugins: [
  //   // 创建一个 WebpackObfuscator 的实例并传入配置对象和一个空数组（第二个参数通常用于指定需要排除混淆的模块路径）
  //   new WebpackObfuscator(
  //     {
  //       compact: false,
  //       controlFlowFlattening: false,
  //       controlFlowFlatteningThreshold: 0,
  //       deadCodeInjection: false,
  //       deadCodeInjectionThreshold: 0,
  //       debugProtection: false,
  //       debugProtectionInterval: 0,
  //       disableConsoleOutput: false,
  //       domainLock: [],
  //       domainLockRedirectUrl: "about:blank",
  //       forceTransformStrings: [],
  //       identifierNamesCache: null,
  //       identifierNamesGenerator: "hexadecimal",
  //       identifiersDictionary: [],
  //       identifiersPrefix: "",
  //       ignoreImports: false,
  //       // inputFileName: "",
  //       log: false,
  //       numbersToExpressions: false,
  //       // optionsPreset: "default",
  //       renameGlobals: false,
  //       renameProperties: false,
  //       renamePropertiesMode: "safe",
  //       reservedNames: [],
  //       reservedStrings: [],
  //       seed: 0,
  //       selfDefending: false,
  //       simplify: false,
  //       sourceMap: false,
  //       // sourceMapBaseUrl: "",
  //       // sourceMapFileName: "",
  //       // sourceMapMode: "separate",
  //       // sourceMapSourcesMode: "sources-content",
  //       splitStrings: false,
  //       splitStringsChunkLength: 0,
  //       stringArray: false,
  //       stringArrayCallsTransform: true,
  //       stringArrayCallsTransformThreshold: 0,
  //       stringArrayEncoding: [],
  //       stringArrayIndexesType: ["hexadecimal-number"],
  //       stringArrayIndexShift: true,
  //       stringArrayRotate: true,
  //       stringArrayShuffle: true,
  //       stringArrayWrappersChainedCalls: true,
  //       stringArrayWrappersCount: 0,
  //       stringArrayWrappersParametersMaxCount: 2,
  //       stringArrayWrappersType: "variable",
  //       stringArrayThreshold: 0,
  //       target: "browser",
  //       transformObjectKeys: false,
  //       unicodeEscapeSequence: false,
  //     },
  //     [
  //       "lodash.js",
  //     ]
  //   ),
  // ],
};

```

