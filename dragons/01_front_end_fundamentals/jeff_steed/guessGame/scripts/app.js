window.onload = function() {
  var answer = Math.floor(Math.random() * 10 + 1);

  var guess = prompt("Guess a number between 1 and 10.");

  //while (guess !== answer) {
    if (parseInt(guess) === answer) {
      document.write("<h1>Good job! You guessed " + guess + ". That is correct!</h1>");
      console.log(answer);
    } else {
      document.write("<h1>You guessed " + guess + ". That is incorrect. The correct number is " + answer + ".</h1>");
      console.log(answer);
    }
  //}
}; // End of window.onload
