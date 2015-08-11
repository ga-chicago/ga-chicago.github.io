require 'bundler'
Bundler.require()

get '/' do
  {:name => 'Brad', :message => 'Hi there!'}.to_json
end

get '/about' do
  {:about => 'Im cool', :age => '19', :favorites => 'kittens!'}.to_json
end

get '/contact' do
  {:name => 'Brad', :email => 'bolanderbrad@gmail.com', :thanks => 'Thank you!'}.to_json
end
