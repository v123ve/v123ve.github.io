import{_ as a,c as i,j as n,a as t,o as r}from"./chunks/framework.BaR4VHXY.js";const D=JSON.parse('{"title":"VideoCommon","description":"","frontmatter":{"Created at":"2019-11-07T00:00:00.000Z","Last updated at":"2021-04-12T00:00:00.000Z"},"headers":[],"relativePath":"zh-CN/工作笔记/VideoCommon.md","filePath":"zh-CN/工作笔记/VideoCommon.md","lastUpdated":null}'),s={name:"zh-CN/工作笔记/VideoCommon.md"};function o(l,e,c,d,p,u){return r(),i("div",null,e[0]||(e[0]=[n("h1",{id:"videocommon",tabindex:"-1"},[t("VideoCommon "),n("a",{class:"header-anchor",href:"#videocommon","aria-label":'Permalink to "VideoCommon"'},"​")],-1),n("h4",{id:"videocommon-1",tabindex:"-1"},[t("VideoCommon "),n("a",{class:"header-anchor",href:"#videocommon-1","aria-label":'Permalink to "VideoCommon"'},"​")],-1),n("pre",null,[n("code",null,`// 代理地址
const API = '/api/';
// 请求地址
const VIDEO_MONITOR_URL = {
    // websocket连接
    websocketUrl: '/messagemanage/ws/websocket',
    // 查询所有接入资源类型列表
    allAccessTypeUrl: API + 'configmanage/accessConfig/allAccessType.action',
    // 查询所有接入资源列表
    accessListUrl: API + 'configmanage/accessConfig/accessList.action?',
    // 查询自定义视图
    groupViewUrl: API + 'configmanage/customGroupConfig/groupView.action',
    // 设备列表系统分组
    deviceSystemGroupUrl: API + 'configmanage/systemGroupConfig/deviceSystemGroup.action?',
    // 设备详情
    deviceDetailUrl: API + 'configmanage/deviceConfig/deviceDetail.action?',
    // 查询设备播放视频URL
    videoUrlUrl: API + 'configmanage/alarm/videoUrl.action?',
    // 设备列表我的收藏
    deviceCollectionGroupUrl: API + 'configmanage/mycollection/deviceCollectionGroup.action?',
    // 设备列表自定义分组
    deviceCustomGroupUrl: API + 'configmanage/customGroupConfig/deviceCustomGroup.action?',
    // 设备列表车载设备
    vehicleLinkCameraListUrl: API + 'configmanage/systemGroupConfig/vehicleLinkCameraList.action?',
    // 搜索系统分组
    deviceSystemGroupByName: API + 'configmanage/systemGroupConfig/deviceSystemGroupByName.action?',
    // 搜索我的收藏
    deviceCollectionGroupByName: API + 'configmanage/mycollection/deviceCollectionGroupByName.action?',
    // 搜索自定义分组
    deviceCustomGroupByName: API + 'configmanage/customGroupConfig/deviceCustomGroupByName.action?',
    // 转发接口
    transferUrl: '/configmanage/proxy/transfer.action',
    // 预案
    planUrl: API + 'securitysystem/planCfg/plan.action?',
    // 查询预案配置
    configUrl: API + 'securitysystem/planCfg/config.action?',
    // 我的收藏组
    collectionGroupUrl: API + 'configmanage/mycollection/collectionGroup.action?',
    // 新增设备到收藏夹
    collectionDeviceUrl: API + 'configmanage/mycollection/collectionDevice.action?',
    // 查询电视墙列表
    tvwallUrl: API + 'securitytvwall/tvwallConfig/tvwall.action',
    // 查询预案列表
    tvwallPlanUrl: API + 'securitytvwall/tvwallConfig/tvwallPlan.action?',
    // 查询预案显示单元配置
    tvwallPlanTvUrl: API + 'securitytvwall/tvwallConfig/tvwallPlanTv.action?',
    // 查询显示单元配置
    tvwallTvUrl: API + 'securitytvwall/tvwallConfig/tvwallTv.action?',
    // 查询画面状态
    tvwallSplitStatusUrl: API + 'securitytvwall/tvwallConfig/tvwallSplitStatus.action?',
    // 电视墙预案配置
    tvwallPlanUrl: API + 'securitytvwall/tvwallConfig/tvwallPlan.action?',
    // 电视墙轮切列表
    planPollTaskUrl: API + 'securitytvwall/tvwallConfig/planPollTask.action?',
    // 电视墙轮切配置
    planPollTaskConfigUrl: API + 'securitytvwall/tvwallConfig/planPollTaskConfig.action?',
    // 画面选看请求
    tvPlayUrl: API + 'securitytvwall/tvControll/tvPlay.action?',
    // 画面停止请求
    tvPlayStopUrl: API + 'securitytvwall/tvControll/tvPlayStop.action?',
    // 预案/轮切控制请求
    planPollControlReqUrl: API + 'securitytvwall/tvControll/planPollControlReq.action?',
    // 电视墙停止请求
    tvwallStopReqUrl: API + 'securitytvwall/tvControll/tvwallStopReq.action?',
    // 人脸系统登录
    faceLoginUrl: '/systemmanage/user!login.action?',
    // 人脸分析相机获取
    faceAnalyseCameraUrl: '/systemmanage/analyseCamera!query.action?',
    // 人脸分析相机根据ID获取
    faceAnalyseCameraByIDUrl: '/systemmanage/analyseCamera!queryByCameraID.action?',
    // 查询人脸系统接入信息
    faceAccessInfoUrl: API + 'configmanage/accessConfig/accessList.action?',
    // 查询分析相机设备列表
    analyseCameraListUrl: API + 'configmanage/faceAccessCfg/analyseCameraList.action?',
};
// 下拉列表
const DOWNLIST_CONFIG = {
    // 设备列表分组
    group: {
        data: [{
            key: 'systemGroup',
            value: '系统分组'
        }, {
            key: 'collectionGroup',
            value: '我的收藏'
        }]
    },
    // 分屏画面
    split: {
        data: [{
            key: '1',
            value: '1画面'
        }, {
            key: '4',
            value: '4画面'
        }, {
            key: '9',
            value: '9画面'
        }, {
            key: '16',
            value: '16画面'
        }, {
            key: '25',
            value: '25画面'
        }, {
            key: '36',
            value: '36画面'
        }, {
            key: '103',
            value: '1+3画面'
        }, {
            key: '105',
            value: '1+5画面'
        }, {
            key: '107',
            value: '1+7画面'
        }, {
            key: '109',
            value: '1+9画面'
        }, {
            key: '111',
            value: '1+11画面'
        }, {
            key: '208',
            value: '2+8画面'
        }]
    },
    // 轮切方式
    planpoll: {
        data: [{
            key: 'cycletask',
            value: '循环轮切'
        }, {
            key: 'timertask',
            value: '定时轮切'
        }]
    },
    // 循环轮切
    keepTime: {
        data: [{
            key: '1',
            value: '1'
        }, {
            key: '5',
            value: '5'
        }, {
            key: '10',
            value: '10'
        }, {
            key: '30',
            value: '30'
        }, {
            key: '60',
            value: '60'
        }]
    },
    // 抓拍过滤
    capture: {
        data: [{
            key: 'focus',
            value: '显示选中抓拍'
        }, {
            key: 'play',
            value: '显示播放抓拍'
        }, {
            key: 'all',
            value: '显示全部抓拍'
        }]
    }
};
// 右键菜单
const CONTENT_MENU = {
    devices: {
        selector: '#deviceContextmenu',
        node: null,
        data: {
            items: [],
        },
    },
    tvwall: {
        selector: '#tvwallDeviceContextmenu',
        node: null,
        data: {
            items: [],
        },
    },
    videos: {
        selector: '#videoContextmenu',
        data: {
            items: [],
        },
    },
    splits: {
        selector: '#splitContextmenu',
        data: {
            items: [],
        },
    }
};
// 键盘码
const KEY_MAP = {
    // 0-9 48-57
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    // A-Z 65-90
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
    //小键盘 0-9 96-105
    96: '0',
    97: '1',
    98: '2',
    99: '3',
    100: '4',
    101: '5',
    102: '6',
    103: '7',
    104: '8',
    105: '9',
    // F1-F11 112-122
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11'
};
// 操作系统禁用键值
const SYSTEM_CTRL_INGORE = {
    'Ctrl + a': 'Ctrl + a',
    'Ctrl + c': 'Ctrl + c',
    'Ctrl + d': 'Ctrl + d',
    'Ctrl + e': 'Ctrl + e',
    'Ctrl + v': 'Ctrl + v',
    'Ctrl + x': 'Ctrl + x',
    'Ctrl + z': 'Ctrl + z',
    'Ctrl + 1': 'Ctrl + 1',
    'Ctrl + 2': 'Ctrl + 2',
    'Ctrl + 3': 'Ctrl + 3',
    'Ctrl + 4': 'Ctrl + 4',
    'Ctrl + 5': 'Ctrl + 5',
    'Ctrl + 6': 'Ctrl + 6',
    'Ctrl + 7': 'Ctrl + 7',
    'Ctrl + 8': 'Ctrl + 8',
    'Ctrl + 9': 'Ctrl + 9',
    'Ctrl + 0': 'Ctrl + 0'
};
// 分屏状态
const SPLIT_TYPE = {
    1: "single_wnd", // 1分屏
    2: "average2", // 2分屏
    4: "average4", // 4分屏
    9: "average9", // 9分屏
    16: "average16", // 16分屏
    25: "average25", // 25分屏
    36: "average36", // 36分屏
    103: "1big_3small", // 1大3小分屏
    105: "1big_5small", // 1大5小分屏
    107: "1big_7small", // 1大7小分屏
    109: "1big_9small", // 1大9小分屏
    111: "1big_11small", // 1大11小分屏
    208: "2big_8small" // 2大8小分屏
};
// 播放状态
const VIDEO_STATE = {
    0: "idle", // 空闲状态
    1: "starting", // 请求回复中
    2: "playing", // 播放中
    3: "stoping", // 停止回复中
    4: "playingerror" // 播放失败
};
// 视频监控常量
const VIDEO_MONITOR_COMMON_DATA = {
    // 自动切换码流类型
    isAutomaticSwitchingStreams: false,
    // 码流类型
    streamType: {
        // 主码流
        main: 'main',
        // 辅码流
        auxiliary: 'auxiliary',
        // 任意码流
        anytype: 'anytype',
        // 第三子码流
        thirdtype: 'thirdtype',
        // 电视墙辅码流
        slaver: 'slaver'
    },
    // 视图列表
    viewList: [],
    // 监控点分组
    systemGroupType: "",
    VEHICLEType: "VMS_VEHICLE",
    // 监控点设备
    deviceType: "VMS_CAM",
    // 节点循环
    nodeCycle: true,
    // 接入资源类型ID
    accessObjTypeID: {
        // 视频监控
        monitor: 'VIDEO_MONITOR_SYS',
        // 门禁
        access: 'ACCESS_CONTROL_SYS',
        // 入侵报警
        alarm: 'INTRUDER_ALARM_SYS',
        // 电子围栏
        electronic: 'ELECTRONIC_FENCE',
        // 车辆
        vehicle: 'VEHICLE_ENTRANCE_SYS',
        // 人脸
        face: 'FACE_RECOGNITION_SYS',
        // RFID
        rfid: 'RFID_SYS',
        // 视频备份
        backup: 'VIDEO_BACKUP_SYS',
        // 囚车接入
        vehicleMonitor: 'VEHICLE_MONITOR_SYS',
    },
    // 接入资源通知
    accessNtf: {
        faceSnapshot: 'FACE_SNAPSHOT_NTF',
        match: 'MATCH_NTF',
        alarm: 'ALARM_NTF'
    }
};
/**
 *@name: GetElementInMain
 *@description: 获取元素绝对位置
 *@param: 元素id,所在层级
 */
GetElementInMain = function (elementId) {
    //获取父页面的位置信息
    let parentContentWin = parent;
    let parentPos = {
        x: 0,
        y: 0
    };
    if (parentContentWin && parentContentWin.main && parentContentWin.main.getMainFrameIframePosition) {
        parentContentWin.main.getMainFrameIframePosition(function (newPosition) {
            parentPos = newPosition;
        })
    }
    let element = $('#' + elementId);
    element.show();
    if (element && element.offset()) {
        let position = {
            x: parentPos.x + parseInt(element.offset().left),
            y: parentPos.y + parseInt(element.offset().top),
            width: parseInt(element.width()),
            height: parseInt(element.height())
        }
        console.warn('子页面容器' + elementId + '坐标:' + JSON.stringify(position));
        element.hide();
        return position;
    } else {
        element.hide();
    }
};
/**
 *@name: TreeData
 *@description: 设置treeData的类
 *@param: 节点数据
 */
TreeData = function (data) {
    this.id = (data.parentID || data.groupID || '') + '_' + data.id || data.cameraID;
    this.text = data.groupName || data.deviceName || data.cameraName || '未知';
    this.iconCls = data.groupName ? "" : data.onlineStatus ?
        "icon-" + (data.onlineStatus === "online" ? 1 : 0) + "-" + (data.deviceSubType || 'VMS_UNKNOWCAM') :
        "icon-1-" + (data.deviceSubType || 'VMS_UNKNOWCAM')
    ;
    this.state = data.groupName ? "closed" : "open";
    this.parentID = data.parentID || data.groupID || '-1';
    this.children = [];
    this.data = data;
};
/**
 *@name: TreeData
 *@description: 设置布控的报警源类
 *@param: 节点数据
 */
DefenceTreeData = function (data, device) {
    if (device) {
        this.id = data.parentID + '_' + data.deviceID;
        this.text = data.deviceName || '未知';
        this.iconCls = 'icon-1-VMS_GUNCAM';
        this.state = "open";
        this.parentID = data.parentID;
        this.children = [];
        this.type = 'device';
        this.data = data;
    } else {
        this.id = '_' + data.id;
        this.text = data.deviceName || '未知';
        this.iconCls = 'icon-1-ACS_DOOR';
        this.state = "closed";
        this.parentID = '-1';
        this.children = [];
        this.type = 'group';
        this.data = data;
    }
};
/**
 *@name: TreeData
 *@description: 设置安检类
 *@param: 节点数据
 */
SecurityTreeData = function (data, device) {
    if (device) {
        this.id = data.parentID + '_' + data.deviceID;
        this.text = data.deviceName || '未知';
        this.iconCls = 'icon-1-VMS_GUNCAM';
        this.state = "open";
        this.parentID = data.parentID;
        this.children = [];
        this.type = 'device';
        this.data = data;
    } else {
        this.id = '_' + data.id;
        this.text = data.deviceName || '未知';
        this.iconCls = 'icon-security-system';
        this.state = "closed";
        this.parentID = '-1';
        this.children = [];
        this.type = 'group';
        this.data = data;
    }
};
/**
 *@name: GetGroupTreeData
 *@description: 将搜索数据转化为树结构
 *@param: 组数据
 *@param: 设备数据
 */
GetGroupTreeData = function (groupList, dataList) {
    // 循环数据，找到parent为0的数据放入数组，并且创建对象找到id和index的对应，找到parent相对应的数据放入第二层
    let mapList = [];
    let groupData = {};
    let deviceData = {};
    for (let i = 0, l = groupList.length; i < l; i++) {
        let treeData = new TreeData(groupList[i]);
        groupData[groupList[i].id] = treeData;
    }
    for (let i = 0, l = dataList.length; i < l; i++) {
        let treeData = new TreeData(dataList[i]);
        deviceData[dataList[i].id] = treeData;
    }
    for (let i = 0, l = groupList.length; i < l; i++) {
        for (let j = 0; j < dataList.length; j++) {
            if (dataList[j].groupID === groupList[i].id) {
                groupData[groupList[i].id].children.push(deviceData[dataList[j].id]);
            }
        }
        if (groupList[i].parentID === -1) {
            mapList.push(groupData[groupList[i].id]);
        } else {
            groupData[groupList[i].parentID].children.push(groupData[groupList[i].id]);
        }
    }
    return mapList;
};
/* 移植电子地图的设备树 */
/**
 *@name: AccessTypeTree
 *@description: 创建资源列表树的类（系统）
 *@param: 系统数据
 *@param: 树id
 */
AccessTypeTree = function (data, treeId, first) {
    deviceList.data.deviceIdToId[data.deviceID] = data.id;
    this.id = treeId + data.objTypeID;
    this.text = data.objTypeName;
    this.state = (first ? "open" : "closed");
    this.treeType = "accessType";
    this.iconCls = "icon-platform";
    this.children = [];
    this.data = data;
};
/**
 *@name: AccessTree
 *@description: 创建资源列表树的类（平台）
 *@param: 平台数据
 *@param: 树id
 */
AccessTree = function (data, treeId) {
    this.id = treeId + data.objTypeID;
    this.text = data.accessObjName;
    this.state = "closed";
    this.treeType = "access";
    this.iconCls = "icon-subsystem";
    this.data = data;
};
/**
 *@name: DeviceTree
 *@description: 创建设备树的类（非模糊搜索）
 *@param: 设备数据
 *@param: 树id
 *@param: 是否需要将囚车转为组
 */
DeviceTree = function (data, treeId, noVehicleGroup) {
    this.id = treeId + data.id;
    this.text = data.deviceName;
    this.parentID = treeId + data.parentID;
    this.state = data.type === "group" ? "closed" : "open";
    switch (data.deviceType) {
        case 'ACS_DOOR':
            this.doorStatus = (data.doorStatus === 1 ? 1 : 0);
            if (this.doorStatus) {
                data.deviceSubType = "ACS_DOOR_OPEN";
            } else {
                data.deviceSubType = "ACS_DOOR_CLOSE";
            }
            break;
        case 'FRS_REGLOCATION':
            data.deviceSubType = "FRS_REGLOCATION";
            break;
        case 'RS_LANDMARK':
            data.deviceSubType = "RS_LANDMARK";
            break;
        case 'VMS_VEHICLE':
            data.deviceSubType = "VMS_HANDHELDCAM";
            if (!noVehicleGroup) {
                data.type = "group";
                this.state = "closed";
            }
            break;
    }
    if (!data.onlineStatus) {
        data.onlineStatus = "offline";
    }
    this.iconCls = "icon-" + (data.onlineStatus === "online" ? 1 : 0) + "-" + data.deviceSubType;
    // 如果是囚车，当做分组处理
    if (data.deviceType === 'VMS_VEHICLE') {
        this.iconCls = "icon-" + (data.onlineStatus === "online" ? 1 : 0) + "-" + data.deviceType;
    }
    if (data.type === "group") {
        this.id = this.id + "_group";
    }
    this.children = [];
    this.data = data;
};
/**
 *@name: NewDeviceTree
 *@description: 创建设备树的类（模糊搜索）
 *@param: 搜索数据
 *@param: 树id
 */
NewDeviceTree = function (data, treeId, noVehicleGroup, isSearchData) {
    this.id = treeId + data.id;
    this.text = (data.deviceName || data.groupName);
    this.parentID = treeId + data.groupID;
    this.state = "open";
    switch (data.deviceType) {
        case 'ACS_DOOR':
            this.doorStatus = (data.doorStatus === 1 ? 1 : 0);
            if (this.doorStatus) {
                data.deviceSubType = "ACS_DOOR_OPEN";
            } else {
                data.deviceSubType = "ACS_DOOR_CLOSE";
            }
            break;
        case 'FRS_REGLOCATION':
            data.deviceSubType = "FRS_REGLOCATION";
            break;
        case 'RS_LANDMARK':
            data.deviceSubType = "RS_LANDMARK";
            break;
        case 'VMS_VEHICLE':
            data.deviceSubType = "VMS_HANDHELDCAM";
            if (!noVehicleGroup) {
                data.type = "group";
                this.state = "closed";
                if (isSearchData) {
                    this.state = "open";
                }
            }
            break;
    }
    if (!data.onlineStatus) {
        data.onlineStatus = "offline";
    }
    this.iconCls = "icon-" + (data.onlineStatus === "online" ? 1 : 0) + "-" + data.deviceSubType;
    // 如果是囚车，当做分组处理
    if (data.deviceType === 'VMS_VEHICLE') {
        this.iconCls = "icon-" + (data.onlineStatus === "online" ? 1 : 0) + "-" + data.deviceType;
    }
    if (data.type === "group") {
        this.id = this.id + "_group";
    }
    this.children = [];
    this.data = data;
};
/**
 *@name: GetTreeData
 *@description: 获取树的数据
 *@param: 传入要变成树类型的数据
 *@param: 传入树的id
 */
PlatTree = function (data, treeId) {
    this.id = treeId + data.accessObjID;
    this.text = data.accessObjName;
    this.state = "open";
    this.treeType = "accessType";
    this.iconCls = "icon-platform";
    this.children = [];
    this.data = data;
};
/**
 *@name: GetAccessTypeTreeData
 *@description: 将接入的数据更改为树的数据
 *@param: 接入的数组
 *@param: 获取的树的id
 */
GetAccessTypeTreeData = function (dataList, treeId) {
    treeId = treeId ? treeId + "_" : "";
    let newDeviceList = [];
    for (let i = 0, l = dataList.length; i < l; i++) {
        if (dataList[i].objTypeID !== VIDEO_MONITOR_COMMON_DATA.accessObjTypeID.backup) {
            newDeviceList.push(new AccessTypeTree(dataList[i], treeId, (i === 0)));
        }
    }
    return newDeviceList;
};
/**
 *@name: GetAccessTreeData
 *@description: 获取接入的树对象
 *@param: 获取到的数据（平台）列表
 *@param: 设备树的id
 */
GetAccessTreeData = function (dataList, treeId) {
    treeId = treeId ? treeId + "_" : "";
    let newDeviceList = [];
    for (let i = 0, l = dataList.length; i < l; i++) {
        newDeviceList.push(new AccessTree(dataList[i], treeId));
    }
    return newDeviceList;
};
/**
 *@name: GetTreeData
 *@description: 获取树的数据
 *@param: 传入要变成树类型的数据
 *@param: 传入树的id
 *@param: 是否需要将囚车转为组
 */
GetTreeData = function (dataList, treeId, noVehicleGroup) {
    treeId = treeId ? treeId + "_" : "";
    let newDeviceList = [];
    for (let i = 0, l = dataList.length; i < l; i++) {
        newDeviceList.push(new DeviceTree(dataList[i], treeId, noVehicleGroup));
    }
    return newDeviceList;
};
/**
 *@name: LoadTreeByResult
 *@description: 根据模糊搜索的结果搜索设备并加载重构树
 *@param: 搜索结果的对象
 *@param: 需要加载的树
 *@param: 需要加载的父节点
 */
LoadTreeByResult = function (responseData, treeId, isSystemGroup) {
    let $deviceList = $("#" + treeId);
    //组的列表
    let groupList = responseData.groupList;
    //设备树的列表
    let theDeviceList = responseData.deviceList;
    //平台的列表
    let theAccObjList = responseData.accObjList;
    //树的id
    let oldTreeId = treeId;
    treeId = treeId + "_";
    let treeData = {};
    let allDeviceArr = [];
    //实例化系统的树结构
    if (theAccObjList) {
        for (i = 0, l = theAccObjList.length; i < l; i++) {
            treeData[theAccObjList[i].accessObjID] = new PlatTree(theAccObjList[i], treeId);
        }
    }
    //实例化组的树结构
    for (let i = 0, l = groupList.length; i < l; i++) {
        groupList[i].type = 'group';
        treeData[groupList[i].id] = new NewDeviceTree(groupList[i], treeId)
    }
    //实例化设备的树结构
    for (i = 0, l = theDeviceList.length; i < l; i++) {
        theDeviceList[i].type = 'device';
        let parentID = '_' + theDeviceList[i].groupID;
        if (theDeviceList[i].deviceType === 'VMS_VEHICLE') {
            parentID = '';
        }
        treeData[theDeviceList[i].deviceID + parentID] = new NewDeviceTree(theDeviceList[i], treeId, null, true);
        allDeviceArr.push(treeData[theDeviceList[i].deviceID + '_' + theDeviceList[i].groupID]);
    }
    let rootTreeData = [];
    let groupID = null;
    let parentId = null;
    let platAccessObjID = null;
    //遍历循环，如果是平台则添加平台的树
    //如果是组判断是不是-1，如果是则添加到平台下边，如果不是则找到相应的组添加进去
    //如果是设备则添加到相应的组下边
    for (let keys in treeData) {
        //如果是平台
        if ((!treeData[keys].data.groupOrder && !treeData[keys].data.deviceID)) {
            rootTreeData.push(treeData[keys]);
            // 如果是组
        } else if (treeData[keys].data.groupOrder) {
            parentId = treeData[keys].data.parentID;
            //如果不是根组则添加到现有的组下边
            if (parentId && treeData[parentId] && parentId !== -1) {
                treeData[parentId].children.push(treeData[keys]);
                //如果是根组，则将组添加到平台下边
            } else {
                // 如果有平台
                if (theAccObjList) {
                    platAccessObjID = treeData[keys].data.accessObjID;
                    treeData[platAccessObjID].children.push(treeData[keys]);
                } else {
                    rootTreeData.push(treeData[keys]);
                }
            }
            //如果是设备则判断是不是在组的下边，如果是在组的下边则添加到组的下边
        } else {
            groupID = treeData[keys].data.groupID;
            const parentDeviceID = treeData[keys].data.parentDeviceID;
            if (groupID && treeData[groupID]) {
                if (!treeData[groupID].children) {
                    treeData[groupID].children = [];
                }
                treeData[groupID].children.push(treeData[keys]);
            } else if (parentDeviceID && treeData[parentDeviceID]) {
                if (!treeData[parentDeviceID].children) {
                    treeData[parentDeviceID].children = [];
                }
                treeData[parentDeviceID].children.push(treeData[keys]);
            } else {
                platAccessObjID = treeData[keys].data.accessObjID;
                // 如果设备无平台就直接丢弃，否则则添加到平台下
                if (platAccessObjID && treeData[platAccessObjID]) {
                    treeData[platAccessObjID].children.push(treeData[keys]);
                }
            }
        }
    }
    // 最终数据
    const searchData = [];
    // 移除非视频监控和囚车的
    rootTreeData.forEach(v => {
        if (v.data.accessObjTypeID === VIDEO_MONITOR_COMMON_DATA.accessObjTypeID.vehicleMonitor) {
            searchData.push(v);
        }
        if (v.data.accessObjTypeID === VIDEO_MONITOR_COMMON_DATA.accessObjTypeID.monitor) {
            searchData.push(v);
        }
    })
    if (isSystemGroup) {
        $deviceList.tree("loadData", searchData);
    } else {
        $deviceList.tree("loadData", rootTreeData);
    }
    SetOpacityByData(allDeviceArr, oldTreeId);
};
/**
 *@name: getAccessTypeList
 *@description: 查询所有接入资源类型列表
 *@param: 获取的树的id
 */
GetAccessTypeList = function (systemLog, treeId) {
    CommonJs.AJAX(VIDEO_MONITOR_URL.allAccessTypeUrl, null, rsp => {
        if (rsp.result.code >= 200 && rsp.result.code < 300) {
            return GetAccessTypeTreeData(rsp.data.list, treeId);
        } else {
            console.error('获取所有接入资源类型列表失败');
        }
    }, "所有接入资源类型列表", systemLog, {
        type: "GET",
        async: true
    });
};
/**
 *@name: GetAccessList
 *@description: 所有接入资源列表
 *@param: 请求的参数
 *@param: 需要加载的树
 *@param: 需要加载的父节点
 *@param: 加载id
 */
GetAccessList = function (systemLog, url, treeId, node, loadingId, isVehicleMonitor) {
    CommonJs.AJAX(VIDEO_MONITOR_URL.accessListUrl + $.param({
        accessObjTypeID: ''
    }), null, rsp => {
        if (rsp.result.code >= 200 && rsp.result.code < 300 && rsp.data.list.length > 0) {
            let list = [];
            rsp.data.list.forEach(v => {
                if (v.accessObjTypeID === VIDEO_MONITOR_COMMON_DATA.accessObjTypeID.vehicleMonitor) {
                    list.push(v);
                }
                if (!isVehicleMonitor && v.accessObjTypeID === VIDEO_MONITOR_COMMON_DATA.accessObjTypeID.monitor) {
                    list.push(v);
                }
            });
            GetAccessAndTypeData(treeId, GetAccessTreeData(list, treeId));
        } else {
            if (url) {
                GetAndLoadDataToTree(url, treeId, node, loadingId);
            }
        }
        VIDEO_MONITOR_COMMON_DATA.nodeCycle = true;
    }, "所有接入资源列表", systemLog, {
        type: "GET"
    });
};
/**
 *@name: GetAccessAndTypeData
 *@description: 所有接入资源列表和类型的组合数据
 *@param: 获取的树的id
 *@param: 所有接入资源列表
 */
GetAccessAndTypeData = function (treeId, accessList) {
    let $deviceList = $("#" + treeId);
    $deviceList.tree("loadData", accessList);
    for (let i = 0; i < accessList.length; i++) {
        let child = accessList[i];
        let node = $deviceList.tree("find", child.id);
        if (node) {
            setTimeout(function () {
                $deviceList.tree("expand", node.target)
            });
        }
    }
};
/**
 *@name: GetAndLoadDataToTree
 *@description: 根据数据加载列表
 *@param: 请求的参数
 *@param: 需要加载的树
 *@param: 需要加载的父节点
 *@param: 加载id
 *@param: 是否需要将囚车转为组
 */
GetAndLoadDataToTree = function (systemLog, url, treeId, node, loadingId, noVehicleGroup) {
    // let treeLoading = $("#" + loadingId).mLoading("");
    CommonJs.AJAX(url, null, rsp => {
        //treeLoading && treeLoading();
        if (rsp.result.code >= 200 && rsp.result.code < 300) {
            GetTreeDataByList(rsp.data.list, treeId, node, noVehicleGroup);
        } else {
            console.error('根据parentid查询相机列表失败');
        }
        VIDEO_MONITOR_COMMON_DATA.nodeCycle = true;
    }, "根据parentid查询相机列表", systemLog, {
        type: "GET"
    });
};
/**
 *@name: GetTreeDataByList
 *@description: 将返回的list组成树结构然后加载到树中
 *@param: 接口返回的节点数据
 *@param: 需要加载的树
 *@param: 需要加载的父节点
 *@param: 是否需要将囚车转为组
 */
GetTreeDataByList = function (responseList, treeId, node, noVehicleGroup) {
    let list = responseList;
    list = GetTreeData(list, treeId, noVehicleGroup);
    let $deviceList = $("#" + treeId);
    $deviceList.tree("append", {
        parent: (node ? node.target : null),
        data: list
    });
    if (node) {
        $deviceList.tree("collapse", node.target);
        $deviceList.tree("expand", node.target);
    }
    var newList = $.extend(true, [], list);
    newList.push(node);
    SetOpacityByData(newList, treeId);
};
/**
 *@name: SetOpacityByData
 *@description: 设置所有树节点的样式是否透明
 *@param: 接口返回的节点数据
 *@param: 需要加载的树
 */
SetOpacityByData = function (dataList, treeId) {
    let $deviceList = $("#" + treeId);
    if (dataList) {
        for (let i = 0, l = dataList.length; i < l; i++) {
            // 如果节点为离线或失效,并且不为分组或囚车
            if (
                dataList[i] &&
                dataList[i].data &&
                (
                    dataList[i].data.type !== 'group' ||
                    dataList[i].data.deviceType === 'VMS_VEHICLE'
                ) &&
                (
                    dataList[i].data.onlineStatus === "offline" ||
                    dataList[i].data.onlineStatus === "invalid"
                )
            ) {
                let childNode = $deviceList.tree("find", dataList[i].id);
                if (childNode) {
                    SetStyle(childNode.target, true);
                }
            }
        }
    }
};
/**
 *@name: SetOpacityByData
 *@description: 设置树节点的图标和文字为不透明
 *@param: 要改变样式的元素
 *@param: 透明还是不透明
 */
SetStyle = function (ele, flag) {
    let number = flag ? "0.3" : "1";
    $(ele).find(".tree-title>span").css("opacity", number);
};
/**
 *@name: MyAddSystemLogAndOperationLog
 *@description: 记录系统日志和操作日志
 *@param: 用户信息
 *@param: 模块名称
 *@param: 操作类型
 *@param: 被操作对象
 *@param: 参数
 *@param: 操作结果
 */
MyAddSystemLogAndOperationLog = function (userInfo, moduleName, oprType, opredObj, param, oprResult) {
    let systemLog = {
        moduleName: moduleName,
        oprObj: (userInfo ? userInfo.oprObj : ""),
        oprType: oprType,
        opredObj: opredObj,
        oprResult: oprResult ? oprResult : "",
        description: oprResult ? "qt向前端发送消息,参数【" + JSON.stringify(param) + "】" : "前端向qt发送消息,参数【" + JSON.stringify(param) + "】",
        interactiveObj: oprResult ? "前端" : "qt"
    };
    if (oprResult) {
        //记录操作日志
        let oprationLog = {
            oprObj: (userInfo ? userInfo.oprObj : ""),
            userName: (userInfo ? userInfo.userName : ""),
            oprType: oprType,
            oprContent: opredObj,
            oprResult: oprResult,
            oprDescription: oprType + opredObj + oprResult,
            loginIP: (userInfo ? userInfo.ip : "")
        }
        CommonJs.setOperationLog(oprationLog);
    }
    CommonJs.setSystemLog(systemLog);
};
`)],-1)]))}const I=a(s,[["render",o]]);export{D as __pageData,I as default};
