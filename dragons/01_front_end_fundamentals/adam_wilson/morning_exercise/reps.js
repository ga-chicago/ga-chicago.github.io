// 1.  Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}


// 2.  Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// call it with example: isVowel('a');

function isVowel(char1) {
  if (char1 === 'a' || char1 === 'e' || char1 ==='i' || char1 === 'o' || char1 ==='u' ) {
    return true;
  } else {
    return false
  }
}

// 3.  Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.


// function to sum
var nums = [1, 2, 3, 4];
function sum(nums) {
  var total = 0;
  for (i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
sum(nums);  // calls method

// function to multiply
var arrayNumbers = [1, 2, 3, 4];
function multiply(numArray) {
  var numsMultiplied = 1;
  for (i = 0; i < numArray.length; i++) {
    numsMultiplied = numsMultiplied *  numArray[i];
  }
  return numsMultiplied;
}
multiply(arrayNumbers);
