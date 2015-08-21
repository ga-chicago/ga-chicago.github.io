$(document).ready(function() {

  $.ajax ({
    method: "GET",
    url: "https://data.cityofchicago.org/resource/v2a6-nxhe.json",
    dataType: "json",
    success: function(data) {

      for (var i = 0; i < data.length; i++) {
        $('tbody').append("<tr><td>" + data[i].moviename + "<td></td> " + data[i].parkname + "<td></td>" + data[i].community + " <td></td>" + data[i].startdate + "<td></td> " + data[i].enddate + " <td></td>" + data[i].zipcode + "</tr></td>");
      }


    }


  });


});
