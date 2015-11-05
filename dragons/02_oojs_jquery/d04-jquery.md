___

<strong>WDI Woodstock: Javascript</strong>
<h3>jQuery</h3>

---

<img src="http://upload.wikimedia.org/wikipedia/en/9/9e/JQuery_logo.svg" alt="jQuery" />

<br>

- **jQuery**'s motto is *write less, do more*
- jQuery was originally written by John Rezig
- It is now maintained by a strong community
- There is even a yearly jQuery conference in Toronto
- <a href="http://jquery.com">http://jquery.com</a>


#3.1 - jQuery Recap

1. Define what a library vs framework is
  - **Library** is set of methods to be utilized
  - **framework** is a combination of multiple libraries and tools.
  - Various libraries include:
    - jQuery: http://jquery.com
    - Zepto: http://zeptojs.com/
    - Prototype: http://prototypejs.org/
    - Modernizr: http://modernizr.com/
2. List primary components of jQuery
  - DOM traversal
  - Event Handling
  - Ajax interactions
  - Event Handling
3. How to include jQuery into an app
  - Include using CDN or local file
  - See the **Installing jQuery with NPM** section below
  - CDNS:
    - http://cdnjs.com
    - http://googleapis.com
4. Select existing DOM nodes
  - See **Selector Examples** section below.
5. Build and append custom DOM nodes
  * `.append()`
  * `.appendTo()`
  * `.text()`
  * `.prepend()`
  * `.prependTo()`
6. Trigger and listen to events
```javascript
$(selector).click(function() {
  // your code
});
```
  - https://api.jquery.com/category/events/


##Using jQuery in your html head element

- In your index.html file, add: `<script type='text/javascript' src='scripts/jquery.js'></script>`

##jQuery Selector Examples!

<table style="border: 1px dashed black;">
<thead>
  <tr>
    <td><strong>Example</strong></td>
    <td><strong>... in jQuery</strong></td>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Elements</td>
    <td>$("element")`, `$("#id")` or `$(".class")</td>
  </tr>
  <tr>
    <td>Descendants</td>
    <td>$("#id descendant")</td>
  </tr>
  <tr>
    <td>Children</td>
    <td>$(".class > child")</td>
  </tr>
  <tr>
    <td>Multiple</td>
    <td>$("#id1, #id2, #id3")</td>
  </tr>
  <tr>
    <td>Pseudo-selectors</td>
    <td>$("li :first")</td>
  </tr>
</tbody>
</table>

## Resources & Further Reading

- [jQuery Selector Reference](https://api.jquery.com/category/selectors/)
- [jQuery Cheat Sheet Reference](http://overapi.com/jquery/)
- [jQuery Succinctly](http://weeklymirror.com.np/files/download/jQuery_Succinctly.pdf)
- [jQuery Basics](http://jqfundamentals.com/chapter/jquery-basics)
- [Try jQuery (Interactive)](http://try.jquery.com/)
