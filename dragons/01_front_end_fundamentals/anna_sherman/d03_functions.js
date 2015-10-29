// I like deadlifts



function likeCats() {
  return "I like cats. meow.";
}

console.log (likeCats());

function addition(a,b) {
  return a+b;
}

console.log(addition(50,3));

function subtraction(a,b) {
  return a - b;
}

function multiplication(a,b) {
  return a*b;
}

console.log (multiplication(4,5));
console.log(subtraction(24,1));

var x = function(){
  return "deadlifts";
}

console.log(x());

var colors = ['green', 'blue', 'purple'];

colors.map(function(key) {
  return key + " is a cool colour";
});

//this is the inner function. it's anonymous.
//function(key) {
//  return key + "is a cool colour";
//}
