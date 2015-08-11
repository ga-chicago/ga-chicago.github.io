___

<strong>Javascript</strong>
<h3>Objects</h3>

---

- Creating an object
```javascript
// create an empty Object
var obj = {};
```

- Objects (dictionaries) are composed of **Keys** : **Values**
```javascript
// objects are composed of keys : values
// values may be any data type! number, string, boolean, array, and other Objects!
// create a lichard Object
var lichard = {
  // key: name, value: "Lichard DeGray"
  name: 'Lichard DeGray',
  mood: 'good',  
  sing: function(){
  	this.mood = 'great';
  	return 'On my Own… Pretending...';
   }
};
```
- Using `Object.keys()` to return an array of keys
```javascript
// get the keys for the lichard Object as an array
var keys = Object.keys(lichard);
// get the name of lichard - two days!
lichard.name;  // => 'Lichard DeGray'
// using an index to access the "name"; indexes should be strings!
lichard["name"]; // => 'Lichard DeGray'
// call an ability (method) on lichard
lichard.sing(); // => 'On my Own… Pretending...'
```
- Using loops the hard way
```javascript
// using loops
var familyFoods = {Lichard: 'Carmel & Candy Corn', Kathew: 'Pizza', Omily: 'Pickled Cucumber Salad'};
var familyKeys = Object.keys(familyFoods);
for (var i = 0; i < familyKeys.length; i++) {
  console.log( familyKeys[i] + ' love ' + familyFoods[familyKeys[i]])
}
```
- And now, using a `for-in` loop to iterate through an object
```javascript
// ...and we can use for-in loops here, too!
for (var key in familyFoods) {
  console.log(key + " loves " + familyFoods[key]);
}
```
- A **person** object:
```javascript
// create a person Object
var person = {
  // attributes
  name: "Nick",
  hasHair: true,
  hobbies: "music",
  arms: 2,
  listensTo: "Mogwai",
  salad: "vending machine",
  // abilities
  sing: function() {
  	return "Limp Bizkit Break Stuff";
  },
  raps: function() {
  	return "Limp Bizkit Break stuff";
  },
  code: function() {
  	return "I AM THE CODE MASTER";
  },
  fourSevenEight: function() {
  	return "I have no idea what i am doing";
  }
};
```
- Our **car** Object:
```javascript
// our car Object
var car = {
  // our attributes
  wheels: 4,
  engine: "v12",
  axles: 2,
  color: "midnight blue",
  interior: "leather",
  hasMoonroof: true,
  hasHotTub: false,
  speed: 0,
  // abilities
  upgrade: undefined,
  getPaintJob: function(color) {
  	this.color = color;
  },
  accelerate: function() {
  	this.speed = this.speed +1;
  },
  brake: function() {
  	this.speed = 0;
  },
  deployAirbags: function() {
  	console.log("oh shiiiiiiii");
  },
  eraseUpgradeAbility: function() {
  	this.upgrade = undefined;
  }
};
```
- Objects vs Arrays (syntax)
```javascript
var messages = [];
// object
{
	name: "Alex",
	message: "I need more food"
}
// array
[
"value",
"another",
"some third value"
]
```
- Another example of an object:
```javascript
var lichard = {
	name: 'Lichard DeGray',
	mood: 'good',  
	sing: function(){
		this.mood = 'great';
		return 'On my Own… Pretending...';
  },
};
```
- Charlie Brown, Snoopy, and the Pumpkin
```javascript
var snoopy = {
	name: "snoopy",
	favouriteThing: "doghouse",
	friend: "woodstock",
	introduce: function() {
		return "Hi my name is" + this.name;
	},
	doSomething: function() {
		return "SNOOPY IS SNIFFING";
	}
}
var woodstock = {
	name: "woodstock",
	quote: "!!|!!!|!!!!!!",
	almostFly: function() {
		return "can I stay here, snoopy?";
	}
}
var pumpkin = {
	seeds: "lots",
	color: "orange",
	edible: true,
	smell: true,
	isCarvable: true,
	isCarved: false,
	shape: "",
	carve: function() {
		// seeds = none
		this.seeds = "none;"
		// isCarves = true
		this.isCarved = true;
		// shape = "woodstock"
		this.shape = "woodstock";
		//return "Jack-o-lantern";
		this.carve = function() {
			return "hey, you carved me bro";
		}
	},
	introduceSelf: function() {
		return "Hey Charlie, I'm " + this.color + " and I want to be your friend";
	}
};
```
- The heroic Adventure Kitty exercise!
```javascript
var adventureKitty = {
	// attributes
	name: "Adventure Kitty",
	gender: "female",
	eyeCount: 1,
	furColor: "yellow",
	personality: "daring",
	superpower: "fly",
	// abilities
	// Adventure Kitty tells you about herself
	speak: function() {
		return "";
	}
};
```
- Our **smsApp** and **otherSmsApp** example:
```javascript
var smsApp = {
	messages: [],
	sendSMS: function(name, message) {
		this.messages.push({
			name: name,
			message: message
		});
		return "message sent!";
	},
	renderView: function() {
		document.body.innerHTML = "";
		for (var sms in this.messages) {
			var note = this.messages[sms];
			document.write("<br>" +
				note.name + ": " +
				note.message);
		}
	}
};
var otherSmsApp = {
	sendSMS: function(name, message) {
		smsApp.messages.push({
			name: name,
			message: message
		});
		return "message sent!";
	}
}
```

- Another for-in loop
```javascript
for (var key in messages) {
	//console.log(messages[key]);
	var sms = messages[key];
	console.log(sms.name + ": " + sms.message);
}
```
- Student Colours example
```javascript
var students = {
	Marion: "green",
	Tom: "yellow",
	James: "purple"
};
for (var key in students) {
	console.log(key + "'s favourite colour is " + students[key]);
}
for (var key in students) {
	students[key] = "wenge";
	console.log(key + "'s favourite colour is " + students[key]);
}
```

## References

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object">MDN: Objects</a>
