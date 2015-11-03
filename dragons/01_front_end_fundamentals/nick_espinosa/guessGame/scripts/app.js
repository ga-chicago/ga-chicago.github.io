//window.onload = function() {
  //var contentContainer = document.getElementById('content');
  //contentContainer.innerHTML = '<p> ' + guessTheNumber + '</p>';

  // var guessTheNumber = prompt('guess a number between 1 and 10');
  // if (guessTheNumber == 3) {
  //   return console.log('you guessed the right number');
  // } else if (guessTheNumber < 3){
  //  return console.log('guess higher');
  // } else {
  //   return console.log('guess lower');
  // }

  window.onload = function() {

    /* Get random number from 1 to max
     * @param maximum for range
     *
     */
    function getRandomNum( max ) {
      var num = Math.floor( Math.random() * max );
      return num;
    }

    function promptUser( max ) {
      userInput = prompt('Pick a number between 1 and ' + max + '!');
      if( userInput >= 1 && userInput <= 10 ) {
         return userInput;
      } else promptUser( max );

    }

    function checkGuess( num, guess ) {
      return num == guess;
    }

    function gameLoop( max ) {
      var num = getRandomNum( max );
      console.log(num);
      for( i = 0; i < 2; i ++ ) {
        var guess = promptUser( max );
        if( checkGuess( num, guess ) ) {
          alert('You guessed correctly!');
          var won = true;
          break;
        } else {
          if( i < 1 ) {
            alert( 'Try again!' );
          }
          var won = false;
        }
      }
      if ( won ) {
        return;
      } else {
        alert( 'Sorry, you lost.' );
        return;
      }
    }

    gameLoop(10);

  }//end of window.onLoad
