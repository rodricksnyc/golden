<%@ Page Title="Soybean Traits | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="soybean-traits.aspx.cs" Inherits="Golden_Harvest.precision_planting.soybean_traits" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="<%=ResolveUrl("styles/pp.css")%>">
    <link rel="stylesheet" href="<%=ResolveUrl("~/styles/seedadvisor.css")%>">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="<%=ResolveUrl("~/styles/main.css")%>">
    <meta name="description" content="Golden Harvest offers farmers the broadest choice of soybean herbicide tolerance trait platforms. Learn from our agronomy team how to determine which platform to choose based on weed pressure." />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <section id="pp-mobile-nav">
        <a class="pp-mobile-nav-toggle" data-toggle="collapse" href="#pp-mobile-nav-list" aria-expanded="false" aria-controls="pp-mobile-nav-list">Go to page ></a>
        <ul id="pp-mobile-nav-list" class="collapse">
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/default.aspx")%>">Virtual Tour Home</a></li>
            <li class="pp-mobile-nav-item active"><a href="<%=ResolveUrl("~/precision-planting/soybean-traits.aspx")%>">Soybean Traits</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/soybean-agronomic-management.aspx")%>">Soybean Agronomic Management</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/corn-portfolio.aspx")%>">Corn Portfolio</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/corn-agronomic-management.aspx")%>">Corn Agronomic Management</a></li>
        </ul>
    </section>
    <section id="pp-hero">
        <div class="hero-holder st" style="background-image: url('<%=ResolveUrl("~/precision-planting/images/Soybean traits.png")%>');">
            <h1 class="sr-only">Golden Harvest Precision Planting</h1>
            <img src="<%=ResolveUrl("~/precision-planting/images/GH_PrecPlantingFieldDays_lockup.png")%>" class="pp-hero-logo" alt="Golden Harvest Precision Planting." />
        </div>
    </section>
    <section id="pp-nav-section" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="col-xs-12">
                <ul id="pp-nav-list">
                    <li class="pp-nav-list-item"><a href="<%=ResolveUrl("~/precision-planting/default.aspx")%>" class="pp-nav-list-item-link">Virtual Tour Home</a></li>
                    <li class="pp-nav-list-item active"><a href="<%=ResolveUrl("~/precision-planting/soybean-traits.aspx")%>" class="pp-nav-list-item-link">Soybean Traits</a></li>
                    <li class="pp-nav-list-item"><a href="<%=ResolveUrl("~/precision-planting/soybean-agronomic-management.aspx")%>" class="pp-nav-list-item-link">Soybean Agronomic Management</a></li>
                    <li class="pp-nav-list-item"><a href="<%=ResolveUrl("~/precision-planting/corn-portfolio.aspx")%>" class="pp-nav-list-item-link">Corn Portfolio</a></li>
                    <li class="pp-nav-list-item"><a href="<%=ResolveUrl("~/precision-planting/corn-agronomic-management.aspx")%>" class="pp-nav-list-item-link">Corn Agronomic Management</a></li>
                </ul>
            </div>
        </div>
    </section>
    <section class="pp-main-section white has-arch">
        <div class="container">
            <div class="row">
                <div class="resource-card col-xs-12 col-sm-6 col-md-8 col-md-push-4 col-sm-push-6">
                    <div id="videoModal-bg" class="hidden" onclick="closeModal();">
                        <div id="videoModal">
                            <div id="modalTitle"><h4>Title of the video</h4></div>
                            <div id="modalClose" onclick="closeModal();"><i class="fas fa-times"></i></div>
                            <div id="modalContent" class="video-container">
                                <iframe width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                            </div>
                            <div id="modalDescription">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                    <a class="primary" id="vid1" onclick="openModal();">
                        <figure><img src="<%=ResolveUrl("~/precision-planting/images/Soybean_Trait Choice_Soybean_Traits_1.jpg")%>" alt="Golden Harvest and Precision Planting Field Days: Soybean Trait Choice"></figure>
                        <div class="video-duration">2:15</div>
                        <figcaption class="title sr-only">
                            <span>Golden Harvest and Precision Planting Field Days: Soybean Trait Choice</span>
                        </figcaption>
                        <figcaption class="description sr-only">
                            <span>Golden Harvest offers farmers the broadest choice of soybean herbicide tolerance trait platforms. Learn from our agronomy team how to determine which platform to choose based on weed pressure.</span>
                        </figcaption>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-md-pull-8 col-sm-pull-6">
                    <h2 class="pp-title">Soybean trait choice</h2>
                    <p>Golden Harvest offers farmers the broadest choice of soybean herbicide tolerance trait platforms. Learn from our agronomy team how to determine which platform to choose based on weed pressure.</p>
                </div>
                <script>        
                    function openModal() {
                        $("#videoModal-bg").removeClass("hidden");
                    };
                    function closeModal() {
                        $("#videoModal-bg").addClass("hidden");
                        $("#modalContent iframe").attr('src', null); // Stops the YouTube video if it was in the middle of playing
                    };
                    $("#vid1").click(function () {
                        $("#modalTitle").html("Golden Harvest and Precision Planting Field Days: Soybean Trait Choice");
                        $("#modalDescription").html("Golden Harvest offers farmers the broadest choice of soybean herbicide tolerance trait platforms. Learn from our agronomy team how to determine which platform to choose based on weed pressure.");
                        $("#modalContent iframe").attr('src', "https://www.youtube.com/embed/U5fuU62SRxE");
                    });
                </script>
            </div>
        </div>
    </section>
    <section class="grey has-arch pp-main-cont">
        <div class="arch-element" style="z-index: 0"></div>
        <div class="container" style="z-index: 0">
            <div class="row">
                <div class="resource-card col-xs-12 col-sm-6 col-md-8">
                    <a class="primary" id="vid2" onclick="openModal();">
                        <figure><img src="<%=ResolveUrl("~/precision-planting/images/Soybean_Genetics_Soybean_Traits_2.jpg")%>" alt="Golden Harvest and Precision Planting Field Days: Soybean Genetics"></figure>
                        <div class="video-duration">1:53</div>
                        <figcaption class="title sr-only">
                            <span>Golden Harvest and Precision Planting Field Days: Soybean Genetics</span>
                        </figcaption>
                        <figcaption class="description sr-only">
                            <span>If there's one word that should come to mind when thinking of the Golden Harvest soybean portfolio, it’s choice. Hear an update on Golden Harvest proprietary genetics in the Enlist E3® trait platform.</span>
                        </figcaption>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <h2 class="pp-title">Soybean genetics</h2>
                    <p>If there's one word that should come to mind when thinking of the Golden Harvest soybean portfolio, it’s choice. Hear an update on Golden Harvest proprietary genetics in the Enlist E3<sup>&reg;</sup> trait platform.</p>
                </div>
                <script>   
                    $("#vid2").click(function () {
                        $("#modalTitle").html("Golden Harvest and Precision Planting Field Days: Soybean Genetics");
                        $("#modalDescription").html("If there's one word that should come to mind when thinking of the Golden Harvest soybean portfolio, it’s choice. Hear an update on Golden Harvest proprietary genetics in the Enlist E3® trait platform.");
                        $("#modalContent iframe").attr('src', "https://www.youtube.com/embed/PTXqxfDhSzE");
                    });
                </script>
            </div>
        </div>
    </section>
    <section id="st-related-articles" class="has-arch pp-main-bottom">
        <div class="arch-element" style="z-index: 0"></div>
        <div class="container" style="z-index: 0">
            <div class="row related-articles">
                <h2 class="pp-title">Read Agronomy in Action articles on soybean traits and genetics:</h2>
                <div class="col-xs-12 col-sm-4 related-articles-article">
                    <div class="pp-thumbnail">
                        <img src="<%=ResolveUrl("~/precision-planting/images/st1.png")%>" alt="Chart showing Golden Harvest soybeans winning the most FIRST trials." class="pp-pp-thumbnail"/>
                    </div>
                    <div class="copy">
                        <p class="copy-p">
                            <strong>FIRST Trial Results Prove Strength of Golden Harvest Soybean Portfolio</strong>
                        </p>
                    </div>
                    <div class="button">
                        <a href="https://www.goldenharvestseeds.com/agronomy/articles/first-trial-results-prove-strength-of-golden-harvest-soybean-portfolio" class="button-btn btn-default">Learn More</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 related-articles-article">
                    <div class="pp-thumbnail">
                        <img src="<%=ResolveUrl("~/precision-planting/images/st2.png")%>" alt="Soybeans in a field" class="pp-pp-thumbnail"/>
                    </div>
                    <div class="copy">
                        <p class="copy-p">
                            <strong>Comparing Soybean Herbicide Trait Fit<span class="hidden-xs hidden-md hidden-sm visible-lg"><br/></span></strong>
                        </p>
                    </div>
                    <div class="button">
                        <a href="https://www.goldenharvestseeds.com/agronomy/articles/comparing-soybean-herbicide-trait-fit" class="button-btn btn-default">Learn More</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 related-articles-article">
                    <div class="pp-thumbnail">
                        <img src="<%=ResolveUrl("~/precision-planting/images/str3.png")%>" alt="Soybeans in a field" class="pp-pp-thumbnail"/>
                    </div>
                    <div class="copy">
                        <p class="copy-p">
                            <strong>Match Soybean Traits to Weed Management Needs</strong>
                        </p>
                    </div>
                    <div class="button">
                        <a href="https://www.goldenharvestseeds.com/agronomy/articles/match-soybean-traits-to-weed-management-needs" class="button-btn btn-default">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="grey has-arch pp-main-cont aia">
        <div class="arch-element" style="z-index: 0"></div>
        <div class="container" style="z-index: 0">
            <div class="row">
                <div class="col-xs-12">
                    <h2 class="pp-title">Want more Agronomy in Action content?</h2>
                    <p class="aia-copy">Download the Agronomy in Action 2021 Research Review to discover expert advice on corn and soybean development, disease management, and cultivating a better harvest.</p>
                    <a href="https://www.goldenharvestseeds.com/p/agronomy-guide/" class="aia-button btn-default">Go To Download</a>
                </div>
            </div>
        </div>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="server">
</asp:Content>
