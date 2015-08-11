var Leonardo = {
  Name: 'Leonardo',
  Weapon: 'ninjato',
  Color: 'blue',
  NamedAfter: 'Leonardo da Vinci'
}

var Michelangelo = {
  Name: 'Michelangelo',
  Weapon: 'nunchucks',
  Color: 'orange',
  NamedAfter: 'Michelangelo Buonarroti'
}

var Raphael = {
  Name: 'Raphael',
  Weapon: 'sai',
  Color: 'red',
  NamedAfter: 'Raffaello Sanzio da Urbino'
}

var Donatello = {
  Name: 'Donatello',
  Weapon: 'bo',
  Color: 'purple',
  NamedAfter: 'Niccolo di Betto Bardi'
}

function Turtle(Name, Weapon, Color, NamedAfter) {
  this.Name = Name;
  this.Weapon = Weapon;
  this.Color = Color;
  this.NamedAfter = NamedAfter;
}

var Leonardo = new Turtle('Leonardo', 'ninjato', 'blue', 'Leonardo da Vinci');

Turtle.prototype.sayStuff = function(){ console.log('Hi, my name is ' + this.Name + ' and I am the ' + this.Color + ' turtle. I fight with the ' + this.Weapon + ' weapon, and I was inspired by ' + this.NamedAfter + '.') }

Leonardo.sayStuff();
