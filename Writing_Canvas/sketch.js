let pixel_array
let clearButton, submitButton

function setup() {
	createCanvas(280, 280);
	background(0);
	// Create a variable to store the current mouse position
	let mouseX = 0;
	let mouseY = 0;

	// Clear button
	clearButton = select("#clear");
	// console.log(clearButton);
	clearButton.mousePressed(clearCanvas);


	// Submit button
	submitButton = select("#submit");
	submitButton.mousePressed(submitData);

	pixel_array = new Array(28);

	for (let i = 0; i < 28; i++) {
		pixel_array[ i ] = new Array(28).fill(0);
	}

	console.log(pixel_array);
}

function draw() {
	// Display the current mouse position
	textSize(12);
	fill(0);
}

function mouseDragged() {
	// Add a mouseMoved event listener to draw a pixel at the current mouse position
	fill(255);
	rect(mouseX - mouseX % 10, mouseY - mouseY % 10, 10, 10);
	pixel_array[ Math.floor(mouseY / 10) ][ Math.floor(mouseX / 10) ] = 1
	// console.log(pixel_array);	
	redraw();
}


function clearCanvas() {
	// Clear the canvas and reset the pixel_array
	console.log('Clear')
	pixel_array = new Array(28);

	for (let i = 0; i < 28; i++) {
		pixel_array[ i ] = new Array(28).fill(0);
	}
	setup() //this will clear the canvas
}

function submitData() {
	console.log(pixel_array)

}