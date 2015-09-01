var parkApp = parkApp || {};
parkApp.parkModel = Backbone.Model.extend({
  url: "https://data.cityofchicago.org/resource/wwy2-k7b3.json",
  initialize: function() {
      this.on('change', function(event) {
        console.log(park.attributes);
        for (var i = 0; i < 20; i++) {
          $('ul').append('<br>' + park.attributes[i].park_name + ' <br><hr> ' + park.attributes[i].street_address + ' <br><hr> ' + beachCheck(park.attributes[i].beach) + ' <br><hr></br>');
        };
      });
    };
});

var park = new parkApp.parkModel();
park.fetch();

function beachCheck(n) {
  if (n == 0) {
    return 'This park does not have a beach :( ';
  }
  else {
    return 'Bring yo swimsuit and floaties cause this park has a beach!';
  }
};
