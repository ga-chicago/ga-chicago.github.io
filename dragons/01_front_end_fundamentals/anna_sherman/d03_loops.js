
var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];

for (var i = 0; i < arr.length; i++) {
  console.log('the incrementor is ' + i);
  console.log(arr[i]);
}



//For IN loop. iterator loop. lazy loop. for EACH loops.
for (var pirate in arr) {
  console.log(arr[pirate]);
  console.log(pirate);
}

//for each item in ARR, you declared var pirate to stand for each item in the array.
//this is not a great choice when you have a specific order.
//pirate is the incrementor. :)

var places = ['Fitness 19', 'Cafe Intelligentisa', 'Trader Joes', 'Doc B\'s', 'Sidetrack'];

for (var place in places){
  console.log(places[place]);
  if (parseInt(place)+2 == places.length){
    console.log("The last place I visited was....");
  }
}

//IN THE ABOVE....(place) is a string. So you gotta parseInt to make it work. a better way is to add -1 to the places.length because you know that's already a number.


//have a final line that says these are the last places that I visited.


for (var i = 0; i < places.length; i++) {
  console.log(places[i]);
  if (i === places.length - 2) {
    console.log("The last place I visited was....");
  }
}


var arr = [];
var obj = {};
var anna = new Object();
anna.hairColor = 'blue';



var inception = {
  friends: ['Clooney', 'Rihanna', 'Lebowski'], //dont forget comma
  health: {
    heartRate: 'bad',
    calories: 'dude',
    advice: 'go outside'
  }
}

inception.places = places;
console.log(inception);

//ARRAY USES BRACKETS. AN OBJECT USES CURLY BRACES.
