$(function () {

    var keywords;
    $('select').select2({
        placeholder: '- Select -',
        width: '100%',
        matcher: function (params, data) {
            if ($.trim(params.term) === '') {
                return data;
            }

            keywords = (params.term).split(" ");

            for (var i = 0; i < keywords.length; i++) {
                if (((data.text).toUpperCase()).indexOf((keywords[i]).toUpperCase()) === -1) {
                    return null;
                }
            }
            return data;
        }
    });
    $('select').prop('disabled', true);
    $('select:first-of-type').prop('disabled', false);
    // Focus search input on open of select
    $('select').on('select2:open', function () {
        $('.select2-search__field').focus();
    });


    //Add expand/contract ability to Events
    $('.eventRow').addClass('contracted');  // JS to contract the events so users w/o JS can still see

    $('.eventRow .learnMoreBtn').click(function (e) {
        var eventParent = $(this).parents('.eventRow');
        e.preventDefault();
        eventParent.toggleClass('contracted');

        eventParent.hasClass('contracted') ? $(this).find('span').text("Learn more") : $(this).find('span').text("See less")
    });

    $(window).resize(adjustDownloadButtons());


    //Add accessible placeholder form inputs
    $('#profit-calculator input[type="number"]')
	.focus(function (e) {
	    $(this).siblings('.placeholder').addClass('active');
	})
	.blur(function (e) {
	    var v = $(this).val();
	    if (!v) {
	        $(this).siblings('.placeholder').removeClass('active');
	    };
	});



    // ACCORDION SCRIPT
    $('.tabTitle').click(function (e) {
        e.preventDefault();
        var selectedTab = $(this);
        selectedTab.parent().toggleClass('activeTab');
        selectedTab.next('.tabContent').slideToggle();
    });

    //Hover styling fix for mobile devices
    $('.tabTitle').bind('touchend', function () {
        if ($(this).parent().hasClass('activeTab')) {
            $(this).css({ 'background': '#f5f5f5', 'color': '#55565a' });
        } else {
            $(this).css({ 'background': '#5f7800', 'color': '#fff' });
        }
    });


    //Run through download options, set height of description block to match the tallest
    //Aligns row of buttons
    function adjustDownloadButtons() {
        var downloadTitleHeight;
        $('.download-title').each(function (i, el) {
            //adjust all download-title elements to be the height of the tallest
            downloadTitleHeight = (downloadTitleHeight > $(el).height()) ? downloadTitleHeight : $(el).height();
        }).css('height', downloadTitleHeight);
    }

})