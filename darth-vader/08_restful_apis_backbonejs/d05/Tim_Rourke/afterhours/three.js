/*3. Objects; Objects Everywhere

Create an Object that represents a laptop.
Give it 3-5 attributes.
Give it one ability that tells the world about itself (similar to a to_s in Ruby)
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