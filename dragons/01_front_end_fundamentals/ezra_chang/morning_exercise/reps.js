// Problem 1: Which number is greater?

function max(a, b) {
  if (a >= b) {
    return a;
  }
  else {
    return b;
  }
}

console.log(max(5,3));
console.log(max(9,9));

// Problem 2: Is this letter a vowel?

var str = 'a';
function vOrC (letter) {
  letter = letter.toLowerCase();
  switch (letter.charAt(0)) {
    case 'a':
      return 'yes';
      break;

    case 'e':
      return 'yes';
      break;

    case 'i':
      return 'yes';
      break;

    case 'o':
      return 'yes';
      break;

    case 'u':
      return 'yes';
      break;

    case 'y':
      return 'sometimes';
      break;

    default:
      return 'no';
      break;
  }
}

console.log(vOrC(str));

  // Version 2

var str2 = prompt();
function vOrC2(someLetter) {
  someLetter = someLetter.toLowerCase();
  if (someLetter.charAt(0) == 'a' ||
      someLetter.charAt(0) == 'e' ||
      someLetter.charAt(0) == 'i' ||
      someLetter.charAt(0) == 'o' ||
      someLetter.charAt(0) == 'u') {
    return 'yes';
  }
  else if (someLetter.charAt(0) == 'y') {
    return 'sometimes';
  }
  else {
    return 'no';
  }
}

alert(vOrC(str2));

// Problem 3: Sum and Product of an Array

var myArray = [1,2,3,4,5];
function sum (someDamnArray) {
  var sumValue = 0;
  for (var i = 0; i < someDamnArray.length; i++) {
    sumValue = sumValue + someDamnArray[i];
  }
  return sumValue;
}

console.log(sum(myArray));

var myOtherArray = [1,2,3,4,5]
function product (someOtherArray) {
  var productValue = 1;
  for (var i = 0; i < someOtherArray.length; i++) {
    productValue = productValue * someOtherArray[i];
  }
  return productValue;
}

console.log(product(myOtherArray));
