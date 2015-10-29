//OBJECTS use curly braces.

var anna = {
  eyeColor: 'grey',
  hairColor: 'brown',
  42: 'secret'
};

console.log(anna);
//indices need to be accessed as strings. eg anna['eyeColor']. can also use anna.eyeColor.

for (var prop in anna) {
  console.log('The value for ' + prop + 'is ' + anna[prop]);
}
//stop forgetting the plus
