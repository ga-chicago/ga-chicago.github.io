class StudentsController < ApplicationController

  # CRUD controller
  # Business Logic Maintenance
  # 'maintenance screens'

  # list all
  get '/' do
    @students = StudentsModel.all
    erb :students_index
  end

  # create
  # a form to create a new student
  get '/create' do
    erb :students_create
  end

  # when form posts to create...
  # have activerecord create a new student
  post '/create' do
    @student = StudentsModel.new
    @student.name = params[:name]
    @student.email = params[:email]
    @student.save
    erb :students_create_success
  end

  # edit
  # the view will also allow you to delete
  # but only if you want
  get '/edit/:id' do
    id = params[:id]
    @student = StudentsModel.find(id)
    erb :students_edit
  end

  post '/edit' do
    @student = StudentsModel.find(params[:id])
    @student.name = params[:name]
    @student.email = params[:email]
    @student.save

    erb :students_edit_success
  end

  # destroy
  post '/destroy' do
      @student = StudentsModel.find(params[:id])
      @id = @student.id
      @name = @student.name
      @student.destroy

      erb :students_destroy_success
  end


end
