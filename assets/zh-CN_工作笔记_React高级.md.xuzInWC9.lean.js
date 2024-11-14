import{_ as t,c as n,a3 as a,o}from"./chunks/framework.BaR4VHXY.js";const p=JSON.parse('{"title":"React高级","description":"","frontmatter":{"Created at":"2021-03-05T00:00:00.000Z","Last updated at":"2021-12-01T00:00:00.000Z","Source URL":"https://blog.csdn.net/tcy83/article/details/80427195","tags":["umi","dva","saga","拖拽"]},"headers":[],"relativePath":"zh-CN/工作笔记/React高级.md","filePath":"zh-CN/工作笔记/React高级.md","lastUpdated":null}'),r={name:"zh-CN/工作笔记/React高级.md"};function l(s,e,i,c,d,u){return o(),n("div",null,e[0]||(e[0]=[a(`<h1 id="react高级" tabindex="-1">React高级 <a class="header-anchor" href="#react高级" aria-label="Permalink to &quot;React高级&quot;">​</a></h1><h2 id="reactdiff" tabindex="-1">ReactDiff <a class="header-anchor" href="#reactdiff" aria-label="Permalink to &quot;ReactDiff&quot;">​</a></h2><p>![[../_resources/unknown_filename-caac6b69.png]]</p><h2 id="es6-generator" tabindex="-1">ES6-Generator <a class="header-anchor" href="#es6-generator" aria-label="Permalink to &quot;ES6-Generator&quot;">​</a></h2><h4 id="基本介绍" tabindex="-1">基本介绍 <a class="header-anchor" href="#基本介绍" aria-label="Permalink to &quot;基本介绍&quot;">​</a></h4><p>generator函数与普通的函数区别是在定义的时候有个* 引入了yield这个关键字，分析下这个执行过程 (1)创建了h对象，指向helloGenerator的句柄， (2)第一次调用nex()，执行到&quot;yield hello&quot;，暂缓执行,并返回了&quot;hello&quot; (3)第二次调用next()，继续上一次的执行，执行到&quot;yield generator&quot;,暂缓执行，并返回了&quot;generator&quot;。 (4)第三次调用next(),直接执行return，并返回done:true，表明结束。 经过上面的分析，yield实际就是暂缓执行的标示，每执行一次next()，相当于指针移动到下一个yield位置。 总结一下，Generator函数是ES6提供的一种异步编程解决方案。通过yield标识位和next()方法调用，实现函数的分段执行。</p><pre><code>function* helloGenerator() {
   yield &quot;hello&quot;;
   yield &quot;generator&quot;;
   return;
}
//没有执行
helloGenerator(); 
// 仅仅是创建了这个函数的句柄，并没有实际执行
// { value: &#39;hello&#39;, done: false }
console.log(h.next());
// { value: &#39;generator&#39;, done: false }
console.log(h.next());
// { value: &#39;undefined&#39;, done: true }
console.log(h.next());
</code></pre><h4 id="generator与迭代器" tabindex="-1">generator与迭代器 <a class="header-anchor" href="#generator与迭代器" aria-label="Permalink to &quot;generator与迭代器&quot;">​</a></h4><p>generator支持for-of循环，每次循环相当于next() 1、第一执行next()，运行&quot;yield x+y&quot;，并返回x+y的运算结果11； 2、第二次执行next()，第一次运行到yield x+y，就将结果返回，实际没有执行z的赋值；第二次运行时，执行的是let z=undefined，所以运算结果是NaN。 next()方法是可以带参数的，其中的参数就替换了上一次yield执行的结果。</p><pre><code>function* gen(x,y){
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
</code></pre><p>next()方法执行后，会返回yield后面表达式的运算结果，将上一次的运算结果，作为下一次的入参传入</p><pre><code>function* gen(x,y){
  let z= yield x+y;
  let result = yield z*x;
  return result
}
var g = gen(5,6);
// {value: 11, done: false}
var i =g.next();
// {value: 55, done: false}
g.next(i.value);
</code></pre><p>一般用法</p><pre><code>function* gen(x,y){
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
</code></pre><p>执行return()方法后就返回done:true，Generator 函数遍历终止，后面的yield 3不会再执行了。return()也可以带参数。</p><pre><code>function* gen(x,y){
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
</code></pre><h4 id="yield-表达式" tabindex="-1">yield 表达式 <a class="header-anchor" href="#yield-表达式" aria-label="Permalink to &quot;yield 表达式&quot;">​</a></h4><p>yield是Generator函数的暂缓执行的标识，对于yield只能配合Generator函数使用 yield* 是委托提取器，当执行yield* 时，实际是遍历后面的Generator函数。 yield* 后面只能适配Generator函数</p><pre><code>function* foo(){
yield &quot;a&quot;;
yield &quot;b&quot;;
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
// {value: &quot;a&quot;, done: true}
console.log(g.next());
// {value: &quot;b&quot;, done: true}
console.log(g.next());
// {value: &quot;3&quot;, done: true}
console.log(g.next());
</code></pre><h4 id="应用" tabindex="-1">应用 <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用&quot;">​</a></h4><p>Generator函数可以随心所欲的交出和恢复函数的执行权，yield交出执行权，next()恢复执行权。</p><ol><li><p>协程可以理解成多线程间的协作，比如说A，B两个线程根据实际逻辑控制共同完成某个任务，A运行一段时间后，暂缓执行，交由B运行，B运行一段时间后，再交回A运行，直到运行任务完成。对于JavaScript单线程来说，我们可以理解为函数间的协作，由多个函数间相互配合完成某个任务。</p><pre><code> //大厨的活
</code></pre><p>function* chef(){     console.log(&quot;fired chicken&quot;);//炒鸡     yield &quot;worker&quot;;//交由伙计处理     console.log(&quot;sdd ingredients&quot;);//上料     yield &quot;worker&quot;;//交由伙计处理    }    //伙计的活    function* worker(){        console.log(&quot;prepare chicken&quot;);//准备工作        yield &quot;chef&quot;;//交由大厨处理        console.log(&quot;stewed chicken&quot;);//炖鸡        yield &quot;chef&quot;;//交由大厨处理        console.log(&quot;serve chicken&quot;);//上菜    }    var ch = chef();    var wo = worker();    //流程控制    function run(gen){        var v = gen.next();        if(v.value ==&quot;chef&quot;){           run(ch);        }else if(v.value ==&quot;worker&quot;){           run(wo);        }    }    run(wo);//开始执行 // prepare chicken // fired chicken // stewed chicken // sdd ingredients // serve chicken</p></li><li><p>异步编程,Generator函数是ES6提供的一种异步编程解决方案,解决异步编程的两大问题回调地狱、异步流控</p><pre><code> //准备
function prepare(sucess){
     setTimeout(function(){console.log(&quot;prepare chicken&quot;);sucess();},500)
}
//炒鸡
function fired(sucess){
     setTimeout(function(){console.log(&quot;fired chicken&quot;);sucess();},500)
}
//炖鸡
function stewed(sucess){
     setTimeout(function(){console.log(&quot;stewed chicken&quot;);sucess();},500)
}
//上料
function sdd(sucess){
     setTimeout(function(){console.log(&quot;sdd chicken&quot;);sucess();},500)
}
//上菜
function serve(sucess){
     setTimeout(function(){console.log(&quot;serve chicken&quot;);sucess();},500)
}
</code></pre><p>//流程控制 function run(fn){ const gen = fn(); function next() { //返回工序函数的句柄给result const result = gen.next(); if (result.done) return;//结束 // result.value就是yield返回的值，是各个工序的函数 result.value(next);//next作为入参，即本工序成功后，执行下一工序 } next(); }; //工序 function* task(){ yield prepare; yield fired; yield stewed; yield sdd; yield serve; } run(task);//开始执行 // prepare chicken // fired chicken // stewed chicken // sdd ingredients // serve chicken</p></li></ol><h2 id="redux-saga" tabindex="-1">redux-saga <a class="header-anchor" href="#redux-saga" aria-label="Permalink to &quot;redux-saga&quot;">​</a></h2><p><a href="https://redux-saga-in-chinese.js.org/" target="_blank" rel="noreferrer">redux-saga</a></p><h4 id="fork" tabindex="-1">fork <a class="header-anchor" href="#fork" aria-label="Permalink to &quot;fork&quot;">​</a></h4><p>创建一个新的进程或者线程，并发发送请求。</p><pre><code>function* user() {
  // 监听 FETCH_REQUEST action
  yield takeEvery(&#39;FETCH_REQUEST&#39;, fetch_user);
}
// 并发发送请求
function* fetch_user() {
  const [users, todos] = [
    yield fork(fetchResource, &#39;https://jsonplaceholder.typicode.com/users&#39;),
    yield fork(fetchResource, &#39;https://jsonplaceholder.typicode.com/todos&#39;)
  ]
}
function* fetchResource(resource) {
  const data = yield call(axios.get, resource);
  // 获取 call 数据，触发成功后的 action
  yield put({ type: &#39;FETCH_SUCESS&#39;, uu: data });
}
</code></pre><h4 id="call" tabindex="-1">call <a class="header-anchor" href="#call" aria-label="Permalink to &quot;call&quot;">​</a></h4><p>发送 api 请求</p><h4 id="put" tabindex="-1">put <a class="header-anchor" href="#put" aria-label="Permalink to &quot;put&quot;">​</a></h4><p>发送对应的 dispatch，触发对应的 action</p><h4 id="takeevery" tabindex="-1">takeEvery <a class="header-anchor" href="#takeevery" aria-label="Permalink to &quot;takeEvery&quot;">​</a></h4><p>监听对应的 action； 每一次 dispatch 都会触发； 例如：点击一个新增的按钮，2s 后触发新增动作，在2s内不断点击按钮，这时候，每一次点击，都是有效的。 yield takeEvery(&#39;FETCH_USER&#39;, fetch_user);</p><h4 id="takelatest" tabindex="-1">takeLatest <a class="header-anchor" href="#takelatest" aria-label="Permalink to &quot;takeLatest&quot;">​</a></h4><p>监听对应的 action； 只会触发最后一次 dispatch； 例如：点击一个新增的按钮，2s 后触发新增动作，在2s内不断点击按钮，这时候，只有最后一次点击是有效的。 yield takeLatest(&#39;FETCH_USER&#39;, fetch_user);</p><h4 id="all" tabindex="-1">all <a class="header-anchor" href="#all" aria-label="Permalink to &quot;all&quot;">​</a></h4><p>跟 fork 一样，同时并发多个 action，没有顺序。 yield all([ ...rootUser, add() ])</p><h2 id="dva" tabindex="-1">dva <a class="header-anchor" href="#dva" aria-label="Permalink to &quot;dva&quot;">​</a></h2><p><a href="https://dvajs.com/api/" target="_blank" rel="noreferrer">Dva</a></p><h3 id="model" tabindex="-1">Model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;Model&quot;">​</a></h3><p>model 是 dva 中最重要的概念。</p><h4 id="namespace" tabindex="-1">namespace <a class="header-anchor" href="#namespace" aria-label="Permalink to &quot;namespace&quot;">​</a></h4><p>model 的命名空间，同时也是他在全局 state 上的属性，只能用字符串，不支持通过 . 的方式创建多层命名空间。</p><h4 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-label="Permalink to &quot;state&quot;">​</a></h4><p>初始值，优先级低于传给 dva() 的 opts.initialState。</p><pre><code>const app = dva({
  initialState: { count: 1 },
});
app.model({
  namespace: &#39;count&#39;,
  state: 0,
});
// app.start() 后 state.count 为 1 
</code></pre><h4 id="reducers" tabindex="-1">reducers <a class="header-anchor" href="#reducers" aria-label="Permalink to &quot;reducers&quot;">​</a></h4><p>以 key/value 格式定义 reducer。用于处理同步操作，唯一可以修改 state 的地方。由 action 触发。</p><h4 id="effects" tabindex="-1">effects <a class="header-anchor" href="#effects" aria-label="Permalink to &quot;effects&quot;">​</a></h4><p>以 key/value 格式定义 effect。用于处理异步操作和业务逻辑，不直接修改 state。由 action 触发，可以触发 action，可以和服务器交互，可以获取全局 state 的数据等等。 格式为 * (action, effects) =&gt; void 或 [* (action, effects) =&gt; void, { type }] type 类型有：takeEvery takeLatest throttle watcher</p><h4 id="subscriptions" tabindex="-1">subscriptions <a class="header-anchor" href="#subscriptions" aria-label="Permalink to &quot;subscriptions&quot;">​</a></h4><p>以 key/value 格式定义 subscription。subscription 是订阅，用于订阅一个数据源，然后根据需要 dispatch 相应的 action。在 app.start() 时被执行。 数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。 格式为 ({ dispatch, history }, done) =&gt; unlistenFunction。 注意：如果要使用 app.unmodel()，subscription 必须返回 unlisten 方法，用于取消数据订阅。</p><h4 id="一般示例" tabindex="-1">一般示例 <a class="header-anchor" href="#一般示例" aria-label="Permalink to &quot;一般示例&quot;">​</a></h4><pre><code>* asyncGetUser({ payload }, { call, put, select }) {
  const {
	id,
	callback,
  } = payload;
  const oprLog = {
	oprType: OprType.配置,
	oprContent,
	oprDescription: &#39;查询用户&#39;,
  };
  try {
	const { data: { user } } = yield call(getUser, {
	  params: {
		id,
	  },
	});
	const selectUser = yield select(({ myModel }) =&gt; myModel.selectUser);
	yield put({
	  type: &#39;save&#39;,
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
</code></pre><h4 id="轮巡示例" tabindex="-1">轮巡示例 <a class="header-anchor" href="#轮巡示例" aria-label="Permalink to &quot;轮巡示例&quot;">​</a></h4><pre><code>function* pollData({ call, put, select }) {
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
			  yield take(&#39;startPolling&#39;);
			  yield race([call(pollData, sagaEffects), take(&#39;stopPolling&#39;)]);
			}
		  },
		  { type: &#39;watcher&#39; },
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
</code></pre><h4 id="拖拽" tabindex="-1">拖拽 <a class="header-anchor" href="#拖拽" aria-label="Permalink to &quot;拖拽&quot;">​</a></h4><pre><code>  // 拖拽标识
  dragFlag: any = false;

  // 鼠标按下事件
  onMouseDown = ({ pageX, pageY }: any) =&gt; {
    try {
      const { getContainer } = this.props;
      const { modalStyle } = this.state;
      const wrapperContent = getContainer || document.body;
      const modalContent = this.titleRef.current.parentNode.parentNode.parentNode;
      const { width: maxWidth, height: maxHeight } = wrapperContent.getBoundingClientRect();
      const { width, height } = modalContent.getBoundingClientRect();
      // 差值坐标X
      const diffPageX = _.get(modalStyle, &#39;left&#39;, 0);
      // 差值坐标X
      const diffPageY = _.get(modalStyle, &#39;top&#39;, 0);
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
      window.addEventListener(&#39;mouseup&#39;, this.onMouseUp);
      window.addEventListener(&#39;mousemove&#39;, this.onMouseMove);
    } catch (e) {
      console.error(e);
    }
  };

  // 鼠标移动事件
  onMouseMove = e =&gt; {
    e.cancelBubble = true;
    const { buttons } = e;
    if (buttons === 0) {
      this.onMouseUp();
      return;
    }
    if (this.dragFlag &amp;&amp; this.titleRef.current) {
      const { startPageX, startPageY, maxPageX, maxPageY } = this.dragFlag;
      const { pageX, pageY } = e;
      // 当前坐标与中点的差值
      let top = pageY - startPageY;
      let left = pageX - startPageX;
      if (top &lt; 0) {
        top = 0;
      }
      if (top &gt; maxPageY) {
        top = maxPageY;
      }
      if (left &lt; 0) {
        left = 0;
      }
      if (left &gt; maxPageX) {
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
  onMouseUp = () =&gt; {
    const { onDragOver } = this.props;
    onDragOver &amp;&amp; onDragOver(this.state?.modalStyle);
    this.dragFlag = false;
    window.removeEventListener(&#39;mousemove&#39;, this.onMouseMove);
    window.removeEventListener(&#39;mouseup&#39;, this.onMouseUp);
  };
</code></pre>`,58)]))}const f=t(r,[["render",l]]);export{p as __pageData,f as default};
