window.onload = function() {

  var randomNumber = Math.floor((Math.random() * 10));
  var userNumber = prompt("Guess a number between 1 and 10");


  /*function playGame() {
  if (userNumber < randomNumber) {
    alert("You are too low.");
    return userNumber;
  } else if (userNumber > randomNumber) {
    alert("You went over.");
    return userNumber;
  } else {
    var winnerContainer = document.getElementById('winner');
    winnerContainer.innerHTML = "Congrats, you totally nailed it!"
  }
}*/
while (userNumber != randomNumber) {
function askNumber() {
  return userNumber;
}
  if (userNumber < randomNumber) {
    prompt("You are too low, guess again.");
    return askNumber();
  } else if (userNumber > randomNumber) {
    prompt("You went over, guess again.");
    return askNumber();
    }
  }
  if(userNumber === randomNumber) {
    document.write = "got it"
  } else {
    document.write="<p>loser<p>"
  }
}




// below is correct response from classmate
/*var range = 10;
var n = parseInt(Math.random() * range);
var attempts = 2;
var win = false;
var endMessage = '<p>You lose! '+'The number was '+n+'.<p>';
for (var i = 0; i < attempts; i++) {
    var guess = getGuess();
    guess > n ?
      alert('Too high') :
      guess < n ?
        alert('Too low') :
        win = true;
​
    if (win) {
      endMessage = '<p>You win!<p>'
      break;
    }
}
document.write(endMessage);
​
} // end of window.onload
​
function getGuess() {
var guess = parseInt(prompt("Guess a number [0-9]"));
​
if (isNaN(guess) || guess < 0 || guess > range-1)
  getGuess();
​
return guess;*/





// end of window.onLoad