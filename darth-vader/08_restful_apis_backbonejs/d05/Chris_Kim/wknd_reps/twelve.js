// 12. The Functions Strike Back!
//
// It is a dark time for the Ruby Rebellion.
// Javascript is on the rise.
// While you have used Backbone to create models...
// Create two functions that mimics model.get and model.set for an object.
// These functions will be abilities on an object called model.

// Model of a Sith Lord
var sithLord = {
  firstName: "Darth",
  middleName: "BADASS MOFO",
  lastName: "Vader",
  age: "shrunken and wrinkly",
  power: "force choke"
}

// Getters and Setters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
Object.defineProperty(sithLord, 'power', {
  get function() { return power; },
  set function(newPower) { power = newPower; }
  }
);

// Setting new power to Lord Vader
sithLord.power = 'Force charlie horse';
console.log(sithLord.power)
