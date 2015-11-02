// Round 1
var arr = ['this is an', 'array of strings', 'that I am using', 'for this example'];

function lengths(array) {
  var lens = [];
  for (var i = 0; i < array.length; i++) {
    lens.push(array[i].length);
  }
  return lens;
}

lengths(arr);


// Round 2
function transmogrifier(a, b, c) {
  return Math.pow((a * b), c);
}

transmogrifier(2, 4, 2);

// Round 3
function toonify(accent, sentence) {
  switch (accent) {
    case 'daffy':
      return sentence.replace(/s/gi, 'th');
      break;
    case 'elmer':
      return sentence.replace(/r/gi, 'w');
      break;
    default:
      return sentence;
  }
}

toonify('elmer', 'There really is no reason for it.');

// Round 4
var str = 'This is a string.';
function wordReverse(string) {
  var arr = string.split(/ /);
  arr.reverse();
  return arr.join(' ');
}
wordReverse(str);

// Round 5
function letterReverse(string) {
  var words = string.split(/ /);
  var revWords = [];
  for (var i = 0; i < words.length; i++) {
    revWords.push(words[i].split('').reverse().join(''));
  }
  return revWords.join(' ');
}
letterReverse(str);

// Round 6
var arrOfStrs = ['these', 'are', 'words', 'or', 'strings'];
function longest(array) {
  var longest = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
}
longest(arrOfStrs);

// Final Round
function repMaster(input, yourFunction) {
  return yourFunction(input) + ' Proves that I am the rep MASTER!';
}
// toUpperCase function for example scenario
function toUpperCase(string) {
  return string.toUpperCase();
}
repMaster(str, wordReverse);
