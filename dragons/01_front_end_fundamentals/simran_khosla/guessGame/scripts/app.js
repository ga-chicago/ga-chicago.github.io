window.onLoad = function (){

  var randomNumber = parseInt((Math.random()*10));

  var userNumber1 = prompt('Guess a number between 0 - 10');
  var userNumber2 = null;
  var round = null;

  function round1() {
  if (randomNumber>userNumber1) {
    alert('sorry that number is HIGHER than the number, try again');
    userNumber2 = prompt('Guess again!');
  } else if (randomNumber<userNumber1) {
    alert('sorry that number is LOWER than the number, try again');
    userNumber2 = prompt('Guess again!');
  } else if (randomNumber===userNumber1) {
    alert('zomg that was amazing you win!')
  };
  round = 2;
}

function round2() {
  if (randomNumber !== userNumber2) {
    alert('sorry you lose =[ the number I was thinking of was '+randomNumber)
  } else if (randomNumber === userNumber2) {
    alert('yay you did it!');
  }
}

round1();

if (round=2) {
  round2();
}
}
// end of window.onLoad
