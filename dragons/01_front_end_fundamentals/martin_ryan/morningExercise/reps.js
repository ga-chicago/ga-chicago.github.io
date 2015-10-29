// 1.  Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
//
// 2.  Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
//
// 3.  Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function max(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}


var vowels = ['a','e','i','o','u'];
function evalVowel(char) {
    for (var i = 0; i < vowels.length; i++) {
      if (char.toLowerCase() === vowels[i]) {
        return true;
      }
    }
  return false;
}
evalVowel('a');


var nums = [1,2,3,4,5];
function sum(arr) {
  total = nums[0];
  for (var i = 0; i < arr.length; i++) {
    total += parseInt(nums[i]);
  }
  return total
}
sum(nums);

function multiply()
