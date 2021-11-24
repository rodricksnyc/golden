using System;
using System.Web;
using System.Web.UI.HtmlControls;
using GoldenHarvest.BusinessLogic;
using GoldenHarvest.BusinessLogic.Interfaces;

namespace Golden_Harvest.Product_Details
{
    public partial class Soybean : System.Web.UI.Page
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
                else if (Session["ProdNameSoy"] != null)
                {
                    prodName = Session["ProdNameSoy"].ToString();
                }
                else
                {
                    prodName = "S25-L9";
                }

                this.txtSearch.Attributes.Add("onkeypress", "checkLoadProduct(event)");
                System.Web.HttpBrowserCapabilities myBrowserCaps = Request.Browser;
                mobiledevice = myBrowserCaps.IsMobileDevice;
                if (!HttpContext.Current.Items["page"].ToString().ToUpper().StartsWith("E"))
                {
                    GetDetails(prodName);
                }
                else
                {
                    //dvMainBrand.InnerHtml = "";
                    //dvMainBrand.Attributes.Add("style", "color:red");
                    //dvMainBrand.InnerHtml = "<strong>Product does not exist.</strong>";
                    Response.Redirect("~/Product-Finder/Soybean.aspx");
                }
                SetBreadCrumbValues(prodName);

            }
            catch (Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// Method to get soybean product details
        /// </summary>
        /// <param name="prodName"></param>
        private void GetDetails(string prodName)
        {
            ISoybeanProduct product = null;
            try
            {

                product = new SoybeanProduct();// it should be dynamic (through UNITY)
                string productResult = product.GetProductDetailInfo(prodName, mobiledevice);
                if (!string.IsNullOrEmpty(productResult))
                {
                    char[] delimiterChars = { '@' };
                    string[] dvResults = productResult.Split(delimiterChars);
                    dvHeroTitle.InnerHtml = (!string.IsNullOrEmpty(dvResults[0])) ? dvResults[0] : string.Empty;
                    dvProductRmValue.InnerHtml = (!string.IsNullOrEmpty(dvResults[1])) ? dvResults[1] : string.Empty;
                    dvBulletedPoints.InnerHtml = (!string.IsNullOrEmpty(dvResults[2])) ? dvResults[2] : string.Empty;
                    dvAgronomicChar.InnerHtml = (!string.IsNullOrEmpty(dvResults[3])) ? dvResults[3] : string.Empty;
                    dvDiseaseTolerance.InnerHtml = (!string.IsNullOrEmpty(dvResults[4])) ? dvResults[4] : string.Empty;
                    dvPlantCharecter.InnerHtml = (!string.IsNullOrEmpty(dvResults[5])) ? dvResults[5] : string.Empty;
                    dvDiseaseAndPest.InnerHtml = (!string.IsNullOrEmpty(dvResults[6])) ? dvResults[6] : string.Empty;
                    dvPageTitle.InnerHtml = (!string.IsNullOrEmpty(dvResults[7])) ? dvResults[7] : string.Empty;
                    //dvSeedGuideCatalog.InnerHtml = (!string.IsNullOrEmpty(dvResults[8])) ? dvResults[8] : string.Empty;
                    //dvRetailer.InnerHtml = (!string.IsNullOrEmpty(dvResults[9])) ? dvResults[9] : string.Empty;
                    //dvBrandRetailer.InnerHtml = (!string.IsNullOrEmpty(dvResults[10])) ? dvResults[10] : string.Empty;
                    string strBrand = (!string.IsNullOrEmpty(dvResults[11])) ? dvResults[11] : string.Empty;
                    //SOC Hybrid detail page updates CR-245
                    dvAdaptionSoilTypes.InnerHtml = (!string.IsNullOrEmpty(dvResults[12])) ? dvResults[12] : string.Empty;
                    //EOC Hybrid detail page updates CR-245
                    lblBrands.InnerHtml = (!string.IsNullOrEmpty(dvResults[13])) ? dvResults[13] : string.Empty;
                    if (!string.IsNullOrEmpty(strBrand.Trim()))
                    {

                        dvMainBrand.Attributes.Remove("class");
                        dvMainBrand.Attributes.Add("class", "brand-gh-soy");
                        dvMainImgLogo.Src = "https://" + HttpContext.Current.Request.Url.Authority + "/images/gh-logo.jpg";
                        imageAnchor.Attributes.Add("href", "https://" + HttpContext.Current.Request.Url.Authority + "/corn");

                    }
                    //SeedProductDetail seedProductdetailObject = new SeedProductDetail();

                    GetTechSheetDetails(prodName);

                    string[] splitString = { "<ul>", "<li>", "</li>", "</ul>" };

                    string[] bulletList = dvBulletedPoints.InnerHtml.Split(splitString, StringSplitOptions.RemoveEmptyEntries);
                    Session["SoyMetaDesc"] = dvPageTitle.InnerHtml.Trim() + ". " + bulletList[1].Trim() + ". " + bulletList[2].Trim() + ".";
                }
                else
                {
                    //dvMainBrand.InnerHtml = "";
                    //dvMainBrand.Attributes.Add("style", "color:red");
                    //dvMainBrand.InnerHtml = "<strong>Product does not exist.</strong>";
                    //Response.StatusCode = 410;
                    Response.Redirect("~/Product-Finder/Soybean.aspx");

                }
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
            string techsheetURL = string.Empty;
            try
            {
                productTech = new Product();// it should be dynamic (through UNITY)
                string techsheetURL1 = productTech.GetTechnicalSheet(prodName).Result;
                if (!string.IsNullOrEmpty(techsheetURL1))
                {
                    techsheetURL = techsheetURL1;
                    if (!string.IsNullOrEmpty(techsheetURL))
                    {
                        string url = Request.Url.ToString().ToLower();
                        if (url.Contains("localhost") || url.Contains("15.141.25.179") || url.Contains("15.141.15.100") || url.Contains("stageiis7.") || url.Contains("stageproj."))
                        {
                            //  techsheetURL = @"http://15.141.25.153/ProductPage/Upload_pdf/techsheets/" + techsheetURL;
                            techsheetURL = @"http://assets.syngentaebiz.com/pdf/techsheets/" + techsheetURL;
                        }
                        else
                        {
                            techsheetURL = @"https://assets.syngentaebiz.com/pdf/techsheets/" + techsheetURL;
                        }
                    }
                }
                if (techsheetURL == string.Empty)
                {
                    techsheetURL = @"https://assets.syngentaebiz.com/pdf/techsheets/";
                }
                string techSheet = "<div class=\"detail-tile download hidden-xs\"><a target=\"_blank\" href=\"" + techsheetURL + "\">Download Tech Sheet<br/><span></span></a></div>";
                techSheet = techSheet + "<div class=\"col-sm-12 visible-xs\"><a class=\"learnMoreBtn\" target=\"_blank\" href=\"" + techsheetURL + "\">Download Tech Sheet</a></div>";
                dvTechSheet.InnerHtml = techSheet;

            }
            finally { }
        }

        public void SetMetaDescriptionTitle()
        {
            string url = HttpContext.Current.Request.Url.ToString();
            HtmlMeta keyWords = new HtmlMeta();
            HtmlMeta Desc = new HtmlMeta();
            try
            {
                keyWords.Name = "Keywords";
                Desc.Name = "Description";


                url = url.Substring(url.LastIndexOf("/") + 1);
                //Page.Title = url.ToUpper() + " | Syngenta";
                keyWords.Content = "Golden Harvest Soybeans, soybean seeds, Syngenta soybeans, Soybean plant";
                if (Session["SoyMetaDesc"] != null)
                {
                    Desc.Content = Session["SoyMetaDesc"].ToString();
                }

                else
                {
                    Desc.Content = "";
                }

                //Page.Header.Controls.Add(keyWords);
                //Page.Header.Controls.Add(Desc);
            }

            finally
            {
                if (Desc != null)
                {
                    Desc.Dispose();
                }
                if (keyWords != null)
                {
                    keyWords.Dispose();
                }
            }
        }

        /// <summary>
        /// Method to get the soybean product detail
        /// </summary>
        /// <param name="productName">product name to fetch details</param>
        /// <returns></returns>
        [System.Web.Services.WebMethod]
        public static string GetProductDetailIInfo(string productName)
        {
            ISoybeanProduct product = null;

            try
            {
                product = new SoybeanProduct();// it should be dynamic (through UNITY)
                return product.GetProductDetailInfo(productName, false);
            }
            finally { }

        }

        /// <summary>
        /// Method to get the user location details 
        /// </summary>
        /// <returns></returns>
        [System.Web.Services.WebMethod]
        public static string GetRetailerRedirectionInfo()
        {
            IProduct productDetails = null;
            try
            {
                productDetails = new Product();
                return productDetails.GetUserLocation("nkSoy");
            }
            finally { }

        }

        [System.Web.Services.WebMethod]
        public static string SetSession(string prodName)
        {
            try
            {
                HttpContext.Current.Session["ProdNameSoy"] = prodName;
                return "";
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
                return "https://" + HttpContext.Current.Request.Url.Authority;
            }
            finally { }
        }

        [System.Web.Services.WebMethod]
        public static string SetGHSession()
        {
            try
            {
                HttpContext.Current.Session["IsGHSoyBrand"] = "1";
                return "";
            }
            finally { }

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
                if (!string.IsNullOrEmpty(prodName))
                {
                    keyWords = new HtmlMeta();
                    Desc = new HtmlMeta();
                    keyWords.Name = "Keywords";
                    Desc.Name = "Description";
                    this.Page.Title = prodName.ToUpper() + " Soybean | Golden Harvest";
                    keyWords.Content = "GoldenHarvest Soybeans, soybean seeds, Syngenta soybeans, Soybean plant";

                    if (Session["SoyMetaDesc"] != null)
                    {
                        Desc.Content = Session["SoyMetaDesc"].ToString();
                    }
                    else
                    {
                        Desc.Content = "";
                    }
                    //this.Page.Header.Controls.Add(keyWords);
                    this.Page.Header.Controls.Add(Desc);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}