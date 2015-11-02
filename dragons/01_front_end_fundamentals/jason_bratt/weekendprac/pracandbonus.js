function lengths(arr) {
  return arr.filter(function(item){
    return typeof item == 'string';
  }).map(function(str) {
    return str.length;
  })
}


function transmogrifier(a, b, c) {
  return Math.pow((a * b), c)
}

function toonify (accent, sentence) {
  if (accent == 'daffy') {
    sentence = sentence.replace(/s/g, 'th');
  } else if (accent == 'elmer') {
    sentence = sentence.replace(/r/g,'w');
  }
  return sentence;
}

function wordReverse(str) {
  return str.split(' ').reverse().join(' ');
}


function letterReverse(str) {
  return str.split(' ').map(function(word) {
    return word.split('').reverse().join('');
  }).join(' ');
}

function longest(arr) {
  return arr.reduce(function(a, b) {
    if (a == 0)
      return b;
    else if (b.length > a.length)
      return b;
    else
      return a;
  })
}

function repMaster(input, action) {
  return action(input) + ' proves that I am the rep MASTER!';
}


// BONUS practice


function powerOf(base, exp) {
  if (exp == 0)
    return 1;
  else
    return base * powerOf(base, exp - 1);
}

function square(a) {
  return powerOf(a,2);
}
function cube(a) {
  return powerOf(a,3);
}
function quad(a) {
  return powerOf(a, 4)
}

if (square(2) !== 4 || cube(3) !== 27 || quad(4) !== 256) {
  console.log("check question 1");
}

function sum(numbers, twiceOrHalf) {
  var sum = numbers.reduce(function(a, b) {
    return a + b;
  });
  if (twiceOrHalf === true)
    return sum * 2;
  else if (twiceOrHalf === false)
    return sum / 2;
  else
    return sum;
}

var nums = [2, 4, 6];

if (sum(nums) !== 12 || sum(nums, false) !== 6 || sum(nums, !undefined) !== 24) {
  console.log("check question 2");
}

function max() {
  var largest = null;
  for (var i = 0; i < arguments.length; i++) {
    var num = arguments[i];
    if (largest == null)
      largest == num;
    else if (num > largest)
      largest = num;
  }
  return largest;
}
if (max() !== undefined || max(15) !== 15 ||
    max(-1, 0) !== 0 || max(-1, -7, -4) !== -1) {
  console.log("check question 3");
}
