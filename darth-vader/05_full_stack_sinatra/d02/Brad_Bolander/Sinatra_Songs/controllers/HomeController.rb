class HomeController < ApplicationController

    get '/' do
    @songList = SongsModel.all
      erb :index
    end

end
