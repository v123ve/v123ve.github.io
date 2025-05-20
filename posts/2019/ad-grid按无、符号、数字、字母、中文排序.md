---

Created at: 2021-04-10
Last updated at: 2022-09-28
Source URL: https://www.ag-grid.com/javascript-data-grid/row-sorting/#sorting-api
tags: 
  - AgGrid
  - 滚动

---

# ad-grid按无、符号、数字、字母、中文排序


#### ad-grid按无、符号、数字、字母、中文排序

      // 转化中文排序
      convertChineseSort = (data1, data2) => {
        let change = false;
        if (data1 && data2) {
          const data1First = data1[0];
          const data2First = data2[0];
          const data1FirstIsZM = /^[a-zA-Z]$/.test(data1First);
          const data2FirstIsZM = /^[a-zA-Z]$/.test(data2First);
          const data1FirstIsHZ = /^[\u4e00-\u9fa5]$/.test(data1First);
          const data2FirstIsHZ = /^[\u4e00-\u9fa5]$/.test(data2First);
          if ((data1FirstIsZM && data2FirstIsHZ) || (data1FirstIsHZ && data2FirstIsZM)) {
            change = true;
          }
        }
        let compare = data1.localeCompare(data2)
        if (change) {
          if (compare > 0) {
            compare = -1
          } else if (compare < 0) {
            compare = 1
          }
        }
        return compare;
      }


#### AGrid表格清除勾选和选中

deselectAll()
setFocusedCell(index, 0, null);
clearFocusedCell();
// 主动排序
applyColumnState()

    this.gridApi.forEachNode(node => {  
    if (_.includes(pollDeviceCheckedList, node.rowIndex)) {           node.setSelected(true);  
    }
    });


#### AGrid表格跳转到某一行

ensureIndexVisible(rowIndex)

    onRowDataChanged={event => {
    	rowIndex && event.api.ensureIndexVisible(rowIndex);
    	event.api.sizeColumnsToFit();
    }}


#### Scrollbar方法

    onRef={ref => {  this.scrollbarRef = ref;}}
    this.scrollbarRef.current.scrollToTop();
    this.scrollbarRef.current.scrollToBottom();
    if (this.scrollbarRef && this.contentRef) {
      const listIndex = _.get(this.props.selectedViewData, 'listIndex');
      if (listIndex > parseInt(this.contentRef.current.clientHeight / 2 / 40)) {
    	this.scrollbarRef.current.scrollTop(listIndex * 40);
      }
    }


#### Antd Tree滚动实现

    if (this.props.selectedCustomGroup && this.scrollbarRef && this.treeRef) {
    	const thatSelectedDom = document.querySelector('.ant-tree-node-selected');
    	if (thatSelectedDom) {
    	  if (thatSelectedDom.offsetTop > this.treeRef.current.clientHeight / 2) {
    		this.scrollbarRef.current.scrollTop(thatSelectedDom.offsetTop);
    	  }
    	}
    }


#### 单独渲染行或单元格

    gridApi.getRowNode(index).setData({...})
    gridApi.getRowNode(index).setDataValue('xxx',100)


#### 解决表格频繁刷新闪烁

    /**
     * 解决表格频繁刷新闪烁
     * 如进度或开关等轮巡的数据变动，不要绑定数据，仅仅修改渲染
     * @param oldList 旧表格数据
     * @param newList 新表格数据
     * @param filterKey 过滤某项进行判断
     * @param gridApi 表格Api
     * @callback boolean 如果为true,表示表格行数据变动需要刷新，如果为false,表示行数据未变动
     */
    export function gridNoRefreshByKey(oldList: any, newList: any, filterKey: any, gridApi: any) {
      if (!filterKey) {
        return !_.isEqual(oldList, newList);
      }
      let rowIndex = 0;
      return !_.isEqualWith(oldList, newList, (oV: any, nV: any, indexOrKey: any) => {
        if (_.isNumber(indexOrKey)) {
          rowIndex = indexOrKey;
        }
        if (indexOrKey === filterKey) {
          if (oV !== nV && gridApi) {
            gridApi.getRowNode(rowIndex)?.setDataValue(filterKey, nV);
          }
          return true;
        }
        return undefined;
      });
    }

