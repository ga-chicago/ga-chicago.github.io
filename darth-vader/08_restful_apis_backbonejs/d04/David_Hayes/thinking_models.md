In a markdown file (inside of 08.../d04/you_name) called thinking_models.md...
Write out how you would build a list of models
Be creative!
Brainstorm and have fun! :)

A list of models is called a collection and it can be created by calling a instance of the Backbone Collection method. With a supplied url, the entire API object can be fetched.

On the other hand, I probably don't want every bit of data in the API, so I would probably have a list of parameters to send to the API to get back only what I want. For example, with OMDB, I might have a list of movies for which I want years of release and short descriptions. Or I might only want pictures in which either Richard Dreyfuss appeared or were longer than 2 1/2 hours. If I can construct a string of parameters that the API can process in one pass, I'll do that. Otherwise, I'll set up my queries in an array and create for each loop.
