<%@ Page Title="Precision Planting Field Days | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Golden_Harvest.precision_planting.PPDefault" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="<%=ResolveUrl("styles/pp.css")%>">
    <link rel="stylesheet" href="<%=ResolveUrl("~/styles/seedadvisor.css")%>">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="<%=ResolveUrl("~/styles/main.css")%>">
    <meta name="description" content="Golden Harvest partners with Precision Planting to bring farmers the latest in agronomic management techniques using advanced technology systems. See the latest in corn and soybean agronomy research as well as portfolio offerings from Golden Harvest to inform your seed selection decisions." />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <section id="pp-mobile-nav">
        <a class="pp-mobile-nav-toggle" data-toggle="collapse" href="#pp-mobile-nav-list" aria-expanded="false" aria-controls="pp-mobile-nav-list">Go to page ></a>
        <ul id="pp-mobile-nav-list" class="collapse">
            <li class="pp-mobile-nav-item active"><a href="<%=ResolveUrl("~/precision-planting/default.aspx")%>">Virtual Tour Home</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/soybean-traits.aspx")%>">Soybean Traits</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/soybean-agronomic-management.aspx")%>">Soybean Agronomic Management</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/corn-portfolio.aspx")%>">Corn Portfolio</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/corn-agronomic-management.aspx")%>">Corn Agronomic Management</a></li>
        </ul>
    </section>
    <section id="pp-hero">
        <div class="st hero-holder" style="background-image: url('<%=ResolveUrl("~/precision-planting/images/hero.jpg")%>');">
            <h1 class="sr-only">Golden Harvest Precision Planting</h1>
            <img src="<%=ResolveUrl("~/precision-planting/images/GH_PrecPlantingFieldDays_lockup.png")%>" class="pp-hero-logo" alt="Golden Harvest Precision Planting." />
        </div>
    </section>
    <section id="pp-nav-section" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="col-xs-12">
                <ul id="pp-nav-list">
                    <li class="pp-nav-list-item active"><a href="<%=ResolveUrl("~/precision-planting/default.aspx")%>" class="pp-nav-list-item-link">Virtual Tour Home</a></li>
                    <li class="pp-nav-list-item"><a href="<%=ResolveUrl("~/precision-planting/soybean-traits.aspx")%>" class="pp-nav-list-item-link">Soybean Traits</a></li>
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
                        <figure><img src="<%=ResolveUrl("~/precision-planting/images/fielddaysoverview.png")%>" alt="Golden Harvest and Precision Planting Field Days: Overview"></figure>
                        <div class="video-duration">4:38</div>
                        <figcaption class="title sr-only">
                            <span>Golden Harvest and Precision Planting Field Days: Overview</span>
                        </figcaption>
                        <figcaption class="description sr-only">
                            <span>Golden Harvest partners with Precision Planting to bring farmers the latest in agronomic management techniques using advanced technology systems. See the latest in corn and soybean agronomy research as well as portfolio offerings from Golden Harvest to inform your 2021 seed selection decisions.</span>
                        </figcaption>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-md-pull-8 col-sm-pull-6">
                    <h2 class="pp-title">Welcome to the Golden Harvest and Precision Planting Field Days</h2>
                    <p>Golden Harvest partners with Precision Planting<sup>&reg;</sup> to bring farmers the latest in agronomic management techniques using advanced technology systems. This year, Golden Harvest and Precision Planting are bringing field insights directly to you in a virtual tour so you can gain agronomic advice from the comfort of your home.</p>
                    <p>Take the Golden Harvest and Precision Planting Field Days virtual tour by clicking on the 4 tour stop pages below to see the latest in corn and soybean agronomy research as well as portfolio offerings from Golden Harvest to inform your 2021 seed selection decisions.</p>
                    <p>The Golden Harvest team is Rooted in Genetics, Agronomy and Service<sup>&#8480;</sup>, so we work 365 days a year to deliver research study findings, agronomic insights and management recommendations to help you maximize return on investment.</p>
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
                        $("#modalTitle").html("Golden Harvest and Precision Planting Field Days: Overview");
                        $("#modalDescription").html("Golden Harvest partners with Precision Planting to bring farmers the latest in agronomic management techniques using advanced technology systems. See the latest in corn and soybean agronomy research as well as portfolio offerings from Golden Harvest to inform your 2021 seed selection decisions.");
                        $("#modalContent iframe").attr('src', "https://www.youtube.com/embed/pxak6HlQimE");
                    });
                </script>
            </div>
        </div>
    </section>
    <section class="pp-main-section-bottom grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <a class="pp-resource-card" id="st" href="<%=ResolveUrl("~/precision-planting/soybean-traits.aspx")%>">
                        <p class="pp-resource-card-text">Soybean Traits</p>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <a class="pp-resource-card" id="sa" href="<%=ResolveUrl("~/precision-planting/soybean-agronomic-management.aspx")%>">
                        <p class="pp-resource-card-text">Soybean Agronomic Management</p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <a class="pp-resource-card" id="ghcp" href="<%=ResolveUrl("~/precision-planting/corn-portfolio.aspx")%>">
                        <p class="pp-resource-card-text">Corn Portfolio</p>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <a class="pp-resource-card" id="ghcam" href="<%=ResolveUrl("~/precision-planting/corn-agronomic-management.aspx")%>">
                        <p class="pp-resource-card-text">Corn Agronomic Management</p>
                    </a> 
                </div>
            </div>
        </div>
    </section>
</asp:Content>   
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="server">
</asp:Content>
