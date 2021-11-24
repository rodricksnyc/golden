using System;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Web;
using GoldenHarvest.BusinessLogic;

namespace Golden_Harvest.UserControls
{
    public partial class AgronomicUserControl : System.Web.UI.UserControl
    {
        #region Global Declaration
        private static DataTable agronomicStageTable = null;
        private static DataTable agronomicDetails = null;
        #endregion
        protected void Page_Load(object sender, EventArgs e)
        {
            if (HttpContext.Current.Request.Url.ToString().ToLower().Contains("corn"))
            {
                agronomicDetailsValue.InnerHtml = GetAgronomicStageDetailsString("Corn");
            }
            else
            {
                agronomicDetailsValue.InnerHtml = GetAgronomicStageDetailsString("Soybeans");
            }
        }

        /// <summary>
        /// Method to get the agronomic stage details
        /// </summary>
        /// <param name="cropName">CropName</param>
        /// <returns>Agronomic Stage Details</returns>
        public static DataSet GetAgronomicStageDetails(string cropName)
        {
            DataSet agronomicStages = null;
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
                agronomicStages = growingStage.GetAgronomicCurrentStageDetails(alertTypeId, region, cropName);
                return agronomicStages;
            }
            finally
            {
                if (agronomicStages != null)
                {
                    agronomicStages.Dispose();
                }
            }
        }

        /// <summary>
        /// Method to get the agronomic stage details 
        /// </summary>
        /// <param name="cropName">Crop Name</param>
        /// <returns>Agronomic Stage Details</returns>
        [System.Web.Services.WebMethod]
        public static string GetAgronomicStageDetailsString(string cropName)
        {
            DataSet agronomicStages = null;
            int loopCount = 0;
            string stageName = string.Empty;
            string stageOrder = string.Empty;
            DataTable agronomicValues = null;
            StringBuilder bldr = null;
            int resultValue = 1;
            bool isFirstTime = true;
            try
            {
                agronomicStages = GetAgronomicStageDetails(cropName);
                if (agronomicStages != null && agronomicStages.Tables.Count > 1)
                {
                    agronomicDetails = agronomicStages.Tables[0];
                    agronomicStageTable = agronomicStages.Tables[1];
                }
                loopCount = (agronomicStageTable != null && agronomicStageTable.Rows.Count > 0) ? agronomicStageTable.Rows.Count : 0;
                loopCount = (loopCount > 5) ? 5 : loopCount;
                bldr = new StringBuilder
                {
                    Length = 0
                };
                for (int i = 0; i < loopCount; i++)
                {

                    stageName = (!string.IsNullOrEmpty(Convert.ToString(agronomicStageTable.Rows[i]["StageName"]))) ?
                       agronomicStageTable.Rows[i]["StageName"].ToString() : "";
                    stageOrder = (!string.IsNullOrEmpty(Convert.ToString(agronomicStageTable.Rows[i]["Stage_Order"]))) ?
                        agronomicStageTable.Rows[i]["Stage_Order"].ToString() : "";
                    if (!string.IsNullOrEmpty(stageName))
                    {
                        var agronomicRows = agronomicDetails.AsEnumerable().Where(r => r.Field<string>("Stage").Contains(stageName.Replace("$", "").Trim()));
                        if (!string.IsNullOrEmpty(cropName))
                        {
                            agronomicRows = agronomicDetails.AsEnumerable().Where(r => r.Field<string>("Stage").Contains(stageName.Replace("$", "").Trim()) && r.Field<string>("Crops").Contains(cropName));
                        }
                        if (agronomicRows.Any())
                        {

                            if (resultValue % 2 == 1)
                            {
                                bldr.AppendFormat("<section id=\"article-list\" class=\"{0} has-arch\">", (cropName.ToLower() == "corn") ? "grey" : "white");
                                bldr.AppendLine("<div class=\"arch-element\"></div>");
                                bldr.AppendLine("<div class=\"container\">");
                            }
                            else
                            {
                                bldr.AppendLine("<section id=\"article-list\" class=\"white has-arch\">");
                                bldr.AppendLine("<div class=\"arch-element\"></div>");
                                bldr.AppendLine("<div class=\"container\">");
                            }
                            if (isFirstTime)
                            {
                                bldr.AppendLine("<div class=\"row\">");
                                bldr.AppendLine("<div class=\"col-sm-12\">");
                                //bldr.AppendLine("<div class=\"article-filter\">");
                                bldr.AppendLine("<h2>AGRONOMIC NEWS</h2>");
                                //bldr.AppendLine("</div>");
                                bldr.AppendLine("</div>");
                                bldr.AppendLine("</div>");
                                isFirstTime = false;
                            }
                            agronomicValues = agronomicRows.CopyToDataTable();
                            bldr.Append(GrowingStages.GetAgronomicDetails(agronomicValues, stageOrder, stageName.Replace("$", "").Trim(), cropName));

                            bldr.AppendLine("</div>");
                            bldr.AppendLine("</section>");

                            resultValue++;
                        }
                    }

                }

                return bldr.ToString();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                if (agronomicValues != null)
                {
                    agronomicValues.Dispose();
                }
            }
        }

        /// <summary>
        /// Method to get the additional articles of agronomy
        /// </summary>
        /// <param name="stageName">Stage Name</param>
        /// <returns>Agronomic Additional Articles</returns>
        [System.Web.Services.WebMethod]
        public static string GetAdditonalArticles(string stageName, int articleId, string cropName)
        {
            DataTable agronomicValues = null;
            StringBuilder bldr = null;
            string stageOrder = string.Empty;
            try
            {
                bldr = new StringBuilder
                {
                    Length = 0
                };
                int rowCount = Convert.ToInt32(stageName) - 1;
                stageName = (!string.IsNullOrEmpty(Convert.ToString(agronomicStageTable.Rows[rowCount]["StageName"]))) ?
                    agronomicStageTable.Rows[rowCount]["StageName"].ToString() : "";
                stageOrder = (!string.IsNullOrEmpty(Convert.ToString(agronomicStageTable.Rows[rowCount]["Stage_Order"]))) ?
                      agronomicStageTable.Rows[rowCount]["Stage_Order"].ToString() : "";
                if (!string.IsNullOrEmpty(stageName))
                {
                    var rows = agronomicDetails.AsEnumerable().Where(r => r.Field<string>("Stage").Contains(stageName) && r.Field<int>("AlertId") != articleId).OrderByDescending(r => r.Field<int>("AlertId")); ;
                    if (rows.Any())
                    {
                        agronomicValues = rows.CopyToDataTable();
                        bldr.Append(GrowingStages.GetAdditionalArticles(agronomicValues, stageName.Replace("$", "").Trim(), cropName, stageOrder));
                    }

                }
                return bldr.ToString();
            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                if (agronomicValues != null)
                {
                    agronomicValues.Dispose();
                }
            }
        }
    }
}