# Backbone Models

Guys, here is a link to my feeble attempts to build models with Backbone.js: 

[https://github.com/timrourke/SinatraBackboneBoilerplate](https://github.com/timrourke/SinatraBackboneBoilerplate)

I'm still struggling to make sense out of Backbone as a whole. I find that the online documentation is not at all good, and there doesn't seem to be much in the way of recent activity in the JS world around Backbone as a framework. Researching it is a bit like trying to learn about Sinatra. The core docs are totally useless, and there isn't much in the way of a current community, it seems.

Are there good resources out there with up-to-date guides on how to implement Backbone's guiding principles?

## Collections

My poorly formed thought about collections is that they are literally a contstruct of multiple instances of models. The semantic and idiomatic differences are not at all clear to me within the framework, however. I would appreciate more explanation about how the Backbone API changes when dealing with single vs. multiple instances of a data object.

I can say that I would use the Backbone.Model.extend({}) or Backbone.Collection.extend({}) functions to create a new instance of each, but I don't think I could explain to anyone why precisely Backbone organizes things the way it does.

Backbone is seemingly so unopinionated about data management and application achitecture that there's basically zero DSL, just a collection of AJAX helpers and DOM manipulation tools. I guess I can see an upside about the flexibility aspects of that, but I'm not sure this would be a go-to tool for me in production? Mostly I don't think I understand it, must be dumb.