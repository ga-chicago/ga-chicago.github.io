/*
4. Objects... again

Using the Object you created for #3....
Research the Object method that lists all of the keys in an Object. Use it to create an array.
Loop through this array using a for (not a for-in) loop.
console.log the keys.
*/

var laptop = new Object();

laptop.brand = 'Apple';
laptop.model = 'MacBook Pro';
laptop.screen_size = 17;
laptop.processor = new Object();
laptop.processor.model = 'Intel Core i7';
laptop.processor.speed = '2.2GHz'
laptop.get = function() {
	return 'Laptop: ' + laptop.brand + ' ' + laptop.model + ' with a ' + laptop.screen_size + ' inch display';
}

//get the object keys in an array
Object.keys(laptop).forEach(function(key) {
	console.log(key + '\n');
});
