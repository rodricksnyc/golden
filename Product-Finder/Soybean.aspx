<%@ Page Title="Soybean Seed Finder | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="Soybean.aspx.cs" Inherits="Golden_Harvest.Soybean" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="Description" content="Select the best Golden Harvest Soybean variety for your farm. Search by relative maturity and key agronomic characteristics." />
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("../Styles/product-finder.css")%>' />
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("../Styles/custom-seed-guide.css")%>' />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <section id="product-finder">
        <section id="sf-intro">
            <div class="container">
                <div class="row text-center">
                    <div class="col-xs-12">
                        <h1 id="title">Golden Harvest Seed Finder</h1>
                        <p>Use the filters to refine your search, and learn more about a variety using the
                            <br class="visible-md visible-lg" />
                            "Product Details" link or by downloading the Tech Sheet PDF.</p>
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
                                <a href="#" class="clear-filters" onclick="fnClearAllFilter()">Clear All Filters</a>
                            </div>
                            <div class="filter-section rm active">
                                <span class="filter-title">Relative Maturity:</span>
                                <div class="filter-content">
                                    <div class="filter-inputs">
                                        <input type="text" id="txtRmFrom" class="numeric" runat="server" onkeypress="Javascript: if (event.keyCode==13) return isDecimalNumber(this,event);" onblur="return isDecimalNumber(this,event)" />
                                        <span>TO</span>
                                        <input type="text" id="txtRmTo" class="numeric" runat="server" onkeypress="Javascript: if (event.keyCode==13) return isDecimalNumber(this,event);" onblur="return isDecimalNumber(this,event)" />
                                    </div>
                                    <button id="updateRM">Update Relative Maturity</button>
                                </div>
                                <div id="validationErrorText" runat="server" style="display: none; color: Red;"></div>
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
                            <div class="filter-section" id="diseases">
                                <span class="filter-title">Disease Tolerance:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="diseases" value="SDS" />Sudden Death Syndrome
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="PRR" />Phytophthora Root Rot
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="IDCT" />Iron Deficiency Chlorosis
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="BST" />Brown Stem Rot
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="SWM" />Soybean White Mold
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="PSB" />Pod & Stem Blight
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="FLS" />Frogeye Leaf Spot
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="diseases" value="SSC" />Southern Stem Canker
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="filter-section" id="herbicide_tolerance">
                                <span class="filter-title">Herbicide tolerance:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="herbicide_tolerance" value="E3" />Enlist E3
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="herbicide_tolerance" value="E3STS" />Enlist E3/STS
                                        <span class="checkmark"></span>
                                    </label>
                                     <label>
                                        <input type="checkbox" name="herbicide_tolerance" value="RR2XF" />XtendFlex
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="herbicide_tolerance" value="RR2XFSTS" />XtendFlex/STS
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="herbicide_tolerance" value="RR2X" />Roundup Ready 2 Xtend
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="herbicide_tolerance" value="RR2XSTS" />Roundup Ready 2 Xtend/STS
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="herbicide_tolerance" value="LLGT27" />LibertyLink/GT27
                                        <span class="checkmark"></span>
                                    </label>
                                    <%--<label>
                                        <input type="checkbox" name="herbicide_tolerance" value="LLGT27STS" />LibertyLink/GT27/STS
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="herbicide_tolerance" value="LL" />LibertyLink
                                        <span class="checkmark"></span>
                                    </label>--%>
                                    <label>
                                        <input type="checkbox" name="herbicide_tolerance" value="GRR2Y" />Roundup Ready 2 Yield
                                        <span class="checkmark"></span>
                                    </label>
                                    <label style="display: none;">
                                        <input type="checkbox" name="herbicide_tolerance" value="LLS" />LibertyLink/STS
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="filter-section" id="nematodes">
                                <span class="filter-title">Nematode Resistance:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="nematodes" value="SCNR" />SCN
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="nematodes" value="RKNS" />RKN Incognita
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="filter-section" id="plant_characteristics">
                                <span class="filter-title">Plant characteristics:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="plant_characteristics" value="ES" />Emergence
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="plant_characteristics" value="SY" />Standability
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="plant_characteristics" value="NR" />Narrow rows
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="plant_characteristics" value="WR" />Wide rows
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="plant_characteristics" value="SCR" />Chloride sensitivity
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="filter-section" id="plant_height">
                                <span class="filter-title">Plant height:</span>
                                <div class="filter-content secondary">
                                    <label>
                                        <input type="checkbox" name="plant_height" value="S" />Short
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="plant_height" value="MS" />Medium short
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="plant_height" value="M" />Medium
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="plant_height" value="MT" />Medium tall
                                        <span class="checkmark"></span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="plant_height" value="T" />Tall
                                        <span class="checkmark"></span>
                                    </label>

                                </div>
                            </div>
                            <div class="filter-section clear-filters">
                                <a href="#" class="clear-filters" onclick="fnClearAllFilter()">Clear All Filters</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <strong>Showing <span id="dvrecordcount" runat="server"></span>:</strong>
                        <div class="results-container">
                            <div id="divMessage" runat="server" style="display: none;"></div>
                            <div class="row row-eq-height" id="divsoybeanproductfinder" runat="server">
                            </div>
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
                            <p id="mainBody_dvLegalText">
                                Performance assessments are based upon results or analysis of public information, field observations and/or internal Syngenta evaluations. Product performance assumes disease presence. The names of all soybean products listed are Brands.<br />
                                <br />

                                ©2020 Syngenta. <b>Under federal and local laws, only dicamba-containing herbicides registered for use on dicamba-tolerant varieties may be applied. See product labels for details and tank mix partners.</b> Golden Harvest® Soybean varieties are protected under granted or pending U.S. variety patents and other intellectual property rights, regardless of the trait(s) within the seed. The Roundup Ready 2 Yield® and Roundup Ready 2 Xtend® traits may be protected under numerous United States patents. It is unlawful to save soybeans containing these traits for planting or transfer to others for use as a planting seed. Roundup Ready 2 Yield® and Roundup Ready 2 Xtend® are trademarks used under license from Monsanto Technology LLC. LibertyLink®, Liberty® and the Water Droplet logo are registered trademarks of BASF. GT27™ is a trademark of M.S. Technologies and BASF. Only 2,4-D choline formulations with Colex-D® Technology are approved for use with ENLIST E3® soybeans. ENLIST E3® soybean technology is jointly developed with Dow AgroSciences LLC and MS Technologies LLC. The ENLIST trait and ENLIST Weed Control System are technologies owned and developed by Dow Agrosciences LLC. ENLIST® and ENLIST E3® are trademarks of Dow AgroSciences LLC. STS® is a registered trademark of DuPont. The trademarks or service marks displayed or otherwise used herein are the property of a Syngenta Group Company. All other trademarks are the property of their respective owners.
                            </p>

                            <div class="legal-images">
                                <div class="row">
                                    <div class="col-sm-2">
                                        <img src="<%=ResolveUrl("~/Images/global/liberty-link.svg")%>" />
                                    </div>
                                    <div class="col-sm-10">
                                        <p style="font-size: 12px; line-height: 1.5em; margin-left: -4rem; margin-top: 0.5rem; float: left; overflow: auto;">Seed products with the LibertyLink® (LL) trait are resistant to the herbicide glufosinate ammonium, an alternative to glyphosate in corn and soybeans, and combine high-yielding genetics with the powerful, non-selective, postemergent weed control of Liberty® herbicide for optimum yield and excellent weed control.</p>
                                    </div>
                                </div>
                            </div>
                            <br />
                           
                        </div>
                    </div>
                </div>
        </section>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="Server">
   <%-- <script src='<%=ResolveUrl("~/scripts/SoyProductFinder.min.js?v1.0")%>'></script>--%>
       <script src='<%=ResolveUrl("~/scripts/SoyProductFinder.js?v2.0")%>'></script>
</asp:Content>

