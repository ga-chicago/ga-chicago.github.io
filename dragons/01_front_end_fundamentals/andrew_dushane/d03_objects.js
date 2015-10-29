//objects
var me = {
  name: "Andy D",
  age: 35,
  eyeColor: 'Blue',
  carColor: 'Black',
  amazing: true
};

for( var prop in me ) {
  console.log(prop + ': ' + me[prop]);
};
