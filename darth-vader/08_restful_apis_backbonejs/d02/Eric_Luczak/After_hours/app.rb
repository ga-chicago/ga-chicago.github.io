require 'bundler'
Bundler.require

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'restlessbooks'
)


get '/' do
  erb :index
end

get '/api/books' do
  Book.all.to_json
end

get '/api/books/:id' do
  Book.find(params[:id]).to_json
end

post '/api/books' do
  @book= Book.create({
    :title => params[:title],
    :author => params[:author],
    :year => params[:year]
  }).to_json
end

patch '/api/books/:id' do
  book_args={
    :title => params[:title],
    :author => params[:author],
    :year => params[:year]
  }

  @book = Book.find(params[:id])
  @book.update(book_args)
  @book.to_json
end

put '/api/books/:id' do
  book_args={
    :title => params[:title],
    :author => params[:author],
    :year => params[:year]
  }

  @book = Book.find(params[:id])
  @book.update(book_args)
  @book.to_json
end

delete '/api/books/:id' do
  @book = Book.find(params[:id]).destroy
end
