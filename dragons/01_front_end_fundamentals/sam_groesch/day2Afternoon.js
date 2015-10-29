var age = confirm('Are you over 21?');
if (age === true) {
  alert('Huzzah!');
} else {
  alert('soon.jpg');
}

var place = window.location.host;
if (place != 'ga-chicago.github.io') {
  alert('Oh no! This is not the right website.')
} else {
  alert('Aww yeah you ain\'t hacked');
}

var userInput = prompt('What is your name?');
if (userInput.length < 1) {
  alert('Hey, you didn\'t give us your name!');
} else {
  alert('Thanks, ' + userInput + '!!1!1!!!')
}


var user = prompt('What\'s your username?');
var pass = prompt('What\'s your password?');
if (user != 'Sam'){
  alert('That is not a valid username.')
} else if (pass != 'password') {
  var c = confirm('Wrong password, would you like to reset?');
  if (c == true){
    alert('Go to reset password page');
  } else {
    alert('Try again.');
  }
} else {
  alert('You have been logged in.');
}

var age = 23;
var hasMoney = true;
if (age >= 21 && hasMoney == true) {
  console.log('You can have booze.')
}

if (true || false) {
  console.log('Boolean Party!')
}

var car = prompt('What car do you own?');
switch (car) {
  case "mazda": alert('mazdas zoom zoom');
    break;
  case "nissan": alert('the leaf is green');
    break;
  default:
    alert('your car is not here');
    break;
}

var roommates = prompt('Who are you?');
switch (roommates) {
  case "Mom": alert('Hey Mom, how was tennis?');
    break;
  case "Joellyn": alert('Hey Mom, how was tennis?');
    break;
  case "Dad": alert('Hey Dad, how was work?');
    break;
  case "Andy": alert('Hey Dad, how was work?');
    break;
  case "Sam": alert('Whoa dude, you\'re talking to yourself. You gotta get some sleep!');
    break;
  default: alert('Ok ' + roommates + ', what are you doing in my house?');
    break;
}
