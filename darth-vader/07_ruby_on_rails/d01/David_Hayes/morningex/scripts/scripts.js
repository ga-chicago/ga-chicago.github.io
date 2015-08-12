$(document).ready( function() {


var array1 = [ 4, 3, 26, 23];
var array2 = [ 'blue','red','orange','yellow'];

array1.pop();
array2.pop();
array1.push(99);
array2.push('purple');

for (var item in array1) {
  $('#best').append(array1[item]+'<br>');
}

for (var item in array2) {
  $('#worst').append(array2[item] + '<br>');
}



});
