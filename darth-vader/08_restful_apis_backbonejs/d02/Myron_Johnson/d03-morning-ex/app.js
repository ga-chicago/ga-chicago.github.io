$(document).ready(function(){
  $.ajax({
    url: "https://data.lacity.org/resource/9fva-njtw.json",
    dataType: 'json',
    success: function(data){
      for (var item in data) {
        $('#input').append("<tr><td>" + data[item].reportperiod + "</td><td>" + data[item].terminal + "</td><td>" + data[item].arrival_departure + "</td><td>" + data[item].domestic_international + "</td><td>" + data[item].passenger_count + "</td></tr>");
      }
    }
  });
});
