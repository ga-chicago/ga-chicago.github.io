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

var lands = ['The_Shire', 'Rivendell', 'Mordor'];
var body = document.body;

// Part 1

// function makeMiddleEarth() {
//  $(body).append('<section id="middle-earth"><article id="the_shire"><h1>The Shire</h1></article><article id="rivendell"><h1>Rivendell</h1></article><article id="mordor"><h1>Mordor</h1></article></section>');
// }
// makeMiddleEarth();  THIS CODE WORKS TO BUT USED THE BOTTON For LOOP Code BELOW

// create a section tag with an id of `middle-earth`
// add each land as an `article` tag
// inside each `article` tag include an `h1` with the name of the land
// append `middle-earth` to your document `body`
var makeMiddleEarth = function() {
   $("<section id='middle-earth'></section>").appendTo( $("body") );
   for (var index in lands) {
     $("<article id='" + lands[index] + "'></article>").appendTo( $("#middle-earth") );

     $("<h1>" + lands[index] + "</h1>").appendTo( $("#" + lands[index]) );
   }
};
makeMiddleEarth(); // calling the function is required at the end of every function

// PART 2

   // display an `unordered list` of hobbits in the shire
  // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   var makeHobbits = function(){
      $("<ul id='Hobbits'></ul>").appendTo( $("#The_Shire"));
      for(var index in hobbits) {
        $("<li class='hobbit'>" + hobbits[index] + "</li>").appendTo( $("#Hobbits"));
      }
    };
   makeHobbits();

// PART 3

   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   var keepItSecretKeepItSafe = function() {
   $("<div id='the-ring' class='magic-imbued-jewelry'></div>").appendTo($(".hobbit").eq(0));
  }
  keepItSecretKeepItSafe();

// Part 4

    // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`

  var makeBuddies = function(){
 $("<aside class='side'></aside>").appendTo( $("#Rivendell"));
  for(var index in buddies) {
    $("<ul> <li class='rivBuddies'>" + buddies[index] + "</li></ul>").appendTo( $(".side"));
  }
};
  makeBuddies();


// Part 5
// change the `'Strider'` text to `'Aragorn'`

var beautifulStranger = function () {
  $("#Rivendell").children("aside").children("ul").find("li").eq(3).text("Aragon");
}
beautifulStranger();

// Part 6
// assemble the `hobbits` and move them to `rivendell`


var leaveTheShire = function () {
var hobbits = $("#Hobbits").detach()
$("#Rivendell").append(hobbits);
};
leaveTheShire();

//Part 7
// create a new div called `'the-fellowship'` within `rivendell`
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// after each character is added make an alert that they // have joined your party
var forgeTheFellowShip = function () {
var hobbits = $("#Hobbits").detach()
// var buddies = $(".rivBuddies").detach()
$("#Rivendell").append("<div id='the-fellowship'></div>");
$("#Hobbits").each(function(){
$(this).appendTo($("#the-fellowship"));
});
//$.each

};
forgeTheFellowShip.alert("They have joined your party!");

});
