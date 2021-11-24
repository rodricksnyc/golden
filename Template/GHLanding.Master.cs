using System;
using GoldenHarvest.BusinessLogic.CommonUtilities;
//using WURFL;

namespace Golden_Harvest.Template
{
    public partial class GHLanding : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            GetDeviceType();
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