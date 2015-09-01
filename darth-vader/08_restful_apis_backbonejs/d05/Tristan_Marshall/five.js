// 5. Conditional Trials
//
// Create a logical block that detects if a user is able to purchase alcohol.
// If so, console.log out that they may have a drink.
// Else, warn them via console.log to not break the law.

var customer = {
  name: "Jim",
  age: 20
};

if (customer.age >= 21){
  console.log("You may have a drink")
} else {
  console.log("Don't break the law!")
};
