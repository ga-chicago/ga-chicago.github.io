var jason = {
  sayMyName : function() {
    return 'I am Jason';
  }
}

var err = {
  sayMyName : function() {
    return 'I am Error!';
  },
  makeFunOfGreenClothes : function() {
    return 'Your clothes are silly!';
  },
  changeName : function(newName) {
    if (typeof newName == 'string') {
      this.name = newName;
      return 'Name has been changed to: ' + newName;
    } else {
      return 'Name is not a valid string!';
    }
  }
};

var self = {
  firstName : 'Jason',
  lastName : 'Bratt',
  sayMyName : function() {
    return this.firstName + ' ' + this.lastName;
  },
  height: '6\'1',
  hairColor: 'blonde',
  hobby: 'playing drums and games',
  movies: 'The Prestige',
  weirdFact: 'Brush teeth in shower',
  funFact: 'Like dogs',
  favColor: 'Blue'
}

self.quirk = function(arg) {
  return 'Something weird I do is ' + arg;
}

self.funFact = function(arg) {
  return 'Something cool about me is ' + arg;
}

self.allTheThings = function() {
  var things = 'Things: '
  for (var prop in this) {
    things += prop + ' : ' + this[prop];
  }
  return things;
}

var elonmusk = {
  born: 'South Africa',
  laterLife: 'moved to Canada then to the United States',
  companies: ['Paypal', 'SpaceX', 'Tesla'],
  getCompanies : function() {
    return this.companies.join(' ');
  },
  funFact: 'Made a video game at age 12',
  currentMission: 'intergalatic space travel and go to mars'
};

elonmusk.tellStory = function() {
  return 'Elon was born in ' + this.born + ' where he grew up and ' + this.funFact + ' later on he ' + this.laterLife + ' and started  ' + this.getCompanies() + ' and is now working on ' + this.currentMission;
};



self.quirk(self.weirdFact);
self.funFact(self.funFact);
