//First weekend Homework
// 1. lengths

var animals = ['dog', 'cat', 'elephant', 'bird', 'horse', 'pig', 'monkey', 'cow'];
function lengths(array) {
  var x;
  var y;
  var newArray = [ ];
  for (var i = 0; 0 < array.length; i++) {
    x = array.shift();
    y = x.length;
    newArray[i] = y;
  }
  return newArray;
}

// 2. transmogrifier

function transmogrifier(x, y, z) {
  var a = x * y;
  var b = Math.pow(a,z);
  return b;
}

// 3. toonify

function toonify(x, y) {
  if (x == 'daffy'){
    while (y.indexOf('s')+1) {
      y = y.replace('s','th');
    }
  } else if (x == 'elmer') {
    while (y.indexOf('r')+1) {
    y = y.replace('r','w');
    }
  }
  return y;
}

// 4. wordReverse

function wordReverse(x) {
    var y = [ ];
    var z = [ ];
    var a = [ ];
  for (var i = 0; i < x.length; i++) {
    z[i] = x.substr(i, 1);
  }
  z.reverse();
  a = z.join();
  while (a.indexOf(',')+1) {
    a = a.replace(',','');
  }
  return a;
}

// 5. letterReverse
var m = 'This is really fun';
function letterReverse(x) {
  var y = [ ];
  var z = [ ];
  var a = [ ];
  var b = [ ];
  var c = [ ];
  var d = [ ];
  y = x.split(' ');
  var z = y.length;
  for (var j = 0; j < z; j++) {
    var a = y[j];
    b[j] = wordReverse(a);
    }
    c = b.join('');
    for (var i = 0; i < c.length; i++) {
      c = c.replace(',', ' ');
    }
    return c;
}
letterReverse(m);


// 6. longest

var x = ['sam', 'steve', 'mike', 'jim'];
var a = " ";
function longest(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i].length > a.length) {
      a = x[i];
  }
  return a;
}


// 7. repMaster

function repMaster (a, aFunction) {
  return aFunction(a) + ' proves I am the rep MASTER!';
}
