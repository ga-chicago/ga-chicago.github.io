// Question 1
// write a function square(x) that returns the argument passed multiplied by itself
// then write the functions cube(x), x times x times x,
// and quad(x), x times x times x times x, using the function square(x)
// verify that square(2) === 4, cube(3) === 27, and that quad(4) === 64

function square(x) {
  return x * x;
}
function cube(x) {
  return square(x) * x;
}
function quad(x) {
  return square(x) * square(x);
}



// Question 2
// write a function sum(numbers, twiceOrHalf).
// It should expect an array of numbers as the first argument
// and an optional flag, twiceOrHalf, as the second argument.
// If the flag is undefined, sum should return the total of the numbers in the array
// If the flag is truthy, it should return twice that sum
// If the flag is falsy but not undefined, it should return half that sum

function sum(numbers, twiceOrHalf) {
    var x = 0;
    for(i = 0; i < numbers.length; i++) {
      x += numbers[i];
    }
    var y = x;
  if (twiceOrHalf === undefined) {
    return y;
  } else if (twiceOrHalf === true) {
    return y * 2;
  } else {
    return y / 2;
  }
}

//Question 2 check
var nums = [2, 4, 6];
if (sum(nums) !== 12 || sum(nums, false) !== 6 || sum(nums, !undefined) !== 24) {
  console.log("check question 2");
}


// Question 3
// write a function, max() that loops through zero or more arguments
// and returns the largest number in that list

function max() {
  var large = arguments[0];
  for(i = 0; i < arguments.length; i++){
    if (arguments[i] > large) {
      large = arguments[i];
    }
  }
   return large;
}

//Question 3 check
if (max() !== undefined || max(15) !== 15 ||
    max(-1, 0) !== 0 || max(-1, -7, -4) !== -1) {
  console.log("check question 3");
}
