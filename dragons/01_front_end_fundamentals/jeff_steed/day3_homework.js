function types(arg) {
  return typeof(arg);
}

var riders = ['person1', 'person2', 'person3', 'person4', 'person5', 'person6'];

while (riders.length > 0) {
  for (var i = 0; i < riders.length; i++) {
    if (riders.length === 1) {
      console.log(riders.pop());
    } else if (i % 2 !== 0) {
      console.log(riders.pop());
    }
  }
}

var me = {
  "age": 32,
  "hairColor": "auburn",
  "eyeColor": "blue",
  "height": "6\'2\"",
  "DoB": "7/22/83",
  "gender": "male",
  "city": "chicago",
  "state": "illinois",
  "job": "student",
  "company": "GA"
}

for (var trait in me) {
  console.log('My ' + trait + ' is ' + me[trait]);
}

function remainder(a, b) {
  return 'The result is ' + parseInt(a / b) + ' and the remainder is ' + a % b + '.';
}
