// Round 1 *COMPLETE*

function lengths(words) {
  var newArray = []
for (var i = 0; i < words.length; i++) {
  console.log(words[i].length);
newArray.push(words[i].length)
}
return newArray
}

// Round 2 *COMPLETE*

function transmogrifier(a, b, c) {
  return Math.pow((a *b), c)
}

/* transmogrifier(5, 4, 3) = 8000
transmogrifier(13, 12, 5) = 92389579776
transmogrifier(42, 13, 7) = 14466001271480793000 */

// Round 3 *COMPLETE*

function toonify(accent, sentence){
  if (accent == 'daffy') {
    var newstr = sentence.replace(/s/g, 'th');
console.log(newstr);
}
else if (accent == 'elmer') {
  var newstr = sentence.replace(/r/g, 'w');
console.log(newstr);
}}

// Round 4 *complete*

function wordReverse(a){
  return splitString(a, ' ');
}


function splitString(stringToSplit, separator) {
  newArray = [];
  arrayFinal = [];
  var arrayOfStrings = stringToSplit.split(separator);
  var reversed = arrayOfStrings.reverse();
    console.log(arrayOfStrings)
for (var i = 0; i < reversed.length; i++) {
    newArray.push(reversed[i]);
}
  arrayFinal = newArray.join(' ');
  return arrayFinal
}

// Round 5 *COMPLETE*

function letterReverse(b){
  var a = b;
  return a.split("").reverse().join("").split(" ").reverse().join(" ")}

// Round 6 *COMPLETE*

function longest(phrase) {
    var comp = 0;
    var word;
    for (var i = 0; i < phrase.length; i++) {
        if (comp < phrase[i].length) {
            comp = phrase[i].length;
            word = phrase[i];
        }
    }
    return word;
}

// Round 7 ** works with wordReverse, but not toUpperCase. I am not the rep master. :(

function repMaster(input, workplease) {
var something = workplease(input);
  return something + ' proves that I am the rep MASTER!'
}
