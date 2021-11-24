var autoCompletevalue;
var nkVarieties = ["S006-W5", "S007-Y4", "S009-J1", "S02-B4", "S05-W7", "S06-Q9", "S07-B6", "S08-M2", "S10-P9", "S12-R3", "S14-A6", "S14-J7", "S20-T6", "S21-M7", "S22-S1", "S24-K2", "S26-P3", "S27-J7", "S28-N6", "S30-C1", "S30-V6", "S32-L8", "S34-N3", "S34-P7", "S35-A5", "S35-C3", "S37-Z8", "S38-W4", "S39-C4", "S39-T3", "S42-P6", "S45-R7", "S45-W9", "S47-C8", "S47-K5", "S48-D9", "S48-P4", "S53-C5", "S55-Q3"];

$(document).ready(function () {
    $("#mainBody_soybeanVariety").autocomplete({
        source: function (request, response) {
            $.ajax({
                selectFirst: true,
                url: "https://" + window.location.host + '/Proxy/ProductProxy.asmx/GetAutoSuggestionProductByCropNameAndBrand',

                data: {
                    'prefixText': '"' + request.term + '"',
                    'crop': '"soybean"',
                    'brandkey': '57',
                    'count': '30'
                },
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                type: 'get',
                async: false,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                },
                success: function (data) {
                    var newArray = [];
                    if (request.term === 's' || request.term === 'S') {
                        newArray.push.apply(newArray, nkVarieties);
                    }
                    newArray.push.apply(newArray, data.d);
                    if (data.d[0] === "No match found") {
                        newArray.pop();
                    }
                    $("#soybeanFlag").val(newArray);
                    response(newArray);
                }
            });
        },
        minLength: 1,
        autoFocus: true,
        select: function (event, ui) {
            $("#mainBody_soybeanVariety").val(ui.item.label);
            products = $("#mainBody_soybeanVariety").val();
            if (products === 'No match found') {
                $("#mainBody_soybeanVarietyError").show();
                $("#mainBody_soybeanVarietyError").html('PLEASE ENTER A VALID GOLDEN HARVEST VARIETY NAME.');
            }
            if (products.charAt(0) === 'S' || products.charAt(0) === 's') {
                var redirectUrl = 'https://www.syngenta-us.com/soybeans/nk/' + products.trim();
                window.open(redirectUrl, '_blank');
            }
            else {
                var redirectUrl = 'https://' + window.location.host + '/soybean/' + products.trim();
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

function fnYieldRedirect() {
    window.location.href = "https://" + window.location.host + "/soybean/yield-results";
    return false;
}

function fnSoySetSession() {
    var prodName = $("#mainBody_soybeanVariety").val();
    dataLayer.push({
        'hybridName': prodName
    });
    if ($("#soybeanFlag").val() === 'No match found') {
        $("#mainBody_soybeanVarietyError").show();
        $("#mainBody_soybeanVarietyError").html('PLEASE ENTER A VALID GOLDEN HARVEST VARIETY NAME.');
        return false;
    }
    else {
        if ($("#mainBody_soybeanVariety").val() === 'No match found' || $("#mainBody_soybeanVariety").val() === '' || $("#mainBody_soybeanVariety").val() === ' ') {
            $("#mainBody_soybeanVarietyError").show();
            $("#mainBody_soybeanVarietyError").html('PLEASE ENTER A VALID GOLDEN HARVEST VARIETY NAME.');
            return false;
        }
        else {
            $("#mainBody_soybeanVarietyError").hide();
            $.ajax({
                selectFirst: true,
                url: "https://" + window.location.host + "/soybeanlanding/soybeans.aspx/SetSoybeanSessionProducts",

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
                    if (prodName.charAt(0) === 'G' || prodName.charAt(0) === 'g')
                        var redirectUrl = 'https://' + window.location.host + '/soybean/' + prodName.trim();
                    window.location.href = redirectUrl;
                }
            });
        }
    }
}

function fnSoyMaturityValidation() {
    var fromValue = $("#mainBody_soybeanRmFrom").val();
    var toValue = $("#mainBody_soybeanRmTo").val();
    if (fromValue.match(/^[0-9]\d*(\.\d+)?$/) && toValue.match(/^[0-9]\d*(\.\d+)?$/)) {
        if ((fromValue >= 0 && fromValue <= 9.9) && (toValue >= 0 && toValue <= 9.9)) {
            $.ajax({
                type: "POST",
                url: "https://" + window.location.host + '/soybeanlanding/soybeans.aspx/SetGHSoySessionMaturityDays',
                data: { 'fromDays': '"' + fromValue + '"', 'toDays': '"' + toValue + '"' },
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                type: 'get',
                async: false,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    //alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                },
                success: function (data) {
                    if (data.d == "1")
                        window.location.href = "https://" + window.location.host + "/soybean/product-finder";
                }
            });
        }
        else {
            $("#mainBody_maturityError").show();
            $("#mainBody_maturityError").html('Please enter relative maturity values between 0.0 and 9.9');
        }
        return false;
    }
    else {
        $("#mainBody_maturityError").show();
        $("#mainBody_maturityError").html('Please enter relative maturity values between 0.0 and 9.9');
        return false;
    }


}

function isDecimalNumber(input, evt) {    
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && ((charCode < 48 || charCode > 57) && charCode != 46)) {

        return false;
    }
    else {
        if (input.value >= 0.000 && input.value <= 9.9) {
            $("#mainBody_maturityError").hide();
            return true;
        }
        else {
            $("#mainBody_maturityError").show();
            $("#mainBody_maturityError").html('Please enter relative maturity values between 0.0 and 9.9');
            return false;
        }

    }
}

//SET scroll position on jump links because menu position is fixed
var shiftWindow = function () { scrollBy(0, -80) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

if (location.hash) {
    var getScrollSection = location.hash;
    if ($(getScrollSection).length > 0) {
        var scrlTop = $(getScrollSection).offset().top;
        console.log(scrlTop);
    } else {
        var scrlTop = $('a[name="' + getScrollSection.substr(1) + '"]').offset().top;
    }
    var scrlTopMore;
    if (location.hash == '#yield-search') {
        scrlTopMore = scrlTop - 150;
    }
    else {
        scrlTopMore = scrlTop - 100;
    }
    $('html, body').stop(true, true).delay(1500).animate({
        scrollTop: scrlTopMore
    }, 500);
}
