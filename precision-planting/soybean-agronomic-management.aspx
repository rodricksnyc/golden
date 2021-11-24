<%@ Page Title="Soybean Agronomic Management | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="soybean-agronomic-management.aspx.cs" Inherits="Golden_Harvest.precision_planting.soybean_agronomic_management" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="<%=ResolveUrl("styles/pp.css")%>">
    <link rel="stylesheet" href="<%=ResolveUrl("~/styles/seedadvisor.css")%>">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="<%=ResolveUrl("~/styles/main.css")%>">
    <meta name="description" content="There is a risk-reward equation with soybean seeding rates and planting dates. Learn about the factors to consider as well as the benefits of investing in seed treatments." />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <section id="pp-mobile-nav">
        <a class="pp-mobile-nav-toggle" data-toggle="collapse" href="#pp-mobile-nav-list" aria-expanded="false" aria-controls="pp-mobile-nav-list">Go to page ></a>
        <ul id="pp-mobile-nav-list" class="collapse">
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/default.aspx")%>">Virtual Tour Home</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/soybean-traits.aspx")%>">Soybean Traits</a></li>
            <li class="pp-mobile-nav-item active"><a href="<%=ResolveUrl("~/precision-planting/soybean-agronomic-management.aspx")%>">Soybean Agronomic Management</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/corn-portfolio.aspx")%>">Corn Portfolio</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/corn-agronomic-management.aspx")%>">Corn Agronomic Management</a></li>
        </ul>
    </section>
    <section id="pp-hero">
        <div class="hero-holder sa st" style="background-image: url('<%=ResolveUrl("~/precision-planting/images/Soybean portfolio.png")%>');">
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
                    <li class="pp-nav-list-item"><a href="<%=ResolveUrl("~/precision-planting/soybean-traits.aspx")%>" class="pp-nav-list-item-link">Soybean Traits</a></li>
                    <li class="pp-nav-list-item active"><a href="<%=ResolveUrl("~/precision-planting/soybean-agronomic-management.aspx")%>" class="pp-nav-list-item-link">Soybean Agronomic Management</a></li>
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
                        <figure><img src="<%=ResolveUrl("~/precision-planting/images/Soybean_Seeding_Rates_&_Dates_Soybean_Agronomy_1.jpg")%>" alt="Golden Harvest and Precision Planting Field Days: Soybean Seeding Rates and Planting Dates"></figure>
                        <div class="video-duration">2:34</div>
                        <figcaption class="title sr-only">
                            <span>Golden Harvest and Precision Planting Field Days: Soybean Seeding Rates and Planting Dates</span>
                        </figcaption>
                        <figcaption class="description sr-only">
                            <span>There is a risk-reward equation with soybean seeding rates and planting dates. Learn about the factors to consider as well as the benefits of investing in seed treatments.</span>
                        </figcaption>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-md-pull-8 col-sm-pull-6">
                    <h2 class="pp-title">Soybean seeding rates and planting dates</h2>
                    <p>There is a risk-reward equation with soybean seeding rates and planting dates. Learn about the factors to consider as well as the benefits of investing in seed treatments.</p>
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
                        $("#modalTitle").html("Golden Harvest and Precision Planting Field Days: Soybean Seeding Rates and Planting Dates");
                        $("#modalDescription").html("There is a risk-reward equation with soybean seeding rates and planting dates. Learn about the factors to consider as well as the benefits of investing in seed treatments.");
                        $("#modalContent iframe").attr('src', "https://www.youtube.com/embed/lkNv5TOiw_U");
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
                        <figure><img src="<%=ResolveUrl("~/precision-planting/images/Soybean_Planting_Conditions_Soybean_Agronomy_2.jpg")%>" alt="Golden Harvest and Precision Planting Field Days: Soybean Planting Conditions"></figure>
                        <div class="video-duration">1:30</div>
                        <figcaption class="title sr-only">
                            <span>Golden Harvest and Precision Planting Field Days: Soybean Planting Conditions</span>
                        </figcaption>
                        <figcaption class="description sr-only">
                            <span>Hear from Golden Harvest agronomists about the importance of proper soil conditions and seed-to-soil contact during soybean planting to get your crop started on the right track.</span>
                        </figcaption>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <h2 class="pp-title">Soybean planting conditions</h2>
                    <p>Hear from Golden Harvest agronomists about the importance of proper soil conditions and seed-to-soil contact during soybean planting to get your crop started on the right track.</p>
                </div>
                <script>   
                    $("#vid2").click(function () {
                        $("#modalTitle").html("Golden Harvest and Precision Planting Field Days: Soybean Planting Conditions");
                        $("#modalDescription").html("Hear from Golden Harvest agronomists about the importance of proper soil conditions and seed-to-soil contact during soybean planting to get your crop started on the right track.");
                        $("#modalContent iframe").attr('src', "https://www.youtube.com/embed/FZUj2r9jObI");
                    });
                </script>
            </div>
        </div>
    </section>
    <section class=" has-arch pp-main-cont">
        <div class="arch-element" style="z-index: 0"></div>
        <div class="container" style="z-index: 0">
            <div class="row">
                <div class="resource-card col-xs-12 col-sm-6 col-md-8 col-md-push-4 col-sm-push-6">
                    <a class="primary" id="vid3" onclick="openModal();">
                        <figure><img src="<%=ResolveUrl("~/precision-planting/images/Soybean_Crop_Fertility_Soybean_Agronomy_3.jpg")%>" alt="Golden Harvest and Precision Planting Field Days: Soybean Crop Fertility"></figure>
                        <div class="video-duration">1:17</div>
                        <figcaption class="title sr-only">
                            <span>Golden Harvest and Precision Planting Field Days: Soybean Crop Fertility</span>
                        </figcaption>
                        <figcaption class="description sr-only">
                            <span>Golden Harvest Agronomist Stephanie Smith answers an important soybean fertility question: How can farmers effectively get soybean plants from germination to V3? </span>
                        </figcaption>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-md-pull-8 col-sm-pull-6">
                    <h2 class="pp-title">Soybean crop fertility</h2>
                    <p>Golden Harvest District Manager Stephanie Smith answers an important soybean fertility question: How can farmers effectively get soybean plants from germination to V3?</p>
                </div>
                <script>   
                    $("#vid3").click(function () {
                        $("#modalTitle").html("Golden Harvest and Precision Planting Field Days: Soybean Crop Fertility");
                        $("#modalDescription").html("Golden Harvest District Manager Stephanie Smith answers an important soybean fertility question: How can farmers effectively get soybean plants from germination to V3? ");
                        $("#modalContent iframe").attr('src', "https://www.youtube.com/embed/fB3ng84rJAI");
                    });
                </script>
            </div>
        </div>
    </section>
    <section id="st-related-articles" class="grey has-arch pp-main-bottom">
        <div class="arch-element" style="z-index: 0"></div>
        <div class="container" style="z-index: 0">
            <div class="row related-articles">
                <h2 class="pp-title">Read Agronomy in Action articles on soybean planting and fertility:</h2>
                <div class="col-xs-12 col-sm-4 related-articles-article">
                    <div class="pp-thumbnail">
                        <img src="<%=ResolveUrl("~/precision-planting/images/sar1.png")%>" alt="Seed sprouting" class="pp-pp-thumbnail"/>
                    </div>
                    <div class="copy">
                        <p class="copy-p">
                            <strong>Adjust Seeding Rates for Delayed Soybean Planting</strong>
                        </p>
                    </div>
                    <div class="button">
                        <a href="https://www.goldenharvestseeds.com/agronomy/articles/adjust-seeding-rates-for-delayed-soybean-planting" class="button-btn btn-default">Learn More</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 related-articles-article">
                    <div class="pp-thumbnail">
                        <img src="<%=ResolveUrl("~/precision-planting/images/sar2.png")%>" alt="Chart depicting planting yields over time" class="pp-pp-thumbnail"/>
                    </div>
                    <div class="copy">
                        <p class="copy-p">
                            <strong>Plant Soybeans Early to Maximize Yield Return<span class="hidden-xs hidden-md hidden-sm visible-lg"><br/></span></strong>
                        </p>
                    </div>
                    <div class="button">
                        <a href="https://www.goldenharvestseeds.com/agronomy/articles/plant-early-maximize-yield-return" class="button-btn btn-default">Learn More</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 related-articles-article">
                    <div class="pp-thumbnail">
                        <img src="<%=ResolveUrl("~/precision-planting/images/sar3.png")%>" alt="Bales of hay" class="pp-pp-thumbnail"/>
                    </div>
                    <div class="copy">
                        <p class="copy-p">
                            <strong>How Crop Fertility Removal Rates Impact Rotational Crops</strong>
                        </p>
                    </div>
                    <div class="button">
                        <a href="https://www.goldenharvestseeds.com/agronomy/articles/how-crop-fertility-removal-rates-impact-rotational-crops" class="button-btn btn-default">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class=" has-arch pp-main-cont aia">
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
