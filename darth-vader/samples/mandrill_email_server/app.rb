require 'bundler'
Bundler.require()

require 'mandrill'
mandrill = Mandrill::API.new 'Gf4RUNwLFKlr5aWhAsNmIA'

get '/' do
  return {"Message" => "The Imperial Holonet is classified!"}
end

post '/api/mail' do
  cross_origin
  info = Hash.new
  info['message'] = "Thanks, " + params[:userName].to_s + "! Your email has been sent!"

  message = {
     "preserve_recipients"=>nil,
     "text"=> params[:request].to_s,
     "to"=>
        [{"type"=>"to",
            "email"=> params[:userEmail].to_s,
            "name"=> params[:userName].to_s }],
     "return_path_domain"=>nil,
     "from_name"=>"WDI Darth Vader",
     "from_email"=>"jamest@ga.co",
     "subject"=>"Emergency Transmission from the Dark Lord!",
    }
    result = mandrill.messages.send message

  return info.to_json
end
