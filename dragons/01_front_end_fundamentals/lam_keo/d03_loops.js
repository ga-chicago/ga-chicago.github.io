// 1: initialization of the loop
// 2: condition to keep going?
// 3:upon completion of each cycle
// inc = incrementor

var arr = ['jack sparrow', 'blackbird', 'johnny depp'];
for (var inc = 0; inc < arr.length; inc++) {
  console.log('the incrementor is: ' + inc);
  console.log(arr[inc]);
}



//FOR-IN loop (FOR EACH)
var arr = ['jack sparrow', 'blackbird', 'johnny depp'];
for (var pirate in arr) {
  console.log(pirate);
  console.log(arr[pirate]);
}



var places = ['eataly', 'shake shack', 'target', 'cafe mustache', '2 amigos'];

for (var i = 0; i < places.length; i++) {
  console.log("Lap number: " + i);
  if (i == (places.length - 1)) {
    console.log("This is the last place I visited");
  }
  console.log(places[i]);
}
