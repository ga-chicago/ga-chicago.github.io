class HomeController < ApplicationController

  get '/' do
    {:title => 'test'}.to_json
  end
end
