var cellphone = function(manufacturer,modelname,screendiagsize,OS,weight,releaseyear) {
  this.manufacturer = manufacturer;
  this.modelname = modelname;
  this.screendiagsize = screendiagsize;
  this.OS = OS;
  this.weight = weight;
  this.releaseyear = releaseyear;
  this.promo = function() {
    var blast = this.manufacturer + " released the " + this.modelname + " in " + this.releaseyear;
    return blast;
  }
  return "Instantiation succesful!";
}

var city = function(cityname,citystate,population,geography,slogan) {
  this.cityname = cityname;
  this.citystate = citystate;
  this.population = population;
  this.geography = geography;
  this.slogan = slogan;
  this.promo = function() {
    var blast = this.cityname + ", " + this.citystate + " says " + this.slogan;
    return blast;
  }
  return "Instantiation succesful!";
}

var vehicle = function(vehicletype, maxpayload, numpax, horsepower, color, topspeed) {
  this.vehicletype = vehicletype;
  this.maxpayload = maxpayload;
  this.numpax = numpax;
  this.horsepower = horsepower;
  this.color = color;
  this.topspeed = topspeed;
  this.report = function() {
    var rep = "Vehicle: " + vehicletype + ", Max Payload: " + this.maxpayload + ", Horsepower: " + this.horsepower;
    return rep;
  }
  return "Instantiation succesful!";
}
