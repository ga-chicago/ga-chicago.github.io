window.onload = function() {
  var rand = parseInt(Math.random() * 100);
  var t = prompt('Guess:');

  function guessN(p) {
    p = parseInt(p);
    if (p > rand) {
      alert('too big.');
      guessN(prompt("Guess:"));
    }
    else if (p < rand) {
      alert('too small.');
      guessN(prompt("Guess:"));
    }
    else if (p == rand){
      alert('you win.');
    }
    else {
      guessN(prompt("Guess:"));
    }
  }

  guessN(t);

  var contentContainer = document.getElementById('content');

}
