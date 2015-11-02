if (1 == 0) { //Will report as false and go to else
  console.log('This is true');
} else {
  console.log('This is false');
}

var pets = ['dog', 'cat', 'fish'];

if (pets) { //Will report as true because we do have a pets variable
  console.log('This is true')
}

function vowel(a) { //Need all break statements or else it will always call the default value.
  switch (a) {
    case 'a': return true;
      break;
    case 'e': return true;
      break;
    case 'i': return true;
      break;
    case 'o': return true;
      break;
    case 'u': return true;
      break;
    default: return false;
      break;
  }
}

var tom = {
  name: 'Tom',
  age: 38,
  hobby: 'running',
  job: 'sleep all day'
}

tom['job'] or tom.job
>> 'sleep all day'

function elementaryMyDearWatson(num1, num2) {
  var wholeNumber = parseInt(num1/num2);
  console.log('wholeNumber: ' + wholeNumber);
  var remainder = num1 % num2;
  console.log('remainder: ' + remainder);
  return wholeNumber + ' has a remainder of ' + remainder;
}

var riders = ['Marty', 'Ruth', 'Paul', 'Jason', 'Jan', 'Aaron'];
console.log(riders);

for (var i = 0; 0 < riders.length; i++) {
  if (i % 2) {
    console.log('even number.. no one gets off');
  } else {
    console.log('odd number')  
  }
}
