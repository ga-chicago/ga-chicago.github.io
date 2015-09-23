# Why is Front End Optimization Important?
- reduce bandwidth usage
- site speed a ranking index in search results
- optimize user experience - frustration factor, more mobile now
  - 47% of user expect page load in less than 2 secs
  - 40% abandon site after 3 seconds

## How to load sites faster
- All assets are extra page http request
    - about 6 assets from a single source
    - use 2-5 hosts
    - CDNs are faster, optimized (risk)
- Combine JS & CSS files
- Reduce @import (download one at a time)
- Image sprites (say what?)
  - SpriteMe.org http://www.spriteme.org/

## Minification
- YUI Compressor JS & CS http://yui.github.com/yuicompressor/
- Google Closure Compiler JS https://developers.google.com/closure/compiler/
- UglifyJS https://github.com/mishoo/UglifyJS
- CodeKit CSS http://incident57.com/codekit/
- HTML Minifier HTML http://kangax.github.com/html-minifier/

## Gzip compression
- finds repeated strings and temp replaces them with other code to make files smaller
  - targets white space, tags, styles
  - can reduce size up to 70%
  - GZip.org http://www.gzip.org/

## Image Compression
- jpeg good for photos(quality=size)
  - 60-80% compression is usually good
- gif use for small images with only a few colors
- png supports transparency well and can be better optimized
- svg complete scalability, sometimes loads slower because html has to draw the image in the browser. technically text based so can be gzipped
- Image Tools
  - tinypng.org http://tinypng.org/
  - codekit - jpg & png http://incident57.com/codekit/
  - imageoptim.com http://imageoptim.com/
- Progressive Compression
  - rough image to sharp image
  - perceived load better exp for users
  - can be done in PS by using save for web

## Boost JS & CSS Perf
- List JS resources at end of page (right before closing body tag)
- interupts parallel loading process
- allows visibile elements to be loaded first
- Asynchronus Loaders
  - allow loading for only part of JS (jquery)
  - RequireJS http://requirejs.org/
  - LABjs http://labjs.com/
  - YepNope.js http://yepnopejs.com/
-List CSS at head of doc
  - avoid uneccessary repaint of reload of page
  - DOM house of cards (parent-child)
    - targetting specific child elements instead of parent in CSS

## Prefectching
- Browser can download resources ahead of time (like downloading the usual next page)
- DNS
- Page
- Prerendering
- Don't prefetch too much!

## Optimize caching
- caching stores resources in temp local location
- much faster than a request
- browser caching
  html5boilerplate.com https://github.com/h5bp/html5-boilerplate/blob/master/.htaccess
- works best with static files
- update cached files!

## Analyze Performance
- Google Page Speed Tools https://developers.google.com/speed/
- Google SpeedTracer (has chrome ext) https://developers.google.com/web-toolkit/speedtracer/
- Dev Tools
  - Network tab
  - Profile tab

## Task Managers
- Gulp & Grunt
