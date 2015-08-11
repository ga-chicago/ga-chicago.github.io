// JavaScript Glossary
//
// Object - The basic building block of JavaScript. In general, a collection of elements, with a key and a value for each.
// Number - Numerals with digits, one through ten, which may or may not include a decimal point or a minus sign.
// String - An object consisting of characters
// String Concatenation - Making a long string out of one or more short strings
// ParseInt - This function changes a string to a number in a given base (10 is decimal, 2 is binary)
//   ParseInt will only read characters in a string from left to right until it
//   finds a non numeric character. Example: ParseInt("425Left,10") = 425Left
// Boolean - Logical value, true or false
// Modulus - the remainder after one number is divided by another
// Array - an ordered collection of data, either primitive or object. It can be
//   in keyed designation or indexed by default.
// Variable - a name that acts as a placeholder in a function and a storage location
// Property - an attribute of an object, something that describes it
// Method - a function or action that an object can perform
// Conditional Statement - a decision point in a program. Control of execution
//    varied by the evaluation of a variable or expression
//
// JavaScript Math Method Examples
//
// Math.random() - generates a random number between zero and one
// Math.pow(x,y) - x raised to the y power
// Math.PI() - returns an approximation of the pi (~ 3.1415)
// Math.LN10(num) - returns the natural logarithm of num

  function showMath(num1,num2) {
    console.log("A random value is " + Math.random());
    console.log("If x=" + num1 + " and y=" + num2 + ", num1 to the num2 power=" + Math.pow(num1,num2));
    console.log("The cosine of " + num1 + "=" + Math.cos(num1));
    console.log("The natural logarithm of " + num1 + " = " + Math.log(num1));
  }
