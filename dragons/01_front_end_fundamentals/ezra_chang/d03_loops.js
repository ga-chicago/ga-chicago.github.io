var phoneBrands = ['Nokia', 'LG', 'Apple', 'Samsung'];
for (var i = 0; i < phoneBrands.length; i++) {
  console.log(phoneBrands[i]);
}

for (var brand in phoneBrands) {
  console.log(brand);
  console.log(phoneBrands[brand]);
}

var placesIveBeen = ['Millenium Park', 'Lego', 'Shedd Aquarium', 'Brookfield Zoo', 'Space'];

for (var j = 0; j < placesIveBeen.length; j++) {
  if(j == placesIveBeen.length - 1) {
    console.log('This is the last place I visited: ' + placesIveBeen[j]);
  }
  else {
    console.log(placesIveBeen[j]);
  }
}

for (var place in placesIveBeen) {
  console.log(placesIveBeen[place]);
}
