function turtle(name, color, weapon, namedAfter) {
  this.name = name;
  this.color = color;
  this.weapon = weapon;
  this.namedAfter = namedAfter;
  this.describe = function() {
    console.log(this.name + " is " + this.color + " and carries " + this.weapon
    + " and is named after " + this.namedAfter);
  };
  return "initialized";
}
