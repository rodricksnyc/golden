$(function () {
    function timelineSeparators() {
        if (wW > 768) {
            $('#about-timeline tr').each(function () {
                var thisHeight = $(this).height();
                var nextHeight = $(this).next('tr').height();

                var thalf = thisHeight / 2;
                var nhalf = nextHeight / 2;

                var sephalf = 6;

                var disHight = ((thalf + nhalf) / 2);
                var offset = (thalf - disHight) - sephalf;

                $('td:nth-child(2) span + span', this).css('bottom', offset);
            });
        }
    }
    timelineSeparators();

    $(window).on("resize", function () {
        timelineSeparators();
    });
});