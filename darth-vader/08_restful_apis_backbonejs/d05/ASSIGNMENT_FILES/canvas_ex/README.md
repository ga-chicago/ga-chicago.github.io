# Paint by Numbers (Mainly 0's and 1's)

Canvas is an HTML5 element that you can use to draw and animate on the DOM.

## Create Your Canvas in HTML
1. Define the canvas element with an id of "myCanvas" then give it a width and height ()
```
<canvas id="myCanvas" width="500" height="500"></canvas>
```
2. Enter alternate text for very old, unsupported browsers
```
<canvas id="myCanvas" width="500" height="500">Your Browser Sucks, Bro</canvas>
```
3. Create javascript to select canvas element by id
```
<script>
var canvas = document.getElementById("myCanvas");
</script>
```
4. Define the context 2d or 3d (WebGL)
```
<script>
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
</script>
```

## Draw!
- Every canvas begins at coordinates (0,0) in the top-left corner
### Drawing Shapes

#### Rectangles
- A solid rectangle:
```
ctx.fillRect(x-axis start, y-axis start, width, height);
```
- An outline only rectangle:
```
ctx.strokeRect(x-axis start, y-axis start, width, height);
```

#### Lines
```
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(x-axis start, y-axis start);
ctx.lineTo(x-axis end, y-axis end);
ctx.closePath();
ctx.stroke();
```

#### Circles
```
ctx.beginPath();
ctx.arc(x-axis, y-axis, radius, 0, Math.PI*2, false);
ctx.closePath();
ctx.fill();
```
###### Semi-Circle or Arc
```
ctx.beginPath();
ctx.arc(x-axis, y-axis, radius, 20, Math.PI*2, false);
ctx.closePath();
ctx.fill();
```
### Changing Colors
To fill in an object with a specific color
```
ctx.fillStyle = "color";
ctx.fill();
```
To outline an object with a specific color
```
ctx strokeStyle = "color";
ctx.stroke();
```
#### Drawing Text
```
var text = "Hello, World!";
ctx.font = "30px Verdana"
ctx.fillText(text, x-axis start, y-axis start);
```
To only outline the text shape:
```
var text = "Hello, World!";
ctx.font = "30px Verdana"
ctx.strokeText(text, x-axis start, y-axis start);
```
