/*
12. The Functions Strike Back!

It is a dark time for the Ruby Rebellion.
Javascript is on the rise.
While you have used Backbone to create models...
Create two functions that mimics model.get and model.set for an object.
These functions will be abilities on an object called model.
*/

var Model = function() {
	this.data = null;
	this.set = function(data) {
		this.data = data
	}
	this.get = function() {
		return this.data
	}
}

var model = new Model();

model.set( { name: 'Matt', occupation: 'Developer', favorite_color: 'green' } );
var my_name = model.get().name;
console.log(my_name);