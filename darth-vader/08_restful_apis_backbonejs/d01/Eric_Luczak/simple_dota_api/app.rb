require 'bundler'
Bundler.require

set :public_folder, 'Public'

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'simpleheroes'
)

require './scrape'

get '/' do
  @hero = Hero.create({
    :name => 'Crystal Maiden',
    :ability_1 => 'Crystal Nova',
    :ability_2 => 'Frostbite',
    :ability_3 => 'Arcane Aura',
    :ability_4 => 'Freezing Field'
    }).to_json
end

get '/api/heroes' do
  Hero.order(:id).all.to_json
end

post '/api/heroes' do
  Hero.create({
    :name => params[:name],
    :ability_1 => params[:ability_1],
    :ability_2 => params[:ability_2],
    :ability_3 => params[:ability_3],
    :ability_4 => params[:ability_4]
    }).to_json
end

patch '/api/heroes/:id' do
  hero_args = {
    :name => params[:name],
    :ability_1 => params[:ability_1],
    :ability_2 => params[:ability_2],
    :ability_3 => params[:ability_3],
    :ability_4 => params[:ability_4]
    }
  @hero = Hero.find(params[:id])
  @hero.update(hero_args)
  @hero.to_json
end

put '/api/heroes/:id' do
  hero_args = {
    :name => params[:name],
    :ability_1 => params[:ability_1],
    :ability_2 => params[:ability_2],
    :ability_3 => params[:ability_3],
    :ability_4 => params[:ability_4]
    }
  @hero = Hero.find(params[:id])
  @hero.update(hero_args)
  @hero.to_json
end

delete '/api/heroes/:id' do
  Hero.find(params[:id]).destroy
end
