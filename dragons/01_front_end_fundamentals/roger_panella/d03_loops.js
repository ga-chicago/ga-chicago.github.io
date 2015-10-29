//FOR loop
// 1. initialization of the loop
// 2. condition to keep going?
// 3. upon complettion of each cycle
var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var inc = 0; inc < arr.length; inc++){
    console.log('the incrementer is ' + inc);
    console.log(arr[inc]);
}

//FOR-IN loop (FOREACH)
//Will go through all elements in an array, but you can't control the order
var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var pirate in arr) {
    console.log(pirate);
    console.log(arr[pirate]);
}

//my answer
var chicagoPlaces = ['Handlebar', 'Atomix', 'Binnys', 'The Whistler', 'Jerrys'];
for (var i = 0; i <= chicagoPlaces.length - 1; i++) {
    if (i < chicagoPlaces.length - 1) {
      console.log(chicagoPlaces[i]);
    } else if (i == chicagoPlaces.length -1) {
      console.log(chicagoPlaces[i] + " - This was the last place I went.");
    }
}

//James' answer
var places = ['piece', 'independence tap', 'alps', 'geek bar', 'glazed and infused'];
for (var i = 0; i < places.length; i++) {
   console.log("Lap number: " + i);
   if (i == (places.length - 1)) {
     console.log('this is the last place i visited');
   }
   console.log(places[i]);
}
