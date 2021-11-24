using System;
using System.Configuration;
using System.Web;
using GoldenHarvest.BusinessEntities;
using GoldenHarvest.BusinessLogic.CommonUtilities;
using Newtonsoft.Json;
namespace Golden_Harvest.Template
{
    public partial class GoldenHarvest : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                GetDeviceType();
                hdnzipCodeAPIKey.Value = ConfigurationManager.AppSettings["ZipCodeAPIKey"].ToString();
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
            catch (Exception ex)
            {
                ExceptionLog.fnLogException(ex.Message, ex.StackTrace, System.DateTime.Now);
            }

        }

        /// <summary>
        /// Method to get the device type like desktop, tablet or phone
        /// </summary>
        public void GetDeviceType()
        {
            try
            {
                string userAgent = Request.Headers["User-Agent"].ToString();
                string deviceName = CommonUtility.GetDeviceName(userAgent);
                if (deviceName == "tablet")
                {
                    mainHTML.Attributes.Add("class", "tablet");
                }
                else if (deviceName == "mobile")
                {
                    mainHTML.Attributes.Add("class", "mobile");
                }
                else if (deviceName == "desktop")
                {
                    mainHTML.Attributes.Add("class", "desktop");
                }
                else
                {
                    mainHTML.Attributes.Add("class", "mobile");
                }

            }
            finally
            {

            }
        }

    }
}