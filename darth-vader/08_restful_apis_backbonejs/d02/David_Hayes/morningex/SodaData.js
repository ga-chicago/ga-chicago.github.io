$('document').ready( function() {

$.ajax({
url: 'https://data.cityofchicago.org/resource/alternative-fuel-locations.json?'
dataType: 'json',
success:
function(data){
  for (var i = 0; i < data.length; i++) {
    $("#crime").append("<tr><td>" + data[i].fuel_type_code + "</td><td>" + data[i].station_name + "</td><td>" + data[i].street_address + "</td></tr>");
  }
}
});
});
