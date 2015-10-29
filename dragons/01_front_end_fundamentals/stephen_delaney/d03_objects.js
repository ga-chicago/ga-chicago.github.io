// Objects

var stephen = {
  eyeColor: 'brown',
  hairColor: 'brown',
  42: 'secret'
};

// access with either stephen['eyeColor'] or stephen.eyeColor


for (var prop in stephen) {
  console.log('The value for ' + prop + ' is ' + stephen[prop]);
}
