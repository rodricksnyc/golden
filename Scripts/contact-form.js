var t,
		s,
		$win = $(window),
		contactForm = {
		    settings: {
		        relationship: $('#relationship'),
		        stepTwo: $('.step-two'),
		        submit: $('#emailButton'),
		        otherRelationship: $('.other-relationship'),
		        otherSubject: $('.other-subject')
		    },
		    //////////////
		    //// INIT ////
		    //////////////
		    init: function () {
		        // kick things off
		        t = this;
		        s = t.settings;
		        t.revealForm();
		        t.formSubmit();
		        grecaptcha.render('dvCaptcha', {
		            'sitekey': '6LegPhoUAAAAAL-9QlUxM5sMaWD8QuwFqjb33yuh',
		            'callback': function (response) {
		                $.ajax({
		                    type: "post",
		                    url: "https://" + window.location.host + "/contacts/contact.aspx/VerifyCaptcha",
		                    data: "{response: '" + response + "'}",
		                    contentType: "application/json; charset=utf-8",
		                    dataType: "json",
		                    error: function (XMLHttpRequest, textStatus, errorThrown) {
		                        $("#mainBody_lblError").show();
		                        $("#mainBody_lblError").html('* Please confirm you are not a robot.');
		                    },
		                    success: function (r) {
		                        var captchaResponse = jQuery.parseJSON(r.d);
		                        if (captchaResponse.success) {
		                            $('#dvReCatcha').attr('data-error', 'no-error');
		                            var rel = document.getElementById('relationship').value;
		                            var sub = document.getElementById('subject').value;
		                            var othersub = document.getElementById('other-subject').value;
		                            var otherrel = document.getElementById('other-relationship').value;
		                            var fname = document.getElementById('fname').value;
		                            var lname = document.getElementById('lname').value;
		                            var email = document.getElementById('email').value;
		                            var zip = document.getElementById('txtZip').value;
		                            var city = document.getElementById('city').value;
		                            var phone = document.getElementById('phone').value;
		                            var ques = document.getElementById('questions').value;
		                            var state = document.getElementById('state').value;
		                            if (rel.trim() != "#" && rel.trim() != "" && sub.trim() != "#" && sub.trim() != "" && fname != "" && lname != "" && email != "" && zip != "" && ques != "") {
		                                if (sub.trim() == "Other" && othersub.trim() == "") {
		                                    return;
		                                }
		                                if (rel.trim() == "Other" && otherrel.trim() == "") {
		                                    return;
		                                }
		                                $("#emailButton").removeAttr("class");
		                                $("#mainBody_lblError").hide();
		                                $('#mainBody_hdnCapcha').val("Success");
		                            }
		                        } else {
		                            $('#dvReCatcha').attr('data-error', 'error');
		                        }
		                    }
		                });
		            }
		        });
		    },
		    ////////////////////
		    //// REVEALFORM ////
		    ////////////////////
		    revealForm: function () {
		        var reveal = false;
		        s.relationship.on('change', function () {
		            var value = $(this).val();
		            if (value !== 'Other') {
		                s.otherRelationship.addClass('hidden').removeClass('error-wrap');
		                s.otherRelationship.find('label').removeClass('required-label');
		                s.otherRelationship.find('input').attr('aria-required', 'false');
		            } else {
		                s.otherRelationship.removeClass('hidden').addClass('error-wrap');
		                s.otherRelationship.find('label').addClass('required-label');
		                s.otherRelationship.find('input').attr('aria-required', 'true');
		            }
		            if (!reveal) {
		                s.stepTwo.addClass('active');
		                s.stepTwo.find('input').removeAttr('disabled');
		                s.stepTwo.find('textarea').removeAttr('disabled');
		                s.stepTwo.find('select').removeAttr('disabled');
		                t.checkEmailInputs();
		                t.checkSelects();
		                t.checkZips();
		                t.checkPhone();
		                reveal = true;
		            }
		            t.checkTextInputs();
		        });
		    },
		    /////////////////////////
		    //// CHECKTEXTINPUTS ////
		    /////////////////////////
		    checkTextInputs: function () {
		        var $inputs = $('.input-text[aria-required="true"]');
		        $inputs.each(function () {
		            var $t = $(this),
							$parent = $t.parents('.error-wrap');
		            $t.on('blur', function () {
		                var value = $t.val();
		                if (value) {
		                    $parent.attr('data-error', 'no-error');
		                } else {
		                    $parent.attr('data-error', 'error');
		                }
		                t.checkErrors();
		            });
		        });
		    },
		    //////////////////////////
		    //// CHECKEMAILINPUTS ////
		    //////////////////////////
		    checkEmailInputs: function () {
		        var $emails = s.stepTwo.find('.input-email[aria-required="true"]');
		        $emails.each(function () {
		            var $e = $(this),
							$parent = $e.parents('.error-wrap');
		            $e.on('blur', function () {
		                var value = $e.val();
		                var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
								valid = re.test(value);
		                if (valid) {
		                    $parent.attr('data-error', 'no-error');
		                } else {
		                    $parent.attr('data-error', 'error');
		                }
		                t.checkErrors();
		            });
		        });
		    },
		    //////////////////////
		    //// CHECKSELECTS ////
		    //////////////////////
		    checkSelects: function () {
		        var $selects = s.stepTwo.find('select[aria-required="true"]');
		        $selects.each(function () {
		            var $s = $(this),
							$parent = $s.parents('.error-wrap');
		            $s.on('change', function () {
		                var value = $s.val();
		                if (value) {
		                    if ($s.attr('name') === 'subject') {
		                        if (value !== 'Other') {
		                            $s.attr('aria-required', 'true');
		                            $parent.addClass('error-wrap').attr('data-error', 'no-error');
		                            s.otherSubject.addClass('hidden');
		                            s.otherSubject.find('label').removeClass('required-label');
		                            s.otherSubject.find('input').attr('aria-required', 'false');
		                            s.otherSubject.find('.error-holder').removeClass('error-wrap');
		                        } else {
		                            $s.attr('aria-required', 'false');
		                            $parent.removeClass('error-wrap');
		                            s.otherSubject.removeClass('hidden');
		                            s.otherSubject.find('label').addClass('required-label');
		                            s.otherSubject.find('input').attr('aria-required', 'true');
		                            s.otherSubject.find('.error-holder').addClass('error-wrap');
		                        }
		                        t.checkTextInputs();
		                    } else {
		                        $parent.attr('data-error', 'no-error');
		                    }
		                } else {
		                    $parent.attr('data-error', 'error');
		                }
		                t.checkErrors();
		            });
		        });
		    },
		    ///////////////////
		    //// CHECKZIPS ////
		    ///////////////////
		    checkZips: function () {
		        var $zips = s.stepTwo.find('.input-zip[aria-required="true"]');
		        $zips.each(function () {
		                        var $z = $(this),
							    $parent = $z.parents('.error-wrap');
		                        $z.on('blur', function () {
		                        var value = $z.val();
		                        var re = new RegExp("^\\d{5}(-\\d{4})?$"),
						        valid = re.test(value);
                                if (valid)
                                {
                                    getCityStateFromZip(value);
                                    if (contactCountry === 'United States') {
                                        $parent.attr('data-error', 'no-error');
                                        $('select[name="state"]').val(contactState);
                                        $('input[name="city"]').val(contactCity);
                                    }
                                    else {
                                        $parent.attr('data-error', 'error');
                                        $('select[name="state"]').val('');
                                        $('input[name="city"]').val('');
                                    }
                                }
                                else
                                {
		                            $parent.attr('data-error', 'error');
		                            $('select[name="state"]').val('');
		                            $('input[name="city"]').val('');
		                        }
		                        t.checkErrors();
		                    });
		        });
		    },

		    ////////////////////
		    //// CHECKPHONE ////
		    ////////////////////
		    checkPhone: function () {
		        var $phone = s.stepTwo.find('.input-tel');
		        $phone.on('keyup', function () {
		            var $p = $(this),
                                        value = $p.val(),
                                        numValue = value.replace(/\D/g, '');
		            if (numValue.length >= 10) {
		                var split1 = numValue.slice(0, 3),
                                            split2 = numValue.slice(3, 6),
                                            split3 = numValue.slice(6, 10);
		                $p.val(split1 + '-' + split2 + '-' + split3);
		            } else if (numValue.length === 7) {
		                var split1 = numValue.slice(0, 3),
                                            split2 = numValue.slice(3, 6),
                                            split3 = numValue.slice(6, numValue.length);
		                $p.val(split1 + '-' + split2 + '-' + split3);
		            } else if (numValue.length === 4) {
		                var split1 = numValue.slice(0, 3),
                                            split2 = numValue.slice(3, numValue.length);
		                $p.val(split1 + '-' + split2);
		            }
		        }).on('blur', function () {
		            var $p = $(this),
                                        value = $p.val(),
                                        numValue = value.replace(/\D/g, '');

		            if (numValue.length === 10) {
		                var split1 = numValue.slice(0, 3),
                                            split2 = numValue.slice(3, 6),
                                            split3 = numValue.slice(6, 10);
		                $p.val(split1 + '-' + split2 + '-' + split3);
		            } else {
		                $p.val('');
		            }
		        });
		    },
		    //////////////////////
		    //// CHECKERRORS ////
		    //////////////////////
		    checkErrors: function () {
		        var errorArray = [];
		        $('.error-wrap').each(function () {
		            var $err = $(this),
							error = $err.attr('data-error');
		            errorArray.push(error);
		        });
		        if (errorArray.indexOf('error') > -1 || errorArray.indexOf(undefined) > -1) {
		            s.submit.addClass('disabled');
		        } else {
		            s.submit.removeClass('disabled');
		        }
		    },
		    ////////////////////
		    //// FORMSUBMIT ////
		    ////////////////////
		    formSubmit: function () {
		        s.submit.on('click', function (e) {
		            e.preventDefault();
		            if (s.stepTwo.hasClass('active')) {
		                if ($(this).hasClass('disabled')) {
		                    $('.error-wrap').each(function () {
		                        var $err = $(this),
										error = $err.attr('data-error');
		                        if (error === undefined) {
		                            $err.attr('data-error', 'error');
		                        }
		                    });
		                } else {
		                    var scrollTo = $('.instructions').offset().top;
		                    $('.instructions').hide();
		                    $('.form').hide();
                            $('.thank-you').show();
                            var dataLayer = window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'formSuccess'
                            });
		                    $('html, body').animate({
		                        scrollTop: 0
		                    }, 800);
		                }
		            }
		        });
		    },
		    /////////////////////////
		    //// GETURLPARAMETER ////
		    /////////////////////////
		    getUrlParameter: function (sParam) {
		        var sPageURL = window.location.search.substring(1);
		        var sURLVariables = sPageURL.split('&');
		        for (var i = 0; i < sURLVariables.length; i++) {
		            var sParameterName = sURLVariables[i].split('=');
		            if (sParameterName[0] == sParam) {
		                return sParameterName[1];
		            }
		        }
		    }
		};


if (contactForm.getUrlParameter('form') === 'thankyou') {
    var scrollTo = $('.instructions').offset().top;
    $('.instructions').hide();
    $('.form').hide();
    $('.thank-you').show();
    $('html, body').animate({
        scrollTop: scrollTo
    }, 800);
}
function SubmitDetailsClient() {
    var rel = document.getElementById('relationship').value;
    var sub = document.getElementById('subject').value;
    var othersub = document.getElementById('other-subject').value;
    var otherrel = document.getElementById('other-relationship').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var zip = document.getElementById('txtZip').value;
    var city = document.getElementById('city').value;
    var phone = document.getElementById('phone').value;
    var ques = document.getElementById('questions').value;
    var state = document.getElementById('state').value;
    if ($('#mainBody_hdnCapcha').val() != "Success") {
        $("#mainBody_lblError").show();
        $("#mainBody_lblError").html('* Please confirm you are not a robot.');
        $('#dvCaptcha').parent().attr('data-error', 'not-error');
        return;
    }
    if (rel.trim() != "#" && rel.trim() != "" && sub.trim() != "#" && sub.trim() != "" && fname != "" && lname != "" && email != "" && zip != "" && ques != "") {
        if (sub.trim() == "Other" && othersub.trim() == "") {
            return;
        }
        if (rel.trim() == "Other" && otherrel.trim() == "") {
            return;
        }
        if ($('#mainBody_hdnCapcha').val() != "Success") {
            $("#mainBody_lblError").show();
            $("#mainBody_lblError").html('* Please confirm you are not a robot.');
            $('#dvCaptcha').parent().attr('data-error', 'not-error');
            return;
        }
        $("#mainBody_lblError").hide();
        $.ajax({
            selectFirst: true,
            url: window.location.protocol + "//" + window.location.host + "/contacts/contact.aspx/submitdetails",
            data: {
                'relationship': '"' + rel + '"',
                'otherRelation': '"' + otherrel + '"',
                'subject': '"' + sub + '"',
                'otherSubject': '"' + othersub + '"',
                'firstName': '"' + fname + '"',
                'lastName': '"' + lname + '"',
                'email': '"' + email + '"',
                'zip': '"' + zip + '"',
                'state': '"' + state + '"',
                'city': '"' + city + '"',
                'phone': '"' + phone + '"',
                'questions': '"' + ques + '"'
            },
            type: 'get',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
            success: function (data) {
                $('html,body').scrollTop(0);

            }
        });
    }
}
$(window).on('load', function () {
    contactForm.init();
});

