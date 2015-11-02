// Bonus Problem 1: Exponents

function square (x) {
  return (x * x);
}

function cube (x) {
  return (x * x * x);
}

function quad (x) {
  return (x * x * x * x);
}

if (square(2) !== 4 || cube(3) !== 27 || quad(4) !== 256) {
  console.log("check question 1");
}
else {
  console.log('you good.');
}

// Bonus Problem 2: Optional Parameter

function sum (numbers, twiceOrHalf) {
  var total = 0;
  if (twiceOrHalf == undefined) {
    for (var i = 0; i < numbers.length; i++) {
      total = total + numbers[i];
    }
  }
  else if (twiceOrHalf == true) {
    for (var i = 0; i < numbers.length; i++) {
      total = total + (numbers[i] * 2);
    }
  }
  else {
    for (var i = 0; i < numbers.length; i++) {
      total = total + (numbers[i] / 2);
    }
  }
  return total;
}

var nums = [2, 4, 6];
if (sum(nums) !== 12 || sum(nums, false) !== 6 || sum(nums, !undefined) !== 24) {
  console.log("check question 2");
}
else {
  console.log('you good.');
}

// Bonus Problem 3: Find the Max

function max() {
  var maxValue = arguments[0];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) {
      maxValue = arguments[i];
    }
  }
  return maxValue;
}

if (max() !== undefined || max(15) !== 15 ||
    max(-1, 0) !== 0 || max(-1, -7, -4) !== -1) {
  console.log("check question 3");
}
else {
  console.log('you good.');
}
