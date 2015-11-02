window.onload = function() {
  var j = parseInt(prompt('Guess:'));
  var k = parseInt(Math.random() * 100);
  alert(k);

  while (j != k) {
    if (j > k) {
      alert('too big.')
      j = parseInt(prompt('Guess:'));
    }
    else {
      alert('too small.')
      j = parseInt(prompt('Guess:'));
    }
  }
  alert('woot!');

}
