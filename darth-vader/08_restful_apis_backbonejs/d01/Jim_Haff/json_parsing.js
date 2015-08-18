app.album = {
  songs: ["Box of rain", "Till the morning Comes", "ripple", "brokedown Palace", "Truckin", "Candyman", "Attics of my Life"],
  Album: JSO,
  Band: "The Grateful Dead",
  Year: 1970,
  Awesomeness: true
};

var app = app || {};

app.album = function(songs, album, band, year, awesomeness) {

  this.songs = songs;
  this.album = album,
  this.band = band,
  this.year = year,
  this.awesomeness = awesomeness
}

for (i=0; i < songJs.length; i+=1)
{for (key in songJs[i]){console.log(key + ": " + songJs[i][key])}}
