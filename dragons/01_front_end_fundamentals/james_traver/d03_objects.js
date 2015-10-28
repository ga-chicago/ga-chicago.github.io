// Objects

var james = {
  eyeColour: 'blue',
  hairColour: 'brown',
  42: 'secret'
};

for (var prop in james) {
  console.log('The value for ' + prop + ' is ' + james[prop]);
}



var inception = {
  friends: ['Clooney', 'Rhianna', 'Lebowski'],
  health: {
    heartRate: 'bad',
    calories: 'dude',
    advice: 'sleep less'
  }
}
