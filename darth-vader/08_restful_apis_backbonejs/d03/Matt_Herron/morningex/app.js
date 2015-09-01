//app namespace
app = app || {};

$(document).ready(function() {
	dataset = {
		url: "https://data.medicare.gov/resource/9n3s-kdb3.json",
		type: "GET",
		dataType: 'json',
		success: function(data) {
			data.forEach(function(hospital) {
				instit = Hospital
			});
			
		}
	}
	$.ajax(dataset);
});

//Hospital constructor
function Hospital(name, provider_number, state) {
	//attributes
	this.name = name;
	this.provider_number = provider_number;
	this.state= state;

	//methods
	this.stringify = function() {
		return "[" + this.name + ", " + this.provider_number + ", " + this.state + "]";
	}
}

