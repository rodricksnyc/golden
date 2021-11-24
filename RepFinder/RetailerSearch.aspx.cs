using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web.Services;
using GoldenHarvest.BusinessEntities;
using GoldenHarvest.BusinessLogic;
using GoldenHarvest.BusinessLogic.Interfaces;

namespace Golden_Harvest.Rep_Finder
{
    public partial class RetailerSearch : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
            }
            finally { }
        }

        /// <summary>
        /// Method to get the retailers from ajax call
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        [WebMethod]
        public static List<RetailerBE> GetRetailers(string url, string lat, string lng)
        {
            string key = ConfigurationManager.AppSettings["ResellerApiKey"];
            string urlOption = ConfigurationManager.AppSettings["ZipCodeEndPoint"];
            List<RetailerBE> staticData = new List<RetailerBE>();
            List<RetailerBE> agData = new List<RetailerBE>();
            try
            {
                IRetailer retailer = new Retailer();
                bool isEnogen = Convert.ToBoolean(url.Substring(url.IndexOf(":") + 1));
                agData = retailer.GetRetailers(url.Substring(0, url.IndexOf(":")), key, urlOption, isEnogen);
                staticData = retailer.GetStaticRetailers(lat, lng);
                if (staticData != null && staticData.Count > 0)
                {
                    agData = agData.Concat(staticData).ToList().OrderBy(item => item.Distance).ToList();
                }
            }
            finally
            {

            }

            return agData;
        }

    }

}