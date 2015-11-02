var ezra = {
  eyeColor: 'brown',
  hairColor: 'black',
  height: '5 ft 6 in',
  weight: '140 lb'
}

for (var attr in ezra) {
  console.log(ezra[attr]);
}

ezra.hairColor = 'blonde';
console.log(ezra.hairColor);
ezra['hairColor'] = 'blue';
console.log(ezra.hairColor);
