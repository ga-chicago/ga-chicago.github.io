// 1. Data Types
//
// Create the following variables and in a comment after the variable, state the type that it is. If you are unsure of the type, use the function typeof to find it out. Note that some types may not be what you expect...
//
// The number that represents pi.
// Your full name.
// A list of prime numbers.
// A hash-like structure to represent the attributes of yourself.
// If you are taking WDI or not.

var pie = Math.PI // number
var me = "Chris Kim" // string
var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] // object
var ckim = {firstName: "Chris", lastName: "Kim", gender: "male", wdiStudent: true} // object

function studentCheck(obj) {
  if (obj.wdiStudent === true) {
  console.log(obj.firstName + ' ' + obj.lastName + ' is a WDI student');
  } else {
  console.log(obj.firstName + ' ' + obj.lastName + ' is not a WDI student')}
};

studentCheck(ckim);
