var james = {
  sayMyName: function() {
    return "I am James.";
  }
};

var err = {
  name: "Error",

  sayMyName: function() {
    return "I am " + this.name + ".";
  },
  makeFunOfGreenClothes: function() {
    return "Your clothes look silly, little elf-man.";
  },
  changeName: function(newName) {
    if (typeof(newName) === "string") {
      this.name = newName;
      return "Name has been changed to " + newName + ".";
    } else {
      return "That is not a valid string.";
    }
  }
};

var jeff = {
  sayMyName: function() {
    return "My name is Jeff.";
  },
  firstname: "Jeff",
  lastname: "Steed",
  gender: "male",
  city: "Chicago",
  pets: {
    name: "Obi",
    species: "dog",
    breed: "American Bulldog",
    color: "white"
  }
};

jeff.quirk = function(arg) {
  return "I have a quirk where I " + arg + ".";
};

jeff.hobbies = function() {
  return "Some of my hobbies are; video games, reading, and guitar.";
};

jeff.aboutMe = function() {
  return "My name is " + this.firstname + " " + this.lastname + ".\n" +
  "I am " + this.gender + ".\n" +  "I live in " + this.city + ".\n" +
  this.hobbies() + "\nI have a " + this.pets.species + " and his name is " + this.pets.name + ".";
};

var batman = {
  name: "Batman",
  secretIdentity: "Bruce Wayne",
  parents: "deceased",
  tools: ["Utility Belt", "Money"],
  disposition: "Brooding",
  archVillian: "The Joker",

  myStory: function() {
    return "I am " + this.name + ". My secret identity is " + this.secretIdentity + ".\nMy parents are " + this.parents + ". I am always " + this.disposition + ", and my archenemy is " + this.archVillian + ".\nMy crime fighting tools are; " + this.tools[0] + " and " + this.tools[1] + ".";
  }
};
