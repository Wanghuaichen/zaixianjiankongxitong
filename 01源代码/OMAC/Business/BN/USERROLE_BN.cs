﻿using System;
using System.Text;
using System.Data.OracleClient;
using System.Data;
using Entity;

namespace Business.BN
{
    public class USERROLE_BN
    {



        public bool Exists(string F_ID)
        {
            StringBuilder strSql = new StringBuilder();
            DbAPI dbHelper = new DbAPI();
            strSql.Append("select count(1) from USERROLE");
            strSql.Append(" where ");
            strSql.Append(" F_ID = :F_ID  ");
            OracleParameter[] parameters =
            {
                new OracleParameter(":F_ID", OracleType.VarChar, 36)
            };
            parameters[0].Value = F_ID;

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
        public void Add(USERROLE model)
        {
            StringBuilder strSql = new StringBuilder();
            DbAPI dbHelper = new DbAPI();
            strSql.Append("insert into USERROLE(");
            strSql.Append("F_ID,F_ACCOUNT,F_ROLECODE");
            strSql.Append(") values (");
            strSql.Append(":F_ID,:F_ACCOUNT,:F_ROLECODE");
            strSql.Append(") ");

            OracleParameter[] parameters =
            {
                new OracleParameter(":F_ID", OracleType.VarChar, 36),
                new OracleParameter(":F_ACCOUNT", OracleType.VarChar, 36),
                new OracleParameter(":F_ROLECODE", OracleType.VarChar, 36)

            };

            parameters[0].Value = model.F_ID;
            parameters[1].Value = model.F_ACCOUNT;
            parameters[2].Value = model.F_ROLECODE;
            dbHelper.ExecuteNonQuery(strSql.ToString(), parameters);

        }


        /// <summary>
        /// 更新一条数据
        /// </summary>
        public bool Update(USERROLE model)
        {
            StringBuilder strSql = new StringBuilder();
            DbAPI dbHelper = new DbAPI();
            strSql.Append("update USERROLE set ");

            strSql.Append(" F_ID = :F_ID , ");
            strSql.Append(" F_ACCOUNT = :F_ACCOUNT , ");
            strSql.Append(" F_ROLECODE = :F_ROLECODE  ");
            strSql.Append(" where F_ID=:F_ID  ");

            OracleParameter[] parameters =
            {
                new OracleParameter(":F_ID", OracleType.VarChar, 36),
                new OracleParameter(":F_ACCOUNT", OracleType.VarChar, 36),
                new OracleParameter(":F_ROLECODE", OracleType.VarChar, 36)

            };

            parameters[0].Value = model.F_ID;
            parameters[1].Value = model.F_ACCOUNT;
            parameters[2].Value = model.F_ROLECODE;
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
        public bool Delete(string F_ID)
        {

            StringBuilder strSql = new StringBuilder();
            DbAPI dbHelper = new DbAPI();
            strSql.Append("delete from USERROLE ");
            strSql.Append(" where F_ID=:F_ID ");
            OracleParameter[] parameters =
            {
                new OracleParameter(":F_ID", OracleType.VarChar, 36)
            };
            parameters[0].Value = F_ID;


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
        /// 得到一个对象实体
        /// </summary>
        public USERROLE GetModel(string F_ID)
        {

            StringBuilder strSql = new StringBuilder();
            DbAPI dbHelper = new DbAPI();
            strSql.Append("select F_ID, F_ACCOUNT, F_ROLECODE  ");
            strSql.Append("  from USERROLE ");
            strSql.Append(" where F_ID=:F_ID ");
            OracleParameter[] parameters =
            {
                new OracleParameter(":F_ID", OracleType.VarChar, 36)
            };
            parameters[0].Value = F_ID;


            USERROLE model = new USERROLE();
            DataTable ds = dbHelper.GetDataTable(strSql.ToString(), parameters);

            if (ds.Rows.Count > 0)
            {
                model.F_ID = ds.Rows[0]["F_ID"].ToString();
                model.F_ACCOUNT = ds.Rows[0]["F_ACCOUNT"].ToString();
                model.F_ROLECODE = ds.Rows[0]["F_ROLECODE"].ToString();

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
            strSql.Append(" FROM USERROLE ");
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
            strSql.Append(" FROM USERROLE ");
            if (strWhere.Trim() != "")
            {
                strSql.Append(" where " + strWhere);
            }
            strSql.Append(" order by " + filedOrder);
            return dbHelper.GetDataTable(strSql.ToString(), parameters);
        }



        /// <summary>
        /// (分页查询)从数据库中获取角色列表
        /// </summary>
        /// <param name="queryModel">查询条件</param>
        /// <returns>返回角色列表</returns>
        public DataTable GetRoleList(Entity.System.view.QueryModel queryModel)
        {
            try
            {
                var roleName = queryModel.roleName ?? "";
                var pageNumber = queryModel.offset / queryModel.limit + 1;
                var pageSize = queryModel.limit;

                var strSql = new StringBuilder();
                strSql.Append("select t.*,COUNT(*) OVER () RESULT_COUNT from ROLEINFO t where t.f_name like '%'||:roleName||'%'");

                OracleParameter[] parameters =
                {
                    new OracleParameter(":roleName", roleName)
                };
                var dbapi = new DbAPI();
                dbapi.OpenConn("");
                var rst = dbapi.GetDataTable(DbAPI.GeneratePagingSql(strSql.ToString(), pageNumber, pageSize), parameters);
                dbapi.CloseConn();
                return rst;
            }
            catch (Exception ex)
            {
                LogBN.WriteLog(typeof(USERROLE_BN), "(分页查询)从数据库中获取角色列表GetRoleList 程序段的异常" + ex);
                return null;
            }
        }

        /// <summary>
        /// 导出角色列表到Excel
        /// </summary>
        /// <param name="queryModel">查询参数</param>
        public DataTable GetExcelList(Entity.System.view.QueryModel queryModel)
        {
            try
            {
                var roleName = string.IsNullOrWhiteSpace(queryModel.roleName) ? "" : queryModel.roleName;
                var strSql = "select f_rolecode \"编号\",f_name \"名称\",f_description \"备注\" from ROLEINFO where f_name like '%' || :roleName || '%'";

                OracleParameter[] parameters =
                {
                    new OracleParameter(":roleName", roleName)
                };
                var dbapi = new DbAPI();
                dbapi.OpenConn("");
                var rst = dbapi.GetDataTable(strSql, parameters);
                dbapi.CloseConn();
                return rst;
            }
            catch (Exception ex)
            {
                LogBN.WriteLog(typeof(MonitorLog), "导出角色列表到Excel方法GetExcelList 程序段的异常" + ex);
                return null;
            }

        }

        /// <summary>
        /// 删除角色
        /// </summary>
        /// <param name="id">角色ID</param>
        /// <returns>是否成功的JSON结果</returns>
        public bool DeleteRole(string id)
        {
            try
            {
                OracleParameter[] parameters =
                {
                    new OracleParameter("p_roleCode", id)
                };

                var dbapi = new DbAPI();
                dbapi.OpenConn("");
                var rst = dbapi.ExecuteNonQueryByProcedure("DeleteRole", parameters);
                dbapi.CloseConn();

                return rst > 0;
            }
            catch (Exception ex)
            {
                LogBN.WriteLog(typeof(MonitorLog), "删除部门AddDepartment 程序段的异常" + ex);
                return false;
            }
        }

        /// <summary>
        /// 验证用户名是否存在
        /// </summary>
        /// <param name="userName">用户名</param>
        /// <returns>存在返回false,不存在返回true</returns>
        public bool ValidateUsername(string userName)
        {
            var strSql = new StringBuilder();
            strSql.Append("SELECT COUNT(1) FROM USERINFO WHERE UPPER(F_NAME) = UPPER(:F_NAME)");
            OracleParameter[] parms =
            {
                new OracleParameter("F_NAME", userName)
            };

            var dbHelper = new DbAPI();
            try
            {
                dbHelper.OpenConn("");
                var rstInt = dbHelper.ExecuteOracleScalar(strSql.ToString(), parms);
                dbHelper.CloseConn();
                return int.Parse(rstInt.ToString()) <= 0;
            }
            catch (Exception ex)
            {
                LogBN.WriteLog(typeof(ROLEINFO_BN), "验证用户名是否存在ValidateUsername 程序段的异常" + ex);
                return false;
            }
        }



    }
}

