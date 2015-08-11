/*
What is the purpose of a loop?
The purpose of a loop is to traverse every value of an opbject or an array so you can process the data and do something wich each one!  It can be used for things like reading user accounts, a bunch of prices from a prices table, or other operation where you have to do the same thing to a series of data.
*/

var strings = ["green", "blue", "pink", "yellow", "brown", "purple", "grey"];
var numbers = [5, 34, 587484773, 5.44e+12, 0];
var mixed = ["insane", 5743, "clown", 229, "posse", 43432];


//###########PLAIN FOR LOOPS################
for (i=0; i < strings.length; i++) {
  console.log(strings[i]);
}

for (j=0; j < numbers.length; j++) {
  console.log(numbers[j]);
}

for (k=0; k < mixed.length; k++) {
  console.log(mixed[k]);
}

//##########FOR-IN LOOPS###################
for (var string in strings) {
  console.log(strings[string]);
}

for (var num in numbers) {
  console.log(numbers[num]);
}

for (var item in mixed) {
  console.log(mixed[item]);
}
