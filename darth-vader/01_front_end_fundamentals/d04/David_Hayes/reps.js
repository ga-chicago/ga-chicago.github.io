function lengths(arrayOfStrings) {
  var arrayOfLengths = [];
  for (var str in arrayOfStrings) {
    arrayOfLengths[str] = arrayOfStrings[str].length;
  }
  return arrayOfLengths;
}

function transmogrifier(first, second, power) {
  return Math.pow(first * second,power);
}

function toonify(accent,sentence) {
  if (accent=="daffy") {
    sentence = sentence.replace(/[Ss]/g, 'th');
  } else if (accent=="elmer") {
    sentence = sentence.replace(/[Rr]/g, 'w');
  }
  return sentence;
}

function wordReverse(str) {
  var orgString = str.split(' ');
  var revString = orgString.reverse();
  var outString = "";
  for (var wrd in revString) {
    if (wrd==0) {
      outString = outString + revString[wrd];
    } else {
      outString = outString + " " + revString[wrd];
    }
  }
  return outString;
}

function letterReverse(str) {
  var nextwrd;
  var orgString = str.split(' ');
  var wrdArray = [];
  var outString = "";
  for (var wrd in orgString) {
    nextwrd = orgString[wrd];
    wrdArray = nextwrd.split("");
    revArray = wrdArray.reverse();
    if (wrd != 0) {
      outString = outString + " "
    }
    for (var ltr in revArray) {
      outString =  outString + revArray[ltr];
    }
  }
  return outString;
}

function longest(wordArray) {
var lword = "";
var myword;
  for (var word in wordArray) {
   myword = wordArray[word];
   if (wordArray[word].length > lword.length) {
      lword = wordArray[word];
    }
  }
  return lword;
}

function repMaster(inputString,stringFn) {
  return stringFn(inputString);
}
