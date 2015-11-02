window.onload = function() {

var contentContainer = document.getElementById('content');  //set contentContainer variable to write output to the content section

function getRandomInt(min, max) { //create inclusive random integer function to return integer between two given values
       return Math.floor(Math.random() * (max - min + 1)) + min;
   }

var answer = getRandomInt(0,100);
var userguess = prompt("I am thinking of a number between 0 and 100, what is it?");


if (answer == userguess) {
  contentContainer.innerHTML = 'You are correct sir!';
}
else if (userguess > answer) {
    var userguess = prompt("Your guess was too high, try another one");
}
else {
  var userguess = prompt("Your guess was too low, try another one");
}

if (answer == userguess) {
  contentContainer.innerHTML = 'You are correct sir!';
}
else {
  contentContainer.innerHTML = 'You are wrong! The number was ' + answer;
}


} //end of window.onload
