function getType(input) {
  return typeof input;
}

function carousel() {

  var people = ['Salty Jones', 'Brineface', 'Octopus Husband', 'Weirdfish'];
//  var pirates = [];
  var tmp;
  var odd = false;

  // a disgusting for loop!
  for (; people.length > 0; ) {

    if (odd) {
      tmp = people.shift();
      console.log(tmp);
//      pirates.push(tmp);
    }
    odd = !odd;
  }

  // as a while loop, using the resulting pirates array
  // odd = false;
  // while(pirates.length != 0) {
  //
  //   if (odd)
  //     console.log(pirates.pop());
  //
  //   odd = !odd;
  // }
}

var paulVasich =
{
  firstName:     'Paul',
  lastName:      'Vasich',
  height:        75,
  birthday:      new Date('April 2, 1991'),
  eyeColor:      'green?',
  spiritAnimal:  'Pig',
  pet:           'George',
  anagrams:      ['Visual Chap', 'A Lavish Cup'],
  nicoleOpinion: 'Adorable',
  meganOpinion:  'Petrichor'
};

function describe(iter) {
  for (var att in iter) {
    console.log(att + ': ' + iter[att]);
  }
}

// describe(paulVasich)

// divide(p, q) => string
//  returns quotient and remainder of p / q
function divide(a, b) {

  if ( isNaN(parseInt(a)) || isNaN(parseInt(b)) || b == 0 )
    // lazy error
    throw 'beep boop. does not compute';

  return 'quotient: ' + Math.floor(a/b) + ' remainder: ' + a % b;
}
