/*
ASSIGNMENT: WEEK 1 WKND JS PRACTICE
NAME: ADAM WILSON

SUBMISSION NOTES:
completeness: 100%
comprehension: 80%. sometimes hard hold all pieces in head at once.
comments: Fun and addictive solving problems. Learning to write logic before code! Repl.it helpful for flagging syntax errors. Round 5 letterReverse was hardest for me (most sep. pieces).
*/



// ROUND 1
// the function lengths is called with an arg of the array strings. strings is mapped to a new Array (newArray). the .map method returns the length using .length as the value input to the newArray.

var strings = ['cube', 'sphere', 'box'];

function lengths(x) {
  var newArray = x.map(function(item) {
    return item.length;
  })
  console.log(x);
  return newArray;
} //end function lengths
lengths(strings);



// ROUND 2
function transmogrifier(num1, num2, num3) {
   return Math.pow((num1 * num2), num3)
}
transmogrifier(5, 4, 3) // result 8000
transmogrifier(13, 12, 5 // result 92389579776
transmogrifier(42, 13, 7) //result 14466001271480793000


// ROUND 3
function toonify(accent, sentence) {
  if (accent = 'daffy') {
    var newSentence = sentence.replace(/s/gi, 'th');
  }
  if (accent = 'elmer') {
    var newSentence = sentence.replace(/r/gi, 'w');
  }
  console.log(newSentence);
}
toonify('elmer', 'dangnabbit, that rascally rabbit!');
toonify('daffy', 'say, I suspect something fishy');


// ROUND 4
var helloWorld = "have wars clone the begin";

function wordReverse(string){
  var array = string.split(" ");  // string > array separting by empty spaces (" ")
  array.reverse(); // reverses order of array items

  var newString = " "; //empty string declared
  for (var i = 0; i < array.length; i++) {
    newString += array[i] + " ";
  }
  return newString;

}
wordReverse(helloWorld);


// ROUND 5
var helloWorld = "hello world"; // original string of words

function letterReverse(string) { // hello world > olleh dlrow
  var wordArray = string.split(" "); // spliet sentence str into array at blank spaces
  // return wordArray; //  to test if gives [ hello, world]
  var funnyString = " ";

  for (i = 0; i < wordArray.length; i++ ) {
  //split word into array of letters
     arrayOfLetters = wordArray[i].split("");
    //reverse the letter order in array
    arrayOfLetters.reverse();
    //add array to a string
    funnyString += arrayOfLetters + " ";
  }  // end for loop

  var funnyStringNoCommas = " ";

  for (i = 0; i < funnyString.length; i++) {
      if (funnyString[i] !== ",") {
          funnyStringNoCommas += funnyString[i];
      }
  } // end for loop

  return funnyStringNoCommas;
} //end function letterReverse

letterReverse(helloWorld); // call letterREverse


// ROUND 6 -
//declare array of strings
var strings = ['short', 'long', 'longest'];

// create function to find longest word:
function longest(array) {

  //var to save lengths and winner
  var greatest= 0;
  var winner;

  //for loop to iterate through words
  for (var i = 0; i < array.length; i++) {
    //measure word using .length
    //compare against longest so far in var
    //if > make var = to the word
    // if = or < do move on to next
    if (array[i].length > greatest) {
      winner = array[i];
    } // end if statement
  } // end for loop

  // when done iterating, rrreturn winner
  return winner;
}

//call function to find result
longest(strings);


  // ROUND 7
  //declare string
  var string1 = "I can do 50 crunches. This pretty much ";

  //declare function that returns a string toUpperCase()
  function toUpper(string) {
      return string.toUpperCase();
  }

  //function that takes value returned from function and adds to it
  function repMaster(input, functionArg) {
      //run input thur functinArg
      //concat it to rep string
      var output = functionArg(input);
      return output + " proves that I'm the rep MASTER!";
  }

  repMaster(string1, toUpper);
