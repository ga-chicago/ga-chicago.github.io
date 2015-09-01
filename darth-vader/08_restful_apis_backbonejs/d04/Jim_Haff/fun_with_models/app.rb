require 'bundler'
Bundler.require

  set :views, File.expand_path('../views', __FILE__)
  set :public, File.expand_path('../public', __FILE__)

ActiveRecord::Base.establish_connection(
:adapter => 'postgresql',
:database => 'instafake'
)



get '/' do

  erb :index

end

get '/one' do

  erb :one

end

get '/two' do

  erb :two

end

get '/three' do

  erb :three

end

get '/four' do

  erb :four

end

get '/five' do

  erb :five

end

get '/six' do

  erb :six

end

get '/seven' do

  erb :seven

end

get '/eight' do

  erb :eight

end

get '/nine' do

  erb :nine

end

get '/phish' do

  erb :phish

end
## RESTFUL API
### /api/instafake


## get

get '/api/instafake' do

  InstagramModel.all.to_json

end

get '/api/instafake/:id' do
  InstagramModel.find(params[:id]).to_json
end
post '/api/instafake' do

  InstagramModel.create(params).to_json

end

#update

put '/api/instafake/:id' do
  @id = params[:id]
  @insta = InstagramModel.find(@id)
  @insta.username = params[:username]
  @insta.post = params[:post]
  @insta.hastags = params[:hashtags]
  @insta.save
  @insta.to_json
end

patch '/api/instafake/:id' do
  @id = params[:id]
  @insta = InstagramModel.find(@id)
  @insta.username = params[:username]
  @insta.post = params[:post]
  @insta.hashtags = params[:hashtags]
  @insta.save
  @insta.to_json
end


delete '/api/instafake/:id' do
  InstagramModel.destroy(params[:id])
end
