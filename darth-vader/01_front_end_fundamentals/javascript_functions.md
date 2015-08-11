
___

<strong>Javascript</strong>
<h3>Functions</h3>

---


- Functions are tools that allow you to re-use code easily without needing to write it over and over.
- It keeps your code **DRY** (*don't repeat yourself*)
- They can save a lot of time if you need to do something repeatedly!
- Defining a function:
```
function listSomethingFiveTimes(something) {
    for (var i = 0; i < 5; i++) {
      console.log(something);
    }
}
```
- **Returning a value from a function**:
```
function addOne(myNumber) {
    return myNumber + 1;
}
var x = addOne(4);
// x will equal 4 + 1
// x equals 5
```
- **Scope inside of a function**. The xbox variable is not accessible outside of that function because it is only inside of the **scope** of the function named *double*'s scope.
```
function double(num) {
  var xbox = "eh ok";
  // some other code here
}
```
