function max(a, b) {
  if (a > b) return a;
  else       return b;
}

function isVowel(c) {
  c = c.toLowerCase();
  return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');
}

function sum(ls) {
  var a = 0;
  for (var i = 0; i < ls.length; i++) {
    a += ls[i];
  }
  return a;
}

function sumT(ls) {

  function sT(ls, n) {

    if (ls.length == 0) {
      return n;
    }
    else {
      var a = ls.pop();
      return sT(ls, n+a);
    }
  }
  return sT(ls, 0);
}

function multiply(ls) {
  if (ls.length == 0) {
    throw 'cannot multiply nothing'
  }
  var p = ls[0];
  for (var i = 1; i < ls.length; i++) {
    p *= ls[i];
  }
  return p;
}

function multT(ls) {
  if (ls.length == 0)
    throw 'cannot multiply nothing. beep boop.'
  if (ls.length == 1)
    return ls[0];

  var a = ls.pop();

  function mT(ls, n) {
    if (ls.length == 0)
      return n;
    else {
      var a = ls.pop();
      return mT(ls, n*a);
    }
  }
  return mT(ls, a);
}
