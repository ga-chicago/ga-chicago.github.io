$(document).on('ready', function() {

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

  var $middleEarth = "";

  var makeMiddleEarth = function() {

    $middleEarth = $('<section id="middle-earth"></section>');

    for (land in lands) {
      $middleEarth.append( $('<article class="' + lands[land] + '"><h1>' + lands[land] + '</h1></article>') );
    }

    $('body').append($middleEarth);

  }
  makeMiddleEarth();

  var makeHobbits = function() {
    var $hobbitList = $('<ul class="hobbitList"></ul>');

    for (hobbit in hobbits) {

      $hobbitList.append('<li class="hobbit ' + hobbits[hobbit].split(' ')[0] + '">' + hobbits[hobbit] + '</li>');

    }

    $('.Shire').append($hobbitList);
  }
  makeHobbits();

  var keepItSecretKeepItSafe = function() {
    var $ring = $('<div id="the-ring" class="magic-imbued-jewelry"></div>');

    $('.Frodo').append($ring);
  }
  keepItSecretKeepItSafe();

  var makeBuddies = function() {
    $buddies = $('<aside></aside>');

    var $buddiesList = $('<ul></ul>');

    for (var buddy in buddies) {
      $buddiesList.append($('<li class="buddy ' + buddies[buddy].split(' ')[0] + '">' + buddies[buddy] + '</li>'));
    }

    $buddies.append($buddiesList);

    $('.Rivendell').append($buddies);
  }
  makeBuddies();

  var beautifulStranger = function() {
    $('.Strider').html('Aragorn').addClass('Aragorn');
  }
  beautifulStranger();

  var leaveTheShire = function() {
    $('.hobbitList').appendTo($('.Rivendell'));
  }
  leaveTheShire();

  var forgeTheFellowShip = function() {
    var $fellowship = $('<div class="the-fellowship"></div>');

    $fellowship.appendTo($('.Rivendell'));

    var $fellows = $('.hobbit');

    var $buddies = $('.buddy');

    for (var i = 0; i < buddies.length; i++) {
      $fellows.push($buddies[i]);
    }

    for (var j = 0; j < (buddies.length + hobbits.length); j++) {
        $fellowship.append($fellows[j]);
        alert($($fellows[j]).text() + ' has joined your party.');
    }
  }
  forgeTheFellowShip();

  var theBalrog = function() {
    $('.Gandalf').html('Gandalf the White').css({
      'background': 'white',
      'border': '1px solid grey'
    });
  }
  theBalrog();

  var hornOfGondor = function() {
    alert('LO! The Horn of Gondor has been blown!');
    $('.Boromir').remove();
  }
  hornOfGondor();

  var itsDangerousToGoAlone = function() {
    $('.Frodo').appendTo($('.Mordor'));
    $('.Sam').appendTo($('.Mordor'));
    $('<div id="mount-doom"></div>').appendTo($('.Mordor'));
  }
  itsDangerousToGoAlone();

  var weWantsIt = function() {
    $('<div id="gollum"></div>').appendTo($('.Mordor'));
    $('#the-ring').appendTo($('#gollum'));
    $('#gollum').appendTo($('#mount-doom'));
  }
  weWantsIt();

  var thereAndBackAgain = function() {
    $('#the-ring').remove();
    $('#gollum').remove();
    $('.hobbit').appendTo($('.Shire'));
  }
  thereAndBackAgain();

});
