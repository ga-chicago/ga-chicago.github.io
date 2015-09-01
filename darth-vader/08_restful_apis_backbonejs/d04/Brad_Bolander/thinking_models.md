## Collections
In my application I'm using parks in Chicago as my model. To build a list of parks,
I would probably make a collection called ChicagoParks. I believe the code would look like this:

var ChicagoParks = Backbone.Collection.extend({
model: parkModel
});
