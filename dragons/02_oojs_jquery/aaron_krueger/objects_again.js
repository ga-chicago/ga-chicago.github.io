  var aaron = {
    sayMyName: function(){
      return 'I am Aaron';
    },
    name: 'Aaron',
    hairColour: 'brown',
    eyeColour: 'red',
    bodyBuild: 'Athletic',
    mood: 'Sleepy',
    hopOnBike: function(type){
      typeFixed = type.toLocaleLowerCase;
      if(typeFixed == 'road bike'){
        return 'you go fast'
      }else{
        return 'slow poke'
      }

    },
    musicAbility: true,
    changeName: function(newName){
      this.name = newName;
      if(typeof(newName)=='string'){
        return 'Name has been changed to: '+newName;
      }else{
        return 'That name is not a valid string';
      }
    },
    buildAboutMe: function(){
      return this.name+ " has "+ this.hairColour + ", "+this.eyeColour+', and is '+this.mood+'. However, '+this.name+' is '+this.bodyBuild+' and is a '+
             this.hopOnBike('false')+'.';
           }
  }

  var err = {
    name: 'Error',
    sayMyName: function(){
      return 'I\'m '+this.name;
    },
    makeFunOfGreenClothes: function(){
      return "Your clothes look silly sir."
    }
  }

  err.sayMyName();
  aaron.sayMyName();
  //aaron.hopOnBike('road bike');
aaron.quirk = function(qrk){
  return "YOU "+qrk+"!!!!!!!!!????????";
}
aaron.drinking = function(drinking){
  if (drinking == true){
    return 'share some of that lean yo'
  }else{
    return 'next time maybe?'
  }
}

aaron.sayMyNameAgain = function(times){
  for(i=0; i < times; i++){
    //return "Say my name, Say my name";
    if(i=1){
      return 'if no one is around you';
    }else if(i=2){
      return "say baby I love you";
    }
  }
}

aaron.quirk('box[][][]');
aaron.drinking(true);
aaron.sayMyNameAgain(2);
err.sayMyName();
aaron.hopOnBike(false);
aaron.buildAboutMe();






var dante = {
  name: 'Dante',
  ghostType: 'Ghastly Ghost',
  nationality: 'Italian',
  inHell: 'Not currently',
  circleLevel: 9,
  location: 'hell',
  friendly: true,

  travelling: function(onTheRun){
    onTheRun === true;
    if(onTheRun == true){
      return ' is escaping the ' +circleLevel+ ' of ' +location+'!!!';
    }else{
      return 'Dante is resting.'
    }
  },
  tellStory: function(){
    return this.name+' is on the run! ' +'The '+this.ghostType+' '+this.name+this.travelling();
  }
}
dante.tellStory();
