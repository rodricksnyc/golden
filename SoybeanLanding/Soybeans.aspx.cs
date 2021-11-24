using System;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.UI;
using GoldenHarvest.BusinessEntities;
using GoldenHarvest.BusinessLogic;
using GoldenHarvest.BusinessLogic.CommonUtilities;
using GoldenHarvest.BusinessLogic.SessionManager;
using GoldenHarvest.Constant;
using Newtonsoft.Json;

namespace Golden_Harvest.soybeanlanding
{
    public partial class Soybeans : System.Web.UI.Page
    {
        private Location location = new Location();
        private LocationBE locationEntity = new LocationBE();
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!Page.IsPostBack)
                {
                    if ((SessionManager.Get<string>("FromMaturityDaysGHSoy") != null) && (SessionManager.Get<string>("ToMaturityDaysGHSoy") != null))
                    {
                        if (!string.IsNullOrEmpty(SessionManager.Get<string>("FromMaturityDaysGHSoy").ToString()) && !string.IsNullOrEmpty((SessionManager.Get<string>("ToMaturityDaysGHSoy").ToString())))
                        {
                            soybeanRmFrom.Value = SessionManager.Get<string>("FromMaturityDaysGHSoy").ToString();
                            soybeanRmTo.Value = SessionManager.Get<string>("ToMaturityDaysGHSoy").ToString();
                        }
                    }
                    if (HttpContext.Current.Request.Cookies["GHuserLoc"] != null)
                    {
                        string City, State, PostalCode;
                        HttpCookie locationCookie = HttpContext.Current.Request.Cookies["GHuserLoc"];
                        LocationCookies login = JsonConvert.DeserializeObject<LocationCookies>(locationCookie.Value.ToString());
                        if (locationCookie != null)
                        {
                            City = login.city;
                            State = login.state;
                            PostalCode = login.zip;
                            zipCode.Text = City + ", " + State + " " + PostalCode;

                        }
                    }
                }
            }
            finally { }
        }

        /// <summary>
        /// method to set session for product name
        /// </summary>  
        /// <param name="prodName">to fetch product name </param>     
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public static string SetSoybeanSessionProducts(string productName)
        {
            string prodName = "0";
            try
            {
                if (CommonUtility.IsAlphaNumericValue(productName))
                {
                    if (!string.IsNullOrEmpty(productName))
                    {
                        SessionManager.Save<string>("ProdNameSoy", HttpUtility.HtmlEncode(productName));
                    }
                    prodName = SessionManager.Get<string>("ProdNameSoy");
                }
                else
                {
                    prodName = "GH00866";
                }
            }
            finally
            {

            }
            return HttpUtility.HtmlDecode(prodName);
        }

        /// <summary>
        /// method to set session for maturity days
        /// </summary>  
        /// <param name="fromDays">to fetch from maturity days </param>
        /// /// <param name="toDays">to fetch To maturity days </param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public static string SetGHSoySessionMaturityDays(string fromDays, string toDays)
        {
            string success = "0";
            decimal fromMaturityDays = 0;
            decimal toMaturityDays = 0;
            try
            {
                if (CommonUtility.IsDecimalValue(fromDays) && CommonUtility.IsDecimalValue(toDays))
                {
                    fromMaturityDays = Convert.ToDecimal(fromDays);
                    toMaturityDays = Convert.ToDecimal(toDays);
                    if (fromMaturityDays > toMaturityDays)
                    {
                        toMaturityDays = Convert.ToDecimal(fromDays);
                        fromMaturityDays = Convert.ToDecimal(toDays);
                    }
                    fromDays = fromMaturityDays.ToString();
                    toDays = toMaturityDays.ToString();

                    SessionManager.Save<string>("FromMaturityDaysGHSoy", fromDays);
                    SessionManager.Save<string>("ToMaturityDaysGHSoy", toDays);
                    SessionManager.Save<string>("SoyBrandValue", Constants.Brand);

                    success = "1";
                }
                else
                {
                    SessionManager.Save<string>("FromMaturityDaysGHSoy", "1.8");
                    SessionManager.Save<string>("ToMaturityDaysGHSoy", "4.0");
                    SessionManager.Save<string>("SoyBrandValue", Constants.Brand);
                    success = "1";
                }


            }
            finally
            {

            }
            return success;
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
    }
}