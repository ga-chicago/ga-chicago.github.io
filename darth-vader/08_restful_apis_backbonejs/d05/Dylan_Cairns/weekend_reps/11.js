function Bands(members, bandName, dateFormed, albums, onTour) {
	this.members = members; 
	this.bandName = bandName;
	this.dateFormed = dateFormed; 
	this.albums = albums; 
	this.onTour = onTour; 
}; 

var theMemes = new Bands(['lil 4chan', 'intranet', '404'], 'The Memes', 2015, ['dialup', 'web 1.0', 'fedora'], true); 
var djQuery = new Bands(['Deejay Query'], 'DjQuery', 2012, ['$', 'AJAXXX'], true); 
var mute = new Bands(['noone'], 'I dont think so', 2254, ['...', 'nothing here'], false); 