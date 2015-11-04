var jan = {
  sayMyName function() {
    return 'I am Jan'
  }
};

var jan = {
  eyeColor: 'brown',
  hairColor: 'black',
  hobby: 'running',
  faveDrink: 'beer',
  favePlace: 'tokyo',
  pets: 'cats',
  bodyType: 'slender',
  homeType: 'loft',
  married: 'yes',
  kids: 'no',
};

jan.quirk = function(argument){ // appending a method to an object thta's already been created.
   return 'something something' + this.pets; // relative variable, belongs to the object that you just defined
}


var jan = {
  eyeColor: 'brown',
  hairColor: 'black',
  hobby: 'running',
  faveDrink: 'beer',
  favePlace: 'tokyo',
  pets: 'cats',
  bodyType: 'slender',
  homeType: 'loft',
  married: 'yes',
  kids: 'no'
};
sayMyName: function() }
  return 'I am Jan'
  }
};

jan.quirk = function(x){  //defining function to add stuff
   return 'I have this ' + x;
}
jan.quirk('tics');

jan.placesSeen = function(y) {
  return 'I have been to ' + y;
}

jan.placesSeen('Japan');

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

jan.buildAboutMe = function() {
  return.console.log(this.hobby + " and " + this.pets);
};
jan.buildAboutMe();

// 5 Properties about your character
// 1 ability ability:
// tell the world their story
var alice = {
  name: function() {
    return 'Her name was Alice, she was a showgirl ...'
  }
};
var alice = {
  eyeColor: 'blue',
  hairColor: 'blond',
  hobby: 'cooking',
  pets: 'Toto',
  homeType: 'cabin',
};

tellStory: function() {
  console.log('I really enjoy ' + this.hobby);
  console.log('I have a little dog named ' + this.pets);
  console.log('I am getting really excited about my ' + this.homeType);
};
alice.tellStory();
