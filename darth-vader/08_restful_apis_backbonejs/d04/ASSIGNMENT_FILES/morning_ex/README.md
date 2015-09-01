# We All Float On

What does float do???
  ```
  #example {
    float: left;
  }
  ```
- push block element to the left or right
- other content (text wrapping someone rapping?) can flow around the element
- will float to leftmost or rightmost position (but can get stuck!)
  - nth child magic can work on pages with multiple floats (we'll get to that another day)
- if the width of the floated element is too large for the viewport (display window), it will be shifted down
- it is an inline-block element (say what?)
  ```
  example {
    display: inline-block;
  }
  ```
  - inline element (like text elements) can have multiple individual rectangles horizontally and wrap to the next line
  - block elements take up entire horizontal rectangle
  - inline-block - fusion, think about it Jim
  - ![display attributes]('images/display.png')
- floats can be cleared (left, right, and both)
  ```
  example {
    clear: both;
  }
  ```
- Containing these damn non-conformist floating elements
  - block elements can act like those floats aren't even there
  - ![floating out of bounds]('images/floatFit.png')
  - parent div or containing div can be given a display attribute of in-line block
  - clear fix (this can be another whole lesson)

## Box Shadows
Outer Shadow:
```
#example {
box-shadow: 5px 5px 5px 5px #888;
}
```
Inner Shadow:
```
#example {
box-shadow: inset 5px 5px 5px 5px #888;
}
```
Listed in Order: horizontal offset, vertical offset, optional blur distance, optional spread distance of the shadow, color
