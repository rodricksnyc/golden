$(function () {
    var $map = $('#region-map .map-container')
    var mapTop = $map.offset().top;

    $('.region').hover(
        function () {
            $('.map-container .land:not(.unsupported)').attr('class', 'land');
            var regionID = $(this).attr('data-region');
            $('.map-container .land[data-name="' + regionID + '"]').attr('class', 'land active');
        }, function () {
            $('.map-container .land:not(.unsupported)').attr('class', 'land');
            var regionID = $('#region-list input:checked').closest('.region').attr('data-region');
            $('.map-container .land[data-name="' + regionID + '"]').attr('class', 'land active');
        }
    );

    $('.region').click(function () {
        createCookie('userlocationset', '1', 365);
        var clickedRegion = $(this).attr('data-region');
        $('#region-list input').prop('checked', false);
        $(this).find('input').prop('checked', true);
        $regionDD.val(clickedRegion).trigger('change');
    });


    $('.land:not(.unsupported)').hover(
        function () {
            populateRegionInfo($(this));
        }, function () {
            $('.region-information h2').text('');
            $('.region-information p').text('');
        }
    );

    // populate region info
    function populateRegionInfo(region) {
        var selectedRegion = region.attr('data-name');
        var regionName = $('.region[data-region="' + selectedRegion + '"] h2').text();
        var regionDesc = $('.region[data-region="' + selectedRegion + '"] p').text();

        $('.region-information h2').text(regionName);
        $('.region-information p').text(regionDesc);
    }

});