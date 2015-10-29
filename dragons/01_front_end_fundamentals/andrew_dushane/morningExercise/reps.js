//max
function max( x , y ) {
  if( x > y ) {
    return x;
  }
  else if( x < y ) {
    return y;
  }
  else return false;
}

//isVowel
function isVowel( a ) {
  if( typeof a === 'string' && a.length === 1 ) {
    var vowels = [ 'a', 'e', 'i', 'o', 'u'];
    for( i in vowels ) {
      if( a.toLowerCase() === vowels[i] ) {
        return true;
      }
      else return false;
    }
  }
  else {
    console.log('Error: Please enter one letter to test for vowellyness.');
    return false;
  }
}

//sum()
function sum( arr ) {
  if( Array.isArray(arr) ) {
    var sum = 0;
    for( i in arr ) {
      sum += arr[i];
    }
    return sum;
  }
  else {
    console.log('Please enter an array of numbers.');
    return false;
  }
}

//multiply()
function multiply( arr ) {
  if( Array.isArray(arr) ) {
    var prd = 1;
    for( i in arr ) {
      prd = prd * arr[i];
    }
    return prd;
  }
  else {
    console.log('Please enter an array of numbers.');
    return false;
  }
}
