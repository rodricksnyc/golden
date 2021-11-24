<%@ Page Title="Find a Seed Advisor | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="RetailerSearch.aspx.cs" Inherits="Golden_Harvest.Rep_Finder.RetailerSearch" %>

<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="Server">
    <link rel="stylesheet" type="text/css" href="../Styles/findreseller-styles.css?v=1.0.2" />
    <meta name="description" content="Locate a Golden Harvest Seed Advisor near you. Find local experts with product and agronomic knowledge you can trust to help you get the most out of every field." />
</asp:Content>

<asp:Content ID="Content1" ContentPlaceHolderID="mainBody" runat="Server">
    <input type="hidden" id="refresh" value="no" />
    <asp:PlaceHolder ID="searchPhd" runat="server">
        <div id="results-container">
            <div class="results-holder">
                <div class="zip-overlay">
                    <div class="zip-form">
                        <input type="text" value="" placeholder="Zip Code" />
                        <input type="submit" value="Change Zip Code" />
                    </div>
                </div>
                <div class="results-header">
                    <div class="user-location">
                        Showing results for <a href="#"></a>
                    </div>
                    <h1>Seed advisor Finder</h1>
                    <strong>Services Key:</strong>
                    <div class="results-key">
                        <div>
                            <div>
                                <img src="../Images/global/icon-map-pin-blue.svg" />
                            </div>
                            <div>
                                <strong>Golden Harvest</strong><br />
                            Corn and Soybeans
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="../Images/global/icon-map-pin-blue-green.svg" />
                            </div>
                            <div>
                                <strong>Golden Harvest</strong><br />
                            Corn and Soybeans<br />
                            and <strong>Enogen</strong> Corn<br />for Fuel and Feed
                            </div>
                        </div>
                    </div>
                </div>
                <div class="results-list"></div>
            </div>
            <div class="map-holder hidden-xs">
                <div class="map-cover"></div>
                <div id="map"></div>
                <div id='loading' style="display: none; position: absolute; text-align: center; height: 100%; width: 100%; top: 0%; right: 0; left: 0; z-index: 9999999; background-color: #ffffff; opacity: 0.7;">
                    <img src='../Images/ajax-loader.gif' alt="Loading ..." tooltip="Loading ..." style="padding: 10px; position: absolute; top: 48%; left: 47%; width: auto; height: auto; z-index: 99999999;" />
                </div>
            </div>
        </div>
    </asp:PlaceHolder>
    <div class="qualtrics-page-category hidden" id="Category">GHS Find advisor</div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="Server">
    <script src="../Scripts/map-marker-numbers.min.js"></script>
    <script src="../Scripts/findreseller.js?v=1.0.1"></script>
</asp:Content>