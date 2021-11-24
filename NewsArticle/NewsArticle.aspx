<%@ Page Title="" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="NewsArticle.aspx.cs" Inherits="Golden_Harvest.NewsArticle.NewsArticle" %>

<%@ Register Src="~/UserControls/ExperienceSites.ascx" TagPrefix="ES" TagName="ExperienceSites" %>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="Server">
    <%--<meta property="og:url" content="http://goldenharvestseeds.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Scout from the start to help yield big advantage" />
    <meta property="og:description" content="Scouting is critical for the start of every season, but a mix of recent factors make it especially valuable this year." />
    <meta property="og:image" content="https://placeimg.com/870/443/nature" />--%>
    <link rel="stylesheet" media="print" href='<%=ResolveUrl("print-articles.css")%>' />
    <asp:Literal ID="facebookProperty" runat="server"></asp:Literal>

</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="mainBody" runat="Server">
    <div id="article-page">
    <div class="container add-btm"> 
        <div class="row">
            <!-- MAIN CONTENT -->
            <div class="col-sm-8">

                <!-- Print only header -->
                <div class="print-only print-header">
                    <div class="row">
                        <div class="col-xs-5"><img class="print-header-gh-logo" src='<%=ResolveUrl("../Images/global/golden_harvest_logo.svg")%>' /></div>
                        <div class="col-xs-3"><img class="print-header-orange-line" src='<%=ResolveUrl("../Images/print/orange-swatch.png")%>' /></div>
                        <div class="col-xs-4"><img class="print-header-aia-logo" src='<%=ResolveUrl("../Images/print/agronomy-in-action.svg")%>' /></div>
                    </div>
                </div>

                <div class="page-heading" id="mainHeading" runat="server">
                    <%-- <h1>Scout from the start to help yield big advantages</h1>
                    <h6>Categories: early season, corn, management, environment</h6>--%>
                    <%--<asp:Literal ID="mainHeading" runat="server"></asp:Literal>--%>
                </div>

                <script>
                    // It seems silly to do it this way, but if you use another method such as an onclick on the link itself you get double print modals.
                    $("#printBtn").click(function () {
                        window.print();
                    });
                </script>

                <div id="social-share">
                    <div class="article-share">
                        <span>Share:</span>
                        <%--add article link after u parameter and create all of the og:tags in the head of the page--%>
                        <a class="facebook-share" data-sharing="facebook"><i class="fab fa-facebook-f"></i></a> <%--href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fexample.com%2F">--%>
                        <%-- Add article link after URL parameter for twitter--%>
                        <a class="twitter-share" data-sharing="twitter"><i class="fab fa-twitter"></i></a> <%--href="https://twitter.com/intent/tweet?text=I%20thought%20you%20would%20love%20this%20article&url=https%3A%2F%2Fexample.com%2F">--%>
                        <%--add link to the body copy and subject copy can be whatever they want--%>
                        <a class="email-share" data-sharing="email"><i class="fa fa-envelope"></i></a> <%--href="mailto:?subject=Check%20out%20this%20article%20on%20GoldenHarvest.com&body=https%3A%2F%2Fexample.com%2F">--%>
                        <%-- Add button to print the article --%>
                        <a class="print-share" id="printBtn" data-sharing="print"><i class="fa fa-print"></i></a>
                    </div>

                    <section id="article-content">
                        <div id="sproutVideoPlayer" runat="server" class="sprout-container" data-tag="">
                            <!--#include file="../sproutplayer/sproutplayer.html"-->
                            <br />
                        </div>
                        <div id="mainArticle" runat="server"></div>
                    </section>

                    <hr />

                    <div class="social-follow">
                        <h3>FOLLOW US FOR AGRONOMIC<br />
                            NEWS AND INSIGHTS:</h3>
                        <div class="social-icons">
                            <a href="https://www.facebook.com/GldnHarvest/" target="_blank" title="Golden Harvest Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/gldnharvest" target="_blank" title="Golden Harvest Twitter"><i class="fab fa-twitter"></i></a>
                            <%--<a href="#" target="_blank" title="Golden Harvest Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" target="_blank" title="Golden Harvest YouTube"><i class="fab fa-youtube"></i></a>--%>
                        </div>
                    </div>
                </div>

                <!-- Print only footer -->
                <div class="print-only print-footer">
                    <div class="row">
                        <div class="col-xs-12"><p>For more information about Golden Harvest seeds, contact your Golden Harvest Seed Advisor or visit <a href="https://www.goldenharvestseeds.com">www.goldenharvestseeds.com</a></p></div>
                    </div>
                    <div class="row">
                        <div class="col-xs-3"><img class="print-header-gh-logo" src='<%=ResolveUrl("../Images/print/goldenharvest-logo-stacked.svg")%>' /></div>
                        <div class="col-xs-9"><p class="legal-copy"><i>All photos are either the property of Syngenta or are used with permission.</i><br />&copy;<script type="text/javascript">document.write(new Date().getFullYear());</script> Syngenta. <b>Important:</b> Always read and follow label instructions. Some products may not be registered for sale or use in all states or counties. Please check with your local extension service to ensure registration status. Golden Harvest<sup>&reg;</sup>, is a trademark of a Syngenta Group Company. All other trademarks are the property of their respective owners.</p></div>
                    </div>
                </div>

            </div>

                <!-- SIDEBAR -->
            <div class="col-sm-4 sidebar">

                    <div id="relatedArticles" runat="server"></div>


                   <%--     <h2>FEATURED AGRONOMY IN ACTION SITES</h2>
                    <ES:ExperienceSites ID="ExperienceSitesUC" runat="server"></ES:ExperienceSites>
                    <a href="/agronomy-in-action/all-sites" class="btn-default">View All Sites</a>
                           --%>
                </div>
            </div>
        </div>
    </div>
    <!-- #include file="~/gh-form/gh-form.html" -->
    <div class="qualtrics-page-category hidden" id="Category">GHS News</div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="Server">
    <script src='<%=ResolveUrl("~/scripts/article-scripts.js")%>'></script>
    <script src='<%=ResolveUrl("~/scripts/Article-Detail.js")%>'></script>
    <script src='<%=ResolveUrl("~/sproutplayer/js/sprout-player.js")%>'></script>
</asp:Content>
