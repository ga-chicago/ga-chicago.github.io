// 3. Objects; Objects Everywhere
//
// Create an Object that represents a laptop.
// Give it 3-5 attributes.
// Give it one ability that tells the world about itself (similar to a to_s in Ruby)

function laptop(manufacturer, model, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.price = price;
  this.about = function() {
    return 'This ' + this.model + ' was made by ' + this.manufacturer + ' and it costs $' + this.price;
  };
    return 'laptop specs';
}
