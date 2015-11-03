typeof(prompt('canyou'));
var usersAge = promt('how old');
console.log(usersAge);
var sanitizedUsersAge = parseInt(usersAge);
console.log(sanitizedUsersAge);
typeof(sanitizedUsersAge);
"james" * "jim";

var pi = 3.14
parseInt(pi);
parseFloat(pi);

var pets =
['dog','cat','bird'];
pets.push('snakes');
pets.length;
pets.pop();
pets.shift();

pets.push(prompt('what kind of pet do you want'));

function getUsersInput(questionToAsk) {
  return prompt(questionToAsk);
}
getUsersInput('Did you sleep last night?');
pets.push(getUsersInput('what pets do u want'));

if (pets) {
  console.log('aww yea');
}

if (1 == 0) {
  console.log('stop it');
} else {
  console.log('haxor');
}

switch (getUsersInput('inputsomething maybelike 42')) {
  case "42":
  console.log('youknowasnwer..');
  break;
  case "fwoosh":
  console.log('ohsnap');
  break;
  default:
  console.log('sorry you are not special');
}

var tom = {
  name: 'tom',
  age: 38,
  hobby: 'kick some @$$',
  job: 'sleep all day'
};

console.log(tom);
tom["job"];
console.log(tom['job']);

pets.reverse;
tom.hobby;
tom['hobby'];

tom['34234234234']
tom['34234234234'] = 'robots';
tom[34234234234];

pets[5] = 'godzilla';
console.log(pets);
pets.length
pets[30] = 'meowingting';
console.log(pets);
pets[20];
pets[30];


16 / 7;

function watson(num1, num2) {
  var wholeNumber = parseInt(num1 / num2);
  console.log('wholeNumber: ' + wholeNumber);
  var remainder = num1 % num2;
  console.log('remainder: ' + remainder);
  return wholeNumber + ' has' + remainder;
}

var riders = ['marty','ruth','paul','jason','jan'];
console.log(riders);

for (var i = 0; some expression to validate; i++) {

}

for (var i = 0; riders.length > 0; i++) {
  if (i % 2) {
    console.log('even number no one gets off');
  } else {
    console.log('odd number, whos getting off');
    console.log(riders.pop());
  }
}

for (var cycles = 0; riders.length > 0; cycles++) {
  console.log('we are on cycle #:' + cycles);
  if (cycles % 2 == 1) {
    console.log('odd!');
    console.log(riders.pop());
  } else {
    console.log('even');
  }
}

for (var x in [1,2,3,4,5]) {
  console.log(x);
}

for (var x in [1,2,3,4,5]) {
  console.log('Index: ' + x + 'and value is: ');
}

var pizza = ['mushroom', 'goat', 'salad'];
for (var type in pizza) {
  console.log(pizza[type]);
}
