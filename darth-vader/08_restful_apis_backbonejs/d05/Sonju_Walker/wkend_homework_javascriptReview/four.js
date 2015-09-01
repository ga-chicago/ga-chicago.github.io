4. Objects... again

Using the Object you created for #3....
Research the Object method that lists all of the keys in an Object. Use it to create an array.
Loop through this array using a for (not a for-in) loop.
console.log the keys.

// ???????
var arr = [];

var laptop = {
      type: 'macbook pro',
      size: '13 inches',
      year: '2014',
      description: function(){
        console.log('This laptop is a ' + this.year+ " " + this.type + " " + 'and is ' + this.size +'.');
      }
  };
