/*
question 1 - 1. Detecting Types

Create a re-usable construct in Javascript (..you know, keeping things DRY..).
It should accept one argument of any variable.
This construct should return the type of the variable that is the argument.
*/
function detect(arg){
  return typeof arg;
}

/*
2. Carousel

Create an array that represents people hopping off a carousel.
Loop through the carousel using a for loop. Every other cycle through the loop (odd), someone will hop off.
Repeat until the carousel is empty.
*/


var carousel = ['James', 'Lars', 'Kirk', 'Cliff'];
var index = carousel.length*2;
for (var i = 0; i < index-1; i++) {
  if (i%2 === 0) { //used i%2 === 0 because we start counting cycles with 1 but the index of the array starts at 0.
    carousel.shift();
  }
}

/*
3. You are an object...

Create an object that represents yourself.
Assign ten attributes about yourself to this object.
Use a foreach (for-in) loop to list all of these attributes (and the keys that they are associated with).
*/

var jt = {
  height : '5\' 10\"',
  weight : 'none of your business',
  city : 'Chicago',
  name : 'Jason Tham',
  balls : true,
  age : 33,
  team : 'Cubs',
  actor : 'De Niro',
  game : 'Final Fantasy VI',
  top5movies : ['Godfather II','Blade Runner','The Big Lebowski','The Third Man', 'The Good\, the Bad\, \& the Ugly'],
  drink : 'Scotch'
};

for (var variable in jt) {
  console.log("Jason has attribute " + variable + " with value " + jt[variable]);
}

/*
4. Elementary School

In elementary school, when you divide you typically use division and have to report the remainder.
Create a function that returns a string.
It will accept two arguments: a number, and a number to divide that number against.
The returned string should state what the result is and the remainder.
You will need to use the / and the % operators.
*/

//This only works for positive integers, I assume that was the use case.

function elementary(numerator, denominator){
  var result;
  if(numerator%denominator === 0){
     result = "The result of " + numerator + " divided by " + denominator + " is: " + numerator/denominator;
  } else {
    result = "The result of " + numerator + " divided by " + denominator + " is: " + Math.floor(numerator/denominator) + " remainder " + numerator%denominator;
  }
  return result;
}
