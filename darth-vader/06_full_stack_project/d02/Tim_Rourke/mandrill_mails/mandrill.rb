require 'mandrill'
m = Mandrill::API.new  'hdnxaQ1CpMuai00vuYWLKw'
message = {
 :subject=> "Hello from the Mandrill API",
 :from_name=> "Your name",
 :text=>"Hi message, how are you?",
 :to=>[
   {
     :email=> "jamest@ga.co",
     :name=> "James"
   }
 ],
 :html=>"<html><h1>Hi <strong>message</strong>, how are you?</h1></html>",
 :from_email=>"sender@yourdomain.com"
}
sending = m.messages.send message, async
puts sending
