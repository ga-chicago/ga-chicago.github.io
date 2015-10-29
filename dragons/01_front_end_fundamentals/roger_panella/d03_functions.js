//I'm starting to get hungry//

function likeCats() {
  return "I like cats. meow.";
}


function addition(a, b) {
   return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

//anonymous function

var colours = ['green', 'blue', 'purple'];

colours.map(function(key) {
  return key + " is a cool colour";
});

colours.map(key)


function tellFortune (numOfChilds, partnerName, geoLocation, jobTitle) {
   var future = "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numOfChilds + " kids.";
   return future;
   console.log(future);
}

function caculateAge (birthYear, currentYear) {
  var youngerAge = currentYear - birthYear;
  var olderAge = (currentYear - birthYear) + 1;
  var yourAge = "You are either " + youngerAge + " or " + olderAge ".";
  console.log(age);
  return yourAge;
}

function calculateAge (birthYear, currentYear) {
  var age = currentYear - birthYear;
  consolelog("You are either ") + age + " or " + (age - 1);
}

calculateAge(1999, 2015) + "YES";
