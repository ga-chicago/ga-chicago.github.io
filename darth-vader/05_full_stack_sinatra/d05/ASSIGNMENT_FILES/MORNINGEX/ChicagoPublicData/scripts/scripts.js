$(document).ready(function() {

  $.ajax({
    method: "GET",
    url: "https://data.cityofchicago.org/resource/z8bn-74gv.json?",
    dataType: "json",
    success: function(data) {

      for (var i = 0; i < data.length; i++) {
        $("ul").append("<li>" + data[i].district + " " + data[i].address + "</li>");
      }

    }
  });

});
