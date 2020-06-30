using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace Trader.Models
{
    public class Idt
    {        
        public string m_idt { get; set; }
        public Idt(string p_idt)
        {
            this.m_idt = p_idt;
        }

        public Idt() { }

        public Idt fetchIdt(string p_code)
        {
            MySqlConnection v_connection = ConnectionDB.connection();
            MySqlCommand v_query = v_connection.CreateCommand();

            v_query.CommandText = "SELECT * FROM trader_invest.stocks s WHERE code = '"+ p_code +"'";

            var v_results = new Idt();

            v_connection.Open();

            MySqlDataReader m_fetchQuery = v_query.ExecuteReader();
            while (m_fetchQuery.Read())
            {               
                v_results = new Idt(m_fetchQuery["idt"].ToString());
            }
            v_connection.Close();

            return v_results;
        }
    }
}
