Rails To-Do List

1. Navigate to your directory of choice
2. In that directory in terminal: rails new toDoList
3. Navigate into toDoList: rails g scaffold todo title:string item:text
 - creates Model
 - creates migrations
 - create routes
 - creates controllers
 - creates views
 - creates script files
 - creates scss files
4. In terminal: rake db:migrate
5. In terminal: rails s
5. Navigate to localhost:3000/todos in Chrome
6. Set root route root 'todos#index'
7. Navigate to localhost:3000
8. Profit
