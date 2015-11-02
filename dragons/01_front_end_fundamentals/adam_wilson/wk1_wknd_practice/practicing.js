
// ROUND 1
// the function lengths is called with an arg of the array strings. strings is mapped to a new Array (newArray). the .map method returns the length using .length as the value input to the newArray.

var strings = ['cube', 'sphere', 'box'];

function lengths(x) {
  var newArray = x.map(function(item) {
    return item.length;
  })
  console.log(x);
  return newArray;
} //end function lengths
lengths(strings);



// ROUND 2
function transmogrifier(num1, num2, num3) {
   return Math.pow((num1 * num2), num3)
}
transmogrifier(5, 4, 3)
// result 8000
transmogrifier(13, 12, 5
// result 92389579776
transmogrifier(42, 13, 7)
//result 14466001271480793000
