// 1.  Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function max(x, y) {

if (x > y) {
  return 'You selected the largest number!';
} else {
  return 'You selected the smaller number!';
}
}
max(9, 10);

// 2.  Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(char){
	return char === ‘a’ || char === ‘e’ || char === ‘i’ || char === ‘o’ || char === ‘u’ || false;
}


// 3.  Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

var num = [1,2,3,4];
var total = 0;
for(var i=0; i < array.length; i++){
  total += array[1];
}
console.log(total)
}

function multiply(array){
  var total = array[0];
  console.log(total);
  for(var i=1; i <array.length; i++){
    total = total * array[i];
  }
  console.log(total);
