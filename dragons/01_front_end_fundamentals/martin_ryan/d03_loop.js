// FOR LOOP
// 1: initialize
// 2: condition to keep going?
// 3: upon complete of each cycle

var arr = ['jack sparrow','blackbeard','johnn depp'];
for (var inc = 0; inc < arr.length; inc++) {
  console.log('the incrementor is: ' + inc);
  console.log(arr[inc]);
}

// FOR-IN LOOP
// for each declared pirate (var being declared) in "arr" array - run script
var arr = ['jack sparrow','blackbeard','johnn depp'];
for (var pirate in arr) {
  console.log(pirate);
  console.log(arr[pirate]);
}

// ask why indexLoc is a string!!!!?
// how can I get the index of an array as a number without converting with parseInt
// you're not supposed to use a For...In loop for an array
var lastFive = ['Shedd Aquarium','Tiki Lounge','Meetups'];
for (var indexLoc in lastFive) {
  console.log(indexLoc);
//  console.log(lastFive[indexLoc]);
//  console.log(parseInt(indexLoc) + 1);
  if (parseInt(indexLoc) + 1 == lastFive.length) {
    console.log(lastFive[indexLoc] + ' is the last place I thought was cool');
  }
}
typeof(indexLoc);
