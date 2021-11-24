var t,
    g,
    m,
    $win = $(window),
    winWidth = $win.width(),
    detailsShowing = false,
    detail,
    dataMarkerSet,
    userLocArray = {};

resellerMap = {
    globalSettings: {
        isMobile: true,
        resultsHolder: $('.results-list'),
    },
    mapSettings: {
        initLoad: false,
        map: '',
        infoWindow: new google.maps.InfoWindow({
            enableEventPropagation: true
        }),
        mapLoader: $('.loader'),
        mapDiv: $('.map-holder'),
        icon: {
            url: '/Images/global/icon-map-pin-blue.svg',
            size: new google.maps.Size(31, 47),
            scaledSize: new google.maps.Size(31, 47)
        },
        icon2: {
            url: '/Images/global/icon-map-pin-blue-green.svg',
            size: new google.maps.Size(39, 47),
            scaledSize: new google.maps.Size(39, 47)
        },
        mapOptions: '',
        markers: [],
        markersData: [],
        closestData: [],
        positions: [],
        lat: 38.8422722,
        lng: -97.7445837,
        zoom: 5,
        drag: true,
        mapStyles: [{ "stylers": [{ "color": "#f8ffff" }] }, { "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "saturation": -55 }, { "lightness": 60 }] }, { "elementType": "geometry.fill", "stylers": [{ "color": "#d8dfdf" }, { "saturation": -50 }, { "lightness": 50 }] }, { "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#989898" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [{ "color": "#94c1cb" }] }, { "featureType": "administrative.province", "stylers": [{ "color": "#94c1cb" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }, { "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }, { "visibility": "off" }] }, { "featureType": "road", "stylers": [{ "color": "#a8adad" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#dcdcdc" }, { "weight": 1 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "road.highway", "stylers": [{ "color": "#b5b6b6" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#dadada" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#b0b0b0" }, { "saturation": -75 }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#c9c9c9" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#addfea" }, { "saturation": -10 }, { "lightness": 35 }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }]
    },
    //////////////
    //// INIT ////
    //////////////
    init: function () {
        // kick things off
        t = this;
        g = t.globalSettings;
        m = t.mapSettings;
        t.isMobile();
        t.loadMap();
    },
    //////////////////
    //// ISMOBILE ////
    //////////////////
    isMobile: function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            g.isMobile = true;
        } else {
            g.isMobile = false;
        }
    },
    ///////////////////
    //// SHOWERROR ////
    ///////////////////
    showError: function (error) {
        t.noGeo();
    },
    /////////////////
    //// LOADMAP ////
    /////////////////
    loadMap: function () {
        // set drag on map to true if desktop
        if (!g.isMobile) {
            m.drag = true;
        }
        // set map options
        m.mapOptions = {
            draggable: m.drag,
            zoom: m.zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            styles: m.mapStyles
        };
        // initialize map
        m.map = new google.maps.Map(document.getElementById("map"), m.mapOptions);

        t.findClosestMarkers();
    },
    ///////////////////////////
    //// FINDCLOSESTMARKERS ///
    ///////////////////////////
    findClosestMarkers: function () {
        // get the json data
        var json = (function () {
            $("#loading").show();
            //m.mapLoader.show();
            var json = null;

            var isEnogen = false;
            //Check if the URL is for enogen filter
            var windowUrl = window.location.href;
            var length = windowUrl.lastIndexOf('?');
            if (length > -1 && windowUrl.toLowerCase().includes("enogen")) {
                isEnogen = true;
            }
            var userLoc = JSON.parse(localStorage.getItem('userLoc'));
            var city = userLoc['city'],
                state = userLoc['state'],
                zip = userLoc['zip'];
            var url = city + ', ' + state + ' ' + zip + ':' + isEnogen;

            $('.user-location a').text(zip);
            $.ajax({
                async: true,
                type: "POST",
                url: "https://" + window.location.host + "/RepFinder/RetailerSearch.aspx/GetRetailers",
                data: "{ url: '" + url + "', lat:'" + userLoc['lat'] + "', lng:'" + userLoc['long'] + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    json = data.d;

                    // clear closest and markers array
                    m.closestData = [];
                    m.markersData = [];
                    m.markers = [];
                    m.positions = [];

                    var resultCount = 0;
                    // loop over each json elements and push 	array
                    for (var i = 0, data, latLng; i < json.length; i++) {
                        data = json[i];
                        // set latLng
                        latLng = new google.maps.LatLng(data.Latitude, data.Longitude);
                        data.position = latLng;

                        // get distance from center
                        data.distance = data.Distance;

                        // if the results is within 100 miles
                        if (data.Distance <= 100) {
                            if (resultCount < 10) {
                                m.closestData.push(data);
                                m.markersData.push(data);
                                resultCount++;
                            }
                        }
                    }
                    // sort closest array
                    m.closestData.sort(sortByDistance);
                    t.setMarkers();
                    $('#loading').hide();
                },
                error: function (xhr, err) {
                    $('#loading').hide();
                }
            });
            return json;
        })();
    },
    ////////////////////
    //// SETMARKERS ////
    ////////////////////
    setMarkers: function () {
        m.mapLoader.addClass('hidden');
        // loop through the closest array
        for (var i = 0; i < m.closestData.length; i++) {
            if (m.closestData[i]) {
                var products = m.closestData[i].Products;
                if (products.some(function (o) { return o['ProductType'] === 'enogen'; })) {
                    var marker = new MarkerWithLabel({
                        position: m.closestData[i].position,
                        map: m.map,
                        icon: m.icon2,
                        draggable: false,
                        labelContent: parseInt(i) + 1,
                        labelAnchor: { x: 5, y: 40 },
                        labelClass: "map-label"
                    });
                } else {
                    var marker = new MarkerWithLabel({
                        position: m.closestData[i].position,
                        map: m.map,
                        icon: m.icon,
                        draggable: false,
                        labelContent: parseInt(i) + 1,
                        labelAnchor: { x: 0, y: 40 },
                        labelClass: "map-label"
                    });
                }
                m.markers.push(marker);
                m.positions.push(m.closestData[i].position);
                t.markerClick(marker, i);
            }
        }
        // reset zoom to fit all markers
        t.fitMapBounds();
        t.displayResults();
    },
    ////////////////////
    //// MARKERCLICK ////
    /////////////////////
    markerClick: function (marker, count) {
        google.maps.event.addListener(marker, "click", function () {
            var content = $('.result[data-count="' + count + '"]').clone();
            content.find('div:first').remove();
            if (!detailsShowing) {
                // get the position of the marker
                m.map.panTo(this.getPosition());
                m.infoWindow.setContent(content[0]);
                m.infoWindow.open(m.map, marker);
            }
        });
    },
    //////////////////////
    //// FITMAPBOUNDS ////
    //////////////////////
    fitMapBounds: function () {
        if (m.positions.length > 0) {
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < m.positions.length; i++) {
                bounds.extend(m.positions[i]);
            }
            m.map.fitBounds(bounds);
            // if fitBounds sets it closer than 12
            // bring it back to 12
            // to give context!
            if (m.map.getZoom() > 12) {
                m.map.setZoom(12);
            }
        }
    },
    //////////////////////////
    //// FITDETAILSBOUNDS ////
    //////////////////////////
    fitDetailBounds: function () {
        // hide the markers
        for (var i = 0; i < m.markers.length; i++) {
            m.markers[i].setVisible(false);
        }
        m.markers[detail].setVisible(true);
        m.map.setZoom(12);
        m.map.panTo(new google.maps.LatLng(m.closestData[detail].Latitude, m.closestData[detail].Longitude));
        if (winWidth >= 992) {
            var mapWidth = m.mapDiv.width();
            m.map.panBy(-mapWidth / 4, 0);
        }
    },
    ////////////////////////
    //// DISPLAYRESULTS ////
    ////////////////////////
    displayResults: function (start, end) {
        var html = '';
        // loop through closest array
        for (var i = 0; i < m.closestData.length; i++) {
            var c = m.closestData[i];
            var products = c.Products;
            var pinClass = '';
            if (products.some(function (o) { return o['ProductType'] === 'enogen'; })) {
                pinClass = ' enogen';
            }
            if (c) {
                html += '<div class="result' + pinClass + '" data-count="' + i + '">';
                // number
                html += '<div class="table-div"><div class="count"><span>' + (parseInt(i) + 1) + '</span></div></div>';
                // contact info
                html += '<div class="table-div"><h2>' + c.Name + '</h2>';
                html += '<span class="type">' + c.RetailerType + '</span>';
                if (c.FullAddress) {
                    html += '<p>' + c.FullAddress.AddressOne;
                    if (c.FullAddress.AddressOne != "") {
                        html += '<br>';
                    }
                    if (c.FullAddress.AddressTwo) {
                        html += c.FullAddress.AddressTwo;
                    }
                    html += '</p>';
                }
                if (c.Email) {
                    html += '<a class="send-email" target="_blank" href="mailto:' + c.Email + '">' + c.Email + '</a>';
                }
                if (c.Phone) {
                    html += '<a class="phone" target="_blank" href="tel:' + c.Phone + '">' + c.Phone + '</a>';
                }
                html += '</div>';
                // distance
                html += '<div class="table-div"><span class="distance">' + parseFloat(c.distance).toFixed(1) + '<br/> miles</span></div>';
                html += '</div>';
            }
        }

        g.resultsHolder.html(html);
    }
};

function sortByDistance(a, b) {
    return (a.distance - b.distance);
}

google.maps.event.addDomListener(window, 'load', resellerMap.init());

// Change zip
function limitText(field, maxChar) {
    var ref = $(field),
        val = ref.val();

    if (val.length >= maxChar) {
        ref.val(function () {
            return val.substr(0, maxChar);
        });
    }
}

$(function () {
    $('.user-location a').click(function (e) {
        e.preventDefault();
        $('.zip-overlay').css('display', 'flex');
        $('.zip-overlay input[type=text]')[0].focus();
    });

    $(document).on('keyup keypress', '.zip-overlay input[type=text]', function (e) {
        var val = $(this).val();
        if ($.isNumeric(val) === false) {
            $(this).val(val.slice(0, -1));
        }
        limitText(this, 5);

        if (e.keyCode == 13) {
            $('.zip-overlay input[type=submit]').trigger('click');
        }
    });

    $('.zip-overlay input[type=submit]').click(function (e) {
        e.preventDefault();
        var zip = $('.zip-overlay input[type=text]').val();
        getLocationFromZip(zip);
        resellerMap.init();
        $('.zip-overlay').hide();
    });
});

$win.resize(function () {
    winWidth = $win.width();

    if (winWidth >= 768) {

        // if the details aren't showing
        // refit the map bounds
        if (detailsShowing) {
            resellerMap.fitDetailBounds();
        } else {
            resellerMap.fitMapBounds();
        }

        // switch results display depending on win width
        if (winWidth >= 992) {
            if ($('#select').is(':visible')) {
                $('#results').removeClass('hidden');
            }
        } else {
            if ($('#select').is(':visible')) {
                $('#results').addClass('hidden');
            }
        }
    }
});