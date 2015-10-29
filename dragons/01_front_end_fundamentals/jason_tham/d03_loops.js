// 1: intitialization of the loop
// 2: condition to keep going
// 3: upon completion of each cycle

var arr= ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var inc = 0; inc < arr.length; inc++) {
  console.log('the incrementor is: ' + inc);
  console.log(arr[inc]);
}


//For-in loop
for (var pirate in arr) {
  console.log(pirate);
  console.log(arr[pirate]);
}

var places = ['Salvatore\'s', 'Glasscott\'s', 'Allende', 'Bistro Campagne', 'Wrigley Field'];

for (var i = 0; i < places.length; i++) {
  console.log(places[i]);
  if (i == places.length - 1){
    console.log('This is the last place I visited.');
  }
}

for (var variable in places) {
console.log(places[variable]);
}
