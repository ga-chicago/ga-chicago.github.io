function oddEven() {
  var oe = "even";
  for (var i=0; i <= 20; i++) {
    if (i % 2 == 0) {
      oe = "even";
    } else {
      oe = "odd";
    }
    console.log(i + " is " + oe );
  }
}
