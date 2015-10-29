/*
1. Detecting Types

Create a re-usable construct in Javascript (..you know, keeping things DRY..).
It should accept one argument of any variable.
This construct should return the type of the variable that is the argument.
*/
var findType= function(x){
    return typeof x
  }

//Testing
  console.log(findType('124'));//string
  console.log(findType(124));//number
  console.log(findType(true));//boolean
  console.log(findType({}));//object
  console.log('');

/*
2. Carousel

Create an array that represents people hopping off a carousel.
Loop through the carousel using a for loop. Every other cycle through the loop (odd), someone will hop off.
Repeat until the carousel is empty.
*/

// while loop will continue until all people have gotten off the carousel.

//cycle<15 expression to protect from infinite loop.
//each time through the for loop we will list the people on the carousel. after that we will check and see if it is an odd number cycle , if so, someone .pop() off the carousel.
//increment cycle variable to count how loops around the carosel.


    var people=['paul','steve','john','christian','alex'];
    var cycle=1;

  while(people.length>0 && cycle <15 ){
    for (var i = 0; i < people.length; i++) {
      console.log(people[i],'went around the carousel!');
    }

    if(cycle%2==1){
      console.log(people.pop(),'got off the carousel');
    } else {
      console.log('no one got off the carousel this time');
    }
    cycle+=1;
    console.log(people.length,':people still on carousel');

  }

/*
3. You are an object...

Create an object that represents yourself.
Assign ten attributes about yourself to this object.
Use a foreach (for-in) loop to list all of these attributes (and the keys that they are associated with).
*/



  //assigning attributes for the paul obj
    paul={};
    paul.eyeColor='blue';
    paul.hairColor='brown';
    paul.height='5ft 9in';
    paul.birthPlace='Orland Park, IL';
    paul.age=28;
    paul.hobbies=['Magic: the Gathering','Piano','Soccer'];
    paul.favoriteTvShows=['GOT','Firefly','Fargo','Dexter','Shameless'];
    paul.favoriteSportsTeams=['Barcelona','Arsenal','Bulls'];
    paul.car='Chevy Sonic';
    paul.money=null;


//output key value pairs
    for(prop in paul){
      console.log('key:',prop);
      console.log('value:',paul[prop]);
      console.log('');
      
    };

/*
    4. Elementary School

    In elementary school, when you divide you typically use division and have to report the remainder.
    Create a function that returns a string.
    It will accept two arguments: a number, and a number to divide that number against.
    The returned string should state what the result is and the remainder.
    You will need to use the / and the % operators.

*/

// divide funtion takes in a number as an argument and a divisor
//for loop where we find the quotient but comparing the product between quotient and divisor. If that product is greater than the numer(dividend)then we know we went too far and the correct quotient will be 1 less than current quotient. If product is equal to dividend than we know we have the correct quotient with no divisor.

var divide=function(num,div){
    for(var quotient=0;quotient*div<num;quotient++){

    }

    if(quotient*div==num){
      console.log('no remainder... yay!');
    } else {
      quotient-=1;
    }

    var rem=num-quotient*div;
    var message='answer is : '+quotient+'   remainder is : '+rem;
    return message;
  }

//testing
    console.log('dividing 20 by 7');
    divide(20,7);

//alternate solution using Math.floor
var divideAlt=function(num,div){
  var ans=Math.floor(num/div);
  var rem=num%div
  var string='The answer is: '+ans+' with a remainder of '+rem;
  return console.log(string);
}
