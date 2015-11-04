var james = {
  sayMyName: function () {
    return 'I am James';
  }

}

var err = {
  name:'error',
  sayMyName: function () {
    return 'I am '+this.name;
  } ,

  makeFunOfGreenClothes: function () {
    return 'your clothes look silly little elf man';
  },

  changeName: function(newName){
    if (typeof(newName)=='string'){
      var oldName=this.name;
      this.name=newName;
      return oldName+ ' has been changed to '+newName;
    } else {
      return 'That name is not a valid string';
    }
  }

}






////////////////////////////////////////////////////////////////////////

var paul = {

  playSoccer: function () {
    return 'I play soccer';
  } ,

  buildStuff: function () {
    return 'I have worked a job building custom decks';
  } ,

  gender: 'Male',

  sleep: function () {
    return 'zzzzzzzz';
  } ,

  hairColor: 'brown',

  height: '5ft 9in',

  favoriteTVShow:'Firefly'
};

james.tripOverSometing=function (thingToTripOver){
  return 'I trip over '+thingToTripOver;
}

paul.quirk=function(oneArg){
  return 'I play the card game: '+oneArg;
}

paul.anotherFunction=function(arg){
  if(arg='pizza'){
    return 'I love '+arg;
  } else {
    return 'I hate '+arg;
  }
}

paul.saymyName=function(){
  return 'Hello my name is Paul';
}

paul.aboutMe=function(){
  return 'My favorite Tv show is '+this.favoriteTVShow+'.'+' I have a wierd quirck in that I enjoy playing '+this.quirk('Magic: the Gathering')+'.'+'My hair is '+this.hairColor+'.'+'I am '+this.height+' tall.';
}

var jonSnow = {
  house: 'Stark',
  location: 'The Wall',
  name: 'Jon Snow',
  siblings: ['Robb','Brann','Arya','Rickon','Sansa'],
  parents: 'Eddard Stark',
  culture: 'Northmen',

  listSiblings: function(){
    var string='';
    for(sibling in this.siblings){
      if()
      string+=' '+this.siblings[sibling]+',';
    }
    return string;
  } ,

  aboutMe: function () {
    return 'My name is '+this.name+ ' of '+this.house+'. '+'I\'m currently stationed on '+this.location+'. '+'I have '+this.siblings.length+' siblings. Their names are '+this.listSiblings()+'. '+'My father is '+this.parents+'. '+'I am one of the '+this.culture+'.';
  }
}
