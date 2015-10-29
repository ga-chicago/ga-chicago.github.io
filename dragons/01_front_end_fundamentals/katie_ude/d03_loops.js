// FOR loop
// 1: initialization of the loop
// 2: condition to keep going
// 3: upon completion of each cycle

var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var inc = 0; inc < arr.length; inc ++) {
  console.log('the incrementor is: ' + inc);
  console.log(arr[inc]);
}



// FOR-IN loop (FOREACH)
// loose ability to manipulate order of flow
var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var pirate in arr) {
  console.log(pirate);
  console.log(arr[pirate]);
}

var latestPlacesChi = ['Emmit\'s Irish Pub', 'Boss Bar', 'Art Institute', 'Tesori', 'Le Pain Quotidien'];
for (var i = 0; i < latestPlacesChi.length; i ++) {
  console.log("Lap number: " + i)
  if (i == (latestPlacesChi.length -1)) {
    console.log('This is the last place I visited');
  }
  console.log(latestPlacesChi[i]);
}

var latestPlacesChi = ['Emmit\'s Irish Pub', 'Boss Bar', 'Art Institute', 'Tesori', 'Le Pain Quotidien'];
for (var spots in latestPlacesChi) {
  console.log(latestPlacesChi[spots]);
}
