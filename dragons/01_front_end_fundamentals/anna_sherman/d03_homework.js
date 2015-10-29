function detectType(x) {
  var x = typeof(x);
  console.log(x);
}

var carousel = ['Amy', 'Bob', 'Charlie', 'Daniel', 'Ernie'];
for (var i = 0; carousel[0] != null; i+=1) {
    if (i%2 !== 0){
      console.log (carousel + '...still on the carousel. It is round ' + i + '.');
      carousel.pop();
  }
  if (carousel[0] == null){
    console.log (carousel + 'Carnival is over after ' + parseInt(i+1) + ' rounds');
  }
}

var anna = {
  name: "anna",
  hairColor: 'brown',
  vegan: true,
  jackedStatus: true,
  city: 'chicago',
  age: 21,
  married: false,
  heightInInches: 66,
  broStatus: false,
  friends: ['Phoebe', 'Ross', 'Chandler', 'Monica', 'Rachel', 'Joey']
}

for (var chara in anna){
  console.log(chara + ' = ' + anna[chara]);
}

function divide(a,b) {
  var answer = parseInt(a/b);
  var remainder = a%b;
  console.log("Your result is " + answer + " with a remainder of " + remainder + ". What a boss!");
}

divide(673,11);
