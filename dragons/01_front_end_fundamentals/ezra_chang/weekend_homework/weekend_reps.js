// Problem 1: Lengths

var arr1 = ['john', 'jacob', 'jingle', 'heimerschmidt'];
var arr2 = [];

function lengths (someArray) {
  for (var i = 0; i < someArray.length; i++) {
    arr2.push(someArray[i].length);
  }
  return arr2;
}

lengths(arr1);

// Problem 2: Transmogrifier

function transmogrifier(a, b, c) {
  var transmogrified = Math.pow((a * b), c);
  return transmogrified;
}

transmogrifier(3, 4, 5);

// Problem 3: Toonify

function toonify (accent, sentence) {
  if (accent == 'daffy') {
    var re = /s/gi;
    sentence = sentence.replace(re, 'th');
    return sentence;
  }
  else if (accent == 'elmer') {
    var re2 = /r/gi;
    sentence = sentence.replace(re2, 'w');
    return sentence;
  }
  else {
    return sentence;
  }
}

console.log(toonify('daffy', 'My name is Mike Tyson.'));
console.log(toonify('elmer', 'Goodell, Roger Goodell. Commissioner of the NFL.'));

// Problem 4: String Reverse

function stringReverse (someString2) {
  var arr3 = (someString2.split('')).reverse();
  var newWord = '';
  for (var i = 0; i < arr3.length; i++) {
    newWord = newWord + arr3[i];
  }
  return newWord;
}

console.log(stringReverse('mintao'));

// Problem 5: Sentence Word Reverse

function sWR (someSentence) {
  function stringReverse (someString2) {
    var arr3 = (someString2.split('')).reverse();
    var newWord = '';
    for (var i = 0; i < arr3.length; i++) {
      newWord = newWord + arr3[i];
    }
    return newWord;
  }
  var arrayOfStrings = someSentence.split(' ');
  var newSentence = '';
  for (var i = 0; i < arrayOfStrings.length; i++) {
     newSentence = newSentence + ' ' + stringReverse(arrayOfStrings[i]);
  }
  return newSentence;
}

console.log(sWR('The quick red fox jumped over the lazy brown dog.'));

// Problem 6: Longest Word Selector

function longestSelector(arrayOfWords) {
  var longestWord = '';
  for (var i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    }
  }
  return longestWord;
}

console.log(longestSelector(['john', 'jacob', 'jingle', 'heimerschmidt']));

// Problem 7: repMaster

function repMaster (aString, aFunction) {
  return aFunction(aString) + ' proves I am the rep master!';
}

console.log(repMaster('The quick red fox jumped over the lazy brown dog.', sWR));
