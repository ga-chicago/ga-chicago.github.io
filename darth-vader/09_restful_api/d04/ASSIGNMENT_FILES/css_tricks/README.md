# Image Transparency & Gradients
1. Create a directory with an index.html and style.css
2. Create basic HTML boilerplate with a header element

### Use transparency to add a "filter" to an image
1. Give the header element a background-image, height, and width
2. Time for a "filter"
```
header {
  width: 600px;
  height: 300px;
  background-image: url('image.jpg');
  background-size: cover;
  box-shadow: inset 0 0 0 600px rgba(0,0,0,.5);
}
```
### Linear-gradient on an image or div background
1. Give element a background-image, height, and width
2. Apply a gradient
```
header {
  width: 600px;
  height: 300px;
  background-image: linear-gradient(to bottom, rgba(255,255,0,.6), rgba(255,0,0,.3)),
                    url("images/rainierLake.jpg");
  background-size: cover;
}
```
- In the background-image property, the attribute listed first is on top

### Radial-gradient
1. Give element a background-image, height, and width
2. Apply a gradient
```
header {
  width: 600px;
  height: 300px;
  background-image: radial-gradient(circle at top right, rgba(255,255,0,.6), rgba(255,0,0,.3)),
                    url("images/rainierLake.jpg");
  background-size: cover;
}
```
- - In the background-image property, the attribute listed first is on top
