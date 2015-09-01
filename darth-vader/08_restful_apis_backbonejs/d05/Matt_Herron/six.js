/*
6. Loops, Loops, Merry-go-round

Create an array of your friends.
Now, create a loop that will pop a friend out every time the loop runs.
Tell a funny story about how they leave each time. console.log is your friend here.
*/

my_friends = ['James', 'Tim', 'Tristan', 'Sonju', 'Tom', 'Dylan', 'Joe', 'Isaac', 'David', 'Kate', 'Myron', 'Eric', 'Jim', 'Chris', 'Brad'];
console.log('All the WDI friends got together for drinks...\n');
for (f in my_friends) {
	console.log('Uh oh, ' + my_friends.pop() + ' had to leave because of too much drinking!');	
}

console.log('\nI guess the rest of us will have to chill...');