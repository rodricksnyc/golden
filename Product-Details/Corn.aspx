<%@ Page Title="" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="Corn.aspx.cs" Inherits="Golden_Harvest.Corn" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server" ClientIDMode="Static">
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("~/styles/CornProductDetail.css?version=5.0")%>' />
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("~/styles/product-detail.css?version=5.0")%>' />
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("~/styles/print-page.css")%>' />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server" ClientIDMode="Static">
    <div id="dvMainBrand" runat="server" clientidmode="Static" class="brand-gh">
        <div id="dvloading" runat="server" clientidmode="Static" class="dvLoadingImage" style="display: none;">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-12 col-md-8">
                            <div>
                                <h1 class="pageTitle">
                                    <div id="dvPageTitle" runat="server" clientidmode="Static">
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
                                <div id="dvProductRmValue" runat="server" clientidmode="Static"></div>
                            </div>
                            <div class="product-container" style="margin-bottom: -18px; margin-top: -3px">
                                <div id="lblBrands" runat="server" clientidmode="Static"></div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div id="dvBulletedPoints" class="productStyles" runat="server" clientidmode="Static"></div>
                        </div>
                        <div class="utility-buttons hidden-xs">
                            <a class="print-button" href="#" onclick="window.print();"></a>
                            <a class="email-button" href="#"></a>
                        </div>
                    </div>
                </div>
            </section>
            <%--adding this seciton for featired content from farm journal and in the futrure is hidden by default--%>
               <section id="featuredContent">
<%--                <div class="row eblast-row">
                    <div class="col-sm-12 col-lg-8 eblast-content">
                        <h2>This is the e-blast content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt pharetra dui et scelerisque. Ut euismod imperdiet arcu, ut elementum orci pretium vel. Aenean consectetur vitae risus id scelerisque. Ut iaculis sit amet elit a consequat. Etiam id urna a velit cursus varius. Nullam fringilla ultricies semper. Duis id malesuada dolor.</p>
                    </div>
                </div>--%>
                <div class="row cont-row"></div>
            </section>
            <%--  END Featured Content Section --%>
            <section id="key">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="detail-key">
                            <div class="row">
                                <div class="col-sm-1">
                                    <span class="sectionTitle">Key</span>
                                </div>
                                <div class="col-sm-3">
                                    <%-- <div class="key-item">
                                    <div class="icon">1</div>
                                    =&nbsp;&nbsp;&nbsp;Best</div>
                                <div class="key-item">
                                    <div class="icon">9</div>
                                    =&nbsp;&nbsp;&nbsp;Worst</div>--%>

                                    <div class="key-item"><strong>1</strong> = Best</div>
                                    <div class="key-item"><strong>9</strong> = Worst</div>
                                </div>

                                <div class="col-sm-8">
                                    <%--      <div class="key-item">
                                    <div class="icon">NR</div>
                                    =&nbsp;&nbsp;Not Recommended</div>
                                <div class="key-item">
                                    <div class="icon singleKey">A</div>
                                    =&nbsp;&nbsp;Average</div>
                                <div class="key-item">
                                    <div class="icon">VG</div>
                                    =&nbsp;&nbsp;Very Good</div>
                                <div class="key-item">
                                    <div class="icon singleKey">E</div>
                                    =&nbsp;&nbsp;Excellent</div>--%>
                                    <div class="key-item key-margin-right"><strong>B</strong> = Best</div>
                                    <div class="key-item key-margin-right"><strong>G</strong> = Good</div>
                                    <div class="key-item key-margin-right"><strong>F</strong> = Fair</div>
                                    <div class="key-item key-margin-right"><strong>P</strong> = Poor</div>
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
                            <span class="sectionTitle">Hybrid Maturity Snapshot</span>
                            <div class="row">
                                <div class="col-xs-8">
                                    <ul>
                                        <li>Relative maturity</li>
                                        <li>Silk RM</li>
                                        <li>Black layer RM</li>
                                        <li>Silk GDU</li>
                                        <li>Black layer GDU</li>
                                    </ul>
                                </div>
                                <div class="col-xs-4">
                                    <div id="dvRelativeMaturity" runat="server" clientidmode="Static"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="detail-tile">
                            <span class="sectionTitle">Agronomic Characteristics</span>
                            <div id="dvAgronomicChar" runat="server" clientidmode="Static"></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="detail-tile">
                            <span class="sectionTitle">Disease Tolerance</span>
                            <div class="row">
                                <div class="col-xs-2">
                                    <div id="dvDiseaseTolerance" runat="server" clientidmode="Static"></div>
                                </div>
                                <div class="col-xs-10">
                                    <ul>
                                        <li>Gray Leaf Spot</li>
                                        <li>Northern Corn Leaf Blight</li>
                                        <li>Goss’s Wilt</li>
                                        <li>Bacterial Leaf Streak</li>
                                        <li>Southern Corn Leaf Blight</li>
                                        <li>Eyespot</li>
                                        <li>Anthracnose Stalk Rot</li>
                                        <li>Tar Spot</li>
                                        <li>Fusarium Crown Rot</li>
                                        <li>Common Rust</li>
                                        <li>Southern Rust</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4">
                        <div class="detail-tile">
                            <span class="sectionTitle">Agronomic Management</span>
                            <strong>Performance in...</strong>
                            <div id="dvAgronomicmanagement" runat="server" clientidmode="Static"></div>

                            <div class="chart-labels">
                                <div class="chart-label">P</div>
                                <div class="chart-label">F</div>
                                <div class="chart-label">G</div>
                                <div class="chart-label">B</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="detail-tile">
                            <span class="sectionTitle">Plant/Ear Characteristics</span>
                            <div class="row">
                                <div class="col-xs-5">
                                    <ul>
                                        <li>Plant height</li>
                                        <li>Ear placement</li>
                                        <li>Ear flex</li>
                                        <li>Cob color</li>
                                        <li>Husk cover</li>
                                        <li>Leaf type</li>
                                        <li>Root type</li>
                                    </ul>
                                </div>
                                <div class="col-xs-7">
                                    <div id="dvPlantEarChar" runat="server" clientidmode="Static"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div id="dvTechSheet" runat="server" clientidmode="Static"></div>
                        <div id="dvTechSheetBtn" runat="server" clientidmode="Static"></div>
                    </div>




                </div>
            </section>
            <section id="seeding-rates">
                <div runat="server" id="divSeedRates">
                    <div class="row tiles">
                        <div class="col-sm-12">
                            <h3>Seeding Rates</h3>
                            <table>
                                <tr>
                                    <td>Yield Environment</td>
                                    <td>Target Seeds / Ac</td>
                                </tr>
                                <tr>
                                    <td>280 bu/Ac</td>
                                    <td>
                                        <label id="lbl260buAc" runat="server"></label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>240 bu/Ac</td>
                                    <td>
                                        <label id="lbl220259buAc" runat="server"></label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>200 bu/Ac</td>
                                    <td>
                                        <label id="lbl180buAc" runat="server"></label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>160 bu/Ac</td>
                                    <td>
                                        <label id="lbl140buAc" runat="server"></label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>120 bu/Ac</td>
                                    <td>
                                        <label id="lbl100buAc" runat="server"></label>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section id="hybrid-search">
                <div class="row">
                    <div class="col-sm-5 col-md-4 col-sm-push-1 col-md-push-2 productStyles">
                        <span>Search by Hybrid Name</span>
                    </div>
                    <div class="col-sm-5 col-md-4 col-sm-push-1 col-md-push-2">
                        <form>
                            <input id="txtSearch" runat="server" clientidmode="Static" type="text" placeholder="Enter hybrid name" />
                            <input type="button" id="btnSearch" runat="server" clientidmode="Static" onclick="LoadProductDetails();" value="&nbsp;" />
                        </form>
                        <div id="errorTextValue" runat="server" clientidmode="Static" style="display: none; color: Red;"></div>
                    </div>
                </div>
            </section>
            <div class="row">
                    <div class="col-sm-12">
                        <div class="product-finder-legal">
                            <p>Performance assessments are based upon results or analysis of public information, field observations and/or internal Syngenta evaluations. Product performance assumes disease presence.</p>
                            <p>©2020 Syngenta. <b>Important: Always read and follow label and bag tag instructions; only those labeled as tolerant to glufosinate may be sprayed with glufosinate ammonium-based herbicides.</b> Agrisure®, Agrisure Artesian®, Agrisure Duracade®, Agrisure Viptera®, and E-Z Refuge® are trademarks of a Syngenta Group Company. Liberty®, LibertyLink®, and the Water Droplet logo are trademarks of BASF. HERCULEX® and the HERCULEX Shield are trademarks of Dow AgroSciences, LLC. HERCULEX Insect Protection technology by Dow AgroSciences. YieldGard VT Pro® is a trademark of Monsanto Technology LLC. The trademarks or service marks displayed or otherwise used herein are the property of a Syngenta Group Company. All other trademarks are the property of their respective owners.</p>
                            <div class="legal-images">
                                  <img src="<%=ResolveUrl("~/Images/global/herculex-xtra.svg")%>" />
                                <img src="<%=ResolveUrl("~/Images/global/herculex-1.svg")%>" />
                                <img src="<%=ResolveUrl("~/Images/global/Tech_LogoTrait_YGVTPro.png")%>" />
                                  <img src="<%=ResolveUrl("~/Images/global/Tech_LogoIRM.png")%>" />
                               <%-- <div class ="break"></div>
                                <div class="row">
                                    <div class="col-sm-2">--%>
                                        <img src="<%=ResolveUrl("~/Images/global/liberty-link.svg")%>" />
                                    <%--</div>
                                    <div class="col-sm-10">--%>
                                        <p style="font-size: 12px;line-height: 1.5em;margin-left:0.3rem;margin-top:1.5rem;float:left;overflow:auto;">Seed products with the LibertyLink® (LL) trait are resistant to the herbicide glufosinate ammonium, an alternative to glyphosate in corn and soybeans, and combine high-yielding genetics with the powerful, non-selective, postemergent weed control of Liberty® herbicide for optimum yield and excellent weed control.</p>
                                    <%--</div>
                            </div>--%>
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- #include file="~/youtubeplayer/index.html" -->
    <div class="qualtrics-page-category hidden" id="Category">GHS Corn hybrids</div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="Server">
    <script src="//code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
    <script src='<%=ResolveUrl("~/scripts/product-detail.js?version=6.0")%>'></script>
    <script src='<%=ResolveUrl("~/scripts/CornProductDetail.js?version=5.0")%>'></script>
</asp:Content>
