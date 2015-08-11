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


// Original code for makeMiddleEarth
// function makeMiddleEarth() {
//   $(body).append('<section id="middle-earth"><article id="the-shire"><h1>The Shire</h1></article><article id="rivendell"><h1>Rivendell</h1></article><article id="mordor"><h1>Mordor</h1></article></section>');
// }

var makeMiddleEarth = function () {
  // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
  $('body').append(function(){
    $('body').append('<section id="middle-earth"></section>');
    for (var item in lands) {
      $('section').append('<article class="' + lands[item] + '"> <h1>' + lands[item] + '</h1> </article>');
    }
  });
  return
}

var makeHobbits = function () {
  // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
  $('body').append(function(){
    $('article:first').append('<ul></ul>');
    for (var item in hobbits) {
      $('ul').append('<li class="hobbit">' + hobbits[item] + '</li>');
    }
  });
  return
}


var keepItSecretKeepItSafe = function () {
  // create a div with an id of `'the-ring'`
  // give the div a class of `'magic-imbued-jewelry'`
  // add the ring as a child of `Frodo`
   $('.The li').first().append('<div id="the-ring" class="magic-imbued-jewelry"></div>');
   return
};

var makeBuddies = function () {
  // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   var temp = $('.Rivendell');
   $(temp).append(function() {
      $(temp).append('<aside></aside>');
      $(temp).find('aside').append('<ul></ul>');
      for (var item in buddies) {
        $('aside ul').append('<li>' + buddies[item] + '</li>');
      }
});
return
}

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $('ul li:contains(Strider)').text('Aragorn');
   return
};

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   $('.hobbit').appendTo('.Rivendell ul');
   return
};

var forgeTheFellowShip = function () {
  // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   $('.Rivendell').append('<div class="the-fellowship"></div>');
   var movingList = $('.Rivendell aside').find('li');
   for (var item in movingList) {
     $('li').appendTo('.the-fellowship');
   }
     alert(movingList + " has joined the party");
     return
};

var theBalrog = function () {
  // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   $('li:contains("Gandalf")').text("Gandalf the White").css({border: "3px solid grey", "background-color": "white"})
   return
};

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert("(sound of horn of gondor) Boromir's been killed by the Uruk-hai!");
   $('li:contains("Boromir")').remove();
   return
};

var itsDangerousToGoAlone = function () {
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   var traveling = $('li:contains("Frodo"),li:contains("Sam")').remove();
   $('.Mordor').html(traveling).wrapInner('<ul></ul>');
   $('.Mordor').append('<div id="mount-doom"></div>');
   return
};

var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
   $('.Mordor').append('<div id="gollum"></div>');
   $('#the-ring').appendTo('#gollum');
   $('#gollum').appendTo('#mount-doom');
   return
};

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#gollum').remove();
   $('.hobbit').appendTo('.Shire').find('ul');
   return
};

$(window).on('load', function(){

  $(document).ready(function(){
    makeMiddleEarth();
    console.log("makeMiddleEarth")
    makeHobbits();
    console.log("makeHobbits")
    keepItSecretKeepItSafe();
    console.log("keepItSecretKeepItSafe");
    makeBuddies();
    console.log("makeBuddies");
    beautifulStranger();
    console.log("beautifulStranger");
    leaveTheShire();
    console.log("leaveTheShire");
    forgeTheFellowShip();
    console.log("forgeTheFellowShip");
    theBalrog();
    console.log("theBalrog");
    hornOfGondor();
    console.log("hornOfGondor");
    itsDangerousToGoAlone();
    console.log("itsDangerousToGoAlone");
    weWantsIt();
    console.log("weWantsIt");
    thereAndBackAgain();
    console.log("thereAndBackAgain");
    return console.log("complete");
  });
  return console.log("complete complete");
});
