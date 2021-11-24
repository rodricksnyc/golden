<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="~/Template/GoldenHarvest.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" type="text/css" href='<%=ResolveUrl("../Styles/custom-seed-guide.css")%>' />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <div id="seed-guide-form">
        <div class="container">
            <div class="row intro-row text-center">
                <div class="col-xs-12 col-sm-10 col-sm-push-1">
                    <h1>Your Seed Guide. Built Locally. By You.</h1>
                    <p>Seed choice is one of the most important decisions farmers make every season. Which is why we've created this customized seed guide tool to help you select the best Golden Harvest products for your area.</p>
                    <p>Just select a crop and drop a title, logo, message, and your contact information in the form below. Then browse our portfolio of elite hybrids and varieties to create a personalized seed guide with products bred and tested locally for top yield potential.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-10 col-sm-push-1">
                    <div class="sg-form-section grower">
                        <h3>Are you a Seed Advisor or a Grower?</h3>
                        <div>
                            <label>
                                <input name="type" type="radio" value="seed-advisor"  />
                                <span class="checkmark"></span>Seed Advisor</label>
                        </div>
                        <div>
                            <label>
                                <input name="type" type="radio" value="grower"  />
                                <span class="checkmark"></span>Grower</label>
                        </div>
                        <hr />
                    </div>
                    <div class="sg-form-section">
                        <h3>Choose your crop</h3>
                        <p id="crop_selection">Select one crop to begin building your custom seed guide.</p>
                        <div>
                            <label>
                                <input name="crop" type="radio" value="corn" />
                                <span class="checkmark"></span>Corn</label>
                        </div>
                        <div>
                            <label>
                                <input name="crop" type="radio" value="soybean" />
                                <span class="checkmark"></span>Soybean</label>
                        </div>
                        <div>
                            <label>
                                <input name="crop" type="radio" value="enogen corn" />
                                <span class="checkmark"></span>Enogen Corn</label>
                        </div>
                        <div class="error_msg" id="crop_error">Please select one crop</div>
                        <strong>Input Relative Maturity</strong>
                        <div>
                            <input name="mat-min" id="txtFrom" type="text"  class="numeric" />
                            <span>TO</span>
                            <input name="mat-max" id="txtTo" type="text" class="numeric" />
                        </div>
                        <div id="soy_mat_error" class="error_msg">Please enter values between 0.0 and 9.9 only.</div>
                        <div id="corn_mat_error" class="error_msg">Please enter only numeric value in maturity days.</div>
                        <hr />
                    </div>
                    <div class="sg-form-section">
                        <h3>Add title and logo</h3>
                        <i>(optional)</i>
                        <p>Enter a custom title and/or upload a logo to make your custom seed guide really stand out.</p>
                        <div>
                            <label><b>1. Seed Guide Title</b></label>
                            <input id="guide-title" type="text" placeholder="e.g., John Doe's Seed Guide" />
                        </div>
                        <div>
                            <label><b>2. Seed guide logo upload</b> <span><i>(jpg or png file up to 500kb; png file preferred)</i></span> <span class="tool-tip"><img src="/Images/global/tool-tip.png" /></span></label>
							<div class="tool-tip-container">This logo will appear on the top left of your custom seed guide. For best results, use an image with a white or transparent background and a jpg, jpeg, or png file under 500k.</div>
                            <input id="logo-upload" type="file" /> 
                        </div>
                        <div class="error_msg" id="size_error">
                            <label style="color:red">Please select file up to 500kb</label>
                        </div>
                        <div class="error_msg" id="type_error">
                            <label style="color:red">Please select jpg or png file</label>
                        </div>
                        <hr />
                    </div>
                    <div class="sg-form-section">
                        <h3>Add notes to your seed guide</h3>
                        <i>(optional)</i>
                        <p>Enter a custom message for added personalization or simply leave the text field as-is to include the message below.</p>
                        <textarea id="cust-msg" maxlength="460" placeholder="You need products that work for your local conditions. Only Golden Harvest&reg; brings you the powerful combination of unique genetics, local agronomic expertise and personal service from your local Golden Harvest Seed Advisor. Below are a few products we selected that can help you maximize your profit potential."></textarea>
						<p class="char-counter text-right"><span>460</span> / 460 characters remaining</p>
                        <hr />
                    </div>
                    <div class="sg-form-section">
                        <h3>Add your contact information</h3>
                        <i>(optional)</i>
                        <p>Include your business or personal contact information.</p>
                        <div class="row">
                            <div class="col-sm-6">
                                <div>
                                    <label>Your first and last name:</label>
                                    <input id="full-name" type="text" />
                                </div>
                                <div>
                                    <label>Phone number:</label>
                                    <input id="phone" type="text" />
                                    <span id="phone_error" class="error_msg" style="display:none">Please enter a valid phone number</span>
                                </div>
                                <div>
                                    <label>Email:</label>
                                    <input id="email" type="text" />
                                    <span id="email_error" class="error_msg" style="display:none">Please enter a valid email address</span>
                                </div>
                                <div>
                                    <label>Your location or address:</label>
                                    <input id="location" type="text" />
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <button class="sg-submit">Select Products for Your Guide ></button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="Server">
    <script src='<%=ResolveUrl("../Scripts/custom-seed-guide.min.js?v1.0")%>'></script>
</asp:Content>