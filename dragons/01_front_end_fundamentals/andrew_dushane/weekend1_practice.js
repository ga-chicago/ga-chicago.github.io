/* Get lengths of strings
 * @param array of strings
 * @return array of lengths
 */
function lengths( arr ) {
  var stringLengths = [];
  for( s in arr ) {
    stringLengths[s] = arr[s].length;
  }
  return stringLengths;
}
var strings = ['abc', 'abcde', 'abcdefg', 'abcdefghijklmnopqrstuvwxyz'];
console.log(lengths( strings ));

/* Multiply two numbers and raise the product by a given exponent
 * @param numbers
 * @return result
 */
function transmogrifier( x , y , z ) {
  return Math.pow( ( x * y ) , z );
}
console.log(transmogrifier(5, 3, 2));
console.log(transmogrifier(5, 4, 3));
console.log(transmogrifier(13, 12, 5));
console.log(transmogrifier(42, 13, 7));

/* Change a string based on a given accent
 * @param accent
 * @return sentence
 */
 function toonify( acc, sent )  {
  var newSent;
  if( acc == 'daffy' ) {
    newSent = sent.replace(/s/gi, 'th');
  } else if( acc == 'elmer' ) {
    newSent = sent.replace(/r/gi, 'w');
  } else {
    newSent = sent;
  }
  return newSent;
 }
 console.log(toonify("daffy", "So you smell like sausage"));
 console.log(toonify("elmer", "Really, I ran away with the random ruckus."));

 /* Reverse the order of words in a sentence
  * @param sentence
  *
  */
 function wordReverse( str ) {
  var words = str.split(' ');
  words.reverse();
  var reversed = words.join(' ');
  return reversed;
 }
 console.log(wordReverse('Halloween is on Saturday but I have no costume'));

 /* Reverse the order of the letters of each word of a sentence
  * @param sentence
  *
  */
 function letterReverse( str ) {
  var words = str.split(' ');
  var newWords = [];
  for( word in words ) {
    newWords[word] = words[word].split("").reverse().join("");
  }
  var reversed = newWords.join(' ');
  return reversed;
 }
console.log(letterReverse('Halloween is on Saturday but I have no costume'));

/* Determine the longest string in an array of strings
 * @param array of strings
 *
 */
 function longest( arr ) {
   var lengths = [];
   for( i in arr ) {
     lengths[i] = arr[i].length;
   }
   var longestStr = 0;
   var index = '';
   for( j in lengths ) {
     if( lengths[j] == longestStr ) {
       return arr[0];
     }
     else if( lengths[j] > longestStr ) {
       longestStr = lengths[j];
       index = j;
     }
   }
   return arr[index];
 }
console.log(longest(['aaaaaaaa', 'bbbbbbbbbb', 'cccccccccccc', 'dddddddddddddd']));
console.log(longest(['aaaaaaaa', 'bbbbbbbbbb', 'cccccccccccc', 'dddddddddddddd', 'dddddddddddddd']));


/* Pass a string and a function
 * Return the result of the function acting on the string
 * @param string
 * @param function
 */
function repMaster( input, func ) {
  var str = func( input );
  str += ' proves that I am the rep MASTER!';
  return str;
}
console.log(repMaster("Never give your heart to a blockhead", wordReverse));
console.log(repMaster("I finished this practice", letterReverse));
