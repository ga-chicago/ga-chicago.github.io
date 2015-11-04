var sam = {

  sayMyName: function () {
    return 'I am Sam';
  },
  age: 27,
  hair: "long",
  homeState: "Connecticut",
  instrument: "bass",
  activities: ["skiing", "biking", "playing music"],
  girlfriend: {
    name:"Devin",
    daughter: "Lucy",
    neighborhood:"Bridgeport"
  },
  college: "UVM",
  beer: "Heady Topper"
};

sam.quirk = function(evenNumber) {
  return "I am down with the number " + evenNumber;
}

sam.runAway = function(monster) {
  return "Oh no, I saw a " + monster + ". Run away!";
}

sam.goSki = function(mountain) {
  return "Let's go ski at " + mountain;
}

sam.drinkBeer = function() {
  return "Let's drink us some " + sam.beer;
}

sam.buildAboutMe = function() {
  return "Sam is " + this.age + " years old, and is from " + this.homeState + ". His hair is " + this.hair
+ " and his favorite beer is " + this.beer + ". He went to " + this.college + " and plays the " + this.instrument +
". His girlfriend, " + this.girlfriend["name"] + " has a daugher named " + this.girlfriend["daughter"] + " and lives in " +
this.girlfriend["neighborhood"] + ".";
};

sam.hal = function() {
  return this.buildAboutMe();
}

var hal = {
  name: "Hal Incandenza",
  nickname: "Incster",
  dad: "James",
  school: "Enfield Academy",
  brother: "Orin",
  drug: "weed",
  sport: "tennis"
}

hal.tellStory = function() {
  return "My name is " + this.name + ", AKA the " + this.nickname + " and I go to " + this.school + ", which my father, " + this.dad + ", founded." +
  " I like to smoke " + this.drug + " and I am nasty at " + this.sport + ". One of my brothers, " + this.brother +
  ", is a punter in the NFL. " + this.dad + " created an addictive video, put his head in a microwave, and North America is crazy."

}


​
var err = {
  name: "Error",
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
      return 'Name has been changed to ' + newName + "from " + oldName;
    } else {
      return "That name is not a valid string";
    }
  }
};
