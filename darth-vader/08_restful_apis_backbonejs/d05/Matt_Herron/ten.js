/*
10. Story Time!

Create a function that tells a story.
It should feel like mad-libs.
It should accept at least 5 arguments.
The return of this function should be a story.
You should use only string types.
*/

function tellStory(libs) {
	return 'There once was a ' + libs.noun + ' named Riley.  Riley was a ' + libs.adjective + ' person and loved to ' + libs.adverb + ' ' + libs.verb + ' in the forest ' + libs.preposition + ' people of a similar stature.  One day, Riley ' + libs.conjunction + ' Mary stopped during their trip in the forest and Riley exclaimed: "' + libs.interjection + '!!!  We need to run away!" and they ran and ran and ran until they reached the end of the story.'
}


var story = ( tellStory( { noun: 'car', adjective: 'feisty', verb: 'pollute', adverb: 'frantically', preposition: 'beside', conjunction: 'or', interjection: 'agads' } ) );
console.log(story);