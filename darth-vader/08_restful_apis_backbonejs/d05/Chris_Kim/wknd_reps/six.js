// 6. Loops, Loops, Merry-go-round
//
// Create an array of your friends.
// Now, create a loop that will pop a friend out every time the loop runs.
// Tell a funny story about how they leave each time. console.log is your friend here.

var friends = ['Larry', 'Brett', 'Seth', 'Eric'];

for (var friend in friends) {
    if ((friends[friend]) === "Larry") {
        console.log(friends[friend] + ' has been popped from the queue');
    }
    else if ((friends[friend]) === "Brett") {
        console.log(friends[friend] + " is off to another galaxy");
    }
    else if ((friends[friend]) === "Seth") {
        console.log(friends[friend] + " moved to the suburbs");
    }
    else {
     console.log(friends[friend] + " moved out of the country");
    }
}
