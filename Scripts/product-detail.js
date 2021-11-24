$(function () {


   

    // EMAIL BUTTON 
    $('a.email-button').click(function (e) {
        e.preventDefault();
        var currURL = window.location.href;
        var subject = 'Share from Syngenta Seed Page';
        var emailBody = 'I think you might like this link I found: ' + currURL;
        window.location = 'mailto:?subject=' + subject + '&body=' + emailBody;
    });

    // BAR CHART
    $('.bar').each(function () {
        var percentage = $(this).attr('data-percentage');
        $(this).css('width', percentage / 0.9 + '%');
    });

    // EQUAL HEIGHT TILES
    function equalHeight(group) {
        //debugger;
        var maxHeight = 0;
        group.each(function () {
            $(this).removeAttr('style');
            maxHeight = Math.max(maxHeight, $(this).outerHeight());
        });
        if (wW > 767) {
           
            group.css({ height: maxHeight + 'px' });
            group.css({ padding: 30 +'px' });
        } else {
            group.css({ height: 'auto' });
        }
    }
    //    equalHeight($('.detail-tile'));

    // WINDOW RESIZE EVENTS
    $(window).on("resize", function () {
         equalHeight($('.detail-tile'));
    });

    $(window).on('load', function () {
        equalHeight($('.detail-tile'));
    });
});