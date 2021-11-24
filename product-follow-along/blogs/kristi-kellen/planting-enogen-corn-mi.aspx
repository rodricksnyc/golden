<%@ Page Title="Farmer Update - Kristi Kellen" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="planting-enogen-corn-mi.aspx.cs" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="../../css/farmer-blogs.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <section id="breadCrumbs" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-8 col-md-push-2">
                    <ul>
                        <li><a href="<%=ResolveUrl("/product-follow-along/")%>">Follow a Product Home</a></li>
                        &gt;
                        <li><a href="<%=ResolveUrl("../../biography/kristi-kellen.aspx") %>">Farmer Bio</a></li>
                        &gt;
                        <li><a href="<%=ResolveUrl("./planting-enogen-corn-mi.aspx") %>">Farmer Update</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="blogPost" class="non-arch">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-8 col-md-push-2">
                    <div class="blog-title">
                        <h2>Planting Enogen corn in Westphalia, Mich.</h2>
                    </div>

                    <div class="blog-category">
                        <p><b>CATEGORIES: Enogen, Corn, E107C1, E109R3</b></p>
                    </div>

                    <div class="article-share">
                        <span>Share:</span>
                        <%--add article link after u parameter and create all of the og:tags in the head of the page--%>
                        <a class="facebook-share" data-sharing="facebook"><i class="fab fa-facebook-f"></i></a><%--href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fgoldenharvestseeds.com/product-follow-along/blogs/kristi-kellen/planting-enogen-corn.aspx">--%>
                        <%-- Add article link after URL parameter for twitter--%>
                        <a class="twitter-share" data-sharing="twitter"><i class="fab fa-twitter"></i></a><%--href="https://twitter.com/intent/tweet?text=I%20thought%20you%20would%20love%20this%20article&url=https%3A%2F%2F/product-follow-along/blogs/kristi-kellen/planting-enogen-corn.aspx">--%>
                        <%--add link to the body copy and subject copy can be whatever they want--%>
                        <a class="email-share" data-sharing="email"><i class="fa fa-envelope"></i></a><%--href="mailto:?subject=Check%20out%20this%20article%20on%20GoldenHarvest.com&body=https%3A%2F%2F/product-follow-along/blogs/kristi-kellen/planting-enogen-corn.aspx">--%>
                        <%-- Add button to print the article --%>
                        <a class="print-share" id="printBtn" data-sharing="print"><i class="fa fa-print"></i></a>
                    </div>

                    <div class="article-content">
                        <p>Kristi Kellen grows corn, soybeans, alfalfa and wheat on her Westphalia, Mich., farm. This season, Kristi planted <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/e107c1") %>">E107C1</a> and <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/e109r3") %>">E109R3</a> Enogen<sup>&reg;</sup> corn hybrids. Keep reading to learn more about her planting experience with these hybrids and check back throughout the season for updates on her experience.
                        </p>
                    
                        <p><b>Farm location:</b> Westphalia, Mich.</p>

                        <p><b>Soil type:</b> Sandy loam</p>

                        <p><b>Soil temperature at time of planting:</b> 61 °F</p>

                        <p><b>Planting depth:</b> 2 inches</p>

                        <p><b>Planting population:</b> 34,000 plants per acre</p>

                        <p><b>Field acreage:</b> 30 acres</p>

                        <p><b>Products planted:</b> 
                            <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/e109r3") %>">E109R3</a>-3000GT, an Enogen corn hybrid that provides outstanding stalk strength with a strong disease package. This hybrid is well adapted in and north of zone and performs best at medium to high plant populations. Kellen also planted <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/e107c1") %>">E107C1</a>-5122 E-Z Refuge<sup>&reg;</sup> seed this season, an Enogen corn hybrid that is an ideal choice for the Central and Eastern silage market.
                        </p>
                   
                        <p><b>Seed treatment applications:</b> Standard A250</p>

                        <p><b>Fertilizer applications:</b> 30-10-10</p>

                        <p><b>Why do you choose to plant Golden Harvest seeds?</b> I appreciate the value of Golden Harvest, and I have a great relationship with my dealer, Quality Ag Services.</p>
                    </div>

                    <div class="article-buttons">
                        <div class="button-row">
                                <a href="../../biography/kristi-kellen.aspx" class="btn-default">More From This Farmer</a>
                                <%--<a href="..." class="btn-default">Next Article</a>--%>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </section>

    <section id="pfa">
        <a href="<%=ResolveUrl("/product-follow-along/") %>">
            <div class="pfa-holder hidden-xs" style="background-image: url('<%=ResolveUrl("../../img/pfa-hero-desktop.jpg")%>');"></div>
            <div class="mobile-pfa-holder visible-xs" style="background-image: url('<%=ResolveUrl("../../img/pfa-hero-mobile.jpg")%>');"></div>
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
