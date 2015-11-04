var Andy = {
  name: 'Andrew Dushane',
  age: 35,
  awesomeness: 100,
  goHome: function() {
    console.log('Get on the Green Line toward Harlem.');
    console.log('Get off at Harlem.');
    console.log('Take the 90 North.');
  },
  hometown: 'Ann Arbor',
  residence: 'Orlando, FL',
  married: true,
  family: {
    wife: 'Gladys',
    son1: 'Lucas',
    son2: 'David',
    daughter: 'Isabella'
  },
  inChicago: true,
  liveFreeorDie: function() {
    while(true) {
      console.log(breathe);
    }
  },
  changeName: function(newName) {
    if(typeof(newName) == 'string') {
      this.name = newName;
      return 'Name has been changed to ' + newName;
    } else {
      return 'That name is not a valid string.';
    }
  }
}
Andy.quirk = function( food ) {
  return food + ' is better with hot sauce.';
}
Andy.contact = function( contactMethod ) {
  if( contactMethod != 'text' ) {
    return 'Just text me bro.';
  }
  else return 'Ok got it.';
}
console.log(Andy.changeName('You know my name.'));
Andy.tellAboutMe = function () {
  return 'My name is ' + this.name + '. I am ' + this.age + " years old. I'm from " + this.hometown + '. My level of awesomenewss is ' + this.awesomeness + '.';
}
console.log(Andy.tellAboutMe());

var jonSnow = {
  name: 'Jon Snow',
  parentage: 'unknown',
  fan_theories: 'many',
  has_cool_sword: true,
  king_in_the_north: false,
  job: "Night's Watch",
  position: 'Lord Commander',
  alive: 'maybe',
  pet: {
    species: 'direwolf',
    name: 'Ghost'
  },
  tellMyStory: function() {
    return 'My name is ' + this.name + '. My parents are ' + this.parentage + '. There are ' + this.fan_theories + ' fan theories about my origins. I work at the ' + this.job + ", I'm the " + this.position + '. I have a ' + this.pet.species + ' named ' + this.pet.name + '.';
  }
}
console.log(jonSnow.tellMyStory());
