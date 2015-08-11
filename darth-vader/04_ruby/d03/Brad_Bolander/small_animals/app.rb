require 'bundler'
Bundler.require()

get '/' do
  {:name => 'Brad', :message => 'Im not a small animal'}.to_json
end

get '/kitten' do
  {:name => 'sir kittington', :cuteness => '10', :habitat => 'my apartment', :picture_url => 'http://i.imgur.com/F5iJY.jpg', :description => 'A very cute kitten'}.to_json
end

get '/puppy' do
  {:name => 'sparky', :cuteness => '8', :habitat => 'house', :picture_url => 'http://i.imgur.com/M7l4cKA.jpg', :description => 'A very cute puppy'}.to_json
end

get '/bunny' do
  {:name => 'floppy', :cuteness => '10', :habitat => 'garden', :picture_url => 'http://i.imgur.com/4XKxcw3.jpg', :description => 'A very cute bunny'}.to_json
end

get '/turtle' do
  {:name => 'michaelangelo', :cuteness => '7', :habitat => 'sewer', :picture_url => 'http://i.imgur.com/FtkUZ00.jpg', :description => 'Cowabunga!'}.to_json
end

get '/goldfish' do
  {:name => 'bubbles', :cuteness => '8', :habitat => 'tank', :picture_url => 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Common_goldfish.JPG/250px-Common_goldfish.JPG', :description => 'A tiny goldfish'}.to_json
end
