// takes an array of strings.  Returns an array of the string lenghts of those strings
function lengths(theStrings) {
  var theLengths=[];
  for (var i=0; i<theStrings.length; i++) {
    theLengths.push(theStrings[i].length);
  }
  console.log(theLengths);
  return theLengths;
}

lengths(['dood', 'hello', 'this is easy']);

// takes 3 numbers.  Returns transmogfified result
function transmogrifier(x, y, z) {
  return Math.pow(x * y, z);
}

/*
transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);
*/

// TOONIFY
function toonify(accent, sentence) {
  if (accent == 'daffy') {
    console.log('daffy');
    sentence = sentence.replace(/s/g, "th");
  }
  else if (accent == 'elmer') {
    console.log('elmer');
    sentence= sentence.replace(/r/g, "w");
  }
  return sentence;
}

  var sen = 'I though I saw a pussy cat.';
  console.log(toonify('daffy', sen));


// Word Reverse
function wordReverse(sentence) {
   var newSentence=[];
   var words = sentence.split(' ');
   words.reverse();

   for (var i in words) {
     newSentence.push(words[i]);
   }

   return newSentence;
}

/*
var sentence = 'The cow jumped over the moon.';
wordReverse(sentence);
*/

// Letter Reverse
function letterReverse(sen) {
  var newSentence="";
  var words = sen.split(' ');

  for (i=0; i<words.length-1; i++) {
    //console.log( words[i].split("").reverse().join("") );
    newSentence = newSentence + words[i].split("").reverse().join("") + ' ';
  }
  newSentence = newSentence + words[i].split("").reverse().join("");

  return newSentence;
}

/*
var sentence = 'The cow jumped over the moon.';
letterReverse(sentence);
*/

// Longest
function longest(theStrings) {
  var indexOfLargest = 0;
  var lengthPrevious = theStrings[0].length;

  for (var i=1; i<theStrings.length; i++) {
    if ( !(theStrings[indexOfLargest].length >= theStrings[i].length) ) {
      indexOfLargest = i;
    }
  }
  return theStrings[indexOfLargest];
}

/*
var stz = ['asd', 'asdf', 'lkjlj'];
console.log(longest(stz));
var stz = ['asdfasdfas','apple', 'banana', 'fedfasdfas','fish', 'a'];
console.log(longest(stz));
var stz = [ 'a', 'bbda', 'fda', 'asdf'];
console.log(longest(stz));
*/



// func - a function that returns string and uses input
function repMaster(input, func) {
  return (func(input) + ' proves that I am a rep MASTER!');
}

/*
var result = repMaster('what is the meaning of life', letterReverse);
console.log(result);
*/
