function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

var viewedSurvey = getCookie('viewed-survey'),
    userIP,
    userCountry;
var formDataArray = {};
var apiresult = 0;

$(function () {
    $.getJSON('https://json.geoiplookup.io', function (data) {
        userIP = data.ip;
        userCountry = data.country_code;
        var categoryVal = $('.qualtrics-page-category').text();
        var gaID = getCookie('_ga').replace(/^([^.]+\.){2}/, '');
        $('#userId').val(userIP);
        $('#currentUrlId').val(window.location.href);
        $('#browserId').val(navigator.appCodeName + '' + navigator.appVersion);
        $('#categoryId').val(categoryVal);
        $('#referrerId').val(document.referrer);
        $('#GAID').val(gaID);
    });
    $('.site-buttons button').click(function (e) {
        e.preventDefault();
        var selSite = $(this).attr('class');
        $('#site-survey').removeClass();
        $('#site-survey').addClass(selSite);
    });

    $('.form-intro button').click(function (e) {
        e.preventDefault();
        $('.form-intro button').removeClass('active');
        $(this).addClass('active');       
        $('.survey-questions').slideDown(500);
    });

    $('#submit-survey').click(function(e) {
        e.preventDefault();
        var survey = {};
        formDataArray = PushDefault();
        formDataArray = FormData('formQualtrics');
        survey.Name = $('#formQualtrics').attr('data-survey-id');
        survey.FormURL = window.location.href;
        survey.FormData = formDataArray;
        survey.CreatedBy = "FORM";
        PostFeedBackData(survey);
        if (apiresult == 1) {
            setCookie('viewed-survey', true, 21);
            $('.survey-thanks').slideDown(500);
            $('.survey-questions').slideUp(500);
            $('.form-intro').slideUp(500);
        }
        else {
            alert("There is an error occured while submitting the survey.");
        }
        dataLayer.push({
            'event': 'pgHelpEvent',
            'eventCategory': 'Page Helpfulness Survey',
            'eventAction': 'Response',
            'eventLabel': formDataArray[17].FieldValue
        });
    });

    $('#site-survey .close-button').click(function (e) {
        e.preventDefault();
        setCookie('viewed-survey', true, 21);
        $('#site-survey').hide();
    });
          
});

// to display the survey we have to meet the first conditional of not competing with the cookie policy survey so all of the initial calls for display survey are in the CookieMessage.js file

function displaySurvey() {
    setTimeout(function () {
        if (!viewedSurvey && userCountry === 'US') {
            //console.log('conditions meet');
            $('#site-survey').addClass('visible');
        }
    }, 10000);
}
