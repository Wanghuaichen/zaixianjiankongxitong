﻿function setValue(){
    var id = GetQueryString("id");
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "/Api/System/GetSSSJ?deviceCode="+id+"&dType=2",
        success: function (result) {
            var data =  eval('(' + result + ')');
            if (!data) {
                data = [];
            }
            newData = data;
            // 设备名称
            $("#deviceName").html( data.DEVICEROW[0].DEVICENAME);
            // 观测时间
            if (data.COLOGY) {
                $("#guanceshijian").html("观测时间："+data.COLOGY.DATETIME.replace(/T/, ' ').replace('.000Z', ''));
            } else {
                $("#guanceshijian").html("观测时间：--");
            }
            
            setEcology(data.COLOGY,data.BiaoZhun);
            setBaoJingXianShi(data.STATUS);
            if (data.STATUS) {
                setLDT(data);
            }
            
            setBoLang(data.BoLang);
            setQiWenQiYa(data.QiWenQiYa);
            setQiXiang(data.QiWenQiYa);
            setHaiLiu(data.HaiLiu);
            setFXFS(data.FengSuFengXiang);
            $("#DataLoading").modal('hide');
            $("#navDiv").show();
            $("#tab_content").show();
           
        }
    });
}

function setEcology(data,pingjiaData) {
    var delCol = "DEVICECODE,DATETIME,COLOGYPOINTLIST,SENDNUM,RECVNUM,RESERV0,RESERV1,RESERV2,RESERV3,RESERV4,RESERV5,RESERV6,RESERV7,RESERV8,RESERV9"
    + ",RESERV10,RESERV11,RESERV12,RESERV13,RESERV14,RESERV15,RESERV16,RESERV17,RESERV18,RESERV19";
    $("#ecology").html("");
    if (data) {
        var sli;
        for (var Key in data) {
            if (delCol.indexOf(Key) == -1) {
                if ("CURRENTTEM" == Key) {
                    if (0 == pingjiaData["CURRENTTEM"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "海浪水温(℃)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "海浪水温(℃)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                }
                else if ("WATERTEM" == Key) {
                    if (0 == pingjiaData["WATERTEM"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "独立水温(℃)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "独立水温(℃)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("CTDTEM" == Key) {
                    if (0 == pingjiaData["CTDTEM"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "CTD水温(℃)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "CTD水温(℃)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("SALINITY" == Key) {
                    if (0 == pingjiaData["SALINITY"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "盐度" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "盐度" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("CONDUCTIVITY" == Key) {
                    if (0 == pingjiaData["CONDUCTIVITY"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "电导率(ms/cm)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "电导率(ms/cm)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("OXYGEN" == Key) {
                    if (0 == pingjiaData["OXYGEN"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "溶解氧(DO)(Mg/l)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "溶解氧(DO)(Mg/l)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("PH" == Key) {
                    if (0 == pingjiaData["PH"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "PH值(pH)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "PH值(pH)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("TURBIDITY" == Key) {
                    if (0 == pingjiaData["TURBIDITY"]) {
                        sli = "<li><span class='TURBIDITY'>" + data[Key].toFixed(3) + "</span><span>" + "浊度(FTU)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "浊度(FTU)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("YLS" == Key) {
                    if (0 == pingjiaData["YLS"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "叶绿素(μg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "叶绿素(μg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("YLSTEM" == Key) {
                    if (0 == pingjiaData["YLSTEM"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "叶绿素温度" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "叶绿素温度" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("UNDERWATERCO2" == Key) {
                    if (0 == pingjiaData["UNDERWATERCO2"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "水下二氧化碳" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "水下二氧化碳" + "</span></li>";
                    }

                    $("#ecology").append(sli);
                } else if ("OXYGENCHEMICAL" == Key) {
                    if (0 == pingjiaData["OXYGENCHEMICAL"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "化学需氧量" + "</span></li>";  
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "化学需氧量" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("MNO4" == Key) {
                    if (0 == pingjiaData["MNO4"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "高锰酸盐指数(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "高锰酸盐指数(mg/L)" + "</span></li>";
                    }
                   
                    $("#ecology").append(sli);
                } else if ("OXYGENBIOLOGY" == Key) {
                    if (0 == pingjiaData["OXYGENBIOLOGY"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "生化需氧量(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "生化需氧量(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("NH3N" == Key) {
                    if (0 == pingjiaData["NH3N"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "氨氮(铵盐)(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "氨氮(铵盐)(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("NO3" == Key) {
                    if (0 == pingjiaData["NO3"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "硝酸盐-氮(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "硝酸盐-氮(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("NO2" == Key) {
                    if (0 == pingjiaData["NO2"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "亚硝酸盐-氮(mg/L)" + "</span></li>"; 
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "亚硝酸盐-氮(mg/L)" + "</span></li>"; 
                    }
                    
                    $("#ecology").append(sli);
                } else if ("PO4" == Key) {
                    if (0 == pingjiaData["PO4"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "活性磷酸盐(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "活性磷酸盐(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("SIO3" == Key) {
                    if (0 == pingjiaData["SIO3"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "硅酸盐(mg/L)" + "</span></li>"; 
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "硅酸盐(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("PAHS" == Key) {
                    if (0 == pingjiaData["PAHS"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "多环芳烃(mg/L)" + "</span></li>"; 
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "多环芳烃(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("P" == Key) {
                    if (0 == pingjiaData["P"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "总磷(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "总磷(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("N" == Key) {
                    if (0 == pingjiaData["N"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "总氮(mg/L)" + "</span></li>"; 
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "总氮(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("C" == Key) {
                    if (0 == pingjiaData["C"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "总有机碳(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "总有机碳(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("S" == Key) {
                    if (0 == pingjiaData["S"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "硫(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "硫(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("ALKALINITY" == Key) {
                    if (0 == pingjiaData["ALKALINITY"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "总碱度" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "总碱度" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("SUSPENSION" == Key) {
                    if (0 == pingjiaData["SUSPENSION"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "悬浮物(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "悬浮物(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("CYANIDE" == Key) {
                    if (0 == pingjiaData["CYANIDE"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "氰化物(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "氰化物(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("HG" == Key) {
                    if (0 == pingjiaData["HG"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "汞(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "汞(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("CD" == Key) {
                    if (0 == pingjiaData["CD"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "镉(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "镉(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("CR6" == Key) {
                    if (0 == pingjiaData["CR6"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "六价铬(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "六价铬(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("PB" == Key) {
                    if (0 == pingjiaData["PB"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "铅(mg/L)" + "</span></li>";  
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "铅(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("AS" == Key) {
                    if (0 == pingjiaData["AS"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "砷(mg/L)" + "</span></li>";  
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "砷(mg/L)" + "</span></li>";  
                    }
                   
                    $("#ecology").append(sli);
                } else if ("YLSA" == Key) {
                    if (0 == pingjiaData["YLSA"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "叶绿素-a(μg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "叶绿素-a(μg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("PHYCOCY" == Key) {
                    if (0 == pingjiaData["PHYCOCY"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "藻蓝素" + "</span></li>";    
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "藻蓝素" + "</span></li>"; 
                    }
                    
                    $("#ecology").append(sli);
                } else if ("PHYCOER" == Key) {
                    if (0 == pingjiaData["PHYCOER"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "藻红素" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "藻红素" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("COLIFORM" == Key) {
                    if (0 == pingjiaData["COLIFORM"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "粪大肠菌群(个/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "粪大肠菌群(个/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("POTENTIAL" == Key) {
                    if (0 == pingjiaData["POTENTIAL"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "氧化还原电位" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "氧化还原电位" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("TOTALY" == Key) {
                    if (0 == pingjiaData["TOTALY"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "总γ(Bq/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "总γ(Bq/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("K40" == Key) {
                    if (0 == pingjiaData["K40"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "40K(Bq/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "40K(Bq/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("CS134" == Key) {
                    if (0 == pingjiaData["CS134"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "134Cs(Bq/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "134Cs(Bq/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("CS137" == Key) {
                    if (0 == pingjiaData["CS137"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "137Cs(Bq/L)" + "</span></li>";  
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "137Cs(Bq/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("CO60" == Key) {
                    if (0 == pingjiaData["CO60"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "60Co(Bq/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "60Co(Bq/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("CU" == Key) {
                    if (0 == pingjiaData["CU"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "铜(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "铜(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("ZN" == Key) {
                    if (0 == pingjiaData["ZN"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "锌(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "锌(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("PHENOL" == Key) {
                    if (0 == pingjiaData["PHENOL"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "挥发酚(mg/L)" + "</span></li>"; 
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "挥发酚(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("BOD5" == Key) {
                    if (0 == pingjiaData["BOD5"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "挥发性有机物" + "</span></li>";  
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "挥发性有机物" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("DETERGENTS" == Key) {
                    if (0 == pingjiaData["DETERGENTS"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "阴离子洗涤剂" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "阴离子洗涤剂" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("OIL" == Key) {
                    if (0 == pingjiaData["OIL"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "油类(mg/L)" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "油类(mg/L)" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("VIRUS" == Key) {
                    if (0 == pingjiaData["VIRUS"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "细菌总数" + "</span></li>";   
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "细菌总数" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("PETRO" == Key) {
                    if (0 == pingjiaData["PETRO"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "石油烃" + "</span></li>"; 
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "石油烃" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("DDT" == Key) {
                    if (0 == pingjiaData["DDT"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "DDT" + "</span></li>"; 
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "DDT" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("PCBS" == Key) {
                    if (0 == pingjiaData["PCBS"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "PCBs" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "PCBs" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("BENZOL" == Key) {
                    if (0 == pingjiaData["BENZOL"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "多氯联苯" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "多氯联苯" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("CHLO" == Key) {
                    if (0 == pingjiaData["CHLO"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "氯霉素" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "氯霉素" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("ANTIBIOTIC" == Key) {
                    if (0 == pingjiaData["ANTIBIOTIC"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "抗生素" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "抗生素" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("POISONA" == Key) {
                    if (0 == pingjiaData["POISONA"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "腹泻性贝毒" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "腹泻性贝毒" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                } else if ("POISONB" == Key) {
                    if (0 == pingjiaData["POISONB"]) {
                        sli = "<li><span class='redFont'>" + data[Key].toFixed(3) + "</span><span>" + "麻痹性贝毒" + "</span></li>";
                    } else {
                        sli = "<li><span class='blankFont'>" + data[Key].toFixed(3) + "</span><span>" + "麻痹性贝毒" + "</span></li>";
                    }
                    
                    $("#ecology").append(sli);
                }
            }
        }
    } else {
        var sli;
        sli = "<li><span>--</span><span>" + "海浪水温(℃)" + "</span></li>"
                    + "<li><span>--</span><span>" + "独立水温(℃)" + "</span></li>"
                    + "<li><span>--</span><span>" + "CTD水温(℃)" + "</span></li>"
                    + "<li><span>--</span><span>" + "盐度" + "</span></li>"
                    + "<li><span>--</span><span>" + "电导率(ms/cm)" + "</span></li>"
                    + "<li><span>--</span><span>" + "溶解氧(DO)(Mg/l)" + "</span></li>"
                    + "<li><span>--</span><span>" + "PH值(pH)" + "</span></li>"
                    + "<li><span>--</span><span>" + "浊度(FTU)" + "</span></li>"
                    + "<li><span>--</span><span>" + "叶绿素(μg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "叶绿素温度" + "</span></li>"
                    + "<li><span>--</span><span>" + "水下二氧化碳" + "</span></li>"
                    + "<li><span>--</span><span>" + "化学需氧量" + "</span></li>"
                    + "<li><span>--</span><span>" + "高锰酸盐指数(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "生化需氧量(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "氨氮(铵盐)(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "硝酸盐-氮(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "亚硝酸盐-氮(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "活性磷酸盐(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "硅酸盐(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "多环芳烃(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "总磷(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "总氮(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "总有机碳(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "硫(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "总碱度" + "</span></li>"
                    + "<li><span>--</span><span>" + "悬浮物(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "氰化物(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "汞(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "镉(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "六价铬(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "铅(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "砷(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "叶绿素-a(μg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "藻蓝素" + "</span></li>"
                    + "<li><span>--</span><span>" + "藻红素" + "</span></li>"
                    + "<li><span>--</span><span>" + "粪大肠菌群(个/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "氧化还原电位" + "</span></li>"
                    + "<li><span>--</span><span>" + "总γ(Bq/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "40K(Bq/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "134Cs(Bq/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "137Cs(Bq/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "60Co(Bq/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "铜(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "锌(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "挥发酚(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "挥发性有机物" + "</span></li>"
                    + "<li><span>--</span><span>" + "阴离子洗涤剂" + "</span></li>"
                    + "<li><span>--</span><span>" + "油类(mg/L)" + "</span></li>"
                    + "<li><span>--</span><span>" + "细菌总数" + "</span></li>"
                    + "<li><span>--</span><span>" + "石油烃" + "</span></li>"
                    + "<li><span>--</span><span>" + "DDT" + "</span></li>"
                    + "<li><span>--</span><span>" + "PCBs" + "</span></li>"
                    + "<li><span>--</span><span>" + "多氯联苯" + "</span></li>"
                    + "<li><span>--</span><span>" + "氯霉素" + "</span></li>"
                    + "<li><span>--</span><span>" + "抗生素" + "</span></li>"
                    + "<li><span>--</span><span>" + "腹泻性贝毒" + "</span></li>"
                    + "<li><span>--</span><span>" + "麻痹性贝毒" + "</span></li>";
        $("#ecology").append(sli);
    }
   
}

function setBaoJingXianShi(data) {
    $("#bjtsUl").html("");
    var sli;
    if (data) {
        sli = "<li><span>经度：</span>" + data.LON + "°</li>"
        + "<li><span>纬度：</span>" + data.LAT + "°</li>";
        $("#bjtsUl").append(sli);
        if (data.GPSALARM == 1) {
            sli = "<li><span>GPS报警：</span><img src='/img/icon_green.png'  alt='' /></li>"
        } else if (data.GPSALARM == 2) {
            sli = "<li><span>GPS报警：</span><img src='/img/icon_red.png'  alt='' /></li>"
        } else {
            sli = "<li><span>GPS报警：</span>--</li>"
        }
        $("#bjtsUl").append(sli);

        if (data.ANCHOR == 1) {
            sli = "<li><span>锚灯：</span><img src='/img/icon_green.png'  alt='' /></li>"
        } else if (data.ANCHOR == 2) {
            sli = "<li><span>锚灯：</span><img src='/img/icon_red.png'  alt='' /></li>"
        } else {
            sli = "<li><span>锚灯：</span>--</li>"
        }
        $("#bjtsUl").append(sli);

        if (data.WATERALARM == 1) {
            sli = "<li><span>水警：</span><img src='/img/icon_green.png'  alt='' /></li>"
        } else if (data.WATERALARM == 2) {
            sli = "<li><span>水警：</span><img src='/img/icon_red.png'  alt='' /></li>"
        } else {
            sli = "<li><span>水警：</span>--</li>"
        }
        $("#bjtsUl").append(sli);

        if (data.DOORALARM == 1) {
            sli = "<li><span>门警：</span><img src='/img/icon_green.png'  alt='' /></li>"
        } else if (data.DOORALARM == 2) {
            sli = "<li><span>门警：</span><img src='/img/icon_red.png'  alt='' /></li>"
        } else {
            sli = "<li><span>门警：</span>--</li>"
        }
        $("#bjtsUl").append(sli);

        sli = "<li><span>电压：</span>" + data.VOLTAGE + "V</li><li><span>内存：</span>" + data.FREEMEMO + "M</li>";
        $("#bjtsUl").append(sli);

        if (data.SENSERSTATUS == 1) {
            sli = "<li><span>传感器状态：</span><img src='/img/icon_green.png'  alt='' /></li>"
        } else if (data.SENSERSTATUS == 2) {
            sli = "<li><span>传感器状态：</span><img src='/img/icon_red.png'  alt='' /></li>"
        } else {
            sli = "<li><span>传感器状态：</span>--</li>"
        }
        $("#bjtsUl").append(sli);

        if (data.BUOYSTATUS == 1) {
            sli = "<li><span>浮标状态：</span><img src='/img/icon_green.png'  alt='' /></li>"
        } else if (data.BUOYSTATUS == 2) {
            sli = "<li><span>浮标状态：</span><img src='/img/icon_red.png'  alt='' /></li>"
        } else if (data.BUOYSTATUS == 3) {
            sli = "<li><span>浮标状态：</span><img src='/img/icon_yellow.png'  alt='' /></li>"
        } else {
            sli = "<li><span>浮标状态：</span>--</li>"
        }
        $("#bjtsUl").append(sli);
    } else {
        sli = "<li><span>经度：</span>--°</li>"
        + "<li><span>纬度：</span>--°</li>"
        + "<li><span>GPS报警：</span>--</li>"
        + "<li><span>锚灯：</span>--</li>" + "<li><span>水警：</span>--</li>"+ "<li><span>门警：</span>--</li>"
       + "<li><span>电压：</span>--V</li><li><span>内存：</span>--M</li>"
       + "<li><span>传感器状态：</span>--</li>"+ "<li><span>浮标状态：</span>--</li>";
       
        $("#bjtsUl").append(sli);
    }
    
 
}
function setLDT(data) {// 雷达图
    var lat_o, lon_o, lat, lon;
    lat_o = data.DEVICEROW[0].ELAT;
    lon_o = data.DEVICEROW[0].ELON;
    lat = data.STATUS.LAT;
    lon = data.STATUS.LON;
    var dis = GetDistance(lat_o, lon_o, lat, lon);
    var myChart = echarts.init(document.getElementById('leidatu'));
    option = {
        tooltip: {
            trigger: 'axis'
        },
        polar: [
           {
               indicator: [
                   { text: '偏离距离', max: 1000 }
               ],
               center: ['50%', '50%'],
               radius: 90,
               startAngle: 160,
               splitNumber: 4,
               name: {
                   show: false,
                   formatter: '{value}',
                   textStyle: { color: 'red' },

               },
               scale: true,
               type: 'circle',
               axisLine: {            // 坐标轴线
                   show: true,        // 默认显示，属性show控制显示与否
                   lineStyle: {       // 属性lineStyle控制线条样式
                       color: '#82b3de',
                       width: 2,
                       type: 'solid'
                   }
               },
               axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                   show: true,
                   // formatter: null,
                   textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                       color: '#000'
                   }
               },
               splitArea: {
                   show: true,
                   areaStyle: {
                       color: ['rgba(13,146,239,1)', 'rgba(53,165,241,1)', 'rgba(125,194,247,1)', 'rgba(205,232,253,9)']
                   }
               },
               splitLine: {
                   show: true,
                   lineStyle: {
                       width: 2,
                       color: ['rgba(245,245,245,1)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0.5)', 'rgba(225,225,225,0.7)']
                   }
               }
           }
        ],
        calculable: true,
        series: [
            {
                name: '偏离距离',
                type: 'radar',
                data: [
                    {
                        //symbol: 'image://../img/ok_fb3.png', 
                        symbol: 'emptyCircle',
                        symbolSize: 8,
                        value: [dis],
                        name: '偏离距离'
                    }
                ]
            }
        ]
    };
    myChart.setOption(option);
}
function setBoLang(data) {
    var sli = "";
    $("#blUl").html("");
    if (data) {
        sli = "<li>&nbsp;</li><li><span>波高（m）</span></li><li><span>波周期（s）</span></li>"
           + "<li><span>最大</span></li><li>" + data.MAXWAVEHIGH.toFixed(3) + "</li>" + "<li>" + data.MAXWAVEPIOD.toFixed(3) + "</li>"
           + "<li><span>1/10</span></li><li>" + data.TENTHWAVEHIGH.toFixed(3) + "</li>" + "<li>" + data.TENTHWAVEPIOD.toFixed(3) + "</li>"
           + "<li><span>平均</span></li><li>" + data.AVEWAVEHIGH.toFixed(3) + "</li>" + "<li>" + data.AVEWAVEPIOD.toFixed(3) + "</li>"
           + "<li><span>有效</span></li><li>" + data.WALIDWAVEHIGH.toFixed(3) + "</li>" + "<li>" + data.WALIDWAVEPIOD.toFixed(3) + "</li>";
        $("#blUl").append(sli);
        $("#WAVEDIR").html(data.WAVEDIR);
        if (data.WAVEDIR) {
            setBXT(data.WAVEDIR);
        }
    } else {
        sli = "<li>&nbsp;</li><li><span>波高（m）</span></li><li><span>波周期（s）</span></li>"
           + "<li><span>最大</span></li><li>--</li>" + "<li>--</li>"
           + "<li><span>1/10</span></li><li>--</li>" + "<li>--</li>"
           + "<li><span>平均</span></li><li>--</li>" + "<li>--</li>"
           + "<li><span>有效</span></li><li>--</li>" + "<li>--</li>";
        $("#blUl").append(sli);
        $("#WAVEDIR").html("");
    }

}
function setBXT(WAVEDIR) {
    // 波向图
    var myChart = echarts.init(document.getElementById('boxiangtu'));
    option = {
        backgroundColor: 'rgba(0,0,0,0)',
        // backgroundImage: '#1b1b1b',
        tooltip: {
            show: false,
            formatter: "{a}  : {c}°"
        },
        series: [
            {
                name: '波向',
                type: 'gauge',
                // center: ['50%', '40%'],    // 默认全局居中
                //radius: '58%',
                startAngle: 90,
                endAngle: -269.999,
                max: 360,
                detail: {
                    show: false,
                    formatter: '90'
                }, //仪表盘显示数据
                axisLine: { //仪表盘轴线样式
                    show: false,
                    lineStyle: {
                        width: 6,
                        show: false
                    }
                },
                splitNumber: 4,       // 分割段数，默认为5
                splitLine: {           // 分隔线
                    show: true,        // 默认显示，属性show控制显示与否,这里设为false将隐藏分割线！！
                    length: 12,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: '#f02d00',
                        width: 0,
                        type: 'solid'
                    }
                },
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[1, '#f02d00']],
                        width: 0
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: false,        // 属性show控制显示与否，默认不显示
                    splitNumber: 5,    // 每份split细分多少段
                    length: 8,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#ffbd2c',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                    show: false,
                    formatter: function (v) {
                        switch (v + '') {
                            case '0': return '北';
                            case '90': return '东';
                            case '180': return '南';
                            case '270': return '西';
                            default: return '';
                        }
                    },
                    distance: -26,
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        // color: '#333'
                    }
                },
                pointer: {
                    length: '70%',
                    width: 4,
                    color: 'auto'
                },
                data: [{ value: WAVEDIR, name: '' }]
            }
        ]
    };

    myChart.setOption(option);
}
function setQiWenQiYa(data) {
    var sli = "";
    $("#qwqyUl").html("");
    if (data) {
        sli = "<li>&nbsp;</li><li><span>平均</span></li><li><span>最大</span></li><li><span>最小</span></li><li><span>最大出现时刻</span></li><li><span>最小出现时刻</span></li>"
        + "<li><span>气温</span></li><li>" + data.AIRTEM.toFixed(3) + "</li><li>" + data.MAXAIRTEM.toFixed(3) + "</li><li>" + data.MINAIRTEM.toFixed(3) + "</li><li>" + data.MAXAIRTEMTIME + "</li><li>" + data.MINAIRTEMTIME + "</li>"
        + "<li><span>气压</span></li><li>" + data.PRESSURE.toFixed(3) + "</li><li>" + data.MAXPRESSURE.toFixed(3) + "</li><li>" + data.MINPRESSURE.toFixed(3) + "</li><li>" + data.MAXPRESSURETIME + "</li><li>" + data.MINPRESSURETIME + "</li>"
        + "<li><span>湿度</span></li><li>" + data.HUMI.toFixed(1) + "</li><li>" + data.MAXHUMI.toFixed(1) + "</li><li>" + data.MINHUMI.toFixed(1) + "</li><li>" + data.MAXHUMITIME + "</li><li>" + data.MINHUMITIME + "</li>";
    } else {
        sli = "<li>&nbsp;</li><li><span>平均</span></li><li><span>最大</span></li><li><span>最小</span></li><li><span>最大出现时刻</span></li><li><span>最小出现时刻</span></li>"
            + "<li><span>气温</span></li><li>--</li><li>--</li><li>--</li><li>--</li><li>--</li>"
            + "<li><span>气压</span></li><li>--</li><li>--</li><li>--</li><li>--</li><li>--</li>"
            + "<li><span>湿度</span></li><li>--</li><li>--</li><li>--</li><li>--</li><li>--</li>";
    }
    $("#qwqyUl").append(sli);
}
function setQiXiang(data) {
    var sli = "";
    $("#qxUl").html("");
    if (data) {
        sli = "<li><span>能见度：</span>" + data.NJD + "</li><li><span>实际雨量：</span>" + data.RAINFALLACTUAL + "</li><li><span>测前雨量：</span>" + data.RAINFALLPREV + "</li><li><span>雨量：</span>" + data.RAINFALL + "</li>"
       + " <li><span>总辐射：</span>" + data.TOTALRADIATION + "</li><li><span>红外辐射：</span>" + data.INFRAREDRADIATION + "</li><li><span>日照时间：</span>" + data.SUNLIGHTTIME + "</li><li><span>二氧化碳：</span>" + data.AIRCO2 + "</li>";

    } else {
        sli = "<li><span>能见度：</span>--</li><li><span>实际雨量：</span>--</li><li><span>测前雨量：</span>--</li><li><span>雨量：</span>--</li>"
           + " <li><span>总辐射：</span>--</li><li><span>红外辐射：</span>--</li><li><span>日照时间：</span>--</li><li><span>二氧化碳：</span>--</li>";
    }
    
    $("#qxUl").append(sli);                       
}
function setHaiLiu(data) {
    var sli = '';
      //<option value="全部">全部</option>
    
    $("#hlUl").html("");
    var opt = '<li><span>层数：</span><select id="haiquSel" class="selInput" onchange=setSelectVal(this.options[this.options.selectedIndex].value)><option value="1">1层</option><option value="2">2层</option><option value="3">3层</option><option value="4">4层</option>'
     + '<option value="5">5层</option><option value="6">6层</option><option value="7">7层</option><option value="8">8层</option>'
     + '<option value="9">9层</option><option value="10">10层</option><option value="11">11层</option><option value="12">12层</option>'
     + '<option value="13">13层</option><option value="14">14层</option><option value="15">15层</option><option value="16">16层</option>'
     + '<option value="17">17层</option><option value="18">18层</option><option value="19">19层</option><option value="20">20层</option>'
     + '<option value="21">21层</option><option value="22">22层</option><option value="23">23层</option><option value="24">24层</option>'
     + '<option value="25">25层</option><option value="26">26层</option><option value="27">27层</option><option value="28">28层</option>'
     + '<option value="29">29层</option><option value="30">30层</option><option value="31">31层</option><option value="32">32层</option>'
     + '<option value="33">33层</option><option value="34">34层</option><option value="35">35层</option><option value="36">36层</option>'
     + '<option value="37">37层</option><option value="38">38层</option><option value="39">39层</option><option value="40">40层</option>';
    + "</select></li>";
    $("#hlUl").append(opt);
    if (data && data[0]) {//&& data[0].CURRENTDIR1
        sli = "<li><span>流速：</span></li><li id='hl_ls'>" + data[0].CURRENTSPD.toFixed(3) + "(cm/s)</li><li><span>流向：</span></li><li id='hl_lx'>" + data[0].CURRENTDIR.toFixed(3) + "°</li>"
    + "<li ><ul class='liuxiangtu'><div id='liuxiangtu' ></ul></div></li>";
    } else {
        sli = "<li><span>流速：</span>--</li><li><span>流向：</span>--</li><li ><ul class='liuxiangtu'><div id='liuxiangtu' ></ul></div></li>";
    }
    $("#hlUl").append(sli);
    if (data && data[0] ) {
        setLXT(data[0].CURRENTDIR);
    }
    
}
// 流向图
function setLXT(CURRENTDIR) {
    // 流向图
    var myChart = echarts.init(document.getElementById('liuxiangtu'));
    option = {
        backgroundColor: 'rgba(0,0,0,0)',
        // backgroundImage: '#1b1b1b',
        tooltip: {
            show: false,
            formatter: "{a}  : {c}°"
        },
        series: [
            {
                name: '流向',
                type: 'gauge',
                // center: ['50%', '40%'],    // 默认全局居中
                //radius: '58%',
                startAngle: 90,
                endAngle: -269.999,
                max: 360,
                detail: {
                    show: false,
                    formatter: '90'
                }, //仪表盘显示数据
                axisLine: { //仪表盘轴线样式
                    show: false,
                    lineStyle: {
                        width: 6,
                        show: false
                    }
                },
                splitNumber: 4,       // 分割段数，默认为5
                splitLine: {           // 分隔线
                    show: true,        // 默认显示，属性show控制显示与否,这里设为false将隐藏分割线！！
                    length: 12,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: '#f02d00',
                        width: 0,
                        type: 'solid'
                    }
                },
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[1, '#f02d00']],
                        width: 0
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: false,        // 属性show控制显示与否，默认不显示
                    splitNumber: 5,    // 每份split细分多少段
                    length: 8,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#ffbd2c',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                    show: false,
                    formatter: function (v) {
                        switch (v + '') {
                            case '0': return '北';
                            case '90': return '东';
                            case '180': return '南';
                            case '270': return '西';
                            default: return '';
                        }
                    },
                    distance: -26,
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        // color: '#333'
                    }
                },
                pointer: {
                    length: '70%',
                    width: 4,
                    color: 'auto'
                },
                data: [{ value: CURRENTDIR, name: '' }]
            }
        ]
    };

    myChart.setOption(option);
}
// 风向风速
function setFXFS(data) {
    var sli = "";
    $("#fsfxUl1").html("");
    $("#fsfxUl2").html("");
    if (data) {
        sli = "<li></li><li><span>两分钟平均</span></li><li><span>十分钟平均</span></li><li><span>最大</span></li><li><span>极大</span></li><li><span>瞬时</span></li>"
            + "<li><span>风速</span></li><li>" + data.TOWMINAVESPD.toFixed(3) + "</li><li>" + data.TENMINAVESPD.toFixed(3) + "</li><li>" + data.MAXWINDSPD.toFixed(3) + "</li><li>" + data.HUGEWINDSPD.toFixed(3) + "</li><li>" + data.INSTANTSPD.toFixed(3) + "</li>";
        $("#fsfxUl1").append(sli);
        sli = "<li><span>风向</span></li><li><ul class='fengxiangtu'><div id='fengxiangtu1' style='height:60px;width:60px;'></div></ul>" + data.TOWMINAVEDIR + "</li><li><ul class='fengxiangtu'><div id='fengxiangtu2' style='height:60px;width:60px;'></div></ul>" + data.TENMINAVEDIR + "</li><li><ul class='fengxiangtu'><div id='fengxiangtu3' style='height:60px;width:60px;'></div></ul>" + data.MAXWINDDIR + "</li><li><ul class='fengxiangtu'><div id='fengxiangtu4' style='height:60px;width:60px;'></div></ul>" + data.HUGEWINDDIR + "</li><li><ul class='fengxiangtu'><div id='fengxiangtu5' style='height:60px;width:60px;'></div></ul>" + data.INSTANTDIR + "</li>";
        $("#fsfxUl1").append(sli);

        sli = "<li><span>最大风速出现时间</span></li> <li><span>极大风速出现时间</span></li> <li>" + data.MAXWINDTIME + "</li><li>" + data.HUGEWINDTIME + "</li>";
        $("#fsfxUl2").append(sli);

        if (data.TOWMINAVEDIR) {
            setFXT(data.TOWMINAVEDIR, 1);
        }
        if (data.TENMINAVEDIR) {
            setFXT(data.TENMINAVEDIR, 2);
        }
        if (data.MAXWINDDIR) {
            setFXT(data.MAXWINDDIR, 3);
        }
        if (data.HUGEWINDDIR) {
            setFXT(data.HUGEWINDDIR, 4);
        }
        if (data.INSTANTDIR) {
            setFXT(data.INSTANTDIR, 5);
        }
    } else {
        sli = "<li></li><li><span>两分钟平均</span></li><li><span>十分钟平均</span></li><li><span>最大</span></li><li><span>极大</span></li><li><span>瞬时</span></li>"
            + "<li><span>风速</span></li><li>--</li><li>--</li><li>--</li><li>--</li><li>--</li>"
            + "<li><span>风向</span></li><li><ul class='fengxiangtu'><div id='fengxiangtu1' style='height:60px;'></div></ul></li><li><ul class='fengxiangtu'><div id='fengxiangtu2' style='height:60px;'></div></ul></li><li><ul class='fengxiangtu'><div id='fengxiangtu3' style='height:60px;'></div></ul></li><li><ul class='fengxiangtu'><div id='fengxiangtu4' style='height:60px;'></div></ul></li><li><ul class='fengxiangtu'><div id='fengxiangtu5' style='height:60px;'></div></ul></li>";
        $("#fsfxUl1").append(sli);

        sli = "<li><span>最大风速出现时间</span></li> <li><span>极大风速出现时间</span></li> <li>--</li><li>--</li>";
        $("#fsfxUl2").append(sli);
    }

}
// 风向图
function setFXT(WINDDIR,flg) {
    // 风向图
    var myChart = echarts.init(document.getElementById('fengxiangtu'+flg));
    option = {
        backgroundColor: 'rgba(0,0,0,0)',
        // backgroundImage: '#1b1b1b',
        tooltip: {
            show: false,
            formatter: "{a}  : {c}°"
        },
        series: [
            {
                name: '流向',
                type: 'gauge',
                // center: ['50%', '40%'],    // 默认全局居中
                //radius: '58%',
                startAngle: 90,
                endAngle: -269.999,
                max: 360,
                detail: {
                    show: false,
                    formatter: '90'
                }, //仪表盘显示数据
                axisLine: { //仪表盘轴线样式
                    show: false,
                    lineStyle: {
                        width: 6,
                        show: false
                    }
                },
                splitNumber: 4,       // 分割段数，默认为5
                splitLine: {           // 分隔线
                    show: true,        // 默认显示，属性show控制显示与否,这里设为false将隐藏分割线！！
                    length: 12,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: '#f02d00',
                        width: 0,
                        type: 'solid'
                    }
                },
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[1, '#f02d00']],
                        width: 0
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: false,        // 属性show控制显示与否，默认不显示
                    splitNumber: 5,    // 每份split细分多少段
                    length: 8,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#ffbd2c',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                    show: false,
                    formatter: function (v) {
                        switch (v + '') {
                            case '0': return '北';
                            case '90': return '东';
                            case '180': return '南';
                            case '270': return '西';
                            default: return '';
                        }
                    },
                    distance: -26,
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        // color: '#333'
                    }
                },
                pointer: {
                    length: '70%',
                    width: 4,
                    color: 'auto'
                },
                data: [{ value: WINDDIR, name: '' }]
            }
        ]
    };

    myChart.setOption(option);
}

function setSelectVal(id) {
    var hailiuData = newData.HaiLiu;
    for (var Key in hailiuData) {
        if (id == Key) {
            $("#hl_ls").html(hailiuData[Key].CURRENTSPD.toFixed(3) + "(cm/s)");
            $("#hl_lx").html(hailiuData[Key].CURRENTDIR.toFixed(3) + "°");
            setLXT(hailiuData[Key].CURRENTDIR);
        }
    }
}