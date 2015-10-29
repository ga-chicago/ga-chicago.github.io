///////////////////////////////////////////////
// 1. Function that returns date-type of the input
///////////////////////////////////////////////
function whatType(x) {
  return typeof(x);
}


///////////////////////////////////////////////
// 2.1 Carousel goes round and round (with for loop)
///////////////////////////////////////////////
var riders = ['bjorn stroustrup', 'george boole', 'steve jobs', 'bill gates', 'blaise pascal'];
for (var cycle = 1; riders.length > 0; cycle++) {
  console.log('Completing rotation: ' + cycle + ' with riders: ' + riders);

  // someone jumps off if odd cycle
  if (cycle % 2) {
    console.log('We have a jumper named ' + riders.shift() + '!');
  }
  else {
    console.log('No jumpers on this round...');
  }
}


///////////////////////////////////////////////
// 2.2 Carousel goes round and round (with while loop)
///////////////////////////////////////////////

var riders = ['bjorn stroustrup', 'george boole', 'steve jobs', 'bill gates', 'blaise pascal'];
var cycle = 0;
while (riders.length > 0) {
  cycle ++;
  console.log('Completing rotation: ' + cycle + ' with riders: ' + riders);

  // someone jumps off if odd cycle
  if (cycle % 2) {
    console.log('We have a jumper named ' + riders.shift() + '!');
  }
  else {
    console.log('No jumpers on this round...');
  }
}


///////////////////////////////////////////////
// 3. You are an object
///////////////////////////////////////////////
var daniel = {
  hairColour : 'black',
  height : 170,
  weight : 68,
  lastSeen : '444 N. Wabash, Chicago, IL',
  dob : '09/1/1901',
  watchesTV : false,
  hobbies : [ 'fly fishing', 'cooking', 'gazing at the moon'],
  favouriteCuisines : [ 'thai', 'chinese', 'japanese', 'filipino', 'indian', 'goan' ],
  placesLived : [ 'Illinois', 'Florida', 'Kentucky', 'Cruise Ship' ],
  musician : true
};

for (var i in daniel) {
  console.log( i + ' : ' + daniel[i]);
}

///////////////////////////////////////////////
// 4. Elementary School
///////////////////////////////////////////////
function divide(num, divisor) {
  var result = '';
  var q = Math.round(num / divisor);
  var r = num % divisor;
  console.log(q + ' r' + r);
  result = q.toLocaleString() + ' remainder' + r.toLocaleString();
}
