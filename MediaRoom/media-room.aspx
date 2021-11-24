<%@ Page Title="News | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="media-room.aspx.cs" Inherits="Golden_Harvest.media_room" %>

<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="Server">
    <meta name="Description" content="Get the scoop on the latest Golden Harvest news and stay up-to-date with Golden Harvest-related articles." />
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="mainBody" runat="Server">

    <div id="newsroom" class="page-heading">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <h1>Golden Harvest News</h1>
                    <h6>Stay up to date with the latest Golden Harvest seed, traits and technology news</h6>
                </div>
            </div>
        </div>
    </div>
    <section id="featured-article">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="featured-image">
                        <asp:Literal ID="litFeaturedImage" runat="server"></asp:Literal>
                    </div>
                </div>
                <div class="col-sm-6">
                    <h2>
                        <asp:Literal ID="litArticleTitle" runat="server"></asp:Literal></h2>
                    <asp:Literal ID="litArticleSummary" runat="server"></asp:Literal>
                </div>
            </div>
        </div>
    </section>


    <asp:Literal ID="litActiveArticles" runat="server"></asp:Literal>

    <div class="qualtrics-page-category hidden" id="Category">GHS News</div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="Server">
</asp:Content>
