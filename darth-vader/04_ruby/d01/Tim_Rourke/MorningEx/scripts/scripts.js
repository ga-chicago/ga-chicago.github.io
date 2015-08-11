var instruments = ['trumpet', 'drums', 'french horn', 'triangle', 'cowbell'];

var smells = ['new car', 'allen', 'fear', 'brake fluid', 'clown'];

var faceparts = ['eyebrows', 'chin', 'ear', 'nose', 'turkeyneck'];

instruments.pop();

smells.pop();

faceparts.pop();

instruments.push('kazoo');

smells.push('CTA');

faceparts.push('foodstain');

for (var i in instruments) {
	console.log(instruments[i]);
}

for (var s in smells) {
	console.log(smells[s]);
}

for (var f in faceparts) {
	console.log(faceparts[f]);	
}

$(document).on('ready', function() {

	var $articles = $('article');

	var $lists = [
		$('<ul></ul>'),
		$('<ul></ul>'),
		$('<ul></ul>')
	];

	for (var i in instruments) {
		$lists[0].append( $('<li>' + instruments[i] + '</li>') );
	}

	for (var s in smells) {
		$lists[1].append( $('<li>' + smells[s] + '</li>') );
	}

	for (var f in faceparts) {
		$lists[2].append( $('<li>' + faceparts[f] + '</li>') );
	}

	$($articles[0]).append($lists[0]);
	$($articles[1]).append($lists[1]);
	$($articles[2]).append($lists[2]);

	for (var j = 0; j < $articles.length; j++) {
		$lists[j].appendTo( $($articles[j]) );
	}

});
