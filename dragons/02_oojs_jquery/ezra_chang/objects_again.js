var ezra = {
  name: 'Ezra',
  age: 27,
  gender: 'Male',
  ethnicity: 'Chinese',
  profession: 'Ahwoo! Ahwoo! Ahwoo!',
  significantOther: {
    name: 'Shaneen',
    age: 22,
    gender: 'Female.',
    ethnicity: 'Filipino.',
  },
  film: 'Kingdom of Heaven.',
  jam: 'Lean On, by Major Lazer.'
};

ezra.quirk = function (someArgument) {
  return 'Some text ' + someArgument;
}

ezra.anotherProperty = function (anotherArgument) {
  return 'Good grief, put that ' + anotherArgument + ' away!';
}

ezra.spitEverything = function () {
  var allOfIt = 'Name: ' + this.name + '. \n' + 'Age: ' + this.age + '. \n' + 'Gender: ' + this.gender + '. \n' + this.ethnicity + '. \n' + 'Profession: ' + this.profession;
  return allOfIt;
}

var err = {
  name: 'Error',
  sayMyName: function () {
    return 'I am ' + this.name + '.';
  },
  makeFunOfGreenClothes: function () {
    return 'Your clothes look silly, little elf-man.';
  },
  changeName: function (newName) {
    if (typeof(newName) == 'string') {
      this.name = newName;
      return 'My name is now ' + this.name + '.';
    }
    else {
      return 'Invalid string.';
    }
  }
}

var gimli = {
  name: 'Gimli',
  race: 'dwarf',
  action1: 'slaying motherfuckers',
  action2: 'choppin',
  weapon: 'battle-axe',
  location1: 'north',
  location2: 'south',
  location3: 'Mirkwood',
  activity: 'orc stampede',
  friend: 'Shadowfax',
  lordOfTheRhymes: function () {
    var rhyme1 = 'Well my name is ' + this.name + ', ' + 'I’m a fucking ' + this.race + '! \n';
    var rhyme2 = 'I been ' + this.action1 + ' from the ' + this.location2 + ' to the ' + this.location1 + '! \n';
    var rhyme3 = 'That ain’t ' + this.location3 + ' I’m choppin with my ' + this.weapon + ', \n';
    var rhyme4 = 'I’m on an ' + this.activity + ' like ' + this.friend + '!';
    return rhyme1 + rhyme2 + rhyme3 + rhyme4;
  }
}

console.log(gimli.lordOfTheRhymes());
