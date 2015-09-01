/*
2. Array Manipulation

Create an array.
Add 3 places you have visited in your life.
Remove two of them from the front of the array.
Add 3 places that you would like to travel to.
Remove one of them from the end of the array.
*/

var array = [];

array.push('Florence, Italy');
array.push('Boston, Massachusetts');
array.push('Siena, Italy');

array.shift();
array.shift();

array.push('Puglia, Italy');
array.push('Vienna, Austria');
array.push('St. Petersburg, Russia');

array.pop();