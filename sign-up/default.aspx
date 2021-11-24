<%@ Page Title="Sign Up | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Golden_Harvest.sign_up._default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        .dvLoadingImage {
            position: fixed;
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            background-color: #FFF;
            background-image: url('<%=ResolveUrl("/Images/GHLoader.gif")%>');
            background-repeat: no-repeat;
            background-position: center;
            z-index: 10000000;
            opacity: 0.4;
        }
     .hero-holder {
         background-position: center center;
     }

     .text-center {
         text-align: center;
     }

     .centered {
         display: flex;
         flex-direction: column;
         align-items: center;
     }

     input[type] {
         border: 1px solid #acabab;
         border-radius: 0;
         padding: 10px !important;
         width: 100%;
         /*margin: 0 0 20px 0;*/
     }
     /* Chrome, Safari, Edge, Opera */
     input::-webkit-outer-spin-button,
     input::-webkit-inner-spin-button {
         -webkit-appearance: none;
         margin: 0;
     }

     /* Firefox */
     input[type=number] {
         -moz-appearance: textfield;
     }

     a.btn-default:hover {
         cursor: pointer;
     }
     /*Error message css*/
    .error-message {
        margin: 0 0 20px 0;
        font-size: 14px;
        color: red;
    }
    /*Height 0 fix*/
    #basic-form{
        display: inline-block;
    }
 </style>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">
    <div id="dvloading" runat="server" clientidmode="Static" class="dvLoadingImage" style="display: none;">
    </div>
    <section id="hero">
        <div class="hero-holder hidden-xs" style="background-image: url('<%=ResolveUrl("/sign-up/gh-optin-header-1600x600.jpg")%>');"></div>
        <div class="mobile-hero-holder visible-xs" style="background-image: url('<%=ResolveUrl("/sign-up/gh-optin-header-1600x600.jpg")%>');"></div>
    </section>

    <section id="intro" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <span id="formInstructions">
                        <h1 class="text-center">Let's Connect</h1>
                        <p class="text-center">Fill out the form below to receive the latest news and insights from Golden Harvest Seeds.</p>
                        <p class="text-center">* Indicates required field.</p>

                        <hr />
                    </span>

                    <div id="basic-form">
                    <div class="col-xs-12">
                        <div class="form-group row">
                            <div class="col-xs-12 col-md-6">
                                <label for="FirstName">First Name*</label>
                                <input type="text" id="FirstName" name="FirstName" class="form-input" placeholder="First Name*" required>
                                <div id="firstName-error" class="form-error error-message"></div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <label for="LastName">Last Name*</label>
                                <input type="text" id="LastName" name="LastName" class="form-input" placeholder="Last Name*" required />
                                <div id="lastName-error" class="form-error error-message"></div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-xs-12 col-md-6">
                                <label for="Email">Email*</label>
                                <input type="email" id="Email" name="Email" class="form-input email" placeholder="Email*" required />
                                <div id="email-error" class="form-error error-message"></div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <label for="CellPhone">Cell Phone</label>
                                <input type="tel" id="CellPhone" name="CellPhone" class="form-input" maxlength="10" placeholder="Cell Phone" />
                                <div id="phno-error" class="form-error error-message"></div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-xs-12 col-md-6">
                                <label for="ZipCode">Zip Code*</label>
                                <input type="text" id="ZipCode" name="ZipCode" class="form-input" maxlength="5" placeholder="Zip Code*" required />
                                <div id="zipcode-error" class="form-error error-message"></div>
                            </div>
                        </div>

                        <div class="centered">
                            <div class="g-recaptcha" data-sitekey="6LciuY4aAAAAAPSoiN3MhtT681kYwmhyEEpGlFMD"></div>
                                <div id="capta-error" class="form-error error-message"></div>
                            <br />
                            <a id="signupSubmit" class="btn-default">Submit</a>
                            <p><small>By providing your email address and mobile phone number, you are agreeing to receive email and text message communications from Golden Harvest Seeds. You can easily unsubscribe at any time. See our <a href="https://www.syngenta-us.com/legal/privacypolicy.html" target="_blank">Privacy Policy</a>.</small></p>
                        </div>

                        <div>
                            <div id="error-list" class="form-error"></div>
                            
                            
                        </div>
                    </div>
                </div>

                    <div id="form-thanks" class="hidden text-center">
                        <p><b>Thank you for signing up!</b> Watch your inbox for the latest news and insights from Golden Harvest Seeds.</p>
                    </div>

                    <script type="text/javascript">
                        $(document).ready(function(){

                            //submit form
                            $("#signupSubmit").on("click", function(e){

                                e.preventDefault();
                                $("#dvloading").show();
                                //clear error text
                                $("#email-error").text("");
                                $("#phno-error").text("");
                                $("#capta-error").text("");
                                $("#zipcode-error").text("");
                                $("#firstName-error").text("");
                                $("#lastName-error").text("");
                                // Grab inputs and store as variables
                                var FirstName = $("#FirstName").val(),
                                LastName = $("#LastName").val(),
                                ZipCode = $("#ZipCode").val(),
                                Email = $("#Email").val(),
                                CellPhone = $("#CellPhone").val(),
                                Timestamp = new Date().toString(),
                                missingField = false,
                                badEmail = false,
                                badZip = false,
                                errorArr = [],
                                    isError = false,
                                    emailCode = "",
                                    cellCode = "";
                                function removeError(e){
                                    e.currentTarget.parentNode.classList.remove("error");
                                }

                                function removeCheckError(e){
                                    e.currentTarget.classList.remove("error");
                                }

                                // Validation for email and text inputs below
                                $("#basic-form .form-input:not(#CellPhone)").each(function(){
                                    if($(this).val() == "" || $(this).val() == null || $(this).val() == undefined){
                                        $(this).parent().addClass("error");
                                        $(this).on("keyup change", removeError);
                                        missingField = true;
                                    } else {
                                        $(this).parent().removeClass("error");
                                    }
                                });


                                // google reCAPTCHA validation
                                if (grecaptcha.getResponse() === "") {
                                        $("#capta-error").text("Please verify the captcha.");
                                        isError = true;
                                    errorArr.push("Please verify the captcha.");
                                    $('.g-recaptcha').addClass("error");
                                } else {
                                    $('.g-recaptcha').removeClass("error");
                                }

                                function testEmail(email){
                                    var re = /\S+@\S+\.\S+/;
                                    return re.test(email);
                                }

                                function testZip(zipcode) {
                                    var re = /^\d{5}$/;
                                    return re.test(zipcode);
                                }


                                if (!testZip(ZipCode)) {
                                    $("#ZipCode").parent().addClass("error");
                                    $("#ZipCode").on("keyup change", removeError);
                                    badZip = true;
                                } else {
                                    $("#ZipCode").parent().removeClass("error");
                                }

                                if (!testEmail(Email)){
                                    $("#Email").parent().addClass("error");
                                    $("#Email").on("keyup change", removeError);
                                    badEmail = true;
                                } else {
                                    $("#Email").parent().removeClass("error");
                                }

                                if (FirstName == "" || FirstName == undefined || FirstName.length == 0) {
                                    isError = true;
                                    $("#firstName-error").text("First Name is mandatory.");
                                }
                                if (LastName == "" || LastName == undefined || LastName.length == 0) {
                                    isError = true;
                                    $("#lastName-error").text("Last Name is mandatory.");
                                }
                                if (ZipCode == "" || ZipCode == undefined || ZipCode.length == 0) {
                                    isError = true;
                                    $("#zipcode-error").text("Zipcode is mandatory.");
                                }
                                else if (badZip) {
                                    isError = true;
                                    $("#zipcode-error").text("Please provide a valid zip code.");
                                }
                                if (Email == "" || Email == undefined || Email.length == 0) {
                                    $("#email-error").text("Email is mandatory.");
                                 }
                                var licenseKey = "<%=ConfigurationManager.AppSettings["LicenseKey"].ToString() %>";
                                if (Email.length > 0) {
                                if (!badEmail) {
                                    var url = "https://globalemail.melissadata.net/v4/WEB/GlobalEmail/doGlobalEmail?t=123456&id=" + licenseKey + "&email=" + Email + "&format=json";
                                    $.ajax({
                                        url: url,
                                        method: 'GET',
                                    }).done(function (result) {
                                        emailCode = result.Records[0].Results;
                                        if (result.Records[0].Results.includes("EE")) {
                                            isError = true;
                                            $("#email-error").text("Please provide a valid email address.");
                                            $("#dvloading").hide();
                                        }
                                        else {
                                            cellValidation();
                                
                                        }
                                    }).fail(function (err) {
                                        console.log("error");
                                        $("#dvloading").hide();

                                    });
                                }
                                else {
                                    $("#dvloading").hide();
                                    isError = true;
                                    $("#email-error").text("Please provide a valid email address.");
                                }
                                    }
                                    else {
                                         $("#dvloading").hide();
                                    }
                
                            
                            function cellValidation() {
                                if (CellPhone.length > 0) {
                                    if (CellPhone.length != 10) {
                                        $("#dvloading").hide();
                                        isError = true;
                                        $("#phno-error").text("Please provide a valid Cell Phone number.");
                                    }
                                    else {
                                        var url = "https://globalphone.melissadata.net/v4/WEB/GlobalPhone/doGlobalPhone?t=123456&id=" + licenseKey + "&phone=" + CellPhone + "&format=json&ctry=US";
                                        $.ajax({
                                            url: url,
                                            method: 'GET',
                                        }).done(function (result) {
                                            cellCode = result.Records[0].Results;
                                            if (result.Records[0].Results.includes("PE")) {
                                                $("#phno-error").text("Please provide a valid Cell Phone number.");
                                                $("#dvloading").hide();
                                            }
                                            else {
                                                callApi();
                                            }
                                            console.log(result);
                                        }).fail(function (err) {
                                            isError = true;
                                            console.log("error")
                                            $("#dvloading").hide();
                                        });
                                    }
                                }
                                else {
                                    callApi();
                                }
                            }
                            function callApi() {
                                if ($("#basic-form").find(".error").length === 0) {
                                    if (!isError) {
                                        var dataPayload = {};
                                        dataPayload.FirstName = FirstName;
                                        dataPayload.LastName = LastName;
                                        dataPayload.Email = Email;
                                        dataPayload.CellPhone = CellPhone;
                                        dataPayload.ZipCode = ZipCode;
                                        dataPayload.EmailCode = emailCode;
                                        dataPayload.CellCode = cellCode;
                                        $.ajax({
                                            url: window.location.origin + "/sign-up/default.aspx/SendData",
                                            data: JSON.stringify(dataPayload),
                                            dataType: 'json',
                                            contentType: 'application/json; charset=utf-8',
                                            type: 'post',
                                            success: function (result) {
                                                $("#dvloading").hide();
                                                if (result.d == "success") {
                                                    console.log("success")
                                                    $("#basic-form").toggleClass('hidden');
                                                    $("#formInstructions").toggleClass('hidden');
                                                    $("#form-thanks").toggleClass('hidden');
                                                    var dataLayer = window.dataLayer = window.dataLayer || [];
                                                    dataLayer.push({
                                                        'event': 'formSuccess'
                                                    });
                                                }
                                                else {
                                                    alert("Something went wrong. Please try again later.");
                                                }

                                            },
                                            failure: function (response) {
                                                alert("Something went wrong. Please try again later.");
                                                console.log(response.d);
                                                $('#dvloading').hide();
                                            }
                                        });
                                    }
                                    else {
                                        $("#dvloading").hide();
                                    }
                    
                                } else {
                                    $("#dvloading").hide();
                                    return;
                                };
                            }
                
                            });
                        });
                    </script>

                </div>
            </div>
        </div>
    </section>

        

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="server">
</asp:Content>
