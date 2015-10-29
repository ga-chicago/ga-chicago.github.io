//1. Detecting Types
//  Create a re-usable construct in Javascript (..you know, keeping things DRY..).
//  It should accept one argument of any variable.
//  This construct should return the type of the variable that is the argument.
console.log("\n1. Detecting Types");

function typeDetect(arg) {
  return typeof(arg);
}

console.log("\t3 is a Type of ... " + typeDetect(3));
console.log("\t\"five\" is a Type of ... " + typeDetect("five"));


// 2. Carousel
//
// Create an array that represents people hopping off a carousel.
// Loop through the carousel using a for loop. Every other cycle through the loop (odd), someone will hop off.
// Repeat until the carousel is empty.
console.log("\n2. Carousel Challenge");

var people = ["william", "marilyn", "chrissy", "jessica", "david"];
var oddCycle = false;
for (var idx = 0; people.length != 0; idx++) {

  if (oddCycle === true) {
    console.log("\t" + people.pop() + " hopped off");
    oddCycle = false;
  } else {
    oddCycle = true;
  }
}

people;


// 3. You are an object...
//
// Create an object that represents yourself.
// Assign ten attributes about yourself to this object.
// Use a foreach (for-in) loop to list all of these attributes (and the keys that they are associated with).
console.log("\n3. You are an object...");

var david = {
  age: 28,
  eyeColor: 'brown',
  hairColor: 'brown',
  pets: ["Loki", "Thor"],
  favColor: "purple",
  favFood: "pizza",
  dominentHand: "left",
  bornIn: "Indiana",
  siblings: "yes",
  mobileDevice: "android"
};

for (var attr in david) {
  console.log("\tDavid's " + attr + " is " + david[attr]); //Silly me for having 1 plural attr!
}


// 4. Elementary School
//
// In elementary school, when you divide you typically use division and have to report the remainder.
// Create a function that returns a string.
// It will accept two arguments: a number, and a number to divide that number against.
// The returned string should state what the result is and the remainder.
// You will need to use the / and the % operators.
console.log("\n4. Elementary School");

function resultAndRemainder(a, b) {
  return "\t" + a + " divided by " + b + " ... " + parseInt(a / b) + " with a remainder of " + a % b;
}

console.log(resultAndRemainder(5, 2));
