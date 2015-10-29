function max(a, b){
  if (a > b){
    return a
  }
  else if (b>a){
    return b
  }
  else {
    console.log("These are the same!")
  }
}

///////////////////////

function vowel(x) {
//  console.log(typeof(x) + x.length);
  x = x.toLocaleLowerCase();
//  x = toLocaleLowerCase(x); this doesn't work! 
  if (typeof(x) === 'string' && x.length === 1){
    if (x === 'a'|| x==='e'|| x==='i'||x==='o'||x==='u'||x==='y') {
      console.log("true");
      return true;
    }
    else {
      console.log("false");
      return false
    }
  }
  else {
    console.log("Not a single character.")
  }
}

vowel('A');

///////////////////////////
var numbers = [1, 2, 3, 4];

function multiply(array){
  var result = 1;
  for (var index in array){
    result *= array[index];
// if (index == array.length - 1)
  }
  console.log(result);
}

multiply(numbers);

function sum(array){
  var total = 0;
  for (var index in array){
    total += array[index];
  }
  console.log(total);
}

sum(numbers);
