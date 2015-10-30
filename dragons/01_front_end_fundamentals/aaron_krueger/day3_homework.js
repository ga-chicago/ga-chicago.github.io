function detectType(dt){
  var dt;
  return typeof(dt)
}
//    I'm not sure exactly how to de-increment on the odd each time
var riders = ['ash', 'dash', 'cash', 'lash'];

for(i=0; i <= riders.length -1; i++){
  if (i % 2 === 1) {
    console.log('this is odd');
    console.log(riders[i]);
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
