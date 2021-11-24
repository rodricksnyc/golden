<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="seed-guide-preview.aspx.cs" Inherits="Golden_Harvest.Seed_Guide.seed_guide_preview" MasterPageFile="~/Template/GoldenHarvest.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("../Styles/custom-seed-guide.css")%>' />
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("../Styles/product-finder.css")%>' />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <style>
        .sf-result-title span.product {
            position: relative;
            font-family: 'GHVeneer';
            font-size: 24px;
            font-weight: 600 !important;
            line-height: 1em;
            color: #df6420;
            top: -2px;
        }
        .sf-result-title span.product-enogen {
            position: relative;
            font-family: 'GHVeneer';
            font-size: 24px;
            font-weight: 600 !important;
            line-height: 1em;
            color: #459339 !important;
              top: -2px;
        }
    </style>
    <div id="seed-guide-form">
        <div class="container">
		    <div class="row text-center">
			    <div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
				    <div id="seed-guide-intro">
					    <h1>Review Your Custom Seed Guide.</h1>
                        <p>Please review your custom seed guide before downloading to make sure all the personal information and each seed variety option you provided is complete and correct.</p>
				    </div>
			    </div>
		    </div>
        </div>

	    <section id="sg-selections" class="sg-preview">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <%--<a href="#"><< Back to Question Selection</a>--%>
                        <div class="sg-selection-container">
                            <div class="sg-selection-header">
                                <h2>My Seed Guide Selections:</h2>
                                <button class="sg-reset">Start New Guide ></button>
                            </div>
                            <div class="sg-selection-inner">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row sg-button-row">
				<div class="col-xs-12">
					<button class="sg-download">Download PDF ></button>
				</div>
			</div>
        </div>

	    <section id="sg-preview">
		    <div class="container">
                <div id="divPdfContainer">
                    <div class="row">
                        <div class="col-sm-10 col-sm-push-1">
                            <div class="sg-preview-container">
				                <div class="sg-lockup">
					                <div class="row">
						                <div class="col-xs-12">
							                <img id="id_header" src="/Images/global/golden_harvest_logo.png" />
						                </div>
					                </div>
				                </div>
				                <div class="sg-preview-inner">
					                <div class="sg-top">
						                <div class="row">
                                            <div class="col-xs-12">
                                                <div class="contact-info"></div>
                                            </div>
						                </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="guide-info"></div>
							                </div>
                                        </div>
					                </div>
					                <div class="sg-bottom">
						                <div class="row product-row" id="sg_preview_inner_bottom_id"></div>
					                </div>
                                    <div class="sg-seal">
                                        <img src="/Images/seed-guides/seed-guide-seal.jpg" />
                                    </div>
					                <div class="sg-legal">
						                <p>©2019 Syngenta. <b>Important: Always read and follow label and bag tag instructions; only those labeled as tolerant to glufosinate may be sprayed with glufosinate ammonium based herbicides. Under federal and local laws, only dicamba-containing herbicides registered for use on dicamba-tolerant varieties may be applied. See product labels for details and tank mix partners.</b> Golden Harvest® Soybean varieties are protected under granted or pending U.S. variety patents and other intellectual property rights, regardless of the trait(s) within the seed. The Genuity® Roundup Ready 2 Yield®, Roundup Ready 2 Xtend® and the Liberty Link® traits may be protected under numerous United States patents. It is unlawful to save soybeans containing these traits for planting or transfer to others for use as a planting seed. Golden Harvest® and Rooted in Genetics, Agronomy & Services™ are trademarks of a Syngenta Group Company. Roundup Ready 2 Yield®, Roundup Ready 2 Xtend®, Genuity®, Genuity and Design and Genuity Icons are trademarks used under license from Bayer Group. LibertyLink®, Liberty® and the Water Droplet logo are registered trademarks of BASF Corporation. HERCULEX® and the HERCULEX Shield are trademarks of Dow AgroSciences, LLC. HERCULEX Insect Protection technology by Dow AgroSciences. GT27 is a trademark of M.S. Technologies and BASF. YieldGard VT Pro™ is a trademark of Bayer Group. ENLIST E3™ soybean technology is jointly developed with Dow AgroScience LLC and MS Technologies LLC. ENLIST E3™ is a trademark of Dow AgroSciences LLC.</p>
					                </div>
				                </div>
			                </div>
                        </div>
                    </div>
                </div>
			    <div class="row sg-button-row">
				    <div class="col-xs-12">
					   <button class="sg-download">Download PDF ></button>
				    </div>
			    </div>
		    </div>
	    </section>
    </div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="Server">
    <script src='<%=ResolveUrl("../Scripts/seed-guide-preview.js?v1.0")%>'></script>
</asp:Content>