<%@ Page Title="Soybean Seeds | Soybean Hybrids | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="Soybeans.aspx.cs" Inherits="Golden_Harvest.soybeanlanding.Soybeans" %>

<%@ Register Src="~/UserControls/ExperienceSites.ascx" TagPrefix="ES" TagName="ExperienceSites" %>
<%@ Register Src="~/UserControls/AgronomicUserControl.ascx" TagPrefix="AUC" TagName="Agronomy" %>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="Server">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css" />
    <link rel="stylesheet" type="text/css" href='<%= ResolveUrl("~/styles/autocomplete.css")%>'>
    <style>
        @media screen and (max-width: 768px) {
            .ga-banner img {
                max-width: 165px;
            }
            #brand-story .social-follow {
                margin-top: 33px;
            }
        }
    </style>
    <meta name="Description" content="Golden Harvest soybean seeds provide advanced technology to help soybeans reach their full potential. Find the right soybean varieties for your fields." />

    <script type="application/ld+json">
    {
      "@context": "http://schema.org/", 
      "@type": "Product", 
      "name": "Soybean seeds",
      "image": "",
      "description": "Golden Harvest soybean seeds provide advanced technology to help soybeans reach their full potential. Find the right soybean varieties for your fields.",
      "brand": "Golden Harvest Soybean Seeds"
    }
    </script>
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="mainBody" runat="Server">

    <section id="soybeans-hero">
        <div class="hero-holder" style="background-image: url('<%=ResolveUrl("~/images/soybeans/soybeans-hero.jpg")%>');"></div>
    </section>

    <section id="soybeans-intro" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h1>Golden Harvest Soybeans</h1>
                    <p>Golden Harvest<sup>&reg;</sup> soybean seeds bring you top-end yield potential paired with the industry’s broadest choice of soybean herbicide tolerance trait platforms. With nearly 900 local trials, our broad portfolio of soybean varieties is bred, tested and proven locally to protect against many of today’s toughest threats. Our Golden Harvest Seed Advisors are ready to help you select the right soybean varieties for the right fields and deliver Service 365, which is our year-round commitment to doing whatever it takes to optimize soybean yield potential.</p>
                    <p>Our soybean portfolio, which now includes Gold Series soybeans, offers farmers access to Enlist E3<sup>&reg;</sup> soybean trait technology, Roundup Ready 2 Xtend<sup>&reg;</sup> and LibertyLink<sup>&reg;</sup> GT27<sup>&reg;</sup> trait technology.</p>
                    <div class="row">
                        <div class="col-sm-2 col-xs-3">
                            <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/gold-series") %>">
                                <img src='<%=ResolveUrl("../Images/soybeans/logo-goldSeries.svg")%>' alt="Gold Series" style="max-height:58px;margin:15px auto 25px auto; display: block;"/>
                            </a>
                        </div>
                        <div class="col-sm-10 col-xs-9">
                            <p><a href="https://www.goldenharvestseeds.com/gold-series">Gold Series soybeans</a>, our first-ever line of soybeans with exclusive genetics, offers farmers proven performance in addition to broad herbicide trait choice.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2 col-xs-3">
                            <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/soybean/product-finder?filters=E3,E3STS") %>">
                                <img src="<%=ResolveUrl("../images/soybeans/enlist%20e3.svg") %>" alt="Enlist E3" style="max-height: 50px; display: block; margin: 0 auto;" />
                            </a>
                        </div>
                        <div class="col-sm-10 col-xs-9".
                            <p><a href="https://www.goldenharvestseeds.com/soybean/product-finder?filters=E3,E3STS">Enlist E3<sup>&reg;</sup></a> soybeans provide yield potential and agronomics and offer superior application flexibility and tank mix options to manage resistant weeds.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2 col-xs-3">
                            <a href="https://www.goldenharvestseeds.com/soybean/product-finder?filters=RR2XSTS,RR2X">
                                <img src='<%=ResolveUrl("../Images/soybeans/Roundup Ready 2 Xtend.svg")%>' alt="Roundup Ready 2 Xtend soybeans" style="max-height: 85px; max-width: 125px; margin: 25px auto 0 auto; display: block;"/>
                            </a>
                        </div>
                        <div class="col-sm-10 col-xs-9">
                            <p><a href="https://www.goldenharvestseeds.com/soybean/product-finder?filters=RR2XSTS,RR2X">Roundup Ready 2 Xtend<sup>&reg;</sup> soybeans</a> deliver a full portfolio of proven yield performance with defensive trait options.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2 col-xs-3">
                            <a href="https://www.goldenharvestseeds.com/soybean/product-finder?filters=LLGT27STS,LLGT27">
                                <img src='<%=ResolveUrl("../Images/soybeans/LibertyLink GT27.svg")%>' alt="LibertyLink GT27 soybeans" style="max-height: 85px; max-width: 115px; margin: 25px auto 0 auto; display: block;"/>
                            </a>
                        </div>
                        <div class="col-sm-10 col-xs-9">
                            <p><a href="https://www.goldenharvestseeds.com/soybean/product-finder?filters=LLGT27STS,LLGT27">LibertyLink<sup>&reg;</sup> GT27<sup>&reg;</sup> soybeans</a> are known for yield potential and agronomics and allow for in-season glufosinate and glyphosate applications.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <p style="margin-top:25px;"><a href='<%=ResolveUrl("https://www.goldenharvestseeds.com/seed-guide")%>'>View the 2022 Golden Harvest Seed Guide</a> to learn about our soybean products for your area.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" id="brand-story">
                    <div class="ga-banner">
                        <img alt="Gold Series" src="<%=ResolveUrl("../Images/soybeans/logo-goldSeries.svg")%>" />
                        <div>
                            <h2>Learn about our
                                <br class="visible-md" />
                                new gold series soybeans.</h2>
                            <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/gold-series")%>" class="btn-default" style="width: 175px;">Learn More</a>
                        </div>
                    </div>

                    <div class="social-follow top-padding">
                        <h3>FOLLOW US FOR
                            <br class="hidden-xs hidden-sm" />
                            AGRONOMIC<br />
                            NEWS AND INSIGHTS:</h3>
                        <div class="social-icons">
                            <a href="https://www.facebook.com/GldnHarvest/" target="_blank" title="Golden Harvest Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/gldnharvest" target="_blank" title="Golden Harvest Twitter"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="soybeans-yield-results" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2>Find the right Golden Harvest Varieties for your Fields</h2>
                </div>
                <a id="yield-search" href="#"></a>
            </div>

            <div class="row yield-results-form">
                <div class="col-sm-4 col-md-3 vcenter">
                    <label>Yield Results For</label>
                    <p class="hidden-xs">&nbsp;</p>
                    <input id="searchinput" maxlength="5" onkeypress="return event.charCode >= 48 && event.charCode <= 57" type="text" placeholder="Enter Zip Code" />
                    <a id="yieldResults" class="btn-default" href="javascript:void(0);">Find Yield Results</a>
                    <label id="locationError" style="color: Red"></label>
                </div>
                <div class="hidden-sm col-sm-1 vertical-separator vcenter hidden-xs"><span></span></div>
                <div class="col-sm-4 col-md-3 find-products vcenter">
                    <label>Find Products</label>
                    <p>by relative maturity</p>
                    <input id="soybeanRmFrom" runat="server" onkeypress="return isDecimalNumber(this,event)" type="number" value="2.5" step="0.1" />
                    <span>to</span>
                    <input id="soybeanRmTo" runat="server" onkeypress="return isDecimalNumber(this,event)" type="number" value="3.5" step="0.1" />
                    <a id="soybeanMaturity" onclick="fnSoyMaturityValidation();" runat="server" href="javascript:void(0);" class="btn-default">Find Products</a>
                    <label id="maturityError" runat="server" style="color: Red"></label>
                </div>
                <div class="col-sm-2 form-separator vcenter">
                    <span>Or</span>
                </div>
                <div class="col-sm-4 col-md-3 vcenter">
                    <label class="hidden-xs">&nbsp;</label>
                    <p>by variety name</p>
                    <input id="soybeanVariety" runat="server" type="text" />
                    <a id="soybeanVarietyRedirect" runat="server" onclick="fnSoySetSession();" href="javascript:void(0);" class="btn-default">Look Up</a>
                    <label id="soybeanVarietyError" runat="server" style="color: Red"></label>
                </div>

            </div>
        </div>
    </section>

    <section id="experience-sites" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-7">
                    <img class="img-responsive visible-xs" src="<%=ResolveUrl("~/images/homepage/1_soybean_mobile_variety-stick.png")%>" alt="Alternate Text" />
                    <img class="hidden-xs" src="<%=ResolveUrl("~/images/homepage/2_soybean_desktop_variety-stick-with-callouts.png")%>" alt="Alternate Text" />
                    <div class="nomenclature-sub-heading">STRONG PERFORMER WITH EXCELLENT TOP-END YIELD POTENTIAL</div>
                    <div class="naming-container soybeans">
                        <div class="row">
                            <div class="col-sm-12 col-md-5 col-lg-4">
                                <div class="naming-description">
                                    <ul>
                                        <li class="li-spacing">Great defensive package anchored by outstanding SDS tolerance</li>
                                        <li class="li-spacing">Outstanding standability in an attractive plant type</li>
                                        <li class="li-spacing">Rps1c gene with above average field tolerance to Phytophthora Root Rot</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <img class="img-responsive visible-xs" src="<%=ResolveUrl("~/images/homepage/3_corn_mobile_chart-with-callout.png")%>" alt="Alternate Text" />
                                <img class="hidden-xs" src="<%=ResolveUrl("~/images/homepage/4_soybean_desktop_chart-with-type-logos-and-callout.png")%>" alt="Alternate Text" />
                            </div>
                        </div>

                        <div class="naming-description">
                            <ul class="letter-list">
                                <li class="first-tier-list"><strong>Soybean Brand:</strong> Ratings are based on field observations collected by Syngenta from multiple locations over multiple years. They represent comparisons with company products only.</li>
                                <li class="first-tier-list"><strong>RM: 3.0:</strong> Specific relative maturity for this variety.</li>
                                <li class="first-tier-list"><strong>Herbicide tolerance and other traits</strong>
                                </li>
                            </ul>
                            <div class="new-copy"><span><strong>NEW:</strong></span> Indicates varieties new for 2019</div>
                        </div>
                    </div>
                    <div class="col-sm-3"></div>
                </div>
            </div>
        </div>
    </section>

    <section id="naming-system" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2>Tools and Resources</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-3">
                    <div class="resource">
                        <a href="/seed-guide">
                            <img src="<%=ResolveUrl("/images/homepage/2022_GH_Seed_Guide_icon.jpg")%>">
                        </a>
                        <div class="details eq-height">
                            <a href="/seed-guide">
                                <div class="title">Golden Harvest Seed Guide</div>
                            </a>
                            <div class="specs">Download the 2022 Golden Harvest Seed Guide to find the soybean varieties best suited for your area.</div>
                        </div>
                        <a class="btn-default" href="/seed-guide">Find Seed Guide</a>
                    </div>
                </div>
                <%--
                <div class="col-sm-6 col-md-3">
                    <div class="resource">
                        <a target="_blank" href="../documents/golden-harvest-soybeans-portfolio-worksheet.pdf">
                            <img src="<%=ResolveUrl("~/images/homepage/golden-harvest-soybeans-portfolio-worksheet.jpg")%>">
                        </a>
                        <div class="details eq-height">
                            <a target="_blank" href="../documents/golden-harvest-soybeans-portfolio-worksheet.pdf">
                                <div class="title">Soybean Portfolio Worksheet</div>
                            </a>
                            <div class="specs">Find crop protection and seed treatment options to help you get the most out of your Golden Harvest soybeans.</div>
                        </div>
                        <a class="btn-default" href="../documents/golden-harvest-soybeans-portfolio-worksheet.pdf" target="_blank">Download</a>
                    </div>
                </div>
                --%>
                
                <div class="col-sm-6 col-md-3">
                    <div class="resource">
                        <a href="/p/agronomy-guide">
                            <img src="<%=ResolveUrl("~/Images/agronomy/agronomy-book-preview-sm.jpg")%>">
                        </a>
                        <div class="details eq-height">
                            <a href="/p/agronomy-guide">
                                <div class="title">Agronomy In Action 2021 Research Review</div>
                            </a>
                            <div class="specs">Discover expert advice on corn and soybean development, disease management, and cultivating a better harvest.</div>
                        </div>
                        <a class="btn-default" href="/p/agronomy-guide">Go To Download</a>
                    </div>
                </div>
       
            </div>
        </div>
    </section>

    <AUC:Agronomy ID="AgronomyUC" runat="server"></AUC:Agronomy>

    <section id="seed-treatments" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-push-2">
                    <h2 class="text-center">Soybean Seed Treatments</h2>
                    <p>Seeing our soybean varieties reach their maximum yield potential at harvest is always the end game. The first step toward that goal is making sure our genetics are protected before they reach the planter. Our advanced soybean seed treatments offer various options to help you protect against yield-reducing seed- and soil-borne diseases, and early-season insects.</p>
                    <div class="text-center">
                        <a target="_blank" class="btn-default" href="https://www.syngenta-us.com/crop-protection/seed-treatment">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="experience-sites" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <p class="legal-copy">&copy;<script type="text/javascript">document.write(new Date().getFullYear());</script> Syngenta. <strong>Important: Always read and follow label and bag tag instructions; only those labeled as tolerant to glufosinate may be sprayed with glufosinate ammonium-based herbicides.</strong> Golden Harvest<sup>&reg;</sup> Soybean varieties are protected under granted or pending U.S. variety patents and other intellectual property rights, regardless of the trait(s) within the seed. The <sup>&reg;</sup> Roundup Ready 2 Yield<sup>&reg;</sup> and Roundup Ready 2 Xtend<sup>&reg;</sup> traits may be protected under numerous United States patents. It is unlawful to save soybeans containing these traits for planting or transfer to others for use as a planting seed. Only dicamba formulations that employ VaporGrip<sup>&reg;</sup> Technology are approved for use with Roundup Ready 2 Xtend<sup>&reg;</sup> soybeans. Only 2,4-D choline formulations with Colex-D<sup>&reg;</sup> Technology are approved for use with Enlist E3<sup>&reg;</sup> Soybeans. Golden Harvest<sup>&reg;</sup> and the Syngenta Logo are trademarks of a Syngenta Group Company. LibertyLink<sup>&reg;</sup>, Liberty<sup>&reg;</sup> and the Water Droplet logo are registered trademarks of BASF. GT27<sup>&trade;</sup> is a trademark of M.S. Technologies and BASF. ENLIST E3<sup>&reg;</sup> soybean technology is jointly developed with Dow AgroScience LLC and MS Technologies LLC. ENLIST<sup>&reg;</sup> and ENLIST E3<sup>&reg;</sup> are trademarks of Dow AgroSciences LLC. All other trademarks are the property of their respective owners.</p>
                </div>
            </div>
        </div>
    </section>

    <asp:Label ID="zipCode" runat="server" Style="display: none"></asp:Label>
    <asp:Label ID="hdnLocation" runat="server" Style="display: none"></asp:Label>
    <label id="soybeanFlag" style="display: none;"></label>
    <div class="qualtrics-page-category hidden" id="Category">GHS Soybeans</div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="Server">
    <script src='<%=ResolveUrl("~/scripts/select2.min.js")%>'></script>
    <script src='<%=ResolveUrl("~/scripts/article-scripts.js?v=8.0")%>'></script>
    <script type="text/javascript" src='<%=ResolveUrl("~/scripts/common-landing.js?version=1.0")%>'></script>
    <script type="text/javascript" src='<%=ResolveUrl("~/scripts/soybean-landing.js?version=5.0")%>'></script>
    <asp:HiddenField ID="hiddencookie" runat="server" />
</asp:Content>
