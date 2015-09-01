// 4. Objects... again
//
// Using the Object you created for #3....
// Research the Object method that lists all of the keys in an Object. Use it to create an array.
// Loop through this array using a for (not a for-in) loop.
// console.log the keys.

function laptop(manufacturer, model, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.price = price;
  this.about = function() {
    return 'This ' + this.model + ' was made by ' + this.manufacturer + ' and it costs $' + this.price;
  };
    return 'laptop specs'
}

var myMac = new laptop('Apple','Macbook Pro',1100)
var keys = Object.keys(myMac)

for (var i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}
