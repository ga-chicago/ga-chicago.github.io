var james = {
  sayMyName: function() {
    return 'I am James';
  }
};

var err = {
  name: 'Solution',
  sayMyName: function () {
    return 'I am ' + this.name;
  },
  makeFunOfGreenClothes: function () {
    return "Your clothes look silly, little elf-man";
  },
  changeName: function (newName) {
    if (typeof(newName) == 'string') {
      this.name = newName;
      return "Name has been changed to: " + newName;
    } else {
      return "That name is not a valid string";
    }
  }
};








var roger = {
    sayMyName: function() {
    return 'My name is Roger';
  },
  name: 'Roger',
  hairColor: 'brown',
  eyeColor: 'brown',
  favoriteThing: 'travel',
  phoneNumber: '617-549-0463',
  typeOfBike: 'Bianchi',
  hometown: 'New Castle, PA'
};
roger.quirk = function (oneArg) {
  return 'I have hundreds of beers in my apartment\s storage space' + oneArg;
}
roger.favoriteCookbook = function () {
  return 'My favorite cookbook is Vegan with a Vengence';
}
roger.buildAboutMe = function () {
  return 'I am ' + this.name + '.  My hair is ' + this.hairColor + '.  My eyes are also ' + this.eyeColor + '.  My favorite thing is ' + this.favoriteThing
  + '.  My phone number is ' + this.phoneNumber + ' and I have a ' + this.typeOfBike + ' bike.  I\m from ' + this.hometown + '.';
}

var jimHall = {
  name: 'Jim Hall',
  hometown: 'Cleveland',
  typeOfMusician: 'guitarist',
  firstMajorGig: 'Chico Hamilton',
  mostFamousAlbum: 'Jim Hall Live',
  yearOfDeath: '2014'
};
jimHall.tellMyStory = function () {
  return 'My name is ' + this.name + ' and I\'m a jazz ' + this.typeOfMusician + '.  My first major gig was with ' + this.firstMajorGig + '.  My most famous album is ' + this.mostFamousAlbum + 'and I died in ' + this.yearOfDeath + '.';
};

var omarFromTheWire = {
  name: 'Omar',
  occupation: 'rob drug dealers',
  cigarettesSmoked: 'Newports',
  distinguishingFeature: 'scare on face',
  bestFriend: 'Butchie',
  killsCivilians: 'never'
};
omarFromTheWire.tellStory = function () {
  return 'What\'s up, y\'all.  My name is ' + this.name + '.  For work, I ' + this.occupation + '.  I smoke ' + this.cigarettesSmoked + ' and you can recognize me by the ' + this.distinguishingFeature + '.  My best friend is ' + this.bestFriend + ' and I ' + this.killsCivilians + ' kill civilians.';
};

// methods for keys
Object.keys(roger);
var keys = Object.keys(roger);
keys.length;
