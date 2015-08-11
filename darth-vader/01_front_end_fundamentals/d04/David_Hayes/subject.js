// The subject object represents a deck of cards which party guests will draw from
// and add to.
// The attributes of the subject object are:
//
// 	- name (something about a party game, since that what's being modeled)
//	- description (a description of this game)
//	- topics (the stack, which is a rotating collection of "what's talked about")
//
// The methods of the subject object
//
// - addTopic: This places a topic on the back of the stack
// - removeTopic: This removes a topic from the top of the stack, like drawing a
//   cards
// - toString: This function reveals the name and description (which are currently
// initialized with the object)

var subject = {

	// properties
	name: "Topics: The Party Game",
	description: "This is a conversation starter. Discuss a suggested topic. Then suggest the next one.!",
	topics: [],
	// abilities
	addTopic: function(topic) {
		// add to the back of the stack
		return this.topics.push(topic);
	},
	removeTopic: function() {
		return this.topics.shift();
	},
	toString: function() {
		return "This subject is " + this.name + " and it is about " + this.description;
	}

};
