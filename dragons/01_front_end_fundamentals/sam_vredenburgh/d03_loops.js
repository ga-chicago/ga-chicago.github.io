// FOR loop
// 1: initialization of the loop
// 2: condition to keep going
// 3: upon completion of each cycle

var arr = ["jack sparrow", 'blackbeard', 'johnny depp']
for (var inc = 0; inc < arr.length; inc ++){
  console.log('the incrementor is: ' + inc);
  console.log(arr[inc]);
}

// FOR-In loop (FOREACH)
var arr = ["jack sparrow", 'blackbeard', 'johnny depp']
for(var pirate in arr){
  console.log(pirate)
  console.log(arr[pirate]);
}

var recentPlaces = ["art institute", "three aces", "palmisano park", "chicago music exchange", "kildare studios"]

for (var place in recentPlaces) {
  console.log(recentPlaces[place]);
}
var recentPlaces = ["art institute", "three aces", "palmisano park", "chicago music exchange", "kildare studios"]

for (var i = 0; i < recentPlaces.length; i++) {
  if (i === recentPlaces.length - 1){
    console.log(recentPlaces[i] + " was the last place I visted");
  } else {
    console.log(recentPlaces[i]);
  }
}
