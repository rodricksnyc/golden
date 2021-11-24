var year = '2021';
var crop = 'corn';
var products = '';
var latitude = '';
var longitude = '';
var city = '';
var postalCode = '';
var state = '';
var brand = 'golden harvest';
var count = 0;
var scroll = 0;
var brandCheck = 0;
var autoCompleteValue;
var countResult = 3;


function ViewReport(plot, crop, address) {
    var plotid = plot;
    $.ajax({
        type: 'get',
        url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetPlotReportRedirectionInfo',
        data: {
            'plotId': '"' + plotid + '"',
            'crop': '"' + crop + '"',
            'address': '"' + address + '"'
        },        
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: true,
        success: function (msg) {
            if (brand === 'golden harvest' && crop === 'corn') {
                window.location.href = "https://" + window.location.host + "/corn/plot-report";
            }
            return false;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {            
        }
    });
}

$(document).ready(function () {
    getAddress();
});

function getAddress() {
    if (readCookie('AsyncCallCheck') !== 'Yes') {
        var GHUserLocation = readCookie('GHuserLoc');
        if (GHUserLocation === null) {
            getUserLocationfromIP();
        }
        var userLocation = JSON.parse(readCookie('GHuserLoc'));
        UserCity = userLocation.city;
        UserState = userLocation.state;
        UserZip = userLocation.zip;
        UserLat = userLocation.lat;
        UserLng = userLocation.long;
        latitude = UserLat;
        longitude = UserLng;
        city = UserCity;
        state = UserState;
        postalCode = UserZip;
        createHTML();
    }
}

function createHTML() {
    var results = '';
    $.ajax({
        url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetPlotResult',
        data: {
            'brands': '"' + brand + '"',
            'countryCode': '"US"',
            'langCode': '"EN"',
            'cropName': '"' + crop + '"',
            'cropYear': '"' + year + '"',
            'latitude': '"' + latitude + '"',
            'longitude': '"' + longitude + '"',
            'maxCount': '"' + countResult + '"',
            'products': '"' + products + '"'
        },
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        type: 'get',
        async: true,
        beforeSend: function () {
            $(".actionable").hide();// <----show before sending
        },

        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        success: function (data) {
            $(".yrw-title").html('Yield Results<span>' + city + ', ' + state + '</span>');

            var totalResults = data.d.Result.length;

            if ((totalResults > 0)) {
                for (var i = 0; i < 3; i++) {
                    var markerNum = i + 1;
                    if (!(data.d.Result[i].Address === undefined)) {
                        var UpdatedAddress = data.d.Result[i].Address.substring(0, data.d.Result[i].Address.length).split(",");
                        var addressZip = UpdatedAddress[1].split(' ');
                        UpdatedAddress = UpdatedAddress[0] + ', ' + addressZip[0];
                        var plotAddress = data.d.Result[i].Address.substring(0, data.d.Result[i].Address.length).split(",");
                        address = data.d.Result[i].Cooperator + ' | ' + plotAddress[0] + ', ' + plotAddress[1];
                        address = address.replace("'", "\\'");

                        results += '<div class="yr-single-blurb hit-box clearfix">' +
                            '<div class="pin">' + markerNum + '</div>' +
                            '<div class="yrs-copy">' +
                            '<span class="plot-name">' + data.d.Result[i].Cooperator + ' / ' + UpdatedAddress + '</span>' +
                            '<span class="planted-date">Planted: ' + data.d.Result[i].Plantingdate + '</span>' +
                            '<span class="harvest-date">Harvested: ' + data.d.Result[i].Harvestdate + '</span>' +
                            '<span class="yield-number">Yield: ' + data.d.Result[i].Yield + ' BU/A</span>' +
                            '</div>' +
                            '<a href="javascript:ViewReport(' + "'" + data.d.Result[i].PlotId + "'" + ',' + "'" + crop + "'" + ',' + "'" + address + "'" + ')" class="btn-secondary" >View results</a>' +
                            '</div>';
                    }
                    else {
                        address = data.d.Result[i].Cooperator;
                        address = address.replace("'", "\\'");
                        results += '<div class="yr-single-blurb hit-box clearfix">' +
                            '<div class="pin">' + markerNum + '</div>' +
                            '<div class="yrs-copy">' +
                            '<span class="plot-name">' + data.d.Result[i].Cooperator + '</span>' +
                            '<span class="planted-date">Planted: ' + data.d.Result[i].Plantingdate + '</span>' +
                            '<span class="harvest-date">Harvested: ' + data.d.Result[i].Harvestdate + '</span>' +
                            '<span class="yield-number">Yield: ' + data.d.Result[i].Yield + ' BU/A</span>' +
                            '</div>' +
                            '<a href="#report1" class="btn-secondary" >View results</a>' +
                            '</div>';
                    }
                }
                results += '<a href="/yield-results" class="btn-default">View More Results</a>';
                $('#plot-results').html(results);
            }
        },
        complete: function () {
            $(".actionable").show();// on complete of ajax hide it.
        }
    });
}