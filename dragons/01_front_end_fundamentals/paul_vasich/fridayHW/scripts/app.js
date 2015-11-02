window.onload = function() {
  say('boop');

  var favAnimal = prompt('What is your favorite animal?');
  var username = prompt('Name?');
  var day = prompt('How was your day?');
  var face = prompt('What is wrong with your face?');

  var contentContainer = document.getElementById('content');

  contentContainer.innerHTML = username + ' came home after a ' +
   day + ' day to their spouse, the ' + favAnimal +
   '. '+username+'\'s affections went unnoticed,'+
   ' due to that thing with their face.';

function say(message) {
  console.log(message);
  return message;
}
