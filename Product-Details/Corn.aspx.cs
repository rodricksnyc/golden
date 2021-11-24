using System;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using GoldenHarvest.BusinessLogic;
using GoldenHarvest.BusinessLogic.CommonUtilities;
using GoldenHarvest.BusinessLogic.Interfaces;
using Newtonsoft.Json;

namespace Golden_Harvest
{
    public partial class Corn : System.Web.UI.Page
    {
        private bool mobiledevice = false;
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                string prodName = string.Empty;
                if (HttpContext.Current.Items["page"] != null)
                {
                    prodName = Convert.ToString(HttpContext.Current.Items["page"]).ToUpper();
                }
                else if (Session["ProdName"] != null)
                {
                    prodName = Session["ProdName"].ToString();
                }
                else
                {
                    prodName = "N15J";
                }
                this.txtSearch.Attributes.Add("onkeypress", "checkLoadProduct(event)");
                string userAgent = Request.Headers["User-Agent"].ToString();
                string deviceName = CommonUtility.GetDeviceName(userAgent);
                if (deviceName == "mobile")
                {
                    mobiledevice = true;
                }
                GetDetails(prodName, mobiledevice);
                SetBreadCrumbValues(prodName);
            }
            finally
            {

            }
        }


        /// <summary>
        /// Method to set breadcrumb values
        /// </summary>
        /// <param name="prodName">Product Name</param>
        public void SetBreadCrumbValues(string prodName)
        {
            HtmlMeta keyWords = null;
            HtmlMeta Desc = null;
            try
            {
                keyWords = new HtmlMeta();
                Desc = new HtmlMeta();
                keyWords.Name = "Keywords";
                Desc.Name = "Description";

                if (prodName.ToUpper().StartsWith("E"))
                {
                    this.Page.Title = prodName.ToUpper() + " | Enogen Golden Harvest";
                    keyWords.Content = "Breakout genetics, Enogen Corn, corn hybrids, breakthrough traits, Syngenta Corn Seed, Field Corn Seed";
                }
                else
                {
                    this.Page.Title = prodName.ToUpper() + " Corn | Golden Harvest";
                    keyWords.Content = "corn seed, golden harvest, yield results, Golden Harvest Seed";
                }
                if (Session["CornMetaDesc"] != null)
                {
                    Desc.Content = Session["CornMetaDesc"].ToString();
                }
                else
                {
                    Desc.Content = "";
                }
                //breadCrumb.Text = bldr.ToString();
                //this.Page.Header.Controls.Add(keyWords);
                this.Page.Header.Controls.Add(Desc);
            }
            catch (Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// Method to load the corn product details
        /// </summary>
        /// <param name="productName">product name to fetch details</param>
        /// <returns></returns>
        [System.Web.Services.WebMethod]
        public static string GetProductDetailIInfo(string productName)
        {
            ICornProduct product = null;
            try
            {
                product = new CornProduct();// it should be dynamic (through UNITY)
                return product.GetProductDetailInfo(productName, false);
            }
            finally
            { }

        }

        /// <summary>
        /// Method to fetch the user location info
        /// </summary>
        /// <returns></returns>
        [System.Web.Services.WebMethod]
        public static string GetRetailerRedirectionInfo()
        {
            IProduct productDetails = null;
            try
            {
                productDetails = new Product();
                return productDetails.GetUserLocation("goldenharvest");
            }
            finally { }

        }

        /// <summary>
        /// Method to fetch the user location info
        /// </summary>
        /// <returns></returns>
        [System.Web.Services.WebMethod]
        public static string YieldRetailerRedirectionInfo(string prodName)
        {
            try
            {
                HttpContext.Current.Session["YieldHybridValue"] = prodName;
                return "https://" + HttpContext.Current.Request.Url.Host;
            }
            finally { }

        }

        /// <summary>
        /// Method to get techsheet details
        /// </summary>
        /// <param name="prodName"></param>
        private void GetTechSheetDetails(string prodName)
        {
            IProduct productTech = null;
            try
            {
                productTech = new Product();// it should be dynamic (through UNITY)
                Task<string> techsheetURL1 = productTech.GetTechnicalSheet(prodName);
                string techsheetURL = Convert.ToString(techsheetURL1.Result.ToString());
                if (!string.IsNullOrEmpty(techsheetURL))
                {
                    string url = Request.Url.ToString().ToLower();
                    if (url.Contains("localhost") || url.Contains("15.141.25.19"))
                    {
                        techsheetURL = @"http://15.141.25.153/ProductPage/Upload_pdf/techsheets/" + techsheetURL;
                    }
                    else
                    {
                        techsheetURL = @"https://assets.syngentaebiz.com/pdf/techsheets/" + techsheetURL;
                    }
                }
                dvTechSheet.InnerHtml = "<div class=\"detail-tile download hidden-xs\"><a target=\"_blank\" href=\"" + techsheetURL + "\">Download Tech Sheet<br/><span></span></a></div>";
                dvTechSheetBtn.InnerHtml = "<div class=\"col-sm-12 visible-xs\"><a target=\"_blank\" class=\"learnMoreBtn\" href=\"" + techsheetURL + "\">Download Tech Sheet</a></div>";
            }
            finally { }
        }

        /// <summary>
        /// Method to get corn product details
        /// </summary>
        /// <param name="prodName"></param>
        private void GetDetails(string prodName, bool mobiledevice)
        {
            ICornProduct product = null;
            try
            {

                product = new CornProduct();
                string productResult = product.GetProductDetailInfo(prodName, mobiledevice);
                if (!string.IsNullOrEmpty(productResult))
                {
                    char[] delimiterChars = { '@' };
                    string[] dvResults = productResult.Split(delimiterChars);
                    dvHeroTitle.InnerHtml = (!string.IsNullOrEmpty(dvResults[0])) ? dvResults[0] : string.Empty;
                    dvProductRmValue.InnerHtml = (!string.IsNullOrEmpty(dvResults[1])) ? dvResults[1] : string.Empty;
                    dvBulletedPoints.InnerHtml = (!string.IsNullOrEmpty(dvResults[2])) ? dvResults[2] : string.Empty;
                    dvRelativeMaturity.InnerHtml = (!string.IsNullOrEmpty(dvResults[3])) ? dvResults[3] : string.Empty;
                    dvAgronomicChar.InnerHtml = (!string.IsNullOrEmpty(dvResults[4])) ? dvResults[4] : string.Empty;
                    dvDiseaseTolerance.InnerHtml = (!string.IsNullOrEmpty(dvResults[5])) ? dvResults[5] : string.Empty;
                    dvAgronomicmanagement.InnerHtml = (!string.IsNullOrEmpty(dvResults[6])) ? dvResults[6] : string.Empty;
                    dvPlantEarChar.InnerHtml = (!string.IsNullOrEmpty(dvResults[7])) ? dvResults[7] : string.Empty;
                    dvPageTitle.InnerHtml = (!string.IsNullOrEmpty(dvResults[8])) ? dvResults[8] : string.Empty;
                    //dvSeedGuideCatalog.InnerHtml = (!string.IsNullOrEmpty(dvResults[9])) ? dvResults[9] : string.Empty;
                    lblBrands.InnerHtml = (!string.IsNullOrEmpty(dvResults[13])) ? dvResults[13] : string.Empty;

                    //new CR 0425 
                    string LowRating = ((dvResults[14] != null) || (dvResults[14] != "")) ? dvResults[14] : string.Empty;
                    string HighRating = ((dvResults[15] != null) || (dvResults[15] != "")) ? dvResults[15] : string.Empty;
                    string AgrCornP30Plus = ((dvResults[16] != null) || (dvResults[16] != "")) ? dvResults[16] : string.Empty;
                    string AgrCornP30Minus = ((dvResults[17] != null) || (dvResults[17] != "")) ? dvResults[17] : string.Empty;
                    string MediumRating = ((dvResults[18] != null) || (dvResults[18] != "")) ? dvResults[18] : string.Empty;

                    double dvAgrCornP30Plus;
                    if (AgrCornP30Plus == " - " || AgrCornP30Plus == "")
                    {
                        dvAgrCornP30Plus = 0;
                        lbl260buAc.InnerHtml = dvAgrCornP30Plus.ToString();
                    }
                    else
                    {
                        dvAgrCornP30Plus = Convert.ToDouble(AgrCornP30Plus);
                        lbl260buAc.InnerHtml = string.Format("{0:#,00}", Convert.ToDouble(Math.Round((dvAgrCornP30Plus * 1000) / 500.0, 0) * 500.0));
                    }

                    double dvHighRating;
                    if (HighRating == " - " || HighRating == "")
                    {
                        dvHighRating = 0;
                        lbl220259buAc.InnerHtml = dvHighRating.ToString();
                    }
                    else
                    {
                        dvHighRating = Convert.ToDouble(HighRating);
                        lbl220259buAc.InnerHtml = string.Format("{0:#,00}", Convert.ToDouble(Math.Round((dvHighRating * 1000) / 500.0, 0) * 500.0));
                    }

                    double dvMediumRating;
                    if (MediumRating == " - " || MediumRating == "")
                    {
                        dvMediumRating = 0;
                        lbl180buAc.InnerHtml = dvMediumRating.ToString();
                    }
                    else
                    {
                        dvMediumRating = Convert.ToDouble(MediumRating);
                        lbl180buAc.InnerHtml = string.Format("{0:#,00}", Convert.ToDouble(Math.Round((dvMediumRating * 1000) / 500.0, 0) * 500.0));
                    }

                    double dvLowRating = Convert.ToDouble(LowRating);
                    if (LowRating == " - " || LowRating == "")
                    {
                        dvLowRating = 0;
                        lbl140buAc.InnerHtml = dvLowRating.ToString();
                    }
                    else
                    {
                        dvLowRating = Convert.ToDouble(LowRating);
                        lbl140buAc.InnerHtml = string.Format("{0:#,00}", Convert.ToDouble(Math.Round((dvLowRating * 1000) / 500.0, 0) * 500.0));
                    }

                    double dvAgrCornP30Minus;
                    if (AgrCornP30Minus == " - " || AgrCornP30Minus == "")
                    {
                        dvAgrCornP30Minus = 0;
                        lbl100buAc.InnerHtml = dvAgrCornP30Minus.ToString();
                    }
                    else
                    {
                        dvAgrCornP30Minus = Convert.ToDouble(AgrCornP30Minus);
                        lbl100buAc.InnerHtml = string.Format("{0:#,00}", Convert.ToDouble(Math.Round((dvAgrCornP30Minus * 1000) / 500.0, 0) * 500.0));
                    }
                    //}
                    //else
                    //{
                    //    divSeedRates.Visible = false;
                    //}

                    //if (string.IsNullOrEmpty(dvSeedGuideCatalog.InnerHtml.Trim()))
                    //{
                    //    seedGuideCatalog.Attributes.Add("style", "display:none;");
                    //}
                    //dvRetailer.InnerHtml = (!string.IsNullOrEmpty(dvResults[10])) ? dvResults[10] : string.Empty;
                    //dvBrandRetailer.InnerHtml = (!string.IsNullOrEmpty(dvResults[11])) ? dvResults[11] : string.Empty;
                    string strBrand = (!string.IsNullOrEmpty(dvResults[12])) ? dvResults[12] : string.Empty;
                    if (!string.IsNullOrEmpty(strBrand.Trim()) && strBrand.ToLower().Trim() == "enogen")
                    {
                        dvMainBrand.Attributes.Remove("class");
                        dvMainBrand.Attributes.Add("class", "brand-enogen");
                        dvMainImgLogo.Src = "https://" + HttpContext.Current.Request.Url.Authority + "/images/gh-corn.jpg";
                        imageAnchor.Attributes.Add("href", "https://" + HttpContext.Current.Request.Url.Authority + "/corn");
                    }
                    else
                    {
                        dvMainBrand.Attributes.Remove("class");
                        dvMainBrand.Attributes.Add("class", "brand-gh");
                        dvMainImgLogo.Src = "https://" + HttpContext.Current.Request.Url.Authority + "/images/gh-corn.jpg";
                        imageAnchor.Attributes.Add("href", "https://" + HttpContext.Current.Request.Url.Authority + "/corn");
                    }
                    GetTechSheetDetails(prodName);
                    string[] splitString = { "<ul>", "<li>", "</li>", "</ul>" };
                    string[] bulletList = dvBulletedPoints.InnerHtml.Split(splitString, StringSplitOptions.RemoveEmptyEntries);
                    Session["CornMetaDesc"] = dvPageTitle.InnerHtml.Trim() + ". " + bulletList[1].Trim() + ". " + bulletList[2].Trim() + ".";

                }
                else
                {
                    //dvMainBrand.InnerHtml = "";
                    //dvMainBrand.Attributes.Add("style", "color:red");
                    //dvMainBrand.InnerHtml = "<strong>Product does not exist.</strong>";
                    Response.Redirect("~/Product-Finder/Corn.aspx");
                }
            }
            finally { }
        }

        /// <summary>
        /// Method to load the corn product details
        /// </summary>
        /// <param name="productName">product name to fetch details</param>
        ///  /// <param name="Pagename">Page name to fetch details</param>
        /// <returns></returns>
        [System.Web.Services.WebMethod]
        public static string GetProductDetailsDataForUs(string prodName, string crop)
        {
            var jsonResult = string.Empty;
            DataTable dtProductDetail = new DataTable();
            DataTable dtTechSheet = new DataTable();
            IProduct product = new Product();
            ICornProduct cornProduct = new CornProduct();
            DataTable dtFinal = new DataTable();
            try
            {
                if (!string.IsNullOrEmpty(prodName))
                {
                    // dtTechSheet = cornProduct.GetTechsheet(prodName, true);
                }

                dtProductDetail = product.GetProductDetailDataInfo(prodName, crop);
                if (/*dtTechSheet.Rows.Count > 0 &&*/ dtProductDetail.Rows.Count > 0)
                {
                    var joinResult = (from p in dtProductDetail.AsEnumerable()
                                      join t in dtTechSheet.AsEnumerable()
                                      on p.Field<string>("Product").Contains("Brand") ? p.Field<string>("Product").Replace("Brand", " ").Trim() : p.Field<string>("Product") equals t.Field<string>("Prod_Name") into tempJoin
                                      from leftJoin in tempJoin.DefaultIfEmpty()
                                      select new
                                      {
                                          Product = p.Field<string>("Product"),
                                          Brand = p.Field<string>("Brand"),
                                          Description = p.Field<string>("Description"),
                                          Maturity = p.Field<decimal>("Maturity").ToString("0.#"),
                                          CHU = p.Field<int>("CHU"),
                                          IsNew = p.Field<int>("IsNew"),
                                          BulletFeature = p.Field<string>("BulletFeature"),
                                          Hybrids = p.Field<string>("Hybrids"),
                                          HybridType = p.Field<string>("HYBRID_Type"),
                                          Techsheet_Name = leftJoin != null ? leftJoin.Field<string>("Techsheet_Name") : ""
                                      }).ToList();

                    dtFinal = CommonUtility.ToDataTable(joinResult);
                }

                jsonResult = JsonConvert.SerializeObject(dtFinal);
                return jsonResult;
            }
            catch (Exception ex)
            {
                ExceptionLog.fnLogException(ex.Message, ex.StackTrace, System.DateTime.Now);
                return jsonResult;
            }
            finally
            {
                dtProductDetail?.Dispose();
            }
        }
    }
}

