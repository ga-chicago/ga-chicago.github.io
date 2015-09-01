/*
15. Return of the Functions

Create a function that draws a rectangle on a canvas element.
This function should accept arguments for height, width, and colour.
Return a successfully draw rectangle using Canvas.
*/

function drawRectangle(coordinates, color) {
  color = typeof color !== 'undefined' ? color : '#56c188';
  var target_canvas = document.getElementById("drawing");
  var ctx = target_canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(coordinates[0], coordinates[1], coordinates[2], coordinates[3]);
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function randomCoordinates() {
  var ret = [];
  for (var i=0; i<2; i++) {
    ret.push(getRandom(1540))
  }
    for (var i=0; i<2; i++) {
    ret.push(getRandom(80))
  }
  return ret;
}

function randomColor() {
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

function n_times(n, fn) {
  for (var i=0; i<n; i++) {
    console.log('execute!');
    fn();
  }
}

n_times(12989, function() {
    drawRectangle(randomCoordinates(), randomColor());
 });
