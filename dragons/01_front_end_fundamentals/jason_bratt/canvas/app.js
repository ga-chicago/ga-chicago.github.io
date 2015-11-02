var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


function randomLine() {
  ctx.beginPath();
  var x = Math.floor(Math.random() * 1400);
  var y = Math.floor(Math.random() * 1400);
  ctx.moveTo(300, 300);
  ctx.lineTo(Math.random() * 50, Math.random() * 50);
  ctx.strokeStyle = randomColor();
  ctx.stroke();
}

function randomColor() {
  var red = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var color = 'rgb(' + red + ',' + blue + ',' + green + ')';
  return color;
}

function randomRect() {
  ctx.fillStyle = randomColor();
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);
  ctx.fillRect(x, y, Math.random() * 40 + 10, Math.random() * 40 + 10)
}

function drawLineRect() {
  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(50, 50);
  ctx.stroke();
}
/*
ctx.beginPath();
ctx.arc(75, 75, 50, 0, 0.1 * Math.PI);
ctx.stroke();*/


var circle = {
  x : 700,
  y : 400,
  radius : 5,
  color: 'black',
  startAng : 0,
  inc : 0.1,
  draw : function() {
    ctx.beginPath();
    var endAng = this.startAng + (this.inc * Math.PI);
    ctx.arc(this.x, this.y, this.radius, this.startAng, endAng);
    if (endAng > 6.283) {
      this.color = randomColor();
      this.startAng = 0;
      this.radius += 7;
    } else {
      this.startAng = endAng;
    }
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}

setInterval(function() {
  circle.draw();
}, 30);
