// 1. Detecting Types

typeof()

// Is that all that is necessary? Or should we be creating something more complex?

function giveType(x) {
return x + " is a " + typeof(x);
}

// 2. Carousel

var carousel = ['Ross', 'Rachel', 'Joey', 'Phoebe', 'Chandler', 'Monica']
for (var i = -1; i < carousel.length; i += 2) {
console.log(i);
  console.log(carousel[i]);
}

// or is this what it is asking for?

var carousel = ['Ross', 'Rachel', 'Joey', 'Phoebe', 'Chandler', 'Monica']
for (var i = 0; 0 < carousel.length; i ++) {
  if (i % 2 == 1) {console.log('On turn number ' + i + ', the person that gets off is ' + carousel.shift() + '.')}
}

// 3. You are an object...

var stephen = {
  eyeColor: 'brown',
  hairColor: 'brown',
  momName: 'Margie',
  dadName: 'Tim',
  brotherNames: ['Quinn', 'Mark'],
  age: 27,
  sign: 'Gemini',
  cool: true,
  favCocktail: 'sazerac',
  halloweenCostume: 'skeleton'
};

for (var prop in stephen) {
  console.log(prop);
  console.log(stephen[prop])
}

/* var arr = ['Rachel', 'Monica', 'Phoebe']
for (var friends in arr) {
  console.log(friends);
  console.log(arr[friends])
} */


// 4. Elementary School

function elementary(x, y) {
  return 'When you divide ' + x + ' by ' + y + ', you get '+ ((x - (x % y)) / y) + ', with a remainder of ' + (x % y) + '.';
}
