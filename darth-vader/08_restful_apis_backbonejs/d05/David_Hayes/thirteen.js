$.ajax({url:'https://data.cityofchicago.org/resource/dip3-ud6z.json',
  success: function(result){
    console.log(result);
  },
  error: function(result){
    console.log('AJAX error');
  }
});
