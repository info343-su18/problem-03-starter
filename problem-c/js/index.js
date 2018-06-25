'use strict';

/* Get a reference to the drawing context. Do not modify! */
const canvas = document.getElementById('canvas'); //reference the canvas element
const brush = canvas.getContext('2d'); //the drawing context

//color the background
brush.fillStyle = '#000051'; //deep blue
brush.fillRect(0, 0, canvas.width, canvas.height); //fill the canvas

/* your code goes here! */


//Assign the brush a `fillStyle` of '#3d5afe' (the "body color" for the rocket)


//Draw the "body" of the rocket: a filled in rectangle with an upper-left corner
//at (192,143), a width of 116px, and a height of 230px



//Draw the "engine" of the rocket: a filled-in rectangle (color of '#ffab40') 
//with a width of 80 and a height of 35. The engine should centered with the 
//rocket body, but be positioned 2px below the _bottom_ of the rocket body (you
//will need to do some math to determine the x,y coordinates!)



//Draw the "nose cone" at the top of the rocket, a filled in triangle colored
//'#64ffda'. The triangle should have corners at:
//  (192,141), (250,45), and (308,141)
//You will need to use `beginPath()` to start the path, `moveTo()` to move the
//brush to a starting location, and `lineTo()` to draw a line the next corner.
//Remember to call `fill()` in order to actually draw the path after it's made!



//Draw TWO "windows" on the rocket. Windows are circles with a fill color of
//'#ffab40'. They should have an outline (`strokeStyle`) of `'gray'` that has
//a `lineWidth` of 2 pixels.
//Each window has a radius of 20px; one is centered at (250, 180) and one at
//(250,230).
//  - You will need to begin a new path for EACH window!
//  - Use the `arc()` method to draw a complete arc (from an angle of 0 to 2 PI)
//  - don't forget to both `fill()` AND `stroke()` each circle to draw the fill
//    and the outline!



//Draw the "fins" on the sides of the rocket. These will be paths filled with 
//the same color as the nose cone.
//Instead of straight lines, the fins will be drawn with Bezier Curves
//(https://en.wikipedia.org/wiki/B%C3%A9zier_curve; scroll down for fun animations),
//which have a start point, end point, and two "control points".
//To draw the curves, `moveTo()` the start point, then use `.bezierCurveTo()` to 
//specify the control points and end point. 
//Each fin is made of TWO curves that are part of the same path (like two lines,
//but two curves).

//The first fin is defined by one curve with
//  - start point: (310,260)
//  - control point 1: (360,265)
//  - control point 2: (395,340)
//  - end point: (335,410)
//And a second curve with
//  - start point: end of the first curve (same path!)
//  - control point 1: (350,370)
//  - control point 2: (335,355)
//  - end point: (310,355)
//Remember to `fill()` the path when you're done!



//The second fin is defined by one curve with:
//  - start point: (190,260)
//  - control point 1: (140,265)
//  - control point 2: (105,340)
//  - end point: (165,410)
//And a second curve with
//  - start point: end of the first curve (same path!)
//  - control point 1: (150,370)
//  - control point 2: (165,355)
//  - end point: (190,355)
//Remember to `fill()` the path when you're done!



//Finally, make the rocket body look more like a cylinder. You will do this by
//making the `fillStyle` be a *linear gradient* 
//(https://www.w3schools.com/graphics/canvas_gradients.asp)
//
//At the TOP of your code (before you draw the rocket body!), create a variable 
//for the gradient by calling the brush's `createLinearGradient()` function.
//  - Your gradient should go from the upper-left to the upper-right corner of
//    the rocket body
//Add the following "stops" to the gradient:
//  - at 0% across, the color should be '#3d5afe' (the body color)
//  - at 22% across, the color should be '#5a72fe' (a lighter body color)
//  - at 40% across, the color should be `'white'`
//  - at 58% across, the color should be the lighter body color again
//  - at 100 across, the color should be the body color again
//Assign the gradient as the `fillStyle` before you draw the rocket body to 
//complete this step


//Make canvas available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  module.exports.canvas = canvas;
}