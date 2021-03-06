﻿using System;
using System.Runtime.Serialization;
namespace Entity
{
    /// <summary>
    /// 气象数据表(浮标)
    /// </summary>
    [Serializable]
    [DataContract]
    public class TABBUOYQIXG
    {
        /// <summary>
        /// 浮标号
        /// </summary>
        [DataMember]
        public string DEVICECODE { get; set; }
        /// <summary>
        /// 时间
        /// </summary>
        [DataMember]
        public DateTime DATETIME { get; set; }
        /// <summary>
        /// 发送通讯号
        /// </summary>
        [DataMember]
        public decimal SENDNUM { get; set; }
        /// <summary>
        /// 接收通讯号
        /// </summary>
        [DataMember]
        public decimal RECVNUM { get; set; }
        /// <summary>
        /// 能见度
        /// </summary>
        [DataMember]
        public decimal NJD { get; set; }
        /// <summary>
        /// 实际雨量
        /// </summary>
        [DataMember]
        public decimal RAINFALLACTUAL { get; set; }
        /// <summary>
        /// 测前雨量
        /// </summary>
        [DataMember]
        public decimal RAINFALLPREV { get; set; }
        /// <summary>
        /// 雨量
        /// </summary>
        [DataMember]
        public decimal RAINFALL { get; set; }
        /// <summary>
        /// 总辐射
        /// </summary>
        [DataMember]
        public decimal TOTALRADIATION { get; set; }
        /// <summary>
        /// 红外辐射
        /// </summary>
        [DataMember]
        public decimal INFRAREDRADIATION { get; set; }
        /// <summary>
        /// 日照时间
        /// </summary>
        [DataMember]
        public decimal SUNLIGHTTIME { get; set; }
        /// <summary>
        /// 二氧化碳
        /// </summary>
        [DataMember]
        public decimal AIRCO2 { get; set; }
        /// <summary>
        /// 气温1
        /// </summary>
        [DataMember]
        public decimal AIRTEM1 { get; set; }
        /// <summary>
        /// 气温2
        /// </summary>
        [DataMember]
        public decimal AIRTEM2 { get; set; }
        /// <summary>
        /// 气温3
        /// </summary>
        [DataMember]
        public decimal AIRTEM3 { get; set; }
        /// <summary>
        /// 气温4
        /// </summary>
        [DataMember]
        public decimal AIRTEM4 { get; set; }
        /// <summary>
        /// 气温5
        /// </summary>
        [DataMember]
        public decimal AIRTEM5 { get; set; }
        /// <summary>
        /// 气温6
        /// </summary>
        [DataMember]
        public decimal AIRTEM6 { get; set; }
        /// <summary>
        /// 气温7
        /// </summary>
        [DataMember]
        public decimal AIRTEM7 { get; set; }
        /// <summary>
        /// 气温8
        /// </summary>
        [DataMember]
        public decimal AIRTEM8 { get; set; }
        /// <summary>
        /// 气温9
        /// </summary>
        [DataMember]
        public decimal AIRTEM9 { get; set; }
        /// <summary>
        /// 气温10
        /// </summary>
        [DataMember]
        public decimal AIRTEM10 { get; set; }

        /// <summary>
        /// 平均气温
        /// </summary>
        [DataMember]
        public decimal AIRTEM { get; set; }

        /// <summary>
        /// 最高气温
        /// </summary>
        [DataMember]
        public decimal MAXAIRTEM { get; set; }
        /// <summary>
        /// 最高气温时间
        /// </summary>
        [DataMember]
        public decimal MAXAIRTEMTIME { get; set; }
        /// <summary>
        /// 最低气温
        /// </summary>
        [DataMember]
        public decimal MINAIRTEM { get; set; }
        /// <summary>
        /// 最低气温时间
        /// </summary>
        [DataMember]
        public decimal MINAIRTEMTIME { get; set; }
        /// <summary>
        /// 湿度1
        /// </summary>
        [DataMember]
        public decimal HUMI1 { get; set; }
        /// <summary>
        /// 湿度2
        /// </summary>
        [DataMember]
        public decimal HUMI2 { get; set; }
        /// <summary>
        /// 湿度3
        /// </summary>
        [DataMember]
        public decimal HUMI3 { get; set; }
        /// <summary>
        /// 湿度4
        /// </summary>
        [DataMember]
        public decimal HUMI4 { get; set; }
        /// <summary>
        /// 湿度5
        /// </summary>
        [DataMember]
        public decimal HUMI5 { get; set; }
        /// <summary>
        /// 湿度6
        /// </summary>
        [DataMember]
        public decimal HUMI6 { get; set; }
        /// <summary>
        /// 湿度7
        /// </summary>
        [DataMember]
        public decimal HUMI7 { get; set; }
        /// <summary>
        /// 湿度8
        /// </summary>
        [DataMember]
        public decimal HUMI8 { get; set; }
        /// <summary>
        /// 湿度9
        /// </summary>
        [DataMember]
        public decimal HUMI9 { get; set; }
        /// <summary>
        /// 湿度10
        /// </summary>
        [DataMember]
        public decimal HUMI10 { get; set; }

        /// <summary>
        /// 平均湿度
        /// </summary>
        [DataMember]
        public decimal HUMI { get; set; }

        /// <summary>
        /// 最高湿度
        /// </summary>
        [DataMember]
        public decimal MAXHUMI { get; set; }
        /// <summary>
        /// 最高湿度时间
        /// </summary>
        [DataMember]
        public decimal MAXHUMITIME { get; set; }
        /// <summary>
        /// 最低湿度
        /// </summary>
        [DataMember]
        public decimal MINHUMI { get; set; }
        /// <summary>
        /// 最低湿度时间
        /// </summary>
        [DataMember]
        public decimal MINHUMITIME { get; set; }
        /// <summary>
        /// 气压1
        /// </summary>
        [DataMember]
        public decimal PRESSURE1 { get; set; }
        /// <summary>
        /// 气压2
        /// </summary>
        [DataMember]
        public decimal PRESSURE2 { get; set; }
        /// <summary>
        /// 气压3
        /// </summary>
        [DataMember]
        public decimal PRESSURE3 { get; set; }
        /// <summary>
        /// 气压4
        /// </summary>
        [DataMember]
        public decimal PRESSURE4 { get; set; }
        /// <summary>
        /// 气压5
        /// </summary>
        [DataMember]
        public decimal PRESSURE5 { get; set; }
        /// <summary>
        /// 气压6
        /// </summary>
        [DataMember]
        public decimal PRESSURE6 { get; set; }
        /// <summary>
        /// 气压7
        /// </summary>
        [DataMember]
        public decimal PRESSURE7 { get; set; }
        /// <summary>
        /// 气压8
        /// </summary>
        [DataMember]
        public decimal PRESSURE8 { get; set; }
        /// <summary>
        /// 气压9
        /// </summary>
        [DataMember]
        public decimal PRESSURE9 { get; set; }
        /// <summary>
        /// 气压10
        /// </summary>
        [DataMember]
        public decimal PRESSURE10 { get; set; }

        /// <summary>
        /// 平均气压
        /// </summary>
        [DataMember]
        public decimal PRESSURE { get; set; }

        /// <summary>
        /// 最高气压
        /// </summary>
        [DataMember]
        public decimal MAXPRESSURE { get; set; }
        /// <summary>
        /// 最高气压时间
        /// </summary>
        [DataMember]
        public decimal MAXPRESSURETIME { get; set; }
        /// <summary>
        /// 最低气压
        /// </summary>
        [DataMember]
        public decimal MINPRESSURE { get; set; }
        /// <summary>
        /// 最低气压时间
        /// </summary>
        [DataMember]
        public decimal MINPRESSURETIME { get; set; }
        /// <summary>
        /// 风速1
        /// </summary>
        [DataMember]
        public decimal WINDSPD1 { get; set; }
        /// <summary>
        /// 风向1
        /// </summary>
        [DataMember]
        public decimal WINDDIR1 { get; set; }
        /// <summary>
        /// 风速2
        /// </summary>
        [DataMember]
        public decimal WINDSPD2 { get; set; }
        /// <summary>
        /// 风向2
        /// </summary>
        [DataMember]
        public decimal WINDDIR2 { get; set; }
        /// <summary>
        /// 风速3
        /// </summary>
        [DataMember]
        public decimal WINDSPD3 { get; set; }
        /// <summary>
        /// 风向3
        /// </summary>
        [DataMember]
        public decimal WINDDIR3 { get; set; }
        /// <summary>
        /// 风速4
        /// </summary>
        [DataMember]
        public decimal WINDSPD4 { get; set; }
        /// <summary>
        /// 风向4
        /// </summary>
        [DataMember]
        public decimal WINDDIR4 { get; set; }
        /// <summary>
        /// 风速5
        /// </summary>
        [DataMember]
        public decimal WINDSPD5 { get; set; }
        /// <summary>
        /// 风向5
        /// </summary>
        [DataMember]
        public decimal WINDDIR5 { get; set; }
        /// <summary>
        /// 风速6
        /// </summary>
        [DataMember]
        public decimal WINDSPD6 { get; set; }
        /// <summary>
        /// 风向6
        /// </summary>
        [DataMember]
        public decimal WINDDIR6 { get; set; }
        /// <summary>
        /// 风速7
        /// </summary>
        [DataMember]
        public decimal WINDSPD7 { get; set; }
        /// <summary>
        /// 风向7
        /// </summary>
        [DataMember]
        public decimal WINDDIR7 { get; set; }
        /// <summary>
        /// 风速8
        /// </summary>
        [DataMember]
        public decimal WINDSPD8 { get; set; }
        /// <summary>
        /// 风向8
        /// </summary>
        [DataMember]
        public decimal WINDDIR8 { get; set; }
        /// <summary>
        /// 风速9
        /// </summary>
        [DataMember]
        public decimal WINDSPD9 { get; set; }
        /// <summary>
        /// 风向9
        /// </summary>
        [DataMember]
        public decimal WINDDIR9 { get; set; }
        /// <summary>
        /// 风速10
        /// </summary>
        [DataMember]
        public decimal WINDSPD10 { get; set; }
        /// <summary>
        /// 风向10
        /// </summary>
        [DataMember]
        public decimal WINDDIR10 { get; set; }
        /// <summary>
        /// 最大风速
        /// </summary>
        [DataMember]
        public decimal MAXWINDSPD { get; set; }
        /// <summary>
        /// 最大风速风向
        /// </summary>
        [DataMember]
        public decimal MAXWINDDIR { get; set; }
        /// <summary>
        /// 最大风速时间
        /// </summary>
        [DataMember]
        public decimal MAXWINDTIME { get; set; }
        /// <summary>
        /// 极大风速
        /// </summary>
        [DataMember]
        public decimal HUGEWINDSPD { get; set; }
        /// <summary>
        /// 极大风速风向
        /// </summary>
        [DataMember]
        public decimal HUGEWINDDIR { get; set; }
        /// <summary>
        /// 极大风速时间
        /// </summary>
        [DataMember]
        public decimal HUGEWINDTIME { get; set; }
        /// <summary>
        /// 10分钟平均风速
        /// </summary>
        [DataMember]
        public decimal TENMINAVESPD { get; set; }
        /// <summary>
        /// 10分钟平均风向
        /// </summary>
        [DataMember]
        public decimal TENMINAVEDIR { get; set; }
        /// <summary>
        /// 瞬时风速
        /// </summary>
        [DataMember]
        public decimal INSTANTSPD { get; set; }
        /// <summary>
        /// 瞬时风向
        /// </summary>
        [DataMember]
        public decimal INSTANTDIR { get; set; }
        /// <summary>
        /// 2分钟平均风速
        /// </summary>
        [DataMember]
        public decimal TOWMINAVESPD { get; set; }
        /// <summary>
        /// 2分钟平均风向
        /// </summary>
        [DataMember]
        public decimal TOWMINAVEDIR { get; set; }
        /// <summary>
        /// 平均风速1
        /// </summary>
        [DataMember]
        public decimal AVEWINDSPD1 { get; set; }
        /// <summary>
        /// 平均风向1
        /// </summary>
        [DataMember]
        public decimal AVEWINDDIR1 { get; set; }
        /// <summary>
        /// 平均风速2
        /// </summary>
        [DataMember]
        public decimal AVEWINDSPD2 { get; set; }
        /// <summary>
        /// 平均风向2
        /// </summary>
        [DataMember]
        public decimal AVEWINDDIR2 { get; set; }
        /// <summary>
        /// 平均风速3
        /// </summary>
        [DataMember]
        public decimal AVEWINDSPD3 { get; set; }
        /// <summary>
        /// 平均风向3
        /// </summary>
        [DataMember]
        public decimal AVEWINDDIR3 { get; set; }
        /// <summary>
        /// 平均风速4
        /// </summary>
        [DataMember]
        public decimal AVEWINDSPD4 { get; set; }
        /// <summary>
        /// 平均风向4
        /// </summary>
        [DataMember]
        public decimal AVEWINDDIR4 { get; set; }
        /// <summary>
        /// 平均风速5
        /// </summary>
        [DataMember]
        public decimal AVEWINDSPD5 { get; set; }
        /// <summary>
        /// 平均风向5
        /// </summary>
        [DataMember]
        public decimal AVEWINDDIR5 { get; set; }
        /// <summary>
        /// 平均风速6
        /// </summary>
        [DataMember]
        public decimal AVEWINDSPD6 { get; set; }
        /// <summary>
        /// 平均风向6
        /// </summary>
        [DataMember]
        public decimal AVEWINDDIR6 { get; set; }
        /// <summary>
        /// 平均风速7
        /// </summary>
        [DataMember]
        public decimal AVEWINDSPD7 { get; set; }
        /// <summary>
        /// 平均风向7
        /// </summary>
        [DataMember]
        public decimal AVEWINDDIR7 { get; set; }
        /// <summary>
        /// 平均风速8
        /// </summary>
        [DataMember]
        public decimal AVEWINDSPD8 { get; set; }
        /// <summary>
        /// 平均风向8
        /// </summary>
        [DataMember]
        public decimal AVEWINDDIR8 { get; set; }
        /// <summary>
        /// 平均风速9
        /// </summary>
        [DataMember]
        public decimal AVEWINDSPD9 { get; set; }
        /// <summary>
        /// 平均风向9
        /// </summary>
        [DataMember]
        public decimal AVEWINDDIR9 { get; set; }
        /// <summary>
        /// 平均风速10
        /// </summary>
        [DataMember]
        public decimal AVEWINDSPD10 { get; set; }
        /// <summary>
        /// 平均风向10
        /// </summary>
        [DataMember]
        public decimal AVEWINDDIR10 { get; set; }
        /// <summary>
        /// 审核状态
        /// </summary>
        [DataMember]
        public decimal RESERV0 { get; set; }
        /// <summary>
        /// RESERV1
        /// </summary>
        [DataMember]
        public decimal RESERV1 { get; set; }
        /// <summary>
        /// RESERV2
        /// </summary>
        [DataMember]
        public decimal RESERV2 { get; set; }
        /// <summary>
        /// RESERV3
        /// </summary>
        [DataMember]
        public decimal RESERV3 { get; set; }
        /// <summary>
        /// RESERV4
        /// </summary>
        [DataMember]
        public decimal RESERV4 { get; set; }
        /// <summary>
        /// RESERV5
        /// </summary>
        [DataMember]
        public decimal RESERV5 { get; set; }
        /// <summary>
        /// RESERV6
        /// </summary>
        [DataMember]
        public decimal RESERV6 { get; set; }
        /// <summary>
        /// RESERV7
        /// </summary>
        [DataMember]
        public decimal RESERV7 { get; set; }
        /// <summary>
        /// RESERV8
        /// </summary>
        [DataMember]
        public decimal RESERV8 { get; set; }
        /// <summary>
        /// RESERV9
        /// </summary>
        [DataMember]
        public decimal RESERV9 { get; set; }
        /// <summary>
        /// RESERV10
        /// </summary>
        [DataMember]
        public decimal RESERV10 { get; set; }
        /// <summary>
        /// RESERV11
        /// </summary>
        [DataMember]
        public decimal RESERV11 { get; set; }
        /// <summary>
        /// RESERV12
        /// </summary>
        [DataMember]
        public decimal RESERV12 { get; set; }
        /// <summary>
        /// RESERV13
        /// </summary>
        [DataMember]
        public decimal RESERV13 { get; set; }
        /// <summary>
        /// RESERV14
        /// </summary>
        [DataMember]
        public decimal RESERV14 { get; set; }
    }
}