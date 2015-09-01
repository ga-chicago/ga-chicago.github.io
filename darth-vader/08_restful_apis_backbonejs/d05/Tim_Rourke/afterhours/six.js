/*
6. Loops, Loops, Merry-go-round

Create an array of your friends.
Now, create a loop that will pop a friend out every time the loop runs.
Tell a funny story about how they leave each time. console.log is your friend here.
*/

var friends = ['Susanna'];

for (var i = 0; i < friends.length; i++) {
	var lostFriend = friends.pop();
	console.log('Oh my god, my life is over. My only real friend, my dear ' + lostFriend + ', has left me.');
}