$(function () {

    //parse URL parameters
    function getQueryParameters(str) {
        return (str || document.location.search).replace(/(^\?)/, '').split("&").map(function (n) { return n = n.split("="), this[n[0]] = n[1], this } .bind({}))[0];
    };

    var queryParams = getQueryParameters();

    //if params exist, loop through and fill the form
    if (queryParams) {
        $.each(queryParams, function (key, value) {
            var element = 'input[name="' + key + '"]';
            $(element).val(value).siblings('.placeholder').addClass('active');
        });
    }

    $('#profit-calculator input[type="reset"]').click(function (e) {
        $('.placeholder').removeClass('active');
        $('#profit-calculator :input[type="number"]').removeClass('error');
        $('#results-box').slideUp();
    });

    $('#profit-calculator a.btn-default').click(function (event) {
        event.preventDefault();
        var errorFlag = false;


        $('#select-box').val();

        // get all the input values
        var $inputs = $('#profit-calculator :input[type="number"]'),
        // make array to hold input values
            values = {};

        $inputs.each(function () {

            if ($.isNumeric($(this).val())) {
                $(this).removeClass('error');
                values[this.name] = parseFloat($(this).val(), 10);
            } else {
                $(this).addClass('error');
                errorFlag = true;
            }

        });


        if (errorFlag != true) {
            var areaPlanted = $("#C1").val();
            var desiredStand = $("#C2").val();
            var germination = $("#C3").val();
            var mortality = $("#C4").val();
            var rowWidth = $('#select-box').val()
            $.ajax({
                type: "POST",
                url: "https://" + window.location.host + "/cornlanding/corn.aspx/calculate",
                data: "{ areaPlanted: '" + areaPlanted + "',desiredStand: '" + desiredStand + "',germination: '" + germination + "',mortality: '" + mortality + "',rowWidth: '" + rowWidth + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                success: function (msg) {
                    var num=(msg.d[0]).toLocaleString('en');
                    $('#B17').text(num);
                    num = (msg.d[1]).toLocaleString('en');
                    $('#C19').text(num);
                    num = (msg.d[2]).toLocaleString('en');
                    $('#numUnits').text(num);
                    equalHeight($('.results-b'));
                },
                error: function (xhr, err) {
                    $('#results-box').slideUp();
                    $('#error-message').show();
                }
            });
            $('#error-message').hide();
            $('#results-box').slideDown();

        } else {

            $('#results-box').slideUp();
            $('#error-message').show();
        }


    });
});

function validateMaxChars(input, char) {
    var lnth = input.value.length;
    if (lnth > char) {
        input.value = input.value.slice(0, char);
    }
    else {
        return true;
    }
}

function equalHeight(group) {
    var maxHeight = 0;
    w = $(window).width();
    group.each(function () {
        $(this).removeAttr('style');
        maxHeight = Math.max(maxHeight, $(this).outerHeight());
    });
    group.css({ height: maxHeight + 'px' });
    if (w >= 768) {
        $(window).scrollTop($('#profit-calculator').offset().top);
    }
    else {
        $(window).scrollTop($('#results-box').offset().top);
    }
}