$('document').ready( function() {

$.ajax({
url: 'https://open.whitehouse.gov/resource/3769-btky.json',
dataType: 'json',
success:
function(data){
  for (var i = 0; i < data.length; i++) {
    $("#crime").append("<tr><td>" + data[i].position_title + "</td><td>" + data[i].status + "</td><td>" + data[i].salary + "</td></tr>");
  }
}
});
});
