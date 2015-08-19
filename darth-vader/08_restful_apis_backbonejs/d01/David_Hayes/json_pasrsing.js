function playWithJSON() {

  var flight = {
    aircraft_mfg : 'Boeing',
    aircraft_model : '787-B',
    origin : 'ORD',
    desitnation : 'LAX',
    altitude : '27,480',
    ground_speed : '440',
    latitude : '48.138332',
    longitude : '20.24322'
  }

  flight_string = JSON.stringify(flight);

  console.log("string: " + flight_string);

  flight_json = JSON.parse(flight_string);

  console.log("object:");
  console.log(flight_json);

  for (var key in flight) {
    console.log(key + ": " + flight[key] )

}
}
