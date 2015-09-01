/*
12. The Functions Strike Back!

It is a dark time for the Ruby Rebellion.
Javascript is on the rise.
While you have used Backbone to create models...
Create two functions that mimics model.get and model.set for an object.
These functions will be abilities on an object called model.
*/

var model = {
	tacos: 8,
	grossThingsInPocket: ['sister', 'backpack dust', 'THE crabs'],
	get: function(propName) {
		return this[propName];
	},
	set: function(propName, value) {
		this[propName] = value;
		return this[propName];
	}
}