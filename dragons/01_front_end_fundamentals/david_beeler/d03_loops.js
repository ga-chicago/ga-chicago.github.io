// FOR loop
// 1: initialization of the loop
// 2: condition to keep going?
// 3: upon completion of each cycle

var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var inc = 0; inc < arr.length; inc++) {
  console.log('the incrementor is: ' + inc);
  console.log(arr[inc]);
}


// FOR-IN loop (FOREACH)
var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var pirate in arr) {
    console.log(pirate);
    console.log(arr[pirate]);
}



// Example
var placesVisited = ['7-Eleven', 'Apple Bite', 'WalMart', 'GoGrocer', 'Jewel-Osco'];
for (var idx = 0; idx < placesVisited.length; idx++) {
  if (idx == placesVisited.length - 1) {
    console.log("this is the last place I visited");
  }
  console.log(placesVisited[idx]);
  //console.log(typeof(idx));
  //console.log(typeof(placesVisited.length));
}

console.log("\n----");
console.log("----\n");

for (var place in placesVisited) {
  if (place == placesVisited.length - 1) {
    console.log("this is the last place I visited");
  }
  console.log(placesVisited[place]);
  //console.log(typeof(place));
  //console.log(typeof(placesVisited.length));

}
