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

var locations = [
    {
        lat: 45.70575,
        lng: -96.118495,
        info: "Alberta, MN"
    }, {
        lat: 43.085,
        lng: -94.157,
        info: "Algona, IA"
    }, {
        lat: 41.701667,
        lng: -84.458056,
        info: "Alvordton, OH"
    }, {
        lat: 43.5438,
        lng: -97.50587,
        info: "Bridgewater, SD"
    }, {
        lat: 44.311151,
        lng: -96.704254,
        info: "Brookings, SD"
    }, {
        lat: 43.25551,
        lng: -82.9827,
        info: "Brown City, MI"
    }, {
        lat: 42.7593,
        lng: -85.5458,
        info: "Caledonia, MI"
    }, {
        lat: 40.064836,
        lng: -87.725775,
        info: "Catlin, IL"
    }, {
        lat: 40.744412,
        lng: -95.01827,
        info: "Clarinda, IA"
    }, {
        lat: 40.213768,
        lng: -88.914843,
        info: "Clinton, IL"
    }, {
        lat: 38.8561,
        lng: -92.1996,
        info: "Columbia, MO"
    }, {
        lat: 41.496,
        lng: -94.168,
        info: "Earlham, IA"
    }, {
        lat: 46.876439,
        lng: -96.596777,
        info: "Glyndon, MN"
    }, {
        lat: 41.218344,
        lng: -95.01828,
        info: "Griswold, IA"
    }, {
        lat: 39.754309,
        lng: -95.133926,
        info: "Hiawatha, KS"
    }, {
        lat: 38.4532,
        lng: -89.3652,
        info: "Highland, IL"
    }, {
        lat: 42.105571,
        lng: -97.153781,
        info: "Hoskins, NE"
    }, {
        lat: 37.9475278,
        lng: -95.390625,
        info: "Iola, KS"
    }, {
        lat: 43.271546,
        lng: -84.709023,
        info: "Ithaca, MI"
    }, {
        lat: 42.663839,
        lng: -88.958855,
        info: "Janesville, WI"
    }, {
        lat: 40.333653,
        lng: -104.722416,
        info: "La Salle, CO"
    }, {
        lat: 41.5616,
        lng: -88.5416,
        info: "Malta, IL"
    }, {
        lat: 39.076676,
        lng: -96.720878,
        info: "Manhattan, KS"
    }, {
        lat: 41.79803,
        lng: -95.94377,
        info: "Missouri Valley, IA"
    }, {
        lat: 40.461944,
        lng: -84.338333,
        info: "New Knoxville, OH"
    }, {
        lat: 41.410744,
        lng: -88.855816,
        info: "Ottawa, IL"
    }, {
        lat: 40.912148,
        lng: -88.642847,
        info: "Pontiac, IL"
    }, {
        lat: 38.126759,
        lng: -88.91746,
        info: "Rend Lake, IL"
    }, {
        lat: 40.589556,
        lng: -90.779203,
        info: "Sciota, IL"
    }, {
        lat: 38.464718,
        lng: -100.889242,
        info: "Scott City, KS"
    }, {
        lat: 40.13038,
        lng: -86.33863,
        info: "Sheridan, IN"
    }, {
        lat: 41.878990,
        lng: -93.704205,
        info: "Slater, IA"
    }, {
        lat: 42.2914,
        lng: -84.6045,
        info: "Springport, MI"
    }, {
        lat: 44.472,
        lng: -93.033,
        info: "Stanton, MN"
    }, {
        lat: 44.41419,
        lng: -89.32833,
        info: "Stevens Point, WI"
    }, {
        lat: 42.433972,
        lng: -92.320972,
        info: "Waterloo, IA"
    }, {
        lat: 39.912222,
        lng: -84.668056,
        info: "West Manchester, OH"
    }, {
        lat: 40.2575,
        lng: -87.0241,
        info: "West Point, IN"
    }, {
        lat: 41.0202,
        lng: -91.3232,
        info: "Yarmouth, IA"
    }, {
        lat: 40.94827,
        lng: -97.601965,
        info: "York, NE"
    }, {
        lat: 40.152442,
        lng: -102.72337,
        info: "Yuma, CO"
    }
];

var mapStyles = [{ "stylers": [{ "color": "#f8ffff" }] }, { "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "saturation": -55 }, { "lightness": 60 }] }, { "elementType": "geometry.fill", "stylers": [{ "color": "#d8dfdf" }, { "saturation": -50 }, { "lightness": 50 }] }, { "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#989898" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [{ "color": "#94c1cb" }] }, { "featureType": "administrative.province", "stylers": [{ "color": "#94c1cb" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }, { "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }, { "visibility": "off" }] }, { "featureType": "road", "stylers": [{ "color": "#a8adad" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#dcdcdc" }, { "weight": 1 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "road.highway", "stylers": [{ "color": "#b5b6b6" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#dadada" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#b0b0b0" }, { "saturation": -75 }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#c9c9c9" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#addfea" }, { "saturation": -10 }, { "lightness": 35 }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }],
    markers = [],
    marker, i,
    infowindow = new google.maps.InfoWindow({
        content: ""
    }),
    icon = {
        url: '../Images/global/icon-map-pin-orange.svg',
        scaledSize: new google.maps.Size(25, 35), // size
    };
iconHover = {
    url: '../Images/global/icon-map-pin-orange-hover.svg',
    scaledSize: new google.maps.Size(25, 35), // size
},
    iconFeat = {
        url: '../Images/global/icon-map-pin-green.svg',
        scaledSize: new google.maps.Size(25, 35), // size
    },
    iconFeatHover = {
        url: '../Images/global/icon-map-pin-green-hover.svg',
        scaledSize: new google.maps.Size(25, 35), // size
    };

if ($('#experience-sites .map-container').length) {
    initAIAMap();
}

function initAIAMap() {
    var UserZip, UserLat, UserLng, center;
    var UserLoc = readCookie('GHuserlocationreseller').split('_');
    UserZip = UserLoc[1].trim().split(' ')[1];
    UserLat = UserLoc[2];
    UserLng = UserLoc[3];
    center = new google.maps.LatLng(43.645061, -94.157815);
    //center = new google.maps.LatLng(UserLat, UserLng);

    var map = new google.maps.Map(document.getElementById('map'), {
        keyboardShortcuts: 0,
        zoom: 5,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: 0,
        scrollwheel: 0,
        navigationControl: 0,
        streetViewControl: 0,
        styles: mapStyles
    });

    $('#map-legend span').text(UserZip);

    for (i = 0; i < locations.length; i++) {
        if (locations[i].feat) {
            var markerIcon = iconFeat;
        } else {
            var markerIcon = icon;
        }
        marker = new google.maps.Marker({
            icon: markerIcon,
            title: locations[i].info,
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            animation: google.maps.Animation.DROP,
            featured: locations[i].feat,
            slug: locations[i].slug,
            map: map
        });
        markers.push(marker);
        google.maps.event.addListener(marker, 'click', function () {
            if (this.featured) {
                infowindow.setContent('<h5 class="iw-heading">' + this.title + '</h5><a href="/agronomy-in-action/' + this.slug + '">View Site</a>');
                infowindow.open(map, this);
            } else {
                infowindow.setContent('<h5 class="iw-heading">' + this.title + '</h5>');
                infowindow.open(map, this);
            }
        }), google.maps.event.addListener(marker, 'mouseover', function () {
            if (this.featured) {
                this.setIcon(iconFeatHover)
            } else {
                this.setIcon(iconHover);
            }
        }), google.maps.event.addListener(marker, 'mouseout', function () {
            if (this.featured) {
                this.setIcon(iconFeat)
            } else {
                this.setIcon(icon)
            }
        })
    }

    var cluster = new MarkerClusterer(map, markers, {
        styles: [{
            url: '../Images/global/icon-map-cluster-orange.svg',
            width: 50,
            height: 50,
            textSize: 14,
            textColor: '#d45f00'
        }],
        minimumClusterSize: 5
    });

    function find_closest_markers(n) {
        $('#agronomy-form .site-container label').hide();
        var distances = [];
        for (i = 0; i < markers.length; i++) {
            var d = google.maps.geometry.spherical.computeDistanceBetween(markers[i].position, center);
            distances[i] = {
                distance: d,
                marker: markers[i]
            }
        }
        closest_markers = distances.sort(function (a, b) { return a.distance - b.distance; }).slice(0, n);
        closest_markers.map(function (item) {
            $('#agronomy-form .site-container input[value="' + item.marker.title + '"]').parent().css('display', 'flex');
        });
    }
    find_closest_markers(7);

    $('a.show-all-sites').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.text() === 'See All Sites') {
            $this.text('See Closest Sites');
            $('#agronomy-form .site-container label').css('display', 'flex');
        } else {
            $this.text('See All Sites');
            find_closest_markers(7);
        }
    });

    google.maps.event.addListener(cluster, 'mouseover', function (map) {
        map.clusterIcon_.div_.firstChild.src = '../Images/global/icon-map-cluster-orange-hover.svg'
    }), google.maps.event.addListener(cluster, 'mouseout', function (map) {
        map.clusterIcon_.div_.firstChild.src = '../Images/global/icon-map-cluster-orange.svg'
    })
}

// Form functionality
if (readCookie('AIAFormSubmitted')) {
    $('#agronomy-form').hide();
}

var checkboxLimit = 3;
$('#agronomy-form input[type=checkbox]').on('change', function () {
    if ($(this).parent().parent().find('input:checked').length > 0) {
        $('#agronomy-form .error.sites').hide();
    } else {
        $('#agronomy-form .error.sites').show();
    }
    if ($(this).parent().parent().find('input:checked').length > checkboxLimit) {
        this.checked = false;
    }
});

$('#agronomy-form a.btn-default').click(function (e) {
    e.preventDefault();
    var fname = $('#agronomy-form input[name=fname]').val(),
        lname = $('#agronomy-form input[name=lname]').val(),
        email = $('#agronomy-form input[name=email]').val(),
        zipcode = $('#agronomy-form input[name=zipcode]').val(),
        aiaSites = $('#agronomy-form input[type=checkbox]:checked').map(function (_, el) {
            return $(el).val();
        }).get(),
        selectedSites = $('#agronomy-form input[type=checkbox]:checked').length,
        qpas = '{"QID2":"' + fname + '","QID3":"' + lname + '","QID4":"' + email + '","QID6":"' + zipcode + '","QID5":"' + aiaSites + '"}';
    surl = "https://new.qualtrics.com/SE";

    $('#agronomy-form .error').hide();

    $('#agronomy-form input[type=text]').on('keyup', function () {
        if (!$(this).val()) {
            $(this).next('.error').show();
        } else {
            $(this).next('.error').hide();
        }
    });

    $('#agronomy-form input[type=text]').each(function () {
        if (!$(this).val()) {
            $(this).next('.error').show();
        }
    });

    if ($('#agronomy-form input[type=text]').val() !== '' && selectedSites !== 0) {
        // submit form
        $.ajax({
            url: surl,
            data: {
                "Q_PostResponse": "true",
                "SurveyID": "SV_dgqO3ybxUKakOd7",
                "QR": qpas
            },
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "jsonpcallback"
        });

        createCookie('AIAFormSubmitted', true, 365);
        $('.thank-you').show();
        $('.form-container').hide();
    } else {
        if (selectedSites === 0) {
            $('#agronomy-form .error.sites').show();
        }
    }
});

$('.state-button').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('expanded');
    $this.next('.state-container').slideToggle();
});