var adam = {
  eyeColor: 'green',
  hairColor: 'brown',
  42: 'secret'
};

// "for each" loop. auto increments thru  array
for (var index in adam) {
  console.log('the value for ' + index + ' is ' + adam[index]);
}

// changes value for that key
adam.eyeColor = 'grey';
// i think this changes it back to green
adam[0] = 'green';
