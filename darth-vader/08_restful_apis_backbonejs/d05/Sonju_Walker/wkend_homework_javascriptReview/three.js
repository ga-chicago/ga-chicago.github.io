3. Objects; Objects Everywhere

Create an Object that represents a laptop.
Give it 3-5 attributes.
Give it one ability that tells the world about itself (similar to a to_s in Ruby)


var laptop = {
      type: 'macbook pro',
      size: '13 inches',
      year: '2014',
      description: function(){
        console.log('This laptop is a ' + this.year+ " " + this.type + " " + 'and is ' + this.size +'.');
      }
  };
    laptop.description();


// var laptop = ['screen', 'keypad', 'microphone'];
// console.log('My laptop has a' + " " + laptop[0] + ',' + " " + laptop[1] + " " + 'and' + " " + laptop[2] + ".");
