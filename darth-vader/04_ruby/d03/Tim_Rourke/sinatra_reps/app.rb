require 'bundler'
Bundler.require()

name = {
	:name => "Tim Rourke",
	:message => "Sinatra, bitches!"
}

about = {
	:about => "I'm a big fan of Sinatra's unopinionated low-level nature.",
	:age => "30",
	:favourites => "Sinatra, Angular, Express, Node, Ruby, JavaScript, Sass"
}

contact = {
	:name => "Tim Rourke",
	:email => "tim@timrourke.com",
	:thanks => "Thanks for reaching out!"
}

get '/' do
	erb :index
end

get '/name' do 
	name.to_json
end

get '/about' do 
	about.to_json
end

get '/contact' do 
	contact.to_json
end