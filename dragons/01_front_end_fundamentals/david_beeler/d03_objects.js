// Objects

var david = {
  eyeColor: "brown",
  age: "28",
  hairColor: "brown",
  42: 'secret'
};

for (var prop in david) {
  console.log("The value for " + prop + " is " + david[prop]);
}

prompt("cat");
