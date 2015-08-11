require 'bundler'
Bundler.require

def name(name)
  {:name => name.to_s}.to_json
end

get '/name' do
  name('isaac')
end
