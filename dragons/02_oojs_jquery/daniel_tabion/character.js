var rick = {
  dood :'Rick',
  nationality : 'American',
  city : 'Casablanca',
  ladyFriend : 'Ilsa',
  suggestedRoulettePlay : 22,
  controlFateOf : function(name) {
    return this.name + ' helps ' + name + ' obtain an exit visa.';
  }
};

rick.tellStory = function() {
  var story = [];
  story = story + this.dood + ' is an ' + this.nationality + ' living in ' + this.city + '.';
  return story;
};
