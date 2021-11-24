// DECLARE VARIABLES
var w = '';
var maxHeight = 0;
$.fn.equalHeight = function () {
    var maxHeight = 0;
    return this.each(function (index, box) {
        var boxHeight = $(box).height();
        maxHeight = Math.max(maxHeight, boxHeight);
    }).height(maxHeight);
};

$(function () {
    // GET WINDOW WIDTH
    function getWindowWidth() {
        $('body, html').css('overflow', 'hidden');
        w = $(window).width();
        $('body, html').css('overflow', 'visible');
    }
    getWindowWidth();

    if (!JSON.parse(window.sessionStorage.getItem('formValues')))
        window.location.href = ('/seeds/custom-seed-guide');
    if (window.sessionStorage.getItem('selProducts') === null) {
        sgSelections = [];
    } else {
        sgSelections = JSON.parse(window.sessionStorage.getItem('selProducts'));
    }

    function populateSelections() {
        if (window.sessionStorage.getItem('selProducts') != null) {
            var sgProducts = JSON.parse(window.sessionStorage.getItem('selProducts'));

            $('.sg-selection-inner').html('');

            for (var i = 0, len = sgProducts.length; i < len; i++) {
                $('.sg-selection-inner').append('<div class="sg-product" data-product="' + sgProducts[i] + '"> ' + sgProducts[i] + ' <span class="remove-product"> X</span></div>');
            }

            if (JSON.parse(window.sessionStorage.getItem('selProducts')).length === 0) {
                $('button.sg-preview').attr('disabled', true);
            } else {
                $('button.sg-preview').attr('disabled', false);
            }
        }
    }
    populateSelections();

    var date = new Date();
    var year = date.getFullYear();

    var formValues = JSON.parse(window.sessionStorage.getItem('formValues')),
        selCrop = formValues[0],
        guideTitle = formValues[3],
        guideMsg = formValues[4],
        fullName = formValues[5],
        phoneNum = formValues[6],
        emailAddr = formValues[7],
        location = formValues[8],
        guideLogo = window.sessionStorage.getItem('logoImg');

    $('#id_header').attr("src", window.location.protocol + "//" + window.location.host + "/Images/global/golden_harvest_logo.png");

    //if (selCrop == 'corn') {
    //    $('.sg-legal').html('<p>©' + year+' Syngenta. <b>Important: Always read and follow label and bag tag instructions; only those labeled as tolerant to glufosinate may be sprayed with glufosinate ammonium based herbicides.</b><p> NK®, the Alliance Frame, the Purpose Icon and the Syngenta logo are trademarks of a Syngenta Group Company.</p><p>LibertyLink®, Liberty® and the Water Droplet logo are registered trademarks of BASF. HERCULEX® and the HERCULEX Shield are trademarks of Dow AgroSciences, LLC. HERCULEX Insect Protection technology by Dow AgroSciences. YieldGard VT Pro™ is a trademark of Monsanto Technology LLC.</p><p><b>Under federal and local laws, only dicamba-containing herbicides registered for use on dicamba-tolerant varieties may be applied. See product labels for details and tank mix partners.</b> NK® Soybean varieties are protected under granted or pending U.S. variety patents and other intellectual property rights, regardless of the trait(s) within the seed. The Genuity® Roundup Ready 2 Yield® and Roundup Ready 2 Xtend® traits may be protected under numerous United States patents. It is unlawful to save soybeans containing these traits for planting or transfer to others for use as a planting seed. Roundup Ready 2 Yield®, Roundup Ready 2 Xtend®, Genuity®, Genuity and Design and Genuity Icons are trademarks used under license from Monsanto Technology LLC. ENLIST E3™ soybean technology is jointly developed with Dow AgroScience LLC and MS Technologies LLC. ENLIST E3 is a trademark of Dow AgroSciences LLC. The trademarks or service marks displayed or otherwise used herein are the property of a Syngenta Group Company.  All other trademarks are the property of their respective owners.</p>');
    //}
    //else if (selCrop == 'soybean') {
    //    $('.sg-legal').html('<p>©' + year +' Syngenta. <b>Important: Always read and follow label and bag tag instructions; only those labeled as tolerant to glufosinate may be sprayed with glufosinate ammonium based herbicides.</b><p> NK®, the Alliance Frame, the Purpose Icon and the Syngenta logo are trademarks of a Syngenta Group Company.</p><p>LibertyLink®, Liberty® and the Water Droplet logo are registered trademarks of BASF. HERCULEX® and the HERCULEX Shield are trademarks of Dow AgroSciences, LLC. HERCULEX Insect Protection technology by Dow AgroSciences. YieldGard VT Pro™ is a trademark of Monsanto Technology LLC.</p><p><b>Under federal and local laws, only dicamba-containing herbicides registered for use on dicamba-tolerant varieties may be applied. See product labels for details and tank mix partners.</b> NK® Soybean varieties are protected under granted or pending U.S. variety patents and other intellectual property rights, regardless of the trait(s) within the seed. The Genuity® Roundup Ready 2 Yield® and Roundup Ready 2 Xtend® traits may be protected under numerous United States patents. It is unlawful to save soybeans containing these traits for planting or transfer to others for use as a planting seed. Roundup Ready 2 Yield®, Roundup Ready 2 Xtend®, Genuity®, Genuity and Design and Genuity Icons are trademarks used under license from Monsanto Technology LLC. ENLIST E3™ soybean technology is jointly developed with Dow AgroScience LLC and MS Technologies LLC. ENLIST E3 is a trademark of Dow AgroSciences LLC. The trademarks or service marks displayed or otherwise used herein are the property of a Syngenta Group Company.  All other trademarks are the property of their respective owners.</p>');
    //}
    //else if (selCrop == 'enogen corn') {
    //    $('.sg-legal').html('<p>©' + year +' Syngenta. Important: Always read and follow label and bag tag instructions; only those labeled as tolerant to glufosinate may be sprayed with glufosinate ammonium based herbicides. Agrisure®, Agrisure Duracade®, E-Z Refuge®, Enogen®, the Alliance Frame and Syngenta logo are trademarks of a Syngenta Group Company. Some versions of this product family may not contain the listed traits. All other trademarks are the property of their respective owners.</p><p>Ratings are based on interpretation of data gathered by Syngenta and/or observations across areas of adaptation and may change as additional data are gathered.</p>');
    //}

    if (guideTitle) {
        $('.guide-info').append('<strong>' + guideTitle + '</strong>');
    }
    if (guideLogo) {
        $('.sg-top .row:first-child .col-xs-12').prepend('<div class="sg-logo"><img src="' + guideLogo + '" /></div>');
    }
    if (fullName) {
        $('.sg-top .contact-info').append('<strong>' + fullName + '</strong>');
    }
    if (phoneNum) {
        $('.sg-top .contact-info').append('<p>' + phoneNum + '</p>');
    }
    if (emailAddr) {
        $('.sg-top .contact-info').append('<p>' + emailAddr + '</p>');
    }
    if (location) {
        $('.sg-top .contact-info').append('<p>' + location + '</p>');
        $('.sg-top').append('<div class="row"><div class="col-xs-12"><p></p><p></p></div></div>');
        $('.sg-top').append('<div class="row"><div class="col-xs-12"><p></p><hr/></div></div>');
        $('.sg-top').append('<div class="row"><div class="col-xs-12"><p></p></div></div>');
    }
    if (guideMsg) {
        $('.guide-info').append('<p>' + guideMsg + '</p>');
    } else {
        $('.guide-info').append('<p>You need products that work for your local conditions. Only Golden Harvest<sup>&reg;</sup> brings you the powerful combination of unique genetics, local agronomic expertise and personal service from your local Golden Harvest Seed Advisor. Below are a few products we selected that can help you maximize your profit potential.</p>');
    }

    populateGuideProducts();

    function populateGuideProducts() {
        selProducts = JSON.parse(window.sessionStorage.getItem('selProducts'));

        $("#sg_preview_inner_bottom_id").empty();

        $.ajax({
            type: "POST",
            url: window.location.protocol + "//" +  window.location.host + "/Product-Details/Corn.aspx/GETProductDetailsDataForUS",
            data: "{ prodName: '" + selProducts + "', crop: '" + selCrop + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: "true",
            success: function (result) {
                var length = JSON.parse(result.d).length;
                var count = 5;
                $.each(JSON.parse(result.d), function (k, brand) {
                    var product = brand.Product,
                        rm = brand.Maturity,
                        description = brand.Description,
                        newBrand = brand.IsNew,
                        bullets = brand.BulletFeature.split('|'),
                        brands = brand.Hybrids.replace(/ \| /g, ', '),
                        filename = brand.Techsheet_Name,
                        hybirdtype = brand.HybridType,
                        brandName = brand.Brand;
                    var pageSeperator = '<div class="col-sm-12" ><p class="page-break">&nbsp;</p></div>';
                    var pageSeperatorNew = '<div class="col-sm-12 second" style="display:none"><p class="page-break">&nbsp;</p></div>';

                    var brandHTML = '<div class="col-sm-6">';
                    if (newBrand === "1") {
                        if (brandName.toLowerCase() == "enogen") {
                            brandHTML += '<div class="sf-result brand-enogen new">\
                                            <div class="sf-result-title">\
                                        <span class="new">NEW</span>';
                        }
                        else {
                            brandHTML += '<div class="sf-result new">\
                                            <div class="sf-result-title">\
                                        <span class="new">NEW</span>';
                        }
                        
                    }
                    else {
                        if (brandName.toLowerCase() == "enogen") {
                            brandHTML += '<div class="sf-result brand-enogen">\
                                            <div class="sf-result-title">';
                        }
                        else {
                            brandHTML += '<div class="sf-result">\
                                            <div class="sf-result-title">';
                        }
                        
                    }
                    if (selCrop.toLowerCase() == "soybean") {
                        var heading = "Herbicide Tolerant Trait(s):";
                    }
                    else {
                        var heading = "Brands available:";
                    }
                    if (brandName.toLowerCase() == "enogen") {
                        brandHTML += '<span class="product-enogen">' + product + '</span>'
                    } else {
                        brandHTML += '<span class="product">' + product + '</span>'
                    }
                    if (hybirdtype != null && hybirdtype != '') {
                        if (hybirdtype.toLowerCase() == "gs") {
                            brandHTML += '<span><img src="/images/soybeans/logo-goldSeries.png" style="width:30px;" alt="Golden Harvest Gold Series logo"></span>'
                        }
                    }
                    brandHTML+= '<span class="rm">RM' + rm + '</span></div>\
                                            <div class="sf-result-content">\
                                                <div class="sf-result-content-inner">\
                                                    <strong>' + description + '</strong>\
                                                    <ul>';
                                                    for (var i = 0; i < bullets.length; i++) {
                                                        brandHTML += '<li>' + bullets[i] + '</li>';
                                                    }
                                                    brandHTML += '</ul>\
                                                    <strong>'+ heading+'</strong>\
                                                    <span>' + brands + '</span>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>';

                    if (length == 1) {
                        brandHTML += pageSeperator;
                    }
                    else if (length >= 2 && k === 1) {
                        brandHTML += pageSeperator;
                    } else if (length >= 5) {
                        if (k === count) {
                            brandHTML += pageSeperatorNew;
                            count = count + 4;
                        } else {
                            for (var j = 5; j <= length; j += 4) {
                                if (j === length && k === length - 1) {
                                    brandHTML += pageSeperatorNew;
                                }
                            }
                        }
                    }


                    $('.sg-bottom .row').append(brandHTML);
                    
                });
                $('.sf-result').equalHeight();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
            }
        });
    }

    $(document).on('click', '.remove-product', function () {
        var delProduct = $(this).siblings('.product-name').text();
        var sgSelections = JSON.parse(window.sessionStorage.getItem('selProducts'));
        sgSelections.splice(sgSelections.indexOf(delProduct), 1);
        window.sessionStorage.setItem('selProducts', JSON.stringify(sgSelections));
        
        if (sgSelections.length == 0) {
            if (selCrop == 'corn')
                window.location.href = ('/corn/product-finder');
            else if (selCrop == 'soybean')
                window.location.href = ('/soybean/product-finder');
            else if (selCrop == 'enogen corn')
                window.location.href = ('/corn/product-finder');
        }
        else {
            populateSelections();
            populateGuideProducts();
        }
    });


    $('.sg-download').click(function (e) {
        e.preventDefault();
        $('#dvloading').show();

        if (w <= 768) {
            var height = 0;
            if (maxHeight > 480) {
                height = maxHeight - 130
            } else {
                height = maxHeight - 90;
            }

            var resultDiv = '<div class="sf-result" style="height: ' + height + 'px;">'
        }
        var title = guideTitle ? guideTitle : '2021 Custom Seed Guide';
        var brand = (selCrop == 'enogen corn') ? 'enogen' : 'nk';
        var htmltext = $('#divPdfContainer').html();
        htmltext = htmltext.replace(/<div class="col-sm-12 second" style="display:none">/g, '<div class="col-sm-12 second">');
        htmltext = htmltext.replace(/<div class="col-sm-6">/g, '<div class="col-xs-6">');
        if (w <= 768) {
            var iPadText = '<div class="sf-result" style="height: ' + maxHeight + 'px;">'
            htmltext = htmltext.replace(/<div class="sf-result" style="height: auto;">/g, resultDiv);
            htmltext = replaceAll(htmltext, iPadText, resultDiv);
        }
        htmltext = JSON.stringify(htmltext);
        var data = '{htmlText: ' + htmltext + ", title: '" + title + "', brand: '" + brand + "'}";

        //window.print();        
        $.ajax({
            url: window.location.protocol + "//" +  window.location.host + "/Seed-Guide/seed-guide-preview.aspx/GetPdf",
            data: data,
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            type: 'POST',
            async: false,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Error occured while generating pdf");
            },
            success: function (response) {
                if (response.d == null)
                    alert('There is a problem exporting the file');
                else {
                    var byte = response.d;
                    var byteArray = new Uint8Array(byte.length);
                    for (let i = 0; i < byte.length; i++)
                        byteArray[i] = byte[i];
                    var blob = new Blob([byteArray], { type: "application/pdf" });
                    var url = document.createElement('a');
                    document.body.appendChild(url); //required in FF, optional for Chrome
                    url.href = window.URL.createObjectURL(blob);
                    var cropname = selCrop;
                    cropname = (function toTitleCase(str) {
                        return str.replace(/\w\S*/g, function (txt) {
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        });
                    })(cropname);
                    var fileName = title + " - " + cropname + ".pdf";
                    url.download = fileName;
                    url.target = "_blank"; //required in FF, optional for Chrome
                    url.click();
                    document.body.removeChild(url);
                }
            },
            complete: function () {
                $('#dvloading').hide();
            }
        });
    });

    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    }
    function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    $('.sg-reset').click(function(e) {
        e.preventDefault();
        window.sessionStorage.clear();
        window.location.href = ('/seeds/custom-seed-guide');
    });
});
$(window).resize(function () {
    $('.sf-result').css('height', 'auto');
    $('.sf-result').equalHeight();
});