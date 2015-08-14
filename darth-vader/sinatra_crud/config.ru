require 'sinatra/base'

Dir.glob('./{controllers,models}/*.rb').each {
  |file| require file
}

# localhost/students/
map('/students') { run StudentsController }

# localhost:9292/ index.erb
map('/') { run HomeController }

# localhost:9292/students/
map('/students') { run StudentsController }
