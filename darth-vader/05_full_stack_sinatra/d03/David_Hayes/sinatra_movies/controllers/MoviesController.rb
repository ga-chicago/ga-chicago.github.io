class MoviesController < ApplicationController

  get '/' do
    @movies = MoviesModel.all
    erb :movies_index
  end

  get '/create'
    erb :movies_create
  end

  post '/create' do
    @movie = MoviesModel.new
    @movie.title = params[:title]
    @movie.director = params[:director]
    @movie.release_year = params[:release_year]
    @movie.genre = params[:genre]
    @movie.star1 = params[:star1]
    @movie.star2 = params[:star2]
    @movie.star3 = params[:star3]
    @movie.rating = params[:rating]
    @movie.save

    erb :movies_create_success
  end

  get 'edit/:id' do
    @id = params[:id]
    @movie = MoviesModel.find(@id)

    erb :movies_edit
  end

  post '/edit' do
    @movie = MoviesModel.find(params[:id])
    @movie.title = params[:title]
    @movie.director = params[:director]
    @movie.release_year = params[:release_year]
    @movie.genre = params[:genre]
    @movie.star1 = params[:star1]
    @movie.star2 = params[:star2]
    @movie.star3 = params[:star3]
    @movie.rating = params[:rating]
    @movie.save

    erb :movies_edit_success
  end

  post '/delete' do
    @id = params[:id]
    @movie = MoviesModel.find(@id)
    @movie.destroy

    erb :movies_delete_success
  end
end
