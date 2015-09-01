// Ajaxxxxxxxxxxxxxxxx

$.ajax({
  url: 'https://data.cityofchicago.org/resource/xzkq-xp2w.json',
  type: 'GET',
  dataType: 'json',
  success: function(data) {
    console.log(data[0].name + " " + data[0].job_titles);
  },
})
