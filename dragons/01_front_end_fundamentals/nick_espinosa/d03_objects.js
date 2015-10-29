//objects
// objects are key : value;

var nick = {
  eyeColor: 'hazel',
  hairColor: 'brown',
  42: 'secret'
};
nick.eyeColor
nick['eyeColor']

for (var prop in nick) {
  console.log('The value for ' + prop + ' is ' + nick[prop]);
}

// var arr = [];
// var obj = {};

var inception = {
  friends: ['clooney', 'rhianna', 'lebowski'],
  health: {
    heartRate: 'bad',
    calories: 'dude',
    advice: 'sleep less'
  }
}

inception.lastPlacesInChicago = lastPlacesInChicago; // adds array to object
