// MOAR Ajaxxxxxxxxxxx

$.ajax({
  url: 'http://www.omdbapi.com/?t=Ronin',
  type: 'GET',
  dataType: 'json',
  success: function(data) {
    console.log(data.Title + " was released in " + data.Year + ". " + data.Title + " is about " + data.Plot + " ." + data.Title + " is considered a " + data.Type + " and received " + data.Tomatoes);
  },
  error: function() {
    console.log("an error has occured, sorry!");
  }
})
