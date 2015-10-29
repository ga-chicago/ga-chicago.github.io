// Morning Reps #1
function max(x, y) {
  if (x > y) {
  return x;
}  else {
  return y}
}


// #2
function isVowel(char) {
  return char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u' || false;
  }


// #3
function sum(arr) {
  result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i]
  }
    console.log(result)

}
/* NOTE: By moving the console.log outside of the brackets that the for argument
          encloses, it only returns the last result, rather than each step
          along the way. */

function multiply(arr) {
  result = 1;
  for (var i = 0; i < arr.length; i++) {
    result *= arr[i]
  }
    console.log(result)
}
