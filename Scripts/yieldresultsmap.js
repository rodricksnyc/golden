// map script goes here for temp purposes

var plotLocations = [],
    showingNum = 10,
    w = window.innerWidth;
var year = '2021';
var crop = 'corn';
var products = '';
var lat = '';
var long = '';
var city = '';
var zipcode = '';
var state = '';
var brand = 'golden harvest';
var autoCompleteValue;
var GHUserLat = '';
var GHUserLng = '';
var map;
var totalCount = 50;
var userLocArray = {};
var productlist = [];


function getAddress() {

    if (readCookie('AsyncCallCheck') === '' || readCookie('AsyncCallCheck') == null || readCookie('AsyncCallCheck') === 'undefined') {
        createCookie('AsyncCallCheck', 'Yes', 1);
    }
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
                if (readCookie('GHuserLoc') === 'undefined' || readCookie('GHuserLoc') == null || readCookie('GHuserLoc') === '') {
                    getUserLocationfromIP();
                    setYRLocation();
                }
                else {
                    setYRLocation();
                }
            }
            else {
                lat = location.d.Latitude;
                long = location.d.Longitude;
                city = location.d.City;
                state = location.d.State;
                zipcode = location.d.PostalCode;
                var address = city + ', ' + state + ' ' + zipcode;
                $('#yr-location').val(address);
                createCookie('AsyncCallCheck', '', 1);
                getHybridProducts();
                clearSessionValues();
            }
        }
    });
}

// clear session values
function clearSessionValues() {
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
        }
    });
}

// check for url parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//set hybrid in session
function setProductSession(prodName) {
    $.ajax({
        type: "POST",
        url: "https://" + window.location.host + "/Proxy/HarvestProxy.asmx/SetProduct",
        data: "{ prodName: '" + prodName + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: "true",
        success: function (msg) {
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
            return false;
        }
    });
}

// get the hybrid products if set in session or from query string
function getHybridProducts() {
    var hybrid = getParameterByName('hybrid');
    var tYear = getParameterByName('year');
    var tloca = window.location.pathname;
    var tsplit = tloca.substring(1, tloca.length).split('/');
    crop = tsplit[0];

    if (hybrid !== null && hybrid !== undefined) {
        products = hybrid;
        if (tYear !== null && tYear !== undefined) {
            year = tYear;
        }
        $("#yr-product").val(hybrid);
        $(".filter-condensed .sf-zip").text(zipcode);
        $(".filter-condensed .sf-year").text(year);
        $(".filter-condensed .sf-crop").text(crop);
        $(".filter-condensed .sf-hybrid").text(products);
        getResults();
        initMap(10);
    }
    else {

        $.ajax({
            url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetProductHyrbrid',
            data: "{}",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'get',
            async: true,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
            success: function (data) {
                if (data.d.length > 0) {
                    products = data.d;
                    $("#yr-product").val(data.d);
                }
                else {
                    products = '';
                    $(".filter-condensed .sf-hybrid").hide();
                }
                var result = GetSetPlotCountInfo(1, 0);
                getYear();
                $(".filter-condensed .sf-zip").text(zipcode);
                $(".filter-condensed .sf-year").text(year);
                $(".filter-condensed .sf-crop").text(crop);
                $(".filter-condensed .sf-hybrid").text(products);
                getResults();
                initMap(10);
            }
        });
    }
}

function getYear() {
    $.ajax({
        url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetYear',
        data: "{}",
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        type: 'get',
        async: false,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        success: function (data) {
            if (data.d.length > 0) {
                year = data.d;
                $("#yr-year").val(year);
                if (crop.toLocaleLowerCase() === 'soybean') {
                    //if (year === '2019') {
                        brand = 'golden harvest';
                    //}
                    //else {
                    //    brand = 'nk';
                    //}
                }
            }
            else {
                year = '2021';
            }
        }
    });
}

function GetSetPlotCountInfo(flag, count) {
    $.ajax({
        type: 'get',
        url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetSetPlotCountInfo',
        data: {
            'flag': '"' + flag + '"',
            'count': '"' + count + '"'
        },
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function (msg) {
            countResult = msg.d;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
}

// clear the hybrid selection
function clearHybridProducts() {
    $.ajax({
        url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/ClearProductHyrbrid',
        data: "{}",
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        type: 'get',
        async: true,
        error: function (XMLHttpRequest, textStatus, errorThrown) {

        },
        success: function (data) {
            $("#yr-product").val('');
            products = '';
        }
    });
}

function initMap(num, single) {
    var numberOfPlots,
        mapCenterLat,
        mapCenterLong,
        mapZoom,
        plots,
        mapStyles = [{ "stylers": [{ "color": "#f8ffff" }] }, { "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "saturation": -55 }, { "lightness": 60 }] }, { "elementType": "geometry.fill", "stylers": [{ "color": "#d8dfdf" }, { "saturation": -50 }, { "lightness": 50 }] }, { "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#989898" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [{ "color": "#94c1cb" }] }, { "featureType": "administrative.province", "stylers": [{ "color": "#94c1cb" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }, { "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }, { "visibility": "off" }] }, { "featureType": "road", "stylers": [{ "color": "#a8adad" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#dcdcdc" }, { "weight": 1 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "road.highway", "stylers": [{ "color": "#b5b6b6" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#dadada" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#b0b0b0" }, { "saturation": -75 }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#c9c9c9" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#addfea" }, { "saturation": -10 }, { "lightness": 35 }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }];

    if (plotLocations.length > 0) {
        if (single === true) {
            var tPlot = parseInt(num) - 1;
            numberOfPlots = 1;
            mapCenterLat = parseFloat(plotLocations[tPlot].GPSlat);
            mapCenterLong = parseFloat(plotLocations[tPlot].GPSlong);
            plots = plotLocations[tPlot];
            mapZoom = 11;
        } else {
            //enter location of center map here for all points
            totalCount = plotLocations.length;
            $('.load-more-plots').show();
            mapCenterLat = parseFloat(plotLocations[0].GPSlat);
            mapCenterLong = parseFloat(plotLocations[0].GPSlong);
            mapZoom = 9;

            if (plotLocations.length < 10) {
                num = plotLocations.length;
                $('.load-more-plots').hide();
            }
            $('#load-more').removeClass('disabled');
            numberOfPlots = num;
            showingNum = 10;
            $('.results-viewing span.count').empty().html(numberOfPlots);
            $('.results-viewing span.total').empty().html(totalCount);
            plots = plotLocations.slice(0, num);
        }

        if (w >= 992) {
            map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: mapZoom,
                center: { lat: mapCenterLat, lng: mapCenterLong },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                scrollwheel: false,
                navigationControl: false,
                streetViewControl: false,
                fullscreenControl: false,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT
                },
                styles: mapStyles
            });
        } else {
            map = new google.maps.Map(document.getElementById('map-canvas'), {
                zoom: mapZoom,
                center: { lat: mapCenterLat, lng: mapCenterLong },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                scrollwheel: false,
                navigationControl: false,
                streetViewControl: false,
                fullscreenControl: false,
                zoomControl: false,
                styles: mapStyles
            });
        }

        var icon1 = '/Images/ghs-yr-pin-orange.png';
        var icon2 = '/Images/ghs-yr-pin-white.png';
        // content for info box
        var infoWin = new google.maps.InfoWindow({
            content: ''
        });

        if (single === true) {

            var marker = new MarkerWithLabel({
                position: { lat: parseFloat(plots.GPSlat), lng: parseFloat(plots.GPSlong) },
                //animation: google.maps.Animation.BOUNCE,
                icon: icon2,
                labelClass: 'plt-mk-over no-click',
                labelAnchor: new google.maps.Point(15, 30),
                labelContent: num,
                map: map
                //label: { text: labelNum.toString(), color: "#ffffff" }
            });


        } else {
            // Add some markers to the map.
            // Note: The code uses the JavaScript Array.prototype.map() method to
            // create an array of markers based on a given "locations" array.
            // The map() method here has nothing to do with the Google Maps API.
            var plotSingleInfo = '';
            $('.plots-container').html('');
            var markers = plots.map(function (plot, i) {
                var labelNum = i + 1,
                    plotID = plot.PlotId,
                    plotName = plot.Cooperator,
                    plotNameFirst = plotName.split('-'),
                    plotAddress = plot.Address,
                    plotAddySplit = plotAddress ? plotAddress.split(',') : String.Empty,
                    plotCity = plotAddySplit ? plotAddySplit[0] : String.Empty,
                    plotState = plotAddySplit ? plotAddySplit[1].split(' ') : "",
                    plotCounty = plotAddySplit ? plotAddySplit[2] + " County" : "",
                    plotYield = plot.Yield,
                    plotBrand = plot.Brand,
                    markerInfoBox,
                    plotSingleInfo;

                plotaddress = plotName + ' | ' + plotCounty + ', ' + plotState;
                plotreportAddress = plotName + ' | ' + plotCounty + ', ' + plotState[0] + ' ' + plotState[1];

                //Replace ' with _ so that the functio nwill be called.
                plotreportAddress = plotreportAddress.replace("'", "\\'");

                if ((plotBrand === 'Golden Harvest' && crop.toLocaleLowerCase() === 'soybean' && year === '2020') || (plotBrand.toLocaleLowerCase() === 'golden harvest' && crop.toLocaleLowerCase() === 'corn')) {

                    markerInfoBox = '<div class="map-info-window">' +
                                       '<h5>' + plotNameFirst[0] + '</h5>' +
                                       '<h5 class="spacer">|</h5>' +
                                       '<h5>' + plotCounty + ', ' + plotState[0] + '</h5>' +
                                       '<div class="gh-yield">' + plotYield + ' Bu/Acre</div>' +
                                       '<a href="javascript:PlotRedirect(' + "'" + plotID + "'" + ',' + "'" + crop + "'" + ',' + "'" + plotreportAddress + "'" + ',' + "'" + brand + "'" + ')" class="btn-default" data-plotid="' + plotID + '">Full Report</a>' +
                                       '</div>';

                    plotSingleInfo = '<div class="plot-single" data-plotid="' + plotID + '" data-plotnum="' + labelNum + '" data-lat="' + plot.GPSlat + '" data-long="' + plot.GPSlong + '">' +
                                            '<div class="psi-details clearfix">' +
                                                '<div class="ps-number">' + labelNum + '</div>' +
                                                '<div class="plot-details">' +
                                                    '<div class="plot-details-name">' + plotName + ' | ' + plotCounty + ', ' + plotState[0] + '</div>' +
                                                    '<div class="plot-details-yield-avg">Golden Harvest Avg. - ' + plotYield + ' Bu/Acre</div>' +
                                                '</div>' +
                                                '<a href="#" class="btn-arrow-down toggle-plot-info"><img src="../Images/drop-arrow-down.png" alt="toogle img"/></a>' +
                                            '</div>' +
                                            '<div class="mobile-plot-single-info"></div>' +
                                         '</div>';
                }
                else if (plotBrand.toLocaleLowerCase() === 'golden harvest' && crop.toLocaleLowerCase() === 'silage') {
                    markerInfoBox = '<div class="map-info-window">' +
                                       '<h5>' + plotName + '</h5>' +
                                       '<h5 class="spacer">|</h5>' +
                                       '<h5>' + plotCounty + ', ' + plotState[0] + '</h5>' +
                                       '<div class="gh-yield">' + plotYield + ' Ton/Acre</div>' +
                                       '<a href="javascript:PlotRedirect(' + "'" + plotID + "'" + ',' + "'" + crop + "'" + ',' + "'" + plotreportAddress + "'" + ',' + "'" + brand + "'" + ')" class="btn-default" data-plotid="' + plotID + '">Full Report</a>' +
                                       '</div>';

                    plotSingleInfo = '<div class="plot-single" data-plotid="' + plotID + '" data-plotnum="' + labelNum + '" data-lat="' + plot.GPSlat + '" data-long="' + plot.GPSlong + '">' +
                                            '<div class="psi-details clearfix">' +
                                                '<div class="ps-number">' + labelNum + '</div>' +
                                                '<div class="plot-details">' +
                                                    '<div class="plot-details-name">' + plotName + ' | ' + plotCounty + ', ' + plotState[0] + '</div>' +
                                                    '<div class="plot-details-yield-avg">Golden Harvest Avg. - ' + plotYield + ' Ton/Acre</div>' +
                                                '</div>' +
                                                '<a href="#" class="btn-arrow-down toggle-plot-info"><img src="../Images/drop-arrow-down.png" alt="toogle img"/></a>' +
                                            '</div>' +
                                            '<div class="mobile-plot-single-info"></div>' +
                                         '</div>';
                }
                else {
                    markerInfoBox = '<div class="map-info-window">' +
                                  '<h5>' + plotName + '</h5>' +
                                  '<h5 class="spacer">|</h5>' +
                                  '<h5>' + plotCounty + ', ' + plotState[0] + '</h5><br>' +
                                  //'<div class="gh-yield">' + plotYield + ' BU/Arce</div>' +
                                  '<a href="javascript:PlotRedirect(' + "'" + plotID + "'" + ',' + "'" + crop + "'" + ',' + "'" + plotreportAddress + "'" + ',' + "'" + brand + "'" + ')" class="btn-default" data-plotid="' + plotID + '">Full Report</a>' +
                                  '</div>';

                    plotSingleInfo = '<div class="plot-single" data-plotid="' + plotID + '" data-plotnum="' + labelNum + '" data-lat="' + plot.GPSlat + '" data-long="' + plot.GPSlong + '">' +
                                            '<div class="psi-details clearfix">' +
                                                '<div class="ps-number">' + labelNum + '</div>' +
                                                '<div class="plot-details">' +
                                                    '<div class="plot-details-name nk-plot">' + plotName + ' | ' + plotCounty + ', ' + plotState[0] + '</div>' +
                                                    //'<div class="plot-details-yield-avg">Golden Harvest Avg. - ' + plotYield + ' BU/Acre</div>' +
                                                '</div>' +
                                                '<a href="#" class="btn-arrow-down toggle-plot-info"><img src="../Images/drop-arrow-down.png" alt="toogle img"/></a>' +
                                            '</div>' +
                                            '<div class="mobile-plot-single-info"></div>' +
                                         '</div>';
                }


                $('.plots-container').append(plotSingleInfo);

                var marker = new MarkerWithLabel({
                    position: { lat: parseFloat(plot.GPSlat), lng: parseFloat(plot.GPSlong) },
                    animation: google.maps.Animation.DROP,
                    icon: icon1,
                    labelClass: 'plot-map-marker',
                    labelAnchor: new google.maps.Point(15, 30),
                    labelContent: labelNum.toString()
                });

                if (w > 992) {
                    google.maps.event.addListener(marker, 'click', function (evt) {

                        var mapNumSet = this.labelContent - 1,
                            plotID = plotLocations[mapNumSet].PlotId;
                        getPlotFive(this.labelContent, plotID);
                        $('.plot-single-info').addClass('show');
                        dataLayer.push({ 'event': 'location', 'cityState': city + ', ' + state });
                    });

                    google.maps.event.addListener(marker, 'mouseover', function () {
                        marker.setIcon(icon2);
                        this.set('labelClass', 'plt-mk-over');
                        infoWin.setContent(markerInfoBox);
                        infoWin.open(map, marker);
                        $('.plot-single[data-plotnum="' + this.labelContent + '"').addClass('selected');
                        setMapHover(this.labelContent);
                    });

                    google.maps.event.addListener(marker, 'mouseout', function () {
                        marker.setIcon(icon1);
                        this.set('labelClass', 'plot-map-marker');
                        $('.plot-single[data-plotnum="' + this.labelContent + '"').removeClass('selected');
                    });
                } else {
                    google.maps.event.addListener(marker, 'click', function (evt) {
                        infoWin.setContent(markerInfoBox);
                        infoWin.open(map, marker);
                        dataLayer.push({ 'event': 'location', 'cityState': city + ', ' + state });
                    });

                }

                return marker;
            });

            var clusterOne = '/Images/gme-cluster-orange4.png';
            var clusterTwo = '/Images/gme-cluster-orange5.png';

            var mcOptions = {
                styles: [{
                    url: clusterOne,
                    width: 50,
                    height: 50,
                    textSize: 14,
                    textColor: '#d45f00'
                }],
                minimumClusterSize: 2,
                maxZoom: 12

            };

            // Add a marker clusterer to manage the markers.
            var markerCluster = new MarkerClusterer(map, markers, mcOptions);

            google.maps.event.addListener(markerCluster, 'mouseover', function (cluster) {
                cluster.clusterIcon_.div_.firstChild.src = clusterTwo;
            });

            google.maps.event.addListener(markerCluster, 'mouseout', function (cluster) {
                cluster.clusterIcon_.div_.firstChild.src = clusterOne;
            });

            google.maps.event.addListener(markerCluster, 'click', function (cluster) {
                dataLayer.push({ 'event': 'locations' });
            });

            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < markers.length; i++) {
                bounds.extend(markers[i].getPosition());
            }

            map.fitBounds(bounds);

        }

        $('.mobile-canvas-cover').click(function (e) {
            e.preventDefault();
            $('#map-container').addClass('mobile-map');
            google.maps.event.trigger(map, 'resize');
            $('a#btn-refresh-map, a#btn-view-list').addClass('show');
        });


        $('a#btn-view-list').click(function (e) {
            e.preventDefault();
            $('#map-container').removeClass('mobile-map');
            google.maps.event.trigger(map, 'resize');
            $('a#btn-refresh-map, a#btn-view-list').removeClass('show');
        });


        map.addListener('center_changed', function () {
            var newCenter = map.getCenter();
            lat = newCenter.lat();
            long = newCenter.lng();
        });

        document.getElementById("map-cover").style.display = "none";
    }
    else {
        $('.plots-container').html('');
        $('.load-more-plots').hide();
        mapCenterLat = parseFloat(37.0625);
        mapCenterLong = parseFloat(-95.677068);


        var map = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: 9,
            center: { lat: mapCenterLat, lng: mapCenterLong },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            scrollwheel: false,
            navigationControl: false,
            streetViewControl: false,
            maxZoom: 10,
            styles: [{ "stylers": [{ "color": "#f8ffff" }] }, { "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "saturation": -55 }, { "lightness": 60 }] }, { "elementType": "geometry.fill", "stylers": [{ "color": "#d8dfdf" }, { "saturation": -50 }, { "lightness": 50 }] }, { "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#989898" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [{ "color": "#94c1cb" }] }, { "featureType": "administrative.province", "stylers": [{ "color": "#94c1cb" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }, { "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }, { "visibility": "off" }] }, { "featureType": "road", "stylers": [{ "color": "#a8adad" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#dcdcdc" }, { "weight": 1 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "road.highway", "stylers": [{ "color": "#b5b6b6" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#dadada" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#b0b0b0" }, { "saturation": -75 }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#c9c9c9" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#addfea" }, { "saturation": -10 }, { "lightness": 35 }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }]
        });

        document.getElementById("map-cover").style.display = "none";
    }
}

function setMapHover(num) {
    var eleCont = $('.plots-container'),
        contEleTop = eleCont.offset().top,
        eleOffsetTop = $('#map-content').find('.plot-single[data-plotnum="' + num + '"]').offset().top,
        firstEleOffsetTop = $('#map-content').find('.plot-single[data-plotnum="1"]').offset().top,
        distanceToTravel = eleOffsetTop - contEleTop,
        contTopDiff = firstEleOffsetTop - contEleTop,
        toTop = distanceToTravel - contTopDiff;

    eleCont.animate({ scrollTop: toTop }, 200);
}

function getPlotFive(num, plotID) {
    // get json of plot top five GHS from server

    $("#map-cover").css('display', 'block');
    $.ajax({
        url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/GetPlotReportRankLessThanEqualFive',
        data: {
            'countryCode': '"US"',
            'cropType': '"' + crop + '"',
            'plotId': '"' + plotID + '"',
            'langCode': '"EN"'
        },
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        type: 'get',
        async: true,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        success: function (data) {
            data = data.d.Result;
            //console.log(JSON.stringify(data))
            var pdnum = parseInt(num) - 1;
            plotName = plotLocations[pdnum].Cooperator,
                plotNameFirst = plotName.split('-'),
                plotAddress = plotLocations[pdnum].Address,
                plotAddySplit = plotAddress.split(','),
                plotCity = plotAddySplit[0],
                plotState = plotAddySplit[1].split(' '),
                plotCounty = plotAddySplit ? plotAddySplit[2] + " County" : "",
                plotYield = plotLocations[pdnum].Yield;

            plotaddress = plotName + ' | ' + plotCounty + ', ' + plotState;
            plotReportAddress = plotName + ' | ' + plotCounty + ', ' + plotState[0] + ' ' + plotState[1];

            //Replace ' with _ so that the functio nwill be called.
            plotReportAddress = plotReportAddress.replace("'", "\\'");

            var plotTopFiveData = '';

            var count = data.length;

            if ((year === '2020' && crop.toLocaleLowerCase() === 'soybean') || (crop.toLocaleLowerCase() === 'corn')) {

                plotTopFiveData = '<div class="plot-detail-tfive clearfix" data-plotid="' + plotID + '" data-plotnum="' + num + '" >' +
                                         '<div class="plot-title">Top five yield results for:</div>' +
                                         '<div class="ps-number">' + num + '</div>' +
                                           '<div class="plot-details">' +
                                                '<div class="plot-details-name">' + plotName + ' | ' + plotCounty + ', ' + plotState[0] + ' ' + plotState[1] + '</div>' +
                                                '<div class="plot-details-yield-avg">Golden Harvest Avg. - ' + plotYield + ' Bu/Acre</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<table id="top-five-gh-results">';

                for (var i = 0; i < count; i++) {
                    plotTopFiveData = plotTopFiveData +
                        '<tr>' +
                        '<td class="gh5-identifier">' + data[i].Rank  + '. ' + data[i].Variety + '</td>' +
                        '<td class="gh5-yield">' + data[i].Yield.toFixed(1) + ' Bu/Acre</td>' +
                        '</tr>';
                }

                plotTopFiveData = plotTopFiveData + '</table>' +
                    '<a href="javascript:PlotRedirect(' + "'" + plotID + "'" + ',' + "'" + crop + "'" + ',' + "'" + plotReportAddress + "'" + ',' + "'" + brand + "'" + ')" class="btn-default">Full Report</a>';
            }
            else if (crop.toLocaleLowerCase() === "silage") {
                plotTopFiveData = '<div class="plot-detail-tfive clearfix" data-plotid="' + plotID + '" data-plotnum="' + num + '" >' +
                                         '<div class="plot-title">Top five yield results for:</div>' +
                                         '<div class="ps-number">' + num + '</div>' +
                                           '<div class="plot-details">' +
                                                '<div class="plot-details-name">' + plotName + ' | ' + plotCounty + ', ' + plotState[0] + ' ' + plotState[1] + '</div>' +
                                                '<div class="plot-details-yield-avg">Golden Harvest Avg. - ' + plotYield + ' Ton/Acre</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<table id="top-five-gh-results">';

                for (var i = 0; i < count; i++) {
                    plotTopFiveData = plotTopFiveData +
                        '<tr>' +
                        '<td class="gh5-identifier">' + data[i].Rank  + '. ' + data[i].Variety + '</td>' +
                        '<td class="gh5-yield">' + data[i].Yield.toFixed(1) + ' Ton/Acre</td>' +
                        '</tr>';
                }

                plotTopFiveData = plotTopFiveData + '</table>' +
                    '<a href="javascript:PlotRedirect(' + "'" + plotID + "'" + ',' + "'" + crop + "'" + ',' + "'" + plotReportAddress + "'" + ',' + "'" + brand + "'" + ')" class="btn-default">Full Report</a>';
            }
            else {

                plotTopFiveData = '<div class="plot-detail-tfive clearfix" data-plotid="' + plotID + '" data-plotnum="' + num + '" >' +
                                         '<div class="plot-title">Top five yield results for:</div>' +
                                         '<div class="ps-number">' + num + '</div>' +
                                           '<div class="plot-details">' +
                                                '<div class="plot-details-name">' + plotName + ' | ' + plotCounty + ', ' + plotState[0] + ' ' + plotState[1] + '</div>' +
                                                //'<div class="plot-details-yield-avg">Golden Harvest Avg. - ' + plotYield + ' BU/Acre</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<table id="top-five-gh-results">';
                for (var i = 0; i < count; i++) {
                    plotTopFiveData = plotTopFiveData +
                        '<tr>' +
                        '<td class="gh5-identifier">' + data[i].Rank  + '. ' + data[i].Variety + '</td>' +
                        '<td class="gh5-yield">' + data[i].Yield.toFixed(1) + ' Bu/Acre</td>' +
                        '</tr>';
                }

                plotTopFiveData = plotTopFiveData + '</table>' +
                    '<a href="javascript:PlotRedirect(' + "'" + plotID + "'" + ',' + "'" + crop + "'" + ',' + "'" + plotReportAddress + "'" + ',' + "'" + brand + "'" + ')" class="btn-default">Full Report</a>';

            }


            if (w >= 992) {
                $('.plot-name-cont').empty().html(plotTopFiveData);
            } else {
                $('.plot-single[data-plotnum="' + num + '"] .mobile-plot-single-info').html(plotTopFiveData);
            }
            if (w >= 992) {
                initMap(num, true);
                $('.plot-single-info').addClass('show');
            } else {
                $("#map-cover").css('display', 'none');
                $('.plot-single[data-plotnum="' + num + '"]').addClass('open');
            }
        }
    });
}

// redirect to plot report page
function PlotRedirect(plot, crop, address, brandname) {
    var plotid = plot;
    if (brandname.toLowerCase() === 'golden harvest') {
        brandname = 'golden-harvest';
    }

    address = address.replace("\\'", "'");

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
            if (brand === 'golden harvest' && crop.toLocaleLowerCase() === 'corn') {
                window.location.href = "https://" + window.location.host + "/corn/plot-report";
            }
            else if (crop.toLocaleLowerCase() === 'soybean') {
                window.location.href = "https://" + window.location.host + "/soybean/plot-report";
            }
            else if (crop.toLocaleLowerCase() === 'silage') {
                window.location.href = "https://" + window.location.host + "/silage/plot-report";
            }
            return false;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
        }
    });
}

// get plot results from service
function getResults() {
    var productName = $("#yr-product").val();
    var regExp = /^[a-zA-Z0-9-+.\/ ]*$/;
    if (productlist.length >= 0) {
        if (productlist.length == 1 && (productlist.includes("No match found") || productName != productlist[0])) {
            products = "";
            alert("Please enter a valid product");
            plotLocations = "";
            initMap(0);
            $("#yr-product").val("");
            $(".filter-condensed .sf-hybrid").text("");
            productlist = "";
            setProductSession(products);
        }
        else if (productName.includes("%")) {
            products = "";
            alert("Please enter a valid product");
            plotLocations = "";
            initMap(0);
            $("#yr-product").val("");
            $(".filter-condensed .sf-hybrid").text("");
            productlist = "";
            setProductSession(products);
        }
        else if (regExp.test(productName) == false) {
            //Special characters used in productname's -,/,+,.
            products = "";
            alert("Please enter a valid product");
            plotLocations = "";
            initMap(0);
            $("#yr-product").val("");
            $(".filter-condensed .sf-hybrid").text("");
            productlist = "";
            setProductSession(products);
        }
        else if (productlist.length == 0) {
            getPlotResult(brand, crop, year, lat, long, products);
        }
        else {
            for (var i = 0; i < productlist.length; i++) {
                if (productlist[i] == productName) {
                    products = productName;
                    break;
                }
            }
            getPlotResult(brand, crop, year, lat, long, products);
        }
    }
}

function getPlotResult(brand, crop, year, lat, long, products) {
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
        async: false,
        beforeSend: function () {
            $("#map-cover").css('display', 'block');  // <----show before sending
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
        },
        success: function (data) {
            plotLocations = data.d.Result;
        },
        complete: function () {
            initMap(10);
            $("#map-cover").css('display', 'block'); // on complete of ajax hide it.
        }
    });
}

google.maps.event.addDomListener(window, 'load', getAddress());

$('a#btn-refresh-map').click(function (e) {
    $('#map-cover').css('display', 'block');
    setTimeout(resetMapPosition, 1000);
});

function resetMapPosition() {
    $('a.load-more-plots').removeClass('disabled');
    $('.plot-single-info, .full-filters').removeClass('show');
    $(".plots-container").empty();
    $('.results-viewing span').empty().html(10);
    showingNum = 10;
    getResults();
    initMap(10);
}

$(function () {

    var loca = window.location.pathname;
    var split = loca.substring(1, loca.length).split('/');

    crop = split[0];

    if (crop.toLocaleLowerCase() === 'corn') {
        crop = 'Corn';
    }
    else if (crop.toLocaleLowerCase() === 'soybean') {
        crop = 'Soybean';
    }
    else if (crop.toLocaleLowerCase() === 'silage') {
        crop = 'Silage';
    }

    $('a.load-more-plots').click(function (e) {
        e.preventDefault();
        if (showingNum < totalCount) {
            var remainder = totalCount / 10;
            newNumShow = showingNum + 10;
            if (newNumShow > totalCount) {
                newNumShow = totalCount;
            }
            $("#map-cover").css('display', 'block');
            $(".plots-container").empty();
            initMap(newNumShow);
            showingNum = newNumShow;
            $('.results-viewing span.count').empty().html(newNumShow);
            if (newNumShow >= totalCount) {
                $(this).addClass('disabled');
            }
        }
    });

    $('.plots-container').on('click', '.psi-details', function (e) {
        var plot = $(this),
            plotNum = plot.parent().attr('data-plotnum'),
            plotID = plot.parent().attr('data-plotid'),
            plotText = plot.find('.plot-details-name').text();

        console.log(plotText);

        if (plot.parent().hasClass('open') && w < 992) {
            plot.parent().removeClass('open');
            return false;
        } else {
            dataLayer.push({ 'event': 'plotList', 'eventLabel': plotText });
            getPlotFive(plotNum, plotID);
        }
    });


    $('.plot-single-info a.btn-back').click(function (e) {
        e.preventDefault();

        $(".plots-container").empty();
        $('.results-viewing span').empty().html(showingNum);
        $('.plot-single-info').removeClass('show');

        initMap(showingNum);
    });

    $('.map-filter-cont').click(function (e) {
        e.preventDefault();
        if (w >= 992) {
            $('.full-filters').addClass('show');
        } else {
            $('.map-filter-cont .toggle-filter').toggleClass('up');
            $('.full-filters').toggleClass('open');
        }
    });


    $('.filter-back a.btn-back').click(function (e) {
        e.preventDefault();
        $('.full-filters').removeClass('show');
    });


    $(document).on('click', 'a.toggle-plot-info', function (e) {
        e.preventDefault();
    });


    $(window).on("resize", function () {
        $('#map-container').removeClass('mobile-map');
        if ($('html').hasClass('no-touch')) {
            $('.show').removeClass('show');
        }
        w = window.innerWidth;
        $(".plots-container").empty();
        initMap(showingNum);
    });


    // hybrid autocomplete
    $("#yr-product").autocomplete({

        source: function (request, response) {
            var input, url;
            if (crop.toLocaleLowerCase() === 'soybean' && year === '2020') {
                url = "https://" + window.location.host + '/Proxy/ProductProxy.asmx/GetAutoSuggestionProductByCropNameAndBrand';
                input = {
                    'prefixText': '"' + request.term + '"',
                    'crop': '"' + crop + '"',
                    'brandkey': '57',
                    'count': '30'
                };
            }
            else if (crop.toLocaleLowerCase() === 'corn' || crop.toLocaleLowerCase() === 'silage') {
                cropname = 'corn';
                var input, url;
                if (request.term.toLowerCase().startsWith("e")) {
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
                        'crop': '"' + cropname + '"',
                        'brandkey': '57',
                        'count': '30'
                    }
                };
            }

            else {
                url = "https://" + window.location.host + '/Proxy/ProductProxy.asmx/GetAutoSuggestionProductByCropNameAndBrand';
                input = {
                    'prefixText': '"' + request.term + '"',
                    'crop': '"' + crop + '"',
                    'brandkey': '55',
                    'count': '30'
                };
            }

            $.ajax({
                selectFirst: true,
                url: url,
                data: input,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                type: 'get',
                async: true,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Request: " + XMLHttpRequest + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                },
                success: function (data) {
                    if (data.d.length > 0) {
                        productlist = data.d;
                        response(data.d);
                    }
                    else {
                        productlist = [];
                        productlist[0] = "No match found";
                        response(productlist);
                    }
                }
            });
        },
        minLength: 1,
        autoFocus: true,
        select: function (event, ui) {
            document.getElementById("map-cover").style.display = "block";
            showingNum = 10;
            $("#yr-product").val(ui.item.label);
            products = $("#yr-product").val();
            $(".filter-condensed .sf-zip").text(zipcode);
            $(".filter-condensed .sf-year").text(year);
            $(".filter-condensed .sf-crop").text(crop);
            $(".filter-condensed .sf-hybrid").text(products);
            $(".filter-condensed .sf-hybrid").show();
            var delayMillis = 2000; //1 second

            setTimeout(function () {
                //your code to be executed after 1 second
                getResults();
                initMap(10);
                dataLayer.push({ 'event': 'filterHybrid', 'cityState': city + ', ' + state, 'year': year, 'hybrid': products, 'crop': crop });
            }, delayMillis);
            setProductSession(products);
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

    // google autocomplete binding
    var autocomplete;
    var geocoder;
    var input = document.getElementById('yr-location');
    var options = {
        componentRestrictions: { 'country': 'us' },
        types: ['(regions)'] // (cities) filter based on country
    };
    autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.setFields(['address_components', 'geometry', 'formatted_address']);

    // hybrid search button click function
    $("input[name='search']").on("click", function (e) {
        document.getElementById("map-cover").style.display = "block";
        e.preventDefault();

        var len = $('#yr-product').val().length;
        products = $("#yr-product").val();
        if (len > 0) {
            setProductSession(products);
        }
        else {
            clearHybridProducts();
        }
        showingNum = 10;

        if (products !== "No match found" && !(productlist.includes("No match found"))) {
            $(".filter-condensed .sf-zip").text(zipcode);
            $(".filter-condensed .sf-year").text(year);
            $(".filter-condensed .sf-crop").text(crop);
            $(".filter-condensed .sf-hybrid").text(products);
            $(".filter-condensed .sf-hybrid").show();
            var delayMillis = 1000; //1 second

            setTimeout(function () {
                //your code to be executed after 1 second
                getResults();
                initMap(10);
                dataLayer.push({ 'event': 'filterHybrid', 'cityState': city + ', ' + state, 'year': year, 'hybrid': products, 'crop': crop });
            }, delayMillis);
        }
        else {
            getResults();
        }
    });

    // prevent page load on enter press
    $("#aspnetForm").keypress(function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    });

    // clear the input and zipcode
    // when the user clicks into the input
    // so they can enter a new location
    input.addEventListener('click', function () {
        input.value = '';
    });

    document.addEventListener('DOMNodeInserted', function (event) {
        var target = $(event.target);
        if (target.hasClass('pac-item')) {
            target.html(target.html().replace(/, United States<\/span>$/, "</span>"));
        }
    });

    // autocomplete place change event
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        inputValue = input.value;
        autoCompleteValue = input.value;
        if ((inputValue.indexOf(',') > 0) && inputValue !== '') {
            document.getElementById("map-cover").style.display = "block";
            var location = autocomplete.getPlace();
            res = inputValue.split(','),
                result = res[0] + ',' + res[1];
            input.value = result;
            displayZipDetails(location);

            if (location !== undefined) {
                if (!location.geometry) {
                    window.alert("Autocomplete's returned place contains no geometry");
                    return;
                }
            }
            if (isRegionUnsupported) {
                window.alert("We’re sorry. Golden Harvest is not available in this area. Please try another zip code or contact a Golden Harvest Seed Advisor™ for more information.");
                setLocationValue();
                return;
            }
        }
        else {
            window.alert("Please enter a valid 5-digit zip code to find Yield results.");
            setLocationValue();
            return;
        }
    });
    var pac_input = document.getElementById('yr-location');

    // on enter select first item from google autocomplete
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

    // get the zipCode based on latitude and longitude
    function displayZipDetails(newLocation) {
        //Junction City, KS 66441, USA
        var retZipCode;
        if (newLocation !== undefined) {
            retZipCode = setLocationFromPlaces(newLocation);
            updateLocationDetails(retZipCode, newLocation);
        }
    }

    // update the location details in service
    function updateLocationDetails(zipCode, newLocation) {
        var zip = '';
        var PostalCode = /^\d{5}$/;
        if (zipCode !== undefined) {
            zip = zipCode;
        }
        else {
            zip = $.trim($('#yr-location').val());
        }

        zip = GetZipCodeFromString(zip);

        if (zip.match(PostalCode)) {
            if (newLocation === undefined) {
                getLocationFromZip(zip);
            }
            getRegion(false, zip);
            userLocation = JSON.parse(readCookie('GHuserLoc'));
            lat = userLocation.lat;
            long = userLocation.long;
            city = userLocation.city;
            state = userLocation.state;
            zipcode = userLocation.zip;
            SetLocationDetails(state, zipcode, city, lat, long);
        }
    }

    // Crop change
    $("#yr-crop").change(function () {
        crop = $('#yr-crop option:selected').val();
        // alert(crop);
        $(".filter-condensed .sf-zip").text(zipcode);
        $(".filter-condensed .sf-year").text(year);
        $(".filter-condensed .sf-crop").text(crop);
        $(".filter-condensed .sf-hybrid").text(products);
        clearHybridProducts();
        if (crop === 'corn') {
            window.location.href = "https://" + window.location.host + "/corn/yield-results";
        }
        else if (crop === 'soybean') {
            window.location.href = "https://" + window.location.host + "/soybean/yield-results";
        }
        else {
            window.location.href = "https://" + window.location.host + "/silage/yield-results";
        }
        dataLayer.push({ 'event': 'filterCrop', 'cityState': city + ', ' + state, 'year': year, 'hybrid': products, 'crop': crop });

    });

    //Year change
    $("#yr-year").change(function () {

        document.getElementById("map-cover").style.display = "block";
        year = $('#yr-year option:selected').val();
        clearHybridProducts();
        if (crop.toLocaleLowerCase() === 'soybean') {
            if (year === '2020') {
                brand = 'golden harvest';
            }
        }

        $(".filter-condensed .sf-zip").text(zipcode);
        $(".filter-condensed .sf-year").text(year);
        $(".filter-condensed .sf-crop").text(crop);
        $(".filter-condensed .sf-hybrid").hide();


        var delayMillis = 1000; //1 second

        setTimeout(function () {
            //your code to be executed after 1 second
            dataLayer.push({ 'event': 'filterYear', 'cityState': city + ', ' + state, 'year': year, 'hybrid': products, 'crop': crop });
            getResults();
            initMap(10);
        }, delayMillis);
        setYear(year);

    });

    $('#btnSubmitSearch').click(function (event) {
        var inputValue = $(pac_input).val();
        if (inputValue === '' || inputValue.length < 5) {
            window.alert('Please enter a valid 5-digit zip code to find Yield results.');
            return;
        }
        else {
            if (inputValue.length === 5) {
                var keydown = document.createEvent('HTMLEvents');
                keydown.initEvent("keydown", true, false);
                Object.defineProperty(keydown, 'keyCode', {
                    get: function () {
                        return 13;
                    }
                });
                Object.defineProperty(keydown, 'which', {
                    get: function () {
                        return 13;
                    }
                });
                pac_input.dispatchEvent(keydown);
            }
            else {
                window.location.reload();
                //window.alert('Please enter a valid 5-digit zip code to find Yield results.');
                //return;
            }
        }
    });

    function setYear(year) {
        $.ajax({
            type: "POST",
            url: "https://" + window.location.host + "/Proxy/HarvestProxy.asmx/SetYear",
            data: "{ year: '" + year + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: "true",
            success: function (msg) {
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                return false;
            }
        });
    }

    //if (performance && performance.navigation.type === 2) {
    //    location.href = location.href;
    //}

});

function setYRLocation() {
    var userLocation = JSON.parse(readCookie('GHuserLoc'));
    GHUserCity = userLocation.city;
    GHUserState = userLocation.state;
    GHUserZip = userLocation.zip;
    GHUserLat = userLocation.lat;
    GHUserLng = userLocation.long;
    lat = GHUserLat;
    long = GHUserLng;
    zipcode = GHUserZip;
    var address = GHUserCity + ', ' + GHUserState + ' ' + GHUserZip;
    $('#yr-location').val(address);
    createCookie('AsyncCallCheck', '', 1);
    getHybridProducts();
    clearSessionValues();
}

function GetZipCodeFromString(zipCodeText) {
    if (!$.isNumeric(zipCodeText) && zipCodeText.length > 4) {
        var arr = zipCodeText.split(',');
        if (arr[1] !== undefined) {
            var aar1 = arr[1].split(' ');
            if (aar1[2] !== undefined) {
                zip = $.trim(aar1[2]);
            }
        }
    }
    else {
        zip = zipCodeText;
    }
    return zip;
}

function SetLocationDetails(state, zipcode, city, lat, long) {
    var params = "{ state: '" + state + "',zipCode:'" + zipcode + "',city:'" + city + "',latitude:'" + lat + "',longitude:'" + long + "'}";
    $.ajax({
        type: "POST",
        url: "https://" + window.location.host + '/Proxy/HarvestProxy.asmx/SetLocation',
        data: params,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        async: false,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        success: function (data) {
            if (data.d === "1")
                var address = city + ',' + state + ' ' + zipcode;
            if ($("#yr-product").val() === "") {
                products = '';
                $(".filter-condensed .sf-hybrid").hide();
            }
            else {
                products = $("#yr-product").val();
            }
            $(".filter-condensed .sf-zip").text(zipcode);
            $(".filter-condensed .sf-year").text(year);
            $(".filter-condensed .sf-crop").text(crop);
            $(".filter-condensed .sf-hybrid").text(products);
            getResults();
            initMap(10);
        }
    });
}
