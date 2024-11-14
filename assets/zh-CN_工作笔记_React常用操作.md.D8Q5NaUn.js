import{_ as n,c as a,a3 as p,o as l}from"./chunks/framework.BaR4VHXY.js";const g=JSON.parse('{"title":"React常用操作","description":"","frontmatter":{"Created at":"2021-04-10T00:00:00.000Z","Last updated at":"2021-10-20T00:00:00.000Z","tags":["react"]},"headers":[],"relativePath":"zh-CN/工作笔记/React常用操作.md","filePath":"zh-CN/工作笔记/React常用操作.md","lastUpdated":null}'),e={name:"zh-CN/工作笔记/React常用操作.md"};function i(t,s,c,o,h,d){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="react常用操作" tabindex="-1">React常用操作 <a class="header-anchor" href="#react常用操作" aria-label="Permalink to &quot;React常用操作&quot;">​</a></h1><h3 id="react常用操作-1" tabindex="-1">React常用操作 <a class="header-anchor" href="#react常用操作-1" aria-label="Permalink to &quot;React常用操作&quot;">​</a></h3><h5 id="淘宝镜像" tabindex="-1">淘宝镜像 <a class="header-anchor" href="#淘宝镜像" aria-label="Permalink to &quot;淘宝镜像&quot;">​</a></h5><p><code>npm i -g mirror-config-china --registry=https://registry.npm.taobao.org</code></p><h5 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h5><p><code>npm install -g yarn</code><code>yarn config set registry https://registry.npm.taobao.org -g</code><code>yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g</code></p><h4 id="轮巡方法" tabindex="-1">轮巡方法 <a class="header-anchor" href="#轮巡方法" aria-label="Permalink to &quot;轮巡方法&quot;">​</a></h4><pre><code>import { delay } from &#39;dva/saga&#39;;

// 轮询effects
function* pollData({ call, put, select }) {
  while (true) {
    try {
      yield call(delay, 5 * 1000);
      const { accessObjID } = yield select(({ AccessConfig: { platformInFo } }) =&gt; platformInFo);
      yield put({
        type: &#39;asyncGetPullDeviceInfo&#39;,
        payload: {
          accessObjID,
        },
      });
    } catch (e) {
      message.error(e.message);
    }
  }
}  
state:{
    // spin效果标识 - 即此请求是否为轮询
    isFromPolling: false,
}
effects: {
 // 监听轮巡
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
}
reducers: {
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
}
</code></pre><h4 id="dragarea" tabindex="-1">DragArea <a class="header-anchor" href="#dragarea" aria-label="Permalink to &quot;DragArea&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>* react-rnd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* react-dnd</span></span>
<span class="line"><span>* react-draggable</span></span>
<span class="line"><span> index.tsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* eslint-disable no-use-before-define,import/no-unresolved,@typescript-eslint/camelcase,react/no-array-index-key,max-len,no-param-reassign */</span></span>
<span class="line"><span>    import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span>    import Draggable from &#39;react-draggable&#39;;</span></span>
<span class="line"><span>    import classnames from &#39;classnames&#39;;</span></span>
<span class="line"><span>    import _ from &#39;lodash&#39;;</span></span>
<span class="line"><span>    import locationBackground from &#39;./img/locationBackground.jpg&#39;;</span></span>
<span class="line"><span>    import styles from &#39;./index.less&#39;;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    const minWidth = 136;</span></span>
<span class="line"><span>    const minHeight = 30;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 拖拽区域</span></span>
<span class="line"><span>        */</span></span>
<span class="line"><span>      class DragArea extends Component {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>      state = {</span></span>
<span class="line"><span>        deltaPosition: {</span></span>
<span class="line"><span>          x: 0,</span></span>
<span class="line"><span>          y: 0,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        boxTop: 0,</span></span>
<span class="line"><span>        boxLeft: 0,</span></span>
<span class="line"><span>        boxWidth: minWidth,</span></span>
<span class="line"><span>        boxHeight: minHeight,</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>      // 拖拽Ref</span></span>
<span class="line"><span>      draggableRef: any = React.createRef();</span></span>
<span class="line"><span>      boxRef: any = React.createRef();</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>      componentDidUpdate(prevProps: Readonly&lt;{}&gt;, prevState: Readonly&lt;{}&gt;, snapshot?: any) {</span></span>
<span class="line"><span>        // @ts-ignore</span></span>
<span class="line"><span>        if (prevProps.value !== this.props.value) {</span></span>
<span class="line"><span>          // @ts-ignore</span></span>
<span class="line"><span>          const value = this.props.value;</span></span>
<span class="line"><span>          if (value) {</span></span>
<span class="line"><span>            const {</span></span>
<span class="line"><span>              x: defaultX = 0,</span></span>
<span class="line"><span>              y: defaultY = 0,</span></span>
<span class="line"><span>              maxWidth: defaultMaxWidth = minWidth,</span></span>
<span class="line"><span>              maxHeight: defaultMaxHeight = minHeight,</span></span>
<span class="line"><span>            } = value;</span></span>
<span class="line"><span>            this.setState({</span></span>
<span class="line"><span>              deltaPosition: {</span></span>
<span class="line"><span>                x: Number(defaultX),</span></span>
<span class="line"><span>                y: Number(defaultY),</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              boxWidth: Number(defaultMaxWidth),</span></span>
<span class="line"><span>              boxHeight: Number(defaultMaxHeight),</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>      // 鼠标位置</span></span>
<span class="line"><span>      mousePostion: any = null;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>      // 鼠标按下事件</span></span>
<span class="line"><span>      onMouseDown = (e: any, position: string) =&gt; {</span></span>
<span class="line"><span>        window.addEventListener(&#39;mouseup&#39;, this.onMouseUp);</span></span>
<span class="line"><span>        this.draggableRef.current?.addEventListener(&#39;mousemove&#39;, this.onMouseMove);</span></span>
<span class="line"><span>        const { pageX, pageY } = e;</span></span>
<span class="line"><span>        this.mousePostion = [pageX, pageY, position];</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>      // 鼠标抬起事件</span></span>
<span class="line"><span>      onMouseUp = (e: any) =&gt; {</span></span>
<span class="line"><span>        e.stopPropagation();</span></span>
<span class="line"><span>        window.removeEventListener(&#39;mouseup&#39;, this.onMouseUp);</span></span>
<span class="line"><span>        this.draggableRef.current?.removeEventListener(&#39;mousemove&#39;, this.onMouseMove);</span></span>
<span class="line"><span>        this.mousePostion = null;</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>      // 鼠标移动事件</span></span>
<span class="line"><span>      onMouseMove = _.throttle((e: any) =&gt; {</span></span>
<span class="line"><span>        e.stopPropagation();</span></span>
<span class="line"><span>        if (!_.includes([0, 1, 2], e.button)) {</span></span>
<span class="line"><span>          this.onMouseUp(e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (this.mousePostion) {</span></span>
<span class="line"><span>          const { pageX, pageY } = e;</span></span>
<span class="line"><span>          const diffWidth = pageX - this.mousePostion[0];</span></span>
<span class="line"><span>          const diffHeight = pageY - this.mousePostion[1];</span></span>
<span class="line"><span>          const { boxTop, boxLeft, boxWidth, boxHeight } = this.state;</span></span>
<span class="line"><span>          const {</span></span>
<span class="line"><span>            width: draggableWidth,</span></span>
<span class="line"><span>            height: draggableHeight,</span></span>
<span class="line"><span>            x: draggableX,</span></span>
<span class="line"><span>            y: draggableY,</span></span>
<span class="line"><span>          } = this.draggableRef.current.getBoundingClientRect();</span></span>
<span class="line"><span>          const { x: boxX, y: boxY } = this.boxRef.current.getBoundingClientRect();</span></span>
<span class="line"><span>          const maxWidth = draggableWidth - 1;</span></span>
<span class="line"><span>          const maxHeight = draggableHeight - 1;</span></span>
<span class="line"><span>          const topLimit =</span></span>
<span class="line"><span>            (_.lt(diffHeight, 0) &amp;&amp; _.gt(boxHeight, maxHeight) &amp;&amp; _.lt(boxY, draggableY)) ||</span></span>
<span class="line"><span>            (_.gt(diffHeight, 0) &amp;&amp; _.lt(boxHeight, minHeight));</span></span>
<span class="line"><span>          const rightLimit =</span></span>
<span class="line"><span>            (_.gt(diffWidth, 0) &amp;&amp; _.gt(boxWidth, maxWidth)) ||</span></span>
<span class="line"><span>            (_.lt(diffWidth, 0) &amp;&amp; _.lt(boxWidth, minWidth));</span></span>
<span class="line"><span>          const bottomLimit =</span></span>
<span class="line"><span>            (_.gt(diffHeight, 0) &amp;&amp; _.gt(boxHeight, maxHeight)) ||</span></span>
<span class="line"><span>            (_.lt(diffHeight, 0) &amp;&amp; _.lt(boxHeight, minHeight));</span></span>
<span class="line"><span>          const leftLimit =</span></span>
<span class="line"><span>            (_.lt(diffWidth, 0) &amp;&amp; _.gt(boxWidth, maxWidth) &amp;&amp; _.lt(boxX, draggableX)) ||</span></span>
<span class="line"><span>            (_.gt(diffWidth, 0) &amp;&amp; _.lt(boxWidth, minWidth));</span></span>
<span class="line"><span>          this.mousePostion = [pageX, pageY, this.mousePostion[2]];</span></span>
<span class="line"><span>          switch (this.mousePostion[2]) {</span></span>
<span class="line"><span>            case &#39;top&#39;:</span></span>
<span class="line"><span>              if (topLimit) return;</span></span>
<span class="line"><span>              this.setState({</span></span>
<span class="line"><span>                boxTop: boxTop + diffHeight,</span></span>
<span class="line"><span>                boxHeight: boxHeight - diffHeight,</span></span>
<span class="line"><span>              });</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>            case &#39;right&#39;:</span></span>
<span class="line"><span>              if (rightLimit) return;</span></span>
<span class="line"><span>              this.setState({</span></span>
<span class="line"><span>                boxWidth: boxWidth + diffWidth,</span></span>
<span class="line"><span>              });</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>            case &#39;bottom&#39;:</span></span>
<span class="line"><span>              if (bottomLimit) return;</span></span>
<span class="line"><span>              this.setState({</span></span>
<span class="line"><span>                boxHeight: boxHeight + diffHeight,</span></span>
<span class="line"><span>              });</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>            case &#39;left&#39;:</span></span>
<span class="line"><span>              if (leftLimit) return;</span></span>
<span class="line"><span>              this.setState({</span></span>
<span class="line"><span>                boxLeft: boxLeft + diffWidth,</span></span>
<span class="line"><span>                boxWidth: boxWidth - diffWidth,</span></span>
<span class="line"><span>              });</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>            case &#39;topLeft&#39;:</span></span>
<span class="line"><span>              if (topLimit || leftLimit) return;</span></span>
<span class="line"><span>              this.setState({</span></span>
<span class="line"><span>                boxTop: boxTop + diffHeight,</span></span>
<span class="line"><span>                boxLeft: boxLeft + diffWidth,</span></span>
<span class="line"><span>                boxWidth: boxWidth - diffWidth,</span></span>
<span class="line"><span>                boxHeight: boxHeight - diffHeight,</span></span>
<span class="line"><span>              });</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>            case &#39;topRight&#39;:</span></span>
<span class="line"><span>              if (topLimit || rightLimit) return;</span></span>
<span class="line"><span>              this.setState({</span></span>
<span class="line"><span>                boxTop: boxTop + diffHeight,</span></span>
<span class="line"><span>                boxWidth: boxWidth + diffWidth,</span></span>
<span class="line"><span>                boxHeight: boxHeight - diffHeight,</span></span>
<span class="line"><span>              });</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>            case &#39;bottomRight&#39;:</span></span>
<span class="line"><span>              if (bottomLimit || rightLimit) return;</span></span>
<span class="line"><span>              this.setState({</span></span>
<span class="line"><span>                boxWidth: boxWidth + diffWidth,</span></span>
<span class="line"><span>                boxHeight: boxHeight + diffHeight,</span></span>
<span class="line"><span>              });</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>            case &#39;bottomLeft&#39;:</span></span>
<span class="line"><span>              if (bottomLimit || leftLimit) return;</span></span>
<span class="line"><span>              this.setState({</span></span>
<span class="line"><span>                boxLeft: boxLeft + diffWidth,</span></span>
<span class="line"><span>                boxWidth: boxWidth - diffWidth,</span></span>
<span class="line"><span>                boxHeight: boxHeight + diffHeight,</span></span>
<span class="line"><span>              });</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>            default:</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }, 80);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>      handleDrag = (e: any, ui: any) =&gt; {</span></span>
<span class="line"><span>        const { x, y } = this.state.deltaPosition;</span></span>
<span class="line"><span>        const positionX = x + ui.deltaX;</span></span>
<span class="line"><span>        const positionY = y + ui.deltaY;</span></span>
<span class="line"><span>        this.setState({</span></span>
<span class="line"><span>          deltaPosition: {</span></span>
<span class="line"><span>            x: positionX,</span></span>
<span class="line"><span>            y: positionY,</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>      handleStop = () =&gt; {</span></span>
<span class="line"><span>        const { onChange }: any = this.props;</span></span>
<span class="line"><span>        const { deltaPosition, boxWidth, boxHeight } = this.state;</span></span>
<span class="line"><span>        const { x, y } = deltaPosition;</span></span>
<span class="line"><span>        if (onChange) {</span></span>
<span class="line"><span>          onChange({</span></span>
<span class="line"><span>            x,</span></span>
<span class="line"><span>            y,</span></span>
<span class="line"><span>            maxWidth: boxWidth,</span></span>
<span class="line"><span>            maxHeight: boxHeight,</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>      render() {</span></span>
<span class="line"><span>        const { deltaPosition, boxTop, boxLeft, boxWidth, boxHeight } = this.state;</span></span>
<span class="line"><span>        return (</span></span>
<span class="line"><span>          &lt;div</span></span>
<span class="line"><span>            ref={this.draggableRef}</span></span>
<span class="line"><span>            style={{</span></span>
<span class="line"><span>              position: &#39;relative&#39;,</span></span>
<span class="line"><span>              width: &#39;100%&#39;,</span></span>
<span class="line"><span>              height: 360,</span></span>
<span class="line"><span>              userSelect: &#39;none&#39;,</span></span>
<span class="line"><span>              overflow: &#39;hidden&#39;,</span></span>
<span class="line"><span>            }}</span></span>
<span class="line"><span>          &gt;</span></span>
<span class="line"><span>            &lt;img</span></span>
<span class="line"><span>              src={locationBackground}</span></span>
<span class="line"><span>              style={{</span></span>
<span class="line"><span>                position: &#39;absolute&#39;,</span></span>
<span class="line"><span>                top: 0,</span></span>
<span class="line"><span>                left: 0,</span></span>
<span class="line"><span>                width: &#39;100%&#39;,</span></span>
<span class="line"><span>                height: &#39;100%&#39;,</span></span>
<span class="line"><span>                pointerEvents: &#39;none&#39;,</span></span>
<span class="line"><span>                cursor: &#39;default&#39;,</span></span>
<span class="line"><span>              }}</span></span>
<span class="line"><span>            /&gt;</span></span>
<span class="line"><span>            &lt;Draggable</span></span>
<span class="line"><span>              bounds=&quot;parent&quot;</span></span>
<span class="line"><span>              position={{ x: deltaPosition.x, y: deltaPosition.y }}</span></span>
<span class="line"><span>              onDrag={this.handleDrag}</span></span>
<span class="line"><span>              onStop={this.handleStop}</span></span>
<span class="line"><span>            &gt;</span></span>
<span class="line"><span>              &lt;div</span></span>
<span class="line"><span>                ref={this.boxRef}</span></span>
<span class="line"><span>                className={classnames(styles.box)}</span></span>
<span class="line"><span>                style={{</span></span>
<span class="line"><span>                  top: boxTop,</span></span>
<span class="line"><span>                  left: boxLeft,</span></span>
<span class="line"><span>                  width: boxWidth,</span></span>
<span class="line"><span>                  height: boxHeight,</span></span>
<span class="line"><span>                }}</span></span>
<span class="line"><span>              &gt;</span></span>
<span class="line"><span>                &lt;div</span></span>
<span class="line"><span>                  className={classnames(styles.side, styles.top)}</span></span>
<span class="line"><span>                  onMouseDown={(e: any) =&gt; {</span></span>
<span class="line"><span>                    e.stopPropagation();</span></span>
<span class="line"><span>                    this.onMouseDown(e, &#39;top&#39;);</span></span>
<span class="line"><span>                  }}</span></span>
<span class="line"><span>                /&gt;</span></span>
<span class="line"><span>                &lt;div</span></span>
<span class="line"><span>                  className={classnames(styles.side, styles.right)}</span></span>
<span class="line"><span>                  onMouseDown={(e: any) =&gt; {</span></span>
<span class="line"><span>                    e.stopPropagation();</span></span>
<span class="line"><span>                    this.onMouseDown(e, &#39;right&#39;);</span></span>
<span class="line"><span>                  }}</span></span>
<span class="line"><span>                /&gt;</span></span>
<span class="line"><span>                &lt;div</span></span>
<span class="line"><span>                  className={classnames(styles.side, styles.left)}</span></span>
<span class="line"><span>                  onMouseDown={(e: any) =&gt; {</span></span>
<span class="line"><span>                    e.stopPropagation();</span></span>
<span class="line"><span>                    this.onMouseDown(e, &#39;left&#39;);</span></span>
<span class="line"><span>                  }}</span></span>
<span class="line"><span>                /&gt;</span></span>
<span class="line"><span>                &lt;div</span></span>
<span class="line"><span>                  className={classnames(styles.side, styles.bottom)}</span></span>
<span class="line"><span>                  onMouseDown={(e: any) =&gt; {</span></span>
<span class="line"><span>                    e.stopPropagation();</span></span>
<span class="line"><span>                    this.onMouseDown(e, &#39;bottom&#39;);</span></span>
<span class="line"><span>                  }}</span></span>
<span class="line"><span>                /&gt;</span></span>
<span class="line"><span>                &lt;div</span></span>
<span class="line"><span>                  className={classnames(styles.angle, styles.topLeft)}</span></span>
<span class="line"><span>                  onMouseDown={(e: any) =&gt; {</span></span>
<span class="line"><span>                    e.stopPropagation();</span></span>
<span class="line"><span>                    this.onMouseDown(e, &#39;topLeft&#39;);</span></span>
<span class="line"><span>                  }}</span></span>
<span class="line"><span>                /&gt;</span></span>
<span class="line"><span>                &lt;div</span></span>
<span class="line"><span>                  className={classnames(styles.angle, styles.topRight)}</span></span>
<span class="line"><span>                  onMouseDown={(e: any) =&gt; {</span></span>
<span class="line"><span>                    e.stopPropagation();</span></span>
<span class="line"><span>                    this.onMouseDown(e, &#39;topRight&#39;);</span></span>
<span class="line"><span>                  }}</span></span>
<span class="line"><span>                /&gt;</span></span>
<span class="line"><span>                &lt;div</span></span>
<span class="line"><span>                  className={classnames(styles.angle, styles.bottomRight)}</span></span>
<span class="line"><span>                  onMouseDown={(e: any) =&gt; {</span></span>
<span class="line"><span>                    e.stopPropagation();</span></span>
<span class="line"><span>                    this.onMouseDown(e, &#39;bottomRight&#39;);</span></span>
<span class="line"><span>                  }}</span></span>
<span class="line"><span>                /&gt;</span></span>
<span class="line"><span>                &lt;div</span></span>
<span class="line"><span>                  className={classnames(styles.angle, styles.bottomLeft)}</span></span>
<span class="line"><span>                  onMouseDown={(e: any) =&gt; {</span></span>
<span class="line"><span>                    e.stopPropagation();</span></span>
<span class="line"><span>                    this.onMouseDown(e, &#39;bottomLeft&#39;);</span></span>
<span class="line"><span>                  }}</span></span>
<span class="line"><span>                /&gt;</span></span>
<span class="line"><span>              &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/Draggable&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    export default DragArea;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>index.less</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @half</span></span>
<span class="line"><span>    .box {</span></span>
<span class="line"><span>      position: absolute;</span></span>
<span class="line"><span>      background: #4894e1;</span></span>
<span class="line"><span>      border: 1px solid #5e6468;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .side {</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        width: @halfWidth*2;</span></span>
<span class="line"><span>        height: calc(100% - @halfWidth * 2);</span></span>
<span class="line"><span>        cursor: pointer;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .top {</span></span>
<span class="line"><span>        top: -@halfWidth;</span></span>
<span class="line"><span>        left: @halfWidth;</span></span>
<span class="line"><span>        width: calc(100% - @halfWidth * 2);</span></span>
<span class="line"><span>        height: @halfWidth*2;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .right {</span></span>
<span class="line"><span>        top: @halfWidth;</span></span>
<span class="line"><span>        right: -@halfWidth;</span></span>
<span class="line"><span>        width: @halfWidth*2;</span></span>
<span class="line"><span>        height: calc(100% - @halfWidth * 2);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .bottom {</span></span>
<span class="line"><span>        bottom: -@halfWidth;</span></span>
<span class="line"><span>        left: @halfWidth;</span></span>
<span class="line"><span>        width: calc(100% - @halfWidth * 2);</span></span>
<span class="line"><span>        height: @halfWidth*2;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .left {</span></span>
<span class="line"><span>        top: @halfWidth;</span></span>
<span class="line"><span>        left: -@halfWidth;</span></span>
<span class="line"><span>        width: @halfWidth*2;</span></span>
<span class="line"><span>        height: calc(100% - @halfWidth * 2);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .angle {</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        width: @halfWidth*2;</span></span>
<span class="line"><span>        height: @halfWidth*2;</span></span>
<span class="line"><span>        cursor: pointer;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .topLeft {</span></span>
<span class="line"><span>        top: -@halfWidth;</span></span>
<span class="line"><span>        left: -@halfWidth;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .topRight {</span></span>
<span class="line"><span>        top: -@halfWidth;</span></span>
<span class="line"><span>        right: -@halfWidth;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .bottomRight {</span></span>
<span class="line"><span>        bottom: -@halfWidth;</span></span>
<span class="line"><span>        right: -@halfWidth;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .bottomLeft {</span></span>
<span class="line"><span>        bottom: -@halfWidth;</span></span>
<span class="line"><span>        left: -@halfWidth;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,10)]))}const f=n(e,[["render",i]]);export{g as __pageData,f as default};
