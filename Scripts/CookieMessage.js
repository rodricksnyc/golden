$(document).ready(function () {
    if (document.cookie.indexOf('cookieMessage') === -1) {
        document.cookie = "cookieMessage=1;path=/";
        setTimeout(function () {
            $.cookieMessage({
                'mainMessage': 'We use cookies to make this website work better for you and to track site visits anonymously. You can opt out if you like.<strong> <a href="https://www.syngenta-us.com/legal/cookiepolicy.html">Tell me more.</a> <a href="#" onclick="closeCookie()">Ok, continue</a></strong> ',
                'backgroundColor': '#d25f15',
                'linkFontColor': 'white',
                'btnBackgroundColor': '#d25f15',
                'btnFontColor': '#d25f15',
                'fontSize': '16px',

            });
        }, 5000);
        setTimeout(function () {
            $('#cookie-msg').fadeOut("slow");
            displaySurvey();
        }, 17000);
    } else {
        displaySurvey();
    }
    
});


function closeCookie() {
    $('#cookie-msg').fadeOut("slow");
    displaySurvey();
}