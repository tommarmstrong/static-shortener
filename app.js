var gistID = "gistidjkhdsakjhfkjsadhf";
var defaultURL = "http://example.com";

var getFirstFile = function (files) {
    for (var file in files) {
        return files[file];
    }
};

var getLinks = function (file) {
    return JSON.parse(file.content).links;
};

var redirectToDefault = function () {
    window.location.href = defaultURL;
};

var getHash = function () {
  return window.location.hash.replace("#","");
};

var display404 = function () {
    $("body").text("404: Short link not found");
};

if(window.location.hash) {
    $.get( "https://api.github.com/gists/"+gistID, function( data ) {
        var links = getLinks(getFirstFile(data.files));
            if (links[getHash()] != null) {
                window.location.href = links[getHash()].url;
            }
            else {
                display404();
            }
    });
} else {
    redirectToDefault();
}




