$(document).ready(function(){


  $.ajax({
  url: "https://data.atf.gov/resource/37x6-x3cn.json?state=illinois",
  // ?$where=quantity>150
  dataType: 'json',
  success:
    function(data){
      for (var i = 0; i < data.length; i++) {
        $("#guns").append("<tr><td>" + data[i].source_state + "</td><td>" + data[i].year + "</td><td>" + data[i].quantity + "</td></tr>");
      }
    }

  });


});
