var foods = ['salmon', 'dahl', 'pizza', 'kittens', 'raspberries'];

function logArray(ls) {
  for (var i = 0; i < ls.length; i++)
    console.log('Today I ate '+ls[i]);
}

function buildPaub() {
  this.firstName  = "Paub";
  this.lastName   = "Varnish";
  this.hoursSlept = 2;
  this.languages  = ['JS', 'Scheme', 'Python', 'Java', 'C', 'Perl', 'MATLAB'];
  this.list = function(ls) {
    for(var i = 0; i < ls.length; i++)
      console.log('I know how to spell '+ls[i])
  }
}

window.onload = function() {
  var paub = new buildPaub();

  var btn = document.getElementById('butt');
  btn.onclick = function() {
    paub.list(paub.languages);
  }

}
