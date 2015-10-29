// FOR loop
// 1. Initialization
// 2. Condition to keep going?
// 3. Upon completion of one cycle, do this

var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var i = 0 /*Incrementor */; i < arr.length/*Condition to loop again*/; i++/*Upon completion of each cycle, do this*/) {
  console.log('The incrementor is ' + i);
  console.log(arr[i]);
}

//FOR-IN loop (iterator loop, cycle loop, for each loop)
//This loop will go through everything, no matter what, but we lose the control of the order that everything is displayed
var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var pirate in arr) {
  console.log(pirate);//pirate is what the incrementor is, i.e. 1,2,3
  console.log(arr[pirate]);
}

var visit = ['ogilvie transportation center', 'ukranian village', 'glen ellyn', 'oldtown', 'navy pier'];
for (var i = 0; i < visit.length; i++) {
  if (visit.length == i + 1) {
    console.log(visit[i] + '. This is the last place I\'ve been');
  } else {
    console.log(visit[i]);
  }
}

var visit = ['ogilvie transportation center', 'ukranian village', 'glen ellyn', 'oldtown', 'navy pier'];
for (var travel in visit) {
  if (travel == (visit.length - 1)) {
    console.log(visit[travel] + '. This is the last place I\'ve been.');
    break;
  } console.log(visit[travel]);
}
