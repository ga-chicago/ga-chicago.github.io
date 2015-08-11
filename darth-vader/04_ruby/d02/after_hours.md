## After Hours for Ruby Day #2

### 1. Create a Movie's Class on your own
- In a new file called `hw_movie.rb`...
- The Movie class should have the following *attributes* using getters and setters (mutators):
  - `title`
  - `year`
  - `include_year` (bool)
- These will be instance variables (the `@my_variable = 42` syntax).
- You will also include one method (*aka an ability*), named `full_title()`
- If `include_year` = true, full_title() should include the year released in what is returned. Otherwise, it should only return the title of the movie.
- Instantiate this class using `MyClass.new()` with the `title` and `year` arguments.
- Change the title and call the full_title() method

### 2. Create a person class for your favourite character in any media 
- In a new file called `hw_person.rb`...
- Give your person a `name`, an `age`, a `catch-phrase`, and **two other attributes** about them.
- Then give them a `to_s` ability (method) to tell us about themselves!

### 3. Check for Understanding
- Finally, in a new file called `hw_check.md` (a Markdown file, not Ruby!)...
- Define (in your own words) what a **Class** is
- Define why *getters*/*setters* are important
- Describe inheritance between Objects/Classes in your own words
- Describe why `*args` can be powerful when used as the argument in a method

### Bonus
- Read: http://stackoverflow.com/questions/6545853/class-methods-vs-instance-methods
