# config file loads first
# we need app.rb!
require './app' # gets app.rb
run Sinatra::Application # starts sinatra
