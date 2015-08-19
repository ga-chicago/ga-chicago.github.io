require 'bundler'
Bundler.require

@transportation = ['truck','van','car','train']
@turtles = ['mikey', 'leo', 'raph', 'donnie']
@kitties = ['fuzzington', 'sparky', 'sir puff']

get '/' do
  erb :layout
end
