// see http://processingjs.org/learning/topic/flocking

//  randomSquare(int canvasSize) => random square-like object
function randomSquare(sz) {

  // don't let the square be too gigantic
  var limit = parseInt(sz/4);

  // side length
  this.size = parseInt(Math.random() * limit);

  // position
  this.x    = parseInt(Math.random() * (sz + 40)) - 40;
  this.y    = parseInt(Math.random() * (sz + 40)) - 40;

  // alpha
  this.a    = Math.random()*0.8;

  // rgb
  this.r    = parseInt(Math.random()*255);
  this.g    = parseInt(Math.random()*255);
  this.b    = parseInt(Math.random()*255);

  // string for fillStyle
  this.rgba = 'rgba('+this.r+','+this.g+','+this.b+','+this.a+')';
}

function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var size=500;
  //  setInterval(function() {
    ctx.clearRect(0,0,size,size);

    var rSquare;

    for (var i = 0; i < 800; i++) {
      rSquare = new randomSquare(size);
//      console.log(l.rgba);
      ctx.fillStyle = rSquare.rgba;
      //ctx.beginPath();
      //ctx.arc(rSquare.x, rSquare.y, rSquare.size, 0, Math.PI*2, true);
      //ctx.closePath();
      //ctx.fill();
      ctx.fillRect(rSquare.x, rSquare.y, rSquare.size, rSquare.size);
    }
  //}, 50);
  }
}
