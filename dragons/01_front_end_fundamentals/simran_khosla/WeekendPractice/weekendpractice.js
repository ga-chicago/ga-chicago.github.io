// Round 1

function lengths(arrayOfStrings) {
      var newArray = [];
      for (var i = 0; i < arrayOfStrings.length; i++) {
      newArray.push(arrayOfStrings[i].length);
      }
      return newArray;
      }

// Round 2
function transmogrified (a,b,c) {
  return Math.pow((a*b),c);
}

//woot! this one worked!

// Round 3
/*Write a function called toonify that takes two parameters, accent and sentence.

If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
If the accent is "elmer", replace all "r" with "w".
Feel free to add your own accents as well!
If the accent is not recognized, just return the sentence as-is. */

function toonify(accent,sentence) {
  if (accent === "daffy") {
    return sentence.replace(/s/g,"th");
  }
    else if (accent === "elmer") {
    return sentence.replace(/r/g,"w");
  } else {
    return sentence;
  }

}

toonify("daffy","sup sup sup");

// this WORKS according to stack overflow -- not sure EXACTLY why it works -- would like RegEx explained =]

// Round 4
function wordReverse(stringToSplit) {
  var arrayOfStrings = stringToSplit.split("");
  return arrayOfStrings.reverse();
};
//WOOT! DID IT! and kept it pretty DRY no?

// Round 5
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

function letterReverse(stringToSplit) {
    var arrayOfStrings = stringToSplit.split("");
    var result = '';
    for (var prop in arrayOfStrings) {
      if (prop===arrayOfStrings.length-1) {
      result += reverse(arrayOfStrings[prop])+" ";
    } else {
      result += reverse(arrayOfStrings[prop]);
      }
      return result;
    }


//Round 6
var newArray = [];

function findMaxInArray(arrayOfStrings) {
    function lengths(arrayOfStrings) {
      for (var i = 0; i < arrayOfStrings.length; i++) {
      newArray.push(arrayOfStrings[i].length);
      }
      return newArray;
      }
    var indexNumber = [Math.max(newArray)];
    return arrayOfStrings[indexNumber];
    }

// FINAL ROUND
function (string, someFunction) {
  var newString = someFunction(string) + " means I'm a rep master.";
  return newString;
  }
