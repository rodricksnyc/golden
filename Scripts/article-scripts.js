$(document).ready(function () {
    $('.author-moreBtn').click(function () {
        $(this).toggleClass('open');
        $('.author-more-info').slideToggle(500);
    });


    $(document).on('click', '#article-list #stageOne a.btn-default', function (e) {
        if ($('#stageOneAdditionalArticle').html() == '' || $('#stageOneAdditionalArticle').html() == undefined || $('#stageOneAdditionalArticle').html() == null) {
            var articleId = $('#article-list #stageOne a.btn-default').attr('articleid');
            var cropName = $('#article-list #stageOne a.btn-default').attr('cropname');
            GetAdditonalArticle('1', articleId,cropName);
        }
        e.preventDefault();
        $(this).toggleClass('open');
        $('#stageOneAdditionalArticle').toggleClass('additional-articles');
        if ($(this).hasClass('open')) {
            $(this).text('View Less Articles');
        }
        else {
            $(this).text('View All Articles');
        }
    });

    $(document).on('click', '#article-list #stageTwo a.btn-default', function (e) {
        if ($('#stageTwoAdditionalArticle').html() == '' || $('#stageTwoAdditionalArticle').html() == undefined || $('#stageTwoAdditionalArticle').html() == null) {
            var articleId = $('#article-list #stageTwo a.btn-default').attr('articleid');
            var cropName = $('#article-list #stageTwo a.btn-default').attr('cropname');
            GetAdditonalArticle('2', articleId, cropName);
        }
        e.preventDefault();
        $(this).toggleClass('open');
        $('#stageTwoAdditionalArticle').toggleClass('additional-articles');
        if ($(this).hasClass('open')) {
            $(this).text('View Less Articles');
        }
        else {
            $(this).text('View All Articles');
        }
    });

    $(document).on('click', '#article-list #stageThree a.btn-default', function (e) {
        if ($('#stageThreeAdditionalArticle').html() == '' || $('#stageThreeAdditionalArticle').html() == undefined || $('#stageThreeAdditionalArticle').html() == null) {
            var articleId = $('#article-list #stageThree a.btn-default').attr('articleid');
            var cropName = $('#article-list #stageThree a.btn-default').attr('cropname');
            GetAdditonalArticle('3', articleId, cropName);
        }
        e.preventDefault();
        $(this).toggleClass('open');
        $('#stageThreeAdditionalArticle').toggleClass('additional-articles');
        if ($(this).hasClass('open')) {
            $(this).text('View Less Articles');
        }
        else {
            $(this).text('View All Articles');
        }
    });

    $(document).on('click', '#article-list #stageFour a.btn-default', function (e) {
        if ($('#stageFourAdditionalArticle').html() == '' || $('#stageFourAdditionalArticle').html() == undefined || $('#stageFourAdditionalArticle').html() == null) {
            var articleId = $('#article-list #stageFour a.btn-default').attr('articleid');
            var cropName = $('#article-list #stageFour a.btn-default').attr('cropname');
            GetAdditonalArticle('4', articleId, cropName);
        }
        e.preventDefault();
        $(this).toggleClass('open');
        $('#stageFourAdditionalArticle').toggleClass('additional-articles');
        if ($(this).hasClass('open')) {
            $(this).text('View Less Articles');
        }
        else {
            $(this).text('View All Articles');
        }
    });


    $(document).on('click', '#article-list #stageFive a.btn-default', function (e) {
        if ($('#stageFiveAdditionalArticle').html() == '' || $('#stageFiveAdditionalArticle').html() == undefined || $('#stageFiveAdditionalArticle').html() == null) {
            var articleId = $('#article-list #stageFive a.btn-default').attr('articleid');
            var cropName = $('#article-list #stageFive a.btn-default').attr('cropname');
            GetAdditonalArticle('5', articleId, cropName);
        }
        e.preventDefault();
        $(this).toggleClass('open');
        $('#stageFiveAdditionalArticle').toggleClass('additional-articles');
        if ($(this).hasClass('open')) {
            $(this).text('View Less Articles');
        }
        else {
            $(this).text('View All Articles');
        }
    });

    function GetAdditonalArticle(stageName, articleId, cropName) {
        $('#dvloading').show();
        $.ajax({
            url: "https://" + window.location.host + '/agronomyarticles/agronomy.aspx/GetAdditonalArticlesForCrops',
            data: "{ stageName: '" + stageName + "', articleId: '" + articleId + "', cropName: '" + cropName + "'}",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'post',
            async: true,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // debugger;
                //alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                //callback("No Results Found");
                $('#dvloading').hide();
            },
           success: function (data) {
                //debugger;
                if (stageName == '1') {
                    $('#stageOneAdditionalArticle').html(data.d);
                }
                else if (stageName == '2') {
                    $('#stageTwoAdditionalArticle').html(data.d);
                }
                else if (stageName == '3') {
                    $('#stageThreeAdditionalArticle').html(data.d);
                }
                else if (stageName == '4') {
                    $('#stageFourAdditionalArticle').html(data.d);
                }
                else if (stageName == '5') {
                    $('#stageFiveAdditionalArticle').html(data.d);
                }
                $('#dvloading').hide();
                return false;

            }
        });
    }


    function GetAgronomicDetails(cropNameValue) {
        $('#dvloading').show();
        $.ajax({
            url: "https://" + window.location.host + '/agronomyarticles/agronomy.aspx/GetAgronomicStageDetailsString',
            data: "{ cropName: '" + cropNameValue + "'}",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'post',
            async: true,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
               //  debugger;
              // alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
              // callback("No Results Found");
                $('#dvloading').hide();
            },
            
            success: function (data) {
                $('#agronomicDetailsValue').html('');
                //debugger;
                var results = data.d;
                $('#agronomicDetailsValue').html(results);
                chckOnPage();
                console.log('check-here');
                $('#dvloading').hide();
                return false;
            }
        });
    }

   $(document).on('click', '#corn', function () {
        if (!$(this).is(":checked") && !$('#soybeans').is(":checked")) {
            $('#soybeans').prop('checked', true);
        }
        var cropName = GetCropName();
        GetAgronomicDetails(cropName);
        return false;
    });

    $(document).on('click', '#soybeans', function () {
        if (!$(this).is(":checked") && !$('#soybeans').is(":checked")) {
            $('#corn').prop('checked', true);
        }
        var cropName = GetCropName();
        GetAgronomicDetails(cropName);
        return false;
    });

    function GetCropName() {
        if ($('#corn').is(":checked") && !$('#soybeans').is(":checked")) {
            return 'Corn';
        }
        else if (!$('#corn').is(":checked") && $('#soybeans').is(":checked")) {
            return 'Soybeans';
        }
        else {
            $('#corn').prop('checked', true);
            $('#soybeans').prop('checked', true);
            return '';
        }

    }


    $(document).on('click', '.newAg', function (e) {
        e.preventDefault();
        //alert('clicked');
        var stagename = $(this).attr('stagename');
        var cropName = $(this).attr('cropname');
        var articleTitle = $(this).attr('title');
        if (stagename == undefined || stagename == '')
        {
            stagename = $(this).find('a').attr("stagename");
            cropName = $(this).find('a').attr("cropname");
            articleTitle = $(this).find('a').attr("title");
        }
        $.ajax({
            url: "https://" + window.location.host + '/agronomyarticles/agronomy.aspx/SetAgronomicStageSession',
            data: "{ stageName: '" + stagename + "',cropName: '" + cropName + "',articleTitle: '" + articleTitle + "'}",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'post',
            async: true,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //debugger;
               // alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
               // callback("No Results Found");
                $('#dvloading').hide();
            },

            success: function (data) {
                //$('#agronomicDetailsValue').html('');
                //debugger;
                var results = data.d;
                window.location.href = "https://" + window.location.host + '/agronomy/articles/' + results;
                $('#dvloading').hide();
                return false;
            }
        });
    });

    var title = $('#mainBody_mainHeading > H1').text();

    $(".twitter-share").attr('href', 'https://twitter.com/intent/tweet?text=' + title + '&url=' + location.href + '&via=gldnharvest&utm_campaign=Golden-Harvest&utm_medium=referral&utm_source=Twitter&utm_content=Suggested-Tweet&utm_term=blog');
    
});