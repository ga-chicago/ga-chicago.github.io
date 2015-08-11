console.log("Linked.");
$( window ).load(function() {
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

//Part 1
var makeMiddleEarth = function() {
  var section = '<section id="middle-earth"></section>';
  $(body).append(section);

  for(i in lands){
    $('#middle-earth').append('<article class="'+lands[i]+'"><h1>'+lands[i]+'</h1></article>');
  }
};

//Part 2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   $('.Shire').append('<ul></ul>');
   for(i in hobbits){
     $('ul').append('<li class="hobbit">' + hobbits[i] + '</li>');
   }
};

//Part 3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   var theRing = $("<div id='the-ring' class='magic-imbued-jewelry'> </div>");
   var hobbitsClassArray = $('.hobbit');
    $(hobbitsClassArray[0]).append(theRing);
};

//Part 4
var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   $('.Rivendell').append('<aside><ul></ul></aside>');
    for(i in buddies){
        $('.Rivendell ul').append('<li class='+ buddies[i]+'>'+buddies[i]+'</li>');
    }
};

//Part 5
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $('.Strider').replaceWith('<li>Aragorn</li>');
};

//Part 6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $('.hobbit').detach().appendTo('.Rivendell');
};

//Part 7
var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   $('<div id="the-fellowship"><ul></ul></div>').appendTo(".Rivendell");
    var friends = $('.Rivendell aside ul li').detach();
   $(friends).each(function() {
     $(this).appendTo("#the-fellowship ul");
     alert($(this ).text() + " has joined the party");
    });
 };

//Part 8
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   $("#the-fellowship ul li").first().html("Gandalf the White");
   $("#the-fellowship ul li").first().css({"background-color":"white","border":"2px solid gray"});
};

//Part 9
var hornOfGondor = function () {
   alert("Horn of Gondor has been blown!!");
   $(".Boromir").detach();
};

//Part 10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   $(".Mordor").append("<ul></ul>");
   var myFavoriteHobbits = $('li:contains("Frodo"),li:contains("Sam")').remove();
   $('.Mordor').html(myFavoriteHobbits).wrapInner('<ul></ul>');
   $(".Mordor").append('<div id="mount-doom"></div>');
};

//Part 11
var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  $(".Mordor").append('<div id="gollum"></div>');
  $("#the-ring").detach().appendTo("#gollum");
  $("#gollum").detach().appendTo("#mount-doom");
};

//Part 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $("#gollum").detach();
   $(".hobbit").detach().appendTo(".Shire");
};
