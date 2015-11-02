//1.  Define a function max() that takes two numbers as arguments and
// returns the largest of them. Use the if-then-else construct available
// in Javascript.

//My Answer

function max(a,b) {
  if (a > b) {
    console.log(a + " is bigger");
    return a;
  } else if (b > a) {
    console.log(b + " is bigger");
    return b;
  } else {
    console.log("The numbers are equal");
  }
}

// Jim Answer
function max(a,b)



// 2.  Write a function that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.

function letterType(a) {
  if ((a == 'a') || (a == 'e') || (a == 'i') || a == ('o') || a == ('u')) {
    return true;
  } else {
    return false;
  }
}

// 2nd try --- ?????
function letterType(a) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for [i = 0, i < vowels.length - 1, i++] {
    if
  }

}

// 3.  Define a function sum() and a function multiply() that sums and
// multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4])
// should return 24.

function sum(numbers) {
  var numbers = [1,2,3,4];
  for [i = 0, i < numbers.length - 1, i++] {

  }
}

var num = [1,2,3,4];
function sum(array){
  var total = 0;
  for (var i = 0;i < array.length;i++){
    total += array[i];
  }
  console.log(total);
}

// Jim answer #3

var num = [1,2,3,4];
function sum(array){
  var total = 0;
  for(var i =0; i<array.legnth;i++){
    total += array[i];
  }
    console.log(total);
  }

  function multiply(array) {
    var total = array[0];
<<<<<<< HEAD
    console.log(total);
=======
<<<<<<< HEAD
    console.log(total);
=======
>>>>>>> 51936a62fc91b975527854601003fbfa0038c777
>>>>>>> f19fd7c7dcf2f88daa8075e77725b62fb2a88f3b
    for(var i=1; i<array.length;i++) {
      total = total * array[i];
    }
    console.log(total)
  }
