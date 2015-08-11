/*
 *  ROUND 1
 */

function lengths(arrayOfStrings) {

  var result = [];

  var argumentsArray = Array.prototype.slice.call(arguments, 0);

  for (arg in argumentsArray[0]) {
    result.push(argumentsArray[0][arg].length);
  }

  return( result );

}

var lengthsAnswer = lengths(['you','are','a','smelly','bum']);

console.log(lengthsAnswer);

/*
 *  ROUND 2
 */

function transmogrifier(x, y, z) {

  return Math.pow((x * y), z);

}

console.log(transmogrifier(5, 4, 3));
console.log(transmogrifier(13, 12, 5));
console.log(transmogrifier(42, 13, 7));

/*
 *  ROUND 3
 */

 function toonify(accent, sentence) {

   if ( typeof accent === "string") {

     if (accent === "daffy") {
       return sentence.replace(/s/g, 'th');;
     } else if (accent === "elmer") {
       return sentence.replace(/r/g, 'w');;
     } else if (accent === "enya") {
       return sentence.replace(/n/g, 'ny');;
     }

   } else {
     throw new Error('Argument to toonify() must be a string!');
     return false;
   }

 }

 console.log(toonify("daffy", "so you smell the sausage?"));
 console.log(toonify("elmer", "rude rascally rabbit!"));
 console.log(toonify("enya", "knuckley noobs know no needs!"));

 /*
  *  ROUND 4
  */

function wordReverse(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(wordReverse('Smoking hamburgers and eating weed!'));

/*
 *  ROUND 5
 */

function letterReverse(sentence) {
  var words = sentence.split(' ');
  words = words.map(function(word) { return word.split('').reverse().join('') });
  return words.join(' ');
}

console.log(letterReverse('Fuck the police!'));

/*
 *  ROUND 6
 */

function longest(wordsArray) {
  return wordsArray.sort(function(a, b) { return b.length - a.length })[0];
}

console.log(longest(['sdf','sdfhdsfh','sdfhsdfhsdfhsdfh','f','sdg','dddd']));

/*
 *  REPMASTER
 */

function repMaster(input, cb) {
  return cb(input) + ' proves that I am the rep MASTER!';
}

console.log(repMaster(['blah blah blah','dogs','d','sfhsdfhsdfh','bbbbbbbbbbbbbbbbbbbbbbb','33'], longest));
