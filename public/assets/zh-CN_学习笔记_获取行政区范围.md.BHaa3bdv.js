import{_ as e,c as r,j as n,a,o}from"./chunks/framework.BaR4VHXY.js";const y=JSON.parse('{"title":"获取行政区范围","description":"","frontmatter":{"Created at":"2020-07-21T00:00:00.000Z","Last updated at":"2020-07-21T00:00:00.000Z","tags":["百度地图"]},"headers":[],"relativePath":"zh-CN/学习笔记/获取行政区范围.md","filePath":"zh-CN/学习笔记/获取行政区范围.md","lastUpdated":null}'),i={name:"zh-CN/学习笔记/获取行政区范围.md"};function l(p,t,s,c,d,h){return o(),r("div",null,t[0]||(t[0]=[n("h1",{id:"获取行政区范围",tabindex:"-1"},[a("获取行政区范围 "),n("a",{class:"header-anchor",href:"#获取行政区范围","aria-label":'Permalink to "获取行政区范围"'},"​")],-1),n("h3",{id:"获取行政区范围-1",tabindex:"-1"},[a("获取行政区范围 "),n("a",{class:"header-anchor",href:"#获取行政区范围-1","aria-label":'Permalink to "获取行政区范围"'},"​")],-1),n("pre",null,[n("code",null,`<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <style type="text/css">
        body, html,#allmap {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
        #panel{
            position:absolute;
            left:5px;
            top:5px;
        }
        #result{
            background: #fff;
            padding:5px;
        }
    </style>
    <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"><\/script>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=1XjLLEhZhQNUzd93EjU5nOGQ"><\/script>
    <title>添加行政区划</title>
</head>
<body>
<div ></div>
<div >
    <div>
        <input type="text" value="海淀区"/>
        <input type="button" value="查看范围" />
        边界经纬度坐标
        <textarea ></textarea>
        边界墨卡托坐标
        <textarea ></textarea>
    </div>
    <div >
    </div>
</div>
</body>
</html>
<script type="text/javascript">
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.403765, 39.914850), 5);
    map.enableScrollWheelZoom();
    var mercatorProjection = map.getMapType().getProjection();
    $("#commitBtn").bind('click', function(){
        getBoundary($("#keyword").val());
    });
    function getBoundary(city){
        var bdary = new BMap.Boundary();
        bdary.get(city, function(rs){       //获取行政区域
            map.clearOverlays();        //清除地图覆盖物
            var count = rs.boundaries.length; //行政区域的点有多少个
            if (count === 0) {
                alert('未能获取当前输入行政区域');
                return ;
            }
            var pointArray = [];
            for (var i = 0; i < count; i++) {
                var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#ff0000"}); //建立多边形覆盖物
                map.addOverlay(ply);  //添加覆盖物
                pointArray = pointArray.concat(ply.getPath());
            }
            var pathStr = "";
            var pathMc = "";
            for (var i = 0; i < pointArray.length; i++) {

                var mc = mercatorProjection.lngLatToPoint(pointArray[i]);
                pathStr += pointArray[i].lng + "," + pointArray[i].lat + ";";
                pathMc += mc.x + "," + mc.y + ";";
            }
            $('#pathStr').html(pathStr);
            $('#pathMc').html(pathMc);
            var ply = new BMap.Polygon(pointArray , {strokeWeight: 2, strokeColor: "#ff0000"}); //建立多边形覆盖物
            var bounds = ply.getBounds();
            var ne = bounds.getNorthEast();
            var sw = bounds.getSouthWest();
            var neMc = mercatorProjection.lngLatToPoint(ne);
            var swMc = mercatorProjection.lngLatToPoint(sw);
            var str = "经纬度:左下角,右上角：" + sw.lng + "," + sw.lat + ";" + ne.lng + "," + ne.lat
                + "<br/>墨卡托坐标:左下角,右上角：" + swMc.x + "," + swMc.y + ";" + neMc.x + "," + neMc.y;
            $('#result').html(str);
            console.log(bounds);
            map.setViewport(pointArray);    //调整视野
        });
    }
    //getBoundary('北京');
<\/script>
`)],-1)]))}const u=e(i,[["render",l]]);export{y as __pageData,u as default};
