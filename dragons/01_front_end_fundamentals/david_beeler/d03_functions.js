// I love cats!

function likeCats() {
  return "I like cats. meow.";
}
console.log(likeCats());


function addition(a, b) {
  return a + b;
}
console.log(addition(40, 2));


function subtraction(a, b) {
  return a - b;
}
console.log(subtraction(40, 2));


function multiplication(a, b) {
  return a * b;
}
console.log(multiplication(2,5));


// anonymous function
var x = function() {
  return "hello, dolly";
}
console.log(x());


var colors = ["green", "blue", "purple"]
console.log(colors.map(function(key) {
  return key + " is a cool color.";
}));
console.log(colors);
