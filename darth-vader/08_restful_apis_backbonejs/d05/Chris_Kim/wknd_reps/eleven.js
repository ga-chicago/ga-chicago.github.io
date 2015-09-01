// 11. Constructors
//
// Constructors are essentially classes/blueprints for Javascript.
// Create a re-usable constructor for bands
// bands have members, names, date formed, and albums.
// They also have an onTour attribute as well.
// Use this constructor to create three of your favourite bands!

function band(members, names, date_formed, albums, onTour) {
this.members = members;
this.names = names;
this.date_formed = date_formed;
this.albums = albums;
this.onTour = onTour
}

var phantogram = new band(2, ["Sarah Barthel", "Josh Carter"], 2007, ['Eyelid Movies', 'Voices'], true);

var arcadeFire= new band(6, ["Win Butler","Régine Chassagne","William Butler","Richard Reed Parry","Tim Kingsbury","Jeremy Gara"], 20001, ['Funeral (2004)','Neon Bible (2007)','The Suburbs (2010)','Reflektor (2013)'], false]);

var moderat = new band(3, ['Gernot Bronsert', 'Sascha Ring', 'Sebastian Szary'], 2002, ["Auf Kosten der Gesundheit", "Moderat", "Rusty Nails", "Seamonkey", "Gita", "Bad Kingdom", "II", "Last Time", "Bad Kingdom Remixes"], false);
