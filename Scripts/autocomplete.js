
//Crop Pages & Yield Result
var autocomplete, autocompleteRegion;

//Set the location information
var zipcode = document.getElementById('zipCode').textContent;
$('#searchinput').val(zipcode);

var place;
var options = {
    componentRestrictions: { 'country': 'us' },
    types: ['(regions)'] // (cities) filter based on country
};

//Autocomplete variables
var input = document.getElementById('searchinput');

//Autocomplete variables - Region Popup
var inputRegion = document.getElementById('searchinput-region');

$(document).ready(function () {
    var pac_input = document.getElementById('searchinput');
    var pac_inputregion = document.getElementById('searchinput-region');

    if (input) {
        autocomplete = new google.maps.places.Autocomplete(input, options);
        autocomplete.setFields(['address_components', 'geometry', 'formatted_address']);
    }

    //Autocomplete variables - Region Popup
    if (inputRegion) {
        autocompleteRegion = new google.maps.places.Autocomplete(inputRegion, options);
        autocompleteRegion.setFields(['address_components', 'geometry', 'formatted_address']);
    }

    if (pac_input)
        pac_input.addEventListener('click', function () {
            pac_input.value = '';
        });

    if (pac_inputregion)
        pac_inputregion.addEventListener('click', function () {
            pac_inputregion.value = '';
        });

    if (pac_input)
        pacSelectFirst(pac_input);
    if (pac_inputregion)
        pacSelectFirst(pac_inputregion);

    function pacSelectFirst(input) {
        // store the original event binding function
        var _addEventListener = (input.addEventListener) ? input.addEventListener : input.attachEvent;

        function addEventListenerWrapper(type, listener) {
            // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
            // and then trigger the original listener.
            if (type === "keydown") {
                var orig_listener = listener;
                listener = function (event) {
                    var suggestion_selected = $(".pac-item-selected").length > 0;
                    if (event.which === 13 && !suggestion_selected) {
                        var simulated_downarrow = $.Event("keydown", { keyCode: 40, which: 40 });
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

    }

    $('#yieldResults, #region-submit').click(function (event) {

        var inputValue = (event.target.id === 'region-submit') ? $(pac_inputregion).val() : $(pac_input).val();

        if (inputValue === '' || inputValue.length < 5) {
            if (event.target.id === 'region-submit') {
                $('.error-unsupported').show();
                $('.error-unsupported').html('Please enter a valid 5-digit zip code to change the region.');
            }
            else {
                $("#locationError").show();
                $("#locationError").html('Please enter a valid 5-digit zip code to find Yield results.');
            }

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

                (event.target.id === 'region-submit') ? pac_inputregion.dispatchEvent(keydown) : pac_input.dispatchEvent(keydown);
            }
            else {
                //Location is already loaded
                if (event.target.id === 'yieldResults') {
                    fnYieldRedirect();
                }
            }

        }
    });
});