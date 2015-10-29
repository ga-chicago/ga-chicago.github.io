//Return argment's type
function getType(x) {
  return typeof x;
}

//Carousel array
var people = ['Paul', 'Andrew', 'Roger', 'Sam', 'Monty Python', 'Katie', 'Stephen'];
var max = people.length;
for( i = 0; i < max * 2; i++ ) {
  if(i % 2 != 0) {
    var hopper = people.pop();
    console.log(hopper);
  }
}

//I am an object
var me = {
  name: 'Andrew Dushane',
  age: 35,
  eyeColor: 'blue',
  height: '6\'',
  hometown: 'Ann Arbor',
  current_residence: 'Orlando',
  number_of_kids: 3,
  married: true,
  languages_spoken: ['English', 'Spanish'],
  devices: {
    phone: 'iPhone',
    laptop1: 'Macbook Pro',
    laptop2: 'Compaq Presario',
    tablet1: 'iPad Mini',
    tablet2: 'Samsung Galaxy Tab'
  }
}
for(attr in me) {
  if( typeof me[attr] != 'object' ) { //log key and value for non-objects
    console.log(attr + ': ' + me[attr]);
  } else {
    console.log(attr);
    for(attr2 in me[attr]) { //log key and value for each attribute in sub-objects
      console.log('  ' + attr2 + ': ' + me[attr][attr2]);
    }
  }
}

//Elementary school division
function showAnswerAndRemainder(x,y) {
  var answer = x / y;
  var remainder = x % y;
  return x + ' divided by ' + y + ' = ' + answer + '. The remainder is ' + remainder + '.';
}
