function band(name,members,dateFormed,albums,onTour) {
  this.name = name;
  this.members = members;
  this.dateFormed = dateFormed;
  this.albums = albums;
  this.onTour = onTour;
  var ret = name;
  return ret
}

band()

var theRamonies = new band("theRamonies","Dr. Dre, Snoop, Biggie","10-10-10", "Hooray for the mixtape", false);
