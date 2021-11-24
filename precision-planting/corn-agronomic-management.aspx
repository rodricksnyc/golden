<%@ Page Title="Corn Agronomic Mangement | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="corn-agronomic-management.aspx.cs" Inherits="Golden_Harvest.precision_planting.corn_agronomic_management" %>
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
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/default.aspx")%>">Virtual Tour Home</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/soybean-traits.aspx")%>">Soybean Traits</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/soybean-agronomic-management.aspx")%>">Soybean Agronomic Management</a></li>
            <li class="pp-mobile-nav-item"><a href="<%=ResolveUrl("~/precision-planting/corn-portfolio.aspx")%>">Corn Portfolio</a></li>
            <li class="pp-mobile-nav-item active"><a href="<%=ResolveUrl("~/precision-planting/corn-agronomic-management.aspx")%>">Corn Agronomic Management</a></li>
        </ul>
    </section>
    <section id="pp-hero">
        <div class="hero-holder ghcam st" style="background-image: url('<%=ResolveUrl("~/precision-planting/images/Corn Agronomy.png")%>');">
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
                    <li class="pp-nav-list-item"><a href="<%=ResolveUrl("~/precision-planting/soybean-agronomic-management.aspx")%>" class="pp-nav-list-item-link">Soybean Agronomic Management</a></li>
                    <li class="pp-nav-list-item"><a href="<%=ResolveUrl("~/precision-planting/corn-portfolio.aspx")%>" class="pp-nav-list-item-link">Corn Portfolio</a></li>
                    <li class="pp-nav-list-item active"><a href="<%=ResolveUrl("~/precision-planting/corn-agronomic-management.aspx")%>" class="pp-nav-list-item-link">Corn Agronomic Management</a></li>
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
                        <figure><img src="<%=ResolveUrl("~/precision-planting/images/Corn_Nutrient_Management_Corn_Agronomy_1.jpg")%>" alt="Golden Harvest and Precision Planting Field Days: Corn Nutrient Managemen"></figure>
                        <div class="video-duration">3:23</div>
                        <figcaption class="title sr-only">
                            <span>Golden Harvest and Precision Planting Field Days: Corn Nutrient Management</span>
                        </figcaption>
                        <figcaption class="description sr-only">
                            <span>Nutrient management plays a big role in corn yield potential. Hear actionable tips on how to maximize the efficiency and effectiveness of nitrogen and sulfur applications in your corn fields from the Golden Harvest agronomy team.</span>
                        </figcaption>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-md-pull-8 col-sm-pull-6">
                    <h2 class="pp-title">Corn nutrient management</h2>
                    <p>Nutrient management plays a big role in corn yield potential. Hear actionable tips on how to maximize the efficiency and effectiveness of nitrogen and sulfur applications in your corn fields from the Golden Harvest agronomy team.</p>
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
                        $("#modalTitle").html("Golden Harvest and Precision Planting Field Days: Corn Nutrient Management");
                        $("#modalDescription").html("Nutrient management plays a big role in corn yield potential. Hear actionable tips on how to maximize the efficiency and effectiveness of nitrogen and sulfur applications in your corn fields from the Golden Harvest agronomy team.");
                        $("#modalContent iframe").attr('src', "https://www.youtube.com/embed/KKjtXyGjk0k");
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
                        <figure><img src="<%=ResolveUrl("~/precision-planting/images/Corn_Planting_Populations_Corn_Agronomy_2.jpg")%>" alt=">Golden Harvest and Precision Planting Field Days: Corn Planting Populations"></figure>
                        <div class="video-duration">2:32</div>
                        <figcaption class="title sr-only">
                            <span>Golden Harvest and Precision Planting Field Days: Corn Planting Populations</span>
                        </figcaption>
                        <figcaption class="description sr-only">
                            <span>When determining your corn planting populations, look at 2 key factors: soil type and ear type. Learn about how to match soil type with ear type to determine the best populations for each hybrid and maximize yield potential.</span>
                        </figcaption>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <h2 class="pp-title">Corn planting populations</h2>
                    <p>When determining your corn planting populations, look at 2 key factors: soil type and ear type. Learn about how to match soil type with ear type to determine the best populations for each hybrid and maximize yield potential.</p>
                </div>
                <script>   
                    $("#vid2").click(function () {
                        $("#modalTitle").html("Golden Harvest and Precision Planting Field Days: Corn Planting Populations");
                        $("#modalDescription").html("When determining your corn planting populations, look at 2 key factors: soil type and ear type. Learn about how to match soil type with ear type to determine the best populations for each hybrid and maximize yield potential.");
                        $("#modalContent iframe").attr('src', "https://www.youtube.com/embed/6xYH9_KL5_4");
                    });
                </script>
            </div>
        </div>
    </section>
    <section id="st-related-articles" class="has-arch pp-main-bottom">
        <div class="arch-element" style="z-index: 0"></div>
        <div class="container" style="z-index: 0">
            <div class="row related-articles">
                <h2 class="pp-title">Read Agronomy in Action articles on corn nutrient management and planting populations:</h2>
                <div class="col-xs-12 col-sm-4 related-articles-article">
                    <div class="pp-thumbnail">
                        <img src="<%=ResolveUrl("~/precision-planting/images/car1.png")%>" alt="Dry cracked soil" class="pp-pp-thumbnail"/>
                    </div>
                    <div class="copy">
                        <p class="copy-p">
                            <strong>Are Your Soils Lacking Boron, Manganese or Sulfur?</strong>
                        </p>
                    </div>
                    <div class="button">
                        <a href="https://www.goldenharvestseeds.com/agronomy/articles/are-your-soils-lacking-boron-manganese-or-sulfur" class="button-btn btn-default">Learn More</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 related-articles-article">
                    <div class="pp-thumbnail">
                        <img src="<%=ResolveUrl("~/precision-planting/images/car2.png")%>" alt="Leaf with signs of yellowing" class="pp-pp-thumbnail"/>
                    </div>
                    <div class="copy">
                        <p class="copy-p">
                            <strong>Sidedressing Nitrogen for Nutrient Success<span class="hidden-xs hidden-md hidden-sm visible-lg"><br/></span></strong>
                        </p>
                    </div>
                    <div class="button">
                        <a href="https://www.goldenharvestseeds.com/agronomy/articles/sidedressing-nitrogen-for-nutrient-success" class="button-btn btn-default">Learn More</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 related-articles-article">
                    <div class="pp-thumbnail">
                        <img src="<%=ResolveUrl("~/precision-planting/images/car3.png")%>" alt="Corn field in the early stages of growth" class="pp-pp-thumbnail"/>
                    </div>
                    <div class="copy">
                        <p class="copy-p">
                            <strong>Management Considerations for Uniform Corn Stand</strong>
                        </p>
                    </div>
                    <div class="button">
                        <a href="https://www.goldenharvestseeds.com/agronomy/articles/management-considerations-corn-stand" class="button-btn btn-default">Learn More</a>
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
