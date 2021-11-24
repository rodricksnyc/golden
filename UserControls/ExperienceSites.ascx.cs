using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using GoldenHarvest.BusinessEntities;
using GoldenHarvest.BusinessLogic;


namespace Golden_Harvest.UserControls
{
    public partial class ExperienceSites : System.Web.UI.UserControl
    {
        private static GoldenHarvest.BusinessLogic.Interfaces.IDemoSites demoSiteBL = new GoldenHarvest.BusinessLogic.DemoSites();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack) // If page loads for first time
            {
                Session["refresh"] = "true";
                HttpCookie locationCookie = HttpContext.Current.Request.Cookies["GHuserLoc"];
                if (locationCookie != null)
                {
                    LoadNearestExperienceSites();
                    hdnvalue.Value = "true";
                }
            }
        }

        /// <summary>
        /// Loads nearest grow more experience sites
        /// </summary>
        private void LoadNearestExperienceSites()
        {
            Page page = this.Page;

            Location location = new Location();
            LocationBE locationEntity = new LocationBE();
            string siteName = string.Empty;
            string URL = string.Empty;
            URL = HttpContext.Current.Request.Url.Authority.IndexOf("localhost") != -1 ? HttpContext.Current.Request.Url.Authority : HttpContext.Current.Request.Url.Host;
            List<GoldenHarvest.BusinessEntities.DemoSites> demoSites = null;
            List<GoldenHarvest.BusinessEntities.DemoSites> experienceSites = null;
            int alertTypeId = Convert.ToInt32(ConfigurationManager.AppSettings["GoldenHarvest_DemoSites_AlertTypeId"]);
            try
            {

                siteName = Convert.ToString(HttpContext.Current.Items["siteName"]);
                if (!string.IsNullOrEmpty(Location.Latitude) && (!string.IsNullOrEmpty(Location.Longitude)))
                {
                    //if(HttpContext.Current.Session["Latitude"]!=null && HttpContext.Current.Session["Longitude"]!=null)
                    //{
                    demoSites = demoSiteBL.GetNearByYouDemoSites(alertTypeId, Convert.ToDouble(Location.Latitude), Convert.ToDouble(Location.Longitude), siteName);
                    // demoSites = demoSiteBL.GetNearByYouDemoSites(alertTypeId, Convert.ToDouble(HttpContext.Current.Session["Latitude"]), Convert.ToDouble(HttpContext.Current.Session["Longitude"]), siteName);
                    if (demoSites != null && demoSites.Count() > 0)
                    {
                        experienceSites = demoSites.Take(3).ToList();
                        StringBuilder strHtml = new StringBuilder();
                        strHtml.Append("<div class=\"experience-sites\">");
                        foreach (var demoSite in experienceSites)
                        {
                            strHtml.Append("<div class=\"hit-box experience-site article-blurb clearfix\">");
                            if (page.AppRelativeVirtualPath.Contains("experience-sites-landing.aspx") || page.AppRelativeVirtualPath.Contains("experience-site-single.aspx"))
                            {
                                strHtml.Append("<div class=\"pin\"></div>");
                                strHtml.Append("<div class=\"fas-copy clearfix\">");
                            }
                            strHtml.Append("<h4>" + demoSite.DemoSiteTitle + "</h4>");
                            strHtml.Append("<p>" + demoSite.Summary);
                            strHtml.Append("&nbsp;&nbsp;<a class=\"btn-secondary\" href=\"https://" + URL + "/agronomy-in-action/" + demoSite.Title.Replace(" ", "-") + "\">more info</a></p>");
                            strHtml.Append(" </div>");
                            if (page.AppRelativeVirtualPath.Contains("experience-sites-landing.aspx") || page.AppRelativeVirtualPath.Contains("experience-site-single.aspx"))
                            {
                                strHtml.Append(" </div>");
                            }
                        }
                        strHtml.Append(" </div>");
                        experienceSitesInfo.InnerHtml = strHtml.ToString();
                    }
                    else
                    {
                        StringBuilder strHtml = new StringBuilder();
                        strHtml.Append("<div  style=\"color:red;margin-top:20px;\">No Experience Sites Available to display!</div>");
                        experienceSitesInfo.InnerHtml = strHtml.ToString();
                    }

                }
                else
                {
                    locationEntity = location.GetLocationByIP();
                    //if (HttpContext.Current.Session["GH_User_Location"] != null)
                    //{
                    //locationEntity = (LocationBE)HttpContext.Current.Session["GH_User_Location"];
                    if (locationEntity != null)
                    {
                        if (!string.IsNullOrEmpty(Location.Latitude) && (!string.IsNullOrEmpty(Location.Longitude)))
                        {
                            demoSites = demoSiteBL.GetNearByYouDemoSites(alertTypeId, Convert.ToDouble(Location.Latitude), Convert.ToDouble(Location.Longitude), siteName);
                            if (demoSites != null && demoSites.Count() > 0)
                            {
                                experienceSites = demoSites.Take(3).ToList();

                                StringBuilder strHtml = new StringBuilder();
                                strHtml.Append("<div class=\"experience-sites\">");
                                foreach (var demoSite in experienceSites)
                                {
                                    strHtml.Append("<div class=\"hit-box experience-site clearfix\">");
                                    if (page.AppRelativeVirtualPath.Contains("experience-sites-landing.aspx") || page.AppRelativeVirtualPath.Contains("experience-site-single.aspx"))
                                    {
                                        strHtml.Append("<div class=\"pin\"></div>");
                                        strHtml.Append("<div class=\"fas-copy clearfix\">");
                                    }

                                    strHtml.Append("<h4>" + demoSite.DemoSiteTitle + "</h4>");
                                    strHtml.Append("<p>" + demoSite.Summary);
                                    strHtml.Append("&nbsp;&nbsp;<a class=\"btn-secondary\"  href=\"https://" + URL + "/agronomy-in-action/" + demoSite.Title.Replace(" ", "-") + "\">more info</a></p>");
                                    strHtml.Append(" </div>");
                                    if (page.AppRelativeVirtualPath.Contains("experience-sites-landing.aspx") || page.AppRelativeVirtualPath.Contains("experience-site-single.aspx"))
                                    {
                                        strHtml.Append(" </div>");
                                    }
                                }
                                strHtml.Append(" </div>");
                                experienceSitesInfo.InnerHtml = strHtml.ToString();
                            }
                            else
                            {
                                StringBuilder strHtml = new StringBuilder();
                                strHtml.Append("<div  style=\"color:red;margin-top:20px;\">No Experience Sites Available to display!</div>");
                                experienceSitesInfo.InnerHtml = strHtml.ToString();
                            }
                        }
                    }
                }

                //}
            }
            finally
            {

            }
        }

        protected void btnLoad_Click(object sender, EventArgs e)
        {
            if (Session["refresh"] != null)
            {
                LoadNearestExperienceSites();
                hdnvalue.Value = "true";
            }
            else
            {
                HttpCookie locationCookie = HttpContext.Current.Request.Cookies["GHuserLoc"];
                if (locationCookie != null)
                {
                    LoadNearestExperienceSites();
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