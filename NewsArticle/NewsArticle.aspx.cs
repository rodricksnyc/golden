using System;
using System.Configuration;
using System.Data;
using System.Text;
using System.Web;
using System.Web.UI.HtmlControls;
using GoldenHarvest.BusinessLogic;

namespace Golden_Harvest.NewsArticle
{
    public partial class NewsArticle : System.Web.UI.Page
    {
        #region GlobalDeclartaion
        private ArticleDetail articleDetails = null;
        #endregion

        /// <summary>
        /// Page load method of the class
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Page_Load(object sender, EventArgs e)
        {

            DataSet articleDetail = null;
            DataTable relatedArticle = null;
            DataTable articleMain = null;
            string requestURL = string.Empty;
            string cropName = string.Empty;
            string stageName = string.Empty;
            string alertDescription = string.Empty;
            StringBuilder bldr = null;
            int articleLength = 0;
            string alertTypeName = string.Empty;
            StringBuilder metaProperty = null;
            try
            {
                bldr = new StringBuilder();
                metaProperty = new StringBuilder();
                bldr.Length = 0;
                cropName = (Session["AgronomicCropName"] != null) ? Session["AgronomicCropName"].ToString() : "";
                stageName = (Session["AgronomicStageName"] != null) ? Session["AgronomicStageName"].ToString() : "";
                requestURL = HttpContext.Current.Request.Url.ToString();
                string[] articleTypes = requestURL.Split('/');
                articleDetails = new ArticleDetail();
                articleLength = articleTypes.Length;
                if (articleLength > 3)
                {
                    //string title = articleTypes[articleTypes.Length - 1].Replace("-", " ");
                    //this.Page.Title = title + " | " + "Golden Harvest";  
                    string articleText = string.Empty;
                    articleText = articleTypes[articleTypes.Length - 1];
                    if (!string.IsNullOrEmpty(articleText) && articleText.Contains("?"))
                    {
                        string[] str = articleText.Split('?');
                        if (str.Length > 0)
                        {
                            articleText = str[0];
                        }
                    }

                    if (articleLength == 6)
                    {
                        alertTypeName = "agronomic";
                        articleDetail = articleDetails.GetArticleDetail(articleTypes[articleTypes.Length - 3], articleText, cropName, stageName);

                    }
                    else
                    {
                        alertTypeName = "news";
                        articleDetail = articleDetails.GetArticleDetail(articleTypes[articleTypes.Length - 2], articleText, cropName, stageName);
                    }

                    if (articleDetail != null && articleDetail.Tables.Count > 0)
                    {
                        articleMain = articleDetail.Tables[0];
                        if (articleDetail.Tables.Count > 1)
                        {
                            relatedArticle = articleDetail.Tables[1];
                        }

                    }

                    if (articleMain != null && articleMain.Rows.Count > 0)
                    {
                        HtmlMeta Desc = new HtmlMeta
                        {
                            Name = "Description",
                            Content = (articleMain.Columns.Contains("MetaDesc") && articleMain.Rows[0]["MetaDesc"] != null) ?
                                  articleMain.Rows[0]["MetaDesc"].ToString() : ""
                        };
                        this.Page.Header.Controls.Add(Desc);

                        //Desc.Content = (articleMain.Columns.Contains("SummaryText") && articleMain.Rows[0]["SummaryText"] != null) ?
                        //          articleMain.Rows[0]["SummaryText"].ToString() : "";
                        //this.Page.Header.Controls.Add(Desc);


                        alertDescription = (articleMain.Columns.Contains("SummaryDescription") && articleMain.Rows[0]["SummaryDescription"] != null) ?
                                       articleMain.Rows[0]["SummaryDescription"].ToString() : "";

                        string alertFileType = articleMain.Columns.Contains("FileNameType") &&
                                                articleMain.Rows[0]["FileNameType"] != null &&
                                                !string.IsNullOrWhiteSpace(articleMain.Rows[0]["FileNameType"].ToString()) ?
                                                        articleMain.Rows[0]["FileNameType"].ToString() : string.Empty;

                        if (alertFileType == "1")
                        {
                            string alertTheme = articleMain.Columns.Contains("THEME") &&
                                                articleMain.Rows[0]["THEME"] != null &&
                                                !string.IsNullOrWhiteSpace(articleMain.Rows[0]["THEME"].ToString()) ?
                                                    articleMain.Rows[0]["THEME"].ToString() : string.Empty;

                            this.sproutVideoPlayer.Visible = !string.IsNullOrWhiteSpace(alertTheme);
                            this.sproutVideoPlayer.Attributes["data-tag"] = alertTheme;
                        }
                        else
                        {
                            this.sproutVideoPlayer.Visible = false;
                            this.sproutVideoPlayer.Attributes["data-tag"] = string.Empty;
                        }

                        mainArticle.InnerHtml = alertDescription;
                        string articleTitle = string.Empty;

                        string articleMetaTitle = (articleMain.Columns.Contains("MetaTitle") && articleMain.Rows[0]["MetaTitle"] != null) ?
                                       articleMain.Rows[0]["MetaTitle"].ToString() : "";
                        this.Page.Title = articleMetaTitle + " | " + "Golden Harvest";


                        articleTitle = (articleMain.Columns.Contains("Title") && articleMain.Rows[0]["Title"] != null) ?
                                 articleMain.Rows[0]["Title"].ToString() : "";
                        //this.Page.Title = articleTitle + " | " + "Golden Harvest";


                        string stageNameValue = (articleMain.Columns.Contains("StageName") && articleMain.Rows[0]["StageName"] != null) ?
                                         articleMain.Rows[0]["StageName"].ToString() : "";
                        string cropValue = (articleMain.Columns.Contains("CROPS") && articleMain.Rows[0]["CROPS"] != null) ?
                                            articleMain.Rows[0]["CROPS"].ToString() : "";
                        string image = (articleMain.Columns.Contains("FileName") && articleMain.Rows[0]["FileName"] != null) ?
                                            articleMain.Rows[0]["FileName"].ToString() : "";
                        bldr.AppendFormat("<h1>{0}</h1>", articleTitle);
                        if (!string.IsNullOrEmpty(stageNameValue) && alertTypeName.ToLower() == "agronomic")
                        {
                            cropName = (string.IsNullOrEmpty(cropValue)) ? "Corn, Soybeans" : cropValue;
                            bldr.AppendFormat("<h6>Categories: {0}, {1}</h6>", stageNameValue.ToUpper(), cropName.ToUpper());
                        }
                        mainHeading.InnerHtml = bldr.ToString();

                        metaProperty.AppendFormat("<meta property=\"og:url\" content=\"{0}\" />", HttpContext.Current.Request.Url);
                        metaProperty.AppendLine();
                        metaProperty.AppendLine("<meta property=\"og:type\" content=\"website\" />");
                        metaProperty.AppendFormat("<meta property=\"og:title\" content=\"{0}\" />", articleMetaTitle);
                        metaProperty.AppendLine();
                        metaProperty.AppendFormat("<meta property=\"og:description\" content=\"{0}\" />", Desc.Content);
                        metaProperty.AppendLine();
                        metaProperty.AppendFormat("<meta property=\"og:image\" content=\"{0}\" />", "https://assets.syngentaebiz.com/images/" + image);
                        facebookProperty.Text = metaProperty.ToString();

                    }
                    else
                    {
                        mainArticle.InnerHtml = "No data found for the requested article!";
                        mainArticle.Attributes.Add("style", "font-size:20px;color:red;");
                    }
                    if (relatedArticle != null && relatedArticle.Rows.Count > 0)
                    {
                        bldr.Length = 0;
                        bldr.AppendLine("<h2>Related Articles</h2>");
                        bldr.AppendLine("<div class=\"article-list\">");
                        bldr.AppendFormat("{0}", GetRelatedArticle(relatedArticle, alertTypeName, cropName, stageName));
                        bldr.AppendLine("</div>");
                        relatedArticles.InnerHtml = bldr.ToString();
                    }
                }
            }
            finally
            {
                if (articleDetail != null)
                {
                    articleDetail.Dispose();
                }
                if (relatedArticle != null)
                {
                    relatedArticle.Dispose();
                }
                if (articleMain != null)
                {
                    articleMain.Dispose();
                }
            }
        }


        /// <summary>
        /// Method to bind the related Articles
        /// </summary>
        /// <param name="relatedArticle">Related Article</param>
        /// <returns></returns>
        public string GetRelatedArticle(DataTable relatedArticle, string alertTypeName, string cropName, string stageName)
        {
            StringBuilder bldr = null;
            int rowsCount = 0;
            string alertTitle = string.Empty;
            string imageURL = string.Empty;
            string alertDescription = string.Empty;
            string stageNameValue = string.Empty;
            string hostFileName = string.Empty;
            string updateTitle = string.Empty;
            StringBuilder url = new StringBuilder();
            try
            {
                bldr = new StringBuilder();
                hostFileName = Convert.ToString(ConfigurationManager.AppSettings["ProdImageLibraryPath"]);
                bldr.Length = 0;
                if (relatedArticle != null && relatedArticle.Rows.Count > 0)
                {
                    rowsCount = (relatedArticle.Rows.Count > 3) ? 3 : relatedArticle.Rows.Count;
                    for (int i = 0; i < rowsCount; i++)
                    {
                        if (alertTypeName == "agronomic")
                        {
                            if (relatedArticle.Columns.Contains("URL") && !string.IsNullOrEmpty(Convert.ToString(relatedArticle.Rows[i]["URL"])))
                            {
                                url.Append("/agronomy/articles/");
                                url.Append(relatedArticle.Rows[i]["URL"].ToString().ToLower().Trim().Replace(" ", "-"));
                            }
                        }
                        alertTitle = (relatedArticle.Columns.Contains("Title") && relatedArticle.Rows[i]["Title"] != null) ?
                                       relatedArticle.Rows[i]["Title"].ToString() : "";
                        if (alertTypeName == "agronomic")
                        {
                            updateTitle = alertTitle.Replace(" ", "-");
                        }
                        else
                        {
                            if (relatedArticle.Columns.Contains("URL") && !string.IsNullOrEmpty(Convert.ToString(relatedArticle.Rows[i]["URL"])))
                            {
                                updateTitle = Convert.ToString(relatedArticle.Rows[i]["URL"]);
                            }
                            else
                            {
                                updateTitle = alertTitle.Replace(" ", "-");
                            }
                        }
                        imageURL = (relatedArticle.Columns.Contains("FileName") && relatedArticle.Rows[i]["FileName"] != null) ?
                                       relatedArticle.Rows[i]["FileName"].ToString() : "";
                        alertDescription = (relatedArticle.Columns.Contains("SummaryText") && relatedArticle.Rows[i]["SummaryText"] != null) ?
                                      relatedArticle.Rows[i]["SummaryText"].ToString() : "";
                        string readMoreLink = relatedArticle.Rows[i]["URL"].ToString().ToLower();
                        if (!string.IsNullOrEmpty(alertDescription) && alertDescription.Length > 100)
                        {
                            alertDescription = alertDescription.Substring(0, 100);
                        }
                        if (i == 0)
                        {
                            bldr.Append("<div class=\"hit-box sb-article-blurb img-left clearfix newAg\">");
                            if (!string.IsNullOrEmpty(imageURL))
                            {
                                bldr.AppendFormat("<div class=\"sb-article-image-cont\" style=\"background-image: url({0}{1});\"></div>", hostFileName, imageURL);
                            }
                            bldr.Append("<div class=\"sb-article-blurb-copy\">");
                            bldr.AppendFormat("<h4>{0}</h4>", alertTitle);
                            if (alertTypeName == "agronomic")
                            {
                                if (!string.IsNullOrEmpty(url.ToString()))
                                {
                                    bldr.AppendFormat("<p>{0}&hellip;<a href=\"" + url.ToString() + "\" class=\"newAg btn-secondary\" stagename=\"{1}\" cropname=\"{2}\" title=\"{3}\">read more</a></p>", alertDescription, stageName, cropName, readMoreLink.Trim().Replace(" ", "-"));
                                }
                                else
                                {
                                    bldr.AppendFormat("<p>{0}&hellip;<a href=\"/agronomy/articles/" + alertTitle.Replace(" ", "-") + "\" class=\"newAg btn-secondary\" stagename=\"{1}\" cropname=\"{2}\" title=\"{3}\">read more</a></p>", alertDescription, stageName, cropName, updateTitle);
                                }

                            }
                            else
                            {
                                bldr.AppendFormat("<p>{0}&hellip;<a href=\"/news/{1}\" class=\"btn-secondary\">read more</a></p>", alertDescription, updateTitle);
                            }
                            bldr.Append("</div>");
                            bldr.Append("</div>");
                            url.Clear();
                        }
                        //else if (i == 1)
                        //{
                        //    bldr.Append("<div class=\"hit-box article-blurb img-right clearfix\">");
                        //    if (!string.IsNullOrEmpty(imageURL))
                        //    {
                        //        bldr.AppendFormat("<div class=\"article-image-cont\" style=\"background-image: url({0}{1});\"></div>", hostFileName, imageURL);
                        //    }
                        //    bldr.Append("<div class=\"article-blurb-copy\">");
                        //    bldr.AppendFormat("<h4>{0}</h4>", alertTitle);
                        //    if (alertTypeName == "agronomic")
                        //    {
                        //        bldr.AppendFormat("<p>{0}&hellip;<a href=\"../agronomy/articles/" + alertTitle.Replace(" ", "-") + "\" class=\"newAg btn-secondary\" stagename=\"{1}\" cropname=\"{2}\" title=\"{3}\">read more</a></p>", alertDescription, stageName, cropName, updateTitle);
                        //    }
                        //    else
                        //    {
                        //        bldr.AppendFormat("<p>{0}&hellip;<a href=\"/news/{1}\" class=\"btn-secondary\">read more</a></p>", alertDescription, updateTitle);
                        //    }
                        //    bldr.Append("</div>");
                        //    bldr.Append("</div>");
                        //}
                        else
                        {
                            bldr.Append("<div class=\"hit-box sb-article-blurb img-left clearfix newAg\">");
                            if (!string.IsNullOrEmpty(imageURL))
                            {
                                bldr.AppendFormat("<div class=\"sb-article-image-cont\" style=\"background-image: url({0}{1});\"></div>", hostFileName, imageURL);
                            }
                            bldr.Append("<div class=\"sb-article-blurb-copy\">");
                            bldr.AppendFormat("<h4>{0}</h4>", alertTitle);
                            if (alertTypeName == "agronomic")
                            {
                                if (!string.IsNullOrEmpty(url.ToString()))
                                {
                                    bldr.AppendFormat("<p>{0}&hellip;<a href=\"" + url.ToString() + "\" class=\"newAg btn-secondary\" stagename=\"{1}\" cropname=\"{2}\" title=\"{3}\">read more</a></p>", alertDescription, stageName, cropName, relatedArticle.Rows[i]["URL"].ToString().Trim().Replace(" ", "-"));
                                }
                                else
                                {
                                    bldr.AppendFormat("<p>{0}&hellip;<a href=\"/agronomy/articles/" + alertTitle.Replace(" ", "-") + "\" class=\"newAg btn-secondary\" stagename=\"{1}\" cropname=\"{2}\" title=\"{3}\">read more</a></p>", alertDescription, stageName, cropName, updateTitle);
                                }

                            }
                            else
                            {
                                bldr.AppendFormat("<p>{0}&hellip;<a href=\"/news/{1}\" class=\"btn-secondary\">read more</a></p>", alertDescription, updateTitle);
                            }
                            bldr.Append("</div>");
                            bldr.Append("</div>");
                            url.Clear();
                        }
                    }
                }

                return bldr.ToString();
            }
            finally
            {

            }
        }
    }
}