require 'bundler'
Bundler.require

class Blackjack
	def initialize

	end

	@suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']

	@deck = []

	@players = [
		player = {
			:name => 'Player',
			:score => 0,
			:cardsHeld => []
		},
		computer = {
			:name => 'Computer',
			:score => 0,
			:cardsHeld => []
		}
	]

	def self.build_deck
		@suits.each do |suit|
			13.times do |i|
				card_value = 0

				itr = 1 + i.to_i

				if (itr == 1)
					card_value = 'ace'
					card_name = 'Ace'
				elsif (itr < 11)
					card_value = itr
					card_name = itr
				else
					card_value = 10
					if (itr == 11)
						card_name = 'Jack'
					elsif (itr == 12)
						card_name = 'Queen'
					else
						card_name = 'King'
					end
				end

				card = {
					:suit => suit.to_s,
					:name => card_name,
					:value => card_value
				}

				@deck.push(card)
			end
		end
	end

	def self.deal
		@deck.delete(@deck.sample)
	end
end


@deck = Blackjack.build_deck

get '/' do

	@deal = Blackjack.deal.to_json

  erb :index
end
