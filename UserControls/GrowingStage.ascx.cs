using System;
using System.Configuration;
using System.Web;
using GoldenHarvest.BusinessLogic;

namespace Golden_Harvest.UserControls
{
    public partial class GrowingStage : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                growingStageInfo.InnerHtml = GetGrowingStages();
            }
            finally { }
        }

        /// <summary>
        /// Method to fetch the growing stages information for the home page
        /// </summary>
        private string GetGrowingStages()
        {
            string growingStageResult = string.Empty;
            string alertTypeId = string.Empty;
            GrowingStages growingStage = null;
            string region = string.Empty;
            try
            {
                growingStage = new GrowingStages();
                alertTypeId = ConfigurationManager.AppSettings["GrowingStageAlertTypeId"];
                HttpCookie userRegion = HttpContext.Current.Request.Cookies["GHuserregion"];
                if (userRegion != null)
                {
                    region = userRegion.Value;
                }
                growingStageResult = growingStage.GetGrowingStages(alertTypeId, "", region, "");
                return growingStageResult;
            }
            finally { }
        }
    }
}