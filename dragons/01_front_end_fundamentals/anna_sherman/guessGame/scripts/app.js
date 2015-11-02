window.onload = function(){

var randNum = parseInt(10*Math.random());
var gameContainer = document.getElementById('game');



while (guess !== randNum) {
  var guess = prompt("Guess a number from 1 to 10!");
  if (guess == randNum){
    gameContainer.innerHTML = 'you are correct!';
    break
  }
  else if (guess > randNum){
    gameContainer.innerHTML = 'too high';
  }
  else {
    gameContainer.innerHTML = 'too low';
  }
}

}
