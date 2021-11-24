<%@ Page Title="Seed Guide | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Golden_Harvest.Seed_Guide.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="Description" content="Learn more about Golden Harvest corn and soybean seeds by downloading the seed guide or contacting your local Golden Harvest Seed Advisor." />
    <link rel="stylesheet" type="text/css" href='<%= ResolveUrl("css/seed-guide.css")%>' />
    <link href="pflip/css/pdfflip.css" rel="stylesheet" type="text/css">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">

    <section id="seed-guide-hero">
        <div class="hero-holder" style="background-image: url('<%=ResolveUrl("images/seed-guide-header.jpg")%>');"></div>
    </section>

    <section id="seed-guide-intro" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h1 class="text-center">2022 Golden Harvest Seed&nbsp;Guide</h1>
                    <p class="text-center">Learn more about Golden Harvest<sup>&reg;</sup> seeds by downloading the seed guide, browsing our corn and soybean products, and contacting your local Golden&nbsp;Harvest Seed&nbsp;Advisor.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="book" class="orange has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h2 class="text-center">Unique Seed Solutions for Every Field</h2>
                    <p class="text-center">Golden Harvest is committed to farmer collaboration in finding custom solutions for every acre. Consider this seed guide your best accessory to optimal yield potential, and consider Golden Harvest seeds the best choice for your fields now and, more importantly, your vision for the future.</p>
                    <p class="text-center">Click through the 2022 Golden Harvest Seed Guide below to discover corn and soybean products for your fields.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">

                    <div class="PDFFlip" id="PDFF" source="downloads/2022_GoldenHarvest_SeedGuide_low res.pdf"></div>

                    <script src="pflip/js/libs/jquery.min.js" type="text/javascript"></script>
                    <script src="pflip/js/pdfflip.js" type="text/javascript"></script>
                    <script src="settings.js" type="text/javascript"></script>

                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-push-3 col-xs-12">
                    <p class="text-center">Access Golden Harvest corn and soybean seed solutions anytime and anywhere by downloading a copy.</p>
                    <p class="text-center"><a href="downloads/2022_GoldenHarvest_SeedGuide_HiRes.pdf" target="_blank" class="btn-default btn-ko">Download 2022 Seed Guide</a></p>
                </div>
            </div>
        </div>
    </section>

    <section id="three-ctas" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-xs-12">
                    <center><img src="images/Corn Icon.svg" alt="Ear of corn" /></center>
                    <h2 class="text-center">Golden Harvest<br />Corn Hybrids</h2>
                    <p class="text-center">Maximize performance potential in your corn&nbsp;fields.</p>
                    <center><a href="../corn/product-finder" class="btn-default">Discover Corn Products</a></center>
                </div>
                <div class="col-sm-4 col-xs-12">
                    <center><img src="images/Bean Icon.svg" alt="Soybean pod" /></center>
                    <h2 class="text-center">Golden Harvest<br />Soybean Varieties</h2>
                    <p class="text-center">Discover high-performing, flexible solutions for your area.</p>
                    <center><a href="../soybean/product-finder" class="btn-default">Find Soybean Products</a></center>
                </div>
                <div class="col-sm-4 col-xs-12">
                    <center><img src="images/Book Icon.svg" alt="Cursor clicking a book" /></center>
                    <h2 class="text-center">Build Your Custom&nbsp;Seed&nbsp;Guide</h2>
                    <p class="text-center">Build a personalized seed guide with products bred and tested locally.</p>
                    <center><a href="../seeds/custom-seed-guide" class="btn-default">Create Custom Seed Guide</a></center>
                </div>
            </div>
        </div>
    </section>

    <section id="seed-advisor" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-push-2 col-xs-12">
                    <h2 class="text-center">Get in touch</h2>
                    <p class="text-center">We believe there is a better solution to be found in every field, and finding it starts with listening to you – the farmer. Reach out to your local Golden Harvest Seed Advisor today to discuss your acres and yield goals and discover the right products for your operation.</p>
                    <center><a href="../seed-advisor" class="btn-default">Contact a Seed Advisor</a></center>
                </div>
            </div>
        </div>
    </section>

    <section id="aia-legal" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <p class="legal-copy">&copy; 2021 Syngenta. <strong>Important: Always read and follow label and bag tag instructions; only those labeled as tolerant to glufosinate may be sprayed with glufosinate ammonium-based herbicides.</strong></p>
                    <p class="legal-copy">LibertyLink<sup>&reg;</sup>, Liberty<sup>&reg;</sup> and the Water Droplet logo are registered trademarks of BASF. HERCULEX<sup>&reg;</sup> and the HERCULEX Shield are trademarks of Dow AgroSciences, LLC. HERCULEX Insect Protection technology by Dow AgroSciences.</p>
                    <p class="legal-copy"><strong>Under federal and local laws, only dicamba-containing herbicides registered for use on dicamba-tolerant varieties may be applied. See product labels for details and tank mix partners.</strong> Golden Harvest<sup>&reg;</sup> and NK<sup>&reg;</sup> Soybean varieties are protected under granted or pending U.S. variety patents and other intellectual property rights, regardless of the trait(s) within the seed. The Enlist E3<sup>&reg;</sup> Soybean, GT27<sup>&reg;</sup>, LibertyLink<sup>&reg;</sup>, Roundup Ready 2 Xtend<sup>&reg;</sup>, Roundup Ready 2 Yield<sup>&reg;</sup> and XtendFlex<sup>&reg;</sup> traits may be protected under numerous United States patents. It is unlawful to save soybeans containing these traits for planting or transfer to others for use as a planting seed. Only dicamba formulations that employ VaporGrip<sup>&reg;</sup> Technology are approved for use with Roundup Ready 2 Xtend<sup>&reg;</sup> and XtendFlex<sup>&reg;</sup> soybeans. Only 2,4-D choline formulations with Colex-D<sup>&reg;</sup> Technology are approved for use with Enlist E3<sup>&reg;</sup> soybeans. The trademarks or service marks displayed or otherwise used herein are the property of a Syngenta Group Company. ENLIST E3<sup>&reg;</sup> soybean technology is jointly developed with Dow AgroSciences LLC and MS Technologies LLC. The ENLIST trait and ENLIST Weed Control System are technologies owned and developed by Dow AgroSciences LLC. ENLIST<sup>&reg;</sup> and ENLIST E3<sup>&reg;</sup> are trademarks of Dow AgroSciences LLC. GT27<sup>&reg;</sup> is a trademark of M.S. Technologies and BASF. Roundup Ready 2 Xtend<sup>&reg;</sup>, Roundup Ready 2 Yield<sup>&reg;</sup>, XtendFlex<sup>&reg;</sup> and YieldGard VT Pro<sup>&reg;</sup> are registered trademarks used under license from the Bayer Group.</p>
                    <p class="legal-copy">All other trademarks are the property of their respective owners. More information about Agrisure Duracade<sup>&reg;</sup> is available at <a href="http://www.biotradestatus.com/" target="_blank">http://www.biotradestatus.com/</a>.</p>
                </div>
            </div>
        </div>
    </section>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="server">
</asp:Content>
