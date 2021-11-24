$(function () {


    // PLOT AVERAGE TOTALS
    var sum = 0,
	sum1 = 0,
	sum2 = 0,
	count = 0,
	yieldAverage = $('tbody td:nth-child(6)'),
	mstAverage = $('tbody td:nth-child(7)'),
	weightAverage = $('tbody td:nth-child(8)');

    yieldAverage.each(function () {
        sum += +$(this).text();
        count++;
    });
    mstAverage.each(function () {
        sum1 += +$(this).text();
    });
    weightAverage.each(function () {
        sum2 += +$(this).text();
    });

    $('td.yield-average').text((sum / count).toFixed(1));
    $('td.mst-average').text((sum1 / count).toFixed(1));
    $('td.weight-average').text((sum2 / count).toFixed(1));


    //$("#btnViewEntirePlot").click();

    $('#plot-report tr').click(function (e) {
        var tRow = $(this),
            tBrand = tRow.attr('data-brand'),
            tURL = tRow.children().children('a').attr('href');

        if (tBrand == 'ghs' && tURL != undefined) {
            window.location.href = tURL;
        } else if (tBrand == 'enogen' && tURL != undefined)
        {
            window.location.href = tURL;
        }

        //else if (tBrand == 'nk') {
        //    window.open(tURL, '_blank');
        //    return false;

    //} 
        else {
            return false;
        }

    });


});

$(".twitter-share").attr('href', 'https://twitter.com/intent/tweet?text=Check%20out%20these%20Golden%20Harvest%20Yield%20Results:&url=' + location.href + '?PlotId=' + $('#plotID').text().replace('\'', '').replace('\'', '') + '&hashtags=AcetheAcre' + '&via=gldnharvest&utm_campaign=Golden-Harvest&utm_medium=referral&utm_source=Twitter&utm_content=Suggested-Tweet&utm_term=blog');
$(".facebook-share").attr('href', 'https://www.facebook.com/sharer.php?u=' + location.href + '?PlotId=' + $('#plotID').text().replace('\'', '').replace('\'', '') + '');
//$(".email-share").attr('href', 'mailto:?subject=Check%20out%20this%20article%20on%20www.GoldenHarvestSeeds.com&body=' + location.href + '');





function SendCornEmail(plotID, FullAddress, AddressValue) {
    var plotValue = plotID;
    var City = FullAddress;
    var addressValue = AddressValue;
    var currURL = window.location.href;
    var strIndex = currURL.indexOf('?');
    if (strIndex > 0) {
        currURL = currURL.substr(0, strIndex);
    }
    currURL = currURL.replace("#", '');
    currURL = currURL + '?PlotId=' + plotValue
    var subject = 'Corn Plot Yield Results in ' + addressValue;
    window.location = 'mailto:?subject=' + subject + '&body=Check out these Golden Harvest Yield Results: ' + currURL + ' #AcetheAcre';
}


function SendSoybeanEmail(plotID, FullAddress, AddressValue) {
    var plotValue = plotID;
    var City = FullAddress;
    var addressValue = AddressValue;
    var currURL = window.location.href;
    var strIndex = currURL.indexOf('?');
    if (strIndex > 0) {
        currURL = currURL.substr(0, strIndex);
    }
    currURL = currURL.replace("#", '');
    currURL = currURL + '?PlotId=' + plotValue
    var subject = 'Soybean Plot Yield Results in ' + addressValue;
    window.location = 'mailto:?subject=' + subject + '&body=I thought you might find this information interesting: ' + currURL;

}

function SendSilageEmail(plotID, FullAddress, AddressValue) {
    var plotValue = plotID;
    var City = FullAddress;
    var addressValue = AddressValue;
    var currURL = window.location.href;
    var strIndex = currURL.indexOf('?');
    if (strIndex > 0) {
        currURL = currURL.substr(0, strIndex);
    }
    currURL = currURL.replace("#", '');
    currURL = currURL + '?PlotId=' + plotValue
    var subject = 'Silage Plot Yield Results in ' + addressValue;
    window.location = 'mailto:?subject=' + subject + '&body=I thought you might find this information interesting: ' + currURL;

}
