var foods = ['toast', 'hash browns', 'country fried steak', 'eggs, over-medium', 'coffee'];

var ezra = {
  name: 'Ezra',
  age: 27,
  gender: 'Male',
  ethnicity: 'Chinese',
  nationality: 'American',
  breakfast: foods,
  eatBreakfast: function (input) {
    for (var i = 0; i < input.length; i++) {
      console.log(input[i]);
    }
  }
}

window.onload = function() {
  document.getElementById("eat").onclick = function isWorking() {
    alert("Working!");
    ezra.eatBreakfast(foods);

  }
}
