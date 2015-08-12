$(document).ready(function() {

   var app = app || {};

   app.movies = ['sandlot', 'batman', 'hannibal', 'jimbo'];
   app.songs = ['ripple', 'dwd', 'harpua', 'gotta jibboo'];
   console.log(app.movies);
   console.log(app.songs);
   app.movies.pop();
   console.log(app.movies);
   app.songs.push('meatstick')
   console.log(app.songs);

   for (i=0; i < app.movies.length; i+=1) {
     console.log(app.movies[i]);
   }

   for (i=0; i<app.songs.length; i+=1) {
     console.log(app.songs[i] + ' I love this song.');
   }
   
})//end of doucment.ready
