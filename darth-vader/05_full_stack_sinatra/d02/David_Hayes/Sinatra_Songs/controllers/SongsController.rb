class SongsController < ApplicationController

  get '/' do

    #get all songs from here
    @songs = Songs.all
    erb :songs_index

  end

end
