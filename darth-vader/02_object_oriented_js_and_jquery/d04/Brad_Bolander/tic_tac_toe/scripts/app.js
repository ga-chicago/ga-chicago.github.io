$(document).ready(function() {

  window.currentPlayer = 1;

  $('#1').on("click", function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#2').on("click", function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });


  $('#3').on("click", function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#4').on("click", function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#5').on("click", function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#6').on("click", function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#7').on("click", function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#8').on("click", function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#9').on("click", function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

});

//Change player number
function changePlayer() {

  if (window.currentPlayer == 1) {
    window.currentPlayer = 2;
    $('h3').html("Turn: Player 2");
  } else {
    window.currentPlayer = 1;
    $('h3').html("Turn: Player 1");
  }

  console.log("Player has been changed to..." + window.currentPlayer);

  return window.currentPlayer;
}

//Disable Button when clicked
function disableButton(buttonSelector) {
  $(buttonSelector).prop("disabled", "disabled");
  console.log("I disabled a button!");
  return buttonSelector;

}

// Add X or O
function markSquare(buttonSelector) {

  // 1 == X; 2 == O
  if (window.currentPlayer == 1){
    $(buttonSelector).html("X");
  } else {
    $(buttonSelector).html("O");
  }

}
