<%@ Page Title="Corn Replant Calculator | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Golden_Harvest.replant_calculator._default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="description" content="The Golden Harvest Corn Replant Calculator helps farmers decide whether to keep a reduced plant stand or to replant at a date that will yield less than earlier planting dates. As calculations are drawn, the number of plants remaining and their yield potential, the yield potential of a delayed planting date, seed availability and the cost of replanting are all considered." /> <!-- TODO -->
    <link rel="stylesheet" type="text/css" href="<%=ResolveUrl("../seeding-rate/css/seeding-rate.css") %>" />
    <link rel="stylesheet" type="text/css" href="<%=ResolveUrl("css/replant.css") %>" />
    <link rel="stylesheet" type="text/css" media="print" href='<%=ResolveUrl("css/print-results.css")%>' />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">

    <!-- Banner: -->
    <section id="seeding-rate-hero">
        <div class="hero-holder hidden-xs" style="background-image: url('<%=ResolveUrl("images/replant-calc-banner-rz.jpg")%>');"></div>
        <div class="mobile-hero-holder visible-xs" style="background-image: url('<%=ResolveUrl("images/replant-calc-banner-rz.jpg")%>');"></div>
    </section>

    <!-- Introduction: -->
    <section id="seeding-rate-intro" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h1 class="text-center"><span style="display: none;" id="gh-print-branding">Golden Harvest </span>Corn Replant Calculator</h1>
                    <p class="text-center">The Golden Harvest<sup>&reg;</sup> Corn Replant Calculator helps farmers decide whether to keep a reduced plant stand or to replant at a date that will yield less than earlier planting dates. As calculations are drawn, the number of plants remaining and their yield potential, the yield potential of a delayed planting date, seed availability and the cost of replanting are all considered.</p>
                    <hr />
                    <p class="text-center">Making a data-driven decision based on yield and economic insight is critical. The Corn Replant Calculator allows you to enter your unique information and quickly understand if replanting will result in yield and economic benefits.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Calculator: -->
    <section id="seeding-rate-calculator" class="orange has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                      <div class="calculator-wrapper">
                        <iframe id="seeding-rate-calculator-inner" name="seeding-rate-calculator-inner" src="https://geodav.syngentadigitalapps.com/GHReplantIntegration/" frameborder="0"></iframe>
                        </div>
                </div>
              
            </div>
            <div class="row download-results">
                <div class="col-xs-12 hidden-print">
                    <center><a onclick="window.print();" class="btn-default btn-ko">Print Results</a></center>
                </div>
            </div>
        </div>
    </section>

    <!-- Resources: -->
    <section id="seeding-rate-resources" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h2 class="text-center">Additional Resources</h2>
                    <p class="text-center">
                        Read more about corn replanting management in the resources below.
                        For additional insights, <a href="<%=ResolveUrl("~/RepFinder/RetailerSearch.aspx") %>" class="secondary-orange">contact your local Golden Harvest Seed Advisor</a>.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="resource-card">
                        <div class="resource-card-img" style="background-image: url('images/replant-calc-blog.jpg');"></div>
                        <div class="resource-card-body">
                            <h3>Corn Replanting Guidelines</h3>
                            <p>Before making a replant decision that incurs additional costs, it is important to evaluate the existing stand.</p>
                        </div>
                        <div class="resource-card-cta">
                            <a href="https://www.goldenharvestseeds.com/agronomy/articles/corn-replanting-guidelines" class="btn-default">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="resource-card">
                        <div class="resource-card-img" style="background-image: url('images/replant-calc-cms.jpg');"></div>
                        <div class="resource-card-body">
                            <h3>Considerations for Replanting Corn</h3>
                            <p>Deciding to replant for desired plant population can be difficult. Take these factors into consideration beforehand.</p>
                        </div>
                        <div class="resource-card-cta">
                            <a href="https://www.goldenharvestseeds.com/agronomy/articles/considerations-for-replanting-corn" class="btn-default">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="resource-card">
                        <div class="resource-card-img" style="background-image: url('<%=ResolveUrl("~/Images/agronomy/agronomy-book-preview-sm.jpg")%>'); background-position: center top;"></div>
                        <div class="resource-card-body">
                            <h3>Agronomy in Action 2021 Research Review</h3>
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

    <!-- Legal: -->
    <section id="seeding-rate-legal" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <p>
                        The data supplied by this replant calculator is based on publicly available data. You should consult the appropriate source before relying on the results provided by this replant tool. To learn more about this website, review legal disclaimers, or learn about how the replant calculator provides results, <a target="_blank" rel="noopener norefferer" href="https://geodav.syngentadigitalapps.com/replantapp/sources">please click here</a>.
                    </p>
                    <p>
                        The Replant Calculator is being provided to you for information purposes only and for your private use in preparing your own calculations. While reasonable efforts have been made to ensure the accuracy and reliability of the information and formulas, no guarantee is given or responsibility taken by Syngenta for the accuracy of the calculations or the applicability to your particular circumstances.
                    </p>
                    <p>
                        SYNGENTA PROVIDES THIS REPLANT CALCULATOR AND ANY RESULT THEREFROM AS-IS, WHERE-IS, WITH ALL FAULTS AND WITH NO WARRANTY WHATSOEVER, EITHER EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF MERCHANTABILITY AND FITNESS FOR PARTICULAR PURPOSE. YOU ASSUME ANY AND ALL RISKS IN USING THE REPLANT CALCULATOR AND RELYING ON THE INFORMATION CONTAINED HEREIN. IN NO CIRCUMSTANCES SHALL SYNGENTA BE LIABLE FOR ANY DAMAGES WHATSOEVER, INCLUDING BUT NOT LIMITED TO LOSS OF PROFIT, LOSS OF BUSINESS, LOSS OF SAVINGS OR CONSEQUENTIAL DAMAGES, EVEN IF SYNGENTA HAS BEEN NOTIFIED AS SUCH.
                    </p>
                    <p>
                        ©2021 Syngenta. <strong>Important: Always read and follow label and bag tag instructions; only those labeled as tolerant to glufosinate may be sprayed with glufosinate ammonium-based herbicides. </strong>
                    </p>
                    <p>
                        LibertyLink<sup>®</sup>, Liberty<sup>®</sup> and the Water Droplet logo are registered trademarks of BASF. GT27<sup>®</sup> is a trademark of M.S. Technologies and BASF. HERCULEX<sup>®</sup> and the HERCULEX Shield are trademarks of Dow AgroSciences, LLC. HERCULEX Insect Protection technology by Dow AgroSciences. ENLIST E3<sup>®</sup> soybean technology is jointly developed with Dow AgroSciences LLC and MS Technologies LLC. The ENLIST trait and ENLIST Weed Control System are technologies owned and developed by Dow AgroSciences LLC.  ENLIST<sup>®</sup> and ENLIST E3<sup>®</sup> are trademarks of Dow AgroSciences LLC.
                    </p>
                    <p>
                        Roundup Ready 2 Yield<sup>®</sup>, Roundup Ready 2 Xtend<sup>®</sup>, XtendFlex<sup>®</sup> and YieldGard VT Pro<sup>®</sup> are registered trademarks used under license from the Bayer Group.
                    </p>
                    <p>
                        <strong>Under federal and local laws, only dicamba-containing herbicides registered for use on dicamba-tolerant varieties may be applied. 
                        See product labels for details and tank mix partners.</strong> Golden Harvest<sup>®</sup> and NK<sup>®</sup> Soybean varieties are protected under granted or pending U.S. 
                        variety patents and other intellectual property rights, regardless of the trait(s) within the seed. 
                        The Enlist E3<sup>®</sup> traits, LibertyLink<sup>®</sup>, Roundup Ready 2 Xtend<sup>®</sup>, Roundup Ready 2 Yield<sup>®</sup> and XtendFlex<sup>®</sup> traits may be protected under 
                        numerous United States patents. It is unlawful to save soybeans containing these traits for planting or transfer to others for 
                        use as a planting seed. Only dicamba formulations that employ VaporGrip<sup>®</sup> Technology are approved for use with Roundup Ready 2 Xtend<sup>®</sup> 
                        and XtendFlex<sup>®</sup> soybeans. Only 2,4-D choline formulations with Colex-D<sup>®</sup> Technology are approved for use with Enlist E3<sup>®</sup> soybeans. 
                        The trademarks or service marks displayed or otherwise used herein are the property of a Syngenta Group Company.  
                        All other trademarks are the property of their respective owners. 
                        More information about Agrisure Duracade® is available at <a target="_blank" rel="noopener noreferrer" href="http://www.biotradestatus.com/">http://www.biotradestatus.com/</a>.
                    </p>
                </div>
            </div>
        </div>
    </section>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="server"></asp:Content>