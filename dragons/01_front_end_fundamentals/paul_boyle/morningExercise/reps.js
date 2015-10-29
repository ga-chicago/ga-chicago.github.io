var max=function(a,b){
  if (a>b){
    return a;
  }
  else if (b>a){
    return b;
  }
  else {
    return 'A is equal to B';
  }
};


var vowel=function(letter){
  if (letter.toLowerCase()=='a'||'e'||'i'||'o'||'u'){
    return letter+' is a vowel';
  }
  else if (letter.toLowerCase()=='y'){
    return 'sometimes ' + letter;
  }
  else {
    return letter + ' is not a vowel';
  }
};


var sum=function(arr){
   ans=0;
  for (var i = 0; i < arr.length; i++) {
     ans+=arr[i];
  }
  return ans;
};


var mult=function(arr){
   ans=1;
  for (var i = 0; i < arr.length; i++) {
   ans*=arr[i]
  }
  return ans;
};
