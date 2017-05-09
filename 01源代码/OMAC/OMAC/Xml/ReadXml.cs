﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;

namespace GISSYSTEM.Xml
{
    public class ReadXml
    {
        public static XmlInfo GetXmlInfo()
        {
            XmlDocument doc = new XmlDocument();
            string path = System.AppDomain.CurrentDomain.BaseDirectory;
            string str = System.Environment.CurrentDirectory;
            doc.Load(path + @"Xml/SetPower.xml");
            XmlNode root = doc.SelectSingleNode("AppConfig");
            XmlInfo xmlInfo = new XmlInfo();
            foreach (XmlNode xn1 in root)
            {
                if (xn1.GetType().Name != "XmlComment")
                {
                    string nodeName = ((System.Xml.XmlElement)(xn1)).Name;
                    switch (nodeName)
                    {
                        case "BaseMaps":
                            xmlInfo.BaseMaps_List = GetBaseMapsInfo(xn1);
                            break;
                        case "LivingMaps":
                            xmlInfo.LivingMaps_List = GetLivingMapsInfo(xn1);
                            break;
                        default:
                            break;
                    }
                }
            }
            return xmlInfo;
        }

        /// <summary>
        /// 获取底图页信息
        /// </summary>
        /// <param name="xn1"></param>
        /// <returns></returns>
        public static List<BaseMaps> GetBaseMapsInfo(XmlNode xn1)
        {
            List<BaseMaps> list = new List<BaseMaps>();
            if (xn1 != null)
            {
                foreach (XmlNode node in xn1.ChildNodes)
                {
                    if (node.GetType().Name != "XmlComment")
                    {
                        BaseMaps BaseMap = new BaseMaps();
                        XmlElement element = (XmlElement)node;
                        BaseMap.id = element.GetAttribute("id");
                        BaseMap.title = element.GetAttribute("title");
                        BaseMap.icon = element.GetAttribute("icon");
                        BaseMap.serviceType = element.GetAttribute("serviceType");
                        BaseMap.restUrl = element.GetAttribute("restUrl");
                        list.Add(BaseMap);
                    }
                }
            }
            return list;
        }

        /// <summary>
        /// 获取展示页信息
        /// </summary>
        /// <param name="xn1"></param>
        /// <returns></returns>
        public static List<LivingMaps> GetLivingMapsInfo(XmlNode xn1)
        {
            List<LivingMaps> list = new List<LivingMaps>();
            if (xn1 != null)
            {
                foreach (XmlNode node in xn1.ChildNodes)
                {
                    if (node.GetType().Name != "XmlComment")
                    {
                        LivingMaps livingMap = new LivingMaps();
                        XmlElement element = (XmlElement)node;
                        livingMap.id = element.GetAttribute("id");
                        livingMap.title = element.GetAttribute("title");
                        livingMap.icon = element.GetAttribute("icon");
                        livingMap.serviceType = element.GetAttribute("serviceType");
                        livingMap.restUrl = element.GetAttribute("restUrl");
                        list.Add(livingMap);
                    }
                }
            }
            return list;
        }
    }

    /// <summary>
    /// 容纳了xml文件的全部信息
    /// </summary>
    public class XmlInfo
    {
        /// <summary>
        /// 加载底图图层信息集合
        /// </summary>
        public List<BaseMaps> BaseMaps_List { get; set; }

        /// <summary>
        /// 加载地图图层信息集合
        /// </summary>
        public List<LivingMaps> LivingMaps_List { get; set; }

    }

    /// <summary>
    /// 加载底图图层信息
    /// </summary>
    public class BaseMaps
    {
        public string id { get; set; }
        public string title { get; set; }
        public string icon { get; set; }
        public string serviceType { get; set; }
        public string restUrl { get; set; }
    }

    /// <summary>
    /// 加载地图图层信息
    /// </summary>
    public class LivingMaps
    {
        public string id { get; set; }
        public string title { get; set; }
        public string icon { get; set; }
        public string serviceType { get; set; }
        public string restUrl { get; set; }
    }


}