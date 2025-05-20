---

Created at: 2023-02-03
Last updated at: 2023-02-03


---

# 渲染器和Diff算法


    // Diff算法的设计
    /*
        最简单方式(性能最差)：卸载所有旧子节点，挂载所有新子节点
        优化：
        遍历新旧两组子节点中数量较少的那一组，并逐个调用 patch 函数打补丁，
        然后比较新旧两组子节点的数量。
        如果新的一组子节点数量更多，说明有新子节点需要挂载；
        否则说明在旧的一组子节点中，有节点需要卸载。
    */
    // 简单Diff算法
    /*
        通过 key 找到可复用的节点，尽可能通过DOM移动方式更新
        如何寻找需要移动的节点核心：
        拿新的一组子节点去旧的一组子节点中寻找可复用的节点。
        如果找到了，则记录该节点的位置索引，即最大索引。
        在整个更新过程中，如果一个节点的索引值小于最大索引，则说明该节点对应的真实DOM元素需要移动，新子节点的顺序就是更新后真实DOM节点应有的顺序；
        否则说明不需要移动，并更新最大索引。
    */
    // 双端Diff算法
    /*
        在新旧两组子节点的四个端点之间分别进行比较，并试图找到可复用的节点。
        定义 oldStartIdx、oldEndIdx、newStartIdx、newEndIdx。
        如果找到可复用关系，相关联的Idx进行改变。
        如果未找到可复用关系，则在旧子节点中寻找 newStartIdx 相同的可复用节点，如果找到移动并增加 newStartIdx ， 如果未找到则挂载并增加。
    */
    // 快速Diff算法
    /*
        最早应用于 ivi 和 inferno 这两个框架。
        借鉴了文本Diff的预处理思路，先处理新旧两组子节点中相同的前置节点和相同的后置节点。
        当前置节点和后置节点全部处理完毕后，如果旧节点或新节点任一侧被处理完毕，则可以简单处理多余或遗留节点。
        旧节点或新节点均未处理完，则根据节点的索引关系 source，构造出一个最长递增子序列 seq 。
        source 数组用来存储新的一组子节点中的节点在旧的一组子节点中的位置索引。
        最长递增子序列所指向的节点即为不需要移动的节点,顺序一致。
        新增 patched 代表已经更新过的节点数量，此应该小于新子节点中需要更新的节点数量，多出部分卸载。
        遍历旧子节点，未在索引表中的进行卸载。否则判断与最大索引的位置关系，如果小于则需要移动，反之更新最大索引。
        如果需要移动，则用索引表进行DOM移动
        定义 i 指向新子节点最后一个节点，定义 s 指向最长递增子序列中的最后一个元素。
        循环让 i 递减：
        如果索引表 source[i] 为 -1 表示是新节点，进行挂载
        如果 i 不等于 seq[s] , 说明此节点需要移动，该节点在新子节点的真实位置索引为 i + newStart(预处理后的首个元素)
        如果 i 等于 seq[s] ， 说明不需要移动，让 s 递减。
     */
    // 卸载函数
    function unmount(vnode) {
        if (vnode.type === 'Fragment') {
            vnode.children.forEach(c => unmount(c))
            return
        }
        const parent = vnode.el.parentNode
        if (parent) {
            parent.removeChild(vnode.el)
        }
    }
    // 挂载元素
    function patchElement(n1, n2) {
        const el = n2.el = n1.el
        const oldProps = n1.props
        const newProps = n2.props
        for (const key in newProps) {
            if (newProps[key] !== oldProps[key]) {
                patchProps(el, key, oldProps[key], newProps[key])
            }
        }
        for (const key in oldProps) {
            if (!(key in newProps)) {
                patchProps(el, key, oldProps[key], null)
            }
        }
        patchChildren(n1, n2, el)
    }
    // 挂载元素属性
    function patchProps(el, key, prevValue, nextValue) {
        function shouldAsProps(el, key) {
            if (key === 'form' && el.tagName === 'INPUT') return false
            return key in el
        }
        if (/^on/.test(key)) {
            let invoker = el._vei
            const name = key.slice(2).toLowerCase()
            if (nextValue) {
                if (!invoker) {
                    invoker = el._vei = (e) => {
                        // 处理事件冒泡
                        if (e.timeStamp < invoker.attached) return
                        if (Array.isArray(invoker.value)) {
                            invoker.value.forEach(fn => fn(e))
                        } else {
                            invoker.value(e)
                        }
                    }
                    invoker.value = nextValue
                    invoker.attached = performance.now()
                    el.addEventListener(name, invoker)
                } else {
                    invoker.value = nextValue
                }
            } else if (invoker) {
                el.removeEventListener(name, invoker)
            }
        } else if (key === 'class') {
            el.className = nextValue || ''
        } else if (shouldAsProps(el, key)) {
            const type = typeof el[key]
            if (type === 'boolean' && nextValue === '') {
                el[key] = true
            } else {
                el[key] = nextValue
            }
        } else {
            el.setAttribute(key, nextValue)
        }
    }
    // 移动元素
    function mountElement(vnode, container, anchor) {
        container.insertBefore(vnode.el, anchor)
    }
    // 打补丁,将属性和子元素重新替换
    function patch(n1, n2, container, anchor) {
        if (n1 && n1.type !== n2.type) {
            unmount(n1)
            n1 = null
        }
        const {
            type
        } = n2
        if (typeof type === 'string') {
            if (!n1) {
                mountElement(n2, container, anchor)
            } else {
                patchElement(n1, n2)
            }
        } else if (type === 'Text') {
            if (!n1) {
                const el = n2.el = document.createTextNode(n2.children)
                container.insertBefore(el, anchor)
            } else {
                const el = n2.el = n1.el
                if (n2.children !== n1.children) {
                    el.nodeValue = n2.children
                }
            }
        } else if (type === 'Fragment') {
            if (!n1) {
                n2.children.forEach(c => patch(null, c, container))
            } else {
                patchChildren(n1, n2, container)
            }
        }
    }
    // 挂载子元素
    function patchChildren(n1, n2, container) {
        if (typeof n2.children === 'string') {
            if (Array.isArray(n1.children)) {
                n1.children.forEach(c => unmount(c))
            }
            container.textContent = n2.children
        } else if (Array.isArray(n2.children)) {
            patchKeyedChildren(n1, n2, container)
        } else {
            // n2 不存在，卸载所有
            if (Array.isArray(n1.children)) {
                n1.children.forEach(c => unmount(c))
            } else if (typeof n1.children === 'string') {
                container.textContent = ''
            }
        }
    }
    // 简单Diff算法
    function patchKeyedChildren(n1, n2, container) {
        const oldChildren = n1.children
        const newChildren = n2.children
        let lastIndex = 0
        for (let i = 0; i < newChildren.length; i++) {
            const newVNode = newChildren[i]
            let find = false
            for (let j = 0; j < oldChildren.length; j++) {
                const oldVNode = oldChildren[j]
                if (newVNode.key === oldVNode.key) {
                    find = true
                    patch(oldVNode, newVNode, container)
                    if (j < lastIndex) {
                        // 小于最大索引需要移动
                        // 获取处理过的上一个节点
                        const prevVNode = newChildren[i - 1]
                        // 如果前一个节点不存在，说明是第一个，不需要移动
                        if (prevVNode) {
                            // 锚点为处理过的上一个节点的下一个位置
                            const anchor = prevVNode.el.nextSibling
                            // 将当前节点插入
                            container.insertBefore(newVNode.el, anchor)
                        }
                    } else {
                        lastIndex = j
                    }
                    break
                }
            }
            // 无可复用元素，当前节点需要挂载
            if (!find) {
                const prevVNode = newChildren[i - 1]
                let anchor = null
                if (prevVNode) {
                    anchor = prevVNode.el.nextSibling
                } else {
                    anchor = container.firstChild
                }
                patch(null, newVNode, container, anchor)
            }
        }
        // 删除遗留节点
        for (let i = 0; i < oldChildren.length; i++) {
            const oldVNode = oldChildren[i]
            const has = newChildren.find(vnode => vnode.key === oldVNode.key)
            if (!has) {
                unmount(oldVNode)
            }
        }
    }
    // 双端Diff算法
    function patchKeyedChildren_both(n1, n2, container) {
        const oldChildren = n1.children
        const newChildren = n2.children
        let oldStartIdx = 0
        let oldEndIdx = oldChildren.length - 1
        let newStartIdx = 0
        let newEndIdx = newChildren.length - 1
        let oldStartVNode = oldChildren[oldStartIdx]
        let oldEndVNode = oldChildren[oldEndIdx]
        let newStartVNode = oldChildren[newStartIdx]
        let newEndVNode = oldChildren[newEndIdx]
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (!oldStartVNode) {
                oldStartVNode = oldChildren[++oldStartIdx]
            } else if (!oldEndVNode) {
                oldEndVNode = oldChildren[--oldEndIdx]
            } else if (oldStartVNode.key === newStartVNode.key) {
                patch(oldStartVNode, newStartVNode, container)
                oldStartVNode = oldChildren[++oldStartIdx]
                newStartVNode = newChildren[++newStartIdx]
            } else if (oldEndVNode.key === newEndVNode.key) {
                patch(oldEndVNode, newEndVNode, container)
                oldEndVNode = oldChildren[--oldEndIdx]
                newEndVNode = newChildren[--newEndIdx]
            } else if (oldStartVNode.key === newEndVNode.key) {
                patch(oldStartVNode, newEndVNode, container)
                container.insertBefore(oldStartVNode.el, oldEndVNode.el)
                oldStartVNode = oldChildren[++oldStartIdx]
                newEndVNode = newChildren[--newEndIdx]
            } else if (oldEndVNode.key === newStartVNode.key) {
                patch(oldEndVNode, newStartVNode, container)
                container.insertBefore(oldEndVNode.el, oldStartVNode.el)
                oldEndVNode = oldChildren[--oldEndIdx]
                newStartVNode = newChildren[++newStartIdx]
            } else {
                const idxInOld = oldChildren.findIndex(node => node.key === newStartVNode.key)
                if (idxInOld > 0) {
                    const vnodeToMove = oldChildren[idxInOld]
                    patch(vnodeToMove, newStartVNode, container)
                    container.insertBefore(vnodeToMove.el, oldStartVNode.el)
                    oldChildren[idxInOld] = undefined
                } else {
                    patch(null, newStartVNode, container, oldStartVNode.el)
                }
                newStartVNode = newChildren[++newStartIdx]
            }
        }
        if (oldEndIdx < oldStartIdx && newStartIdx <= newEndIdx) {
            for (let i = newStartIdx; i <= newEndIdx; i++) {
                patch(null, newChildren[i], container, oldStartVNode.el)
            }
        } else if (newEndIdx < newStartIdx && oldStartIdx <= oldEndIdx) {
            for (let i = oldStartIdx; i <= oldEndIdx; i++) {
                unmount(oldChildren[i])
            }
        }
    }
    // 快速Diff算法
    function patchKeyedChildren_quick(n1, n2, container) {
        const oldChildren = n1.children
        const newChildren = n2.children
        // 处理相同的前置节点
        let j = 0
        let oldVNode = oldChildren[j]
        let newVNode = newChildren[j]
        while (oldVNode.key === newVNode.key) {
            patch(oldVNode, newVNode, container)
            j++
            oldVNode = oldChildren[j]
            newVNode = newChildren[j]
        }
        // 处理相同的后置节点
        let oldEnd = oldChildren.length - 1
        let newEnd = newChildren.length - 1
        oldVNode = oldChildren[oldEnd]
        newVNode = newChildren[newEnd]
        while (oldVNode.key === newVNode.key) {
            patch(oldVNode, newVNode, container)
            oldEnd--
            newEnd--
            oldVNode = oldChildren[oldEnd]
            newVNode = newChildren[newEnd]
        }
        // 预处理完毕,如果新节点一侧未处理完则 j --> newEnd 之间的节点为新节点,需要挂载
        if (j > oldEnd && j <= newEnd) {
            const anchorIndex = newEnd + 1
            const anchor = anchorIndex < newChildren.length ? newChildren[anchorIndex].el : null
            while (j <= newEnd) {
                patch(null, newChildren[j++], container, anchor)
            }
        } else if (j > newEnd && j <= oldEnd) {
            // 如果旧节点一侧未处理完则 j --> oldEnd 之间的节点为遗留节点,需要卸载
            while (j <= oldEnd) {
                unmount(oldChildren[j++])
            }
        } else {
            // 如果两侧均未处理完
            // 新的一组子节点中剩余未处理节点的数量
            const count = newEnd - j + 1
            // source 数组用来存储新的一组子节点中的节点在旧的一组子节点中的位置索引
            const source = new Array(count).fill(-1)
            const oldStart = j
            const newStart = j
            let moved = false
            let pos = 0
            const keyIndex = {}
            for (let k = newStart; k <= newEnd; k++) {
                keyIndex[newChildren[k].key] = k;
            }
            let patched = 0
            for (let i = oldStart; i <= oldEnd; i++) {
                oldVNode = oldChildren[i]
                if (patched <= count) {
                    const k = keyIndex[oldVNode.key]
                    if (typeof k !== 'undefined') {
                        newVNode = newChildren[k]
                        patch(oldVNode, newVNode, container)
                        patched++
                        source[k - newStart] = i
                        if (k < pos) {
                            moved = true
                        } else {
                            pos = k
                        }
                    } else {
                        unmount(oldVNode)
                    }
                } else {
                    unmount(oldVNode)
                }
            }
            // 如果需要移动
            if (moved) {
                // 计算最长递增子序列
                const seq = getSequence(source)
                // s 指向最长递增子序列的最后一个元素
                let s = seq.length - 1
                // i 指向新的一组子节点中的最后一个元素
                let i = count - 1
                // 循环让 i 递减
                for (i; i >= 0; i--) {
                    // 如果是新节点，需要挂载
                    if (source[i] === -1) {
                        const pos = i + newStart
                        newVNode = newChildren[pos]
                        const nextPos = pos + 1
                        const anchor = nextPos < newChildren.length ? newChildren[nextPos].el : null
                        // 挂载
                        patch(null, newVNode, container, anchor)
                    } else if (i !== seq[s]) {
                        // 如果不等于说明节点不在最长递增子序列，需要移动
                        const pos = i + newStart
                        newVNode = newChildren[pos]
                        const nextPos = pos + 1
                        const anchor = nextPos < newChildren.length ? newChildren[nextPos].el : null
                        // 移动
                        container.insertBefore(newVNode.el, anchor)
                    } else {
                        // 说明节点在最长递增子序列，不需要移动,让 s 指向下一个位置
                        s--
                    }
                }
            }
        }
    }
    
    // Vue.js3的求解给定序列的最长递增子序列
    function getSequence(arr) {
        const p = arr.slice()
        const result = [0]
        let i, j, u, v, c
        const len = arr.length
        for (i = 0; i < len; i++) {
            const arrI = arr[i];
            if (arrI !== 0) {
                j = result[result.length - 1]
                if (arr[j] < arrI) {
                    p[i] = j
                    result.push(i)
                    continue
                }
                u = 0
                v = result.length - 1
                while (u < v) {
                    c = ((u + v) / 2) | 0
                    if (arr[result[c]] < arrI) {
                        u = c + 1
                    } else {
                        v = c
                    }
                }
                if (arrI < arr[result[u]]) {
                    if (u > 0) {
                        p[i] = result[u - 1]
                    }
                    result[u] = i
                }
            }
        }
        u = result.length
        v = result[u - 1]
        while (u-- > 0) {
            result[u] = v
            v = p[v]
        }
        return result
    }

