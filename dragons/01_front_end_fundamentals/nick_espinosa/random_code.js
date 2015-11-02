function cakeRecipe(eggs, flour, flavor) {
return "yum, we made a " + flavor + " cake. It was great. Thanks for the help, " + name;
}
var name = 'Jim Haff';
cakeRecipe(3, 'wheat', 'strawberry');

function reNameGlobal(newName) {
name = newName;
}
reNameGlobal('adriana');
cakeRecipe(9, 'sugar', 'red velvet');

makeACake('chocolate');
function makeACake(arg) {
return arg;
}

var autoMake = "Ford";
var autoModel = "LTD";

function showAuto(year){
function autoInfo(){
var price = 124;
console.log("Auto is a " + year + " " + autoMake + " " + autoModel + ", it's price is " + price + "$");
}
autoInfo();
};
showAuto(1969);

function sayHello(words) {
return name + ' says ' + words;
}
var name = 'Cecelious';
sayHello('working on my night cheese');

function whatFav(a) {
  return petName + "\'s" + " favorite food is " + a;
}
var petName = 'marv';
whatFav('cheese');




var pets = ['Marv', 'Max','Dog'];
for (var i = 0; i < pets.length; i++) {
  pets[i]
}

for (var lastPlace in pets) {
  console.log(pets[lastPlace]);
}


var firstName = 'John'; // 1
var lastName = 'Dowd'; // 2
var age = 19; // 3
​
function displayPerson(fname, lname){ //4, 5
  var prefix = 'Mr'; // 6
  var fullName = null; // 6
​
  function getFullName(){ // 7
    var suffix = "Esq.";  // Everybody's a lawyer, eh.
    return  fullName = prefix + " " + fname + " " + lname + " " + suffix;
  };
​
  return getFullName();
};
​
function removeYears(){ // 8
  var minusYears = 10, age = 49;
  return age - minusYears;
};
​
console.log(displayPerson(firstName, lastName));
console.log(removeYears());
