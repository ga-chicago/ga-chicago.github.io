/*
11. Constructors

Constructors are essentially classes/blueprints for Javascript.
Create a re-usable constructor for bands
bands have members, names, date formed, and albums.
They also have an onTour attribute as well.
Use this constructor to create three of your favourite bands!
*/

function Band(name, members, date_formed, albums) {
	this.name = name;
	this.members = members;	
	this.date_formed = date_formed;
	this.albums = albums;
	this.onTour = false;
	this.setTour = function() {
		this.onTour = true;
	}
	this.endTour = function() {
		this.onTour = false;
	}
}

var boston = new Band( 'Boston', [ 'Tom Scholz', 'Gary Pihl', 'Curly Smith', 'Jeff Neal', 'Tommy DeCarlo', 'Tracy Ferrie', 'Beth Cohen' ], '3/17/1973', [ 'Boston', 'Don\'t Look Back', 'Third Stage', 'Walk On', 'Greatest Hits' ] );
var kansas = new Band( 'Kansas', [ 'Phil Ehart', 'Rich Williams', 'Billy Greer', 'David Ragsdale', 'David Manion', 'Ronnie Platt' ], '8/22/1976', [ 'Kansas', 'Song for America', 'Masque', 'Left Oveture', 'Point of No Return', 'Monolith', 'Audio Visions' ] );
var chicago = new Band( 'Chicago', [ 'Robert Lamm', 'Lee Loughnane', 'James Pankow', 'Walter Parazaider', 'Jason Scheff', 'Tris Imboden', 'Keith Howland', 'Lou Pardini', 'Walfredo Reyes, Jr.' ], '4/11/1967', [ 'Chicago Transit Authority', 'Chicago II', 'Chicago III', 'Chicago IV', 'Chicago V', 'Chicago VI', 'Chicago VII', 'Chicago VIII', 'Chicago X', 'Chicago XI', 'Hot Streets', 'Chicago 13', 'Chicago XIV' ] );

console.log(chicago.name);