// Question 1--------------------------------------------------------------------

/* your code starts here */
function square(x){
  var i = Math.pow(x,2);
  console.log("square result of: " + i + " is a " + typeof i);
  console.log(i);
  if (square(2) !== 4 || cube(3) !== 27 || quad(4) !== 256) {
    console.log("check question 1");
  }
}

function cube(x){
  var i = Math.pow(x,3);
  console.log(i);
}

function quad(x){
  var i = Math.pow(x,4);
  console.log(i);
}

square(2);
cube(3);
quad(4);
/* your code ends here */

//Question 1 check
if (square(2) !== 4 || cube(3) !== 27 || quad(4) !== 256) {
  console.log("check question 1");
}

// Question 2--------------------------------------------------------------------
/* your code starts here */

function sum(numbers, twiceOrHalf){
  if(typeof twiceOrHalf === 'undefined'){
    arrayTotal = 0;
    for(var i = 0; i <numbers.length; i++){
            var arrayCurrent = numbers[i];
            //console.log(numbers[i]);
            var arrayTotal = arrayTotal + arrayCurrent;
            //console.log(arrayTotal);
        }
    console.log(arrayTotal);
}
  else if(typeof twiceOrHalf !== null || twiceOrHalf !== isNaN || twiceOrHalf !== 0 || twiceOrHalf !== ""  || twiceOrHalf !== false){
    console.log(twiceOrHalf * 2);
  }
  else {
    console.log(twiceOrHalf * .5);
  }
    }
var x = [1,2,3,4,5];
var y = "";
sum(x,y);

/* your code ends here */

//Question 2 check
var nums = [2, 4, 6];
if (sum(nums) !== 12 || sum(nums, false) !== 6 || sum(nums, !undefined) !== 24) {
  console.log("check question 2");
}
// if twiceOrHalf is falsey you can't divide by 2.??????????????????????????????



// Question 3--------------------------------------------------------------------
/* your code starts here */

function max(){
            var currentLargest = 0;
    for(var i = 0; i <maxArray.length; i++){
            if(maxArray[i] > currentLargest){
             currentLargest =  maxArray[i];
          }
        }
    console.log(currentLargest);
}

maxArray = [1,2,3,4,5,6,2,3,100,2,3,4,5];
max(maxArray);

/* your code ends here */

//Question 3 check
if (max() !== undefined || max(15) !== 15 ||
    max(-1, 0) !== 0 || max(-1, -7, -4) !== -1) {
  console.log("check question 3");
}
