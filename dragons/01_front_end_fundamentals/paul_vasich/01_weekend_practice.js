function lengths(ls) {
  return ls.map(function(x){ return x.length; });
}

function transmogrifier(a, b, c) {
  return Math.pow(a*b, c);
}

function toonify(accent, sentence) {
  if (accent == 'daffy')
    return sentence.replace(/[sS]/g, 'th');
  if (accent == 'elmer')
    return sentence.replace(/[rR]/g, 'w')
  return sentence;
}

function wordReverse(string) {
  return string.split(' ').reverse().join(' ');
}

// what's the better way to do this?
function letterReverse(string) {

  string = string.split(' ');
  for (var i = 0; i < string.length; i++)
    string[i] = string[i].split('').reverse().join('');

  return string.join(' ');
}

function longest(ls) {
  var m = 0;
  for (var i = 1; i < ls.length; i++)
    if (ls[i].length > ls[m].length)
      m = i;
  return ls[m];
}

function repMaster(arg, f) {
  return f(arg) + ' proves that I am the rep MASTER!';
}

// Question 1
// write a function square(x) that returns the argument passed multiplied by itself
// then write the functions cube(x), x times x times x,
// and quad(x), x times x times x times x, using the function square(x)
// verify that square(2) === 4, cube(3) === 27, and that quad(4) === 64

/* your code starts here */
function square(n) {
  return n * n;
}

function cube(n) {
  return n * square(n);
}

function quad(n) {
  return square(n) * square(n);
}

/* your code ends here */

//Question 1 check
if (square(2) !== 4 || cube(3) !== 27 || quad(4) !== 256) {
  console.log("check question 1");
}


// Question 2
// write a function sum(numbers, twiceOrHalf).
// It should expect an array of numbers as the first argument
// and an optional flag, twiceOrHalf, as the second argument.
// If the flag is undefined, sum should return the total of the numbers in the array
// If the flag is truthy, it should return twice that sum
// If the flag is falsy but not undefined, it should return half that sum

/* your code starts here */

function sum(numbers, twiceOrHalf) {
  var s = 0;
  for (var i = 0; i < numbers.length; i++)
    s += numbers[i];

  if (twiceOrHalf == true)
    return s*2;

  if (twiceOrHalf == false)
    return s/2;

  return s;
}

/* your code ends here */

//Question 2 check
var nums = [2, 4, 6];
if (sum(nums) !== 12 || sum(nums, false) !== 6 || sum(nums, !undefined) !== 24) {
  console.log("check question 2");
}


// Question 3
// write a function, max() that loops through zero or more arguments
// and returns the largest number in that list

/* your code starts here */

function max() {
  var mi = 0;
  for (var i = 1; i < arguments.length; i++)
    if (arguments[i] > arguments[mi])
      mi = i;
  return arguments[mi];
}

/* your code ends here */

//Question 3 check
if (max() !== undefined || max(15) !== 15 ||
    max(-1, 0) !== 0 || max(-1, -7, -4) !== -1) {
  console.log("check question 3");
}
