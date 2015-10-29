// the following is a for loop
//1: initialization of the loop
//2: condition keep going?
//3: upon completion of each cycle
var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var inc = 0; inc < arr.length; inc++) {
  console.log('the incrementor is: ' + inc);
  console.log(arr[inc])
}


// for-in loop (foreach) will go thru everythig
//but we lose the ability to say which order it goes in

var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var pirate in arr) {
  console.log(pirate)
  console.log(arr[pirate]);
}
//have an additional line that says "this is the last place i visited"
//below is the one I started with that was kind of funky
var goHere = ['Taverna 750', 'Goose Island', 'The Closet', 'Slippery Slope', 'Replay'];
for (var inc = 0; inc < goHere.length; inc++) {
  console.log(goHere [inc] + 'Is a good place to get drunk' +  );
  console.log(goHere[inc])
//^^
//below works
var goHere = ['Taverna 750', 'Goose Island', 'The Closet', 'Slippery Slope', 'Replay'];
for (var inc = 0; inc < goHere.length; inc++) {
  console.log(goHere [inc] + ' is a good place to get drunk' );
}
}

//
var goHere = ['Taverna 750', 'Goose Island', 'The Closet', 'Slippery Slope', 'Replay'];
for (var inc = 0; inc <= goHere.length - 1; inc++) {
  if (inc < goHere.length - 1) {
  console.log(goHere [inc] + ' is a good place to get drunk' );
} else if (inc == goHere.length -1) {
  console.log (goHere[inc] + ' was the last place I went.');
}
}

var goHere = ['Taverna 750', 'Goose Island', 'The Closet', 'Slippery Slope', 'Replay'];
for (var funTimes in goHere) {
  console.log(funTimes)
  console.log(goHere[funTimes]);
}

//halp with how to go thru the incrementors? also
