$(function () {
    // Qualtrics Form Integration 
    var becomeAdvisor;
    

    // form label functionality

    $('#bsa-form input').focusin(function () {
        $(this).siblings('label').addClass('focused');
    }).focusout(function () {
        var emptyVal = $(this).val();
        var inputField = $(this).attr('name');
        if (emptyVal === "" || emptyVal === null) {    
            $(this).addClass('error').siblings('label').removeClass('focused');
        }
    });




    $('#bsa-submit').click(function (e) {
        e.preventDefault();
        var advisorFirstName = $('#bsa-form input[name=firstname]').val();
        var advisorLastName = $('#bsa-form input[name=lastname]').val();
        var advisorFarmName = $('#bsa-form input[name=farmname]').val();
        var advisorAddress = $('#bsa-form input[name=address]').val();
        var advisorCity = $('#bsa-form input[name=city]').val();
        var advisorState = $('#bsa-form input[name=state]').val();
        var advisorEmail = $('#bsa-form input[name=email]').val();
        var advisorPhone = $('#bsa-form input[name=phone]').val();
        var advisorZip = $('#bsa-form input[name=zip]').val();
        var emailVal = validateEmail(advisorEmail);
        var zipVal = validateZip(advisorZip);
        var valCount = [];


        if (advisorFirstName === '' || advisorFirstName === 'First Name') {
            $('#bsa-form input[name=firstname]').addClass('error');
            valCount.push(1);
        }

        if (advisorLastName === '' || advisorLastName === 'Last Name') {
            $('#bsa-form input[name=lastname]').addClass('error');
            valCount.push(1);
        }

        if (advisorFarmName === '' || advisorFarmName === 'Farm Name') {
            $('#bsa-form input[name=farmname]').addClass('error');
            valCount.push(1);
        }

        if (advisorAddress === '' || advisorAddress === 'Address') {
            $('#bsa-form input[name=address]').addClass('error');
            valCount.push(1);
        }

        if (advisorCity === '' || advisorCity === 'City') {
            $('#bsa-form input[name=city]').addClass('error');
            valCount.push(1);
        }

        if (advisorState === '' || advisorState === 'State') {
            $('#bsa-form input[name=state]').addClass('error');
            valCount.push(1);
        }

        if (emailVal === false || advisorEmail === 'Email') {
            $('#bsa-form input[name=email]').addClass('error');
            valCount.push(1);
        }

        if (advisorPhone === '' || advisorPhone === 'Phone Number') {
            $('#bsa-form input[name=phone]').addClass('error');
            valCount.push(1);
        }

        if (advisorZip === '' || zipVal === false || advisorZip === 'Zip Code') {
            $('#bsa-form input[name=zip]').addClass('error');
            valCount.push(1);
        }


        $.getJSON('../Scripts/agrazone-zips.json', function (data) {
            region = data.filter(function (region) {
                return region.zipcode.indexOf(advisorZip) > -1;
            });
        }).done(function () {
            if (region[0].name === 'unsupported') {
                $('#bsa-form input[name=zip]').addClass('error');
                $('#bsa-form .unsupported-region').removeClass('hidden');
            } else if (valCount.length === 0 && region[0].name != 'unsupported') {
                // form is valid run ajax call to Qualtrics ;
                var qpas = '{"QID1":"' + advisorFirstName + '","QID2":"' + advisorLastName + '","QID3":"' + advisorFarmName + '","QID4":"' + advisorAddress + '","QID5":"' + advisorCity + '","QID6":"' + advisorState + '","QID7":"' + advisorZip + '","QID8":"' + advisorEmail + '","QID9":"' + advisorPhone + '"}';
                var surl = "https://new.qualtrics.com/SE";
                $.ajax({
                    url: surl,
                    data: {
                        "Q_PostResponse": "true",
                        "SurveyID": "SV_1zG561Ea7B84u8d",
                        "QR": qpas
                    },
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "jsonpcallback"
                });
                var dataLayer = window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'formSuccess'
                });
                $('#bsa-form .thank-you').removeClass('hidden');
            }

        });

    });
});




    


function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
}

function validateZip(zip) {
        //var re = /^[0-9]*(?:\.\d{1,2})?$/;    // allow only numbers [0-9] 
        var re = /^-?\d+$/;
        return re.test(zip);
}