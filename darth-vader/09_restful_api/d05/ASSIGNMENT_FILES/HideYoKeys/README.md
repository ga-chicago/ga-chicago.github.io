# Hide yo wife, Hide you Keys... they're hackin everyone
 We don't want eveyone in the world to be able to use our keys (and kill our apps or bank accounts) by looking through our GitHub repositories. We need a solution!

 ## DotENV Gem

 #### In rails
 1. Add gem 'dotenv-rails', :groups => [:development, :test] to Gemfile
 2. Bundle
 3. Put .env inside .gitignore before creating .env file
 4. Add, commit, pull, push
 5. Create .env
 6. Put your token or key in .env ex. API_KEY=AIzaSyCK4VuSxV4WQuTXflOgkSKdy9TBZ9OFxfg
 9. In controller#method include ex.
 ```
 @key = ENV['API_KEY']
 ```
 10. In erb view, namespace a variable for use in JS


 #### In Sinatra
 1. gem install dot_ENV
 2. Include dot_env in Gemfile
 3. In config.ru:
 require 'dotenv'
 Dotenv.load
 4. Create .gitignore in app root
 5. Put .env inside .gitignore before creating .env file
 6. Add, commit, pull, push
 7. Create .env
 8. Put your token or key in .env ex. API_KEY=AIzaSyCK4VuSxV4WQuTXflOgkSKdy9TBZ9OFxfg
 9. In controller#method include ex.
 ```
 @key = ENV['API_KEY']
 ```
 10. In erb view, namespace a variable for use in JS
