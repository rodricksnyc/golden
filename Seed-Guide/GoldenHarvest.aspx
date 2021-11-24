<%@ Page Title="Seed Guides | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <%--<link rel="stylesheet" type="text/css" href='<%=ResolveUrl("../Styles/seed-guides.css")%>' />--%>

<meta name="Description" content="Download local seed guide for Golden Harvest Corn & Soybeans."/>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <section id="seed-guides">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-8">
                    <h1>Seed Product Guide for your area</h1>
                    <p>Find more information about Golden Harvest<sup>&reg;</sup> seeds by downloading your local seed guide or contacting your local Seed Advisor.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2019_GH_Regions_HP.jpg")%>' alt="Golden Harvest High Plains & Southwest Region Seed Guide" />
                        <div class="sg-title eq-height">High Plains & Southwest</div>
                        <div class="sg-description">File size 14.68MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_HP_SW.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2019_GH_Regions_SIA_NMO.jpg")%>' alt="Golden Harvest Southern Iowa Northern Missouri Region Seed Guide" />
                        <div class="sg-title eq-height">Southern Iowa &amp; Northern Missouri</div>
                        <div class="sg-description">File size 14.79MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_SIA_NMO.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2021_GH_Regions_CIL.jpg")%>' alt="Golden Harvest Central Illinois Region Seed Guide" />
                        <div class="sg-title eq-height">Central Illinois</div>
                        <div class="sg-description">File size 14.85MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_CIL.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2019_GH_Regions_SIL_SIN.jpg")%>' alt="Golden Harvest Southern Illinois Southwest Indiana Region Seed Guide" />
                        <div class="sg-title eq-height">Southern Illinois &amp; Southwest Indiana</div>
                        <div class="sg-description">File size 15.02MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_SIL_SWIN.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2019_GH_Regions_EIA_NIL.jpg")%>' alt="Golden Harvest Eastern Iowa Northern Illinois Region Seed Guide" />
                        <div class="sg-title eq-height">Eastern Iowa &amp; Northern Illinois</div>
                        <div class="sg-description">File size 14.39MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_EIA_NIL.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2019_GH_Regions_SENE.jpg")%>' alt="Golden Harvest Southeastern Nebraska Region Seed Guide" />
                        <div class="sg-title eq-height">South &amp; Eastern Nebraska</div>
                        <div class="sg-description">File size 14.7MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_SE_NE.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2019_GH_Regions_MO_FH.jpg")%>' alt="Golden Harvest Missouri Flint hills Region Seed Guide" />
                        <div class="sg-title eq-height">Missouri &amp; Eastern Kansas </div>
                        <div class="sg-description">File size 14.98MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_MO_EKS.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2019_GH_Regions_GL.jpg")%>' alt="Golden Harvest Great Lakes Region Seed Guide" />
                        <div class="sg-title eq-height">Great Lakes</div>
                        <div class="sg-description">File size 14.97MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_GL.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2019_GH_Regions_NWIA.jpg")%>' alt="Golden Harvest Northwestern Iowa Region Seed Guide" />
                        <div class="sg-title eq-height">Northwest Iowa</div>
                        <div class="sg-description">File size 14.91MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_NW_IA.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2019_GH_Regions_NEP.jpg")%>' alt="Golden Harvest Nebraska Plains Region Seed Guide" />
                        <div class="sg-title eq-height">Nebraska Plains</div>
                        <div class="sg-description">File size 14.39MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_NEP.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2019_GH_Regions_NP.jpg")%>' alt="Golden Harvest Northern Plains Region Seed Guide" />
                        <div class="sg-title eq-height">Northern Plains</div>
                        <div class="sg-description">File size 14.55MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_NP.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2019_GH_Regions_SWMN.jpg")%>' alt="Golden Harvest South Dakota Southwestern Minnesota Region Seed Guide" />
                        <div class="sg-title eq-height">South Dakota &amp; Southwest Minnesota</div>
                        <div class="sg-description">File size 15.04MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_SD_SWMN.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="seed-guide-holder hit-box">
                        <img class="img-responsive" src='<%=ResolveUrl("/images/seed-guides/2019_GH_Regions_UM.jpg")%>' alt="Golden Harvest Upper Midwest Seed Guide" />
                        <div class="sg-title eq-height">Upper Midwest</div>
                        <div class="sg-description">File size 14.36MB PDF</div>
                        <a target="_blank" href='<%=ResolveUrl("/documents/2021-seed-guides/GH_2021_SeedGuide_UMW.pdf")%>' class="btn-default">Download</a>
                    </div>
                </div>                
            </div>
        </div>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="Server">

</asp:Content>