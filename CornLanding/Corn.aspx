<%@ Page Title="Corn Seeds | Corn Hybrids | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="Corn.aspx.cs" Inherits="Golden_Harvest.cornlanding.Corn" %>

<%@ Register Src="~/UserControls/ExperienceSites.ascx" TagPrefix="ES" TagName="ExperienceSites" %>
<%@ Register Src="~/UserControls/AgronomicUserControl.ascx" TagPrefix="AUC" TagName="Agronomy" %>

<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="Server">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css" />
    <link rel="stylesheet" type="text/css" href='<%= ResolveUrl("~/styles/autocomplete.css")%>'>
    <meta name="Description" content="Golden Harvest corn seeds provides a diverse lineup of hybrids to help maximize performance in a variety of environments. Find the right corn hybrid for your field." />
    <script type="application/ld+json">
    {
        "@context": "http://schema.org/", 
        "@type": "Product", 
        "name": "Corn seeds",
        "image": "",
        "description": "Golden Harvest corn seeds provides a diverse lineup of hybrids to help maximize performance in a variety of environments. Find the right corn hybrid for your field.",
        "brand": "Golden Harvest Corn Seeds"
    }
    </script>
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="mainBody" runat="Server">

    <section id="corn-hero">
        <div class="hero-holder" style="background-image: url('<%=ResolveUrl("~/images/corn/corn-hero.jpg")%>');"></div>
    </section>

    <section id="corn-intro" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="col-md-8">
                <h1>Golden Harvest Corn</h1>
                <p>When it comes to growing corn, Golden Harvest is fully committed to bringing you unique genetics and trait options that give you the most choice of products that are bred, tested and proven locally. Golden Harvest<sup>&reg;</sup> corn seeds are bred to perform well in even the most difficult environments and paired with industry-leading Agrisure<sup>&reg;</sup> traits for exceptional insect control, water optimization and herbicide tolerance. In addition to strong genetics and agronomics, our Golden Harvest<sup>&reg;</sup> Seed Advisors provide a Service 365 year-round commitment to do whatever it takes to maximize your corn yield potential.</p>
            </div>
            <div class="col-md-4">
                <div class="social-follow top-padding">
                    <h3>FOLLOW US FOR
                        <br class="hidden-xs hidden-sm" />
                        AGRONOMIC<br />
                        NEWS AND INSIGHTS:</h3>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/GldnHarvest/" target="_blank" title="Golden Harvest Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/gldnharvest" target="_blank" title="Golden Harvest Twitter"><i class="fab fa-twitter"></i></a>
                        <%--<a href="#" target="_blank" title="Golden Harvest Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" target="_blank" title="Golden Harvest YouTube"><i class="fab fa-youtube"></i></a>--%>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="corn-yield-results" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2>Find the right Golden Harvest hybrids to maximize performance in your fields</h2>
                </div>
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
                    <p>by relative maturity (days)</p>
                    <input id="fromMaturity" runat="server" value="105" min="0" type="number" />
                    <span>to</span>
                    <input id="toMaturity" runat="server" value="115" min="0" type="number" />
                    <a id="findProducts" onclick="fnMaturityValidation();" runat="server" class="btn-default" href="javascript:void(0);">Find Products</a>
                    <label id="maturityError" runat="server" style="color: Red"></label>
                </div>
                <div class="col-sm-1 col-md-2 form-separator vcenter">
                    <span>Or</span>
                </div>
                <div class="col-sm-4 col-md-3 vcenter">
                    <label class="hidden-xs">&nbsp;</label>
                    <p>by hybrid name</p>
                    <input type="text" id="hybridName" runat="server" />
                    <a id="hybridProduct" runat="server" onclick="fnSetCornSession();" href="javascript:void(0);" class="btn-default">Look Up</a>
                    <label id="hybridError" runat="server" style="color: Red"></label>
                </div>
            </div>
        </div>
    </section>

    <section id="experience-site-section" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2>How the Naming System Works</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-7">
                    <img class="img-responsive visible-xs" src="<%=ResolveUrl("~/images/homepage/2_corn_mobile_variety-stick-with-callouts.png")%>" alt="Alternate Text" />
                    <img class="hidden-xs" src="<%=ResolveUrl("~/images/homepage/2_corn_desktop_variety-stick_with-callouts.png")%>" alt="Alternate Text" />
                    <div class="nomenclature-sub-heading">EXCITING GENETICS WITH AGRISURE ARTESIAN TECHNOLOGY</div>
                    <div class="naming-container corn">
                        <div class="row">
                            <div class="col-sm-12 col-md-5 col-lg-4">
                                <div class="naming-description">
                                    <ul>
                                        <li class="li-spacing">Maximizes yield when it rains; increases yield when it doesn’t</li>
                                        <li class="li-spacing">Population flexibility across all environments</li>
                                        <li class="li-spacing">Top-end yield potential with stability when conditions are tough</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <img class="img-responsive visible-xs" src="<%=ResolveUrl("~/images/homepage/3_corn_mobile_chart-with-callout.png")%>" alt="Alternate Text" />
                                <img class="hidden-xs" src="<%=ResolveUrl("~/images/homepage/4_corn_desktop_chart-with-callout.png")%>" alt="Alternate Text" />
                            </div>
                        </div>

                        <div class="naming-description">
                            <ul class="letter-list">
                                <li class="first-tier-list">This two-digit number is the same as the last two digits of relative maturity</li>
                                <li class="first-tier-list">The next letter and two-digit number are designated to uniquely identify each genetic family.</li>
                                <li class="first-tier-list">Trait versions available in this hybrid series.
                                </li>
                            </ul>
                            <ul class="sec-li-spacing">
                                <li>First number represents Herbicide Tolerance Technology Series</li>
                                <li>Second number represents number of modes of action against broad lepidopteran pests</li>
                                <li>Third number represents number of modes of action against corn borer</li>
                                <li>Fourth number represents number of modes of action against corn rootworm</li>
                                <li>“A” denotes Agrisure Artesian® technology</li>
                            </ul>
                            <div class="new-copy"><span><strong>NEW:</strong></span> Indicates hrybrid series or hybrid trait versions new for 2019</div>
                        </div>
                    </div>
                </div>
                <%--
                <div class="col-sm-3 col-sm-offset-2">
                    <div class="resource">
                        <a target="_blank" href="../documents/Golden Harvest Nomenclature Sheet.pdf">
                            <img src="<%=ResolveUrl("~/images/homepage/Golden Harvest Nomenclature Sheet.jpg")%>">
                        </a>
                        <div class="details">
                            <a target="_blank" href="../documents/Golden Harvest Nomenclature Sheet.pdf">
                                <div class="title">Golden Harvest Nomenclature Sheet</div>
                            </a>
                            <div class="specs">File size 926KB PDF</div>
                            <a class="btn-default" href="../documents/Golden Harvest Nomenclature Sheet.pdf" target="_blank">Download</a>
                        </div>
                    </div>
                </div>
                --%>
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
                            <div class="specs">Download the 2022 Golden Harvest Seed Guide to find the corn hybrids best suited for your area.</div>
                        </div>
                        <a class="btn-default" href="/seed-guide">Find Seed Guide</a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="resource">
                        <a target="_blank" href='<%=ResolveUrl("/Documents/2021_Agrisure_SellSheet.pdf")%>'>
                            <img src="<%=ResolveUrl("../Images/homepage/2021-Agrisure-Duracade_Thumb.png")%>">
                        </a>
                        <div class="details eq-height">
                            <a target="_blank" href='<%=ResolveUrl("/Documents/2021_Agrisure_SellSheet.pdf")%>'>
                                <div class="title">Agrisure Duracade Sell Sheet</div>
                            </a>
                            <div class="specs">Learn more about the benefits of Golden Harvest hybrids with Agrisure Duracade<sup>&reg;</sup> trait stacks.</div>
                        </div>
                        <a class="btn-default" href='<%=ResolveUrl("/Documents/2021_Agrisure_SellSheet.pdf")%>' target="_blank">Download</a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="resource">
                        <a target="_blank" href='<%=ResolveUrl("../e-luminate/pdfs/2021_E-Luminate_Brochure.pdf")%>'>
                            <img src="<%=ResolveUrl("../Images/homepage/2021_E-Luminate_Brochure_Thumb.png")%>">
                        </a>
                        <div class="details eq-height">
                            <a target="_blank" href='<%=ResolveUrl("../e-luminate/pdfs/2021_E-Luminate_Brochure.pdf")%>'>
                                <div class="title">E-Luminate Digital Experience Brochure</div>
                            </a>
                            <div class="specs">Discover the technology features
                                <br />
                                E-Luminate offers.</div>
                        </div>
                        <a class="btn-default" href='<%=ResolveUrl("../e-luminate/pdfs/2021_E-Luminate_Brochure.pdf")%>' target="_blank">Download</a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="resource">
                        <a target="_blank" href="/p/agronomy-guide">
                            <img src="<%=ResolveUrl("~/Images/agronomy/agronomy-book-preview-sm.jpg")%>">
                        </a>
                        <div class="details eq-height">
                            <a target="_blank" href="/p/agronomy-guide">
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

    <section id="profit-calculator" class="white has-arch">
        <a id="planting-calculator" name="jumpto" href="#"></a>
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2>CORN PLANTING RATE CALCULATOR </h2>
                </div>
                <div class="col-xs-12">
                    <div id="error-message">Please check the marked fields below. Each field must be a number.</div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 eq-height">
                    <label>
                        Row Width:<br />
                        <select id="select-box">
                            <option value="15">15"</option>
                            <option value="20">20"</option>
                            <option value="22">22"</option>
                            <option value="28">28"</option>
                            <option value="30">30"</option>
                            <option value="36">36"</option>
                            <option value="38">38"</option>
                            <option value="40">40"</option>
                        </select>
                    </label>
                </div>
                <div class="col-sm-4 eq-height">
                    <label>
                        Area Planted:<br />
                        <div class="placeholder">acres</div>
                        <input id="C1" name="C1" type="number" oninput="validateMaxChars(this,'6')">
                    </label>
                </div>
                <div class="col-sm-4 eq-height">
                    <label>
                        Desired Final Stand:<br />
                        <div class="placeholder">plants per acre</div>
                        <input type="number" id="C2" name="C2" oninput="validateMaxChars(this,'6')">
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 eq-height">
                    <label id="germination-spacing">
                        Germination %:<br />
                        <div class="placeholder">Normal Range: 85-98%</div>
                        <input type="number" id="C3" name="C3" oninput="validateMaxChars(this,'6')">
                    </label>
                </div>
                <div class="col-sm-4 eq-height">
                    <label>
                        Standard Loss %:<br />
                        <div class="placeholder">Normal Range: 5-20%</div>
                        <input type="number" id="C4" name="C4" oninput="validateMaxChars(this,'6')">
                    </label>
                </div>
                <div class="col-sm-4 eq-height">
                    <div class="calc-submit">
                        <a class="btn-default" href="#">Calculate</a>
                        <input class="clearBtn" type="reset" value="Clear all">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div id="results-box" class="results">
                        <div class="tri-holder">
                            <div class="triangle">
                                <img src="<%=ResolveUrl("~/images/corn/events-triangle-up.png")%>">
                            </div>
                        </div>
                        <div class="col-sm-12 results-b results-c" id="">
                            <table class="calc-table" width="97%">
                                <tbody>
                                    <tr>
                                        <td valign="bottom">
                                            <strong>Results:</strong>
                                        </td>
                                    </tr>
                                    <tr class="spacer">
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr class="lined">
                                        <td width="65%">Seeding Rate:</td>
                                        <td width="25%"><span class="form-number" id="B17">3</span> Seeds per Acre</td>
                                        <td width="10%" class="hidden-xs" align="right"></td>
                                    </tr>
                                    <tr class="lined">
                                        <td>Seed Spacing:</td>
                                        <td><span class="form-number" id="C19">139,392</span> Inches</td>
                                        <td width="10%" class="hidden-xs" align="right"></td>
                                    </tr>
                                    <tr class="lined">
                                        <td>Number of Units Needed:</td>
                                        <td><span class="" id="numUnits">1</span></td>
                                        <td width="10%" class="hidden-xs" align="right"></td>
                                    </tr>
                                    <tr class="spacer">
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <AUC:Agronomy ID="AgronomyUC" runat="server"></AUC:Agronomy>

    <section id="testimonials" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2>Testimonials</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="testimonial-cont eq-height">
                        <div class="testimonial-name">Jeff Pottebaum, Grower</div>
                        <div class="testimonial-loc">Remsen, IA</div>
                        <p>I’ve been growing Golden Harvest corn for about eight years. The corn has done very well. Last year it came out of the ground well, especially considering the wet soils we dealt with. Plant health was good. If I were to tell another person about Golden Harvest hybrids, I’d say they stand with the best. I’ll plant 100% Golden Harvest corn every year until I’m proven wrong.</p>
                    </div>
                    <div class="testimonial-cont eq-height">
                        <div class="testimonial-name">Jerry Norman, Grower</div>
                        <div class="testimonial-loc">Erie, IL</div>
                        <p>My Golden Harvest Seed Advisor helps me match hybrids to my particular soil types. I appreciate that. I’ve been really happy over the years with the way Golden Harvest corn has stood up. We’ve definitely seen an increase in our average yield over the years. We’ve been really happy with the yields and quality of the corn.</p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="testimonial-cont eq-height">
                        <div class="testimonial-name">Greg Studemen, Grower</div>
                        <div class="testimonial-loc">Plato, MN</div>
                        <p>My Golden Harvest Seed Advisor recommended going with a new Golden Harvest hybrid last season. It was the right choice for our field. I would say it gave us equal if not even greater return on investment than other products we’ve planted. I most certainly plan to plant more Golden Harvest corn in the future.</p>
                    </div>
                    <div class="testimonial-cont eq-height">
                        <div class="testimonial-name">Ben Stoller, Grower</div>
                        <div class="testimonial-loc">Francesville, IN</div>
                        <p>I plant 100% Golden Harvest corn. I appreciate working with local dealers who know me and my operation along with the Golden Harvest corn hybrids that work well in my fields. They have a strong lineup of products and you get a good return for the dollars you spend. I would definitely recommend Golden Harvest corn to other growers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="enogen" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <h2>Enogen</h2>
                    <div class="row">
                        <div class="col-sm-5">
                            <img class="img-responsive" src="<%=ResolveUrl("~/images/corn/enogen.jpg")%>" alt="Enogen" />
                        </div>
                        <div class="col-sm-7">
                            <p>Enogen corn enzyme technology helps support renewable fuels through an in-seed alpha amylase enzyme that enhances ethanol production.</p>
                            <a class="btn-default" href="https://www.syngenta-us.com/corn/enogen" target="_blank">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <h2>Enogen Feed</h2>
                    <div class="row">
                        <div class="col-sm-5">
                            <img class="img-responsive" src="<%=ResolveUrl("~/images/corn/enogen-feed.jpg")%>" alt="Enogen Feed" />
                        </div>
                        <div class="col-sm-7">
                            <p>Enogen Feed increases the feed value of grain or silage in livestock rations by breaking down starch more efficiently for enhanced digestibility.</p>
                            <a class="btn-default" href="https://www.syngenta-us.com/corn/enogen-feed" target="_blank">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="seed-treatments" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-push-2">
                    <h2 class="text-center">Corn Seed Treatments</h2>
                    <p>Golden Harvest hybrids perform to their maximum potential when yield-robbing, early-season pests are kept at bay. That’s why every corn seed is treated with Avicta<sup>&reg;</sup> Complete Corn with Vibrance<sup>&reg;</sup> nematicide/insecticide/fungicide seed treatment.</p>
                    <div class="text-center">
                        <a class="btn-default" href="https://www.syngenta-us.com/seed-treatment/avicta-complete-corn-with-vibrance" target="_blank">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="qualtrics-page-category hidden" id="Category">GHS Corn</div>
    <%-- <asp:HiddenField runat="server" ID="hdnLocation" />--%>
    <asp:Label ID="hdnLocation" runat="server" Style="display: none"></asp:Label>
    <label id="hybridFlag" style="display: none;"></label>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="Server">
    <script src='<%=ResolveUrl("~/scripts/select2.min.js")%>'></script>
    <script src='<%=ResolveUrl("~/scripts/article-scripts.js?v=2.0")%>'></script>
    <script src='<%=ResolveUrl("~/scripts/corn-calculator.js?version=1.0")%>'></script>
    <script src='<%=ResolveUrl("~/scripts/corn-calculator_util.js")%>'></script>
    <script type="text/javascript" src='<%=ResolveUrl("~/scripts/common-landing.js?version=1.0")%>'></script>
    <script type="text/javascript" src='<%=ResolveUrl("~/scripts/corn-landing.js?version=5.0")%>'></script>
    <asp:HiddenField ID="hiddencookie" runat="server" />
</asp:Content>
