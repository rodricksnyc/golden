<%@ Page Title="Corn Seeding Rate Selector | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Golden_Harvest.seeding_rate_calculator._default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="description" content="Use the Golden Harvest Corn Seeding Rate Selector to calculate the most economical seeding rate for individual hybrids and yield environments." /> <!-- TODO -->
    <link rel="stylesheet" type="text/css" href="<%=ResolveUrl("css/seeding-rate.css") %>" />
    <link rel="stylesheet" type="text/css" media="print" href='<%=ResolveUrl("css/print-results.css")%>' />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
        <section id="seeding-rate-hero">
        <div class="hero-holder hidden-xs" style="background-image: url('<%=ResolveUrl("images/seeding-rate-calculator-hero.jpg")%>');"></div>
        <div class="mobile-hero-holder visible-xs" style="background-image: url('<%=ResolveUrl("images/seeding-rate-calculator-hero-mobile.jpg")%>');"></div>
    </section>

    <section id="seeding-rate-intro" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h1 class="text-center"><span style="display: none;" id="gh-print-branding">Golden Harvest </span>Corn Seeding Rate Selector</h1>
                    <p class="text-center">The Golden Harvest<sup>&reg;</sup> Corn Seeding Rate Selector is a data-based tool that helps farmers estimate – per acre – the most economical seeding rate for individual hybrids and yield environments. Seeding rate calculations are based on 2 or more years of data per hybrid, collected at a subset of 70 or more trial locations each year. Trialing across many environments increases the ability to predict how individual corn hybrids should be placed and managed.</p>
                    <hr />
                    <p class="text-center">To understand the optimal seeding rate for your fields, enter your unique information into the Corn Seeding Rate Selector. Select a hybrid and adjust the grain price and seed cost sliders to get your recommended seeding rate. Hover over the plot line in the graph below for detailed information.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="seeding-rate-calculator" class="orange has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-push-1 calculator-wrapper">
                    <iframe id="seeding-rate-calculator-inner" name="seeding-rate-calculator-inner" src="https://agronomy.shinyapps.io/public-corn-seeding-rate-tool" frameborder="0"></iframe>
                </div>
            </div>
            <div class="row download-results">
                <div class="col-xs-12 hidden-print">
                    <center><a onclick="window.print();" class="btn-default btn-ko">Download Results</a></center>
                </div>
            </div>
        </div>
    </section>

    <section id="seeding-rate-resources" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h2 class="text-center">Additional Resources</h2>
                    <p class="text-center">Your local Golden Harvest Seed Advisor can help fine-tune seeding rate estimates even further and build planter seeding rate scripts with the <a href="../e-luminate/index.aspx" class="secondary-orange-sup">E&#8209;Luminate<sup>&reg;</sup></a> digital agronomy platform. Read more about corn seeding rates and crop management in the resources below. For additional insights, <a href="<%=ResolveUrl("~/RepFinder/RetailerSearch.aspx") %>" class="secondary-orange">contact your local Golden Harvest Seed Advisor</a>.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="resource-card">
                        <div class="resource-card-img" style="background-image: url('images/seeding-rate-management-corn.jpg');"></div>
                        <div class="resource-card-body">
                            <h3>Seeding Rate Management to Optimize Corn Yields</h3>
                            <p>Yield potential of corn hybrids continue to increase yearly. Find out how to optimize seeding rate based on your field and hybrid characteristics.</p>
                        </div>
                        <div class="resource-card-cta">
                            <a href="https://www.goldenharvestseeds.com/agronomy/articles/seeding-rate-management-to-optimize-corn-yields" class="btn-default">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="resource-card">
                        <div class="resource-card-img" style="background-image: url('<%=ResolveUrl("~/Images/agronomy/agronomy-book-preview-sm.jpg")%>'); background-position: center top;"></div>
                        <div class="resource-card-body">
                            <h3>Agronomy In Action 2021 Research Review</h3>
                            <p>Discover expert advice on corn and soybean development, disease management, and cultivating a better harvest.</p>
                        </div>
                        <div class="resource-card-cta">
                            <a href='<%=ResolveUrl("~/p/agronomy-guide/downloads/2021_Golden Harvest Agronomy Book_LowResolution.pdf") %>' class="btn-default" target="_blank">Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="seeding-rate-legal" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <p>The Seeding Rate Selector is being provided to you for information purposes only and for your private use in preparing your own calculations. While reasonable efforts have been made to ensure the accuracy and reliability of the information and formulas, no guarantee is given or responsibility taken by Syngenta for the accuracy of the calculations or the applicability to your particular circumstances.</p>

                    <p>SYNGENTA PROVIDES THIS SEEDING RATE SELECTOR AND ANY RESULT THEREFROM AS-IS, WHERE-IS, WITH ALL FAULTS AND WITH NO WARRANTY WHATSOEVER, EITHER EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF MERCHANTABILITY AND FITNESS FOR PARTICULAR PURPOSE. YOU ASSUME ANY AND ALL RISKS IN USING THE SEEDING RATE SELECTOR AND RELYING ON THE INFORMATION CONTAINED HEREIN. IN NO CIRCUMSTANCES SHALL SYNGENTA BE LIABLE FOR ANY DAMAGES WHATSOEVER, INCLUDING BUT NOT LIMITED TO LOSS OF PROFIT, LOSS OF BUSINESS, LOSS OF SAVINGS OR CONSEQUENTIAL DAMAGES, EVEN IF SYNGENTA HAS BEEN NOTIFIED AS SUCH.</p>

                    <p>&copy;<script type="text/javascript">document.write(new Date().getFullYear());</script> Syngenta. <strong>Important: Always read and follow label and bag tag instructions; only those labeled as tolerant to glufosinate may be sprayed with glufosinate ammonium-based herbicides.</strong> LibertyLink<sup>&reg;</sup>, Liberty<sup>&reg;</sup> and the Water Droplet logo are registered trademarks of BASF. GT27<sup>&reg;</sup> is a trademark of M.S. Technologies and BASF. HERCULEX<sup>&reg;</sup> and the HERCULEX Shield are trademarks of Dow AgroSciences, LLC. HERCULEX Insect Protection technology by Dow AgroSciences. ENLIST E3<sup>&reg;</sup> soybean technology is jointly developed with Dow AgroSciences LLC and MS Technologies LLC. The ENLIST trait and ENLIST Weed Control System are technologies owned and developed by Dow AgroSciences LLC.  ENLIST<sup>&reg;</sup> and ENLIST E3<sup>&reg;</sup> are trademarks of Dow AgroSciences LLC.</p>

                    <p>Roundup Ready 2 Yield<sup>&reg;</sup>, Roundup Ready 2 Xtend<sup>&reg;</sup>, XtendFlex<sup>&reg;</sup> and YieldGard VT Pro<sup>&reg;</sup> are registered trademarks used under license from the Bayer Group.</p>

                    <p><strong>Under federal and local laws, only dicamba-containing herbicides registered for use on dicamba-tolerant varieties may be applied. See product labels for details and tank mix partners.</strong> Golden Harvest<sup>&reg;</sup> and NK<sup>&reg;</sup> Soybean varieties are protected under granted or pending U.S. variety patents and other intellectual property rights, regardless of the trait(s) within the seed. The Enlist E3<sup>&reg;</sup> traits, LibertyLink<sup>&reg;</sup>, Roundup Ready 2 Xtend<sup>&reg;</sup>, Roundup Ready 2 Yield<sup>&reg;</sup> and XtendFlex<sup>&reg;</sup> traits may be protected under numerous United States patents. It is unlawful to save soybeans containing these traits for planting or transfer to others for use as a planting seed. Only dicamba formulations that employ VaporGrip<sup>&reg;</sup> Technology are approved for use with Roundup Ready 2 Xtend<sup>&reg;</sup> and XtendFlex<sup>&reg;</sup> soybeans. Only 2,4-D choline formulations with Colex-D<sup>&reg;</sup> Technology are approved for use with Enlist E3<sup>&reg;</sup> soybeans. The trademarks or service marks displayed or otherwise used herein are the property of a Syngenta Group Company.  All other trademarks are the property of their respective owners. More information about Agrisure Duracade<sup>&reg;</sup> is available at <a href="http://www.biotradestatus.com/" target="_blank">http://www.biotradestatus.com/</a>.</p>
                </div>
            </div>
        </div>
    </section>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="server">
</asp:Content>
