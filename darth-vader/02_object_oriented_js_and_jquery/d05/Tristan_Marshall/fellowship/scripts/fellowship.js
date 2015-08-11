$(document).ready(function(){

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

var lands = ['TheShire', 'Rivendell', 'Mordor'];
var body = document.body;




// PART 1
var makeMiddleEarth = function(){
  $("<section id='middle-earth'></section>").appendTo( $("body") );
  for (var index in lands) {
    $("<article id='" + lands[index] + "'></article>").appendTo( $("#middle-earth") );
    $("<h1>" + lands[index] + "</h1>").appendTo( $("#" + lands[index]) );
  }
};
makeMiddleEarth();

// END PART 1

// PART 2

var makeHobbits = function(){
  $("<ul id='Hobbits'></ul>").appendTo( $("#TheShire"));
  for(var index in hobbits) {
    $("<li class='hob'>" + hobbits[index] + "</li>").appendTo("#Hobbits");
  }
};
makeHobbits();

// END PART 2

// PART 3

var keepItSecretKeepItSafe = function(){
  $("<div id='the-ring' class='magic-imbued-jewelry'></div>").appendTo($('.hob').eq(0));
}
keepItSecretKeepItSafe();

// END PART 3

// PART 4

var makeBuddies = function(){
  $("<aside class='side'></aside>").appendTo( $('body') );
  $("<ul class='buds'></ul>").appendTo( $('.side'));
  for (var index in buddies){
    $("<li class='list'>" + buddies[index] + "</li>").appendTo( $('.buds'));
    $('.side').appendTo( $('#Rivendell'));
  }
}
makeBuddies();

// END PART 4

// PART 5

var beautifulStranger = function(){
  $('.list').eq(3).text('Aragorn');
};
beautifulStranger();

// END PART 5

// PART 6

var leaveTheShire = function(){
  $("#Hobbits").appendTo( $('#Rivendell'));
}
leaveTheShire();

// END PART 6

// part 7

var forgeTheFellowShip = function(){
  $("<div class='the-fellowship'></div>").appendTo($('#Rivendell'));
  for (var index in buddies){
    $('.buds').appendTo( $('.the-fellowship'));
    for(var index in hobbits) {
      $('#Hobbits').appendTo(".the-fellowship");
    } return window.alert("All of the Hobbits and Buddies have joined the Fellowship!");
  }
};

forgeTheFellowShip();

// END OF PART 7

//PART 8
var theBalrog = function(){
  $('.the-fellowship li').eq(0).text('Gandolf the White').css("background-color", "white").css({"border-color": "#696969", "border-weight":"1px", "border-style":"solid", "color":"black"});
};
theBalrog();

// END PART 8

//PART 9

var hornOfGondor = function(){
  $('.the-fellowship li').eq(4).remove();
  return window.alert("the horn of Gondor has been blown!");
}
hornOfGondor();

// END PART 9

// PART 10

var itsDangerousToGoAlone = function(){
  $("<div id='mount-doom'></div>").appendTo($('#Mordor'));
  $('.the-fellowship li').eq(4).appendTo($('#Mordor'));
  $('.the-fellowship li').eq(4).appendTo($('#Mordor'));
}
itsDangerousToGoAlone();

// END PART 10

// PART 11

var weWantsIt = function(){
  $("<div id='gollum'></div>").appendTo($('#Mordor'));
  $('#the-ring').appendTo($('#gollum'));
  $('#gollum').appendTo($('#mount-doom'));
}
weWantsIt();

//END PART 11

// PART 12

var thereAndBackAgain = function(){
  $('#gollum').remove();
  $('#the-ring').remove();
  $('#Mordor li').eq(0).appendTo($('#TheShire'));
  $('#Mordor li').eq(0).appendTo($('#TheShire'));
  $('.the-fellowship li').eq(4).appendTo($('#TheShire'));
  $('.the-fellowship li').eq(4).appendTo($('#TheShire'));
}
thereAndBackAgain();

});

// END PART 12
