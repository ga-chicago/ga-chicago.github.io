var paub = {
    sayMyName: function() {
        return this.name;
    },
    changeName: function(name) {
      if (typeof name === 'string') {
        var old   = this.name;
        this.name = newName;
        return old + "'s new name is " + name;
      }
      return name + ' is invalid. Name not changed.';
    },
    quirk: function(odd) {
      return 'paub likes ' + odd;
    },
    tellOpinion: function(subject, opinion) {
      paub.opinions[subject] = opinion;
      return 'paub now finds ' + subject + ' ' + opinion;
    },
    askOpinion: function(subject) {
      if (paub.opinions[subject])
        return paub.opinions[subject];
      return 'paub has no opinion on ' + subject;
    },
    add: function(a, b) {
      return (a / b) + (b / a) + a + b;
    },
    buildAboutMe: function() {
      return 'name: '+this.name+"\n"+
             'age: '+this.age+'\n'+
             'favoriteColor: '+this.favoriteColor+'\n'+
             'cat:\n'+'\tname: '+this.cat.name+'\n'+
                      '\tage: '+this.cat.age+'\n'+
                      '\tcolor: '+this.cat.color+'\n'+
             'zone: '+this.zone+'\n'+
             'anagrams: '+this.anagrams;
    },
    lazyAboutMe: function(me) {
      s = '';
      for (var att in me) {
        if (typeof me[att] == 'string')
          s += att+': '+me[att] + '\n';
        if (typeof me[att] == 'object')
          s += this.lazyAboutMe(me[att]);
      }
      return s;
    },
    name: 'Paub',
    age: 24,
    favoriteColor: 'green',
    cat: {
        name: 'George',
        age: '8',
        color: 'grey'
    },
    zone: 'f',
    anagrams: ['Visual Chap', 'A Lavish Cup'],
    opinions: {}
}

var frisk = {
  name: 'Frisk',
  age: '???',
  appearance: 'frumpy',
  favoriteActivity: 'striking cool and mysterious poses',
  hasEatenAnEntireSnowman: true,
  tellStory: function() {
    console.log('My name is '+this.name+', and I am '+this.age+' years old.'+
    ' I may appear '+this.appearance+', but my favorite activity is '+
    this.favoriteActivity+". And if you ask me if I've ever eaten an entire snowman,"+
    ' I will tell you that is '+this.hasEatenAnEntireSnowman+'.');
  }
}
