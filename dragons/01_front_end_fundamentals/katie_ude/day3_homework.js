// 1. Detecting Types

function getType(x) {
    return typeof(x);
  }
getType("silly");

// 2. Carousel

var carousel = ['Sally', 'Mary', 'Johnny', 'Kristin', 'Timmy', 'Gracie', 'Kevin', 'Autumn'];
    for (var i = 0; carousel.length !== 0; i ++) {
      if (i %2 !== 0) {
        carousel.pop();
      }
      console.log(i);
      console.log(carousel);
    }

// 3. You are an object...

var katherine = {
  eyeColor: "green",
  hairColor: "blonde",
  favColor: "pink",
  favActivities: ['ice skating', 'dancing', 'Pilates', 'yoga', 'hiking'],
  home: "Old Town, Chicago",
  age: 30,
  birthMonth: "October",
  nickName: "Katie",
  favHoliday: "Christmas",
  birthstone: "Opal"
}
for (var char in katherine) {
  console.log(char + ' = ' + katherine[char]);
}

// 4. Elementary School

function school (a,b) {
    if (a !== 0  && b !== 0) {
        var divide = a/b;
        var remain = a%b;
        console.log("The result is " + divide + " and " + remain + " is the remainder");
  }
}
school (3,4);
