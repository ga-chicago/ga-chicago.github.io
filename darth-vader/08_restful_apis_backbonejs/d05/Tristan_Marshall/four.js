// 4. Objects... again
//
// Using the Object you created for #3....
// Research the Object method that lists all of the keys in an Object. Use it to create an array.
// Loop through this array using a for (not a for-in) loop.
// console.log the keys.


var laptop = {
  brand: "Macintosh",
  color: "White",
  year: "2015",
  citySold: "Chicago",
  locationSold: "Best Buy"
};

var arr = Object.keys(laptop);

for (var i = 0; i < arr.length; i++){
  console.log(arr[i])
};
