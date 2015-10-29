//
// I like cats but dogs more.
//

function likeCats() {
	return "I like cats. meow.";
}

function addition(a, b) {
	return a + b;
}

function subtraction(a, b) {
	return a - b;
}

function multiplication(a, b) {
	return a * b;
}

// anonymous function

var colours = ['green', 'blue', 'purple'];

colours.map(function(key) {
	return key + " is a cool color";
});
