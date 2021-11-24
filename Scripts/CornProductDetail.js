function checkLoadProduct(e) {
    if (e.keyCode == 13) {
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

    $("#txtSearch").autocomplete({
        source: function (request, response) {
            var input, url;
            var prodLength = window.location.href.toLowerCase().lastIndexOf("/");
            var prodName = window.location.href.toLowerCase().substring(prodLength + 1, window.location.href.toLowerCase().length);
            if (prodName.toLowerCase().startsWith("e")) {
                url = "https://" + window.location.host + '/Proxy/ProductProxy.asmx/GetAutoSuggestionProductByCropNameAndBrand';
                input = {
                    'prefixText': '"' + request.term + '"',
                    'crop': '"corn"',
                    'brandkey': '62',
                    'count': '30'
                }
            }
            else {
                url = "https://" + window.location.host + '/Proxy/ProductProxy.asmx/GetAutoSuggestionProductByCropNameAndBrand';
                input = {
                    'prefixText': '"' + request.term + '"',
                    'crop': '"corn"',
                    'brandkey': '57',
                    'count': '30'
                }
            }
            $.ajax({
                selectFirst: true,
                url: url,
                data: input,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                type: 'get',
                async: false,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                },
                success: function (data) {
                    response(data.d);
                }
            });
        },
        minLength: 1,
        autoFocus: true,
        select: function (event, ui) {
            $("#txtSearch").val(ui.item.label);
            products = $("#txtSearch").val();
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
    var prodName = $("#txtSearch").val();
    var brandName = '';
    var split = '';
    if (prodName.length > 0) {
        if (prodName.toLowerCase() != "no match found") {
            $("#errorTextValue").hide();
            if (prodName.toLowerCase().startsWith("e")) {
                window.location.href = "https://" + window.location.host + "/corn/" + prodName;
            }
            else {
                window.location.href = "https://" + window.location.host + "/corn/" + prodName;
            }
        }
        else {
            $("#errorTextValue").show();
            $("#errorTextValue").html('<strong>Enter correct product name</strong>');
        }
    }
    else {
        $("#errorTextValue").show();
        $("#errorTextValue").html('<strong>Enter correct product name</strong>');
    }
}

function fnLoadProduct() {
    var prodName = $("#txtSearch").val();
    var brandName = '';
    var split = '';
    if (prodName.length > 0) {
        $.ajax({
            type: "POST",
            url: "https://" + window.location.host + "/Product-details/Corn.aspx/GetProductDetailIInfo",
            data: "{ productName: '" + prodName + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: "true",
            beforeSend: function () {
                $('#dvloading').show();
            },
            success: function (msg) {
                var valueResult = msg.d;
                if (valueResult.trim().length > 0) {
                    $("#errorTextValue").hide();
                    split = valueResult.split('@');
                    $("#mainBody_dvHeroTitle").html(split[0]);
                    $("#dvProductRmValue").html(split[1]);
                    $("#dvBulletedPoints").html(split[2]);
                    $("#dvRelativeMaturity").html(split[3]);
                    $("#dvAgronomicChar").html(split[4]);
                    $("#dvDiseaseTolerance").html(split[5]);
                    $("#dvAgronomicmanagement").html(split[6]);
                    $("#dvPlantEarChar").html(split[7]);
                    $("#dvPageTitle").html(split[8]);
           //         $("#dvSeedGuideCatalog").html(split[9]);
                //    $("#dvRetailer").html(split[10]);
            //        $("#dvBrandRetailer").html(split[11]);
                    brandName = split[12];

                    $("#dvMainImgLogo").attr("src", "../../images/gh-corn.jpg");
                    $("#dvMainBrand").addClass("brand-gh");
                    $("#dvMainBrand").removeClass("brand-nkcorn");
                    $('#imageAnchor').attr("href", "https://" + window.location.host + "/corn");

                    var techSheetValue = "<div class=\"detail-tile download hidden-xs\" style=\"height:405px;\"><a target=\"_blank\" href=\"http://www3.syngenta.com/country/us/Product_Spec_Sheet/" + prodName + "_150901.pdf\">Download Tech Sheet<br/><span></span></a></div>"
                    var techSheetButtonValue = "<div class=\"col-sm-12 visible-xs\"><a class=\"learnMoreBtn\" target=\"_blank\" href=\"http://www3.syngenta.com/country/us/Product_Spec_Sheet/" + prodName + "_150901.pdf\">Download Tech Sheet</a></div>";
                    $("#dvTechSheet").html(techSheetValue);
                    $("#dvTechSheetBtn").html(techSheetButtonValue);

                    $('.bar').each(function () {
                        var percentage = $(this).attr('data-percentage');
                        $(this).css('width', percentage / 0.9 + '%');
                    });
                }
                else {
                    $("#errorTextValue").show();
                    $("#errorTextValue").html('<strong>Enter correct product name</strong>');
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
                $('#dvloading').hide();
            }
        });
    }
    else {
        alert('Please enter product');
    }
}

function fnRetailerRedirect() {
    $.ajax({
        type: "POST",
        url: "https://" + window.location.host + "/Product-details/Corn.aspx/GetRetailerRedirectionInfo",
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
        url: "https://" + window.location.host + "/Product-details/Corn.aspx/YieldRetailerRedirectionInfo",
        data: "{ prodName: '" + prodName + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: "true",
        success: function (msg) {
            var valueResult = msg.d;
            valueResult = valueResult + redirectValue;
            window.location.href = valueResult;
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