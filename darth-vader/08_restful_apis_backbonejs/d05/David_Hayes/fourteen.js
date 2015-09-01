$.ajax({url:'http://www.omdbapi.com/?t=Grease&y=1978&plot=short&r=json',
  success: function(result){
    console.log(result.Title);
    console.log(result.Released);
    console.log(result.Actors);
    console.log(result.imdbRating);
    console.log(result.Genre);
  },
  error: function(result){
    console.log('An error has occured. sorry!');
  }
});
