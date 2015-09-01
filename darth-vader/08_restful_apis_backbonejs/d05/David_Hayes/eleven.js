function band(memberNames, dateFormed,albums, onTour) {
    this.memberNames = memberNames;
    this.dateFormed = dateFormed;
    this.albums = albums;
    this.onTour = onTour;
}

var Beatles = new band( [ 'John', 'Paul','George','Ringo'],
                        1960,
                        [ 'Meet the Beatles','Rubber Soul','Sgt. Pepper\'s Lonely Hearts Club Band'],
                        false );

var Kiss = new band( ['Gene Simmons', 'Paul Stanley', 'Ace Frehley', 'Peter Criss'],
                      1973,
                     ['Alive!', 'Love Gun', 'Destroyer', 'Psycho Circus'],
                      true);

var Journey = new band(['Steve Perry', 'Neal Schon', 'Jonathon Cain', 'Ross Valory', 'Steve Smith'],
                       1973,
                       ['Escape', 'Infinity', 'Evolution', 'Raised on Radio'],
                       true);
