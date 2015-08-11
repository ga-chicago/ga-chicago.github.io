var cheeses = ['cheddar', 'swiss', 'provolone', 'gouda', 'stinky cheese'];

for (var cheese in cheeses) {
  console.log(cheeses[cheese] + ' backwards is: ' + cheeses[cheese].split('').reverse().join(''));
}

for (var i = cheeses.length -1; i >= 0; i--) {
  var cheeseLetters = [];
  cheeseLetters = cheeses[i].split('');
  if (cheeseLetters.indexOf('a') !== -1) {
    console.log(cheeses[i] + ' contains the letter A!');
  }
}
