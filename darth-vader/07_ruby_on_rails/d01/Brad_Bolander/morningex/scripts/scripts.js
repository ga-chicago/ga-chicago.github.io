var cities = ['bay city', 'chicago', 'london', 'seattle'];
var states = ['michigan', 'illinois', 'california', 'washington'];
cities.pop();
states.pop();
cities.push('orlando');
states.push('florida');

for (var city in cities) {
  console.log(city);
}

for (var state in states) {
  console.log(state);
}
