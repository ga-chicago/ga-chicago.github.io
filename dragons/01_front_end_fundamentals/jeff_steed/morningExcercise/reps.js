function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function isVowel(a) {
  var char = a.toLowerCase();
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}

function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function multiply(array) {
  var product = array[0];
  for (var i = 1; i < array.length; i++) {
    product *= array[i];
  }
  return product;
}
