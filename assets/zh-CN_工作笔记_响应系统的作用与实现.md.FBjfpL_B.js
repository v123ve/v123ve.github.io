import{_ as s,c as a,a3 as p,o as e}from"./chunks/framework.BaR4VHXY.js";const g=JSON.parse('{"title":"响应系统的作用与实现","description":"","frontmatter":{"Created at":"2023-02-01T00:00:00.000Z","Last updated at":"2023-02-03T00:00:00.000Z"},"headers":[],"relativePath":"zh-CN/工作笔记/响应系统的作用与实现.md","filePath":"zh-CN/工作笔记/响应系统的作用与实现.md","lastUpdated":null}'),l={name:"zh-CN/工作笔记/响应系统的作用与实现.md"};function c(i,n,t,r,o,f){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="响应系统的作用与实现" tabindex="-1">响应系统的作用与实现 <a class="header-anchor" href="#响应系统的作用与实现" aria-label="Permalink to &quot;响应系统的作用与实现&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 存储副作用的桶</span></span>
<span class="line"><span>    const bucket = new WeakMap();</span></span>
<span class="line"><span>    // 用一个全局变量存储被注册的副作用函数</span></span>
<span class="line"><span>    let activeEffect;</span></span>
<span class="line"><span>    // effect 栈</span></span>
<span class="line"><span>    const effectStack = [];</span></span>
<span class="line"><span>    // 迭代器关键字</span></span>
<span class="line"><span>    const ITERATE_KEY = Symbol()</span></span>
<span class="line"><span>    // MAP类型迭代器关键字</span></span>
<span class="line"><span>    const MAP_KEY_ITERATE_KEY = Symbol()</span></span>
<span class="line"><span>    // 操作类型枚举值</span></span>
<span class="line"><span>    const TriggerType = {</span></span>
<span class="line"><span>        SET: &#39;SET&#39;,</span></span>
<span class="line"><span>        ADD: &#39;ADD&#39;,</span></span>
<span class="line"><span>        DELETE: &#39;DELETE&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 一个标记变量，代表是否进行追踪。默认值为 true , 即允许追踪</span></span>
<span class="line"><span>    let shouldTrack = true;</span></span>
<span class="line"><span>    // 定义一个 Map 实例，存储原始对象到代理对象的映射</span></span>
<span class="line"><span>    const reactiveMap = new Map();</span></span>
<span class="line"><span>    // 对非原始值的响应式方案</span></span>
<span class="line"><span>    // 从原型上继承属性,屏蔽原型引起的更新</span></span>
<span class="line"><span>    // isShallow 代表是否是浅响应</span></span>
<span class="line"><span>    // isReadOnly 代表是否只读</span></span>
<span class="line"><span>    function reactive(obj, isShallow = false, isReadOnly = false) {</span></span>
<span class="line"><span>        // 优先通过原始对象 obj 寻找之前创建的代理对象</span></span>
<span class="line"><span>        const existionProxy = reactiveMap.get(obj)</span></span>
<span class="line"><span>        if (existionProxy) return existionProxy</span></span>
<span class="line"><span>        // 否则，创建新的代理对象</span></span>
<span class="line"><span>        const proxy = new Proxy(obj, {</span></span>
<span class="line"><span>            // 拦截读取操作</span></span>
<span class="line"><span>            get(target, key, receiver) {</span></span>
<span class="line"><span>                // 代理对象可以通过 raw 属性访问原始数据</span></span>
<span class="line"><span>                if (key === &#39;raw&#39;) return target</span></span>
<span class="line"><span>                // 如果操作的目标对象是数组</span></span>
<span class="line"><span>                if (Array.isArray(target)) {</span></span>
<span class="line"><span>                    // 重写数组方法实现自定义行为,找出代理对象和原始对象的共有值</span></span>
<span class="line"><span>                    const arrayInstrumentations = {};</span></span>
<span class="line"><span>                    // 例:obj={};arr=reactive([obj]);console.log(arr.includes(arr[0]),arr.includes(obj))应均为 true</span></span>
<span class="line"><span>                    [&#39;includes&#39;, &#39;indexOf&#39;, &#39;lastIndexOf&#39;].forEach(method =&gt; {</span></span>
<span class="line"><span>                        const originMethod = Array.prototype[method]</span></span>
<span class="line"><span>                        arrayInstrumentations[method] = function (...args) {</span></span>
<span class="line"><span>                            // this 是代理对象，先在代理对象中查找，将结果存储到 res 中</span></span>
<span class="line"><span>                            let res = originMethod.apply(this, args)</span></span>
<span class="line"><span>                            if (res === false || res === -1) {</span></span>
<span class="line"><span>                                // res 为 false 说明没找到，通过 this.raw 拿到原始数值，再去其中查找并更新 res 值</span></span>
<span class="line"><span>                                res = originMethod.apply(this.raw, args)</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                            // 返回最终结果</span></span>
<span class="line"><span>                            return res</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    });</span></span>
<span class="line"><span>                    [&#39;push&#39;, &#39;pop&#39;, &#39;shift&#39;, &#39;unshift&#39;, &#39;splice&#39;].forEach(method =&gt; {</span></span>
<span class="line"><span>                        const originMethod = Array.prototype[method]</span></span>
<span class="line"><span>                        arrayInstrumentations[method] = function (...args) {</span></span>
<span class="line"><span>                            // 在调用原始方法之前，禁止追踪</span></span>
<span class="line"><span>                            shouldTrack = false</span></span>
<span class="line"><span>                            // 原始方法的默认行为</span></span>
<span class="line"><span>                            let res = originMethod.apply(this, args)</span></span>
<span class="line"><span>                            // 在调用原始方法之后，恢复原来的行为，即允许追踪</span></span>
<span class="line"><span>                            shouldTrack = true</span></span>
<span class="line"><span>                            // 返回最终结果</span></span>
<span class="line"><span>                            return res</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    });</span></span>
<span class="line"><span>                    // key 存在于 arrayInstrumentations 上,那么返回定义在 arrayInstrumentations 上的值</span></span>
<span class="line"><span>                    if (arrayInstrumentations.hasOwnProperty(key)) {</span></span>
<span class="line"><span>                        return Reflect.get(arrayInstrumentations, key, receiver)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 如果操作的目标对象是Set、Map</span></span>
<span class="line"><span>                if (target instanceof Set || target instanceof Map) {</span></span>
<span class="line"><span>                    // 重写Set、Map方法实现自定义行为</span></span>
<span class="line"><span>                    const mutableInstrumentations = {</span></span>
<span class="line"><span>                        get(key) {</span></span>
<span class="line"><span>                            // this 仍然指向的是代理对象，通过 raw 属性获取原始数据对象</span></span>
<span class="line"><span>                            const target = this.raw</span></span>
<span class="line"><span>                            // 先判断值是否已存在</span></span>
<span class="line"><span>                            const hadKey = target.has(key)</span></span>
<span class="line"><span>                            // 追踪依赖，建立联系</span></span>
<span class="line"><span>                            track(target, key);</span></span>
<span class="line"><span>                            // 只有在值存在的情况下，才需要触发响应</span></span>
<span class="line"><span>                            if (hadKey) {</span></span>
<span class="line"><span>                                const res = target.get(key)</span></span>
<span class="line"><span>                                // 如果是浅响应,直接返回原始值</span></span>
<span class="line"><span>                                if (isShallow) return res</span></span>
<span class="line"><span>                                // 如果得到的结果仍是可代理的数据，调用 reactive 将结果包装成响应式数据并返回</span></span>
<span class="line"><span>                                return typeof res === &#39;object&#39; ? reactive(res) : res</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        set(key, value) {</span></span>
<span class="line"><span>                            // this 仍然指向的是代理对象，通过 raw 属性获取原始数据对象</span></span>
<span class="line"><span>                            const target = this.raw</span></span>
<span class="line"><span>                            // 先判断值是否已存在</span></span>
<span class="line"><span>                            const hadKey = target.has(key)</span></span>
<span class="line"><span>                            // 获取旧值</span></span>
<span class="line"><span>                            const oldVal = target.get(key)</span></span>
<span class="line"><span>                            // 设置新值,获取原始数据，避免新值是响应式数据</span></span>
<span class="line"><span>                            const rawValue = value.raw || value</span></span>
<span class="line"><span>                            target.set(key, rawValue)</span></span>
<span class="line"><span>                            // 值不存在说明是 ADD 类型的操作，意味着新增</span></span>
<span class="line"><span>                            if (!hadKey) {</span></span>
<span class="line"><span>                                trigger(target, key, TriggerType.ADD)</span></span>
<span class="line"><span>                            } else if (oldVal !== newVal &amp;&amp; (oldVal === oldVal || newVal === newVal)) {</span></span>
<span class="line"><span>                                // 值存在说明是 SET 类型的操作，意味着修改</span></span>
<span class="line"><span>                                trigger(target, key, TriggerType.SET)</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        add(key) {</span></span>
<span class="line"><span>                            // this 仍然指向的是代理对象，通过 raw 属性获取原始数据对象</span></span>
<span class="line"><span>                            const target = this.raw</span></span>
<span class="line"><span>                            // 先判断值是否已存在</span></span>
<span class="line"><span>                            const hadKey = target.has(key)</span></span>
<span class="line"><span>                            // 只有在值不存在的情况下，才需要触发响应</span></span>
<span class="line"><span>                            // 设置新值,获取原始数据，避免新值是响应式数据</span></span>
<span class="line"><span>                            const rawValue = key.raw || key</span></span>
<span class="line"><span>                            const res = target.add(rawValue)</span></span>
<span class="line"><span>                            if (!hadKey) {</span></span>
<span class="line"><span>                                trigger(target, key, TriggerType.ADD)</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                            return res</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        delete(key) {</span></span>
<span class="line"><span>                            // this 仍然指向的是代理对象，通过 raw 属性获取原始数据对象</span></span>
<span class="line"><span>                            const target = this.raw</span></span>
<span class="line"><span>                            // 先判断值是否已存在</span></span>
<span class="line"><span>                            const hadKey = target.has(key)</span></span>
<span class="line"><span>                            // 只有在值存在的情况下，才需要触发响应</span></span>
<span class="line"><span>                            const res = target.delete(key)</span></span>
<span class="line"><span>                            if (hadKey) {</span></span>
<span class="line"><span>                                trigger(target, key, TriggerType.DELETE)</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                            return res</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        forEach(callback, thisArg) {</span></span>
<span class="line"><span>                            // this 仍然指向的是代理对象，通过 raw 属性获取原始数据对象</span></span>
<span class="line"><span>                            const target = this.raw</span></span>
<span class="line"><span>                            // 与 ITERATE_KEY 建立联系</span></span>
<span class="line"><span>                            track(target, ITERATE_KEY)</span></span>
<span class="line"><span>                            // wrap 函数用来把可代理的值转换为响应式数据</span></span>
<span class="line"><span>                            const wrap = (val) =&gt; typeof val === &#39;object&#39; ? reactive(val) : val</span></span>
<span class="line"><span>                            // 调用方法并传递</span></span>
<span class="line"><span>                            target.forEach((v, k) =&gt; {</span></span>
<span class="line"><span>                                // 通过 .call 调用并传递 thisArg ，用 wrap 函数包裹 value 和 key 后再传给 callback 实现深响应</span></span>
<span class="line"><span>                                callback.call(thisArg, wrap(v), wrap(k), this)</span></span>
<span class="line"><span>                            })</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        [Symbol.iterator]() {</span></span>
<span class="line"><span>                            // this 仍然指向的是代理对象，通过 raw 属性获取原始数据对象</span></span>
<span class="line"><span>                            const target = this.raw</span></span>
<span class="line"><span>                            // 获取原始迭代器方法</span></span>
<span class="line"><span>                            const itr = target[Symbol.iterator]()</span></span>
<span class="line"><span>                            // 与 ITERATE_KEY 建立联系</span></span>
<span class="line"><span>                            track(target, ITERATE_KEY)</span></span>
<span class="line"><span>                            // wrap 函数用来把可代理的值转换为响应式数据</span></span>
<span class="line"><span>                            const wrap = (val) =&gt; typeof val === &#39;object&#39; ? reactive(val) : val</span></span>
<span class="line"><span>                            // 返回自定义迭代器</span></span>
<span class="line"><span>                            return {</span></span>
<span class="line"><span>                                next() {</span></span>
<span class="line"><span>                                    // 调用原始迭代器的 next 方法获取 value 和 done</span></span>
<span class="line"><span>                                    const {</span></span>
<span class="line"><span>                                        value,</span></span>
<span class="line"><span>                                        done</span></span>
<span class="line"><span>                                    } = itr.next()</span></span>
<span class="line"><span>                                    // 如果 value 不是 undefine ，则对其包裹</span></span>
<span class="line"><span>                                    return {</span></span>
<span class="line"><span>                                        value: value ? [wrap(value[0]), wrap(value[1])] : value,</span></span>
<span class="line"><span>                                        done</span></span>
<span class="line"><span>                                    }</span></span>
<span class="line"><span>                                },</span></span>
<span class="line"><span>                                // 实现可迭代协议</span></span>
<span class="line"><span>                                [Symbol.iterator]() {</span></span>
<span class="line"><span>                                    return this</span></span>
<span class="line"><span>                                }</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        entries() {</span></span>
<span class="line"><span>                            // 等价于 [Symbol.iterator]</span></span>
<span class="line"><span>                            // this 仍然指向的是代理对象，通过 raw 属性获取原始数据对象</span></span>
<span class="line"><span>                            const target = this.raw</span></span>
<span class="line"><span>                            // 获取原始迭代器方法</span></span>
<span class="line"><span>                            const itr = target[Symbol.iterator]()</span></span>
<span class="line"><span>                            // 与 ITERATE_KEY 建立联系</span></span>
<span class="line"><span>                            track(target, ITERATE_KEY)</span></span>
<span class="line"><span>                            // wrap 函数用来把可代理的值转换为响应式数据</span></span>
<span class="line"><span>                            const wrap = (val) =&gt; typeof val === &#39;object&#39; ? reactive(val) : val</span></span>
<span class="line"><span>                            // 返回自定义迭代器</span></span>
<span class="line"><span>                            return {</span></span>
<span class="line"><span>                                next() {</span></span>
<span class="line"><span>                                    // 调用原始迭代器的 next 方法获取 value 和 done</span></span>
<span class="line"><span>                                    const {</span></span>
<span class="line"><span>                                        value,</span></span>
<span class="line"><span>                                        done</span></span>
<span class="line"><span>                                    } = itr.next()</span></span>
<span class="line"><span>                                    // 如果 value 不是 undefine ，则对其包裹</span></span>
<span class="line"><span>                                    return {</span></span>
<span class="line"><span>                                        value: value ? [wrap(value[0]), wrap(value[1])] : value,</span></span>
<span class="line"><span>                                        done</span></span>
<span class="line"><span>                                    }</span></span>
<span class="line"><span>                                },</span></span>
<span class="line"><span>                                // 实现可迭代协议</span></span>
<span class="line"><span>                                [Symbol.iterator]() {</span></span>
<span class="line"><span>                                    return this</span></span>
<span class="line"><span>                                }</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        values() {</span></span>
<span class="line"><span>                            // this 仍然指向的是代理对象，通过 raw 属性获取原始数据对象</span></span>
<span class="line"><span>                            const target = this.raw</span></span>
<span class="line"><span>                            // 获取原始迭代器方法</span></span>
<span class="line"><span>                            const itr = target.values()</span></span>
<span class="line"><span>                            // 与 ITERATE_KEY 建立联系</span></span>
<span class="line"><span>                            track(target, ITERATE_KEY)</span></span>
<span class="line"><span>                            // wrap 函数用来把可代理的值转换为响应式数据</span></span>
<span class="line"><span>                            const wrap = (val) =&gt; typeof val === &#39;object&#39; ? reactive(val) : val</span></span>
<span class="line"><span>                            // 返回自定义迭代器</span></span>
<span class="line"><span>                            return {</span></span>
<span class="line"><span>                                next() {</span></span>
<span class="line"><span>                                    // 调用原始迭代器的 next 方法获取 value 和 done</span></span>
<span class="line"><span>                                    const {</span></span>
<span class="line"><span>                                        value,</span></span>
<span class="line"><span>                                        done</span></span>
<span class="line"><span>                                    } = itr.next()</span></span>
<span class="line"><span>                                    // 如果 value 不是 undefine ，则对其包裹</span></span>
<span class="line"><span>                                    // value 是值，而非键值对，所以只需要包裹 value 即可</span></span>
<span class="line"><span>                                    return {</span></span>
<span class="line"><span>                                        value: value ? [wrap(value)] : value,</span></span>
<span class="line"><span>                                        done</span></span>
<span class="line"><span>                                    }</span></span>
<span class="line"><span>                                },</span></span>
<span class="line"><span>                                // 实现可迭代协议</span></span>
<span class="line"><span>                                [Symbol.iterator]() {</span></span>
<span class="line"><span>                                    return this</span></span>
<span class="line"><span>                                }</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        keys() {</span></span>
<span class="line"><span>                            // this 仍然指向的是代理对象，通过 raw 属性获取原始数据对象</span></span>
<span class="line"><span>                            const target = this.raw</span></span>
<span class="line"><span>                            // 获取原始迭代器方法</span></span>
<span class="line"><span>                            const itr = target.keys()</span></span>
<span class="line"><span>                            // 与 MAP_KEY_ITERATE_KEY 建立联系</span></span>
<span class="line"><span>                            track(target, MAP_KEY_ITERATE_KEY)</span></span>
<span class="line"><span>                            // wrap 函数用来把可代理的值转换为响应式数据</span></span>
<span class="line"><span>                            const wrap = (val) =&gt; typeof val === &#39;object&#39; ? reactive(val) : val</span></span>
<span class="line"><span>                            // 返回自定义迭代器</span></span>
<span class="line"><span>                            return {</span></span>
<span class="line"><span>                                next() {</span></span>
<span class="line"><span>                                    // 调用原始迭代器的 next 方法获取 value 和 done</span></span>
<span class="line"><span>                                    const {</span></span>
<span class="line"><span>                                        value,</span></span>
<span class="line"><span>                                        done</span></span>
<span class="line"><span>                                    } = itr.next()</span></span>
<span class="line"><span>                                    // 如果 value 不是 undefine ，则对其包裹</span></span>
<span class="line"><span>                                    // value 是值，而非键值对，所以只需要包裹 value 即可</span></span>
<span class="line"><span>                                    return {</span></span>
<span class="line"><span>                                        value: value ? [wrap(value)] : value,</span></span>
<span class="line"><span>                                        done</span></span>
<span class="line"><span>                                    }</span></span>
<span class="line"><span>                                },</span></span>
<span class="line"><span>                                // 实现可迭代协议</span></span>
<span class="line"><span>                                [Symbol.iterator]() {</span></span>
<span class="line"><span>                                    return this</span></span>
<span class="line"><span>                                }</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    // 如果读取的是 size 属性，它是一个访问器方法</span></span>
<span class="line"><span>                    // 指定第三个参数 receiver 为原始对象 target 从而 set.size 可以建立联系</span></span>
<span class="line"><span>                    if (key === &#39;size&#39;) {</span></span>
<span class="line"><span>                        // 调用 track 函数建立响应联系</span></span>
<span class="line"><span>                        track(target, ITERATE_KEY);</span></span>
<span class="line"><span>                        return Reflect.get(target, key, target)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    // 返回自定义方法</span></span>
<span class="line"><span>                    return mutableInstrumentations[key]</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 非只读的时候或 key 非 symbol 类型时才建立响应联系</span></span>
<span class="line"><span>                if (!isReadOnly &amp;&amp; typeof key !== &#39;symbol&#39;) track(target, key);</span></span>
<span class="line"><span>                // 得到原始值结果</span></span>
<span class="line"><span>                const res = Reflect.get(target, key, receiver)</span></span>
<span class="line"><span>                // 如果是浅响应,直接返回原始值</span></span>
<span class="line"><span>                if (isShallow) return res</span></span>
<span class="line"><span>                // 调用 reactive 将结果包装成响应式数据并返回</span></span>
<span class="line"><span>                // 如果是只读的，为做到深只读，遍历值</span></span>
<span class="line"><span>                if (typeof res === &#39;object&#39; &amp;&amp; res !== null)</span></span>
<span class="line"><span>                    return isReadOnly ? reactive(res, isShallow, isReadOnly) : reactive(res)</span></span>
<span class="line"><span>                return res</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            // 拦截设置操作</span></span>
<span class="line"><span>            // target 原始对象</span></span>
<span class="line"><span>            // receiver 代理对象</span></span>
<span class="line"><span>            set(target, key, newVal, receiver) {</span></span>
<span class="line"><span>                if (isReadOnly) {</span></span>
<span class="line"><span>                    console.warn(\`属性 \${key} 是只读的\`);</span></span>
<span class="line"><span>                    return true</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 获取旧值</span></span>
<span class="line"><span>                const oldVal = target[key]</span></span>
<span class="line"><span>                // 如果属性不存在，则说明是在添加新属性，否则是设置已有属性</span></span>
<span class="line"><span>                // 如果是数组则判断被设置的索引值是否小于数组长度</span></span>
<span class="line"><span>                const type = Array.isArray(target) ? Number(key) &lt; target.length ? TriggerType.SET : TriggerType.ADD : Object.prototype.hasOwnProperty.call(target, key) ? TriggerType.SET : TriggerType.ADD</span></span>
<span class="line"><span>                // 设置新值,获取原始数据，避免新值是响应式数据</span></span>
<span class="line"><span>                const rawValue = key.raw || key</span></span>
<span class="line"><span>                const res = Reflect.set(target, rawValue, newVal, receiver)</span></span>
<span class="line"><span>                // 如果 receiver 是 target 的代理对象</span></span>
<span class="line"><span>                if (target === receiver.raw) {</span></span>
<span class="line"><span>                    // 如果旧值不全等新值并且不是NaN，才触发响应</span></span>
<span class="line"><span>                    if (oldVal !== newVal &amp;&amp; (oldVal === oldVal || newVal === newVal)) trigger(target, key, type, newVal)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                return res</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            // 拦截 in 读取</span></span>
<span class="line"><span>            has(target, key) {</span></span>
<span class="line"><span>                track(target, key);</span></span>
<span class="line"><span>                return Reflect.has(target, key);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            // 拦截 for...in 读取</span></span>
<span class="line"><span>            ownKeys(target) {</span></span>
<span class="line"><span>                // 如果目标是数组则使用 length 作为 key 建立响应联系</span></span>
<span class="line"><span>                track(target, Array.isArray(target) ? &#39;length&#39; : ITERATE_KEY);</span></span>
<span class="line"><span>                return Reflect.ownKeys(target);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            // 拦截 delete 操作</span></span>
<span class="line"><span>            deleteProperty(target, key) {</span></span>
<span class="line"><span>                if (isReadOnly) {</span></span>
<span class="line"><span>                    console.warn(\`属性 \${key} 是只读的\`);</span></span>
<span class="line"><span>                    return true</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 检查属性是否是对象自己的属性</span></span>
<span class="line"><span>                const hadKey = Object.prototype.hasOwnProperty.call(target, key)</span></span>
<span class="line"><span>                const res = Reflect.deleteProperty(target, key)</span></span>
<span class="line"><span>                // 如果成功删除并且是自己的属性时，触发更新</span></span>
<span class="line"><span>                if (res &amp;&amp; hadKey) {</span></span>
<span class="line"><span>                    trigger(target, key, TriggerType.DELETE)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                return res</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        // 存储到 Map 中，从而避免重复创建</span></span>
<span class="line"><span>        reactiveMap.set(obj, proxy);</span></span>
<span class="line"><span>        return proxy</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // effect 函数用于注册副作用函数</span></span>
<span class="line"><span>    function effect(fn, options = {}) {</span></span>
<span class="line"><span>        // 清除之前的依赖关系</span></span>
<span class="line"><span>        function cleanup(effectFn) {</span></span>
<span class="line"><span>            for (let i = 0; i &lt; effectFn.effects.length; i++) {</span></span>
<span class="line"><span>                // 将 effectFn 从桶中对应的依赖集合中删除</span></span>
<span class="line"><span>                const bucketTargetKeyEffects = effectFn.effects[i];</span></span>
<span class="line"><span>                bucketTargetKeyEffects.delete(effectFn);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 重置 effectFn.effects</span></span>
<span class="line"><span>            effectFn.effects.length = 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        const effectFn = () =&gt; {</span></span>
<span class="line"><span>            // 清除</span></span>
<span class="line"><span>            cleanup(effectFn);</span></span>
<span class="line"><span>            // 当调用 effect 注册函数时,将副作用函数 fn 赋值给 activeEffect</span></span>
<span class="line"><span>            activeEffect = effectFn;</span></span>
<span class="line"><span>            // 在调用副作用函数前将当前函数压入栈中</span></span>
<span class="line"><span>            effectStack.push(effectFn);</span></span>
<span class="line"><span>            // 执行副作用函数,将执行结果保存</span></span>
<span class="line"><span>            const res = fn();</span></span>
<span class="line"><span>            // 在调用副作用函数后，将当前副作用函数弹出栈，并还原 activeEffect</span></span>
<span class="line"><span>            effectStack.pop();</span></span>
<span class="line"><span>            activeEffect = effectStack[effectStack.length - 1]</span></span>
<span class="line"><span>            // 返回执行结果</span></span>
<span class="line"><span>            return res</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 将 options 挂载到 effectFn 上</span></span>
<span class="line"><span>        effectFn.options = options</span></span>
<span class="line"><span>        // activeEffect.effects 用于存储所有与该副作用函数相关联的依赖集合,此行可省略？？？</span></span>
<span class="line"><span>        effectFn.effects = []</span></span>
<span class="line"><span>        // 非懒执行的副作用会立即执行</span></span>
<span class="line"><span>        if (!options.lazy) {</span></span>
<span class="line"><span>            effectFn();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 将副作用函数返回</span></span>
<span class="line"><span>        return effectFn</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 追踪:将副作用函数提取</span></span>
<span class="line"><span>    function track(target, key) {</span></span>
<span class="line"><span>        // 没有 activeEffect 或禁止追踪时，直接 return</span></span>
<span class="line"><span>        if (!activeEffect || !shouldTrack) return</span></span>
<span class="line"><span>        // 根据 target 从“桶”中取得 depsMap , 它也是一个 Map 类型: key --&gt; effects</span></span>
<span class="line"><span>        let depsMap = bucket.get(target);</span></span>
<span class="line"><span>        // 如果不存在,新建</span></span>
<span class="line"><span>        if (!depsMap) {</span></span>
<span class="line"><span>            bucket.set(target, (depsMap = new Map()))</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 根据 key 从 depsMap 中取得 bucketTargetKeyEffects , 它是一个 Set 类型</span></span>
<span class="line"><span>        let bucketTargetKeyEffects = depsMap.get(key);</span></span>
<span class="line"><span>        // 如果不存在,新建</span></span>
<span class="line"><span>        if (!bucketTargetKeyEffects) {</span></span>
<span class="line"><span>            depsMap.set(key, (bucketTargetKeyEffects = new Set()))</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 将当前的副作用函数添加到“桶”</span></span>
<span class="line"><span>        bucketTargetKeyEffects.add(activeEffect);</span></span>
<span class="line"><span>        // effects 就是一个与该副作用函数相关联的依赖集合,将其添加到 activeEffect.effects 数组中</span></span>
<span class="line"><span>        activeEffect.effects.push(bucketTargetKeyEffects);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 触发:把副作用函数从桶里取出并执行</span></span>
<span class="line"><span>    function trigger(target, key, type, newVal) {</span></span>
<span class="line"><span>        const depsMap = bucket.get(target);</span></span>
<span class="line"><span>        if (!depsMap) return</span></span>
<span class="line"><span>        const effects = depsMap.get(key);</span></span>
<span class="line"><span>        const effectsToRun = new Set();</span></span>
<span class="line"><span>        effects &amp;&amp; effects.forEach(effectFn =&gt; {</span></span>
<span class="line"><span>            // 如果 trigger 触发执行的副函数与当前正在执行的副函数相同</span></span>
<span class="line"><span>            // 说明在副作用函数中同时进行了读取和设置,导致无限循环,栈溢出</span></span>
<span class="line"><span>            // 不触发相同的副作用函数</span></span>
<span class="line"><span>            if (effectFn !== activeEffect) {</span></span>
<span class="line"><span>                effectsToRun.add(effectFn);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        // 只有属性发送新增或删除时，才触发 ITERATE_KEY 相关联的副作用函数重新执行</span></span>
<span class="line"><span>        // 如果操作类型是 SET ，并且目标对象是 Map 时，也触发</span></span>
<span class="line"><span>        if (type === TriggerType.ADD || type === TriggerType.DELETE || (type === TriggerType.SET &amp;&amp; Object.prototype.toString.call(target) === &#39;[object Map]&#39;)) {</span></span>
<span class="line"><span>            // 如果目标对象是数组，取出 length 相关的副作用函数</span></span>
<span class="line"><span>            if (type === TriggerType.ADD &amp;&amp; Array.isArray(target)) {</span></span>
<span class="line"><span>                const lengthEffects = depsMap.get(&#39;length&#39;)</span></span>
<span class="line"><span>                lengthEffects &amp;&amp; lengthEffects.forEach(effectFn =&gt; {</span></span>
<span class="line"><span>                    if (effectFn !== activeEffect) {</span></span>
<span class="line"><span>                        effectsToRun.add(effectFn);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            const iteraterEffects = depsMap.get(ITERATE_KEY)</span></span>
<span class="line"><span>            iteraterEffects &amp;&amp; iteraterEffects.forEach(effectFn =&gt; {</span></span>
<span class="line"><span>                // 如果 trigger 触发执行的副函数与当前正在执行的副函数相同</span></span>
<span class="line"><span>                // 说明在副作用函数中同时进行了读取和设置,导致无限循环,栈溢出</span></span>
<span class="line"><span>                // 不触发相同的副作用函数</span></span>
<span class="line"><span>                if (effectFn !== activeEffect) {</span></span>
<span class="line"><span>                    effectsToRun.add(effectFn);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 只有属性发送新增或删除时并且是 MAP 目标对象，才触发 MAP_KEY_ITERATE_KEY 相关联的副作用函数重新执行</span></span>
<span class="line"><span>        if ((type === TriggerType.ADD || type === TriggerType.DELETE) &amp;&amp; Object.prototype.toString.call(target) === &#39;[object Map]&#39;) {</span></span>
<span class="line"><span>            const iteraterEffects = depsMap.get(MAP_KEY_ITERATE_KEY)</span></span>
<span class="line"><span>            iteraterEffects &amp;&amp; iteraterEffects.forEach(effectFn =&gt; {</span></span>
<span class="line"><span>                // 如果 trigger 触发执行的副函数与当前正在执行的副函数相同</span></span>
<span class="line"><span>                // 说明在副作用函数中同时进行了读取和设置,导致无限循环,栈溢出</span></span>
<span class="line"><span>                // 不触发相同的副作用函数</span></span>
<span class="line"><span>                if (effectFn !== activeEffect) {</span></span>
<span class="line"><span>                    effectsToRun.add(effectFn);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 如果目标对象是数组，并且修改了 length 属性</span></span>
<span class="line"><span>        if (Array.isArray(target) &amp;&amp; key === &#39;length&#39;) {</span></span>
<span class="line"><span>            // 对应索引值大于或等于新的 length 值的元素，会被删除，因此将其副作用函数加入 effectsToRun 中</span></span>
<span class="line"><span>            depsMap.forEach((deps, depsKey) =&gt; {</span></span>
<span class="line"><span>                if (depsKey &gt;= newVal) {</span></span>
<span class="line"><span>                    deps &amp;&amp; deps.forEach(effectFn =&gt; {</span></span>
<span class="line"><span>                        if (effectFn !== activeEffect) {</span></span>
<span class="line"><span>                            effectsToRun.add(effectFn);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    });</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 把副作用函数从桶里取出并执行</span></span>
<span class="line"><span>        effectsToRun &amp;&amp; effectsToRun.forEach(effectFn =&gt; {</span></span>
<span class="line"><span>            // 如果副作用函数调度器存在,调用调度器并将副作用函数传递</span></span>
<span class="line"><span>            if (effectFn.options.scheduler) {</span></span>
<span class="line"><span>                effectFn.options.scheduler(effectFn);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                effectFn()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 定义一个任务队列</span></span>
<span class="line"><span>    const jobQueue = new Set();</span></span>
<span class="line"><span>    // 一个标志代表是否正在刷新队列</span></span>
<span class="line"><span>    let isFlushing = false;</span></span>
<span class="line"><span>    // 刷新队列</span></span>
<span class="line"><span>    function flushJob() {</span></span>
<span class="line"><span>        // 如果正在刷新队列，什么都不做</span></span>
<span class="line"><span>        if (isFlushing) return</span></span>
<span class="line"><span>        isFlushing = true</span></span>
<span class="line"><span>        // 创建一个 Promise 实例,用它将一个任务添加到微任务队列</span></span>
<span class="line"><span>        const p = Promise.resolve();</span></span>
<span class="line"><span>        p.then(() =&gt; {</span></span>
<span class="line"><span>            jobQueue.forEach(job =&gt; job())</span></span>
<span class="line"><span>        }).finally(() =&gt; {</span></span>
<span class="line"><span>            // 结束后重置 isFlushing</span></span>
<span class="line"><span>            isFlushing = false</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 实现计算属性并缓存不变值,实际是一个懒执行的副作用函数</span></span>
<span class="line"><span>    function computed(getter) {</span></span>
<span class="line"><span>        // value 用来缓存上一次计算的值</span></span>
<span class="line"><span>        let value</span></span>
<span class="line"><span>        // 用来标志是否需要重新计算值，为 true 表示“脏”，需要计算</span></span>
<span class="line"><span>        let dirty = true</span></span>
<span class="line"><span>        const effectFn = effect(getter, {</span></span>
<span class="line"><span>            lazy: true,</span></span>
<span class="line"><span>            // 添加调度器，在调度器中重置标志</span></span>
<span class="line"><span>            scheduler() {</span></span>
<span class="line"><span>                if (!dirty) {</span></span>
<span class="line"><span>                    dirty = true</span></span>
<span class="line"><span>                    // 当计算属性依赖的响应式数据变化时，手动调用 trigger 触发响应</span></span>
<span class="line"><span>                    trigger(obj, &#39;value&#39;)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        const obj = {</span></span>
<span class="line"><span>            // 当读取 value 时才执行 effectFn</span></span>
<span class="line"><span>            get value() {</span></span>
<span class="line"><span>                // 只有“脏”才计算值，并将得到的值缓存在 value 中</span></span>
<span class="line"><span>                if (dirty) {</span></span>
<span class="line"><span>                    value = effectFn();</span></span>
<span class="line"><span>                    dirty = false;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 当读取 value 时，手动调用 track 函数进行追踪</span></span>
<span class="line"><span>                track(obj, &#39;value&#39;)</span></span>
<span class="line"><span>                return value</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return obj;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // watch 观测响应式数据, source 是响应式数据， cb 是回调函数</span></span>
<span class="line"><span>    function watch(source, cb, options = {}) {</span></span>
<span class="line"><span>        // 递归读取</span></span>
<span class="line"><span>        function traverse(value, seen = new Set()) {</span></span>
<span class="line"><span>            // 如果要读取的数据是原始值，或者已被读取过，什么都不做</span></span>
<span class="line"><span>            if (typeof value !== &#39;object&#39; || value === null || seen.has(value)) return</span></span>
<span class="line"><span>            // 将数据添加到 seen 中，代表遍历的读取过了，避免死循环</span></span>
<span class="line"><span>            seen.add(value)</span></span>
<span class="line"><span>            // 暂不考虑数组</span></span>
<span class="line"><span>            // 假设 value 就是一个对象</span></span>
<span class="line"><span>            for (const key in value) {</span></span>
<span class="line"><span>                traverse(value[key], seen)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return value</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 定义 getter</span></span>
<span class="line"><span>        let getter</span></span>
<span class="line"><span>        // 如果 source 是函数，说明用户传递的是 getter ，直接赋值</span></span>
<span class="line"><span>        if (typeof source === &#39;function&#39;) {</span></span>
<span class="line"><span>            getter = source</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 否则递归读取</span></span>
<span class="line"><span>            getter = () =&gt; traverse(source)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 定义旧值和新值</span></span>
<span class="line"><span>        let newValue, oldValue</span></span>
<span class="line"><span>        // cleanup 用来存储用户注册的过期回调</span></span>
<span class="line"><span>        let cleanup</span></span>
<span class="line"><span>        // 定义 onInvalidate 函数</span></span>
<span class="line"><span>        function onInvalidate(fn) {</span></span>
<span class="line"><span>            // 将过期回调存储到 cleanup 中</span></span>
<span class="line"><span>            cleanup = fn</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 提取 scheduler 调度函数为一个独立的 job 函数</span></span>
<span class="line"><span>        function job() {</span></span>
<span class="line"><span>            // 在调度器中执行副作用函数，获得新值</span></span>
<span class="line"><span>            newValue = effectFn()</span></span>
<span class="line"><span>            // 在调用回调函数 cb 前，先调用过期回调</span></span>
<span class="line"><span>            if (cleanup) {</span></span>
<span class="line"><span>                cleanup()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 当数据变化时，调用回调函数，返回旧值和新值</span></span>
<span class="line"><span>            cb(newValue, oldValue, onInvalidate)</span></span>
<span class="line"><span>            // 更新旧值</span></span>
<span class="line"><span>            oldValue = newValue</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 触发读取操作，建立联系</span></span>
<span class="line"><span>        const effectFn = effect(() =&gt; getter(), {</span></span>
<span class="line"><span>            lazy: true,</span></span>
<span class="line"><span>            scheduler: () =&gt; {</span></span>
<span class="line"><span>                if (options.flush === &#39;post&#39;) {</span></span>
<span class="line"><span>                    const p = Promise.resolve();</span></span>
<span class="line"><span>                    p.then(job)</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    job()</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        // 当 immediate 为 true 时，立即执行 job ,从而触发回调执行</span></span>
<span class="line"><span>        if (options.immediate) {</span></span>
<span class="line"><span>            job()</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 手动调用副作用函数，拿到旧值</span></span>
<span class="line"><span>            oldValue = effectFn()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 对原始值的响应式方案</span></span>
<span class="line"><span>    // 将原始值转化为非原始值</span></span>
<span class="line"><span>    function ref(val) {</span></span>
<span class="line"><span>        // 在函数内部创建包裹对象</span></span>
<span class="line"><span>        const wrapper = {</span></span>
<span class="line"><span>            value: val</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 使用 Object.defineProperty 在 wrapper 对象上定义一个不可枚举且不可写的属性 __v_isRef ，并且值为 true</span></span>
<span class="line"><span>        Object.defineProperty(wrapper, &#39;__v_isRef&#39;, {</span></span>
<span class="line"><span>            value: true</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        // 将包裹对象变成响应式数据</span></span>
<span class="line"><span>        return reactive(wrapper)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 批量转换响应式数据</span></span>
<span class="line"><span>    function toRefs(obj) {</span></span>
<span class="line"><span>        const ret = {}</span></span>
<span class="line"><span>        for (const key in obj) {</span></span>
<span class="line"><span>            ret[key] = toRef(obj, key)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return ret</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 解决响应丢失问题</span></span>
<span class="line"><span>    // 例：obj=reactive({});newObj={...toRefs(obj)}</span></span>
<span class="line"><span>    function toRef(obj, key) {</span></span>
<span class="line"><span>        // 在函数内部创建包裹对象</span></span>
<span class="line"><span>        const wrapper = {</span></span>
<span class="line"><span>            get value() {</span></span>
<span class="line"><span>                return obj[key]</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            set value(val) {</span></span>
<span class="line"><span>                obj[key] = val</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 使用 Object.defineProperty 在 wrapper 对象上定义一个不可枚举且不可写的属性 __v_isRef ，并且值为 true</span></span>
<span class="line"><span>        Object.defineProperty(wrapper, &#39;__v_isRef&#39;, {</span></span>
<span class="line"><span>            value: true</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        // 将包裹对象变成响应式数据</span></span>
<span class="line"><span>        return wrapper</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 使用时自动脱 ref</span></span>
<span class="line"><span>    // 例：&lt;p&gt;{{foo}}&lt;/p&gt; 而非 &lt;p&gt;{{foo.value}}&lt;/p&gt;</span></span>
<span class="line"><span>    // 例：obj=reactive({});newObj=proxyRefs({...toRefs(obj)})</span></span>
<span class="line"><span>    function proxyRefs(target) {</span></span>
<span class="line"><span>        return new Proxy(target, {</span></span>
<span class="line"><span>            get(target, key, receiver) {</span></span>
<span class="line"><span>                const value = Reflect.get(target, key, receiver)</span></span>
<span class="line"><span>                return value.__v_isRef ? value.value : value</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            set(target, key, newVal, receiver) {</span></span>
<span class="line"><span>                // 获取真实值</span></span>
<span class="line"><span>                const value = target[key]</span></span>
<span class="line"><span>                // 如果是 ref ,设置其对应的 value 属性值</span></span>
<span class="line"><span>                if (value.__v_isRef) {</span></span>
<span class="line"><span>                    value.value = newVal</span></span>
<span class="line"><span>                    return true</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                return Reflect.set(target, key, newVal, receiver)</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    function main() {</span></span>
<span class="line"><span>        // 原始数据</span></span>
<span class="line"><span>        const data = {</span></span>
<span class="line"><span>            ok: true,</span></span>
<span class="line"><span>            text: 1,</span></span>
<span class="line"><span>            foo: 1,</span></span>
<span class="line"><span>            bar: 1,</span></span>
<span class="line"><span>            get getBar() {</span></span>
<span class="line"><span>                return this.bar</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        const proto = {}</span></span>
<span class="line"><span>        // 对原始数据的代理，每次访问及更改时进行处理</span></span>
<span class="line"><span>        const obj = reactive(data)</span></span>
<span class="line"><span>        const parent = reactive(proto)</span></span>
<span class="line"><span>        // 使用 parent 作为 obj 的原型</span></span>
<span class="line"><span>        Object.setPrototypeOf(obj, parent)</span></span>
<span class="line"><span>        // 基本函数</span></span>
<span class="line"><span>        function basicFn() {</span></span>
<span class="line"><span>            effect(() =&gt; {</span></span>
<span class="line"><span>                // 加入 Reflect 后 this 指向 obj , 否则为 data</span></span>
<span class="line"><span>                obj.getBar;</span></span>
<span class="line"><span>                &#39;foo&#39; in obj;</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        const p2 = new Proxy(basicFn, {</span></span>
<span class="line"><span>            // 使用 apply 拦截函数调用</span></span>
<span class="line"><span>            apply(target, thisArg, argArray) {</span></span>
<span class="line"><span>                target.call(thisArg, ...argArray)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        // 执行注册副作用函数，触发读取即绑定副作用</span></span>
<span class="line"><span>        const effectFn = effect(() =&gt; {</span></span>
<span class="line"><span>            // 当 ok 为 true 时第一次执行读取，将 ok 和 text 进行读取</span></span>
<span class="line"><span>            // 此时 ok 和 text 建立了关联关系</span></span>
<span class="line"><span>            // bucket.obj.ok =[ok:effectFn];ok:effectFn.effects=[bucket.obj.ok]</span></span>
<span class="line"><span>            // bucket.obj.text =[text:effectFn];text:effectFn.effects=[bucket.obj.text]</span></span>
<span class="line"><span>            // 修改 ok 为 false 时,首先清除当前副作用 bucket.obj.ok[effectFn] 和 effectFn.effects</span></span>
<span class="line"><span>            // 然后触发副作用修改 document , 此时重新建立 ok 的关联关系</span></span>
<span class="line"><span>            // 由于 ok 为 false 因此 obj.text 不读取,而它的关联关系还在</span></span>
<span class="line"><span>            // 修改 text 为 2 时,首先清除当前副作用 bucket.obj.ok[effectFn] 和 effectFn.effects</span></span>
<span class="line"><span>            // 然后触发副作用修改 document , 由于 ok 为 false ,因此 text 无法被读取无法关联副作用</span></span>
<span class="line"><span>            // 修改 text 为 3 时,无副作用</span></span>
<span class="line"><span>            // 综上，在副作用里要先清除之前的副作用关联，并建立新的关联，如果无法建立，则此属性无副作用</span></span>
<span class="line"><span>            document.body.innerText = obj.ok ? obj.text : &#39;not&#39;;</span></span>
<span class="line"><span>            return obj.foo + obj.bar</span></span>
<span class="line"><span>        }, {</span></span>
<span class="line"><span>            // 懒执行</span></span>
<span class="line"><span>            lazy: true,</span></span>
<span class="line"><span>            // 调度器</span></span>
<span class="line"><span>            scheduler(fn) {</span></span>
<span class="line"><span>                // 每次调度时将副作用函数添加到 jobQueue 队列中</span></span>
<span class="line"><span>                jobQueue.add(fn)</span></span>
<span class="line"><span>                // 调用 flushJob 刷新队列</span></span>
<span class="line"><span>                flushJob()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        // 手动加载懒执行的副作用</span></span>
<span class="line"><span>        const value = effectFn()</span></span>
<span class="line"><span>        // 1 秒后修改响应式数据</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>            obj.ok = false;</span></span>
<span class="line"><span>            obj.text = 2;</span></span>
<span class="line"><span>            obj.text = 3;</span></span>
<span class="line"><span>            obj.noExist = &#39;good&#39;;</span></span>
<span class="line"><span>        }, 1 * 1000)</span></span>
<span class="line"><span>        // 测试计算属性</span></span>
<span class="line"><span>        const sumRes = computed(() =&gt; obj.foo + obj.bar)</span></span>
<span class="line"><span>        console.log(sumRes.value);</span></span>
<span class="line"><span>        // 测试嵌套副作用下的计算属性</span></span>
<span class="line"><span>        effect(() =&gt; {</span></span>
<span class="line"><span>            console.log(sumRes.value);</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        // 测试 watch 监听数据变化和立即执行</span></span>
<span class="line"><span>        watch(obj, () =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;数据变化了&#39;);</span></span>
<span class="line"><span>        }, {</span></span>
<span class="line"><span>            // 回调函数会在 watch 函数创建时立即执行一次</span></span>
<span class="line"><span>            immediate: true,</span></span>
<span class="line"><span>            // 指定调度函数的执行时机</span></span>
<span class="line"><span>            // pre 组件更新前执行</span></span>
<span class="line"><span>            // post 组件更新后执行，代表调度函数需要将副作用函数放到一个微任务队列中，并等待DOM更新结束后执行</span></span>
<span class="line"><span>            // sync 同步执行</span></span>
<span class="line"><span>            flush: &#39;pre&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        // 测试 watch 竟态问题，即副作用函数过期问题</span></span>
<span class="line"><span>        let finalData;</span></span>
<span class="line"><span>        watch(() =&gt; obj.foo, async (newValue, oldValue, onInvalidate) =&gt; {</span></span>
<span class="line"><span>            console.log(newValue, oldValue)</span></span>
<span class="line"><span>            // 定义一个标志，代表当前副作用函数是否过期，默认为 false ，代表没有过期</span></span>
<span class="line"><span>            let expired = false</span></span>
<span class="line"><span>            // 注册过期回调</span></span>
<span class="line"><span>            onInvalidate(() =&gt; {</span></span>
<span class="line"><span>                // 当过期时，将标志置为 true </span></span>
<span class="line"><span>                expired = true</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            // 发送网络请求</span></span>
<span class="line"><span>            const res = await fetch(&#39;/login&#39;)</span></span>
<span class="line"><span>            // 只有没有过期，才执行后续操作</span></span>
<span class="line"><span>            if (!expired) {</span></span>
<span class="line"><span>                finalData = res;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        obj.foo++</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>            obj.foo++</span></span>
<span class="line"><span>        }, 200)</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,2)]))}const y=s(l,[["render",c]]);export{g as __pageData,y as default};
