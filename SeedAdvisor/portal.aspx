<%@ Page Title="Golden Harvest Seed Advisor | Golden Harvest" Language="C#" MasterPageFile="~/Template/GHLanding.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
    <meta name="Description" content="" />
    <link rel="stylesheet" type="text/css" href='<%= ResolveUrl("~/Styles/seedadvisor.css")%>'>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
</asp:Content>


<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <section id="sa-portal">
        <div class="container add-btm">
            <div class="row">
                <div class="col-md-8 col-lg-6">
                    <h2>Seed Advisor Portal</h2>
                    <h3>business tools</h3>
                    <div class="link-container">
                        <a class="btn-default" href="https://syngentaconnect.force.com/CropEdgeGHCommunity/login" target="_blank">Crop Edge</a>
                        <a class="btn-default" href="https://eluminate.solutions/" target="_blank">E-luminate</a>
                        <a class="btn-default" href="https://enogen.growmore360.com" target="_blank">ENOGEN Grow More 360</a>
                        <a class="btn-default" href="https://velocitypayment.com/vbills/bankofamerica/syngenta/login.go" target="_blank">Online payment</a>
                        <a class="btn-default" href="https://goldenharvestseedscampus.thinkzoom.com/" target="_blank">Training Campus</a>
                        <a class="btn-default" href="https://prodaws.goldenharvestseeds.com" target="_blank">goldenharvestseeds.com</a>
                        <a class="btn-default" href="http://www.landdb.com" target="_blank">AgriEdge</a>
                    </div>
                    <div style="height:20px;"></div>
                    <h3>marketing tools</h3>
                    <div class="link-container">
                        <a class="btn-default" href="https://2152-gh.buy.fastsigns.com/store" target="_blank">Event Signage</a>
                        <a class="btn-default" href="/store" target="_blank">Merchandise</a>
                        <a class="btn-default" href="https://communications.syngenta-us.com/Login.aspx?l" target="_blank" data-content="https://communications.syngenta-us.com/Login.aspx?l" data-type="external">Seed Advisor Marketing</a>
                        <a class="btn-default" href="http://www.syngentaus.com/text" target="_blank">Commodity Text Setup</a>
                        <a class="btn-default" href="https://ag.purdue.edu/agry/dtc/Pages/CSFG.aspx" target="_blank">Purdue Field Guide</a>
                        <a class="btn-default" href="https://www.syngenta-us.com/newsroom/home.aspx" target="_blank">Syngenta News</a>
                        <a class="btn-default" href="http://sawebsiteprogram.com/" target="_blank">Website Program</a>
                    </div>
                    <div style="height:20px;"></div>
                    <h3>grower financing</h3>
                    <div class="link-container">
                        <a class="btn-default" href="https://golden-advantage-frontend-prod.apps.usae-1.syngentadigitalapps.com/seed-advisor/login " target="_blank">GOLDEN ADVANTAGE</a>
                        <a class="btn-default" href="https://dealer.raboag.com/login" target="_blank">RABO Financial</a>
                    </div>
                </div>
                <div class="col-md-4 col-lg-6 sidebar">
                    <h2>Social Feed</h2>
                    <h3>Twitter</h3>
                    <div style="max-height: 900px; overflow-y: auto;">
                        <a class="twitter-timeline" href="https://twitter.com/GldnHarvest?ref_src=twsrc%5Etfw" data-tweet-limit="
                        5">Tweets by GldnHarvest</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                    <h3>Facebook</h3>
                    <div class="fb-page" data-href="https://www.facebook.com/GldnHarvest/" data-tabs="timeline" data-width="500" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/GldnHarvest/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/GldnHarvest/">Golden Harvest Seeds</a></blockquote></div>
                </div>
            </div>
        </div>
    </section>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="server">
    <script>
        $('.twitter-block').on('DOMSubtreeModified propertychange','#twitter-widget-0', function() {
            $('.twitter-timeline').contents().find('.timeline-Tweet-media').css('display', 'none');
            $('.twitter-block').css('height', '100%');
        });
    </script>
</asp:Content>