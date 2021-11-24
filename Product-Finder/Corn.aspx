<%@ Page Title="Corn Seed Finder | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="Corn.aspx.cs" Inherits="Golden_Harvest.Product_Finder.Corn" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="description" content="Find the Golden Harvest and Enogen corn hybrids that best fit the unique needs of your farm. Filter by relativity maturity and key agronomic characteristics." />
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("../Styles/product-finder.css")%>' />
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("../Styles/custom-seed-guide.css")%>' />
   <%-- <script src='<%=ResolveUrl("../Scripts/CornProductFinder.min.js?v1.0")%>'></script>--%>
     <script src='<%=ResolveUrl("../Scripts/CornProductFinder.js?v5.0")%>'></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <section id="product-finder">
        <section id="sf-intro">
            <div class="container">
                <div class="row text-center">
                    <div class="col-xs-12">
                        <h1 id="title">Golden Harvest Seed Finder</h1>
                        <p>
                            Use the filters to refine your search, and learn more about a hybrid using the
                            <br class="visible-md visible-lg" />
                            "Product Details" link or by downloading the Tech Sheet PDF.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div id="dvloading" runat="server" class="dvLoadingImage" style="display: none;">
        </div>
        <section id="sg-selections">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <a onclick="history.back();"><< Back to Question Selection</a>
                        <div class="sg-selection-container">
                            <div class="sg-selection-header">
                                <h2>My Seed Guide Selections:</h2>
                                <button class="sg-preview" disabled>Preview My Guide ></button>
                            </div>
                            <div class="sg-selection-inner">
                            </div>
                            <button class="remove-selections">Remove All Selections</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="sf-results">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <strong>Filter By:</strong>
                        <div class="filter-container">
                            <div class="filter-section clear-filters">
                                <a href="#" class="clear-filters">Clear All Filters</a>
                            </div>
                            <div class="filter-section rm active">
                                <span class="filter-title">Relative Maturity:</span>
                                <div class="filter-content">
                                    <div class="filter-inputs">
                                        <input type="text" id="txtRmFrom" clientidmode="Static" runat="server" class="numeric" />
                                        <span>TO</span>
                                        <input type="text" id="txtRmTo" clientidmode="Static" runat="server" class="numeric" />
                                    </div>
                                    <button id="updateRM">Update Relative Maturity</button>
                                </div>
                            </div>
                             <div class="filter-section" id="goldseries">
                                <span class="filter-title">Gold Series:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="goldseries" value="gs" />Gold Series Product
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                               
                            </div>
                            <div class="filter-section" id="brand">
                                <span class="filter-title">Brand:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" id="GHbrand" name="brand" value="GH" />Golden Harvest
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="brand" value="Enogen" />Enogen
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="filter-section" id="agrisure_traits">
                                <span class="filter-title">Agrisure Traits:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="A" />Artesian
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="D5332EZR" />Duracade 5332 E-Z Refuge
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="D5222EZR" />Duracade 5222 E-Z Refuge
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="D5122EZR" />Duracade 5122 E-Z Refuge
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="3122EZR" />3122 E-Z Refuge
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="V3330EZR" />Viptera 3330 E-Z Refuge
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="V3220EZR" />Viptera 3220 E-Z Refuge
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="3120EZR" />3120 E-Z Refuge
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="V3111" />Viptera 3111
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="V3110" />Viptera 3110
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="3000GT" />3000GT
                                        <span class="checkmark"></span>
                                    </label>
                                    <label style="display: none;">
                                        <input type="checkbox" name="agrisure_traits" value="A3010" />3010
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="GT/LL" />GT/LL
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="GT" />GT
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agrisure_traits" value="Conventional" />Conventional
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="filter-section" id="insect_control">
                                <span class="filter-title">Insect Control:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="insect_control" value="ECB" />European corn borer
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="insect_control" value="SWCB" />Southwestern corn borer
                                        <span class="checkmark"></span>
                                    </label>

                                    <label>
                                        <input type="checkbox" name="insect_control" value="SB" />Sugarcane borer
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="insect_control" value="SCB" />Cornstalk borer
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="insect_control" value="CSB" />Common stalk borer
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="insect_control" value="CE" />Corn earworm
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="insect_control" value="BC" />Black cutworm
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="insect_control" value="DC" />Dingy cutworm
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="insect_control" value="WBC" />Western bean cutworm
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="insect_control" value="FA" />Fall armyworm
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="insect_control" value="TA" />True or beet armyworm
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="insect_control" value="CR" />Corn rootworm
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="filter-section" id="herbicide_tolerance">
                                <span class="filter-title">Herbicide Tolerance:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="herbicide_tolerance" value="GF" />Glufosinate
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="herbicide_tolerance" value="GP" />Glyphosate
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="filter-section" id="artesian" style="display:none;">
                                <span class="filter-title">Artesian:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="artesian" value="WO" />Artesian
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="filter-section" id="reduced_refuge">
                                <span class="filter-title">Reduced Refuge:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="reduced_refuge" value="5RIB" />5% Refuge in a Bag
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="filter-section" id="diseases">
                                <span class="filter-title">Disease Tolerance:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="diseases" value="GLS" />Gray Leaf Spot
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="NLB" />Northern Leaf Blight
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="GW" />Goss’s Wilt
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="BLS" />Bacterial Leaf Streak
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="SLB" />Southern Leaf Blight
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="ES" />Eyespot
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="AN" />Anthracnose Stalk Rot
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="TS" />Tar Spot
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="FR" />Fusarium Crown Rot
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="CR" />Common Rust
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="SR" />Southern Rust
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="ALF" />Aflatoxins
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="filter-section" id="silage">
                                <span class="filter-title">Silage:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="silage" value="SY" />Silage yield
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="silage" value="NDF" />NDF
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="silage" value="MT" />Milk/Ton
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="silage" value="MA" />Milk/Acre
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="silage" value="BT" />Beef/Ton
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="silage" value="BA" />Beef/Acre
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="filter-section clear-filters">
                                <a href="#" class="clear-filters">Clear All Filters</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <strong>Showing <span id="dvrecordcount" runat="server"></span>:</strong>
                        <div class="results-container">
                            <div id="divMessage" runat="server" style="display: none;"></div>
                            <div class="row row-eq-height" id="divCornProductfinder" runat="server"></div>
                        </div>
                        <div class="row text-center">
                            <div class="col-sm-12">
                                <div class="sf-count">
                                    Showing&nbsp;<div id="divCount" runat="server"></div>
                                </div>
                                <div id="divViewMoreResult" runat="server"></div>
                            </div>
                        </div>
                    </div>
                </div>
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


                                <img src="<%=ResolveUrl("~/Images/global/liberty-link.svg")%>" />


                                <p style="font-size: 12px; line-height: 1.5em; margin-left: 0.3rem; margin-top: 1.5rem; float: left; overflow: auto;">Seed products with the LibertyLink® (LL) trait are resistant to the herbicide glufosinate ammonium, an alternative to glyphosate in corn and soybeans, and combine high-yielding genetics with the powerful, non-selective, postemergent weed control of Liberty® herbicide for optimum yield and excellent weed control.</p>


                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </section>
</asp:Content>
