
// 1. Detecting Types
function whatTypeIsThis(a) {
  return typeof(a);
}

// 2. Carousel
var carousel = ['Mike', 'Jimmy', 'Sam', 'Alex'];
for (var i = 0; carousel.length > 0; i++) {
  if (i % 2 == 0) {
    console.log(carousel.pop());
  }
}

// 3. You are an object...

var sam = {
  eyeColor: 'Brown',
  hairColor: 'Brown',
  height: '5\'9\"',
  weight: '170 lbs',
  hometown: 'Glen Ellyn, IL',
  college: 'Iowa State University',
  degree: 'Economics',
  shoeSize: '10',
  favoriteSport: 'basketball',
  numberOfSiblings: '2'
};
for (var stats in sam) {
  console.log('The value of ' + stats + ' is ' + sam[stats] + '.');
}

// 4. Elementary School

function divisionRemainder (a, b){
  var x = a % b;
  a = a - x;
  return "The value of " + a + " divided by " + b + " is " + a/b + " with a remainder of " + x + '.';
};
