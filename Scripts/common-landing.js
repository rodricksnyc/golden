$(document).ready(function () {  
    $("#aspnetForm").keypress(function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    });

    document.addEventListener('DOMNodeInserted', function (event) {
        var target = $(event.target);
        if (target.hasClass('pac-item')) {
            target.html(target.html().replace(/, United States<\/span>$/, "</span>"));
        }
    });

    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        autoCompletevalue = input.value;
        inputValue = input.value;
        if ((inputValue.indexOf(',') > 0) && inputValue !== '') {
            res = inputValue.split(','),
                result = res[0] + ',' + res[1];
            input.value = result;
            var isSupportedRegion = getSupportedRegion(inputValue.match(/\d+/)[0]) !== 'unsupported' ? true : false;
            if (isSupportedRegion) {
                fnSearch();
            }
            else {
                $("#locationError").show();
                $("#locationError").html('We’re sorry. Golden Harvest is not available in this area. Please try another zip code or contact a Golden Harvest Seed Advisor<sup>&trade;</sup> for more information.');
            }
        }
        else {
            $("#locationError").show();
            $("#locationError").html('Please enter a 5-digit zip code to find Yield results.');
        }
    });
});

function fnSearch() {
    var location = autocomplete.getPlace();
    if (location !== undefined) {
        inputValue = input.value;
        document.getElementById('mainBody_hdnLocation').value = setLocationFromPlaces(location);
        fnYieldRedirect();
    }
}