// key : value pair exercise
var james = {
  eyeColor: 'blue',
  hairColor: 'brown',
  42: 'secret'
};

for (var prop in james) {
  console.log(james[prop]);
  console.log(prop);
}
