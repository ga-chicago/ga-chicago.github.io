//console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;

//I wanted to use a for in loop here to loop through lands
//and append each to the dom, but I couldn't figure out how to
//get each element in the array to display as H1. I tried using
//several variations of land[lands] but it would also print that out
//instead of the desired string. UGH!

var makeMiddleEarth = function() {
  $('body').append('<section id ="middle-earth"></section>');
  for (var i in lands){
    $('#middle-earth').append('<article><h1>' + lands[i] + '</h1></article>');
  };
};

//var theShire = $('article:nth-child(2)');

var makeHobbits = function () {
  for (var hobbit in hobbits){
    $('article:nth-child(1)').append ('<li>' + (hobbits[hobbit]) + '</li>');
  };
};


var keepItSecretKeepItSafe = function(){
  $('li:eq(0)').append('<div class="magic-imbued-jewelry" id="the-ring"><p></p></div>');
};

$(window).on('load',function(){
makeMiddleEarth();
makeHobbits();
keepItSecretKeepItSafe();
});
