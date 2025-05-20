import{_ as a,c as t,a3 as i,o as d}from"./chunks/framework.BaR4VHXY.js";const h=JSON.parse('{"title":"加密解密","description":"","frontmatter":{"Created at":"2020-12-03T00:00:00.000Z","Last updated at":"2021-03-16T00:00:00.000Z","tags":["MD5"]},"headers":[],"relativePath":"zh-CN/工作笔记/加密解密.md","filePath":"zh-CN/工作笔记/加密解密.md","lastUpdated":null}'),c={name:"zh-CN/工作笔记/加密解密.md"};function r(b,n,e,o,x,l){return d(),t("div",null,n[0]||(n[0]=[i(`<h1 id="加密解密" tabindex="-1">加密解密 <a class="header-anchor" href="#加密解密" aria-label="Permalink to &quot;加密解密&quot;">​</a></h1><h3 id="加密解密-1" tabindex="-1">加密解密 <a class="header-anchor" href="#加密解密-1" aria-label="Permalink to &quot;加密解密&quot;">​</a></h3><h4 id="md5" tabindex="-1">MD5 <a class="header-anchor" href="#md5" aria-label="Permalink to &quot;MD5&quot;">​</a></h4><pre><code>&lt;script&gt;
  function md5(inputString) {
    var hc = &quot;0123456789abcdef&quot;;

    function rh(n) {
      var j, s = &quot;&quot;;
      for (j = 0; j &lt;= 3; j++) s += hc.charAt((n &gt;&gt; (j * 8 + 4)) &amp; 0x0F) + hc.charAt((n &gt;&gt; (j * 8)) &amp; 0x0F);
      return s;
    }

    function ad(x, y) {
      var l = (x &amp; 0xFFFF) + (y &amp; 0xFFFF);
      var m = (x &gt;&gt; 16) + (y &gt;&gt; 16) + (l &gt;&gt; 16);
      return (m &lt;&lt; 16) | (l &amp; 0xFFFF);
    }

    function rl(n, c) {
      return (n &lt;&lt; c) | (n &gt;&gt;&gt; (32 - c));
    }

    function cm(q, a, b, x, s, t) {
      return ad(rl(ad(ad(a, q), ad(x, t)), s), b);
    }

    function ff(a, b, c, d, x, s, t) {
      return cm((b &amp; c) | ((~b) &amp; d), a, b, x, s, t);
    }

    function gg(a, b, c, d, x, s, t) {
      return cm((b &amp; d) | (c &amp; (~d)), a, b, x, s, t);
    }

    function hh(a, b, c, d, x, s, t) {
      return cm(b ^ c ^ d, a, b, x, s, t);
    }

    function ii(a, b, c, d, x, s, t) {
      return cm(c ^ (b | (~d)), a, b, x, s, t);
    }

    function sb(x) {
      var i;
      var nblk = ((x.length + 8) &gt;&gt; 6) + 1;
      var blks = new Array(nblk * 16);
      for (i = 0; i &lt; nblk * 16; i++) blks[i] = 0;
      for (i = 0; i &lt; x.length; i++) blks[i &gt;&gt; 2] |= x.charCodeAt(i) &lt;&lt; ((i % 4) * 8);
      blks[i &gt;&gt; 2] |= 0x80 &lt;&lt; ((i % 4) * 8);
      blks[nblk * 16 - 2] = x.length * 8;
      return blks;
    }

    var i, x = sb(inputString), a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, olda, oldb, oldc, oldd;
    for (i = 0; i &lt; x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = ff(c, d, a, b, x[i + 10], 17, -42063);
      b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = hh(a, b, c, d, x[i + 5], 4, -378558);
      d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = ad(a, olda);
      b = ad(b, oldb);
      c = ad(c, oldc);
      d = ad(d, oldd);
    }
    return rh(a) + rh(b) + rh(c) + rh(d);
  }
&lt;/script&gt;
</code></pre><h4 id="cryptojs" tabindex="-1">CryptoJS <a class="header-anchor" href="#cryptojs" aria-label="Permalink to &quot;CryptoJS&quot;">​</a></h4><pre><code>import CryptoJS from &#39;crypto-js&#39;;
import { safeParse } from &#39;../../../utils&#39;;

/**
 * 加密一个 json
 * @param param 要加密的内容
 * @param key 加密的key
 * json --&gt; jsonStr --&gt; base64 --&gt; AES加密 --&gt; 转为字符串 --&gt; URI编码
 */
export function myEncrypt(param, key) {
  // eslint-disable-next-line max-len
  return encodeURIComponent(CryptoJS.AES.encrypt(window.btoa(JSON.stringify(param)), key).toString());
}

/**
 * 解密一个 URI编码
 * @param param 要解密的内容
 * @param key 解密的key
 * URI编码 --&gt; 转为字符串 --&gt; AES加密 --&gt; base64 --&gt; jsonStr --&gt; json
 */
export function myDecode(param, key) {
  return safeParse(window.atob(CryptoJS.AES.decrypt(decodeURIComponent(param) || &#39;&#39;, key).toString(CryptoJS.enc.Utf8)), {});
}
</code></pre>`,6)]))}const f=a(c,[["render",r]]);export{h as __pageData,f as default};
