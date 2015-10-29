function max(a, b) {
  if (a > b){
    return a;
  } else {
    return b;
  }
}

function vowel(a) {
  switch (a) {
    case 'a': return true;
      break;
    case 'e': return true;
      break;
    case 'i': return true;
      break;
    case 'o': return true;
      break;
    case 'u': return true;
      break;
    default: return false;
      break;
  }
}

  /* if (a == 'a' || 'e' || 'i' || 'o' || 'u') {
    return true;
  } else {
    return false;
  } */

function sum (arr) {
  var y = 0;
  for (var i = 0; i < arr.length; i++) {
    var x = arr[i];
    y = y + x;
  }
  return y;
}

function multiply (arr) {
  var y = 1;
  for (var i = 0; i < arr.length; i++) {
    var x = arr[i];
    y = y * x;
  }
  return y;
}
