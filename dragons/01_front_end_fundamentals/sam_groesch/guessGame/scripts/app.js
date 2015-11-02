window.onload = function() {

function randomNumber() {
    return parseInt(Math.random()*100);
};
var rand = randomNumber();
var userGuess = parseInt(prompt('Choose a number between 1 and 100'));
var contentContainer = document.getElementById('content');
var moreContentContainer = document.getElementById('morecontent');
var evenMoreContentContainer = document.getElementById('evenmorecontent');

function checkNumber(z) {
  if (rand == z) {
    return 'You are correct!';
  } else if (rand > z) {
    return 'Your guess is too low!';
  } else {
    return 'Your guess is too high!';
  };
};

function game() {
  var x = checkNumber(userGuess);
    contentContainer.innerHTML = x;
  if (x == 'Your guess is too low!' || x == 'Your guess is too high!'){
    var y = parseInt(prompt('Choose a number between 1 and 100'));
    var z = checkNumber(y);
    moreContentContainer.innerHTML = z;
  };
};
console.log(rand);
console.log(userGuess);
console.log(typeof(rand));
console.log(typeof(userGuess));
game();
evenMoreContentContainer.innerHTML = 'The number was: ' + rand;

} //end of window.onLoad
