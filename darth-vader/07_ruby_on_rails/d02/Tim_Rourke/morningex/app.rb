require 'bundler'
require 'sinatra/base'
Bundler.require()

class Application < Sinatra::Base

	get '/' do

		@idiots = ['Steve', 'Ian', 'Karl', 'Phil']

		@assholes = ['Curtis', 'Mr. Harris', 'Mrs. Sarich']

		@hobos = ['Nate', 'Ben', 'Helen']

		erb :index
	end

end