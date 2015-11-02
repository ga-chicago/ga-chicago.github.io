window.onload = function(){

var guessNumber = parseInt(prompt('Hey. Guess a number.'));

function randomNumber() {
      return Math.floor(Math.random() * (10 - 1)) + 1;
  }

randomNumber();

if (guessNumber !== randomNumber()) {
  var respone =  prompt("Holy shit!  You picked the right number.  Congratulations!");
} else if (guessNumber !== randomNumber()) {
  contentContainer.innerHTML = "You picked the wrong number.  Guess again."
}


var contentContainer = document.getElementById('content');

content.innerHTML = 'ok.';
} // end of window.onLoad
