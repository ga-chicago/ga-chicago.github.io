$(document).on('ready', function() {

	var model = {
		eventName: 'Blackhawks Playoff 7',
		date: 'May 29th, 2015',
		location: 'United Center',
		description: 'Tickets start at $250 and go up. Come win Lord Stanley\'s cup back!'
	};

	var eventString = $('#event').html();
	var eventTemplate = _.template(eventString);
	$('body').append(eventTemplate(model));

	var blogPost = {
		title: 'James is Cool',
		date: 'August 12, 2015',
		content: 'I like eels except as meals and the ways theys feels.',
		comments: 2
	};

	var blogString = $('#blogPost').html();
	var blogTemplate = _.template(blogString)(blogPost);
	$('body').append(blogTemplate);


});