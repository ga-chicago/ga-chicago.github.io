// identify an object

// var character = {
//   name: "Han Solo",
//   description: "Smuggler turned good guy",
//   weapon: "blaster",
//   ship: "Millenium Falcon",
//   bestFriend: "Chewbacca"
// };

// create a constructor
var character = function(name, description, weapon, ship, bestFriend) {

  // THIS refers to the base object
  this.name = name;
  this.description = description;
  this.tool = weapon;
  this.ship = ship;
  this.bff = bestFriend;

};

var hanSolo = new character("Han Solo",
      "smuggler turned good guy (ps: he likes Leia)",
      "DL-44 blaster",
      "Millenium Falcon",
      "Chewbacca");

var bobaFett = new character("Boba Fett (aka Jaster Mareel)",
    "once a child of a clone... now a bounty hunter",
    "jetpack!",
    "Slave 1",
    "NO FRIENDS :(");
