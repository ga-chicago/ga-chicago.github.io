// 11. Constructors
//
// Constructors are essentially classes/blueprints for Javascript.
// Create a re-usable constructor for bands
// bands have members, names, date formed, and albums.
// They also have an onTour attribute as well.
// Use this constructor to create three of your favourite bands!

function band(name, yearStarted, bestAlbum, leadSinger) {
  this.name = name;
  this.yearStarted = yearStarted;
  this.bestAlbum = bestAlbum;
  this.leadSinger = leadSinger;
};

var Metallica = new band("Metallica", 1981, "Kill em' All!", "James Hetfield");
var PinkFloyd = new band("Pink Floyd", 1965, "The Wall", "Roger Waters");
var JohnnyCash = new band("Johnny Cash", 1955, "CASH", "Johny Cash");
