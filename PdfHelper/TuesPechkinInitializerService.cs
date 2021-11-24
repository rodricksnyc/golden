using System;
using System.IO;
using TuesPechkin;


/// <summary>
/// Summary description for TuesPechkinInitializerService
/// </summary>
public class TuesPechkinInitializerService
{
    private static string staticDeploymentPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "wkhtmltopdf");

    public static void CreateWkhtmltopdfPath()
    {
        if (Directory.Exists(staticDeploymentPath) == false)
        {
            Directory.CreateDirectory(staticDeploymentPath);
        }
    }

    public static IConverter converter =
        new ThreadSafeConverter(
            new RemotingToolset<PdfToolset>(
                // new Win64EmbeddedDeployment(
                new WinAnyCPUEmbeddedDeployment(
                    new StaticDeployment(staticDeploymentPath)
                )
            )
        );

    public TuesPechkinInitializerService()
    {

    }
}