var model = model || {}; 

model.data = [
	'hi'
]; 

// check the array and set the right item 
model.filter = function(data) {
	this.data.filter(function(idx) {
		if (idx == data) {
			model.match = data; 
	}  
});
}
	
model.get = function(data) {
	//return data 
	model.filter(data);
	if (model.match == data) {
		console.log('found ' + model.match); 
	} else {
		console.log('could not find');
	} 
};

model.set = function(data) {

	this.data.push(data); 
	console.log(data + ' has been added'); 
}; 
