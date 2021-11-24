<%@ Page Title="Farmer Biography – Riley A. | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="riley-a.aspx.cs"  %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="description" content="Farmer Riley A. shares his agronomy and agriculture experience growing Golden Harvest® soybean seeds." />
    <meta name="keywords" content="agriculture story, story of a farmer life" />
    <link href="<%=ResolveUrl("../css/farmer-bio.css") %>" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">

    <section id="breadCrumbs">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-8 col-md-push-2">
                    <ul>
                        <li><a href="<%=ResolveUrl("/product-follow-along/")%>">Follow a Product Home</a></li>
                        &gt;
                        <li><a href="<%=ResolveUrl("../blogs/riley-a.aspx") %>">Farmer Bio</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="farmerBio" class="non-arch">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-10 col-md-push-1">
                    <div class="farmer-bio">
                        <div class="farmer-img">
                            <img src="<%=ResolveUrl("../img/farmers/248x248.png")%>" alt="Riley A."/>
                        </div>
                        <div class="farmer-content">
                            <h2>Riley A.</h2>
                            <p><b>Golden Harvest farmer</b></p>
                            <p><b>Sanborn, ND</b></p>
                            <p>Riley A. has been farming for 15 years, and this is his first season planting Golden Harvest<sup>&reg;</sup> seeds. This season, Riley will share his experiences with Golden Harvest soybean GH0502XF, with the XtendFlex<sup>&reg;</sup> soybean trait platform, on his Sanborn, N.D., farm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="farmerBlogs" class="non-arch">
        <div class="container">
            <div class="row text-center">
                <h2>UPDATES FROM THIS FARMER</h2>
            </div>
            <div class="row">
                <div class="col-xs-10 col-xs-push-1 col-md-8 col-md-push-2">
                    <div class="blog-post">
                        <div class="blog-img">
                            <a href="<%=ResolveUrl("../blogs/riley-a/planting-soybeans-in-nd.aspx") %>">
                                <img src="<%=ResolveUrl("../img/thumbnails/planting-soybeans-in-nd-200x126.jpg") %>" />
                            </a>
                        </div>
                        <div class="blog-content">
                            <a href="<%=ResolveUrl("../blogs/riley-a/planting-soybeans-in-nd.aspx") %>">Planting GH0502XF soybeans in Sanborn, N.D.</a>
                            <p>After farming for 15 years, this is Riley A.'s first season planting Golden Harvest<sup>&reg;</sup> seeds on his Sanborn, N.D., farm. Keep reading to learn more about his planting experience with Golden Harvest soybean variety GH0502XF, and check back throughout the season for more updates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="pfa">
        <a href="<%=ResolveUrl("/product-follow-along/") %>">
            <div class="pfa-holder hidden-xs" style="background-image: url('<%=ResolveUrl("../img/pfa-hero-desktop.jpg")%>');"></div>
            <div class="mobile-pfa-holder visible-xs" style="background-image: url('<%=ResolveUrl("../img/pfa-hero-mobile.jpg")%>');"></div>
        </a>
    </section>

    <section id="cta" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row text-center">
                <div class="col-xs-12 col-md-8 col-md-push-2">
                    <h2>DISCOVER OUR PRODUCTS</h2>
                    <p>Learn more about the game-changing corn hybrids and soybean varieties we're following this season and discover the right match for your fields.</p>
                    <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/seed-guide/") %>" class="btn-default">Download Seed Guide</a>
                </div>
            </div>
        </div>
    </section>

    <section id="legal" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="col-xs-12">
                <p>
                    All photos and video are either the property of Syngenta or are used with permission.
                </p>
                <p>
                    &copy; <script type="text/javascript">document.write(new Date().getFullYear());</script> Syngenta. <b>Important: Always read and follow label and bag tag instructions; only those labeled as tolerant to glufosinate may be sprayed with glufosinate ammonium based herbicides.</b> Golden Harvest<sup>&reg;</sup> soybean varieties are protected under granted or pending U.S. variety patents and other intellectual property rights, regardless of the trait(s) within the seed. The Enlist E3<sup>&reg;</sup> soybean traits, the LibertyLink<sup>&reg;</sup>, the Roundup Ready 2 Xtend<sup>&reg;</sup>, Roundup Ready 2 Yield<sup>&reg;</sup> and XtendFlex<sup>&reg;</sup> traits may be protected under numerous United States patents. It is unlawful to save soybeans containing these traits for planting or transfer to others for use as a planting seed. The trademarks or service marks displayed or otherwise used herein are the property of a Syngenta Group Company. Roundup Ready 2 Xtend<sup>&reg;</sup>, Roundup Ready 2 Yield<sup>&reg;</sup> and XtendFlex<sup>&reg;</sup> are trademarks used under license from the Bayer Group. LibertyLink<sup>&reg;</sup> is a trademark used under license from BASF. ENLIST E3<sup>&reg;</sup> soybean technology is jointly developed with Dow AgroSciences LLC and MS Technologies LLC. The ENLIST trait and ENLIST Weed Control System are technologies owned and developed by Dow AgroSciences LLC. ENLIST<sup>&reg;</sup> and ENLIST E3<sup>&reg;</sup> are trademarks of Dow AgroSciences LLC. Agrisure Artesian<sup>&reg;</sup>, Agrisure Duracade<sup>&reg;</sup>, E-Z Refuge<sup>&reg;</sup>, Golden Harvest<sup>&reg;</sup> and the Syngenta logo are trademarks of a Syngenta Group Company. All other trademarks are the property of their respective third party owners. 
                </p>
                <p>
                    More information about Agrisure Duracade is available at <a href="http://www.biotradestatus.com/">http://www.biotradestatus.com/</a>.

                </p>
            </div>
        </div>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="server">
</asp:Content>