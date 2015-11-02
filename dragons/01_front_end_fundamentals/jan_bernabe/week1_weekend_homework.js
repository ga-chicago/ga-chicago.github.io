//Subject: Week 1 Weekend Homework
//Comfortable: 3.5
//Complete: 5
//Comments: I spent a lot of time doing trial and error and reading through MDN.  I'm not 100% confident yet.

// Round 1
var boysNames = ['Jan', 'Christian', 'Andy', 'Michael', 'Nick', 'Jack'];

function lengths(arrayOfStrings) {
	var myArray = [];
  for (itr = 0; itr < arrayOfStrings.length; itr++) {
	 myArray.push(arrayOfStrings[itr] + ': '+ arrayOfStrings[itr].length);
}
console.log(myArray);
	return myArray;
}
lengths(boysNames);

// Round 2
function transmogrifier(x, y, z) {
  var total = Math.pow((x * y), z);
  console.log(total);
  return total;
}
transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);

//Round 3
function toonify(accent, sentence) {
  var queerSentence;

  if (accent === 'daffy'){
  queerSentence =  sentence.replace(/s/gi, 'th');
  console.log(queerSentence);

  } else if (accent === 'elmer'){
  queerSentence = sentence.replace(/r/gi, 'w');
  console.log(queerSentence);

  } else {
  console.log(sentence);
  }

  return queerSentence;
}

toonify('daffy', 'hello, is it me you are looking for? I can see it in your eyes. I can see it in your smile.');
toonify('elmer', 'Forever, I will hold you close in my arms I cannot resist your charms');

//Round 4
var array = [];

function wordreverse (string) {
 var sentence = string;
 array = sentence.split(' ').reverse().join(' ');
 console.log(array);
   return array;
}

wordreverse('I believe the children are our future. Teach them well and let them lead the way.');

//Round 5
function letterreverse (string) {
  var sentence = string.split(' ');
  var array = [];
  sentence.forEach(function(sentence) {
    array.push(sentence.split('').reverse().join(''));
  });

  return array.join(' ');
}

letterreverse('Karma police arrest this man he talks in maths and he buzzes like a fridge');
letterreverse('Karma police Arrest this girl her Hitler hairdo is making me feel ill and we have crashed her party');

//Round 6
var friends = ['Jan', 'Christian', 'Andy', 'Michael', 'Nick', 'Jack'];

function amount(array){

var short = 0;
var longest='';

for(var i=0; i < array.length; i++) {
    if(array[i].length > short) {
        var short = array[i].length;
        longest = array[i];
    }
}
        return longest;

}
console.log(amount(friends));

//Round 7
function wordReverse(stringInput) {
  var string = stringInput;
  var splitString = string.split(' ').reverse().join(' ');

  var newString = splitString.concat(' proves that I am the rep MASTER!');

  console.log(newString);
  return newString;
}

function repMaster(unknown, wordReverse) {

   if (wordReverse && (typeof wordReverse == 'function')) {
      wordReverse(unknown);
   } else {
     return unknown;
   }
}

repMaster('Never give your heart to a blockhead', wordReverse);
