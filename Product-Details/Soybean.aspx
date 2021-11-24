<%@ Page Title="" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="Soybean.aspx.cs" Inherits="Golden_Harvest.Product_Details.Soybean" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("~/styles/product-detail.css?version=3.0")%>'/>
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("~/styles/soyproductdetail.css?version=4.0")%>'/>
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("~/styles/print-page.css")%>'/>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <div id="dvMainBrand" runat="server" class="brand-nksoy">
        <div id="dvloading" runat="server" class="dvLoadingImage" style="display: none;">
        </div>
        <div class="container">
              <div class="row">
             <div class="col-xs-12 col-xs-offset-4 headerlogo">                            
              <img   src="/images/gh-corn.jpg" />
             </div></div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-12 col-md-8">
                            <%-- Swap out pageTitle depending on brand --%>
                            <div>
                                <h1 class="pageTitle">
                                    <div id="dvPageTitle" runat="server">
                                    </div>
                                </h1>
                            </div>
                        </div>
                        <%--Please Remove Start--%>
                        <div class="col-xs-6 hidden">
                            <a id="imageAnchor" runat="server">
                                <img id="dvMainImgLogo" runat="server" class="seed-logo" src="images/nk-soy.jpg" />
                            </a>
                        </div>
                        <%--Please Remove END--%>
                    </div>
                </div>
            </div>
            <section id="product-detail">
                <div class="row">
                    <div class="hero clearfix">
                        <div class="col-sm-12">
                            <div class="heroTitle">
                                <div id="dvHeroTitle" runat="server"></div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="product-container">
                                <div id="dvProductRmValue" runat="server"></div>
                            </div>
                         <div class="product-container" style="margin-bottom:-18px; margin-top:-3px">
                            <div id="lblBrands" runat="server"  clientidmode="Static"></div>
                        </div>
                        </div>
                        <div class="col-xs-12 col-sm-10 col-md-8">
                            <div class="productStyles" id="dvBulletedPoints" runat="server"></div>
                        </div>

                        <div class="utility-buttons hidden-xs">
                            <a class="print-button" href="#" onclick="window.print();"></a>
                            <a class="email-button" href="#"></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="featuredContent">
<%--                <div class="row eblast-row">
                    <div class="col-sm-12 col-lg-8 eblast-content">
                        <h2>This is the e-blast content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt pharetra dui et scelerisque. Ut euismod imperdiet arcu, ut elementum orci pretium vel. Aenean consectetur vitae risus id scelerisque. Ut iaculis sit amet elit a consequat. Etiam id urna a velit cursus varius. Nullam fringilla ultricies semper. Duis id malesuada dolor.</p>
                    </div>
                </div>--%>
                <div class="row cont-row"></div>
            </section>
            <section id="key">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="detail-key">
                            <div class="row">
                                <div class="col-sm-1">
                                    <span class="sectionTitle">Key</span>
                                </div>
                                <div class="col-sm-3">
                                 <%--   <div class="key-item">
                                        <div class="icon">1</div>
                                        =&nbsp;&nbsp;&nbsp;Best</div>
                                    <div class="key-item">
                                        <div class="icon">9</div>
                                        =&nbsp;&nbsp;&nbsp;Worst</div>--%>
                                        <div class="key-item">
                                        <strong>1</strong> = Best</div>
                                       <div class="key-item">
                                        <strong>9</strong> = Worst</div>
                                </div>
                                <div class="col-sm-4">
                              <%--      <div class="key-item">
                                        <div class="icon highly"></div>
                                        =&nbsp;&nbsp;Highly recommended</div>
                                    <div class="key-item">
                                        <div class="icon most"></div>
                                        =&nbsp;&nbsp;Recommended in most situations</div>
                                    <div class="key-item">
                                        <div class="icon appropriate"></div>
                                        =&nbsp;&nbsp;Use with appropriate management</div>--%>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="key-item"><strong>B</strong>= Best</div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="key-item"><strong>G</strong>= Good</div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="key-item"><strong>F</strong>= Fair</div>
                                        </div>
                                    </div>
                                     
                                     
                                </div>
                                <div class="col-sm-4">
                                 <%--   <div class="key-item">
                                        <div class="icon nr"></div>
                                        =&nbsp;&nbsp;Not recommended</div>
                                    <div class="key-item">
                                        <div class="icon na"></div>
                                        =&nbsp;&nbsp;Not applicable/No data</div>
                                        <div class="key-item">** Race not specified</div>--%>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="key-item"><strong>P</strong> = Poor</div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="key-item"><strong>-</strong> = NA</div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="key-item">** Race not specified</div>
                                        </div>
                                    </div>   
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="tiles">
                <div class="row tiles">
                    <div class="col-sm-6 col-lg-4">
                        <div class="detail-tile">
                        <span class="sectionTitle">Agronomic Characteristics</span>
                            <div class="chart-table" id="dvAgronomicChar" runat="server">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="detail-tile">
                            <span class="sectionTitle">Disease Tolerance</span>
                            <div id="dvDiseaseTolerance" runat="server"></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="detail-tile">
                            <span class="sectionTitle">Plant Characteristics</span>
                            <div class="chart-table" id="dvPlantCharecter" runat="server">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="detail-tile">
                            <span class="sectionTitle">Disease and Pest</span>
                            <div class="chart-table" id="dvDiseaseAndPest" runat="server">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="detail-tile">
                            <span class="sectionTitle">Adaptation to Soil Types</span>
                            <div class="row">
                                <div class="col-xs-2 col-xs-push-1">
                                    <div id="dvAdaptionSoilTypes" runat="server"></div>
                                </div>
                                <div class="col-xs-8 col-xs-push-1">
                                    <ul>
                                      <li style="height: 21px;">Drought prone</li>
                                        <li style="height: 21px;">High pH</li>
                                        <li style="height: 21px;">Highly productive</li>
                                        <li style="height: 21px;">Variable</li>
                                        <li style="height: 21px;">Poorly drained</li>
                                        <%--<li style="height: 21px;">Drought prone</li>
                                        <li style="height: 21px;">High pH</li>
                                        <li style="height: 21px;">Highly productive</li>
                                        <li style="height: 21px;">Variable</li>
                                        <li style="height: 21px;">Poorly drained</li>--%>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div id="dvTechSheet" runat="server"></div>
                    </div>

                </div>
            </section>
            <hr />
            
            <section id="hybrid-search">
                <div class="row">
                    <div class="col-sm-5 col-md-4 col-sm-push-1 col-md-push-2">
                        <span class="productStyles">SEARCH BY PRODUCT NAME</span>
                    </div>
                    <div class="col-sm-5 col-md-4 col-sm-push-1 col-md-push-2">
                        <form>
                            <input id="txtSearch" runat="server" type="text" placeholder="Enter product name" />
                            <input type="button" id="btnSearch" runat="server" onclick="LoadProductDetails();" value="&nbsp;" />
                        </form>
                        <div id="errorTextValue" runat="server" style="display: none; color: Red;"></div>
                    </div>
                </div>
            </section>
           <%-- <section id="products-results">
                <div class="row lgl-info">
                    <div class="col-xs-12">
                        <p>Genuity<sup>&reg;</sup>, Genuity and Design, Genuity Icons, Roundup Ready 2 Yield<sup>&reg;</sup>, and Roundup Ready 2 Xtend<sup>&reg;</sup> are registered trademarks of Monsanto Technology LLC used under license. Golden Harvest Soybean varieties are protected under granted or pending U.S. or Canadian variety patents and other intellectual property rights. Seeds containing the Genuity Roundup Ready 2 Yield or Roundup Ready 2 Xtend trait may be protected under numerous United States and Canadian patents. It is unlawful to save Golden Harvest soybeans, Genuity Roundup Ready 2 Yield soybeans or Roundup Ready 2 Xtend soybeans for planting or transfer to others for use as a planting seed, regardless of the trait(s) within the seed. Follow grain marketing and all other stewardship directions. Details of these requirements can be found in the Syngenta Stewardship Agreement. Liberty<sup>&reg;</sup>, LibertyLink<sup>&reg;</sup>, and the Water Droplet logo are trademarks of Bayer. STS<sup>&reg;</sup> is a registered trademark of DuPont.</p>
                    </div>
                </div>
            </section>--%>
             <div class="row">
                    <div class="col-sm-12">
                        <div class="product-finder-legal">
                            <p id="mainBody_dvLegalText">Performance assessments are based upon results or analysis of public information, field observations and/or internal Syngenta evaluations. Product performance assumes disease presence. The names of all soybean products listed are Brands.<br /><br />
                                
                                ©2020 Syngenta. <b>Under federal and local laws, only dicamba-containing herbicides registered for use on dicamba-tolerant varieties may be applied. See product labels for details and tank mix partners.</b> Golden Harvest® Soybean varieties are protected under granted or pending U.S. variety patents and other intellectual property rights, regardless of the trait(s) within the seed. The Roundup Ready 2 Yield® and Roundup Ready 2 Xtend® traits may be protected under numerous United States patents. It is unlawful to save soybeans containing these traits for planting or transfer to others for use as a planting seed. Roundup Ready 2 Yield® and Roundup Ready 2 Xtend® are trademarks used under license from Monsanto Technology LLC. LibertyLink®, Liberty® and the Water Droplet logo are registered trademarks of BASF. GT27™ is a trademark of M.S. Technologies and BASF. Only 2,4-D choline formulations with Colex-D® Technology are approved for use with ENLIST E3® soybeans. ENLIST E3® soybean technology is jointly developed with Dow AgroSciences LLC and MS Technologies LLC. The ENLIST trait and ENLIST Weed Control System are technologies owned and developed by Dow Agrosciences LLC. ENLIST® and ENLIST E3® are trademarks of Dow AgroSciences LLC. STS® is a registered trademark of DuPont. The trademarks or service marks displayed or otherwise used herein are the property of a Syngenta Group Company. All other trademarks are the property of their respective owners.</p>
                        
                         <div class="legal-images">
                              <div class="row">
                                <div class="col-sm-2">
                                   <img src="<%=ResolveUrl("~/Images/global/liberty-link.svg")%>" />
                                </div>
                                <div class="col-sm-10">
                                    <p style="font-size: 12px;line-height: 1.5em;margin-left:-4rem;margin-top:0.5rem;float:left;overflow:auto;">Seed products with the LibertyLink® (LL) trait are resistant to the herbicide glufosinate ammonium, an alternative to glyphosate in corn and soybeans, and combine high-yielding genetics with the powerful, non-selective, postemergent weed control of Liberty® herbicide for optimum yield and excellent weed control.</p>
                                </div>
                         </div>
                       </div>
                          
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="qualtrics-page-category hidden" id="Category">GHS Soybean varieties</div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="Server">
    <script src="//code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
    <script src='<%=ResolveUrl("~/scripts/product-detail.js?version=3.0")%>'></script>
    <script src='<%=ResolveUrl("~/scripts/SoyProductDetail.js?version=3.0")%>'></script>
</asp:Content>
