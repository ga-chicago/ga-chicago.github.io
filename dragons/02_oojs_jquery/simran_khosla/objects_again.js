var simran = {

  sayMyName: function() {
    return 'I am James';
  },
    name : "Simran",
    age : 25,
    height : '5.11',
    train: 'red line',
    favColor: 'yellow',
    favChar: 'Han Solo'
}

simran.quirk = function(word) {
  return "hey hey " + word;
};

simran.addsAYay = function(string) {
  return string + " yay!";
};

simran.favChartalk = function(arg) {
  return this.favChar+" says he is from a Galaxy far far away and a long time ago";
};

var err = {
  name: 'Error',
  sayMyName: function() {
    return "I am "+ this.name;
  },
  makeFunOfGreenClothes: function () {
    return "Your clothes look silly, little elf-man."
  },
  changeName : function (newName) {
    if (typeof(newName)=="string") {
      this.name = newName;
      return "name has been changed to: " + newName;
    } else {
      return "That name is not a valid string.";
    }
  }

};

err.sayMyName();


//fav character story
var Lucy = {
    name: "Lucy",
    who: "a girl with kaleidoscope eyes",
    location: "in the sky with diamonds",
    inA: "boat on a river",
    answer: "quite slowly",
    trees: "tangerine",
    folliage: "cellophane flowers of yellow and green towering over your head",
    skies: "marmalade",
    singSong: function() {
      console.log("Picture yourself in a "+this.inA+" with "+this.trees+" trees and "+this.skies+" skies.")
    }

}
