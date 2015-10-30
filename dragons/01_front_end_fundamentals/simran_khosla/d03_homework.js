var x = 'Simran'
//1. DETECTING TYPES
function (x) {
  return typeof x
};

//2. CAROUSEL

var carousel = ['simran', 'stephen', 'john', 'paul', 'george', 'ringo'];

for (var i = 0; carousel.length !== 0; i++) {
  if (i % 2 !== 0) {
      carousel.pop();
      }
    console.log (i);
    console.log (carousel);
    }

// 3. I OBJECT

var Simran = {
    name : 'simran',
    age : 24,
    countries_lived_in : ['England', 'India', 'Japan', 'Malaysia', 'Singapore', 'USA'],
    hometown : 'Bombay, India',
    fav_food : 'Indian',
    birth_month : 'November',
    superpowers : ['super speed', 'invisibility', 'super strength'],
    siblings : 1,
    parents_names : ['Shantanu', 'Latika'],
    av_coffees_per_day : 3
};

var keys = Object.keys(Simran);

for (keys in Simran) {
  console.log (keys);
}

for (var prop in Simran) {
  console.log (Simran[prop]);
}


// 4. "Elementary, my dear Watson." (Got bored of normal names)
function assignValueString (x, y) {
  console.log ("The result is "+parseInt(x/y)+" with a remainder of "+(x % y)+".");
  }
assignValueString(5,3);

//http://ak-hdl.buzzfed.com/static/2015-03/12/4/enhanced/webdr11/anigif_enhanced-buzz-11873-1426150623-12.gif
