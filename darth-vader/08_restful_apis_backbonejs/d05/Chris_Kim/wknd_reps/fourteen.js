// 14. MOAR AJAXXXXXXXXXXX
//
// Create an $.ajax request that fetches your favourite movie from OMDB.
// http://www.omdbapi.com/
// In the success function, you need to console.log five attributes about the movie.
// In the error function, you need to console.log that 'an error has occured. sorry!'


// <table>
//   <thead>
//     <tr>
//       <th>Title</th>
//       <th>Rated</th>
//       <th>Released</th>
//       <th>Runtime</th>
//       <th>Plot</th>
//     </tr>
//   </thead>
//   <tbody>
//     <!-- ajax call here -->
//   </tbody>
// </table>

$(document).ready(function(){

  $.ajax({
    url: 'http://www.omdbapi.com/?t=point+break&y=&plot=short&r=json',
    dataType: 'json',
    success: function(data) {
      for (var movie in data)
      $('tbody').append("<tr><td>" + data[movie].Title + "</td><td>" + data[movie].Rated + "</td><td>" + data[movie].Released + "</td><td>" + data[movie].Runtime + "</td></td>" + data[movie].Plot + "</td></tr>")
    }
    error: function() {
      console.log("something broke...")
    }
  })

});
