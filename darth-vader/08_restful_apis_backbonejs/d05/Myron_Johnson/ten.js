// Story Time!

function startStory() {
  var name = prompt("Enter your name");
  var town = prompt("Enter the town you grew up in");
  var age = prompt("Enter your age");
  var color = prompt("What is your favorite color?");
  var hobby = prompt("What is your favorite hobby?");
  creepyStory(name,town,age,color,hobby);
}
function creepyStory(name) {
    story = "One dark cold night" + name + " was " + hobby + "ing." + name + " didn't realize that in " + town + " the same town they grew up in, there was a spooky " + color + " cat that was watching their every move. It was only 2 days until " + name + "'s" + age + "st/th birthday, but " + name + " might not be seeing" + age;
}
