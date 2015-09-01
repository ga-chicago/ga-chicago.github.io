/*
13. AJAXXXXXXXXXXXXXXXX

Use jQuery to create an $.ajax request that gets JSON.
You will get JSON from Chicago public data.
Console.log the output.
Create a success and error function that log out information.
You do not need to get very detailed; this is a basic function that just fetches and logs out all the data.
*/

var app = app || {};

app.ajaxCall = {
	url: 'https://data.cityofchicago.org/resource/x5xx-pszi.json',
	type: 'GET',
	dataType: 'json',
	success: function(data) {
		console.log('Successfully retrieved the data...');
		console.log(data);
	},
	error: function(err) {
		console.log('Error: API call failed, data was unable to be retrieved.  Please try again later...');
	}
}

function callAjax(data) {
	$.ajax(data);
}

callAjax(app.ajaxCall);