Subject: Mid-Week Recap
Comfortable: 3
Complete: 5
Comments: I thought the Carousel and Elementary School were a bit tricky. It would be great to go over those two as a class.


var name = "Jan";
typeof "Jan";

var friends = ['Jim', 'Ann', 'Pai', 'Jack', 'Molly', 'Han'];
var friendsTotal = (2 * friends.length);
var jumper = " "

for (var count = 0; count < friendsTotal; count++ ) {
  console.log('the incrementor is: ' + count);
  if (count % 2 != 0) {
  jumper = friends.pop();
  console.log('the person who left is ' + jumper);
}
  console.log(friends);
}

var me = {
  eyeColor: 'brown',
  hairColor: 'black',
  hobby: 'running',
  faveDrink: 'beer',
  favePlace: 'tokyo',
  pets: 'cats',
  bodyType: 'slender',
  homeType: 'loft',
  married: 'yes',
  kids: 'no'
};

for(var type in me){
  console.log(type);
  console.log(me[type]);
}

function school(number, groups) {
  var remainder = (number%groups);
  var result = (number-remainder)/groups;

  return 'The result of ' + number +' students ' + 'divided by ' + groups + ' groups' + ' equals ' + result + ' with a remainder of ' + remainder
}

console.log(school(37, 5));
