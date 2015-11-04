var hulk = {
  name: 'HULK',
  age: 'eleventy two',
  tellStory: function() {
    return 'I am the ' + this.name + '!!!!!!! I am ' + this.age + '.';
  },
  returnInSequel: function() {
    this.name = 'MechaHulk';
    this.age = 'Twenty Hundred';
    return this.tellStory();
  }
};


var martin = {

  sayMyName: function () {
    return 'I am Martin';
  },
  name: 'Martin',
  age: 35,
  pants: 'black',
  house: 'van',
  locationOfHouse: 'down by the river',
  mom: {
    name: 'Susan',
    age: 64,
  },
  dad: {
    name: 'John',
    age: 62,
  },
  hobby: 'stuff',
};

martin.bigFeet = function(sizeOfFeet) {
  return 'my feet are now ' + sizeOfFeet;
}
martin.quirk = function(myQuirk) {
   return 'I have a weird quirk which is ' + myQuirk;
}

martin.buildAboutMe = function() {
  return this.name + ' is ' + this.age + ' years old and lives in a ' + this.house + ' ' + this.locationOfHouse + '. His mother is ' + this.mom.age + ' years old.';
}


//
// ------------------------------------------------------------------------

var err = {
  name: 'Error',
  sayMyName: function() {
    return 'I am ' + this.name;
  },
  makeFunOfGreenClothes: function() {
    return "Your clothes look silly, little elf-man";
  },
  //getters and setters
  changeName: function(newName) {
    if (typeof(newName) == 'string') {
      this.name = newName;
      return 'Name has been changed to ' + newName;
    } else {
      return 'That name is not a valid name';
    }
  }
};
