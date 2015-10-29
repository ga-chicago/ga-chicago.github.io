// Objects

var sam = {
  eyeColor: "brown",
  hairColor: "reddish brown",
  12: 'favorite number'
};

for (var prop in sam) {
  console.log('The value for ' + prop + ' is ' + sam[prop]);
}

var inception = {
  friends: ["Clooney", 'Rihanna', 'Lebowski'],
  health: {
    heartRate: "bad",
    calories: "dude",
    advice: "sleep less"
  }
};
