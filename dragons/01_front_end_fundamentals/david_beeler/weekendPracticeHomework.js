// Round 1 ... FIGHT!
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string. To get you started, you'll need to loop through each string in the array and get the length of each one. Those lengths should be stored in a different array that you will return.
//
// Remember that when building a function, you want to use declare a function with a name that accepts arguments. So for building our function called lengths that accepts an array of strings, it might look something like:

function lengths(arrayStrings) {
  var output = [];
  for (var indivString in arrayStrings) {
    output[indivString] = arrayStrings[indivString].length;
  }
  return output;
}

// Test
var words = ["hello", "what", "is", "up", "dude"];
console.log("Round 1: " + lengths(words));


// Round 2 ... FIGHT!
// Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.
//
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

function transmogrifier(a, b, c) {
  return Math.pow( (a * b) , c );
}
console.log("Round 2:")
console.log("(5*4)^3 = " + transmogrifier(5, 4, 3));
console.log("(13*12)^5 = " +transmogrifier(13, 12, 5));
console.log("(42*13)^7 = " +transmogrifier(42, 13, 7));


// Round 3 ... FIGHT!
// Write a function called toonify that takes two parameters, accent and sentence.
//
// If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
// If the accent is "elmer", replace all "r" with "w".
// Feel free to add your own accents as well!
// If the accent is not recognized, just return the sentence as-is.

function toonify(accent, sentence) {
  switch (accent) {
    case "daffy":
        return sentence.replace(/s/gi, "th");
        break;
    case "elmer":
        return sentence.replace(/r/gi, "w");
        break;
    default:
        return sentence;
  }
}

console.log("Round 3 ... FIGHT");
console.log("Daffy says..." + toonify("daffy", "so you smell like sausage"));
console.log("Elmer says..." + toonify("elmer", "rascally little rabbit"));
console.log("David says..." + toonify("david", "silly rabbit, trix are for kids!"));


// Round 4 ... FIGHT!!
// Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation. You'll need to use String.split() to create an array of words (splitting them with a space or " ". Then you'll need to reverse the order of that array using array.reverse(). Finally, you'll loop through them to create a new string).

function wordReverse(str) {
  var arrStr = str.split(" ");
  var revStr = arrStr.reverse();
    // // or loop through
    // var finalStr = ""
    // for (var i = 0; i < revStr.length - 1; i++) {
    //   finalStr += revStr[i] + " ";
    // }
    // finalStr += revStr[revStr.length - 1];
    // console.log(finalStr);
  return revStr.join(" ");
}

console.log("Round 4 .... FIGHT!!");
console.log(wordReverse("Now I know what a TV dinner feels like"));


// Round 5 ... Fight!!
// Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.

function letterReverse(str) {
  var output = "";
  var arrStr = str.split(" ");
  for (var i = 0; i < arrStr.length - 1; i++) {
    output += arrStr[i].split("").reverse().join("") + " ";
  }
  output += arrStr[arrStr.length - 1].split("").reverse().join("");
  return output;
}

console.log("Round 5 ... FIGHT!");
console.log(letterReverse("Now I know what a TV dinner feels like"));
console.log(letterReverse("Put Hans back on the line"));


// Round 6 ... FIGHT!!
// Write a function longest that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function longest(arrStr) {
  var output = "";
  for (var word in arrStr) {
    if (arrStr[word].length > output.length) {
      output = arrStr[word];
    }
  }
  return output;
}

console.log("Round 6 ... FIGHT!!!!!");
console.log(longest(["oh", "good", "grief"]));
console.log(longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"]));


// Final Round ... FIGHT!!!
// Write a function, called repMaster, that accepts two arguments, input and a function. Input should be able to be used with the function. The function used as an argument must return a string. repMaster should take the result of the string, passed as an argument to the argument function, and return this result with ' proves that I am the rep MASTER!' concatenated to it.

function repMaster(inp, funct) {
  return funct(inp) + " proves that I am the rep MASTER!";
}

function toUpperCase(str) {
  return str.toLocaleUpperCase();
}

console.log("FINAL ROUND ... FIGHT!");
console.log(repMaster("Never give your heart to a blockhead", wordReverse));
console.log(repMaster("I finished this practice", toUpperCase));

console.log("\n\nFINISH HIM");
console.log(" K O ");
