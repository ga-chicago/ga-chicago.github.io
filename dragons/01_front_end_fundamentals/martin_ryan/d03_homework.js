//
// 1. Detecting Types
// Create a re-usable construct in Javascript (..you know, keeping things DRY..).
// It should accept one argument of any variable.
// This construct should return the type of the variable that is the argument.
function typeVar(anyVar) {
  return typeof(anyVar);
}

// 2. Carousel
// Create an array that represents people hopping off a carousel.
// Loop through the carousel using a for loop. Every other cycle through the loop (odd), someone will hop off.
// Repeat until the carousel is empty.

var carousel = ['zero','one','two','three','four','five'];
var numAround = ['first','second','third','fourth','fifth','sixth','seventh','eighth']
for (var i = 0; 0 < carousel.length; i++) {
  // console.log(i);
  console.log('This is the ' + numAround[i] + ' time around!');
  if (i % 2 == 1) {
    console.log(carousel[0] + ' is jumping off!')
    carousel.shift(i);
    if (carousel.length == 0) {
      console.log('There\'s no one left on the ride! Stop wasting electricity Fool!')
    }
  }
}

// Create an object that represents yourself.
// Assign ten attributes about yourself to this object.
// Use a foreach (for-in) loop to list all of these attributes (and the keys that they are associated with).

var martin = {
  hair : 'brown',
  eyes : 'brown',
  arms : 2,
  legs : 2,
  feet : 2,
  heart : 'gold',
  hands : 'magic'
};

for (var attribs in martin) {
  if (typeof(martin[attribs]) == 'number'){
    console.log('Martin has ' + martin[attribs] + ' ' + attribs);
    } else {
    console.log('Martin\'s ' + attribs + ' is ' + martin[attribs]);
  }
}

// 4. Elementary School
// In elementary school, when you divide you typically use division and have to report the remainder.
// Create a function that returns a string.
// It will accept two arguments: a number, and a number to divide that number against.
// The returned string should state what the result is and the remainder.
// You will need to use the / and the % operators

function elemDiv(a, b) {
  console.log(a + ' divided by ' + b + ' is ' + parseInt(a / b) + ' with a remainder of ' + (a % b));
}

elemDiv(10,3);
