WebFontConfig = {
  google: { families: [ 'Open+Sans:400,800:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

$(document).on('ready', function() {

  var $playerIndicator = $('.player');

  $('body').on('click', 'button.ticTacToe', function(e) {

    $(this).prop('disabled', 'disabled');

    playRound(this);

  });

  $('body').on('mouseover', 'button.ticTacToe', function(e) {

    $(this).addClass('hoveredItem');

  });

  $('body').on('mouseleave', 'button.ticTacToe', function(e) {

    $(this).removeClass('hoveredItem');

  });

  window.currentPlayer = 1

  function playRound(item){
    if (window.currentPlayer == 1) {
      markSquare(item);
      changePlayer();
    } else {
      markSquare(item);
      changePlayer();
    }
  }

  function markSquare(item) {
    var marker = ( window.currentPlayer == 1 ) ? 'X' : 'O';
    var color = ( window.currentPlayer == 1 ) ? '#1ae' : '#e33';
    $(item).html(marker);
    $(item).css({
      'color':color
    });
    checkWinner();
  }

  function changePlayer() {
    if (window.currentPlayer == 1) {
      window.currentPlayer = 2;
      $playerIndicator.html('Player 2');
    } else {
      window.currentPlayer = 1;
      $playerIndicator.html('Player 1');
    }

    return window.currentPlayer;
  }

  function checkWinner() {
    var $squares = $('.ticTacToe');

    var grid = {
      row1: [],
      row2: [],
      row3: [],
      column1: [],
      column2: [],
      column3: [],
      diag1: [],
      diag2: []
    }

    grid.row1.push($($squares[0]).html());
    grid.row1.push($($squares[1]).html());
    grid.row1.push($($squares[2]).html());
    grid.row2.push($($squares[3]).html());
    grid.row2.push($($squares[4]).html());
    grid.row2.push($($squares[5]).html());
    grid.row3.push($($squares[6]).html());
    grid.row3.push($($squares[7]).html());
    grid.row3.push($($squares[8]).html());

    grid.column1.push($($squares[0]).html());
    grid.column1.push($($squares[3]).html());
    grid.column1.push($($squares[6]).html());
    grid.column2.push($($squares[1]).html());
    grid.column2.push($($squares[4]).html());
    grid.column2.push($($squares[7]).html());
    grid.column3.push($($squares[2]).html());
    grid.column3.push($($squares[5]).html());
    grid.column3.push($($squares[8]).html());

    grid.diag1.push($($squares[0]).html());
    grid.diag1.push($($squares[4]).html());
    grid.diag1.push($($squares[8]).html());
    grid.diag2.push($($squares[6]).html());
    grid.diag2.push($($squares[4]).html());
    grid.diag2.push($($squares[2]).html());

    for (var line in grid) {

      if ((grid[line][0] == grid[line][1]) && (grid[line][1] == grid[line][2])) {

        if (grid[line][0] == 'X'){
          alert('X is the winner!')
        } else if (grid[line][0] == 'O'){
          alert('O is the winner!')
        }

      }
    }

  }

});
