var funThings = {
  whiskey: 'Bookers',
  malort: 'Besk',
  amaro:  'Ramazzotti',
  vodka:  'Tito\'s',
  gin:  'Death\'s Door',
  scotch: 'Oban 14 Year',
  tequila: 'Herradura A\xF1ejo',
  champagne: 'Verve Cliquot',
  beer: 'La Folie',
  moonshine: 'yes please!'
}

function loopy(thing) {
  for (var item in thing) {
    console.log(item + ': ' + thing[item]);
  }
  return true;
}

loopy(funThings);

function ObjectKeysLoop(obj) {
  var items = Object.keys(obj);
  var counter = 0;
  for (var item in items) {
    console.log(item + ': ' + items[item]);
    counter++;
  }
  console.log('There are ' + counter + ' keys visible to Object.keys(' + obj + ').');
  return true;
}

function ForInLoop(obj) {
  var counter = 0;
  for (var item in obj) {
    console.log(item + ': ' + obj[item]);
    counter++;
  }
  console.log('There are ' + counter + ' keys visible to for-in loop on ' + obj + '.');
  return true;
}

ObjectKeysLoop(window);
ForInLoop(window);

// It is quite interesting to see the large variation in number of keys visible to the Object.keys method vs. for-in loops.
// The MDN article points out that the for-in loop goes all the way up the prototype chain.
// Big difference, really good to know.
