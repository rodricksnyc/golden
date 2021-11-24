using System;
using System.Web;
using GoldenHarvest.BusinessLogic;
using GoldenHarvest.BusinessLogic.CommonUtilities;
using GoldenHarvest.BusinessLogic.SessionManager;

namespace Golden_Harvest.Product_Finder
{
    public partial class Corn : AbstractPage
    {
        /// <summary>
        /// Page load method of the class
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Page_Load(object sender, EventArgs e)
        {
            SetSessionValuesToMaturity();
        }

        /// <summary>
        /// Method to set Values to maturity
        /// </summary>
        /// <returns></returns>
        public void SetSessionValuesToMaturity()
        {
            try
            {
                Session["prodName"] = string.Empty;
                if (SessionManager.Get<string>("FromMaturityDaysCorn") != null)
                {
                    if (!string.IsNullOrEmpty(SessionManager.Get<string>("FromMaturityDaysCorn")))
                    {
                        txtRmFrom.Value = SessionManager.Get<string>("FromMaturityDaysCorn");
                    }
                }
                if (SessionManager.Get<string>("ToMaturityDaysCorn") != null)
                {
                    if (!string.IsNullOrEmpty(SessionManager.Get<string>("ToMaturityDaysCorn")))
                    {
                        txtRmTo.Value = SessionManager.Get<string>("ToMaturityDaysCorn");
                    }
                }
                if (string.IsNullOrEmpty(txtRmFrom.Value))
                {
                    txtRmFrom.Value = "105";
                }
                if (string.IsNullOrEmpty(txtRmTo.Value))
                {
                    txtRmTo.Value = "115";
                }
            }
            finally { }
        }


        ///// <summary>
        ///// Get Corn Products 
        ///// </summary>
        ///// <returns></returns>
        [System.Web.Services.WebMethod]
        public static string GetProducts(string cornCount, string relativeLowerRange, string relativeUpperRange, string brands, string agrisureTraits, string insectResistance, string herbicideTolerance, string waterOptimization, string reducedRefuge, string diseaseResistance, string silage, string goldenseriesFilter)
        {

            try
            {
                if (string.IsNullOrEmpty(brands))
                {
                    brands = "Golden Harvest";
                }
                else
                {
                    brands = brands.Replace("GH", "Golden Harvest");
                }
                if (CommonUtility.IsNumbericValue(relativeLowerRange) && CommonUtility.IsNumbericValue(relativeUpperRange))
                {
                    return new CornProduct().GetCornProducts(Convert.ToInt32(cornCount), relativeLowerRange, relativeUpperRange, brands, agrisureTraits, insectResistance, herbicideTolerance, waterOptimization, reducedRefuge, diseaseResistance, silage, goldenseriesFilter);
                }
                return new CornProduct().GetCornProducts(Convert.ToInt32(cornCount), Convert.ToString(HttpContext.Current.Session["FromMaturityDaysCorn"]), Convert.ToString(HttpContext.Current.Session["ToMaturityDaysCorn"]), brands, agrisureTraits, insectResistance, herbicideTolerance, waterOptimization, reducedRefuge, diseaseResistance, silage, goldenseriesFilter);
            }
            finally
            {
            }
        }

        /// <summary>
        /// Method to set the session values
        /// </summary>
        /// <param name="prodName"></param>
        /// <returns></returns>
        [System.Web.Services.WebMethod]
        public static string SetSession(string prodName)
        {
            if (CommonUtility.IsAlphaNumericValue(prodName))
            {
                HttpContext.Current.Session["ProdName"] = prodName;
            }
            return string.Empty;
        }

    }
}