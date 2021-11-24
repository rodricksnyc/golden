using System;
using System.IO;
using System.Web.Hosting;

namespace Golden_Harvest.Seed_Guide
{
    public partial class seed_guide_preview : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [System.Web.Services.WebMethod]
        public static byte[] GetPdf(string htmlText, string title, string brand)
        {
            try
            {
                string htmlFileName = Guid.NewGuid().ToString() + "Page.html";
                PdfHelper pdfHelper = new PdfHelper();
                var html = File.ReadAllText(HostingEnvironment.MapPath("/Seed-Guide/Template/") + "template.html");

                htmlText = htmlText.Replace("/Images/seed-guides/seed-guide-seal.jpg", "../../Images/seed-guides/seed-guide-seal.jpg");
                htmlText = htmlText.Replace("/images/soybeans/logo-goldSeries.png", "../../Images/soybeans/logo-goldSeries.png");
                htmlText = htmlText.Replace("<p class=\"page-break\">&nbsp;</p>", "<p class=\"page-break\"></p><div class='sg-lockup col-xs-12'><img src='../../Images/global/golden_harvest_logo.png'></div>");

                html = html.Replace("%%Body%%", htmlText);
                File.WriteAllText(HostingEnvironment.MapPath("/Seed-Guide/Template/") + htmlFileName, html.ToString());
                var file = pdfHelper.GetPdfFromHtml(HostingEnvironment.MapPath("/Seed-Guide/Template/") + htmlFileName, title);
                File.Delete(HostingEnvironment.MapPath("/Seed-Guide/Template/") + htmlFileName);
                return file;
            }
            catch (Exception ex)
            {
                ExceptionLog.fnLogException(ex.Message, ex.StackTrace, System.DateTime.Now);
                return null;
            }

        }
    }
}