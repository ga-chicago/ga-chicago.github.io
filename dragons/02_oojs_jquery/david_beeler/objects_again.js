var david = {

  sayMyName: function() {
    return "I am David";
  },
  // 5-10 attributes about yourself
  name: "David",
  age: 28,
  favoriteColor: "purple",
  cat: {
    name: "Loki",
    age: 8,
    color: "black and white"
  },
  movieSeries: "Star Wars",
  bookSeries: ["Harry Potter", "Star Wars"],
  homeTown: "Geneva, IN",
  homeStat: "Indiana",
  sister: "Chrissy",
  drink: "Mt.Dew"
};

david.quirk = function(aQuirk) {
  return "One of David\'s quirks is..." + aQuirk;
}
david.travelTo = function(place) {
  return "David should travel to ... " + place;
}
david.dislikes = function(aDislike) {
  return "David doesn't like " + aDislike + "!";
}
david.buildAboutMe = function() {
  return this.name + " is " + this.age + " years old. He is originally from " +
   this.homeTown + ". His favorite color is " + this.favoriteColor + " and one of his cats is " + this.cat.name + ", age." + this.cat.age +
   " He (the cat) is such a cutie!"
}

var harry_potter = {
  firstName: "Harry",
  lastName: "Potter",
  name: harry_potter.firstName + " " + harry_potter.lastName,
  type: "Wizard",
  pet: {
    type: "owl",
    name: "Hedwig"
  },
  school: "Hogwarts",
  schoolHouse: "Gryffindor",
  nemesis: "Lord Voldemort"

}

harry_potter.tellStory = function() {
  return this.name + " is a young " + this.type + " that attends the wizarding school of " + this.school + ". Within " + this.school + " " + this.firstName +
  " is apart of the House of " + this.schoolHouse + ". He also has an " + this.pet.type + " named " + this.pet.name + ".\n" +
  this.firstName + " was set to play a major role within the future of the " +
  this.type + "ing world. You see, while " + this.firstName + " was just a baby, " + this.nemesis + " came to " + this.firstName + "\'s childhood home to murder him." ;
}

var keys = Object.keys(harry_potter);
keys.length;



var err = {
  name: "Error",
  sayMyName: function() {
    return "I am " + this.name;
  },
  makeFunOfGreenClothes: function() {
    return "Your clothes look silly, little elf-man";
  },
  changeName: function(newName) {
    if (typeof(newName) == 'string') {
      var oldName = this.name;
      this.name = newName;
      return "Name has been changed from: " + oldName + " to: " + newName;
    } else {
      return "That name is a not a valid string";
    }
  }
};
