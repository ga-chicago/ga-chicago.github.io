var arr = []; 
var laptop = {
	type: 'macbook',
	size: '13',
	year: 'late 2013',  
	description: function() {
		console.log('This is a ' + this.size + ' inch ' + this.type + ' laptop '  + 'from ' + this.year);
	}
}

for (keys in laptop) {
	arr.push(keys); 
};

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]); 
}