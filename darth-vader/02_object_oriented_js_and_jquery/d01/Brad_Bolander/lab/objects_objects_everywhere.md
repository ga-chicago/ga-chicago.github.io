### Objects! Objects, Everywhere!

This morning we spent a lot of time working with objects. Today, we're going to spend some time learning to use them in a more realistic way! We'll start with creating some valuable data, manipulating it, and then displaying it. Today we're going to build a tool that allows us to share topics under a subject! Say you want to create a fun party game where random topics are added/removed.

#### Subject Object (Part 1)
1. Create a new object called `subjects`.
3. Check that these are here using `.hasOwnProperty()`
4. The `subject` object will contain the following attributes: `topics` (an empty array that will contain strings), `name` (the name of this object), and `description`. Assign your own values for each.
5. Create two abilities: `addTopic` and `removeTopic`. You will use either `pop()`, `push()`, `shift()`, or `unshift()` to implement these methods. They are designed to **return** the topic added *or* removed (the return value should always be a string).
6. Create another ability: `toString` - it should return the `name` and `description` attributes in a sentence to the user as a string.
7. Write documentation for the `subjects` object. Have a classmate read over your object and explain to you what it is.

#### For-in loops (Part 2)
1. Create a new object and call it `funThings`.
2. Add at least ten attributes that you find are fun! The key should be the name of the subject. The value should be a description.
3. Use a `for-in` loop inside of a function called `loopy()`. It should have **one** argument that accepts an object.
4. The function should loop through all of the attributes in the loop and `console.log()` the value for each each.
5. The function should return true!

#### Object.keys (Part 3)
1. For the two above objects, research the `Object.keys` method on MDN.
2. Find a way to list all of the keys for both Objects.
3. Console.log out all of the keys for both objects.
4. You will probably use a loop for this!
