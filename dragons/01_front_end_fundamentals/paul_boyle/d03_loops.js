//FOR loop
// 1: initialization of the loop
// 2: condition to keep going
// 3: upon complete of each cycle

arr=['jack sparrow','blackbeard','johnny depp'];

for(var inc = 0; inc < arr.length; inc++){
  console.log('the incrementer is',inc);
  console.log(arr[inc]);
}

//FOR-IN loop
for(var pirate in arr){
  console.log(arr[pirate]);
  console.log(pirate);
}

chicagoPlaces=['United Center','Wrigley Field','Navy Pier', 'Museum of Science and Industry', 'Skydeck'];
var len = chicagoPlaces.length

for(var x = 0 ; x < len ; x++){
  if(x==len-1){
    console.log(chicagoPlaces[x],'is the last place I\'ve visited');
  } else {
    console.log(chicagoPlaces[x]);
  }
}

for(place in chicagoPlaces){
  console.log(chicagoPlaces[place]);
}

chicagoPlaces.forEach(function(place){
  console.log(chicagoPlaces[place]);
});
