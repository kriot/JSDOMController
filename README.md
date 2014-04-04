JSDOMController
=====
This framework provides functions for creating, updating and getting values CSS and DOM. 

##How to use
###Get object
First you shold do is get an object for modifications. There are two ways to do it:

 * Selectors: 
   Write ```D(s)```, where s is a selector string. You can read more about selectors format here: http://www.w3.org/TR/CSS21/selector.html

 * An HTML object. If you have your object as "The HTML DOM Element Object" (for example, by getElementById), you can write down ```D(e)```, where e is your object.

###Use object
Now you use these functions:

 * ```css(attr)``` - returns the css property value of first of objects you chosen.
 * ```css(attr, val)``` - sets the css property value.
 * ```html()``` - returns inner HTML of first of objects you chosen.
 * ```html(val)``` - sets inner HTML to all objects you chosen.
 * ```attr(attr)``` - returns the attribute value of first of objects you chosen.
 * ```attr(attr, val)``` - sets the attribute
 * ```val()``` - returns the value (for input elements) of the first object.
 * ```val(val)``` - sets value to objects
 * ```Find(selector)``` - changes objects to objects that got by selector of each object.
 * ```Parent()``` - changes objects to  parent objects (parent for each one)
 * ```on(eventName, function)``` - add event listeners to each object
 * ```CreateChild(name)``` - create and returns a new child
 * ```Select(selector)``` - change selector
 * ```each(function)``` - applies the function to each object (in function this will be the object)

##Expamles
Look using.js and index.html to understand what code should looks like.
