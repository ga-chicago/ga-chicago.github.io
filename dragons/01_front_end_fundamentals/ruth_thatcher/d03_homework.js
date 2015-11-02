//1
//Create a re-usable construct in Javascript (..you know, keeping things DRY..).
//It should accept one argument of any variable.
//This construct should return the type of the variable that is the argument.


function gettype (sandwich)
   {
     return typeof(sandwich)
   }
 typeof ('sandwich')

//2
//Carousel
//Create an array that represents people hopping off a carousel.
//Loop through the carousel using a for loop. Every other cycle through the loop (odd), someone will hop off.
//Repeat until the carousel is empty.
var carousel = ['johnny', 'billy', 'sally', 'danny', 'suzie'];
  for (var i = 0; carousel.length !== 0; i++) {
    if (i % 2 !== 0);
      carousel.pop();
    console.log(i);
    console.log(carousel);
    }
//3
//You are an object...
//Create an object that represents yourself.
//Assign ten attributes about yourself to this object.
//Use a foreach (for-in) loop to list all of these attributes (and the keys that they are associated with).
var hamburger = {
  bread:'buns',
  veggie: 'lettuce',
  veggie1: 'tomato',
  veggie2: 'pickle',
  meat: 'beef patty',
  meat1: 'bacon',
  meat2: 'fried egg',
  condiment: 'ketchup',
  condiment1: 'mustard',
  condiment2: 'peanut butter'
};
for (var prop in hamburger) {
  console.log('The value for ' + prop + ' is ' + hamburger[prop]);
}

//4
//Elementary School
//In elementary school, when you divide you typically use division and have to report the remainder.
//Create a function that returns a string.
//It will accept two arguments: a number, and a number to divide that number against.
//The returned string should state what the result is and the remainder.
//You will need to use the / and the % operators.
  var x = 10
  var y = 3
  function divideRemain (x , y) {
  console.log (x / y);
  console.log (x%y);
  console.log('The result is ' + (x/y) + ' and ' +(x%y));
}
