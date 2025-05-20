import{_ as n,c as t,a3 as l,o}from"./chunks/framework.BaR4VHXY.js";const k=JSON.parse('{"title":"双击处理","description":"","frontmatter":{"Created at":"2021-09-07T00:00:00.000Z","Last updated at":"2021-09-08T00:00:00.000Z","tags":["js","双击"]},"headers":[],"relativePath":"zh-CN/工作笔记/双击处理.md","filePath":"zh-CN/工作笔记/双击处理.md","lastUpdated":null}'),c={name:"zh-CN/工作笔记/双击处理.md"};function r(a,e,i,s,d,u){return o(),t("div",null,e[0]||(e[0]=[l(`<h1 id="双击处理" tabindex="-1">双击处理 <a class="header-anchor" href="#双击处理" aria-label="Permalink to &quot;双击处理&quot;">​</a></h1><h4 id="usedoubleclick-tsx" tabindex="-1">useDoubleClick.tsx <a class="header-anchor" href="#usedoubleclick-tsx" aria-label="Permalink to &quot;useDoubleClick.tsx&quot;">​</a></h4><pre><code>import React, { useState } from &#39;react&#39;;

export const delay = n =&gt; new Promise(resolve =&gt; setTimeout(resolve, n));

// 取消promise
export const cancellablePromise = promise =&gt; {
  let isCanceled = false;
  const wrappedPromise = new Promise((resolve, reject) =&gt; {
    promise.then(
      value =&gt; (isCanceled ? reject({ isCanceled, value }) : resolve(value)),
      error =&gt; (isCanceled ? reject({ isCanceled, error }) : resolve(error)),
    );
  });
  return {
    promise: wrappedPromise,
    cancel: () =&gt; (isCanceled = true),
  };
};

// 单双击hook
export const useDoubleClick = (onClick, onDoubleClick) =&gt; {
  const [pool, setPool] = useState([]);
  // 单击
  const handleClick = e =&gt; {
    const waitForClick = cancellablePromise(delay(300));
    setPool([...pool, waitForClick]);
    const tempEvent = {
      ...e,
    };
    waitForClick.promise
      .then(() =&gt; {
        setPool([]);
        onClick(tempEvent);
      })
      .catch(err =&gt; {});
  };
  // 双击
  const handleDoubleClick = e =&gt; {
    const tempEvent = {
      ...e,
    };
    // const tempEvent = _.cloneDeep(e);
    if (pool.length &gt; 0) {
      pool.forEach(item =&gt; {
        item.cancel();
      });
      setPool([]);
      onDoubleClick(tempEvent);
    }
  };
  return [handleClick, handleDoubleClick];
};
</code></pre><h4 id="调用双击" tabindex="-1">调用双击 <a class="header-anchor" href="#调用双击" aria-label="Permalink to &quot;调用双击&quot;">​</a></h4><p>正常div</p><pre><code>  // 点击
  const click = e =&gt; {};
  // 双击
  const doubleClick = e =&gt; {};
  // 点击hook
  const [handleClick, handleDoubleClick] = useDoubleClick(click, doubleClick);

  return (
    &lt;div
      onClick={itemDoubleClick ? handleClick : click}
      onDoubleClick={itemDoubleClick ? handleDoubleClick : null}
    &gt;
	&lt;/div&gt;
  );
</code></pre><p>无div</p><pre><code>  // 树节点选中事件
  onTreeSelect = (selectedKeys, e) =&gt; {
    treeNodeClick += 1;
    const { onTreeNodeDoubleClick, onSelect } = this.props;
    if (onSelect) {
      onSelect(selectedKeys, e);
    }
    if (!onTreeNodeDoubleClick) {
      return;
    }
    if (treeNodeDblClickEvent) {
      treeNodeDblClickEvent.cancel();
      treeNodeDblClickEvent = null;
      onTreeNodeDoubleClick(_.get(e, &#39;node.props.dataRef&#39;));
    } else {
      treeNodeDblClickEvent = cancellablePromise(delay(300));
      treeNodeDblClickEvent.promise.then(
        () =&gt; {
          treeNodeDblClickEvent = null;
        },
        () =&gt; {},
      );
    }
  };
</code></pre>`,8)]))}const C=n(c,[["render",r]]);export{k as __pageData,C as default};
