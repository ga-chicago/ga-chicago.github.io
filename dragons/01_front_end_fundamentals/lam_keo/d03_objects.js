// Objects

var lam = {
  eyeColor: 'brown',
  hairColor: 'brown',
  42: 'secret'
};

for (var prop in lam) {
  console.log('The value for ' + prop + ' is ' + lam[prop]);
}
