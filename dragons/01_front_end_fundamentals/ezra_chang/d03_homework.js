// Problem 1: Type of.

function whatIsThis(x) {
  return (typeof x);
}
console.log(whatIsThis(5));
console.log(whatIsThis('yo'));
console.log(whatIsThis(null));
console.log(whatIsThis(['john', 'jane']));
console.log(whatIsThis(false));

// Problem 2: Carousel.

var peopleOnCarousel = ['John', 'Jimmy', 'Jane', 'Juliette'];
console.log(peopleOnCarousel);
function carousel(carouselArray) {
  var numberOnCarousel = carouselArray.length;
  for (var i = 0; i < (numberOnCarousel * 2); i++) {
    console.log('Go-around #: ' + (i + 1))
    if (i % 2 == 0) {
      console.log('Who got off:' + peopleOnCarousel.pop());
    }
    console.log('Number of people left = ' + peopleOnCarousel.length);
    console.log('People still riding: ' + peopleOnCarousel);
  }
}
carousel(peopleOnCarousel);

// Problem 3: I am an Object.

var ezra = {
  eyeColor: 'brown',
  hairColor: 'black',
  height: '5 ft 6 in',
  weight: '140 lb',
  build: 'slim',
  maritalStatus: 'engaged',
  beverage: 'water',
  nationality: 'american',
  ethnicity: 'chinese',
  education: 'b.a., english literature'
}

for (var attr in ezra) {
  console.log(attr + ': ' + ezra[attr]);
}

// Problem 4: Elementary School.

function longDivision(a, b) {
  var c = parseInt(a / b, 10);
  var d = (a % b);
  console.log('number of times b goes in a:' + c);
  console.log('remainder:' + d);
}
longDivision(5, 3);
longDivision(10, 3);
