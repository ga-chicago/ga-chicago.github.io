function draw(height,width,color)
{
  var canvas = document.getElementById("MyCanvas");
  if (canvas.getContext)
    {
 	var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(20,20,width,height);

    }
}
draw(500,500,'#2233FF');

// See this work at http://codepen.io/davidlhayes/pen/PqrMrN
