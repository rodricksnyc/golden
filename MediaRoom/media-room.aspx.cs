using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Web;

namespace Golden_Harvest
{
    public partial class media_room : System.Web.UI.Page
    {
        private static GoldenHarvest.BusinessLogic.Interfaces.IMediaRoom mediaRoomBL = new GoldenHarvest.BusinessLogic.MediaRoom();
        protected void Page_Load(object sender, EventArgs e)
        {
            LoadMediaRoomInfo();
        }

        /// <summary>
        /// Loads media room information
        /// </summary>
        private void LoadMediaRoomInfo()
        {
            List<GoldenHarvest.BusinessEntities.Media> mediaArticles = null;

            GoldenHarvest.BusinessEntities.Media featuredArticle = null;
            int alertTypeId = Convert.ToInt32(ConfigurationManager.AppSettings["GoldenHarvest_Media_AlertTypeId"]);
            HttpCookie userRegion = HttpContext.Current.Request.Cookies["GHuserregion"];
            string region = null;
            if (userRegion != null)
            {
                region = userRegion.Value;
            }
            try
            {
                string hostFilePath = HttpContext.Current.Request.Url.Authority.IndexOf("localhost") != -1 ? HttpContext.Current.Request.Url.Authority : HttpContext.Current.Request.Url.Host;
                hostFilePath = Convert.ToString(ConfigurationManager.AppSettings["ProdImageLibraryPath"]);
                mediaArticles = mediaRoomBL.GetMediaArticles(alertTypeId, out featuredArticle, region);
                if (featuredArticle != null)
                {
                    featuredArticle.URL = featuredArticle.URL == null ? "" : featuredArticle.URL;
                    var setFeaturedURL = featuredArticle.URL == string.Empty ? featuredArticle.ArticleTitle.Replace(" ", "-") : featuredArticle.URL.Replace(" ", "-");
                    litFeaturedImage.Text = "<img class=\"img-responsive\" src=\"" + hostFilePath + featuredArticle.ArticleImage + "\" alt=\"Featured image alt text\" />";
                    litArticleTitle.Text = "<h2>" + featuredArticle.ArticleTitle + "</h2>";
                    litArticleSummary.Text = "<p>" + featuredArticle.Summary + "</p><a href=\"/news/" + setFeaturedURL + "\" class=\"btn-default\">View Article</a>";

                }

                if (mediaArticles != null)
                {
                    int rowCount = mediaArticles.Count();
                    StringBuilder strActiveArticles = new StringBuilder();
                    for (int itemCount = 0; itemCount < rowCount;)
                    {
                        strActiveArticles.Append("<div class=\"row\">");
                        for (int coll = 1; coll <= 2; coll++)
                        {
                            strActiveArticles.Append("<div class=\"col-sm-6\">");
                            if (itemCount < rowCount)
                            {
                                mediaArticles[itemCount].URL = mediaArticles[itemCount].URL == null ? "" : mediaArticles[itemCount].URL;
                                var setArticleURL = mediaArticles[itemCount].URL == string.Empty ? mediaArticles[itemCount].ArticleTitle.Replace(" ", "-") : mediaArticles[itemCount].URL.Replace(" ", "-");
                                strActiveArticles.Append("<div class=\"hit-box article-blurb img-left in-view clearfix\">");
                                strActiveArticles.Append("<div class=\"article-image-cont\" style=\"background-image: url(" + hostFilePath + mediaArticles[itemCount].ArticleImage + ");\"></div>");
                                strActiveArticles.Append("<div class=\"article-blurb-copy\">");
                                strActiveArticles.Append("<h4>" + mediaArticles[itemCount].ArticleTitle + "</h4>");
                                strActiveArticles.Append("<p>" + mediaArticles[itemCount].Summary + "<a href=\"/news/" + setArticleURL + "\" class=\"btn-secondary\">read more</a></p>");
                                strActiveArticles.Append("</div>");
                                strActiveArticles.Append("</div>");
                                strActiveArticles.Append("</div>");
                                itemCount++;
                            }
                        }

                        strActiveArticles.Append("</div>");
                    }
                    if (strActiveArticles.ToString() != string.Empty)
                    {
                        litActiveArticles.Text = "<section id='article-list' class='grey has-arch equal'><div class='arch-element'></div><div class='container'>" + strActiveArticles.ToString() + "</div></section>";
                    }
                }


            }
            finally
            {

            }
        }

    }
}