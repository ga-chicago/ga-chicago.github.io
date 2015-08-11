$(document).ready(function() {

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



makeMiddleEarth();
makeHobbits();
keepItSecretKeepItSafe();
makeBuddies();
beautifulStranger();
leaveTheShire();
forgeTheFellowShip();
hornOfGondor();
itsDangerousToGoAlone();




});//end of Jquery
var lands = ['TheShire', 'Rivendell', 'Mordor'];
var makeMiddleEarth = function() {
  //create a section tag with id middle-earth
  $("<section id='middle-earth'></section>").appendTo( $("body"));
  //add each land as an article tag
  for (var index in lands) {

  $("<article id='" + lands[index] + "'></article>").appendTo($("#middle-earth"));


    $("<h1>" + lands[index] + "</h1>").appendTo($("#" + lands[index]));

}

}
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];
var makeHobbits = function () {
  // display an `unordered list` of hobbits in the shire

  $("<ul id='hobbits'></ul>").appendTo($("#TheShire"));
  for (var i in hobbits) {
    $("<li class='hobbit character'>" + hobbits[i] + "</li>").appendTo($('#hobbits'));
  }

      // (which is the second article tag on the page)
       // give each hobbit a class of `hobbit`
};

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   $("<div id='the-ring' class='magic-imbued-jewelry'></div>").appendTo($('.hobbit').eq(0));
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
var makeBuddies = function () {
   // create an `aside` tag
   $("<aside></aside>").appendTo($('#Rivendell'));
   for (var index in buddies) {
     $("<ul><li class='buds character'>" + buddies[index] + "</li></ul>").appendTo($('aside'));

   }
};

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $(".buds").eq(3).text("Aragorn");
};


var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $('.hobbit').appendTo($('#Rivendell'));
};

var forgeTheFellowShip = function () {
  var characters = $('.character');
  console.dir(characters);
   //create a new div called `'the-fellowship'` within `rivendell`
  $("<div class='the-fellowship'></div>").appendTo($('#Rivendell'));
  for (var i = 0; i < characters.length; i++) {

      alert($(characters[i]).text() + "They joined the Partayy");
      $(characters[i]).appendTo($('.the-fellowship'));

}}
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
//
var hornOfGondor = function () {
    alert("the horn of Gondor has been blown!");

   // pop up an alert that the horn of gondor has been blown
   $( ".buds" ).remove( ":contains('Boromir')" );
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
};

var itsDangerousToGoAlone = function (){
  var hobbies = $('.hobbit');
  for (var i = 0; i < hobbies.length; i++) {

    if ($(hobbies[i]).text() === 'Frodo Baggins' || hobbies[i] === 'Sam') {

      $(hobbies[i]).appendTo($('#Mordor'));
    }
  }
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};


+var weWantsIt = function () {
+   // Create a div with an id of `'gollum'` and add it to Mordor
+   // Remove `the ring` from `Frodo` and give it to `Gollum`
+   // Move Gollum into Mount Doom
+   $("#Mordor").append('<div id="gollum"></div>')
+   $("#0 *").detach().appendTo("#gollum");
+   $("#gollum *").detach().appendTo("#mount-doom");
+};
+
+// Part 12
+var thereAndBackAgain = function () {
+   // remove `Gollum` and `the Ring` from the document
+   // Move all the `hobbits` back to `the shire`
+   $("#gollum *").detach()
+   $(".hobbit").detach().appendTo("#The_Shire ul");
+};
