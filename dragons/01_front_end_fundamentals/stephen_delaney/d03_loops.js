// 1: initialization of the loop
// 2: conidition to keep going?
// 3: upon completion of each cycle

var arr = ['Rachel', 'Monica', 'Phoebe']
for (var inc = 0; inc < arr.length; inc++) {
  console.log('The incrementor is: ' + inc);
  console.log(arr[inc]);
}

// FOR-IN loop (or for each loop). Iterates through in numeric then alphabetic order.
var arr = ['Rachel', 'Monica', 'Phoebe']
for (var friends in arr) {
  console.log(friends);
  console.log(arr[friends])
}

// on the last one, have it say "This is the last one I visited"
var chicagoHaunts = ['Glaze', 'Angelina\'s', 'Watershed', 'Drumbar', 'Dino BBQ']
for (var i=0; i < chicagoHaunts.length; i++) {
console.log("Lap number: " + i);
if (i == (chicagoHaunts.length - 1)) {
    console.log('This is the last place I visited.');
  }
    console.log(chicagoHaunts[i]);
}

var chicagoHaunts = ['Glaze', 'Angelina\'s', 'Watershed', 'Drumbar', 'Dino BBQ']
for (var places in chicagoHaunts) {
  console.log(chicagoHaunts[places])
}
