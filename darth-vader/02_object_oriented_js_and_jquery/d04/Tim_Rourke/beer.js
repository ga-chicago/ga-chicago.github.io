var usBeers = ['Bud','Miller','Coors'];

var imports = ['Paulaner', 'Stella', 'Heineken'];

function beerList(beers) {
  for (var i = 0; i < beers.length; i++) {
    console.log(beers[i]);
  }
}

beerList(usBeers);

beerList(imports);

//DEAR TOM, PLEASE BUY BETTER BEER. Paulaner being the exception.

var smellicopters = ['RoboCop', 'Governor Arnold', 'Jingleheimer\'s Mom', 'Maury'];

function areYouAnAssFace(doodoo) {
  for (var peepee = 0; peepee < doodoo.length; peepee++) {
    console.log('I whooped ' + doodoo[peepee] + '\'s ass!');
  }
}

areYouAnAssFace(smellicopters);


function max(a, b) {
  if (a == b) {
    throw new Error('Arguments are equivalent.');
  } else if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

function fortuneTeller(name, job, salary, location) {
  console.log(name + ' will have ' + parseInt(salary) + ' warts on his Johnson from a hooker named ' + location + ' after performing in an adult film where two ' + job + 's do each other with masks on.');
}
