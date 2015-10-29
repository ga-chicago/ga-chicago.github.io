// Objects
// every attribute of an object is a data type

var katie = {
  eyeColour: "green",
  hairColour: "blonde",
  42: 'secret'
};

for (var prop in katie) {
  console.log(katie[prop]);
}

for (var prop in katie) {
  console.log('The value for ' + prop + ' is ' + katie[prop]);
}

var inception = {
  friends: ['Clooney', 'Rihanna', 'Lebowski'],
  health: {
    heartRate: 'bad',
    calories: 'dude',
    advice: 'sleep less'
  }
}
