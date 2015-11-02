window.onload = function() {

  var range = 10;
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

      if (win) {
        endMessage = '<p>You win!<p>'
        break;
      }
  }
  document.write(endMessage);

} // end of window.onload

function getGuess() {
  var guess = parseInt(prompt("Guess a number [0-9]"));

  if (isNaN(guess) || guess < 0 || guess > range-1)
    getGuess();

  return guess;
}
