$(document).ready(function(){



  $("button").hover(function(){
    $(this).fadeOut( "slow");
    $(this).fadeIn( "fast");
                              })

    $("#photo").click(function() {
    alert( "What up Biotch!" );
      });

    $("#pics").click(function() {
      alert( "Picture's are worth a 1000 words" );
        });

    $("#friends").click(function() {
    alert( "I have no friends" );
      });

    $("#America").click(function() {
    alert( "Grizzly bears are dangerous!" );
      });

      $("#guess").click(function() {
          var guess = prompt("Guess a number between 1 and 6, to recieve your wishes...");
          guessNum(guess);
        });











})//end of jquery

var correctGuess = false;
var randomNumber = Math.floor((Math.random()*6)+1);

function guessNum (guess) {
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    alert("The Grateful Dead are awesome!");
  }else {
    alert("No Soup for You! wah .... wah ... wah ....");
    $("#guess").fadeOut( "slow", function() {
    // Animation complete.
  });
  $( "#guess" ).fadeIn( 8000, function() {
  // Animation complete
});
  }

}


//guess a number
