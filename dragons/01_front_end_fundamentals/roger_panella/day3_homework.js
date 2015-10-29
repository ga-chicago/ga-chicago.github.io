// 1. Detecting Types
function detectType(a) {
    var a;
    return typeof(a);
}

// 2. Carousel
var peopleOnCarousel = ["John", "Paul", "George", "Ringo", "Liam", "Noel"];
for (i = 0; peopleOnCarousel.length !== 0; i++) {
       if (i % 2 !== 0) {
         console.log("lap" + i);
         peopleOnCarousel.pop();
         console.log(peopleOnCarousel);
     } else if (i % 2 == 0 || i == 0) {
       console.log("lap" + i);
       console.log(peopleOnCarousel);
  }
}

// 3. You are an object...
var roger = {
  hairColor: "brown",
  eyeColor: "brown",
  phoneNumber: "617-549-0463",
  favoriteMusician: "Bill Frisell",
  favoriteThing: "travel",
  favoriteBeverage: "beer",
  shoeSize: "9",
  waistSIze: "36",
  typeOfBike: "Bianci",
  streetOfResidence: "Iowa"
}
for (var trait in roger) {
    console.log("Key is " + trait + ", value is " + roger[trait]);
}

// 4. Elementary School
function returnRemainder(a,b) {
   var answer = parseInt(a/b);
   var remainder = (a%b);
   console.log("The result of " + a + " divided by " + b + " is " + answer + ".  The remainder is " + remainder + ".");
}
