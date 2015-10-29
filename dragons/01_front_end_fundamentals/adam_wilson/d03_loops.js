

var arr = ['jack sparrow', 'black beard', 'johnny depp'];

for (var inc = 0; inc < arr.length; inc++) {
    console.log('the incrementer is ' + inc);
    console.log(arr[inc]);
}

// FOR-IN loop ("for-each" item in the array)
// can't customize order goes thru
var arr = ['jack sparrow', 'black beard', 'johnny depp'];

for (var pirate in arr) {
  console.log(pirate);
  console.log(arr[pirate]);
}









// last five place visited array
// loop to print them out to console
// last in for loop have additional line saying this is last place i visited
var greatPlaces = ['Nuevo Leon', 'Athletic Association Hotel Game Room', 'Millenium Park free concerts', 'AMC River North 600', 'Xoco Restaurant River North'];

for (var i = 0; i < greatPlaces.length; i++) {
  if (i < (greatPlaces.length - 1)) {
    console.log(greatPlaces[i]);
  } else {
    console.log('And finally the most recently visited cool place is ' + greatPlaces[i]);
  }
}
