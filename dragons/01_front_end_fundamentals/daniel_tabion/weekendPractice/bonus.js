function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function quad(x) {
  return square(square(x));
}

if (square(2) !== 4 || cube(3) !== 27 || quad(4) !== 256) {
  console.log("check question 1");
}


function sum(numbers, twiceOrHalf) {
  var total = 0;
  for (var i=0; i<numbers.length; i++) {
    total = total + numbers[i];
//    console.log(i, total);
  }

  if (twiceOrHalf == undefined) {
//    console.log('undef');
    return total;
  }

  else if (twiceOrHalf == true) {
    return total * 2;
  }

  else if (twiceOrHalf == false) {
    return total / 2;
  }

  console.log('oops...fell through all conditions');
}



function max() {
  var maxInArguments = arguments[0];
  for (var i=0; i<arguments.length; i++) {
    if (arguments[i] > maxInArguments) {
      maxInArguments = arguments[i];
    }
  }
  return maxInArguments;
}
