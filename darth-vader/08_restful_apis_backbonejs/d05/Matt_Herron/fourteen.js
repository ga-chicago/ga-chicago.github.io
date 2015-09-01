/*
14. MOAR AJAXXXXXXXXXXX

Create an $.ajax request that fetches your favourite movie from OMDB.
http://www.omdbapi.com/
In the success function, you need to console.log five attributes about the movie.
In the error function, you need to console.log that 'an error has occured. sorry!'
*/

var app = app || {};

app.OMDB = 'http://www.omdbapi.com/?t=sixteen+candles&y=&plot=short&r=json';

var ajaxData = {
	url: app.OMDB,
	type: 'GET',
	dataType: 'json',
	success: function(data) {
		var keys = Object.keys(data);
		for (i=0; i<5; i++) {
			console.log(keys[i] + ': ' + data[keys[i]]);
		}
	},
	error: function(err) {
		console.log('Your AJAX skills are not complete...  Obi Traver did not teach you well...');
	}
}

function callAJAX(data) {
	$.ajax(data);
}

callAJAX(ajaxData);