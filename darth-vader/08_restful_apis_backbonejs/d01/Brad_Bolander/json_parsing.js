// Declare Object
var kitty = {
  name: "PANTHAMOS DESTROYER OF WORLDS",
  color: "BLACK AS NIGHT",
  age: "AGE IS IRRELEVENT TO PANTHAMOS",
  friends: ["lilly", "sir fuzzington"],
  quotes: ["I WILL BE YOUR DESTRUCTIONNNNNN", "meow"]
}

// Convert to string
var kittyText = JSON.stringify(kitty);
console.log(kittyText);

// PARSING OF PANTHAMOSSSS
var kittyParse = JSON.parse(kittyText);
console.log(kittyParse);

// Print dat shit out
for (var key in kitty) {
  console.log(key + ": " + kitty[key]);
}
