// declare function named "lengths"
// that accepts a arguments named "arrayOfStrings"
function lengths(arrayOfStrings) {

  // we can log out our "arrayOfStrings"
  console.log(arrayOfStrings);

  // now, we want to "return" something... but what?

  return whateverVariableYouWantToReturnHere;

}


var namesArray = ['bob', 'sally', 'joe', 'mary']

function lengths(arrayOfStrings) {
  var arrayOfNumbers = []
  for (var inc = 0; inc < arrayOfStrings.length; inc++) {
    var arrayString = arrayOfStrings[inc]
    console.log(arrayString);
    console.log(arrayString.length);
    arrayOfNumbers.push(arrayString.length);
    }
    return arrayOfNumbers;
}






function transmogrifier(x, y, z) {
  return Math.pow((x * y), z);
}




function toonify(accent, sentence) {
  if (accent === "daffy") {
    return sentence.replace(/s/g, "th");
  } else if (accent === "elmer") {
    return sentence.replace(/r/g, "w");
  } else {
    return sentence;
  }
}



function wordReverse(stringOfWords) {
  console.log(stringOfWords.split(" "))
  var space = stringOfWords.split(" ").reverse()
  console.log(space)
  var reversedString = ""
  for (var i = 0; i < space.length; i++) {
    var word = space[i]
    if ((i + 1) === space.length) {
      reversedString = reversedString + word
    } else {
      reversedString = reversedString + word + " "
    }
  }
  return reversedString
}



function letterReverse(stringOfLetters) {
  var words = stringOfLetters.split(" ");
  for (var i = 0; i < stringOfLetters.length; i++);
  console.log(stringOfLetters.split(" "))
}




var measurement = ["inch", "foot", "meter"];

function longest(lengthMatters) {
  var longestWord = ""
  for (var i = 0; i < lengthMatters.length; i++) {
    var x = lengthMatters[i];
    if (x.length > longestWord.length) {
      longestWord = x;
    };
  };
  return longestWord;
}





function repMaster(x, y) {
  // i want to declare the value of 'x' as an argument into the function 'y' and take that return value and concatinate " proves that I am the Rep Master" to the end ot the sentence
  // x is a string
  // y is a function

  var theFunctionReturnValue = y(x);
  return theFunctionReturnValue + " proves that I am the Rep Master"
}
