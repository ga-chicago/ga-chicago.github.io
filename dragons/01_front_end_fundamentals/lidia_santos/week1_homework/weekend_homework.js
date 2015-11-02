
// Round 1
var powerrangers = ['Billy', 'Jason', 'Kimberly', 'Zack', 'Trini'];
var rangersLengths = [];

function lengths(rangersArray) {
  for (i = 0 ; i < rangersArray.length; i++ ){
      rangersLengths.push(rangersArray[i].length);
  }
}
lengths(powerrangers);
console.log(rangersLengths)







/// Round 2 - F*** YES! I DID THIS ONE ON THE FIRST TRY! I almost cried, ok i teared up a little!
function transmogrifier(num1, num2, num3){
  var wholeNumber = parseInt(num1 * num2);
  var mogrified = Math.pow('wholeNumber', num2);
  return mogrified;
}

// Round 3 -


function toonify(accent, sentence) {
  if (accent == 'daffy') {
    var sentence = sentence.replace(/s/g, 'th');
    return sentence;
  } else if (accent === 'elmer') {
    var sentence = sentence.replace(/r/g, 'w');
    return sentence;
  }else{
    return sentence;
  }

}
toonify('daffy', 'show me the shortest route to the really big refrigerator store ')



// round 4

function wordReverse(words) {
  var wordString = words.split(" ");
  var reversify = wordString.reverse();
  var reverseReverse = reversify.join(' ');
  return reverseReverse
}

wordReverse("Now this is a story all about how my life got flipped turned upside down")



// round 5

function backwords(x) {
  var a = [];
  for (var i = x.length - 1; i >= 0; i --) {
    a.push(x[i]);
  }
  var b = a.join('');
  return b;
}

function letterReverse(c) {
  var y = [];
  var z = c.split(' ');
  for (var i = 0; i < z.length; i++) {
    y.push(backwords(z[i]));
  }
  var d = y.join(' ');
  return d;
}

letterReverse('did this really work')

//Round 6


var spiceGirls = ['Emma', 'Victoria', 'Melanie C', 'Mel B', 'Geri'];
var biggestNumber = 0;
var longestString = "";

function longest(spice) {
  for (var i = 0; i < spice.length; i++) {
    if (spice[i].length > biggestNumber) {
      biggestNumber = spice[i].length;
      longestString = spice[i];
    }
  }
  console.log(longestString);
}
longest(spiceGirls)


//final round
function repMaster(string, func){
  var x = func(string) + " proves that I am the rep MASTER";
  console.log(x);
}
repMaster("I can watch The Walking Dead now", letterReverse);

function toUpperCase(string) {
  x = string.toLocaleUpperCase();
  return x;
}

repMaster("I can watch The Walking Dead now", toUpperCase)
