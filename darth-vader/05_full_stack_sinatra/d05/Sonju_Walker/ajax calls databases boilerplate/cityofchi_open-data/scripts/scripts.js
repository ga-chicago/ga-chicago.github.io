$(document).ready(function() {

  $.ajax ({
    method: "GET",
    url: "https://data.cityofchicago.org/resource/5rxc-uczg.json",
    dataType: "json",
    success: function(data) {

      for (var i = 0; i < data.length; i++) {
        $("ul").append("<li>" + data[i].station_name + " " + data[i].measurement_timestamp + " " + data[i].air_temperature + " " + data[i].wet_bulb_temperature + " " + data[i].humidity + " " + data[i].total_rain + " " + data[i].solar_radiation);
      }


    }


  });


});
