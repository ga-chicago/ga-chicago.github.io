var daniel = {
  sayMyName: function() {
    return "I am Daniel";
  },
  throwBall: function() {
    return "I am throwing the ball";
  },
  age: 39,
  dob: '09/01/55',
  commute: 'blue line',
  foods: ['chinese', 'vietnamese', 'thai', 'japanese', 'american'],
  hobbies: ['fly fishing', 'hiking'],
  movie: ['Casablanca']
};

daniel.aboutMe = function() {
  var tmpStr = [];
  tmpStr = tmpStr + this.name + ' is ' + this.age + ' years old.';

  tmpStr = tmpStr + " " + this.name + " likes to eat these cuisines: ";
  for (var i in this.foods) {
    tmpStr = tmpStr + this.foods[i] + ', ';
  }

  tmpStr = tmpStr + " likes to: ";
  for (var i in this.hobbies) {
    tmpStr = tmpStr + this.hobbies[i] + ', ';
  }

  return tmpStr;
}


daniel.anotherfunc = function() {
  return 'here is another function';
}
daniel.quirk = function(oneArg) {
  return 'daniel eats ' + oneArg;
}

/*
var drummer = {
  arms: 2
  legs: 2
  polyrhythms: ['3/4', '4/5'];
  tuneDrums: function() {
    return 'tuning the drums!';
  },
  beatDrums: function() {
    return 'bam bam';
  }
}



var err = {
  name: 'Error',
  sayMyName: function() {
    return 'I am ' + this.name;
  },
  makeFunOfGreenClothes: function() {
    return "Your clothes look silly, little elf-man";
  },
  changeName: function(newName) {
    if (typeof(newName) == 'string' ) {
      this.name = newName;
      return 'Name has been changed to: ' + newName + ' a';
    }
    else {
      return 'That name is not a valid string';
    }
  }
};

*/

/* Check out this hoisting
var err = {
  name: 'Error',
  sayMyName: function() {
    return 'I am ' + this.name;
  },
  makeFunOfGreenClothes: function() {
    return "Your clothes look silly, little elf-man";
  },
  changeName: function(newName) {
    if (typeof(newName) == 'string') {
      var oldName = this.name;
      this.name = newName;
      return 'Name has been changed to: ' + newName + ' and our old name was ' + oldName;
    } else {
      return 'That name is not a valid string';
    }
  }
};
*/
