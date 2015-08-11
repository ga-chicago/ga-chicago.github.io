
// Round 1
function lengths(stringList) {
    return stringList.map(function(s) {
       return s.length;
    });
}

//Round 2
function transmogrifier(a, b, c) {
  return Math.pow((a * b), c);
}

//Round 3
function toonify(accent, sentence) {
  if (accent === 'daffy') {
    return sentence.replace(/s/g, 'th');
  } else if (accent === 'elmer') {
    return sentence.replace(/r/g, 'w');
  } else {
    return sentence;
  }
}

//Round 4
function wordReverse(s) {
  var outString = "";
  var reversed = s.split(" ").reverse()
  for (var word=0; word < reversed.length; word++) {
    outString += reversed[word];
    if (word !== reversed.length) {
      outString += " ";
    }
  }
  return outString;
}

//Round 5
function letterReverse(s) {
  var outString = "";
  var stringArray = s.split(" ");
  for (var word=0; word < stringArray.length; word++) {
    var reversedStringArray = stringArray[word].split("").reverse();
    for (var character in reversedStringArray) {
      outString += reversedStringArray[character];
    }
    if (word !== stringArray.length) {
      outString += " ";
    }
  }
  return outString;
}

//Round 6
function longest(arrayOfStrings) {
  var longest = "";
  for (var item in arrayOfStrings) {
    if (arrayOfStrings[item].length > longest.length) {
      longest = arrayOfStrings[item];
    }
  }
  return longest;
}

//Final Round
function repMaster(input, inputFunction) {
  return inputFunction(input) + " proves that I am the rep MASTER!";
}
