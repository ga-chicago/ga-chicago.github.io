//round 1
function lengths(arrayOfStrings) {
console.log(arrayOfStrings);
var strLengthArray = [];
for (var inc in arrayOfStrings) {
  var tempLength = arrayOfStrings[inc].length;
  strLengthArray.push(tempLength)
}
  return strLengthArray;
}

//round 2
function transmogrifier(a, b, c) {
  return Math.pow((a * b),c);
}
//round 3
var re = /s/gi;
var rere = /r/gi;
function toonify(accent, sentence) {
  if(accent == 'daffy') {
      return console.log(sentence.replace(re, 'th'));
  }
  else if(accent == 'elmer') {
    return console.log(sentence.replace(rere, 'w'));
  }
  else {
    return console.log(sentence);
  }
}
//round4
function wordReverse(a) {
return  a.split(' ').reverse().join(' ');
}

var topic = 'today we will cover css';
function wordReverse(word) {
var tempArray = words.split(' ');
console.log(tempArray);
var reversed = tempArray.reverse();
console.log(tempArray.reverse());
console.log(reversed);
  return; tempArray.join(" ");
}

//round5
function letterReverse(someStuff) {
  var tempArray = someStuff.split(' ');
  var finalSentence;
  for (var inc in tempArray) {
    var word = tempArray[inc];
    console.log(word);
    var splitWord = word.split('');
    console.log(splitWord);
    splitWord.reverse();
    word = splitWord.join('');
    console.log(word);
    finalSentence = finalSentence + ' ' + word;
    console.log(finalSentence);
  }
  return finalSentence;
}

//round6
function longest(arr) {
    var sortArr = arr.sort(function (a, b) {
        return b.length - a.length
    });

    return console.log(sortArr[0]);
}
