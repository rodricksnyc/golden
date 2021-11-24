using System;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using GoldenHarvest.BusinessEntities;
using GoldenHarvest.BusinessLogic;
using GoldenHarvest.BusinessLogic.CommonUtilities;
using GoldenHarvest.BusinessLogic.SessionManager;
using GoldenHarvest.Constant;

namespace Golden_Harvest.cornlanding
{
    public partial class Corn : System.Web.UI.Page
    {
        //Location location = new Location();
        private int _member = 0;
        private LocationBE locationEntity = new LocationBE();
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {

                if (!Page.IsPostBack)
                {
                    if ((SessionManager.Get<string>("FromMaturityDaysCorn") != null) && (SessionManager.Get<string>("ToMaturityDaysCorn") != null))
                    {
                        if (!string.IsNullOrEmpty(SessionManager.Get<string>("FromMaturityDaysCorn").ToString()) && !string.IsNullOrEmpty((SessionManager.Get<string>("ToMaturityDaysCorn").ToString())))
                        {
                            fromMaturity.Value = SessionManager.Get<string>("FromMaturityDaysCorn").ToString();
                            toMaturity.Value = SessionManager.Get<string>("ToMaturityDaysCorn").ToString();
                        }
                    }
                }
            }
            finally
            {

            }
        }
        [WebMethod]
        // [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public static string SetLocation(string state, string zipCode, string city, string latitude, string longitude)
        {
            Location location = new Location();
            LocationBE locationEntity = new LocationBE();
            try
            {
                //locationEntity = location.GetLocationByPostalCode(postalCode);
                SessionManager.Save<string>("UserLatitude", latitude);
                SessionManager.Save<string>("UserLongitude", longitude);
                SessionManager.Save<string>("UserPostalCode", zipCode);
                SessionManager.Save<string>("UserCity", city);
                SessionManager.Save<string>("UserState", state);

                return "1";
            }
            finally { }

        }


        /// <summary>
        /// method to set session for maturity days
        /// </summary>  
        /// <param name="fromDays">to fetch from maturity days </param>
        /// /// <param name="toDays">to fetch To maturity days </param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public static string SetSessionMaturityDays(string fromDays, string toDays)
        {
            int fromMaturityDays = 0;
            int toMaturityDays = 0;
            string success = "0";
            try
            {
                if (CommonUtility.IsNumbericValue(fromDays) && CommonUtility.IsNumbericValue(toDays))
                {
                    fromMaturityDays = Convert.ToInt32(fromDays);
                    toMaturityDays = Convert.ToInt32(toDays);
                    if (fromMaturityDays > toMaturityDays)
                    {
                        toMaturityDays = Convert.ToInt16(fromDays);
                        fromMaturityDays = Convert.ToInt16(toDays);
                    }
                    fromDays = fromMaturityDays.ToString();
                    toDays = toMaturityDays.ToString();

                    SessionManager.Save<string>("FromMaturityDaysCorn", fromDays);
                    SessionManager.Save<string>("ToMaturityDaysCorn", toDays);
                    SessionManager.Save<string>("CornBrand", Constants.Brand);

                    success = "1";
                }
                else
                {
                    SessionManager.Save<string>("FromMaturityDaysCorn", "105");
                    SessionManager.Save<string>("ToMaturityDaysCorn", "115");
                    SessionManager.Save<string>("CornBrand", Constants.Brand);

                    success = "1";
                }

            }
            finally
            {

            }
            return success;
        }

        /// <summary>
        /// method to set session for product name
        /// </summary>  
        /// <param name="prodName">to fetch product name </param>     
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public static string SetSessionProducts(string productName)
        {
            string prodName = "0";
            try
            {
                if (CommonUtility.IsAlphaNumericValue(productName))
                {
                    if (!string.IsNullOrEmpty(productName))
                    {
                        SessionManager.Save<string>("ProdName", productName);
                    }
                    prodName = SessionManager.Get<string>("ProdName");
                }
                else
                {
                    prodName = "G05T82";
                }

            }
            finally
            {

            }
            return prodName;
        }

        /// <summary>
        /// Web method to calculate for corn calculator
        /// </summary>
        /// <param name="areaPlanted"></param>
        /// <param name="desiredStand"></param>
        /// <param name="germination"></param>
        /// <param name="mortality"></param>
        /// <param name="rowWidth"></param>
        /// <returns></returns>
        [System.Web.Services.WebMethod]
        public static decimal[] calculate(string areaPlanted, string desiredStand, string germination, string mortality, string rowWidth)
        {
            decimal[] result = new decimal[3];

            try
            {

                decimal SeedingRate;
                if (desiredStand.IndexOf(".") >= 0)
                {
                    SeedingRate = Math.Round(System.Convert.ToDecimal(Convert.ToInt32(System.Convert.ToDecimal(desiredStand.Substring(0, desiredStand.IndexOf("."))))) / ((System.Convert.ToDecimal(germination) / 100) * ((100 - System.Convert.ToDecimal(mortality)) / 100)));
                }
                else
                {
                    SeedingRate = Math.Round(System.Convert.ToDecimal(Convert.ToInt32(System.Convert.ToDecimal(desiredStand))) / ((System.Convert.ToDecimal(germination) / 100) * ((100 - System.Convert.ToDecimal(mortality)) / 100)));
                }

                decimal SeedingSpacing;
                SeedingSpacing = Math.Round((System.Convert.ToDecimal(43.56) / (System.Convert.ToDecimal(rowWidth) / System.Convert.ToDecimal(12.00))) * 12 / (System.Convert.ToDecimal(SeedingRate) * System.Convert.ToDecimal(0.001)), 2);


                decimal UnitsNeeded;
                UnitsNeeded = Math.Round(System.Convert.ToDecimal((System.Convert.ToDecimal(areaPlanted) / (System.Convert.ToDecimal(80000.00) / SeedingRate)) + System.Convert.ToDecimal(0.5)));

                result[0] = SeedingRate;
                result[1] = SeedingSpacing;
                result[2] = UnitsNeeded;

                return result;
            }
            finally { }

        }
    }
}