window.onload = function() {

// Create a randomNumber guessing game that prompts the user.
// if the user is wrong prompt the user to guess again and give the user a hint
// (ie. your guess was lower or higher).  if the guess was correct write
// something to the dom telling the user they were correct, and if they were
// wrong write something exclaiming that they were wrong.

  var ranNum = randomNumber(10);
  var correct = false;
  var numberOfGuesses = 0;

  while (correct === false) {
    numberOfGuesses += 1;
    var answer = prompt("Guess a number from 0 to 10");
    var contentContainer = document.getElementById("content");

    if (answer == ranNum) {
      contentContainer.innerHTML = "Good job! You guessed correctly, the number was " +
                                    ranNum + ". <br><br> You got it right in " + numberOfGuesses +
                                    " guesses! Good job!";
      correct = true;
    } else {

      contentContainer.innerHTML = "Sorry, incorrect!";
      if (answer > ranNum) {
        contentContainer.innerHTML += " ... try a guess that is lower";
      } else if (answer < ranNum) {
        contentContainer.innerHTML += " ... try a guess that is higher";
      }

      correct = false;
    }

  }


  function randomNumber(scale) {
    return parseInt(scale * Math.random());
  }

}
