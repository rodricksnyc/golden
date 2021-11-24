var latitude = '';
var longitude = '';
var city = '';
var postalCode = '';
var state = '';

$(document).ready(function () {
    getSeedAddress();
});

function getSeedAddress() {
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
        createSeedAdvisorHTML();
    }
}
function createSeedAdvisorHTML() {
    var currentPage = $(location).attr('pathname');
    if (currentPage.indexOf("/agronomy-in-action/") !== -1) {
        var seedAdvisorResult = '<div id=seed-Advisors">';
        var json = (function () {
            $("#loading").show();
            var json = null;
            var result = '';
            var url = city + ',' + state + ' ' + postalCode + ':' + 'false';
            $.ajax({
                async: true,
                type: "POST",
                url: "https://" + window.location.host + "/RepFinder/RetailerSearch.aspx/GetRetailers",
                data: "{ url: '" + url + "', lat:'" + latitude + "', lng:'" + longitude + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var loopValue = 0;
                    json = data.d;
                    if (json.length > 0) {
                        var loopCount = json.length;
                        for (var i = 0; i < loopCount; i++) {
                            result = json[i];
                            if (result.Distance <= 100 && result.RetailerType === 'Golden Harvest Seed Advisor') {
                                seedAdvisorResult = seedAdvisorResult + '<div class="yr-single-blurb hit-box clearfix">' +
                                          '<div class="pin">' + (loopValue + 1) + '</div>' +
                                          '<div class="yrs-copy">' +
                                          '<span class="plot-name">' + result.Name + ' / ' + result.AccountName + '</span>' +
                                          '<span class="address">' + result.FullAddress.AddressOne + result.FullAddress.AddressTwo + '</span>' +
                                          '</div>' +
                                          '<a href="/seed-advisor?crop=seeds&ct=' + city + '&st=' + state + '&zp=' + postalCode + '&ty=sa&rds=sa&dm=' + loopValue + '" class="btn-secondary" >View details</a>' +
                                           '</div>';
                                loopValue = loopValue + 1;
                            }
                            if (loopValue === 3)
                                break;
                        }
                    }

                    if (loopValue === 0) {
                        seedAdvisorResult += '<div class="fa-single-blurb clearfix">We’re sorry, no Golden Harvest Seed Advisors were found within 100 miles of <strong>' + city + ', ' + state + ' ' + postalCode + '.</strong></div>';
                        seedAdvisorResult += '<a href=/seed-advisor?crop=seeds&ct=' + city + '&st=' + state + '&zp=' + postalCode + '&ty=sa&rds=sa class="btn-default">Find More</a>';
                        $('#seed-Advisors').html(seedAdvisorResult);
                    }
                    else {
                        seedAdvisorResult = seedAdvisorResult + '<div class="more-advisors">';
                        seedAdvisorResult = seedAdvisorResult + '<a href=/seed-advisor?crop=seeds&ct=' + city + '&st=' + state + '&zp=' + postalCode + '&ty=sa&rds=sa class="btn-default">Find More Seed Advisors</a>';
                        seedAdvisorResult = seedAdvisorResult + '</div></div>';
                        $('#seed-Advisors').html(seedAdvisorResult);
                    }
                },
                error: function (xhr, err) {
                    $('#loading').hide();                    
                }
            });

            return json;
        })();
    }
    else {
        var seedAdvisorResult = '';
        var json = (function () {
            $("#loading").show();
            //m.mapLoader.show();
            var json = null;
            var result = '';
            var url = city + ',' + state + ' ' + postalCode + ':' + 'false';
            $.ajax({
                async: true,
                type: "POST",
                url: "https://" + window.location.host + "/RepFinder/RetailerSearch.aspx/GetRetailers",
                data: "{ url: '" + url + "', lat:'" + latitude + "', lng:'" + longitude + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var loopValue = 0;
                    json = data.d;
                    if (json.length > 0) {
                        var loopCount = json.length;
                        for (var i = 0; i < loopCount; i++) {
                            result = json[i];
                            products = result.Products;
                            pinClass = '';
                            if (products.some(function (o) { return o['ProductType'] === 'enogen'; })) {
                                pinClass = ' enogen';
                            }
                            if (result.Distance <= 100 && result.RetailerType == 'Golden Harvest Seed Advisor') {
                                seedAdvisorResult = seedAdvisorResult +
                                    '<div class="fa-single-blurb clearfix">' +
                                        '<div class="pin' + pinClass + '">' + (loopValue + 1) + '</div>' +
                                        '<div class="fas-copy">' +
                                            '<div>' +
                                                '<span class="advisor-name">' + result.Name + '</span>' +
                                                '<span class="advisor-email"><a target="_blank" href="mailto:' + result.Email + '">' + result.Email + '</a></span>' +
                                                '<span class="advisor-phone"><a target="_blank" href="tel:'+ result.Phone + '">' + result.Phone + '</a></span>' +
                                            '</div>' +
                                            '<div>' +
                                    '<span class="advisor-distance">' + parseFloat(result.Distance).toFixed(1) + '<span>miles</span></span>' + 
                                            '</div>' +
                                        '</div>' +
                                    '</div>';
                                loopValue = loopValue + 1;
                                
                            }
                            if (loopValue === 3)
                                break;
                        }
                    }

                    if (loopValue === 0) {
                        seedAdvisorResult += '<div class="fa-single-blurb clearfix">We’re sorry, no Golden Harvest Seed Advisors were found within 100 miles of <strong>' + city + ', ' + state + ' ' + postalCode + '.</strong></div>';
                        seedAdvisorResult += '<a href=/seed-advisor?crop=seeds&ct=' + city + '&st=' + state + '&zp=' + postalCode + '&ty=sa&rds=sa class="btn-default">Find More</a>';
                        $('#seed-Advisors').html(seedAdvisorResult);
                    }
                    else {
                        seedAdvisorResult = seedAdvisorResult + '<a href=/seed-advisor?crop=seeds&ct=' + city + '&st=' + state + '&zp=' + postalCode + '&ty=sa&rds=sa class="btn-default">Find More</a>';
                        $('#seed-Advisors').html(seedAdvisorResult);
                    }
                },
                error: function (xhr, err) {
                    $('#loading').hide();                  
                }
            });

            return json;
        })();
    }


}