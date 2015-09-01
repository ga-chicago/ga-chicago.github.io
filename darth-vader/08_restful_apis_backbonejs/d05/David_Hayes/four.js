var laptop = new Object();
laptop.brand = 'Asus';
laptop.model = 'ZenBook UX305F';
laptop.color = 'black';
laptop.weightLb = 2.5;
laptop.screenDiagonalIn = 13.3;
laptop.announce = function() {
  console.log(
    'I am a laptop. I\'m a ' + this.brand + ' ' + this.model + ' and I am ' + this.color + ' and my screen is ' + this.screenDiagonalIn + ' inches and I weigh ' + this.weightLb + ' lbs.'
  );
};

laptopKeys = Object.keys(laptop);
for (var key=0; key<laptopKeys.length; key++) {
  console.log(laptopKeys[key]);
}
