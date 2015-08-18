require 'bundler'
Bundler.require

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'restfuldogs'
)

get '/' do
  @dog = Dog.create({ :name => "Bud",
    :breed => 'Dalmation',
    :master => 'anyone',
    :age => 4}).to_json
end

get '/api/dogs' do
  Dog.order(:id).all.to_json
end

get '/api/dogs/:id' do
  Dog.find(params[:id]).to_json
end

post '/api/dogs/create/:name/:breed/:master/:age' do
  puts params
  Dog.create({
    :name => params[:name],
    :breed => params[:breed],
    :master => params[:master],
    :age => params[:age]
    }).to_json
end

post '/api/dogs' do
  Dog.create({
    :name => params[:name],
    :breed => params[:breed],
    :master => params[:master],
    :age => params[:age]
    }).to_json
end

patch '/api/dogs/:id' do
  dog_args = {
    :name => params[:name],
    :breed => params[:breed],
    :master => params[:master],
    :age => params[:age]
  }

  @dog = Dog.find(params[:id])
  @dog.update(dog_args)
  @dog.to_json
end

put '/api/dogs/:id' do
  dog_args = {
    :name => params[:name],
    :breed => params[:breed],
    :master => params[:master],
    :age => params[:age]
  }

  @dog = Dog.find(params[:id])
  @dog.update(dog_args)
  @dog.to_json
end

delete '/api/dogs/:id' do
  Dog.find(params[:id]).destroy
end
