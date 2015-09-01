/*
15. Return of the Functions

Create a function that draws a rectangle on a canvas element.
This function should accept arguments for height, width, and colour.
Return a successfully draw rectangle using Canvas.
*/

var parseHTML = function(str) {
  var tmp = document.implementation.createHTMLDocument();
  tmp.body.innerHTML = str;
  return tmp.body.children;
};

function drawRect(w, h, x, y, rgb) {
	var canvasEl = parseHTML('<canvas id="timCanvas" width="600" height="600"></canvas>');
	console.log(canvasEl);
	document.body.appendChild(canvasEl[0]);
	var c = document.getElementById('timCanvas');
	var ctx=c.getContext("2d");
	ctx.rect(x, y, w, h);
	ctx.fillStyle = rgb;
	ctx.fill();
}

drawRect(100, 100, 20, 45, "#bada55");