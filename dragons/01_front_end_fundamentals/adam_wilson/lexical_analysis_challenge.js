var firstName = 'John'; // 1
var lastName = 'Dowd'; // 2
var age = 19; // 3
​
//call with displayPerson('john', 'smith')
//returns mr j s esq
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
// change value of age locally, return local age - 10
function removeYears(){ // 8
  var minusYears = 10, age = 49;
  return age - minusYears;
};
​
console.log(displayPerson(firstName, lastName)); // logs see above
console.log(removeYears()); // logs 39
