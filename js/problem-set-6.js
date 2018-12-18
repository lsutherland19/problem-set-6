/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  let canvas1 = document.getElementById("canvas1");
  let context = canvas1.getContext("2d");
  context.font = "48px Helvetica";
  context.strokeText("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 bounds of the canvas: 1024 by 512
 while let if break

 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let canvas2 = document.getElementById("canvas2");
  let height = prompt("Please enter a valid height.");
  let width = prompt("Please enter a valid width.");
  let x = prompt("Please enter a valid x-coordinate.");
  let y = prompt("Please enter a valid y-coordinate.");

  while (true) {
    if (height >= 1) {
      break;
    }
  }

  while (true) {
    if (width >= 1) {
      break;
    }
  }

  while (true) {
    if (x >= 5) {
      break;
    }
  }

  while (true) {
    if (y >= 5) {
      break;
    }
  }

  let ctx = canvas2.getContext("2d");
  ctx.strokeRect(x, y, width, height);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
    let canvas3 = document.getElementById("canvas3");
    let color = prompt("Please choose a color.");
    let ctx = canvas3.getContext("2d");

switch(color) {
  case "black":
    ctx.fillStyle = "black";
    break;
  case "blue":
    ctx.fillStyle = "blue";
    break;
  case "green":
    ctx.fillStyle = "green";
    break;
  case "orange":
    ctx.fillStyle = "orange";
    break;
  case "purple":
    ctx.fillStyle = "purple";
    break;
  case "red":
    ctx.fillStyle = "red";
    break;
  case "yellow":
    ctx.fillStyle = "yellow";
    break;
  default:
    alert(color + " is not a supported color. Please try again.");
    break;
  }
    ctx.fillRect(10, 10, 100, 50);
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
REFERENCE: https://www.kirupa.com/html5/drawing_triangles_on_the_canvas.htm

 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
    let x = 10;
    let y = 10;
    let a; let b;  let c;
    let canvas = document.getElementById("canvas4");
    let ctxt = canvas.getContext("2d");
    ctxt.clearRect(0, 0, canvas.width, canvas.height);
    while(true){
  	a = Number(prompt("Enter the length of the first side."));
  	b = Number(prompt("Enter the length of the second side."));
  	c = Number(prompt("Enter the length of the third side."));
  	if(((a**2) + (b**2) == (c**2)) && a > 0 && b > 0 && c > 0 && canvas.width - x - a >= 0 && canvas.height - y - b >= 0){
  		break;
  	}else{
  		alert("The lengths you entered will not create a valid triangle. Please reenter the lengths.")
  	}
    }

   ctxt.beginPath();
   ctxt.moveTo(x,y);
   ctxt.lineTo(x,y + a);
   ctxt.stroke();

   ctxt.beginPath();
   ctxt.moveTo(x, y + a);
   ctxt.lineTo(x + b, y + a);
   ctxt.stroke();

   ctxt.beginPath();
   ctxt.moveTo(x,y);
   ctxt.lineTo(x + b, y + a);
   ctxt.stroke();

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let radius;
  let canvas = document.getElementById('canvas5');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	while(true){
		radius = Number(prompt("Please enter the radius of the head."));
		if(radius >= 1 && radius <= canvas.width && Number.isInteger(radius)){
			break;
		}
	}
  let x = canvas.width;
  let y = canvas.height;
  let eyeRadius = radius * .1
  let mouthRadius = radius * .7
  ctx.beginPath();
  ctx.arc(x / 2, y / 2, radius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x / 2 - radius / 3, y / 2 - radius / 4, eyeRadius,0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x / 2 + radius / 3, y / 2 - radius / 4, eyeRadius,0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x / 2, y / 2, mouthRadius,0, Math.PI);
  ctx.stroke();
  }

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The centerStop of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
	let canv = document.getElementById("canvas6");
	let ctxt = canv.getContext('2d');
	ctxt.clearRect(0, 0, canv.width, canv.height);

	let innerRadius;
	let outerRadius;
  let numPoints = 10;
	let ctrx = 125;
	let ctry = 125;
	let youtpoiny = [];
	let xoutpoint = [];
	let yinpoint = [];
	let xinpoint = [];
	let draw = false;

	outerRadius = Number(prompt("Please enter the outer radius of the star."));
	innerRadius = Number(prompt("Please enter the inner radius of the star."));
	numPoints = Number(prompt("Please enter the number of points."));

	if(outerRadius >=innerRadius && canv.width >= outerRadius + 125 &&
		canv.height >= outerRadius + 125 && innerRadius>=1 && outerRadius>=1) {
		draw = true;
	}
	else{alert("You entered an invalid input. Please try again.");}

	for (let i=0;i<numPoints;i++) {
		xoutpoint.push(ctrx + outerRadius * (Math.cos(Math.PI * 2 * i/numPoints - Math.PI / 2)));
		youtpoiny.push(ctry + outerRadius * (Math.sin(Math.PI * 2 * i / numPoints - Math.PI / 2)));
		xinpoint.push(ctrx + innerRadius * (Math.cos(Math.PI * 2 * i / numPoints + Math.PI / numPoints - Math.PI / 2)));
		yinpoint.push(ctry + innerRadius * (Math.sin(Math.PI * 2 * i / numPoints + Math.PI / numPoints - Math.PI / 2)));
	}

	if(draw) {
		ctxt.beginPath();
		ctxt.moveTo(xoutpoint[0], youtpoiny[0]);
		for(let j=0;j<numPoints;j++) {
			ctxt.lineTo(xinpoint[j], yinpoint[j]);
			ctxt.lineTo(xoutpoint[j+1], youtpoiny[j+1]);
		}
			ctxt.lineTo(xoutpoint[0], youtpoiny[0]);
			ctxt.closePath();
			ctxt.stroke();
	}
}


/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the centerStop of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
    let canvas = document.getElementById('canvas7');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let sideLength = 80;
    let centerStop = [10+(sideLength)/2+sideLength/Math.sqrt(2), 10+(sideLength/2)+(sideLength/Math.sqrt(2))]
    console.log(centerStop)
    let points = 8;
    let pointx = [];
    let pointy = [];

    for(let i = 0;i<points;i++){
      pointx.push(Math.cos(((Math.PI * 2 * i) / points) - Math.PI / 8) * 100 + centerStop[0]);
      pointy.push(Math.sin(((Math.PI*2*i)/points)-Math.PI/8) * 100+centerStop[1]);
    }
    ctx.beginPath();
    ctx.moveTo([pointx][0], pointy[0]);
    for(let j = 0;j<pointx.length;j++){
      ctx.lineTo(pointx[j], pointy[j]);
    }
    ctx.lineTo(pointx[0], pointy[0]);
    ctx.stroke();

    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.font = "60px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("STOP", centerStop[0], centerStop[1] + 15);
    ctx.closePath()

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  const canv = document.getElementById("canvas8")
  	const ctxt = canv.getContext('2d');
  	ctxt.clearRect(0, 0, canv.width, canv.height);

  	let draw = false;
  	let base = 5;

  	let baseLength = Number(prompt("Please enter the base length of the pyramid."));
  	if (baseLength * base + 10 <= canv.width && baseLength*base + 10 <= canv.height && baseLength >= 1) {
  		draw = true;
  		console.log("true");
  	}
  	else {alert("You entered an invalid input, try again!");}

    if(draw) {
      let k = 1;
      let m = 0;
      for(let i = base - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
          ctxt.strokeRect((10 + baseLength * j + m), canv.height - (10 + baseLength * k), baseLength, baseLength);
        }
        k++;
        m += .5 * baseLength;
      }
    }
  }


/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
    let canvas = document.getElementById('canvas9');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    while(true){
    doorColor = prompt(" Please enter a door color.");
    houseColor = prompt("Please enter a house color.");
    if((doorColor=="brown" || doorColor=="blue" || doorColor=="green" || doorColor=="orange" || doorColor=="purple" || doorColor=="red" || doorColor=="yellow")
    && (houseColor=="brown" || houseColor=="blue" || houseColor=="green" || houseColor=="orange" || houseColor=="purple" || houseColor=="red" || houseColor=="yellow")) {
      break;
    }
    else{
        alert("One of the colors you entered wasn't valid, try again!")
    }
  }
  let x = 150;
  let houseLength = 500;
  let houseHeight = 400;
  let y = canvas.height-houseHeight-10;
  ctx.beginPath();
  ctx.fillStyle = houseColor;
  ctx.fillRect(x,y,houseLength,houseHeight);
  ctx.fillStyle = doorColor;
  ctx.fillRect(x+(houseLength/2)-30,y+300,60,100);
  ctx.fillStyle="gray";
  ctx.moveTo(x,y);
  ctx.lineTo(x+286,150);
  ctx.lineTo(x+houseLength,y);
  ctx.lineTo(x,y);
  ctx.fill();
  ctx.fillStyle="#ADD8E6";
  ctx.fillRect(300,y+100, 50, 50);
  ctx.fillRect(526,y+100, 50, 50);
  ctx.fillRect(300,y+200, 50, 50);
  ctx.fillRect(526,y+200, 50, 50);
  ctx.closePath();

}
