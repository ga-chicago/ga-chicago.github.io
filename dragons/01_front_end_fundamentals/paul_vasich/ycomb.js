
// the Y Combinatoooooorrrrr
function Y(F) {
  return (function (x) {
    return F(function (y) { return (x(x))(y);});
  })
         (function (x) {
    return F(function (y) { return (x(x))(y);});
  });
}

// combinate with a cache!
function memY(F, cache) {
  if (!cache)
    cache = {};
  return function(arg) {
    if (cache[arg])
      return cache[arg];
    var answer = (F(function(n) {
      return (memY(F, cache))(n);
    }))(arg);
    cache[arg] = answer;
    return answer;
  };
}

// pass to Y or memY to build a fibonacci generator
function buildFib(g) {
  return (function(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return g(n-1) + g(n-2);
  });
}

// pretty fast. evals to Infinity at N > 1476
var memFib = memY(buildFib);

// basic fib
function fib(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fib(n-1) + fib(n-2);
}

 // var yFib = Y(buildFib); this is terrible

(function() {
  var arr = ['salty jones', 'brineface', 'octopus husband'];
  for (var i = 0; i < arr.length; i++) {
    console.log('the incrementor is: ' + i);
    console.log(arr[i]);
  }

  for (var pirate in arr) {
    console.log(arr[pirate]);
    console.log(pirate);
  }

  var locs = ['Wrigley Field', 'Midway Airport',
  "O'hare Airport", 'General Assembley', 'Dunkin Donuts'];

  for (var i = 0; i < locs.length; i++) {
    (i == locs.length-1) ?
      console.log(locs[i]+ ", the last place I've been.") :
      console.log(locs[i]);
  }

  for (var place in locs) {
    (place == locs.length-1) ?
      console.log(locs[place]+", the last place I've been, again.") :
      console.log(locs[place]);
  }

  var paul = {
    name: "Paub",
    age: 24,
    eye_color: "green?"
  };

});
