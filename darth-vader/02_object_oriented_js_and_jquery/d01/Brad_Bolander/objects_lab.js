// PART 1
// Object that allows for addition and removal of soccer teams
var subject = {

	// properties
	name: "Soccer Teams",
	description: "A list of soccer teams",
	topics: [],
	// Add topic
	addTopic: function(topic) {
	 this.topics.push(topic);
   return topic;
	},

  // Remove topic
	removeTopic: function(topic) {
    this.topics.splice(topic, 1);
    return topic;
	},

  // Print sentence
	toString: function() {
		return "This subject is " + this.name + " and it is about " + this.description;
	}

};

// PART 2
var funThings = {
    guitar: "SOLO!",
    hockey: "slapshot",
    skiing: "downhill",
    soccer: "futbol",
    longboarding: "road rash",
    skateboarding: "kickflip",
    coding: "click click click",
    eating: "mmmmm",
    dancing: "embarassment",
    lacrosse: "Im bad"

}

function loopy(obj) {
  for (var thing in funThings) {
    console.log(thing + " " + funThings[thing]);
  }
  return true;
}

// PART 3
function keys(obj1, obj2){
  console.log("Object 1: " + Object.keys(obj1));
  console.log("Object 2: " + Object.keys(obj2));
}
