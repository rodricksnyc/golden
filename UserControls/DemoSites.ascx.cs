using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;
using GoldenHarvest.BusinessEntities;
using GoldenHarvest.BusinessLogic;

namespace Golden_Harvest.User_Controls
{
    public partial class DemoSites : System.Web.UI.UserControl
    {
        private static GoldenHarvest.BusinessLogic.Interfaces.IDemoSites demoSiteBL = new GoldenHarvest.BusinessLogic.DemoSites();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack) // If page loads for first time
            {
                Session["refresh"] = "true";
                HttpCookie locationCookie = HttpContext.Current.Request.Cookies["GHuserLoc"];
                if (locationCookie == null)
                {
                    //Set the defaul lat and long for fetching demo sites
                    HttpContext.Current.Session["Latitude"] = "41.8524700";
                    HttpContext.Current.Session["Longitude"] = "-93.6319131";
                }
                LoadDemoSiteInfo();
                hdnvalue.Value = "true";
                if (locationCookie == null)
                {
                    HttpContext.Current.Session["Latitude"] = null;
                    HttpContext.Current.Session["Longitude"] = null;
                }
            }
        }

        /// <summary>
        /// Loads demo site information
        /// </summary>
        private void LoadDemoSiteInfo()
        {

            Location location = new Location();
            LocationBE locationEntity = new LocationBE();
            List<GoldenHarvest.BusinessEntities.DemoSites> demoSites = null;

            int alertTypeId = Convert.ToInt32(ConfigurationManager.AppSettings["GoldenHarvest_DemoSites_AlertTypeId"]);
            try
            {
                string hostFilePath = HttpContext.Current.Request.Url.Authority.IndexOf("localhost") != -1 ? HttpContext.Current.Request.Url.Authority : HttpContext.Current.Request.Url.Host;
                hostFilePath = Convert.ToString(ConfigurationManager.AppSettings["ProdImageLibraryPath"]);
                if (!string.IsNullOrEmpty(Location.Latitude) && (!string.IsNullOrEmpty(Location.Longitude)))
                {
                    demoSites = demoSiteBL.GetNearByYouDemoSites(alertTypeId, Convert.ToDouble(Location.Latitude), Convert.ToDouble(Location.Longitude));

                    List<GoldenHarvest.BusinessEntities.DemoSites> experianceSites = demoSites.Take(2).ToList();

                    if (experianceSites != null && (experianceSites.Count() >= 0 && experianceSites.Count() <= 2))
                    {
                        /// demoSite1Title.Text = experianceSites[0].DemoSiteTitle;
                        // demoSite1Summary.Text = experianceSites[0].Summary + "<a href=\"../agronomy-in-action/" + experianceSites[0].Title.Replace(" ", "-") + "\" class=\"btn-secondary\">more info</a>";
                        if (!string.IsNullOrWhiteSpace(experianceSites[0].DemoSiteImage))
                        {
                            //demoSite1Image.Text = "<div class=\"article-image-cont\" style=\"background-image: url(" + hostFilePath + experianceSites[0].DemoSiteImage + ");\"></div>";
                        }
                        if (experianceSites.Count > 1)
                        {
                            // demoSite2Title.Text = experianceSites[1].DemoSiteTitle;
                            // demoSite2Summary.Text = experianceSites[1].Summary + "<a href=\"../agronomy-in-action/" + experianceSites[1].Title.Replace(" ", "-") + "\" class=\"btn-secondary\">more info</a>";
                            if (!string.IsNullOrWhiteSpace(experianceSites[1].DemoSiteImage))
                            {
                                // demoSite2Image.Text = "<div class=\"article-image-cont\" style=\"background-image: url(" + hostFilePath + experianceSites[1].DemoSiteImage + ");\"></div>";
                            }

                        }

                    }
                }
                else
                {
                    locationEntity = location.GetLocationByIP();
                    if (locationEntity != null)
                    {
                        if (!string.IsNullOrEmpty(Location.Latitude) && (!string.IsNullOrEmpty(Location.Longitude)))
                        {
                            demoSites = demoSiteBL.GetNearByYouDemoSites(alertTypeId, Convert.ToDouble(Location.Latitude), Convert.ToDouble(Location.Longitude));

                            List<GoldenHarvest.BusinessEntities.DemoSites> experianceSites = demoSites.Take(2).ToList();

                            if (experianceSites != null && (experianceSites.Count() >= 0 && experianceSites.Count() <= 2))
                            {
                                // demoSite1Title.Text = experianceSites[0].DemoSiteTitle;
                                //demoSite1Summary.Text = experianceSites[0].Summary + "<a href=\"../agronomy-in-action/" + experianceSites[0].Title.Replace(" ", "-") + "\" class=\"btn-secondary\">more info</a>";
                                if (!string.IsNullOrWhiteSpace(experianceSites[0].DemoSiteImage))
                                {
                                    ///  demoSite1Image.Text = "<div class=\"article-image-cont\" style=\"background-image: url(" + hostFilePath + experianceSites[0].DemoSiteImage + ");\"></div>";
                                }
                                if (experianceSites.Count > 1)
                                {
                                    //demoSite2Title.Text = experianceSites[1].DemoSiteTitle;
                                    //demoSite2Summary.Text = experianceSites[1].Summary + "<a href=\"../agronomy-in-action/" + experianceSites[1].Title.Replace(" ", "-") + "\" class=\"btn-secondary\">more info</a>";
                                    if (!string.IsNullOrWhiteSpace(experianceSites[1].DemoSiteImage))
                                    {
                                        //demoSite2Image.Text = "<div class=\"article-image-cont\" style=\"background-image: url(" + hostFilePath + experianceSites[1].DemoSiteImage + ");\"></div>";
                                    }

                                }
                            }
                        }
                    }
                }
            }
            finally
            {

            }
        }

        protected void btnLoad_Click(object sender, EventArgs e)
        {
            if (Session["refresh"] != null)
            {
                LoadDemoSiteInfo();
                hdnvalue.Value = "true";
            }
            else
            {
                HttpCookie locationCookie = HttpContext.Current.Request.Cookies["GHuserLoc"];
                if (locationCookie != null)
                {
                    LoadDemoSiteInfo();
                    hdnvalue.Value = "true";
                }
                else
                {
                    hdnvalue.Value = "false";
                }
            }
        }
    }
}