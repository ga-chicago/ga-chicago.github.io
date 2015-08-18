#api key: 2guFH1tYVM1Lq6EafQ3-qg

require 'mandrill'
client = Mandrill::API.new '2guFH1tYVM1Lq6EafQ3'

email = {
  'preserve_recipients' => nil,
  'text' => 'Hey, thanks for signing up! Have a wonderful day.',
  'to' => [{'type' => 'to',
    'email' => 'bolanderbrad@gmail.com',
    'name' => 'Brad'}],
    'from_name' => 'From myself.. haha',
    'from_email' => 'bolanderbrad@gmail.com',
    'subject' => 'Hodor?',
    'return_path_domain' => nil
}

result = client.messages.send email

puts 'an email should be sent soon'
puts result
