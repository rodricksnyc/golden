var wW,
    getParameterByName,
    userZip;
getParameterByName = function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

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

userZip = readCookie('GHuserlocationreseller').replace(/[^0-9]/g, '').substr(0, 5);

$(function () {
    var lastScrollTop = 0,
        $win = $(window),
        wH = $win.height(),
        nH,
        $header = $('header'),
        $nav = $('nav'),
        resizeTimer,
        sPos,
        dH = $(document).height(),
        addScrollH = wH * 1.5,
        $this = $(this),
        mobiOffset;

    $('body, html').css('overflow', 'hidden');
    wW = $win.width();
    $('body, html').css('overflow', 'visible');
    // location from url string

    // add browser agent
    var browserDetect = navigator.userAgent,
        browserList = {
            safari: browserDetect.indexOf("Safari") > -1,
            chrome: browserDetect.indexOf("Chrome") > -1,
            firefox: browserDetect.indexOf("Firefox") > -1,
            edge: browserDetect.indexOf("Edge") > -1,
            ie: browserDetect.indexOf("MSIE") > -1,
            ie11: browserDetect.indexOf("Trident") > -1
        },
        broswerIS;
    $.each(browserList, function (key, value) {
        if (value === true) {
            broswerIS = key;
        }
    });
    $('body').attr('data-browser', broswerIS);
    $('.hamburger-icon').click(function () {
        if ($header.hasClass('mobile-open')) {
            $header.removeClass('mobile-open');
            $nav.removeAttr('style');
            $('#pc-overflow, .page-content').removeAttr('style');
            window.scrollTo(0, mobiOffset);
        } else {
            if (wH < 450) {
                $nav.css('overflow-y', 'scroll');
            }
            mobiOffset = parseInt($(document).scrollTop());
            nH = wH - 75;
            $header.addClass('mobile-open');
            $nav.css('height', nH + 'px');
            $('#pc-overflow').css({ 'overflow': 'hidden', 'height': wH + 'px' });
            $('.page-content').css({ 'top': '-' + mobiOffset + 'px' });
        }
    });
    $('li.has-sub-menu a').click(function (e) {
        if (wW < 992) {
            $('ul.main-menu').addClass('sub-open');
            $(this).next().show();
        }
    });
    $('li.sub-menu-back a').click(function (e) {
        if (wW < 992) {
            $('ul.main-menu').removeClass('sub-open');
            $('nav ul li ul').hide();
        }

    });
    $('nav .search').click(function (e) {
        var $this = $(this),
            $searchForm = $this.next('.search-form'),
            $searchInput = $searchForm.find('input');

        $searchForm.addClass('open');
        $searchInput.focus();
    });

    $('nav .search-form i').click(function () {
        $('nav .search-form').removeClass('open');
    });
    $(window).on("resize", function () {
        if ($(window).width() > 768) {
            $('ul.sub-menu').css('display', '');
        }
    }).resize();

    $('.twitter-share, .facebook-share').click(function (e) {
        e.preventDefault();
        var shareUrl = $(this).attr('href');
        window.open(shareUrl, 'Share Golden Harvest', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=500,height=300');
    });
    $('.print-share').click(function (e) {
        e.preventDefault();
        window.print();
    });
    setEqHeight();
    function setEqHeight() {
        $('.eq-height').removeAttr('style');
        if (wW > 768) {
            $('section').each(function () {
                // Cache the highest
                var highestBox = 0;
                // Select and loop the elements you want to equalise
                $('.eq-height', this).each(function () {
                    // If this box is higher than the cached highest then store it
                    if ($(this).height() > highestBox) {
                        highestBox = $(this).outerHeight();
                    }
                });
                // Set the height of all those children to whichever was highest 
                $('.eq-height', this).height(highestBox);
            });
        }
    }
    // set hit boxes to get url from closest anchor tag
    $(document).on('click', '.hit-box', function () {
        var getURL = $(this).find('a').attr("href");
        var hasTarget = $(this).find('a').attr('target');
        if (hasTarget == '_blank') {
            $win.focus();
            $win.blur();
            window.open(getURL, '_blank');
        } else {
            $win.focus();
            $win.blur();
            window.location.href = getURL;
        }
    });
    chckOnPage();
    $('.crop-boxnew').on('click', function () {
        e.preventDefault();
        var stagename = $(this).attr('stagename');
        var cropName = $(this).attr('cropname');
        var articleTitle = $(this).attr('title');
        $.ajax({
            url: "https://" + window.location.host + '/agronomyarticles/agronomy.aspx/SetAgronomicStageSession',
            data: "{ stageName: '" + stagename + "',cropName: '" + cropName + "',articleTitle: '" + articleTitle + "'}",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'post',
            async: true,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            }
        });
        var getURL = $(this).find('a').attr("href");
        var hasTarget = $(this).find('a').attr('target');
        if (hasTarget == '_blank') {
            $win.focus();
            $win.blur();
            window.open(getURL, '_blank');
        } else {
            $win.focus();
            $win.blur();
            window.location.href = getURL;
        }
    });
    // Window Srollling Event
    $(window).on("scroll", function () {
        sPos = $(document).scrollTop();
        var st = $(this).scrollTop();
        if (st > lastScrollTop && sPos > 100) {
            // downscroll code
            $('header').addClass('min-head');
        } else {
            // upscroll code
            $('header').removeClass('min-head');
        }
        lastScrollTop = st;
        $('.scroll-in, .slide-in').each(function (i, el) {
            var el = $(el);
            if ($this.inViewport(el)) {
                el.addClass('in-view');
            }
        });
        var heroHeight = $('.home-hero-holder').height();
        if (sPos > 0 && sPos < heroHeight) {
            var scrYPer = sPos / 40;
            $('.home-hero-holder').css('transform', 'translate(0px,' + scrYPer + '%)');
        }
    });
    $win.resize(function () {
        wH = $win.height();
        $('body, html').css('overflow', 'hidden');
        wW = $win.width();
        $('body, html').css('overflow', 'visible');
        if ($('html').hasClass('no-touch')) {
            $header.removeClass('mobile-open');
            $('ul.main-menu').removeClass('sub-open');
            $nav.removeAttr('style');
        }
        setEqHeight();
        // this kills all transitions during resize event then turns them back on
        $('html').addClass('no-transition');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            $('html').removeClass('no-transition');
        }, 250);
    });
    // qualtrics form
    $('#mailing-list a.btn-default').click(function (e) {
        e.preventDefault();
        var userName = $('#mailing-list input[name=name]').val();
        var userEmail = $('#mailing-list input[name=email]').val();
        var userZip = $('#mailing-list input[name=zipcode]').val();
        var emailVal = validateEmail(userEmail);
        var zipVal = validateZip(userZip);
        var valCount = [];
        if (userName === '' || userName === 'Full Name') {
            $('#mailing-list .error-name').show();
            valCount.push(1);
        } else {
            $('#mailing-list .error-name').hide();
        }
        if (emailVal === false || userEmail === 'Email') {
            $('#mailing-list .error-email').show();
            valCount.push(1);
        } else {
            $('#mailing-list .error-email').hide();
        }
        if (userZip === '' || zipVal === false || userZip === 'Zip Code') {
            $('#mailing-list .error-zip').show();
            valCount.push(1);
        } else {
            $('#mailing-list .error-zip').hide();
        }
        if (valCount.length === 0) {
            // form is valid run ajax call to Qualtrics;
            var qpas = '{"QID1":"' + userName + '","QID2":"' + userEmail + '","QID3":"' + userZip + '"}';
            var surl = "https://new.qualtrics.com/SE";
            $.ajax({
                url: surl,
                data: {
                    "Q_PostResponse": "true",
                    "SurveyID": "SV_2o6BOMifwO44h81",
                    "QR": qpas
                },
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "jsonpcallback"
            });
            $('#mailing-list .form-container').hide();
            $('#mailing-list .success-message').show();
        }
    });
    var currentPage = location.href;
    if (currentPage.indexOf('corn/plot-report') > 0 || currentPage.indexOf('soybean/plot-report') > 0 || currentPage.indexOf('silage/plot-report') > 0) {
        //Bypass do this in the same page
    }
    else {
        if (typeof $("#DemoSiteTitleName")[0] !== 'undefined') {
            $(".twitter-share").attr('href', 'https://twitter.com/intent/tweet?text=Grow%20More%20Experience%20Sites%20-' + $("#DemoSiteTitleName")[0].textContent + " update " + '&url=' + location.href + '&via=gldnharvest&utm_campaign=Golden-Harvest&utm_medium=referral&utm_source=Twitter&utm_content=Suggested-Tweet&utm_term=blog');
        }
        $(".facebook-share").attr('href', 'https://www.facebook.com/sharer.php?u=' + location.href + '');
        $(".email-share").attr('href', 'mailto:?subject=Check%20out%20this%20article%20on%20www.GoldenHarvestSeeds.com&body=' + location.href + '');
    }
    // add a class current-page to the anchor tag 
    var currentPage = location.href;
    if (currentPage.indexOf('yield-results') > 0) {
        $('#golden-harvest-yield-results').addClass('current-page');
    }
    else if (currentPage.indexOf('agronomy-guide') > 0) {
        $('#golden-harvest-resources').addClass('current-page');
    }
    else if (currentPage.indexOf('agronomy') > 0 || currentPage.indexOf('corn-hybrid-insights') > 0) {
        $('#golden-harvest-agronomy').addClass('current-page');
    }
    else if (currentPage.indexOf('seed-advisor') > 0) {
        $('#golden-harvest-seedAdvisor').addClass('current-page');
    }
    else if ((currentPage.indexOf('traits') > 0) || (currentPage.indexOf('news') > 0) || (currentPage.indexOf('contact-us') > 0) || (currentPage.indexOf('custom-seed-guide') > 0)) {
        $('#golden-harvest-resources').addClass('current-page');
    }
    else if (currentPage.indexOf('corn') > 0) {
        $('#golden-harvest-corn').addClass('current-page');
    }
    else if (currentPage.indexOf('soybeans') > 0 || currentPage.indexOf('soybean') > 0) {
        $('#golden-harvest-soybeans').addClass('current-page');
    }
});
window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload()
    }
};
$.fn.inViewport = function (el) {
    var win = $(window);
    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = el.offset();
    bounds.right = bounds.left + el.outerWidth();
    bounds.bottom = bounds.top + el.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
function chckOnPage() {
    $('.scroll-in, .slide-in').each(function (i, el) {
        var el = $(el);
        if ($(this).inViewport(el)) {
            el.addClass('in-view');
        }
    });
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateZip(zip) {
    var re = /^\d{5}$/;
    return re.test(zip);
}
// search results function after callback
function moreResultsSearch() {
    var d = document.getElementById("ss360-more-results");
    d.className += " hidden";
    $('.ss360-layer-content .ss360-group').each(function (i) {
        $(this).attr('data-catNum', i);
        var hasHiddenResults = $(this).children().hasClass('ss360-hidden');
        var catInfo = $(this).attr('class');
        catInfo = catInfo.replace('ss360-group ', '');
        if (hasHiddenResults == true) {
            var countTotal = $(this).children().length;
            var countHiddenTotal = $(this).children('.ss360-hidden').length;
            $(this).append('<a class="btn-show-more" onclick="showMore(' + i + ')" data-cat="' + i + '" data-showing="10" data-countTotal="' + countTotal + '">Show More Results (1 - <span class="showing">10</span> of ' + countTotal + ')</a>');
        }
    });
}
function showMore(x) {
    var $btn = $('.btn-show-more[data-cat="' + x + '"]'),
        $btnGroup = $('.ss360-group[data-catnum="' + x + '"]'),
        hiddenCount = $('.ss360-group[data-catnum="' + x + '"]').children('.ss360-hidden').length,
        btnShowing = parseInt($btn.attr('data-showing')),
        showMoreAmount = 10;
    if (hiddenCount > 10) {
        $btnGroup.children('.ss360-hidden').each(function (i) {
            if (i < 10) {
                $(this).removeClass('ss360-hidden');
            }
        });
        $btn.attr('data-showing', btnShowing + 10);
        $btn.children('.showing').html(btnShowing + 10);
    } else {
        $btnGroup.children().removeClass('ss360-hidden');
        $btn.addClass('hidden');
    }
}
$('.desk-filter').click(function () {
    var selectedTab = $(this);
    if (selectedTab.next().hasClass('open')) {
        selectedTab.next().removeClass('open');
        selectedTab.parent().removeClass('active');
    } else {
        selectedTab.next().addClass('open');
        selectedTab.parent().addClass('active');
    }
    $('.filter-dropdown').not(selectedTab.next()).removeClass('open');
    $('.filt-button').not(selectedTab.parent()).removeClass('active');
});
//click outside the dropdown close dropdown
$(document).click(function (e) {
    $('.filt-button').not($('.filt-button').has($(e.target))).children().removeClass('open ');
    $('.filt-button').not($('.filt-button').has($(e.target))).removeClass('active');
});
//add span or remove span based on checked filters
$('.checkbox-cont input').change(function () {
    if (this.checked) {
        $span = $('<span class="checked-filter"></span>');
        $span.text(this.value);
        if ($(this).data('filtercat') == "agro-topic-filters") {
            $('.filter-results > div.agro-topic-filters').append($span);
        }
        if ($(this).data('filtercat') == "crops-filters") {
            $('.filter-results > div.crops-filters').append($span);
        }
        if ($(this).data('filtercat') == "region-filters") {
            $('.filter-results > div.region-filters').append($span);
        }
        if ($(this).data('filtercat') == "season-filters") {
            $('.filter-results > div.season-filters').append($span);
        }
    }
    else {
        $('span:contains(' + this.value + ')', '.filter-results').remove();
    }
    getAgronomicDetailsWithFilter('FILTER_CHANGE', 'DESKTOP');
});
//clear button for checked filters
$('.clear-filters').click(function () {
    $('.checkbox-cont input[type=checkbox]').each(function () {
        this.checked = false;
        $('.filter-results span').remove();
    });
    console.info('Clear button clicked');
    getAgronomicDetailsWithFilter('FILTER_CLEAR', 'DESKTOP');
});
//clear individual checked filter
$('body').on('click', '.checked-filter', function () {
    checkedVal = $(this).text();
    $(this).remove();
    $('.checkbox-cont input[type=checkbox]:checked').each(function () {
        if (checkedVal == $(this).val()) {
            $(this).attr('checked', false);
        }
    })
    console.info('Filter remove clicked');
    getAgronomicDetailsWithFilter('FILTER_REMOVE', 'DESKTOP');
});
//Handlers for Mobile filters
$('.mobile-filter input').change(function () {
    if (this.checked) {
        console.info('Checked value: ' + $(this).val());
    }
    else {
        console.info('Unchecked value: ' + $(this).val());
        //find currently selected crops for Mobile. 
        var currentlySelectedCropsForMobile = getSelectedCropsForMobile('FILTER_CHANGE', 'MOBILE');
        //check any crops selected?
        //if nothing selected, select the other crop.
        if (currentlySelectedCropsForMobile == '') {
            //we have only 2 crops
            var currentCropId = $(this).attr("id"); //Clicked by user
            if (currentCropId == 'newcorn') {
                $('.mobile-filter input[name=newsoybeans]').prop('checked', true); //select soy
            }
            else {
                $('.mobile-filter input[name=newcorn]').prop('checked', true); //select corn
            }
        }
    }
    console.info('Filter selection changed For Mobile');
    getAgronomicDetailsWithFilter('FILTER_CHANGE', 'MOBILE');
});
var valCount = 0;
var viewmoreButtonForArticlesVisible = true;
var viewmoreButtonForSearchPostsVisible = true;
$('.search-filt-posts').click(function () {
    if (valCount == 0) {
        $('.filter-container').hide();
        $('.search-filter-container').show();
        valCount = 1;
        viewmoreButtonForArticlesVisible = $('.view-more-btn a').is(':visible');
        if (viewmoreButtonForSearchPostsVisible)
            $('.view-more-btn a').show();
        else
            $('.view-more-btn a').hide();
    } else {

    }
});
//back to all articles btn 
$('.backBtn a').click(function () {

    if (valCount == 1) {
        $('.filter-container').show();
        $('.search-filter-container').hide();
        valCount = 0;

        viewmoreButtonForSearchPostsVisible = $('.view-more-btn a').is(':visible');

        if (viewmoreButtonForArticlesVisible)
            $('.view-more-btn a').show();
        else
            $('.view-more-btn a').hide();
    }

});

//view more articles 
$('.view-more-btn a').click(function () {
    if (valCount == 0) {
        //Handle it
        console.info('Show more records');
        var controllerElement = document.querySelector('#agronomyArticlesResultDiv');
        var controllerScope = angular.element(controllerElement).scope();
        controllerScope.showMoreArticles();
        controllerScope.$apply();
    }
    else {
        //Discard
        console.info('Do not handle')
    }

});


var regionCookie = readCookie('GHuserregion');
var currentStageCookie = readCookie('currentstagecookie');

//check checkbox based on currentstagecookie
switch (currentStageCookie) {

    case 'GROWING':
        $('.checkbox-cont input[id=Growing]').attr('checked', true);
        break;
    case 'HARVEST':
        $('.checkbox-cont input[id=Harvest]').attr('checked', true);
        break;
    case 'PLANNING':
        $('.checkbox-cont input[id=Planning]').attr('checked', true);
        break;
    case 'PLANTING':
        $('.checkbox-cont input[id=Planting]').attr('checked', true);
        break;

    default:

}
//check checkbox based on regionCookie
switch (regionCookie) {

    case 'Western High Plains':
        $('.checkbox-cont input[name=whp]').attr('checked', true);
        break;
    case 'Central High Plains':
        $('.checkbox-cont input[name=chp]').attr('checked', true);
        break;
    case 'Eastern High Plains':
        $('.checkbox-cont input[name=ehp]').attr('checked', true);
        break;
    case 'Southern IA/Northern MO':
        $('.checkbox-cont input[name=sinm]').attr('checked', true);
        break;
    case 'Southern IL/Southern IN':
        $('.checkbox-cont input[name=sisi]').attr('checked', true);
        break;
    case 'Eastern IA/Northern IL':
        $('.checkbox-cont input[name=eini]').attr('checked', true);
        break;
    case 'South and Eastern NE':
        $('.checkbox-cont input[name=sen]').attr('checked', true);
        break;
    case 'Missouri/East Kansas':
        $('.checkbox-cont input[name=mek]').attr('checked', true);
        break;
    case 'Great Lakes North':
        $('.checkbox-cont input[name=gln]').attr('checked', true);
        break;
    case 'Great Lakes East':
        $('.checkbox-cont input[name=gle]').attr('checked', true);
        break;
    case 'Great Lakes West':
        $('.checkbox-cont input[name=glw]').attr('checked', true);
        break;
    case 'Northwest IA':
        $('.checkbox-cont input[name=ni]').attr('checked', true);
        break;
    case 'West NE Plains':
        $('.checkbox-cont input[name=wnp]').attr('checked', true);
        break;
    case 'Eastern NE Plains':
        $('.checkbox-cont input[name=enp]').attr('checked', true);
        break;
    case 'Red River Valley':
        $('.checkbox-cont input[name=rrv]').attr('checked', true);
        break;
    case 'MN/WI':
        $('.checkbox-cont input[name=mnwi').attr('checked', true);
        break;
    case 'Western ND':
        $('.checkbox-cont input[value=wnd]').attr('checked', true);
        break;
    case 'SD/MN':
        $('.checkbox-cont input[name=sdmn]').attr('checked', true);
        break;
    case 'Upper Midwest':
        $('.checkbox-cont input[name=up]').attr('checked', true);
        break;
    case 'Southwest':
        $('.checkbox-cont input[name=sw]').attr('checked', true);
        break;
    default:

}


function getDefaultRegion(regionCookieLocal) {
    switch (regionCookieLocal) {

        case 'Western High Plains':
            return $('.checkbox-cont input[name=whp]').val();
            break;
        case 'Central High Plains':
            return $('.checkbox-cont input[name=chp]').val();
            break;
        case 'Eastern High Plains':
            return $('.checkbox-cont input[name=ehp]').val();
            break;
        case 'Southern IA/Northern MO':
            return $('.checkbox-cont input[name=sinm]').val();
            break;
        case 'Southern IL/Southern IN':
            return $('.checkbox-cont input[name=sisi]').val();
            break;
        case 'Eastern IA/Northern IL':
            return $('.checkbox-cont input[name=eini]').val();
            break;
        case 'South and Eastern NE':
            return $('.checkbox-cont input[name=sen]').val();
            break;
        case 'Missouri/East Kansas':
            return $('.checkbox-cont input[name=mek]').val();
            break;
        case 'Great Lakes North':
            return $('.checkbox-cont input[name=gln]').val();
            break;
        case 'Great Lakes East':
            return $('.checkbox-cont input[name=gle]').val();
            break;
        case 'Great Lakes West':
            return $('.checkbox-cont input[name=glw]').val();
            break;
        case 'Northwest IA':
            return $('.checkbox-cont input[name=ni]').val();
            break;
        case 'West NE Plains':
            return $('.checkbox-cont input[name=wnp]').val();
            break;
        case 'Eastern NE Plains':
            return $('.checkbox-cont input[name=enp]').val();
            break;
        case 'Red River Valley':
            return $('.checkbox-cont input[name=rrv]').val();
            break;
        case 'MN/WI':
            return $('.checkbox-cont input[name=mnwi').val();
            break;
        case 'Western ND':
            return $('.checkbox-cont input[value=wnd]').val();
            break;
        case 'SD/MN':
            return $('.checkbox-cont input[name=sdmn]').val();
            break;
        case 'Upper Midwest':
            return $('.checkbox-cont input[name=up]').val();
            break;
        case 'Southwest':
            $('.checkbox-cont input[name=sw]').attr('checked', true);
            break;
        default:

    }
}

//display cookie checked filter on page load
$(document).ready(function () {
    $('#gh-filters .checkbox-cont input[type=checkbox]').each(function () {
        if (this.checked) {
            $span = $('<span class="checked-filter"></span>');
            $span.text(this.value);
            if ($(this).data('filtercat') == "agro-topic-filters") {
                $('.filter-results > div.agro-topic-filters').append($span);
            }
            if ($(this).data('filtercat') == "crops-filters") {
                $('.filter-results > div.crops-filters').append($span);
            }
            if ($(this).data('filtercat') == "region-filters") {
                $('.filter-results > div.region-filters').append($span);
            }
            if ($(this).data('filtercat') == "season-filters") {
                $('.filter-results > div.season-filters').append($span);
            }
        }
    });
});

//$(window).on("resize", function () {
//    if ($(window).width() < 768) {
//        valCount = 0;
//        $('.filter-container').show();
//        $('.search-filter-container').hide();
//    }
//}).resize();


//$(document).on('click', '#newcorn', function () {
//    if (!$(this).is(":checked") && !$('#newsoybeanss').is(":checked")) {
//        $('#newsoybeans').prop('checked', true);
//    }
//    var cropName = GetCropName();
//    GetAgronomicDetails(cropName);
//    return false;
//});

//$(document).on('click', '#newsoybeans', function () {
//    if (!$(this).is(":checked") && !$('#newsoybeans').is(":checked")) {
//        $('#newcorn').prop('checked', true);
//    }
//    var cropName = GetCropName();
//    GetAgronomicDetails(cropName);
//    return false;
//});

/* Angular and Search Filter Implementation */

var app = angular.module('agronomyApp', ['ngAnimate']);
app.controller('agronomyCtrl', ['$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.agronomyArticlesDesktopResultData = [];
        $scope.currentResultSegment = 0;
        $scope.statisticsMessage = "";
        $scope.resultCount = 0;
        $scope.userRegion = "";

        $scope.setResultData = function (resultData) {
            if (resultData.length == 0) {
                $scope.resultStatisticsMessage = "No Results Found";
                $scope.resultCount = 0;
                $scope.currentResultSegment = 0;
                $scope.agronomyArticlesDesktopResultData = [];
                $('.view-more-btn a').hide();
            }
            else {
                $scope.resultCount = resultData.length;
                if ($scope.resultCount <= 10) {
                    $scope.currentResultSegment = $scope.resultCount;
                    $('.view-more-btn a').hide();
                }
                else {
                    $scope.currentResultSegment = 10;
                    $('.view-more-btn a').show();
                }
                $scope.resultStatisticsMessage = "Showing articles 1 - " + $scope.currentResultSegment + " of " + $scope.resultCount;
                $scope.agronomyArticlesDesktopResultData = resultData;
            }
        }

        $scope.showMoreArticles = function () {
            if ($scope.resultCount == 0) {
                $scope.resultStatisticsMessage = "No Results Found";
                $('.view-more-btn a').hide();
            }
            else {
                $scope.currentResultSegment = $scope.currentResultSegment + 10;
                if ($scope.currentResultSegment >= $scope.resultCount) {
                    $scope.currentResultSegment = $scope.resultCount;
                    $('.view-more-btn a').hide();
                }

                $scope.resultStatisticsMessage = "Showing articles 1 - " + $scope.currentResultSegment + " of " + $scope.resultCount;
            }
        }

        $scope.onVideoThumnailNavigate = function (url, fileType) {
            if (fileType == '1') {
                window.location.href = url;
            }
        }

    }]);

angular.element(document).ready(function () {
    var controllerElement = document.querySelector('#agronomyArticlesResultDiv');
    if (controllerElement == null || controllerElement == undefined)
        return false;
    var controllerScope = angular.element(controllerElement).scope();
    controllerScope.userRegion = getDefaultRegion(regionCookie);
    controllerScope.$apply();
    getAgronomicDetailsWithFilter('FILTER_INIT', 'DESKTOP');

    return true;
});

function getSelectedAgroTopics(searchTrigger, searchSource) {
    var selectedAgroTopics;
    selectedAgroTopics = '';

    $(".agro-topic-btn .checkbox-cont input:checkbox:checked").each(function () {
        console.info("Agro Topic Id: " + $(this).attr("id") + " Value: " + $(this).val());
        if (selectedAgroTopics == '')
            selectedAgroTopics = $(this).val();
        else
            selectedAgroTopics = selectedAgroTopics + '$' + $(this).val();
    });
    console.info('Selected Agro Topics - ' + selectedAgroTopics);
    return selectedAgroTopics;
}

function getSelectedCrops(searchTrigger, searchSource) {
    var selectedCrops;
    selectedCrops = '';
    $(".crop-btn .checkbox-cont input:checkbox:checked").each(function () {
        console.info("Crop Id: " + $(this).attr("id") + " Value: " + $(this).val());
        if (selectedCrops == '')
            selectedCrops = $(this).val();
        else
            selectedCrops = selectedCrops + '$' + $(this).val();
    });
    console.info('Selected Crops - ' + selectedCrops);
    return selectedCrops;
}

function getSelectedCropsForMobile(searchTrigger, searchSource) {
    var selectedCrops;
    selectedCrops = '';
    $(".mobile-filter input:checkbox:checked").each(function () {
        console.info("Crop Id: " + $(this).attr("id") + " Value: " + $(this).val());
        if (selectedCrops == '')
            selectedCrops = $(this).val();
        else
            selectedCrops = selectedCrops + '$' + $(this).val();
    });
    console.info('Selected Crops - ' + selectedCrops);
    return selectedCrops;
}

function getSelectedRegions(searchTrigger, searchSource) {
    var selectedRegions;
    selectedRegions = '';
    $(".region-topic-btn .checkbox-cont input:checkbox:checked").each(function () {
        console.info("Region Id: " + $(this).attr("id") + " Value: " + $(this).val());
        if (selectedRegions == '')
            selectedRegions = $(this).val();
        else
            selectedRegions = selectedRegions + '$' + $(this).val();
    });
    console.info('Selected Regions - ' + selectedRegions);
    return selectedRegions;
}

function getSelectedSeasons(searchTrigger, searchSource) {
    var selectedSeasons;
    selectedSeasons = '';
    $(".season-btn .checkbox-cont input:checkbox:checked").each(function () {
        console.info("Season Id: " + $(this).attr("id") + " Value: " + $(this).val());
        if (selectedSeasons == '')
            selectedSeasons = $(this).val();
        else
            selectedSeasons = selectedSeasons + '$' + $(this).val();
    });
    console.info('Selected Seasons - ' + selectedSeasons);
    return selectedSeasons;
}

function getAgronomicDetailsWithFilter(searchTrigger, searchSource) {
    try {
        $('#dvloading').show();
        var dataPayload = {};
        dataPayload.regions = searchSource == 'DESKTOP' ? getSelectedRegions(searchTrigger, searchSource) : getSelectedRegions(searchTrigger, searchSource);
        dataPayload.cropNames = searchSource == 'DESKTOP' ? getSelectedCrops(searchTrigger, searchSource) : getSelectedCropsForMobile(searchTrigger, searchSource);
        dataPayload.agronomicTopics = searchSource == 'DESKTOP' ? getSelectedAgroTopics(searchTrigger, searchSource) : '';
        dataPayload.seasons = searchSource == 'DESKTOP' ? getSelectedSeasons(searchTrigger, searchSource) : getSelectedSeasons(searchTrigger, searchSource);
        dataPayload.searchTrigger = searchTrigger;
        dataPayload.searchSource = searchSource;
        console.info(JSON.stringify(dataPayload));

        $.ajax({
            url: "https://" + window.location.host + '/agronomyarticles/agronomy.aspx/GetAgronomicArticlesJSONWithFilter',
            data: JSON.stringify(dataPayload),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'post',
            async: true,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.error(errorThrown);
                $('#dvloading').hide();
            },

            success: function (data) {
                //console.info(data.d);
                var controllerElement = document.querySelector('#agronomyArticlesResultDiv');
                var controllerScope = angular.element(controllerElement).scope();
                controllerScope.setResultData(JSON.parse(data.d));
                controllerScope.$apply();

                $('#dvloading').hide();
                //getscroll();
                return false;
            }
        });
    }
    catch (currentException) {
        $('#dvloading').hide();
    }


    function getscroll() {

        var shiftWindow = function () { scrollBy(0, -80) };
        if (location.hash) shiftWindow();
        window.addEventListener("hashchange", shiftWindow);


        if (location.hash) {
            var getScrollSection = location.hash;
            if ($(getScrollSection).length > 0) {
                var scrlTop = $(getScrollSection).offset().top;
                console.log(scrlTop);
            } else {
                var scrlTop = $('a[name="' + getScrollSection.substr(1) + '"]').offset().top;
            }
            var scrlTopMore;
            if (location.hash == '#optin') {
                scrlTopMore = scrlTop - 180;
            }
            else {
                scrlTopMore = scrlTop - 100;
            }

            $('html, body').stop(true, true).delay(1500).animate({
                scrollTop: scrlTopMore
            }, 500);

        }
    }
}