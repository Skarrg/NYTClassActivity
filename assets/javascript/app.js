
var apiKey = "4022bac12aa44a84a335a5d4e2b379cc";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";



$("#submit").click(function (event) {
    event.preventDefault();
        
    var begin_date = $("#begin_date").val();
    var end_date = $("#end_date").val();
    var q = $("#search-input").val();
    if(begin_date.length != 4){
        begin_date = "1900";
    }
    
    if(end_date.length != 4){
        end_date = "2020";
    }

    if(q.length == 0){
        q = "911";
    }



    queryURL += '?' + $.param({
        'api-key': "4022bac12aa44a84a335a5d4e2b379cc",
        'q': q,
        'begin_date': "19000101",
        'end_date': "20200101",
        'sort': "newest"
    });

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //clean up previous search.
        $("#resultGoesHere").empty();

        var docs = response.response.docs;
        for (var i = 0; i < docs.length; i++) {
            var newDiv = $("<div>").addClass("article");
            var headLine = $("<h2>").text(docs[i].headline.main);
            var pubDate = $("<p>").addClass("pubDate").text(docs[i].pub_date);
            var snippet = $("<p>").addClass("snippet").text(docs[i].snippet);
            newDiv.append(headLine);
            newDiv.append(pubDate);
            newDiv.append(snippet);
            $("#resultGoesHere").append(newDiv);
        }
    });


})
