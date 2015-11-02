var likesEMeats = confirm('Do like to eat encased meats?');
if (likesEMeats === true) {
  alert('huzzah');
} else {
  alert('too bad');
}

var loc = window.location.host;
if (loc != 'ga-chicago.github.io') {
  alert('oh no! this is not the right website.');
}
else {
  alert('awww yeah u aint hacked');
}


var userInput = prompt('what is your name?');
if (userInput.length < 1) {
  alert('hey, you didn\'t give your name!');
} else {
  alert('hello, ' + userInput);
}
