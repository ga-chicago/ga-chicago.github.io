// 1
var cars = function (type, color, year) {
  this.type = type;
  this.color = color;
  this.year = year;

  this.carSound = function() {
    return "My " + color + " " type +  " goes Vroommmmmmm";
  }
};

// 2
var shoes = function (brand, color, price) {
  this.brand = brand;
  this.color = color;
  this.price = price;

  this.description = function() {
    return "The " + color + " " + brand +  " cost " + "$" + price;
  }
};

// 3
var location = function (country, state, city) {
  this.country = country;
  this.state = state;
  this.city = city;

  this.myLocation = function() {
    return "Your location is " + city + " " + state + " , in " + country;
  }
};
