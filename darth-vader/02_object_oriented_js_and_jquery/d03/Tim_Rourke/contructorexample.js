var pet = function(name, animalType, sound, diet) {

  this.name = name;
  this.animalType = animalType;
  this.sound = sound;
  this.diet = diet;
  this.makeSound = function() {
    console.log(this.sound);
  }
  this.begFood = function() {
    console.log('FEED ME ' + this.diet + ' PUNY HUMAN!!!');
  }

}

var duke = new pet('Duke', 'Turtle', 'pfft', 'grasshoppers');

duke;

duke.makeSound();

duke.begFood();
