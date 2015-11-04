


var flowers = ['daisy','rose','daffodil', 'tulip', 'sunflower'];
function lengths(arrayOfStrings) {

var myArray = [];
for(i = 0; i < arrayOfStrings.length; i++) {
myArray.push(arrayOfStrings[i].length);
}

console.log(myArray);
return myArray;
}
lengths(flowers)



function transmogrifier(num1, num2, num3){
var t = (num1 * num2);
return Math.pow(t, num3);
}

transmogrifier(5, 4, 3); ========> 8000
transmogrifier(13, 12, 5) =========> 92389579776
transmogrifier(42, 13, 7) ===========> 14466001271480793000
}


function toonify(accent, sentence){


  var str = "daffy, so you smell like sausage";
  var newStr = str.replace(/so/i, 'tho');
  var newStr = str.replace(/smell/i, 'thmell');
  var newStr = str.replace(/sausage/i, 'thauthage');
  console.log(newStr)
}




var wordReverse = function(string){
    arr= string.split(' ');
    arr.reverse();
    var reversing= ' ';
    for (word in arr){
    reversing +=arr[word] + ' ';
            }
    return reversing;
}
console.log(wordReverse("now I know what a TV dinner feels like"));

========> "like feels dinner TV a what know I now"

var topic= 'today we will cover css';
function wordReverse(words){

}

//5.

funciton letterReverse(someStuff){

  var tempArray = someStuff.split(' ');
  var finalSentence;
  for (var inc in tempAray);
  var word= tempArray[inc];
console.log(word);
var splitWord = word.split(' ');
splitWord.reverse();
word = splitWord.join(' ');
console.log(word);
finalSentence = finalSentence + ' ' + word;
console.log(finalSentence);
}
  return finalSentence;
}






//repMaster("Never give your heart to a blockhead", wordReverse) # =>
//"blockhead a to heart your give never proves that I am the rep MASTER!"
//repMaster("I finished this practice", toUpperCase);
//"I FINISHED THIS PRACTICE proves that I am the rep MASTER!"


function(user,myFunction){
var repMaster
return myFunction(user);
}

console.log(repMaster('never give your heart to a blockhead.wordReverse));
