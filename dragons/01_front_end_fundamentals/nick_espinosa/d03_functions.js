// I like to code

function likeCats() {
  return "I like cats. meow";
}

function addition(a, b) {
  return a + b;
}

// nameOfFunction(arguments){
//return ...;
//}

function subtraction(a, b) {
  return a - b;
}
function multiplication (a, b) {
  return a * b;
}
subtraction(10, -5);

var x = function() {
  return "hello dolly";
}

///anonymous function
var colors = ['green', 'blue', 'purple'];

colors.map(function(key) {
  return key + " is a cool color"
})

colors.map(function(key) {
  console.log(key);
  return key + " is a cool color";
});
