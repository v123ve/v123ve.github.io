import{_ as e,c as t,j as n,a,o}from"./chunks/framework.BaR4VHXY.js";const b=JSON.parse('{"title":"ES6多继承","description":"","frontmatter":{"Created at":"2021-04-26T00:00:00.000Z","Last updated at":"2021-04-27T00:00:00.000Z","tags":["继承","ES6"]},"headers":[],"relativePath":"zh-CN/工作笔记/ES6多继承.md","filePath":"zh-CN/工作笔记/ES6多继承.md","lastUpdated":null}'),r={name:"zh-CN/工作笔记/ES6多继承.md"};function c(l,s,i,h,d,p){return o(),t("div",null,s[0]||(s[0]=[n("h1",{id:"es6多继承",tabindex:"-1"},[a("ES6多继承 "),n("a",{class:"header-anchor",href:"#es6多继承","aria-label":'Permalink to "ES6多继承"'},"​")],-1),n("h4",{id:"es6多继承-1",tabindex:"-1"},[a("ES6多继承 "),n("a",{class:"header-anchor",href:"#es6多继承-1","aria-label":'Permalink to "ES6多继承"'},"​")],-1),n("pre",null,[n("code",null,`class A {
    aNAME = '1';

    a() {
        console.log(this.aNAME);
        this.aa();
        this.aaa();
        console.log(this.rtc);
    }

    aa() {
        console.log(11);
    }

    aaa = () => {
        console.log(111);
    }
}

const B = Sup => class extends Sup {
    bNAME = '2';

    constructor(...args) {
        super(...args);
    }

    b() {
        console.log(this.bNAME);
        this.bb();
        this.bbb();
        console.log(this.rtc);
    }

    bb() {
        console.log(22);
    }

    bbb = () => {
        console.log(222);
    }
}
const C = Sup => class extends Sup {
    cNAME = '3';

    constructor(...args) {
        super(...args);
    }

    c() {
        console.log(this.cNAME);
        this.cc();
        this.ccc();
        console.log(this.rtc);
    }

    cc() {
        console.log(33);
    }

    ccc = () => {
        console.log(333);
    }
}

class MyArray extends C(B(A)) {
    rtc;

    constructor(arr) {
        super();
        this.rtc = arr;
    }

    MYth() {
        this.a();
        this.b();
        this.c();
    }
}

let arr1 = new MyArray([1, 2, 3, 4]);
arr1.MYth()
`)],-1)]))}const g=e(r,[["render",c]]);export{b as __pageData,g as default};
