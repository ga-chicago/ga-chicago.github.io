/*

  Why loops are great.

  Loops are an indispensible tool in the programming kit. They're useful for iterating over properties of objects and arrays, recursively running functions, managing program control flow, and setting timers.

  Couldn't imagine living without loops. Game engines would break, V8 wouldn't be an evented, non-blocking io system, and earrings would have been less sexy in the 70s.

*/

var simpleArray = ['dog', 'cat', 'hamburger', 'spaceship', 'grandpa', 'jumbojet'];

for (var item in simpleArray) {
  console.log(simpleArray[item]);
}

// Here is a list of painters along with a json blob of
// meta values one might use in a simple application.

var awesomePainters = [
  'Johannes Vermeer': {
    'favouriteWork': {
      'title': 'The Art of Painting',
      'date': '1666 - 1668',
      'href': 'https://www.google.com/culturalinstitute/u/0/asset-viewer/the-art-of-painting/lAHeqBoLaePtEA?projectId=art-project'
    }
  },
  'Rembrandt Harmensz van Rijn': {
    'favouriteWork': {
      'title': 'The Jewish Bride',
      'date': 'c1665 - c1669',
      'href': 'https://www.google.com/culturalinstitute/u/0/asset-viewer/isaac-and-rebecca-known-as-the-jewish-bride/hAERFV8rdOOssw?projectId=art-project'
    }
  },
  'Titian': {
    'favouriteWork': {
      'title': 'The Tribute Money',
      'date': 'c1516',
      'href': 'https://www.google.com/culturalinstitute/u/0/asset-viewer/the-tribute-money/KwGBZUkhototqw?projectId=art-project'
    }
  }
];

// For my array containing numbers, here is a function
// that calculates all primes up to a maximum specified
// number.

var listOfPrimes = [];

function listPrimes(maxNum) {
  for (var i = 0; i <= maxNum; i++) {
    var result = [];
    for (var j = 0; j < i; j++) {
        if (i%j == 0 || i == 1) {
          result.push(j);
        }
    }
    if (result.length && result.length < 2) {
      listOfPrimes.push(i);
    }
  }
}

listPrimes(100);

console.log(listOfPrimes);
