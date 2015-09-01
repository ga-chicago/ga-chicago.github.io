$(document).ready(function() {

  $.ajax({
    url: "https://data.cityofchicago.org/resource/dip3-ud6z.json",

    dataType: 'json',
    success: function(data){
      for (var i = 0; i < data.length; i++) {
        $("#landlords").append("<tr><td>" +
        data[i].respondent + "</td><td>" +
      data[i].community_area + "</td><td>" + data[i].address + "</td><td>" +
    data[i].secondary_address + "</td></tr>");

      }
    }

  });

});
