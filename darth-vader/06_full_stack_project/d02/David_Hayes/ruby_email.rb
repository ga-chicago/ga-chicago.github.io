# api key - XtFiils21GWaVz3py1XTVA

require 'mandrill' #hey I need this gem
client = Mandrill::API.new 'XtFiils21GWaVz3py1XTVA'

email = {
  "preserve_recipients" => nil,
  "text" => "Hey, thanks for being awesome! Have a wonderful day",
  "to" => [{"type" => "to",
    "email" => "davidlynnhayes@att.net",
    "Name" => "David"}],
  "from_name" => "GA Chicago",
  "from_email" => "david@davidhayes.us",
  "subject" => "Hey Hey Hey",
  "return_path_domain" => nil
}

result = client.messages.send email

puts 'hey an email should be sent soon'
puts result
