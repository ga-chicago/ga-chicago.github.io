//<canvas id="rectCanvas" width="1000" height="1000">no canvas...? your browser dun goofed </canvas> 

var c  = document.getElementById('rectCanvas');
var ctx = c.getContext("2d");
function getRect(width, height, color) {
	ctx.fillStyle = color; 
	ctx.beginPath(); 
	ctx.fillRect(100,100, width, height); 
	ctx.closePath(); 
    ctx.fill(); 
}

getRect(200, 100, 'tomato'); 