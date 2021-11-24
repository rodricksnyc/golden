$(function () {
    var userRegion = readCookie('GHuserregion'),
        regionFilename = userRegion.replace(/\/| /g, '-').toLowerCase(),
        userProdcuts,
        regionParam = getParameterByName('region'),
        selectedAgronomist = getParameterByName('id');

    $(document).on('click', '.agronomy-card ', function (e) {
        var $el = $(e.target);
        if ($el.parent().hasClass('card-taxonomy') === false && $el.hasClass('btn-default') === false) {
            $(this).find('a.btn-default')[0].click();
        }
    });

    $.getJSON("/scripts/agrazones-2020.json", function (regions) {
        if (regionParam) {
            var region = regions.find(function (region) {
                return region.regionid.indexOf(regionParam) > -1;
            });
        } else {
            var region = regions.find(function (region) {
                return region.zipcode.indexOf(userZip) > -1;
            });
        }

        var regionName = region.name,
            regionImage = regionName.replace(/\//g, '-'),
            regionID = region.zone;

        $('.region-container img').attr('src', '/Images/regions/' + regionFilename + '.svg');
        $('.region-container h4').text(regionName);
        $('span.region-name').text(regionName);

        var userProducts = region.corn;
        $.ajax({
            type: "POST",
            url: "https://" + window.location.host + "/product-details/corn.aspx/GetProductDetailsDataForUs",
            data: "{ prodName: '" + userProducts + "', crop: 'corn'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: "true",
            success: function (result) {
                $.each(JSON.parse(result.d), function (k, brand) {
                    var product = brand.Product,
                        rm = brand.Maturity,
                        description = brand.Description,
                        bullets = brand.BulletFeature.split('|'),
                        brands = brand.Hybrids.replace(/ \| /g, ', '),
                        filename = brand.Techsheet_Name;

                    var brandHTML = '<div class="col-sm-4">\
                                        <div class="product-container">\
                                            <a class="product-name" href="/corn/'+ product + '">' + product + '</a>\
                                            <span class="rm">RM' + rm + '</span>\
                                            <h3>' + description + '</h3>\
                                            <ul>';
                    for (var i = 0; i < bullets.length; i++) {
                        brandHTML += '<li>' + bullets[i] + '</li>';
                    }
                    brandHTML += '</ul>\
                                            <div class="product-links">\
                                                <a href="/corn/'+ product + '">Product Details ></a>\
                                                <a href="https://assets.syngentaebiz.com/pdf/techsheets/'+ filename + '" target="_blank">Tech Sheet PDF ></a>\
                                            </div>\
                                        </div>\
                                    </div>';
                    $('#products .row-eq-height').append(brandHTML);
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
            }
        });

        var api_url = "https://ebizservices.alfprod.com";
        if (window.location.href.indexOf("project.goldenharvestseeds.com") > -1) {
            api_url = "https://ebizservices-stageproject.alfprod.com"
        }
        var agAPI = {
            "async": false,
            "crossDomain": true,
            "url": api_url + "/SyngentaApi/CMSApi/api/FarmJournal/GetAgronomist?site=GH",
            "method": "GET"
        }

        $.ajax(agAPI).done(function (response) {
            $.each(response, function (i) {
                var agronomistID = response[i].id,
                    agronomistRegion = response[i].region,
                    agronomistFName = response[i]["first name"],
                    agronomistLName = response[i]["last name"],
                    agronomistTitle = response[i].title,
                    agronomistTwitter = response[i].location,
                    agronomistBio = response[i]["long bio"],
                    agronomistThumb = response[i].thumbnail,
                    agronomistImage = response[i].largeimage;

                if (agronomistID === selectedAgronomist) {
                    $('.featured-agronomist .agronomist-image').html('<img src="' + agronomistImage + '" />');
                    $('.featured-agronomist span.agronomist-name').text(agronomistFName + ' ' + agronomistLName);
                    $('.featured-agronomist span.agronomist-title').text('Agronomist');
                    if (agronomistTwitter) {
                        $('.featured-agronomist .agronomist.info').append('<div class="agronomist-twitter"><b>Twitter: <span><a href="https://twitter.com/"' + agronomistTwitter.replace('@', '') + '></b>' + agronomistTwitter + '</a></div>');
                    }
                    $('.agronomist-fname').text(agronomistFName);
                    $('#products p').html(agronomistBio);
                }

                if (jQuery.inArray(regionID, agronomistRegion) !== -1 && agronomistID != selectedAgronomist) {
                    var agronomistHTML = '<div class="agronomist-info">\
                                            <div class="agronomist-image"><a href="/corn-hybrid-insights/agronomist?id=' + agronomistID + '"><img src="' + agronomistThumb + '" /></a></div>\
                                            <span class="agronomist-name">'+ agronomistFName + '<br />' + agronomistLName + '</span>\
                                            <span class="agronomist-title">Agronomist</span>\
                                            <a href="/corn-hybrid-insights/agronomist?id=' + agronomistID + '">Learn More About ' + agronomistFName + ' ></a>\
                                        </div>';
                    $('.agronomist-info-cont').append(agronomistHTML);

                    $('#insights').removeClass('agronomists-hidden');
                    $('#agronomics').show();
                }
            });
        });

        var fjAPI = {
            "async": true,
            "crossDomain": true,
            "url": "https://ebizservices.alfprod.com/SyngentaApi/CMSApi/api/FarmJournal/GetContents?Site=GH&agronomist=" + selectedAgronomist,
            "method": "GET"
        }

        $.ajax(fjAPI).done(function (response) {
            $.each(response, function (i) {
                var title = response[i].title,
                    agronomists = response[i].agronomist,
                    agronomistFName = response[i].agronomist[0]["first name"],
                    agronomistLName = response[i].agronomist[0]["last name"],
                    agronomistImage = response[i].agronomist[0].thumbnail,
                    seeds = response[i].seed,
                    contentType = response[i]["content type"],
                    contentDate = response[i]["date created"],
                    contentRegion = response[i].region,
                    shortDesc = response[i]["short description"],
                    longDesc = response[i]["long description"],
                    thumbnail = response[i].thumbnail,
                    youtubeID = response[i]["youtube id"],
                    articleURL = response[i]["article url"];

                if (youtubeID) {
                    var articleLink = '<a href="#" data-youtube-id="' + youtubeID + '" class="btn-default youtube" target="_blank">Watch Video</a>';
                    var thumbnailCode = '<div class="card-image video"><img src="' + thumbnail + '" alt="" /></div>';
                } else if (articleURL) {
                    var articleLink = '<a href="/agronomy/articles/' + articleURL + '" class="btn-default">Read Spotlight</a>';
                    var thumbnailCode = '<div class="card-image"><img src="' + thumbnail + '" alt="" /></div>';
                }

                var taxonomyHTML = '';

                $(agronomists).each(function (i) {
                    taxonomyHTML += '<a href="/corn-hybrid-insights/agronomist?id=' + agronomists[i].id + '">' + agronomists[i].title + '</a>, ';
                });

                $(seeds).each(function (i) {
                    taxonomyHTML += '<a href="/corn/' + seeds[i].replace('-', '') + '">' + seeds[i] + '</a>, ';
                });

                taxonomyHTML += '<a href="/corn">Corn</a>';

                var articleHTML = '<div class="col-sm-4">\
                        <div class="agronomy-card">';
                articleHTML += thumbnailCode;
                articleHTML += '<div class="card-content">\
                                <span class="agronomy-date">' + contentDate + '</span>\
                                <h3>' + title + '</h3>\
                                '+ articleLink + '\
                                <div class="card-taxonomy">';
                articleHTML += taxonomyHTML;
                articleHTML += '</div>\
                        </div>\
                    </div>';
                $('#insights .results-row').append(articleHTML);
            });
        });
    });
});