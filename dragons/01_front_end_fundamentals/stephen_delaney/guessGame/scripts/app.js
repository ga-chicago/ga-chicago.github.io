window.onload = function(){

getRandomInt(1, 20)
  function getRandomInt(min, max) {
    var mysteryNumber = Math.floor(Math.random() * (max - min)) + min;

    var guessOne = prompt('I have a number between 1 and 20. Guess what it is.');

      respondOne()

      function respondOne(){
        if (guessOne == mysteryNumber) {
        return 'You got it on the first try! Wow!';
      }  else if (guessOne > mysteryNumber) {
        var guessTwo = prompt('Too high! Try one more time.');
        respondTwo();
      }
        else if (guessOne < mysteryNumber) {
          var guessTwo = prompt('Too low! Try one more time.');
          respondTwo();
        }
        function respondTwo(){
          if (guessTwo == mysteryNumber) {
          alert('You got it! Good job!');
        }  else {
          alert('Sorry, you lost the game. The number was ' + mysteryNumber + '.');
        }
      }
    }






    }

  }





// end of window.onLoad
