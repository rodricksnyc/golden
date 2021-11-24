using System;
using System.Collections.Generic;
using System.Configuration;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using GoldenHarvest.BusinessLogic.Sign_up;

namespace Golden_Harvest.sign_up
{
    public partial class _default : System.Web.UI.Page
    {
        #region global variable
        public static string user = ConfigurationManager.AppSettings["JWTTokenName_SF"].ToString();
        public static string password = ConfigurationManager.AppSettings["JWTTokenPwd_SF"].ToString();
        public static string module = ConfigurationManager.AppSettings["SFModule"].ToString();
        public static string apikey = string.Empty;
        #endregion
        #region ApplicationName
        private string applicationName;
        public string ApplicationName
        {
            get
            {
                if (applicationName == null)
                {
                    applicationName = ConfigurationManager.AppSettings["ApplicationName"].ToString();
                }
                return applicationName;
            }
        }
        #endregion
        protected void Page_Load(object sender, EventArgs e)
        {
            Getauthenticate().Wait();
        }
        public static async Task Getauthenticate()
        {
            string responseString = string.Empty;
            try
            {
                IEnumerable<string> lsHeaders;
                var client = new HttpClient();
                var pairs = new List<KeyValuePair<string, string>>
                {
                    new KeyValuePair<string, string>("UserName", user),
                    new KeyValuePair<string, string>("Password", password),
                    new KeyValuePair<string, string>("Module", module)
                };

                var content = new FormUrlEncodedContent(pairs);
                var APIURL = ConfigurationManager.AppSettings["SyngentaSFAPI"].ToString();
                var uri = new Uri(APIURL + "login");

                var response = client.PostAsync(uri, content).Result;

                if (response.IsSuccessStatusCode)
                {

                    var checkApiKeyExists = response.Headers.TryGetValues("Api-Key", out lsHeaders);
                    responseString = await response.Content.ReadAsStringAsync();

                }

            }
            catch (Exception ex)
            {
                string path = HttpContext.Current.Request.Url.AbsoluteUri.ToString();
                string ApplicationName = ConfigurationManager.AppSettings["ApplicationName"].ToString();
            }
            apikey = responseString.ToString();
        }

        [System.Web.Services.WebMethod]
        public static string SendData(string FirstName, string LastName, string Email, string CellPhone, string ZipCode, string EmailCode, string CellCode)
        {

            SignUpBL signUpBL = new SignUpBL();
            if (string.IsNullOrEmpty(apikey))
            {
                Getauthenticate().Wait();
            }
            string result = signUpBL.CallApi(apikey, FirstName, LastName, Email, CellPhone, ZipCode, EmailCode, CellCode);
            return result;
        }
        //private string SFAuthentication()
        //{
        //    try
        //    {
        //        Username = ConfigurationManager.AppSettings["username"];
        //        Password = ConfigurationManager.AppSettings["password"] + ConfigurationManager.AppSettings["securitytoken"];
        //        ClientId = ConfigurationManager.AppSettings["clientId"];
        //        ClientSecret = ConfigurationManager.AppSettings["clientSecret"];

        //        String jsonResponse;
        //        using (var client = new HttpClient())
        //        {
        //            var request = new FormUrlEncodedContent(new Dictionary<string, string>
        //        {
        //            {"grant_type", "password"},
        //            {"client_id", ClientId},
        //            {"client_secret", ClientSecret},
        //            {"username", Username},
        //            {"password", Password}
        //        }
        //            );
        //            request.Headers.Add("X-PrettyPrint", "1");
        //            var response = client.PostAsync(LOGIN_ENDPOINT, request).Result;
        //            jsonResponse = response.Content.ReadAsStringAsync().Result;
        //        }
        //        if (!jsonResponse.Contains("error"))
        //        {
        //            var values = JsonConvert.DeserializeObject<Dictionary<string, string>>(jsonResponse);
        //            AuthToken = values["access_token"];
        //            InstanceUrl = values["instance_url"];
        //            string result = InsertDataInSalesForce();
        //            return result;
        //        }
        //        string path = HttpContext.Current.Request.Url.AbsoluteUri.ToString();
        //        return "fail";
        //    }
        //    catch (Exception ex)
        //    {
        //        string path = HttpContext.Current.Request.Url.AbsoluteUri.ToString();
        //        return "fail";
        //    }
        //}


    }
}