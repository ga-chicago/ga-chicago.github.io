class UsersController < ApplicationController

  # in gemfile add...
  # gem 'bcrypt'

  #ApplicationController
  #enable :sessions

  def does_user_exist?(username)

    user = UsersModel.find_by(:user_name => username.to_s)

    if user
      return true
    else
      return false
    end

  end

  get '/register' do

    erb :users_register

  end

  post '/register' do

    # input name='user_name'
    # input name='user_email'
    # input name='password'
    @new_user = UsersModel.new
    puts params # console.log(params)
    @new_user.user_name = params[:user_name]
    @new_user.user_email = params[:user_email]
    #@new_user.is_admin = false

    # salt == key to the door, unique, generated when needed, no two users have the same
    password_salt = BCrypt::Engine.generate_salt  # something you know
    password_hash = BCrypt::Engine.hash_secret(params[:password], password_salt)

    @new_user.password_salt = password_salt
    @new_user.password_hash = password_hash

    @new_user.save

    erb :users_register_success

  end

  get '/login' do

    erb :users_login

  end

  post '/login' do

    user_name = params[:user_name]

    #1st if
    if self.does_user_exist?(user_name) == true
      user = UsersModel.where(:user_name => user_name).first!

      #2nd if
      if user.password_hash == BCrypt::Engine.hash_secret(params[:password], user.password_salt)

        sessions[:user] => user

        erb :users_login_success
      end
      #end 2nd if

    end
    #end 1st if
    erb :users_login_error

  end


end
