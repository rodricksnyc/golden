$(function () {
    function handleFileSelect(evt) {
        var files = evt.target.files;
        var f = files[0];
        var val = $(this).val().toLowerCase(),
            regex = new RegExp("(.*?)\.(jpeg|jpg|png)$");
        var size = 0;

        $('#size_error').hide();
        $('#type_error').hide();

        if (typeof (f) != 'undefined') {
            size = parseFloat(f.size / 1024).toFixed(2);
        }
        if (size > 500) {
            $(this).val('');
            $("#size_error").show();
        } else if (!(regex.test(val))) {
            $(this).val('');
            $("#type_error").show();
        } else {
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    window.sessionStorage.setItem('logoImg', e.target.result);
                };
            })(f);
            reader.readAsDataURL(f);
        }
    }

    document.getElementById('logo-upload').addEventListener('change', handleFileSelect, false);

    var selCrop = $('input[name="crop"]:checked').val()
    $('input:radio[name=crop]').click(function () {
        selCrop = $('input[name="crop"]:checked').val()
        $("#soy_mat_error").hide();
        $("#crop_error").hide();
        if (selCrop == 'corn' || selCrop == 'enogen corn') {
            document.getElementById('txtFrom').value = '105';
            document.getElementById('txtTo').value = '115';
        }
        else if (selCrop == 'soybean') {
            document.getElementById('txtFrom').value = '2.5';
            document.getElementById('txtTo').value = '3.5';
        }
        window.sessionStorage.removeItem('selProducts');
    });

    $('input[type="text"]').on('keypress', function (e) {
        if (e.keyCode == 13) { e.preventDefault(); };
    });

    document.getElementById('txtFrom').addEventListener("focus", maturityValueCheck);
    document.getElementById('txtTo').addEventListener("focus", maturityValueCheck);

    var charLimit = $('#cust-msg').attr('maxlength');

    $('#cust-msg').keyup(function (e) {
        var currLength = $(this).val().length;

        $('.char-counter span').text(charLimit - currLength);
    });

    $('button.sg-submit').click(function (e) {
        e.preventDefault();
        var selCrop = $('input[name="crop"]:checked').val(),
            matMin = $('input[name="mat-min"]').val(),
            matMax = $('input[name="mat-max"]').val(),
            guideTitle = $('input#guide-title').val(),
            customMsg = $('textarea#cust-msg').val(),
            fullName = $('input#full-name').val(),
            phoneNum = $('input#phone').val(),
            email = $('input#email').val(),
            location = $('input#location').val();

        $('.error_msg').hide();

        var formValues = [];
        formValues.push(selCrop, matMin, matMax, guideTitle, customMsg, fullName, phoneNum, email, location);

        if (selCrop == null) {
            document.getElementById('crop_selection').focus();
            $("#crop_error").show();
            $('html, body').animate({
                scrollTop: $('.sg-form-section:nth-child(2)').offset().top - 100
            }, 500);
        } else {
            var flag;
            if (matMin != '' || matMax != '') {
                if (selCrop == 'corn' || selCrop == 'enogen corn') {
                    flag = fnMaturityValidationCorn(matMin, matMax, selCrop);
                } else {
                    flag = fnMaturityValidationSoy(matMin, matMax);
                }
            } else {
                flag = true;
            }

            if (validateEmail(email) && validatePhone(phoneNum) && flag) {
                window.sessionStorage.setItem('formValues', JSON.stringify(formValues));
                if (selCrop == 'corn' || selCrop == 'enogen corn') {
                    window.location.href = ('/corn/product-finder');
                }
                else if (selCrop == 'soybean') {
                    window.location.href = ('/soybean/product-finder');
                }
            } else {
                if (!validatePhone(phoneNum))
                    $('#phone_error').show();

                if (!validateEmail(email))
                    $('#email_error').show();

                $('html, body').animate({
                    scrollTop: $('.error_msg:visible:first').offset().top - 100
                }, 500);
            }
        }
    });

    // Show tool-tip
    $('span.tool-tip').click(function () {
        $('.tool-tip-container').slideToggle();
    });

    // Check for existing form data
    if (window.sessionStorage.getItem('formValues')) {
        var formValues = JSON.parse(window.sessionStorage.getItem('formValues')),
            selCrop = formValues[0],
            matMin = formValues[1],
            matMax = formValues[2],
            guideTitle = formValues[3],
            guideMsg = formValues[4],
            fullName = formValues[5],
            phoneNum = formValues[6],
            emailAddr = formValues[7],
            location = formValues[8],
            guideLogo = window.sessionStorage.getItem('logoImg'),
            selProducts = JSON.parse(window.sessionStorage.getItem('selProducts'));

        $('input[value="' + selCrop + '"]').attr('checked', 'checked');
        $('input[name="mat-min"]').val(matMin);
        $('input[name="mat-max"]').val(matMax);

        if (guideTitle) {
            $('input#guide-title').val(guideTitle);
        }
        if (guideLogo) {
            $('#logo-upload').hide();
        }
        if (fullName) {
            $('input#full-name').val(fullName)
        }
        if (phoneNum) {
            $('input#phone').val(phoneNum);
        }
        if (emailAddr) {
            $('input#email').val(emailAddr);
        }
        if (location) {
            $('input#location').val(location)
        }
        if (guideMsg) {
            $('textarea#cust-msg').val(guideMsg);

            var currLength = guideMsg.length;
            $('.char-counter span').text(charLimit - currLength);
        }
    }

});

function validateEmail(email) {
    var re = /(^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$)|(^$)/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phoneNum) {
    var re = /(^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$)|(^$)/;
    return re.test(String(phoneNum));
}

function isNumber(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        evt.preventDefault();
    return true;
}

function isNumericSoy(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        evt.preventDefault();
    return true;
}

function maturityValueCheck() {
    var selCrop = $('input[name="crop"]:checked').val()
    if (selCrop == null) {
        document.getElementById('crop_selection').focus();
        $("#crop_error").show();
    }
    else if (selCrop == 'corn' || selCrop == 'enogen corn') {
        document.getElementById('txtFrom').removeEventListener("blur", isDecimalNumber);
        document.getElementById('txtTo').removeEventListener("blur", isDecimalNumber);

        document.getElementById('txtFrom').addEventListener("keypress", isNumber);
        document.getElementById('txtTo').addEventListener("keypress", isNumber);
    }
    else if (selCrop == 'soybean') {
        document.getElementById('txtFrom').removeEventListener("keypress", isNumber);
        document.getElementById('txtTo').removeEventListener("keypress", isNumber);

        document.getElementById('txtFrom').addEventListener("blur", isDecimalNumber);
        document.getElementById('txtTo').addEventListener("blur", isDecimalNumber);
    }
}

function isDecimalNumber(evt) {
    // debugger;
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && ((charCode < 48 || charCode > 57) && charCode != 46)) {
        return false;
    }
    else {
        var input = this.value;
        if (input >= 0.000 && input <= 9.9) {
            $("#soy_mat_error").hide();
            $('button.sg-submit').prop('disabled', false);
            return true;
        } else {
            $("#soy_mat_error").show();
            $('button.sg-submit').prop('disabled', true);
            return false;
        }

    }
}

function fnMaturityValidationCorn(matMin, matMax, crop) {
    var fromValue = matMin;
    var toValue = matMax;
    var urlPath = (crop == "enogen corn") ? true : false;
    dataLayer.push({ 'event': 'productFinder', 'eventCategory': 'Find Results by Maturity', 'eventLabel': fromValue + ' - ' + toValue + ' Days' });
    if (fromValue.match(/^[0-9]\d*?$/) && toValue.match(/^[0-9]\d*?$/)) {
        $.ajax({
            selectFirst: true,
            url: window.location.protocol + "//" + window.location.host + '/CornLanding/Corn.aspx/SetSessionMaturityDays',

            data: {
                'fromDays': '"' + fromValue + '"',
                'toDays': '"' + toValue + '"',
                'path': '"' + urlPath + '"'
            },

            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'get',
            async: false,
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
            },
            success: function (data) {
                return true;
            }
        });
        return true;
    } else {
        $("#corn_mat_error").show();
        document.getElementById('crop_selection').focus();
        return false;
    }
}

function fnMaturityValidationSoy(matMin, matMax) {
    var fromValue = matMin;
    var toValue = matMax;
    dataLayer.push({ 'event': 'productFinder', 'eventCategory': 'Find Results by Maturity', 'eventLabel': fromValue + ' - ' + toValue + ' Days' });
    if (fromValue.match(/^[0-9]\d*(\.\d+)?$/) && toValue.match(/^[0-9]\d*(\.\d+)?$/)) {
        if ((fromValue >= 0 && fromValue <= 9.9) && (toValue >= 0 && toValue <= 9.9)) {
            $.ajax({
                type: "POST",
                url: window.location.protocol + "//" + window.location.host + '/SoybeanLanding/Soybeans.aspx/SetGHSoySessionMaturityDays',

                data: {
                    'fromDays': '"' + fromValue + '"',
                    'toDays': '"' + toValue + '"'
                },

                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                type: 'get',
                async: false,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                },
                success: function (data) {
                    return true;
                }
            });
            return true;
        } else {
            $("#soy_mat_error").show();
            document.getElementById('crop_selection').focus();
        }
        return false;
    } else {
        $("#soy_mat_error").show();
        document.getElementById('crop_selection').focus();
        return false;
    }
}
