---

Created at: 2020-09-11
Last updated at: 2022-02-10
tags: 
  - 树

---

# js生成树


## js生成树

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>设备列表</title>
      <script src="MtVideo.js"></script>
      <style>
        html {
          width: calc(100% - 8px);
          height: calc(100% - 16px);
        }
    
        body {
          width: 100%;
          height: 100%;
        }
    
        .previewContainer {
          width: 100%;
          height: 100%;
        }
      </style>
    </head>
    <body>
    <div >
      <div ></div>
      <div ></div>
    </div>
    <script>
      // 登录信息
      const LOGIN_INFO = {
        userName: 'admin',
        password: '21232f297a57a5a743894a0e4a801fc3',
        url: '192.168.2.36',
        wsConfig: {
          C: true,
          Java: true,
        }
      };
      // 文件夹
      const folderIcon = `<img src='data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAICAgICAgICAgIDAwMDAwQEBAQEBAcFBQUFBQcKBgcGBgcGCgkLCQgJCwkQDQsLDRATEA8QExcUFBcdGx0lJTIBAgICAgICAgICAgMDAwMDBAQEBAQEBwUFBQUFBwoGBwYGBwYKCQsJCAkLCRANCwsNEBMQDxATFxQUFx0bHSUlMv/CABEIABQAFAMBIgACEQEDEQH/xAAaAAABBQEAAAAAAAAAAAAAAAAHAAECBAYJ/9oACAEBAAAAAOixO0QdnRPjr//EABUBAQEAAAAAAAAAAAAAAAAAAAUJ/9oACAECEAAAAJ4PLo//xAAXAQADAQAAAAAAAAAAAAAAAAADBAYH/9oACAEDEAAAAN3Tng//xAAsEAABAwAHBQkAAAAAAAAAAAACAQMEAAUGBxESIRciM3LSEBRRUlNUc5LB/9oACAEBAAE/AIlrr8667zNi2riw2VkOIDUgYzJZUXRRE28cvgtLGW8vLqduWza2RVNdIWVWDCcwwYeZCyDgqUZvzYA5TM+ycpl1l8m9xwXgNBRN8D0xRaN8NvlTslcQeWmzSoR0SVOwRPUDops1qL3c/wC4dFEuys6epvTSX5B/Bp//xAAmEQABAgMHBQEAAAAAAAAAAAACAQQAAwUHERMlMUPRBhIXIjJj/9oACAECAQE/AKXaz1FSnAO0dvp04b78V9MOWV/5kipHne0EvYX8hEXRMAFgqNR8Q8qZ6rsBxAUaj9gZUz+U2A4j/8QAIREAAgEEAQUBAAAAAAAAAAAAAQQCAAMGEZMSFCRUc4L/2gAIAQMBAT8Abx1FuE7Paq27Z1roXEZD9Ag0MMx8AAqzJ+sqDz3uX+SVF97Z82/ySr//2Q=='/>`;
      // 设备
      const deviceIcon = `<img src='data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAICAgICAgICAgIDAwMDAwQEBAQEBAcFBQUFBQcKBgcGBgcGCgkLCQgJCwkQDQsLDRATEA8QExcUFBcdGx0lJTIBAgICAgICAgICAgMDAwMDBAQEBAQEBwUFBQUFBwoGBwYGBwYKCQsJCAkLCRANCwsNEBMQDxATFxQUFx0bHSUlMv/CABEIABQAFAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAGCQIHCAr/2gAIAQEAAAAALcxOd5/KkaExGB7/AP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIQAAAAD//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMQAAAAD//EACcQAAEEAQMEAgIDAAAAAAAAAAMBAgQFBgAHCAkREhQTIhUxU3KC/9oACAEBAAE/AOVO8XU+z7P5sDYzZjNcExGnlHBEWJFjHm2Pivh7MkyqRv8AQY9Auus9HOE7AbnuUb2vRHwIb2f6a5mtguQXIfI9ua+RvZxbzCqyyKZ8WX+O9JkWWjGNVJQxy5Inj8+/ZWayTILrAD86d3cRnHbmFdvAzGoM9hFU9HXXEyzNKnxf4jEWIwDDJ9mI9fHXEzcPPss3uwvaXJb+4yPFNxbqNR5DUzphZICRpzviJPahVd8cmGjlOM7ez2K3XS+KZuxWeh/JEmMDuVaCYdXqvmxkGF2cmqbp3cd6XONwc4EHIpT86LYOyOrmWDJFVZDnH9sgjRni/TSfcTkVHjVO7V1jfTh4sYNCygW3uKWmMWF7CPANbwrUx7KPCktUZwQjT/Y9dCsVWPeNEIrdbG8M9nuPeJ2OGYA++Wum25rQvvTmnJ85RCA7s5Bs+viFNf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z'/>`;
      // MtConnect对象
      let Mtc = null;
      // MtQuery对象
      let Mtq = null;
      // 设备树
      let deviceTree = [];
      // 载入过的节点
      let loadedKeys = [];
    
      // 获取根节点
      function getRoot() {
        deviceTree = [];
        loadedKeys = [];
        getGroup();
        getDevice();
      };
    
      // 获取非根节点
      function getChildren(_this) {
        const parentID = _this.getAttribute('groupID');
        const parentKey = _this.getAttribute('parentKey');
        console.warn(loadedKeys, parentID, parentKey);
        if (loadedKeys.indexOf(parentKey.toString()) === -1) {
          getGroup(parentID, parentKey);
          getDevice(parentID, parentKey);
        }
      };
    
      // 获取非根节点
      function getSearch() {
        const serarchValue = this.value;
        if (serarchValue) {
          searchDevice(serarchValue);
        } else {
          getRoot();
        }
      }
    
      // 获取组
      function getGroup(parent, parentKey = '', pageSize = 1000, pageIndex = 1) {
        if (Mtq) {
          loadedKeys.push(parentKey.toString());
          Mtq.getDeviceGroup({
            parentID,
            pageSize,
            pageIndex,
          }).then(res => {
            const {code, data} = res;
            if (code === 'success') {
              const treeData = data.map(v => convertGroupData(v));
              if (parentKey) {
                const parentNode = findTreeByKey(deviceTree, parentKey);
                if (parentNode) {
                  treeData.concat(parentNode.children);
                  parentNode.children = treeData;
                } else {
                  deviceTree = treeData;
                }
              } else {
                deviceTree = treeData;
              }
              // 加载树数据
              loadTreeData();
            } else {
              alert(res.message);
            }
          });
        } else {
          alert('未获得MtQuery对象');
        }
      };
    
      // 获取设备
      function getDevice(parent, parentKey = '', pageSize = 1000, pageIndex = 1) {
        if (Mtq) {
          Mtq.getDevice({
            parentID,
            pageSize,
            pageIndex,
          }).then(res => {
            const {code, data} = res;
            if (code === 'success') {
              const treeData = data.map(v => convertDeviceData(v));
              const parentNode = findTreeByKey(deviceTree, parentKey);
              if (parentNode) {
                let newTreeData = treeData;
                const groupType = parentNode.data.groupType;
                if (groupType === 'Platform' && treeData.length > 0) {
                  const groupID = parentNode.data.groupID;
                  newTreeData = {
                    key: `ungroup${groupID}`,
                    title: '未分组',
                    children: treeData,
                    isLeaf: false,
                    data: {
                      groupID: 'ungroup',
                      groupName: '未分组',
                      treeType: 'group',
                      accessObjID: groupID,
                    },
                  }
                }
                parentNode.children = parentNode.children ? parentNode.children.concat(newTreeData) : newTreeData;
              } else if (treeData.length > 0) {
                const unGroup = {
                  key: `ungroup${parentID}`,
                  title: '未分组',
                  children: treeData,
                  isLeaf: false,
                  data: {
                    groupID: 'ungroup',
                    groupName: '未分组',
                    treeType: 'group',
                    accessObjID: parentID,
                  },
                }
                deviceTree = deviceTree.concat(unGroup);
              }
              // 加载树数据
              loadTreeData();
            } else {
              alert(res.message);
            }
          });
        } else {
          alert('未获得MtQuery对象');
        }
      };
    
      // 模糊搜索设备
      function searchDevice(deviceName) {
        console.warn(deviceName);
        if (Mtq) {
          loadedKeys = [];
          Mtq.getDeviceByName({
            deviceName,
          }).then(res => {
            const {code, data} = res;
            if (code === 'success') {
              const {
                accObjList,
                groupList,
                deviceList,
              } = data;
              const treeData = convertSearchData(accObjList, groupList, deviceList);
              accObjList.forEach(v => {
                loadedKeys.push(v.accessObjID);
              });
              groupList.forEach(v => {
                loadedKeys.push(`${v.accessObjID || ''}-${v.groupID}`);
              });
              deviceTree = treeData;
              // 加载树数据
              loadTreeData();
            } else {
              alert(res.message);
            }
          });
        } else {
          alert('未获得MtQuery对象');
        }
      }
    
      // 转化为树平台数据
      function convertAccessData(item) {
        return {
          key: item.accessObjID,
          title: item.accessObjName,
          children: [],
          isLeaf: false,
          data: {
            ...item,
            groupID: item.accessObjID,
            treeType: 'access',
          },
        };
      };
    
      // 转化为树分组数据
      function convertGroupData(item) {
        return {
          key: `${item.accessObjID || ''}-${item.groupID}`,
          title: item.groupName,
          children: [],
          isLeaf: false,
          data: {
            ...item,
            treeType: 'group',
          },
        };
      };
    
      // 转化为树分组数据
      function convertDeviceData(item) {
        return {
          key: `${item.parentID || ''}-${item.deviceID}`,
          title: item.deviceName,
          isLeaf: true,
          data: {
            ...item,
            treeType: 'device',
          },
        };
      };
    
      // 转化为搜索树数据
      function convertSearchData(accObjList, groupList, deviceList) {
        const treeData = {};
        accObjList.forEach(v => {
          treeData[v.accessObjID] = convertAccessData(v);
        });
        groupList.forEach(v => {
          treeData[`${v.accessObjID || ''}-${v.groupID}`] = convertGroupData(v);
        });
        deviceList.forEach(v => {
          treeData[`${v.groupID || ''}-${v.deviceID}`] = convertDeviceData(v);
        });
        const rootTreeData = [];
        Object.keys(treeData).forEach(i => {
          const {
            treeType,
            parentID,
            accessObjID,
            groupID,
          } = treeData[i].data;
          switch (treeType) {
            case 'access':
              // 如果是平台,直接加入根节点
              rootTreeData.push(treeData[i]);
              break;
            case 'group':
              // 如果有平台
              if (accObjList.length > 0) {
                // 如果父节点是平台,加入平台下,如果父节点是分组,加入分组下
                if (parentID === -1 || parentID === '') {
                  if (treeData[accessObjID]) {
                    treeData[accessObjID].children.push(treeData[i]);
                  } else {
                    console.error('异常树节点', JSON.stringify(treeData[i]));
                  }
                } else if (treeData[`${accessObjID || ''}-${parentID}`]) {
                  treeData[`${accessObjID || ''}-${parentID}`].children.push(treeData[i]);
                } else {
                  console.error('异常树节点', JSON.stringify(treeData[i]));
                }
              } else {
                // 如果无平台,直接加入根节点
                rootTreeData.push(treeData[i]);
              }
              break;
            case 'device':
              // 如果有平台
              if (accObjList.length > 0) {
                // 如果父节点是平台,加入平台下,如果父节点是分组,加入分组下
                if (groupID) {
                  if (treeData[`${accessObjID || ''}-${groupID}`]) {
                    treeData[`${accessObjID || ''}-${groupID}`].children.push(treeData[i]);
                  } else {
                    console.error('异常树节点', JSON.stringify(treeData[i]));
                  }
                } else if (treeData[accessObjID]) {
                  treeData[accessObjID].children.push(treeData[i]);
                } else {
                  console.error('异常树节点', JSON.stringify(treeData[i]));
                }
              } else {
                // 如果无平台,直接加入根节点
                rootTreeData.push(treeData[i]);
              }
              break;
            default:
              break;
          }
        })
        return rootTreeData;
      }
    
      // 找到树节点
      function findTreeByKey(data, key) {
        let tree = null;
        for (const item of data) {
          if (key == item.key) {
            tree = item;
            break;
          }
          if (item.children) {
            tree = findTreeByKey(item.children, key);
            if (tree) {
              break;
            }
          }
        }
        return tree;
      };
    
      // 循环加载树数据
      function getNodeData(node) {
        let type = node.data.treeType;
        const onlineStatus = node.data.onlineStatus;
        let template = '';
        switch (type) {
          case "access":
          case "group":
            const groupID = node.data.groupID;
            const accessObjID = node.data.accessObjID;
            const parentKey = `${accessObjID || ''}-${groupID}`;
            template = `<div style="margin-left: 30px;opacity: ${onlineStatus !== 'offline' ? 1 : 0.5}"><details open><summary groupparentKey="${parentKey}" >${folderIcon}${node.title}</summary>`;
            if (node.children.length > 0) {
              node.children.forEach(v => {
                template += getNodeData(v);
              })
            }
            template += '</details></div>';
            break;
          case "device":
            template = `<div style="margin-left: 30px;opacity: ${onlineStatus !== 'offline' ? 1 : 0.5}"><summary>${deviceIcon}${node.title}</summary></div>`;
            break;
          default:
            break;
        }
        return template;
      }
    
      // 加载树结构
      function loadTreeData() {
        let treeContent = document.getElementById('treeContent');
        treeContent.innerHTML = '';
        let template = '';
        deviceTree.forEach(v => {
          template += getNodeData(v);
        })
        treeContent.innerHTML = template;
      };
    
      // 页面加载
      function pageOnLoad() {
        Mtc = new MtConnector();
        const previewContainer = document.getElementById('#previewContainer');
        Mtc.onDisconnectNotification = data => {
          console.log(data);
          alert("收到连接断开通知,请重试！");
          previewContainer.innerHTML = '';
        };
        const login = Mtc.connect(LOGIN_INFO);
        login.then(res => {
          if (res.code === 'success') {
            const previewContainer = document.getElementById('treeBtnContent');
            let btn = document.createElement("BUTTON");
            btn.innerText = '查询分组及设备';
            btn.onclick = getRoot;
            previewContainer.appendChild(btn);
            let input = document.createElement("INPUT");
            input.setAttribute('placeholder', '模糊搜索设备');
            input.onclick = getSearch;
            previewContainer.appendChild(input);
            Mtq = new MtQuery(Mtc);
          } else {
            alert('登录失败');
            previewContainer.innerHTML = '';
          }
        })
      }
    
      window.onload = pageOnLoad;
    </script>
    </body>
    </html>




