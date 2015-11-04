// ROUND 1 - create function that takes an array of strings as an arg and return the length of each string into a new array.
// TEACHER: I didn't use RETURN, for future reference would it be preferred to specifically solve the problem according to the exact terms used?
//
// pizzaSize used to test second call of function.

var pizzaTop = ['mozarella','pepperoni','sausage','pineapple','fancyfeast'];
var pizzaSize = ['small','medium','large'];
var stringLengths = [];


function getLengths(arr) {
  stringLengths = [];
  for (var i = 0; i < arr.length; i++) {
    stringLengths.push(arr[i].length);
  }
  return stringLengths;
}
getLengths(pizzaTop);
console.log(pizzaTop);
console.log(stringLengths);
getLengths(pizzaSize);
console.log(pizzaSize);
console.log(stringLengths);

//-----------------------------------------------------------//
// ROUND 2 - Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result
//
// transmogrifier(5, 4, 3)
// transmogrifier(13, 12, 5)
// transmogrifier(42, 13, 7)

function transmogrifier(numA, numB, numC) {
    return Math.pow(numA * numB, numC);
}
console.log(transmogrifier(5, 4, 3));
console.log(transmogrifier(13, 12, 5));
console.log(transmogrifier(42, 13, 7));

//-----------------------------------------------------------//
// ROUND 3 - Write a function called toonify that takes two parameters, accent and sentence.

function toonify(accent, sentence) {
  if (accent == 'elmer') {
      return sentence.replace(/r/gi, 'w');
  } else if (accent == 'daffy') {
      return sentence.replace(/s/gi, 'th');
  } else if (accent == 'pirate') {
      return sentence.replace(/r/gi, 'rrrrrr');
  }  else {
      return sentence;
  }
}

console.log(toonify('daffy', 'sassafras!'));
console.log(toonify('elmer', 'Be very very quiet we\'re hunting rabbits!'));
console.log(toonify('mid-western', 'I heart cheese'));
console.log('A pirate with a steering wheel in his crotch walks into a bar and says ' + toonify('pirate', '\"Gimme a drink!\"') + '. The bartender replies \"Wait, wait, wait! First, what\'s the deal with the wheel!?\"' + ' The pirate looks at him and says...' + toonify('pirate', '"\Yar, it\'s driving me nuts!\"'));

//-----------------------------------------------------------//
// ROUND 4
// Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation. You'll need to use String.split() to create an array of words (splitting them with a space or " ". Then you'll need to reverse the order of that array using array.reverse(). Finally, you'll loop through them to create a new string).

function wordReverse(str) {
  var arrWords = str.split(" ");
  var revWords = '';

  arrWords.reverse();
  for (var i = 0; i < arrWords.length; i++) {
    revWords += arrWords[i] + " ";
    console.log(revWords);
  }
  return revWords;
}
console.log(wordReverse('Now I know what a TV dinner feels like'));


//-----------------------------------------------------------//
// ROUND 5
// Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.


function letterReverse(str) {
  var arrWords = str.split(" ");
  var arrLetters = [];
  var newStr = '';
  for (var i = 0; i < arrWords.length; i++) {
    //  sep every letter and space into array
    arrLetters.push(arrWords[i].split(""));
    //  rev letter array
    arrLetters[i].reverse();
  }
  //  save each element of array to string and put a space between each word
  for (var i = 0; i < arrLetters.length; i++) {
    for (var j = 0; j < arrLetters[i].length; j++) {
      newStr += arrLetters[i][j];
    }
    newStr += ' ';
  }
  console.log(newStr);
}
letterReverse('Put Hans back on the line');

function letterReverse(someStuff) {
  var tempArray = someStuff.split(' ');
  var finalSentence = '';

  for (var inc in tempArray) {
    var word = tempArray[inc];
    console.log(word);
    var splitWord = word.split('');
    splitWord.reverse();
    word = splitWord.join('');
    console.log(word);
    finalSentence = finalSentence + ' ' + word;
  }
  
  return finalSentence;
}


//-----------------------------------------------------------//
// ROUND 6
//
// Write a function longest that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.


function longest(arr) {
  var arrStrLength = [];
  for (var i = 0; i < arr.length; i++) {
    arrStrLength.push(arr[i].length);
  }
  return arr[arrStrLength.indexOf(Math.max.apply(Math, arrStrLength))];

}

longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"]);


//-----------------------------------------------------------//
// FINAL ROUND

//
// Write a function, called repMaster, that accepts two arguments, input and a function. Input should be able to be used with the function. The function used as an argument must return a string. repMaster should take the result of the string, passed as an argument to the argument function, and return this result with ' proves that I am the rep MASTER!' concatenated to it.


function myFunction(str) {
  return str.toUpperCase();
}

function goBlue(str) {
  return 'blue';
}

function repMaster(input, myFunction) {
  return myFunction(input) + ' proves that I am the rep MASTER!';
}

repMaster("I finished this practice", goBlue);
