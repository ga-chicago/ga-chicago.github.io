require 'bundler'
Bundler.require


ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'auth_example'
)

#enable server-side sessions
enable :sessions

def does_user_exist?(username)
  user = UsersModel.find_by(:name => username.to_s)
  if user
    return true
  else
    return false
  end
end

#is a user logged in?
def is_not_authenticated?
  #if yes, it is not nil...else false
  session[:user].nil?
end







#registration/login
get'/' do
  erb :account_form

end


# Registration action
post '/register' do
    puts '------------------------------------'
    puts params
    puts '------------------------------------'
    @message = ' '

  if does_user_exist?(params[:name]) == true
    @message = 'username already exists'
    return erb :login_notice
  end


    password_salt = BCrypt::Engine.generate_salt # SALT = KEY
    password_hash = BCrypt::Engine.hash_secret(params[:password], password_salt)

    newbie = UsersModel.new
    newbie.name = params[:name]
    newbie.password_hash = password_hash
    newbie.password_salt = password_salt
    newbie.save

    @message = 'You have successfully registered!'

    erb :login_notice

  end

# Login action
post '/login' do
  puts '------------------------------------'
  puts params
  puts '------------------------------------'

  @message = ''

  if does_user_exist?(params[:name]) == false
    @message = 'Sorry... bu that username does not exist'
    return erb :login_notice
  end

  #find and get user
  user = UsersModel.where(:name => params[:name]).first!

  #does the password match

  pwd = params[:password]
  if user.password_hash == BCrypt::Engine.hash_secret(pwd , user.password_salt)
    @message = 'You have been logged in successfully!'
    session[:user] = user

    return erb :login_notice

  else
    @message = 'sorry but you password does not match'
    return erb :login_notice
  end

end


get '/logout' do
  session[:user] = nil
  redirect '/'
end

get '/resource' do
if is_not_authenticated? == false
    return erb :resource
else
  @message = "not authenticated...no access, sorry"
  return erb :login_notice
end

end
