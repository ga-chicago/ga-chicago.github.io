// Round 1

function lengths(arrayOfStrings) {
  console.log(arrayOfStrings);
  var newArray = [];
for(i = 0; i < arrayOfStrings.length; i++) {
    newArray[i] = arrayOfStrings[i].length;
    }
return newArray;
}

// Round 2

  function transmogrifier(x,y,z) {
    var a = x * y;
    return Math.pow(a,z);
  }

  // Round 3

  function toonify(accent, sentence) {
    if (accent === "daffy") {
      var sSwitch = /s/gi;
      var newSentence = sentence.replace(sSwitch,"th");
      return newSentence;
    } else if (accent === "elmer"){
      var rSwitch = /r/gi;
      var newSentence = sentence.replace(rSwitch,"w");
      return newSentence;
    } else {
      return sentence;
    }
  }

  // Round 4

  function wordReverse(yourString) {
    var newArray = yourString.split(" ");
    var reverseArray = newArray.reverse();
    var reverseString = "";
    for (i=0;i<reverseArray.length;i++){
      reverseString += reverseArray[i] + " ";
    }
    return reverseString;
  }

  // Round 5

  function letterReverse(aString) {
    return aString.split("").reverse().join("").split(" ").reverse().join(" ");
  }

// Round 6

function longest(stringArray) {
  var length = 0;
  var greatest = "";
  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > length){
    length = stringArray[i].length;
    greatest = stringArray[i];
    }
  }
  return greatest;
}

// Round 7

function repMaster(aString, aFunction) {
  aFunction(aString);
  return aFunction(aString) + " proves that I am the rep MASTER";
}
