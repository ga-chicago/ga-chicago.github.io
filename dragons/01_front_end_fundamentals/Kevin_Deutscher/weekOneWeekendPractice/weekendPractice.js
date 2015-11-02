///1. ----------------------------------------------------------------

var arrayOfStrings = ['kevin', 'john', 'jim', 'andrew'];

function lengths(){
    var newArray = [];
    for (var i = 0; i < arrayOfStrings.length; i++) {
      newArray[i] = arrayOfStrings[i].length;
    }
    return newArray;
}

lengths(arrayOfStrings);

///2. ----------------------------------------------------------------

function transmogrifier(a, b, c){
    var multiply = a * b;
    console.log(multiply);
    console.log(Math.pow(multiply,c))

}
transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);

///3. ----------------------------------------------------------------

var a;
var b;


function toonify(a,b){
   var newSent;
    if(a="daffy"){
        //console.log(b);
        newSent = b.replace(/s/i,"th");
        //console.log(newSent);
        return newSent
    }
    else return b;
}

toonify("daffy", "so you smell like sausage");

///4. ----------------------------------------------------------------

var a;

function wordReverse(a){
    var newArray = [];
    var split = a.split(' ');
    newString = split.reverse();
    for (var i = 0; i < split.length; i++){
      newArray[i] = split[i];
    }
    return newArray;
}

wordReverse("Now I know what a TV dinner feels like");

///5. ----------------------------------------------------------------

function wordReverse(a){
    var nameReverse = a.split("").reverse().join(""); // reverse string & txt
    var split = nameReverse.split(' ');//split text
    newString = split.reverse();//reverse order
    return newString;
}

wordReverse("Now I know what a TV dinner feels like");
wordReverse("Put Hans back on the line");

///6. ----------------------------------------------------------------
//attempting to ID if there is a tie
var a = ["kevin", "david", "matt", "ben", "andrew", 'johnny']

var lgth = 0;
var longest;
var sortedArray;

function longestFunc(){
    for(var i = 0; i < a.length; i++){
        if(a[i].length>lgth){
            lgth = a[i].length;
            longest = a[i];
        }
    }
    for(var j = 0; j<a.length; j++){
      if(a[j] != longest && a[j].length = longest.length){
        longest = a[j];
    }
  }
    return longest;
}
longestFunc(a);
///6. ----------------------------------------------------------------
//there's no need to ID a tie, because regardless first instance populates
//this code works, the other does not yet
var a = ["kevin", "david", "matt", "ben", "andrew", 'johnny']

var lgth = 0;
var longest;
var sortedArray;

function longestFunc(){
    for(var i = 0; i < a.length; i++){
        if(a[i].length>lgth){
            lgth = a[i].length;
            longest = a[i];
        }
  }
    return longest;
}
longestFunc(a);

//Final Round wordReverse------------------------------------------

function repMaster(a ,wordReverse){
//how can you pass the actual text and not a variable into RepMaster??????????

      var c = a;
  return wordReverse(c) + " proves that I am the rep MASTER!";
}

function wordReverse(c) {

    var newArray = [];
    var split = c.split(' ');
    newString = split.reverse();
    for (var i = 0; i < split.length; i++){
      newArray[i] = split[i];
    }

    newArray = newArray.join(" ");
    return newArray.toLowerCase();

}

repMaster("Never give your heart to a blockhead",wordReverse);



//Final Round toUpperCase-------------------------------------------

function repMaster(a ,allCapsFunc){

      var c = a;
  return allCapsFunc(c) + " proves that I am the rep MASTER!";
}

function allCapsFunc(c) {

    var newString = c
    return c.toUpperCase();

}

repMaster("I finished this practice",allCapsFunc);
