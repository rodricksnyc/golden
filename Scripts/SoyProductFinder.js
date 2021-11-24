$(document).ready(function () {
    
    if (window.sessionStorage.getItem('formValues')) {
        var formValues = JSON.parse(window.sessionStorage.getItem('formValues'));
        var selCrop = formValues[0];
        var matMin = formValues[1];
        var matMax = formValues[2];
        var guideTitle = formValues[3];
        var guideMsg = formValues[4];
        var fullName = formValues[5];
        var phoneNum = formValues[6];
        var emailAddr = formValues[7];
        var location = formValues[8];
        if (selCrop.toLowerCase() === "soybean") {
            if (matMin === "")
                matMin = 2.5;
            if (matMax === "")
                matMax = 3.5;
        }
        $("#txtRmFrom").val(matMin);
        $("#txtRmTo").val(matMax);
    }
    if (window.sessionStorage.getItem('selProducts') != null) {
        var sgProducts = JSON.parse(window.sessionStorage.getItem('selProducts'));
        $('.sg-selection-inner').html('');
        for (var i = 0, len = sgProducts.length; i < len; i++) {
            $(".sg-selection-inner").append("<div class='sg-product' data-product='" + sgProducts[i] + "'>" + sgProducts[i] + "<span class='remove-product'>X</span></div>");
        }
        if (sgProducts.length === 0) {
            $('button.sg-preview').attr('disabled', true);
        } else {
            $('button.sg-preview').attr('disabled', false);
        }
        Check_sg_add_text();
        handleButtons();
    }
});

$(function () {
    // Check if referrer is seed guide
    var ref = document.referrer;
    var sg = 'custom-seed-guide';

    if (ref.indexOf(sg) > -1 || ref.indexOf("seed-guide-preview") > -1) {
        $('#sg-selections').show();
        $('button.sg-add').css('display', 'flex');      
    }
   
    // Update counts
    function updateCount() {
        var resultsTotal = $('.sf-result').length,
            resultsShown = $('.sf-result:visible').length;

        $('span.sf-shown').text(resultsShown);
        $('span.sf-total').text(resultsTotal);
    }
    updateCount();
    // Open filter drawer
    $('.filter-section .filter-title').click(function () {
        $(this).parent().toggleClass('active');
    });
    // Random background position
    $('.sf-result').each(function () {
        var positions = ['left', 'center', 'right'];
        var selected = Math.floor(Math.random() * 3);
        $(this).css({ 'background-position': positions[selected] + " top" });
    });
    var filters = {};
    var currentUrl = location.href.split('?')[0];
    $('.filter-section input[type="checkbox"]').on('change', function (e) {      
        var checkedFilter = $(e.target);
        var filterName = checkedFilter.attr('name');
        var updatedArray = $('input[name="' + filterName + '"]:checked').map(function (i) {
            return $(this).val();
        }).get();
        filters[filterName] = updatedArray;
        window.sessionStorage.setItem("Filters", JSON.stringify(filters));
        var filterVal = $(this).val();
        var urlFilters = getUrlParameter('filters') || '';
        if (urlFilters) {
            urlFilters = urlFilters.split(',');
        } else {
            urlFilters = [];
        }
        if (this.checked) {
            urlFilters.push(filterVal);
        } else {
            var index = urlFilters.indexOf(filterVal);
            urlFilters.splice(index, 1);
        }
        var filterString = '';
        if (urlFilters.length) {
            filterString = '?filters=' + urlFilters.join(',');
        }
        if (history.pushState) {
            window.history.pushState("object or string", "Title", currentUrl + filterString);
        } else {
            document.location.href = currentUrl + filterString;
        }
        fnGetProducts(1);
    });
    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return null;
    };

    //Query string
    var filters1 = getUrlParameter('filters') || '';
    if (filters1) {
        var filters = {};
        var filterArray = filters1.split(',');
        filterArray.forEach(function (filter) {
            $('input[value="' + filter + '"]').closest('.filter-section').addClass('active');
            $('input[value="' + filter + '"]').prop('checked', true);
            var filterName = $('input[value="' + filter + '"]').closest('.filter-section')[0].id;
            var updatedArray = $('input[name="' + filterName + '"]:checked').map(function (i) {
                return $(this).val();
            }).get();
            filters[filterName] = updatedArray;
            //filter[$('input[value="' + filter + '"]').closest('.filter-section')[0].id].push(filter);
        });
        window.sessionStorage.setItem("Filters", JSON.stringify(filters));
        fnGetProducts(1);
    }
    
    // Remove custom seed guide selections
    $('body').on('click', 'span.remove-product', function () {
        $(this).parent().remove();
        var product = $(this).parent().attr('data-product');
        $('.sg-add[data-product="' + product + '"]').html("<span>+</span>Add to Custom Seed Guide");
        $('.sg-add[data-product="' + product + '"]').removeClass('selected');
        var sgSelections = JSON.parse(window.sessionStorage.getItem('selProducts'));
        sgSelections.splice(sgSelections.indexOf(product), 1);
        window.sessionStorage.setItem('selProducts', JSON.stringify(sgSelections));
      
        handleButtons();
    });

    // Disable/Enable buttons 
    function handleButtons() {
        var numProducts = $('.sg-selection-inner .sg-product').length;
        if (numProducts > 0) {
            $('button.remove-selections').css('display', 'flex');
            $('button.sg-preview').attr('disabled', false);
        } else {
            $('button.remove-selections').hide();
            $('button.sg-preview').attr('disabled', true);
        }
    }

    // Remove all custom seed guide selections
    $('button.remove-selections').click(function (e) {
        e.preventDefault();
        $('.sg-selection-inner').html('');
        $('.sg-add').removeClass('selected');
        $('.sg-add').html("<span>+</span>Add to Custom Seed Guide");
        productArray = [];
        $('button.sg-preview').attr('disabled', true);
        var selProducts = [];
        window.sessionStorage.setItem('selProducts', JSON.stringify(selProducts));
        handleButtons();
    });

    // Show more results
    $('a.load-more').click(function (e) {
        e.preventDefault();
        // load more results
        updateCount();
    });
    // Show custom seed guie preview
    $('.sg-preview').click(function (e) {
        e.preventDefault();
        window.location.href = ('/Seed-Guide/seed-guide-preview.aspx');
    });
    // Add to custom seed guide selections
    var sgSelections = [];
    $('body').on('click', '.sg-add', function (e) {
        if (window.sessionStorage.getItem('selProducts') !== null) {
            sgSelections = JSON.parse(window.sessionStorage.getItem('selProducts'));
        }
        e.preventDefault();
        var product = $(this).attr('data-product');
        if ($(this).hasClass('selected')) {
            $(this).html("<span>+</span>Add to Custom Seed Guide")

            $('.sg-selection-inner div[data-product="' + product + '"]').remove();
            sgSelections = sgSelections.filter(function (item) {
                return item != product;
            });
            window.sessionStorage.setItem('selProducts', JSON.stringify(sgSelections));
        } else {
            $(this).html("<span>-</span>Remove from Seed Guide")
            $('.sg-selection-inner').append('<div class="sg-product" data-product="' + product + '">' + product + '<span class="remove-product">X</span></div>');
            sgSelections.push(product);
            window.sessionStorage.setItem('selProducts', JSON.stringify(sgSelections));
        }
        $(this).toggleClass('selected');
        handleButtons();
    });

    // Disable/Enable buttons 
    // Show more results
    $('a.load-more').click(function (e) {
        e.preventDefault();
        // load more results
        updateCount();
    });
    // Show custom seed guie preview
    $('.sg-preview').click(function (e) {
        e.preventDefault();
        window.location.href = ('/Seed-Guide/seed-guide-preview.aspx');
    });
    //Update RM onclick
    $('#updateRM').click(function (e) {
        if (window.sessionStorage.getItem("formValues") != null) {
            var formValues = JSON.parse(window.sessionStorage.getItem("formValues"));
            formValues[1] = $("#mainBody_txtRmFrom").val();
            formValues[2] = $("#mainBody_txtRmTo").val();
            window.sessionStorage.setItem("formValues", JSON.stringify(formValues))
        }

        fnGetProducts(1);
        e.preventDefault();
    });
});

function fnMoreInformation(prodName, brandName) {
    $.ajax({
        type: "POST",
        url: window.location.protocol + "//" + window.location.host + "/Product-Finder/Soybean.aspx/SetSession",
        data: "{ prodName: '" + prodName + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: "true",
        success: function (msg) {
            prodName = prodName.toLowerCase().replace('brand', '');
            if (brandName.toLocaleLowerCase() === "golden harvest") {
                brandName = "golden-harvest";
            }
            window.location.href = "/soybean/" + prodName.trim();
            return false;
        },
        error: function (xhr, err) {
            var msg = JSON.parse(xhr.responseText);
            return false;
        }

    });
}
function fnViewMoreresults(value) {
    $('#ctl00_mainBody_dvloading').show();
    fnGetProducts(value);
    $('#ctl00_mainBody_dvloading').hide();
}
function fnGetProducts(countValue) {
    var bUrl = window.location.href;
    if (!($('#liCornCrop').hasClass('active'))) {
        if ($("#mainBody_txtRmFrom").val().match(/^[0-9]\d*(\.\d+)?$/) && $("#mainBody_txtRmTo").val().match(/^[0-9]\d*(\.\d+)?$/)) {
            if (($("#mainBody_txtRmFrom").val() >= 0 && $("#mainBody_txtRmFrom").val() <= 9.9) && ($("#mainBody_txtRmTo").val() >= 0 && $("#mainBody_txtRmTo").val() <= 9.9)) {
                var herbiFilter = "";
                var diseaseFilter = "";
                var nematodeFilter = "";
                var plantHeightFilter = "";
                var agroPlantFilter = "";
                var goldseriesFilter = "";
                var brandFilter = "Golden Harvest";
                if (window.sessionStorage.getItem("Filters") != null) {
                    var filters = JSON.parse(window.sessionStorage.getItem("Filters"));
                    if (filters["diseases"] != null)
                        diseaseFilter = filters["diseases"].join(",");
                    if (filters["herbicide_tolerance"] != null)
                        herbiFilter = filters["herbicide_tolerance"].join(",");
                    if (filters["nematodes"] != null)
                        nematodeFilter = filters["nematodes"].join(",");
                    if (filters["plant_characteristics"] != null)
                        agroPlantFilter = filters["plant_characteristics"].join(",");
                    if (filters["plant_height"] != null)
                        plantHeightFilter = filters["plant_height"].join(",");
                    if (filters["goldseries"] != null) {
                        goldseriesFilter = filters["goldseries"].join(",");
                    }
                }
                if (brandFilter == 'Golden Harvest') {
                    $("#mainBody_dvMainBrand").removeClass('brand-nksoy');
                    $("#mainBody_dvMainBrand").removeClass('brand-multi-soy');
                    $("#mainBody_dvMainBrand").addClass('brand-gh-soy');
                    $('#mainBody_mainTitleTag').text('Golden Harvest Soybeans Seed Finder');
                    $('#mainBody_dvMainImage').show();
                    $('#mainBody_dvMainImage').attr("src", window.location.protocol + "//" + window.location.host + "/images/gh-logo.jpg");
                    $('#mainBody_imageAnchor').attr("href", window.location.protocol + "//" + window.location.host + "/corn");
                }
                else {
                    $("#mainBody_dvMainBrand").removeClass('brand-nksoy');
                    $("#mainBody_dvMainBrand").removeClass('brand-gh-soy');
                    $("#mainBody_dvMainBrand").addClass('brand-multi-soy');
                    $('#mainBody_mainTitleTag').text('Soybeans Seed Finder');
                    $('#mainBody_dvMainImage').hide();
                }
                var rmLowerValue = (($("#mainBody_txtRmFrom").val() != '') && ($("#mainBody_txtRmFrom").val() != null)) ? ($("#mainBody_txtRmFrom").val()) : '2.5';
                var rmUpperValue = (($("#mainBody_txtRmTo").val() != '') && ($("#mainBody_txtRmTo").val() != null)) ? ($("#mainBody_txtRmTo").val()) : '3.5';
                var resultValue = '';
                var split = '';
                $.ajax({
                    type: "POST",
                    url: window.location.protocol + "//" + window.location.host + "/Product-Finder/Soybean.aspx/GetProducts",
                    data: "{ soyaBeanCount: '" + countValue + "', relativeLowerRange: '" + rmLowerValue + "',relativeUpperRange: '" + rmUpperValue + "',herbicideTolerance: '" + herbiFilter + "',diseaseFilter: '" + diseaseFilter + "',nematodeFilter: '" + nematodeFilter + "',agroPlantCharFilter: '" + agroPlantFilter + "',plantHeightFilter: '" + plantHeightFilter + "',brands: '" + brandFilter + "',browserUrl: '" + bUrl + "',goldseries: '" + goldseriesFilter+"'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: "true",
                    beforeSend: function () {
                        $('#mainBody_dvloading').show();  // <----show before sending
                    },
                    success: function (msg) {
                        $('#mainBody_dvloading').hide();
                        var valueResult = msg.d;
                        if (valueResult.trim().length > 20) {
                            split = valueResult.split('@');
                            $("#mainBody_dvrecordcount").html(split[1]);
                            $("#mainBody_divCount").html(split[1]);
                            $("#mainBody_divsoybeanproductfinder").html(split[0]);
                            equalHeight($('.info-container'));
                            $('#mainBody_divViewMoreResult').html('');
                            $('#mainBody_divViewMoreResult').html(split[3]);
                            $('#mainBody_divViewMoreResult').show();
                            $('#mainBody_divMessage').hide();
                            $("#mainBody_divCount").show();
                            $("#sf-results div[class^='col-md-'] strong").show()
                            $(".sf-count").show();
                            var ref = document.referrer;
                            var sg = 'custom-seed-guide';
                            if (ref.indexOf(sg) > -1 || ref.indexOf("seed-guide-preview") > -1) {
                                $('#sg-selections').show();
                                if (window.sessionStorage.getItem('selProducts') != null)
                                    Check_sg_add_text();
                                $('button.sg-add').css('display', 'flex');
                            }

                        }
                        else {
                            $('#mainBody_divMessage').show();
                            $("#mainBody_divMessage").html('Sorry, we couldn\'t find any matches. Please adjust one or more options and search again.');
                            $("#mainBody_divsoybeanproductfinder").html('');
                            $("#mainBody_divViewMoreResult").hide();
                            $("#mainBody_dvrecordcount").html('');
                            $("#mainBody_divCount").hide();
                            $("#sf-results div[class^='col-md-'] strong").hide();
                            $(".sf-count").hide();
                        }
                        return false;
                    },
                    error: function (xhr, err) {
                        var msg = JSON.parse(xhr.responseText);
                        return false;
                    },
                    complete: function () {
                        $('#mainBody_dvloading').hide(); // on complete of ajax hide it.
                    }
                });
            }
            else {
                $('#mainBody_validationErrorText').show();
                $('#mainBody_validationErrorText').html('<strong>Please enter relative maturity values between 0.0 and 9.9</strong>');
            }
        }
        else {
            $('#mainBody_validationErrorText').show();
            $('#mainBody_validationErrorText').html('<strong>Please enter relative maturity values between 0.0 and 9.9</strong>');
        }
    }
    else {
        fnClickCornCrop(); 
    }
}

function equalHeight(group) {
    var maxHeight = 0;
    var w = $(window).width();
    group.each(function () {
        $(this).removeAttr('style');
        maxHeight = Math.max(maxHeight, $(this).outerHeight());
    });
    if (w > 767) {
        group.css({ height: maxHeight + 'px' });
    } else {
        group.css({ height: 'auto' });
    }
}
function populateSelections() {
    if (window.sessionStorage.getItem('selProducts') != null) {
        var sgProducts = JSON.parse(window.sessionStorage.getItem('selProducts'));
        $('.sg-selection-container .row').html('');
        for (var i = 0, len = sgProducts.length; i < len; i++) {
            $(".sg-selection-inner").append("<div class='sg-product' data-product='" + sgProducts[i] + "'>" + sgProducts[i] + "<span class='remove-product'>X</span></div>");
        }
        if (sgProducts.length === 0) {
            $('button.sg-preview').attr('disabled', true);
        } else {
            $('button.sg-preview').attr('disabled', false);
        }
        Check_sg_add_text();
    }
}
populateSelections();
function Check_sg_add_text() {
    var sgSelections = JSON.parse(window.sessionStorage.getItem('selProducts'));
    for (var i = 0, len = sgSelections.length; i < len; i++) {
        var id = '#id_sg_add_' + sgSelections[i].replace('Brand', '').trim();
        $(id).addClass('selected');
        $(id).html("<span>-</span>Remove from Seed Guide")
    }
}
function handleButtons() {
    var numProducts = $('.sg-selection-inner .sg-product').length;
    if (numProducts > 0) {
        $('button.remove-selections').css('display', 'flex');
        $('button.sg-preview').attr('disabled', false);
    } else {
        $('button.remove-selections').hide();
        $('button.sg-preview').attr('disabled', true);
    }
}
function fnClearAllFilter() {
    $('.filter-section input[type="checkbox"]').prop('checked', false);
    $('.filter-section:not(.rm)').removeClass('active');
    var currentUrl = location.href.split('?')[0];
    if (history.pushState) {
        window.history.pushState("object or string", "Title", currentUrl);
    } else {
        document.location.href = currentUrl;
    }
    var Filter = [];
    window.sessionStorage.setItem('Filters', JSON.stringify(Filter));
    fnGetProducts(1);
}
function isDecimalNumber(input, evt) {
    // debugger;
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && ((charCode < 48 || charCode > 57) && charCode != 46)) {

        return false;
    }
    else {
        if (input.value >= 0.000 && input.value <= 9.9) {
            $("#mainBody_validationErrorText").hide();
            return true;
        }
        else {
            $('#mainBody_validationErrorText').show();
            $('#mainBody_validationErrorText').html('<strong>Please enter relative maturity values between 0.0 and 9.9</strong>');
            return false;
        }

    }
}
