// $.ajax
// GET: get resources from a web
// POST: send /submit data somewhere (POST a tweet or status)

$.ajax(); // ajax is a method of jQuery

// arguments {} for jQuery
{
	type: 'get', // OR 'post'
	url: 'http://somewhere.com/api/stuff', // url
	dataType: 'json', // also could be 'xml', etc..
	// POST only...
	data: {}	// send 
}

// add arguments - argument for Ajax is a JS {}
$.ajax({
	type: 'get',
	url: 'http://somewhere.com/api/stuff',
	dataType: 'json'
});
// OR...
var ajaxArgument = {
	type: 'get',
	url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1111111111',
	dataType: 'json',
	success: function(data) {
		console.log("success");
		console.log(data);
	},
	error: function(error) {
		console.log("error")
		console.log(error);
	}
};
$.ajax(ajaxArgument);

// or...
$.ajax(ajaxArgument).success(function(data) {
	console.log(data);
});
$.ajax(ajaxArgument).done(function(data) {
	console.log(data);
});
$.ajax(ajaxArgument).error(function(error) {
	console.log(error);
});

// how do I add a spinner or some sort of icon to show loading?

// do some code to show a spinner...
$('.spinner').show(); // <div class="spinner">....
$.ajax({
	type: 'get',
	url: 'http://imperialholonet.herokuapp.com',
	dataType: 'json',
	success: function(data) { // data is the data from our server
		console.log(data);
		// some code to success message!
		$('.success').show(); // <div class="success">....
	},
	error: function(error) {
		console.log(error);
		// some error code...
		$('.wompwomp').show(); // <div class="wompwomp">....
	},
	done: function(done) {
		console.log(done);
		// now, hide the spinner...
		$('.spinner').hide();  // <div class="spinner">....
	}
});

// using .done()
// only should be used when you own the server for the API
// not if you rely on someone else for data!
var ajaxArgument = {
	type: 'get',
	url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1111111111',
	dataType: 'json'
};
$.ajax(ajaxArgument).done(function(data) {
	console.log('whoa now, we\'re done..');
	console.log(data);
});

// what about... .getJSON?
// shorthand 'GET' request method
$.getJSON("url", function(data) {
    // do stuff with your data
    console.log(data);
});
