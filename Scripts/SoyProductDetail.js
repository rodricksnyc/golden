        function checkLoadProduct(e) {
            //debugger;
            if (e.keycode == 13) {
                LoadProductDetails();
            }
        }

$(document).ready(function () {
    var currURL = window.location;
    var baseUrl = currURL.protocol + "//" + currURL.host;
    var jsonURL = baseUrl + "/scripts/agrazones-2020.json";
    var varietyNum = window.location.pathname.split("/").pop().toUpperCase();
    var isFeatured;

    var api_url = "https://ebizservices.alfprod.com";
    if (window.location.href.indexOf("stageproject.goldenharvestseeds.com") > -1) {
        api_url = "https://ebizservices-stageproject.alfprod.com"
    }
    else if (window.location.href.indexOf("stagesupport.goldenharvestseeds.com") > -1) {
        api_url = "https://ebizservices-stage.alfprod.com"
    }

    // check to see if product has FJ content
    var fjAPI = {
        "async": true,
        "crossDomain": true,
        "url": api_url + "/SyngentaApi/CMSApi/api/FarmJournal/GetContents?Site=GH&seedVariety=" + varietyNum,
        "method": "GET"
    }

    $.ajax(fjAPI).done(function (response) {
        if (!isEmpty(response)) {
            isFeatured = true;
            setFeaturedContent(response);
        }
    });
            $("#mainBody_txtSearch").autocomplete({

                source: function (request, response) {
                    $.ajax({
                        selectFirst: true,
                        url: "https://" + window.location.host + '/Proxy/ProductProxy.asmx/GetAutoSuggestionProductByCropNameAndBrand',
                        data: { 'prefixText': '"' + request.term + '"',
                            'crop': '"soybean"',
                            'brandkey': '57',
                            'count': '30'
                        },
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        type: 'get',
                        async: false,
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            ////debugger;
                            alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                        },
                        success: function (data) {
                            ////debugger;
                            response(data.d);
                        }
                    });
                },
                minLength: 1,
                autoFocus: true,
                select: function (event, ui) {
                    $("#mainBody_txtSearch").val(ui.item.label);
                    products = $("#mainBody_txtSearch").val();
                    LoadProductDetails();
                },
                open: function () {
                    $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
                },
                close: function () {
                    $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
                },
                focus: function (event, ui) { event.preventDefault(); }
            });
            ////debugger;
            $.ui.autocomplete.prototype._renderItem = function (ul, item) {
                var t = String(item.value).replace(
                new RegExp(this.term, "gi"),
                "<span style='font-weight:bold;color:#3399FF;'>$&</span>");
                return $("<li></li>")
            .data("item.autocomplete", item)
            .append("<a>" + t + "</a>")
            .appendTo(ul);
            };
        });

        function LoadProductDetails() {
            //debugger;
            var prodName = $("#mainBody_txtSearch").val();
            var brandName = '';
            var split = '';
            if (prodName.length > 0) {
                if (prodName.toLowerCase() != "no match found") {
                    $("#mainBody_errorTextValue").hide();
                    if (prodName.toLowerCase().slice(0, 1) == ("g")) {
                        window.location.href = "https://" + window.location.host + "/soybean/" + prodName;
                    }
                    else {
                        window.location.href = "https://" + window.location.host + "/soybean/" + prodName;
                    }
                }
                else {
                    $("#mainBody_errorTextValue").show();
                    $("#mainBody_errorTextValue").html('<strong>Enter correct product name</strong>');
                }
            }
            else {
                $("#mainBody_errorTextValue").show();
                $("#mainBody_errorTextValue").html('<strong>Enter correct product name</strong>');
            }
        }

        function fnLoadProduct() {
            //debugger;
            var prodName = $("#mainBody_txtSearch").val();
            var brandName = '';
            var split = '';
            if (prodName.length > 0) {
                $.ajax({
                    type: "POST",
                    url: "https://" + window.location.host + "/Product-Details/Soybean.aspx/GetProductDetailIInfo",
                    data: "{ productName: '" + prodName + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: "true",
                    beforeSend: function () {
                        $('#ctl00_mainBody_dvloading').show();  // <----show before sending
                    },
                    success: function (msg) {
                        var valueResult = msg.d;
                        if (valueResult.trim().length > 0) {
                            $("mainBody_errorTextValue").hide();
                            split = valueResult.split('@');
                            $("#mainBody_dvHeroTitle").html(split[0]);
                            $("#mainBody_dvProductRmValue").html(split[1]);
                            $("#mainBody_dvBulletedPoints").html(split[2]);

                            $("#mainBody_dvAgronomicChar").html(split[3]);
                            $("#mainBody_dvDiseaseTolerance").html(split[4]);

                            $("#mainBody_dvPlantCharecter").html(split[5]);
                            $("#mainBody_dvDiseaseAndPest").html(split[6]);
                            $("#mainBody_dvPageTitle").html(split[7]);
                            //$("#mainBody_dvSeedGuideCatalog").html(split[8]);
                            //$("#mainBody_dvRetailer").html(split[9]);
                            //$("#mainBody_dvBrandRetailer").html(split[10]);
                            brandName = split[11];
                              
                                $("#mainBody_dvMainImgLogo").attr("src", "../../images/gh-logo.jpg");
                                $("#mainBody_dvMainBrand").addClass("brand-gh-soy");
                                $("#mainBody_dvMainBrand").removeClass("brand-nkcorn");
                                $('#mainBody_imageAnchor').attr("href", "https://" + window.location.host + "/corn");
                            
                            var techSheetValue = '';
                            techSheetValue = "<div class=\"detail-tile download hidden-xs\" style=\"height:347px;\"><a target=\"_blank\" href=\"http://www3.syngenta.com/country/us/Product_Spec_Sheet/" + prodName + "_150721.pdf\">Download Tech Sheet<br/><span></span></a></div>"
                            techSheetValue = techSheetValue + "<div class=\"col-sm-12 visible-xs\"><a class=\"learnMoreBtn\" target=\"_blank\" href=\"http://www3.syngenta.com/country/us/Product_Spec_Sheet/" + prodName + "_150721.pdf\">Download Tech Sheet</a></div>";
                            $("#mainBody_dvTechSheet").html(techSheetValue);
                            $('.bar').each(function () {
                                var percentage = $(this).attr('data-percentage');
                                $(this).css('width', percentage / 0.9 + '%');
                            });
                        }
                        else {
                            $("#ctl00_mainBody_errorTextValue").show();
                            $("#ctl00_mainBody_errorTextValue").html('<strong>Enter correct product name</strong>');
                        }
                        return false;

                    },
                    error: function (xhr, err) {
                        alert('Error');
                        alert('error: ' + xhr.statusText);
                        alert('error: ' + xhr.statusTexterror);
                        var msg = JSON.parse(xhr.responseText);
                        return false;

                    },
                    complete: function () {
                        $('#ctl00_mainBody_dvloading').hide(); // on complete of ajax hide it.
                    }
                });
            }
            else {
                alert('Please enter product');
            }
        }

        function fnGHRedirect() {
            var brand = 'GH';
            $.ajax({
                type: "POST",
                url: "https://" + window.location.host + "/Product-Details/Soybean.aspx/SetGHSession",
                
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                success: function (msg) {
                    window.location.href = "https://" + window.location.host + "/corn?tab=soybeans";
                    return false;
                },
                error: function (xhr, err) {
                    //                        alert('Error');
                    //                        alert('error: ' + xhr.statusText);
                    //                        alert('error: ' + xhr.statusTexterror);
                    var msg = JSON.parse(xhr.responseText);
                    return false;
                }
            });



        }

        function fnRetailerRedirect() {
            $.ajax({
                type: "POST",
                url: "https://" + window.location.host + "/Product-Details/Soybean.aspx/GetRetailerRedirectionInfo",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                success: function (msg) {
                    var valueResult = msg.d;
                    window.location.href = valueResult;
                    return false;

                },
                error: function (xhr, err) {
                    alert('Error');
                    alert('error: ' + xhr.statusText);
                    alert('error: ' + xhr.statusTexterror);
                    var msg = JSON.parse(xhr.responseText);
                    return false;

                }
            });

        }

        function YieldRedirection(redirectValue, prodName) {
            $.ajax({
                type: "POST",
                url: "https://" + window.location.host + "/Product-Details/Soybean.aspx/YieldRetailerRedirectionInfo",
                data: "{ prodName: '" + prodName + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                success: function (msg) {
                    var valueResult = msg.d;
                    valueResult = valueResult + redirectValue;
                    window.location.href = valueResult;
                    // alert(valueResult);
                    return false;

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                    return false;

                }
            });

        }
function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function setFeaturedContent(resp) {
    $('#featuredContent').css('display', 'block');

    for (var i = 0; i < resp.length; i++) {
        console.log(resp[i]["content type"]);
        var contentCount = 0,
            respThumbnail = resp[i].thumbnail,
            respDate = resp[i]["date created"],
            respTitle = resp[i].title,
            respYoutube = resp[i]["youtube id"],
            respArticleURL = resp[i]["article url"];

        if (resp[i]["content type"] == 'E-Blast') {
            $('.eblast-content h2').empty().html(resp[i].title);
            $('.eblast-content p').empty().html(resp[i]["short description"]);
            $('.eblast-row').css('display', 'block');
        } else if (resp[i]["content type"] == 'Video' && contentCount < 4) {
            contentCount = contentCount + 1;
            var vidHTML = '<div class="col-sm-4">\
                                <div class="agronomy-card">\
                                    <div class="card-image video">\
                                        <div class="card-icon Video"></div>\
                                        <img src="'+ respThumbnail + '" alt="">\
                                    </div>\
                                    <div class="card-content">\
                                        <span class="agronomy-date">'+ respDate + '</span>\
                                        <h3>'+ respTitle + '</h3>\
                                        <a href="#" data-youtube-id="'+ respYoutube + '" class="btn-default youtube" target="_blank">Watch Video</a>\
                                    </div>\
                                </div>\
                            </div>';

            $('#featuredContent .cont-row').prepend(vidHTML);
        } else if (resp[i]["content type"] == 'ARTICLE' && contentCount < 4) {
            contentCount = contentCount + 1;
            var articleHTML = '<div class="col-sm-4">\
                                <div class="agronomy-card">\
                                    <div class="card-image">\
                                        <div class="card-icon Video"></div>\
                                        <img src="'+ respThumbnail + '" alt="">\
                                        </div>\
                                        <div class="card-content">\
                                            <span class="agronomy-date">'+ respDate + '</span>\
                                            <h3>'+ respTitle + '</h3>\
                                            <a href="/agronomy/articles/' + respArticleURL + '" class="btn-default">Read Spotlight</a>\
                                        </div>\
                                    </div>\
                                </div>';

            $('#featuredContent .cont-row').append(articleHTML);
        }
    }
}

$(document).on('click', '.agronomy-card ', function (e) {
    var $el = $(e.target);
    if ($el.parent().hasClass('card-taxonomy') === false && $el.hasClass('btn-default') === false) {
        $(this).find('a.btn-default')[0].click();
    }
});
