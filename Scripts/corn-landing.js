var autoCompletevalue;
$(document).ready(function () {
    $("#planting-calculator select").select2();   
});
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function fnYieldRedirect() {
    window.location.href = "https://" + window.location.host + "/corn/yield-results";
    return false;
}

function fnMaturityValidation() {
    var fromValue = $("#mainBody_fromMaturity").val();
    var toValue = $("#mainBody_toMaturity").val();
    if (fromValue.match(/^[0-9]\d*?$/) && toValue.match(/^[0-9]\d*?$/)) {
        $.ajax({
            selectFirst: true,
            url: "https://" + window.location.host + '/cornlanding/corn.aspx/SetSessionMaturityDays',
            data: {
                'fromDays': '"' + fromValue + '"',
                'toDays': '"' + toValue + '"'
            },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'get',
            async: false,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
            success: function (data) {
                if (data.d === "1")
                    window.location.href = "https://" + window.location.host + "/corn/product-finder";
            }
        });
        return false;
    }
    else {
        $("#mainBody_maturityError").show();
        $("#mainBody_maturityError").html('Please enter only numeric value in maturity days.');
        return false;
    }
}

function fnSetCornSession() {
    var prodName = $("#mainBody_hybridName").val();
    dataLayer.push({
        'hybridName': prodName
    });
    if ($("#hybridFlag").val() === 'No match found' || $("#hybridFlag").val().length === 0) {
        $("#mainBody_hybridError").show();
        $("#mainBody_hybridError").html('Please enter a valid Golden Harvest hybrid name.');
        return false;
    }
    else {
        if ($("#mainBody_hybridName").val() === 'No match found' || $("#mainBody_hybridName").val() === 'undefined' || $("#mainBody_hybridName").val() === '' || $("#mainBody_hybridName").val() === ' ') {
            $("#mainBody_hybridError").show();
            $("#mainBody_hybridError").html('Please enter a valid Golden Harvest hybrid name.');
            return false;
        }
        else {
            $("#mainBody_hybridError").hide();
            $.ajax({
                selectFirst: true,
                url: "https://" + window.location.host + "/cornlanding/corn.aspx/SetSessionProducts",
                data: {
                    'productName': '"' + prodName + '"'
                },
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                type: 'get',
                async: false,
                error: function (XMLHttpRequest, textStatus, errorThrown) {                    
                },
                success: function (data) {
                    var redirectUrl = 'https://' + window.location.host + '/corn/' + prodName.trim();
                    window.location.href = redirectUrl;

                }
            });
        }
    }
}

$(document).ready(function () {
    var flag;
    $("#mainBody_hybridName").autocomplete({
        source: function (request, response) {
            $.ajax({
                selectFirst: true,
                url: "https://" + window.location.host + '/Proxy/ProductProxy.asmx/GetAutoSuggestionProductByCropNameAndBrandCombination',
                data: {
                    'prefixText': '"' + request.term + '"',
                    'crop': '"corn"',
                    'count': '30',
                    'brandkey': '"57,62"'
                },
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                type: 'get',
                async: false,
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                },
                success: function (data) {
                    $("#hybridFlag").val(data.d);
                    response(data.d);
                }
            });
        },
        minLength: 1,
        autoFocus: true,
        select: function (event, ui) {
            $("#mainBody_hybridName").val(ui.item.label);
            products = $("#mainBody_hybridName").val();
            if (products === 'No match found') {
                $("#mainBody_hybridError").show();
                $("#mainBody_hybridError").html('Please enter a valid Golden Harvest hybrid name.');
            }
            else {
                $("#mainBody_hybridError").hide();
                var redirectUrl = '';
                if (products.charAt(0) === 'G' || products.charAt(0) === 'g') {
                    redirectUrl = 'https://' + window.location.host + '/corn/' + products.trim();
                }
                else {
                    redirectUrl = 'https://' + window.location.host + '/corn/' + products.trim();
                }
                window.location.href = redirectUrl;
            }

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
    if (performance && performance.navigation.type === 2) {
        location.href = location.href;
    }

});

if (location.hash) {
    var getScrollSection = location.hash;
    if ($(getScrollSection).length > 0) {
        var scrlTop = $(getScrollSection).offset().top;
        console.log(scrlTop);
    } else {
        var scrlTop = $('a[name="' + getScrollSection.substr(1) + '"]').offset().top;
    }
    var scrlTopMore;
    if (location.hash === '#planting-calculator') {
        scrlTopMore = scrlTop - 120;
    }
    $('html, body').stop(true, true).delay(1500).animate({
        scrollTop: scrlTopMore
    }, 500);
}