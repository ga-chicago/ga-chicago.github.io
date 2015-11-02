window.onload = function() {
  var guess = document.getElementById('guess');
  var submit = document.getElementById('run');
  var status = document.getElementById('status');
  var gen = document.getElementById('generate');
  var h1 = document.querySelector('h1');
  var total = document.getElementById('guesses');
  var number = newRandom();
  var guesses = 0;

  function newRandom() {
    var high = Math.floor(Math.random() * 300) + 10;
    var low = Math.floor(Math.random() *  (high - 10));
    var difference = high - low;
    var number = Math.floor(Math.random() * difference) + low;
    h1.innerHTML = 'The number is between ' + low  + ' and ' + high;
    return number;
  }

  submit.addEventListener('click', function(e){
    if (guesses === 5) {
      total.innerHTML = 'Out of guesses! The number was ' + number;
      guesses = 0;
      number = newRandom();
    } else if (guess.value == number) {
      status.innerHTML = 'You guessed the number!';
    } else {
      guesses++;
      status.innerHTML = 'Wrong Number!';
      total.innerHTML = 'Guesses: ' + guesses;
    }
  });

  gen.addEventListener('click', function(e) {
    number = newRandom()
  });



}
