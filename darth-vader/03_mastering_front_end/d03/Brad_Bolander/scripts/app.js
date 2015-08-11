$(document).ready(function() {

  console.log("All resources are loaded");

  $.ajax({
	url: 'http://www.omdbapi.com/?t=Star+Wars&y=&plot=short&r=json',
	type: "GET",
	dataType: 'json',
	success: function(data) {
		$('body').append(data.Title + " was released in " + data.Year + "<hr><br>");
	}

});
});
