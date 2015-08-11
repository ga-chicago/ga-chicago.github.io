var age;

age = prompt('What is your current age?');

if (age < 16) {
  alert("get away, you creeepy youngin'!");
} else if ( age >= 16 && age < 21 ) {
  alert("you're almost ready, come back soon!");
} else if ( age >= 21 ) {
  alert("well come on in, you drunkard coot!");
} else if ( isNaN(age) ) {
  alert("that ain't no age, ya fooptoop!");
}
