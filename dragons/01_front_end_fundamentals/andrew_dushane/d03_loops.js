//For each loop
var arr = ['a','b','c'];
for(var thing in arr) {
  console.log(thing);
  console.log(arr[thing]);
}

//for loop
var places = ['Shake Shack', "Caputo's", 'Oak Park', 'River North', 'Downtown'];
for( i=0; i < places.length; i++ ) {
  if( i == places.length - 1 ) {
    console.log('The last place I visited was ' + places[i] + '.');
  } else {
    console.log('I visited ' + places[i] + '.');
  }
}

//for in loop
var places = ['Shake Shack', "Caputo's", 'Oak Park', 'River North', 'Downtown'];
var i = 0;
for(place in places) {
  if(i < places.length - 1) {
    console.log('I visited ' + places[place] + '.');
  } else {
    console.log('The last place I visited was ' + places[place] + '.');
  }
  i++;
}
