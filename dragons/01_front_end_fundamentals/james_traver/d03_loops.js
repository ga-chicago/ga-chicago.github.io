// FOR loop
// 1: initializaton of the loop
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

/*
 * exercise
 * loops! favourite places
 */

 // 1. create an places of the 5 most recent places you've visited
 // 2. loop through this places using a for and a foreach (for-in) loop
 // 3. in the for loop only, on the last place you've visited also print the message "this is the last place I visited"

var places = ['piece', 'independence tap', 'alps', 'geek bar', 'glazed and infused'];

for (var i = 0; i < places.length; i++) {
  console.log("Lap number: " + i);
  if (i == (places.length - 1)) {
    console.log('this is the last place i visited');
  }
  console.log(places[i]);
}
