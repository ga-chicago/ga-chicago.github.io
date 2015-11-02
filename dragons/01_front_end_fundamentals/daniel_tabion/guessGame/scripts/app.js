window.onload = function() {
  var lower_range=1;
  var upper_range=3;
  var max_rounds=5;
  var x;
  var win = false;

  randNum = parseInt((Math.random()+1)*upper_range);
/*
  console.log('Cheating mode...hint: The number is ' + typeof(randNum) + ' ' + randNum);
  console.log('Can you guess the number between ' + lower_range + ' and ' + upper_range +"?");
  console.log('You have ' + max_rounds + ' rounds');
*/
  alert('Guess a number between ' + lower_range + ' and' + upper_range + ". You have " + max_rounds + "guesses.");

  for (var i=0; (i<max_rounds) && win==false; i++) {
    var guess = prompt(randNum + ' Round ' + (i+1) + ' of ' + max_rounds + '. Make your guess:');

    if (guess == randNum) {
      win = true;
    }
    else if (guess < randNum) {
      alert("Too low.");
    }
    else {
      alert("Too high.");
    }
  }

  if (win == true) {
    alert('YOU WIN!');
  }
  else {
    alert('Better luck next time.');
  }

}
