var anna = {

  sayMyName: function() {
    return 'I am Anna.';
  },
  name: 'Anna',
  age: 21,
  heightInches: 66,
  color: 'yellow',
  cat: {
    name: 'Violette',
    age: 3,
    attitude: 'princess'
  },
  transport: 'red line',
  drink: 'tea',
  city: 'Chicago',
  neighborhood: 'Lakeview',
  specialists: 4
};

//use .hasOwnProperty to check if you have that property. This is useful to check that a property exists if the data you're receiveing is not gathered yourself (user input, etc). check if it exists before an error occurs. 

//Objects.keys(objectname); Objects can look into themselves. can use object.keys. Can use keys.length!

anna.quirk = function(doctors) {
    return "Anna has " + doctors + " doctors.";
};
anna.lift = function(pounds) {
  return "deadlift " + pounds + "lbs.";
};
anna.eat = function(boolean) {
  return "no eating for anna";
}
anna.buildAboutMe = function() {
//  return 'all of my properties' + 'together';
  return 'My name is ' + this.name + '. I am ' + this.age + " years old. I live with a cat named " + this.cat.name + " and she is a complete " + this.cat.attitude + ". We live in " + this.city + ", specifically in " + this.neighborhood + " where I try really hard to take the " + this.transport + " to work.";
}

var spongebob = {
  name: 'Spongebob',
  location: "Pineapple under the sea",
  color: "yellow",
  char1: "absorbent",
  char2: "porous",
  bestAt: "nautical nonsense"
}

spongebob.buildAboutMe = function() {
//  return 'all of my properties' + 'together';
  return 'My name is ' + this.name + '. I live in a ' + this.location + " and I am " + this.char1 + " and  " + this.color + " and " + this.char2 + " and I am a boss at " + this.bestAt;
}

var ElizabethBennet = {
  name: "Elizabeth",
  year: 1830,
  age: 21,
  location: "Longbourn",
  attitude: "sassy",
  sisters: 4,
  husband: "Mr Darcy",
  wealth: "10,000 a year"
}

ElizabethBennet.tellStory = function() {
  return this.name + " is a young lady living in the year " + this.year + ". She is " + this.age + " years old, living in " + this.location + " with " + this.sisters + " sisters. " + " She meets " + this.husband + " and he is enamoured with how " + this.attitude + " she is. They get married and live happily ever after on his enormous bank account of " + this.wealth
}


  var err = {
    name: 'Error',
    sayMyName: function() {
      return 'I am ' + this.name; //self referential!!
    },
    makeFunOfGreenClothes: function() {
      return "your clothes suck";
    },
    changeName: function(newName) {
      if (typeof(newName) == 'string') {
        var oldName = this.name //this var gets hoisted and doesnt get updated
        this.name = newName;
        return 'Name has been changed to: ' + newName + " from " + oldName;
      } else {
        return 'That name is not a valid string';
      }
    }
  };
