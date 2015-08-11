# api key - hdnxaQ1CpMuai00vuYWLKw

require 'mandrill'  # hey, i need this gem
mandrill = Mandrill::API.new 'hdnxaQ1CpMuai00vuYWLKw'



email = {
  "preserve_recipients" => nil,
  "text" => "Hey, thanks for being awesome! Have a wonderful day",
  "to" => [{"type" => "to",
    "email" => "jamest@ga.co",
    "name" => "James"}],
  "from_name" => "From myself.. haha",
  "from_email" => "jamest@ga.co",
  "subject" => "HODOR HODOR HODOR",
  "return_path_domain" => nil
}

result = mandrill.messages.send email

puts 'hey an email should be sent soon'
puts result
