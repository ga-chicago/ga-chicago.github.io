require 'sinatra/base'

#loading all controllers + models
Dir.glob('./{controllers,models}/*.rb').each {
  |file| require file
}

map ('/') {run HomeController}

map ('/songs') {run SongsController}
