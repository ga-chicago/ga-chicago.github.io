
___

<strong>HTML & CSS</strong>
<h3>Media Queries</h3>

---

##@media queries

People view the web through a wide variety of devices (okay, maybe 5), and it's important to accommodate as many of them as possible. Fortunately for us, every device identifies itself and its dimensions to the bowser so we can respond accordingly. **Media queries** are special signifiers you can drop into your stylesheet that say "when the device is smaller than x, use these settings instead".

Here's a bare-bones media query that will do whatever you tell it to as soon as the browser shrinks to or below 600px:

```css
@media (max-width: 600px){

  // stuff

  // and

  // things


}
```
