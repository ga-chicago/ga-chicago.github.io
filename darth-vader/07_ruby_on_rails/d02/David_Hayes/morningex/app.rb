require 'bundler'
Bundler.require()

  get '/' do
    @array1 = [ 4, 2, 5]
    @array2 = [ 14, 22, 19 ]
    @array3 = [ 51, 23, 91 ]

    

    erb :index
  end
