
var hasLogSet = readCookie('GHuserLoc'),
    hasLocalSet = localStorage.getItem('userLoc'),
    userLocArray = {},
    region,
    dCity,
    dState,
    dCountry,
    dZip,
    dLat,
    dLong,
    dRegion,
    isRegionUnsupported = false,
    dCounty,
    GHUserRegionZone,
    oldUserLoc,
    geoLocationAPIUrl = 'https://json.geoiplookup.io',
    //geoLocationAPIUrl = 'http://' + window.location.host + '/location.json';
    zipCodeAPIKey = $("#hdnzipCodeAPIKey").val(), // Added API Key from web.config file
    defaultLocJson = { 'city': 'Slater', 'state': 'IA', 'country': 'United States', 'zip': '50244', 'lat': '41.8524700', 'long': '-93.6319131', 'county': 'Story' },
    defaultLocCookie = 'Slater_IA 50244_41.8524700_-93.6319131_';
defaultRegionCookie = 'Eastern IA/Northern IL';
defaultRegionZone = '4';
contactCity = "";
contactState = "";
contactCountry = "";

if (hasLogSet == null) {
    // no cookie
    getUserLocationfromIP();
} else {
    // have cookie
    var userLocation = JSON.parse(readCookie('GHuserLoc'));
    dCity = userLocation.city;
    dState = userLocation.state;
    dCountry = userLocation.country;
    dZip = userLocation.zip;
    dLat = userLocation.lat;
    dLong = userLocation.long;
    dCounty = userLocation.county;
    getRegion(false, dZip);
}


// create, read, and erase cookie functions
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

function eraseCookie(name) {
    createCookie(name, "", -1);
}

// get state abbr from name
function abbrState(input, to) {
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr') {
        if (input != undefined)
            input = input.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        else
            input = "";
        for (i = 0; i < states.length; i++) {
            if (states[i][0] == input) {
                return (states[i][1]);
            }
        }
    } else if (to == 'name') {
        input = input.toUpperCase();
        for (i = 0; i < states.length; i++) {
            if (states[i][1] == input) {
                return (states[i][0]);
            }
        }
    }
}

function getUserLocationfromIP() {
    $.ajax({
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        url: geoLocationAPIUrl,
        async: false,
        error: function (error) {
            console.log(error);
        },
        success: function (data) {
            dCity = data.city;
            dCity = (dCity != undefined) ? dCity.replace(/\([^()]*\)/g, '') : "";
            dCity = dCity.trim();
            userLocArray['city'] = dCity;
            dState = abbrState(data.region, 'abbr');
            userLocArray['state'] = dState;
            dCountry = data.country_name;
            userLocArray['country'] = dCountry;
            dZip = data.postal_code;
            userLocArray['zip'] = dZip;
            dLat = data.latitude;
            userLocArray['lat'] = dLat;
            dLong = data.longitude;
            userLocArray['long'] = dLong;
            dCounty = data.district;
            userLocArray['county'] = dCounty;

        }
    }).done(function () {
        if (dCountry.toLowerCase() !== 'united states') {
            localStorage.setItem('userLoc', JSON.stringify(defaultLocJson));
            createCookie('GHuserLoc', JSON.stringify(defaultLocJson), 365);
            createCookie('GHuserlocationreseller', defaultLocCookie, 365);
            getRegion(false, dZip);
        }
        else {
            localStorage.setItem('userLoc', JSON.stringify(userLocArray));
            createCookie('GHuserLoc', JSON.stringify(userLocArray), 365);
            oldUserLoc = dCity + '_' + dState + ' ' + dZip + '_' + dLat + '_' + dLong + '_';
            createCookie('GHuserlocationreseller', oldUserLoc, 365);
            getRegion(false, dZip);
        }
    });

}

function getLocationFromZip(z) {
    localStorage.removeItem('userLoc');
    var zipUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + z + '&sensor=true' + "&key=AIzaSyBfFdOgJV2xzEd030B9c-PEkCxzfJEisKY";
    $.ajax({
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        url: zipUrl,
        async: false,
        error: function (error) {
            console.log(error);
        }
    }).done(function (data) {
        if (data.status !== 'OK') {
            localStorage.setItem('userLoc', JSON.stringify(defaultLocJson));
            createCookie('GHuserLoc', JSON.stringify(defaultLocJson), 365);
            createCookie('GHuserlocationreseller', defaultLocCookie, 365);
        } else {
            var city = "";
            var state = "";
            var zipCode = "";
            var latitude = "";
            var longitude = "";
            var county = "";
            var country = "";
            var address = data.results[0].address_components;
            for (var z = 0; z < address.length; z++) {
                var object = address[z],
                    type = object.types[0];
                if (type === 'locality') {
                    city = object.long_name;
                }
                if (type === 'administrative_area_level_1') {
                    state = object.short_name;
                }
                if (type === 'administrative_area_level_2') {
                    county = object.long_name;
                }
                if (type === 'country') {
                    country = object.long_name;
                }
                if (type === 'postal_code') {
                    zipCode = object.long_name;
                }
            }
            latitude = data.results[0].geometry.location.lat;
            longitude = data.results[0].geometry.location.lng;

            dCity = city.replace(/\([^()]*\)/g, '');
            userLocArray['city'] = dCity;
            dState = state;
            userLocArray['state'] = dState;
            dCountry = country;
            userLocArray['country'] = dCountry;
            dZip = zipCode;
            userLocArray['zip'] = dZip;
            dLat = latitude;
            userLocArray['lat'] = dLat;
            dLong = longitude;
            userLocArray['long'] = dLong;
            dCounty = county;
            userLocArray['county'] = dCounty;
            oldUserLoc = dCity + '_' + dState + ' ' + dZip + '_' + dLat + '_' + dLong + '_';
            createCookie('GHuserlocationreseller', oldUserLoc, 365);
            createCookie('GHuserLoc', JSON.stringify(userLocArray), 365);
            createCookie('userlocationset', '1', 365);
            localStorage.setItem('userLoc', JSON.stringify(userLocArray));
        }
    });
}

function getCityStateFromZip(postalCode) {
    var zipUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + postalCode + '&sensor=true' + "&key=AIzaSyBfFdOgJV2xzEd030B9c-PEkCxzfJEisKY";
    $.ajax({
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        url: zipUrl,
        async: false,
        error: function (error) {
            console.log(error);
        }
    }).done(function (data) {
        if (data.status === 'OK') {
            var address = data.results[0].address_components;
            for (var z = 0; z < address.length; z++) {
                var object = address[z],
                    type = object.types[0];
                if (type === 'locality') {
                    contactCity = object.long_name;
                }
                if (type === 'administrative_area_level_1') {
                    contactState = object.short_name;
                }
                if (type === 'country') {
                    contactCountry = object.long_name;
                }
            }
            contactCity.replace(/\([^()]*\)/g, '');
        }
    });
}

// checks for empty objects
function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

//// everything below here was added just for Goldenharvest seeds
function getRegion(isMapClicked, userZip) {
    isMapClicked = (isMapClicked != undefined) ? isMapClicked : false;
    userZip = (userZip != null && userZip != 'undefined') ? userZip : dZip;
    dRegion = getSupportedRegion(userZip);
    if (dRegion === 'unsupported') {
        isRegionUnsupported = true;
        localStorage.setItem('userLoc', JSON.stringify(defaultLocJson));
        createCookie('GHuserLoc', JSON.stringify(defaultLocJson), 365);
        createCookie('GHuserlocationreseller', defaultLocCookie, 365);
        createCookie('GHuserregion', defaultRegionCookie, 365);
        dRegion = defaultRegionCookie;
        GHUserRegionZone = defaultRegionZone;
        $('.error-unsupported').show();
        $('.error-unsupported').html('We’re sorry. Golden Harvest is not available in this area. Please try another zip code or contact a Golden Harvest Seed Advisor<sup>&trade;</sup> for more information.');
        $('.region-overlay-cont').animate({
            scrollTop: $('.error-unsupported').offset().top
        }, 2000);
    }
    else {
        isRegionUnsupported = false;
        createCookie('GHuserregion', dRegion, 365);
        GHUserRegionZone = region[0].zone;
        if (isMapClicked === true) {
            getLocationFromZip(userZip);
            if (isPageReload() === true)
                window.location.reload();
            else {
                setLocationValue();
                $('.region-overlay-close').trigger("click");
            }
        }
    }
    setRegion();
    $('input#region-' + GHUserRegionZone).prop('checked', true);
}

function setRegion() {
    $('.map-container .land:not(.unsupported)').attr('class', 'land');
    $('.map-container .land[data-name="' + GHUserRegionZone + '"]:not(.unsupported)').attr('class', 'land active');
    $('span.region-zip').text(dZip);
    $('.regional-info span').html('<span class="hidden-xs">Viewing from</span> ' + dRegion);
}

$(function () {
    var $regionDD;
    var regDefaultLoc = [{ "zone": "1a", "region": "Western High Plains", "city": "Fort Collins", "state": "CO", "zip": 80521, "lat": 40.5958347, "long": -105.1430199, "country": "united states", "county": "LARIMER" }, { "zone": "1b", "region": "Central High Plains", "city": "Liberal", "state": "KS", "zip": 67901, "lat": 37.12764, "long": "-100.95888", "country": "united states", "county": "SEWARD" }, { "zone": "1c", "region": "Eastern High Plains", "city": "Iuka", "state": "KS", "zip": 67066, "lat": 37.757553, "long": -98.747678, "country": "united states", "county": "Pratt" }, { "zone": "2", "region": "Southern IA/Northern MO", "city": "Princeton", "state": "MO", "zip": 64673, "lat": 40.368466, "long": -93.584226, "country": "united states", "county": "Mercer" }, { "zone": "3", "region": "Southern IL/Southern IN", "city": "Vincennes", "state": "IN", "zip": 47591, "lat": 38.640518, "long": -87.502987, "country": "united states", "county": "Knox" }, { "zone": "4", "region": "Eastern IA/Northern IL", "city": "Bettendorf", "state": "IA", "zip": 52722, "lat": 41.565051, "long": -90.455908, "country": "united states", "county": "Scott" }, { "zone": "5", "region": "South and Eastern NE", "city": "Grand Island", "state": "NE", "zip": 68801, "lat": 40.941634, "long": -98.274321, "country": "united states", "county": "Hall" }, { "zone": "6", "region": "Missouri/East Kansas", "city": "Joplin", "state": "MO", "zip": 64801, "lat": 37.119351, "long": -94.496787, "country": "united states", "county": "Jasper" }, { "zone": "7a", "region": "Great Lakes North", "city": "Okemos", "state": "MI", "zip": 48864, "lat": 42.704994, "long": -84.402071, "country": "united states", "county": "Ingham" }, { "zone": "7b", "region": "Great Lakes East", "city": "Lafayette", "state": "IN", "zip": 47901, "lat": 40.417615, "long": -86.887842, "country": "united states", "county": "Tippecanoe" }, { "zone": "7c", "region": "Great Lakes West", "city": "Springfield", "state": "OH", "zip": 45501, "lat": 39.9242, "long": -83.8087, "country": "united states", "county": "Clark" }, { "zone": "8", "region": "Northwest IA", "city": "Storm Lake", "state": "IA", "zip": 50588, "lat": 42.655211, "long": -95.160984, "country": "united states", "county": "Buena Vista" }, { "zone": "9a", "region": "West NE Plains", "city": "North Platte", "state": "NE", "zip": 69101, "lat": 41.111976, "long": -100.784164, "country": "united states", "county": "Lincoln" }, { "zone": "9b", "region": "Eastern NE Plains", "city": "Wayne", "state": "NE", "zip": 68787, "lat": 42.213656, "long": -97.017923, "country": "united states", "county": "Wayne" }, { "zone": "10a", "region": "Red River Valley", "city": "Grand Forks", "state": "ND", "zip": 58201, "lat": 47.87222, "long": -97.12256, "country": "united states", "county": "Grand Forks" }, { "zone": "10b", "region": "MN/WI", "city": "Esko", "state": "MN", "zip": 55733, "lat": 46.711912, "long": -92.364742, "country": "united states", "county": "Carlton" }, { "zone": "10c", "region": "Western ND", "city": "Manning", "state": "ND", "zip": 58642, "lat": 47.183558, "long": -102.86356, "country": "united states", "county": "Dunn" }, { "zone": "11", "region": "SD/MN", "city": "Huron", "state": "SD", "zip": 57350, "lat": 44.379236, "long": -98.175826, "country": "united states", "county": "Beadle" }, { "zone": "12", "region": "Upper Midwest", "city": "La Crosse", "state": "WI", "zip": 54601, "lat": 43.795456, "long": -91.153796, "country": "united states", "county": "La Crosse" }, { "zone": "13a", "region": "13a", "city": "Boise", "state": "ID", "zip": 83701, "lat": 43.6139, "long": -116.2025, "country": "united states", "county": "Ada" }, { "zone": "13b", "region": "13b", "city": "Blythe", "state": "CA", "zip": 92225, "lat": 33.584304, "long": -114.626252, "country": "united states", "county": "Riverside" }, { "zone": "14", "region": "14", "city": "Scranton", "state": "PA", "zip": 18503, "lat": 41.409477, "long": -75.667708, "country": "united states", "county": "Lackwanna" }, { "zone": "15a", "region": "15a", "city": "Wolfforth", "state": "TX", "zip": 79382, "lat": 33.463189, "long": -102.0182, "country": "united states", "county": "Lubbock" }, { "zone": "15b", "region": "15b", "city": "Memphis", "state": "TN", "zip": 37501, "lat": 35.1496, "long": -90.0487, "country": "united states", "county": "Shelby" }, { "zone": "16", "region": "15b", "city": "Augusta", "state": "GA", "zip": 30999, "lat": 33.4667, "long": -82.0167, "country": "united states", "county": "Richmond" }, { "zone": "17", "region": "Southwest", "city": "Texas", "state": "TX", "zip": 75209, "lat": 32.8538717, "long": -96.8190224, "country": "united states", "county": "Dallas" }];

    // region overlay
    $regionDD = $('.region-form select').select2({
        minimumResultsForSearch: -1,
        placeholder: 'Select a region'
    });
    $('.regional-info, .learnRegions, .zip-container span').click(function () {
        $('.error-unsupported').hide();
        $('#region-overlay').show();
        $('body').css('overflow-y', 'hidden');
        $('header').removeClass('mobile-open');
        $('nav').removeAttr('style');
    });
    $('.region-overlay-close').click(function () {
        $('#region-overlay').hide();
        $(".region-form input[type='text']").val("");
        $('body, #pc-overflow').removeAttr('style');

    });

    $regionDD.on('change', function (e) {
        var selectedRegion = $(this).val();
        var regionNum;
        for (i = 0; i < regDefaultLoc.length; i++) {
            if (regDefaultLoc[i].zone === selectedRegion) {
                regionNum = i;
            }
        }

        var newZip = regDefaultLoc[regionNum].zip;
        dZip = newZip.toString();
        getRegion(true, dZip);

    });
    $('#region_map .land:not(.unsupported)').click(function () {
        var clickedRegion = $(this).attr('data-name');
        createCookie('userlocationset', '1', 365);
        $regionDD.val(clickedRegion).trigger('change');
    });

    google.maps.event.addListener(autocompleteRegion, 'place_changed', function () {
        autoCompletevalue = inputRegion.value;
        inputValue = inputRegion.value;
        if ((inputValue.indexOf(',') > 0) && inputValue !== '') {
            res = inputValue.split(','),
                result = res[0] + ',' + res[1];

            inputRegion.value = result;
            createCookie('userlocationset', '1', 365);
            $("#locationError").html();
            $("#locationError").hide();
            setLocationFromPlaces(autocompleteRegion.getPlace());
            getRegion(true, res[1].match(/\d+/)[0]);
        }
        else {
            $('.error-unsupported').show();
            $('.error-unsupported').html('Please enter a valid 5-digit zip code to change the region.');
        }
    });

});

function setLocationFromPlaces(newLocation) {
    var zipCode = "";
    var city = "";
    var state = "";
    var latitude = "";
    var longitude = "";
    var county = "";
    var country = "";
    var returnZipcode = "";

    var locationResult = newLocation.address_components;
    for (var z = 0; z < locationResult.length; z++) {
        var object = locationResult[z],
            type = object.types[0];
        if (type === 'postal_code') {
            zipCode = object.long_name;
        }
        if (type === 'locality') {
            city = object.long_name;
        }
        if (type === 'administrative_area_level_1') {
            state = object.short_name;
        }
        if (type === 'administrative_area_level_2') {
            county = object.long_name;
        }
        if (type === 'country') {
            country = object.long_name;
        }
    }
    latitude = newLocation.geometry.location.lat();
    longitude = newLocation.geometry.location.lng();

    dCity = city;
    dCity = (dCity !== undefined) ? dCity.replace(/\([^()]*\)/g, '') : "";
    dCity = dCity.trim();
    userLocArray['city'] = city;
    dState = state;
    userLocArray['state'] = dState;
    dCountry = country;
    userLocArray['country'] = dCountry;
    dZip = zipCode;
    userLocArray['zip'] = dZip;
    dLat = latitude;
    userLocArray['lat'] = dLat;
    dLong = longitude;
    userLocArray['long'] = dLong;
    dCounty = county;
    userLocArray['county'] = dCounty;

    oldUserLoc = dCity + '_' + dState + ' ' + dZip + '_' + dLat + '_' + dLong + '_';
    createCookie('GHuserlocationreseller', oldUserLoc, 365);
    createCookie('GHuserLoc', JSON.stringify(userLocArray), 365);
    createCookie('userlocationset', '1', 365);
    localStorage.setItem('userLoc', JSON.stringify(userLocArray));

    returnZipcode = zipCode;

    return returnZipcode;
}

function setLocationValue() {
    var userLocation = JSON.parse(readCookie('GHuserLoc'));
    var address = userLocation.city + ', ' + userLocation.state + ' ' + userLocation.zip;
    // set location text box value in corn and soybean landing page 
    $('#searchinput').val(address);
    // set location text box value in yeild result pages
    $('#yr-location').val(address);
    // set location text box value in seed advisor page
    $("#location").val(address);
    $(".filter-condensed .sf-zip").text(userLocation.zip);
}

function isPageReload() {
    var reloadPages = ["/agronomy", "/agronomy-in-action/all-sites", "/corn/yield-results", "/soybean/yield-results", "/silage/yield-results", "/", "/default.aspx", "/corn-hybrid-insights", "/corn-hybrid-insights/agronomist"];
    return reloadPages.indexOf(window.location.pathname) >= 0 ? true : false;
}

function getSupportedRegion(userZip) {
    var regionName = '';
    $.ajaxSetup({
        async: false
    });

    $.getJSON(window.location.origin + '/Scripts/agrazones-2020.json', function (data) {
        console.log(data);
        region = data.filter(function (region) {
            return region.zipcode.indexOf(userZip) > -1;
        });
        if (region.length <= 0) {
            region = data.filter(function (region) {
                return region.zipcode.indexOf(defaultLocJson.zip) > -1;
            });
        }
    }).done(function () {
        regionName = region[0].name;
    });

    $.ajaxSetup({
        async: true
    });

    return regionName;
}