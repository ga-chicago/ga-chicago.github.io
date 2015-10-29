function max(x, y) {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return "they are equal!"
  }
}

function vowel(x) {
  var x = x.toLocaleLowerCase();
  if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
    return true;
  } else {
    return false;
  }
}

function sum(arr) {
  var result = 0
  for (i = 0; i < arr.length; i ++) {
    result += arr[i];
  }
  return result;
}

function multiply(array) {
  var result = 1
  for (i = 0; i < array.length; i ++) {
    result *= array[i];
  }
  return result;
}
