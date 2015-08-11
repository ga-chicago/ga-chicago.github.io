```javascript
var friend = "Magda";
var otherFriend = "Tom";
var foodOfChoice = "pizza";

if (foodOfChoice) {
	console.log("I really enjoy" + foodOfChoice);
}


var num = prompt("please submit a number");
if (4 > num) {
	console.log("4 wins");
}

if (typeof num == "number") {
	console.log("4 wins");
} else {
	console.log("You didn't enter a number...");
}


var colours = ["purple", "blue", "green", "orange", "yellow"];

// fooorrr
for (var i = 0; i < colours.length; i++) {
	console.log("we like colours... such as..." + colours[i]);
}

//for-in & for-each
for (var colour in colours) {
	console.log("we like colours... such as..." + colours[colour]);
}


function multiply(num1, num2) {

	return num1 * num2;

}





































```
