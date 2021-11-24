<%@ Page Title="Follow Along - Corn and Soybean Farmers | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="default.aspx.cs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="description" content="Hear from farmers across the Midwest about their experiences growing Golden Harvest® corn and soybean seed products." />
    <meta name="keywords" content="follow along, growing season" />
    <link href="<%=ResolveUrl("css/carousel.css") %>" rel="stylesheet" />
    <link href="<%=ResolveUrl("css/main.css") %>" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <section id="hero">
        <div class="hero-holder hidden-xs" style="background-image: url('<%=ResolveUrl("img/pfa-hero-desktop.jpg")%>');"></div>
        <div class="mobile-hero-holder visible-xs" style="background-image: url('<%=ResolveUrl("img/pfa-hero-mobile.jpg")%>');"></div>
    </section>

    <section id="intro" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-10 col-xs-push-1">
                    <div class="row">
                        <div class="col-xs-12 col-md-8">
                            <h2>FARMER TESTED AND APPROVED</h2>
                            <p>When it comes to growing corn and soybeans, Golden Harvest is committed to delivering unique genetics and trait options in products that are bred, tested and proven locally – and we want to share those local results with you. During the 2021 growing season, we’re highlighting farmers across the Midwest to share their experiences with game-changing Golden Harvest<sup>&reg;</sup> corn hybrids and soybean varieties.</p>
                            <p>Browse through the farmers below to learn where they are located, which products they are growing, and how their season is going so far. Stay tuned throughout the season for updates from each farmer.</p>
                        </div>
                        <div class="col-xs-12 col-md-4" id="map">
                            <img src="<%=ResolveUrl("img/map.svg") %>" alt="Orange animated map with yellow pins in the upper east area" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Kristi Kellen -->
<%--            <div class="farmer-card">
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-row">
                            <div class="farmer-icon">
                                <a href="<%=ResolveUrl("biography/kristi-kellen.aspx") %>">
                                    <img src="img/farmers/kristi-kellen-128x128.jpg" alt="Kristi Kellen" />
                                </a>
                            </div>
                            <div class="farmer-desc">
                                <div>
                                    <h3><a href="<%=ResolveUrl("biography/kristi-kellen.aspx") %>">Kristi K.</a></h3>
                                    <p><b>Golden Harvest farmer</b><span class="pipe">|</span><b>Westphalia, MI</b></p>
                                </div>
                                <div>
                                    <p><b>Products Featured:</b> <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/e107c1") %>">E107C1</a>, <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/e109r3") %>">E109R3</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-blog">
                            <!-- desktop carousel -->
                            <div id="kristiK-desktop" class="carousel carousel-farmer-blogs-desktop slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <div class="blog-post">
                                                            <a href="<%=ResolveUrl("./blogs/kristi-kellen/planting-enogen-corn-mi.aspx") %>">
                                                                <img src="<%=ResolveUrl("img/thumbnails/planting-enogen-corn-mi-200x126.jpg") %>" alt="Green Tractor" />
                                                                <p>Planting Enogen corn in Westphalia, Mich.</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <div class="blog-post" style="width: 412.5px">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#kristiK-desktop" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#kristiK-desktop" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                            <!-- mobile carousel -->
                            <div id="kristiK-mobile" class="carousel carousel-farmer-blogs-mobile slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="blog-post">
                                                    <a href="<%=ResolveUrl("./blogs/kristi-kellen/planting-enogen-corn-mi.aspx") %>">
                                                        <img src="<%=ResolveUrl("img/thumbnails/planting-enogen-corn-mi-200x126.jpg") %>" alt="Green Tractor" />
                                                        <p>Planting Enogen corn in Westphalia, Mich.</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#kristiK-mobile" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#kristiK-mobile" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>--%>

            <!-- Scott Stahl -->
            <div class="farmer-card">
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-row">
                            <div class="farmer-icon">
                                <a href="<%=ResolveUrl("biography/scott-stahl.aspx") %>">
                                    <img src="img/farmers/scott-stahl-128x128.jpg" alt="Scott Stahl" />
                                </a>
                            </div>
                            <div class="farmer-desc">
                                <div>
                                    <h3><a href="<%=ResolveUrl("biography/scott-stahl.aspx") %>">Scott S.</a></h3>
                                    <p><b>Golden Harvest farmer</b><span class="pipe">|</span><b>Bridgewater, SD</b></p>
                                </div>
                                <div>
                                    <p><b>Products Featured:</b> <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/g10l16") %>">G10L16-5222A</a>, <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/g11v76") %>">G11V76-5122</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-blog">
                            <!-- desktop carousel -->
                            <div id="scottS-desktop" class="carousel carousel-farmer-blogs-desktop slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <div class="blog-post">
                                                            <a href="<%=ResolveUrl("./blogs/scott-stahl/planting-corn-hybrids-in-sd.aspx") %>">
                                                                <img src="<%=ResolveUrl("img/thumbnails/planting-corn-hybrids-in-sd-200x126.jpg") %>" alt="thumbnail" />
                                                                <p>Planting G10L16 and G11V76 corn hybrids in Bridgewater, S.D.</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <div class="blog-post" style="width: 412.5px">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#scottS-desktop" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#scottS-desktop" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                            <!-- mobile carousel -->
                            <div id="scottS-mobile" class="carousel carousel-farmer-blogs-mobile slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="blog-post">
                                                    <a href="<%=ResolveUrl("./blogs/scott-stahl/planting-corn-hybrids-in-sd.aspx") %>">
                                                        <img src="<%=ResolveUrl("img/thumbnails/planting-corn-hybrids-in-sd-200x126.jpg") %>" alt="thumbnail" />
                                                        <p>Planting G10L16 and G11V76 corn hybrids in Bridgewater, S.D.</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#scottS-mobile" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#scottS-mobile" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Scott Nelson -->
<%--            <div class="farmer-card">
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-row">
                            <div class="farmer-icon">
                                <a href="<%=ResolveUrl("biography/scott-nelson.aspx") %>">
                                    <img src="img/farmers/128x128.png" alt="Scott Nelson" />
                                </a>
                            </div>
                            <div class="farmer-desc">
                                <div>
                                    <h3><a href="<%=ResolveUrl("biography/scott-nelson.aspx") %>">Scott N.</a></h3>
                                    <p><b>Golden Harvest farmer</b><span class="pipe">|</span><b>Lancaster, MN</b></p>
                                </div>
                                <div>
                                    <p><b>Products Featured:</b> <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/e080q1") %>">E080Q1-5122A</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>--%>
<%--                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-blog">
                            <!-- desktop carousel -->
                            <div id="scottN-desktop" class="carousel carousel-farmer-blogs-desktop slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <div class="blog-post">
                                                            <a href="<%=ResolveUrl("./") %>">
                                                                <img src="<%=ResolveUrl("img/thumbnails/200x126.jpg") %>" alt="thumbnail" />
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <div class="blog-post" style="width: 412.5px">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#scottN-desktop" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#scottN-desktop" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                            <!-- mobile carousel -->
                            <div id="scottN-mobile" class="carousel carousel-farmer-blogs-mobile slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="blog-post">
                    <a href="<%=ResolveUrl("./") %>">
                                                                <img src="<%=ResolveUrl("img/thumbnails/200x126.jpg") %>" alt="thumbnail" />
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#scottN-mobile" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#scottN-mobile" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>--%>
<%--            </div>--%>

            <!-- Riley Adams -->
            <div class="farmer-card">
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-row">
                            <div class="farmer-icon">
                                <a href="<%=ResolveUrl("biography/riley-a.aspx") %>">
                                    <img src="img/farmers/128x128.png" alt="Riley A." />
                                </a>
                            </div>
                            <div class="farmer-desc">
                                <div>
                                    <h3><a href="<%=ResolveUrl("biography/riley-a.aspx") %>">Riley A.</a></h3>
                                    <p><b>Golden Harvest farmer</b><span class="pipe">|</span><b>Sanborn, ND</b></p>
                                </div>
                                <div>
                                    <p><b>Products Featured:</b> <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/soybean/gh0502xf") %>">GH0502XF</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-blog">
                            <!-- desktop carousel -->
                            <div id="rileyA-desktop" class="carousel carousel-farmer-blogs-desktop slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <div class="blog-post">
                                                            <a href="<%=ResolveUrl("./blogs/riley-a/planting-soybeans-in-nd.aspx") %>">
                                                               <img src="<%=ResolveUrl("img/thumbnails/planting-soybeans-in-nd-200x126.jpg") %>" alt="thumbnail" />
                                                                <p>Planting GH0502XF soybeans in Sanborn, N.D.</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <div class="blog-post" style="width: 412.5px">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#rileyA-desktop" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#rileyA-desktop" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                            <!-- mobile carousel -->
                            <div id="rileyA-mobile" class="carousel carousel-farmer-blogs-mobile slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="blog-post">
                                                    <a href="<%=ResolveUrl("./blogs/riley-a/planting-soybeans-in-nd.aspx") %>">
                                                        <img src="<%=ResolveUrl("img/thumbnails/planting-soybeans-in-nd-200x126.jpg") %>" alt="thumbnail" />
                                                        <p>Planting GH0502XF soybeans in Sanborn, N.D.</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#rileyA-mobile" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#rileyA-mobile" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Grant + Seth B. -->
<%--            <div class="farmer-card">
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-row">
                            <div class="farmer-icon">
                                <a href="<%=ResolveUrl("biography/grant-seth-b.aspx") %>">
                                    <img src="img/farmers/128x128.png" alt="Grant and Seth B." />
                                </a>
                            </div>
                            <div class="farmer-desc">
                                <div>
                                    <h3><a href="<%=ResolveUrl("biography/grant-seth-b.aspx") %>">Grant and Seth B.</a></h3>
                                    <p><b>Golden Harvest farmers</b><span class="pipe">|</span><b>Windsor, ND</b></p>
                                </div>
                                <div>
                                    <p><b>Products Featured:</b> <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/soybean/gh0502xf") %>">GH0502XF</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>--%>
<%--                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-blog">
                            <!-- desktop carousel -->
                            <div id="GrantSeth-desktop" class="carousel carousel-farmer-blogs-desktop slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <div class="blog-post">
                                                            <a href="<%=ResolveUrl("./") %>">
                                                                <img src="<%=ResolveUrl("img/thumbnails/200x126.jpg") %>" alt="thumbnail" />
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <div class="blog-post" style="width: 412.5px">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#GrantSeth-desktop" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#GrantSeth-desktop" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                            <!-- mobile carousel -->
                            <div id="GrantSeth-mobile" class="carousel carousel-farmer-blogs-mobile slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="blog-post">
                                                    <a href="<%=ResolveUrl("./") %>">
                                                        <img src="<%=ResolveUrl("img/thumbnails/200x126.jpg") %>" alt="thumbnail" />
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#GrantSeth-mobile" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#GrantSeth-mobile" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>--%>
<%--            </div>--%>

            <!-- Kevin Lilienthal -->
<%--            <div class="farmer-card">
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-row">
                            <div class="farmer-icon">
                                <a href="<%=ResolveUrl("biography/kevin-lilienthal.aspx") %>">
                                    <img src="img/farmers/128x128.png" alt="Kevin Lilienthal" />
                                </a>
                            </div>
                            <div class="farmer-desc">
                                <div>
                                    <h3><a href="<%=ResolveUrl("biography/kevin-lilienthal.aspx") %>">Kevin L.</a></h3>
                                    <p><b>Golden Harvest farmer</b><span class="pipe">|</span><b>Arlington, MN</b></p>
                                </div>
                                <div>
                                    <p><b>Products Featured:</b> <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/g02k39") %>">G02K39-5122</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>--%>
<%--                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-blog">
                            <!-- desktop carousel -->
                            <div id="kevinL-desktop" class="carousel carousel-farmer-blogs-desktop slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <div class="blog-post">
                                                            <a href="<%=ResolveUrl("./") %>">
                                                                <img src="<%=ResolveUrl("img/thumbnails/200x126.jpg") %>" alt="thumbnail" />
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <div class="blog-post" style="width: 412.5px">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#kevinL-desktop" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#kevinL-desktop" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                            <!-- mobile carousel -->
                            <div id="kevinL-mobile" class="carousel carousel-farmer-blogs-mobile slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="blog-post">
                                                    <a href="<%=ResolveUrl("./") %>">
                                                        <img src="<%=ResolveUrl("img/thumbnails/200x126.jpg") %>" alt="thumbnail" />
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#kevinL-mobile" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#kevinL-mobile" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>--%>
<%--            </div>--%>

            <!-- Kyle Samp -->
<%--            <div class="farmer-card">
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-row">
                            <div class="farmer-icon">
                                <a href="<%=ResolveUrl("biography/kyle-samp.aspx") %>">
                                    <img src="img/farmers/kyle-samp-128x128.jpg" alt="Kyle Samp" />
                                </a>
                            </div>
                            <div class="farmer-desc">
                                <div>
                                    <h3><a href="<%=ResolveUrl("biography/kyle-samp.aspx") %>">Kyle S.</a></h3>
                                    <p><b>Golden Harvest farmer</b><span class="pipe">|</span><b>Cairo, MO</b></p>
                                </div>
                                <div>
                                    <p><b>Products Featured:</b> <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/g12s75") %>">G12S75-5221</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-blog">
                            <!-- desktop carousel -->
                            <div id="kyleS-desktop" class="carousel carousel-farmer-blogs-desktop slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <div class="blog-post">
                                                            <a href="<%=ResolveUrl("./blogs/kyle-samp/planting-corn-hybrid-mo.aspx") %>">
                                                                <img src="img/thumbnails/planting-corn-hybrid-mo-200x126.jpg" alt="Green tractor trailer" />
                                                                <p>Planting G12S75-5221 E-Z Refuge seed in Cairo, Mo.</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <div class="blog-post" style="width: 412.5px">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#kyleS-desktop" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#kyleS-desktop" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                            <!-- mobile carousel -->
                            <div id="kyleS-mobile" class="carousel carousel-farmer-blogs-mobile slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="blog-post">
                                                    <a href="<%=ResolveUrl("./blogs/kyle-samp/planting-corn-hybrid-mo.aspx") %>">
                                                        <img src="img/thumbnails/planting-corn-hybrid-mo-200x126.jpg" alt="Green tractor trailer" />
                                                        <p>Planting G12S75-5221 E-Z Refuge seed in Cairo, Mo.</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#kyleS-mobile" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#kyleS-mobile" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>--%>

            <!-- Clete Miller -->
<%--            <div class="farmer-card">
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-row">
                            <div class="farmer-icon">
                                <a href="<%=ResolveUrl("biography/clete-miller.aspx") %>">
                                    <img src="img/farmers/clete-miller-128x128.jpg" alt="Clete Miller" />
                                </a>
                            </div>
                            <div class="farmer-desc">
                                <div>
                                    <h3><a href="<%=ResolveUrl("biography/clete-miller.aspx") %>">Clete M.</a></h3>
                                    <p><b>Golden Harvest farmer</b><span class="pipe">|</span><b>Bowling Green, MO</b></p>
                                </div>
                                <div>
                                    <p><b>Products Featured:</b> <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/g10l16") %>">G10L16-5222A</a>, <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/corn/g10d21") %>">G10D21-5332</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-10 col-xs-push-1">
                        <div class="farmer-blog">
                            <!-- desktop carousel -->
                            <div id="cleteM-desktop" class="carousel carousel-farmer-blogs-desktop slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="row">
                                                    <div class="col-xs-6">
                                                        <div class="blog-post">
                                                            <a href="<%=ResolveUrl("./blogs/clete-miller/planting-corn-hybrids-in-mo.aspx") %>">
                                                                <img src="<%=ResolveUrl("img/thumbnails/planting-corn-hybrids-in-mo-200x126.jpg") %>" alt="thumbnail" />
                                                                <p>Planting G10L16 and G10D21 corn hybrids in Bowling Green, Mo.</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6">
                                                        <div class="blog-post" style="width: 412.5px">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#cleteM-desktop" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#cleteM-desktop" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                            <!-- mobile carousel -->
                            <div id="cleteM-mobile" class="carousel carousel-farmer-blogs-mobile slide" data-ride="carousel" data-interval="false">

                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="blog-post">
                                                    <a href="<%=ResolveUrl("./blogs/clete-miller/planting-corn-hybrids-in-mo.aspx") %>">
                                                        <img src="<%=ResolveUrl("img/thumbnails/planting-corn-hybrids-in-mo-200x126.jpg") %>" alt="thumbnail" />
                                                        <p>Planting G10L16 and G10D21 corn hybrids in Bowling Green, Mo.</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- controls -->
                                    <a class="left carousel-control" href="#cleteM-mobile" role="button" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#cleteM-mobile" role="button" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>--%>


        </div>
    </section>

    <section id="cta" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row text-center">
                <div class="col-xs-12 col-md-8 col-md-push-2">
                    <h2>DISCOVER OUR PRODUCTS</h2>
                    <p>Learn more about the game-changing corn hybrids and soybean varieties we're following this season and discover the right match for your fields.</p>
                    <a href="<%=ResolveUrl("https://www.goldenharvestseeds.com/seed-guide/") %>" class="btn-default">Download Seed Guide</a>
                </div>
            </div>
        </div>
    </section>

    <section id="legal" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="col-xs-12">
                <p>
                    All photos and video are either the property of Syngenta or are used with permission.
                </p>
                <p>
                    &copy; <script type="text/javascript">document.write(new Date().getFullYear());</script> Syngenta. <b>Important: Always read and follow label and bag tag instructions; only those labeled as tolerant to glufosinate may be sprayed with glufosinate ammonium based herbicides.</b> Golden Harvest<sup>&reg;</sup> soybean varieties are protected under granted or pending U.S. variety patents and other intellectual property rights, regardless of the trait(s) within the seed. The Enlist E3<sup>&reg;</sup> soybean traits, the LibertyLink<sup>&reg;</sup>, the Roundup Ready 2 Xtend<sup>&reg;</sup>, Roundup Ready 2 Yield<sup>&reg;</sup> and XtendFlex<sup>&reg;</sup> traits may be protected under numerous United States patents. It is unlawful to save soybeans containing these traits for planting or transfer to others for use as a planting seed. The trademarks or service marks displayed or otherwise used herein are the property of a Syngenta Group Company. Roundup Ready 2 Xtend<sup>&reg;</sup>, Roundup Ready 2 Yield<sup>&reg;</sup> and XtendFlex<sup>&reg;</sup> are trademarks used under license from the Bayer Group. LibertyLink<sup>&reg;</sup> is a trademark used under license from BASF. ENLIST E3<sup>&reg;</sup> soybean technology is jointly developed with Dow AgroSciences LLC and MS Technologies LLC. The ENLIST trait and ENLIST Weed Control System are technologies owned and developed by Dow AgroSciences LLC. ENLIST<sup>&reg;</sup> and ENLIST E3<sup>&reg;</sup> are trademarks of Dow AgroSciences LLC. Agrisure Artesian<sup>&reg;</sup>, Agrisure Duracade<sup>&reg;</sup>, E-Z Refuge<sup>&reg;</sup>, Golden Harvest<sup>&reg;</sup> and the Syngenta logo are trademarks of a Syngenta Group Company. All other trademarks are the property of their respective third party owners. 
                </p>
                <p>
                    More information about Agrisure Duracade is available at <a href="http://www.biotradestatus.com/">http://www.biotradestatus.com/</a>.

                </p>
            </div>
        </div>
    </section>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="server">

    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

</asp:Content>
