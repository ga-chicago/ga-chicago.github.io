$(document).ready(function() {

  window.currentPlayer = 1;
  window.bombSquare = Math.floor(Math.random()*10)+1;
  $("h3").html("Mark an X");

  $("#1").on("click",function() {
    markSquare(this);
    disableButton(this);
    gameStatus();
  });
  $("#2").on("click",function() {
    markSquare(this);
    disableButton(this);
    gameStatus();
  });
  $("#3").on("click",function() {
    markSquare(this);
    disableButton(this);
    gameStatus();
  });
  $("#4").on("click",function() {
    markSquare(this);
    disableButton(this);
    gameStatus();
  });
  $("#5").on("click",function() {
    markSquare(this);
    disableButton(this);
    gameStatus();
  });
  $("#6").on("click",function() {
    markSquare(this);
    disableButton(this);
    gameStatus();
  });
  $("#7").on("click",function() {
    markSquare(this);
    disableButton(this);
    gameStatus();
  });

  $("#8").on("click",function() {
    markSquare(this);
    disableButton(this);
    gameStatus();
  });
  $("#9").on("click",function() {
    markSquare(this);
    disableButton(this);
    gameStatus();
  });
// Hover events
  $('#1').hover(
    function() {$(this).addClass('hover');},
    function() {$(this).removeClass('hover');}
  );
  $('#2').hover(
    function() {$(this).addClass('hover');},
    function() {$(this).removeClass('hover');}
  );
  $('#3').hover(
    function() {$(this).addClass('hover');},
    function() {$(this).removeClass('hover');}
  );
  $('#4').hover(
    function() {$(this).addClass('hover');},
    function() {$(this).removeClass('hover');}
  );
  $('#5').hover(
    function() {$(this).addClass('hover');},
    function() {$(this).removeClass('hover');}
  );
  $('#6').hover(
    function() {$(this).addClass('hover');},
    function() {$(this).removeClass('hover');}
  );
  $('#7').hover(
    function() {$(this).addClass('hover');},
    function() {$(this).removeClass('hover');}
  );
  $('#8').hover(
    function() {$(this).addClass('hover');},
    function() {$(this).removeClass('hover');}
  );
  $('#9').hover(
    function() {$(this).addClass('hover');},
    function() {$(this).removeClass('hover');}
  );

});

function changePlayer() {

  if (window.currentPlayer == 1) {
    window.currentPlayer = 2;
    $("h3").html("Mark an O");
  } else {
    window.currentPlayer = 1;
    $("h3").html("Mark an X");
  }
    return window.currentPlayer;

}

// Check for winner
// Change player is the game rolls on
// Announce winner if somebody has TIC TAC TOE
function gameStatus() {
  console.log("here");
  if (!checkWinner()) {
    if ($(':disabled').length==9) {
        $("h3").html("The game has ended in a tie");
    } else {
    changePlayer();
    }
  } else if (window.currentPlayer == 1) {
    $("h3").html("X has won the game");
  } else {
    $("h3").html("O has won the game");
  }
}

// disable buttons after clicked...
function disableButton(buttonSelector) {

  $(buttonSelector).prop("disabled","disabled");
  // console.log("I disable a button!");
  return buttonSelector;

}

// add X or O
function markSquare(buttonSelector) {
  // 1==x; 2==o
  if ($(buttonSelector).attr("id")==window.bombSquare) {
    $(buttonSelector).html("@#!&");
    $(buttonSelector).css('background-color','#222222');
    $(buttonSelector).css('color','#DDDDDD');
  } else if (window.currentPlayer==1) {
    $(buttonSelector).html("X");
  } else {
    $(buttonSelector).html("O");
  }
}

function checkWinner() {
    if (checkRow(1)) return true;
    if (checkRow(2)) return true;
    if (checkRow(3)) return true;
    if (checkCol(1)) return true;
    if (checkCol(2)) return true;
    if (checkCol(3)) return true;
    if (checkDiag()) return true;
    // if (checkFull()) return true;
    return false;
}

function checkRow(row) {
// set X or O
  if (window.currentPlayer == 1) {
    XorO = "X";
  } else {
    XorO = "O";
  }
  var winner;
// check
  var index = (row-1)*3;
  if ($("#"+(index+1)).text()==XorO
    && $("#"+(index+2)).text()==XorO
    && $("#"+(index+3)).text()==XorO) {
      winner = true;
    $("#"+(index+1)).css('background-color','#f2a2ad');
    $("#"+(index+2)).css('background-color','#f2a2ad');
    $("#"+(index+3)).css('background-color','#f2a2ad');
  } else winner=false;
  return winner;
}

//
function checkCol(col) {
  // set X or O
    if (window.currentPlayer == 1) {
      XorO = "X";
    } else {
      XorO = "O";
    }
  // check
    var winner;
    var index = col;
    if ($("#"+index).text()==XorO
      && $("#"+(index+3)).text()==XorO
      && $("#"+(index+6)).text()==XorO) {
      winner = true;
      $("#"+index).css('background-color','#f2a2ad');
      $("#"+(index+3)).css('background-color','#f2a2ad');
      $("#"+(index+6)).css('background-color','#f2a2ad');
    } else winner = false;
    return winner;
}
function checkDiag() {
  // set X or O
    if (window.currentPlayer == 1) {
      XorO = "X";
    } else {
      XorO = "O";
    }
    var winner;
  // check
    if ($("#1").text()==XorO
      && $("#5").text()==XorO
      && $("#9").text()==XorO) {
      winner = true;
      $("#1").css('background-color','#f2a2ad');
      $("#5").css('background-color','#f2a2ad');
      $("#9").css('background-color','#f2a2ad');
    } else if ($("#3").text()==XorO
      && $("#5").text()==XorO
      && $("#7").text()==XorO) {
      winner = true;
      $("#3").css('background-color','#f2a2ad');
      $("#5").css('background-color','#f2a2ad');
      $("#7").css('background-color','#f2a2ad');
    } else winner = false;
    return winner;
}
function checkFull() {
    if ($(':disabled').length==9) {
         return true;
       }
}
