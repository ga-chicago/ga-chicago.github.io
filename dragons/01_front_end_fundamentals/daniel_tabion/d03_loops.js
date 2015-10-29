// 1: initialization of the loop
// 2: condition
// 3: upon completion of each cycle

var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var inc = 0; inc < arr.length; inc++) {
   console.log('the incrementor is:' + inc);
   console.log(arr[inc]);
}


// FOR-IN loop (FOREACH)
// Pitfalls...no complete control of order
// goes through every item in array, but don't know order
for(var pirate in arr) {
  console.log(pirate);
  console.log(arr[pirate]);
}

/////////////////
// MY PRACTICE
/////////////////
var coolPlaces = ['Andy\'s', 'Jazz Showcase', 'Norman\'s', 'Underground Wonderbar'];

console.log('********** FOR LOOP ************');
for (var i = 0; i < coolPlaces.length; i++) {
  if (i!=(coolPlaces.length-1)) {
    console.log('This place is so cool: ' + coolPlaces[i]);
  }
  else {
    console.log('This is the last coole place that I\'ve been to: ' + coolPlaces[i]);
  }
}

console.log('********** FOR-IN / FOREACH ************')
for(var i in coolPlaces) {
  console.log('This place is so cool: ' + coolPlaces[i]);
}
