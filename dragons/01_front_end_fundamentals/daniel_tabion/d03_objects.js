// Objects

var daniel = {
  eyeColour: 'brown',
  hairColour: 'black',
  42: 'secret'
};

// both work
daniel['eyeColour'];
daniel.eyeColour;  // dot notation
//daniel['42']; // works
// daniel.42;  // ooops!  Error!  unextpected number
// better to use non numeric key.
console.log('dito');
for (var prop in daniel) {
  console.log('The value for ' + prop + ' is: ' + daniel[prop]);
}


// another syntax
var fred = new Object();
fred.weight = 5;
fred.friends = ['barney', 'wilma'];

var stuff = new Array();
