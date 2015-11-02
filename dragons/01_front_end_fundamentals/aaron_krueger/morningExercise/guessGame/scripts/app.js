


var randNum = Math.floor(Math.random()*100);
var guessTracker = 0;

var getGuess = function(){
  return prompt('Guess a number 0-100');
}

var compareGuess = function(){
  var limit = 7;
  getGuess();
  for(i=0; i < limit; i++){
    if ( getGuess == randNum){
      alert('You guessed it right!');
      break;
    }else if (getGuess != randNum){
      guessTracker++;
      alert('Try again' + ', you\'ve guessed '+guessTracker+' times.');
        if(guessTracker === limit){
          alert('oh darn')
          break;
        }
      return compareGuess();
    }else{
      alert('something went wrong');
    }
  }
}
compareGuess();
