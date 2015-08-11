var pet = function (name,typeOfPet,sound,color,favoriteFood) {
  this.name = name;
  this.typeOfPet = typeOfPet;
  this.sound = sound;
  this.color = color;
  this.favoriteFood = favoriteFood;
  this.makeSound = function() {
    return this.name + " " + " is a " + this.typeOfPet + " so it " + this.sound + " a lot";
  }
  this.askForFood = function () {
    console.log("I need more " + this.favoriteFood + " now, please!");
  }
}