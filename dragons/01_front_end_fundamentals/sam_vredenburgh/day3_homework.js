// 1. Detecting Types

function detect(x) {
  return typeof x;
}

// 2. Carousel

var carousel = ['Bret', 'Jemaine', 'Murray', 'Mel', 'Greg','Doug', 'Dave', 'David Bowie'];
var len = carousel.length;

for (i = 0; i < len * 2; i++) {
  if(i % 2 === 0) {
    console.log(carousel);
  } else {
    console.log(carousel.shift());
    console.log(carousel);
  }
}

// 3. You are an object...

var sam = {
  age: 27,
  height: "6'1\"",
  instrument: "bass",
  homeState: "Connecticut",
  school: "UVM",
  favoriteSport: "Skiing",
  favoriteArtist: "Kandinsky",
  favoriteBand: "Radiohead",
  beerOfChoice: "Zombie Dust",
  transport: "bike"
};

for (var prop in sam) {
  console.log(sam[prop]);
  console.log(prop);
}

// 4. Elementary school

function remainder(x, y) {
  var result = x / y;
  var leftover = x % y;
  return x + " divided by " + y + " leaves a remainder of " + leftover + ". The result is " + result +".";
}
