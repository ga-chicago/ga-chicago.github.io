var blackJack = {};

blackJack.deck = [];

blackJack.suits = ['hearts', 'diamonds', 'clubs', 'spades'];

blackJack.buildDeck = function(){
	for (var suitName in blackJack.suits) {
		for (var i = 1; i < 14; i++) {
			var card = {
				suit: blackJack.suits[suitName],
				value: i+1
			}
			blackJack.deck.push(card);
		}
	}
};

blackJack.players = {
	computer: {
		handValue: 0,
		score: 0,
		cards: []
	},
	player: {
		handValue: 0,
		score: 0,
		cards: []
	}
};

blackJack.deal = function(player){
	var dealtCard = blackJack.deck.splice(Math.floor(Math.random()*blackJack.deck.length), 1)[0];

	var currentPlayer = blackJack.players[player];

	currentPlayer.cards.push(dealtCard);

	console.log(dealtCard);

	if (dealtCard.value < 11) {
		dealtCard.cardScore = dealtCard.value;
		dealtCard.cardName = dealtCard.value;
	} else if (dealtCard.value == 11) {
		dealtCard.cardScore = 10;
		dealtCard.cardName = 'Jack';
	} else if (dealtCard.value == 12) {
		dealtCard.cardScore = 10;
		dealtCard.cardName = 'Queen';
	} else if (dealtCard.value == 13) {
		dealtCard.cardScore = 10;
		dealtCard.cardName = 'King';
	} else if (dealtCard.value == 14) {
		dealtCard.cardScore = dealtCard.value;
		dealtCard.cardName = 'Ace';
	}

	if (player == 'computer') {

		if (dealtCard.value == 14) {
			if (currentPlayer.score + 11 > 21) {
				currentPlayer.score += 1;
			} else {
				currentPlayer.score += 11;
			}
		} else if (dealtCard.value < 11) {
			currentPlayer.score += dealtCard.value;
		} else {
			currentPlayer.score += 10;
		}

	} else {

		if (dealtCard.value == 14) {
			if (confirm('Dealer deals ace! Click OK to take 11 as score, click cancel to take 1 as score.')) {
				currentPlayer.score += 11;
				dealtCard.cardScore = 11;
			} else {
				currentPlayer.score += 1;
				dealtCard.cardScore = 1;
			}
		} else if (dealtCard.value < 11) {
			currentPlayer.score += dealtCard.value;
		} else {
			currentPlayer.score += 10;
		}

		blackJack.updateScoreboard(dealtCard);

	}

	console.log(currentPlayer);

};

blackJack.updateScoreboard = function(dealtCard) {

	var row =  '<tr><td>' + dealtCard.suit + '</td>';
			row += '<td>' + dealtCard.cardName + '</td>';
			row += '<td>' + dealtCard.cardScore + '</td></tr>';

	$('.js-scoreboard tbody').append($(row));

	$('.js-score').html(blackJack.players.player.score)
};

$(document).on('ready', function() {

	blackJack.buildDeck();

	//Deal the first 2 cards to each player.
	blackJack.deal('computer');
	blackJack.deal('computer');
	blackJack.deal('player');
	blackJack.deal('player');

	$('body').on('click', '.js-deal', function(e) {
		e.preventDefault();
		
		if (blackJack.players.computer.score < 16) {
			blackJack.deal('computer');	
		}
		blackJack.deal('player');
	});

});