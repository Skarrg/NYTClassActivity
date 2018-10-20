
var apiKey = "4022bac12aa44a84a335a5d4e2b379cc";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

$("button").click(function (event) {
    event.preventDefault();
        
    var begin_date = $("#begin_date").text();
    var end_date = $("#end_date").text();
    var q = $("#q").text();

    queryURL += '?' + $.param({
        'api-key': "4022bac12aa44a84a335a5d4e2b379cc",
        'q': "911",
        'begin_date': "19900101",
        'end_date': "20181020",
        'sort': "newest"
    });

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //clean up previous search.
        $(".resultsrow").empty();

        var docs = response.response.docs;
        for (var i = 0; i < docs.length; i++) {
            var newDiv = $("<div>");
            var headLine = $("<h2>").text(docs[i].headline.main);
            var pubDate = $("<p>").addClass("pubDate").text(docs[i].pub_date);
            var snippet = $("<p>").addClass("snippet").text(docs[i].snippet);
            newDiv.append(headLine);
            newDiv.append(pubDate);
            newDiv.append(snippet);
            $(".resultsrow").append(newDiv);
        }
    });


})
