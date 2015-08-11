# Class class

## What are classes?

Classes are language constructs that allow the generation of objects that inherit a common suite of traits and abilities as defined upon the class. They serve as a kind of template, defining inheritance, and making the construction of new objects easily repeatable. Classes also provide an organizational principal to separate concerns and encapsulate related functionality into testable, understandable blocks.

## Getters and setters

Getters and setters are methods defined on a class or object that allow the external environment to inspect or modify properties of an object. Due to the scoping constraints of Ruby, they are necessary to access the private, internal state of an object. The scoping constraints that Ruby provides are useful themselves because they prevent undesirable side effects from impacting a program's behavior, and enforce expected patterns of internal and external communication to reduce the surface area of potential error.

## Object inheritance in Ruby

Classes, as mentioned above, serve as a kind of template to define their descendant objects. Objects implicitly or explicitly descend from their constructor class, sharing common traits, and perhaps learning new ones as defined by the program at time of instatiation.

Each descendant derived from an ancestor will take on its ancestor's properties. A program must include a method override, or literally rewrite a property or method on the descendant object, in order to change an otherwise inherited trait.

The `splat` argument syntax, defined as `method_name(*argument_name)`, provides a mechanism for accepting an unlimited number of arguments at method invocation. This set of arguments passed is quite similar to the `arguments` property found in JavaScript, wherein a JavaScript function's arguments is expressed as an array-like object behind the scenes. In Ruby, so-called 'splat-arguments' must be iterated over as an array in order to be accessed.