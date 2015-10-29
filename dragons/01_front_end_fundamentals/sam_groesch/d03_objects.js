// Objects

var james = {
  eyeColor: 'blue',
  hairColor: 'brown',
  42: 'secret' //Last key value doesn't have a comma
};
//Left hand side is the key: Right hand side is associated value
//Call with james['eyeColor'] or james.eyeColor
//Keys are strings

for (var prop in james){
  console.log('The value for ' + prop + ' is ' + james[prop]);
}

//Array vs. Object
//Array is a pile of clothes, the order isn't clear
//Object is all the clothes hung up, you can see the distinct properties of each

//How to update values in objects
james.hairColor = 'blue';
james[42] = 'not a secret anymore';

var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];

arr[2] = 'captain morgan'; //Replaces that value in array
>>>["jack sparrow", "blackbeard", "captain morgan"]

arr[3] = 'long john silver'; //Adds new value to array
>>>["jack sparrow", "blackbeard", "captain morgan", "long john silver"]

var pirates = newArray(); //Create new empty array

var james = {
  eyeColor: 'blue',
  hairColor: 'brown',
  42: 'secret'
};
james['height'] = '70'; //Adds new key and value to the object

var mike = {}; //Create new empty object
