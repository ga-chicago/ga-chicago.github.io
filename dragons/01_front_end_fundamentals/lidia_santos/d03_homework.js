//1. detecting types
var pet = "dog";
  console.log(typeof(pet));



//2. carousel
var carousel = ['Ephie', 'Christina', 'Hilda', 'Amanda', 'Evelyn'];
for (var i = 0; i < carousel.length; i ++) {
  console.log(carousel);
} if (i % 2 === 0) {
  console.log(carousel.pop());
}  else if (i % 2 !== 0) {
  console.log(carousel.pop(-1));
}


// 3.You are an object...

var lidia = {
  eyeColor: 'brown',
  favoriteFood:'pizza',
  favoriteBeer: 'Revolution Rosa',
  highSchool:'Lane Tech',
  college:'NIU',
  favoriteColor: 'Red',
  hobby: 'Cycling',
  wouldRatherLive: 'Somewhere warmer',
  firstCar: 'Mitsubishi 3000 gt',
  ethnicity: 'Salvadorian'
};

for (var prop in lidia) {
  console.log(prop + " = " + lidia[prop]);
}

// 4. Elementary School
function elemantarySchool(a, b){
  return (a / b) && (a % b);
  }
console.log(elemantarySchool.toString())
