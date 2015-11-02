function singKaraoke(song) {
  return name + ' sings ' + song;
}
  var name = 'Jimmy';
  var song = 'Don\'t Stop Believin';

singKaraoke('Don\'t Stop Believin');

switch (getUsersInput('input something')) {
  case "42":
    console.log('you know the answer..');
    break;
  case "fwoosh":
    console.log('snap, did you break the sound barrier?');
    break;
  default:
    console.log('sorry, you are not a special snowflake');
}

function elementaryMyDearWatson(num1, num2) {
  var wholeNumber = parseInt(num1 / num2);
  console.log('wholeNumber: ' + wholeNumber);
  var remainder = num1 % num2;
  console.log('remainder: ' + remainder);
  return wholeNumber + ' has a remainder of ' + remainder
}

// carousel homework problem solution (Wednesday, 10/28/15)
var riders = ['Marty', 'Ruth', 'Paul', 'Jason', 'Jan', 'Aaron'];
for (var i = 0; riders.length > 0; i++) {
  if (i % 2 == 1) {
    console.log('odd number, who\'s getting off?!');
  }
  else {
    console.log('even number...no one gets off.');
    console.log(riders.pop);
  }
}

var pizza = ['mushroom', 'goat cheese', 'salad pizza'];

for (var type in pizza) {
  console.log('pizza: ' + type);
}
