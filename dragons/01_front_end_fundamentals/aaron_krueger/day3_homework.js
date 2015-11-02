function detectType(dt){
  var dt;
  return typeof(dt)
}
//    I'm not sure exactly how to de-increment on the odd each time
var riders = ['ash', 'dash', 'cash', 'lash'];

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f19fd7c7dcf2f88daa8075e77725b62fb2a88f3b
for(i=0; i <= riders.length -1; i++){
  if (i % 2 === 1) {
    console.log('this is odd');
    console.log(riders[i]);
<<<<<<< HEAD
=======
=======
for(i=0; 0 < riders.length; i++){
  if (i % 2 == 1) {
    console.log('this is odd');
    var popped = riders.pop();
    console.log(popped + ' has been thrown off');
>>>>>>> 51936a62fc91b975527854601003fbfa0038c777
>>>>>>> f19fd7c7dcf2f88daa8075e77725b62fb2a88f3b
  }else {
    console.log('this is even')
  }
  console.log(i);
}


var aaron = {
  age: 20,
  eyeColour: 'brown',
  clothed: false,
  onTheTrain: true,
  mood: 'Satisfied',
  immortal: true,
  programmer: 'Web',
  knownLanguages: 6,
  macBook: 'pro',
  noodled: 'Chow mein'
}

for(var key in aaron){
  var deets = aaron[key];
  console.log( key+' '+deets );
}


function divRem(x, y){
  var div = x/y;
  var rm = x % y;
  console.log( 'you divided '+x+' by '+y+' which equals '+div+' with a remainder of ' + rm);
}
divRem(10,2);
divRem(10,3);
