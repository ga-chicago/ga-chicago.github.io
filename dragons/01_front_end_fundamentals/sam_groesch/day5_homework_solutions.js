// 1. lengths

function lengths(arrayOfStrings) {
  var strLengthArray = [ ];

  for (var inc in arrayOfStrings) {
    var tempLength = arrayOfStrings[inc].length;
    strLengthArray.push(tempLength);
  }
  return strLengthArray;
}

// 2. transmogrifier

function transmogrifier(x, y, z) {
  return Math.pow((x*z), z);
}

// 3. toonify

function toonify(accent, sentence) {
  if (accent == 'daffy'){
    return sentence.replace(/s/g, 'th'); //Learn syntax for replace
  } else if (accent = 'elmer') {
    return sentence.replace(/r/g, 'w');
  } else {
    return sentence;
  }
}

// 4. wordReverse

function wordReverse (word) {
  var tempArray = word.split('');
  console.log(tempArray);
  var reversed = tempArray.reverse();
  console.log(reversed)
  return reversed.join('');
}

// 5. letterReverse

function letterReverse(someStuff) {
  var tempArray = someStuff.split('');
  var finalSentence;

  for (var inc in tempArray) {
    var word = tempArray[inc];
    console.log(word);
    var splitWord = word.split('');
    splitWord.reverse();
    word = splitWord.join('');
    console.log(word);
    finalSentence = finalSentence + ' ' + word;
    console.log(finalSentence);
  }
  return finalSentence;
}
