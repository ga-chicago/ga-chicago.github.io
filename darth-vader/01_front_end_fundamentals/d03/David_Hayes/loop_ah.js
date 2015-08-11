var cities = [ "New York","Mexico City","Toronto","Seattle","Los Angeles","Dallas","Tuscon","Omaha" ];
var amounts = [ 32, 25, 11, 66, 27, 33, 167, 39, 51, 62 ];
var memory = [ "New York", -5, "Helen", "Fred", 1490, "Zero", 0, 311 ];

var i; // undefined

console.log("for loop of cities array:");
for (i=0; i < cities.length; i++) {
  console.log(cities[i]);
}

console.log("for-in loop of cities array:");
for (i in cities) {
  console.log(cities[i]);
}

console.log("for loop of amounts array");
for (i=0; i < amounts.length; i++) {
  console.log(amounts[i]);
}

console.log("for-in loop of amounts array");
for (i in amounts) {
  console.log(amounts[i]);
}

console.log("for loop of memory array");
for (i=0; i < memory.length; i++) {
  console.log(memory[i]);
}

console.log("for-in loop of memory array");
for (i in memory) {
  console.log(memory[i]);
}
