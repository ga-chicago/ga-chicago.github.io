require 'bundler'
Bundler.require()

# connect to a database using ActiveRecord
ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'vader'
)

require './StudentsModel'

get '/allstudents' do
  students = Students.all.to_json
  # SELECT * FROM students; - .to_json
end

# find student by id
# params object
get '/student/:id' do
  puts 'the ID to search for is...' + params[:id].to_s
  student = Students.find(params[:id]).to_json
end

get '/create_student/:name/:email' do

  name = params[:name]
  email = params[:email]

  student = Students.new
  student.name = name
  student.email = email
  student.save

  {:message => 'You added ' + name.to_s + ' to the db! good job!'}.to_json

end
