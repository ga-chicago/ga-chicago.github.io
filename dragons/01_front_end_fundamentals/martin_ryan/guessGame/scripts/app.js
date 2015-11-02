

window.onload = function() {

  guessNum();

  function guessNum() {
    var guess = prompt('guess the random number!');
    var answer = parseInt(Math.random(1) * 10);

    if (parseInt(guess) == answer) {
      alert('CORRECT!');
    } else {
      guess > answer ? alert('Your answer was too high') : alert('Your answer was too low');
      //alert('WRONG! It was ' + answer);
      guessNum();
    }
  }
}
