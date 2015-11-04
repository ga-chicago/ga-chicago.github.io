window.onload = function(){
  alert('working')



//ROUND 1

// FIGHT
var words = ["hello", "what", "is", "up", "dude"]
// empty array to add in items
var ansArr = [];
// declare function named "lengths"
// that accepts a arguments named "arrayOfStrings"
function lengths(arrayOfStrings) {

  // we can log out our "arrayOfStrings"
  console.log(arrayOfStrings);

  // now, we want to "return" something... but what?

  //set the iterator to 0
  //find the length of the array
  //iterate through the given array
  //set the each iterated item to lens
  //call back the global empty array and push in the lens variable because
  //return the ansArr to show the new array of the given words length
  for (var i = 0; i < arrayOfStrings.length; i++) {
    // this means lens = arrayOfStrings[0].length
    // this means lens = arrayOfStrings[1].length
    // this means lens = arrayOfStrings[2].length
    var lens = arrayOfStrings[i].length;
    //this creates a new array in the var ansArr by pushing lens= arrayOfStrings[0] = ansArr[5]
    //this creates a new array in the var ansArr by pushing lens= arrayOfStrings[1] = ansArr[4]
    //this creates a new array in the var ansArr by pushing lens= arrayOfStrings[2] = ansArr[3]
    ansArr.push(lens);
  }
  // this returns the full ansArr array which is [5, 4, 2, 2, 4]
  return ansArr;

};

//invokes the function lengths() with a variable array named words
lengths(words);
//# => [5, 4, 2, 2, 4]




//round 2

//FIGHT
//sets the function transmogrifier and takes three params which are a, b, c and we assume only numbers will be the parameters

var transmogrifier = function(a,b,c){
  //this var calculates a multiplied by b
  var abSum = a * b;
  //this var calculates the sum of ab by using Math.pow(base, power) the third var (c) is the power variable
  var abPower = Math.pow(abSum, c);
  // logs 'transmogrifier:8000'
  console.log('transmogrifier:'+ abPower);
  //returns completed calculation '8000' or last function to be invoked,
  //so if (42,13,7) is last to be invoked--- it would return 14466001271480793000 instead of 8000 ^^(5,4,3)^^
  return abPower;
}


transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);



//round 3

//FIGHT


//create a var function named toonify that accepts two params (accent, sentence)
//accent measures which accent variable is being passed in (daffy or elmer)
//sentence stores the string you want to pass in
var toonify = function(accent, sentence){
    //var daffy is equal to the secondParam.replace(regExp, 'th')
                //sentence.replace(regExp, 'th')
    //2nd param . String.replace(/([regExp])/global , 'replacementLetters')
    var daffy = sentence.replace(/([Ss])/g , 'th');
    //var elmer is equal to the secondParam.replace(regExp, 'w')
              //sentence.replace(regExp, 'w')
    //2nd param . String.replace(/([regExp])/global , 'replacementLetters')
    var elmer = sentence.replace(/[(Rr)]/g, 'w');

    //comparing what accent was passed
    if (accent == 'daffy') {
      //if accent is equal to daffy we log daffy to take the sentence param
      //and replace all capitol S letters and lower case s letters
      console.log(daffy);
            // this logs 'thoda maketh me thhoot people'
    }else if(accent == 'elmer'){
      //if accent is equal to elmer we log elmer to take the sentence param
      //and replace all capitol R letters and lower case r letters
      console.log(elmer);
        //this logs 'Woger looks like Vince Vaughn, Woll out'
    }else{
      //if something goes completely fucking wrong, we give the user the sentence back
      //because someone dun fucked up
      return sentence;
    }


}
  //invokes toonify passing in the string 'daffy', and the string 'soda makes me shoot people'
  toonify('daffy', 'soda makes me shoot people');
  //invokes toonify passing in the string 'elmer', and the string 'Roger looks like Vince Vaughn, Roll out'
  toonify('elmer', 'Roger looks like Vince Vaughn, Roll out');



  //round 4

  //FIGHT

//wordReverse() reverses a string by splitting each word into an array element
//create a variable function
//we then call the reverse method """" Array.reverse """"
// and we join the reversed split strings array by """" String.join(' ') """" method
//which joins each array string element into a complete array string item "weirdo a am i , hello"
var wordReverse = function(string){
    return string.split(' ').reverse().join(' ');
    //return param.Smethod().Amethod().Smethod()
    // Smethod is String.method()
    // Amethod is Array.method()

}

wordReverse('hello , i am a weirdo');





//round 5

//FIGHT
//letterReverse() splits the string parameter into an Array of individual strings of each word in the passed string
//spl is the set variable of the action above^
//set i to 0 so it hits the first item in the newly created variable spl array
//it iterates the length of spl variable   """ ["heeeee", "yaaaaa", "jello", "hello"] """
                                              //spl[0]  , spl[1]  , spl[2] , spl[3]   which is four {[(4)]} iterations
//it is important that spl[i] is equal to spl[i].split('').reverse().join('')
//spl[0]= spl[0].split('').reverse().join('')
//spl[0] gets split into ['h','e','e','e','e','e'] ((which is now an array to reverse))
//then ['h','e','e','e','e','e'] is reversed into ['e', 'e', 'e', 'e', 'e', 'h']
//lastly we join the ['e', 'e', 'e', 'e', 'e', 'h'] array into a string 'eeeeeh'
//this happens per iteration of spl[i]
//since our string is 4 units long there will be 4 splits-->reversals-->joinings in the for loop
// this computes into an Array [ "eeeeeh", "aaaaay", "ollej", "olleh" ]

//on the completion of the for loop, we return spl.join(' ')
//the iterater isn't present because we are not in the for loop. IT IS NOT A GLOBAL VARIABLE--- it can only be called in the for loop
//variable spl is an Array of string elements when the parameter is influenced by the .split() method
//variable turns back into a big ol' string when the join() method is invoked onto spl  like such 'spl.join(' ')'
//when spl.joined(' ') is returned, we receive the string "eeeeeh aaaaay ollej olleh"
var letterReverse = function(string){
  var spl = string.split(' ');
  console.log(spl);
  for (var i = 0; i < spl.length; i++) {
      spl[i] = spl[i].split('').reverse().join('');
  }
  console.log(spl);
  console.log(spl.join(' '));
}

letterReverse('heeeee yaaaaa jello hello');


//round 6

//FIGHT


function longest(arrayOfStrings){
  var longest = '';
  for (var i = 0; i < arrayOfStrings.length; i++) {
    if(arrayOfStrings[i].length > longest.length){
      longest = arrayOfStrings[i];
      arrayOfStrings[i];
    }
  }
  return longest;
}

longest(['1', '22', '333', '4444', '55555']);

//round 7

//FIGHT

var inp = 'hello hello friend my name is ivan';

function repMaster(input, func){

  return func(input);

}
