/*
3. Objects; Objects Everywhere

Create an Object that represents a laptop.
Give it 3-5 attributes.
Give it one ability that tells the world about itself (similar to a to_s in Ruby)
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