using System;
using System.Drawing.Printing;
//using Syngenta.ProductGuide.Business;
using LibWk = TuesPechkin;


/// <summary>
/// Summary description for PdfHelper
/// </summary>
public class PdfHelper
{
    public byte[] GetPdfFromHtml(string pageURL, string title)
    {
        try
        {
            var document = new LibWk.HtmlToPdfDocument
            {
                GlobalSettings =
                {
                    ProduceOutline = true,
                    DocumentTitle = title,
                    PaperSize = PaperKind.Letter, // Implicit conversion to PechkinPaperSize
                    OutputFormat = TuesPechkin.GlobalSettings.DocumentOutputFormat.PDF,
                    Margins =
                    {
                        Top = 0.1,     // cm
                        Bottom = 0.1,
                        Left = 0,
                        Right = 0,
                        Unit = TuesPechkin.Unit.Centimeters
                    },
                    Orientation = LibWk.GlobalSettings.PaperOrientation.Portrait

                },
                Objects =
                {
                    new LibWk.ObjectSettings
                    {
                        PageUrl = pageURL,
                        WebSettings = new LibWk.WebSettings
                        {
                            PrintMediaType = true,
                            PrintBackground = true,
                            LoadImages = true,
                            EnableIntelligentShrinking= false
                        }
                    }
                }
            };

            var result = TuesPechkinInitializerService.converter.Convert(document);
            return result;
        }
        catch (Exception ex)
        {
            ExceptionLog.fnLogException(ex.Message, ex.StackTrace, System.DateTime.Now);
            return null;
        }

    }
}