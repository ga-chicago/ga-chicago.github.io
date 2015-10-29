function reuse (item) {
  return typeof item;
}

var carousel = ['bill', 'mary', 'sam'];

for (var i = 0; carousel.length < 1; i++) {
  if (!i % 2 == 0) {
    carousel.pop();
  }
}


var me = {
  height: '6\'1',
  eyeColor: 'blue',
  hairColor: 'blonde',
  weight: '160lb',
  favFood: 'steak',
  age: '20',
  hobby: 'coding',
  favSport: 'basketball',
  instrument: 'drums',
  race: 'caucasian'
}

for (var prop in me) {
  console.log(me[prop]);
}

function divide(a, b) {
  var result = a / b;
  var remainder = a % b;
  return result + ' ' + remainder;
}

console.log(divide(2, 3));
