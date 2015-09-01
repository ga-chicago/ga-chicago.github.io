/*
11. Constructors

Constructors are essentially classes/blueprints for Javascript.
Create a re-usable constructor for bands
bands have members, names, date formed, and albums.
They also have an onTour attribute as well.
Use this constructor to create three of your favourite bands!
*/

function Bands(name, members, dateFormed, albums, onTour) {
	this.name = name.toString();
	this.members = members;
	this.dateFormed = new Date(dateFormed);
	this.albums = albums;
	this.onTour = onTour;
}

var theJelloSmello = new Bands('The JelloSmello', ['rick', 'dave', 'perry'], '2015-01-01', ['How to beat the sun at shining', 'mom smells'], false);

var weirdGuyOnBus = new Bands('Weird Guy on the Bus', ['Laurence Mishburne and the Grollidays'], '1997-02-31', ['The Sneeze EP'], true);

var noNoTophat = new Bands('No-no Top Hat', ['Curb', 'Jamie Says', 'Three Tricks to McGee'], '1887-06-09', ['Chrutle Symphony No. 102 in L Sharp', 'A Sonata to my Weenpeen'], true);