window.onload = function() {

  // generate random number
  randomNum = Math.floor( Math.random() * 2) + 1;

  // prompt for guess and store in variable
  userGuess = prompt('guess a number between 1 and 2');

    // first guess and response with hint if incorrect
    if (userGuess == randomNum) {
      alert('that\'s correct!');
    } else if (userGuess < randomNum) {
      userGuess = prompt('not quite, guess higher!');
    } else if (userGuess > randomNum) {
      userGuess = prompt('not quite, guess lower!');
    }

    // response after second guess
    if (userGuess == randomNum) {
      alert('that\'s correct!');
    } else alert('Sorry, the number was ' + randomNum)

} // end of window.onload


// test with 1-2 number
//use loop for guesses?
