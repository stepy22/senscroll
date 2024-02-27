$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get('query');
    if (query) {
        $('#query').val(query);
    }
    var query = $("#query").val();
    if (query.length >= 3) {
        $.ajax({
            url: 'https://virion.com.hr/results.php',
            type: 'GET',
            data: {
                query: query
            },
            success: function(response) {
                var data = JSON.parse(response);
                $('#results').empty();
                data.forEach(function(item) {
                    var sentence = item.sentence.replace(new RegExp(query, 'g'), '<b style="font-size:21px">' + query + '</b>');
                    var cleanSentence = $('<div>').html(sentence).text(); // Uklanja HTML tagove iz sentence
var encodedSentence = encodeURIComponent(cleanSentence); // Kodira 'sentence' za korištenje u URL-u
var encodedUrl = encodeURI(item.url); // Kodira URL

var $link = $('<a>').attr('href', encodedUrl + '?sentence=' + encodedSentence).text(cleanSentence);
var $paragraph = $('<p>').append($link);

$('#results').append($paragraph);

                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error(textStatus, errorThrown);
            }
        });
        }

    $('#query').keyup(function() {
        var query = $(this).val();
    if (query.length >= 3) {
        $.ajax({
            url: 'https://virion.com.hr/results.php',
            type: 'GET',
            data: {
                query: query
            },
            success: function(response) {
                var data = JSON.parse(response);
                console.log(data);
                $('#results').empty();
                data.forEach(function(item) {
                    var sentence = item.sentence.replace(new RegExp(query, 'g'), '<b style="font-size:21px">' + query + '</b>');
                    var cleanSentence = $('<div>').html(sentence).text(); // Uklanja HTML tagove iz sentence
var encodedSentence = encodeURIComponent(cleanSentence); // Kodira 'sentence' za korištenje u URL-u
var encodedUrl = encodeURI(item.url); // Kodira URL

var $link = $('<a>').attr('href', encodedUrl + '?sentence=' + encodedSentence).text(cleanSentence);
var $paragraph = $('<p>').append($link);

$('#results').append($paragraph);

            });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error(textStatus, errorThrown);
            }
        });
        }
    });
});