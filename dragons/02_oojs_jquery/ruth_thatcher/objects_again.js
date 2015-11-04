/////////////////////////////

var error = {
  name: 'Error',
  sayMyName: function() {
    return 'I am ' + this.name;
  },
  makeFunOfGreenClothes: function() {
    return "your clothes look silly";
  },
  changeName: function(newName){
    if (typeof(newName) == 'string') {
      this.name = newName;
      return 'Name has been changed to: ' + newName;
    } else {
      return "That name is not a valid string";
    }
}
};

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
////////////////////////////////////////

var ruth = {

    sayMyName: function() {
      return 'I am Ruth';
    },
    name: 'Ruth',
    age: '29',
    hair: 'brunette',
    favoriteColor: 'red',
    hometown: 'salem, or',
    weirdFact: 'i love cheese',
    futurePet: {
      animal: 'cat',
      color: 'grey',
      breed: 'tiny'
    }
};

ruth.quirk = function(oneArg) {
  return 'i like to hug ' + oneArg;
}
ruth.interesting = function(twoArg) {
  return 'i really enjoy ' + twoArg;
}
ruth.hilarious = function(threeArg) {
  return threeArg + ' really makes me laugh'
}
ruth.buildAboutMe= function() {
  return this.name + ' is my name and I am ' + this.age + ' and ' +
  this.weirdFact + '. I am from ' + this.hometown + ' and my favorite color is
  ' + favoriteColor + '.';
}
//then ruth.hilarious =function('allstate commericals ')

var lukeSkywalker = {
//5 properties, 1 ability: tell the world their story!
    sayMyName: function() {
      return 'I am lukeSkywalker';
    },
    name: 'luke Skywalker',
    age: '25',
    hair: 'blonde',
    favoriteWeapon: 'lightsaber',
    hometown: 'Tattoin',
    weirdFact: 'loves the force'
};

lukeSkywalker.quirk = function() {
  return 'He is learning to use ' + ;
}
lukeSkywalker.interesting = function() {
  return 'he is in love with ' + ;
}
lukeSywalker.hilarious = function() {
  return  + ' really makes him mad'
}
lukeSkywalker.tellStory= function() {
  return this.name + ' is his name and he is' + this.age + ' and he ' +
  this.weirdFact + '. He is from ' + this.hometown + ' and his favorite weapon is
  ' + favoriteWeapon + '.'
}
