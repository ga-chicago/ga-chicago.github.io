function max(num1, num2){
  if (typeof num1 != 'number' || typeof num2 != 'number') {
    return console.log("not a number!");
  }
  else {
  return Math.max(num1,num2);
  }
}

function vowel(character){
  if((character.length != 1) || (typeof character !== 'string')){
    return console.log("not a single character!");
  }
  else if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
    return true;
  }
  else {
    return false;
  }
}

  function sum(sumarr){
    var result = 0;
    for (var variable in sumarr) {
      result += sumarr[variable];
      }
    return result;
  }

function multiply(mularr){
  var result = 1;
  for (var variable in mularr) {
    result *= mularr[variable];
  }
  return result;
}
