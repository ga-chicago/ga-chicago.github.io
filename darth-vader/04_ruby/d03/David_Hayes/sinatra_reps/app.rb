require 'bundler'
Bundler.require()

get '/' do
      {:name => 'David Hayes',
       :message => 'Pleased to see you!'}.to_json
end

get '/about' do
      {:name => 'I am an aspiring web devloper.',
       :age => 50,
       :favorites => 'pop music, "The Walking Dead", "Van Halen"'}.to_json
end

get '/contact' do
      {:name => 'David Hayes',
       :email => 'david@davidhayes.us',
       :thanks => 'Thank you, kind user!'}.to_json
end

get '/index' do
  erb :index
end
