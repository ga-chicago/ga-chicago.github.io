# --------------------------------------------------------------------------------
# use this example route to populate database with json strings to manipulate later!
# --------------------------------------------------------------------------------
get '/api/upload/crystal_maiden' do
  @hero_string = File.read('public/Crystal_Maiden.json').to_s
  Jhero.create({
    :name => 'Crystal_Maiden',
    :json_string => @hero_string
  }).to_json
end

get '/api/heroes/:name' do
  Jhero.find_by_name(params[:name]).to_json
end
