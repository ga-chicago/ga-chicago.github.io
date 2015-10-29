// FOR loop
// 1: initilization of the loop
// 2: condition to keep going?
// 3: upon completion of each cycle
// in atom you can type for then tab

// a loop is a way to cycle through itmes in a collection of an object and perform actions on them
// carrousel anaology, one kid jumps off another gets on.


var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var inc =0; inc < arr.length; inc++) {
  console.log('the incrementor is : ' + inc);
  console.log(arr[inc]);
}

// FOR-IN loop (FOREACH)
for (var pirate in arr) {
  console.log(pirate);
  console.log(arr[pirate]);
}

var lastPlacesInChicago = ['FFC Gold Coast', 'Goddess and the Grocer','Target','Dog Chicago','Big Bowl'];
for (var i = 0; i < lastPlacesInChicago.length; i++) {
  lastPlacesInChicago[i]
}

for (var lastPlace in lastPlacesInChicago) {
  console.log(lastPlacesInChicago[lastPlace]);
}

for (var i = 0; i < lastPlacesInChicago.length; i++) {
  console.log("lap number: " + i);
  if (i == (lastPlacesInChicago.length -1)) {
    console.log('this is the last place i visited');
  }
  console.log(lastPlacesInChicago[i]);
}
