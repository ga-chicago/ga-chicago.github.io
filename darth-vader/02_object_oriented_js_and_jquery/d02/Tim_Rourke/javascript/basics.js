/*
 * OBJECTS
 *
 * Objects are the entitites in JavaScript that all other JS
 * entities stem from. They act as named key/value stores that
 * can store both data and functionality.
 *
 */

 // Objects - Example 1: Object literal definition

 var exampleObject1 = {
   thing: true,
   doThing: function() {
     console.log('doing thing')
   },
   reflectThing: function() {
     console.log(this.thing);
   }
 }

 // Objects - Example 2: Object definition using 'new' keyword and constructor

 function ParentThing(thingy1, thingy2, thingy3) {
   this.thingy = thingy1;
   this.thingy2 = thingy2;
   this.thingy3 = thingy3;
 }

 var ChildThing = new ParentThing('property1', 'property2', 'property3');

 // Objects - Example 3: Object definition using 'new' keyword and dot and
 // bracket notation to define properties

 var sampleThing = new Object();

 sampleThing.height = 923;

 sampleThing.width = 147;

 sampleThing['getWidth'] = function() {
   return this.width;
 };


 /*
  * NUMBERS
  *
  * Numbers are, as they seem, numeric data types. They can be integers or floats.
  *
  * Behind the scenes, they are also objects.
  *
  */

// Numbers - Three examples

8;

153.53921;

7849e72;


/*
 * STRINGS (with string concatenation)
 *
 * Strings represent textual data. They are defined using UTF-8 encoding.
 *
 * Strings can be primitives or objects, though generally are typecase into
 * objects upon use.
 *
 */

// Strings - Three examples

"This is a string primitive.";

var stringObject = new String('This is a string object.');

"This string " + "is being concatenated " + "with some \"special\" characters escaped.";


/*
 * parseInt()
 *
 * The parseInt() method can be used on a String or Number value to ensure the return
 * of an integer value from something that might otherwise by a float, a string primitive,
 * or a string object.
 *
 */

// parseInt() Example 1

var dogs = parseInt(37.8);

// -> 37

parseInt('609.2px');

// -> 609

// parseInt() Example 2
// parseInt() Example 3

parseInt('2' + '4.25') == 24;

// It is worth knowing that in JS the order of operations will first concatenate the
// contents of the above into a string, and _then_ will return an integer.


/*
 * BOOLEAN
 *
 * Booleans values are either 'true' or 'false'.
 *
 *
 */

// Boolean examples

true !== false;

!true;

false === false;


/*
 * MODULUS
 *
 * A modulus operator, or '%', is a binary mathematical operator that returns the remainder
 * of dividing the first value by the second value.
 *
 */

// Modulus example 1

3 % 2 == 1;

// Modulus example 2

15 % 2 == 1;

// Modulus example 3

17 % 5 == 2;


/*
 * ARRAY
 *
 * Arrays are list-like data types. They store values in a list with either named or, by default, numerical keys.
 *
 */

// Array example 1

var array1 = [4, 7, 20];

// Array example 2

['dogs', 'cats', ['a', 'b', 'c']]

// Array example 3

[function(){}, {}, []];


/*
 * VARIABLE
 *
 * Variables are a simple named value store for data. They allocate memory for storage of a value and can be called
 * simply by invoking their name in an expression.
 *
 */

// Variable example 1

var shortLady;

// Variable example 2

var fatLady = 'Peggy Sue';

// Variable example 3

var dumpyLady = "Roberta Pickles";


/*
 * PROPERTY
 *
 * A property is a value held by an object.
 *
 */

// Property example 1

var car = {
  wheels: 4, // property
  bustedWindows: true // property
}

// Property example 2

"blah blah blah".length; // .length is a property of the String object

// Property example 3

function() {
  return arguments; // arguments is a property of a function
}
