var gmarkers = [];
var year = '2021';
var crop = 'corn';
var products = '';
var lat = '';
var long = '';
var city = '';
var zipcode = '';
var state = '';
var brand = ''; 
var count = 0;
var scroll = 0;
var brandCheck = 0;
var autoCompleteValue;
var countResult = 10;

function markerLink(id) {
    new google.maps.event.trigger(gmarkers[id], 'click');
}

function PlotReport(plotid, id, address, brandname) {
    var plotid = plotid;
    var plotaddress = address;
    plotaddress = plotaddress.replace("'", "\\'");
    var plot = '#plotresult' + id;
    var divcheck = '#div' + id;
    if (!($(divcheck).hasClass('expanded'))) {
        //alert(plotid);
        $.ajax({
            url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetPlotReportRankLessThanEqualFive',
            data: {
                'countryCode': '"US"',
                'cropType': '"' + crop + '"',
                'plotId': '"' + plotid + '"',
                'langCode': '"EN"'
            },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'get',
            async: true,
            beforeSend: function () {
                $(".loading").show();  // <----show before sending
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //alert("Request: " + XMLHttpRequest + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);

            },
            success: function (dataplot) {

                var test = '';
                var count = dataplot.d.length;
                for (var i = 0; i < count; i++) {
                    var company = dataplot.d[i]["Company_name"];
                    var check = "Golden Harvest";
                    if (company.toLowerCase() === check.toLowerCase()) {
                        test = test +
                                                        '<div class="row">' +
                                                                            '<div class="col-xs-7 col-sm-6 col-sm-push-1">' +
                                                                                '<div class="product">' + dataplot.d[i]["Company_name"] + ' ' + dataplot.d[i]["Variety"] + '</div>' +
                                                                            '</div>' +
                                                                            '<div class="col-xs-5 col-sm-push-1">' +
                                                                                '<div class="product-yield">' + dataplot.d[i]["Yield"].toFixed(1) + '</div>' +
                                                                            '</div>' +
                                                                            '<div class="clearfix"></div>' +
                                                                        '</div>';
                    }
                    else {
                        test = test +
                                                        '<div class="row">' +
                                                                            '<div class="col-xs-7 col-sm-6 col-sm-push-1">' +
                                                                                '<div class="comp product">' + dataplot.d[i]["Company_name"] + ' ' + dataplot.d[i]["Variety"] + '</div>' +
                                                                            '</div>' +
                                                                            '<div class="col-xs-5 col-sm-push-1">' +
                                                                                '<div class="comp product-yield">' + dataplot.d[i]["Yield"].toFixed(1) + '</div>' +
                                                                            '</div>' +
                                                                            '<div class="clearfix"></div>' +
                                                                        '</div>';
                    }




                }
                test = test + '<div class="row">' +
                                                                            '<div class="col-xs-11 col-sm-push-1">' +
                                                                                '<div class="full-report" onclick="javascript:PlotRedirect(' + "'" + plotid + "'" + ',' + "'" + crop + "'" + ',' + "'" + plotaddress + "'" + ',' + "'" + brandname + "'" + ')">View Full Report</div>' +
                                                                            '</div>' +
                                                                        '</div>';
                //alert(test);
                var plot = '#plotresult' + id;
                $(plot).html(test);



            },
            complete: function () {
                $(".loading").hide(); // on complete of ajax hide it.
            }
        });
    }
}

function PlotRedirect(plot, crop, address, brandname) {
    var plotid = plot;
    var brandname = brandname;
    if (brandname.toLowerCase() == 'golden harvest') {
        brandname = 'golden-harvest';
    }
    //debugger;
    //alert(brandname);
    //alert(plotid);
    //alert(address);
    $.ajax({
        type: 'get',
        url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetPlotReportRedirectionInfo',
        data: {
            'plotId': '"' + plotid + '"',
            'crop': '"' + crop + '"',
            'address': '"' + address + '"'
        },
        //data: "{ plotid: '" + plotid + "',crop: '" + crop + "',address: '" + address + "'}",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: true,
        success: function (msg) {
            //debugger;
            if (brand == 'golden harvest' && crop == 'corn') {
                window.location.href = "https://" + window.location.host + "/corn/plot-report";
            }
            return false;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            //alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
        }


    });

}

$(document).ready(function () {
    // DECLARE VARIABLES
    var w = '';

    // MOBILE SEARCH
    $('.form-dropdown').click(function () {
        $(this).toggleClass('open');
        $(this).next().slideToggle();
    });

    // STICKY DIV
    function stickyLabels() {
        var $div = $('.labels');
        var divWidth = $div.width();
        var top = $(window).scrollTop();
        var divTop = $('.label-anchor').offset().top;
        if (top > divTop) {
            $div.addClass('stick');
            $div.width(divWidth);
        } else {
            $div.removeClass('stick');
            $div.width('100%');
        }
    }
    function stickyForms() {
        var $div = $('.form-container');
        var divWidth = $div.width();
        var top = $(window).scrollTop();
        var divTop = $('.form-anchor').offset().top;
        if (top > divTop) {
            $div.addClass('stick');
            $div.width(divWidth);
        } else {
            $div.removeClass('stick');
            $div.width('100%');
        }
    }
    $(window).scroll(function () {
        if (wW > 767) {
            stickyLabels();
            //stickyForms();
        }
    });

    if (wW > 767) {
        stickyLabels();
        //stickyForms();
    }

    // GOOGLE MAPS API
    var map,
        marker,
        infowindow;
    crop = 'corn';
    brand = 'golden harvest';
    if (crop.toLocaleLowerCase() == 'soybeans') {
        crop = 'soybean';
    }

    if (brand.toLocaleLowerCase() == 'golden-harvest') {
        brand = 'golden harvest';
    }
    if (crop.toLocaleLowerCase() == 'corn') {
        $('input:radio[name=crop]').filter('[value=corn]').attr('checked', true);
        $('input:radio[name=mobilecrop]').filter('[value=corn]').attr('checked', true);
        if (brand.toLocaleLowerCase() == 'golden harvest') {
            $('#pagecolor').removeClass('brand-nksoy');
            $('#pagecolor').addClass('brand-gh');
            $('#title').text('Golden Harvest Corn Yield Results');
            $('#herotitle span').text('Golden Harvest Yield Results');
            $('#yieldtitle span').text('Golden Harvest yield average');
            $('#brandimgae img').attr('src', '/images/gh-corn.jpg');
            $("#link").attr("href", "/corn");
        }

    }


    function getAddress() {

        //debugger;


        $.ajax({
            url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetUserLoaction',
            data: "{}",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'get',
            async: true,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
            success: function (location) {
                if (location.d.Latitude == null) {
                    $.ajax({
                        url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetLocationbyIP',
                        data: "{}",
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        type: 'get',
                        async: true,
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                        },
                        success: function (location) {
                            //debugger;
                            //alert(location.d);

                            lat = location.d.Latitude;
                            long = location.d.Longitude;
                            city = location.d.City;
                            state = location.d.State;
                            zipcode = location.d.PostalCode;
                            var address = city + ', ' + state + ' ' + zipcode;
                            $('#txtFindresults').val(address);
                            $('#txtMobileFindresults').val(address);
                            getHybridProducts();
                            clearSessionValues();
                        }
                    });
                }
                else {
                    lat = location.d.Latitude;
                    long = location.d.Longitude;
                    city = location.d.City;
                    state = location.d.State;
                    zipcode = location.d.PostalCode;
                    var address = city + ', ' + state + ' ' + zipcode;
                    $('#txtFindresults').val(address);
                    $('#txtMobileFindresults').val(address);
                    getHybridProducts();
                    clearSessionValues();
                }
                //debugger;

                //var latlng = { lat: parseFloat(lat), lng: parseFloat(long) };

                //createMarker(10);
            }
        });


    }

    function getAddress1() {
        $.ajax({
            url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetUserLoaction',
            data: "{}",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'get',
            async: true,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
            success: function (location) {
                if (location.d.Latitude == null) {
                    if (readCookie('GHuserlocationreseller') === 'undefined' || readCookie('GHuserlocationreseller') == null || readCookie('GHuserlocationreseller') == '') {
                        $.ajax({
                            url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBfFdOgJV2xzEd030B9c-PEkCxzfJEisKY",
                            dataType: 'json',
                            contentType: 'application/json; charset=utf-8',
                            type: 'post',
                            async: false,
                            error: function (XMLHttpRequest, textStatus, errorThrown) {
                                //alertify.alert("Error occured. Please try after some time.");
                                //return;
                            },
                            success: function (data) {
                                //alert(data.location.lat);
                                //alert(data.location.lng);
                                var latlng = data.location.lat + "," + data.location.lng
                                var accuracy = data.accuracy;
                                var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng + "&key=AIzaSyBfFdOgJV2xzEd030B9c-PEkCxzfJEisKY";
                                $.get(url, function (loc) {
                                    results = loc.results[0].address_components;
                                    country = '';
                                    GHUserState = '';
                                    GHUserCity = '';
                                    GHUserZip = '';
                                    GHUserLat = data.location.lat;
                                    GHUserLng = data.location.lng;
                                    // loop through the results
                                    // when the type is "postal_code"
                                    // get the zip code and then display it in the result div
                                    for (var z = 0; z < results.length; z++) {
                                        var object = results[z],
                                                    type = object.types[0];

                                        if (type === 'postal_code') {
                                            GHUserZip = object.long_name;
                                            //$('#result-zip').html(zipCode);
                                            //updateLocation(zipCode, device);
                                            //retZipCode = zipCode;
                                        }
                                        if (type === 'country') {
                                            country = object.long_name;
                                        }
                                        if (type === 'locality') {
                                            GHUserCity = object.long_name;
                                        }
                                        if (type === 'administrative_area_level_1') {
                                            GHUserState = object.short_name
                                        }
                                    }
                                }).done(function () {
                                    if (country.toLocaleLowerCase() != 'united states') {
                                        createCookie('GHuserlocationreseller', 'Storm Lake_IA 50588_42.6444386_-95.2175884_', 365);
                                    }
                                    else {
                                        createCookie('GHuserlocationreseller', GHUserCity + '_' + GHUserState + ' ' + GHUserZip + '_' + GHUserLat + '_' + GHUserLng + '_', 365);
                                    }
                                    var GHUserLoc = readCookie('GHuserlocationreseller').split('_');
                                    GHUserCity = GHUserLoc[0];
                                    GHUserState = GHUserLoc[1].split(' ')[0];
                                    GHUserZip = GHUserLoc[1].split(' ')[1];
                                    GHUserLat = GHUserLoc[2];
                                    GHUserLng = GHUserLoc[3];
                                    lat = GHUserLat;
                                    long = GHUserLng;
                                    zipcode = GHUserZip;
                                    var address = GHUserCity + ', ' + GHUserState + ' ' + GHUserZip;
                                    $('#txtFindresults').val(address);
                                    $('#txtMobileFindresults').val(address);
                                    getHybridProducts();
                                    clearSessionValues();

                                });
                            }
                        });
                    }
                    else {
                        var GHUserLoc = readCookie('GHuserlocationreseller').split('_');
                        GHUserCity = GHUserLoc[0];
                        GHUserState = GHUserLoc[1].split(' ')[0];
                        GHUserZip = GHUserLoc[1].split(' ')[1];
                        GHUserLat = GHUserLoc[2];
                        GHUserLng = GHUserLoc[3];
                        lat = GHUserLat;
                        long = GHUserLng;
                        zipcode = GHUserZip;
                        var address = GHUserCity + ', ' + GHUserState + ' ' + GHUserZip;
                        $('#txtFindresults').val(address);
                        $('#txtMobileFindresults').val(address);
                        getHybridProducts();
                        clearSessionValues();
                    }
                }
                else {
                    lat = location.d.Latitude;
                    long = location.d.Longitude;
                    city = location.d.City;
                    state = location.d.State;
                    zipcode = location.d.PostalCode;
                    var address = city + ', ' + state + ' ' + zipcode;
                    $('#txtFindresults').val(address);
                    $('#txtMobileFindresults').val(address);
                    getHybridProducts();
                    clearSessionValues();
                }
            }
        });
    }

    function getUserLocationDetails() {
        var url = "https://" + window.location.host + "/CornLanding/Corn.aspx/IsSessionKeyExists";
        var parms = "{ key: 'GH_User_Location'}";
        var retZipCode, retStateCode, retCity, retLat, retLong;
        $.ajax({
            type: "POST",
            url: "https://" + window.location.host + "/CornLanding/Corn.aspx/IsSessionKeyExists",
            data: parms,
            contentType: "application/json; charset=utf-8",
            async: "false",
            error: function (e) {
                alert('failed');
            },
            success: function (msg) {
                if (msg.d === "false") {

                    $.ajax({
                        url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBfFdOgJV2xzEd030B9c-PEkCxzfJEisKY",
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        type: 'POST',
                        async: false,
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                        },
                        success: function (data) {
                            var latlng = data.location.lat + "," + data.location.lng;
                            retLat = data.location.lat;
                            retLong = data.location.lng;
                            var accuracy = data.accuracy;
                            $.ajax({
                                url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + data.location.lat + ',' + data.location.lng + '&sensor=true',
                                dataType: 'json',
                                async: false,
                                success: function (data) {
                                    var results = data.results;
                                    results = data.results[0].address_components;
                                    for (var z = 0; z < results.length; z++) {
                                        var object = results[z],
                                                    type = object.types[0];
                                        if (type === 'postal_code') {
                                            var zipCode = object.long_name;
                                            retZipCode = zipCode;
                                            $.ajax({
                                                url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + zipCode + '&sensor=true',
                                                dataType: 'json',
                                                async: false,
                                                success: function (loc) {
                                                    for (var i = 0; i < loc.results.length; i++) {
                                                        var address = loc.results[i].formatted_address;
                                                        retCity = address.split(',')[0];
                                                        retStateCode = address.split(',')[1].split(' ')[1];
                                                        var enteredLat = loc.results[i].geometry.location.lat;
                                                        var enteredLng = loc.results[i].geometry.location.lng;
                                                        //console.log('Address : ' + address);
                                                        //$('#address').html(address);


                                                    }
                                                }
                                            });
                                        }
                                        //if (type === 'administrative_area_level_1') {
                                        //    retStateCode = object.short_name;
                                        //}
                                        //if (type === 'administrative_area_level_2') {
                                        //    retCity = object.short_name;
                                        //}
                                    }

                                    var address = retCity + ', ' + retStateCode + ' ' + retZipCode;
                                    $('#txtFindresults').val(address);
                                    $('#txtMobileFindresults').val(address);
                                    getHybridProducts();
                                    clearSessionValues();
                                }
                            });
                        }
                    });
                }
            }
        });

    }


    function clearSessionValues() {

        //debugger;

        $.ajax({
            url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/ClearSessionValue',
            data: "{}",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'get',
            async: true,
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            },
            success: function (data) {
                //debugger;

            }
        });
    }
    function getHybridProducts() {

        //debugger;

        $.ajax({
            url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetProductHyrbrid',
            data: "{}",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'get',
            async: true,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // debugger;
                //alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                //callback("No Results Found");
            },
            success: function (data) {
                //debugger;
                if (data.d.length > 0) {
                    products = data.d;
                    $("#mainBody_txtSearch").val(data.d);
                }
                else {
                    products = '';
                }
                //$('#txtMobileFindresults').val(address);
                var result = GetSetPlotCountInfo(1, 0);
                //alert(countResult);
                createMarker(countResult);
            }
        });
    }

    function GetSetPlotCountInfo(flag, count) {
        var flag = flag;
        var count = count;

        //debugger;
        //alert(flag);
        //alert(count);
        //alert(address);
        $.ajax({
            type: 'get',
            url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetSetPlotCountInfo',
            data: {
                'flag': '"' + flag + '"',
                'count': '"' + count + '"'
            },
            //data: "{ plotid: '" + plotid + "',crop: '" + crop + "',address: '" + address + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function (msg) {
                // alert(msg.d);
                countResult = msg.d;
                //return ;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
            }


        });

    }

    function clearHybridProducts() {

        //debugger;

        $.ajax({
            url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/ClearProductHyrbrid',
            data: "{}",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'get',
            async: true,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // debugger;
                //alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                //callback("No Results Found");
            },
            success: function (data) {

            }
        });
    }
    function createMarker(numResults) {
        //alert(numResults);
        //debugger;
        if (crop.toLocaleLowerCase() == 'soybean') {
            brand = 'golden harvest';
        }
        if (crop.toLocaleLowerCase() == 'corn') {

            if (brand.toLocaleLowerCase() == 'golden harvest') {
                $('#pagecolor').removeClass('brand-nksoy');
                $('#pagecolor').removeClass('brand-multi');
                $('#pagecolor').removeClass('brand-nkcorn');
                $('#pagecolor').addClass('brand-gh');
                $('#title').text('Golden Harvest Corn Yield Results');
                $('#herotitle span').text('Golden Harvest Corn Yield Results');
                $('#yieldtext').text('Golden Harvest yield average');
                $('#brandimgae img').attr('src', '/images/gh-corn.jpg');
                $("#link").attr("href", "/corn");
                $('#brandimgae img').show();
            }
            else {
                $('#brandselection').show();
                $('#mobileBrandSelection').show();
                $('#title').text('Corn Yield Results');
                $('#herotitle span').text('Corn Yield Results');
                $('#yieldtext').text('Yield average');
                $('#brandimgae img').hide();
            }
        }
        $.ajax({
            url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetPlotResult',
            data: {
                'brands': '"' + brand + '"',
                'countryCode': '"US"',
                'langCode': '"EN"',
                'cropName': '"' + crop + '"',
                'cropYear': '"' + year + '"',
                'latitude': '"' + lat + '"',
                'longitude': '"' + long + '"',
                'maxCount': '"60"',
                'products': '"' + products + '"'
            },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'get',
            async: true,
            beforeSend: function () {
                $(".loading").show();  // <----show before sending
            },

            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                //callback("No Results Found");
            },
            success: function (data) {
                // debugger;
                //alert("hi");
                $('#dvNoResults').hide();
                $('#map-results').show();
                $('#dvLabelResult').show();
                $('#dvTotalResult').show();
                var results = '';
                var mapOptions = {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: false,
                    scrollwheel: false,
                    navigationControl: false
                };

                //var brand = $('body').attr('class');

                var totalResults = data.d.length;
                map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

                var ltlng = [];
                var bounds = new google.maps.LatLngBounds();
                var address = '';
                var brandName = '';
                if (data.d.length <= numResults) {
                    $('.learnMoreBtn').hide();
                    numResults = data.d.length;
                }
                else {
                    $('.learnMoreBtn').show();
                }
                if (numResults <= 10) {
                    $('#btnlessresult').hide();
                }
                if ((data.d.length == numResults) && numResults > 10) {
                    $('#btnlessresult').show();
                }
                var pd = '';
                if (products.trim() != '') {
                    pd = products.toUpperCase();
                }
                if ((numResults > 0) && !(pd.charAt(0) == 'E')) {
                    for (var i = 0; i < numResults; i++) {
                        var markerNum = i + 1;
                        count = i + 1;
                        //alert(count);
                        markerNum = markerNum.toString();
                        ltlng = new google.maps.LatLng(data.d[i].GPSlat, data.d[i].GPSlong);
                        //alert(ltlng);

                        bounds.extend(ltlng);

                        marker = new MarkerWithLabel({
                            position: ltlng,
                            map: map,
                            // icon:'images/' + brand + '-marker.png',
                            labelContent: markerNum,
                            labelAnchor: new google.maps.Point(16, 40),
                            labelClass: 'label',
                            labelInBackground: false
                        });

                        gmarkers.push(marker);
                        if (!(data.d[i].Address == undefined)) {
                            var UpdatedAddress = data.d[i].Address.substring(0, data.d[i].Address.length).split(",");
                            var addressZip = UpdatedAddress[1].split(' ');
                            UpdatedAddress = UpdatedAddress[0] + ', ' + addressZip[0];
                            //alert(UpdatedAddress[0]);
                            //alert(UpdatedAddress[1]);
                            var plotAddress = data.d[i].Address.substring(0, data.d[i].Address.length).split(",");
                            address = data.d[i].Cooperator + ' | ' + plotAddress[0] + ', ' + plotAddress[1];
                            address = address.replace("'", "\\'");
                            //alert(address);
                            brandName = data.d[i].Brand;
                            //alert(brandName);
                            results += '<div id="div' + i + '" class="result">' +
                                    '<div class="row">' +
                                        '<div class="hidden-xs col-sm-1 number"><div class="label" onclick="javascript:PlotReport(' + data.d[i].PlotId + ',' + i + ',' + "'" + address + "'" + ',' + "'" + brandName + "'" + ')">' + markerNum + '</div></div>' +
                                        '<div class="col-xs-7 col-sm-6">' +
                                            '<div class="location"><a onclick="javascript:PlotReport(' + data.d[i].PlotId + ',' + i + ',' + "'" + address + "'" + ',' + "'" + brandName + "'" + ')">' + data.d[i].Cooperator + ' <span class="hidden-xs">|</span><br class="visible-xs"/> ' + UpdatedAddress + '</a></div>' +
                                            '<div class="dates hidden-xs">' +
                                                '<div class="planted">Planted Date: ' + data.d[i].Plantingdate + '</div><div class="harvested">Harvest Date: ' + data.d[i].Harvestdate + '</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="col-sm-5">' +
                                            '<div class="yield">' + data.d[i].Yield + ' <span class="hidden-xs">Bu/Acre</span></div>' +
                                            '<div class="expand-result" onclick="javascript:PlotReport(' + data.d[i].PlotId + ',' + i + ',' + "'" + address + "'" + ',' + "'" + brandName + "'" + ')"></div>' +
                                        '</div>' +

                                    '</div>' +

                                    '<div id="plotresult' + i + '" class="result-expanded"></div>' +
                                    '</div>' +
                                    '<hr/>';
                        }
                        else {
                            address = data.d[i].Cooperator;
                            address = address.replace("'", "\\'");
                            brandName = data.d[i].Brand;
                            //alert(brandName);
                            results += '<div id="div' + i + '" class="result">' +
                                    '<div class="row">' +
                                        '<div class="hidden-xs col-sm-1 number"><div class="label" onclick="javascript:PlotReport(' + data.d[i].PlotId + ',' + i + ',' + "'" + address + "'" + ',' + "'" + brandName + "'" + ')">' + markerNum + '</div></div>' +
                                        '<div class="col-xs-7 col-sm-6">' +
                                            '<div class="location"><a onclick="javascript:PlotReport(' + data.d[i].PlotId + ',' + i + ',' + "'" + address + "'" + ',' + "'" + brandName + "'" + ')">' + data.d[i].Cooperator + '</a></div>' +
                                            '<div class="dates hidden-xs">' +
                                                '<div class="planted">Planted Date: ' + data.d[i].Plantingdate + '</div><div class="harvested">Harvest Date: ' + data.d[i].Harvestdate + '</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="col-sm-5">' +
                                            '<div class="yield">' + data.d[i].Yield + ' <span class="hidden-xs">Bu/Acre</span></div>' +
                                            '<div class="expand-result" onclick="javascript:PlotReport(' + data.d[i].PlotId + ',' + i + ',' + "'" + address + "'" + ',' + "'" + brandName + "'" + ')"></div>' +
                                        '</div>' +

                                    '</div>' +

                                    '<div id="plotresult' + i + '" class="result-expanded"></div>' +
                                    '</div>' +
                                    '<hr/>';
                        }

                        $('#map-results').html(results);
                        //var search = '1 - ' + numResults + ' of ' + totalResults;
                        $('span.amount').html('1 - ' + numResults + ' of ' + totalResults);
                        $('span.amount').show();

                        (function (marker, i) {
                            var infocontent = '';
                            var cropname = crop;
                            var address = '';
                            var brandName = '';
                            google.maps.event.addListener(marker, 'click', function () {

                                // Update the 5th value to send the marker location to Google Analytics
                                //ga('send', 'event', 'map-clicks', 'click', data.d[i].loc);

                                if (infowindow) {
                                    infowindow.close();
                                }
                                if (!(data.d[i].Address == undefined)) {
                                    var UpdatedAddress = data.d[i].Address.substring(0, data.d[i].Address.length).split(",");
                                    var addressZip = UpdatedAddress[1].split(' ');
                                    UpdatedAddress = UpdatedAddress[0] + ', ' + addressZip[0];
                                    var plotAddress = data.d[i].Address.substring(0, data.d[i].Address.length).split(",");
                                    address = data.d[i].Cooperator + ' | ' + plotAddress[0] + ', ' + plotAddress[1];
                                    address = address.replace("'", "\\'");
                                    brandName = data.d[i].Brand;

                                    dataLayer.push({
                                        'cityState': UpdatedAddress
                                    });

                                    infocontent = '<div class="info-window">' +
                                    '<div class="location">' + data.d[i].Cooperator + ' - ' + UpdatedAddress + '</div>' +
                                    '<div class="planted">Planted Date: ' + data.d[i].Plantingdate + '</div><div class="harvested">Harvest Date: ' + data.d[i].Harvestdate + '</div>' +
                                    '<div class="full-report" onclick="javascript:PlotRedirect(' + data.d[i].PlotId + ',' + "'" + cropname + "'" + ',' + "'" + address + "'" + ',' + "'" + brandName + "'" + ')">View Full Report</div>' +
                                '</div>'
                                }
                                else {
                                    address = data.d[i].Cooperator;
                                    address = address.replace("'", "\\'");
                                    brandName = data.d[i].Brand;

                                    dataLayer.push({
                                        'cityState': 'Undefined'
                                    });

                                    infocontent = '<div class="info-window">' +
                                    '<div class="location">' + data.d[i].Cooperator + '</div>' +
                                    '<div class="planted">Planted Date: ' + data.d[i].Plantingdate + '</div><div class="harvested">Harvest Date: ' + data.d[i].Harvestdate + '</div>' +
                                    '<div class="full-report" onclick="javascript:PlotRedirect(' + data.d[i].PlotId + ',' + "'" + cropname + "'" + ',' + "'" + address + "'" + ',' + "'" + brandName + "'" + ')">View Full Report</div>' +
                                '</div>'
                                }
                                infowindow = new google.maps.InfoWindow();
                                infowindow.setContent(infocontent);
                                infowindow.open(map, marker);

                            });

                        })(marker, i);
                    }
                }
                else {
                    //alert(brand);
                    var map1;
                    geocoder = new google.maps.Geocoder();
                    var latlng = new google.maps.LatLng(37.0625, -95.677068);

                    var mapOptions = {
                        Zoom: 1,
                        maxZoom: 10,
                        center: latlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        mapTypeControl: false,
                        scrollwheel: false,
                        navigationControl: false
                    }


                    map1 = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                    var newBrandValue = ($.trim(brand) == undefined) ? "golden harvest" : brand;
                    var newResults = '';
                    newResults = '<div class="row">' +
                                        '<div class="col-md-12">' +
                                            '<div>Sorry there are no plots.<br/>Try your search again using a different year or another hybrid.</div></div></div><p></p>';
                    if ($("#mainBody_txtSearch").val() != "") {
                        if (crop.toLocaleLowerCase() == 'corn') {
                            newResults = '<div class="row">' +
                                        '<div class="col-md-12">' +
                                            '<div>Sorry there are no plots containing ' + $("#mainBody_txtSearch").val() + '.<br/>Try your search again using a different year or another hybrid.</div></div></div><p></p>';
                        }
                        else {
                            newResults = '<div class="row">' +
                                        '<div class="col-md-12">' +
                                            '<div>Sorry there are no plots containing ' + $("#mainBody_txtSearch").val() + '.<br/>Try your search again using a different year or another variety.</div></div></div><p></p>';
                        }

                    }
                    if (brandCheck == 1) {
                        newResults = '<div class="row">' +
                                        '<div class="col-md-12">' +
                                            '<div>Sorry there are no plots for the selected brand ' + brand + '.<br/>Try your search again using a different year or another brand.</div></div></div><p></p>';
                    }
                    if (brandCheck == 1 && $("#mainBody_txtSearch").val() != "") {
                        if (crop.toLocaleLowerCase() == 'corn') {
                            newResults = '<div class="row">' +
                                        '<div class="col-md-12">' +
                                            '<div>Sorry there are no plots containing ' + $("#mainBody_txtSearch").val() + ' and brand ' + brand + '.<br/>Try your search again using a different year or another hybrid or brand.</div></div></div><p></p>';
                        }
                        else {
                            newResults = '<div class="row">' +
                                        '<div class="col-md-12">' +
                                            '<div>Sorry there are no plots containing ' + $("#mainBody_txtSearch").val() + ' and brand ' + brand + '.<br/>Try your search again using a different year or another variety or brand.</div></div></div><p></p>';
                        }

                    }


                    results = newResults + results;
                    $('#dvNoResults').show();
                    $('#dvNoResults').html(results);
                    $('#map-results').hide();
                    $('#dvLabelResult').hide();
                    $('span.amount').hide();
                    $('#dvTotalResult').hide();
                    $('html, body').animate({ scrollTop: $("#resultsMap").offset().top }, 'slow');
                    return false;

                }
                map.fitBounds(bounds);
                //if (scroll == 1) {
                //    $('html, body').animate({
                //        scrollTop: $(document).height()
                //    }, 'slow');

                //}

            },
            complete: function () {
                $(".loading").hide(); // on complete of ajax hide it.
            }
        });

    }



    google.maps.event.addDomListener(window, 'load', getAddress1()); 
    //google.maps.event.addDomListener(window, 'load', getUserLocationDetails());

    // MAP RESULTS
    $('body').on('click', '.expand-result', function () {
        var $t = $(this);
        $t.toggleClass('open');
        $t.parent().parent().next('.result-expanded').toggle();
        $t.parent().parent().parent().toggleClass('expanded');
    });

    $('body').on('click', '.location', function () {
        var $t = $(this);
        //debugger;
        $t.parent().next().children().toggleClass('open');
        $t.parent().parent().next('.result-expanded').toggle();
        $t.parent().parent().parent().toggleClass('expanded');
    });

    $('body').on('click', '.label', function () {
        var $t = $(this);
        //debugger;
        $t.parent().next().next().children().toggleClass('open');
        $t.parent().parent().next('.result-expanded').toggle();
        $t.parent().parent().parent().toggleClass('expanded');
    });

    $("input:radio[name=year]").click(function () {
        //alert("hi");
        year = $('input:radio[name=year]:checked').val();
        gmarkers.length = 0;
        scroll = 0;
        createMarker(10);
    });
    $("input:radio[name=crop]").click(function () {
        //alert("hi");
        gmarkers.length = 0;
        scroll = 0;
        crop = $('input:radio[name=crop]:checked').val();
        clearHybridProducts();
        if (crop == 'corn') {
            window.location.href = "https://" + window.location.host + "/yield-results";
        }


    });

    $("input:radio[name=mobileyear]").click(function () {
        //alert("hi");
        year = $('input:radio[name=mobileyear]:checked').val();
        gmarkers.length = 0;
        scroll = 0;
        createMarker(10);
    });
    $("input:radio[name=mobilecrop]").click(function () {
        //alert("hi");
        gmarkers.length = 0;
        scroll = 0;
        crop = $('input:radio[name=mobilecrop]:checked').val();
        if (crop == 'corn') {
            window.location.href = "https://" + window.location.host + "/yield-results";
        }

    });

    $('#toplearn').click(function () {
        //alert(count);
        gmarkers.length = 0;
        scroll = 0;
        GetSetPlotCountInfo(1, 10);
        createMarker(countResult);
        //createMarker(count + 10);
    });
    $('#bottomlearn').click(function () {
        //alert(count);
        gmarkers.length = 0;
        scroll = 1;
        GetSetPlotCountInfo(1, 10);
        createMarker(countResult);
        //createMarker(count + 10);
    });

    $('.learnlessBtn').click(function () {
        //alert("inside button less");
        gmarkers.length = 0;
        scroll = 0;
        GetSetPlotCountInfo(2, 0);
        createMarker(countResult);
        // createMarker(10);
        $('html, body').animate({ scrollTop: $("#map-results").offset().top }, 'slow');
        return false;
        //$('#map-results').css({ "height": "auto", "max-height": "1300px", "overflow-y": "scroll", "overflow-x": "hidden" });

    });
    $("#mainBody_txtSearch").autocomplete({

        source: function (request, response) {
            //alert("Hello1");
            //alert(request.term);
            //alert(crop);
            var input, url;
            if (brand == 'golden harvest') {
                url = "https://" + window.location.host + '/Proxy/ProductProxy.asmx/GetAutoSuggestionProductByCropNameAndBrand';
                input = {
                    'prefixText': '"' + request.term + '"',
                    'crop': '"' + crop + '"',
                    'brandkey': '57',
                    'count': '30'
                }
            }

            else {
                url = "https://" + window.location.host + '/Proxy/ProductProxy.asmx/getautosuggestionproduct';
                input = {
                    'prefixText': '"' + request.term + '"',
                    'crop': '"' + crop + '"',
                    'count': '30'
                }
            }

            $.ajax({
                selectFirst: true,
                url: url,
                data: input,
                //                data: { 'prefixText': '"' + request.term + '"',
                //                    'crop': '"' + crop + '"',
                //                    'count': '30'
                //                },
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                type: 'get',
                async: true,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    //debugger;
                    //alert("Request: " + XMLHttpRequest + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                },
                success: function (data) {
                    //debugger;
                    response(data.d);
                }
            });
        },
        minLength: 1,
        autoFocus: true,
        select: function (event, ui) {
            //alert(ui.item);
            //alert(ui.item.label);
            $("#mainBody_txtSearch").val(ui.item.label);
            products = $("#mainBody_txtSearch").val();
            gmarkers.length = 0;
            scroll = 0;
            createMarker(10);
        },
        open: function () {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function () {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        },
        focus: function (event, ui) { event.preventDefault(); }
    });
    //debugger;
    $.ui.autocomplete.prototype._renderItem = function (ul, item) {
        var t = String(item.value).replace(
                new RegExp(this.term, "gi"),
                "<span style='font-weight:bold;color:#3399FF;'>$&</span>");
        return $("<li></li>")
            .data("item.autocomplete", item)
            .append("<a>" + t + "</a>")
            .appendTo(ul);
    };

    $("#myForm").submit(function (e) {
        //alert("hi");
        e.preventDefault();
        //alert("hiii");
        //debugger;
        gmarkers.length = 0;
        scroll = 0;
        brandCheck = 0;
        var len = $('#mainBody_txtSearch').val().length;
        products = $("#mainBody_txtSearch").val();
        //alert(len);
        //        if (len < 7 && len > 1) {
        if (products != "No match found") {
            createMarker(10);
            //this.submit();

        }
        //}
    });

    $("#aspnetForm").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            //return false;
            //$("#buttonSrch").click(); 
        }
    });

    $("input[name='searchLocation']").on("click", function (e) {

        e.preventDefault();
        gmarkers.length = 0;
        scroll = 0;
        var location = autocomplete.getPlace();
        inputValue = input.value;
        var removeCountry = $("#txtFindresults").val().toLocaleLowerCase().replace(', united states', '');
        var add = removeCountry + ', United states';
        if (autoCompleteValue != undefined) {
            if (add.toLocaleLowerCase() == autoCompleteValue.toLocaleLowerCase()) {
                displayZip(location, autoCompleteValue, "desktop");
            }
            else {
                if ($.isNumeric($("#txtFindresults").val()) && $("#txtFindresults").val().length == 5) {
                    getlanglat(function (latlng) {
                        if (latlng != '') {
                            updateLocation(removeCountry, "desktop");
                        }
                        else {
                            ShowCustomDialog();
                        }
                    });
                    //updateLocation(undefined, "desktop");
                }
                else {
                    ShowCustomDialog();
                }
            }
        }
        else {
            if ($.isNumeric($("#txtFindresults").val()) && $("#txtFindresults").val().length == 5) {
                getlanglat(function (latlng) {
                    if (latlng != '') {
                        updateLocation(removeCountry, "desktop");
                    }
                    else {
                        ShowCustomDialog();
                    }
                });
            }
            else {
                updateLocation(undefined, "desktop");
            }
        }
    });

    //Mobile search
    $("input[name='searchMobile']").on("click", function (e) {
        e.preventDefault();
        gmarkers.length = 0;
        scroll = 0;
        var location = autocompleteMobile.getPlace();
        inputValue = inputMobile.value;
        //        if ($("#txtMobileFindresults").val().toLocaleLowerCase().contains(', united states')) {
        //$("#txtMobileFindresults").val($("#txtMobileFindresults").val().replace(', united states', ''));
        //}
        var removeCountry = $("#txtMobileFindresults").val().toLocaleLowerCase().replace(', united states', '');
        //$("#txtMobileFindresults").val(removeCountry);
        var add = removeCountry + ', United states';
        if (autoCompleteValue != undefined) {
            if (add.toLocaleLowerCase() == autoCompleteValue.toLocaleLowerCase()) {
                displayZip(location, autoCompleteValue, "mobile");
            }
            else {
                if ($.isNumeric($("#txtMobileFindresults").val()) && $("#txtMobileFindresults").val().length == 5) {
                    getlanglatMobile(function (latlng) {
                        if (latlng != '') {
                            updateLocation(removeCountry, "mobile");
                        }
                        else {
                            ShowCustomDialog();
                        }
                    });
                    //updateLocation(undefined, "desktop");
                }
                else {
                    ShowCustomDialog();
                }
            }
        }
        else {
            if ($.isNumeric($("#txtMobileFindresults").val()) && $("#txtMobileFindresults").val().length == 5) {
                getlanglatMobile(function (latlng) {
                    if (latlng != '') {
                        updateLocation(removeCountry, "mobile");
                    }
                    else {
                        ShowCustomDialog();
                    }
                });
            }
            else {
                updateLocation(undefined, "mobile");
            }
        }

    });

    function getlanglat(callback) {
        var belongToUS = '';
        var address = $("#txtFindresults").val();
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //results = data.results;
                for (var i = 0; i < results.length; i++) {
                    var addressComponents = results[i].address_components;
                    for (var j = 0; j < addressComponents.length; j++) {
                        var component = addressComponents[j],
											componentType = component.types[0];
                        if (componentType === 'country') {
                            componentZipCode = component.long_name;
                            if (componentZipCode === 'United States') {
                                belongToUS = componentZipCode;
                            }

                        }
                    }
                }
            }
            callback(belongToUS);
        });

    }
    function getlanglatMobile(callback) {
        var belongToUS = '';
        var address = $("#txtMobileFindresults").val();
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //results = data.results;
                for (var i = 0; i < results.length; i++) {
                    var addressComponents = results[i].address_components;
                    for (var j = 0; j < addressComponents.length; j++) {
                        var component = addressComponents[j],
											componentType = component.types[0];
                        if (componentType === 'country') {
                            componentZipCode = component.long_name;
                            if (componentZipCode === 'United States') {
                                belongToUS = componentZipCode;
                            }

                        }
                    }
                }
            }
            callback(belongToUS);
        });

    }

    var autocomplete;
    var autocompleteMobile;
    var geocoder;
    var input = document.getElementById('txtFindresults');
    var inputMobile = document.getElementById('txtMobileFindresults');
    var options = {
        componentRestrictions: { 'country': 'us' },
        types: ['(regions)'] // (cities) filter based on country
    };
    autocomplete = new google.maps.places.Autocomplete(input, options);
    autocompleteMobile = new google.maps.places.Autocomplete(inputMobile, options);

    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        //debugger;
        var location = autocomplete.getPlace();
        inputValue = input.value;
        autoCompleteValue = input.value;
        res = inputValue.split(','),
		result = res[0] + ',' + res[1];
        input.value = result;
        gmarkers.length = 0;
        scroll = 0;
        // call the displayZip function that will show the zip code
        // for the location they've chosen
        displayZip(location, inputValue, "");

        // error message if the selected location doesn't have geometry
        if (location != undefined) {
            if (!location.geometry) {
                window.alert("Autocomplete's returned place contains no geometry");
                return;
            }
        }
    });
    google.maps.event.addListener(autocompleteMobile, 'place_changed', function () {
        //debugger;
        var location = autocompleteMobile.getPlace();
        autoCompleteValue = inputMobile.value;
        inputValue = inputMobile.value;
        res = inputValue.split(','),
		result = res[0] + ',' + res[1];
        inputMobile.value = result;
        gmarkers.length = 0;
        scroll = 0;
        // call the displayZip function that will show the zip code
        // for the location they've chosen
        displayZip(location, inputValue, "");

        // error message if the selected location doesn't have geometry
        if (location != undefined) {
            if (!location.geometry) {
                window.alert("Autocomplete's returned place contains no geometry");
                return;
            }
        }
    });
    // on enter functionality

    var pac_input = document.getElementById('txtFindresults');

    (function pacSelectFirst(input) {
        // store the original event binding function
        var _addEventListener = (input.addEventListener) ? input.addEventListener : input.attachEvent;

        function addEventListenerWrapper(type, listener) {
            // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
            // and then trigger the original listener.

            if (type == "keydown") {
                var orig_listener = listener;
                listener = function (event) {
                    var suggestion_selected = $(".pac-item-selected").length > 0;
                    if (event.which == 13 && !suggestion_selected) {
                        var simulated_downarrow = $.Event("keydown", { keyCode: 40, which: 40 })
                        orig_listener.apply(input, [simulated_downarrow]);
                    }

                    orig_listener.apply(input, [event]);
                };
            }

            // add the modified listener
            _addEventListener.apply(input, [type, listener]);
        }

        if (input.addEventListener)
            input.addEventListener = addEventListenerWrapper;
        else if (input.attachEvent)
            input.attachEvent = addEventListenerWrapper;

    })(pac_input);
    // on enter functionality

    var pac_input = document.getElementById('txtMobileFindresults');

    (function pacSelectFirst(input) {
        // store the original event binding function
        var _addEventListener = (input.addEventListener) ? input.addEventListener : input.attachEvent;

        function addEventListenerWrapper(type, listener) {
            // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
            // and then trigger the original listener.

            if (type == "keydown") {
                var orig_listener = listener;
                listener = function (event) {
                    var suggestion_selected = $(".pac-item-selected").length > 0;
                    if (event.which == 13 && !suggestion_selected) {
                        var simulated_downarrow = $.Event("keydown", { keyCode: 40, which: 40 })
                        orig_listener.apply(input, [simulated_downarrow]);
                    }

                    orig_listener.apply(input, [event]);
                };
            }

            // add the modified listener
            _addEventListener.apply(input, [type, listener]);
        }

        if (input.addEventListener)
            input.addEventListener = addEventListenerWrapper;
        else if (input.attachEvent)
            input.attachEvent = addEventListenerWrapper;

    })(pac_input);
    function displayZip(newLocation, value, device) {
        //debugger;
        var retZipCode;
        if (newLocation != undefined) {
            // get the latitute and longitude of the selected location
            // using the google maps geometry api
            var lat = newLocation.geometry.location.lat(),
						lng = newLocation.geometry.location.lng();

            // call to the google maps geocode api
            // using the latitude and longitude values
            $.ajax({
                url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=true',
                dataType: 'json',
                async: false,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    //alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                },
                success: function (data) {
                    //debugger;
                    // get the results from the geocode call
                    var inputZipBool = /(\d{5}[,])/.test(value),
								inputZip,
								results = data.results;

                    if (inputZipBool) {
                        var inputZipParts = value.split(/(\d{5})/);
                        for (var p = 0; p < inputZipParts.length; p++) {
                            if (/(\d{5})/.test(inputZipParts[p])) {
                                inputZip = inputZipParts[p];
                            }
                        }
                        for (var i = 0; i < results.length; i++) {
                            var addressComponents = results[i].address_components;
                            for (var j = 0; j < addressComponents.length; j++) {
                                var component = addressComponents[j],
											componentType = component.types[0];

                                if (componentType === 'postal_code') {
                                    var componentZipCode = component.long_name;
                                    if (componentZipCode === inputZip) {
                                        //$('#result-zip').html(componentZipCode);
                                        //updateLocation(componentZipCode, device);
                                        retZipCode = componentZipCode;
                                    }
                                }
                            }
                        }
                    } else {
                        results = data.results[0].address_components;
                        // loop through the results
                        // when the type is "postal_code"
                        // get the zip code and then display it in the result div
                        for (var z = 0; z < results.length; z++) {
                            var object = results[z],
										type = object.types[0];

                            if (type === 'postal_code') {
                                var zipCode = object.long_name;
                                //$('#result-zip').html(zipCode);
                                //updateLocation(zipCode, device);
                                retZipCode = zipCode;
                            }
                        }
                    }
                }

            });
            updateLocation(retZipCode, device);
        }
        else {
            updateLocation(retZipCode, device);
        }
    }

    // clear the input and zipcode
    // when the user clicks into the input
    // so they can enter a new location
    input.addEventListener('click', function () {
        input.value = '';
        //$('#result-zip').html('');
    });
    inputMobile.addEventListener('click', function () {
        inputMobile.value = '';
        //$('#result-zip').html('');
    });
    document.addEventListener('DOMNodeInserted', function (event) {
        var target = $(event.target);
        if (target.hasClass('pac-item')) {
            //console.log('target');
            target.html(target.html().replace(/, United States<\/span>$/, "</span>"));
        }
    });
    function updateLocation(Zipcode, device) {
        //debugger;
        var zip = '';
        var PostalCode = /^\d{5}$/;
        //var zip = $.trim($('#txtFindresults').val());
        if (Zipcode != undefined) {
            zip = Zipcode;
        }
        else {
            if (device == "desktop") {
                zip = $.trim($('#txtFindresults').val());
            }
            else if (device == "mobile") {
                zip = $.trim($('#txtMobileFindresults').val());
            }
            else {
                zip = $.trim($('#txtFindresults').val());
            }
        }
        //alert(zip);
        if (!$.isNumeric(zip) && zip.length > 4) {
            var arr = zip.split(',');
            //alert(arr[1]);
            if (arr[1] != undefined) {
                var aar1 = arr[1].split(' ');
                //alert(aar1[2]);
                if (aar1[2] != undefined) {
                    zip = $.trim(aar1[2]);
                }
            }

        }

        //alert(zip);
        if (zip.match(PostalCode)) {
            $.ajax({
                url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + zip + '&sensor=true',
                dataType: 'json',
                async: false,
                success: function (loc) {
                    for (var i = 0; i < loc.results.length; i++) {
                        var address = loc.results[i].formatted_address;
                        city = address.split(',')[0];
                        state = address.split(',')[1].split(' ')[1];
                        lat = loc.results[i].geometry.location.lat;
                        long = loc.results[i].geometry.location.lng;
                        zipcode = zip;
                        if ($("#mainBody_txtSearch").val() == "") {
                            //alert("inside");
                            products = '';
                        }
                        else {
                            //alert("not empty");
                            products = $("#mainBody_txtSearch").val();
                        }
                        createMarker(10);

                    }
                }
            });
        }
        else {
            ShowCustomDialog();
        }

    }

});

function ShowCustomDialog() {
    alertify.alert("Please enter a ZIP code or City to find Yield Results.");
}
function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}







