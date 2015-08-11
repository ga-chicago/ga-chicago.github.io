$(document).ready (function () {



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


// Function 1
///////////////////////
var makeMiddleEarth = function () {
  var section = '<section id="middle-earth"></section>';
  $(body).append(section);

  for (var index in lands) {
    $('#middle-earth').append('<article class="' +lands[index] + '"><h1>' + lands[index] + '</h1></article');
  }

};

makeMiddleEarth ();

// Function 2
//////////////////////
var makeHobbits = function () {
  $('.Shire').append('<ul></ul>');

  for (var index in hobbits) {
    $('ul').append('<li class="hobbit">' + hobbits[index] + '</li>')
  };

};

makeHobbits ();

// Function 3
//////////////////////
var keepItSecretKeepItSafe = function () {

  var hobbit= $('li')[0];
  $('li').eq(0).append('<div id="the-ring" class="magic-imbued-jewelry"></div>')

};

keepItSecretKeepItSafe ();

// Function 4
//////////////////////
var makeBuddies = function () {

  $('.Rivendell').append('<aside><ul></ul></aside>');

  for (var index in buddies) {
    $('.Rivendell ul').append('<li>' + buddies[index] + '</li>');
  };

};

makeBuddies ();

// Function 5
//////////////////////
var beautifulStranger = function () {

   $("li:contains('Strider')").html("Aragorn");
};

beautifulStranger ();

// Function 6
//////////////////////
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $('ul').eq(0).detach().appendTo('.Rivendell');
};

leaveTheShire ();

// Function 7
//////////////////////
var forgeTheFellowShip = function () {

   $(".Rivendell").append("<div>the-fellowship</div>")
   var lis = $('li');
   for (var index= 0; index < lis.length; index++) {
     $("div:contains('the-fellowship')").append((lis).eq(index));
     console.log($(lis).eq(index).html() + " has joined the fellowship.");
   }
// this makes me feel unclean. I want to learn nested for loops.
};

forgeTheFellowShip ();

// Function 8
//////////////////////
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the
   // background 'white', add a grey border
   $("li:contains('Gandalf')").html("Gandalf the White");
   $("li:contains('Gandalf')").css("background-color", "white");
   $("li:contains('Gandalf')").css("border-color", "grey")
   $("li:contains('Gandalf')").css("border-width", "1px")
// THere has to be an easier way this makes me feel dirty.

};

theBalrog ();

// Function 9
//////////////////////
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship


alert("The hord of gondor has been blown");
$("li:contains('Boromir')").remove();

};

hornOfGondor ();

// Function 10
//////////////////////
var itsDangerousToGoAlone = function (){

  $("li:contains('Sam')").appendTo('.Mordor');
  $("li:contains('Frodo')").appendTo('.Mordor');
  $('.Mordor').append("<div id='mount-doom'></div>");

   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};

itsDangerousToGoAlone ();

// Function 11
//////////////////////
var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom

   $('.Mordor').append("<div id='gollum'></div>");
   $('#the-ring').appendTo('#gollum');
   $('#gollum').appendTo('#mount-doom');
};

weWantsIt ();

// Function 12
//////////////////////
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#gollum').remove();
   $('.hobbit').appendTo('.Shire');

};

thereAndBackAgain ();










});
