/*
4. Objects... again

Using the Object you created for #3....
Research the Object method that lists all of the keys in an Object. Use it to create an array.
Loop through this array using a for (not a for-in) loop.
console.log the keys.
*/

var laptop = {
	screen: 'retina 15-inch',
	processor: '2.8 GHz Intel Core i7',
	memory: '16 GB 1600 MHz DDR3',
	graphics: 'Intel Iris Pro 1536 MB',
	toString: function() {
		console.log(this);
	}
};

var keys = Object.keys(laptop);

for (var i = 0; i < keys.length; i++) {
	console.log(keys[i]);
}

