var james = {
  sayMyName: function() {
    return 'I am James';
  }

};

var err = {
  sayMyName: function() {
    return 'I am Error';
  },
  makeFunOfGreenClothes: function() {
    return 'Your clothes look silly, little elf man'
  }

};

var sam = {
  sayMyName: function() {
    return 'I am Sam'},
  eyeColor: 'Brown',
  hairColor: 'Brown',
  height: '5\'9\"',
  weight: '170 lbs',
  hometown: 'Glen Ellyn, IL',
  college: 'Iowa State University',
  degree: 'Economics',
  shoeSize: '10',
  favoriteSport: 'basketball',
  numberOfSiblings: '2'
};
 //A function in an object is a method
sam.favoriteTeam = function(team) {
  return 'My favorite sports team is the ' + team;
}
sam.futureAge = function(year) {
  return 'My age at the end of ' + year + ' will be ' + (year - 1992);
}
sam.buildAboutMe = function() {
  for (var i = 0; i < Object.keys(sam).length; i++) {
    var x = Object.keys(sam)[i];
    return 'My ' + x + ' key has a value of: ' + sam.x;
  }
}

var lukeSkywalker = {
  timePeriod: 'A long, long time ago',
  loc: 'A Galaxy far, far away',
  weapon: 'lightsaber',
  lightsaberColor: 'Blue or Green',
  hasKissedSister: true,
  howManyHands: function(movie) {
    if (movie < 6) {
    return 'Luke has two hands'
    } else {
    return 'Luke only has one hand :/'
    }
  },
/*  tellStory: function() {
    for (var i = 0; i < array.length; i++) {
      console.log('Luke Skywalker\'s '+Object.keys(sam)[i]+ ' is: ' + sam.key[i]);
    }
  }
  */
  tellStory: function() {
    return 'My name is Luke Skywalker and I\'m from ' + lukeSkywalker.timePeriod + ' and ' + lukeSkywalker.loc + '. I use a ' + lukeSkywalker.lightsaberColor + ' ' + lukeSkywalker.weapon + ' and the rumor of if I\'ve kissed my sister is ' + lukeSkywalker.hasKissedSister;
  }
}

var err = {
  name: 'Error',
  sayMyName: function() {
    return 'I am ' + this.name;
  },
  makeFunOfGreenClothes: function() {
    return "Your clothes look silly, little elf-man";
  },
  changeName: function(newName) {
    if (typeof(newName == 'string')) {
      this.name = newName;
      return 'Name has been changed to ' + newName;
    } else {
      return 'That name is not a valid string';
    }
  }
};
