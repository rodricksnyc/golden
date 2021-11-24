<%@ Page Title="" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Golden_Harvest.Search_Results.search_results" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
	<link rel="stylesheet" type="text/css" href="../styles/search-style.css" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">

    <section id="search-result-page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-8">
					<h1>Search Results</h1>
                    <div class="new-search-cont clearfix">
                        <input id="ss360search" class="searchBox" type="text" name="search" placeholder="Search Term Keyword" autocomplete="off">
                        <input type="button" id="ss360Button" class="btn-search" name="btn-search" value="Search" />
                    </div>
                    <div id="results">
                        <div class="loading">
                            <img src='<%=ResolveUrl("~/images/GHLoader.gif")%>' alt="loading search results"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    


</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="server">
</asp:Content>