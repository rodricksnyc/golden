using System;
using System.Web.Script.Services;
using System.Web.Services;

namespace Golden_Harvest.sproutplayer
{
    public partial class Default : System.Web.UI.Page
    {
        private const string key = "21720ebd0fcc9cf5fbc6d12563ececbf";
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public static string GetVideos(string tagName)
        {
            string jsonString = null;

            try
            {
                if (!string.IsNullOrEmpty(tagName))
                {
                    System.Net.WebRequest request = System.Net.WebRequest.Create("https://api.sproutvideo.com/v1/videos?tag_name=" + tagName);
                    request.Method = "GET";
                    request.ContentType = "json";
                    request.Timeout = 5000;
                    request.UseDefaultCredentials = true;
                    request.Headers.Add("SproutVideo-Api-Key", key);

                    var httpResponse = (System.Net.HttpWebResponse)request.GetResponse();

                    if (httpResponse.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        using (System.IO.StreamReader sreader = new System.IO.StreamReader(httpResponse.GetResponseStream()))
                        {
                            jsonString = sreader.ReadToEnd();
                        }
                    }
                    httpResponse.Dispose();
                }
            }
            catch (Exception ex)
            {
                //TODO Log the exception on to database            
            }
            finally
            {

            }
            return jsonString;
        }
    }
}