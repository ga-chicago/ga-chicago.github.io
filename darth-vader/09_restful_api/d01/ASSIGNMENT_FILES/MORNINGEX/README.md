# Get Your S%$# Online... with Rails & Heroku

1. rails new app_name
2. Open in Atom
3. Add pg gem, delete sqlite3 gem
4. Bundle
5. rails g controller controller_name
6. In controller_name def method show
  - render a template
  - render template: "pages/#{params[:page]}"
7. Route get "/pages/:page" => "pages#show"
8. Add pages in app/views page.html.erb
9. Define root route
  - root "pages#show", page: "home"
10. rails s
11. Make a git repository
12. git remote add origin ""
13. Head to Heroku.com and login
14. Make new app
15. Find your app
16. Deploy
