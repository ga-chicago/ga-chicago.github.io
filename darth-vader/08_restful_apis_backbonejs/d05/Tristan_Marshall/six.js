// 6. Loops, Loops, Merry-go-round
//
// Create an array of your friends.
// Now, create a loop that will pop a friend out every time the loop runs.
// Tell a funny story about how they leave each time. console.log is your friend here.

var Ricky = {
  wayOut: "Out the back"
};

var Steve = {
wayOut:  "Through the window"
};

var Taylor = {
wayOut:  "out the front door"
};


var friends = [Ricky, Steve, Taylor];

for (var i = friends.length; i--; i>0) {
  friends.pop(); console.log(friends)
};

// for (var i = friends.length; i--; i>0) {
//   friends.pop(); console.log(friends)
// };
