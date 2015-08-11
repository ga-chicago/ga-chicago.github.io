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

// var lands = ['The Shire', 'Rivendell', 'Mordor'];
// var body = document.body;

var makeMiddleEarth = function() {
	var lands = ['<article><h1>The Shire</h1></article>', 
	'<article><h1>Rivendell</h1></article>',
	'<article><h1>Modor</h1></article>'
	]; 
	
	$('.overlay').append('<section id="middle-earth">');
	 

	for (land in lands) {
		$('#middle-earth').append(lands[land]);
	}
}

makeMiddleEarth();

var makeHobbits = function () {
	var shire = $('article').eq(0);
	for (hobbit in hobbits) {
		if (hobbit === 0) {
			$(shire).append('<ul>');
			$(shire).append('<li>' + hobbits[hobbit] + '</li>');	
		} else if (hobbit === hobbits.length) {
			$(shire).append('<li>' + hobbits[hobbit] + '</li>');
			$(shire).append('</ul>'); 	
		} else {
			$(shire).append('<li>' + hobbits[hobbit] + '</li>');
		}
	}


} 

makeHobbits(); 

var keepItSecretKeepItSafe = function () {
	$('li:contains("Frodo")').append('<div class="magic-imbued-jewelry" id="the-ring"></div>'); 
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
	$('article:contains("Rivendell")').append('<aside></aside>');
	for (buddy in buddies) {
		if (buddy === 0) {
			$('aside').append('<ul>');
			$('aside').append('<li>' + buddies[buddy] + '</li>');	
		} else if (buddy === buddies.length) {
			$('aside').append('<li>' + buddies[buddy] + '</li>');
			$('aside').append('</ul>'); 	
		} else {
			$('aside').append('<li>' + buddies[buddy] + '</li>');
		}
	}

   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
};
makeBuddies();

var beautifulStranger = function () {
   var strider = $('li:contains("Strider")').replaceWith("<li>Aragorn</li>");
};

beautifulStranger();

var leaveTheShire = function () {
	var move = $('article').eq(1); 
  	$('article').eq(0).children('li').appendTo(move); 
   // assemble the `hobbits` and move them to `rivendell`
};

leaveTheShire();

var forgeTheFellowShip = function () {
	var rivendell = $('article').eq(1); 
	var chars = $('article').eq(1).children('li'); 
	$(rivendell).append('<div id="the-fellowship"> the-fellowship </div>');
	$.each(chars, function(idx){
			$(this).appendTo('#the-fellowship');
	});	
}
   
forgeTheFellowShip();

var theBalrog = function () {
	$('li:contains("Gand")').text("Gandalf the White")
	.css({"backgroundColor": "white", "border": "2px solid grey"});
};
theBalrog();

var hornOfGondor = function () {
	alert("The horn of gondor has been blown!!");
	$('li:contains("Boromir")').remove();
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
};
hornOfGondor();

var itsDangerousToGoAlone = function (){
   $('li:contains("Frodo")').appendTo('article:contains("Modor")');
   $('li:contains("Sam")').appendTo('article:contains("Modor")');
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};

itsDangerousToGoAlone();

 var weWantsIt = function () {
 	$('article').eq(2).append('<div id="gollum"></div>');
 	$('#the-ring').appendTo('#gollum');
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
};
weWantsIt();

var thereAndBackAgain = function () {
	var article = $('article').eq(0);
	var chars = $('article').eq(1).children('aside').children('li');
   $('#gollum').remove();
   $('#the-ring').remove();

   $.each(chars, function(hobbits) {
   	$(this).appendTo(article);
   })
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};

thereAndBackAgain();