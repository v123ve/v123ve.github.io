---

Created at: 2021-04-26
Last updated at: 2021-04-27
tags: 
  - 继承
  - ES6

---

# ES6多继承


#### ES6多继承

    class A {
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




