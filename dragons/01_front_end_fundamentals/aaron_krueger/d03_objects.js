var friends = ['Sammy', 'Lanny', "Roqisha"];
var aaron = {
  hair: 'short',
  eyeColour: 'brown',
  numOfLegs: 3,
  friends: ['chow', 'mein', 'bing bing']
}

for (var prop in aaron){
  console.log(aaron[prop]);
}


aaron['hair'];
aaron['friends'];

var arr = ['Scurvy Steve', 'Scallywag Sally', 'Salty Sorin'];
