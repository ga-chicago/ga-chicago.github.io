//1. Detecting Types
function what(a){
  return console.log('This is a ' + typeof a);
}
what("is this?");

//2. Carrousel
var circus = ['johnny','jenny','james','jennifer','jack','jim'];
for (var cycles = 0; circus.length > 0; cycles++) {
    if (cycles % 2 != 0) {
        var popped = circus.pop();
        console.log(popped + ' is off the carousel');
    }
}

//3. You are an object...
var nick = {
  eyeColor: 'hazel',
  hairColor: 'brown',
  height: '5\'9\"',
  address: '929 N Kingsbury St',
  city: 'Chicago',
  state: 'IL',
  zip: '60610',
  phone: '760-808-7995',
  email: 'nick@espi.uno',
  altEmail: 'nick@mduethernet.com'
};
for (var info in nick) {
  console.log(info + ': ' + nick[info]);
}

//4. Elementary School
function school(a, b) {
  return console.log('The result is ' + (a / b) + ' and the remainder is ' + (a % b));
}
school(200, 3);
