// Objects

var simran = {
  eyeColour: 'black',
  hairColour: 'black',
  42: 'secret'
};

simran['eyeColour'];

for (var prop in simran) {
  console.log (simran[prop]);
}
