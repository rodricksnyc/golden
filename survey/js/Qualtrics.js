function FormData(formQualtrics) {
    $('#' + formQualtrics + ' input, #' + formQualtrics + ' select, #' + formQualtrics + ' textarea, #' + formQualtrics + ' button.active').each(function () {
        var formData = {};
        var input = $(this);
        formData.FieldName = input.attr('data-qid');
        formData.FieldValue = input.val();
        formData.FieldIdentity = input.attr('data-question');
        formData.ImportId = input.attr('data-importId');
        if (formData.FieldName != 'undefined' && formData.FieldName != undefined)
            formDataArray.push(formData);
    });
    return formDataArray;
}

function PostFeedBackData(survey) {
    $.ajax({
        type: "POST",
        data: JSON.stringify(survey),
        url: "https://ebizservices.alfprod.com/SyngentaCMSWebApi/api/qualtrics/postfeedbackdata",
        contentType: 'application/json; charset=utf-8',
        crossOrigin: true,
        crossDomain: true,
        dataType: "json",
        async: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        success: function(res) {
            successCallback(res); 
        }
    });
}
function successCallback(response) {   
    if (response == true && apiresult != 1) {
        apiresult = 1;
    } else {
        apiresult = 0;
    }   
}
function PushDefault() {
    var formDataArray = [];

    var formClass = { FieldName: "StartDate", FieldIdentity: "Start Date", ImportId: "startDate", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "EndDate", FieldIdentity: "End Date", ImportId: "endDate", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "Status", FieldIdentity: "Response Type", ImportId: "status", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "IPAddress", FieldIdentity: "IP Address", ImportId: "ipAddress", FieldValue: $('#userId').val() };
    formDataArray.push(formClass);

    formClass = { FieldName: "Progress", FieldIdentity: "Progress", ImportId: "progress", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "Duration (in seconds)", FieldIdentity: "Duration (in seconds)", ImportId: "duration", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "Finished", FieldIdentity: "Finished", ImportId: "finished", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "RecordedDate", FieldIdentity: "Recorded Date", ImportId: "recordedDate", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "ResponseId", FieldIdentity: "Response ID", ImportId: "_recordId", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "RecipientLastName", FieldIdentity: "Recipient Last Name", ImportId: "recipientLastName", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "RecipientFirstName", FieldIdentity: "Recipient First Name", ImportId: "recipientFirstName", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "RecipientEmail", FieldIdentity: "Recipient Email", ImportId: "recipientEmail", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "ExternalReference", FieldIdentity: "External Data Reference", ImportId: "externalDataReference", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "LocationLatitude", FieldIdentity: "Location Latitude", ImportId: "locationLatitude", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "LocationLongitude", FieldIdentity: "Location Longitude", ImportId: "locationLongitude", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "DistributionChannel", FieldIdentity: "Distribution Channel", ImportId: "distributionChannel", FieldValue: "" };
    formDataArray.push(formClass);

    formClass = { FieldName: "UserLanguage", FieldIdentity: "User Language", ImportId: "userLanguage", FieldValue: "" };
    formDataArray.push(formClass);

    return formDataArray;
}