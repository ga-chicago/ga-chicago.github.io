var deck = [];

var playerHand = [];
var dealerHand = [];

function loadDeck() {
  deck = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 10, 10,
           2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 10, 10,
           2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 10, 10,
           2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 10, 10];

  return true;

}

function shuffleDeck() {
  shuffle(deck);
  return true;
}

function dealCard() {
  if (deck.size == 0) {
    return null;
  } else {
  return deck.pop();
  }
}

function buildHand(hand) {
  hand.push(dealCard)
  return hand;
}

function addScore(hand) {
  return hand.sum;
}

function dummyDraw(hand) {
  curscore = addScore(hand);
  if (curscore > 15) {
    curscore = addScore(hand.push(dealCard));
    console.log('Drawing...');
    return hand.push(dealCard);
  } else {
    console.log('Standing on ' + score);
    return hand;
  }
}

function compareScore() {
  p = addScore(playerHand);
  d = addScore(dealerHand);
  if (p > 21) {
    console.log('You busted!');
  } else {
    if (d > 21) {
      console.log('Dealer busted. You win!')
    } else {
      if ((p == d) && (p < 21)) {
        console.log('Its a push. Player:' + p + ' Dealer: ' + d);
      } else if (p < d) {
        console.log('You lose. Player:' + p + ' Dealer:' + d);
      } else {
        console.log('You win. Player:' + p + ' Dealer:' + d);
      }
    }

  }
}
shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
