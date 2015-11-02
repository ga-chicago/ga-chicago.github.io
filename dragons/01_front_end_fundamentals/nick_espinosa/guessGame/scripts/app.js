window.onload = function() {
  //var contentContainer = document.getElementById('content');
  //contentContainer.innerHTML = '<p> ' + guessTheNumber + '</p>';

  var guessTheNumber = prompt('guess a number between 1 and 10');
  if (guessTheNumber == 3) {
    return console.log('you guessed the right number');
  } else if (guessTheNumber < 3){
   return console.log('guess higher');
  } else {
    return console.log('guess lower');
  }



}
