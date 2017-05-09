﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Business.BN
{
    /// <summary>
    /// 岸基站
    /// </summary>
    public class TAB_BN
    {
        /// <summary>
        /// 获取岸基站的详情
        /// </summary>
        public Entity.TAB GetTABModel(string deviceCode)
        {
            Entity.TAB tab = new Entity.TAB();

            TABECOLOGY_BN cology = new TABECOLOGY_BN();
            tab.ShuiZhi = cology.GetShuiZhiModel(deviceCode);
            tab.ShuiWen = cology.GetShuiWenModel(deviceCode);

            TABQIXG_BN qixiang = new TABQIXG_BN();
            tab.QIXG = qixiang.GetModel(deviceCode);

            TABSTATUS_BN status = new TABSTATUS_BN();
            tab.STATUS = status.GetModel(deviceCode);

            return tab;
        }
    }
}
