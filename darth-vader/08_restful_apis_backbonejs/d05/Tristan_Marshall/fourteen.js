// 14. MOAR AJAXXXXXXXXXXX
//
// Create an $.ajax request that fetches your favourite movie from OMDB.
// http://www.omdbapi.com/
// In the success function, you need to console.log five attributes about the movie.
// In the error function, you need to console.log that 'an error has occured. sorry!'

$.ajax({
  type: 'POST',
  datatype: 'JSON',
  url: 'http://www.omdbapi.com/?t=hellraiser&y=&plot=short&r=json',
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.log("an error has occured, sorry!")
  }
});

<!-- // 15. Return of the Functions
//
// Create a function that draws a rectangle on a canvas element.
// This function should accept arguments for height, width, and colour.
// Return a successfully draw rectangle using Canvas. -->
