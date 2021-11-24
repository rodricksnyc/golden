$(function () {
    var userRegion = readCookie('GHuserregion'),
        regionFilename = userRegion.replace(/\/| /g, '-').toLowerCase(),
        regionID,
        regionFiltered;

    $(document).on('click', '.agronomy-card ', function (e) {
        var $el = $(e.target);
        if ($el.parent().hasClass('card-taxonomy') === false && $el.hasClass('btn-default') === false) {
            $(this).find('.card-content-details a.btn-default')[0].click();
        }
    });

    $.getJSON('https://' + window.location.host + '/Scripts/agrazones-2020.json', function (data) {
        regionFiltered = data.filter(function (regionSelected) {
            return regionSelected.name.indexOf(userRegion) > -1;
        });
    }).done(function () {
        var prettyRegion = regionFiltered[0].prettyname,
            sgFilename = regionFiltered[0].filename,
            regionID = regionFiltered[0].zone;

        $('.region-container h4').text(prettyRegion);
        $('.region-container img').attr('src', 'images/regions/' + regionFilename + '.svg');
        $('.sg-link span.region-name').text(prettyRegion);
        $('.sg-link').attr('href', '/documents/2021-seed-guides/' + sgFilename);

        var userProducts = regionFiltered[0].corn;
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
                        filename = brand.Techsheet_Name,
                        hybirdtype = brand.HybridType;
                    var brandHTML = '<div class="col-sm-4">\
                                        <div class="product-container">\
                                            <a class="product-name" href="/corn/'+ product + '">' + product + '</a>'
                    if (hybirdtype != null && hybirdtype != '') {
                        if (hybirdtype.toLowerCase() == "gs") {
                            brandHTML += '<span class="newicon"><img src="/images/soybeans/logo-goldSeries.png" alt="Golden Harvest Gold Series logo"></span>'
                        }
                    }
                    brandHTML+='<span class="rm">RM' + rm + '</span>\
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
        else if (window.location.href.indexOf("support.goldenharvestseeds.com") > -1) {
            api_url = "https://ebizservices-stage.alfprod.com"
        }
        

        var fjAPI = {
            "async": true,
            "crossDomain": true,
            "url": api_url + "/SyngentaApi/CMSApi/api/FarmJournal/GetContents?Site=GH&region=" + regionID,
            "method": "GET"
        }

        var agronomistIDs = [];

        $.ajax(fjAPI).done(function (response) {
            $.each(response, function (i) {
                if (!response[i].title.toUpperCase().startsWith('MEET')) {
                    var title = response[i].title,
                        agronomists = response[i].agronomist,
                        agronomistID = response[i].agronomist[0].id,
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
                        articleExcerpt = response[i]["short description"],
                        articleURL = response[i]["article url"];

                    //if (agronomistIDs.indexOf(agronomistID) === -1) {
                    //    $('.agronomist-container .agronomists').append('<div class="agronomist-image"><a href="/corn-hybrid-insights/agronomist?id=' + agronomistID + '"><img src="' + agronomistImage + '" /></a></div>');
                    //    agronomistIDs.push(agronomistID);
                    //}

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

                    var articleHTML = '<div class="agronomy-card corn-insights">';
                    articleHTML += thumbnailCode;
                    articleHTML += '<div class="card-content">\
                                      <div class="card-content-details">\
                                        <span class="agronomy-date">' + contentDate + '</span>\
                                        <h3>' + title + '</h3>\
                                        ' + articleLink + 
                                      '\</div>\
                                      <div class="card-taxonomy">';
                    articleHTML += taxonomyHTML;
                    articleHTML += '</div>\</div>\</div>';
          
                    $('.results-row').append(articleHTML);
                }
            });
        });
        var api_url = "https://ebizservices.alfprod.com";
        if (window.location.href.indexOf("project.goldenharvestseeds.com") > -1) {
            api_url = "https://ebizservices-stageproject.alfprod.com"
        }

        var agAPI = {
            "async": false,
            "crossDomain": true,
            "url": api_url + "/SyngentaApi/CMSApi/api/FarmJournal/GetAgronomist?site=GH&region=" + regionID,
            "method": "GET"
        }

        $.ajax(agAPI).done(function (response) {
            $.each(response, function (i) {               
                    var agronomistHTML = '<div class="agronomist-info">\
                                            <div class="agronomist-image"><a href="/corn-hybrid-insights/agronomist?id=' + response[i].id + '"><img src="' + response[i].thumbnail + '" /></a></div>\
                                            <span class="agronomist-name">'+ response[i]["first name"] + '<br />' + response[i]["last name"] + '</span>\
                                            <span class="agronomist-title">Agronomist</span>\
                                            <a href="/corn-hybrid-insights/agronomist?id=' + response[i].id + '">Learn More About ' + response[i]["first name"] + ' ></a>\
                                        </div>';
                    $('.agronomist-info-cont').append(agronomistHTML);                
            });
            if (response.length) {
                $('#insights').removeClass('agronomists-hidden');
                $('#agronomics').show();
            }
        });
    });

    $('.card-content').each(function () {
        $(this).css('background-position', Math.floor(Math.random() * 100) + '% -31px');
    });

});