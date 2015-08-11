class ApplicationController < Sinatra::Base

  require 'bundler'
  Bundler.require()

  ActiveRecord::Base.establish_connection(
    :adapter => "postgresql",
    :database => "great_movies"
  )

  set :views, File.expand_path('../../views', __FILE__)

  configure :production, :development do
    enable :logging
  end

  not_found do
    title 'Not Found!'
    erb :not_found
  end
end
