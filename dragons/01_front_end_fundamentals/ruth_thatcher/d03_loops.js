//1: initialization of the loop
//2: condition to keep going?
//3: upon completion of each cycle
var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
for (var inc = 0; inc < arr.length; inc++) {
  console.log('the incrementor is: ' + inc);
  console.log(arr[inc]);
}

// FOR-IN loop (for each loop)
var arr = ['jack sparrow', 'blackbeard', 'johnny depp'];
 for (var pirate in arr){
   console.log(pirate);
   console.log(arr[pirate])

 }

 var fiveLastPlaces = ['Bavette', 'River East Theaters', 'Randolph Market', 'Dao', 'Library'];
  for (var i = 0; i < fiveLastPlaces.length; i++) {
    console.log(i);
    console.log(fiveLastPlaces[i]);
  if (i == (fiveLastPlaces.length - 1)){
    console.log('this is the last placed i visited');
  }

}
