$(document).ready(function () {
    $(document).on('click', '.newAg', function (e) {
        e.preventDefault();
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
                $('#agronomicDetailsValue').html('');
                //debugger;
                var results = data.d;
                window.location.href = "https://" + window.location.host + '/agronomy/articles/' + results;
                $('#dvloading').hide();
                return false;
            }
        });
    });

});