//jquery script here 

$.ajax({
	url: 'https://data.cityofchicago.org/resource/x8fc-8rcq.json',
	type: 'GET', 
	dataType: 'json', 
	error: function(err) {
		console.log('error:' + err);
	},
	success: function(data) {
		for (idx in data) {
            console.log('Name: ' + data[idx].name_); 
            console.log('Address: ' + data[idx].address);
        }
	}
}); 