//Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string. To get you started, you'll need to loop through each string in the array and get the length of each one. Those lengths should be stored in a different array that you will return.

//Remember that when building a function, you want to use declare a function with a name that accepts arguments. So for building our function called lengths that accepts an array of strings, it might look something like:

// declare function named "lengths"
// that accepts a arguments named "arrayOfStrings"
//function lengths(arrayOfStrings) {

  // we can log out our "arrayOfStrings"
//  console.log(arrayOfStrings);

  // now, we want to "return" something... but what?

//  return whateverVariableYouWantToReturnHere;

// }

x = ['abby', 'charlie', 'danielle', 'bill'];

function lengths(x){
  for (var i = 0; i < x.length; i++) {
    y = x.length;
  }
  return y;
}

y = x.map(lengths);
console.log(y);

// alternatively:
// function lengths(x){
//   var y = [];
//   for (var i = 0; i < x.length; i++) {
//     y[i] = x[i].length;
//   }
//   return y;
// }
//
// console.log(lenghts(x));

// Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.
//
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
//
// Use your function to find the following answers.

function transmogrifier(a, b, c) {
  var x = a*b;
  var y = Math.pow(x,c);
  console.log(y);
  return y;
}

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

// Write a function called toonify that takes two parameters, accent and sentence.
//
// If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
// If the accent is "elmer", replace all "r" with "w".
// Feel free to add your own accents as well!
// If the accent is not recognized, just return the sentence as-is.


function toonify(accent, sentence){
  if (accent == "daffy"){
    z = sentence.replace(/s/gi, 'th');
    console.log(z);
  }
  else if (accent == "elmer"){
    z = sentence.replace(/r/gi, 'w');
    console.log(z);
  }
  else {
    console.log('we are still working on implementing that accent!');
  }
}

toonify("daffy","so you smell like sausage");

// Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation. You'll need to use String.split() to create an array of words (splitting them with a space or " ". Then you'll need to reverse the order of that array using array.reverse(). Finally, you'll loop through them to create a new string).

function wordReverse(string){
  var stringArray = string.split(" ");
  var v2 = stringArray.reverse();
  //console.log(v2);
  var answer = " ";
  // OR use this: answer = v2.join(" ");
  for (var word in v2) {
    answer += v2[word] + " ";
  }
  console.log(answer);
  return answer;
}

wordReverse("Super cali fraggi listic expli ali docious");
//
// Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.

function letterReverse(string){
  var arrayOne = string.split(' ');
//  x = string.split('').reverse().join('');  sadly doesnt work, b/c we want to keep the order of the words the same. so close.
  //console.log(arrayOne);
  var finalStr = "";
  for (var i in arrayOne){
    //console.log(arrayOne[i]);
    x = arrayOne[i].toString();
    y = x.split('');
    reversed = y.reverse();
    y = y.join('');
    //console.log(y);
    finalStr += y + " ";
  }
  //console.log(finalStr); -- commented out to get rid of duplication in the repMaster function.
  return finalStr;
}

letterReverse("Super cali fraggi listic expli ali docious");



// Write a function longest that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function longest(arrayOfStrings){
  x = arrayOfStrings.map(lengths);
  //console.log(x);
  y = Math.max.apply(null,x);
  //console.log(y);
  z = x.indexOf(y);
  console.log(arrayOfStrings[z]);
}
// ALTERNATIVELY:
//   var answer = "";
//   for (var word in arrayOfStrings){
//     if (arrayOfStrings[word].length > answer.length) {
//       answer = arrayOfStrings[word];
//     }
//   }
//   console.log(answer);
// }

longest(["oh", "good", "grief"]);


// Write a function, called repMaster, that accepts two arguments, input and a function. Input should be able to be used with the function. The function used as an argument must return a string. repMaster should take the result of the string, passed as an argument to the argument function, and return this result with ' proves that I am the rep MASTER!' concatenated to it.

function repMaster(string, func){
  var x = func(string) + " proves that I am the rep MASTER";
  console.log(x);
}
repMaster("hello hello your face", letterReverse);

function toUpperCase(string) {
  x = string.toLocaleUpperCase();
  return x;
}

repMaster("hello hello your face", toUpperCase)


// Question 1
// write a function square(x) that returns the argument passed multiplied by itself
// then write the functions cube(x), x times x times x,
// and quad(x), x times x times x times x, using the function square(x)
// verify that square(2) === 4, cube(3) === 27, and that quad(4) === 64

function square(x){
  return x*x;
}
function cube(x){
  return x*(x*x);
}
function quad(x){
  return square(x) * square(x);
}

// Question 2
// write a function sum(numbers, twiceOrHalf).
// It should expect an array of numbers as the first argument
// and an optional flag, twiceOrHalf, as the second argument.
// If the flag is undefined, sum should return the total of the numbers in the array
// If the flag is truthy, it should return twice that sum
// If the flag is falsy but not undefined, it should return half that sum

function sum(numbers, twiceOrHalf){
  var theSum = 0;
  for (var num in numbers) {
    theSum += numbers[num];
  }
  if(twiceOrHalf==undefined){
    return theSum;
  }
  if(twiceOrHalf == true){
    return 2*theSum;
  } else {
    return theSum/2;
  }

}


/* your code ends here */

//Question 2 check
// var nums = [2, 4, 6];
// if (sum(nums) !== 12 || sum(nums, false) !== 6 || sum(nums, !undefined) !== 24) {
//   console.log("check question 2");
// }


// Question 3
// write a function, max() that loops through zero or more arguments
// and returns the largest number in that list

function max(){
  var answer = arguments[0];
  for (var i = 0; i < arguments.length; i++) {
       if (arguments[i] > answer) {
        answer = arguments[i];
       }
     }
     return answer;
   }


//Question 3 check
if (max() !== undefined || max(15) !== 15 ||
    max(-1, 0) !== 0 || max(-1, -7, -4) !== -1) {
  console.log("check question 3");
}
