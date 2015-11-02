function max(a,b){
  if( a > b){
    return a;
  }else{
    return b;
  };
};

console.log(max(5,10));


function vDet(det){
  var detString = String(det);
  var

  if (detString= 'a' || 'e' || 'i' || 'o'|| 'u'){
    return true;
  }else{
    return false;
  }
}
console.log(vDet('a'));


var nums = [1, 2, 3, 4];

function sum(numsArr){
  var result = 0;
  for(var i = 0; i < numsArr.length; i++){
    return result += numsArr[i];
  }
  console.log(result);
}

function multiply(array){
  var total = array[0];
  console.log(total);
  for(var i =1; i<array.length; i++){
    return total = total * array[i];
  }
  console.log(total)
}
console.log(sum([1,2,3,4]));
