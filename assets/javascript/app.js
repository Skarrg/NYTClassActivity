
var apiKey = "4022bac12aa44a84a335a5d4e2b379cc";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";



queryURL += '?' + $.param({
    'api-key': "4022bac12aa44a84a335a5d4e2b379cc",
    'q': "911",
    'fq': "",
    'begin_date': "",
    'end_date': "",
    'sort': "",
    'fl': "",
    'hl': "",
    'page': "",
    'facet_field': "",
    'facet_filter': ""

});


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    console.log(response);
    var docs = response.docs;
    for(var i =0; i < docs.length; i++){
        var newDiv = $("<div>");
        var headLine = $("<h2>").text(docs[i].headline);
        var pubDate = $("<p>").text(docs[i].pub_date);
        var snippet = $("<p>").text(docs[i].snippet);
        newDiv.append(headLine);
        newDiv.append(pubDate);
        newDiv.append(snippet);
    }
});