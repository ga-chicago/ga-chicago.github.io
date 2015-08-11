//Variables
var strings = ["The", "Quick", "Brown", "Fox"];
var numbers = [1,2,3,4];
var mix = ["The", 5, "Fox", 10];

//Strings loops
for (var i = 0; i < strings.length; i++){
  console.log(strings[i]);
}

for (string in strings){
  console.log(strings[string]);
}

//Numbers loops
for (var i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}

for (number in numbers){
  console.log(numbers[number]);
}

//Mixed loops
for (var i = 0; i < mix.length; i++){
  console.log(mix[i]);
}

for (item in mix){
  console.log(mix[item]);
}
