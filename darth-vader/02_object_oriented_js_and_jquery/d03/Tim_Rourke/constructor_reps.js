var Sandwich = function(name, ingredients, deliciousness) {
  this.name = name.toString();
  this.ingredients = ingredients;
  this.deliciousness = deliciousness;
}

var oldHotdog = new Sandwich('Old Ass Hotdog', ['beef dick', 'dog food', 'hair'], 2);

var Smell = function(name, source) {
  this.name = name;
  this.source = source;
  this.whoDidIt = function() {
    console.log(this.source + ' farted and it smells like ' + this.name + '!');
  }
}

var Hillary = new Smell('Hillary Clinton', 'Alf');

var ThingTimIsLazyAbout = function(thing) {
  this.thing = thing;
}

var TonightsHomework = new ThingTimIsLazyAbout('Tonight\'s homework');
