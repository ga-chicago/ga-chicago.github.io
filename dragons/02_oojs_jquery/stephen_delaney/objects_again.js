var stephen = {
  name: 'Stephen',
  sayMyName: function() {
    return 'I am Stephen';
  },
  hairColor: 'brown',
  eyeColor: 'brown',
  favoritePopStar: 'Brit Brit',
  age: '27',
  hometown: 'Wheaton',
  cocktailOfChoice: 'sazerac',
  sport: 'running',
  languages: ['English', 'Spanish'],
  book: 'Boy\'s Life',
  cereal: 'Cinnamon Life',
}

/*
invoke the method ==> stephen.sayMyName()
(a method is a function owned by an object)
add ==> stephen.brunch = 'chilaquiles';

stephen.quirk = function(oneArg){
return 'something something ' + oneArg;
}

Object.keys(stephen)
["name", "sayMyName", "hairColor", "eyeColor", "favoritePopStar", "age", "hometown", "cocktailOfChoice", "sport", "languages", "book", "cereal"]
 */

 stephen.quirk = function(food){
 return 'I can\'t stand the sound of chewing gum, but I can tolerate if you are eating ' + food;
 }
 stephen.music = function(song) {
return 'I think that we should blast \'' + song + '\' until the neighbors call the cops.'}

stephen.tellMe = function() {
return this.name + ' has ' + this.hairColor + ' hair and ' + this.eyeColor + ' eyes.'
}
stephen.tellMeMore = function() {
return this.name + ' loves a well-made ' + this.cocktailOfChoice +'.'
}
stephen.tellMePop = function() {
return this.name + ' knows every ' + this.favoritePopStar +' song by heart.'
}

stephen.tellmeLanguage = function() {
return this.name + ' speaks ' + this.languages[0] + ' and ' + this.languages[1] + '.'
}




// keep working -- closer!
stephen.boozin = function(num, drink) {
  if (drink == 'beer') {
    if (num => 5) {
      return 'You\'re drunk!';
    } else {
      return 'Keep drinking, don\'t worry about the burps!';
    }}
      else if (drink == 'whisky') {
        if (num => 3) {
          return 'You\'re drunk!';
        } else {
          return 'Keep drinking! Whisky, yum!';
        }}
        else {
          return 'Why aren\'t you drinking whisky or beer?';
        }
  }
// new new new

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
      return 'Name has been changed to: ' + newName + ' and our old name was ' + oldName +'.';
    } else {
      return 'That name is not a valid string';
    }
    }
  }
// why the hell does oldName stay the same???? it gets hoisted, but....
/* err.sayMyName()

err.name = 'Solution'
err.sayMyName()
"I am Solution"
*/

/*
err.name
"Error"

err.changeName(42)
"That name is not a valid string"

err.changeName('Solution')
"Name has been changed to: Solution"

console.log(err.name)
Solution
*/

// character object
var lucyWagner = {
  name: 'Lucy',
  looks: 'beautiful',
  song: 'I Love Rock & Roll',
  mom: 'Samantha Jones',
  friends: ['Pensatucky', 'Zoe Saldana'],
  loveInterest: 'Anson Mount, who no one has heard from since',
  tellStory: function () {
    return 'This is the story of a ' + this.looks + ' girl named ' + this.name + ' (not Lucky). \n She travels across the country with her best pals, ' + this.friends[0] + ' and ' + this.friends[1] + '. \n When they run out of money, she sings ' + this.song + ' at a sleazy bar and they are all set. She is on the journey to meet her mom, who turns out to be ' + this.mom + ', but it\'s disappointing for her. \n So, instead she just pursues her pop star dreams and stays in California with that hot guy played by ' + this.loveInterest + '.'
  },
}
// add an ability and work on making a new line work
