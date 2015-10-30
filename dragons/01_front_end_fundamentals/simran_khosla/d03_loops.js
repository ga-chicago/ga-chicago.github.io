// FOR LOOP
// for a loop (1: initialization of the loop
// 2: condition to keep going?
// 3: upon completion of each cycle
var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var i = 0; i < arr.length; i++) {
  console.log('the incrementor is '+i);
  console.log(arr[i]);
};


//FOR-IN loop
var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var pirate in arr) {
  console.log(pirate);
  console.log(arr[pirate]);
}

//

var chiLocations = ['Publican', 'Mothers', 'Table 52', 'Nicos', 'Chipotle'];

for (var i = 0; i < chiLocations.length; i++) {
  console.log('the incrementor is '+i);
    if (i == chiLocations.length-1) {
      console.log('The last place I visited was '+chiLocations[i]);
    }
    console.log(chiLocations[i]);
};

for (var place in chiLocations) {
  console.log(place);
  console.log(chiLocations[place]);
}
