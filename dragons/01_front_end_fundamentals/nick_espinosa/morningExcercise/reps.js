//1.  Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
//2.  Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
//3.  Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

//function isMax(a, b) {
//  return Math.max(a, b);
//if(a > b) {
//  console.log(a + 'is greater than ' + b);
//}
//  else { console.log(b + 'is greater than ' + a)
//}
//}

function max(a, b) {
  if(a>b) {
    return a;
  }
  else return b;
}

function isVowel(char) {
  var char = char.toLowerCase();
  return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}

//function isVowel(a) {
//  if(a == 'a' || 'e' || 'i' || 'o' || 'u') {
//    return console.log(a + 'is a vowel');
//  }
//  else {
//    console.log('false')
//  }
//}

var num = [1, 2, 3, 4];
function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
  total +=  array[i]
  }
  console.log(total)
}

function multiply(array) {
  var total = array[0];
  console.log(total);
  for (var i = 0; i < array.length; i++) {
    total = total * array[i];
  }
  console.log(total);
}
//var arr = [1,2,3,4].reduce(function(a,b) {
//  return a + b;
//});
//function sum()
