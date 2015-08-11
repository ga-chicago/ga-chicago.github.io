//ROUND 1
function lengths(strings) {
    var numbers = new Array();
    for (var i = 0; i < strings.length; i++) {
      numbers[i] = strings[i].length;
    }
    return numbers;

}

//ROUND 2
function transmogrifier(num1, num2, num3) {
    return Math.pow(num1*num2, num3);
}

//ROUND 3
function toonify(accent, sentence) {
  var sentenceArray = new Array();
  if (accent == 'daffy') {
    var string = sentence.replace(/s/g, "th");
    return string;
  }
  else if (accent == 'elmer') {
    var string = sentence.replace(/r/g, "w");
    return string;
  }
  else {
    return sentence;
  }
}

//ROUND 4
function wordReverse(string) {
  var array = string.split(" ");
  var reversedArray = new Array();
  array.reverse();
  for(var i = 0; i < array.length; i++){
    reversedArray[i] = array[i];
  }
  return reversedArray;
}

//ROUND 5
function letterReverse(string) {
    var sentenceArray = string.split(" ");
    var reversedArray = new Array();

    for (var i = 0; i < sentenceArray.length; i++) {
        var word = sentenceArray[i];
        var letterArray = word.split("");
        letterArray.reverse();
        reversedArray[i] = letterArray.join("");
        var finalString = reversedArray.join(" ");
    }

    return finalString;
}

//ROUND 6
function longest(stringArray) {
  var longestString = 0;
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestString){
      longestString = stringArray[i].length;
    }
  }
  return longestString;
}

//FINAL ROUND
function repMaster(input, givenFunction) {
  var finalString = givenFunction(input) + " proves that I am the REP MASTER!";
  return finalString;
}
