﻿var viewMap;
var navToolbar;
var initialExtent;
var BUOY_DATA;
var STATION_DATA;
var LivingMaps_List;
var photoArr = new Array();
var curIndex;

$(function () {
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "/Api/Map/GetMapInfo",
        success: function (result) {
            var data = JSON.parse(result);
            require([
                "esri/map",
                "esri/geometry/Extent",
                "esri/SpatialReference",
                "esri/layers/GraphicsLayer"
            ], function (Map, Extent, SpatialReference, GraphicsLayer) {

                initialExtent = new Extent(117, 35.327, 123, 40.895,
                                new SpatialReference({ wkid: 4326 }));

                var map = new Map("MapDiv", {
                    extent: initialExtent,
                    logo: false
                });
                viewMap = map;
                $.each(data.BaseMaps_List, function (i, val) {
                    AddDynamicLayer(val.id, val.restUrl);
                });
                var layerTree = [];
                LivingMaps_List = data.LivingMaps_List;
                $.each(data.LivingMaps_List, function (i, val) {
                    AddDynamicLayer(val.id, val.restUrl);                    
                });                
                $.ajax({
                    type: "POST",
                    dataType: "JSON",
                    url: "/Api/Map/GetMapEquipment",
                    success: function (result) {
                        var data = JSON.parse(result);
                        if (data[0] == null || data[1] == null) {
                            alert("设备数据加载失败！")
                        } else {
                            BUOY_DATA = data[1];
                            STATION_DATA = data[0];
                            buoyLayer = new GraphicsLayer({ "id": "buoyLayer" });
                            map.addLayer(buoyLayer, 1);
                            buoyTextLayer = new GraphicsLayer({ "id": "buoyTextLayer" });
                            map.addLayer(buoyTextLayer, 1);
                            dojo.connect(buoyLayer, "onClick", doBuoyIdentify);

                            stationLayer = new GraphicsLayer({ "id": "stationLayer" });
                            map.addLayer(stationLayer, 1);
                            stationTextLayer = new GraphicsLayer({ "id": "stationTextLayer" });
                            map.addLayer(stationTextLayer, 1);
                            dojo.connect(stationLayer, "onClick", doStationIdentify);
                        }
                        dojo.connect(viewMap, "onLoad", LoadMapComponents);
                        addDevice(BUOY_DATA, "../img/buoy.png", buoyLayer, buoyTextLayer);
                        addDevice(STATION_DATA, "../img/station.png", stationLayer, stationTextLayer);
                    }
                });             

            });
        }
    });

    

});


function initMap(container_string) {
    require([
        "esri/map",
        "esri/geometry/Extent",
        "esri/SpatialReference",
        "esri/layers/GraphicsLayer"
    ], function (Map, Extent, SpatialReference, GraphicsLayer) {

        initialExtent = new Extent(117, 35.327, 123, 40.895,
                        new SpatialReference({ wkid: 4326 }));

        var map = new Map(container_string, {
            extent: initialExtent,
            logo: false
        });
        viewMap = map;

        buoyLayer = new GraphicsLayer({ "id": "buoyLayer" });
        map.addLayer(buoyLayer, 1);
        buoyTextLayer = new GraphicsLayer({ "id": "buoyTextLayer" });
        map.addLayer(buoyTextLayer, 1);
        dojo.connect(buoyLayer, "onClick", doBuoyIdentify);

        stationLayer = new GraphicsLayer({ "id": "stationLayer" });
        map.addLayer(stationLayer, 1);
        stationTextLayer = new GraphicsLayer({ "id": "stationTextLayer" });
        map.addLayer(stationTextLayer, 1);
        dojo.connect(stationLayer, "onClick", doStationIdentify);

        AddDynamicLayer("ditu", "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer");
        dojo.connect(viewMap, "onLoad", LoadMapComponents);
        addDevice(BUOY_DATA, "../img/buoy.png", buoyLayer, buoyTextLayer);
        addDevice(STATION_DATA, "../img/station.png", stationLayer, stationTextLayer);

    });      
    
    
}

//添加浮标 
function addDevice(data, path, layer, textLayer) {
    require([
        "esri/geometry/Point",
        "esri/graphic",
        "esri/symbols/PictureMarkerSymbol",
        "esri/symbols/TextSymbol",
        "esri/Color",
        "esri/symbols/Font"
    ], function (Point, Graphic, PictureMarkerSymbol, TextSymbol, Color, Font) {
        for (var i = 0; i < data.length; i++) {
            var pt = new Point(data[i].ELON, data[i].ELAT, viewMap.spatialReference);

            var graphic = new Graphic(pt, new PictureMarkerSymbol(path, 34, 34), data[i]);

            var textSymbol = new TextSymbol(data[i].DEVICENAME);
            textSymbol.setColor(new Color([0, 0, 0]));
            var font = new Font();
            font.setSize("10pt");
            font.setWeight(Font.WEIGHT_BOLD);
            textSymbol.setFont(font);
            textSymbol.setHaloSize(1);
            textSymbol.setHaloColor(new Color([255, 255, 255]));
            textSymbol.setOffset(0, -35);
            var text = new Graphic(pt, textSymbol, data[i]);

            layer.add(graphic);
            textLayer.add(text);
        }
    });
}

function LoadMapComponents() {
    require(["esri/toolbars/navigation"], function (Navigation) {
        navToolbar = new Navigation(viewMap);
        dojo.connect(navToolbar, "onExtentHistoryChange", extentHistoryChangeHandler);
    });
    var layerTree = [];
    var legendLayers = [];
    $.each(LivingMaps_List, function (i, val) {
        var layerNames = [];
        var layer = viewMap.getLayer(val.id);
        var layerInfos = layer.layerInfos;
        $.each(layerInfos, function (i, layerInfo) {
            if (layerInfo.defaultVisibility) {
                layerNames.push({ text: layerInfo.name, state: { selected: true }, tags: [layerInfo.id] });
            } else {
                layerNames.push({ text: layerInfo.name, state: { selected: false }, tags: [layerInfo.id] });
            }
        });
        layerTree.push({ text: val.title, nodes: layerNames, state: { selected: false }, tags: [val.id] })
        legendLayers.push({ layer: viewMap.getLayer(val.id), title: val.title });        
    });

    require(["esri/dijit/Legend"], function (Legend) {
        legend = new Legend({
            map: viewMap,
            layerInfos: legendLayers
        }, "legenddiv");
        legend.startup();
    });

    $('#layerTree').treeview({
        multiSelect: true,
        showBorder: false,
        selectedIcon: "glyphicon glyphicon-pushpin",
        highlightSelected: false,
        levels: 3,
        data: layerTree,
        onNodeSelected: function (event, data) {
            var isParent = false;
            $.each(LivingMaps_List, function (i, val) {
                if (data.tags[0] == val.id)
                {
                    //viewMap.getLayer(data.tags[0]).setVisibility(true);
                    isParent = true;
                }
            });
            if (!isParent)
            {
                var parent = $('#layerTree').treeview('getParent', data);
                var layer = viewMap.getLayer(parent.tags[0]);
                var visibleLayers = layer.visibleLayers;
                visibleLayers.push(data.tags[0]);
                layer.setVisibleLayers(visibleLayers);
                legend.refresh();
            }
        },
        onNodeUnselected: function (event, data) {
            var isParent = false;
            $.each(LivingMaps_List, function (i, val) {
                if (data.tags[0] == val.id) {
                    //viewMap.getLayer(data.tags[0]).setVisibility(false);
                    isParent = true;
                }
            });
            if (!isParent) {
                var parent = $('#layerTree').treeview('getParent', data);
                var layer = viewMap.getLayer(parent.tags[0]);
                var visibleLayers = layer.visibleLayers;
                visibleLayers.remove(data.tags[0]);
                layer.setVisibleLayers(visibleLayers);
                legend.refresh();
            }
        }
    });
}

function extentHistoryChangeHandler() {
    if (!navToolbar.isFirstExtent()) {
        dojo.byId("zoomprev").disabled = false;
        dojo.byId("zoomprev").src = "../img/icon-left.png";
    }
    else {
        dojo.byId("zoomprev").disabled = true;
        dojo.byId("zoomprev").src = "../img/d-icon-left.png";
    }

    if (!navToolbar.isLastExtent()) {
        dojo.byId("zoomnext").disabled = false;
        dojo.byId("zoomnext").src = "../img/icon-right.png";
    }
    else {
        dojo.byId("zoomnext").disabled = true;
        dojo.byId("zoomnext").src = "../img/d-icon-right.png";
    }
}

function doBuoyIdentify(evt) {
    ResetSymbol();
    require([
        "esri/symbols/PictureMarkerSymbol"
    ], function (PictureMarkerSymbol) {
        var bigSymbol = new PictureMarkerSymbol("../img/buoy.png", 50, 50)
        evt.graphic.setSymbol(bigSymbol);
        viewMap.infoWindow.setTitle("浮标在线监测站");
        var strpath = CheckPathNull(evt.graphic.attributes.PICTUREPATH);
        photoArr = strpath.split(",");
        curIndex = 0;
        var con = "<div style='position:relative;width:450px;height:280px;'>"
        + "<table class='dataTable'><tr><td class='head'>设备编号：</td><td>" + CheckNull(evt.graphic.attributes.DEVICECODE) + "</td></tr>"
        + "<tr><td class='head'>设备类型：</td><td>" + CheckNull(evt.graphic.attributes.DEVICENAME) + "</td></tr>"
        + "<tr><td class='head'>布放时间：</td><td>" + CheckNull(evt.graphic.attributes.LAYTIME) + "</td></tr>"
        + "<tr><td class='head'>布放经度：</td><td>" + CheckNull(evt.graphic.attributes.ELON) + "</td></tr>"
        + "<tr><td class='head'>布放纬度：</td><td>" + CheckNull(evt.graphic.attributes.ELAT) + "</td></tr>"
        + "<tr><td class='head'>海域：</td><td>" + CheckNull(evt.graphic.attributes.SEAAREA) + "</td></tr>"
        + "<tr><td class='head'>业务：</td><td>" + CheckNull(evt.graphic.attributes.SERVICE) + "</td></tr>"
        +"<tr><td class='head'>实时数据：</td><td><button class='button_btn2' data-loading-text='Loading...' >查看</button></td></tr>"
        +"<tr><td class='head'>历史数据：</td><td><button class='button_btn2' data-loading-text='Loading...' >查看</button></td></tr>"
        +"<tr><td class='head'>质控数据：</td><td><button class='button_btn2' data-loading-text='Loading...' >查看</button></td></tr>"
        +"<tr><td class='head'>视频监控：</td><td><button class='button_btn2' data-loading-text='Loading...' >查看</button></td></tr></table>"
        +"<div class='photoContainer'>"
        + "<img id='photo' style='height:240px;width:300px;' src='../photos/" + photoArr[0] + "' alt='大乳山国家级海洋公园' /></br>"
        + "<div class='photobutton'><input type='image' class='photoleft' src='../img/arrow_triangle-left.png' onclick='GetLeftPhoto()' />"
        + "<input type='image' class='photoright' src='../img/arrow_triangle-right.png' onclick='GetRightPhoto()' /></div>"
        + "</div></div>"
        viewMap.infoWindow.setContent(con);
        viewMap.infoWindow.resize(480,300);
        viewMap.infoWindow.show(evt.screenPoint, viewMap.getInfoWindowAnchor(evt.screenPoint));
        viewMap.infoWindow.show();
    });   
}

function doStationIdentify(evt) {
    ResetSymbol();
    require([
        "esri/symbols/PictureMarkerSymbol"
    ], function (PictureMarkerSymbol) {
        var bigSymbol = new PictureMarkerSymbol("../img/station.png", 50, 50)
        evt.graphic.setSymbol(bigSymbol);
        viewMap.infoWindow.setTitle("岸基在线监测站");
        var strpath = CheckPathNull(evt.graphic.attributes.PICTUREPATH);
        photoArr = strpath.split(",");
        curIndex = 0;
        var con = "<div style='position:relative;width:450px;height:370px;overflow:hidden;'>"
        + "<table class='dataTable'><tr><td class='head'>设备编号：</td><td>" + CheckNull(evt.graphic.attributes.DEVICECODE) + "</td></tr>"
        + "<tr><td class='head'>设备类型：</td><td>" + CheckNull(evt.graphic.attributes.DEVICENAME) + "</td></tr>"
        + "<tr><td class='head'>布放时间：</td><td>" + CheckNull(evt.graphic.attributes.LAYTIME) + "</td></tr>"
        + "<tr><td class='head'>布放经度：</td><td>" + CheckNull(evt.graphic.attributes.ELON) + "</td></tr>"
        + "<tr><td class='head'>布放纬度：</td><td>" + CheckNull(evt.graphic.attributes.ELAT) + "</td></tr>"
        + "<tr><td class='head'>海域：</td><td>" + CheckNull(evt.graphic.attributes.SEAAREA) + "</td></tr>"
        + "<tr><td class='head'>业务：</td><td>" + CheckNull(evt.graphic.attributes.SERVICE) + "</td></tr>"
        + "<tr><td class='head'>实时数据：</td><td><button class='button_btn2' data-loading-text='Loading...' >查看</button></td></tr>"
        + "<tr><td class='head'>历史数据：</td><td><button class='button_btn2' data-loading-text='Loading...' >查看</button></td></tr>"
        + "<tr><td class='head'>质控数据：</td><td><button class='button_btn2' data-loading-text='Loading...' >查看</button></td></tr>"
        + "<tr><td class='head'>三维模型：</td><td><button class='button_btn2' data-loading-text='Loading...' >查看</button></td></tr>"
        + "<tr><td class='head'>工作流程：</td><td><button class='button_btn2' data-loading-text='Loading...' >查看</button></td></tr>"
        + "<tr><td class='head'>室内视频：</td><td><button class='button_btn2' data-loading-text='Loading...' >查看</button></td></tr>"
        + "<tr><td class='head'>室外视频：</td><td><button class='button_btn2' data-loading-text='Loading...' >查看</button></td></tr></table>"
        + "<div class='photoContainer'>"
        + "<img id='photo' style='height:320px;width:300px;' src='../photos/" + photoArr[0] + "' alt='大乳山国家级海洋公园' /></br>"
        + "<div class='photobutton'><input type='image' class='photoleft' src='../img/arrow_triangle-left.png' onclick='GetLeftPhoto()' />"
        + "<input type='image' class='photoright' src='../img/arrow_triangle-right.png' onclick='GetRightPhoto()' /></div>"
        + "</div></div>"
        viewMap.infoWindow.setContent(con);
        viewMap.infoWindow.resize(480, 390);
        viewMap.infoWindow.show(evt.screenPoint, viewMap.getInfoWindowAnchor(evt.screenPoint));
        viewMap.infoWindow.show();
    });    
}

function CheckNull(value)
{
    if (value == undefined) {
        return "--";
    } else {
        return value;
    }
}

function CheckPathNull(value)
{
    if (value == undefined) {
        return "大乳山国家级海洋公园10.jpg";
    } else {
        return value;
    }
}

function ResetSymbol()
{
    require([
        "esri/symbols/PictureMarkerSymbol"
    ], function (PictureMarkerSymbol) {
        var buoy = viewMap.getLayer("buoyLayer");
        $.each(buoy.graphics, function (i, val) {       
            var smallSymbolb = new PictureMarkerSymbol("../img/buoy.png", 34, 34);
            val.setSymbol(smallSymbolb);
        });
        var station = viewMap.getLayer("stationLayer");
        $.each(station.graphics, function (i, val) {
            var smallSymbols = new PictureMarkerSymbol("../img/station.png", 34, 34);
            val.setSymbol(smallSymbols);       
        });

    });
}

function AddDynamicLayer(id, url) {
    require([
        "esri/layers/ArcGISDynamicMapServiceLayer"
    ], function (ArcGISDynamicMapServiceLayer) {
        var layer = new ArcGISDynamicMapServiceLayer(url);
        layer.id = id;
        viewMap.addLayer(layer);
    });
}

function AddFeatureLayer(id, url) {
    require([
        "esri/layers/FeatureLayer",
        "esri/InfoTemplate",
    ], function (FeatureLayer, InfoTemplate) {
        var featureLayer = new FeatureLayer(url);
        featureLayer.id = id;
        viewMap.addLayer(featureLayer);
    });
}

function ZoomIn() {
    viewMap.setCursor("crosshair");
    navToolbar.activate(esri.toolbars.Navigation.ZOOM_IN);
}

function ZoomOut() {
    viewMap.setCursor("crosshair");
    navToolbar.activate(esri.toolbars.Navigation.ZOOM_OUT);
}

function Pan() {
    viewMap.setCursor("move");
    navToolbar.activate(esri.toolbars.Navigation.PAN);
}

function Full() {
    viewMap.setExtent(initialExtent);
}

function GetExtent(type)
{
    ResetSymbol();
    var RESULT_DATA;
    value = {
        DEVICECODE: $("#DEVICECODE").val(),
        SEAAREA: $("#SEAAREA option:selected").val(),
        PROVINCE: $("#PROVINCE option:selected").val(),
        BAY: $("#BAY option:selected").val(),
        BUREAUDEVICE: $("#BUREAUDEVICE option:selected").val(),
        LOCALDEVICE: $("#LOCALDEVICE option:selected").val(),
        SERVICE: $("#SERVICE option:selected").val(),
        PICTUREPATH: null
    }    
    require([
        "esri/geometry/Point",
        "esri/geometry/Multipoint",
        "esri/symbols/PictureMarkerSymbol"
    ], function (Point, Multipoint, PictureMarkerSymbol) {
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "/Api/Map/SearchEquipment?type=" + type + "&value=" + JSON.stringify(value),
            success: function (result) {               
                if (result == "[]") {
                    alert("没有符合查询条件的设备！");
                } else {
                    var data = JSON.parse(result);
                    RESULT_DATA = data;
                    var multiPoint = new Multipoint();

                    for (i = 0; i < RESULT_DATA.length; i++) {
                        multiPoint.addPoint(new Point(RESULT_DATA[i].ELON, RESULT_DATA[i].ELAT, viewMap.spatialReference));
                        var buoy = viewMap.getLayer("buoyLayer");
                        $.each(buoy.graphics, function (n, val) {
                            if (val.attributes.DEVICECODE == RESULT_DATA[i].DEVICECODE) {
                                var bigSymbolb = new PictureMarkerSymbol("../img/buoy.png", 50, 50);
                                val.setSymbol(bigSymbolb);
                            }
                        });
                        var station = viewMap.getLayer("stationLayer");
                        $.each(station.graphics, function (n, val) {
                            if (val.attributes.DEVICECODE == RESULT_DATA[i].DEVICECODE) {
                                var bigSymbols = new PictureMarkerSymbol("../img/station.png", 50, 50);
                                val.setSymbol(bigSymbols);
                            }
                        });
                    }
                    viewMap.setExtent(multiPoint.getExtent().expand(1.5));
                }
                
            }
        });
        
    });
}

function closeLayerPanel()
{
    $("#LayerControl").hide();
    $("#LayerIcon").show();
}

function openLayerPanel()
{
    $("#LayerControl").show();
    $("#LayerIcon").hide();
}

function closeLegendPanel() {
    $("#LegendIcon").show();
    $("#Legend").hide();
}

function openLegendPanel() {
    $("#Legend").show();
    $("#LegendIcon").hide();
}

function GetLeftPhoto() {
    if (curIndex == 0) {
        curIndex = photoArr.length - 1;
    } else {
        curIndex -= 1;
    }
    document.getElementById("photo").src = "../photos/" + photoArr[curIndex];
}
function GetRightPhoto() {
    if (curIndex == photoArr.length - 1) {
        curIndex = 0;
    } else {
        curIndex += 1;
    }
    document.getElementById("photo").src = "../photos/" + photoArr[curIndex];
}
function ChangeSize() {
    var obj = document.getElementById("photo");
    if (obj.style.width == "300px") {
        obj.style.width = "600px";
        obj.style.height = "384px";
        document.getElementById("controlButton").style.width = "600px";
    } else {
        obj.style.width = "300px";
        obj.style.height = "200px";
        document.getElementById("controlButton").style.width = "300px";
    }
}

Array.prototype.indexOf = function(val) 
{
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) 
{
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
