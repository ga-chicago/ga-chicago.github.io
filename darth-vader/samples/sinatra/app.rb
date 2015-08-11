require 'bundler'
Bundler.require()

get '/' do
  {:name => 'test'}.to_json
end
