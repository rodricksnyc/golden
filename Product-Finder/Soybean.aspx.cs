using System;
using System.Web;
using GoldenHarvest.BusinessLogic;
using GoldenHarvest.BusinessLogic.CommonUtilities;
using GoldenHarvest.BusinessLogic.Interfaces;
using GoldenHarvest.BusinessLogic.SessionManager;

namespace Golden_Harvest
{
    public partial class Soybean : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {

                string brands = string.Empty;
                string herbicides = string.Empty;
                string diseases = string.Empty;
                string nematodes = string.Empty;
                string agroPlantChars = string.Empty;
                string plantHeights = string.Empty;
                Session["prodName"] = string.Empty;

                if (SessionManager.Get<string>("FromMaturityDaysGHSoy") != null)
                {
                    if (!string.IsNullOrEmpty(SessionManager.Get<string>("FromMaturityDaysGHSoy")))
                    {
                        txtRmFrom.Value = SessionManager.Get<string>("FromMaturityDaysGHSoy");
                    }
                }
                if (SessionManager.Get<string>("ToMaturityDaysGHSoy") != null)
                {
                    if (!string.IsNullOrEmpty(SessionManager.Get<string>("ToMaturityDaysGHSoy")))
                    {
                        txtRmTo.Value = SessionManager.Get<string>("ToMaturityDaysGHSoy");
                    }
                }
                if (string.IsNullOrEmpty(txtRmFrom.Value))
                {
                    txtRmFrom.Value = "2.5";
                }
                if (string.IsNullOrEmpty(txtRmTo.Value))
                {
                    txtRmTo.Value = "3.5";
                }
                if (Request.QueryString["Filters"] == null)
                {
                    SetProductSection(1, txtRmFrom.Value, txtRmTo.Value, string.Empty, string.Empty, string.Empty, string.Empty, string.Empty, "Golden Harvest", string.Empty);
                }
            }
            finally
            {

            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="countSoyBean"></param>
        /// <param name="rmLowerRange"></param>
        /// <param name="rmUpperRange"></param>
        /// <param name="herbicideTolerance"></param>
        /// <param name="diseaseFilter"></param>
        /// <param name="nematodeFilter"></param>
        /// <param name="agroPlantCharFilter"></param>
        /// <param name="plantHeightFilter"></param>
        /// <param name="brands"></param>
        private void SetProductSection(int countSoyBean, string relativeLowerRange, string relativeUpperRange, string herbicideTolerance, string diseaseFilter, string nematodeFilter, string agroPlantCharFilter, string plantHeightFilter, string brands, string goldseriesFilter)
        {
            ISoybeanProduct product = null;
            try
            {
                product = new SoybeanProduct();

                string productResult = product.GetSoyBeanProducts(countSoyBean, relativeLowerRange, relativeUpperRange, herbicideTolerance, diseaseFilter, nematodeFilter, agroPlantCharFilter, plantHeightFilter, brands, goldseriesFilter);

                if (!string.IsNullOrEmpty(productResult))
                {
                    char[] delimiterChars = { '@' };
                    string[] dvResults = productResult.Split(delimiterChars);
                    divsoybeanproductfinder.InnerHtml = (!string.IsNullOrEmpty(dvResults[0])) ? dvResults[0] : string.Empty;
                    divCount.InnerHtml = (!string.IsNullOrEmpty(dvResults[1])) ? dvResults[1] : string.Empty;
                    divViewMoreResult.InnerHtml = (!string.IsNullOrEmpty(dvResults[3])) ? dvResults[3] : string.Empty;
                    dvrecordcount.InnerHtml = (!string.IsNullOrEmpty(dvResults[1])) ? dvResults[1] : string.Empty;
                }
                else
                {
                    divsoybeanproductfinder.InnerHtml = string.Empty;

                    divViewMoreResult.InnerHtml = string.Empty;
                    divMessage.InnerHtml = "Sorry, we couldn\'t find any matches. Please adjust one or more options and search again.";
                }
            }
            finally
            {

            }
        }


        /// <summary>
        /// Method to fetch the list of soybean products
        /// </summary>
        /// <returns></returns>
        [System.Web.Services.WebMethod]
        public static string GetProducts(string soyaBeanCount, string relativeLowerRange, string relativeUpperRange, string herbicideTolerance, string diseaseFilter, string nematodeFilter, string agroPlantCharFilter, string plantHeightFilter, string brands, string browserUrl, string goldseries)
        {
            ISoybeanProduct product = null;
            try
            {
                product = new SoybeanProduct();
                if (!string.IsNullOrEmpty(browserUrl))
                {
                    if (browserUrl.Contains("/soybeans/product-finder"))
                    {
                        HttpContext.Current.Session["FromMaturityDaysGHSoy"] = ((!string.IsNullOrEmpty(relativeLowerRange)) && CommonUtility.IsDecimalValue(relativeLowerRange)) ? relativeLowerRange : HttpContext.Current.Session["FromMaturityDaysGHSoy"];
                        HttpContext.Current.Session["ToMaturityDaysGHSoy"] = ((!string.IsNullOrEmpty(relativeUpperRange)) && CommonUtility.IsDecimalValue(relativeUpperRange)) ? relativeUpperRange : HttpContext.Current.Session["ToMaturityDaysGHSoy"];
                    }
                }
                SessionManager.Save<string>("herbicideTolerance", herbicideTolerance);
                SessionManager.Save<string>("diseaseFilter", diseaseFilter);
                SessionManager.Save<string>("nematodeFilter", nematodeFilter);
                SessionManager.Save<string>("agroPlantCharFilter", agroPlantCharFilter);
                SessionManager.Save<string>("plantHeightFilter", plantHeightFilter);
                SessionManager.Save<string>("SoyBrand", brands);
                SessionManager.Save<string>("goldseriesFilter", goldseries);
                if (CommonUtility.IsDecimalValue(relativeLowerRange) && CommonUtility.IsDecimalValue(relativeUpperRange))
                {
                    return product.GetSoyBeanProducts(Convert.ToInt32(soyaBeanCount), relativeLowerRange, relativeUpperRange, herbicideTolerance, diseaseFilter, nematodeFilter, agroPlantCharFilter, plantHeightFilter, brands, goldseries);
                }
                return product.GetSoyBeanProducts(Convert.ToInt32(soyaBeanCount), Convert.ToString(HttpContext.Current.Session["FromMaturityDaysGHSoy"]), Convert.ToString(HttpContext.Current.Session["ToMaturityDaysGHSoy"]), herbicideTolerance, diseaseFilter, nematodeFilter, agroPlantCharFilter, plantHeightFilter, brands, goldseries);
            }
            finally { }
        }

        /// <summary>
        /// Method to set session values
        /// </summary>
        /// <param name="prodName"></param>
        /// <returns></returns>
        [System.Web.Services.WebMethod]
        public static string SetSession(string prodName)
        {
            try
            {
                if (CommonUtility.IsAlphaNumericValue(prodName))
                {
                    SessionManager.Save<string>("ProdNameSoy", prodName);
                }
                return "";
            }
            finally { }
        }

    }
}