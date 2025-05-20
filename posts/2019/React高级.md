---

Created at: 2021-03-05
Last updated at: 2021-12-01
Source URL: https://blog.csdn.net/tcy83/article/details/80427195
tags: 
  - umi
  - dva
  - saga
  - 拖拽

---

# React高级


## ReactDiff

![[../_resources/unknown_filename-caac6b69.png]]

## ES6-Generator

#### 基本介绍

generator函数与普通的函数区别是在定义的时候有个*
引入了yield这个关键字，分析下这个执行过程
(1)创建了h对象，指向helloGenerator的句柄，
(2)第一次调用nex()，执行到"yield hello"，暂缓执行,并返回了"hello"
(3)第二次调用next()，继续上一次的执行，执行到"yield generator",暂缓执行，并返回了"generator"。
(4)第三次调用next(),直接执行return，并返回done:true，表明结束。
经过上面的分析，yield实际就是暂缓执行的标示，每执行一次next()，相当于指针移动到下一个yield位置。
总结一下，Generator函数是ES6提供的一种异步编程解决方案。通过yield标识位和next()方法调用，实现函数的分段执行。

    function* helloGenerator() {
       yield "hello";
       yield "generator";
       return;
    }
    //没有执行
    helloGenerator(); 
    // 仅仅是创建了这个函数的句柄，并没有实际执行
    // { value: 'hello', done: false }
    console.log(h.next());
    // { value: 'generator', done: false }
    console.log(h.next());
    // { value: 'undefined', done: true }
    console.log(h.next());


#### generator与迭代器

generator支持for-of循环，每次循环相当于next()
1、第一执行next()，运行"yield x+y"，并返回x+y的运算结果11；
2、第二次执行next()，第一次运行到yield x+y，就将结果返回，实际没有执行z的赋值；第二次运行时，执行的是let z=undefined，所以运算结果是NaN。
next()方法是可以带参数的，其中的参数就替换了上一次yield执行的结果。

    function* gen(x,y){
      let z= yield x+y;
      let result = yield z*x;
      return result
    }
    var g = gen(5,6);
    // {value: 11, done: false}
    console.log(g.next());
    // {value: NaN, done: false}
    console.log(g.next());
    var e = gen(5,6);
    // {value: 11, done: false}
    console.log(e.next());
    // {value: 55, done: false}
    console.log(e.next(11));


next()方法执行后，会返回yield后面表达式的运算结果，将上一次的运算结果，作为下一次的入参传入

    function* gen(x,y){
      let z= yield x+y;
      let result = yield z*x;
      return result
    }
    var g = gen(5,6);
    // {value: 11, done: false}
    var i =g.next();
    // {value: 55, done: false}
    g.next(i.value);


一般用法

    function* gen(x,y){
       let z,result;
       yield z= x+y;
       yield result = z*x;
       return result
    }
    var g = gen(5,6);
    // {value: 11, done: false}
    g.next();
    // {value: 55, done: false}
    g.next();


执行return()方法后就返回done:true，Generator 函数遍历终止，后面的yield 3不会再执行了。return()也可以带参数。

    function* gen(x,y){
      yield 1;
      yield 2;
      yield 3;
    }
    var g = gen();
    // {value: 1, done: false}
    g.next();
    // {value: 2, done: false}
    g.next();
    // {value: 5, done: true}
    g.return(5);
    // {value: undefined, done: true}
    g.next();


#### yield 表达式

yield是Generator函数的暂缓执行的标识，对于yield只能配合Generator函数使用
yield* 是委托提取器，当执行yield* 时，实际是遍历后面的Generator函数。
yield* 后面只能适配Generator函数

    function* foo(){
    yield "a";
    yield "b";
    }
    function* gen(x,y){
      yield 1;
      yield 2;
      yield* foo();
      yield 3;
    }
    var g = gen();
    // {value: 1, done: false}
    console.log(g.next());
    // {value: 2, done: false}
    console.log(g.next());
    // {value: "a", done: true}
    console.log(g.next());
    // {value: "b", done: true}
    console.log(g.next());
    // {value: "3", done: true}
    console.log(g.next());


#### 应用

Generator函数可以随心所欲的交出和恢复函数的执行权，yield交出执行权，next()恢复执行权。

1. 协程可以理解成多线程间的协作，比如说A，B两个线程根据实际逻辑控制共同完成某个任务，A运行一段时间后，暂缓执行，交由B运行，B运行一段时间后，再交回A运行，直到运行任务完成。对于JavaScript单线程来说，我们可以理解为函数间的协作，由多个函数间相互配合完成某个任务。

        //大厨的活
       function* chef(){
          console.log("fired chicken");//炒鸡
          yield "worker";//交由伙计处理
          console.log("sdd ingredients");//上料
          yield "worker";//交由伙计处理
       }
       //伙计的活
       function* worker(){
           console.log("prepare chicken");//准备工作
           yield "chef";//交由大厨处理
           console.log("stewed chicken");//炖鸡
           yield "chef";//交由大厨处理
           console.log("serve chicken");//上菜
       }
       var ch = chef();
       var wo = worker();
       //流程控制
       function run(gen){
           var v = gen.next();
           if(v.value =="chef"){
              run(ch);
           }else if(v.value =="worker"){
           	  run(wo);
           }
       }
       run(wo);//开始执行
       // prepare chicken
       // fired chicken
       // stewed chicken
       // sdd ingredients
       // serve chicken
    
2. 异步编程,Generator函数是ES6提供的一种异步编程解决方案,解决异步编程的两大问题回调地狱、异步流控

        //准备
       function prepare(sucess){
            setTimeout(function(){console.log("prepare chicken");sucess();},500)
       }
       //炒鸡
       function fired(sucess){
            setTimeout(function(){console.log("fired chicken");sucess();},500)
       }
       //炖鸡
       function stewed(sucess){
            setTimeout(function(){console.log("stewed chicken");sucess();},500)
       }
       //上料
       function sdd(sucess){
            setTimeout(function(){console.log("sdd chicken");sucess();},500)
       }
       //上菜
       function serve(sucess){
            setTimeout(function(){console.log("serve chicken");sucess();},500)
       }
      //流程控制
      function run(fn){
        const gen = fn();
        function next() {
            //返回工序函数的句柄给result
            const result = gen.next();
            if (result.done) return;//结束
            // result.value就是yield返回的值，是各个工序的函数
            result.value(next);//next作为入参，即本工序成功后，执行下一工序
        }
        next();
      };
      //工序
      function* task(){
         yield prepare;
         yield fired;
         yield stewed;
         yield sdd;
         yield serve;
      }
      run(task);//开始执行
       // prepare chicken
       // fired chicken
       // stewed chicken
       // sdd ingredients
       // serve chicken
    

## redux-saga

[redux-saga](https://redux-saga-in-chinese.js.org/)

#### fork

创建一个新的进程或者线程，并发发送请求。

    function* user() {
      // 监听 FETCH_REQUEST action
      yield takeEvery('FETCH_REQUEST', fetch_user);
    }
    // 并发发送请求
    function* fetch_user() {
      const [users, todos] = [
        yield fork(fetchResource, 'https://jsonplaceholder.typicode.com/users'),
        yield fork(fetchResource, 'https://jsonplaceholder.typicode.com/todos')
      ]
    }
    function* fetchResource(resource) {
      const data = yield call(axios.get, resource);
      // 获取 call 数据，触发成功后的 action
      yield put({ type: 'FETCH_SUCESS', uu: data });
    }


#### call

发送 api 请求

#### put

发送对应的 dispatch，触发对应的 action

#### takeEvery

监听对应的 action；
每一次 dispatch 都会触发；
例如：点击一个新增的按钮，2s 后触发新增动作，在2s内不断点击按钮，这时候，每一次点击，都是有效的。
yield takeEvery('FETCH_USER', fetch_user);

#### takeLatest

监听对应的 action；
只会触发最后一次 dispatch；
例如：点击一个新增的按钮，2s 后触发新增动作，在2s内不断点击按钮，这时候，只有最后一次点击是有效的。
yield takeLatest('FETCH_USER', fetch_user);

#### all

跟 fork 一样，同时并发多个 action，没有顺序。
yield all([
...rootUser,
add()
])

## dva

[Dva](https://dvajs.com/api/)

### Model

model 是 dva 中最重要的概念。

#### namespace

model 的命名空间，同时也是他在全局 state 上的属性，只能用字符串，不支持通过 . 的方式创建多层命名空间。

#### state

初始值，优先级低于传给 dva() 的 opts.initialState。

    const app = dva({
      initialState: { count: 1 },
    });
    app.model({
      namespace: 'count',
      state: 0,
    });
    // app.start() 后 state.count 为 1 


#### reducers

以 key/value 格式定义 reducer。用于处理同步操作，唯一可以修改 state 的地方。由 action 触发。

#### effects

以 key/value 格式定义 effect。用于处理异步操作和业务逻辑，不直接修改 state。由 action 触发，可以触发 action，可以和服务器交互，可以获取全局 state 的数据等等。
格式为 * (action, effects) => void 或 [* (action, effects) => void, { type }]
type 类型有：takeEvery takeLatest throttle watcher

#### subscriptions

以 key/value 格式定义 subscription。subscription 是订阅，用于订阅一个数据源，然后根据需要 dispatch 相应的 action。在 app.start() 时被执行。
数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。
格式为 ({ dispatch, history }, done) => unlistenFunction。
注意：如果要使用 app.unmodel()，subscription 必须返回 unlisten 方法，用于取消数据订阅。

#### 一般示例

    * asyncGetUser({ payload }, { call, put, select }) {
      const {
    	id,
    	callback,
      } = payload;
      const oprLog = {
    	oprType: OprType.配置,
    	oprContent,
    	oprDescription: '查询用户',
      };
      try {
    	const { data: { user } } = yield call(getUser, {
    	  params: {
    		id,
    	  },
    	});
    	const selectUser = yield select(({ myModel }) => myModel.selectUser);
    	yield put({
    	  type: 'save',
    	  payload: {
    		selectUser: user,
    	  },
    	});
    	if(callback){
    		callback(true);
    	}
    	Log.saveOperationLog({
    	  ...oprLog,
    	  oprResult: OprResult.SUCCESS,
    	});
      } catch (e) {
    	Log.saveOperationLog({
    	  ...oprLog,
    	  oprResult: OprResult.ERROR,
    	});
    	message.error(e.message);
    	if(callback){
    		callback(false);
    	}
      }
    },


#### 轮巡示例

    function* pollData({ call, put, select }) {
      while (true) {
        try {
          const pollingTime = 2 * 1000;
          yield delay(pollingTime);
        } catch (e) {
        }
      }
    }
    export default {
    	state: {
    		isFromPolling: false,
    	},
    	effects: {
    		watchPollData: [
    		  function* (sagaEffects) {
    			const { take, call, race } = sagaEffects;
    			while (true) {
    			  yield take('startPolling');
    			  yield race([call(pollData, sagaEffects), take('stopPolling')]);
    			}
    		  },
    		  { type: 'watcher' },
    		],
    	},
    	reducers: {
    		save(state, { payload }) {
    		  return {
    			...state,
    			...payload,
    		  };
    		},
    		startPolling(state) {
    		  return {
    			...state,
    			isFromPolling: true,
    		  };
    		},
    		stopPolling(state) {
    		  return {
    			...state,
    			isFromPolling: false,
    		  };
    		},
    	},
    }


#### 拖拽

      // 拖拽标识
      dragFlag: any = false;
    
      // 鼠标按下事件
      onMouseDown = ({ pageX, pageY }: any) => {
        try {
          const { getContainer } = this.props;
          const { modalStyle } = this.state;
          const wrapperContent = getContainer || document.body;
          const modalContent = this.titleRef.current.parentNode.parentNode.parentNode;
          const { width: maxWidth, height: maxHeight } = wrapperContent.getBoundingClientRect();
          const { width, height } = modalContent.getBoundingClientRect();
          // 差值坐标X
          const diffPageX = _.get(modalStyle, 'left', 0);
          // 差值坐标X
          const diffPageY = _.get(modalStyle, 'top', 0);
          // 起始坐标X
          const startPageX = pageX - diffPageX;
          // 起始坐标Y
          const startPageY = pageY - diffPageY;
          // 模态窗宽度
          const modalWidth = width;
          // 模态窗高度
          const modalHeight = height;
          // 最大坐标X
          const maxPageX = maxWidth - modalWidth;
          // 最大坐标Y
          const maxPageY = maxHeight - modalHeight;
          this.dragFlag = {
            startPageX,
            startPageY,
            maxPageX,
            maxPageY,
          };
          window.addEventListener('mouseup', this.onMouseUp);
          window.addEventListener('mousemove', this.onMouseMove);
        } catch (e) {
          console.error(e);
        }
      };
    
      // 鼠标移动事件
      onMouseMove = e => {
        e.cancelBubble = true;
        const { buttons } = e;
        if (buttons === 0) {
          this.onMouseUp();
          return;
        }
        if (this.dragFlag && this.titleRef.current) {
          const { startPageX, startPageY, maxPageX, maxPageY } = this.dragFlag;
          const { pageX, pageY } = e;
          // 当前坐标与中点的差值
          let top = pageY - startPageY;
          let left = pageX - startPageX;
          if (top < 0) {
            top = 0;
          }
          if (top > maxPageY) {
            top = maxPageY;
          }
          if (left < 0) {
            left = 0;
          }
          if (left > maxPageX) {
            left = maxPageX;
          }
          this.setState({
            modalStyle: {
              ...this.state.modalStyle,
              top,
              left,
            },
          });
        }
      };
    
      // 鼠标抬起事件
      onMouseUp = () => {
        const { onDragOver } = this.props;
        onDragOver && onDragOver(this.state?.modalStyle);
        this.dragFlag = false;
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseup', this.onMouseUp);
      };




