console.log("Linked.");

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

//manipulate the document
// Did this timeout so that the page could load before any of the story begins
$(window).on('load', function() {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBuddies();
  beautifulStranger();
  leaveTheShire();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});

//Part 1
var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // AND.. inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
   $('.overlay').after('<section id="middle-earth"></section>');
   window.$middleearth = $('#middle-earth');
   for (var land in lands) {
     $middleearth.append('<article id="' + lands[land].split(" ").join("_") + '"><h1>' + lands[land] + '</h1></article>');
   }
};

//Part 2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   window.$theShire = $('#The_Shire');
   window.$theShire.append('<ul class="hobbits"></ul>');
   for (var hobbit in hobbits) {
     $('#The_Shire ul').append('<li class="hobbit" id="' + hobbits[hobbit].split(" ").join("_").replace(/\'/g, "") + '">' + hobbits[hobbit] + '</li>');
   }
};

//Part 3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   $('#Frodo_Baggins').append('<div class="magic-imbued-jewelry" id="the-ring"></div>');
};

//Part 4
var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   $('#Rivendell').append('<aside><ul></ul></aside>');
   for (var buddy in buddies) {
     $('#Rivendell ul').append('<li class="buddy" id="' + buddies[buddy].split(" ").join("_").replace(/\'/g, "") + '">' + buddies[buddy] + '</li>');
   }
};

//Part 5
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $('#Strider').html('Aragorn');
};

//Part 6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $('.hobbit').detach().appendTo("#Rivendell aside ul");
};

//Part 7
var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   $('<div id="the-fellowship"><ul></ul></div>').appendTo('#Rivendell');
   window.$hobbitsAndBuddies = $('#Rivendell aside ul li');
   window.$hobbitsAndBuddies.detach();
   window.$hobbitsAndBuddies.each(function(index) {
      $this = $(this);
      $($this).appendTo('#the-fellowship ul');
      alert($this.text() + ' has joined the fellowship!');
  });
};

//Part 8
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   $('#Gandalf_the_Grey').html('Gandalf the White');
   $('#Gandalf_the_Grey').css({"background-color": "white",
                               "border": "2px solid grey"});
};

//Part 9
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert('the horn of gondor has been blown!!!!!');
   $('#Boromir').remove();
};

//Part 10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   $('#Mordor').append('<ul></ul>');
   $('#Frodo_Baggins, #Samwise_Sam_Gamgee').detach().appendTo('#Mordor ul');
   $('<div id="mount-doom"></div>').appendTo('#Mordor');
};

//Part 11
var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
   $('<div id="gollum"></div>').appendTo('#Mordor');
   $('#the-ring').detach().appendTo('#gollum');
   $('#gollum').detach().appendTo('#mount-doom');
};

//Part 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#gollum, #the-ring').detach();
   $('.hobbit').detach().appendTo('#The_Shire .hobbits');
};
