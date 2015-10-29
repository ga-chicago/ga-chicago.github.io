// FOR loop
// 1. Initialization of the loop
// 2. Condition to keep going
// 3. Upon completion of each cycle

var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var i = 0; i < arr.length; i++) {
  console.log('The incrementor is: ' + i);
  console.log(arr[i]);
}

// FOR-IN loop
for (var pirate in arr) {
  console.log(pirate);
  console.log(arr[pirate]);
}

var places = ['After Words Books', 'Myopic Books', 'Bucket \'O\' Blood', 'Green Mill', 'Wanderer\'s Refuge']

for (var i = 0; i < places.length; i++) {
  console.log('I visited ' + places[i] + '.');
  if (i === places.length - 1) {
    console.log('This is the last place that I visited.');
  }
}

for (var place in places) {
  console.log('I visited ' + places[place] + '.');
}


var james = {
  eyeColor: 'blue',
  hairColor: 'brown',
  42: 'secret'
};

for (var prop in james) {
  console.log('The value for ' + prop + ' is ' + james[prop] + '.');
}
