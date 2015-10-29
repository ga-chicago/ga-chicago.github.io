console.log("\nMorning Exercises - Week 1 / Day 4");

// 1. Define a function max()

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log("\tThe max of 2 and 3 is ... " + max(2,3));


// 2. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(char) {
  char = char.toLocaleLowerCase();
  //console.log(char);
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
  } else {
    return false;
  }
}

console.log("\tThe character U is a vowel? ... " + isVowel("U"));




// 3.  Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(arr) {
  var output = 0;
  for (var val in arr) {
    output+= arr[val];
  }
  return output;
}

console.log("\tthe sum of [1,2,3,4] is ... " + sum([1,2,3,4]));


function multiply(arr) {
  var output = 1;
  for (var val in arr) {
    output*= arr[val];
  }
  return output;
}

console.log("\tthe product of [1,2,3,4] ..." + multiply([1,2,3,4]));
