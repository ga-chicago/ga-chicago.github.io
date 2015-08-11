

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

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
   var htmlstring ="<section id='middle-earth'></section>";
   $('body').html(htmlstring);
   htmlstring = "";
   for (var land in lands) {
     var myID = lands[land];
     htmlstring = htmlstring + "<article><h1>" +
     lands[land] + "</h1></article>";
   }
   $('#middle-earth').append(htmlstring);


};

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   var htmlstring = "<ul>";
   for (var hobbit in hobbits) {
     htmlstring = htmlstring + "<li class='hobbit'>" +
        hobbits[hobbit] + "</li>";
   }
   htmlstring = htmlstring + "</ul>";
   $('article:contains("The Shire")').append(htmlstring);
};

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   var htmlstring = "<div id='the-ring' class='magic-imbued-jewelry'></div>";
   $("li:contains('Frodo')").append(htmlstring);
};

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   var htmlstring = "<aside><ul>"
   for (var buddy in buddies) {
     htmlstring = htmlstring + "<li>" + buddies[buddy] + "</li>";
   }
   htmlstring = htmlstring + "</ul></aside>";
   $("article:contains('Rivendell')").append(htmlstring);
};

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $("li:contains('Strider')").replaceWith("<li>Aragorn</li>");
};

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   var htmlstring = $('.hobbit').parents().html();
     $("article:contains('Rivendell')").append(htmlstring);
   $("article:contains('The Shire') > ul").empty();
};

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   $("article:contains('Rivendell')").append("<div id='the-fellowship'></div>");
   $("article:contains('Rivendell')").find("li").each(function() {
  // figure out if this fellowship member is a hobbit
    if ($(this).hasClass("hobbit")) {
      var htmlstring = "<li class='hobbit'>" + $(this).html() + "</li>";
    } else {
     var htmlstring = "<li>" + $(this).html() + "</li>";
    };
    $('#the-fellowship').append(htmlstring);
    alert( $(this).text() + " has joined your party");
    $(this).remove();
   });

};

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   $("li:contains('Gandalf')").replaceWith("<li style='width: 145px; background-color:"
   + " white; border-radius: 10px; border: solid 3px grey;'"
   + ">Gandalf the White</li>");
};

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert("The horn of Gondor has been blown");
   $("li:contains('Boromir')").remove();

};

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   var htmlstring;
   htmlstring = $('li:contains("Frodo")').get(0);
   $("li:contains('Frodo')").remove();
   $("article:contains('Mordor')").append(htmlstring);
   htmlstring = $('li:contains("Sam")').get(0);
   $("li:contains('Sam')").remove();
   $("article:contains('Mordor')").append(htmlstring);
   $("article:contains('Mordor')").append("<div id='mount-doom'</div>");
};

var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  $("article:contains('Mordor')").append("<div id='gollum'></div>");
  $("#gollum").append($('#the-ring'));
  $(".hobbit > div#the-ring").remove();
};

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire
  $("#gollum").remove();
  var savHob = $('.hobbit').clone();
  $('.hobbit').remove();
  $("article:contains('The Shire')").append(savHob);
};

// makeMiddleEarth();
