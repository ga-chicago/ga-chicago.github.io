//Objects

var paul={
  eyeColor: 'blue',
  hairColor: 'brown',
  42:'secret'
};

for (var prop in paul){
  console.log('The value for',prop,'is',paul[prop]);
}

arr=['jack','paul','john'];
