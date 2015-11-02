// Round 1

function lengths(arrayOfStrings) {
arrayOfStrings = ['dragon', 'unicorn', 'pegasus', 'gryphon', 'minotaur'];
var numbers = [];
console.log(arrayOfStrings);
  for (var i = 0; i < arrayOfStrings.length; i++) {
    numbers.push(arrayOfStrings[i].length);
  }
    return (numbers);
}
lengths('arrayOfStrings');

  function length(mythAnimals) {
    for (var name in mythAnimals) {
      Array.from(mythAnimals[name]);
    }
  }


  // Round 2
  function transmogrifier(a, b, c) {
    var result = a * b;
    if (a * b !== 0) {
      return Math.pow(result, c);
    }
  }

  // Round 3
  function toonify(accent, sentence) {
    if (accent == 'daffy' && sentence == 'so you smell like sausage') {
      var str = sentence;
      var newStr = str.replace(/s/gi, 'th');
      console.log(newStr);
    }
    else if (accent == 'elmer' && sentence == 'be very, very quiet, I\'m hunting rabbits') {
      var str2 = sentence;
      var newStr2 = str2.replace(/r/gi, 'w');
      console.log(newStr2);
    }
    else
      console.log(sentence);
  }

  // Round 4

  function wordReverse(words) {
    var words = 'this is cool';
    var sent = [''];
    sent = words.split(',');
    console.log(sent);
    sent.reverse();
    console.log(sent);
      for (var i = 0; i <= sent.length ; i++){
        
      }

  }

  // Round 5

  function letterReverse() {
    var str = 'Thank God it is Friday';
    var strReverse = str.split('').reverse().join('');
    console.log(strReverse);
  }

  // Round 6

  function longest(a,b,c,d) {
    var create = Array.of(a,b,c,d);
    console.log(create);
      for (var i = 0; i <= create.length; i++) {
            if (create[0].length > create[i].length)  {
            return create[0];
            }
            else if (create[1].length > create[i].length)  {
            return create[1];
            }
            else if (create[2].length > create[i].length)  {
            return create[2];
            }
            else {
            return create[3];
            }
      }
}

  // Round 7

  function repMaster(words, makeBig) {
    function makeBig(words) {
    return words.toLocaleUpperCase();
  }
       return makeBig(words) + ' this proves that I am a repMaster';
}

  //Bonus Practice
  //Question 1

function test() {
  function square(x) {
    return Math.pow(x, 2);
  }
  function cube(x) {
    return Math.pow(x, 3);
  }
  function quad(x) {
    return Math.pow(x, 4);
  }
  if (square(2) !== 4 || cube (3) !== 27 || quad(4) !== 256) {
    console.log("check question 1");
  }
  else {
    console.log("You are great at math!");
  }
}

 // Question 2

var numbers = [2, 4, 6];
function sum(numbers, twiceOrHalf) {
  if (twiceOrHalf == 'twice' || 'half') {
    return (numbers[0] + numbers[1] + numbers[2]) * 2;
  }
  else if (twiceOrHalf == undefined) {
    return (numbers[0] + numbers[1] + numbers[2]);
  }
  else {
    return (numbers[0] + numbers[1] + numbers[2]) / 2;
  }
}

 // Question 3
function max(arg) {
  arg = [];
  arg[0] = parseInt(Math.random() * 20)
  arg[1] = parseInt(Math.random() * 15)
  arg[2] = parseInt(Math.random() * 30)
  for (var i = 0; i <= arg.length; i++) {
    console.log(arg);
    var largest = Math.max.apply(Math, arg);
    return largest;
  }
}
