# hay bundler can we haz our gems plz
require 'bundler'
Bundler.require() # y ya u can

def fake_model(name, description)
  {:name => name.to_s, :description => description.to_s}.to_json
end

get '/' do
  cross_origin # thank you cross origin gem!
  fake_model('Sinatra', 'Love that code')
end
