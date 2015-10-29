/*
1. Detecting Types
Create a re-usable construct in Javascript (..you know, keeping things DRY..). It should accept one argument of any variable. This construct should return the type of the variable that is the argument.
*/

function varType(myVariable) {
  console.log(typeof(myVariable));
  return typeof(myVariable);
}

/*
2. Carousel
Create an array that represents people hopping off a carousel. Loop through the carousel using a for loop. Every other cycle through the loop (odd), someone will hop off. Repeat until the carousel is empty.
*/

var characters = ["spongebob", "squidward", "patrick"];

for (var i = 0; i < (characters.length) * 2; i++ ) {
  if (i%2 === 1) { // i is odd = every other cycle
    characters.pop();
  }
  console.log("finishing carousel loop " + (i + 1));
  console.log('characters still on carousel are ' + characters);
}

/*
3. You are an object...
Create an object that represents yourself. Assign ten attributes about yourself to this object. Use a foreach (for-in) loop to list all of theseattributes (and the keys that they are associated with).
*/
var adam = {
  firstName: "Adam",
  lastName: "Wilson",
  jewishName: "Moshe",
  hair: "brown",
  eyes: "green",
  birthYear: 1974,
  birthMonth: 5,
  favCouch: "Lazy-Boy",
  codingMusic: "electronic",
  seat: "back row far right",
};

for (var key in adam) {
  console.log('the value of ' + key + ' is ' + adam[key]);
}

/*
4. Elementary School
In elementary school, when you divide you typically use division and have to report the remainder. Create a function that returns a string. It will accept two arguments: a number, and a number to divide that number against.
The returned string should state what the result isand the remainder. You will need to use the / and the % operators.
*/

function returnString(dividend, divisor) {
  var result = parseInt(dividend / divisor);
  var remainder = dividend % divisor;
  return (dividend + " divided by " + divisor + " gives us " + result + " with a remainder of " + remainder + ".");
}

returnString(100, 25);
