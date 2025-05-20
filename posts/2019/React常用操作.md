---

Created at: 2021-04-10
Last updated at: 2021-10-20
tags: 
  - react

---

# React常用操作

### React常用操作

##### 淘宝镜像

`npm i -g mirror-config-china --registry=https://registry.npm.taobao.org`

##### yarn

`npm install -g yarn`
`yarn config set registry https://registry.npm.taobao.org -g`
`yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g`

#### 轮巡方法

    import { delay } from 'dva/saga';
    
    // 轮询effects
    function* pollData({ call, put, select }) {
      while (true) {
        try {
          yield call(delay, 5 * 1000);
          const { accessObjID } = yield select(({ AccessConfig: { platformInFo } }) => platformInFo);
          yield put({
            type: 'asyncGetPullDeviceInfo',
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
        yield take('startPolling');
        yield race([call(pollData, sagaEffects), take('stopPolling')]);
      }
       },
       { type: 'watcher' },
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

#### DragArea

```
* react-rnd

* react-dnd
* react-draggable
 index.tsx

    /* eslint-disable no-use-before-define,import/no-unresolved,@typescript-eslint/camelcase,react/no-array-index-key,max-len,no-param-reassign */
    import React, { Component } from 'react';
    import Draggable from 'react-draggable';
    import classnames from 'classnames';
    import _ from 'lodash';
    import locationBackground from './img/locationBackground.jpg';
    import styles from './index.less';
  
    const minWidth = 136;
    const minHeight = 30;
  
    /**
     * 拖拽区域
        */
      class DragArea extends Component {
  
      state = {
        deltaPosition: {
          x: 0,
          y: 0,
        },
        boxTop: 0,
        boxLeft: 0,
        boxWidth: minWidth,
        boxHeight: minHeight,
      };
        
      // 拖拽Ref
      draggableRef: any = React.createRef();
      boxRef: any = React.createRef();
        
      componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
        // @ts-ignore
        if (prevProps.value !== this.props.value) {
          // @ts-ignore
          const value = this.props.value;
          if (value) {
            const {
              x: defaultX = 0,
              y: defaultY = 0,
              maxWidth: defaultMaxWidth = minWidth,
              maxHeight: defaultMaxHeight = minHeight,
            } = value;
            this.setState({
              deltaPosition: {
                x: Number(defaultX),
                y: Number(defaultY),
              },
              boxWidth: Number(defaultMaxWidth),
              boxHeight: Number(defaultMaxHeight),
            });
          }
        }
      }
        
      // 鼠标位置
      mousePostion: any = null;
        
      // 鼠标按下事件
      onMouseDown = (e: any, position: string) => {
        window.addEventListener('mouseup', this.onMouseUp);
        this.draggableRef.current?.addEventListener('mousemove', this.onMouseMove);
        const { pageX, pageY } = e;
        this.mousePostion = [pageX, pageY, position];
      };
        
      // 鼠标抬起事件
      onMouseUp = (e: any) => {
        e.stopPropagation();
        window.removeEventListener('mouseup', this.onMouseUp);
        this.draggableRef.current?.removeEventListener('mousemove', this.onMouseMove);
        this.mousePostion = null;
      };
        
      // 鼠标移动事件
      onMouseMove = _.throttle((e: any) => {
        e.stopPropagation();
        if (!_.includes([0, 1, 2], e.button)) {
          this.onMouseUp(e);
        }
        if (this.mousePostion) {
          const { pageX, pageY } = e;
          const diffWidth = pageX - this.mousePostion[0];
          const diffHeight = pageY - this.mousePostion[1];
          const { boxTop, boxLeft, boxWidth, boxHeight } = this.state;
          const {
            width: draggableWidth,
            height: draggableHeight,
            x: draggableX,
            y: draggableY,
          } = this.draggableRef.current.getBoundingClientRect();
          const { x: boxX, y: boxY } = this.boxRef.current.getBoundingClientRect();
          const maxWidth = draggableWidth - 1;
          const maxHeight = draggableHeight - 1;
          const topLimit =
            (_.lt(diffHeight, 0) && _.gt(boxHeight, maxHeight) && _.lt(boxY, draggableY)) ||
            (_.gt(diffHeight, 0) && _.lt(boxHeight, minHeight));
          const rightLimit =
            (_.gt(diffWidth, 0) && _.gt(boxWidth, maxWidth)) ||
            (_.lt(diffWidth, 0) && _.lt(boxWidth, minWidth));
          const bottomLimit =
            (_.gt(diffHeight, 0) && _.gt(boxHeight, maxHeight)) ||
            (_.lt(diffHeight, 0) && _.lt(boxHeight, minHeight));
          const leftLimit =
            (_.lt(diffWidth, 0) && _.gt(boxWidth, maxWidth) && _.lt(boxX, draggableX)) ||
            (_.gt(diffWidth, 0) && _.lt(boxWidth, minWidth));
          this.mousePostion = [pageX, pageY, this.mousePostion[2]];
          switch (this.mousePostion[2]) {
            case 'top':
              if (topLimit) return;
              this.setState({
                boxTop: boxTop + diffHeight,
                boxHeight: boxHeight - diffHeight,
              });
              break;
            case 'right':
              if (rightLimit) return;
              this.setState({
                boxWidth: boxWidth + diffWidth,
              });
              break;
            case 'bottom':
              if (bottomLimit) return;
              this.setState({
                boxHeight: boxHeight + diffHeight,
              });
              break;
            case 'left':
              if (leftLimit) return;
              this.setState({
                boxLeft: boxLeft + diffWidth,
                boxWidth: boxWidth - diffWidth,
              });
              break;
            case 'topLeft':
              if (topLimit || leftLimit) return;
              this.setState({
                boxTop: boxTop + diffHeight,
                boxLeft: boxLeft + diffWidth,
                boxWidth: boxWidth - diffWidth,
                boxHeight: boxHeight - diffHeight,
              });
              break;
            case 'topRight':
              if (topLimit || rightLimit) return;
              this.setState({
                boxTop: boxTop + diffHeight,
                boxWidth: boxWidth + diffWidth,
                boxHeight: boxHeight - diffHeight,
              });
              break;
            case 'bottomRight':
              if (bottomLimit || rightLimit) return;
              this.setState({
                boxWidth: boxWidth + diffWidth,
                boxHeight: boxHeight + diffHeight,
              });
              break;
            case 'bottomLeft':
              if (bottomLimit || leftLimit) return;
              this.setState({
                boxLeft: boxLeft + diffWidth,
                boxWidth: boxWidth - diffWidth,
                boxHeight: boxHeight + diffHeight,
              });
              break;
            default:
              break;
          }
        }
      }, 80);
        
      handleDrag = (e: any, ui: any) => {
        const { x, y } = this.state.deltaPosition;
        const positionX = x + ui.deltaX;
        const positionY = y + ui.deltaY;
        this.setState({
          deltaPosition: {
            x: positionX,
            y: positionY,
          },
        });
      };
        
      handleStop = () => {
        const { onChange }: any = this.props;
        const { deltaPosition, boxWidth, boxHeight } = this.state;
        const { x, y } = deltaPosition;
        if (onChange) {
          onChange({
            x,
            y,
            maxWidth: boxWidth,
            maxHeight: boxHeight,
          });
        }
      };
        
      render() {
        const { deltaPosition, boxTop, boxLeft, boxWidth, boxHeight } = this.state;
        return (
          <div
            ref={this.draggableRef}
            style={{
              position: 'relative',
              width: '100%',
              height: 360,
              userSelect: 'none',
              overflow: 'hidden',
            }}
          >
            <img
              src={locationBackground}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                cursor: 'default',
              }}
            />
            <Draggable
              bounds="parent"
              position={{ x: deltaPosition.x, y: deltaPosition.y }}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
            >
              <div
                ref={this.boxRef}
                className={classnames(styles.box)}
                style={{
                  top: boxTop,
                  left: boxLeft,
                  width: boxWidth,
                  height: boxHeight,
                }}
              >
                <div
                  className={classnames(styles.side, styles.top)}
                  onMouseDown={(e: any) => {
                    e.stopPropagation();
                    this.onMouseDown(e, 'top');
                  }}
                />
                <div
                  className={classnames(styles.side, styles.right)}
                  onMouseDown={(e: any) => {
                    e.stopPropagation();
                    this.onMouseDown(e, 'right');
                  }}
                />
                <div
                  className={classnames(styles.side, styles.left)}
                  onMouseDown={(e: any) => {
                    e.stopPropagation();
                    this.onMouseDown(e, 'left');
                  }}
                />
                <div
                  className={classnames(styles.side, styles.bottom)}
                  onMouseDown={(e: any) => {
                    e.stopPropagation();
                    this.onMouseDown(e, 'bottom');
                  }}
                />
                <div
                  className={classnames(styles.angle, styles.topLeft)}
                  onMouseDown={(e: any) => {
                    e.stopPropagation();
                    this.onMouseDown(e, 'topLeft');
                  }}
                />
                <div
                  className={classnames(styles.angle, styles.topRight)}
                  onMouseDown={(e: any) => {
                    e.stopPropagation();
                    this.onMouseDown(e, 'topRight');
                  }}
                />
                <div
                  className={classnames(styles.angle, styles.bottomRight)}
                  onMouseDown={(e: any) => {
                    e.stopPropagation();
                    this.onMouseDown(e, 'bottomRight');
                  }}
                />
                <div
                  className={classnames(styles.angle, styles.bottomLeft)}
                  onMouseDown={(e: any) => {
                    e.stopPropagation();
                    this.onMouseDown(e, 'bottomLeft');
                  }}
                />
              </div>
            </Draggable>
          </div>
        );
      }
    }
  
    export default DragArea;
  

index.less

    @half
    .box {
      position: absolute;
      background: #4894e1;
      border: 1px solid #5e6468;
    
      .side {
        position: absolute;
        width: @halfWidth*2;
        height: calc(100% - @halfWidth * 2);
        cursor: pointer;
      }
    
      .top {
        top: -@halfWidth;
        left: @halfWidth;
        width: calc(100% - @halfWidth * 2);
        height: @halfWidth*2;
      }
    
      .right {
        top: @halfWidth;
        right: -@halfWidth;
        width: @halfWidth*2;
        height: calc(100% - @halfWidth * 2);
      }
    
      .bottom {
        bottom: -@halfWidth;
        left: @halfWidth;
        width: calc(100% - @halfWidth * 2);
        height: @halfWidth*2;
      }
    
      .left {
        top: @halfWidth;
        left: -@halfWidth;
        width: @halfWidth*2;
        height: calc(100% - @halfWidth * 2);
      }
    
      .angle {
        position: absolute;
        width: @halfWidth*2;
        height: @halfWidth*2;
        cursor: pointer;
      }
    
      .topLeft {
        top: -@halfWidth;
        left: -@halfWidth;
      }
    
      .topRight {
        top: -@halfWidth;
        right: -@halfWidth;
      }
    
      .bottomRight {
        bottom: -@halfWidth;
        right: -@halfWidth;
      }
    
      .bottomLeft {
        bottom: -@halfWidth;
        left: -@halfWidth;
      }
    }
```
