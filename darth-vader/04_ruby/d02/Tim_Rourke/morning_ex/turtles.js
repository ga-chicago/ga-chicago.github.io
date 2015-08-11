function Turtle(name, color, weapon, saying) {
	this.name = name;
	this.color = color;
	this.weapon = weapon;
	this.saying = saying;
	this.sayStuff = function(){
		console.log(this.saying);
	}
}

var raphael = new Turtle('Raphael', 'red', 'pointy sticks', 'I\'m an asshole');

var michelangelo = new Turtle('Michelangelo', 'orange', 'dogshit', 'BOOOOOOOOOOOOOOP!');

var tinyWhiny = new Turtle('Peewee', 'poypul', 'feelings', 'snurp');

raphael.sayStuff();
