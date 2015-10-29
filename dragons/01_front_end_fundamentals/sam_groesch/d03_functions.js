//
// Cats are alright. Like not a huge fan or anything but there are some nice ones. Dogs are definitely better though
//

function likeCats(){
  return "I like cats. Meow."
}

function addition(a, b){
  return a + b;
}

function subtraction(a, b){
  return a - b;
}

function multiplication (a, b) {
  return a * b;
}

function divisionRemainder (a, b){
  var x = a % b;
  a = a - x;
  return a/b + " with a remainder of " + x;
}

function prime (a) {
  for (var i = 2; i <= a/2; i++) {
    var x = a % i;
    if (x === 0) {
      return "Not a prime number";
      break;
    }
  }
  return a + " is a prime number!";
}

var x = function() { //Don't declare a function name, but assign to a var instead
  return "Hello, Dolly!"; //This is used to call functions faster. Call as x() instead of function()
}

//anonymouse function
var colors = ['green', 'blue', 'purple'];

colors.map(function(key) { //anonymous function has no name but it still runs as a function
  return key + " is a cool color.";
});
