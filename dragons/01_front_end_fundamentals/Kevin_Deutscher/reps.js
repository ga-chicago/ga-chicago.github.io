//1. ----------------------------------------------------------------
function max (a, b) {
  if (a>b){
    return a;
  }
    return b;
}

//2. ----------------------------------------------------------------
function isVowel(char) {
  return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
}



//3. -----------------------------------------------------------------
function multiply (array) {
  var total = array[0];
  console.log(total);
  for(var i = 1; i < array.length; i++)
  {
    total = total * array[i];
  }
  console.log(total)
}
//multiply([1,2,3,4]) returns 24
