MANDRILL_API_KEY = ''

require 'mandrill'



begin
    mandrill = Mandrill::API.new MANDRILL_API_KEY
    template_name = "schoolfish-welcome-email-verification"
    template_content = [{"content"=>"example content", "name"=>"example name"}]
    message = {"headers"=>{"Reply-To"=>"tim@timrourke.com"},
     "merge_language"=>"mailchimp",
     "track_clicks"=>nil,
     "from_email"=>"tim@timrourke.com",
     "text"=>"Example text content",
     # "images"=>
     #    [{"content"=>"ZXhhbXBsZSBmaWxl", "type"=>"image/png", "name"=>"IMAGECID"}],
     "return_path_domain"=>nil,
     "inline_css"=>nil,
     "track_opens"=>nil,
     "to"=>
        [{"email"=>"tim@timrourke.com",
            "type"=>"to",
            "name"=>"Tim Rourke"}],
     # "google_analytics_campaign"=>"message.from_email@example.com",
     # "google_analytics_domains"=>["example.com"],
     # "bcc_address"=>"message.bcc_address@example.com",
     "auto_html"=>nil,
     # "recipient_metadata"=>
     #    [{"values"=>{"user_id"=>123456}, "rcpt"=>"recipient.email@example.com"}],
     "html"=>"<p>Example HTML content</p>",
     "important"=>false,
     "auto_text"=>nil,
     "subject"=>"example subject",
     # "attachments"=>
     #    [{"content"=>"ZXhhbXBsZSBmaWxl",
     #        "type"=>"text/plain",
     #        "name"=>"myfile.txt"}],
     "tags"=>["password-resets"],
     "merge"=>true,
     "signing_domain"=>nil,
     "tracking_domain"=>nil,
     "from_name"=>"Example Name",
     "metadata"=>{"website"=>"timrourke.com"},
     # "subaccount"=>"customer-123",
     "view_content_link"=>nil,
     # "global_merge_vars"=>[{"content"=>"merge1 content", "name"=>"merge1"}],
     "preserve_recipients"=>nil,
     "url_strip_qs"=>nil,
     "merge_vars"=>
        [{
        	"vars"=>[{"verify_email_link"=>"http://google.com", "fname"=>"merge2"}]}
        ]
      }
    async = false
    ip_pool = "Main Pool"
    # send_at = Time.now
    result = mandrill.messages.send_template template_name, message, async, ip_pool
        # [{"reject_reason"=>"hard-bounce",
        #     "status"=>"sent",
        #     "email"=>"recipient.email@example.com",
        #     "_id"=>"abc123abc123abc123abc123abc123"}]
    
rescue Mandrill::Error => e
    # Mandrill errors are thrown as exceptions
    puts "A mandrill error occurred: #{e.class} - #{e.message}"
    # A mandrill error occurred: Mandrill::UnknownSubaccountError - No subaccount exists with the id 'customer-123'    
    raise
end