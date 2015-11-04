// ADAM OBJECT
var adam = {

    sayMyName: function() {
        return 'I am ' + this.name;
    },
    name: 'Adam',
    height: 'tall',
    born: 1974,
    dog: 'Seamus',
    show: 'The Killing',
    bestFriend: 'Renee'
}; // end object adam

// ADD TO ADAM
adam.quirk = function(oneArg) {
    return 'know whats goofy about Adam? He ' + oneArg;
}
adam.isTurbo = function(oneArg) {
    return 'Did you know Adam can ' + oneArg + '? That\'s so turbo!!!!';
}
// call the function using adam.isTurbo('arg');
adam.buildAboutMe = function() {
    return this.name + ' was born in ' + this.born + ' and is married to ' + this.bestFriend + '. ' + this.name + ' has a dog named ' + this.dog + ' and likes to cuddle up with his wife to watch the show ' + this.show + '.';
}

// SPONGEBOB OBJECT
var Spongebob = {
    name: 'Spongebob',
    species: 'sponge',
    says: 'daaahhhhhhh!',
    friend: 'Patrick',
    neighbor: 'Squidward',
    mingleAtParties: function() {
        return 'How do you flip your burgers?';
    }
} // end spongebob object


// WHITE FANG
var whiteFang = {
    name: 'White Fang',
    born: 'California Ranch',
    breed: 'St. Bernard Shephard mix',
    movedTo: 'Yukon Territory Alaska',
    family: 'wolf pack',
    fightStyle: function() {
        return 'throw my weight into the chest of the other dog and slash at them';
    },
    tellStory: function() {
        return 'My name is ' + this.name + ' and I was born on a ' + this.born + 'a ' + this.breed + '. I was kidnapped and taken to the ' + this.movedTo + ' where I was lead sled dog but ultimately became part of a ' + this.family + '.';
    }
} // END OBJ

whiteFang.hasOwnProperty('born'); // check if has a key (maybe before trying use that key for something)

Object.keys(whiteFang); // > str array of all keys

// ERR OBJECT
var err = {
    sayMyName: function() {
        return 'I am ' + this.name; // self referential to name attribute
    },
    changeName: function(newName) {
        if(typeof(newName) == 'string') {
            this.name = newName;
            return 'name changed to ' + newName;
        } else {
            'Thats not a valid string';
        }
    } // end changeName function
} // end err object
