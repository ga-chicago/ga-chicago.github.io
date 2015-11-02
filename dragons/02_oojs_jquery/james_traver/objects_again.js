var james = {
  sayMyName: function() {
    return 'I am James';
  },
  // 5-10 attributes about yourself
  name: 'James',
  age: 31,
  favouriteColour: 'purple',
  cat: {
    name: 'Magda',
    age: 12,
    colour: 'grey + white'
  },
  train: 'blue line',
  hobby: 'playing guitar',
  game: 'Civilization: Beyond Earth',
  movie: 'Empire Strikes Back',
  weirdFact: 'I eat soylent',
  funFact: 'I like to move it move it'
};
james.quirk = function(totem) {
  return 'I really enjoy coveting ' + totem;
}
james.getExcited = function(thing) {
  return 'I am getting really excited about ' + thing;
}
james.buildAboutMe = function() {
  return this.name + ' has a hobby of ' + this.hobby;
}

// var lukeSkywalker = {
//
//   // 5 properties about your character
//   // 1 ability:
//   // tell the world their story
//
// }
//
// lukeSkywalker.tellStory();
// // a sentence about them using `this.properties`








var err = {
  name: 'Error',
  sayMyName: function() {
    return 'I am ' + this.name;
  },
  makeFunOfGreenClothes: function() {
    return "Your clothes look silly, little elf-man";
  },
  changeName: function(newName) {
    if (typeof(newName) == 'string') {
      var oldName = this.name;
      this.name = newName;
      return 'Name has been changed to: ' + newName + ' and our old name was ' + oldName;
    } else {
      return 'That name is not a valid string';
    }
  }
};
