/*
5. Conditional Trials

Create a logical block that detects if a user is able to purchase alcohol.
If so, console.log out that they may have a drink.
Else, warn them via console.log to not break the law.
*/

var user = user || {};
user.name = "Billy Henderson";
user.age = 19;
user.height = { value: 6, units: 'inches' };
user.weight = { value: 144, units: 'lbs' };

console.log( user.age >= 21 ? 'Have a drink my young friend!' : 'Woops!!!  Sorry pal!  You need to wait at least ' + (21 - user.age).toString() + ' years!');