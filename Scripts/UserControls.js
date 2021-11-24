window.onload = function getAddress(event) {
    if (readCookie('GHuserLoc') == null) {
        getUserLocationfromIP();
        var userLocation = JSON.parse(readCookie('GHuserLoc'));
        GHUserCity = userLocation.city;
        GHUserState = userLocation.state;
        GHUserZip = userLocation.zip;
        GHUserLat = userLocation.lat;
        GHUserLng = userLocation.long;
    }
    else {
        if ($("#hdnvalue").val() != 'true') {
            $("#btnLoad").trigger("btnLoad_Click");
        }
    }
}

