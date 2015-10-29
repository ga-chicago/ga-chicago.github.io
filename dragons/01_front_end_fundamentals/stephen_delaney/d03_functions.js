//
// I have two brothers.
//
function likeDogs() {
return "I like dogs. Woof.";
}

function addition(a, b) {
return a + b;
}

function subtraction(a, b){
  return a - b;
}

function multiplication(a, b){
  return a * b;
}

var x = function() {
  return "Hello, how are you?";
}
//call with x(). This is an anonymous function.

//anonymous function #2
var colors = ['green', 'blue', 'purple'];

colors.map(function(key) {
  return key + " is a cool color";
});
//.map will iterate through the entire argument
