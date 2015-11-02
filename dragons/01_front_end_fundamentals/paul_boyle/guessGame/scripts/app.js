window.onload=function() {

  var getAns = function () {
    return parseInt(10*(Math.random())+1);//get number between 1-10 random is from 0(inclusive) to 1(exclusive)
  }; //end of getAns function

  var getGuess=function() {
    return parseInt(prompt('pick a number between 1 and 10'));
  }; //end of getGuess function

  var playGame=function(){

    while (win==false) {
      if(guess==ans){
        console.log('you win!');
        win=true;
      }
      else if (guess>ans){
        console.log('lower');
        guess=getGuess();
        console.log('new guess: '+guess+' '+typeof(guess));
      }
      else {
        console.log('higher');
        guess=getGuess();
        console.log('new guess: '+guess+' '+typeof(guess));
      }
    }// end of while loop

  }//end of playGame function

/////////////////////////////////////////////////////////////////

  var win=false; // setting a condition for the game to play.
  var ans=getAns();
  var guess=getGuess();


  //console.log('answer: ' + ans);
  console.log('guess: '+ guess);

  playGame();//play the game

}//end of window.onload
