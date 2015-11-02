function local1(arg) { // local1 hoisted into storage spot
  return name + " is " + arg;
}

var name = 'spongebob'; //name hoisted assigned value
local1('funny'); //arg passed to local1 which had been hoisted
