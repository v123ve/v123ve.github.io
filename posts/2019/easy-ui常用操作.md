---

Created at: 2021-04-10
Last updated at: 2021-06-16
tags: 
  - easyui

---

# easy-ui常用操作


#### easy-ui常用操作

1. datagrid内容显示不完用省略号代替,并设置title悬浮显示全部内容

```css
    .datagrid-cell, .datagrid-cell-group, .datagrid-header-rownumber, .datagrid-cell-rownumber
    {
        text-overflow: ellipsis;
    }
    formatter: function (value, row, index) {
        return '<span  title=\'' + value + '\'>' + value + '</span>';
    }
    
```

2. 输入框最大长度限制及限定只能输入及复制数字

        // 加载输入数字
        $("#pollingInterval").parent().find("input")
        .attr("MaxLength", PollingConfiguration.data.maxLenth)
        .attr('oninput','this.value=this.value.replace(/\\D|^0/g,"")')
        .attr('onafterpaste','this.value=this.value.replace(/\\\\D|^0/g,"")');
        // 时间框样式
        $('#dataSourceTimeIpt').timespinner({
            editable: true,
            showSeconds: true,
            value: '00:00:00',
            formatter: function (date) {
                if (!date) {
                    return '00:00:00';
                }
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();
                if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
                    return '00:00:00';
                }
                let tt = [formatN(hours), formatN(minutes), formatN(seconds)];
                return tt.join(":");
    
                function formatN(value) {
                    return (value < 10 ? '0' : '') + value;
                }
            },
            onChange: function () {
                $('#connectionInformationSave').removeClass('txtButtonBan');
                $('#passParametersSave').removeClass('txtButtonBan');
            },
        }).parent().find("input").attr("MaxLength", 8);
    
3. 去除行选中

    onClickRow: function (rowIndex, rowData) {
         $(this).datagrid('unselectRow', rowIndex);
    }
    
3. 获取树节点的层级

    getLevel:function(target){
    	var l = $(target).parentsUntil("ul.tree","ul");
    	return l.length+1;
    }
    var lv =  $().tree("getLevel",node.target);
    

将节点变为叶子节点

    $favoritesTree.tree('append', {
    	parent: target,
    	data: [
    		{
    			"id": -2,
    			"text": "",
    			"iconCls": "tree-folder",
    			"data": {
    				id: -2,
    			},
    			"children": []
    		}
    	]
    });
    $favoritesTree.tree('remove', $favoritesTree.tree('find', -2).target);




