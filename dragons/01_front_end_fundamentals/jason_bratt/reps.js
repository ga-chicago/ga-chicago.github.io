function max(n1, n2) {
  if (n1 > n2)
    return n1;
  else
    return n2;
}

function isVowel(letter) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(letter) >= 0)
    return 'a vowel!';
  else
    return 'no vowel';
}

function multiply(array) {
  return array.reduce(function(total, num) {
    if (total == 0) {
      return total = num;
    } else {
      return total * num;
    }
  }, 0);
}


function sum(array) {
  return array.reduce(function(total, num) {
    return total + num;
  })
}

console.log(sum([2,3]));
