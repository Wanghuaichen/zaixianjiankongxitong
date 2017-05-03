﻿using System;
using System.Text;
using System.Data.OracleClient;
using System.Collections.Generic;
using System.Data;

namespace Business.BN
{
    public class TABECOLOGY
    {

        public bool Exists()
        {
            StringBuilder strSql = new StringBuilder();
            DbAPI dbHelper = new DbAPI();
            strSql.Append("select count(1) from TABECOLOGY");
            strSql.Append(" where ");
            OracleParameter[] parameters = {
			};

            if (dbHelper.ExecuteNonQuery(strSql.ToString(), parameters) > 0)
            {
                return true;
            }
            else
            {
                return false;
            }

        }



        /// <summary>
        /// 增加一条数据
        /// </summary>
        public void Add(Entity.TABECOLOGY model)
        {
            StringBuilder strSql = new StringBuilder();
            DbAPI dbHelper = new DbAPI();
            strSql.Append("insert into TABECOLOGY(");
            strSql.Append("DEVICECODE,DATETIME,SENDNUM,RECVNUM,WATERTEM,SALINITY,CONDUCTIVITY,OXYGEN,PH,TURBIDITY,UNDERWATERCO2,OXYGENCHEMICAL,MNO4,OXYGENBIOLOGY,NH3N,NO3,NO2,PO4,SIO3,RESERV0,RESERV1,RESERV2,RESERV3,RESERV4,RESERV5,RESERV6,RESERV7,RESERV8,RESERV9,P,N,C,S,SUSPENSION,CYANIDE,HG,CR,CR6,PB,AS,YLSA,PHYCOCY,PHYCOER,COLIFORM,POTENTIAL,TOTALY,K40,CS134,CS137,CO60,CU,ZN,PHENOL,BOD5,ORGANIC,DETERGENTS,OIL,VIRUS,PETRO,DDT,PCBS,BENZOL,CHLO,ANTIBIOTIC,POISONA,POISONB,RESERV10,RESERV11,RESERV12,RESERV13,RESERV14,RESERV15,RESERV16,RESERV17,RESERV18,RESERV19,DEPTH,WATERLEVEL,CURRENTSPD,CURRENTDIR,CURRENTVOL,CD,F,NI");
            strSql.Append(") values (");
            strSql.Append(":DEVICECODE,:DATETIME,:SENDNUM,:RECVNUM,:WATERTEM,:SALINITY,:CONDUCTIVITY,:OXYGEN,:PH,:TURBIDITY,:UNDERWATERCO2,:OXYGENCHEMICAL,:MNO4,:OXYGENBIOLOGY,:NH3N,:NO3,:NO2,:PO4,:SIO3,:RESERV0,:RESERV1,:RESERV2,:RESERV3,:RESERV4,:RESERV5,:RESERV6,:RESERV7,:RESERV8,:RESERV9,:P,:N,:C,:S,:SUSPENSION,:CYANIDE,:HG,:CR,:CR6,:PB,:AS,:YLSA,:PHYCOCY,:PHYCOER,:COLIFORM,:POTENTIAL,:TOTALY,:K40,:CS134,:CS137,:CO60,:CU,:ZN,:PHENOL,:BOD5,:ORGANIC,:DETERGENTS,:OIL,:VIRUS,:PETRO,:DDT,:PCBS,:BENZOL,:CHLO,:ANTIBIOTIC,:POISONA,:POISONB,:RESERV10,:RESERV11,:RESERV12,:RESERV13,:RESERV14,:RESERV15,:RESERV16,:RESERV17,:RESERV18,:RESERV19,:DEPTH,:WATERLEVEL,:CURRENTSPD,:CURRENTDIR,:CURRENTVOL,:CD,:F,:NI");
            strSql.Append(") ");

            OracleParameter[] parameters = {
			            new OracleParameter(":DEVICECODE", OracleType.Char,6) ,            
                        new OracleParameter(":DATETIME", OracleType.DateTime) ,            
                        new OracleParameter(":SENDNUM", OracleType.Number,22) ,            
                        new OracleParameter(":RECVNUM", OracleType.Number,22) ,            
                        new OracleParameter(":WATERTEM", OracleType.Number,16) ,            
                        new OracleParameter(":SALINITY", OracleType.Number,16) ,            
                        new OracleParameter(":CONDUCTIVITY", OracleType.Number,16) ,            
                        new OracleParameter(":OXYGEN", OracleType.Number,16) ,            
                        new OracleParameter(":PH", OracleType.Number,16) ,            
                        new OracleParameter(":TURBIDITY", OracleType.Number,16) ,            
                        new OracleParameter(":UNDERWATERCO2", OracleType.Number,22) ,            
                        new OracleParameter(":OXYGENCHEMICAL", OracleType.Number,16) ,            
                        new OracleParameter(":MNO4", OracleType.Number,16) ,            
                        new OracleParameter(":OXYGENBIOLOGY", OracleType.Number,16) ,            
                        new OracleParameter(":NH3N", OracleType.Number,16) ,            
                        new OracleParameter(":NO3", OracleType.Number,16) ,            
                        new OracleParameter(":NO2", OracleType.Number,16) ,            
                        new OracleParameter(":PO4", OracleType.Number,16) ,            
                        new OracleParameter(":SIO3", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV0", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV1", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV2", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV3", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV4", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV5", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV6", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV7", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV8", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV9", OracleType.Number,16) ,            
                        new OracleParameter(":P", OracleType.Number,16) ,            
                        new OracleParameter(":N", OracleType.Number,16) ,            
                        new OracleParameter(":C", OracleType.Number,16) ,            
                        new OracleParameter(":S", OracleType.Number,16) ,            
                        new OracleParameter(":SUSPENSION", OracleType.Number,16) ,            
                        new OracleParameter(":CYANIDE", OracleType.Number,16) ,            
                        new OracleParameter(":HG", OracleType.Number,16) ,            
                        new OracleParameter(":CR", OracleType.Number,16) ,            
                        new OracleParameter(":CR6", OracleType.Number,16) ,            
                        new OracleParameter(":PB", OracleType.Number,16) ,            
                        new OracleParameter(":AS", OracleType.Number,16) ,            
                        new OracleParameter(":YLSA", OracleType.Number,16) ,            
                        new OracleParameter(":PHYCOCY", OracleType.Number,16) ,            
                        new OracleParameter(":PHYCOER", OracleType.Number,16) ,            
                        new OracleParameter(":COLIFORM", OracleType.Number,16) ,            
                        new OracleParameter(":POTENTIAL", OracleType.Number,16) ,            
                        new OracleParameter(":TOTALY", OracleType.Number,16) ,            
                        new OracleParameter(":K40", OracleType.Number,16) ,            
                        new OracleParameter(":CS134", OracleType.Number,16) ,            
                        new OracleParameter(":CS137", OracleType.Number,16) ,            
                        new OracleParameter(":CO60", OracleType.Number,16) ,            
                        new OracleParameter(":CU", OracleType.Number,16) ,            
                        new OracleParameter(":ZN", OracleType.Number,16) ,            
                        new OracleParameter(":PHENOL", OracleType.Number,16) ,            
                        new OracleParameter(":BOD5", OracleType.Number,16) ,            
                        new OracleParameter(":ORGANIC", OracleType.Number,16) ,            
                        new OracleParameter(":DETERGENTS", OracleType.Number,16) ,            
                        new OracleParameter(":OIL", OracleType.Number,16) ,            
                        new OracleParameter(":VIRUS", OracleType.Number,22) ,            
                        new OracleParameter(":PETRO", OracleType.Number,16) ,            
                        new OracleParameter(":DDT", OracleType.Number,16) ,            
                        new OracleParameter(":PCBS", OracleType.Number,16) ,            
                        new OracleParameter(":BENZOL", OracleType.Number,16) ,            
                        new OracleParameter(":CHLO", OracleType.Number,16) ,            
                        new OracleParameter(":ANTIBIOTIC", OracleType.Number,16) ,            
                        new OracleParameter(":POISONA", OracleType.Number,16) ,            
                        new OracleParameter(":POISONB", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV10", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV11", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV12", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV13", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV14", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV15", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV16", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV17", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV18", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV19", OracleType.Number,16) ,            
                        new OracleParameter(":DEPTH", OracleType.Number,16) ,            
                        new OracleParameter(":WATERLEVEL", OracleType.Number,16) ,            
                        new OracleParameter(":CURRENTSPD", OracleType.Number,16) ,            
                        new OracleParameter(":CURRENTDIR", OracleType.Number,22) ,            
                        new OracleParameter(":CURRENTVOL", OracleType.Number,22) ,            
                        new OracleParameter(":CD", OracleType.Number,16) ,            
                        new OracleParameter(":F", OracleType.Number,16) ,            
                        new OracleParameter(":NI", OracleType.Number,16)             
              
            };

            parameters[0].Value = model.DEVICECODE;
            parameters[1].Value = model.DATETIME;
            parameters[2].Value = model.SENDNUM;
            parameters[3].Value = model.RECVNUM;
            parameters[4].Value = model.WATERTEM;
            parameters[5].Value = model.SALINITY;
            parameters[6].Value = model.CONDUCTIVITY;
            parameters[7].Value = model.OXYGEN;
            parameters[8].Value = model.PH;
            parameters[9].Value = model.TURBIDITY;
            parameters[10].Value = model.UNDERWATERCO2;
            parameters[11].Value = model.OXYGENCHEMICAL;
            parameters[12].Value = model.MNO4;
            parameters[13].Value = model.OXYGENBIOLOGY;
            parameters[14].Value = model.NH3N;
            parameters[15].Value = model.NO3;
            parameters[16].Value = model.NO2;
            parameters[17].Value = model.PO4;
            parameters[18].Value = model.SIO3;
            parameters[19].Value = model.RESERV0;
            parameters[20].Value = model.RESERV1;
            parameters[21].Value = model.RESERV2;
            parameters[22].Value = model.RESERV3;
            parameters[23].Value = model.RESERV4;
            parameters[24].Value = model.RESERV5;
            parameters[25].Value = model.RESERV6;
            parameters[26].Value = model.RESERV7;
            parameters[27].Value = model.RESERV8;
            parameters[28].Value = model.RESERV9;
            parameters[29].Value = model.P;
            parameters[30].Value = model.N;
            parameters[31].Value = model.C;
            parameters[32].Value = model.S;
            parameters[33].Value = model.SUSPENSION;
            parameters[34].Value = model.CYANIDE;
            parameters[35].Value = model.HG;
            parameters[36].Value = model.CR;
            parameters[37].Value = model.CR6;
            parameters[38].Value = model.PB;
            parameters[39].Value = model.AS;
            parameters[40].Value = model.YLSA;
            parameters[41].Value = model.PHYCOCY;
            parameters[42].Value = model.PHYCOER;
            parameters[43].Value = model.COLIFORM;
            parameters[44].Value = model.POTENTIAL;
            parameters[45].Value = model.TOTALY;
            parameters[46].Value = model.K40;
            parameters[47].Value = model.CS134;
            parameters[48].Value = model.CS137;
            parameters[49].Value = model.CO60;
            parameters[50].Value = model.CU;
            parameters[51].Value = model.ZN;
            parameters[52].Value = model.PHENOL;
            parameters[53].Value = model.BOD5;
            parameters[54].Value = model.ORGANIC;
            parameters[55].Value = model.DETERGENTS;
            parameters[56].Value = model.OIL;
            parameters[57].Value = model.VIRUS;
            parameters[58].Value = model.PETRO;
            parameters[59].Value = model.DDT;
            parameters[60].Value = model.PCBS;
            parameters[61].Value = model.BENZOL;
            parameters[62].Value = model.CHLO;
            parameters[63].Value = model.ANTIBIOTIC;
            parameters[64].Value = model.POISONA;
            parameters[65].Value = model.POISONB;
            parameters[66].Value = model.RESERV10;
            parameters[67].Value = model.RESERV11;
            parameters[68].Value = model.RESERV12;
            parameters[69].Value = model.RESERV13;
            parameters[70].Value = model.RESERV14;
            parameters[71].Value = model.RESERV15;
            parameters[72].Value = model.RESERV16;
            parameters[73].Value = model.RESERV17;
            parameters[74].Value = model.RESERV18;
            parameters[75].Value = model.RESERV19;
            parameters[76].Value = model.DEPTH;
            parameters[77].Value = model.WATERLEVEL;
            parameters[78].Value = model.CURRENTSPD;
            parameters[79].Value = model.CURRENTDIR;
            parameters[80].Value = model.CURRENTVOL;
            parameters[81].Value = model.CD;
            parameters[82].Value = model.F;
            parameters[83].Value = model.NI;
            dbHelper.ExecuteNonQuery(strSql.ToString(), parameters);

        }


        /// <summary>
        /// 更新一条数据
        /// </summary>
        public bool Update(Entity.TABECOLOGY model)
        {
            StringBuilder strSql = new StringBuilder();
            DbAPI dbHelper = new DbAPI();
            strSql.Append("update TABECOLOGY set ");

            strSql.Append(" DEVICECODE = :DEVICECODE , ");
            strSql.Append(" DATETIME = :DATETIME , ");
            strSql.Append(" SENDNUM = :SENDNUM , ");
            strSql.Append(" RECVNUM = :RECVNUM , ");
            strSql.Append(" WATERTEM = :WATERTEM , ");
            strSql.Append(" SALINITY = :SALINITY , ");
            strSql.Append(" CONDUCTIVITY = :CONDUCTIVITY , ");
            strSql.Append(" OXYGEN = :OXYGEN , ");
            strSql.Append(" PH = :PH , ");
            strSql.Append(" TURBIDITY = :TURBIDITY , ");
            strSql.Append(" UNDERWATERCO2 = :UNDERWATERCO2 , ");
            strSql.Append(" OXYGENCHEMICAL = :OXYGENCHEMICAL , ");
            strSql.Append(" MNO4 = :MNO4 , ");
            strSql.Append(" OXYGENBIOLOGY = :OXYGENBIOLOGY , ");
            strSql.Append(" NH3N = :NH3N , ");
            strSql.Append(" NO3 = :NO3 , ");
            strSql.Append(" NO2 = :NO2 , ");
            strSql.Append(" PO4 = :PO4 , ");
            strSql.Append(" SIO3 = :SIO3 , ");
            strSql.Append(" RESERV0 = :RESERV0 , ");
            strSql.Append(" RESERV1 = :RESERV1 , ");
            strSql.Append(" RESERV2 = :RESERV2 , ");
            strSql.Append(" RESERV3 = :RESERV3 , ");
            strSql.Append(" RESERV4 = :RESERV4 , ");
            strSql.Append(" RESERV5 = :RESERV5 , ");
            strSql.Append(" RESERV6 = :RESERV6 , ");
            strSql.Append(" RESERV7 = :RESERV7 , ");
            strSql.Append(" RESERV8 = :RESERV8 , ");
            strSql.Append(" RESERV9 = :RESERV9 , ");
            strSql.Append(" P = :P , ");
            strSql.Append(" N = :N , ");
            strSql.Append(" C = :C , ");
            strSql.Append(" S = :S , ");
            strSql.Append(" SUSPENSION = :SUSPENSION , ");
            strSql.Append(" CYANIDE = :CYANIDE , ");
            strSql.Append(" HG = :HG , ");
            strSql.Append(" CR = :CR , ");
            strSql.Append(" CR6 = :CR6 , ");
            strSql.Append(" PB = :PB , ");
            strSql.Append(" AS = :AS , ");
            strSql.Append(" YLSA = :YLSA , ");
            strSql.Append(" PHYCOCY = :PHYCOCY , ");
            strSql.Append(" PHYCOER = :PHYCOER , ");
            strSql.Append(" COLIFORM = :COLIFORM , ");
            strSql.Append(" POTENTIAL = :POTENTIAL , ");
            strSql.Append(" TOTALY = :TOTALY , ");
            strSql.Append(" K40 = :K40 , ");
            strSql.Append(" CS134 = :CS134 , ");
            strSql.Append(" CS137 = :CS137 , ");
            strSql.Append(" CO60 = :CO60 , ");
            strSql.Append(" CU = :CU , ");
            strSql.Append(" ZN = :ZN , ");
            strSql.Append(" PHENOL = :PHENOL , ");
            strSql.Append(" BOD5 = :BOD5 , ");
            strSql.Append(" ORGANIC = :ORGANIC , ");
            strSql.Append(" DETERGENTS = :DETERGENTS , ");
            strSql.Append(" OIL = :OIL , ");
            strSql.Append(" VIRUS = :VIRUS , ");
            strSql.Append(" PETRO = :PETRO , ");
            strSql.Append(" DDT = :DDT , ");
            strSql.Append(" PCBS = :PCBS , ");
            strSql.Append(" BENZOL = :BENZOL , ");
            strSql.Append(" CHLO = :CHLO , ");
            strSql.Append(" ANTIBIOTIC = :ANTIBIOTIC , ");
            strSql.Append(" POISONA = :POISONA , ");
            strSql.Append(" POISONB = :POISONB , ");
            strSql.Append(" RESERV10 = :RESERV10 , ");
            strSql.Append(" RESERV11 = :RESERV11 , ");
            strSql.Append(" RESERV12 = :RESERV12 , ");
            strSql.Append(" RESERV13 = :RESERV13 , ");
            strSql.Append(" RESERV14 = :RESERV14 , ");
            strSql.Append(" RESERV15 = :RESERV15 , ");
            strSql.Append(" RESERV16 = :RESERV16 , ");
            strSql.Append(" RESERV17 = :RESERV17 , ");
            strSql.Append(" RESERV18 = :RESERV18 , ");
            strSql.Append(" RESERV19 = :RESERV19 , ");
            strSql.Append(" DEPTH = :DEPTH , ");
            strSql.Append(" WATERLEVEL = :WATERLEVEL , ");
            strSql.Append(" CURRENTSPD = :CURRENTSPD , ");
            strSql.Append(" CURRENTDIR = :CURRENTDIR , ");
            strSql.Append(" CURRENTVOL = :CURRENTVOL , ");
            strSql.Append(" CD = :CD , ");
            strSql.Append(" F = :F , ");
            strSql.Append(" NI = :NI  ");
            strSql.Append(" where  ");

            OracleParameter[] parameters = {
			            new OracleParameter(":DEVICECODE", OracleType.Char,6) ,            
                        new OracleParameter(":DATETIME", OracleType.DateTime) ,            
                        new OracleParameter(":SENDNUM", OracleType.Number,22) ,            
                        new OracleParameter(":RECVNUM", OracleType.Number,22) ,            
                        new OracleParameter(":WATERTEM", OracleType.Number,16) ,            
                        new OracleParameter(":SALINITY", OracleType.Number,16) ,            
                        new OracleParameter(":CONDUCTIVITY", OracleType.Number,16) ,            
                        new OracleParameter(":OXYGEN", OracleType.Number,16) ,            
                        new OracleParameter(":PH", OracleType.Number,16) ,            
                        new OracleParameter(":TURBIDITY", OracleType.Number,16) ,            
                        new OracleParameter(":UNDERWATERCO2", OracleType.Number,22) ,            
                        new OracleParameter(":OXYGENCHEMICAL", OracleType.Number,16) ,            
                        new OracleParameter(":MNO4", OracleType.Number,16) ,            
                        new OracleParameter(":OXYGENBIOLOGY", OracleType.Number,16) ,            
                        new OracleParameter(":NH3N", OracleType.Number,16) ,            
                        new OracleParameter(":NO3", OracleType.Number,16) ,            
                        new OracleParameter(":NO2", OracleType.Number,16) ,            
                        new OracleParameter(":PO4", OracleType.Number,16) ,            
                        new OracleParameter(":SIO3", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV0", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV1", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV2", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV3", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV4", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV5", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV6", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV7", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV8", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV9", OracleType.Number,16) ,            
                        new OracleParameter(":P", OracleType.Number,16) ,            
                        new OracleParameter(":N", OracleType.Number,16) ,            
                        new OracleParameter(":C", OracleType.Number,16) ,            
                        new OracleParameter(":S", OracleType.Number,16) ,            
                        new OracleParameter(":SUSPENSION", OracleType.Number,16) ,            
                        new OracleParameter(":CYANIDE", OracleType.Number,16) ,            
                        new OracleParameter(":HG", OracleType.Number,16) ,            
                        new OracleParameter(":CR", OracleType.Number,16) ,            
                        new OracleParameter(":CR6", OracleType.Number,16) ,            
                        new OracleParameter(":PB", OracleType.Number,16) ,            
                        new OracleParameter(":AS", OracleType.Number,16) ,            
                        new OracleParameter(":YLSA", OracleType.Number,16) ,            
                        new OracleParameter(":PHYCOCY", OracleType.Number,16) ,            
                        new OracleParameter(":PHYCOER", OracleType.Number,16) ,            
                        new OracleParameter(":COLIFORM", OracleType.Number,16) ,            
                        new OracleParameter(":POTENTIAL", OracleType.Number,16) ,            
                        new OracleParameter(":TOTALY", OracleType.Number,16) ,            
                        new OracleParameter(":K40", OracleType.Number,16) ,            
                        new OracleParameter(":CS134", OracleType.Number,16) ,            
                        new OracleParameter(":CS137", OracleType.Number,16) ,            
                        new OracleParameter(":CO60", OracleType.Number,16) ,            
                        new OracleParameter(":CU", OracleType.Number,16) ,            
                        new OracleParameter(":ZN", OracleType.Number,16) ,            
                        new OracleParameter(":PHENOL", OracleType.Number,16) ,            
                        new OracleParameter(":BOD5", OracleType.Number,16) ,            
                        new OracleParameter(":ORGANIC", OracleType.Number,16) ,            
                        new OracleParameter(":DETERGENTS", OracleType.Number,16) ,            
                        new OracleParameter(":OIL", OracleType.Number,16) ,            
                        new OracleParameter(":VIRUS", OracleType.Number,22) ,            
                        new OracleParameter(":PETRO", OracleType.Number,16) ,            
                        new OracleParameter(":DDT", OracleType.Number,16) ,            
                        new OracleParameter(":PCBS", OracleType.Number,16) ,            
                        new OracleParameter(":BENZOL", OracleType.Number,16) ,            
                        new OracleParameter(":CHLO", OracleType.Number,16) ,            
                        new OracleParameter(":ANTIBIOTIC", OracleType.Number,16) ,            
                        new OracleParameter(":POISONA", OracleType.Number,16) ,            
                        new OracleParameter(":POISONB", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV10", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV11", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV12", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV13", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV14", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV15", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV16", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV17", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV18", OracleType.Number,16) ,            
                        new OracleParameter(":RESERV19", OracleType.Number,16) ,            
                        new OracleParameter(":DEPTH", OracleType.Number,16) ,            
                        new OracleParameter(":WATERLEVEL", OracleType.Number,16) ,            
                        new OracleParameter(":CURRENTSPD", OracleType.Number,16) ,            
                        new OracleParameter(":CURRENTDIR", OracleType.Number,22) ,            
                        new OracleParameter(":CURRENTVOL", OracleType.Number,22) ,            
                        new OracleParameter(":CD", OracleType.Number,16) ,            
                        new OracleParameter(":F", OracleType.Number,16) ,            
                        new OracleParameter(":NI", OracleType.Number,16)             
              
            };

            parameters[0].Value = model.DEVICECODE;
            parameters[1].Value = model.DATETIME;
            parameters[2].Value = model.SENDNUM;
            parameters[3].Value = model.RECVNUM;
            parameters[4].Value = model.WATERTEM;
            parameters[5].Value = model.SALINITY;
            parameters[6].Value = model.CONDUCTIVITY;
            parameters[7].Value = model.OXYGEN;
            parameters[8].Value = model.PH;
            parameters[9].Value = model.TURBIDITY;
            parameters[10].Value = model.UNDERWATERCO2;
            parameters[11].Value = model.OXYGENCHEMICAL;
            parameters[12].Value = model.MNO4;
            parameters[13].Value = model.OXYGENBIOLOGY;
            parameters[14].Value = model.NH3N;
            parameters[15].Value = model.NO3;
            parameters[16].Value = model.NO2;
            parameters[17].Value = model.PO4;
            parameters[18].Value = model.SIO3;
            parameters[19].Value = model.RESERV0;
            parameters[20].Value = model.RESERV1;
            parameters[21].Value = model.RESERV2;
            parameters[22].Value = model.RESERV3;
            parameters[23].Value = model.RESERV4;
            parameters[24].Value = model.RESERV5;
            parameters[25].Value = model.RESERV6;
            parameters[26].Value = model.RESERV7;
            parameters[27].Value = model.RESERV8;
            parameters[28].Value = model.RESERV9;
            parameters[29].Value = model.P;
            parameters[30].Value = model.N;
            parameters[31].Value = model.C;
            parameters[32].Value = model.S;
            parameters[33].Value = model.SUSPENSION;
            parameters[34].Value = model.CYANIDE;
            parameters[35].Value = model.HG;
            parameters[36].Value = model.CR;
            parameters[37].Value = model.CR6;
            parameters[38].Value = model.PB;
            parameters[39].Value = model.AS;
            parameters[40].Value = model.YLSA;
            parameters[41].Value = model.PHYCOCY;
            parameters[42].Value = model.PHYCOER;
            parameters[43].Value = model.COLIFORM;
            parameters[44].Value = model.POTENTIAL;
            parameters[45].Value = model.TOTALY;
            parameters[46].Value = model.K40;
            parameters[47].Value = model.CS134;
            parameters[48].Value = model.CS137;
            parameters[49].Value = model.CO60;
            parameters[50].Value = model.CU;
            parameters[51].Value = model.ZN;
            parameters[52].Value = model.PHENOL;
            parameters[53].Value = model.BOD5;
            parameters[54].Value = model.ORGANIC;
            parameters[55].Value = model.DETERGENTS;
            parameters[56].Value = model.OIL;
            parameters[57].Value = model.VIRUS;
            parameters[58].Value = model.PETRO;
            parameters[59].Value = model.DDT;
            parameters[60].Value = model.PCBS;
            parameters[61].Value = model.BENZOL;
            parameters[62].Value = model.CHLO;
            parameters[63].Value = model.ANTIBIOTIC;
            parameters[64].Value = model.POISONA;
            parameters[65].Value = model.POISONB;
            parameters[66].Value = model.RESERV10;
            parameters[67].Value = model.RESERV11;
            parameters[68].Value = model.RESERV12;
            parameters[69].Value = model.RESERV13;
            parameters[70].Value = model.RESERV14;
            parameters[71].Value = model.RESERV15;
            parameters[72].Value = model.RESERV16;
            parameters[73].Value = model.RESERV17;
            parameters[74].Value = model.RESERV18;
            parameters[75].Value = model.RESERV19;
            parameters[76].Value = model.DEPTH;
            parameters[77].Value = model.WATERLEVEL;
            parameters[78].Value = model.CURRENTSPD;
            parameters[79].Value = model.CURRENTDIR;
            parameters[80].Value = model.CURRENTVOL;
            parameters[81].Value = model.CD;
            parameters[82].Value = model.F;
            parameters[83].Value = model.NI;
            int rows = dbHelper.ExecuteNonQuery(strSql.ToString(), parameters);
            if (rows > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        /// <summary>
        /// 删除一条数据
        /// </summary>
        public bool Delete()
        {

            StringBuilder strSql = new StringBuilder();
            DbAPI dbHelper = new DbAPI();
            strSql.Append("delete from TABECOLOGY ");
            strSql.Append(" where ");
            OracleParameter[] parameters = {
			};


            int rows = dbHelper.ExecuteNonQuery(strSql.ToString(), parameters);
            if (rows > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }



        /// <summary>
        /// 获取岸基站的生态数据
        /// </summary>
        public Entity.TABECOLOGY GetModel(string deviceCode)
        {

            StringBuilder strSql = new StringBuilder();
            DbAPI dbHelper = new DbAPI();
            strSql.Append(" SELECT WATERTEM, SALINITY, CONDUCTIVITY, OXYGEN, PH, TURBIDITY, UNDERWATERCO2, OXYGENCHEMICAL, MNO4, OXYGENBIOLOGY, NH3N, NO3, NO2, PO4, SIO3, 'P', N, C, S, SUSPENSION, CYANIDE, HG, CR, CR6, PB, 'AS', YLSA, PHYCOCY, PHYCOER, COLIFORM, POTENTIAL, TOTALY, K40, CS134, CS137, CO60, CU, ZN, PHENOL, BOD5, ORGANIC, DETERGENTS, OIL, VIRUS, PETRO, DDT, PCBS, BENZOL, CHLO, ANTIBIOTIC, POISONA, POISONB,  DEPTH, WATERLEVEL, CURRENTSPD, CURRENTDIR, CURRENTVOL, CD, F, NI ");
            strSql.Append(" FROM TABECOLOGY ");
            strSql.Append(" WHERE DEVICECODE=:DEVICECODE");
            strSql.Append(" AND DATETIME=(SELECT MAX(DATETIME) DATETIME FROM TABECOLOGY WHERE DEVICECODE=:DEVICECODE) ");
            OracleParameter[] parameters = {
                    new OracleParameter(":DEVICECODE",deviceCode)
			};


            Entity.TABECOLOGY model = new Entity.TABECOLOGY();
            DataTable ds = dbHelper.GetDataTable(strSql.ToString(), parameters);

            if (ds.Rows.Count > 0)
            {
                //model.DEVICECODE = ds.Rows[0]["DEVICECODE"].ToString();
                if (ds.Rows[0]["WATERTEM"].ToString() != "")
                {
                    model.WATERTEM = decimal.Parse(ds.Rows[0]["WATERTEM"].ToString());
                }
                if (ds.Rows[0]["SALINITY"].ToString() != "")
                {
                    model.SALINITY = decimal.Parse(ds.Rows[0]["SALINITY"].ToString());
                }
                if (ds.Rows[0]["CONDUCTIVITY"].ToString() != "")
                {
                    model.CONDUCTIVITY = decimal.Parse(ds.Rows[0]["CONDUCTIVITY"].ToString());
                }
                if (ds.Rows[0]["OXYGEN"].ToString() != "")
                {
                    model.OXYGEN = decimal.Parse(ds.Rows[0]["OXYGEN"].ToString());
                }
                if (ds.Rows[0]["PH"].ToString() != "")
                {
                    model.PH = decimal.Parse(ds.Rows[0]["PH"].ToString());
                }
                if (ds.Rows[0]["TURBIDITY"].ToString() != "")
                {
                    model.TURBIDITY = decimal.Parse(ds.Rows[0]["TURBIDITY"].ToString());
                }
                if (ds.Rows[0]["UNDERWATERCO2"].ToString() != "")
                {
                    model.UNDERWATERCO2 = decimal.Parse(ds.Rows[0]["UNDERWATERCO2"].ToString());
                }
                if (ds.Rows[0]["OXYGENCHEMICAL"].ToString() != "")
                {
                    model.OXYGENCHEMICAL = decimal.Parse(ds.Rows[0]["OXYGENCHEMICAL"].ToString());
                }
                if (ds.Rows[0]["MNO4"].ToString() != "")
                {
                    model.MNO4 = decimal.Parse(ds.Rows[0]["MNO4"].ToString());
                }
                if (ds.Rows[0]["OXYGENBIOLOGY"].ToString() != "")
                {
                    model.OXYGENBIOLOGY = decimal.Parse(ds.Rows[0]["OXYGENBIOLOGY"].ToString());
                }
                if (ds.Rows[0]["NH3N"].ToString() != "")
                {
                    model.NH3N = decimal.Parse(ds.Rows[0]["NH3N"].ToString());
                }
                if (ds.Rows[0]["NO3"].ToString() != "")
                {
                    model.NO3 = decimal.Parse(ds.Rows[0]["NO3"].ToString());
                }
                if (ds.Rows[0]["NO2"].ToString() != "")
                {
                    model.NO2 = decimal.Parse(ds.Rows[0]["NO2"].ToString());
                }
                if (ds.Rows[0]["PO4"].ToString() != "")
                {
                    model.PO4 = decimal.Parse(ds.Rows[0]["PO4"].ToString());
                }
                if (ds.Rows[0]["SIO3"].ToString() != "")
                {
                    model.SIO3 = decimal.Parse(ds.Rows[0]["SIO3"].ToString());
                }
                if (ds.Rows[0]["P"].ToString() != "")
                {
                    model.P = decimal.Parse(ds.Rows[0]["P"].ToString());
                }
                if (ds.Rows[0]["N"].ToString() != "")
                {
                    model.N = decimal.Parse(ds.Rows[0]["N"].ToString());
                }
                if (ds.Rows[0]["C"].ToString() != "")
                {
                    model.C = decimal.Parse(ds.Rows[0]["C"].ToString());
                }
                if (ds.Rows[0]["S"].ToString() != "")
                {
                    model.S = decimal.Parse(ds.Rows[0]["S"].ToString());
                }
                if (ds.Rows[0]["SUSPENSION"].ToString() != "")
                {
                    model.SUSPENSION = decimal.Parse(ds.Rows[0]["SUSPENSION"].ToString());
                }
                if (ds.Rows[0]["CYANIDE"].ToString() != "")
                {
                    model.CYANIDE = decimal.Parse(ds.Rows[0]["CYANIDE"].ToString());
                }
                if (ds.Rows[0]["HG"].ToString() != "")
                {
                    model.HG = decimal.Parse(ds.Rows[0]["HG"].ToString());
                }
                if (ds.Rows[0]["CR"].ToString() != "")
                {
                    model.CR = decimal.Parse(ds.Rows[0]["CR"].ToString());
                }
                if (ds.Rows[0]["CR6"].ToString() != "")
                {
                    model.CR6 = decimal.Parse(ds.Rows[0]["CR6"].ToString());
                }
                if (ds.Rows[0]["PB"].ToString() != "")
                {
                    model.PB = decimal.Parse(ds.Rows[0]["PB"].ToString());
                }
                if (ds.Rows[0]["AS"].ToString() != "")
                {
                    model.AS = decimal.Parse(ds.Rows[0]["AS"].ToString());
                }
                if (ds.Rows[0]["YLSA"].ToString() != "")
                {
                    model.YLSA = decimal.Parse(ds.Rows[0]["YLSA"].ToString());
                }
                if (ds.Rows[0]["PHYCOCY"].ToString() != "")
                {
                    model.PHYCOCY = decimal.Parse(ds.Rows[0]["PHYCOCY"].ToString());
                }
                if (ds.Rows[0]["PHYCOER"].ToString() != "")
                {
                    model.PHYCOER = decimal.Parse(ds.Rows[0]["PHYCOER"].ToString());
                }
                if (ds.Rows[0]["COLIFORM"].ToString() != "")
                {
                    model.COLIFORM = decimal.Parse(ds.Rows[0]["COLIFORM"].ToString());
                }
                if (ds.Rows[0]["POTENTIAL"].ToString() != "")
                {
                    model.POTENTIAL = decimal.Parse(ds.Rows[0]["POTENTIAL"].ToString());
                }
                if (ds.Rows[0]["TOTALY"].ToString() != "")
                {
                    model.TOTALY = decimal.Parse(ds.Rows[0]["TOTALY"].ToString());
                }
                if (ds.Rows[0]["K40"].ToString() != "")
                {
                    model.K40 = decimal.Parse(ds.Rows[0]["K40"].ToString());
                }
                if (ds.Rows[0]["CS134"].ToString() != "")
                {
                    model.CS134 = decimal.Parse(ds.Rows[0]["CS134"].ToString());
                }
                if (ds.Rows[0]["CS137"].ToString() != "")
                {
                    model.CS137 = decimal.Parse(ds.Rows[0]["CS137"].ToString());
                }
                if (ds.Rows[0]["CO60"].ToString() != "")
                {
                    model.CO60 = decimal.Parse(ds.Rows[0]["CO60"].ToString());
                }
                if (ds.Rows[0]["CU"].ToString() != "")
                {
                    model.CU = decimal.Parse(ds.Rows[0]["CU"].ToString());
                }
                if (ds.Rows[0]["ZN"].ToString() != "")
                {
                    model.ZN = decimal.Parse(ds.Rows[0]["ZN"].ToString());
                }
                if (ds.Rows[0]["PHENOL"].ToString() != "")
                {
                    model.PHENOL = decimal.Parse(ds.Rows[0]["PHENOL"].ToString());
                }
                if (ds.Rows[0]["BOD5"].ToString() != "")
                {
                    model.BOD5 = decimal.Parse(ds.Rows[0]["BOD5"].ToString());
                }
                if (ds.Rows[0]["ORGANIC"].ToString() != "")
                {
                    model.ORGANIC = decimal.Parse(ds.Rows[0]["ORGANIC"].ToString());
                }
                if (ds.Rows[0]["DETERGENTS"].ToString() != "")
                {
                    model.DETERGENTS = decimal.Parse(ds.Rows[0]["DETERGENTS"].ToString());
                }
                if (ds.Rows[0]["OIL"].ToString() != "")
                {
                    model.OIL = decimal.Parse(ds.Rows[0]["OIL"].ToString());
                }
                if (ds.Rows[0]["VIRUS"].ToString() != "")
                {
                    model.VIRUS = decimal.Parse(ds.Rows[0]["VIRUS"].ToString());
                }
                if (ds.Rows[0]["PETRO"].ToString() != "")
                {
                    model.PETRO = decimal.Parse(ds.Rows[0]["PETRO"].ToString());
                }
                if (ds.Rows[0]["DDT"].ToString() != "")
                {
                    model.DDT = decimal.Parse(ds.Rows[0]["DDT"].ToString());
                }
                if (ds.Rows[0]["PCBS"].ToString() != "")
                {
                    model.PCBS = decimal.Parse(ds.Rows[0]["PCBS"].ToString());
                }
                if (ds.Rows[0]["BENZOL"].ToString() != "")
                {
                    model.BENZOL = decimal.Parse(ds.Rows[0]["BENZOL"].ToString());
                }
                if (ds.Rows[0]["CHLO"].ToString() != "")
                {
                    model.CHLO = decimal.Parse(ds.Rows[0]["CHLO"].ToString());
                }
                if (ds.Rows[0]["ANTIBIOTIC"].ToString() != "")
                {
                    model.ANTIBIOTIC = decimal.Parse(ds.Rows[0]["ANTIBIOTIC"].ToString());
                }
                if (ds.Rows[0]["POISONA"].ToString() != "")
                {
                    model.POISONA = decimal.Parse(ds.Rows[0]["POISONA"].ToString());
                }
                if (ds.Rows[0]["POISONB"].ToString() != "")
                {
                    model.POISONB = decimal.Parse(ds.Rows[0]["POISONB"].ToString());
                }
                if (ds.Rows[0]["DEPTH"].ToString() != "")
                {
                    model.DEPTH = decimal.Parse(ds.Rows[0]["DEPTH"].ToString());
                }
                if (ds.Rows[0]["WATERLEVEL"].ToString() != "")
                {
                    model.WATERLEVEL = decimal.Parse(ds.Rows[0]["WATERLEVEL"].ToString());
                }
                if (ds.Rows[0]["CURRENTSPD"].ToString() != "")
                {
                    model.CURRENTSPD = decimal.Parse(ds.Rows[0]["CURRENTSPD"].ToString());
                }
                if (ds.Rows[0]["CURRENTDIR"].ToString() != "")
                {
                    model.CURRENTDIR = decimal.Parse(ds.Rows[0]["CURRENTDIR"].ToString());
                }
                if (ds.Rows[0]["CURRENTVOL"].ToString() != "")
                {
                    model.CURRENTVOL = decimal.Parse(ds.Rows[0]["CURRENTVOL"].ToString());
                }
                if (ds.Rows[0]["CD"].ToString() != "")
                {
                    model.CD = decimal.Parse(ds.Rows[0]["CD"].ToString());
                }
                if (ds.Rows[0]["F"].ToString() != "")
                {
                    model.F = decimal.Parse(ds.Rows[0]["F"].ToString());
                }
                if (ds.Rows[0]["NI"].ToString() != "")
                {
                    model.NI = decimal.Parse(ds.Rows[0]["NI"].ToString());
                }

                return model;
            }
            else
            {
                return null;
            }
        }


        /// <summary>
        /// 获得数据列表
        /// </summary>
        public DataTable GetList(string strWhere)
        {
            StringBuilder strSql = new StringBuilder();
            DbAPI dbHelper = new DbAPI();
            OracleParameter[] parameters = null;
            strSql.Append("select * ");
            strSql.Append(" FROM TABECOLOGY ");
            if (strWhere.Trim() != "")
            {
                strSql.Append(" where " + strWhere);
            }
            return dbHelper.GetDataTable(strSql.ToString(), parameters);
        }

        /// <summary>
        /// 获得前几行数据
        /// </summary>
        public DataTable GetList(int Top, string strWhere, string filedOrder)
        {
            StringBuilder strSql = new StringBuilder();
            DbAPI dbHelper = new DbAPI();
            OracleParameter[] parameters = null;
            strSql.Append("select ");
            if (Top > 0)
            {
                strSql.Append(" top " + Top.ToString());
            }
            strSql.Append(" * ");
            strSql.Append(" FROM TABECOLOGY ");
            if (strWhere.Trim() != "")
            {
                strSql.Append(" where " + strWhere);
            }
            strSql.Append(" order by " + filedOrder);
            return dbHelper.GetDataTable(strSql.ToString(), parameters);
        }


    }
}
