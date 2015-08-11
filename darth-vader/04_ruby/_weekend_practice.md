# Weekend Practice: Sinatra REPS

*Awwwww yeah. You've been building web servers this week and learned Ruby.* We now need to get in the habbit of doing that! So, let's build out a few webservers and get them online!

## Goal

* Create **4** Sinatra servers. Each will be stored in their *own* Github repository on **your** account.
* Host **2** of these on Heroku (server #1 and server #4)
* You will show completion of these files using the template at the end of this page.
* **2** of these Sinatra servers will be APIs only; meaning, they only serve JSON data.
* **2** of these Sinatra servers will be ERB only; meaning, they only serve HTML/ERB.

### Server Descriptions

1. Server #1 - build an API Server using the `json` and `sinatra-cross_origin` gem to build out an API for movies. You should create one method (such as `fake_movie`) that accepts the following arguments: `name`, `release_year`, and `description`. Using this `fake_movie` method, you should have **three** Sinatra routes - `/api/movie_name1`, `/api/movie_name2`, and `/api/movie_name3` (replacing `movie_name` with the name of a movie). **This server should be hosted on Heroku**.

2. Server #2 - build an API Server using the `json` and `sinatra-cross_origin` gem to build out an API for music. You should create one method (such as `fake_song`) that accepts the following arguments: `title`, `release_year`, and `artist`. Using this `fake_music` method, you should have **three** Sinatra routes - `/api/song_name`, `/api/song_name2`, and `/api/song_name3` (replacing `song_name` with the name of a movie).

3. Server #3 - Build out an Sinatra static HTML server for a theoretical Construction company. No JSON or Ajax required; just static content. They require a `layout.erb` file that has a `header`, a `nav` and a `footer`. You can be as creative as you want with this! They are serving 3 ERB pages (so you need 3 routes): `/` (aka `:index`), `/about` (aka `:about`), and `/services` (aka `:services`). You can populate these views with any content that seems fitting for a construction company.

4. Server #4 - Build out an Sinatra static HTML server for a theoretical  company of your choice! No JSON or Ajax required; just static content. They require a `layout.erb` file that has a `header`, a `nav` and a `footer`. You can be as creative as you want with this! They are serving 5 ERB pages (so you need 5 routes): `/` (aka `:index`), `/about` (aka `:about`), and `/contact` (aka `:contact`). You must also create *two additional* views + routes (your choice). You can populate these views with any content that seems fitting for the company you would start. **This server should be hosted on Heroku**.

### Submission

Submit a modified version of the following template once you've completed. It should be saved in the following location:

*04_ruby/d04/your_name/weekend.md*

```markdown
## Sinatra Servers

#### Server #1
- Link to Github repository:
- Link to Heroku URL:

#### Server #2
- Link to Github repository:

#### Server #3
- Link to Github repository:

#### Server #4
- Link to Github repository:
- Link to Heroku URL:
```

### Bonus

Use the `faker` gem to populate this information for you in **each** of your APIs! Learn to use another Gem to get data.

https://github.com/stympy/faker

*Example*

```ruby
Faker::Name.name      #=> "Bruce Wayne"

Faker::Internet.email #=> "bruce.wayne@wayneenterprises.com"
```

Ex. Route
```ruby
get '/api/faker' do
    names = 1000.times.map do
      Faker::Name.name
    end
end
```



### Double Bonus

Provide ERB views with Ajax calls for your first two servers. This will allow you to render the data on a webpage.

*Example*: https://gist.github.com/code-for-coffee/978fe2ca3ab4e0d0c7f7
