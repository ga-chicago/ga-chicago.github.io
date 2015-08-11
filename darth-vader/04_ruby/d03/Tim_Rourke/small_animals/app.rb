require 'bundler'
Bundler.require()

root = {
	:name => "Tim Rourke",
	:message => "I hate animals."
}

animals = {
	'kittens' => {
		:name => "kittens", 
		:cuteness => 3, 
		:habitat => "Your mom's creepy-ass living room.", 
		:picture_url => "/images/kittens.jpg",
		:description => "Kittens are disgusting. Best with a dash of salt and enough mayonaisse to hide their pee smell."
	},
	'puppies' => {
		:name => "puppies", 
		:cuteness => 2, 
		:habitat => "That box behind the garage.", 
		:picture_url => "/images/puppies.jpg",
		:description => "Puppies eat, shit, and squeal. No damn sense."
	},
	'calves' => {
		:name => "calves", 
		:cuteness => 4, 
		:habitat => "Meat packing plant.", 
		:picture_url => "/images/calve.jpg",
		:description => "Calves are like almost-steak. Or veal. Depending."
	},
	'octopi' => {
		:name => "octopi", 
		:cuteness => 10, 
		:habitat => "Cool places like Davey's Locker or your sister's shampoo bottle.", 
		:picture_url => "/images/octopi.jpg",
		:description => "Octopi win, they have many arms and will eat your face. Badass."
	},
	'bats' => {
		:name => "bats", 
		:cuteness => 7, 
		:habitat => "The sky, death, hell.", 
		:picture_url => "/images/bats.jpg",
		:description => "Bats aren't quite as cool as octopi, but they suck blood, so I'm down."
	}
}

get '/' do
	erb :json_test
end

get '/api/:name' do 
	param = params[:name]
	animals[param.to_s].to_json
end


#This method is dumb, we should just get the params from the URL.

# get '/kittens' do
# 	animals['kittens'].to_json
# end

# get '/puppies' do
# 	animals['puppies'].to_json
# end

# get '/calves' do
# 	animals['calves'].to_json
# end

# get '/octopi' do
# 	animals['octopi'].to_json
# end